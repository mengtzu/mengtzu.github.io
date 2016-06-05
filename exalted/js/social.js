//################################################################### COMPATIBLE COMBAT FUNCTIONS #################################################################

/* The following functions are defined in combat.js, and should work if fed a social combat instead of a combat

getTickActionsString(combat, tick)
getCombatCombatant(combat, combatantKey)
getCombatMiscAction(combat, miscKey)
restorePCToSaved(combat)
standardReset(combat)
saveCurrentPCStatusForReset(combat)
getActionsForTick(combat, tick)
checkForActionsOnTick(combat, tick)
noActionsThisTick()
firstAction(combat)
advanceTick(combat)
handleActions(combat, tick)
refreshDV(character)
clearCombatantTickAction(combat, combatantKey)
clearAllOnslaught(combat)
finishAction(combat, character)
inactiveAction(character)
flurryAction(character, numberActions, stuntKey, callback)
hasAvailableMiscActions(combat)
getWPSpendHTML(idPrefix)
getPCStuntByKey(combat, stuntKey)

getRawCombatSegment(combat, character, action)
getRawCombatSegmentWithKey(combat, character)

getPCStuntsString(combat, action) //Needs some expansion probably

Where a function doesn't work and should it's probably because currentCombat is being used instead of a parameter; that's a refactor target

*/





//################################################ JOIN DEBATE #################################################################

function joinDebate(combat, willpowerBonus) {  //This really only differs from joinBattle in the last two lines - refactor target

    currentGameMode = GAME_MODE_SOCIAL_COMBAT;

    saveCurrentPCStatusForReset(combat);
    
    var i;

    var joinBattleArray = new Array();

    var pcJoinBattle;

    if (currentPC.surprised) {

        currentPC.surprised = false;

        currentPC[CONSTANT_CHARACTER_CURRENT_ACTION] = {

            action: COMBAT_ACTION_INACTIVE,
            speed: SPEED_INACTIVE

        };

        pcJoinBattle = 0;

        $("#" + CONSTANT_HTML_ID_DICE_BOX).hide();

    } else {

        pcJoinBattle = buildPoolAndRoll({


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

    }

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

    $("#socialTracker").show();
    fillSocialTrackerFromCombat(combat);


}


//####################################################  SEGMENT HANDLERS ###########################################################################



function getSocialCombatSegment(combat, character, action) {

    
    var tempSegment;

    currentCombatSegmentAction = action;  //so we can save and load it

    if (action == COMBAT_ACTION_MISCELLANEOUS || action == COMBAT_ACTION_ATTACK_ACCEPTED || action == COMBAT_ACTION_ATTACK_REFUSED || action == COMBAT_ACTION_ATTACK_HIT || action == COMBAT_ACTION_ATTACK_MISS || action == COMBAT_ACTION_PROMPT_DV_CHOICE) {

        tempSegment = getCombatSegmentWithKey(combat, character);

    } else {
    

        tempSegment = getRawCombatSegment(combat, character, action);

    }

    tempSegment.actions = new Array();

    tempSegment.pcSocialFlurryOptions = false;

    if (action == COMBAT_ACTION_GUARD || action == COMBAT_ACTION_AIM || action == COMBAT_ACTION_ATTACK_MISS || action == COMBAT_ACTION_ATTACK_ACCEPTED || action == COMBAT_ACTION_ATTACK_REFUSED || action == COMBAT_ACTION_MISCELLANEOUS) {

        //That is, we're displaying the final segment for an action.

       if (character[CONSTANT_CHARACTER_CURRENT_FLURRY].remainingActions <= 1) {

           tempSegment.actions.push({

               id: "combatSegmentAction0",
               type: "button",
               value: "Continue",
               functionKey: FUNCTION_KEY_SOCIAL_FINISH_ACTION_CONTINUE

            });

        } else {

            character[CONSTANT_CHARACTER_CURRENT_FLURRY].remainingActions -= 1;

            tempSegment.pcSocialFlurryOptions = true;
            tempSegment.pcFlurryOptionsHTML = getPCSocialFlurryOptionsHTML(true);

            //Magical side-effects land, Onslaught edition
            if (action == COMBAT_ACTION_ATTACK_MISS || action == COMBAT_ACTION_ATTACK_ACCEPTED || action == COMBAT_ACTION_ATTACK_REFUSED) {

                getCombatCombatant(combat, character[CONSTANT_CHARACTER_CURRENT_ACTION].target)[CONSTANT_TRAIT_BUFFS].push({

                    type: CONSTANT_BUFF_ONSLAUGHT_PENALTY,
                    source: character[CONSTANT_TRAIT_CHARACTER_SHORT_NAME],
                    magnitude: 1

                });

            }

        }

    }

    

    if (action == COMBAT_ACTION_ATTACK_HIT) {

       tempSegment.actions.push({

           id: "combatSegmentAction0",
           type: "button",
           value: "Accept Attack",
           functionKey: FUNCTION_KEY_SOCIAL_ACCEPT_ATTACK

       });

       //Prompt for resist if the PC can afford it
       if (currentPC[CONSTANT_TRAIT_WILLPOWER_CURRENT] >= getCombatCombatant(currentSocialCombat, currentSocialCombat.actingCharacter)[CONSTANT_CHARACTER_CURRENT_ACTION].refuseCost) {

           tempSegment.actions.push({

               id: "combatSegmentAction1",
               type: "button",
               value: "Spend " + getCombatCombatant(currentSocialCombat, currentSocialCombat.actingCharacter)[CONSTANT_CHARACTER_CURRENT_ACTION].refuseCost + " WP and Resist Attack",
               functionKey: FUNCTION_KEY_SOCIAL_REFUSE_ATTACK

           });

       }

    } 

    if (action == COMBAT_ACTION_PC_VICTORY || action == COMBAT_ACTION_PC_DEFEAT) {

        tempSegment.actions.push({

           id: "combatSegmentAction0",
           type: "button",
           value: "Reset Combat",
           functionKey: FUNCTION_KEY_SOCIAL_COMBAT_RESET

        });

        tempSegment.actions.push({

           id: "combatSegmentAction1",
           type: "button",
           value: "Continue Tutorial",
           functionKey: FUNCTION_KEY_SOCIAL_COMBAT_PC_VICTORY_CONTINUE

        });

    }

   
    if (action == COMBAT_ACTION_PC_ACTION_CHOICE) {

        tempSegment.pcCombatOptions = true;
        tempSegment.pcCombatOptionsHTML = getPCSocialCombatOptionsHTML();

    }

    return tempSegment;

}


//####################################################  ACTIONS ###########################################################################


function getNextSocialAttack(characterKey, targetKey, combat) {

    var i;

    for (i = 0; i < combat.socialAttacks.length; i++) {

        if (!combat.socialAttacks[i].used && combat.socialAttacks[i].combatant == characterKey && combat.socialAttacks[i].target == targetKey) {

            combat.socialAttacks[i].exhausted = false;
            combat.socialAttacks[i].index = i;
            return combat.socialAttacks[i];

        }

    }

    return { exhausted: true };

}


function guardActionSocial(combat, character) {

    character[CONSTANT_CHARACTER_CURRENT_ACTION] = {

        action: COMBAT_ACTION_GUARD,
        speed: SPEED_GUARD

    };

    checkForFlurrySpeedChange(character, SPEED_GUARD);

    processSegmentObject(getSocialCombatSegment(combat, character, COMBAT_ACTION_GUARD));
}

function aimActionSocial(combat, character) {

    character[CONSTANT_CHARACTER_CURRENT_ACTION] = {

        action: COMBAT_ACTION_AIM,
        speed: SPEED_AIM

    };

    checkForFlurrySpeedChange(character, SPEED_AIM);

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
        magnitude: 2


    });

    processSegmentObject(getSocialCombatSegment(combat, character, COMBAT_ACTION_AIM));

}




