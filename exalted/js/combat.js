
//Misc combat functions


function fillTrackers() {

    fillCombatTrackerFromCombat(currentCombat);
    fillSocialTrackerFromCombat(currentSocialCombat);

}

function getTickActorsString(combat, tick) {

    var returnString = "";

    var i;

    for (i = 0; i < combat.tickActions.length; i++) {

        if (combat.tickActions[i].tick == tick) {

            returnString += getCombatCombatant(combat, combat.tickActions[i].combatant)[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] + "<br/>";

        }

    }

    return returnString;


}


function getCombatCombatant(combat, combatantKey) {

    var i;

    if (combatantKey == COMBATANT_KEY_PC) {

        return currentPC;

    }

    for (i = 0; i < combat.combatants.length; i++) {

        if (combat.combatants[i].key == combatantKey) {

            return combat.combatants[i];

        }

    }


}

function getCombatMiscAction(combat, miscKey) {

    var i;

    for (i = 0; i < combat.validMiscActions.length; i++) {

        if (combat.validMiscActions[i].key == miscKey) {

            return combat.validMiscActions[i];

        }

    }

    return {};

}

//################################################ COMBAT RESET #################################################################

function standardReset(combat) {

    var i;

    $("#" + CONSTANT_HTML_ID_DICE_BOX).hide();
    $("#combatTracker").hide();
    $("#socialTracker").hide();  //This way we don't need to care about the species of combat

    restorePCToSaved(combat);

    clearBuff(currentPC, CONSTANT_BUFF_ACTION_PENALTY);
    clearBuff(currentPC, CONSTANT_BUFF_AIM_BONUS);

    combat.pcResistedNMI = false; //Social only, but harmless in the combat context

    for (i = 0; i < combat.validMiscActions.length; i++) {

        combat.validMiscActions[i].used = false;

    }

}

function restorePCToSaved(combat) {

    currentPC[CONSTANT_TRAIT_HEALTH] = cloneHealth(combat.startingPCHealth);
    currentPC[CONSTANT_TRAIT_WILLPOWER_CURRENT] = combat.startingPCWillpower;
    currentPC[CONSTANT_TRAIT_COMPASSION_CURRENT] = combat.startingPCCompassion;
    currentPC[CONSTANT_TRAIT_TEMPERANCE_CURRENT] = combat.startingPCTemperance;
    currentPC[CONSTANT_TRAIT_CONVICTION_CURRENT] = combat.startingPCConviction;
    currentPC[CONSTANT_TRAIT_VALOUR_CURRENT] = combat.startingPCValor;

    currentPC[CONSTANT_TRAIT_COMMITTED_PERSONAL] = combat.startingPCPersonalCommitted;
    currentPC[CONSTANT_TRAIT_PERSONAL_CURRENT] = combat.startingPCPersonal;

    currentPC[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] = combat.startingPCPeripheralCommitted;
    currentPC[CONSTANT_TRAIT_PERIPHERAL_CURRENT] = combat.startingPCPeripheral;

    fillCharacterSheetFromCharacter(currentPC);

}

//################################################ JOIN BATTLE #################################################################

function joinBattle(combat, willpowerBonus) {

    currentGameMode = GAME_MODE_COMBAT;
    
    saveCurrentPCStatusForReset(combat);

    var i;

    var joinBattleArray = new Array();

    var pcJoinBattle = buildPoolAndRoll({


        type: CONSTANT_MUNDANE_BONUS,
        label: "Wits",
        magnitude: currentPC[CONSTANT_TRAIT_WITS]


    }, {

        type: CONSTANT_MUNDANE_BONUS,
        label: "Awareness",
        magnitude: currentPC[CONSTANT_TRAIT_AWARENESS]


    }, {

        type: CONSTANT_DIFFICULTY,
        magnitude: 0
    
    
    }, currentPC.getStuntBonus(), willpowerBonus, getWoundPenaltyAsBonus(currentPC));

    joinBattleArray.push({

        combatant: COMBATANT_KEY_PC,
        joinBattle: pcJoinBattle

    });

    for (i = 0; i < combat.combatants.length; i++) {

        joinBattleArray.push({

            combatant: combat.combatants[i].key,
            joinBattle: simpleDiceRoll(combat.combatants[i][CONSTANT_TRAIT_WITS] + combat.combatants[i][CONSTANT_TRAIT_AWARENESS] + getCurrentWoundPenalty(combat.combatants[i]), 7, combat.combatants[i][CONSTANT_TRAIT_HEROIC])
            

        }); 

    } 


    joinBattleArray.sort(function (a, b) { return (b.joinBattle - a.joinBattle) });

    combat.reactionCount = joinBattleArray[0].joinBattle;

    var tempTick = 0;

    for (i = 0; i < joinBattleArray.length; i++) {

        tempTick = combat.reactionCount - joinBattleArray[i].joinBattle;

        if (tempTick > 6) {

            tempTick = 6;

        }

        combat.tickActions.push({

            combatant: joinBattleArray[i].combatant,
            tick: tempTick            

        });

    }

    $("#combatTracker").show();
    fillTrackers();


}


function saveCurrentPCStatusForReset(combat) {

    combat.startingPCHealth = cloneHealth(currentPC[CONSTANT_TRAIT_HEALTH]);
    combat.startingPCWillpower = currentPC[CONSTANT_TRAIT_WILLPOWER_CURRENT];
    combat.startingPCCompassion = currentPC[CONSTANT_TRAIT_COMPASSION_CURRENT];
    combat.startingPCTemperance = currentPC[CONSTANT_TRAIT_TEMPERANCE_CURRENT];
    combat.startingPCConviction = currentPC[CONSTANT_TRAIT_CONVICTION_CURRENT];
    combat.startingPCValor = currentPC[CONSTANT_TRAIT_VALOUR_CURRENT];

    combat.startingPCPersonalCommitted = currentPC[CONSTANT_TRAIT_COMMITTED_PERSONAL];
    combat.startingPCPersonal = currentPC[CONSTANT_TRAIT_PERSONAL_CURRENT];
    combat.startingPCPeripheralCommitted = currentPC[CONSTANT_TRAIT_COMMITTED_PERIPHERAL];
    combat.startingPCPeripheral = currentPC[CONSTANT_TRAIT_PERIPHERAL_CURRENT];

    //Need to do buffs at some point, via a clone function

}

//################################################ TICK PROGRESSION #################################################################


function firstAction(combat) {

    $("#" + CONSTANT_HTML_ID_DICE_BOX).hide();  //Generic clean-up function maybe?

    handleActions(combat, 0);  //While this fails gracefully regardless, there has to be an action on tick 0 by definition.

    fillTrackers();
}


function advanceTick(combat) {

    $("#" + CONSTANT_HTML_ID_DICE_BOX).hide();  //Generic clean-up function maybe?

    combat.currentTick += 1;

    handleActions(combat, combat.currentTick);

    fillTrackers();

}


function getActionsForTick(combat, tick) {

    var i;
    var returnActions = new Array();

    for (i = 0; i < combat.tickActions.length; i++) {

        if (combat.tickActions[i].tick == tick) {

            returnActions.push(combat.tickActions[i]);

        }

    }

    return returnActions;

}


function handleActions(combat, tick) {

    var actions = getActionsForTick(combat, tick);

    var i;

    var pcAction = false;

    var stuntReward = {};

    if (actions.length > 0) {

        for (i = 0; i < actions.length; i++) {

            if (actions[i].combatant == COMBATANT_KEY_PC) {

                pcAction = true;

            } 

        }

        if (pcAction) {

            stuntReward = refreshDV(currentPC, combat);

            combat.getPCCombatOptions()();

            $("#stuntRewardTarget").html(getStuntRewardTextFromStuntReward(stuntReward));

        } else {

            stuntReward = refreshDV(getCombatCombatant(combat, actions[0].combatant), combat);

            getCombatCombatant(combat, actions[0].combatant)[CONSTANT_TRAIT_COMBAT_AI]()();

        }

    } else {

        noActionsThisTick(combat);

    }


}


function checkForActionsOnTick(combat, tick) {

    var actions = getActionsForTick(combat, tick);

    if (actions.length > 0) {

        return true;

    }

    return false;

}


function noActionsThisTick(combat) {

    processSegmentObject(getSegmentObjectByKey(combat.nextTickSegment));

}

//################################################ COMBAT STATUS #################################################################

function allNPCsIncapacitated(combat) {

    var i;

    for (i = 0; i < combat.combatants.length; i++) {

        if (!(isIncapacitated(combat.combatants[i]))) {

            return false;

        }

    }

    return true;

}


//################################################ COMBAT ACTIONS #################################################################


function refreshDV(character, combat) {

    var stuntReward = {

        motes: 0,
        willpower: 0

    };

    clearBuffWithDuration(character, BUFF_DURATION_NEXT_ACTION);

    character.actionCount += 1;

    expireBuffsByActionCount(character);

    if (getBuffTotal(character, CONSTANT_BUFF_AIM_BONUS) === 0) {

        clearBuff(character, CONSTANT_BUFF_ACTION_PENALTY);

        character[CONSTANT_CHARACTER_CURRENT_FLURRY] = getEmptyFlurry();

        stuntReward = rewardStunt(character);

        //Plus any other "when refreshing DV" stuff

    }

    combat.actingCharacter = character.key;

    fillTrackers();

    return stuntReward;

}

function clearCombatantTickAction(combat, combatantKey) {

    var i;

    for (i = combat.tickActions.length - 1; i >= 0; i -= 1) {

        if (combat.tickActions[i].combatant == combatantKey) {

            combat.tickActions.splice(i, 1);

        }

    }

    fillTrackers();

}



function clearAllOnslaught(combat) {

    clearBuff(currentPC, CONSTANT_BUFF_ONSLAUGHT_PENALTY);

    var i;

    for (i = 0; i < combat.combatants.length; i++) {

        clearBuff(combat.combatants[i], CONSTANT_BUFF_ONSLAUGHT_PENALTY);    

    }

}


function finishAction(combat, character) {

    clearAllOnslaught(combat);

    $("#" + CONSTANT_HTML_ID_DICE_BOX).hide();

    var tempResult = combat.checkCombatResult();

    if (tempResult == COMBAT_RESULT_NO_RESULT) {
        

        if (!(character[CONSTANT_CHARACTER_CURRENT_ACTION].action == COMBAT_ACTION_AIM)) {
    
            clearBuff(character, CONSTANT_BUFF_AIM_BONUS);

        }

        clearCombatantTickAction(combat, character.key);

        checkForFlurrySpeedChange(character, character[CONSTANT_CHARACTER_CURRENT_ACTION].speed);  //This should be the canonical check, as it allows speed to be modified beforehand by charms

        if (isAlive(character)) {

            combat.tickActions.push({

                combatant: character.key,
                tick: combat.currentTick + character[CONSTANT_CHARACTER_CURRENT_FLURRY].speed

            });

        }

        handleActions(combat, combat.currentTick);

        fillTrackers();


    } else {

        currentGameMode = GAME_MODE_SEGMENT;

        $("#combatTracker").hide();
        $("#socialTracker").hide();

        clearBuff(currentPC, CONSTANT_BUFF_ACTION_PENALTY);

        if (tempResult == COMBAT_RESULT_PC_VICTORY) {

            rewardStunt(currentPC);
            combat.onPCVictory();

        } else {

            rewardStunt(currentPC);
            combat.onPCDefeat();

        }

    }


}


function deadAction(combat, character) {

    inactiveAction(character);
    
    processSegmentObject(getCombatSegment(combat, character, COMBAT_ACTION_DEAD));

}

function dyingAction(combat, character) {

    inactiveAction(character);

    applyDamage(character, DAMAGE_TYPE_LETHAL, 1);

    if (!isAlive(character)) {

        character[CONSTANT_TRAIT_COMBAT_AI]()();  // This should cause them to take the dead action and set any appropriate flags

    } else {

        processSegmentObject(getCombatSegment(combat, character, COMBAT_ACTION_DYING));

    }

}

function incapacitatedAction(combat, character) {

    inactiveAction(character);

    if (character[CONSTANT_TRAIT_EXTRA]) {

        applyDamage(character, DAMAGE_TYPE_LETHAL, 1);

    }

    processSegmentObject(getCombatSegment(combat, character, COMBAT_ACTION_INCAPACITATED));

}

function inactiveAction(character) {

    character[CONSTANT_CHARACTER_CURRENT_ACTION] = {
    
        action: COMBAT_ACTION_INACTIVE,
        speed: SPEED_INACTIVE
    
    };

    checkForFlurrySpeedChange(character, SPEED_INACTIVE);

}

function miscAction(character, actionKey) {

    character[CONSTANT_CHARACTER_CURRENT_ACTION] = {
    
        action: COMBAT_ACTION_MISCELLANEOUS,
        speed: SPEED_MISCELLANEOUS,
        key: actionKey
    
    };    

    //checkForFlurrySpeedChange(character, SPEED_MISCELLANEOUS);

    var miscAction = getCombatMiscAction(currentCombat, actionKey);

    miscAction.used = true;

    character[CONSTANT_TRAIT_BUFFS].push({

        type: CONSTANT_BUFF_ACTION_PENALTY,
        source: "Miscellaneous action",
        magnitude: miscAction.dvPenalty

    });

    if (miscAction.setFlag) {

        flags[miscAction.flag] = true;

    }

    processSegmentObject(getCombatSegment(currentCombat, character, COMBAT_ACTION_MISCELLANEOUS));


}

function guardAction(combat, character) {

    character[CONSTANT_CHARACTER_CURRENT_ACTION] = {
    
        action: COMBAT_ACTION_GUARD,
        speed: SPEED_GUARD
    
    };    

    //checkForFlurrySpeedChange(character, SPEED_GUARD);

    processSegmentObject(getCombatSegment(combat, character, COMBAT_ACTION_GUARD));
}

