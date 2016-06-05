//####################################### UTITILY GLOBALS THAT I FEEL VERY BAD ABOUT ##################################################

//Kind of seems like there should be a status object to poll without cluttering up the global space, right?
//I mean apart from there being nothing in the global space except a exaltedTutorial object ;)

var currentRetryPenalty = 0;  //refactor target, most similar stuff has been made character-local.

var currentCombat = getEmptyCombat();  //This should mean the combat tracker can be safely updated if, for example, the PC takes health level damage outside combat.

var currentSocialCombat = getEmptySocialCombat(); //Similarly for social combat

var currentSegmentKey = 0;  //We use this for save/loading.

var currentCombatSegmentIndex = 0; //This is also just for save/load

var currentCombatSegmentAction = ""; //This too is just save/load

var currentDVDerivationString = ""; //This will populate a dialogue hooked up by the *dice roller*, so I want it to be painfully generic.  Hence crappy global.

var currentGameMode = GAME_MODE_SEGMENT;

var flags = {};

var pageHistory = new Array();

flags[FLAG_HISTORY_STARTED] = false;

flags[FLAG_ATTRIBUTES_VISIBLE] = true;
flags[FLAG_ABILITIES_VISIBLE] = true;
flags[FLAG_ADVANTAGES_1_VISIBLE] = true;
flags[FLAG_ADVANTAGES_2_VISIBLE] = true;
flags[FLAG_ADVANTAGES_EXALTED_VISIBLE] = true;

//####################################### WILLPOWER FUNCTIONS ##################################################

function spendTempTrait(tempTrait, character) {

    //Willpower and Virtue Channels mostly.

    if (character[tempTrait] > 0) {

        character[tempTrait] -= 1;

        if (character.key == COMBATANT_KEY_PC) {

            fillCharacterSheetFromCharacter(character);

        }

        fillTrackers();
        
        return true;

    }

    return false;
}


function spendTempTraitMultiple(tempTrait, character, magnitude) {

    var i;

    for (i = 0; i < magnitude; i++) {

        if (!spendTempTrait(tempTrait, character)) {
        
            return false;

        }        

    }

    return true;
}

function spendWPForBonusSuccess(character) {

    //Returns an object that can be passed as an argument to the dice roller

    if (spendTempTrait(CONSTANT_TRAIT_WILLPOWER_CURRENT, character)) {

        return {

            type: CONSTANT_SUCCESS_BONUS,
            label: "Willpower",
            magnitude: 1

        };

    }

    return {

        type: CONSTANT_BONUS_INVALID,
        label: "Willpower",
        magnitude: 0

    };
}

function channelVirtueForDice(virtueTrait, virtueTempTrait, virtueTraitLabel, character) {

    //Returns an object that can be passed as an argument to the dice roller

    if (spendTempTrait(CONSTANT_TRAIT_WILLPOWER_CURRENT, character)) {

        if (spendTempTrait(virtueTempTrait, character)) {

            return {

                type: CONSTANT_MUNDANE_BONUS,
                label: virtueTraitLabel,
                magnitude: character[virtueTrait]

            }

        } else {

        restoreTempTrait(CONSTANT_TRAIT_WILLPOWER_CURRENT, 1, character);  //Since we spent a point before checking to see if we had a virtue channel left.

        }

    }


    return {

        type: CONSTANT_BONUS_INVALID,
        label: "Virtue",
        magnitude: 0

    };
}


function restoreTempTrait(tempTrait, magnitude, character) {

    //Willpower and Virtue Channels, generally

    character[tempTrait] += magnitude;

    if (tempTrait == CONSTANT_TRAIT_WILLPOWER_CURRENT) {

        if (character[tempTrait] > CONSTANT_TRAIT_LARGE) {

            character[tempTrait] = CONSTANT_TRAIT_LARGE;

        }

    } else {

        if (character[tempTrait] > CONSTANT_TRAIT_MAX_RATING) {

            character[tempTrait] = CONSTANT_TRAIT_MAX_RATING;

        }

    }

    if (character.key == COMBATANT_KEY_PC) {

        fillCharacterSheetFromCharacter(character);

    }

    fillTrackers();

    return character[tempTrait];

}


function getWPSpendAsBonus(character, willpowerObject) {

    //Returns an object that can be passed as an argument to the dice roller

    if (willpowerObject.type == CONSTANT_WP_AUTO_SUCCESS) {

        return spendWPForBonusSuccess(character);

    }

    if (willpowerObject.type == CONSTANT_WP_VIRTUE_CHANNEL) {

        return channelVirtueForDice(virtueLibrary[willpowerObject.virtue].trait, virtueLibrary[willpowerObject.virtue].tempTrait, virtueLibrary[willpowerObject.virtue].label, character);  

    } 
    
    return {

            type: CONSTANT_BONUS_INVALID,
            label: "Willpower",
            magnitude: 0

    }

}


//####################################### GENERIC UTITILY FUNCTIONS ##################################################

function stopDefault(event) {

    //This is useful for links and such but most of the time we actually just use clickable divs

    if (event.preventDefault) {

        event.preventDefault();

    } else {

        event.returnValue = false;

    }

}


function clearBonusesAndPenalties() {

    //There's a handful of values that might persist or increment over several rolls and then stop for whatever reason.  This clears them.
    //Well, now it's just the retry penalty.  Refactor this out of existence somehow.

    currentRetryPenalty = 0;

}

function getRetryPenalty() {

    //Returns an object that can be passed as an argument to the dice roller

    if (currentRetryPenalty > 0) {

        return {

            type: CONSTANT_EXTERNAL_PENALTY,
            label: "Retry penalty",
            magnitude: currentRetryPenalty

        };


    }


    return {

        type: CONSTANT_BONUS_INVALID,
        label: "Retry penalty",
        magnitude: currentRetryPenalty

    };



}


function getStuntRewardTextFromStuntReward(stuntReward) {

    //This won't work if a stunt rewards both motes and willpower

    if (stuntReward.willpower && stuntReward.willpower > 0) {

        return stuntReward.willpower + " Willpower point";

    }

    if (stuntReward.motes && stuntReward.motes > 0) {

        return stuntReward.motes + " motes";

    }

    return "0 Willpower points";


}


function rewardStunt(character) {

    //the complexity here is mostly deciding on the reward.  Note all this breaks Exalted rules a little because we're not using gimped stunts for HM (and hence not having any HMs but Sakuya stunt)

    var preferredReward = STUNT_REWARD_MOTES; //used to be a parameter.  Now I'm not sure where the selection UI would go, and WP seems like less of a big deal in combat in 2.5 anyway.

    var stunt = character[CONSTANT_CHARACTER_BEST_STUNT];

    var stuntReward = {

        motes: 0,
        willpower: 0

    };

    character[CONSTANT_CHARACTER_BEST_STUNT] = 0;
    character[CONSTANT_CHARACTER_CURRENT_STUNT] = 0;

    if (character[CONSTANT_TRAIT_EXALTED]) {

        if (preferredReward == STUNT_REWARD_MOTES) {

            if (character.getMoteHeadroom() >= (stunt * 2) || stunt == 1) {

                character.restoreMotes((stunt * 2), PREFERRED_POOL_ANY);
                stuntReward.motes = stunt * 2;

            } else {

                if (stunt > 1) {

                    restoreTempTrait(CONSTANT_TRAIT_WILLPOWER_CURRENT, 1, character);
                    stuntReward.willpower = 1;

                }

            }

        }

        if (preferredReward == STUNT_REWARD_WILLPOWER) {

            if (stunt > 1 && character[CONSTANT_TRAIT_WILLPOWER_CURRENT] < character[CONSTANT_TRAIT_WILLPOWER]) {

                restoreTempTrait(CONSTANT_TRAIT_WILLPOWER_CURRENT, 1, character);
                stuntReward.willpower = 1;

            } else {

                if (character.getMoteHeadroom() >= (stunt * 2) || stunt == 1) {

                    character.restoreMotes((stunt * 2), PREFERRED_POOL_ANY);
                    stuntReward.motes = stunt * 2;

                }

            }
        }

    } else {

        if (stunt > 1) {

            restoreTempTrait(CONSTANT_TRAIT_WILLPOWER_CURRENT, 1, character);
            stuntReward.willpower = 1;

        }

    }

    if (character.key == COMBATANT_KEY_PC) {

        fillCharacterSheetFromCharacter(currentPC);

    }

    fillTrackers();

    return stuntReward;
}