function attackActionSocial(combat, character, willpower, attackIndex) {

    var tempAttack = combat.socialAttacks[attackIndex];


    character[CONSTANT_CHARACTER_CURRENT_ACTION] = {
    
        action: COMBAT_ACTION_ATTACK,
        speed: tempAttack.speed,
        willpower: willpower,
        target: tempAttack.target,
        attackIndex: tempAttack.index
    
    };

    checkForFlurrySpeedChange(character, tempAttack.speed);

    character[CONSTANT_CHARACTER_CURRENT_FLURRY].weaponAttacks += 1;  //Assumes only the same ability will be used in a flurry.

    character[CONSTANT_TRAIT_BUFFS].push({

        type: CONSTANT_BUFF_ACTION_PENALTY,
        source: "Attack action",
        magnitude: 2


    });

    
    //Not yet handling NPC vs NPC violence - may not for tutorial

    if (character.key == COMBATANT_KEY_PC) {

        handlePCAttackSocial();    

    } else {

        character.stunt(tempAttack.attackStunt);
        tempAttack.used = true;
        character[CONSTANT_CHARACTER_CURRENT_ACTION].key = tempAttack.attackSegmentKey;
        promptForPCDefenceSocial(combat, character);

    }

    
}




function handlePCAttackSocial() {

    var refuseCost = 1;

    var attackSuccesses = 0;

    var refuseCostFromAttackSuccesses = 0;

    var tempAttack = currentSocialCombat.socialAttacks[currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].attackIndex];

    var targetDV = getCombatCombatant(currentSocialCombat, currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].target).getMDVInResponseToAttack(DV_BEST, 0);

    currentDVDerivationString = getBaseMDVDerivationString(getCombatCombatant(currentSocialCombat, currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].target), currentPC, targetDV.type);

    targetDV.dv += tempAttack.attackDVAdjustment;

    currentDVDerivationString += "<p><strong>Personality Traits Adjustment: </strong>" + tempAttack.attackDVAdjustment + "(" + tempAttack.attackDVAdjustmentLabel + ")</p>";

    targetDV.dv += getAppearanceDelta(currentPC, getCombatCombatant(currentSocialCombat, currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].target));

    targetDV.dv += tempAttack.defenceStunt;

    currentDVDerivationString += "<p><strong>Stunt Bonus: </strong>" + tempAttack.defenceStunt; +"</p>";

    getCombatCombatant(currentSocialCombat, currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].target).stunt(tempAttack.defenceStunt);

    if (isInactive(getCombatCombatant(currentSocialCombat, currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].target))) {

        targetDV.dv = 0;
        currentDVDerivationString += "<p><strong>Final MDV: </strong> 0 (Inactive)</p>";

    } else {

        currentDVDerivationString += "<p><strong>Final MDV: </strong>" + targetDV.dv + "</p>";

    }

    var tempThreshold = buildPoolAndRoll({

        type: CONSTANT_MUNDANE_BONUS,
        label: getAttributeLabelByTrait(tempAttack.attackAttribute),
        magnitude: currentPC[tempAttack.attackAttribute]
        
    }, {

        type: CONSTANT_MUNDANE_BONUS,
        label: getAbilityLabelByTrait(tempAttack.attackAbility),
        magnitude: currentPC[tempAttack.attackAbility]

    }, getSpecialtyAsBonus(currentPC, tempAttack.attackSpecialty), getAimBonus(currentPC), currentPC.getStuntBonus(), currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].willpower, getWoundPenaltyAsBonus(currentPC), getMultipleActionPenaltyAsBonus(currentPC[CONSTANT_CHARACTER_CURRENT_FLURRY]), {
    
    
        type: CONSTANT_EXTERNAL_PENALTY,
        label: "<span id=\"diceRollerDV\">" + targetDV.label + " MDV (" + getCombatCombatant(currentSocialCombat, currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].target)[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] + ")</span>",
        magnitude: targetDV.dv
    
    });


    if (tempThreshold < 0) {

        currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].key = tempAttack.failSegmentKey;
        processSegmentObject(getSocialCombatSegment(currentSocialCombat, currentPC, COMBAT_ACTION_ATTACK_MISS));

    } else {

        attackSuccesses = tempThreshold + 1;
        refuseCostFromAttackSuccesses += Math.floor(attackSuccesses / 3);
        refuseCost = refuseCostFromAttackSuccesses + 1;

        currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].refuseCostFromAttackSuccesses = refuseCostFromAttackSuccesses;
        currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].attackSuccesses = attackSuccesses;
        currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].refuseCost = refuseCost;    

        if (tempAttack.refusalChance > 0) {
    
            //determine refusal with random numbers or whatever.        

        } else {

            currentPC[CONSTANT_CHARACTER_CURRENT_ACTION].key = tempAttack.acceptedSegmentKey;

            if (tempAttack.setAcceptFlag) {

                flags[tempAttack.acceptFlag] = true;

            }

            processSegmentObject(getSocialCombatSegment(currentSocialCombat, currentPC, COMBAT_ACTION_ATTACK_ACCEPTED));

            $("#attackSuccessesTarget").html(attackSuccesses);
            $("#refuseCostFromAttackSuccessesTarget").html(refuseCostFromAttackSuccesses);
            $("#refuseCostTarget").html(refuseCost);

        }

    }

}




function handleNPCSocialAttack(combat, character, chosenDV, willpower, stuntKey) {

    var tempAttack = currentSocialCombat.socialAttacks[character[CONSTANT_CHARACTER_CURRENT_ACTION].attackIndex];

    var willpowerBonus = getWPSpendAsBonus(currentPC, willpower);

    var diceBonus = 0;

    var refuseCost = 1;

    var attackSuccesses = 0;

    var refuseCostFromAttackSuccesses = 0;

    var npcWillpowerBonus = {};

    currentDVDerivationString = getBaseMDVDerivationString(currentPC, character, chosenDV);

    if (willpowerBonus.type == CONSTANT_MUNDANE_BONUS) {

        diceBonus = willpowerBonus.magnitude;

        currentDVDerivationString += "<p><strong>Dice Bonus: </strong>" + diceBonus + " (" + willpowerBonus.label + " - added to base pool)</p>";

    }

    var targetDV = currentPC.getMDVInResponseToAttack(chosenDV, diceBonus);

    if (willpowerBonus.type == CONSTANT_SUCCESS_BONUS) {

        targetDV.dv += willpowerBonus.magnitude;

        currentDVDerivationString += "<p><strong>Success Bonus: </strong>" + willpowerBonus.magnitude + " (" + willpowerBonus.label + ")</p>";

    }

    if (!(stuntKey == CONSTANT_NO_STUNT)) {

        currentPC.stunt(getPCStuntByKey(combat, stuntKey).rating);
        getPCStuntByKey(combat, stuntKey).used = true;

        currentDVDerivationString += "<p><strong>Stunt Bonus: </strong>" + currentPC.getStuntBonus().magnitude + "</p>";

        targetDV.dv += currentPC.getStuntBonus().magnitude;

    }

    targetDV.dv += tempAttack.attackDVAdjustment;

    currentDVDerivationString += "<p><strong>Personality Traits Adjustment: </strong>" + tempAttack.attackDVAdjustment + "(" + tempAttack.attackDVAdjustmentLabel + ")</p>";

    targetDV.dv += getAppearanceDelta(character, currentPC);

    if (isInactive(currentPC)) {

        targetDV.dv = 0;
        currentDVDerivationString += "<p><strong>Final MDV: </strong> 0 (Inactive)</p>";

    } else {

        currentDVDerivationString += "<p><strong>Final MDV: </strong>" + targetDV.dv + "</p>";

    }


    //Check for charm use

    var charmBonus = {

        type: "Invalid",
        magnitude: 0,
        label: "Charm"

    }

    if (character.hasCharm(tempAttack.attackCharm)) {

        charmBonus = activateCharmForBonus(character, tempAttack.attackCharm, tempAttack.preferredPool, {

            attribute: tempAttack.attackAttribute,
            ability: tempAttack.attackAbility,
            specialty: tempAttack.attackSpecialty

        }, VARIABLE_MOTES_MAX);

    }

    //Stunt

    character.stunt(tempAttack.attackStunt);

    //Check for WP bonus, should fail gracefully if passed undefineds

    npcWillpowerBonus = getWPSpendAsBonus(character, { type: tempAttack.spendWPType, virtue: tempAttack.channeledVirtue });

    

    //Roll

    var tempThreshold = buildPoolAndRoll({

        type: CONSTANT_MUNDANE_BONUS,
        label: getAttributeLabelByTrait(tempAttack.attackAttribute),
        magnitude: character[tempAttack.attackAttribute]

    }, {

        type: CONSTANT_MUNDANE_BONUS,
        label: getAbilityLabelByTrait(tempAttack.attackAbility),
        magnitude: character[tempAttack.attackAbility]

    }, getSpecialtyAsBonus(character, tempAttack.attackSpecialty), charmBonus, npcWillpowerBonus, getAimBonus(character), character.getStuntBonus(), getWoundPenaltyAsBonus(character), getMultipleActionPenaltyAsBonus(character[CONSTANT_CHARACTER_CURRENT_FLURRY]), {


        type: CONSTANT_EXTERNAL_PENALTY,
        label: "<span id=\"diceRollerDV\">" + targetDV.label + " MDV (" + currentPC[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] + ")</span>",
        magnitude: targetDV.dv

    });


    if (tempThreshold < 0) {

        character[CONSTANT_CHARACTER_CURRENT_ACTION].key = tempAttack.failSegmentKey;
        processSegmentObject(getSocialCombatSegment(currentSocialCombat, character, COMBAT_ACTION_ATTACK_MISS));

    } else {

        attackSuccesses = tempThreshold + 1;
        refuseCostFromAttackSuccesses += Math.floor(attackSuccesses / 3);
        refuseCost = refuseCostFromAttackSuccesses + 1;

        character[CONSTANT_CHARACTER_CURRENT_ACTION].refuseCostFromAttackSuccesses = refuseCostFromAttackSuccesses;
        character[CONSTANT_CHARACTER_CURRENT_ACTION].attackSuccesses = attackSuccesses;
        character[CONSTANT_CHARACTER_CURRENT_ACTION].refuseCost = refuseCost;
        character[CONSTANT_CHARACTER_CURRENT_ACTION].key = tempAttack.hitSegmentKey;
        processSegmentObject(getSocialCombatSegment(currentSocialCombat, character, COMBAT_ACTION_ATTACK_HIT));

        $("#attackSuccessesTarget").html(attackSuccesses);
        $("#refuseCostFromAttackSuccessesTarget").html(refuseCostFromAttackSuccesses);
        $("#refuseCostTarget").html(refuseCost);

    }


}




