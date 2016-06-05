//It's a function factory!

//In some respects this is terrible, but it is useful when saving objects as JSON, since you lose the functions, but not a token that gets exchanged for a function.

function getFunctionByKey(functionKey) {

    switch (functionKey) {


        case FUNCTION_KEY_NEXT_TICK:

            return function (event) {

                advanceTick(currentCombat);

            };
            break;


        case FUNCTION_KEY_NEXT_TICK_SOCIAL:

            return function (event) {

                advanceTick(currentSocialCombat);

            };
            break;


        case FUNCTION_KEY_COMBAT_FINISH_ACTION_CONTINUE:

            return function (event) {

                finishAction(currentCombat, getCombatCombatant(currentCombat, currentCombat.actingCharacter));

            };
            break;

        case FUNCTION_KEY_SOCIAL_FINISH_ACTION_CONTINUE:

            return function (event) {

                finishAction(currentSocialCombat, getCombatCombatant(currentSocialCombat, currentSocialCombat.actingCharacter));

            };
            break;


        case FUNCTION_KEY_COMBAT_ROLL_DAMAGE:

            return function (event) {

                handleDamageRoll(getCombatCombatant(currentCombat, currentCombat.actingCharacter));

            };
            break;

        case FUNCTION_KEY_COMBAT_RESET:

            return function (event) {

                currentCombat.combatReset();

            };
            break;

        case FUNCTION_KEY_SOCIAL_COMBAT_RESET:

            return function (event) {

                currentSocialCombat.combatReset();

            };
            break;

        case FUNCTION_KEY_COMBAT_PC_VICTORY_CONTINUE:

            return function (event) {

                currentCombat.onCombatEnd();
                processSegmentObject(getSegmentObjectByKey(currentCombat.pcVictorySegment));

            };
            break;


        case FUNCTION_KEY_SOCIAL_COMBAT_PC_VICTORY_CONTINUE:

            return function (event) {

                currentSocialCombat.onCombatEnd();
                processSegmentObject(getSegmentObjectByKey(currentSocialCombat.pcVictorySegment));

            };
            break;

        case FUNCTION_KEY_SOCIAL_ACCEPT_ATTACK:

            return function (event) {

                pcAcceptsCurrentSocialAttack();

            };

            break;

        case FUNCTION_KEY_SOCIAL_REFUSE_ATTACK:

            return function (event) {

                pcRefusesCurrentSocialAttack();

            };

            break;


        case FUNCTION_KEY_COMBAT_NPC_FLURRY_CONTINUE:

            return function (event) {

                flurryAction(getCombatCombatant(currentCombat, currentCombat.actingCharacter));

            }
            break;


        case FUNCTION_KEY_COMBAT_OPPOSE_REESTABLISH_SURPRISE:

            return function (event) {

                handleOpposeReestablishSurprise();

            }
            break;



        case FUNCTION_KEY_SAKUYA_SEGMENT_0_FUNCTION_0:
            return function (event) {

                $("#traitLabelPerception").addClass("highlight");
                $("#traitDotsPerception").addClass("highlight");
                $("#traitLabelInvestigation").addClass("highlight");
                $("#traitDotsInvestigation").addClass("highlight");
                $("#traitLabelSpecialty2").addClass("highlight");
                $("#traitDotsSpecialty2").addClass("highlight");

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_1));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_1_FUNCTION_0:
            return function (event) {

                $("#traitLabelPerception").removeClass("highlight");
                $("#traitDotsPerception").removeClass("highlight");
                $("#traitLabelInvestigation").removeClass("highlight");
                $("#traitDotsInvestigation").removeClass("highlight");
                $("#traitLabelSpecialty2").removeClass("highlight");
                $("#traitDotsSpecialty2").removeClass("highlight");


                var tempThreshold = buildPoolAndRoll({

                    type: CONSTANT_MUNDANE_BONUS,
                    label: "Perception",
                    magnitude: currentPC[CONSTANT_TRAIT_PERCEPTION]


                }, {

                    type: CONSTANT_MUNDANE_BONUS,
                    label: "Investigation",
                    magnitude: currentPC[CONSTANT_TRAIT_INVESTIGATION]


                }, {

                    type: CONSTANT_MUNDANE_BONUS,
                    label: CONSTANT_SPECIALTY_LABEL_INVESTIGATION_PHYSICAL_CLUES,
                    magnitude: getCharacterSpecialty(currentPC[CONSTANT_TRAIT_SPECIALTY], CONSTANT_SPECIALTY_INVESTIGATION_PHYSICAL_CLUES)


                });

                switch (tempThreshold) {

                    case CONSTANT_BOTCH:

                        processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_4));

                        break;

                    case CONSTANT_FAILURE:

                        processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_3));

                        break;

                    default:

                        processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_2));

                        break;

                }


            };
            break;


        case FUNCTION_KEY_SAKUYA_SEGMENT_2_FUNCTION_0:
            return function (event) {

                $("#" + CONSTANT_HTML_ID_DICE_BOX).hide();

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_5));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_5_FUNCTION_0:
            return function (event) {

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_6));

                $("#traitLabelBackground1").addClass("highlight");
                $("#traitDotsBackground1").addClass("highlight");

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_5_FUNCTION_1:
            return function (event) {

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_7));

                $("#traitLabelBackground1").addClass("highlight");
                $("#traitDotsBackground1").addClass("highlight");

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_5_FUNCTION_2:
            return function (event) {

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_8));

                $("#traitLabelBackground1").addClass("highlight");
                $("#traitDotsBackground1").addClass("highlight");

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_6_FUNCTION_0:
            return function (event) {

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_9));

                $("#traitLabelBackground1").removeClass("highlight");
                $("#traitDotsBackground1").removeClass("highlight");

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_9_FUNCTION_0:
            return function (event) {

                $("#traitLabelPerception").addClass("highlight");
                $("#traitDotsPerception").addClass("highlight");
                $("#traitLabelInvestigation").addClass("highlight");
                $("#traitDotsInvestigation").addClass("highlight");
                $("#traitLabelSpecialty2").addClass("highlight");
                $("#traitDotsSpecialty2").addClass("highlight");

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_10));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_10_FUNCTION_0:
            return function (event) {

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_11));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_10_FUNCTION_1:
            return function (event) {

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_12));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_10_FUNCTION_2:
            return function (event) {

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_13));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_10_FUNCTION_3:
            return function (event) {

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_14));

            };
            break;


        case FUNCTION_KEY_SAKUYA_SEGMENT_11_FUNCTION_0:

            return getFunctionForSakuyaShrineInvestigation(0);

            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_12_FUNCTION_0:

            return getFunctionForSakuyaShrineInvestigation(1);

            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_13_FUNCTION_0:

            return getFunctionForSakuyaShrineInvestigation(2);

            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_14_FUNCTION_0:

            return getFunctionForSakuyaShrineInvestigation(2);

            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_15_FUNCTION_0:

            return getFunctionForSakuyaShrineInvestigation(currentPC.getStuntBonus().magnitude);

            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_16_FUNCTION_0:

            currentRetryPenalty += 1;

            return getFunctionForSakuyaShrineInvestigation(currentPC.getStuntBonus().magnitude);

            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_17_FUNCTION_0:
            return function (event) {

                $("#" + CONSTANT_HTML_ID_DICE_BOX).hide(); 

                $("#traitLabelStrength").addClass("highlight");
                $("#traitDotsStrength").addClass("highlight");
                $("#traitLabelAthletics").addClass("highlight");
                $("#traitDotsAthletics").addClass("highlight");
                $("#conviction").addClass("highlight");


                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_18));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_18_FUNCTION_0:
            return function (event) {

                channelVirtueForDice(CONSTANT_TRAIT_CONVICTION, CONSTANT_TRAIT_CONVICTION_CURRENT, "Conviction", currentPC);  //Spends the WP, but we don't need the return object as it's not a real roll.

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_19));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_19_FUNCTION_0:
            
            return function (event) {

                $("#traitLabelStrength").removeClass("highlight");
                $("#traitDotsStrength").removeClass("highlight");
                $("#traitLabelAthletics").removeClass("highlight");
                $("#traitDotsAthletics").removeClass("highlight");
                $("#conviction").removeClass("highlight");

                restoreTempTrait(CONSTANT_TRAIT_WILLPOWER_CURRENT, 1, currentPC);

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_20));

                clearBonusesAndPenalties();

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_20_FUNCTION_0:

            return function (event) {

                $("#traitLabelDexterity").addClass("highlight");
                $("#traitDotsDexterity").addClass("highlight");
                $("#traitLabelAthletics").addClass("highlight");
                $("#traitDotsAthletics").addClass("highlight");
                $("#soakMobilityArmour").addClass("highlight");

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_21));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_21_FUNCTION_0:

            return function (event) {

                var actionOptions = getSelectedActionOptions();

                $("#traitLabelDexterity").removeClass("highlight");
                $("#traitDotsDexterity").removeClass("highlight");
                $("#traitLabelAthletics").removeClass("highlight");
                $("#traitDotsAthletics").removeClass("highlight");
                $("#soakMobilityArmour").removeClass("highlight");


                var willpowerBonus = getWPSpendAsBonus(currentPC, actionOptions.willpower);

                currentPC.stunt(actionOptions.stuntRating);

                var stuntBonus = currentPC.getStuntBonus();

                rewardStunt(currentPC);

                var tempThreshold = buildPoolAndRoll({

                    type: CONSTANT_MUNDANE_BONUS,
                    label: "Dexterity",
                    magnitude: currentPC[CONSTANT_TRAIT_DEXTERITY]


                }, {

                    type: CONSTANT_MUNDANE_BONUS,
                    label: "Athletics",
                    magnitude: currentPC[CONSTANT_TRAIT_ATHLETICS]


                }, {

                    type: CONSTANT_DIFFICULTY,
                    magnitude: 2

                }, {

                    type: CONSTANT_EXTERNAL_PENALTY,
                    label: "Dangerous debris",
                    magnitude: 2

                }, stuntBonus, getMobilityPenalty(currentPC), willpowerBonus);


                switch (tempThreshold) {

                    case CONSTANT_BOTCH:

                        applyDamage(currentPC, DAMAGE_TYPE_LETHAL, 1);

                        processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_22));

                        clearBonusesAndPenalties();

                        break;

                    case CONSTANT_FAILURE:

                        applyDamage(currentPC, DAMAGE_TYPE_BASHING, 1);

                        processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_23));

                        clearBonusesAndPenalties();

                        break;

                    default:

                        processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_24));

                        clearBonusesAndPenalties();

                        break;

                }


            };

            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_21_FUNCTION_1:

            return getFunctionForSakuyaShrineClimbDown(0, true);

            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_21_FUNCTION_2:

            return getFunctionForSakuyaShrineClimbDown(2, false);

            break;
            
        case FUNCTION_KEY_SAKUYA_SEGMENT_21_FUNCTION_3:

            return getFunctionForSakuyaShrineClimbDown(2, true);

            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_22_FUNCTION_0:

            return function (event) {

                $("#diceBox").hide();

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_25));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_25_FUNCTION_0:

            return function (event) {

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_26));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_26_FUNCTION_0:

            return function (event) {

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_26A));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_26A_FUNCTION_0:

            return function (event) {

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_27));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_27_FUNCTION_0:

            return function (event) {

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_28));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_28_FUNCTION_0:

            return function (event) {


                currentPC[CONSTANT_TRAIT_WEAPON] = {

                    label: "Wooden Practice Sword",
                    type: CONSTANT_WEAPON_TYPE_SWORD,
                    ability: CONSTANT_TRAIT_MELEE,
                    specialty: CONSTANT_SPECIALTY_MELEE_SWORDS,
                    attackType: CONSTANT_ATTACK_TYPE_MELEE,
                    speed: 4,
                    accuracy: 1,
                    damage: 3,
                    damageType: DAMAGE_TYPE_BASHING,
                    defence: 0,
                    rate: 3,
                    range: "-",
                    tags: "-"


                };

                fillCharacterSheetFromCharacter(currentPC);

                $("#weaponTableBody").addClass("highlight");

                $("#traitLabelWits").addClass("highlight");
                $("#traitDotsWits").addClass("highlight");
                $("#traitLabelAwareness").addClass("highlight");
                $("#traitDotsAwareness").addClass("highlight");

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_29));

            };
            break;


        case FUNCTION_KEY_SAKUYA_SEGMENT_29_FUNCTION_0:

            return getFunctionForSakuyaSifuJoinBattle();

            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_29_FUNCTION_1:

            return getFunctionForSakuyaSifuJoinBattle(2);

            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_30_FUNCTION_0:

            return function (event) {

                firstAction(currentCombat);

            };

            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_31_FUNCTION_0:

            return function (event) {

                $("#traitLabelBackground3").addClass("highlight");
                $("#traitDotsBackground3").addClass("highlight");

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_32));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_31_FUNCTION_1:

            return function (event) {

                $("#traitLabelBackground3").addClass("highlight");
                $("#traitDotsBackground3").addClass("highlight");

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_33));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_31_FUNCTION_2:

            return function (event) {

                $("#traitLabelBackground3").addClass("highlight");
                $("#traitDotsBackground3").addClass("highlight");

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_34));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_32_FUNCTION_0:

            return function (event) {

                $("#traitLabelBackground3").removeClass("highlight");
                $("#traitDotsBackground3").removeClass("highlight");

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_35));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_35_FUNCTION_0:

            return function (event) {

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_36));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_36_FUNCTION_0:

            return function (event) {

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_37));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_37_FUNCTION_0:

            return getGenericJoinBattle(COMBAT_KEY_SAKUYA_1, SEGMENT_KEY_SAKUYA_38);

            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_37_FUNCTION_1:

            return getGenericJoinBattle(2, COMBAT_KEY_SAKUYA_1, SEGMENT_KEY_SAKUYA_38);

            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_37_FUNCTION_2:

            return getGenericJoinBattle(2, COMBAT_KEY_SAKUYA_1, SEGMENT_KEY_SAKUYA_38);

            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_38_FUNCTION_0:

            return function (event) {

                firstAction(currentCombat);

            };

            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_39_FUNCTION_0:

            return function (event) {

                $("#" + CONSTANT_HTML_ID_DICE_BOX).hide();

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_40));

            };
            break;

        case FUNCTION_KEY_SAKUYA_SEGMENT_39_FUNCTION_1:

            return function (event) {

                var tempThreshold = buildPoolAndRoll({

                    type: CONSTANT_MUNDANE_BONUS,
                    label: "Compassion",
                    magnitude: currentPC[CONSTANT_TRAIT_COMPASSION]


                });

                switch (tempThreshold) {

                    case CONSTANT_BOTCH:

                        processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_41));

                        break;

                    case CONSTANT_FAILURE:

                        processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_41));

                        break;

                    default:

                        processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_42));

                        break;

                }

            };
            break;


        case FUNCTION_KEY_SAKUYA_SEGMENT_40_FUNCTION_0:

            return function (event) {

                $("#" + CONSTANT_HTML_ID_DICE_BOX).hide();

                if (hasAnyDamageOfType(currentPC, DAMAGE_TYPE_LETHAL)) {

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_43));

                } else {

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_44));

                }

            };
            break;


        case FUNCTION_KEY_SAKUYA_SEGMENT_42_FUNCTION_1:

            return function (event) {

                $("#" + CONSTANT_HTML_ID_DICE_BOX).hide();

                spendTempTrait(CONSTANT_TRAIT_WILLPOWER_CURRENT, currentPC);

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_41));

            };
            break;


        case FUNCTION_KEY_SAKUYA_SEGMENT_43_FUNCTION_0:

            return function (event) {

                if (flags[FLAG_SAKUYA_SAVED_HISAO] && flags[FLAG_SAKUYA_SAVED_KENJI]) {

                    currentPC[CONSTANT_TRAIT_BACKGROUND].push({

                        key: CONSTANT_BACKGROUND_KEY_CONTACTS,
                        rating: 1,
                        characterText: "<p>Having somewhat repaired her relationship with Frosted Lily, Sakuya has better access to information from the sex trade.</p>"

                    });

                    fillCharacterSheetFromCharacter(currentPC);

                    $("#traitLabelBackground4").addClass("highlight");
                    $("#traitDotsBackground4").addClass("highlight");

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_45));

                } else {

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_46));

                }

            };
            break;

          case FUNCTION_KEY_SAKUYA_SEGMENT_45_FUNCTION_0:

                return function (event) {


                        $("#traitLabelBackground4").removeClass("highlight");
                        $("#traitDotsBackground4").removeClass("highlight");

                        processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_47));


                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_47_FUNCTION_0:

                return function (event) {

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_48));


                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_48_FUNCTION_0:

                return function (event) {

                    $("#traitLabelLinguistics").addClass("highlight");
                    $("#traitDotsLinguistics").addClass("highlight")

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_49));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_49_FUNCTION_0:

                return function (event) {

                    $("#traitLabelLinguistics").removeClass("highlight");
                    $("#traitDotsLinguistics").removeClass("highlight")

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_50));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_50_FUNCTION_0:

                return function (event) {

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_51));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_51_FUNCTION_0:

                return function (event) {

                    var actionOptions = getSelectedActionOptions();

                    var willpowerBonus = getWPSpendAsBonus(currentPC, actionOptions.willpower);

                    currentPC.stunt(actionOptions.stuntRating);

                    var stuntBonus = currentPC.getStuntBonus();

                    rewardStunt(currentPC);

                    var tempThreshold = buildPoolAndRoll({

                        type: CONSTANT_MUNDANE_BONUS,
                        label: "Perception",
                        magnitude: currentPC[CONSTANT_TRAIT_PERCEPTION]


                    }, {

                        type: CONSTANT_MUNDANE_BONUS,
                        label: "Investigation",
                        magnitude: currentPC[CONSTANT_TRAIT_INVESTIGATION]


                    }, {

                        type: CONSTANT_DIFFICULTY,
                        magnitude: 4

                    }, stuntBonus, willpowerBonus, getWoundPenaltyAsBonus(currentPC));


                    switch (tempThreshold) {

                        case CONSTANT_BOTCH:

                            currentPC.surprised = true;

                            processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_52));

                            clearBonusesAndPenalties();

                            break;

                        case CONSTANT_FAILURE:

                            currentPC.surprised = true;

                            processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_52));

                            clearBonusesAndPenalties();

                            break;

                        default:

                            currentPC.surprised = false;

                            processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_53));

                            clearBonusesAndPenalties();

                            break;

                    }


                };

                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_51_FUNCTION_1:

                return getFunctionForSakuyaMeilingSurpriseAttack(2, false);

                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_51_FUNCTION_2:

                return getFunctionForSakuyaMeilingSurpriseAttack(2, true);

                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_52_FUNCTION_0:

                return getGenericJoinDebate(SOCIAL_COMBAT_KEY_SAKUYA_0, SEGMENT_KEY_SAKUYA_54);

                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_54_FUNCTION_0:

                return function (event) {

                    firstAction(currentSocialCombat);

                };

                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_55_FUNCTION_0:

                return function (event) {

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_55A));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_55A_FUNCTION_0:

                return function (event) {

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_56));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_56_FUNCTION_0:

                return function (event) {

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_57));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_57_FUNCTION_0:

                return function (event) {

                    if (flags[FLAG_SAKUYA_BECAME_CONCUBINE]) {

                        flags[FLAG_SAKUYA_RETURNED_JADE_CHIP] = true;

                        processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_58));

                    } else {

                        processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_59));

                    }

                };
                break;


            case FUNCTION_KEY_SAKUYA_SEGMENT_58_FUNCTION_0:

                return function (event) {

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_60));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_60_FUNCTION_0:

                return function (event) {

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_61));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_60_FUNCTION_1:

                return function (event) {

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_62));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_61_FUNCTION_0:

                return function (event) {

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_63));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_63_FUNCTION_0:

                return function (event) {

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_64));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_64_FUNCTION_0:

                return function (event) {

                    currentPC.exalt();

                    $("#exaltedAdvantagesHeader").show();
                    $("#exaltedAdvantages").show();

                    fillCharacterSheetFromCharacter(currentPC);

                    flags[FLAG_ADVANTAGES_EXALTED_VISIBLE] = true;

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_65));

                    $("#characterSheetMotivation").addClass("highlight");
                    $("#characterSheetType").addClass("highlight");
                    $("#characterSheetCaste").addClass("highlight");

                    $("#exaltedAdvantages").addClass("highlight");




                };
                break;

            
            case FUNCTION_KEY_SAKUYA_SEGMENT_65_FUNCTION_0:

                return function (event) {

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_66));

                    $("#characterSheetMotivation").removeClass("highlight");
                    $("#characterSheetType").removeClass("highlight");
                    $("#characterSheetCaste").removeClass("highlight");


                    $("#exaltedAdvantages").removeClass("highlight");


                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_66_FUNCTION_0:

                return function (event) {

                    currentPC[CONSTANT_TRAIT_BACKGROUND][0] = {

                        key: CONSTANT_BACKGROUND_KEY_ALLIES,
                        rating: 1,
                        characterText: "<p>Sakuya has won the loyalty of Cathak Meiling, a powerful Earth Aspect.</p>"

                    };
                    
                    $("#traitLabelBackground1").addClass("highlight");
                    $("#traitDotsBackground1").addClass("highlight");

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_67));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_67_FUNCTION_0:

                return function (event) {

                    currentPC[CONSTANT_TRAIT_BACKGROUND][0].characterText = "<p>Sakuya has won the loyalty of Cathak Meiling, a powerful Earth Aspect, who serves as a soldier.</p>";

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_68));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_67_FUNCTION_1:

                return function (event) {

                    currentPC[CONSTANT_TRAIT_BACKGROUND][0].characterText = "<p>Sakuya has won the loyalty of Cathak Meiling (Misha), her powerful Earth Aspected lover.</p>";

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_69));

                };
                break;


            case FUNCTION_KEY_SAKUYA_SEGMENT_68_FUNCTION_0:

                return function (event) {

                    $("#traitLabelBackground1").removeClass("highlight");
                    $("#traitDotsBackground1").removeClass("highlight");

                    $("#traitLabelPerception").addClass("highlight");
                    $("#traitDotsPerception").addClass("highlight");
                    $("#traitLabelInvestigation").addClass("highlight");
                    $("#traitDotsInvestigation").addClass("highlight");
                    $("#traitLabelSpecialty2").addClass("highlight");
                    $("#traitDotsSpecialty2").addClass("highlight");

                    $("#conviction").addClass("highlight");

                    $("#charm8").addClass("highlight");
                    $("#charm9").addClass("highlight");

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_70));

                };
                break;


            case FUNCTION_KEY_SAKUYA_SEGMENT_70_FUNCTION_0:

                //This is Sakuya solving the mosaic puzzle with the full suite of action options: wp, charms, stunts.
                //It's hard coded, not sure if we need to genericise it, but will DEFINITELY need a more generic option for combat

                return function (event) {

                    if ($("input:checkbox[name=actionCharm0]:checked").val() === "true") {  //Crafty Observation Method used

                        //spend C.O.M motes

                        currentPC.spendMotes(charmLibrary[CHARM_SOLAR_CRAFTY_OBSERVATION_METHOD].costMotes, $("input:radio[name=actionCharmPool0]:checked").val());

                        //handle 2nd Excellency

                        var charmBonus = {

                            type: "Invalid",
                            magnitude: 0,
                            label: "Charm"

                        }

                        if ($("input:checkbox[name=actionCharm1]:checked").val() === "true") {  //2nd Excellency used


                            charmBonus = activateCharmForBonus(currentPC, arguments.callee.segmentObject.actionCharms[1], $("input:radio[name=actionCharmPool1]:checked").val(), {

                                attribute: arguments.callee.segmentObject.actionAttribute,
                                ability: arguments.callee.segmentObject.actionAbility,
                                specialty: arguments.callee.segmentObject.actionSpecialty

                            }, parseInt($("#actionCharmMotes1").val()));


                        }

                        //handle willpower
                        var willpower = {

                            type: CONSTANT_WP_NONE

                        };

                        if ($("input:checkbox[name=actionSpendWillpower]:checked").val() == "true") {

                            willpower = {

                                type: $("input:radio[name=actionWPSpendRadio]:checked").val(),
                                virtue: $("#actionChanneledVirtue").val()

                            };

                        }

                        var willpowerBonus = getWPSpendAsBonus(currentPC, willpower);

                        var preferredReward = STUNT_REWARD_WILLPOWER;

                        if (currentPC[CONSTANT_TRAIT_EXALTED]) {

                            preferredReward = $("input:radio[name=actionStuntReward]:checked").val();

                        }

                        //handle Stunt

                        currentPC.stunt(parseInt($("input:radio[name=actionStuntRadio]:checked").val()));

                        //Do the roll!

                        var tempThreshold = buildPoolAndRoll({

                            type: CONSTANT_MUNDANE_BONUS,
                            label: "Perception",
                            magnitude: currentPC[CONSTANT_TRAIT_PERCEPTION]


                        }, {

                            type: CONSTANT_MUNDANE_BONUS,
                            label: "Investigation",
                            magnitude: currentPC[CONSTANT_TRAIT_INVESTIGATION]


                        }, {

                            type: CONSTANT_MUNDANE_BONUS,
                            label: CONSTANT_SPECIALTY_LABEL_INVESTIGATION_PHYSICAL_CLUES,
                            magnitude: getCharacterSpecialty(currentPC[CONSTANT_TRAIT_SPECIALTY], CONSTANT_SPECIALTY_INVESTIGATION_PHYSICAL_CLUES)

                        }, {

                            type: CONSTANT_DIFFICULTY,
                            magnitude: 10

                        }, willpowerBonus, charmBonus, currentPC.getStuntBonus());

                        rewardStunt(currentPC);


                        switch (tempThreshold) {

                            case CONSTANT_BOTCH:

                                currentPC.restoreMotes(99, PREFERRED_POOL_ANY);
                                currentPC[CONSTANT_CHARACTER_PERIPHERAL_MOTES_THIS_SCENE] = 0;
                                restoreTempTrait(CONSTANT_TRAIT_WILLPOWER_CURRENT, 1, currentPC);
                                restoreTempTrait(CONSTANT_TRAIT_CONVICTION_CURRENT, 1, currentPC);

                                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_72));

                                break;

                            case CONSTANT_FAILURE:

                                currentPC.restoreMotes(99, PREFERRED_POOL_ANY);
                                currentPC[CONSTANT_CHARACTER_PERIPHERAL_MOTES_THIS_SCENE] = 0;
                                restoreTempTrait(CONSTANT_TRAIT_WILLPOWER_CURRENT, 1, currentPC);
                                restoreTempTrait(CONSTANT_TRAIT_CONVICTION_CURRENT, 1, currentPC);

                                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_72));

                                break;

                            default:

                                if (currentPC[CONSTANT_CHARACTER_CURRENT_ANIMA] === ANIMA_LEVEL_11_15 || currentPC[CONSTANT_CHARACTER_CURRENT_ANIMA] === ANIMA_LEVEL_16) {

                                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_73));

                                } else {

                                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_74));

                                }

                                break;

                        }


                    } else {

                        //player didn't select Crafty Observation Method, action not possible

                        processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_71));

                    }

                }

                break;


            case FUNCTION_KEY_SAKUYA_SEGMENT_73_FUNCTION_0:

                return function (event) {

                    $("#" + CONSTANT_HTML_ID_DICE_BOX).hide();

                    $("#traitLabelPerception").removeClass("highlight");
                    $("#traitDotsPerception").removeClass("highlight");
                    $("#traitLabelInvestigation").removeClass("highlight");
                    $("#traitDotsInvestigation").removeClass("highlight");
                    $("#traitLabelSpecialty2").removeClass("highlight");
                    $("#traitDotsSpecialty2").removeClass("highlight");

                    $("#conviction").removeClass("highlight");

                    $("#charm8").removeClass("highlight");
                    $("#charm9").removeClass("highlight");

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_75));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_75_FUNCTION_0:

                return function (event) {

                    currentPC[CONSTANT_TRAIT_BACKGROUND][1] = {

                        key: CONSTANT_BACKGROUND_KEY_ARTIFACT,
                        rating: 3,
                        characterText: "<p>Sakuya has recovered a reaper daiklave and breastplate from the Tomb of Makai, both of orichalcum.</p>"

                    };
                    

                    currentPC[CONSTANT_TRAIT_ARMOUR] = {

                        type: CONSTANT_SOAK_TYPE_ARMOUR,
                        label: "Orichalcum Breastplate",
                        bashing: 6,
                        lethal: 8,
                        mobility: 0,
                        fatigue: 0,
                        hardness: true,
                        hardnessLethal: 3,
                        hardnessBashing: 3

                    };

                    clearBuff(currentPC, CONSTANT_BUFF_MOBILITY_PENALTY);

                    currentPC.commitMotes(2);

                    currentPC[CONSTANT_TRAIT_WEAPON] = {

                        label: "Orichalcum Reaper Daiklave",
                        type: CONSTANT_WEAPON_TYPE_SWORD,
                        ability: CONSTANT_TRAIT_MELEE,
                        specialty: CONSTANT_SPECIALTY_MELEE_SWORDS,
                        attackType: CONSTANT_ATTACK_TYPE_MELEE,
                        speed: 4,
                        accuracy: 6,
                        damage: 4,
                        damageType: DAMAGE_TYPE_LETHAL,
                        defence: 2,
                        rate: 4,
                        range: "-",
                        tags: "O(2)",
                        overwhelming: 2

                    };

                    currentPC.commitMotes(5);

                    fillCharacterSheetFromCharacter(currentPC);

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_76));

                    $("#weaponTableBody").addClass("highlight");
                    $("#soakArmour").addClass("highlight");

                    $("#traitLabelBackground2").addClass("highlight");
                    $("#traitDotsBackground2").addClass("highlight");

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_76_FUNCTION_0:

                return function (event) {

                    $("#" + CONSTANT_HTML_ID_DICE_BOX).hide();

                    $("#weaponTableBody").removeClass("highlight");
                    $("#soakArmour").removeClass("highlight");

                    $("#traitLabelBackground2").removeClass("highlight");
                    $("#traitDotsBackground2").removeClass("highlight");

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_77));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_77_FUNCTION_0:

                return function (event) {

                    currentPC[CONSTANT_TRAIT_BACKGROUND][2] = {

                        key: CONSTANT_BACKGROUND_KEY_CULT,
                        rating: 3,
                        characterText: "<p>Sakuya is recognised as Makai reborn, and receives the worship of her deeply pious countrymen.</p>"

                    };

                    $("#traitLabelBackground3").addClass("highlight");
                    $("#traitDotsBackground3").addClass("highlight");

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_78));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_78_FUNCTION_0:

                return function (event) {

                    $("#traitLabelBackground3").removeClass("highlight");
                    $("#traitDotsBackground3").removeClass("highlight");

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_79));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_79_FUNCTION_0:

                return function (event) {

                    $("#charm5").addClass("highlight");
                    $("#charm11").addClass("highlight");
                    $("#charm12").addClass("highlight");

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_80));

                };
                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_80_FUNCTION_0:

                return function (event) {

                    $("#charm5").removeClass("highlight");
                    $("#charm11").removeClass("highlight");
                    $("#charm12").removeClass("highlight");

                    currentPC.commitMotes(9);

                    fillCharacterSheetFromCharacter(currentPC);

                    addCharmBuffsToCharacter(currentPC, CHARM_SOLAR_PROTECTION_OF_CELESTIAL_BLISS, 3, PREFERRED_POOL_PERIPHERAL_FIRST);
                    addCharmBuffsToCharacter(currentPC, CHARM_SOLAR_GRACEFUL_CRANE_STANCE, 3, PREFERRED_POOL_PERIPHERAL_FIRST);
                    addCharmBuffsToCharacter(currentPC, CHARM_SOLAR_MONKEY_LEAP_TECHNIQUE, 3, PREFERRED_POOL_PERIPHERAL_FIRST);

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_81));

                };
                break;


            case FUNCTION_KEY_SAKUYA_SEGMENT_81_FUNCTION_0:

                return getGenericJoinBattle(COMBAT_KEY_SAKUYA_2, SEGMENT_KEY_SAKUYA_82);

                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_82_FUNCTION_0:

                return function (event) {

                    firstAction(currentCombat);

                };

                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_83_FUNCTION_0:

                return function (event) {

                    if (hasAnyDamageOfType(currentPC, DAMAGE_TYPE_LETHAL)) {

                        processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_84));

                    } else {

                        processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_85));

                    }

                };

                break;

            case FUNCTION_KEY_SAKUYA_SEGMENT_84_FUNCTION_0:

                return function (event) {

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_86));

                };
                break;

            case FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_0_FUNCTION_0:

                return function (event) {

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_INTRO_1));

                };
                break;

            case FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_1_FUNCTION_0:

                return function (event) {

                    $("#attributesHeader").show();
                    $("#attributes").show();

                    flags[FLAG_ATTRIBUTES_VISIBLE] = true;

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_INTRO_2));

                };
                break;

            case FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_2_FUNCTION_0:

                return function (event) {

                    $("#abilitiesHeader").show();
                    $("#abilities").show();

                    flags[FLAG_ABILITIES_VISIBLE] = true;

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_INTRO_3));

                };
                break;


            case FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_3_FUNCTION_0:

                return function (event) {

                    $("#advantagesHeader").show();
                    $("#advantages").show();

                    flags[FLAG_ADVANTAGES_1_VISIBLE] = true;

                    $("#advantagesTier2").hide();
                    $("#willpower").hide();
                    $("#virtues").hide();


                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_INTRO_4));

                };
                break;

            case FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_4_FUNCTION_0:

                return function (event) {

                    $("#willpower").show();

                    $("#defenceValuesLabel").hide();
                    $("#dodgeDV").hide();
                    $("#dodgeMDV").hide();
                    $("#parryMDV").hide();

                    $("#virtues").show();


                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_INTRO_5));

                };
                break;

            case FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_5_FUNCTION_0:

                return function (event) {

                    $("#defenceValuesLabel").show();
                    $("#dodgeDV").show();
                    $("#dodgeMDV").show();
                    $("#parryMDV").show();

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_INTRO_6));

                };
                break;


            case FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_6_FUNCTION_0:

                return function (event) {

                    $("#advantagesTier2").show();

                    flags[FLAG_ADVANTAGES_2_VISIBLE] = true;

                    $("#intimacies").hide();
                    $("#soak").hide();
                    $("#weapons").hide();

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_INTRO_7));

                };
                break;

            case FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_7_FUNCTION_0:

                return function (event) {

                    $("#intimacies").show();
                    
                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_INTRO_8));

                };
                break;

            case FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_8_FUNCTION_0:

                return function (event) {

                    $("#soak").show();
                    $("#weapons").show();

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_INTRO_9));

                };
                break;

            case FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_9_FUNCTION_0:

                return function (event) {

                    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_0));

                };
                break;

    }

    return function () { };

}