//######################################### CONTENT FUNCTIONS ########################################################


function processSegmentObject(segmentObject) {

    //This is the thing what makes words visible to the user :)
    //Segment objects have the "Response", which is in-character text, "ActionText" which is actually all OOC text, and "Actions" which are basically buttons
    //I've since added a more strutured form for stunts/wp/charms to go with actions, which is bulking out this function a bit.

    //The first bit is logging whatever's there currently to the history object

    if (flags[FLAG_HISTORY_STARTED]) {

        pageHistory.push({

            timeStamp: Date(),
            response: $("#currentResponse").html(),
            actionText: $("#currentActions").html()

        });

        $("#historyGlossaryMenu").show();

    } else {

        //There's not going to be anything there, but there will be next time.
        flags[FLAG_HISTORY_STARTED] = true;

    }

    var i;

    var j;

    var tempHTML = "";

    var tempFunction;

    currentSegmentKey = segmentObject.key;

    if (segmentObject.currentResponse) {

        $("#currentResponse").show();
        $("#currentResponse").html(segmentObject.currentResponseHTML);

    } else {

        $("#currentResponse").hide();

    }

    if (segmentObject.currentActionText) {

        $("#currentActions").show();
        $("#currentActions").html(segmentObject.currentActionHTML);

    }

    if (segmentObject.actionDiceRoll) {

        tempHTML = getActionOptionsUIFromSegmentObject(segmentObject);

        $("#currentActions").append(tempHTML);


    }

    for (i = 0; i < segmentObject.actions.length; i++) {

        $("#currentActions").append("<div class=\"segmentAction\" id=\"" + segmentObject.actions[i].id + "\">" + segmentObject.actions[i].value + "</div>");

        tempFunction = getFunctionByKey(segmentObject.actions[i].functionKey);

        tempFunction.segmentObject = segmentObject;  //This means a function firing from an action button can access the segmentObject with arguments.callee.segmentObject.  This is better than a "currentSegmentObject" global!

        $("#" + segmentObject.actions[i].id).click(tempFunction);

    }

    //The following are looking for stuff that the combat and social combats mash into the object, to then invoke the functions that hook up click events etc.

    if (segmentObject.pcCombatOptions) {

        $("#pcActionOptionsTarget").html(segmentObject.pcCombatOptionsHTML);
        hookUpPCCombatOptions();
        hookUpPCSocialOptions();

    }

    if (segmentObject.pcFlurryOptions) {

        $("#pcActionOptionsTarget").html(segmentObject.pcFlurryOptionsHTML);
        hookUpPCFlurryOptions();

    }

    if (segmentObject.pcSocialFlurryOptions) {

        $("#pcActionOptionsTarget").html(segmentObject.pcFlurryOptionsHTML);
        hookUpPCSocialFlurryOptions();

    }

    fillTrackers();
    fillCharacterSheetFromCharacter(currentPC);

    $('html, body').animate({ scrollTop: 0 }, 0);  //scroll to top

}



function getActionOptionsUIFromSegmentObject(segmentObject) {

    var tempHTML = "";

    var idPrefix = "action";

    var i;

    if (segmentObject.actionCharms) {

        for (i = 0; i < segmentObject.actionCharms.length; i++) {

            if (currentPC.hasCharm(segmentObject.actionCharms[i])) {

                tempHTML += "<div class=\"actionOption\" id=\"actionOptionCharm" + i + "\"><p><input type=\"checkbox\" name=\"" + idPrefix + "Charm" + i + "\" value=\"true\" id=\"" + idPrefix + "Charm" + i + "\"> <strong>" + charmLibrary[segmentObject.actionCharms[i]].label + " </strong> (" + charmLibrary[segmentObject.actionCharms[i]].type + ", " + charmLibrary[segmentObject.actionCharms[i]].duration + ", " + charmLibrary[segmentObject.actionCharms[i]].costLabel + "): " + charmLibrary[segmentObject.actionCharms[i]].shortDescription + "<input type=\"hidden\" id=\"" + idPrefix + "CharmKey" + i + "\ value=\"" + segmentObject.actionCharms[i] + "\" /></p>";

                if (charmLibrary[segmentObject.actionCharms[i]].excellency) {

                    tempHTML += "<p>Spend <select id=\"" + idPrefix + "CharmMotes" + i + "\">";

                    for (j = 0; j < getDiceCapFromPool(currentPC, { attribute: segmentObject.actionAttribute, ability: segmentObject.actionAbility, specialty: segmentObject.actionSpecialty }); j++) {

                        tempHTML += "<option value=\"" + (j + 1) + "\">" + (j + 1) + "</option>";

                    }

                    tempHTML += "</select> motes</p>";

                }

                tempHTML += "<p>From: <input type=\"radio\" name=\"" + idPrefix + "CharmPool" + i + "\" value=\"" + PREFERRED_POOL_ANY + "\" checked=\"checked\"> Either Pool &nbsp; <input type=\"radio\" name=\"" + idPrefix + "CharmPool" + i + "\" value=\"" + PREFERRED_POOL_PERSONAL_FIRST + "\"> Personal &nbsp; <input type=\"radio\" name=\"" + idPrefix + "CharmPool" + i + "\" value=\"" + PREFERRED_POOL_PERIPHERAL_FIRST + "\"> Peripheral &nbsp;</p></div>";

            }

        }

    }

    if (segmentObject.actionStunts && segmentObject.actionStunts.length > 0) {

        tempHTML += "<div class=\"actionOption\" id=\"actionOptionStunt\"><p><strong>Stunt:</strong></p><p><ul>";

        tempHTML += "<li><input type=\"radio\" name=\"" + idPrefix + "StuntRadio\" value=\"0\" checked=\"checked\"> &quot;I perform the action.&quot;</li>";

        for (i = 0; i < segmentObject.actionStunts.length; i++) {

            if (i < CONSTANT_MAX_STUNTS) {

                tempHTML += "<li><input type=\"radio\" name=\"" + idPrefix + "StuntRadio\" value=\"" + segmentObject.actionStunts[i].rating + "\"> " + segmentObject.actionStunts[i].text + "</li>";

            }

        }

        tempHTML += "</ul></p>";

        /*if (currentPC[CONSTANT_TRAIT_EXALTED]) {  //We're not doing this in combat, so we're currently not doing it out of combat.

            tempHTML += "<p>Preferred Stunt Reward: <input type=\"radio\" name=\"" + idPrefix + "StuntReward\" value=\"" + STUNT_REWARD_MOTES + "\" checked=\"checked\"> Motes of Essence &nbsp; <input type=\"radio\" name=\"" + idPrefix + "StuntReward\" value=\"" + STUNT_REWARD_WILLPOWER + "\"> Willpower point</p>";

        }*/

        tempHTML += "</div>";

        tempHTML += "<div class=\"actionOption\" id=\"actionOptionWillpower\"><p><input type=\"checkbox\" name=\"" + idPrefix + "SpendWillpower\" value=\"true\" id=\"" + idPrefix + "SpendWillpower\"> <strong>Spend Willpower</strong> &nbsp; <input type=\"radio\" name=\"" + idPrefix + "WPSpendRadio\" value=\"" + CONSTANT_WP_AUTO_SUCCESS + "\" checked=\"checked\"> for +1 success";

        if (segmentObject.validVirtues && segmentObject.validVirtues.length > 0 && characterHasChannels(currentPC, segmentObject.validVirtues)) {

            tempHTML += "&nbsp; <input type=\"radio\" name=\"" + idPrefix + "WPSpendRadio\" value=\"" + CONSTANT_WP_VIRTUE_CHANNEL + "\"> to activate <select id=\"" + idPrefix + "ChanneledVirtue\">";

            for (i = 0; i < segmentObject.validVirtues.length; i++) {

                if (characterHasChannels(currentPC, [segmentObject.validVirtues[i]])) {

                    tempHTML += "<option value=\"" + segmentObject.validVirtues[i] + "\">" + virtueLibrary[segmentObject.validVirtues[i]].label + " (" + currentPC[virtueLibrary[segmentObject.validVirtues[i]].trait] + " dots " + currentPC[virtueLibrary[segmentObject.validVirtues[i]].tempTrait] + " boxes)</option>";

                }

            }

            tempHTML += "</select></p>";

        }

        tempHTML += "</div>";


    }


    return tempHTML;

}