function promptForPCDefenceSocial(combat, character) {

    processSegmentObject(getSocialCombatSegment(combat, character, COMBAT_ACTION_PROMPT_DV_CHOICE));

    var tempNPCAccuracy = getCurrentSocialAttackAccuracy(combat, character);

    $("#attackPoolTarget").html(tempNPCAccuracy);

    character[CONSTANT_CHARACTER_CURRENT_ACTION].accuracy = tempNPCAccuracy;

    $("#pcActionOptionsTarget").html(getPCMDVOptionsHTML());

    hookUpPCSocialDefenceOptions();

}


function getCurrentSocialAttackAccuracy(combat, character) {

    var tempAttack = combat.socialAttacks[character[CONSTANT_CHARACTER_CURRENT_ACTION].attackIndex];

    var accuracyPool = 0;

    accuracyPool += character[tempAttack.attackAttribute] + character[tempAttack.attackAbility];

    accuracyPool += getCharacterSpecialty(character[CONSTANT_TRAIT_SPECIALTY], tempAttack.attackSpecialty);

    accuracyPool += tempAttack.attackStunt;

    accuracyPool += getCurrentWoundPenalty(character);

    accuracyPool += getAimBonus(character).magnitude;

    accuracyPool -= getMultipleActionPenalty(character[CONSTANT_CHARACTER_CURRENT_FLURRY]);

    if (tempAttack.spendWPType === CONSTANT_WP_VIRTUE_CHANNEL) {

        accuracyPool += character[tempAttack.channeledVirtue];

    }

    if (character.hasCharm(tempAttack.attackCharm)) {  //This is all fucked up, we need to actually use the charm here then reference it later.

        if (charmLibrary[tempAttack.attackCharm].excellency && charmLibrary[tempAttack.attackCharm].bonusType == CHARM_BONUS_TYPE_DICE_ADDER) {

            var charmDice = getDiceCapFromPool(character, {

                attribute: tempAttack.attackAttribute,
                ability: tempAttack.attackAbility,
                specialty: tempAttack.attackSpecialty

            });

            if (character.hasMotes(charmDice * charmLibrary[tempAttack.attackCharm].costMotes)) {

                accuracyPool += charmDice;

            }

        }

    }


    return accuracyPool;

}


function pcSocialAttackAction(combat, character, willpower, attackIndex) {

    var willpowerBonus = getWPSpendAsBonus(currentPC, willpower);

    var tempAttack = combat.socialAttacks[attackIndex];

    if (!character[CONSTANT_CHARACTER_CURRENT_FLURRY].flurrySet) {

        currentPC.stunt(tempAttack.attackStunt);

    }

    combat.socialAttacks[attackIndex].used = true;
    
    attackActionSocial(combat, character, willpowerBonus, attackIndex);

}



function pcAcceptsCurrentSocialAttack() {

    $("#" + CONSTANT_HTML_ID_DICE_BOX).hide();

    var tempAttack = currentSocialCombat.socialAttacks[getCombatCombatant(currentSocialCombat, currentSocialCombat.actingCharacter)[CONSTANT_CHARACTER_CURRENT_ACTION].attackIndex];

    getCombatCombatant(currentSocialCombat, currentSocialCombat.actingCharacter)[CONSTANT_CHARACTER_CURRENT_ACTION].key = tempAttack.acceptedSegmentKey;

    if (tempAttack.setAcceptFlag) {

        flags[tempAttack.acceptFlag] = true;

    }

    processSegmentObject(getSocialCombatSegment(currentSocialCombat, getCombatCombatant(currentSocialCombat, currentSocialCombat.actingCharacter), COMBAT_ACTION_ATTACK_ACCEPTED));

    //Replace extra successes, bonus wp cost and total cost targets


}


function pcRefusesCurrentSocialAttack() {

    currentSocialCombat.pcResistedNMI = true;

    $("#" + CONSTANT_HTML_ID_DICE_BOX).hide();

    spendTempTraitMultiple(CONSTANT_TRAIT_WILLPOWER_CURRENT, currentPC, getCombatCombatant(currentSocialCombat, currentSocialCombat.actingCharacter)[CONSTANT_CHARACTER_CURRENT_ACTION].refuseCost);

    var tempAttack = currentSocialCombat.socialAttacks[getCombatCombatant(currentSocialCombat, currentSocialCombat.actingCharacter)[CONSTANT_CHARACTER_CURRENT_ACTION].attackIndex];

    getCombatCombatant(currentSocialCombat, currentSocialCombat.actingCharacter)[CONSTANT_CHARACTER_CURRENT_ACTION].key = tempAttack.refusedSegmentKey;

    processSegmentObject(getSocialCombatSegment(currentSocialCombat, getCombatCombatant(currentSocialCombat, currentSocialCombat.actingCharacter), COMBAT_ACTION_ATTACK_REFUSED));

}



function readMotivationAction(character, target, actionKey, willpowerObject, stuntKey) {



    character[CONSTANT_CHARACTER_CURRENT_ACTION] = {

        action: COMBAT_ACTION_MISCELLANEOUS,
        speed: SPEED_MISCELLANEOUS,
        key: actionKey

    };

    checkForFlurrySpeedChange(character, SPEED_MISCELLANEOUS);

    if (!(stuntKey == CONSTANT_NO_STUNT || stuntKey == CONSTANT_FLURRY_STUNT)) {

        currentPC.stunt(getPCStuntByKey(currentSocialCombat, stuntKey).rating);
        getPCStuntByKey(currentSocialCombat, stuntKey).used = true;

    }

    var willpowerBonus = getWPSpendAsBonus(currentPC, willpowerObject);

    var miscAction = getCombatMiscAction(currentSocialCombat, actionKey);

    miscAction.used = true;

    character[CONSTANT_TRAIT_BUFFS].push({

        type: CONSTANT_BUFF_ACTION_PENALTY,
        source: "Miscellaneous action",
        magnitude: miscAction.dvPenalty

    });

    fillTrackers();

    var difficulty = Math.ceil((target[CONSTANT_TRAIT_MANIPULATION] + target[CONSTANT_TRAIT_SOCIALISE]) / 2);


    var tempThreshold = buildPoolAndRoll({

        type: CONSTANT_MUNDANE_BONUS,
        label: getAttributeLabelByTrait(CONSTANT_TRAIT_PERCEPTION),
        magnitude: currentPC[CONSTANT_TRAIT_PERCEPTION]

    }, {

        type: CONSTANT_MUNDANE_BONUS,
        label: getAbilityLabelByTrait(CONSTANT_TRAIT_INVESTIGATION),
        magnitude: currentPC[CONSTANT_TRAIT_INVESTIGATION]

    }, currentPC.getStuntBonus(), getWoundPenaltyAsBonus(currentPC), willpowerBonus, getMultipleActionPenaltyAsBonus(currentPC[CONSTANT_CHARACTER_CURRENT_FLURRY]), {

        type: CONSTANT_DIFFICULTY,
        magnitude: difficulty

    });

    switch (tempThreshold) {

        case CONSTANT_BOTCH:

            character[CONSTANT_CHARACTER_CURRENT_ACTION].key = miscAction.failKey;

            processSegmentObject(getSocialCombatSegment(currentSocialCombat, character, COMBAT_ACTION_MISCELLANEOUS));

            break;

        case CONSTANT_FAILURE:

            character[CONSTANT_CHARACTER_CURRENT_ACTION].key = miscAction.failKey;

            processSegmentObject(getSocialCombatSegment(currentSocialCombat, character, COMBAT_ACTION_MISCELLANEOUS));

            clearBonusesAndPenalties();

            break;

        default:

            character[CONSTANT_CHARACTER_CURRENT_ACTION].key = miscAction.successKey;

            if (miscAction.setFlag) {

                flags[miscAction.flag] = true;

            }

            processSegmentObject(getSocialCombatSegment(currentSocialCombat, character, COMBAT_ACTION_MISCELLANEOUS));

            break;

    }


}