function aimAction(combat, character) {

    character[CONSTANT_CHARACTER_CURRENT_ACTION] = {
    
        action: COMBAT_ACTION_AIM,
        speed: SPEED_AIM
    
    }; 

    //checkForFlurrySpeedChange(character, SPEED_AIM);

    clearBuff(character, CONSTANT_BUFF_ACTION_PENALTY); //Because Aim can't be part of a flurry, either this is the first Aim and DV will have just refreshed anyway, or it's a subsequent Aim, which shouldn't increase the action penalty.
    
    clearBuff(character, CONSTANT_BUFF_AIM_BONUS);  //Likewise the aim bonus shouldn't go over 3

    character[CONSTANT_TRAIT_BUFFS].push({

        type: CONSTANT_BUFF_AIM_BONUS,
        source: "Aim action",
        magnitude: 3

    });

    character[CONSTANT_TRAIT_BUFFS].push({

        type: CONSTANT_BUFF_ACTION_PENALTY,
        source: "Aim action",
        magnitude: 1


    });

    processSegmentObject(getCombatSegment(combat, character, COMBAT_ACTION_AIM));

}


function attackAction(combat, character, target, willpower, charms) {

    var speed = character[CONSTANT_TRAIT_WEAPON].speed;

    character[CONSTANT_CHARACTER_CURRENT_ACTION] = {
    
        action: COMBAT_ACTION_ATTACK,
        speed: speed,
        willpower: willpower,
        target: target
    
    }; 

    //checkForFlurrySpeedChange(character, speed);

    character[CONSTANT_CHARACTER_CURRENT_FLURRY].weaponAttacks += 1;

    if ((!hasBuff(character, CONSTANT_BUFF_DV_PENALTY_REDUCTION_ATTACK)) && ((!character[CONSTANT_CHARACTER_CURRENT_FLURRY].magicFlurry) || getBuffTotal(character, CONSTANT_BUFF_ACTION_PENALTY) === 0)) {

        //That is, only do this if the character takes action penalties on attacks, if it's not a magic flurry, or it is a magic flurry but it doesn't have an action penalty yet

        character[CONSTANT_TRAIT_BUFFS].push({

            type: CONSTANT_BUFF_ACTION_PENALTY,
            source: "Attack action",
            magnitude: 1


        });

    }
    
    //Not yet handling NPC vs NPC violence - may not for tutorial

    if (character.key == COMBATANT_KEY_PC) {

        handlePCAttack(charms);    

    } else {

        promptForPCDefence(combat, character, charms);

    }

    
}


function handlePCAttack(charms) {

    //Working out attack

    var charmParams = {};

    var excellencyParams = {};

    var excellencyBonus = {

        type: "Invalid",
        magnitude: 0,
        label: "Charm"

    }

    if (getSelectedExcellencyFromOptionsObject(charms)) {  //Excellency used

        excellencyParams = getSelectedExcellencyFromOptionsObject(charms);

        excellencyBonus = activateCharmForBonus(currentPC, excellencyParams.key, excellencyParams.preferredPool, {

            attribute: CONSTANT_TRAIT_DEXTERITY,
            ability: currentPC[CONSTANT_TRAIT_WEAPON].ability

        }, excellencyParams.motes);


    }

    //Work out exact pool to pass to defence AI (needs this information to decide on charm use)

    var attackSuccesses = 0;

    var attackPool = currentPC[CONSTANT_TRAIT_DEXTERITY] + currentPC[currentPC[CONSTANT_TRAIT_WEAPON].ability] + getSpecialtyAsBonus(currentPC, currentPC[CONSTANT_TRAIT_WEAPON].specialty).magnitude + currentPC[CONSTANT_TRAIT_WEAPON].accuracy + excellencyBonus.magnitude + getAimBonus(currentPC).magnitude + currentPC.getStuntBonus().magnitude - getWoundPenaltyAsBonus(currentPC).magnitude - getMultipleActionPenaltyAsBonus(currentPC[CONSTANT_CHARACTER_CURRENT_FLURRY]).magnitude;

    if (currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].willpower.type === CONSTANT_MUNDANE_BONUS) {

        attackPool += currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].willpower.magnitude;

    }

    if (currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].willpower.type === CONSTANT_SUCCESS_BONUS) {

        attackSuccesses += currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].willpower.magnitude;

    }


    //Working out defence

    var target = getCombatCombatant(currentCombat, currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].target);

    var defenceCharms = {
    
        dv: 0,
        label: ""
    
    };

    var expectedDelta = getExpectedSuccessDelta(attackPool, attackSuccesses, currentPC, target);

    if (expectedDelta > 0 && target[CONSTANT_TRAIT_EXALTED] && (!isIncapacitated(target))) {

        defenceCharms = target.closeDVDeltaWithCharms(expectedDelta);

    }


    var defenceStunt = 0;
    
    var targetDV = target.getDVInResponseToAttack(currentPC[CONSTANT_TRAIT_WEAPON].attackType, DV_BEST, 0);

    currentDVDerivationString = getBaseDVDerivationString(target, targetDV.type, currentPC[CONSTANT_TRAIT_WEAPON].attackType);

    targetDV.dv += defenceCharms.dv;

    currentDVDerivationString += defenceCharms.label;

    if (target[CONSTANT_TRAIT_EXALTED]) {

        currentDVDerivationString += getMiscDVBonusString(target, true);

        defenceStunt = 2;  //Assuming Exalted pretty much always get +2 stunts, must write segments accordingly.

        target.stunt(defenceStunt);
        
        currentDVDerivationString += "<p><strong>Stunt Bonus: </strong>" + defenceStunt + "</p>";

        targetDV.dv += defenceStunt;

    }

    var elevationDelta = getElevationDelta(currentPC, target);

    if (!(elevationDelta === 0)) {

        targetDV.dv += elevationDelta;
        currentDVDerivationString += "<p><strong>Elevation Difference: </strong>" + elevationDelta + "</p>";

    }
    
    if (isInactive(getCombatCombatant(currentCombat, currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].target))) {

        targetDV.dv = 0;
        currentDVDerivationString += "<p><strong>Final DV: </strong> 0 (Inactive)</p>";

    } else {

        if (getCombatCombatant(currentCombat, currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].target).surprised) {

            targetDV.dv = 0;
            currentDVDerivationString += "<p><strong>Final DV: </strong> 0 (Surprised)</p>";

        } else {
        
            currentDVDerivationString += "<p><strong>Final DV: </strong>" + targetDV.dv + "</p>";

        }

    }



    //Making the roll


    var tempThreshold = buildPoolAndRoll({

        type: CONSTANT_MUNDANE_BONUS,
        label: "Dexterity",
        magnitude: currentPC[CONSTANT_TRAIT_DEXTERITY]
        
    }, {

        type: CONSTANT_MUNDANE_BONUS,
        label: getAbilityLabelByTrait(currentPC[CONSTANT_TRAIT_WEAPON].ability), 
        magnitude: currentPC[currentPC[CONSTANT_TRAIT_WEAPON].ability]
        
    }, getSpecialtyAsBonus(currentPC, currentPC[CONSTANT_TRAIT_WEAPON].specialty), {
    
        type: CONSTANT_MUNDANE_BONUS,
        label: "Accuracy",
        magnitude: currentPC[CONSTANT_TRAIT_WEAPON].accuracy
    
    
    }, excellencyBonus, getAimBonus(currentPC), currentPC.getStuntBonus(), currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].willpower, getWoundPenaltyAsBonus(currentPC), getMultipleActionPenaltyAsBonus(currentPC[CONSTANT_CHARACTER_CURRENT_FLURRY]), getExternalPenaltyToAttackers(target), {
    
    
        type: CONSTANT_EXTERNAL_PENALTY,
        label: "<span id=\"diceRollerDV\">" + targetDV.label + " DV (" + getCombatCombatant(currentCombat, currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].target)[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] + ")</span>",
        magnitude: targetDV.dv
    
    });


    //Kill Surprise

    target.surprised = false;

    //Send it on its way

    if (tempThreshold < 0) {

        processSegmentObject(getCombatSegment(currentCombat, currentPC, COMBAT_ACTION_ATTACK_MISS));

    } else {

        tempThreshold += 1;

        if (getOptionsObjectHasCharm(charms, CHARM_SOLAR_HUNGRY_TIGER_TECHNIQUE)) {

            charmParams = getCharmParamsFromOptionsObject(charms, CHARM_SOLAR_HUNGRY_TIGER_TECHNIQUE);

            if (currentPC.spendMotes(charmLibrary[CHARM_SOLAR_HUNGRY_TIGER_TECHNIQUE].costMotes, charmParams.preferredPool)) {

                tempThreshold = tempThreshold * 2;

            }

        }

        currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].threshold = tempThreshold;

        processSegmentObject(getCombatSegment(currentCombat, currentPC, COMBAT_ACTION_ATTACK_HIT));

    }

}

function handleNPCAttack(combat, character, chosenDV, willpower, stuntKey, npcBonuses, pcCharms) {

    //PC Defence

    var willpowerBonus = getWPSpendAsBonus(currentPC, willpower);

    var diceBonus = 0;

    var successBonus = 0;

    var clearTempDVPenaltyIgnoreBuff = false; //Clumsy hack to implement DSD, clean up

    var perfectDefence = false;

    var perfectDefenceCharmName = "";

    currentDVDerivationString = getBaseDVDerivationString(currentPC, chosenDV, character[CONSTANT_TRAIT_WEAPON].attackType);  //This is so we hook up a link from the dice roller later

    //More sophisticated charm thing should go here, but since it's basically just 1st Excellency for Sakuya, what the hell

    if (pcCharms) {

        var charmString = "";

        if (getSelectedExcellencyFromOptionsObject(pcCharms)) {
            
            var pcExcellencyParams = getSelectedExcellencyFromOptionsObject(pcCharms);

            var pcExcellencyBonus = activateCharmForBonus(currentPC, pcExcellencyParams.key, pcExcellencyParams.preferredPool, {

                attribute: CONSTANT_TRAIT_DEXTERITY,
                ability: charmLibrary[pcExcellencyParams.key].ability

            }, pcExcellencyParams.motes);

            diceBonus += pcExcellencyBonus.magnitude;
            charmString += pcExcellencyBonus.activationLabel + " ";

        }

        //Specific charms, probably shouldn't live here directly
        if (getOptionsObjectHasCharm(pcCharms, CHARM_SOLAR_BULWARK_STANCE)) {

            var bulwarkParams = getCharmParamsFromOptionsObject(pcCharms, CHARM_SOLAR_BULWARK_STANCE);

            activateCharmForBonus(currentPC, bulwarkParams.key, bulwarkParams.preferredPool);

        }

        if ((!hasBuff(currentPC, CONSTANT_BUFF_DV_PENALTY_REDUCTION_DEFENCE)) && getOptionsObjectHasCharm(pcCharms, CHARM_SOLAR_DIPPING_SWALLOW_DEFENCE)) {

            var dsdParams = getCharmParamsFromOptionsObject(pcCharms, CHARM_SOLAR_DIPPING_SWALLOW_DEFENCE);

            var dsdBonus = activateCharmForBonus(currentPC, dsdParams.key, dsdParams.preferredPool);

            if (dsdBonus.type !== CONSTANT_BONUS_INVALID) {

                clearTempDVPenaltyIgnoreBuff = true;
                charmString += dsdBonus.activationLabel + " ";

            }

        }

        if (getOptionsObjectHasCharm(pcCharms, CHARM_SOLAR_HEAVENLY_GUARDIAN_DEFENCE)) {

            var hgdParams = getCharmParamsFromOptionsObject(pcCharms, CHARM_SOLAR_HEAVENLY_GUARDIAN_DEFENCE);

            var hgdBonus = activateCharmForBonus(currentPC, hgdParams.key, hgdParams.preferredPool);

            if (hgdBonus.type !== CONSTANT_BONUS_INVALID) {

                perfectDefence = true;
                perfectDefenceCharmName = charmLibrary[hgdParams.key].label;
                
            }

        }

        if (getOptionsObjectHasCharm(pcCharms, CHARM_SOLAR_PROTECTION_OF_CELESTIAL_BLISS)) {

             perfectDefence = true;
             perfectDefenceCharmName = charmLibrary[CHARM_SOLAR_PROTECTION_OF_CELESTIAL_BLISS].label;

             clearBuff(currentPC, CONSTANT_BUFF_PROTECTION_OF_CELESTIAL_BLISS);
             clearBuff(currentPC, CONSTANT_BUFF_DEFENCE_BONUS);
             clearBuff(currentPC, CONSTANT_BUFF_DV_PENALTY_REDUCTION_ATTACK);
                
        }

        if (charmString != "") {
               
            currentDVDerivationString += "<p><strong>Activated Charm Bonuses:</strong> " + charmString + "</p>";

        }

    }

    if (currentPC[CONSTANT_TRAIT_EXALTED]) {

        currentDVDerivationString += getMiscDVBonusString(currentPC, true);

    }

    if (willpowerBonus.type == CONSTANT_MUNDANE_BONUS) {

        diceBonus = willpowerBonus.magnitude;

        currentDVDerivationString += "<p><strong>Dice Bonus: </strong>" + diceBonus + " (" + willpowerBonus.label + " - added to base pool)</p>";  

    }

    if (willpowerBonus.type == CONSTANT_SUCCESS_BONUS) {

        successBonus += willpowerBonus.magnitude;

        currentDVDerivationString += "<p><strong>Success Bonus: </strong>" + willpowerBonus.magnitude + " (" + willpowerBonus.label + ")</p>";

    }

    var targetDV = currentPC.getDVInResponseToAttack(character[CONSTANT_TRAIT_WEAPON].attackType, chosenDV, diceBonus, successBonus);


    if (clearTempDVPenaltyIgnoreBuff) {

        clearBuff(currentPC, CONSTANT_BUFF_DV_PENALTY_REDUCTION_DEFENCE); //DSD hack again, get rid of it

    }


    //For flurries stunts carry over

    if (character[CONSTANT_CHARACTER_CURRENT_FLURRY].flurrySet && character[CONSTANT_CHARACTER_CURRENT_FLURRY].defenceStunt) {

        currentPC.stunt(character[CONSTANT_CHARACTER_CURRENT_FLURRY].defenceStunt);
  
        currentDVDerivationString += "<p><strong>Stunt Bonus: </strong>" + currentPC.getStuntBonus().magnitude + "</p>";

        targetDV.dv += currentPC.getStuntBonus().magnitude;

    } else {

        if (!(stuntKey == CONSTANT_NO_STUNT)) {

            currentPC.stunt(getPCStuntByKey(combat, stuntKey).rating);
            getPCStuntByKey(combat, stuntKey).used = true;

            currentDVDerivationString += "<p><strong>Stunt Bonus: </strong>" + currentPC.getStuntBonus().magnitude + "</p>";

            targetDV.dv += currentPC.getStuntBonus().magnitude;

            if (character[CONSTANT_CHARACTER_CURRENT_FLURRY].flurrySet) {

                character[CONSTANT_CHARACTER_CURRENT_FLURRY].defenceStunt = currentPC.getStuntBonus().magnitude;

            }

        }

    }


    var elevationDelta = getElevationDelta(character, currentPC);

    if (!(elevationDelta === 0)) {

        targetDV.dv += elevationDelta;
        currentDVDerivationString += "<p><strong>Elevation Difference: </strong>" + elevationDelta + "</p>";

    }

    if (isInactive(currentPC)) {

        targetDV.dv = 0;
        currentDVDerivationString += "<p><strong>Final DV: </strong> 0 (Inactive)</p>";

    } else {

         if (currentPC.surprised) {

            targetDV.dv = 0;
            currentDVDerivationString += "<p><strong>Final DV: </strong> 0 (Surprised)</p>";

        } else {

            currentDVDerivationString += "<p><strong>Final DV: </strong>" + targetDV.dv + "</p>";

        }

    }
    
    //Attack bonuses

    var excellencyBonus = getExcellencyBonusFromBonusArray(npcBonuses);

    var buffBonus = getBuffBonusFromBonusArray(npcBonuses);

    var speedModifier = getSpeedModifierFromBonusArray(npcBonuses);

    var speed = character[CONSTANT_CHARACTER_CURRENT_ACTION].speed + speedModifier;

    if (speed < 3) {

        speed = 3;

    }

    character[CONSTANT_CHARACTER_CURRENT_ACTION].speed = speed;



    //Making the roll

     var tempThreshold = buildPoolAndRoll({

        type: CONSTANT_MUNDANE_BONUS,
        label: "Dexterity",
        magnitude: character[CONSTANT_TRAIT_DEXTERITY]
        
    }, {

        type: CONSTANT_MUNDANE_BONUS,
        label: getAbilityLabelByTrait(character[CONSTANT_TRAIT_WEAPON].ability), 
        magnitude: character[character[CONSTANT_TRAIT_WEAPON].ability]
        
    }, getSpecialtyAsBonus(character, character[CONSTANT_TRAIT_WEAPON].specialty), {
    
        type: CONSTANT_MUNDANE_BONUS,
        label: "Accuracy",
        magnitude: character[CONSTANT_TRAIT_WEAPON].accuracy
    
    
    }, excellencyBonus, buffBonus, getAimBonus(character), character.getStuntBonus(), character[CONSTANT_CHARACTER_CURRENT_ACTION].willpower, getWoundPenaltyAsBonus(character), getHeroicAsBonus(character), getMultipleActionPenaltyAsBonus(character[CONSTANT_CHARACTER_CURRENT_FLURRY]), getExternalPenaltyToAttackers(currentPC), {
    
    
        type: CONSTANT_EXTERNAL_PENALTY,
        label: "<span id=\"diceRollerDV\">" + targetDV.label + " DV (" + currentPC[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] + ")</span>",
        magnitude: targetDV.dv
    
    });


    if (perfectDefence) {

        tempThreshold = -1;

        $("#threshold").html("<strong>FAILURE: Perfect Defence charm activated ("+ perfectDefenceCharmName + ")</strong>");

    }

    //Kill surprise

    currentPC.surprised = false;

    //Send it on its way

    if (tempThreshold < 0) {

        processSegmentObject(getCombatSegment(currentCombat, character, COMBAT_ACTION_ATTACK_MISS));

    } else {

        tempThreshold += 1;

        character[CONSTANT_CHARACTER_CURRENT_ACTION].threshold = tempThreshold;

        character[CONSTANT_CHARACTER_CURRENT_ACTION].bonuses = npcBonuses;

        processSegmentObject(getCombatSegment(currentCombat, character, COMBAT_ACTION_ATTACK_HIT));

    }


}