function getSelectedActionOptions() {

    var i;

    var returnObject = {};

    //Willpower

    var willpower = {

        type: CONSTANT_WP_NONE

    };

    if ($("input:checkbox[name=actionSpendWillpower]:checked").val() === "true") {

        willpower = {

            type: $("input:radio[name=actionWPSpendRadio]:checked").val(),
            virtue: $("#actionChanneledVirtue").val()

        };

    }

    returnObject.willpower = willpower;

    //Stunt

    var preferredReward = STUNT_REWARD_WILLPOWER;

    if (currentPC[CONSTANT_TRAIT_EXALTED] && $("input:radio[name=actionStuntReward]:checked").val()) {

        preferredReward = $("input:radio[name=actionStuntReward]:checked").val();

    }

    returnObject.preferredReward = preferredReward;

    returnObject.stuntRating = 0;

    if ($("input:radio[name=actionStuntRadio]:checked").val()) {

        returnObject.stuntRating = parseInt($("input:radio[name=actionStuntRadio]:checked").val());

    }


    //Charms

    for (i = 0; i < CONSTANT_ACTION_OPTION_CHARMS_MAX; i++) {

        if ($("input:checkbox[name=actionCharm" + i + "]:checked").val() === "true") {

            returnObject["charm" + i] = {

                key: $("#actionCharmKey" + i).val(),
                motes: $("#actionCharmMotes" + i).val(),
                preferredPool: $("input:radio[name=actionCharmPool" + i + "]:checked").val()

            }

        }

    }

    return returnObject;

}

function getSelectedExcellencyFromOptionsObject(optionsObject) {

    var i;

    for (i = 0; i < CONSTANT_ACTION_OPTION_CHARMS_MAX; i++) {

        if (optionsObject["charm" + i]) {

            if (charmLibrary[optionsObject["charm" + i].key].excellency) {

                return optionsObject["charm" + i];

            }

        }

    }

    return false;

}

function getOptionsObjectHasCharm(optionsObject, charmKey) {

    var i;

    for (i = 0; i < CONSTANT_ACTION_OPTION_CHARMS_MAX; i++) {

        if (optionsObject["charm" + i]) {

            if (optionsObject["charm" + i].key === charmKey) {

                return true;

            }

        }

    }

    return false;

}

function getCharmParamsFromOptionsObject(optionsObject, charmKey) {

    var i;

    for (i = 0; i < CONSTANT_ACTION_OPTION_CHARMS_MAX; i++) {

        if (optionsObject["charm" + i]) {

            if (optionsObject["charm" + i].key === charmKey) {

                return optionsObject["charm" + i];

            }

        }

    }

    return false;

}


 function activateCharmsFromOptionsObject(optionsObject, character) {

    var i;

    var bonusArray = new Array();

    for (i = 0; i < CONSTANT_ACTION_OPTION_CHARMS_MAX; i++) {

        if (optionsObject["charm" + i]) {

            bonusArray.push(activateCharmForBonus(character, optionsObject["charm" + i].key, optionsObject["charm" + i].preferredPool, optionsObject["charm" + i].actionPool, optionsObject["charm" + i].motes));

        }

    }

    return bonusArray;

}


function getExcellencyBonusFromBonusArray(bonusArray) {

    //Only finds first, so not useful in a situation where you're activating multiple excellencies for some reason.

    var i;

    for (i = 0; i < bonusArray.length; i++) {

        if (bonusArray[i].excellency) {

            return bonusArray[i];

        }

    }

    return {

        type: CONSTANT_BONUS_INVALID,
        magnitude: 0,
        label: "Charm"

    };

}

function getBuffBonusFromBonusArray(bonusArray) {

    //Only finds first, so not useful if you have multiple stacking buffs.

    var i;

    for (i = 0; i < bonusArray.length; i++) {

        if (bonusArray[i].buff) {

            return bonusArray[i];

        }

    }

    return {

        type: CONSTANT_BONUS_INVALID,
        magnitude: 0,
        label: "Charm"

    };

}

function getSpeedModifierFromBonusArray(bonusArray) {

    var speedBonus = 0;
    var speedPenalty = 0;

    var i;

    for (i = 0; i < bonusArray.length; i++) {

        if (bonusArray[i].type === CONSTANT_SPEED_REDUCTION) {

            speedBonus += bonusArray[i].magnitude;

        }

        if (bonusArray[i].type === CONSTANT_SPEED_INCREASE) {

            speedPenalty += bonusArray[i].magnitude;

        }

    }

    return speedPenalty - speedBonus;

}


//####################################### DICE ROLLER FUNCTIONS ##################################################

function simpleDiceRoll(diceToRoll, targetNumber, heroic) {

    //This is used when rolling invisibly to the player - generally for NPC rolls    

    var possibleBotch = false;

    var successes = 0;

    for (i = 0; i < diceToRoll; i++) {

        var rolledNumber = Math.floor(Math.random() * 10);

        if (rolledNumber == 1) {

            possibleBotch = true;

        }

        if (rolledNumber >= targetNumber && rolledNumber < 10) {

            successes += 1;

        }

        if (rolledNumber == 0 && heroic) {

            successes += 2;

        } else {

            if (rolledNumber == 0) {

                successes += 1;

            }

        }

    }


    if (successes == 0 && possibleBotch) {

        return CONSTANT_BOTCH;
    }

    return successes;

}