function socialFlurryAction(character, numberActions, action, stuntKey, callback) {

    $("#" + CONSTANT_HTML_ID_DICE_BOX).hide();

    if (!(character[CONSTANT_CHARACTER_CURRENT_FLURRY].flurrySet)) {

        if (!(stuntKey == CONSTANT_NO_STUNT)) {

            if (action == COMBAT_ACTION_ATTACK) {

                currentPC.stunt(currentSocialCombat.socialAttacks[stuntKey].attackStunt);                

            } else {

                currentPC.stunt(getPCStuntByKey(currentSocialCombat, stuntKey).rating);
                getPCStuntByKey(currentSocialCombat, stuntKey).used = true;

            }

        }

        character[CONSTANT_CHARACTER_CURRENT_FLURRY] = {

            flurrySet: true,
            speed: 3,
            totalActions: parseInt(numberActions),
            remainingActions: parseInt(numberActions),
            weaponAttacks: 0

        };

    }

    callback();

}


//################################################ PC COMBAT OPTIONS #################################################################



function getPCSocialCombatOptionsHTML() {

    var i;

    var tempAttack;
    
    var tempHTML = "";
    
    tempHTML += "<div id=\"pcSocialOptionsAccordion\">";



    //ATTACK

    tempHTML += "<h3><a href=\"#\">Attack (Speed Varies/DV -2)</a></h3>";
    tempHTML += "<div><p>Attack chosen target.  Investigation attacks are Speed 5, Rate 2.  We haven't included Presence and Performance attacks for Sakuya owing to her very low pools.</p>";

    for (i = 0; i < currentSocialCombat.combatants.length; i++) {

        tempAttack = getNextSocialAttack(currentPC.key, currentSocialCombat.combatants[i].key, currentSocialCombat);

        if (!tempAttack.exhausted) {

            tempHTML += "<p><input type=\"radio\" name=\"socialAttackRadio\" value=\"" + tempAttack.index + "\"";

            if (i == 0) {

                tempHTML += " checked=\"checked\"";

            }

            tempHTML += " /> <strong>Attack " + currentSocialCombat.combatants[i][CONSTANT_TRAIT_CHARACTER_SHORT_NAME] + " </strong>(" + getAbilityLabelByTrait(tempAttack.attackAbility) + ", Speed " + tempAttack.speed +")</p>";

            tempHTML += "<p>" + tempAttack.attackStuntText + "</p>";

            tempHTML += "<p><strong>DV Adjustment: </strong>" + tempAttack.attackDVAdjustment + " (" + tempAttack.attackDVAdjustmentLabel + ")</p>";

            tempHTML += "<p><strong>Appearance DV Adjustment: </strong>" + ((currentPC[CONSTANT_TRAIT_APPEARANCE] - currentSocialCombat.combatants[i][CONSTANT_TRAIT_APPEARANCE]) * -1) + "</p>";

            tempHTML += "<p><strong>Pool: </strong>" + (currentPC[tempAttack.attackAttribute] + currentPC[tempAttack.attackAbility] + getCharacterSpecialty(currentPC[CONSTANT_TRAIT_SPECIALTY], tempAttack.attackSpecialty)) + " (" + getAttributeLabelByTrait(tempAttack.attackAttribute) + " + " + getAbilityLabelByTrait(tempAttack.attackAbility) + ")</p>";

        } 

    }


    tempHTML += getWPSpendHTML("attackAction", currentSocialCombat);

    tempHTML += "<p><input type=\"button\" id=\"pcSocialOptionAttackAction\" value=\"Attack Target\" /></p></div>";


    //FLURRY

    
        tempHTML += "<h3><a href=\"#\">Flurry (Speed Varies/DV Varies)</a></h3>";
        tempHTML += "<div><p>Take multiple actions on a single tick, beginning with the action selected below.  Speed is equal to the highest speed of all actions in the flurry.  The DV penalty is the total of that of all actions in the flurry.  The first action takes an internal penalty equal to the number of actions, each subsequent action takes a cumulative one die additional penalty.  A given attack mode may only be used up to its Rate times per flurry (Investigation is Rate 2).</p>";

        tempHTML += "<p><strong>Number of Actions: </strong><select id=\"flurryActionNumberActions\">";

            for (i = 2; i < 7; i++) {

                tempHTML += "<option value=\""+ i + "\"";

                if (i == 2) {

                    tempHTML += " selected=\"selected\" ";

                }

                tempHTML += ">" + i + "</option>"; 

            }

        tempHTML += "</select></p>";
        tempHTML += "<p><strong>Penalty on first action: </strong><span id=\"multipleActionPenaltyFirstTarget\">2</span></p>";              
        tempHTML += "<p><strong>Penalty on last action: </strong><span id=\"multipleActionPenaltyLastTarget\">3</span></p>";

       /* tempHTML += "<p><strong>Stunt:</strong></p><p><ul id=\"flurryStuntsList\">";

        tempHTML += "<li><input type=\"radio\" name=\"flurryStuntRadio\" value=\"" + CONSTANT_NO_STUNT + "\" checked=\"checked\"> &quot;I use a flurry.&quot;</li>";

        tempHTML += getPCStuntsString(currentSocialCombat, COMBAT_ACTION_FLURRY);

        tempHTML += "</ul></p>"; */

        tempHTML += getPCSocialFlurryOptionsHTML(false);
        
        tempHTML += "</div>";
    

    
    //AIM^H^H^H STUDY
       

    tempHTML += "<h3><a href=\"#\">Study (Speed 3/DV -2)</a></h3>";
    tempHTML += "<div><p>Social version of Aim.  Choose target, then wait for 3 ticks before attacking.  Grants a +3 bonus to your attack.  You do not refresh DV before attacking.</p>";
    tempHTML += "<p><input type=\"button\" id=\"pcSocialOptionAimAction\" value=\"Take Study Action\" /></p></div>";

    

    //GUARD

    tempHTML += "<h3><a href=\"#\">Guard (Speed 3/DV -0)</a></h3>";
    tempHTML += "<div><p>Wait 3 ticks with no DV penalty.</p>";
    tempHTML += "<p><input type=\"button\" id=\"pcSocialOptionGuardAction\" value=\"Take Guard Action\" /></p></div>";

    

    //MISC ACTIONS

    if (hasAvailableMiscActions(currentSocialCombat)) {

        tempHTML += getSocialMiscActionsHTML(currentSocialCombat);


    }

    //close it up

    tempHTML += "</div>";


    return tempHTML;
}