function promptForPCDefence(combat, character, charms) {

    var bonusArray = new Array();

    var activatedCharmsString = "";

    var dvAdjustmentsString = "";

    var i;

    processSegmentObject(getCombatSegment(combat, character, COMBAT_ACTION_PROMPT_DV_CHOICE));


    if (currentPC.surprised) {

        $("#surpriseTarget").html("You were surprised by this attack, and your DVs will be set to zero.");

        if (currentPC.hasCharm(CHARM_SOLAR_SURPRISE_ANTICIPATION_METHOD) && currentPC.hasMotes(charmLibrary[CHARM_SOLAR_SURPRISE_ANTICIPATION_METHOD].costMotes)) {

            currentPC.spendMotes(1);

            currentPC.surprised = false;

            fillCharacterSheetFromCharacter(currentPC);

            $("#surpriseTarget").html("You were about to be surprised by this attack, but your Surprise Anticipation Method activated at the cost of 1 mote and alerted you.  You may apply your DVs normally.");

        }

    }


    var tempNPCAccuracy = getEquippedAccuracy(character);

    tempNPCAccuracy += getCurrentWoundPenalty(character);

    tempNPCAccuracy += getAimBonus(character).magnitude;

    tempNPCAccuracy -= getMultipleActionPenalty(character[CONSTANT_CHARACTER_CURRENT_FLURRY]);

     if (character[CONSTANT_CHARACTER_CURRENT_ACTION].willpower.type === CONSTANT_MUNDANE_BONUS) {

       tempNPCAccuracy += character[CONSTANT_CHARACTER_CURRENT_ACTION].willpower.magnitude;

    }

    if (character[CONSTANT_TRAIT_EXALTED]) {

        var attackStunt = 2;  //We just assume Exalted stunt at +2 all the time

        character.stunt(attackStunt);
        
        tempNPCAccuracy += attackStunt;

        bonusArray = activateCharmsFromOptionsObject(charms, character);

        bonusArray.push(getDiceBonusFromBuff(character, CONSTANT_BUFF_DICE_BONUS_ATTACK_CHARM));  //This picks up Vedara's Air Dragon Form, obviously a more generalised solution might be needed

        tempNPCAccuracy += getDiceBonusFromBonusArray(bonusArray);

        if (bonusArray.length > 0) {

          for (i = 0; i < bonusArray.length; i++) {
          
            if (bonusArray[i].activationLabel) {

                activatedCharmsString += "<li>" + bonusArray[i].activationLabel + "</li>";

            }
          
          }  

          if (activatedCharmsString !== "") {

            activatedCharmsString = "<p>Charms activated:</p><ul>" + activatedCharmsString + "</ul>";
            $("#activatedCharmsTarget").html(activatedCharmsString);

          }

        }

    }

    $("#attackPoolTarget").html(tempNPCAccuracy);

    character[CONSTANT_CHARACTER_CURRENT_ACTION].accuracy = tempNPCAccuracy;

    if (character[CONSTANT_CHARACTER_CURRENT_FLURRY].flurrySet) {

        $("#flurryTarget").html("This is action " + (character[CONSTANT_CHARACTER_CURRENT_FLURRY].totalActions - character[CONSTANT_CHARACTER_CURRENT_FLURRY].remainingActions + 1) + " of a " + character[CONSTANT_CHARACTER_CURRENT_FLURRY].totalActions + " action flurry.");

    }

    $("#pcActionOptionsTarget").html(getPCDVOptionsHTML());

    if (getBuffTotal(currentPC, CONSTANT_BUFF_ONSLAUGHT_PENALTY) > 0) {

        dvAdjustmentsString += "Both your DVs will suffer an Onslaught penalty of " + getBuffTotal(currentPC, CONSTANT_BUFF_ONSLAUGHT_PENALTY) + " from previous attacks in this flurry. ";

    }

    if (getElevationDelta(character, currentPC) > 0) {

        dvAdjustmentsString += "You have an elevation advantage on your opponent, granting both your DVs a bonus of " + getElevationDelta(character, currentPC) + ". ";

    }

    if (getElevationDelta(character, currentPC) < 0) {

        dvAdjustmentsString += "Your opponent has an elevation advantage on you, causing a penalty of " + getElevationDelta(character, currentPC) + " to both your DVs. ";

    }

    if (dvAdjustmentsString !== "") {

        dvAdjustmentsString = "<p><strong>DV adjustments: </strong>" + dvAdjustmentsString + "</p>";

    }

    $("#dvAdjustmentsTarget").html(dvAdjustmentsString);

    hookUpPCDefenceOptions(bonusArray);

    character[CONSTANT_CHARACTER_CURRENT_ACTION].bonusArray = bonusArray;

}


function getDiceBonusFromBonusArray(bonusArray) {  //

    var i;

    var diceBonus = 0;

    for (i = 0; i < bonusArray.length; i++) {

        if (bonusArray[i].type === CONSTANT_MAGIC_BONUS || bonusArray[i].type === CONSTANT_MUNDANE_BONUS) {

            diceBonus += bonusArray[i].magnitude;

        }

    }

    return diceBonus;

}


function pcAttackAction(combat, character, target, willpower, stuntKey, charms) {

    var willpowerBonus = getWPSpendAsBonus(currentPC, willpower);

    if (!(stuntKey == CONSTANT_NO_STUNT || stuntKey == CONSTANT_FLURRY_STUNT)) {

        currentPC.stunt(getPCStuntByKey(combat, stuntKey).rating);
        getPCStuntByKey(combat, stuntKey).used = true;

    }

    attackAction(combat, character, target, willpowerBonus, charms);

}


function handleDamageRoll(character) {

    var rolledDamage = rollWeaponDamage(character, getCombatCombatant(currentCombat, character[CONSTANT_CHARACTER_CURRENT_ACTION].target));

    //Things that mess with post roll damage go here.  

    if ((rolledDamage > 0) && hasBuff(character, CONSTANT_BUFF_AIR_DRAGON_STYLE) && (!character[CONSTANT_CHARACTER_CURRENT_FLURRY].flurrySet) && (character[CONSTANT_TRAIT_WEAPON].type === CONSTANT_WEAPON_TYPE_CHAKRAM)) {       
        //ie Air Dragon stylist using chakram, not flurrying

        rolledDamage = rolledDamage * 2;

        $("#successes").append(" (applied twice, Air Dragon Style double-chakram effect, total "+ rolledDamage +")");

    }

    //

    if (rolledDamage > 0) {

        applyDamage(getCombatCombatant(currentCombat, character[CONSTANT_CHARACTER_CURRENT_ACTION].target), character[CONSTANT_TRAIT_WEAPON].damageType, rolledDamage);

        processSegmentObject(getCombatSegment(currentCombat, character, COMBAT_ACTION_DAMAGE_SUCCESS));

    } else {

        processSegmentObject(getCombatSegment(currentCombat, character, COMBAT_ACTION_DAMAGE_FAIL));

    }
    

}



function simpleCharmAction(character, charmKey, preferredPool) {

    var speed = 6;
    var dvPenalty = 1;

    var tempCharm = charmLibrary[charmKey];

    if (tempCharm.speed) {

        speed = tempCharm.speed;

    }

    if (tempCharm.dvPenalty) {

        dvPenalty = tempCharm.dvPenalty;

    }

    activateCharmForBonus(character, charmKey, preferredPool);

    character[CONSTANT_CHARACTER_CURRENT_ACTION] = {
    
        action: COMBAT_ACTION_SIMPLE_CHARM,
        speed: speed,
        key: charmKey    
    }; 

    character[CONSTANT_TRAIT_BUFFS].push({

        type: CONSTANT_BUFF_ACTION_PENALTY,
        source: "Simple Charm",
        magnitude: 1


     });

     processSegmentObject(getCombatSegment(currentCombat, character, COMBAT_ACTION_SIMPLE_CHARM));         

}



function flurryAction(character, numberActions, stuntKey, callback, flurryPlan, magicFlurry) {

    if (!magicFlurry) {

        magicFlurry = false;

    }

    $("#" + CONSTANT_HTML_ID_DICE_BOX).hide();

    if (!(character[CONSTANT_CHARACTER_CURRENT_FLURRY].flurrySet)) {

        if (character.key == COMBATANT_KEY_PC && !(stuntKey == CONSTANT_NO_STUNT)) {  //NPCs just stunt all the time, with the assumption their stunt is in the segment text

            currentPC.stunt(getPCStuntByKey(currentCombat, stuntKey).rating);
            getPCStuntByKey(currentCombat, stuntKey).used = true;

        }

        character[CONSTANT_CHARACTER_CURRENT_FLURRY] = {

            flurrySet: true,
            speed: 3,
            totalActions: parseInt(numberActions),
            remainingActions: parseInt(numberActions),
            weaponAttacks: 0,
            flurryPlan: flurryPlan,
            magicFlurry: magicFlurry

        };

    } else {

        checkForFlurrySpeedChange(character, character[CONSTANT_CHARACTER_CURRENT_ACTION].speed);  //This should only fire if there's an action in the pipe from this flurry.  It needs to be done here so that charms can alter the speed beforehand

    }

    if (character[CONSTANT_CHARACTER_CURRENT_FLURRY].flurryPlan) {

        callback = character[CONSTANT_CHARACTER_CURRENT_FLURRY].flurryPlan[0];
        character[CONSTANT_CHARACTER_CURRENT_FLURRY].flurryPlan.splice(0, 1);
    
    }
    
    callback();

    

}