//################################ FUNCTION BUILDERS ##################################

//These are used when there are only minor variations in functions that can be paramaterised - such as building the same dice pool but with differing stunt bonuses


function getFunctionForSakuyaShrineInvestigation(stunt) {

    var tempFunction = function (event) {

        $("#traitLabelPerception").removeClass("highlight");
        $("#traitDotsPerception").removeClass("highlight");
        $("#traitLabelInvestigation").removeClass("highlight");
        $("#traitDotsInvestigation").removeClass("highlight");
        $("#traitLabelSpecialty2").removeClass("highlight");
        $("#traitDotsSpecialty2").removeClass("highlight");

        var thresholdUlText = "";

        currentPC.stunt(arguments.callee.stunt);

        var stuntBonus = currentPC.getStuntBonus();

        rewardStunt(currentPC);

        var tempThreshold = buildPoolAndRoll({

            type: CONSTANT_MUNDANE_BONUS,
            label: "Perception",
            magnitude: currentPC[CONSTANT_TRAIT_PERCEPTION]


        }, {

            type: CONSTANT_MUNDANE_BONUS,
            label: "Investigation",
            magnitude: currentPC[CONSTANT_TRAIT_INVESTIGATION]


        }, {

            type: CONSTANT_MUNDANE_BONUS,
            label: CONSTANT_SPECIALTY_LABEL_INVESTIGATION_PHYSICAL_CLUES,
            magnitude: getCharacterSpecialty(currentPC[CONSTANT_TRAIT_SPECIALTY], CONSTANT_SPECIALTY_INVESTIGATION_PHYSICAL_CLUES)


        }, stuntBonus, arguments.callee.retryPenalty);  //arguments.callee == this function.  A little roundabout, but "this" means the calling object, not the function itself.

        switch (tempThreshold) {

            case CONSTANT_BOTCH:

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_15));

                break;

            case CONSTANT_FAILURE:

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_16));

                break;

            default:

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_17));

                $("#thresholdTextTarget").html("Your threshold - the number of success by which you exceeded the difficulty - is <strong>" + tempThreshold + "</strong>.  For most rolls, the threshold will give you some sort of bonus, sometimes defined by the rules (like extra damage in combat), or supplied by the ST based on the situation.  A threshold of greater than zero is never required to achieve the main thrust of the roll - that sort of thing is handled by a higher difficulty rating.  Threshold always represents a value-add to your roll.<br/><br/>");

                if (tempThreshold == 0) {

                    $("#thresholdTextTarget").append("With a threshold of 0, you get no bonus clues.  However, since meeting the difficulty of the roll means you succeeded, you still have the most important information and can freely continue.");

                } else {

                    $("#thresholdTextTarget").append("With a threshold of " + tempThreshold + ", you get bonus clues to fill out your reconstruction of events at the shrine:");

                    thresholdUlText = "<ul>"

                    for (k = 0; k < tempThreshold; k++) {

                        switch (k) {

                            case 0:
                                thresholdUlText += "<li>Much of the damage was done with a weapon, possibly a large sword or axe.  Not many weapons can cleave stone and wood in single cuts.</li>";
                                break;

                            case 1:
                                thresholdUlText += "<li>The charred pieces of the shrine are distributed randomly, and appear to have occured in short flashes of flame rather than a sustained blaze.</li>";
                                break;

                            case 2:
                                thresholdUlText += "<li>Some of the debris seems to have collapsed onto a (now absent) large humanoid figure - either a statue or a very heavily armoured person.  There's no blood or evidence of damaged armour in those locations, but there's no evidence of a large statue being removed either.</li>";
                                break;

                            case 3:
                                thresholdUlText += "<li>Indeed, it seems like some of the debris was moved post-collapse.  Even though a hero like yourself might be able to do so with supreme application of effort, you get the impression this was done easily.  The culprit must have immense strength.</li>";
                                break;

                            case 4:
                                thresholdUlText += "<li>Finally, where you believe debris collapsed onto a humanoid figure, there is a corresponding patch of singed stone floor.  It appears that the culprit was on fire at the time!</li>";
                                break;



                        }
                    }

                    thresholdUlText += "</ul>";

                    $("#thresholdTextTarget").append(thresholdUlText);

                }


                flags[FLAG_SAKUYA_SHRINE_INVESTIGATION_THRESHOLD] = tempThreshold;

                clearBonusesAndPenalties();

                break;

        }


    };


    tempFunction.stunt = stunt;
    tempFunction.retryPenalty = getRetryPenalty();

    return tempFunction;



}