function rollDice(diceToRoll, targetNumber, heroic) {

    //This invokes the diceBox UI to show the roll

    var possibleBotch = false;

    var successes = 0;

    $("#diceBox").children().hide();

    for (i = 0; i < diceToRoll; i++) {

        var rolledNumber = Math.floor(Math.random() * 10);

        if (rolledNumber == 0 && !heroic) {

            $("#dice" + i).html("<img src=\"images/dice/" + rolledNumber + "_mortal.png\" />");

        } else {

            $("#dice" + i).html("<img src=\"images/dice/" + rolledNumber + ".png\" />");

        }

        $("#dice" + i).show();

        if (rolledNumber == 1) {

            possibleBotch = true;

        }

        if (rolledNumber >= targetNumber && rolledNumber < 10) {

            successes += 1;

        }

        if (rolledNumber == 0 && heroic) {

            successes += 2;

        } else {

            if (rolledNumber == 0) {

                successes += 1;

            }

        }

    }


    $("#successes").show();

    if (successes == 0 && possibleBotch) {

        $("#successes").html("Botch!");
        $("#diceBox").show("slow");
        return CONSTANT_BOTCH;
    }

    $("#successes").html("Rolled Successes: " + successes);

    $("#diceBox").show("slow");

    return successes;


}


function buildPoolAndRoll() {

    //This uses rollDice rather than simpleDiceRoll and will thus show the UI.

    //This is the function which eats all those "Bonus" objects generated by other functions.

    $("#diceBox").children().hide();

    var difficulty = 1;
    var pool = 0;
    var essence = 0;
    var mundaneBonus = 0;
    var magicBonus = 0;
    var internalPenalty = 0;
    var woundPenalty = 0;
    var actionPenalty = 0;
    var magicPenalty = 0;
    var externalPenalty = 0;
    var successBonus = 0;

    var rolledSuccesses = 0;
    var threshold = 0;
    var totalSuccesses = 0;

    var targetNumber = 7;
    var heroic = true;

    //The *Strings are basically just labels for the various pool manipulations, which we collate as we iterate over the arguments

    var bonusStrings = new Array();
    var penaltyStrings = new Array();
    var bonusSuccessStrings = new Array();
    var externalPenaltiesStrings = new Array();

    for (i = 0; i < arguments.length; i++) {

        if (arguments[i].type === CONSTANT_DIFFICULTY) {

            difficulty = arguments[i].magnitude;

        }

        if (arguments[i].type === CONSTANT_ESSENCE) {

            essence = arguments[i].magnitude;

        }

        if (arguments[i].type === CONSTANT_TARGET_NUMBER) {

            targetNumber = arguments[i].magnitude;

        }
         
        if (arguments[i].type === CONSTANT_HEROIC) {  //It's actually a boolean

            heroic = arguments[i].magnitude;

        }

        if (arguments[i].type === CONSTANT_MUNDANE_BONUS) {

            mundaneBonus += arguments[i].magnitude;
            bonusStrings.push(arguments[i].magnitude + " (" + arguments[i].label + ")");

        }

        if (arguments[i].type === CONSTANT_MAGIC_BONUS) {

            magicBonus += arguments[i].magnitude;
            bonusStrings.push(arguments[i].magnitude + " (" + arguments[i].label + ")");

        }

        if (arguments[i].type === CONSTANT_SUCCESS_BONUS) {

            successBonus += arguments[i].magnitude;
            bonusSuccessStrings.push(arguments[i].magnitude + " (" + arguments[i].label + ")");

        }

        if (arguments[i].type === CONSTANT_INTERNAL_PENALTY) {

            internalPenalty += arguments[i].magnitude;
            penaltyStrings.push(arguments[i].magnitude + " (" + arguments[i].label + ")");

        }

        if (arguments[i].type === CONSTANT_MAGIC_PENALTY) {

            magicPenalty += arguments[i].magnitude;
            penaltyStrings.push(arguments[i].magnitude + " (" + arguments[i].label + ")");

        }

        if (arguments[i].type === CONSTANT_WOUND_PENALTY) {

            woundPenalty += arguments[i].magnitude;
            penaltyStrings.push(arguments[i].magnitude + " (" + arguments[i].label + ")");

        }

        if (arguments[i].type === CONSTANT_ACTION_PENALTY) {

            actionPenalty += arguments[i].magnitude;
            penaltyStrings.push(arguments[i].magnitude + " (" + arguments[i].label + ")");

        }

        if (arguments[i].type === CONSTANT_EXTERNAL_PENALTY) {   //DVs are of this type, which is technically sorta incorrect

            externalPenalty += arguments[i].magnitude;
            externalPenaltiesStrings.push(arguments[i].magnitude + " (" + arguments[i].label + ")");

        }
    }

    pool += mundaneBonus;           //Exalted specifies an order of operations for bonuses and penalties.  Technically we don't need it, but it doesn't hurt and may help later.
    pool -= internalPenalty;
    pool -= actionPenalty;
    pool -= woundPenalty;
    pool += magicBonus;
    pool -= magicPenalty;

    if ((pool < 1) && (essence > 1) && (mundaneBonus + magicBonus > 0)) {

        pool = essence - (woundPenalty + actionPenalty);

        if (pool < 0) {

            pool = 0;

        }

    }

    if (pool > 0) {

        rolledSuccesses = rollDice(pool, targetNumber, heroic);

    } else {

        $("#successes").show();

        $("#successes").html("Rolled Successes: 0");

        $("#diceBox").show("slow");


    }

    $("#diceWorking").show();
    $("#diceWorking").html("<strong>Rolling " + pool + " dice:</strong> " + bonusStrings.join(" + "));
    if (penaltyStrings.length > 0) {

        $("#diceWorking").append(" - " + penaltyStrings.join(" - "));

    }

    $("#difficulty").show();
    $("#difficulty").html("<strong>Against difficulty " + difficulty + "</strong>");


    if (rolledSuccesses >= 0) {

        totalSuccesses = rolledSuccesses + successBonus - externalPenalty;

    } else {

        totalSuccesses = successBonus - externalPenalty;

    }

    if (bonusSuccessStrings.length > 0 || externalPenaltiesStrings.length > 0) {

        $("#successWorking").show();
        var tempSign = "";
        if (successBonus - externalPenalty >= 0) {

            tempSign = "+";

        }
        $("#successWorking").html("<strong>" + tempSign + (successBonus - externalPenalty) + " successes:</strong>");

        if (bonusSuccessStrings.length > 0) {

            $("#successWorking").append(" + " + bonusSuccessStrings.join(" + "));

        }

        if (externalPenaltiesStrings.length > 0) {

            $("#successWorking").append(" - " + externalPenaltiesStrings.join(" - "));

        }

    }

    $("#threshold").show();

    hookUpDVDerivationDialogue();  //in combat.js, should fail gracefully if there isn't a DV to hook up

    threshold = totalSuccesses - difficulty;

    if (threshold >= 0) {

        $("#threshold").html("<strong>SUCCESS - Threshold " + threshold + "</strong> (" + totalSuccesses + " total successes vs difficulty " + difficulty + ")");

        return threshold;
    }

    if (rolledSuccesses == CONSTANT_BOTCH) {

        $("#threshold").html("<strong>FAILURE: BOTCH</strong>");

        return CONSTANT_BOTCH;

    }

    $("#threshold").html("<strong>FAILURE</strong> (" + totalSuccesses + " total successes vs difficulty " + difficulty + ")");

    return CONSTANT_FAILURE;



}