function npcReestablishSurpriseAction(character, difficulty) {

    character[CONSTANT_CHARACTER_CURRENT_ACTION] = {
    
        action: COMBAT_ACTION_REESTABLISH_SURPRISE,
        speed: SPEED_MISCELLANEOUS,
        difficulty: difficulty    

    }; 

    character[CONSTANT_TRAIT_BUFFS].push({

        type: CONSTANT_BUFF_ACTION_PENALTY,
        source: "Miscellaneous Action",
        magnitude: 1


     });

     processSegmentObject(getCombatSegment(currentCombat, character, COMBAT_ACTION_REESTABLISH_SURPRISE));

     //Put the difficulty in via .html


}

function handleOpposeReestablishSurprise() {

    //PC opposing NPC only atm
    //Also assuming PC doesn't have relevant charms, as they're not supported yet anyway

    var actionOptions = getSelectedActionOptions();

    var willpowerBonus = getWPSpendAsBonus(currentPC, actionOptions.willpower);

    var character = getCombatCombatant(currentCombat, currentCombat.actingCharacter)

    currentPC.stunt(actionOptions.stuntRating);

    var witnessBonus = {

        type: CONSTANT_MUNDANE_BONUS,
        label: "Witness roll bonus",
        magnitude: 2

    };

    var difficulty = 0;

    if (character[CONSTANT_CHARACTER_CURRENT_ACTION].difficulty) {  

        difficulty = character[CONSTANT_CHARACTER_CURRENT_ACTION].difficulty;

    }

    var difficultyBonus = {

        type: CONSTANT_DIFFICULTY,
        magnitude: difficulty

    }

    var tempThreshold = buildPoolAndRoll({

        type: CONSTANT_MUNDANE_BONUS,
        label: "Wits",
        magnitude: currentPC[CONSTANT_TRAIT_WITS]
        
    }, {

        type: CONSTANT_MUNDANE_BONUS,
        label: "Awareness", 
        magnitude: currentPC[CONSTANT_TRAIT_AWARENESS]
        
    }, witnessBonus, currentPC.getStuntBonus(), willpowerBonus, getWoundPenaltyAsBonus(currentPC), difficultyBonus);

    if (tempThreshold < 0) {

        character.hidden = true;
        processSegmentObject(getCombatSegment(currentCombat, character, COMBAT_ACTION_REESTABLISH_SURPRISE_SUCCESS));

    } else {

        character.hidden = false;
        processSegmentObject(getCombatSegment(currentCombat, character, COMBAT_ACTION_REESTABLISH_SURPRISE_FAIL));

    }

}

function getElevationDelta(attacker, defender) {

    var attackerElevation = 0;
    var defenderElevation = 0;

    if (attacker.elevation) {

        attackerElevation = attacker.elevation;

    }

    if (defender.elevation) {

        defenderElevation = defender.elevation;

    }

    var tempElevationDelta = defenderElevation - attackerElevation;

    if (tempElevationDelta > 3) {

        tempElevationDelta = 3;

    }

    if (tempElevationDelta < -3) {

        tempElevationDelta = -3;

    }

    if (tempElevationDelta > 0 && (attacker[CONSTANT_TRAIT_WEAPON].ranged || attacker[CONSTANT_TRAIT_WEAPON].reach)) {

        tempElevationDelta = 0;

    }

    if (tempElevationDelta < 0 && defender[CONSTANT_TRAIT_WEAPON].reach) {

        tempElevationDelta = 0;

    }

    return tempElevationDelta;

}

function elevationMatters (combat) {

    //ie should we bother displaying elevation

    if (currentPC.elevation !== 0) {

        return true;

    }

    var i;

    for (i = 0; i < combat.combatants.length; i++) {

        if (combat.combatants[i].elevation !== 0) {

            return true;

        }

    }

    return false;

}


//################################################ COMBAT SEGMENTS #################################################################


function getCombatSegment(combat, character, action) {

    
    var tempSegment;

    currentCombatSegmentAction = action;  //so we can save and load it

    //lol nested if/else.  This is getting more complicated as the segment mechanic is extended to more use cases.
    
    if (action == COMBAT_ACTION_MISCELLANEOUS || action == COMBAT_ACTION_SIMPLE_CHARM) {

        tempSegment = getCombatSegmentWithKey(combat, character);

    } else {
    
        if (action == COMBAT_ACTION_ATTACK_HIT || action == COMBAT_ACTION_ATTACK_MISS || action == COMBAT_ACTION_DAMAGE_SUCCESS || action == COMBAT_ACTION_DAMAGE_FAIL) {
    
            tempSegment = getRawCombatSegment(combat, getCombatCombatant(combat, character[CONSTANT_CHARACTER_CURRENT_ACTION].target), action);

        } else {

            tempSegment = getRawCombatSegment(combat, character, action);

        }

    }

    tempSegment.actions = new Array();

    tempSegment.pcFlurryOptions = false;

    if (action == COMBAT_ACTION_GUARD || action == COMBAT_ACTION_AIM || action == COMBAT_ACTION_ATTACK_MISS || action == COMBAT_ACTION_DAMAGE_SUCCESS || action == COMBAT_ACTION_DAMAGE_FAIL || action == COMBAT_ACTION_INCAPACITATED || action == COMBAT_ACTION_DYING || action == COMBAT_ACTION_DEAD || action == COMBAT_ACTION_MISCELLANEOUS || action == COMBAT_ACTION_SIMPLE_CHARM || action === COMBAT_ACTION_REESTABLISH_SURPRISE_SUCCESS || action === COMBAT_ACTION_REESTABLISH_SURPRISE_FAIL) {

        //That is, we're displaying the final segment for an action.

       if (character[CONSTANT_CHARACTER_CURRENT_FLURRY].remainingActions <= 1) {

           tempSegment.actions.push({

               id: "combatSegmentAction0",
               type: "button",
               value: "Continue",
               functionKey: FUNCTION_KEY_COMBAT_FINISH_ACTION_CONTINUE

            });

        } else {

            character[CONSTANT_CHARACTER_CURRENT_FLURRY].remainingActions -= 1;

            //Magical side-effects land, Onslaught edition
            if (action == COMBAT_ACTION_ATTACK_MISS || action == COMBAT_ACTION_DAMAGE_SUCCESS || action == COMBAT_ACTION_DAMAGE_FAIL) {

                getCombatCombatant(combat, character[CONSTANT_CHARACTER_CURRENT_ACTION].target)[CONSTANT_TRAIT_BUFFS].push({

                    type: CONSTANT_BUFF_ONSLAUGHT_PENALTY,
                    source: character[CONSTANT_TRAIT_CHARACTER_SHORT_NAME],
                    magnitude: 1

                });

            }

            if (character.key === COMBATANT_KEY_PC) {

                tempSegment.pcFlurryOptions = true;
                tempSegment.pcFlurryOptionsHTML = getPCFlurryOptionsHTML(true);

            } else {

                //It's a flurrying NPC, woo

                tempSegment.actions.push({

                   id: "combatSegmentAction0",
                   type: "button",
                   value: "Continue",
                   functionKey: FUNCTION_KEY_COMBAT_NPC_FLURRY_CONTINUE

                });


            }

        }

    }

    if (action == COMBAT_ACTION_ATTACK_HIT) {

       tempSegment.actions.push({

           id: "combatSegmentAction0",
           type: "button",
           value: "Roll damage",
           functionKey: FUNCTION_KEY_COMBAT_ROLL_DAMAGE

        });

    }

    if (action == COMBAT_ACTION_PC_VICTORY || action == COMBAT_ACTION_PC_DEFEAT) {

        tempSegment.actions.push({

           id: "combatSegmentAction0",
           type: "button",
           value: "Reset Combat",
           functionKey: FUNCTION_KEY_COMBAT_RESET

        });

    }

    if (action == COMBAT_ACTION_PC_VICTORY) {

        tempSegment.actions.push({

           id: "combatSegmentAction1",
           type: "button",
           value: "Continue Tutorial",
           functionKey: FUNCTION_KEY_COMBAT_PC_VICTORY_CONTINUE

        });

    }

    if (action == COMBAT_ACTION_PC_ACTION_CHOICE) {

        tempSegment.pcCombatOptions = true;
        tempSegment.pcCombatOptionsHTML = getPCCombatOptionsHTML();

    }

    if (action === COMBAT_ACTION_REESTABLISH_SURPRISE) {

        //Currently only supports NPC attempting this, and this PC opposing

        tempSegment.actions.push({

           id: "combatSegmentAction0",
           type: "button",
           value: "Oppose Hide Attempt",
           functionKey: FUNCTION_KEY_COMBAT_OPPOSE_REESTABLISH_SURPRISE

        });


    }

    return tempSegment;

}

function getRawCombatSegment(combat, character, action) {

    //ie one without actions attached or otherwise monkeyed with

    var i;

    //Let's see if we can get an unused segment

    for (i = 0; i < combat.segmentBucket.length; i++) {

        if (!combat.segmentBucket[i].used && combat.segmentBucket[i].combatant == character.key && combat.segmentBucket[i].action == action) {

            currentCombatSegmentIndex = i;
            combat.segmentBucket[i].used = true;
            return combat.segmentBucket[i];

        }

    }

    //OK, didn't find any, let's go with the first default

    for (i = 0; i < combat.segmentBucket.length; i++) {

        if (combat.segmentBucket[i].default && combat.segmentBucket[i].combatant == character.key && combat.segmentBucket[i].action == action) {

            currentCombatSegmentIndex = i;
            combat.segmentBucket[i].used = true;
            return combat.segmentBucket[i];

        }

    }


    //Well shit, there wasn't a default.

    return {

       currentResponse: false,
       currentActionText: true,
       currentActionHTML: "<p><strong>Error: </strong> some lazy jerk didn't provide enough description text for this combat.</p>",
       actions: new Array()

    };


}



function getCombatSegmentWithKey(combat, character) {

    //This differes from getRawCombatSegment() in that it looks at the current action of the character and attempts to get a segment matching that action and the key stored with it.

    var i;

    var action = character[CONSTANT_CHARACTER_CURRENT_ACTION].action;

    var key = character[CONSTANT_CHARACTER_CURRENT_ACTION].key;

    //Let's see if we can get an unused segment

    for (i = 0; i < combat.segmentBucket.length; i++) {

        if (!combat.segmentBucket[i].used && combat.segmentBucket[i].combatant == character.key && combat.segmentBucket[i].action == action && combat.segmentBucket[i].key == key) {

            currentCombatSegmentIndex = i;
            combat.segmentBucket[i].used = true;
            return combat.segmentBucket[i];

        }

    }

    //OK, didn't find any, let's go with the first default

    for (i = 0; i < combat.segmentBucket.length; i++) {

        if (combat.segmentBucket[i].default && combat.segmentBucket[i].combatant == character.key && combat.segmentBucket[i].action == action && combat.segmentBucket[i].key == key) {

            currentCombatSegmentIndex = i;
            combat.segmentBucket[i].used = true;
            return combat.segmentBucket[i];

        }

    }


    //Well shit, there wasn't a default.

    return {

       currentResponse: false,
       currentActionText: true,
       currentActionHTML: "<p><strong>Error: </strong> some lazy jerk didn't provide enough description text for this combat.</p>",
       actions: new Array()

    };


}


//################################################ PC COMBAT OPTIONS #################################################################

function getAttackCharmOptions(character, flurry) {

    var idPrefix = "attackActionCharm";

    if (flurry) {

        idPrefix = "attackActionFlurryCharm";

    }

    var i;

    var j;

    var charmString = "";

    var tempCharm;

    for (i = 0; i < character[CONSTANT_TRAIT_CHARMS].length; i++) {

        if ((charmLibrary[character[CONSTANT_TRAIT_CHARMS][i]].ability === character[CONSTANT_TRAIT_WEAPON].ability) && charmLibrary[character[CONSTANT_TRAIT_CHARMS][i]].attackCharm  && currentPC.hasMotes(charmLibrary[character[CONSTANT_TRAIT_CHARMS][i]].costMotes)) {

            tempCharm = charmLibrary[character[CONSTANT_TRAIT_CHARMS][i]];

            charmString += "<div class=\"actionOption\" id=\"" + idPrefix + i + "\"><p><input type=\"checkbox\" name=\"" + idPrefix + i + "\" value=\"true\" id=\"" + idPrefix + i + "\"> <strong>" + tempCharm.label + " </strong> (" + tempCharm.type + ", " + tempCharm.duration + ", " + tempCharm.costLabel + "): " + tempCharm.shortDescription + "<input type=\"hidden\" id=\"" + idPrefix + "Key" + i + "\" value=\"" + tempCharm.key + "\" /></p>";

                if (tempCharm.excellency) {

                    charmString += "<p>Spend <select id=\"" + idPrefix + "Motes" + i + "\">";

                    for (j = 0; j < getDiceCapFromPool(character, { attribute: CONSTANT_TRAIT_DEXTERITY, ability: tempCharm.ability }); j++) {  //Assuming PC is Solar here, since specialty is not easy to get

                        if (currentPC.hasMotes(j + 1)) {

                            charmString += "<option value=\"" + (j + 1) + "\">" + (j + 1) + "</option>";

                        };

                    }

                    charmString += "</select> motes</p>";

                }

                charmString += "<p>From: <input type=\"radio\" name=\"" + idPrefix + "Pool" + i + "\" value=\"" + PREFERRED_POOL_ANY + "\" checked=\"checked\"> Either Pool &nbsp; <input type=\"radio\" name=\"" + idPrefix + "Pool" + i + "\" value=\"" + PREFERRED_POOL_PERSONAL_FIRST + "\"> Personal &nbsp; <input type=\"radio\" name=\"" + idPrefix + "Pool" + i + "\" value=\"" + PREFERRED_POOL_PERIPHERAL_FIRST + "\"> Peripheral &nbsp;</p></div>";


        }


    }

    if (charmString != "") {

        charmString = "<p><strong>Charms:</strong> (Current motes: " + currentPC[CONSTANT_TRAIT_PERSONAL_CURRENT] +" personal, " + currentPC[CONSTANT_TRAIT_PERIPHERAL_CURRENT] + " peripheral)</p>" + charmString;

    }

    return charmString;

}