function getSocialMiscActionsHTML(combat) {

    var i;

    var tempHTML;

    tempHTML = "<h3><a href=\"#\">Miscelleaneous Action (Speed 5/DV Varies)</a></h3>";

    tempHTML += "<div>";

    tempHTML += "<div id=\"pcMiscOptionsAccordion\">";

    for (i = 0; i < combat.validMiscActions.length; i++) {

        if ((!combat.validMiscActions[i].used) || combat.validMiscActions[i].repeatable) {

            tempHTML += "<h3><a href=\"#\">" + combat.validMiscActions[i].title + " (Speed 5/DV -" + combat.validMiscActions[i].dvPenalty + ")</a></h3>";
            tempHTML += "<div><p>" + combat.validMiscActions[i].description + "</p>";

            if (combat.validMiscActions[i].rolled) {

                tempHTML += "<p><strong>Stunt:</strong></p><p><ul id=\"miscAction" + i + "StuntsList\">";

                tempHTML += "<li><input type=\"radio\" name=\"miscAction" + i + "StuntRadio\" value=\"" + CONSTANT_NO_STUNT + "\" checked=\"checked\"> &quot;I perform the miscellaneous action.&quot;</li>";

                tempHTML += getPCStuntsStringByActionKey(combat, COMBAT_ACTION_MISCELLANEOUS, combat.validMiscActions[i].key, "miscAction" + i);

                tempHTML += "</ul></p>";

                tempHTML += getWPSpendHTML("miscAction" + i, currentSocialCombat);

            }

            tempHTML += "<p><input type=\"button\" id=\"pcMiscSocialAction" + i + "\" value=\"Execute Action\" /></p></div>";

        }

    }

    tempHTML += "</div></div>";

    return tempHTML;

}



function getSocialMiscActionsForFlurry(combat) {

    var i;

    var tempHTML;

    tempHTML = "<h3><a href=\"#\">Miscelleaneous Action (Speed 5/DV Varies)</a></h3>";

    tempHTML += "<div>";

    tempHTML += "<div id=\"pcMiscFlurryAccordion\">";

    for (i = 0; i < combat.validMiscActions.length; i++) {

        if ((!combat.validMiscActions[i].used) || combat.validMiscActions[i].repeatable) {

            tempHTML += "<h3><a href=\"#\">" + combat.validMiscActions[i].title + " (Speed 5/DV -" + combat.validMiscActions[i].dvPenalty + ")</a></h3>";
            tempHTML += "<div><p>" + combat.validMiscActions[i].description + "</p>";

            if (combat.validMiscActions[i].rolled) {

                tempHTML += "<p><strong>Stunt:</strong></p><p><ul id=\"miscFlurryAction" + i + "StuntsList\">";

                tempHTML += "<li><input type=\"radio\" name=\"miscFlurryAction" + i + "StuntRadio\" value=\"" + CONSTANT_NO_STUNT + "\" checked=\"checked\"> &quot;I perform the miscellaneous action.&quot;</li>";

                tempHTML += getPCStuntsStringByActionKey(combat, COMBAT_ACTION_MISCELLANEOUS, combat.validMiscActions[i].key, "miscFlurryAction" + i);

                tempHTML += "</ul></p>";

                tempHTML += getWPSpendHTML("miscFlurryAction" + i, currentSocialCombat);

            }

            tempHTML += "<p><input type=\"button\" id=\"pcMiscFlurryAction" + i + "\" value=\"Execute Action\" /></p></div>";

        }

    }

    tempHTML += "</div></div>";

    return tempHTML;
    

}