function rollWeaponDamage(character, target) {

    //I guess this is sort of a refugee from combat.js
    //Damage is an exception in that it's never a heroic roll

    var i;

    var targetNumber = 7;
    var heroic = false;

    var bonusStrings = new Array();
    var penaltyStrings = new Array();

    var minDamage = 1;
    var minDamageDone = false;

    var rolledSuccesses = 0;

    var pool = getEquippedBaseDamage(character);

    if (character[CONSTANT_TRAIT_WEAPON].overwhelming) {

        minDamage = character[CONSTANT_TRAIT_WEAPON].overwhelming;

    }

    bonusStrings.push(character[CONSTANT_TRAIT_STRENGTH] + " (Strength)");
    bonusStrings.push(character[CONSTANT_TRAIT_WEAPON].damage + " (Weapon Damage)");

    if (character[CONSTANT_CHARACTER_CURRENT_ACTION].bonuses) {

        var bonusArray = character[CONSTANT_CHARACTER_CURRENT_ACTION].bonuses

        for (i = 0; i < bonusArray.length; i++) {

            if (bonusArray[i].type === CONSTANT_DAMAGE_DICE_BONUS) {

                pool += bonusArray[i].magnitude;
                bonusStrings.push(bonusArray[i].magnitude + " (" + bonusArray[i].label + ")");

            }

        }

    }

    pool += character[CONSTANT_CHARACTER_CURRENT_ACTION].threshold;
    bonusStrings.push(character[CONSTANT_CHARACTER_CURRENT_ACTION].threshold + " (Attack successes)");

    if (character[CONSTANT_TRAIT_WEAPON].damageType == DAMAGE_TYPE_BASHING) {

        pool -= getArmouredBashingSoak(target);
        penaltyStrings.push(getArmouredBashingSoak(target) + " (Bashing Soak (" + target[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] + "))");

    }

    if (character[CONSTANT_TRAIT_WEAPON].damageType == DAMAGE_TYPE_LETHAL) {

        pool -= getArmouredLethalSoak(target);
        penaltyStrings.push(getArmouredLethalSoak(target) + " (Lethal Soak (" + target[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] + "))");

    }

    if (character[CONSTANT_TRAIT_WEAPON].damageType == DAMAGE_TYPE_AGGRAVATED) {

        pool -= getArmouredAggravatedSoak(target);
        penaltyStrings.push(getArmouredAggravatedSoak(target) + " (Aggravated Soak (" + target[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] + "))");

    }

    if (pool < minDamage) {

        minDamageDone = true;
        pool = minDamage;

    }

    

    if (target[CONSTANT_TRAIT_EXTRA]) {  //We don't roll damage against Extras, just divide the pool by 3

        $("#diceBox").children().hide();

        rolledSuccesses = Math.ceil(pool / 3);

        $("#diceWorking").show();

        $("#diceWorking").html("<strong>" + rolledSuccesses + " automatic levels of damage</strong>, derived from " + pool + " dice / 3: " + bonusStrings.join(" + "));
     

    } else {

        rolledSuccesses = rollDice(pool, targetNumber, heroic);

        $("#diceWorking").show();

        $("#diceWorking").html("<strong>Rolling " + pool + " dice:</strong> " + bonusStrings.join(" + "));

    }
    
    if (penaltyStrings.length > 0) {

       $("#diceWorking").append(" - " + penaltyStrings.join(" - "));

    }

    if (minDamageDone) {

       $("#diceWorking").append(" Minimum " + minDamage);

    }

    if (rolledSuccesses < 1) {

        $("#successes").html("Rolled Successes: 0");

    }

    return rolledSuccesses;

}


//####################################### SCENE FUNCTIONS ##################################################


function endScene() {

    var newAnimaLevel = getLowerAnimaLevel(currentPC[CONSTANT_CHARACTER_CURRENT_ANIMA]);

    currentPC[CONSTANT_CHARACTER_CURRENT_ANIMA] = newAnimaLevel.level;

    currentPC[CONSTANT_CHARACTER_PERIPHERAL_MOTES_THIS_SCENE] = newAnimaLevel.motes;

    clearBuffsWithDuration(currentPC, BUFF_DURATION_SCENE);


}


//####################################### HISTORY ##################################################


function checkHistoryResponse(responseText) {

    //Checks fail conditions, returns true if it doesn't find any

    if (!(responseText[0] === "<")) {  //ie not HTML formatted

        return false;

    }

    return true;

}

function checkHistoryActionText(actionText) {

    //Checks fail conditions, returns true if it doesn't find any

    if (!(actionText[0] === "<")) {  //ie not HTML formatted

        return false;

    }

    if (actionText.substring(12, 19) === "segment") {  //ie just a continue button

        return false;

    }
    
    return true;

}


function showHistory() {

    saveGame(SAVE_PREFIX_CACHE);

    $("#combatTracker").hide();
    $("#socialTracker").hide();
    $("#currentResponse").hide();
    $("#diceBox").hide();
    $("#currentActions").hide();

    $("#historyGlossaryMenu").hide();

    var i;

    var tempHTML;

    $("#history").html("");

    for (i = pageHistory.length - 1; i > -1; i -= 1) {

        tempHTML = "<div class=\"historySegment\">";

        if (checkHistoryResponse(pageHistory[i].response)) {

            tempHTML += "<div class=\"historyResponse\">" + pageHistory[i].response + "</div>";

        }

        if (checkHistoryActionText(pageHistory[i].actionText)) {

            tempHTML += "<div class=\"historyActions\">" + pageHistory[i].actionText + "</div>";

        }

        tempHTML += "<p><a href=\"#top\">Back to top</a> | <a href=\"#\" class=\"leaveHistoryLink\">Back to game</a></p>";

        tempHTML += "</div>";

        $("#history").append(tempHTML);
    }

    $(".segmentAction").hide();
    $(".actionOption").hide();

    $("#history").show();

    $(".leaveHistoryLink").click(function (event) {

        stopDefault(event);
        leaveHistory();

    });

}

function leaveHistory() {

    $("#history").hide();
    loadGame(SAVE_PREFIX_CACHE);

}


//####################################### GLOSSARY ##################################################

function showGlossary() {

    saveGame(SAVE_PREFIX_CACHE);

    $("#combatTracker").hide();
    $("#socialTracker").hide();
    $("#currentResponse").hide();
    $("#diceBox").hide();
    $("#currentActions").hide();

    $("#historyGlossaryMenu").hide();

    $("#glossary").show();

    $(".leaveGlossaryLink").click(function (event) {

        stopDefault(event);
        leaveGlossary();

    });

}

function leaveGlossary() {

    $("#glossary").hide();
    loadGame(SAVE_PREFIX_CACHE);

}


//####################################### SAVE/LOAD ##################################################


function saveGame(savePrefix) {

    //Saving is purely JSON based.  We could theoretically use something other than local storage, or a more sophisticated JSON structure to allow multiple save games or whatever,
    //but it's just a tutorial.  Save that stuff for ERG.

    //savePrefix allows multiple save games, which we're currently using to have an autosave/cached game for our own purposes as well as the player's save.

    localStorage.setItem('savedGame', "true");
    $("#load").show();

    localStorage.setItem(savePrefix + 'currentGameMode', currentGameMode);
    localStorage.setItem(savePrefix + 'currentPC', JSON.stringify(currentPC));
    localStorage.setItem(savePrefix + 'currentSegmentKey', currentSegmentKey);
    localStorage.setItem(savePrefix + 'currentCombatSegmentIndex', currentCombatSegmentIndex);
    localStorage.setItem(savePrefix + 'currentCombatSegmentAction', currentCombatSegmentAction);
    localStorage.setItem(savePrefix + 'currentDVDerivationString', currentDVDerivationString);
    localStorage.setItem(savePrefix + 'currentCombat', JSON.stringify(currentCombat));
    localStorage.setItem(savePrefix + 'currentSocialCombat', JSON.stringify(currentSocialCombat));
    localStorage.setItem(savePrefix + 'flags', JSON.stringify(flags));
    localStorage.setItem(savePrefix + 'history', JSON.stringify(pageHistory));

    if ($("#" + CONSTANT_HTML_ID_DICE_BOX).is(":visible")) {

        localStorage.setItem(savePrefix + 'diceBoxVisible', "true");
        localStorage.setItem(savePrefix + 'diceRollerHTML', $("#" + CONSTANT_HTML_ID_DICE_BOX).html());

    } else {

        localStorage.setItem(savePrefix + 'diceBoxVisible', "false");
        localStorage.setItem(savePrefix + 'diceRollerHTML', "");

    }

}