function getSelectedAttackCharms(flurry) {

    var idPrefix = "attackActionCharm";

    if (flurry) {

        idPrefix = "attackActionFlurryCharm";

    }

    var i;

    var returnObject = {};

    for (i = 0; i < CONSTANT_ACTION_OPTION_CHARMS_MAX; i++) {  //This is potentially a problem if some PC ever has huge numbers of applicable attack charms

        if ($("input:checkbox[name=" + idPrefix + i + "]:checked").val() === "true") {

            returnObject["charm" + i] = {

                key: $("#" + idPrefix + "Key" + i).val(),
                motes: $("#" + idPrefix + "Motes" + i).val(),
                preferredPool: $("input:radio[name=" + idPrefix + "Pool" + i + "]:checked").val()

            }

        }

    }

    return returnObject;


}



function getDefenceCharmOptions(character, defence) {

    var idPrefix = defence + "Charm";

    var i;

    var j;

    var charmString = "";

    var validCharm = false;

    var tempCharm;

    for (i = 0; i < character[CONSTANT_TRAIT_CHARMS].length; i++) {

        validCharm = false;

        tempCharm = charmLibrary[character[CONSTANT_TRAIT_CHARMS][i]];

        //Various tests could be one big boolean operation, but that's a bit much even for me.

        if (defence === DV_PARRY && (tempCharm.ability === character[CONSTANT_TRAIT_WEAPON].ability)) {

            validCharm = true;

        }

        if (defence === DV_DODGE && tempCharm.ability === CONSTANT_TRAIT_DODGE) {

            validCharm = true;

        }

        //Everything below here should falsify, not truify, unless it's something wacky like an applicable Presence charm or whatever (or we ever implement Martial-ready)

        //Some specific tests for specific charms

        if ((tempCharm.key === CHARM_SOLAR_BULWARK_STANCE || tempCharm.key === CHARM_SOLAR_DIPPING_SWALLOW_DEFENCE) && (hasBuff(character, CONSTANT_BUFF_DV_PENALTY_REDUCTION_DEFENCE))) {

            validCharm = false;

        }
        

        if (tempCharm.key === CHARM_SOLAR_HEAVENLY_GUARDIAN_DEFENCE && currentPC.surprised) {

            validCharm = false;

        }


        //Lastly is it a defence charm we can afford?

        if ((!tempCharm.defenceCharm) || (!currentPC.hasMotes(tempCharm.costMotes))) {

            validCharm = false;

        } 

        if (validCharm) {
        
            charmString += "<div class=\"actionOption\" id=\"" + idPrefix + i + "\"><p><input type=\"checkbox\" name=\"" + idPrefix + i + "\" value=\"true\" id=\"" + idPrefix + i + "\"> <strong>" + tempCharm.label + " </strong> (" + tempCharm.type + ", " + tempCharm.duration + ", " + tempCharm.costLabel + "): " + tempCharm.shortDescription + "<input type=\"hidden\" id=\"" + idPrefix + "Key" + i + "\" value=\"" + tempCharm.key + "\" /></p>";

                if (tempCharm.excellency) {

                    charmString += "<p>Spend <select id=\"" + idPrefix + "Motes" + i + "\">";

                    for (j = 0; j < getDiceCapFromPool(character, { attribute: CONSTANT_TRAIT_DEXTERITY, ability: tempCharm.ability }, true); j++) {  //Assuming PC is Solar here, since specialty is not easy to get

                        if (character.hasMotes(j + 1)) {

                            charmString += "<option value=\"" + (j + 1) + "\">" + (j + 1) + "</option>";

                        };

                    }

                    charmString += "</select> motes</p>";

                }

             charmString += "<p>From: <input type=\"radio\" name=\"" + idPrefix + "Pool" + i + "\" value=\"" + PREFERRED_POOL_ANY + "\" checked=\"checked\"> Either Pool &nbsp; <input type=\"radio\" name=\"" + idPrefix + "Pool" + i + "\" value=\"" + PREFERRED_POOL_PERSONAL_FIRST + "\"> Personal &nbsp; <input type=\"radio\" name=\"" + idPrefix + "Pool" + i + "\" value=\"" + PREFERRED_POOL_PERIPHERAL_FIRST + "\"> Peripheral &nbsp;</p></div>";

        }

        //PoCB Cancel

        if (tempCharm.key === CHARM_SOLAR_PROTECTION_OF_CELESTIAL_BLISS && hasBuff(currentPC, CONSTANT_BUFF_PROTECTION_OF_CELESTIAL_BLISS) && (!currentPC.surprised) && defence === DV_PARRY) {

            charmString += "<div class=\"actionOption\" id=\"" + idPrefix + i + "\"><p><input type=\"checkbox\" name=\"" + idPrefix + i + "\" value=\"true\" id=\"" + idPrefix + i + "\"> <strong>" + tempCharm.label + " </strong>: You may cancel Protection of Celestial Bliss to generate a single perfect parry at no cost.  You may not activate the charm again this scene.<input type=\"hidden\" id=\"" + idPrefix + "Key" + i + "\" value=\"" + tempCharm.key + "\" /></p></div>";

        }


    }

    if (charmString != "") {

        charmString = "<p><strong>Charms:</strong> (Current motes: " + currentPC[CONSTANT_TRAIT_PERSONAL_CURRENT] +" personal, " + currentPC[CONSTANT_TRAIT_PERIPHERAL_CURRENT] + " peripheral)</p>" + charmString;

    }

    return charmString;

}


function getSelectedDefenceCharms(defence) {

    var idPrefix = defence + "Charm";

    var i;

    var returnObject = {};

    for (i = 0; i < CONSTANT_ACTION_OPTION_CHARMS_MAX; i++) {  //This is potentially a problem if some PC ever has huge numbers of applicable attack charms

        if ($("input:checkbox[name=" + idPrefix + i + "]:checked").val() === "true") {

            returnObject["charm" + i] = {

                key: $("#" + idPrefix + "Key" + i).val(),
                motes: $("#" + idPrefix + "Motes" + i).val(),
                preferredPool: $("input:radio[name=" + idPrefix + "Pool" + i + "]:checked").val()

            }

        }

    }

    return returnObject;

}


function hasValidTargets(combat) {

    var i;

    for (i = 0; i < combat.combatants.length; i++) {

        if (isAlive(combat.combatants[i]) && (!combat.combatants[i].hidden)) {

            return true;

        }       

    }

    return false;
}


function getPCCombatOptionsHTML() {

    var i;
    
    var tempHTML = "";
    
    tempHTML += "<div id=\"pcCombatOptionsAccordion\">";



    //ATTACK

    tempHTML += "<h3><a href=\"#\">Attack (Speed "+ currentPC[CONSTANT_TRAIT_WEAPON].speed +"/DV -1)</a></h3>";
    tempHTML += "<div><p>Attack chosen target with equipped weapon.</p>";

    if (hasValidTargets(currentCombat)) {

        tempHTML += "<p><strong>Target: </strong><select id=\"attackActionTarget\">"

            for (i = 0; i < currentCombat.combatants.length; i++) {

              if (isAlive(currentCombat.combatants[i]) && (!currentCombat.combatants[i].hidden)) {
          
                    tempHTML += "<option value=\"" + currentCombat.combatants[i].key +"\"";

                    if (i == 0) {

                        tempHTML += " selected=\"selected\" ";

                    }

                    tempHTML += ">" + currentCombat.combatants[i][CONSTANT_TRAIT_CHARACTER_SHORT_NAME] + "</option>"; 

              }

            }

        tempHTML += "</select></p>";

        tempHTML += getAttackCharmOptions(currentPC);

        tempHTML += "<p><strong>Stunt:</strong></p><p><ul id=\"attackStuntsList\">";

        tempHTML += "<li><input type=\"radio\" name=\"attackStuntRadio\" value=\"" + CONSTANT_NO_STUNT + "\" checked=\"checked\"> &quot;I attack them with my weapon&quot;</li>";

        tempHTML += getPCStuntsString(currentCombat, COMBAT_ACTION_ATTACK);

        tempHTML += "</ul></p>";

        tempHTML += getWPSpendHTML("attackAction", currentCombat);

        tempHTML += "<p><input type=\"button\" id=\"pcCombatOptionAttackAction\" value=\"Attack Target\" /></p>";

    } else {

        tempHTML += "<p><strong>No valid targets:</strong> all opponents are currently hidden or dead.</p>";

    }

    tempHTML += "</div>";


    //FLURRY

    if (flags[FLAG_FLURRY_UNLOCKED]) {

        tempHTML += "<h3><a href=\"#\">Flurry (Speed Varies/DV Varies)</a></h3>";
        tempHTML += "<div><p>Take multiple actions on a single tick, beginning with the action selected below.  Speed is equal to the highest speed of all actions in the flurry.  The DV penalty is the total of that of all actions in the flurry.  The first action takes an internal penalty equal to the number of actions, each subsequent action takes a cumulative one die additional penalty.  A weapon may only make a number of attacks in a flurry up to its Rate.</p>";

        tempHTML += "<p><strong>Number of Actions: </strong><select id=\"flurryActionNumberActions\">";

            for (i = 2; i < 6; i++) {

                tempHTML += "<option value=\""+ i + "\"";

                if (i == 2) {

                    tempHTML += " selected=\"selected\" ";

                }

                tempHTML += ">" + i + "</option>"; 

            }

        tempHTML += "</select></p>";
        tempHTML += "<p><strong>Penalty on first action: </strong><span id=\"multipleActionPenaltyFirstTarget\">2</span></p>";              
        tempHTML += "<p><strong>Penalty on last action: </strong><span id=\"multipleActionPenaltyLastTarget\">3</span></p>";

        tempHTML += "<p><strong>Stunt:</strong></p><p><ul id=\"flurryStuntsList\">";

        tempHTML += "<li><input type=\"radio\" name=\"flurryStuntRadio\" value=\"" + CONSTANT_NO_STUNT + "\" checked=\"checked\"> &quot;I use a flurry.&quot;</li>";

        tempHTML += getPCStuntsString(currentCombat, COMBAT_ACTION_FLURRY);

        tempHTML += "</ul></p>";

        tempHTML += getPCFlurryOptionsHTML(false);
        
        tempHTML += "</div>";
    }

    
    //AIM

    if (flags[FLAG_AIM_UNLOCKED]) {

        tempHTML += "<h3><a href=\"#\">Aim (Speed 3/DV -1)</a></h3>";
        tempHTML += "<div><p>Choose target, then wait for 3 ticks before attacking.  Grants a +3 bonus to your attack.  You do not refresh DV before attacking.</p>";
        tempHTML += "<p><input type=\"button\" id=\"pcCombatOptionAimAction\" value=\"Take Aim Action\" /></p></div>";

    }


    //GUARD

    if (flags[FLAG_GUARD_UNLOCKED]) {

        tempHTML += "<h3><a href=\"#\">Guard (Speed 3/DV -0)</a></h3>";
        tempHTML += "<div><p>Wait 3 ticks with no DV penalty.</p>";
        tempHTML += "<p><input type=\"button\" id=\"pcCombatOptionGuardAction\" value=\"Take Guard Action\" /></p></div>";

    }

    //MISC ACTIONS

    if (hasAvailableMiscActions(currentCombat)) {

        tempHTML += getMiscActionsHTML(currentCombat);


    }

    //close it up

    tempHTML += "</div>";


    return tempHTML;
}


function hasAvailableMiscActions(combat) {

    var i;

    for (i = 0; i < combat.validMiscActions.length; i++) {

        if ((!combat.validMiscActions[i].used) || combat.validMiscActions[i].repeatable) {

            return true;

        }

    }

    return false;

}

function getMiscActionsHTML(combat) {

    var i;

    var tempHTML;

    tempHTML = "<h3><a href=\"#\">Miscelleaneous Action (Speed 5/DV Varies)</a></h3>";

    tempHTML += "<div><p>Along with canonical miscelleanous actions, such as drawing a weapon, a miscellaneous action can be used to interact with the specific circumstances of the battlefied.</p>";

    tempHTML += "<div id=\"pcMiscOptionsAccordion\">";

    for (i = 0; i < combat.validMiscActions.length; i++) {

        if ((!combat.validMiscActions[i].used) || combat.validMiscActions[i].repeatable) {

            tempHTML += "<h3><a href=\"#\">" + combat.validMiscActions[i].title + " (Speed 5/DV -" + combat.validMiscActions[i].dvPenalty + ")</a></h3>";
            tempHTML += "<div><p>" + combat.validMiscActions[i].description + "</p>";
            tempHTML += "<p><input type=\"button\" id=\"pcMiscAction" + i + "\" value=\"Execute Action\" /></p></div>";

        }

    }

    tempHTML += "</div></div>";

    return tempHTML;

}

function getMiscActionsForFlurry(combat) {

var i;

    var tempHTML;

    tempHTML = "<h3><a href=\"#\">Miscelleaneous Action (Speed 5/DV Varies)</a></h3>";

    tempHTML += "<div><p>Along with canonical miscelleanous actions, such as drawing a weapon, a miscellaneous action can be used to interact with the specific circumstances of the battlefied.</p>";

    tempHTML += "<div id=\"pcMiscFlurryAccordion\">";

    for (i = 0; i < combat.validMiscActions.length; i++) {

        if ((!combat.validMiscActions[i].used) || combat.validMiscActions[i].repeatable) {

            tempHTML += "<h3><a href=\"#\">" + combat.validMiscActions[i].title + " (Speed 5/DV -" + combat.validMiscActions[i].dvPenalty + ")</a></h3>";
            tempHTML += "<div><p>" + combat.validMiscActions[i].description + "</p>";
            tempHTML += "<p><input type=\"button\" id=\"pcMiscFlurryAction" + i + "\" value=\"Execute Action\" /></p></div>";

        }

    }

    tempHTML += "</div></div>";

    return tempHTML;

}