function getFunctionForSakuyaShrineClimbDown(stunt, willpowerSpent) {

    var tempFunction = function (event) {

        $("#traitLabelDexterity").removeClass("highlight");
        $("#traitDotsDexterity").removeClass("highlight");
        $("#traitLabelAthletics").removeClass("highlight");
        $("#traitDotsAthletics").removeClass("highlight");
        $("#soakMobilityArmour").removeClass("highlight");


        if (arguments.callee.willpowerSpent) {

            arguments.callee.willpowerBonus = spendWPForBonusSuccess(currentPC);

        } else {

            arguments.callee.willpowerBonus = {

                type: "Invalid",
                label: "Willpower",
                magnitude: 0
            };

        }

        currentPC.stunt(arguments.callee.stunt);

        var stuntBonus = currentPC.getStuntBonus();

        rewardStunt(currentPC);

        var tempThreshold = buildPoolAndRoll({

            type: CONSTANT_MUNDANE_BONUS,
            label: "Dexterity",
            magnitude: currentPC[CONSTANT_TRAIT_DEXTERITY]


        }, {

            type: CONSTANT_MUNDANE_BONUS,
            label: "Athletics",
            magnitude: currentPC[CONSTANT_TRAIT_ATHLETICS]


        }, {

            type: CONSTANT_DIFFICULTY,
            magnitude: 2

        }, {

            type: CONSTANT_EXTERNAL_PENALTY,
            label: "Dangerous debris",
            magnitude: 2

        }, stuntBonus, getMobilityPenalty(currentPC), arguments.callee.willpowerBonus);  //arguments.callee == this function.  A little roundabout, but "this" means the calling object, not the function itself.


        switch (tempThreshold) {

            case CONSTANT_BOTCH:

                applyDamage(currentPC, DAMAGE_TYPE_LETHAL, 1);

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_22));

                clearBonusesAndPenalties();

                break;

            case CONSTANT_FAILURE:

                applyDamage(currentPC, DAMAGE_TYPE_BASHING, 1);

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_23));

                clearBonusesAndPenalties();

                break;

            default:

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_24));

                clearBonusesAndPenalties();

                break;

        }


    };


   tempFunction.stunt = stunt;

   tempFunction.willpowerSpent = willpowerSpent;
   
   return tempFunction;




}