function loadGame(savePrefix) {

    //So having just saved a bunch of our stuff as JSON, we just parse it back into the same spot and go, right?
    //No, sadly >_<  Stringifying the JSON and parsing it back strips any functions on the object, and most of the objects we care about are loaded with functions
    //Hence we have to create new ones and then copy our saved values across, which is why this function is 10x bigger than the save function.


    var tempCombat;
    var tempSocialCombat;
    var tempCombatSegment;
    var tempCharacter;
    var tempBonusArray = new Array();
    var dvAdjustmentsString = "";
    var i;

    $("#" + CONSTANT_HTML_ID_DICE_BOX).hide();
    $("#combatTracker").hide();
    $("#socialTracker").hide();

    currentGameMode = localStorage.getItem(savePrefix + 'currentGameMode');

    currentPC = JSON.parse(localStorage.getItem(savePrefix + 'currentPC'));
    addCharacterFunctions(currentPC);
    
    currentPC.exalt = sakuya.exalt;  //Ah the hack it burns
    
    fillCharacterSheetFromCharacter(currentPC);

    flags = JSON.parse(localStorage.getItem(savePrefix + 'flags'));

    //We currently hide bits of the character sheet as soon as the app starts, and since loading now always does a page refresh...

    if (flags[FLAG_ATTRIBUTES_VISIBLE]) {

        $("#attributesHeader").show();
        $("#attributes").show();

    }

    if (flags[FLAG_ABILITIES_VISIBLE]) {

        $("#abilitiesHeader").show();
        $("#abilities").show();

    }

    if (flags[FLAG_ADVANTAGES_1_VISIBLE]) {

        $("#advantagesHeader").show();
        $("#advantages").show();

        $("#advantagesTier2").hide();

    }

    if (flags[FLAG_ADVANTAGES_2_VISIBLE]) {

        //Assume can only be true if FLAG_ADVANTAGES_1_VISIBLE is true

        $("#advantagesTier2").show();

    }

    if (flags[FLAG_ADVANTAGES_EXALTED_VISIBLE]) {

        $("#exaltedAdvantagesHeader").show();
        $("#exaltedAdvantages").show();

    }

    //Page history/log stuff

    pageHistory = JSON.parse(localStorage.getItem(savePrefix + 'history'));

    if (pageHistory.length > 0) {

        $("#historyGlossaryMenu").show();

    }

    currentCombatSegmentIndex = parseInt(localStorage.getItem(savePrefix + 'currentCombatSegmentIndex'));
    currentCombatSegmentAction = localStorage.getItem(savePrefix + 'currentCombatSegmentAction');
    currentDVDerivationString = localStorage.getItem(savePrefix + 'currentDVDerivationString');

    if (localStorage.getItem(savePrefix + 'diceBoxVisible') == "true") {

        $("#" + CONSTANT_HTML_ID_DICE_BOX).html(localStorage.getItem(savePrefix + 'diceRollerHTML'));
        $("#" + CONSTANT_HTML_ID_DICE_BOX).show();
        hookUpDVDerivationDialogue(); //just in case there's a DV there

    }

    if (currentGameMode == GAME_MODE_COMBAT) {

        tempCombat = JSON.parse(localStorage.getItem(savePrefix + 'currentCombat'));
        currentCombat = getCombatByKey(tempCombat.key);

        flags = JSON.parse(localStorage.getItem(savePrefix + 'flags'));  //Since getCombatByKey() can stomp them

        currentCombat.reactionCount = tempCombat.reactionCount;
        currentCombat.currentTick = tempCombat.currentTick;
        currentCombat.tickActions = tempCombat.tickActions;
        currentCombat.segmentBucket = tempCombat.segmentBucket;
        currentCombat.stuntBucket = tempCombat.stuntBucket;
        currentCombat.actingCharacter = tempCombat.actingCharacter;

        currentCombat.startingPCHealth = tempCombat.startingPCHealth;
        currentCombat.startingPCWillpower = tempCombat.startingPCWillpower;
        currentCombat.startingPCCompassion = tempCombat.startingPCCompassion;
        currentCombat.startingPCTemperance = tempCombat.startingPCTemperance;
        currentCombat.startingPCConviction = tempCombat.startingPCConviction
        currentCombat.startingPCValor = tempCombat.startingPCValor;


        for (i = 0; i < currentCombat.validMiscActions.length; i++) {

            currentCombat.validMiscActions[i].used = tempCombat.validMiscActions[i].used;

        }

        for (i = 0; i < currentCombat.combatants.length; i++) {

            currentCombat.combatants[i][CONSTANT_TRAIT_HEALTH] = tempCombat.combatants[i][CONSTANT_TRAIT_HEALTH];
            currentCombat.combatants[i][CONSTANT_CHARACTER_CURRENT_ACTION] = tempCombat.combatants[i][CONSTANT_CHARACTER_CURRENT_ACTION];
            currentCombat.combatants[i][CONSTANT_CHARACTER_CURRENT_FLURRY] = tempCombat.combatants[i][CONSTANT_CHARACTER_CURRENT_FLURRY];
            currentCombat.combatants[i][CONSTANT_TRAIT_WILLPOWER_CURRENT] = tempCombat.combatants[i][CONSTANT_TRAIT_WILLPOWER_CURRENT];
            currentCombat.combatants[i][CONSTANT_TRAIT_VALOUR_CURRENT] = tempCombat.combatants[i][CONSTANT_TRAIT_VALOUR_CURRENT];
            currentCombat.combatants[i][CONSTANT_TRAIT_COMPASSION_CURRENT] = tempCombat.combatants[i][CONSTANT_TRAIT_COMPASSION_CURRENT];
            currentCombat.combatants[i][CONSTANT_TRAIT_CONVICTION_CURRENT] = tempCombat.combatants[i][CONSTANT_TRAIT_CONVICTION_CURRENT];
            currentCombat.combatants[i][CONSTANT_TRAIT_TEMPERANCE_CURRENT] = tempCombat.combatants[i][CONSTANT_TRAIT_TEMPERANCE_CURRENT];
            currentCombat.combatants[i][CONSTANT_TRAIT_PERSONAL_CURRENT] = tempCombat.combatants[i][CONSTANT_TRAIT_PERSONAL_CURRENT];
            currentCombat.combatants[i][CONSTANT_TRAIT_PERIPHERAL_CURRENT] = tempCombat.combatants[i][CONSTANT_TRAIT_PERIPHERAL_CURRENT];
            currentCombat.combatants[i][CONSTANT_TRAIT_COMMITTED_PERSONAL] = tempCombat.combatants[i][CONSTANT_TRAIT_COMMITTED_PERSONAL];
            currentCombat.combatants[i][CONSTANT_TRAIT_COMMITTED_PERIPHERAL] = tempCombat.combatants[i][CONSTANT_TRAIT_COMMITTED_PERIPHERAL];
            currentCombat.combatants[i][CONSTANT_TRAIT_BUFFS] = tempCombat.combatants[i][CONSTANT_TRAIT_BUFFS];
            currentCombat.combatants[i].surprised = tempCombat.combatants[i].surprised;
            currentCombat.combatants[i][CONSTANT_CHARACTER_CURRENT_STUNT] = tempCombat.combatants[i][CONSTANT_CHARACTER_CURRENT_STUNT];
            currentCombat.combatants[i][CONSTANT_CHARACTER_BEST_STUNT] = tempCombat.combatants[i][CONSTANT_CHARACTER_BEST_STUNT];
            currentCombat.combatants[i][CONSTANT_CHARACTER_CURRENT_ANIMA] = tempCombat.combatants[i][CONSTANT_CHARACTER_CURRENT_ANIMA];
            currentCombat.combatants[i][CONSTANT_CHARACTER_PERIPHERAL_MOTES_THIS_SCENE] = tempCombat.combatants[i][CONSTANT_CHARACTER_PERIPHERAL_MOTES_THIS_SCENE];
            currentCombat.combatants[i].hidden = tempCombat.combatants[i].hidden;
            currentCombat.combatants[i].elevation = tempCombat.combatants[i].elevation;
            currentCombat.combatants[i].actionCount = tempCombat.combatants[i].actionCount;
            

        }

        $("#combatTracker").show();
        fillTrackers();

        tempSegment = currentCombat.segmentBucket[currentCombatSegmentIndex];
        //addCombatActionsToSegment(tempSegment, currentCombat, currentCombatSegmentAction);
        processSegmentObject(tempSegment);


        //Following is attempt to fix the bug for games saved on prompt DV screens

        if (tempSegment.action === COMBAT_ACTION_PROMPT_DV_CHOICE) {

            if (currentPC.surprised) {

                $("#surpriseTarget").html("You were surprised by this attack, and your DVs will be set to zero.");

                //Anti-surprise charms should have already activated.  That means the SAM notification will get lost in a save/load situation, but not the functionality.

            }

            tempCharacter = getCombatCombatant(currentCombat, currentCombat.actingCharacter);

            $("#attackPoolTarget").html(tempCharacter[CONSTANT_CHARACTER_CURRENT_ACTION].accuracy);


            if (tempCharacter[CONSTANT_CHARACTER_CURRENT_FLURRY].flurrySet) {

                $("#flurryTarget").html("This is action " + (tempCharacter[CONSTANT_CHARACTER_CURRENT_FLURRY].totalActions - tempCharacter[CONSTANT_CHARACTER_CURRENT_FLURRY].remainingActions + 1) + " of a " + tempCharacter[CONSTANT_CHARACTER_CURRENT_FLURRY].totalActions + " action flurry.");

            }

            $("#pcActionOptionsTarget").html(getPCDVOptionsHTML());

            if (getBuffTotal(currentPC, CONSTANT_BUFF_ONSLAUGHT_PENALTY) > 0) {

                dvAdjustmentsString += "Both your DVs will suffer an Onslaught penalty of " + getBuffTotal(currentPC, CONSTANT_BUFF_ONSLAUGHT_PENALTY) + " from previous attacks in this flurry. ";

            }

            if (getElevationDelta(tempCharacter, currentPC) > 0) {

                dvAdjustmentsString += "You have an elevation advantage on your opponent, granting both your DVs a bonus of " + getElevationDelta(tempCharacter, currentPC) + ". ";

            }

            if (getElevationDelta(tempCharacter, currentPC) < 0) {

                dvAdjustmentsString += "Your opponent has an elevation advantage on you, causing a penalty of " + getElevationDelta(tempCharacter, currentPC) + " to both your DVs. ";

            }

            if (dvAdjustmentsString !== "") {

                dvAdjustmentsString = "<p><strong>DV adjustments: </strong>" + dvAdjustmentsString + "</p>";

            }

            $("#dvAdjustmentsTarget").html(dvAdjustmentsString);

            if (tempCharacter[CONSTANT_CHARACTER_CURRENT_ACTION].bonusArray) {

                tempBonusArray = tempCharacter[CONSTANT_CHARACTER_CURRENT_ACTION].bonusArray;

            }

            hookUpPCDefenceOptions(tempBonusArray);

        }

    }

    if (currentGameMode == GAME_MODE_SOCIAL_COMBAT) {

        tempSocialCombat = JSON.parse(localStorage.getItem(savePrefix + 'currentSocialCombat'));
        currentSocialCombat = getSocialCombatByKey(tempSocialCombat.key);

        flags = JSON.parse(localStorage.getItem(savePrefix + 'flags'));  //Since getSocialCombatByKey() can stomp them

        currentSocialCombat.reactionCount = tempSocialCombat.reactionCount;
        currentSocialCombat.currentTick = tempSocialCombat.currentTick;
        currentSocialCombat.tickActions = tempSocialCombat.tickActions;
        currentSocialCombat.segmentBucket = tempSocialCombat.segmentBucket;
        currentSocialCombat.stuntBucket = tempSocialCombat.stuntBucket;
        currentSocialCombat.socialAttacks = tempSocialCombat.socialAttacks;
        currentSocialCombat.actingCharacter = tempSocialCombat.actingCharacter;

        currentSocialCombat.startingPCHealth = tempSocialCombat.startingPCHealth;
        currentSocialCombat.startingPCWillpower = tempSocialCombat.startingPCWillpower;
        currentSocialCombat.startingPCCompassion = tempSocialCombat.startingPCCompassion;
        currentSocialCombat.startingPCTemperance = tempSocialCombat.startingPCTemperance;
        currentSocialCombat.startingPCConviction = tempSocialCombat.startingPCConviction
        currentSocialCombat.startingPCValor = tempSocialCombat.startingPCValor;


        for (i = 0; i < currentSocialCombat.validMiscActions.length; i++) {

            currentSocialCombat.validMiscActions[i].used = tempSocialCombat.validMiscActions[i].used;

        }


        for (i = 0; i < currentSocialCombat.combatants.length; i++) {

            currentSocialCombat.combatants[i][CONSTANT_TRAIT_HEALTH] = tempSocialCombat.combatants[i][CONSTANT_TRAIT_HEALTH];
            currentSocialCombat.combatants[i][CONSTANT_CHARACTER_CURRENT_ACTION] = tempSocialCombat.combatants[i][CONSTANT_CHARACTER_CURRENT_ACTION];
            currentSocialCombat.combatants[i][CONSTANT_CHARACTER_CURRENT_FLURRY] = tempSocialCombat.combatants[i][CONSTANT_CHARACTER_CURRENT_FLURRY];
            currentSocialCombat.combatants[i][CONSTANT_TRAIT_WILLPOWER_CURRENT] = tempSocialCombat.combatants[i][CONSTANT_TRAIT_WILLPOWER_CURRENT];
            currentSocialCombat.combatants[i][CONSTANT_TRAIT_VALOUR_CURRENT] = tempSocialCombat.combatants[i][CONSTANT_TRAIT_VALOUR_CURRENT];
            currentSocialCombat.combatants[i][CONSTANT_TRAIT_COMPASSION_CURRENT] = tempSocialCombat.combatants[i][CONSTANT_TRAIT_COMPASSION_CURRENT];
            currentSocialCombat.combatants[i][CONSTANT_TRAIT_CONVICTION_CURRENT] = tempSocialCombat.combatants[i][CONSTANT_TRAIT_CONVICTION_CURRENT];
            currentSocialCombat.combatants[i][CONSTANT_TRAIT_TEMPERANCE_CURRENT] = tempSocialCombat.combatants[i][CONSTANT_TRAIT_TEMPERANCE_CURRENT];
            currentSocialCombat.combatants[i][CONSTANT_TRAIT_PERSONAL_CURRENT] = tempSocialCombat.combatants[i][CONSTANT_TRAIT_PERSONAL_CURRENT];
            currentSocialCombat.combatants[i][CONSTANT_TRAIT_PERIPHERAL_CURRENT] = tempSocialCombat.combatants[i][CONSTANT_TRAIT_PERIPHERAL_CURRENT];
            currentSocialCombat.combatants[i][CONSTANT_TRAIT_COMMITTED_PERSONAL] = tempSocialCombat.combatants[i][CONSTANT_TRAIT_COMMITTED_PERSONAL];
            currentSocialCombat.combatants[i][CONSTANT_TRAIT_COMMITTED_PERIPHERAL] = tempSocialCombat.combatants[i][CONSTANT_TRAIT_COMMITTED_PERIPHERAL];
            currentSocialCombat.combatants[i][CONSTANT_TRAIT_BUFFS] = tempSocialCombat.combatants[i][CONSTANT_TRAIT_BUFFS];
            currentSocialCombat.combatants[i].surprised = tempSocialCombat.combatants[i].surprised;


        }

        $("#socialTracker").show();
        fillTrackers();

        tempSegment = currentSocialCombat.segmentBucket[currentCombatSegmentIndex];
        processSegmentObject(tempSegment);

        if (tempSegment.action === COMBAT_ACTION_ATTACK && (!(getCombatCombatant(currentSocialCombat, currentSocialCombat.actingCharacter).key === SOCIAL_COMBATANT_KEY_PC))) {

            tempCharacter = getCombatCombatant(currentSocialCombat, currentSocialCombat.actingCharacter);

            $("#attackPoolTarget").html(tempCharacter[CONSTANT_CHARACTER_CURRENT_ACTION].accuracy);

            $("#pcActionOptionsTarget").html(getPCMDVOptionsHTML());

            hookUpPCSocialDefenceOptions();

        }

    }


    
    if (currentGameMode == GAME_MODE_SEGMENT) {

        processSegmentObject(getSegmentObjectByKey(parseInt(localStorage.getItem(savePrefix + 'currentSegmentKey'))));

    }

    //arg hack - Loading puts whatever happens to be in the current segment into the history.  We don't want that, but we don't want the history logger to know if they're loading or not.

    //if (savePrefix === SAVE_PREFIX_SAVE) {

        pageHistory.splice(pageHistory.length - 1, 1);  

    //}


}