function getPCFlurryOptionsHTML(cancel) {

    var i;
    
    var tempHTML = "";

    //Open

    tempHTML += "<div id=\"pcFlurryOptionsAccordion\">";

    //Attack

    if (currentPC[CONSTANT_CHARACTER_CURRENT_FLURRY].weaponAttacks < currentPC[CONSTANT_TRAIT_WEAPON].rate) {

        tempHTML += "<h3><a href=\"#\">Attack (Speed "+ currentPC[CONSTANT_TRAIT_WEAPON].speed +"/DV -1)</a></h3>";
        tempHTML += "<div><p>Attack chosen target with equipped weapon.</p>";

        if (hasValidTargets(currentCombat)) {

            tempHTML += "<p><strong>Target: </strong><select id=\"attackActionFlurryTarget\">"

                for (i = 0; i < currentCombat.combatants.length; i++) {

                  if (isAlive(currentCombat.combatants[i]) && (!currentCombat.combatants[i].hidden)) {
          
                        tempHTML += "<option value=\"" + currentCombat.combatants[i].key +"\"";

                        if (i == 0) {

                            tempHTML += " selected=\"selected\" ";

                        }

                        tempHTML += ">" + currentCombat.combatants[i][CONSTANT_TRAIT_CHARACTER_SHORT_NAME] + "</option>"; 

                  }

                }

            tempHTML += "</select></p>";

            tempHTML += getAttackCharmOptions(currentPC, true);

            tempHTML += getWPSpendHTML("attackActionFlurry", currentCombat);

            tempHTML += "<p><input type=\"button\" id=\"pcFlurryOptionAttackAction\" value=\"Attack Target\" /></p>";

        } else {

            tempHTML += "<p><strong>No valid targets:</strong> all opponents are currently hidden or dead.</p>";

        }

        tempHTML += "</div>";

    }

    //Misc Actions

    if (hasAvailableMiscActions(currentCombat)) {

        tempHTML += getMiscActionsForFlurry(currentCombat);

    }
    
    //Cancel
    if (cancel) {

        tempHTML += "<h3><a href=\"#\">Cancel Flurry</a></h3>";

        tempHTML += "<div><p>Cancel the remaining actions in your flurry and end your turn.  This is useful if you wish to avoid further DV penalties from taking actions.</p>";
        
        tempHTML += "<p><input type=\"button\" id=\"pcFlurryOptionCancel\" value=\"Cancel Flurry\" /></p></div>";

    }


    //close it up

    tempHTML += "</div>";

    return tempHTML;

}

function getPCDVOptionsHTML() {

    var i;
    
    var tempHTML = "";

    var tempFlurry = getCombatCombatant(currentCombat, currentCombat.actingCharacter)[CONSTANT_CHARACTER_CURRENT_FLURRY];

    
    tempHTML += "<div id=\"pcCombatOptionsAccordion\">";


    //PARRY

    tempHTML += "<h3><a href=\"#\">Parry (DV " + getTotalParryDV(currentPC) + ")</a></h3>";
    tempHTML += "<div><p>Deflect attack with equipped weapon.</p>";

    tempHTML += getDefenceCharmOptions(currentPC, DV_PARRY);

    if (tempFlurry.flurrySet && tempFlurry.defenceStunt) {

        tempHTML += "<p>Previous stunt applies to all defences for this flurry.</p>";

    } else {

        tempHTML += "<p><strong>Stunt:</strong></p><p><ul id=\"parryStuntsList\">";

        tempHTML += "<li><input type=\"radio\" name=\"parryStuntRadio\" value=\"" + CONSTANT_NO_STUNT + "\" checked=\"checked\"> &quot;I parry the attack&quot;</li>";

        tempHTML += getPCStuntsString(currentCombat, COMBAT_ACTION_PARRY);

        tempHTML += "</ul></p>";

    }

    tempHTML += getWPSpendHTML("parryAction", currentCombat);

    tempHTML += "<p><input type=\"button\" id=\"pcCombatOptionParryAction\" value=\"Choose Parry DV\" /></p></div>";

    
    //DODGE

    tempHTML += "<h3><a href=\"#\">Dodge (DV " + getTotalDodgeDV(currentPC) + ")</a></h3>";
    tempHTML += "<div><p>Avoid attack by moving out of the way.</p>";

    tempHTML += getDefenceCharmOptions(currentPC, DV_DODGE);

    if (tempFlurry.flurrySet && tempFlurry.defenceStunt) {

        tempHTML += "<p>Previous stunt applies to all defences for this flurry.</p>";

    } else {

        tempHTML += "<p><strong>Stunt:</strong></p><p><ul id=\"dodgeStuntsList\">";

        tempHTML += "<li><input type=\"radio\" name=\"dodgeStuntRadio\" value=\"" + CONSTANT_NO_STUNT + "\" checked=\"checked\"> &quot;I dodge the attack&quot;</li>";

        tempHTML += getPCStuntsString(currentCombat, COMBAT_ACTION_DODGE);

        tempHTML += "</ul></p>";

    }

    tempHTML += getWPSpendHTML("dodgeAction", currentCombat);
        
    tempHTML += "<p><input type=\"button\" id=\"pcCombatOptionDodgeAction\" value=\"Choose Dodge DV\" /></p></div>";


    //close it up

    tempHTML += "</div>";


    return tempHTML;


}

function getWPSpendHTML(idPrefix, combat) {

    var tempHTML = "";
    var i;

    tempHTML += "<p><input type=\"checkbox\" name=\"" + idPrefix + "SpendWillpower\" value=\"true\" id=\"" + idPrefix + "SpendWillpower\"> <strong>Spend Willpower</strong> &nbsp; <input type=\"radio\" name=\"" + idPrefix + "WPSpendRadio\" value=\"" + CONSTANT_WP_AUTO_SUCCESS + "\" checked=\"checked\"> for +1 success";
    
        if (combat.validVirtues.length > 0 && characterHasChannels(currentPC, combat.validVirtues)) {
        
             tempHTML += "&nbsp; <input type=\"radio\" name=\"" + idPrefix + "WPSpendRadio\" value=\"" + CONSTANT_WP_VIRTUE_CHANNEL + "\"> to activate <select id=\"" + idPrefix + "ChanneledVirtue\">";
            
             for (i = 0; i < combat.validVirtues.length; i++) {

                if (characterHasChannels(currentPC, [combat.validVirtues[i]])) {

                    tempHTML += "<option value=\"" + combat.validVirtues[i] + "\">" + virtueLibrary[combat.validVirtues[i]].label + " (" + currentPC[virtueLibrary[combat.validVirtues[i]].trait] +" dots "+ currentPC[virtueLibrary[combat.validVirtues[i]].tempTrait] +" boxes)</option>";

                }

             }
            
            tempHTML += "</select></p>";

        }

    return tempHTML;

}

function getPCStuntsString(combat, action) {

    var tempStuntHTMLArray = new Array();

    var actionRadio = "";

    if (action == COMBAT_ACTION_ATTACK) {

        actionRadio = "attack";

    }

    if (action == COMBAT_ACTION_PARRY) {

        actionRadio = "parry";

    }

    if (action == COMBAT_ACTION_DODGE) {

        actionRadio = "dodge";

    }

    if (action == COMBAT_ACTION_FLURRY) {

        actionRadio = "flurry";

    }

    var i;

    for (i = 0; i < combat.stuntBucket.length; i++) {

        if (!combat.stuntBucket[i].used && combat.stuntBucket[i].action == action && tempStuntHTMLArray.length < CONSTANT_MAX_STUNTS) {

            tempStuntHTMLArray.push("<li><input type=\"radio\" name=\"" + actionRadio + "StuntRadio\" value=\"" + combat.stuntBucket[i].key + "\"> " + combat.stuntBucket[i].text + "</li>");

        }

    }

    return tempStuntHTMLArray.join("");


}


function getPCStuntsStringByActionKey(combat, action, actionKey, radioPrefix) {     //Used when stunts aren't interchangeable: eg Misc actions

    var tempStuntHTMLArray = new Array();

    var i;

    for (i = 0; i < combat.stuntBucket.length; i++) {

        if (!combat.stuntBucket[i].used && combat.stuntBucket[i].action == action && tempStuntHTMLArray.length < CONSTANT_MAX_STUNTS && combat.stuntBucket[i].actionKey == actionKey) {

            tempStuntHTMLArray.push("<li><input type=\"radio\" name=\"" + radioPrefix + "StuntRadio\" value=\"" + combat.stuntBucket[i].key + "\"> " + combat.stuntBucket[i].text + "</li>");

        }

    }

    return tempStuntHTMLArray.join("");

}




function getPCStuntByKey(combat, stuntKey) {

    var i;

    for (i = 0; i < combat.stuntBucket.length; i++) {

        if (combat.stuntBucket[i].key == stuntKey) {

            return combat.stuntBucket[i];

        }

    }

}


function hookUpPCCombatOptions() {

    var i;

    $("#pcCombatOptionsAccordion").accordion({autoHeight: false});

    hookUpPCFlurryOptions();

    $("#pcMiscOptionsAccordion").accordion({autoHeight: false});

    if (hasAvailableMiscActions(currentCombat)) {

        for (i = 0; i < currentCombat.validMiscActions.length; i++) {

            if ((!currentCombat.validMiscActions[i].used) || currentCombat.validMiscActions[i].repeatable) {

                $("#pcMiscAction" + i).click(currentCombat.validMiscActions[i].callback);

            }
        }

    }

    $("#pcCombatOptionAimAction").click(function(event) {

        aimAction(currentCombat, currentPC);

    });

    $("#pcCombatOptionGuardAction").click(function(event) {

        guardAction(currentCombat, currentPC);

    });

    $("#pcCombatOptionAttackAction").click(function (event) {

        var willpower = {
        
            type: CONSTANT_WP_NONE
        
        };

        if ($("input:checkbox[name=attackActionSpendWillpower]:checked").val() == "true") {

            willpower = {
            
                type: $("input:radio[name=attackActionWPSpendRadio]:checked").val(),
                virtue: $("#attackActionChanneledVirtue").val()
            
            };

        }

        pcAttackAction(currentCombat, currentPC, $("#attackActionTarget").val(), willpower, $("input:radio[name=attackStuntRadio]:checked").val(), getSelectedAttackCharms(false));

    });

    $("#flurryActionNumberActions").change(function (event) {

        var numActions = $("#flurryActionNumberActions").val();

        $("#multipleActionPenaltyFirstTarget").html(numActions);

        $("#multipleActionPenaltyLastTarget").html((2 * numActions) - 1);

    });

}


function hookUpPCFlurryOptions() {

    $("#pcFlurryOptionsAccordion").accordion({autoHeight: false});

    $("#pcFlurryOptionAttackAction").click(function(event) {

            var willpower = {
        
            type: CONSTANT_WP_NONE
        
        };

        if ($("input:checkbox[name=attackActionFlurrySpendWillpower]:checked").val() == "true") {

            willpower = {
            
                type: $("input:radio[name=attackActionFlurryWPSpendRadio]:checked").val(),
                virtue: $("#attackActionFlurryChanneledVirtue").val()
            
            };

        }

        flurryAction(currentPC, $("#flurryActionNumberActions").val(), $("input:radio[name=flurryStuntRadio]:checked").val(), function(){ pcAttackAction(currentCombat, currentPC, $("#attackActionFlurryTarget").val(), willpower, CONSTANT_FLURRY_STUNT, getSelectedAttackCharms(true)); });

    });


    $("#pcMiscFlurryAccordion").accordion({autoHeight: false});

    if (hasAvailableMiscActions(currentCombat)) {

        for (i = 0; i < currentCombat.validMiscActions.length; i++) {

            if ((!currentCombat.validMiscActions[i].used) || currentCombat.validMiscActions[i].repeatable) {

                $("#pcMiscFlurryAction" + i).click(currentCombat.validMiscActions[i].flurryCallback);

            }
        }

    }

    $("#pcFlurryOptionCancel").click(function(event) {

        finishAction(currentCombat, currentPC);

    });

}

function hookUpPCDefenceOptions(npcBonuses) {

    $("#pcCombatOptionsAccordion").accordion();

    $("#pcCombatOptionParryAction").click(function (event) {
      
        var willpower = {
        
            type: CONSTANT_WP_NONE
        
        };

        if ($("input:checkbox[name=parryActionSpendWillpower]:checked").val() == "true") {

            willpower = {
            
                type: $("input:radio[name=parryActionWPSpendRadio]:checked").val(),
                virtue: $("#parryActionChanneledVirtue").val()
            
            };

        }

        handleNPCAttack(currentCombat, getCombatCombatant(currentCombat, currentCombat.actingCharacter), DV_PARRY, willpower, $("input:radio[name=parryStuntRadio]:checked").val(), npcBonuses, getSelectedDefenceCharms(DV_PARRY));

    });

    $("#pcCombatOptionDodgeAction").click(function (event) {

        var willpower = {
        
            type: CONSTANT_WP_NONE
        
        };

        if ($("input:checkbox[name=dodgeActionSpendWillpower]:checked").val() == "true") {

            willpower = {
            
                type: $("input:radio[name=dodgeActionWPSpendRadio]:checked").val(),
                virtue: $("#dodgeActionChanneledVirtue").val()
            
            };

        }
        handleNPCAttack(currentCombat, getCombatCombatant(currentCombat, currentCombat.actingCharacter), DV_DODGE, willpower, $("input:radio[name=dodgeStuntRadio]:checked").val(), npcBonuses, getSelectedDefenceCharms(DV_DODGE));

    });


}



//################################################ COMBAT DV DERIVATION STRING #################################################################