function getFunctionForSakuyaMeilingSurpriseAttack(stunt, willpowerSpent) {

    var tempFunction = function (event) {

        if (arguments.callee.willpowerSpent) {

            arguments.callee.willpowerBonus = spendWPForBonusSuccess(currentPC);

        } else {

            arguments.callee.willpowerBonus = {

                type: "Invalid",
                label: "Willpower",
                magnitude: 0
            };

        }

        currentPC.stunt(arguments.callee.stunt);

        var stuntBonus = currentPC.getStuntBonus();

        rewardStunt(currentPC);

        var tempThreshold = buildPoolAndRoll({

            type: CONSTANT_MUNDANE_BONUS,
            label: "Perception",
            magnitude: currentPC[CONSTANT_TRAIT_PERCEPTION]


        }, {

            type: CONSTANT_MUNDANE_BONUS,
            label: "Investigation",
            magnitude: currentPC[CONSTANT_TRAIT_INVESTIGATION]


        }, {

            type: CONSTANT_DIFFICULTY,
            magnitude: 4

        }, stuntBonus, arguments.callee.willpowerBonus, getWoundPenaltyAsBonus(currentPC));  //arguments.callee == this function.  A little roundabout, but "this" means the calling object, not the function itself.


        switch (tempThreshold) {

            case CONSTANT_BOTCH:

                currentPC.surprised = true;

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_52));

                clearBonusesAndPenalties();

                break;

            case CONSTANT_FAILURE:

                currentPC.surprised = true;

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_52));

                clearBonusesAndPenalties();

                break;

            default:

                currentPC.surprised = false;

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_53));

                clearBonusesAndPenalties();

                break;

        }


    };


    tempFunction.stunt = stunt;

    tempFunction.willpowerSpent = willpowerSpent;

    return tempFunction;

}