//######################################### Random Utilities #######################################################

function hookUpSubpageMenu() {


    $("#home").click(function (event) {

        window.location.href = "index.html";

    });

    $("#startTutorial").click(function (event) {

        window.location.href = "sakuya.html";

    });

    $("#load").click(function (event) {

        window.location.href = "sakuya.html?loadgame=true";        

    });

    if (!(localStorage.getItem('savedGame') == "true")) {

        $("#load").hide();

    }

    $("#essays").click(function (event) {

        window.location.href = "essays.html";

    });


}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}



function slideshow(idPrefix) {

    var i = 0;

    var tempFunction;

    while (testDOMElement(idPrefix + i)) {

        $("#" + idPrefix + i).hide();

        i += 1;

    }

    if (i > 0) {

        $("#" + idPrefix + "0").show();

        $("#" + idPrefix).prepend("<div id=\"" + idPrefix + "Controls\" class=\"slideshowControls\"><div id=\"" + idPrefix + "Left\" class=\"slideshowControl slideshowControlLeft slideshowControlOff\"> &lt;&lt;</div><div id=\"" + idPrefix + "Right\" class=\"slideshowControl slideshowControlRight slideshowControlOn\"> &gt;&gt;</div><div class=\"clear\"></div></div>");

        tempFunction = function () {

            slideShowRight(arguments.callee.idPrefix);

        };

        tempFunction.idPrefix = idPrefix;

        $("#" + idPrefix + "Right").click(tempFunction);

        tempFunction = function () {

            slideShowLeft(arguments.callee.idPrefix);

        };

        tempFunction.idPrefix = idPrefix;

        $("#" + idPrefix + "Left").click(tempFunction);

    }

}