function getBaseDVDerivationString(character, chosenDV, attackType) {

    var tempString = "<p><strong>Base ";

    if (chosenDV == DV_PARRY) {

        tempString += "Parry DV:</strong> ";

        tempString += getEquippedParryDV(character) + "</p>";

    }

    if (chosenDV == DV_DODGE) {

        tempString += "Dodge DV:</strong> ";

        tempString += getDodgeDV(character) + "</p>";

    }

    tempString += "<p><strong>Action Penalty: </strong>-" + getBuffTotal(character, CONSTANT_BUFF_ACTION_PENALTY) + "</p>";

    tempString += "<p><strong>Wound Penalty: </strong>" + getCurrentWoundPenaltyLabel(character) + "</p>";

    if (getBuffTotal(character, CONSTANT_BUFF_ONSLAUGHT_PENALTY) > 0) {

        tempString += "<p><strong>Onslaught Penalty: </strong>-" + getBuffTotal(character, CONSTANT_BUFF_ONSLAUGHT_PENALTY) + "</p>";

    }

    /*

    if (attackType === CONSTANT_ATTACK_TYPE_MELEE && getBuffTotal(character[CONSTANT_TRAIT_BUFFS], CONSTANT_BUFF_SHIELD_BONUS_MELEE) > 0) {

        tempString += "<p><strong>Shield/Cover bonus (vs melee): </strong>" + getBuffTotal(character[CONSTANT_TRAIT_BUFFS], CONSTANT_BUFF_SHIELD_BONUS_MELEE) + "</p>";

    }
    
    if (attackType === CONSTANT_ATTACK_TYPE_RANGED && getBuffTotal(character[CONSTANT_TRAIT_BUFFS], CONSTANT_BUFF_SHIELD_BONUS_RANGED) > 0) {
    
        tempString += "<p><strong>Shield/Cover bonus (vs ranged): </strong>" + getBuffTotal(character[CONSTANT_TRAIT_BUFFS], CONSTANT_BUFF_SHIELD_BONUS_RANGED) + "</p>";

    } */


    return tempString;

}


function hookUpDVDerivationDialogue() {

    $("#diceRollerDV").css("cursor", "pointer");

    $("#diceRollerDV").click(function (event) {

        $combatDialogue.html(currentDVDerivationString);

        $combatDialogue.dialog({

            title: "Worked DV"

        });

        $combatDialogue.dialog("open");

        return false;


    });




}

//################################################ COMBAT DIALOGUE (EW GLOBAL) #################################################################

var $combatDialogue = $("<div></div>").dialog({  //ew global!

    autoOpen: false

});


//################################################ ACTUALLY DRAWING THE COMBAT TRACKER #################################################################