function getPCSocialFlurryOptionsHTML(cancel) {

    var i;
    
    var tempHTML = "";

    //Open

    tempHTML += "<div id=\"pcFlurryOptionsAccordion\">";

    //Attack

    if (currentPC[CONSTANT_CHARACTER_CURRENT_FLURRY].weaponAttacks < 2) {  //Ah hardcoded for investigation, cryface

        tempHTML += "<h3><a href=\"#\">Attack (Speed Varies/DV -2)</a></h3>";
        tempHTML += "<div><p>Attack chosen target.  Investigation attacks are Speed 5, Rate 2.  We haven't included Presence and Performance attacks for Sakuya owing to her very low pools.</p>";

        for (i = 0; i < currentSocialCombat.combatants.length; i++) {

            tempAttack = getNextSocialAttack(currentPC.key, currentSocialCombat.combatants[i].key, currentSocialCombat);

            if (!tempAttack.exhausted) {

                tempHTML += "<p><input type=\"radio\" name=\"socialFlurryAttackRadio\" value=\"" + tempAttack.index + "\"";

                if (i == 0) {

                    tempHTML += " checked=\"checked\"";

                }

                tempHTML += " /> <strong>Attack " + currentSocialCombat.combatants[i][CONSTANT_TRAIT_CHARACTER_SHORT_NAME] + " </strong>(" + getAbilityLabelByTrait(tempAttack.attackAbility) + ", Speed " + tempAttack.speed +")</p>";

                tempHTML += "<p>" + tempAttack.attackStuntText + "</p>";

                tempHTML += "<p><strong>DV Adjustment: </strong>" + tempAttack.attackDVAdjustment + " (" + tempAttack.attackDVAdjustmentLabel + ")</p>";

                tempHTML += "<p><strong>Appearance DV Adjustment: </strong>" + ((currentPC[CONSTANT_TRAIT_APPEARANCE] - currentSocialCombat.combatants[i][CONSTANT_TRAIT_APPEARANCE]) * -1) + "</p>";

                tempHTML += "<p><strong>Pool: </strong>" + (currentPC[tempAttack.attackAttribute] + currentPC[tempAttack.attackAbility] + getCharacterSpecialty(currentPC[CONSTANT_TRAIT_SPECIALTY], tempAttack.attackSpecialty)) + " (" + getAttributeLabelByTrait(tempAttack.attackAttribute) + " + " + getAbilityLabelByTrait(tempAttack.attackAbility) + ")</p>";

            } 

        }


        tempHTML += getWPSpendHTML("attackActionFlurry", currentSocialCombat);

        tempHTML += "<p><input type=\"button\" id=\"pcSocialFlurryAttackAction\" value=\"Attack Target\" /></p></div>";


    }

    //Misc Actions

    if (hasAvailableMiscActions(currentSocialCombat)) {

        tempHTML += getSocialMiscActionsForFlurry(currentSocialCombat);

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

function getPCMDVOptionsHTML() {

    var i;
    
    var tempHTML = "";
    
    tempHTML += "<div id=\"pcSocialOptionsAccordion\">";



    //PARRY

    tempHTML += "<h3><a href=\"#\">Parry (MDV " + getTotalParryMDV(currentPC) + ")</a></h3>";
    tempHTML += "<div><p>Deflect attack with debate.</p>";

    tempHTML += "<p><strong>Stunt:</strong></p><p><ul id=\"parryStuntsList\">";

    tempHTML += "<li><input type=\"radio\" name=\"parryStuntRadio\" value=\"" + CONSTANT_NO_STUNT + "\" checked=\"checked\"> &quot;I rebut the argument&quot;</li>";

    tempHTML += getPCStuntsString(currentSocialCombat, COMBAT_ACTION_PARRY);

    tempHTML += "</ul></p>";

    tempHTML += getWPSpendHTML("parryAction", currentSocialCombat);

    tempHTML += "<p><input type=\"button\" id=\"pcSocialOptionParryAction\" value=\"Choose Parry MDV\" /></p></div>";

    
    //DODGE

    tempHTML += "<h3><a href=\"#\">Dodge (MDV " + getTotalDodgeMDV(currentPC) + ")</a></h3>";
    tempHTML += "<div><p>Avoid attack by moving out of the way.</p>";

    tempHTML += "<p><strong>Stunt:</strong></p><p><ul id=\"dodgeStuntsList\">";

    tempHTML += "<li><input type=\"radio\" name=\"dodgeStuntRadio\" value=\"" + CONSTANT_NO_STUNT + "\" checked=\"checked\"> &quot;I ignore the argument&quot;</li>";

    tempHTML += getPCStuntsString(currentSocialCombat, COMBAT_ACTION_DODGE);

    tempHTML += "</ul></p>";

    tempHTML += getWPSpendHTML("dodgeAction", currentSocialCombat);
        
    tempHTML += "<p><input type=\"button\" id=\"pcSocialOptionDodgeAction\" value=\"Choose Dodge MDV\" /></p></div>";


    //close it up

    tempHTML += "</div>";


    return tempHTML;


}



function hookUpPCSocialOptions() {

    var i;

    $("#pcSocialOptionsAccordion").accordion({autoHeight: false});

    hookUpPCSocialFlurryOptions();

    $("#pcMiscOptionsAccordion").accordion({autoHeight: false});

    if (hasAvailableMiscActions(currentSocialCombat)) {

        for (i = 0; i < currentSocialCombat.validMiscActions.length; i++) {

            if ((!currentSocialCombat.validMiscActions[i].used) || currentSocialCombat.validMiscActions[i].repeatable) {

                $("#pcMiscSocialAction" + i).click(currentSocialCombat.validMiscActions[i].callback);

            }
        }

    } 

    $("#pcSocialOptionAimAction").click(function(event) {

        aimActionSocial(currentSocialCombat, currentPC);

    });

    $("#pcSocialOptionGuardAction").click(function(event) {

        guardActionSocial(currentSocialCombat, currentPC);

    });

    
    $("#pcSocialOptionAttackAction").click(function (event) {

        var willpower = {
        
            type: CONSTANT_WP_NONE
        
        };

        if ($("input:checkbox[name=attackActionSpendWillpower]:checked").val() == "true") {

            willpower = {
            
                type: $("input:radio[name=attackActionWPSpendRadio]:checked").val(),
                virtue: $("#attackActionChanneledVirtue").val()
            
            };

        }

        pcSocialAttackAction(currentSocialCombat, currentPC, willpower, $("input:radio[name=socialAttackRadio]:checked").val());

    });
    /*

    $("#flurryActionNumberActions").change(function (event) {

        var numActions = $("#flurryActionNumberActions").val();

        $("#multipleActionPenaltyFirstTarget").html(numActions);

        $("#multipleActionPenaltyLastTarget").html((2 * numActions) - 1);

    });  */

}



function hookUpPCSocialFlurryOptions() {

    $("#pcFlurryOptionsAccordion").accordion({autoHeight: false});

    $("#pcSocialFlurryAttackAction").click(function (event) {

        var willpower = {
        
            type: CONSTANT_WP_NONE
        
        };

        if ($("input:checkbox[name=attackActionFlurrySpendWillpower]:checked").val() == "true") {

            willpower = {
            
                type: $("input:radio[name=attackActionFlurryWPSpendRadio]:checked").val(),
                virtue: $("#attackActionFlurryChanneledVirtue").val()
            
            };

        }

        socialFlurryAction(currentPC, $("#flurryActionNumberActions").val(), COMBAT_ACTION_ATTACK, $("input:radio[name=socialFlurryAttackRadio]:checked").val(), function () { pcSocialAttackAction(currentSocialCombat, currentPC, willpower, $("input:radio[name=socialFlurryAttackRadio]:checked").val()); });

    });


    $("#pcMiscFlurryAccordion").accordion({autoHeight: false});

    if (hasAvailableMiscActions(currentSocialCombat)) {

        for (i = 0; i < currentSocialCombat.validMiscActions.length; i++) {

            if ((!currentSocialCombat.validMiscActions[i].used) || currentSocialCombat.validMiscActions[i].repeatable) {

                $("#pcMiscFlurryAction" + i).click(currentSocialCombat.validMiscActions[i].flurryCallback);

            }
        }

    }

    $("#pcFlurryOptionCancel").click(function(event) {

        finishAction(currentSocialCombat, currentPC);

    });

}

function hookUpPCSocialDefenceOptions() {

    $("#pcSocialOptionsAccordion").accordion();

    $("#pcSocialOptionParryAction").click(function (event) {
      
        var willpower = {
        
            type: CONSTANT_WP_NONE
        
        };

        if ($("input:checkbox[name=parryActionSpendWillpower]:checked").val() == "true") {

            willpower = {
            
                type: $("input:radio[name=parryActionWPSpendRadio]:checked").val(),
                virtue: $("#parryActionChanneledVirtue").val()
            
            };

        }

        handleNPCSocialAttack(currentSocialCombat, getCombatCombatant(currentSocialCombat, currentSocialCombat.actingCharacter), DV_PARRY, willpower, $("input:radio[name=parryStuntRadio]:checked").val());

    });

    $("#pcSocialOptionDodgeAction").click(function (event) {

        var willpower = {
        
            type: CONSTANT_WP_NONE
        
        };

        if ($("input:checkbox[name=dodgeActionSpendWillpower]:checked").val() == "true") {

            willpower = {
            
                type: $("input:radio[name=dodgeActionWPSpendRadio]:checked").val(),
                virtue: $("#dodgeActionChanneledVirtue").val()
            
            };

        }
        
        handleNPCSocialAttack(currentSocialCombat, getCombatCombatant(currentSocialCombat, currentSocialCombat.actingCharacter), DV_DODGE, willpower, $("input:radio[name=dodgeStuntRadio]:checked").val());

    });


}




//################################################ SOCIAL ATTACK POOLS ETC #################################################################


function getAppearanceDelta(attacker, defender) {

    var tempAppearanceDelta = defender[CONSTANT_TRAIT_APPEARANCE] - attacker[CONSTANT_TRAIT_APPEARANCE];

    if (tempAppearanceDelta > 3) {

        tempAppearanceDelta = 3;

    }

    if (tempAppearanceDelta < -3) {

        tempAppearanceDelta = -3;

    }

    return tempAppearanceDelta;

}


function getBestSocialAttack(character) {

    var returnObject = {

        total: 0,
        label: "",
        components: new Array()

    }

    var attribute = getBestTraitOf({

        label: "Charisma",
        shortLabel: "Cha",
        rating: character[CONSTANT_TRAIT_CHARISMA]

    }, {

        label: "Manipulation",
        shortLabel: "Man",
        rating: character[CONSTANT_TRAIT_MANIPULATION]

    });

    returnObject.total += attribute.rating;
    returnObject.label += attribute.shortLabel;
    returnObject.components.push(attribute);

    var ability = getBestTraitOf({

        abilityLabel: "Presence",
        abilityShortLabel: "Pre",
        abilityRating: character[CONSTANT_TRAIT_PRESENCE],
        specialtyLabel: getBestSpecialtyForSocialCombat(character, CONSTANT_TRAIT_PRESENCE).label,
        specialtyRating: getBestSpecialtyForSocialCombat(character, CONSTANT_TRAIT_PRESENCE).rating,
        rating: character[CONSTANT_TRAIT_PRESENCE] + getBestSpecialtyForSocialCombat(character, CONSTANT_TRAIT_PRESENCE).rating

    }, {

        abilityLabel: "Performance",
        abilityShortLabel: "Prf",
        abilityRating: character[CONSTANT_TRAIT_PERFORMANCE],
        specialtyLabel: getBestSpecialtyForSocialCombat(character, CONSTANT_TRAIT_PERFORMANCE).label,
        specialtyRating: getBestSpecialtyForSocialCombat(character, CONSTANT_TRAIT_PERFORMANCE).rating,
        rating: character[CONSTANT_TRAIT_PERFORMANCE] + getBestSpecialtyForSocialCombat(character, CONSTANT_TRAIT_PERFORMANCE).rating

    }, {

        abilityLabel: "Investigation",
        abilityShortLabel: "Inv",
        abilityRating: character[CONSTANT_TRAIT_INVESTIGATION],
        specialtyLabel: getBestSpecialtyForSocialCombat(character, CONSTANT_TRAIT_INVESTIGATION).label,
        specialtyRating: getBestSpecialtyForSocialCombat(character, CONSTANT_TRAIT_INVESTIGATION).rating,
        rating: character[CONSTANT_TRAIT_INVESTIGATION] + getBestSpecialtyForSocialCombat(character, CONSTANT_TRAIT_INVESTIGATION).rating


    });

    returnObject.total += ability.rating;
    returnObject.label += " + " + ability.abilityShortLabel;
    
    returnObject.components.push({

        label: ability.abilityLabel,
        rating: ability.abilityRating

    });
    
    returnObject.components.push({

        label: ability.specialtyLabel,
        rating: ability.specialtyRating

    });

    
    return returnObject;


}


//################################################ COMBAT DV DERIVATION STRING #################################################################

function getBaseMDVDerivationString(character, attacker, chosenDV) {

    var tempString = "<p><strong>Base ";

    if (chosenDV == DV_PARRY) {

        tempString += "Parry MDV:</strong> ";

        tempString += getParryMDV(character) + "</p>";

    }

    if (chosenDV == DV_DODGE) {

        tempString += "Dodge MDV:</strong> ";

        tempString += getDodgeMDV(character) + "</p>";

    }

    tempString += "<p><strong>Action Penalty: </strong>-" + getBuffTotal(character, CONSTANT_BUFF_ACTION_PENALTY) + "</p>";

    tempString += "<p><strong>Wound Penalty: </strong>" + getCurrentWoundPenaltyLabel(character) + "</p>";

    if (getBuffTotal(character, CONSTANT_BUFF_ONSLAUGHT_PENALTY) > 0) {

        tempString += "<p><strong>Onslaught Penalty: </strong>-" + getBuffTotal(character, CONSTANT_BUFF_ONSLAUGHT_PENALTY) + "</p>";

    }

    tempString += "<p><strong>Appearance Adjustment: </strong>" + getAppearanceDelta(attacker, character) + "</p>";

    return tempString;

}


//################################################ ACTUALLY DRAWING THE SOCIAL TRACKER #################################################################

function fillSocialTrackerFromCombat(combat) {

    $("#socialTrackerTitleTarget").html(combat.name);

    $("#socialReactionCountTarget").html(combat.reactionCount);

    $("#currentSocialTickLabelTarget").html(combat.currentTick);

    $("#currentSocialTickActors").html(getTickActorsString(combat, combat.currentTick));

    var i;

    var tempFunction;

    for (i = 1; i < 7; i++) {

        $("#nextSocialTickLabel" + i).html(combat.currentTick + i);
        $("#nextSocialTickActors" + i).html(getTickActorsString(combat, combat.currentTick + i));

    }





    $("#socialTrackerCombatants").html("<div id=\"socialCombatantPC\" class=\"combatant\"><div id=\"socialCombatantNamePC\" class=\"combatantName\"></div><div id=\"socialCombatantAttackPC\" class=\"combatantDV\"><strong>Best Attack: </strong><span id=\"socialCombatantAttackTargetPC\"></span></div><div id=\"socialCombatantDVPC\" class=\"combatantDV\"><strong>Best MDV: </strong><span id=\"socialCombatantDVTargetPC\"></span></div><div id=\"socialCombatantAppearancePC\" class=\"combatantDV\"><strong>Appearance: </strong><span id=\"socialCombatantAppearanceTargetPC\"></span></div><div id=\"socialCombatantWillpowerPC\" class=\"combatantWillpower\"><strong>Current Willpower: </strong><span id=\"socialCombatantWillpowerTargetPC\"></span></div><div id=\"socialCombatantMIVPC\" class=\"combatantMIV\"><strong>Motivation/Intimacies/Virtues</strong></div></div>");

    $("#socialCombatantNamePC").html(currentPC[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]);

  
    //Best Attack goes here

    $("#socialCombatantAttackTargetPC").html(getBestSocialAttack(currentPC).total + " (" + getBestSocialAttack(currentPC).label + ")");

    $("#socialCombatantAttackPC").css("cursor", "pointer");

    tempFunction = function (event) {

        var attack = arguments.callee.attackPool;

        $combatDialogue.html("Best social attack pool is <strong>" + attack.total + ":</strong> ");
        $combatDialogue.append(attack.components[0].label + " " + attack.components[0].rating);
        $combatDialogue.append(" + " + attack.components[1].label + " " + attack.components[1].rating);

        if (attack.components.length > 2) {

            if (attack.components[2].rating > 0) {

                $combatDialogue.append(" + " + attack.components[2].label + " " + attack.components[2].rating);

            }

        }

        $combatDialogue.dialog({

            title: currentPC[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

        });

        $combatDialogue.dialog("open");

        return false;

    }

    tempFunction.attackPool = getBestSocialAttack(currentPC);
    
    $("#socialCombatantAttackPC").click(tempFunction);



    $("#socialCombatantDVTargetPC").html(getBestMDV(currentPC).dv + " (" + getBestMDV(currentPC).label + ")");
    $("#socialCombatantDVPC").css("cursor", "pointer");

    $("#socialCombatantDVPC").click(function (event) {

        $combatDialogue.html("<p><strong>Base Parry MDV: </strong>" + getParryMDV(currentPC) + "</p>");

        $combatDialogue.append("<p><strong>Base Dodge MDV: </strong>" + getDodgeMDV(currentPC) + "</p>");

        $combatDialogue.append("<p><strong>Action Penalty: </strong>" + getBuffTotal(currentPC, CONSTANT_BUFF_ACTION_PENALTY) + "</p>");

        $combatDialogue.append("<p><strong>Wound Penalty: </strong>" + getCurrentWoundPenaltyLabel(currentPC) + "</p>");

        $combatDialogue.append("<p><strong>Total Parry MDV: </strong>" + getTotalParryMDV(currentPC) + "</p>");

        $combatDialogue.append("<p><strong>Total Dodge MDV: </strong>" + getTotalDodgeMDV(currentPC) + "</p>");

        $combatDialogue.dialog({

            title: currentPC[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

        });

        $combatDialogue.dialog("open");

        return false;


    });


    $("#socialCombatantAppearanceTargetPC").html(currentPC[CONSTANT_TRAIT_APPEARANCE]);
    $("#socialCombatantAppearancePC").css("cursor", "pointer");

    $("#socialCombatantAppearancePC").click(function (event) {

        $combatDialogue.html("<p>Appearance is a powerful advantage in social combat.  During a social attack, the defender's DVs are adjusted by the difference between their Appearance and the attacker's.</p><p>For example, Sakuya is Appearance 5 and Meiling is Appearance 3, a difference of 2 dots.  Sakuya gains +2 DV when attacked by Meiling, while Meiling suffers a -2 DV penalty when attacked by Sakuya.</p>");

        $combatDialogue.dialog({

            title: currentPC[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

        });

        $combatDialogue.dialog("open");

        return false;


    });


    $("#socialCombatantWillpowerTargetPC").html(currentPC[CONSTANT_TRAIT_WILLPOWER_CURRENT]);
    $("#socialCombatantWillpowerPC").css("cursor", "pointer");


    $("#socialCombatantWillpowerPC").click(function (event) {

        $combatDialogue.html("<p><strong>Current Willpower: </strong>" + currentPC[CONSTANT_TRAIT_WILLPOWER_CURRENT] + "</p>");

        $combatDialogue.append("<p><strong>Max Willpower: </strong>" + currentPC[CONSTANT_TRAIT_WILLPOWER] + "</p>");

        $combatDialogue.append("<p>Willpower points are spent to resist successful social attacks.  Natural attacks cost 1 point to resist, plus one per three full remaining successes on the attack roll after penalties and MDV, but magical social attacks may cost many more.</p>");

        $combatDialogue.append("<p>A character who has expended Willpower resisting natural influence is immune to further natural persuasion from that attacker for the scene, and any other attackers take an external penalty equal to the character's Integrity.</p>");

        $combatDialogue.dialog({

            title: currentPC[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

        });

        $combatDialogue.dialog("open");


    });

    $("#socialCombatantMIVPC").css("cursor", "pointer");

    $("#socialCombatantMIVPC").click(function (event) {

        $combatDialogue.html("<p><strong>Motivation: </strong>" + currentPC[CONSTANT_TRAIT_MOTIVATION] + "</p>");

        $combatDialogue.append("<p><strong>Intimacies: </strong><br/>");

        var i;

        for (i = 0; i < currentPC[CONSTANT_TRAIT_INTIMACIES].length; i++) {

            $combatDialogue.append(currentPC[CONSTANT_TRAIT_INTIMACIES][i].label + "<br/>");

        }

        $combatDialogue.append("</p>");

        $combatDialogue.append("<p><strong>Compassion: </strong>" + currentPC[CONSTANT_TRAIT_COMPASSION] + "</p>");

        $combatDialogue.append("<p><strong>Temperance: </strong>" + currentPC[CONSTANT_TRAIT_TEMPERANCE] + "</p>");

        $combatDialogue.append("<p><strong>Valor: </strong>" + currentPC[CONSTANT_TRAIT_VALOUR] + "</p>");

        $combatDialogue.append("<p><strong>Conviction: </strong>" + currentPC[CONSTANT_TRAIT_CONVICTION] + "</p>");



        $combatDialogue.dialog({

            title: currentPC[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

        });

        $combatDialogue.dialog("open");


    });




    for (i = 0; i < combat.combatants.length; i++) {

        $("#socialTrackerCombatants").append("<div id=\"socialCombatant" + i + "\" class=\"combatant\"><div id=\"socialCombatantName" + i + "\" class=\"combatantName\"></div><div id=\"socialCombatantAttack" + i + "\" class=\"combatantDV\"><strong>Best Attack: </strong><span id=\"socialCombatantAttackTarget" + i + "\"></span></div><div id=\"socialCombatantDV" + i + "\" class=\"combatantDV\"><strong>Best MDV: </strong><span id=\"socialCombatantDVTarget" + i + "\"></span></div><div id=\"socialCombatantAppearance" + i + "\" class=\"combatantDV\"><strong>Appearance: </strong><span id=\"socialCombatantAppearanceTarget" + i + "\"></span></div><div id=\"socialCombatantWillpower" + i + "\" class=\"combatantWillpower\"><strong>Current Willpower: </strong><span id=\"socialCombatantWillpowerTarget" + i + "\"></span></div><div id=\"socialCombatantMIV" + i + "\" class=\"combatantMIV\"><strong>Motivation/Intimacies/Virtues</strong></div><div id=\"socialCombatantEssence" + i + "\" class=\"combatantEssence\"><strong>Essence and Charms</strong></div></div>");
        

        $("#socialCombatantName" + i).html(combat.combatants[i][CONSTANT_TRAIT_CHARACTER_SHORT_NAME]);

        $("#socialCombatantAttackTarget" + i).html(getBestSocialAttack(combat.combatants[i]).total + " (" + getBestSocialAttack(combat.combatants[i]).label + ")");

        $("#socialCombatantAttack" + i).css("cursor", "pointer");

        tempFunction = function (event) {

            var attack = arguments.callee.attackPool;

            $combatDialogue.html("Best social attack pool is <strong>" + attack.total + ":</strong> ");
            $combatDialogue.append(attack.components[0].label + " " + attack.components[0].rating);
            $combatDialogue.append(" + " + attack.components[1].label + " " + attack.components[1].rating);

            if (attack.components.length > 2) {

                if (attack.components[2].rating > 0) {

                    $combatDialogue.append(" + " + attack.components[2].label + " " + attack.components[2].rating);

                }

            }

            $combatDialogue.dialog({

                title: arguments.callee.combatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

            });

            $combatDialogue.dialog("open");

            return false;

        }

        tempFunction.attackPool = getBestSocialAttack(combat.combatants[i]);
        tempFunction.combatant = combat.combatants[i];

        $("#socialCombatantAttack" + i).click(tempFunction);


        $("#socialCombatantDVTarget" + i).html(getBestMDV(combat.combatants[i]).dv + " (" + getBestMDV(combat.combatants[i]).label + ")");
        $("#socialCombatantDV" + i).css("cursor", "pointer");

        tempFunction = function (event) {

            $combatDialogue.html("<p><strong>Base Parry MDV: </strong>" + getParryMDV(arguments.callee.combatant) + "</p>");

            $combatDialogue.append("<p><strong>Base Dodge MDV: </strong>" + getDodgeMDV(arguments.callee.combatant) + "</p>");

            $combatDialogue.append("<p><strong>Action Penalty: </strong>" + getBuffTotal(arguments.callee.combatant, CONSTANT_BUFF_ACTION_PENALTY) + "</p>");

            $combatDialogue.append("<p><strong>Wound Penalty: </strong>" + getCurrentWoundPenaltyLabel(arguments.callee.combatant) + "</p>");

            $combatDialogue.append("<p><strong>Total Parry MDV: </strong>" + getTotalParryMDV(arguments.callee.combatant) + "</p>");

            $combatDialogue.append("<p><strong>Total Dodge MDV: </strong>" + getTotalDodgeMDV(arguments.callee.combatant) + "</p>");

            $combatDialogue.dialog({

                title: arguments.callee.combatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

            });

            $combatDialogue.dialog("open");

            return false;


        };

        tempFunction.combatant = combat.combatants[i];

        $("#socialCombatantDV" + i).click(tempFunction);


        $("#socialCombatantAppearanceTarget" + i).html(combat.combatants[i][CONSTANT_TRAIT_APPEARANCE]);
        $("#socialCombatantAppearance" + i).css("cursor", "pointer");


        tempFunction = function (event) {

            $combatDialogue.html("<p>Appearance is a powerful advantage in social combat.  During a social attack, the defender's DVs are adjusted by the difference between their Appearance and the attacker's.</p><p>For example, Sakuya is Appearance 5 and Meiling is Appearance 3, a difference of 2 dots.  Sakuya gains +2 DV when attacked by Meiling, while Meiling suffers a -2 DV penalty when attacked by Sakuya.</p>");

            $combatDialogue.dialog({

                title: arguments.callee.combatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

            });

            $combatDialogue.dialog("open");

            return false;


        };

        tempFunction.combatant = combat.combatants[i];

        $("#socialCombatantAppearance" + i).click(tempFunction);



        $("#socialCombatantWillpowerTarget" + i).html(combat.combatants[i][CONSTANT_TRAIT_WILLPOWER_CURRENT]);
        $("#socialCombatantWillpower" + i).css("cursor", "pointer");

        tempFunction = function (event) {

            $combatDialogue.html("<p><strong>Current Willpower: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_WILLPOWER_CURRENT] + "</p>");

            $combatDialogue.append("<p><strong>Max Willpower: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_WILLPOWER] + "</p>");

            $combatDialogue.append("<p>Willpower points are spent to resist successful social attacks.  Natural attacks cost 1 point to resist, plus one per three full remaining successes on the attack roll after penalties and MDV, but magical social attacks may cost many more.</p>");

            $combatDialogue.append("<p>A character who has expended Willpower resisting natural influence is immune to further natural persuasion from that attacker for the scene, and any other attackers take an external penalty equal to the character's Integrity.</p>");

            $combatDialogue.dialog({

                title: arguments.callee.combatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

            });

            $combatDialogue.dialog("open");



        };

        tempFunction.combatant = combat.combatants[i];

        $("#socialCombatantWillpower" + i).click(tempFunction);


        $("#socialCombatantMIV" + i).css("cursor", "pointer");

        tempFunction = function (event) {

            $combatDialogue.html("<p><strong>Motivation: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_MOTIVATION] + "</p>");

            $combatDialogue.append("<p><strong>Intimacies: </strong><br/>");

            var i;

            for (i = 0; i < arguments.callee.combatant[CONSTANT_TRAIT_INTIMACIES].length; i++) {

                $combatDialogue.append(arguments.callee.combatant[CONSTANT_TRAIT_INTIMACIES][i].label + "<br/>");

            }

            $combatDialogue.append("</p>");

            $combatDialogue.append("<p><strong>Compassion: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_COMPASSION] + "</p>");

            $combatDialogue.append("<p><strong>Temperance: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_TEMPERANCE] + "</p>");

            $combatDialogue.append("<p><strong>Valor: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_VALOUR] + "</p>");

            $combatDialogue.append("<p><strong>Conviction: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_CONVICTION] + "</p>");



            $combatDialogue.dialog({

                title: arguments.callee.combatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

            });

            $combatDialogue.dialog("open");


        }

        tempFunction.combatant = combat.combatants[i];

        $("#socialCombatantMIV" + i).click(tempFunction);


        if (combat.combatants[i][CONSTANT_TRAIT_EXALTED]) {

            $("#socialCombatantEssence" + i).show();

            $("#socialCombatantEssence" + i).css("cursor", "pointer");

            tempFunction = function (event) {

                $combatDialogue.html("<p><strong>Essence: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_ESSENCE] + "</p>");

                $combatDialogue.append("<p><strong>Personal: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_PERSONAL_CURRENT] + "/" + arguments.callee.combatant.getPersonalCap() + "</p>");

                $combatDialogue.append("<p><strong>Peripheral: </strong>" + arguments.callee.combatant[CONSTANT_TRAIT_PERIPHERAL_CURRENT] + "/" + arguments.callee.combatant.getPeripheralCap() + "</p>");

                $combatDialogue.append("<p><strong>Charms: </strong></p>");

                var i;

                for (i = 0; i < arguments.callee.combatant[CONSTANT_TRAIT_CHARMS].length; i++) {

                    if (charmLibrary[arguments.callee.combatant[CONSTANT_TRAIT_CHARMS][i]].showSocial) {

                        $combatDialogue.append("<p><strong><em>" + charmLibrary[arguments.callee.combatant[CONSTANT_TRAIT_CHARMS][i]].label + "</strong></em><br/>");
                        $combatDialogue.append(charmLibrary[arguments.callee.combatant[CONSTANT_TRAIT_CHARMS][i]].shortDescription + "</p>");

                    }



                }



                $combatDialogue.dialog({

                    title: arguments.callee.combatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME]

                });

                $combatDialogue.dialog("open");


            }

            tempFunction.combatant = combat.combatants[i];

            $("#socialCombatantEssence" + i).click(tempFunction);

        }


    }







    $("#socialTrackerCombatants").append("<div class=\"clear\"></div>");

}