function slideShowLeft(idPrefix) {

    var i = 0;

    var slideCompleted = false;

    while (testDOMElement(idPrefix + i) && (!slideCompleted)) {

        if ($("#" + idPrefix + i).is(":visible") && testDOMElement(idPrefix + (i - 1))) {

            $("#" + idPrefix + i).hide();
            $("#" + idPrefix + (i - 1)).show();

            $("#" + idPrefix + "Right").removeClass("slideshowControlOff");
            $("#" + idPrefix + "Right").addClass("slideshowControlOn");

            if (!testDOMElement(idPrefix + (i - 2))) {

                $("#" + idPrefix + "Left").removeClass("slideshowControlOn");
                $("#" + idPrefix + "Left").addClass("slideshowControlOff");

            }

            slideCompleted = true;
        }

        i += 1;
    }

}

function slideShowRight(idPrefix) {

    var i = 0;    

    var slideCompleted = false;

    while (testDOMElement(idPrefix + i) && (!slideCompleted)) {

        if ($("#" + idPrefix + i).is(":visible") && testDOMElement(idPrefix + (i + 1))) {

            $("#" + idPrefix + i).hide();
            $("#" + idPrefix + (i + 1)).show();

            $("#" + idPrefix + "Left").removeClass("slideshowControlOff");
            $("#" + idPrefix + "Left").addClass("slideshowControlOn");

            if (!testDOMElement(idPrefix + (i + 2))) {

                $("#" + idPrefix + "Right").removeClass("slideshowControlOn");
                $("#" + idPrefix + "Right").addClass("slideshowControlOff");               

            }

            slideCompleted = true;
        }

        i += 1;
    }

}

function testDOMElement(attributeID) {

    if ($("#" + attributeID).length > 0) {

        return true;

    }

    return false;
}



//####################################### DOCUMENT.READY ##################################################

$(document).ready(function () {

    //Straightforward setup stuff, mostly hiding/showing or hooking up some click events.


    if ($(window).width() > 1600) {

        $("#characterSheetToggleOff").hide();

    } else {

        $("#characterSheet").hide()

    }


    $("#characterSheetToggleOff").click(function (event) {

        characterSheetToggle();

    });


    $("#characterSheetToggleOn").click(function (event) {

        characterSheetToggle();

    });

    $("#toggleCharacterSheet").click(function (event) {

        characterSheetToggle();

    });

    $("#saveAndQuit").click(function (event) {

        saveGame(SAVE_PREFIX_SAVE);
        window.location.href = "index.html";

    });

    $("#save").click(function (event) {

        saveGame(SAVE_PREFIX_SAVE);
        alert("Game saved");

    });

    $("#load").click(function (event) {

        window.location.href = "sakuya.html?loadgame=true";

    });

    if (!(localStorage.getItem('savedGame') == "true")) {

        $("#load").hide();

    }


    //History/Glossary hookup

    $("#historyButton").click(function (event) {

        showHistory();

    });

    $("#glossaryButton").click(function (event) {

        showGlossary();

    });


    //Dice Roller setup
    var maxDice = 40;

    $("#diceBox").append("<div id=\"diceWorking\"></div>");
    $("#diceBox").append("<div id=\"difficulty\"></div>");

    for (i = 0; i < maxDice; i++) {

        $("#poolSelect").append("<option>" + (i + 1) + "</option>");

        $("#diceBox").append("<div id=\"dice" + i + "\" class=\"dice\"></div");

    }

    $("#diceBox").append("<div id=\"successes\"></div>");
    $("#diceBox").append("<div id=\"successWorking\"></div>");
    $("#diceBox").append("<div id=\"threshold\"></div>");

    $("#diceBox").hide();


    if (getParameterByName("loadgame") === "true") {

        loadGame(SAVE_PREFIX_SAVE);

    }


});