function fillCombatTrackerFromCombat(combat) {

    $("#combatTrackerTitleTarget").html(combat.name);

    $("#reactionCountTarget").html(combat.reactionCount);

    $("#currentTickLabelTarget").html(combat.currentTick);

    $("#currentTickActors").html(getTickActorsString(combat, combat.currentTick));

    var i;

    var tempHTML = "";

    for (i = 1; i < 7; i++) {

        $("#nextTickLabel" + i).html(combat.currentTick + i);
        $("#nextTickActors" + i).html(getTickActorsString(combat, combat.currentTick + i));

    }


    $("#combatTrackerCombatants").html("<div id=\"combatantPC\" class=\"combatant\"><div id=\"combatantNamePC\" class=\"combatantName\"></div><div id=\"combatantWeaponPC\" class=\"combatantWeapon\"><strong>Weapon: </strong><span id=\"combatantWeaponTargetPC\"></span></div><div id=\"combatantArmourPC\" class=\"combatantArmour\"><strong>Armour: </strong><span id=\"combatantArmourTargetPC\"></span></div><div id=\"combatantDVPC\" class=\"combatantDV\"><strong>Best DV: </strong><span id=\"combatantDVTargetPC\"></span></div><div id=\"combatantElevationPC\" class=\"combatantElevation\"><strong>Elevation: </strong><span id=\"combatantElevationTargetPC\"></span></div><div id=\"combatantWoundPC\" class=\"combatantWound\"><strong>Wound Penalty: </strong><span id=\"combatantWoundTargetPC\"></span></div><div id=\"combatantEssencePC\" class=\"combatantEssence\"><strong>Essence and Charms</strong></div><div id=\"combatantBuffsPC\" class=\"combatantBuffs\"><strong>Active Effects</strong></div></div>");

    $("#combatantNamePC").html(currentPC[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]);

    $("#combatantWeaponTargetPC").html(currentPC[CONSTANT_TRAIT_WEAPON].label);

    $("#combatantWeaponPC").css("cursor", "pointer");

    $("#combatantWeaponPC").click(function (event) {

        $combatDialogue.html("<p><strong>" + currentPC[CONSTANT_TRAIT_WEAPON].label + "</strong></p>");

        $combatDialogue.append("<p><strong>Speed: </strong>" + currentPC[CONSTANT_TRAIT_WEAPON].speed + "</p>");

        $combatDialogue.append("<p><strong>Accuracy: </strong>" + getEquippedAccuracy(currentPC) + "</p>");

        $combatDialogue.append("<p><strong>Damage: </strong>" + getEquippedBaseDamage(currentPC) + currentPC[CONSTANT_TRAIT_WEAPON].damageType + "</p>");

        $combatDialogue.append("<p><strong>Parry DV: </strong>" + getEquippedParryDV(currentPC) + "</p>");

        $combatDialogue.append("<p><strong>Rate: </strong>" + currentPC[CONSTANT_TRAIT_WEAPON].rate + "</p>");

        $combatDialogue.append("<p><strong>Range: </strong>" + currentPC[CONSTANT_TRAIT_WEAPON].range + "</p>");

        $combatDialogue.append("<p><strong>Tags: </strong>" + currentPC[CONSTANT_TRAIT_WEAPON].tags + "</p>");

        $combatDialogue.dialog({

            title: currentPC[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

        });

        $combatDialogue.dialog("open");

        return false;


    });

    
    
    $("#combatantArmourTargetPC").html(currentPC[CONSTANT_TRAIT_ARMOUR].label);
   
    $("#combatantArmourPC").css("cursor", "pointer");

    $("#combatantArmourPC").click(function (event) {

        $combatDialogue.html("<p><strong>" + currentPC[CONSTANT_TRAIT_ARMOUR].label + "</strong></p>");

        $combatDialogue.append("<p><strong>Bashing Soak: </strong>" + getArmouredBashingSoak(currentPC) + "</p>");

        $combatDialogue.append("<p><strong>Lethal Soak: </strong>" + getArmouredLethalSoak(currentPC) + "</p>");

        $combatDialogue.append("<p><strong>Aggravated Soak: </strong>" + getArmouredAggravatedSoak(currentPC) + "</p>");

        if (currentPC[CONSTANT_TRAIT_ARMOUR].hardness) {

            $combatDialogue.append("<p><strong>Hardness: </strong>" + currentPC[CONSTANT_TRAIT_ARMOUR].hardnessBashing + "B/" + currentPC[CONSTANT_TRAIT_ARMOUR].hardnessLethal +"L</p>");

        }

        $combatDialogue.append("<p><strong>Mobility: </strong>" + currentPC[CONSTANT_TRAIT_ARMOUR].mobility + "</p>");

        $combatDialogue.append("<p><strong>Fatigue: </strong>" + currentPC[CONSTANT_TRAIT_ARMOUR].fatigue + "</p>");

        $combatDialogue.dialog({

            title: currentPC[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

        });

        $combatDialogue.dialog("open");

        return false;


    });



    $("#combatantDVTargetPC").html(getBestDV(currentPC).dv + " (" + getBestDV(currentPC).label + ")");

    $("#combatantDVPC").css("cursor", "pointer");

    $("#combatantDVPC").click(function (event) {

        $combatDialogue.html("<p><strong>Base Parry DV: </strong>" + getEquippedParryDV(currentPC) + "</p>");

        $combatDialogue.append("<p><strong>Base Dodge DV: </strong>" + getDodgeDV(currentPC) + "</p>");

        $combatDialogue.append(getMiscDVBonusString(currentPC));

        $combatDialogue.append("<p><strong>Action Penalty: </strong>" + getBuffTotal(currentPC, CONSTANT_BUFF_ACTION_PENALTY) + "</p>");

        $combatDialogue.append("<p><strong>Wound Penalty: </strong>" + getCurrentWoundPenaltyLabel(currentPC) + "</p>");

        $combatDialogue.append("<p><strong>Total Parry DV: </strong>" + getTotalParryDV(currentPC) + "</p>");

        $combatDialogue.append("<p><strong>Total Dodge DV: </strong>" + getTotalDodgeDV(currentPC) + "</p>");

       /* $combatDialogue.append("<p><br/><br/><strong>Shield/Cover bonus (vs melee): </strong>" + getBuffTotal(currentPC[CONSTANT_TRAIT_BUFFS], CONSTANT_BUFF_SHIELD_BONUS_MELEE) + "</p>");

        $combatDialogue.append("<p><strong>Shield/Cover bonus (vs ranged): </strong>" + getBuffTotal(currentPC[CONSTANT_TRAIT_BUFFS], CONSTANT_BUFF_SHIELD_BONUS_RANGED) + "</p>"); */

        $combatDialogue.dialog({

            title: currentPC[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

        });

        $combatDialogue.dialog("open");

        return false;


    });


    if (elevationMatters(combat)) {

        $("#combatantElevationTargetPC").html(currentPC.elevation);
        $("#combatantElevationPC").show();

    }

    
    $("#combatantWoundTargetPC").html(getCurrentWoundPenaltyLabel(currentPC));

    $("#combatantWoundPC").css("cursor", "pointer");

    $("#combatantWoundPC").click(function (event) {
        
        var tempHTML = "";

        tempHTML = "<div id=\"combatTrackerHealthLevelsWrapper\">";

        tempHTML += "<div class=\"healthLevels\"><div class=\"healthLevelsLabel\">- 0</div><div class=\"healthLevelsBoxesDialogue\">" + getHealthLevelsCharacterSheetString(currentPC, 0, "dialogueHealthLevels0Box") + "</div></div>";
        tempHTML += "<div class=\"healthLevels\"><div class=\"healthLevelsLabel\">- 1</div><div class=\"healthLevelsBoxesDialogue\">" + getHealthLevelsCharacterSheetString(currentPC, -1, "dialogueHealthLevels1Box") + "</div></div>";
        tempHTML += "<div class=\"healthLevels\"><div class=\"healthLevelsLabel\">- 2</div><div class=\"healthLevelsBoxesDialogue\">" + getHealthLevelsCharacterSheetString(currentPC, -2, "dialogueHealthLevels2Box") + "</div></div>";
        tempHTML += "<div class=\"healthLevels\"><div class=\"healthLevelsLabel\">- 4</div><div class=\"healthLevelsBoxesDialogue\">" + getHealthLevelsCharacterSheetString(currentPC, -4, "dialogueHealthLevels4Box") + "</div></div>";
        tempHTML += "<div class=\"healthLevels\"><div class=\"healthLevelsLabel\">Incapacitated</div><div class=\"healthLevelsBoxesDialogue\">" + getHealthLevelsCharacterSheetString(currentPC, CONSTANT_TRAIT_HEALTH_INCAPACITATED, "dialogueHealthLevelsIncapacitatedBox") + "</div></div>";
        tempHTML += "<div class=\"healthLevels\"><div class=\"healthLevelsLabel\">Dying</div><div class=\"healthLevelsBoxesDialogue\">" + getHealthLevelsCharacterSheetString(currentPC, CONSTANT_TRAIT_HEALTH_DYING, "dialogueHealthLevelsDyingBox") + "</div></div>";
        tempHTML += "<div class=\"clear\">&nbsp;</div></div><div><p><strong>Key:</strong></p><p><img src=\"" + CONSTANT_IMAGE_URL_BOX_EMPTY + "\"> &nbsp; Unhurt</p><p><img src=\"" + CONSTANT_IMAGE_URL_BOX_BASHING + "\"> &nbsp; Bashing</p><p><img src=\"" + CONSTANT_IMAGE_URL_BOX_LETHAL + "\"> &nbsp; Lethal</p><p><img src=\"" + CONSTANT_IMAGE_URL_BOX_AGGRAVATED + "\"> &nbsp; Aggravated</p></div>";

        $combatDialogue.html(tempHTML);

        $combatDialogue.dialog({

            title: currentPC[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

        });

        $combatDialogue.dialog("open");

        return false;


    });



    if (currentPC[CONSTANT_TRAIT_EXALTED]) {

            $("#combatantEssencePC").show();

            $("#combatantEssencePC").css("cursor", "pointer");

            tempFunction = function (event) {

                $combatDialogue.html("<p><strong>Essence: </strong>" + currentPC[CONSTANT_TRAIT_ESSENCE] + "</p>");

                $combatDialogue.append("<p><strong>Personal: </strong>" + currentPC[CONSTANT_TRAIT_PERSONAL_CURRENT] + "/" + currentPC.getPersonalCap() + " (Commit: " + currentPC[CONSTANT_TRAIT_COMMITTED_PERSONAL] + ")</p>");

                $combatDialogue.append("<p><strong>Peripheral: </strong>" + currentPC[CONSTANT_TRAIT_PERIPHERAL_CURRENT] + "/" + currentPC.getPeripheralCap() + " (Commit: " + currentPC[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] +")</p>");

                $combatDialogue.append("<p><strong>Anima: </strong>" + getAnimaLabel(currentPC) +"</p>");

                $combatDialogue.append("<p><strong>Charms: </strong></p>");

                var i;

                for (i = 0; i < currentPC[CONSTANT_TRAIT_CHARMS].length; i++) {

                    if (charmLibrary[currentPC[CONSTANT_TRAIT_CHARMS][i]].showCombat) {

                        $combatDialogue.append("<p><strong><em>" + charmLibrary[currentPC[CONSTANT_TRAIT_CHARMS][i]].label + "</strong></em> ("+ charmLibrary[currentPC[CONSTANT_TRAIT_CHARMS][i]].costLabel +"): " + charmLibrary[currentPC[CONSTANT_TRAIT_CHARMS][i]].shortDescription + "</p>");
                        
                    }



                }



                $combatDialogue.dialog({

                    title: currentPC[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

                });

                $combatDialogue.dialog("open");


            }

            $("#combatantEssencePC").click(tempFunction);

        }



    if (getActiveBuffsString(currentPC) != CONSTANT_NO_ACTIVE_BUFFS) {

         $("#combatantBuffsPC").show();

    }

    $("#combatantBuffsPC").css("cursor", "pointer");

    $("#combatantBuffsPC").click(function (event) {

        $combatDialogue.html(getActiveBuffsString(currentPC));
        
        $combatDialogue.dialog({

            title: currentPC[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

        });

        $combatDialogue.dialog("open");

        return false;

    });

    var tempFunction;

    for (i = 0; i < combat.combatants.length; i++) {

        $("#combatTrackerCombatants").append("<div id=\"combatant" + i + "\" class=\"combatant\"><div id=\"combatantName" + i + "\" class=\"combatantName\"></div><div id=\"combatantWeapon" + i + "\" class=\"combatantWeapon\"><strong>Weapon: </strong><span id=\"combatantWeaponTarget" + i + "\"></span></div><div id=\"combatantArmour" + i + "\" class=\"combatantArmour\"><strong>Armour: </strong><span id=\"combatantArmourTarget" + i + "\"></span></div><div id=\"combatantDV" + i + "\" class=\"combatantDV\"><strong>Best DV: </strong><span id=\"combatantDVTarget" + i + "\"></span></div><div id=\"combatantElevation" + i + "\" class=\"combatantElevation\"><strong>Elevation: </strong><span id=\"combatantElevationTarget" + i + "\"></span></div><div id=\"combatantWound" + i + "\" class=\"combatantWound\"><strong>Wound Penalty: </strong><span id=\"combatantWoundTarget" + i + "\"></span></div><div id=\"combatantEssence" + i + "\" class=\"combatantEssence\"><strong>Essence and Charms</strong></div><div id=\"combatantBuffs" + i + "\" class=\"combatantBuffs\"><strong>Active Effects</strong></div></div>");

        $("#combatantName" + i).html(combat.combatants[i][CONSTANT_TRAIT_CHARACTER_SHORT_NAME]);

        $("#combatantWeaponTarget" + i).html(combat.combatants[i][CONSTANT_TRAIT_WEAPON].label);
        
        $("#combatantWeapon" + i).css("cursor", "pointer");

        tempFunction = function (event) {

            $combatDialogue.html("<p><strong>" + arguments.callee.combatant[CONSTANT_TRAIT_WEAPON].label + "</strong></p>");

            $combatDialogue.append("<p><strong>Speed: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_WEAPON].speed + "</p>");

            $combatDialogue.append("<p><strong>Accuracy: </strong>" + getEquippedAccuracy(arguments.callee.combatant) + "</p>");

            $combatDialogue.append("<p><strong>Damage: </strong>" + getEquippedBaseDamage(arguments.callee.combatant) + arguments.callee.combatant[CONSTANT_TRAIT_WEAPON].damageType + "</p>");

            $combatDialogue.append("<p><strong>Parry DV: </strong>" + getEquippedParryDV(arguments.callee.combatant) + "</p>");

            $combatDialogue.append("<p><strong>Rate: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_WEAPON].rate + "</p>");

            $combatDialogue.append("<p><strong>Range: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_WEAPON].range + "</p>");

            $combatDialogue.append("<p><strong>Tags: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_WEAPON].tags + "</p>");

            $combatDialogue.dialog({

                title: arguments.callee.combatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

            });

            $combatDialogue.dialog("open");

            return false;


        };

        tempFunction.combatant = combat.combatants[i];

        $("#combatantWeapon" + i).click(tempFunction);

       
       
        $("#combatantArmourTarget" + i).html(combat.combatants[i][CONSTANT_TRAIT_ARMOUR].label);

        $("#combatantArmour" + i).css("cursor", "pointer");

        tempFunction = function (event) {

            $combatDialogue.html("<p><strong>" + arguments.callee.combatant[CONSTANT_TRAIT_ARMOUR].label + "</strong></p>");

            $combatDialogue.append("<p><strong>Bashing Soak: </strong>" + getArmouredBashingSoak(arguments.callee.combatant) + "</p>");

            $combatDialogue.append("<p><strong>Lethal Soak: </strong>" + getArmouredLethalSoak(arguments.callee.combatant) + "</p>");

            $combatDialogue.append("<p><strong>Aggravated Soak: </strong>" + getArmouredAggravatedSoak(arguments.callee.combatant) + "</p>");

            if (arguments.callee.combatant[CONSTANT_TRAIT_ARMOUR].hardness) {

                $combatDialogue.append("<p><strong>Hardness: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_ARMOUR].hardnessBashing + "B/" + arguments.callee.combatant[CONSTANT_TRAIT_ARMOUR].hardnessLethal +"L</p>");

            }

            $combatDialogue.append("<p><strong>Mobility: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_ARMOUR].mobility + "</p>");

            $combatDialogue.append("<p><strong>Fatigue: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_ARMOUR].fatigue + "</p>");

            $combatDialogue.dialog({

                title: arguments.callee.combatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

            });

            $combatDialogue.dialog("open");

            return false;


        };

        tempFunction.combatant = combat.combatants[i];

        $("#combatantArmour" + i).click(tempFunction);

       
       
        $("#combatantDVTarget" + i).html(getBestDV(combat.combatants[i]).dv + " (" + getBestDV(combat.combatants[i]).label + ")");
       
        $("#combatantDV" + i).css("cursor", "pointer");

        tempFunction = function (event) {

            $combatDialogue.html("<p><strong>Base Parry DV: </strong>" + getEquippedParryDV(arguments.callee.combatant) + "</p>");

            $combatDialogue.append("<p><strong>Base Dodge DV: </strong>" + getDodgeDV(arguments.callee.combatant) + "</p>");

            $combatDialogue.append(getMiscDVBonusString(arguments.callee.combatant));

            $combatDialogue.append("<p><strong>Action Penalty: </strong>" + getBuffTotal(arguments.callee.combatant, CONSTANT_BUFF_ACTION_PENALTY) + "</p>");

            $combatDialogue.append("<p><strong>Wound Penalty: </strong>" + getCurrentWoundPenaltyLabel(arguments.callee.combatant) + "</p>");

            $combatDialogue.append("<p><strong>Total Parry DV: </strong>" + getTotalParryDV(arguments.callee.combatant) + "</p>");

            $combatDialogue.append("<p><strong>Total Dodge DV: </strong>" + getTotalDodgeDV(arguments.callee.combatant) + "</p>");

           /* $combatDialogue.append("<p><br/><br/><strong>Shield/Cover bonus (vs melee): </strong>" + getBuffTotal(arguments.callee.combatant[CONSTANT_TRAIT_BUFFS], CONSTANT_BUFF_SHIELD_BONUS_MELEE) + "</p>");

            $combatDialogue.append("<p><strong>Shield/Cover bonus (vs ranged): </strong>" + getBuffTotal(arguments.callee.combatant[CONSTANT_TRAIT_BUFFS], CONSTANT_BUFF_SHIELD_BONUS_RANGED) + "</p>"); */

            $combatDialogue.dialog({

                title: arguments.callee.combatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

            });

            $combatDialogue.dialog("open");

            return false;


        };

        tempFunction.combatant = combat.combatants[i];

        $("#combatantDV" + i).click(tempFunction);


        if (elevationMatters(combat)) {

            $("#combatantElevationTarget" + i).html(combat.combatants[i].elevation);
            $("#combatantElevation" + i).show();

        }


        $("#combatantWoundTarget" + i).html(getCurrentWoundPenaltyLabel(combat.combatants[i]));

        $("#combatantWound" + i).css("cursor", "pointer");

        tempFunction = function (event) {

            var tempHTML = "<div id=\"combatTrackerHealthLevelsWrapper\">";

            if (arguments.callee.combatant[CONSTANT_TRAIT_EXTRA]) {

                tempHTML += "<div class=\"healthLevels\"><div class=\"healthLevelsLabel\">- 1</div><div class=\"healthLevelsBoxesDialogue\">" + getHealthLevelsCharacterSheetString(arguments.callee.combatant, -1, "dialogueHealthLevels1Box") + "</div></div>";
                tempHTML += "<div class=\"healthLevels\"><div class=\"healthLevelsLabel\">- 3</div><div class=\"healthLevelsBoxesDialogue\">" + getHealthLevelsCharacterSheetString(arguments.callee.combatant, -3, "dialogueHealthLevels3Box") + "</div></div>";

            } else {

                tempHTML += "<div class=\"healthLevels\"><div class=\"healthLevelsLabel\">- 0</div><div class=\"healthLevelsBoxesDialogue\">" + getHealthLevelsCharacterSheetString(arguments.callee.combatant, 0, "dialogueHealthLevels0Box") + "</div></div>";
                tempHTML += "<div class=\"healthLevels\"><div class=\"healthLevelsLabel\">- 1</div><div class=\"healthLevelsBoxesDialogue\">" + getHealthLevelsCharacterSheetString(arguments.callee.combatant, -1, "dialogueHealthLevels1Box") + "</div></div>";
                tempHTML += "<div class=\"healthLevels\"><div class=\"healthLevelsLabel\">- 2</div><div class=\"healthLevelsBoxesDialogue\">" + getHealthLevelsCharacterSheetString(arguments.callee.combatant, -2, "dialogueHealthLevels2Box") + "</div></div>";
                tempHTML += "<div class=\"healthLevels\"><div class=\"healthLevelsLabel\">- 4</div><div class=\"healthLevelsBoxesDialogue\">" + getHealthLevelsCharacterSheetString(arguments.callee.combatant, -4, "dialogueHealthLevels4Box") + "</div></div>";
            
            }
            
            tempHTML += "<div class=\"healthLevels\"><div class=\"healthLevelsLabel\">Incapacitated</div><div class=\"healthLevelsBoxesDialogue\">" + getHealthLevelsCharacterSheetString(arguments.callee.combatant, CONSTANT_TRAIT_HEALTH_INCAPACITATED, "dialogueHealthLevelsIncapacitatedBox") + "</div></div>";
            tempHTML += "<div class=\"healthLevels\"><div class=\"healthLevelsLabel\">Dying</div><div class=\"healthLevelsBoxesDialogue\">" + getHealthLevelsCharacterSheetString(arguments.callee.combatant, CONSTANT_TRAIT_HEALTH_DYING, "dialogueHealthLevelsDyingBox") + "</div></div>";
            tempHTML += "<div class=\"clear\">&nbsp;</div></div><div><p><strong>Key:</strong></p><p><img src=\"" + CONSTANT_IMAGE_URL_BOX_EMPTY + "\"> &nbsp; Unhurt</p><p><img src=\"" + CONSTANT_IMAGE_URL_BOX_BASHING + "\"> &nbsp; Bashing</p><p><img src=\"" + CONSTANT_IMAGE_URL_BOX_LETHAL + "\"> &nbsp; Lethal</p><p><img src=\"" + CONSTANT_IMAGE_URL_BOX_AGGRAVATED + "\"> &nbsp; Aggravated</p></div>";

            $combatDialogue.html(tempHTML);

            $combatDialogue.dialog({

                title: arguments.callee.combatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

            });

            $combatDialogue.dialog("open");

            return false;


        };

        tempFunction.combatant = combat.combatants[i];
                     
        $("#combatantWound" + i).click(tempFunction);


        
        if (combat.combatants[i][CONSTANT_TRAIT_EXALTED]) {

            $("#combatantEssence" + i).show();

            $("#combatantEssence" + i).css("cursor", "pointer");

            tempFunction = function (event) {

                $combatDialogue.html("<p><strong>Essence: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_ESSENCE] + "</p>");

                $combatDialogue.append("<p><strong>Personal: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_PERSONAL_CURRENT] + "/" + arguments.callee.combatant.getPersonalCap() + " (Commit: " + arguments.callee.combatant[CONSTANT_TRAIT_COMMITTED_PERSONAL] + ")</p>");

                $combatDialogue.append("<p><strong>Peripheral: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_PERIPHERAL_CURRENT] + "/" + arguments.callee.combatant.getPeripheralCap() + " (Commit: " + arguments.callee.combatant[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] + ")</p>");

                $combatDialogue.append("<p><strong>Anima: </strong>" + getAnimaLabel(arguments.callee.combatant) +"</p>");

                $combatDialogue.append("<p><strong>Charms: </strong></p>");

                var i;

                for (i = 0; i < arguments.callee.combatant[CONSTANT_TRAIT_CHARMS].length; i++) {

                    if (charmLibrary[arguments.callee.combatant[CONSTANT_TRAIT_CHARMS][i]].showCombat) {

                        $combatDialogue.append("<p><strong><em>" + charmLibrary[arguments.callee.combatant[CONSTANT_TRAIT_CHARMS][i]].label + "</strong></em> (" + charmLibrary[arguments.callee.combatant[CONSTANT_TRAIT_CHARMS][i]].costLabel + "): " + charmLibrary[arguments.callee.combatant[CONSTANT_TRAIT_CHARMS][i]].shortDescription + "</p>");

                    }



                }



                $combatDialogue.dialog({

                    title: arguments.callee.combatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

                });

                $combatDialogue.dialog("open");


            }

            tempFunction.combatant = combat.combatants[i];

            $("#combatantEssence" + i).click(tempFunction);

        }


        if (getActiveBuffsString(combat.combatants[i]) != CONSTANT_NO_ACTIVE_BUFFS) {

             $("#combatantBuffs" + i).show();

        }

        $("#combatantBuffs" + i).css("cursor", "pointer");

        tempFunction = function (event) {

            $combatDialogue.html(getActiveBuffsString(arguments.callee.combatant));
        
            $combatDialogue.dialog({

                title: arguments.callee.combatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

            });

            $combatDialogue.dialog("open");

            return false;

        };

        tempFunction.combatant = combat.combatants[i];

        $("#combatantBuffs" + i).click(tempFunction);


    }




    $("#combatTrackerCombatants").append("<div class=\"clear\"></div>");

}



//################################################ GENERIC AI FUNCTIONS #################################################################

function getExpectedSuccessDelta(attackPool, attackSuccesses, attacker, target) {

    var expectedSuccesses = Math.ceil(attackPool / 2) + attackSuccesses;

    var targetDV = target.getDVInResponseToAttack(attacker[CONSTANT_TRAIT_WEAPON].attackType, DV_BEST, 0);

    if (target[CONSTANT_TRAIT_EXALTED]) {

        targetDV.dv += 2;  //Stunt assumed

    }

    targetDV.dv += getElevationDelta(attacker, target);

    var successDelta = expectedSuccesses - targetDV.dv;

    if (successDelta < 0) {

        successDelta = 0;

    }

    return successDelta;

}