function getFunctionForSakuyaSifuJoinBattle(stunt) {

    var tempFunction = function (event) {

        $("#weaponTableBody").removeClass("highlight");

        $("#traitLabelWits").removeClass("highlight");
        $("#traitDotsWits").removeClass("highlight");
        $("#traitLabelAwareness").removeClass("highlight");
        $("#traitDotsAwareness").removeClass("highlight");

        var actionOptions = getSelectedActionOptions();

        var willpowerBonus = getWPSpendAsBonus(currentPC, actionOptions.willpower);

        currentPC.stunt(actionOptions.stuntRating);

        currentCombat = getCombatByKey(COMBAT_KEY_SAKUYA_0);

        joinBattle(currentCombat, willpowerBonus);

        processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_30));

    }

    tempFunction.stunt = stunt;

    return tempFunction;


}


function getGenericJoinBattle(combatKey, segmentKey) {

    var tempFunction = function (event) {

        var actionOptions = getSelectedActionOptions();

        var willpowerBonus = getWPSpendAsBonus(currentPC, actionOptions.willpower);

        currentPC.stunt(actionOptions.stuntRating);

        currentCombat = getCombatByKey(combatKey);

        joinBattle(currentCombat, willpowerBonus);

        processSegmentObject(getSegmentObjectByKey(segmentKey));

    }

    return tempFunction;


}


function getGenericJoinDebate(combatKey, segmentKey) {

    var tempFunction = function (event) {

        var actionOptions = getSelectedActionOptions();

        var willpowerBonus = getWPSpendAsBonus(currentPC, actionOptions.willpower);

        currentPC.stunt(actionOptions.stuntRating);

        currentSocialCombat = getSocialCombatByKey(combatKey);

        joinDebate(currentSocialCombat, willpowerBonus);

        processSegmentObject(getSegmentObjectByKey(segmentKey));

    }

    return tempFunction;


}


