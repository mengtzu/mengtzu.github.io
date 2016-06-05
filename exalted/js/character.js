var currentPC = {};  //Yeah yeah, global rather than messaging.  I'm a bad person.

function addCharacterFunctions(character) {

    //Called by initialise character and also load game.  This is seperate from initialising, since stringifying an object and then parsing it back seems to kill the functions.  Therefore we need to add them again on loading a game.

    character.getPersonalMax = function () {

        //There are functions for Exalt types to be copied over this one

        return 0;

    }

    character.getPersonalCap = function () {

        return this.getPersonalMax() - this[CONSTANT_TRAIT_COMMITTED_PERSONAL];

    }

    character.getPeripheralMax = function () {

        //There are functions for Exalt types to be copied over this one

        return 0;

    }

    character.getPeripheralCap = function () {

        return this.getPeripheralMax() - this[CONSTANT_TRAIT_COMMITTED_PERIPHERAL];

    }


    character.hasMotes = function (motes) {

        if (this[CONSTANT_TRAIT_PERSONAL_CURRENT] + this[CONSTANT_TRAIT_PERIPHERAL_CURRENT] >= motes) {

            return true;

        }

        return false;

    }

    character.hasMotesCommitted = function (motes) {

        if (this[CONSTANT_TRAIT_COMMITTED_PERSONAL] + this[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] >= motes) {

            return true;

        }

        return false;

    }

    character.getMoteHeadroom = function () {

        //By "headroom" we mean "how many motes can we regain before we're full?"

        var freeMotes = 0;

        freeMotes += (this.getPersonalCap() - this[CONSTANT_TRAIT_PERSONAL_CURRENT]);

        freeMotes += (this.getPeripheralCap() - this[CONSTANT_TRAIT_PERIPHERAL_CURRENT]);

        return freeMotes;

    }

    character.getPersonalHeadroom = function () {

        var freeMotes = 0;

        freeMotes += (this.getPersonalCap() - this[CONSTANT_TRAIT_PERSONAL_CURRENT]);

        return freeMotes;

    }

    character.getPeripheralHeadroom = function () {

        var freeMotes = 0;

        freeMotes += (this.getPeripheralCap() - this[CONSTANT_TRAIT_PERIPHERAL_CURRENT]);

        return freeMotes;

    }

    character.spendMotes = function (motes, preferredPool) {

        var motesToSpend = motes;
        
        var peripheralMotes = 0;

        if (preferredPool == PREFERRED_POOL_PERSONAL_ONLY) {

            if (this[CONSTANT_TRAIT_PERSONAL_CURRENT] >= motes) {

                this[CONSTANT_TRAIT_PERSONAL_CURRENT] -= motes;

                return true;

            }

            return false;

        }

        if (preferredPool == PREFERRED_POOL_PERIPHERAL_ONLY) {

            if (this[CONSTANT_TRAIT_PERIPHERAL_CURRENT] >= motes) {

                peripheralMotes = motes;

                this[CONSTANT_TRAIT_PERIPHERAL_CURRENT] -= motes;

                addMotesToAnima(peripheralMotes, this); 

                return true;

            }

            return false;

        }

        if (preferredPool == PREFERRED_POOL_PERSONAL_FIRST) {

            if (this.hasMotes(motes)) {

                if (this[CONSTANT_TRAIT_PERSONAL_CURRENT] >= motes) {

                    this[CONSTANT_TRAIT_PERSONAL_CURRENT] -= motes;

                    return true;


                } else {

                    motesToSpend -= this[CONSTANT_TRAIT_PERSONAL_CURRENT];

                    this[CONSTANT_TRAIT_PERSONAL_CURRENT] = 0;

                    peripheralMotes = motesToSpend;

                    this[CONSTANT_TRAIT_PERIPHERAL_CURRENT] -= motesToSpend;

                    addMotesToAnima(peripheralMotes, this); 

                    return true;

                }

            }

            return false;

        }

        if (this.hasMotes(motes)) {  //Default, intended behaviour of PERIPHERAL_FIRST, ANY

            if (this[CONSTANT_TRAIT_PERIPHERAL_CURRENT] >= motes) {

                peripheralMotes = motes;

                this[CONSTANT_TRAIT_PERIPHERAL_CURRENT] -= motes;

                addMotesToAnima(peripheralMotes, this); 

                return true;

            } else {

                peripheralMotes = this[CONSTANT_TRAIT_PERIPHERAL_CURRENT];

                motesToSpend -= peripheralMotes;

                this[CONSTANT_TRAIT_PERIPHERAL_CURRENT] = 0;

                this[CONSTANT_TRAIT_PERSONAL_CURRENT] -= motesToSpend;

                addMotesToAnima(peripheralMotes, this);

                return true;

            }

        }

        return false;

    }


    character.commitMotes = function (motes, preferredPool) {

        //This is very similar to spendMotes and there iss probably some DRY alternative to this c/p hack-job

        var motesToSpend = motes;

        var peripheralMotes = 0;

        var personalMotes = 0;

        if (preferredPool === PREFERRED_POOL_PERSONAL_ONLY) {

            if (this[CONSTANT_TRAIT_PERSONAL_CURRENT] >= motes) {

                this[CONSTANT_TRAIT_PERSONAL_CURRENT] -= motes;

                personalMotes = motes;

                this[CONSTANT_TRAIT_COMMITTED_PERSONAL] += personalMotes;

                return true;

            }

            return false;

        }

        if (preferredPool === PREFERRED_POOL_PERIPHERAL_ONLY) {

            if (this[CONSTANT_TRAIT_PERIPHERAL_CURRENT] >= motes) {

                peripheralMotes = motes;

                this[CONSTANT_TRAIT_PERIPHERAL_CURRENT] -= motes;

                addMotesToAnima(peripheralMotes, this);

                this[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] += peripheralMotes;

                return true;

            }

            return false;

        }

        if (preferredPool === PREFERRED_POOL_PERSONAL_FIRST) {

            if (this.hasMotes(motes)) {

                if (this[CONSTANT_TRAIT_PERSONAL_CURRENT] >= motes) {

                    this[CONSTANT_TRAIT_PERSONAL_CURRENT] -= motes;

                    personalMotes = motes;

                    this[CONSTANT_TRAIT_COMMITTED_PERSONAL] += personalMotes;

                    return true;


                } else {

                    personalMotes = this[CONSTANT_TRAIT_PERSONAL_CURRENT];

                    motesToSpend -= personalMotes;

                    this[CONSTANT_TRAIT_PERSONAL_CURRENT] = 0;

                    this[CONSTANT_TRAIT_COMMITTED_PERSONAL] += personalMotes;

                    peripheralMotes = motesToSpend;

                    this[CONSTANT_TRAIT_PERIPHERAL_CURRENT] -= motesToSpend;

                    addMotesToAnima(peripheralMotes, this);

                    this[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] += peripheralMotes;

                    return true;

                }

            }

            return false;

        }

        if (this.hasMotes(motes)) {  //Default, intended behaviour of PERIPHERAL_FIRST, ANY

            if (this[CONSTANT_TRAIT_PERIPHERAL_CURRENT] >= motes) {

                peripheralMotes = motes;

                this[CONSTANT_TRAIT_PERIPHERAL_CURRENT] -= motes;

                addMotesToAnima(peripheralMotes, this);

                this[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] += peripheralMotes;

                return true;

            } else {

                peripheralMotes = this[CONSTANT_TRAIT_PERIPHERAL_CURRENT];

                motesToSpend -= peripheralMotes;

                this[CONSTANT_TRAIT_PERIPHERAL_CURRENT] = 0;

                this[CONSTANT_TRAIT_PERSONAL_CURRENT] -= motesToSpend;

                this[CONSTANT_TRAIT_COMMITTED_PERSONAL] += motesToSpend;
                
                addMotesToAnima(peripheralMotes, this);

                this[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] += peripheralMotes;

                return true;

            }

        }

        return false;

    }

    character.releaseMotes = function (motes, preferredPool) {

        var motesToRelease = motes;

        if (preferredPool == PREFERRED_POOL_PERSONAL_ONLY) {

            if (this[CONSTANT_TRAIT_COMMITTED_PERSONAL] >= motes) {

                this[CONSTANT_TRAIT_COMMITTED_PERSONAL] -= motes;

                return true;

            }

            return false;

        }

        if (preferredPool == PREFERRED_POOL_PERIPHERAL_ONLY) {

            if (this[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] >= motes) {

                this[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] -= motes;

                return true;

            }

            return false;

        }

        if (preferredPool == PREFERRED_POOL_PERSONAL_FIRST) {

            if (this.hasMotesCommitted(motes)) {

                if (this[CONSTANT_TRAIT_COMMITTED_PERSONAL] >= motes) {

                    this[CONSTANT_TRAIT_COMMITTED_PERSONAL] -= motes;

                    return true;


                } else {

                    motesToRelease -= this[CONSTANT_TRAIT_COMMITTED_PERSONAL];

                    this[CONSTANT_TRAIT_COMMITTED_PERSONAL] = 0;

                    this[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] -= motesToRelease;

                    return true;

                }

            }

            return false;

        }

        if (this.hasMotesCommitted(motes)) {  //Default, intended behaviour of PERIPHERAL_FIRST, ANY

            if (this[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] >= motes) {

                this[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] -= motes;

                return true;

            } else {

                motesToSpend -= this[CONSTANT_TRAIT_COMMITTED_PERIPHERAL];

                this[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] = 0;

                this[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] -= motesToRelease;

                return true;

            }

        }

        return false;

    }

    character.restoreMotes = function (motes, preferredPool) {

        var motesToSpend = motes;

        if (preferredPool == PREFERRED_POOL_PERSONAL_FIRST) {

            if (this.getPersonalHeadroom() >= motes) {

                this[CONSTANT_TRAIT_PERSONAL_CURRENT] += motes;

                return true;


            } else {

                motesToSpend -= this.getPersonalHeadroom();

                this[CONSTANT_TRAIT_PERSONAL_CURRENT] = this.getPersonalCap();

                if (this.getPeripheralHeadroom() >= motesToSpend) {

                    this[CONSTANT_TRAIT_PERIPHERAL_CURRENT] += motesToSpend;

                } else {

                    this[CONSTANT_TRAIT_PERIPHERAL_CURRENT] = this.getPeripheralCap();

                }

                return true;

            }

        }

        //Default, intended behaviour of PERIPHERAL_FIRST, ANY

        if (this.getPeripheralHeadroom() >= motes) {

            this[CONSTANT_TRAIT_PERIPHERAL_CURRENT] += motes;

            return true;

        } else {

            motesToSpend -= this.getPeripheralHeadroom();

            this[CONSTANT_TRAIT_PERIPHERAL_CURRENT] = this.getPeripheralCap();

            if (this.getPersonalHeadroom() >= motesToSpend) {

                this[CONSTANT_TRAIT_PERSONAL_CURRENT] += motesToSpend;

            } else {

                this[CONSTANT_TRAIT_PERSONAL_CURRENT] = this.getPersonalCap();

            }

            return true;

        }



        return false;  //Should never reach here

    }



    character.hasCharm = function (charmKey) {

        var i;

        for (i = 0; i < this[CONSTANT_TRAIT_CHARMS].length; i++) {

            if (this[CONSTANT_TRAIT_CHARMS][i] == charmKey) {

                return true;

            }

        }

        return false;

    }



    character.getDVInResponseToAttack = function (attackType, chosenDV, diceBonus, successBonus) {

        //override with more sophisticated for Exalts et al
        //Or not, since this probably doesn't need to be very smart anymore.  Can create a seperate function that knows enough about the attack to invoke charms, and feed result in here.

        var penaltiesApply = true;

        if (hasBuff(this, CONSTANT_BUFF_DV_PENALTY_REDUCTION_DEFENCE)) {

            penaltiesApply = false;

        }

        if (!diceBonus) {

            diceBonus = 0;

        }

        if (!successBonus) {

            successBonus = 0;

        }

        var tempDV = {

            dv: 0,
            label: ""

        };

        if (chosenDV == DV_BEST) {

            tempDV = getBestDV(this);

        }

        if (chosenDV == DV_PARRY) {

            tempDV.dv = getTotalParryDV(this, diceBonus);

            tempDV.type = DV_PARRY;
            tempDV.label = "Parry";

        }

        if (chosenDV == DV_DODGE) {

            tempDV.dv = getTotalDodgeDV(this, diceBonus);

            tempDV.type = DV_DODGE;
            tempDV.label = "Dodge";

        }

        if (penaltiesApply) {

            tempDV.dv -= getBuffTotal(this, CONSTANT_BUFF_ONSLAUGHT_PENALTY);

        }

        if (successBonus > 0) {

            tempDV.dv += successBonus;

        }

        if (tempDV.dv < 0) {

            //we check for this elsewhere, but it'd be just as silly to copy the Onslaught check into both parry and dodge

            tempDV.dv = 0;

        }

        //Shield bonuses died in 2.5, and elevation is handled seperately.  Refactor for cover goes here.
        /*
        if (attackType == CONSTANT_ATTACK_TYPE_MELEE) {

            tempDV.dv += getBuffTotal(this[CONSTANT_TRAIT_BUFFS], CONSTANT_BUFF_SHIELD_BONUS_MELEE);

        }

        if (attackType == CONSTANT_ATTACK_TYPE_RANGED) {

            tempDV.dv += getBuffTotal(this[CONSTANT_TRAIT_BUFFS], CONSTANT_BUFF_SHIELD_BONUS_RANGED);

        }*/

        if (isInactive(this) || this.surprised) {

            tempDV.dv = 0;

        }

        return tempDV;


    };


    character.getMDVInResponseToAttack = function (chosenDV, diceBonus) {

        //override with more sophisticated for Exalts et al

        var tempDV = {

            dv: 0,
            label: ""

        };

        if (chosenDV == DV_BEST) {

            tempDV = getBestMDV(this);

        }

        if (chosenDV == DV_PARRY) {

            if (diceBonus > 0) {

                tempDV.dv = getTotalParryMDVWithDiceBonus(this, diceBonus);

            } else {

                tempDV.dv = getTotalParryMDV(this);

            }

            tempDV.type = DV_PARRY;
            tempDV.label = "Parry";

        }

        if (chosenDV == DV_DODGE) {

            if (diceBonus > 0) {

                tempDV.dv = getTotalDodgeMDVWithDiceBonus(this, diceBonus);

            } else {

                tempDV.dv = getTotalDodgeMDV(this);

            }

            tempDV.type = DV_DODGE;
            tempDV.label = "Dodge";

        }

        tempDV.dv -= getBuffTotal(this, CONSTANT_BUFF_ONSLAUGHT_PENALTY);

        if (isInactive(this)) {

            tempDV.dv = 0;

        }

        if (tempDV.dv < 0) {

            //we check for this elsewhere, but it'd be just as silly to copy the Onslaught check into both parry and dodge

            tempDV.dv = 0;

        }

        return tempDV;


    };


    character.exalt = function () { };

    character.stunt = function (stunt) {

        this[CONSTANT_CHARACTER_CURRENT_STUNT] = stunt;

        if (stunt > this[CONSTANT_CHARACTER_BEST_STUNT]) {

            this[CONSTANT_CHARACTER_BEST_STUNT] = stunt;

        }


    };

    character.getStuntBonus = function () {

        //Returns an object that can be passed as an argument to the dice roller

        if (this[CONSTANT_CHARACTER_CURRENT_STUNT] > 0) {

            return {

                type: CONSTANT_MUNDANE_BONUS,
                label: "Stunt",
                magnitude: this[CONSTANT_CHARACTER_CURRENT_STUNT]

            };


        }


        return {

            type: "Invalid",
            label: "Stunt",
            magnitude: 0

        };



    };

    character.closeDVDeltaWithCharms = function (dvDelta) {

        return {

            dv: 0,
            label: ""

        };

    }

    if (character[CONSTANT_TRAIT_CHARACTER_TYPE] == TRAIT_VALUE_TYPE_SOLAR_EXALTED) {

        character.getPersonalMax = solarPersonalMax;
        character.getPeripheralMax = solarPeripheralMax;

    }

}

function initialiseCharacter(character) {

    
    character[CONSTANT_TRAIT_CHARACTER_NAME] = "&nbsp;";
    character[CONSTANT_TRAIT_MOTIVATION] = "&nbsp";
    character[CONSTANT_TRAIT_CHARACTER_TYPE] = TRAIT_VALUE_TYPE_HEROIC_MORTAL,
    character[CONSTANT_TRAIT_CASTE] = TRAIT_VALUE_CASTE_NA,

    character[CONSTANT_TRAIT_STRENGTH] = 1;
    character[CONSTANT_TRAIT_DEXTERITY] = 1;
    character[CONSTANT_TRAIT_STAMINA] = 1;

    character[CONSTANT_TRAIT_CHARISMA] = 1;
    character[CONSTANT_TRAIT_MANIPULATION] = 1;
    character[CONSTANT_TRAIT_APPEARANCE] = 1;

    character[CONSTANT_TRAIT_PERCEPTION] = 1;
    character[CONSTANT_TRAIT_INTELLIGENCE] = 1;
    character[CONSTANT_TRAIT_WITS] = 1;

    character[CONSTANT_TRAIT_ARCHERY] = 0;
    character[CONSTANT_TRAIT_ARCHERY_FAVOURED] = false;
    character[CONSTANT_TRAIT_MARTIAL_ARTS] = 0;
    character[CONSTANT_TRAIT_MARTIAL_ARTS_FAVOURED] = false;
    character[CONSTANT_TRAIT_MELEE] = 0;
    character[CONSTANT_TRAIT_MELEE_FAVOURED] = false;
    character[CONSTANT_TRAIT_THROWN] = 0;
    character[CONSTANT_TRAIT_THROWN_FAVOURED] = false;
    character[CONSTANT_TRAIT_WAR] = 0;
    character[CONSTANT_TRAIT_WAR_FAVOURED] = false;

    character[CONSTANT_TRAIT_INTEGRITY] = 0;
    character[CONSTANT_TRAIT_INTEGRITY_FAVOURED] = false;
    character[CONSTANT_TRAIT_PERFORMANCE] = 0;
    character[CONSTANT_TRAIT_PERFORMANCE_FAVOURED] = false;
    character[CONSTANT_TRAIT_PRESENCE] = 0;
    character[CONSTANT_TRAIT_PRESENCE_FAVOURED] = false;
    character[CONSTANT_TRAIT_RESISTANCE] = 0;
    character[CONSTANT_TRAIT_RESISTANCE_FAVOURED] = false;
    character[CONSTANT_TRAIT_SURVIVAL] = 0;
    character[CONSTANT_TRAIT_SURVIVAL_FAVOURED] = false;

    character[CONSTANT_TRAIT_CRAFT] = 0;
    character[CONSTANT_TRAIT_CRAFT_FAVOURED] = false;
    character[CONSTANT_TRAIT_INVESTIGATION] = 0;
    character[CONSTANT_TRAIT_INVESTIGATION_FAVOURED] = false;
    character[CONSTANT_TRAIT_LORE] = 0;
    character[CONSTANT_TRAIT_LORE_FAVOURED] = false;
    character[CONSTANT_TRAIT_MEDICINE] = 0;
    character[CONSTANT_TRAIT_MEDICINE_FAVOURED] = false;
    character[CONSTANT_TRAIT_OCCULT] = 0;
    character[CONSTANT_TRAIT_OCCULT_FAVOURED] = false;

    character[CONSTANT_TRAIT_ATHLETICS] = 0;
    character[CONSTANT_TRAIT_ATHLETICS_FAVOURED] = false;
    character[CONSTANT_TRAIT_AWARENESS] = 0;
    character[CONSTANT_TRAIT_AWARENESS_FAVOURED] = false;
    character[CONSTANT_TRAIT_DODGE] = 0;
    character[CONSTANT_TRAIT_DODGE_FAVOURED] = false;
    character[CONSTANT_TRAIT_LARCENY] = 0;
    character[CONSTANT_TRAIT_LARCENY_FAVOURED] = false;
    character[CONSTANT_TRAIT_STEALTH] = 0;
    character[CONSTANT_TRAIT_STEALTH_FAVOURED] = false;

    character[CONSTANT_TRAIT_BUREAUCRACY] = 0;
    character[CONSTANT_TRAIT_BUREAUCRACY_FAVOURED] = false;
    character[CONSTANT_TRAIT_LINGUISTICS] = 0;
    character[CONSTANT_TRAIT_LINGUISTICS_FAVOURED] = false;
    character[CONSTANT_TRAIT_RIDE] = 0;
    character[CONSTANT_TRAIT_RIDE_FAVOURED] = false;
    character[CONSTANT_TRAIT_SAIL] = 0;
    character[CONSTANT_TRAIT_SAIL_FAVOURED] = false;
    character[CONSTANT_TRAIT_SOCIALISE] = 0;
    character[CONSTANT_TRAIT_SOCIALISE_FAVOURED] = false;

    character[CONSTANT_TRAIT_SPECIALTY] = new Array();

    character[CONSTANT_TRAIT_BACKGROUND] = new Array();

    character[CONSTANT_TRAIT_WILLPOWER] = 5;
    character[CONSTANT_TRAIT_WILLPOWER_CURRENT] = 5;

    character[CONSTANT_TRAIT_COMPASSION] = 1;
    character[CONSTANT_TRAIT_COMPASSION_CURRENT] = 1;
    character[CONSTANT_TRAIT_TEMPERANCE] = 1;
    character[CONSTANT_TRAIT_TEMPERANCE_CURRENT] = 1;
    character[CONSTANT_TRAIT_CONVICTION] = 1;
    character[CONSTANT_TRAIT_CONVICTION_CURRENT] = 1;
    character[CONSTANT_TRAIT_VALOUR] = 1;
    character[CONSTANT_TRAIT_VALOUR_CURRENT] = 1;

    character[CONSTANT_TRAIT_ARMOUR] = {

        type: "None",
        label: "None",
        bashing: 0,
        lethal: 0,
        mobility: 0,
        fatigue: 0
                
    };

    character[CONSTANT_TRAIT_WEAPON] = {

        label: "Punch",
        type: CONSTANT_WEAPON_TYPE_UNARMED,
        ability: CONSTANT_TRAIT_MARTIAL_ARTS,
        specialty: CONSTANT_SPECIALTY_MARTIAL_ARTS_FISTS,
        speed: 5,
        accuracy: 1,
        damage: 0,
        damageType: DAMAGE_TYPE_BASHING,
        defence: 2,
        rate: 3


    };


    character[CONSTANT_TRAIT_EQUIPMENT] = new Array();

    character[CONSTANT_TRAIT_ESSENCE] = 1;
    
    character[CONSTANT_TRAIT_COMMITTED_PERSONAL] = 0;
    character[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] = 0;

    character[CONSTANT_TRAIT_PERSONAL_CURRENT] = 0;
    character[CONSTANT_TRAIT_PERIPHERAL_CURRENT] = 0;

    character[CONSTANT_TRAIT_LIMIT] = 0;

    character[CONSTANT_TRAIT_CHARMS] = new Array();

    character[CONSTANT_TRAIT_HEALTH] = new Array();

    //We're assuming normal human health.  Extras get their health object overwritten, we can push more in for Ox-Body etc.

    character[CONSTANT_TRAIT_HEALTH].push({

        penalty: 0,
        filled: false,
        damageType: DAMAGE_TYPE_NONE


    });

    character[CONSTANT_TRAIT_HEALTH].push({

        penalty: -1,
        filled: false,
        damageType: DAMAGE_TYPE_NONE


    });

    character[CONSTANT_TRAIT_HEALTH].push({

        penalty: -1,
        filled: false,
        damageType: DAMAGE_TYPE_NONE


    });

    character[CONSTANT_TRAIT_HEALTH].push({

        penalty: -2,
        filled: false,
        damageType: DAMAGE_TYPE_NONE


    });

    character[CONSTANT_TRAIT_HEALTH].push({

        penalty: -2,
        filled: false,
        damageType: DAMAGE_TYPE_NONE


    });

    character[CONSTANT_TRAIT_HEALTH].push({

        penalty: -4,
        filled: false,
        damageType: DAMAGE_TYPE_NONE


    });

    character[CONSTANT_TRAIT_HEALTH].push({

        penalty: CONSTANT_TRAIT_HEALTH_INCAPACITATED,
        filled: false,
        damageType: DAMAGE_TYPE_NONE


    });

    character[CONSTANT_TRAIT_HEALTH].push({

        penalty: CONSTANT_TRAIT_HEALTH_DYING,
        filled: false,
        damageType: DAMAGE_TYPE_NONE


    });

    
    //Intimacies

    character[CONSTANT_TRAIT_INTIMACIES] = new Array();

    //Hidden traits

    character[CONSTANT_TRAIT_HEROIC] = true;
    character[CONSTANT_TRAIT_EXALTED] = false;
    character[CONSTANT_TRAIT_EXTRA] = false;

    character[CONSTANT_TRAIT_BUFFS] = new Array();

    character[CONSTANT_TRAIT_LANGUAGE_NATIVE] = {};
    character[CONSTANT_TRAIT_LANGUAGES] = new Array();


    character[CONSTANT_CHARACTER_CURRENT_ACTION] = {

        action: COMBAT_ACTION_GUARD,
        speed: SPEED_GUARD

    };

    character[CONSTANT_CHARACTER_CURRENT_FLURRY] = getEmptyFlurry();

    character[CONSTANT_CHARACTER_CURRENT_STUNT] = 0;

    character[CONSTANT_CHARACTER_BEST_STUNT] = 0;

    character[CONSTANT_CHARACTER_CURRENT_ANIMA] = ANIMA_LEVEL_NONE;

    character[CONSTANT_CHARACTER_PERIPHERAL_MOTES_THIS_SCENE] = 0;

    character.surprised = false;

    character.hidden = false;

    character.elevation = 0;

    character.actionCount = 0;  //used to expire variable length buffs

    addCharacterFunctions(character);

    return character;

}


//################################# Hidden Trait Functions ###################################################

//By hidden we mean "doesn't show on character sheet"

function getHeroicAsBonus(character) {

    //This is for feeding to the dice roller (so it knows to count 10s twice)

    return {

        type: CONSTANT_HEROIC,
        magnitude: character[CONSTANT_TRAIT_HEROIC]

    }


}


function getEmptyFlurry() {

    //Technically you always have a flurry, even if you don't take the flurry action.
    //So we need a harmless default.
    //The Speed is arbitrary

    return {

        flurrySet: false,
        speed: 3,
        totalActions: 1,
        remainingActions: 1,
        weaponAttacks: 0

    };

}

function getMultipleActionPenalty(flurry) {

    if ((flurry.totalActions > 1) && (!flurry.magicFlurry)) {

        return flurry.totalActions + (flurry.totalActions - flurry.remainingActions);

    }

    return 0;

}

function getMultipleActionPenaltyAsBonus(flurry) {

    //Like all the other "Bonus" functions, this is for the consumption of the dice roller

    if (getMultipleActionPenalty(flurry) > 0) {

        return {

            type: CONSTANT_ACTION_PENALTY,
            label: "Multiple Action Penalty",
            magnitude: getMultipleActionPenalty(flurry)

        };
    }

    return {

        type: "Invalid",
        label: "Multiple Action Penalty",
        magnitude: 0

    };

}

function checkForFlurrySpeedChange(character, speed) {

    //Flurries have the speed of their slowest action.
    //We call this on action choice, which is kind of wrong since we don't ask for all actions up front.
    //Thus you can cancel a flurry and only have the worst speed of the actions you actually took, whereas Exalted rules call for the worst you had planned. 

    if (character[CONSTANT_CHARACTER_CURRENT_FLURRY].speed < speed) {

        character[CONSTANT_CHARACTER_CURRENT_FLURRY].speed = speed;

    }

}



//################################# VIRTUE Functions ###################################################

function characterHasChannels(character, virtueArray) {

    var i;

    for (i = 0; i < virtueArray.length; i++) {

        if (character[virtueLibrary[virtueArray[i]].tempTrait] > 0) {

            return true;

        }

    }


    return false;

}



//################################# EQUIPMENT Functions ###################################################

function getEquippedAccuracy(character) {

    var tempAccuracyPool = 0;

    tempAccuracyPool += character[CONSTANT_TRAIT_DEXTERITY];

    tempAccuracyPool += character[character[CONSTANT_TRAIT_WEAPON].ability];

    tempAccuracyPool += character[CONSTANT_TRAIT_WEAPON].accuracy;

    tempAccuracyPool += getCharacterSpecialty(character[CONSTANT_TRAIT_SPECIALTY], character[CONSTANT_TRAIT_WEAPON].specialty);

    return tempAccuracyPool;


}

function getEquippedAccuracyDerivationString(character) {

    //Probably we should just have functions that return an object with pool size, derivation string, whatever

    var tempString = "";

    tempString += "<p>This weapon's accuracy bonus is <strong>" + character[CONSTANT_TRAIT_WEAPON].accuracy + "</strong></p>";

    tempString += "<p>" + character[CONSTANT_TRAIT_CHARACTER_NAME] + "'s accuracy with a " + character[CONSTANT_TRAIT_WEAPON].label + " is <strong>" + getEquippedAccuracy(character) + "</strong>";
    
    tempString += " (Dexterity " + character[CONSTANT_TRAIT_DEXTERITY];
    
    tempString += " + " + getAbilityLabelByTrait(character[CONSTANT_TRAIT_WEAPON].ability) + " " + character[character[CONSTANT_TRAIT_WEAPON].ability];

    if (getCharacterSpecialty(character[CONSTANT_TRAIT_SPECIALTY], character[CONSTANT_TRAIT_WEAPON].specialty) > 0) {

        tempString += " + Specialty " + getCharacterSpecialtyByKey(character[CONSTANT_TRAIT_SPECIALTY], character[CONSTANT_TRAIT_WEAPON].specialty).rating + " (" + getCharacterSpecialtyByKey(character[CONSTANT_TRAIT_SPECIALTY], character[CONSTANT_TRAIT_WEAPON].specialty).label + ")";

    }

    tempString += " + weapon accuracy bonus " + character[CONSTANT_TRAIT_WEAPON].accuracy + ")</p>";

    return tempString;    

}


function getEquippedParryDVBasePool(character) {

    var tempParryPool = 0;

    tempParryPool += character[CONSTANT_TRAIT_DEXTERITY];

    tempParryPool += character[character[CONSTANT_TRAIT_WEAPON].ability];

    tempParryPool += character[CONSTANT_TRAIT_WEAPON].defence;

    tempParryPool += getCharacterSpecialty(character[CONSTANT_TRAIT_SPECIALTY], character[CONSTANT_TRAIT_WEAPON].specialty);

    return tempParryPool;
}

function getEquippedParryDV(character) {

    if (isIncapacitated(character)) {

        return 0;

    }

    var tempParryPool = getEquippedParryDVBasePool(character);    
 
    if (character[CONSTANT_TRAIT_EXALTED]) {

        return Math.ceil(tempParryPool / 2);
        
    }

    return Math.floor(tempParryPool / 2);

}


function getEquippedParryDVDerivationString(character) {

    var tempString = "";

    tempString += "<p>This weapon's defence bonus is <strong>" + character[CONSTANT_TRAIT_WEAPON].defence + "</strong></p>";

    tempString += "<p>" + character[CONSTANT_TRAIT_CHARACTER_NAME] + "'s Parry DV with a " + character[CONSTANT_TRAIT_WEAPON].label + " is <strong>" + getEquippedParryDV(character) + "</strong>";

    tempString += " ((Dexterity " + character[CONSTANT_TRAIT_DEXTERITY];

    tempString += " + " + getAbilityLabelByTrait(character[CONSTANT_TRAIT_WEAPON].ability) + " " + character[character[CONSTANT_TRAIT_WEAPON].ability];

    if (getCharacterSpecialty(character[CONSTANT_TRAIT_SPECIALTY], character[CONSTANT_TRAIT_WEAPON].specialty) > 0) {

        tempString += " + Specialty " + getCharacterSpecialtyByKey(character[CONSTANT_TRAIT_SPECIALTY], character[CONSTANT_TRAIT_WEAPON].specialty).rating + " (" + getCharacterSpecialtyByKey(character[CONSTANT_TRAIT_SPECIALTY], character[CONSTANT_TRAIT_WEAPON].specialty).label + ")";

    }

    tempString += " + weapon defence bonus " + character[CONSTANT_TRAIT_WEAPON].defence + ") / 2)</p>";

    return tempString;

}



function getEquippedBaseDamage(character) {

    return character[CONSTANT_TRAIT_STRENGTH] + character[CONSTANT_TRAIT_WEAPON].damage;

}

function getEquippedBaseDamageDerivationString(character) {

    var tempString = "";

    tempString += "<p>This weapon's damage bonus is <strong>" + character[CONSTANT_TRAIT_WEAPON].damage + character[CONSTANT_TRAIT_WEAPON].damageType + "</strong></p>";

    tempString += "<p>" + character[CONSTANT_TRAIT_CHARACTER_NAME] + "'s base damage with a " + character[CONSTANT_TRAIT_WEAPON].label + " is <strong>" + getEquippedBaseDamage(character) + character[CONSTANT_TRAIT_WEAPON].damageType + "</strong>";

    tempString += " (Strength " + character[CONSTANT_TRAIT_STRENGTH];

    tempString += " + weapon damage bonus " + character[CONSTANT_TRAIT_WEAPON].damage + character[CONSTANT_TRAIT_WEAPON].damageType + ")</p>";

    return tempString;

}

//################################# DV Functions ###################################################


function getTotalParryDV(character, diceBonus, dvBonus) {

    if (!diceBonus) {

        diceBonus = 0;

    }

    if (!dvBonus) {

        dvBonus = 0;

    }

    if (getBuffTotal(character, CONSTANT_BUFF_DEFENCE_BONUS) > 0) {

        diceBonus += getBuffTotal(character, CONSTANT_BUFF_DEFENCE_BONUS);

    }

    var tempParryDV = getTotalParryDVWithDiceBonus(character, diceBonus);

    if (getBuffTotal(character, CONSTANT_BUFF_DV_BONUS_ANIMA) > 0) {

        dvBonus += getBuffTotal(character, CONSTANT_BUFF_DV_BONUS_ANIMA);

    }

    tempParryDV += dvBonus;

    if (tempParryDV < 0 || isInactive(character) || character.surprised) {

        tempParryDV = 0;

    }

    return tempParryDV;

}

function getTotalParryDVWithDiceBonus(character, diceBonus) {

    //The dice bonus is any alteration to the underlying pool.  Technically you're supposed to roll them and add successes, but that's stupid.

    var penaltiesApply = true;

    if (hasBuff(character, CONSTANT_BUFF_DV_PENALTY_REDUCTION_DEFENCE)) {

        penaltiesApply = false;

    }

    var pool = getEquippedParryDVBasePool(character) + diceBonus;

    var tempParryDV;

    if (character[CONSTANT_TRAIT_EXALTED]) {

        tempParryDV = Math.ceil(pool / 2);

    } else {

        tempParryDV = Math.floor(pool / 2);

    }

    if (penaltiesApply) {

        tempParryDV += getCurrentWoundPenalty(character);

        tempParryDV -= getBuffTotal(character, CONSTANT_BUFF_ACTION_PENALTY);

    }

    return tempParryDV;

}

function getDodgeDVBasePool(character) {

    var tempDodgePool = character[CONSTANT_TRAIT_DEXTERITY] + character[CONSTANT_TRAIT_DODGE];

    if (character[CONSTANT_TRAIT_ESSENCE] > 1) {

        tempDodgePool += character[CONSTANT_TRAIT_ESSENCE];

    }

    //tempDodgePool -= getBuffTotal(character[CONSTANT_TRAIT_BUFFS], CONSTANT_BUFF_MOBILITY_PENALTY);

    return tempDodgePool;

}

function getDodgeDV(character) {

    if (isIncapacitated(character)) {

        return 0;

    }

    var tempDodgePool = getDodgeDVBasePool(character);

    var tempDodgeDV = Math.floor(tempDodgePool / 2);

    if (character[CONSTANT_TRAIT_EXALTED]) {

        tempDodgeDV = Math.ceil(tempDodgePool / 2);

    }

    tempDodgeDV -= getBuffTotal(character, CONSTANT_BUFF_MOBILITY_PENALTY);

    return tempDodgeDV;
}

function getTotalDodgeDV(character, diceBonus, dvBonus) {

    if (!diceBonus) {

        diceBonus = 0;

    }

    if (!dvBonus) {

        dvBonus = 0;

    }

    var tempDodgeDV = getTotalDodgeDVWithDiceBonus(character, diceBonus);

    if (getBuffTotal(character, CONSTANT_BUFF_DV_BONUS_ANIMA) > 0) {

        dvBonus += getBuffTotal(character, CONSTANT_BUFF_DV_BONUS_ANIMA);

    }

    if (getBuffTotal(character, CONSTANT_BUFF_DODGE_DV_BONUS_CHARM) > 0) {

        dvBonus += getBuffTotal(character, CONSTANT_BUFF_DODGE_DV_BONUS_CHARM);

    }

    tempDodgeDV += dvBonus;

    if (tempDodgeDV < 0 || isInactive(character) || character.surprised) {

        tempDodgeDV = 0;

    }

    return tempDodgeDV;

}

function getTotalDodgeDVWithDiceBonus(character, diceBonus) {

    //The dice bonus is any alteration to the underlying pool.  Technically you're supposed to roll them and add successes, but that's stupid.

    var pool = getDodgeDVBasePool(character) + diceBonus;

    var tempDodgeDV;

    if (character[CONSTANT_TRAIT_EXALTED]) {

        tempDodgeDV = Math.ceil(pool / 2);

    } else {

        tempDodgeDV = Math.floor(pool / 2);

    }

    //There should be code to get rid of the following penalties with Shadow Over Water etc, but they don't currently exist in the system while DSD et al. do.  Melee chauvanism!

    tempDodgeDV += getCurrentWoundPenalty(character);

    tempDodgeDV -= getBuffTotal(character, CONSTANT_BUFF_ACTION_PENALTY);

    tempDodgeDV -= getBuffTotal(character, CONSTANT_BUFF_MOBILITY_PENALTY);

    return tempDodgeDV;

}

function getDodgeMDVBasePool(character) {

    return character[CONSTANT_TRAIT_WILLPOWER] + character[CONSTANT_TRAIT_INTEGRITY] + character[CONSTANT_TRAIT_ESSENCE];

}

function getDodgeMDV(character) {

    var tempMDodgePool = getDodgeMDVBasePool(character);

    return Math.floor(tempMDodgePool / 2);

}

function getTotalDodgeMDV(character) {

    var tempDodgeMDV = getDodgeMDV(character) - getBuffTotal(character, CONSTANT_BUFF_ACTION_PENALTY) + getCurrentWoundPenalty(character);

    if (tempDodgeMDV < 0 || isInactive(character)) {

        tempDodgeMDV = 0;

    }

    return tempDodgeMDV;

}

function getTotalDodgeMDVWithDiceBonus(character, diceBonus) {

    var pool = getDodgeMDVBasePool(character) + diceBonus;

    var tempDodgeMDV;

    tempDodgeMDV = Math.floor(pool / 2);

    tempDodgeMDV += getCurrentWoundPenalty(character);

    tempDodgeMDV -= getBuffTotal(character, CONSTANT_BUFF_ACTION_PENALTY);

    if (tempDodgeMDV < 0 || isInactive(character)) {

        tempDodgeMDV = 0;

    }

    return tempDodgeMDV;

}


function getParryMDVBasePool(character) {

    var tempMParryPool = 0;

    var tempMParryAttributeArray = new Array(character[CONSTANT_TRAIT_CHARISMA], character[CONSTANT_TRAIT_MANIPULATION]);

    tempMParryAttributeArray.sort(function (a, b) { return (b - a) });

    tempMParryPool += tempMParryAttributeArray[0];

    var tempMParryAbilityArray = new Array(character[CONSTANT_TRAIT_PRESENCE], character[CONSTANT_TRAIT_PERFORMANCE], character[CONSTANT_TRAIT_INVESTIGATION]);

    tempMParryAbilityArray.sort(function (a, b) { return (b - a) });

    tempMParryPool += tempMParryAbilityArray[0];

    return tempMParryPool;

}

function getParryMDV(character) {

    return Math.ceil(getParryMDVBasePool(character) / 2);

}

function getTotalParryMDV(character) {

    var tempParryMDV = getParryMDV(character) - getBuffTotal(character, CONSTANT_BUFF_ACTION_PENALTY) + getCurrentWoundPenalty(character);

    if (tempParryMDV < 0 || isInactive(character)) {

        tempParryMDV = 0;

    }

    return tempParryMDV;

}


function getTotalParryMDVWithDiceBonus(character, diceBonus) {

    var pool = getParryMDVBasePool(character) + diceBonus;

    var tempParryMDV = Math.ceil(pool / 2);

    tempParryMDV += getCurrentWoundPenalty(character);

    tempParryMDV -= getBuffTotal(character, CONSTANT_BUFF_ACTION_PENALTY);

    if (tempParryMDV < 0 || isInactive(character)) {

        tempParryMDV = 0;

    }

    return tempParryMDV;


}



function getBestTraitOf() {

    //Needs to be passed objects with a rating property.  The rest of the properties don't matter, so they're usually whatever the calling function needs (labels etc)

    var tempSortArray = new Array();

    for (i = 0; i < arguments.length; i++) {

        tempSortArray.push(arguments[i]);

    }

    tempSortArray.sort(function (a, b) { return (b.rating - a.rating) });

    return tempSortArray[0];

}



function getBestDV(character) {

    if (getTotalDodgeDV(character) > getTotalParryDV(character)) {

        return {

            dv: getTotalDodgeDV(character),
            type: DV_DODGE,
            label: "Dodge"

        };

    }


    return {

        dv: getTotalParryDV(character),
        type: DV_PARRY,
        label: "Parry"

    };

}


function getBestMDV(character) {

    if (getTotalDodgeMDV(character) > getTotalParryMDV(character)) {

        return {

            dv: getTotalDodgeMDV(character),
            type: DV_DODGE,
            label: "Dodge"

        };

    }


    return {

        dv: getTotalParryMDV(character),
        type: DV_PARRY,
        label: "Parry"

    };

}


function getMiscDVBonusString(character, inUse) {

    //We don't have a sophisticated buff system, so this is going to manually check buffs for inclusion.  That's fine when it's really just Sakuya and Vedara, but will need a HUGE refactor if this engine ever does anything serious.

    var dvBonusString = "";

    var i;

    for (i = 0; i < character[CONSTANT_TRAIT_BUFFS].length; i++) {

        switch (character[CONSTANT_TRAIT_BUFFS][i].type) {

            case CONSTANT_BUFF_DV_BONUS_ANIMA:

                dvBonusString += "+" + character[CONSTANT_TRAIT_BUFFS][i].magnitude + "DV (Both) - " + character[CONSTANT_TRAIT_BUFFS][i].source + "; ";

                break;

            case CONSTANT_BUFF_DODGE_DV_BONUS_CHARM:

                dvBonusString += "+" + character[CONSTANT_TRAIT_BUFFS][i].magnitude + "DV (Dodge) - " + character[CONSTANT_TRAIT_BUFFS][i].source + "; ";

                break;

            case CONSTANT_BUFF_DEFENCE_BONUS:

                dvBonusString += "+" + character[CONSTANT_TRAIT_BUFFS][i].magnitude + " dice (Parry) - " + character[CONSTANT_TRAIT_BUFFS][i].source + "; ";

                break;


        }

    }


    if (dvBonusString != "") {

        if (inUse) {

            dvBonusString = "<p><strong>Persistent Bonuses: </strong>" + dvBonusString + "</p>";

        } else {

            dvBonusString = "<p><strong>Charm and Power Bonuses: </strong>" + dvBonusString + "</p>";

        }

    }

    return dvBonusString;

}



function getExternalPenaltyToAttackers(character) {

    //Returns as bonus to the ATTACKER'S roll
    //Only returns the first, so more sophisticated solution needed if we ever end up with more than Dawn Anima and Shrouding the Body and Mind

    var i;

    for (i = 0; i < character[CONSTANT_TRAIT_BUFFS].length; i++) {

        if (character[CONSTANT_TRAIT_BUFFS][i].type === CONSTANT_BUFF_EXTERNAL_PENALTY_TO_ATTACKERS) {

            return {

                type: CONSTANT_EXTERNAL_PENALTY,
                label: character[CONSTANT_TRAIT_BUFFS][i].source,
                magnitude: character[CONSTANT_TRAIT_BUFFS][i].magnitude

            }

        }

    }

    return {

        type: "Invalid",
        magnitude: 0,
        label: "Charm"

    };

}


//################################# Soak Functions ########################################################

function getNaturalBashingSoak(character) {

    return character[CONSTANT_TRAIT_STAMINA];

}

function getNaturalLethalSoak(character) {

    if (character[CONSTANT_TRAIT_EXALTED]) {

        return Math.floor(character[CONSTANT_TRAIT_STAMINA] / 2);

    }

    return 0;

}

function getNaturalAggravatedSoak(character) {

    return 0;  //This may eventually look for buffs, if they exist.

}

function getArmouredBashingSoak(character) {

    return getNaturalBashingSoak(character) + character[CONSTANT_TRAIT_ARMOUR].bashing;

}

function getArmouredLethalSoak(character) {

    return getNaturalLethalSoak(character) + character[CONSTANT_TRAIT_ARMOUR].lethal;

}

function getArmouredAggravatedSoak(character) {

    return getNaturalAggravatedSoak(character) + character[CONSTANT_TRAIT_ARMOUR].lethal;

}

function getPiercingBashingSoak(character) {

    var tempSoak = character[CONSTANT_TRAIT_ARMOUR].bashing - CONSTANT_PIERCING;

    if (tempSoak < 0) {

        tempSoak = 0;

    }

    return getNaturalBashingSoak(character) + tempSoak;

}

function getPiercingLethalSoak(character) {

    var tempSoak = character[CONSTANT_TRAIT_ARMOUR].lethal - CONSTANT_PIERCING;

    if (tempSoak < 0) {

        tempSoak = 0;

    }

    return getNaturalLethalSoak(character) + tempSoak;

}

function getPiercingAggravatedSoak(character) {

    var tempSoak = character[CONSTANT_TRAIT_ARMOUR].lethal - CONSTANT_PIERCING;

    if (tempSoak < 0) {

        tempSoak = 0;

    }

    return getNaturalAggravatedSoak(character) + tempSoak;

}


//################################# Specialty Functions ###################################################


function getCharacterSpecialty(characterSpecialties, specialty) {  //Really needs to be refactored to getSpecialtyRating

    //Also maybe I thought passing the entire character object was wasteful?  But that's stupid, and it's annoying to specify the specialties object all the time.  Refactor.

    for (i = 0; i < characterSpecialties.length; i++) {

        if (characterSpecialties[i].specialty == specialty) {

            return characterSpecialties[i].rating;

        }

    }

    return 0;
}

function getCharacterSpecialtyByKey(characterSpecialties, specialty) {

    //One day I'll figure out the blindingly obvious better way to get array and hashmap functionality out of the same object

    for (i = 0; i < characterSpecialties.length; i++) {

        if (characterSpecialties[i].specialty == specialty) {

            return characterSpecialties[i];

        }

    }

    return {};
}


function getSpecialtyAsBonus(character, specialty) {

    //ie something the dice roller can eat

    if (getCharacterSpecialty(character[CONSTANT_TRAIT_SPECIALTY], specialty) > 0) {

        return {

            type: CONSTANT_MUNDANE_BONUS,
            label: getCharacterSpecialtyByKey(character[CONSTANT_TRAIT_SPECIALTY], specialty).label,
            magnitude: getCharacterSpecialty(character[CONSTANT_TRAIT_SPECIALTY], specialty)

        };

    }

    return {

        type: "Invalid",
        label: "Specialty",
        magnitude: 0

    };

}


function getBestSpecialtyForAbility(character, trait) {

    //Obviously it doesn't have much to say about applicability :<

    var sortArray = new Array();
    var i;



    for (i == 0; i < character[CONSTANT_TRAIT_SPECIALTY].length; i++) {

        if (character[CONSTANT_TRAIT_SPECIALTY][i].trait == trait) {

            sortArray.push(character[CONSTANT_TRAIT_SPECIALTY][i]);

        }

    }

    if (sortArray.length < 1) {

        sortArray.push({

            label: "",
            rating: 0

        });

    }

    sortArray.sort(function (a, b) { return (b.rating - a.rating) });

    return sortArray[0];

}


function getBestSpecialtyForSocialCombat(character, trait) {

    //Prolly need a more sophisticated param scheme on the generic function rather than this c/p hack job

    var sortArray = new Array();
    var i;

    for (i = 0; i < character[CONSTANT_TRAIT_SPECIALTY].length; i++) {

        if (character[CONSTANT_TRAIT_SPECIALTY][i].trait == trait && character[CONSTANT_TRAIT_SPECIALTY][i].socialCombat) {

            sortArray.push(character[CONSTANT_TRAIT_SPECIALTY][i]);

        }

    }

    if (sortArray.length < 1) {

        sortArray.push({

            label: "",
            rating: 0

        });

    }

    sortArray.sort(function (a, b) { return (b.rating - a.rating) });

    return sortArray[0];

}


//################################# Background Functions ###################################################

function getBackgroundRating(character, backgroundKey) {

    for (i = 0; i < character[CONSTANT_TRAIT_BACKGROUND].length; i++) {

        if (character[CONSTANT_TRAIT_BACKGROUND][i].key == backgroundKey) {

            return character[CONSTANT_TRAIT_BACKGROUND][i].rating;

        }

    }
    
    return 0;

}

//################################# Buff Functions ###################################################

function hasBuff(character, buffType) {

    var i;

    for (i = 0; i < character[CONSTANT_TRAIT_BUFFS].length; i++) {

        if (character[CONSTANT_TRAIT_BUFFS][i].type === buffType) {

            return true;

        }

    }

    return false;

}


function getBuffTotal(character, buffType) {

    //Buffs can be set in various places and stack.  For example the action penalty is one buff object per action, but needs to be totallyed to be applied

    var buffArray = character[CONSTANT_TRAIT_BUFFS];

    var tempBuffTotal = 0;

    var i;

    for (i = 0; i < buffArray.length; i++) {

        if (buffArray[i].type == buffType) {

            tempBuffTotal += buffArray[i].magnitude;

        }

    }

    return tempBuffTotal;

}

function getMobilityPenalty(character) {

    //As usual, returns an object the dice roller can eat

    var mobilityPenalty = getBuffTotal(character, CONSTANT_BUFF_MOBILITY_PENALTY);

    if (mobilityPenalty > 0) {

        return {

            type: CONSTANT_INTERNAL_PENALTY,
            label: "Mobility",
            magnitude: mobilityPenalty

        };

    }

    return {

        type: "Invalid",
        label: "Mobility",
        magnitude: 0

    };

}


function getAimBonus(character) {

    //As usual, returns an object the dice roller can eat

    if (getBuffTotal(character, CONSTANT_BUFF_AIM_BONUS) > 0) {

        return {

            type: CONSTANT_MUNDANE_BONUS,
            label: "Aim Bonus",
            magnitude: getBuffTotal(character, CONSTANT_BUFF_AIM_BONUS)

        };


    }

    return {

        type: "invalid",
        label: "Aim Bonus",
        magnitude: 0

    };

}

function clearBuff(character, buffType) {

    var i;

    for (i = character[CONSTANT_TRAIT_BUFFS].length - 1; i >= 0; i -= 1) {

        if (character[CONSTANT_TRAIT_BUFFS][i].type === buffType) {

            if (character[CONSTANT_TRAIT_BUFFS][i].committedMotes) {

                character.releaseMotes(character[CONSTANT_TRAIT_BUFFS][i].committedMotes, character[CONSTANT_TRAIT_BUFFS][i].preferredPool);

            }

            character[CONSTANT_TRAIT_BUFFS].splice(i, 1);

        }

    }

}


function clearBuffWithDuration(character, duration) {

    var i;

    for (i = character[CONSTANT_TRAIT_BUFFS].length - 1; i >= 0; i -= 1) {

        if (character[CONSTANT_TRAIT_BUFFS][i].duration === duration) {

            if (character[CONSTANT_TRAIT_BUFFS][i].committedMotes) {

                character.releaseMotes(character[CONSTANT_TRAIT_BUFFS][i].committedMotes, character[CONSTANT_TRAIT_BUFFS][i].preferredPool);

            }

            character[CONSTANT_TRAIT_BUFFS].splice(i, 1);

        }

    }

}

function expireBuffsByActionCount(character) {

    var i;

    for (i = character[CONSTANT_TRAIT_BUFFS].length - 1; i >= 0; i -= 1) {

        if (character[CONSTANT_TRAIT_BUFFS][i].expiryAction && (character[CONSTANT_TRAIT_BUFFS][i].expiryAction <= character.actionCount)) {

            if (character[CONSTANT_TRAIT_BUFFS][i].committedMotes) {

                character.releaseMotes(character[CONSTANT_TRAIT_BUFFS][i].committedMotes, character[CONSTANT_TRAIT_BUFFS][i].preferredPool);

            }

            character[CONSTANT_TRAIT_BUFFS].splice(i, 1);

        }

    }


}


function getActiveBuffsString(character) {

    //This is a horror.  We'd need a more sophisticated buff system to unhorror it, particularly if it's to be used outside the tutorial where only Sakuya, Crimson Rain and Vedara have buffs.

    var buffString = "";

    var i;

    for (i = 0; i < character[CONSTANT_TRAIT_BUFFS].length; i++) {

        switch (character[CONSTANT_TRAIT_BUFFS][i].type) {

            case CONSTANT_BUFF_DV_BONUS_ANIMA:

                buffString += "<li>+" + character[CONSTANT_TRAIT_BUFFS][i].magnitude + "DV (Both) - " + character[CONSTANT_TRAIT_BUFFS][i].source + "</li>";

                break;

            case CONSTANT_BUFF_DODGE_DV_BONUS_CHARM:

                buffString += "<li>+" + character[CONSTANT_TRAIT_BUFFS][i].magnitude + "DV (Dodge) - " + character[CONSTANT_TRAIT_BUFFS][i].source + "</li>";

                break;

            case CONSTANT_BUFF_DEFENCE_BONUS:

                buffString += "<li>+" + character[CONSTANT_TRAIT_BUFFS][i].magnitude + " dice (Parry) - " + character[CONSTANT_TRAIT_BUFFS][i].source + "</li>";

                break;

            case CONSTANT_BUFF_DICE_BONUS_ATTACK_CHARM:

                buffString += "<li>+" + character[CONSTANT_TRAIT_BUFFS][i].magnitude + " dice (Attacks) - " + character[CONSTANT_TRAIT_BUFFS][i].source + "</li>";

                break;

            case CONSTANT_BUFF_EXTERNAL_PENALTY_TO_ATTACKERS:

                buffString += "<li>External penalty of " + character[CONSTANT_TRAIT_BUFFS][i].magnitude + " to attackers - " + character[CONSTANT_TRAIT_BUFFS][i].source + "</li>";

                break;

            case CONSTANT_BUFF_DV_PENALTY_REDUCTION_ATTACK:

                buffString += "<li>No DV penalties from making attacks with weapon - " + character[CONSTANT_TRAIT_BUFFS][i].source + "</li>";

                break;

            case CONSTANT_BUFF_DV_PENALTY_REDUCTION_DEFENCE:

                buffString += "<li>Ignore all DV penalties - " + character[CONSTANT_TRAIT_BUFFS][i].source + "</li>";

                break;

            case CONSTANT_BUFF_PROTECTION_OF_CELESTIAL_BLISS:

                buffString += "<li>May cancel " + character[CONSTANT_TRAIT_BUFFS][i].source + " for a perfect parry.</li>";

                break;

            case CONSTANT_BUFF_AIM_BONUS:

                buffString += "<li>+" + character[CONSTANT_TRAIT_BUFFS][i].magnitude + " dice (Attack) - " + character[CONSTANT_TRAIT_BUFFS][i].source + "</li>";

                break;

            case CONSTANT_BUFF_MOVEMENT_MULTIPLIER:

                buffString += "<li>Distance of Move and Dash actions multiplied by " + character[CONSTANT_TRAIT_BUFFS][i].magnitude + " - " + character[CONSTANT_TRAIT_BUFFS][i].source + "</li>";

                break;

            case CONSTANT_BUFF_JUMP_MULTIPLIER:

                buffString += "<li>Distance of Jump actions multiplied by " + character[CONSTANT_TRAIT_BUFFS][i].magnitude + " - " + character[CONSTANT_TRAIT_BUFFS][i].source + "</li>";

                break;

            case CONSTANT_BUFF_JUMP_REFLEXIVE_ON_ACTION:

                buffString += "<li>May take reflexive Jump action on action tick - " + character[CONSTANT_TRAIT_BUFFS][i].source + "</li>";

                break;

            case CONSTANT_BUFF_PERFECT_BALANCE:

                buffString += "<li>Perfect balance - " + character[CONSTANT_TRAIT_BUFFS][i].source + "</li>";

                break;

            case CONSTANT_BUFF_SILENCE:

                buffString += "<li>Makes no sound - " + character[CONSTANT_TRAIT_BUFFS][i].source + "</li>";

                break;

            case CONSTANT_BUFF_REESTABLISH_SURPRISE_BONUS_SUCCESSES:

                buffString += "<li>+" + character[CONSTANT_TRAIT_BUFFS][i].magnitude + " successes (Reestablish Surprise) - " + character[CONSTANT_TRAIT_BUFFS][i].source + "</li>";

                break;

            case CONSTANT_BUFF_AIR_DRAGON_STYLE:

                buffString += "<li>Double Chakram: damage from non-flurried chakram attacks is applied twice - " + character[CONSTANT_TRAIT_BUFFS][i].source + "</li>";

                break;

        }


    }

    if (buffString != "") {

        buffString = "<ul>" + buffString + "</ul>";

    } else {

        buffString = CONSTANT_NO_ACTIVE_BUFFS;  //We can test for this and not link

    }

    return buffString;

}


function getDiceBonusFromBuff(character, buffType) {

    //Will return only first, and will return as a dice bonus no matter what, so there's a few failure modes here :<
    //Also assumes buff is magical

    var i;

    var tempBuff = {};

    for (i = 0; i < character[CONSTANT_TRAIT_BUFFS].length; i++) {

        tempBuff = character[CONSTANT_TRAIT_BUFFS][i];

        if (tempBuff.type === buffType) {

            return {

                type: CONSTANT_MAGIC_BONUS,
                magnitude: tempBuff.magnitude,
                label: tempBuff.source,
                activationLabel: "+" + tempBuff.magnitude + " dice (" + tempBuff.source + ")",
                buff: true

            }

        }

    }

    return {

        type: "Invalid",
        magnitude: 0,
        source: "Buff"

    };

}


//################################# Health Functions ###################################################

function getHealthLevels(penalty, character) {

    //That is, get all health level objects of a given penalty (eg -2)

    var returnArray = new Array();

    var i;

    for (i = 0; i < character[CONSTANT_TRAIT_HEALTH].length; i++) {

        if (character[CONSTANT_TRAIT_HEALTH][i].penalty == penalty) {

            returnArray.push(character[CONSTANT_TRAIT_HEALTH][i]);

        }

    }

    return returnArray;

}


function getHealthLevelsCharacterSheetString(character, penalty, boxID) {

    //For output with the correct url for the type of damage in each box

    var tempBoxesString = "";

    var levelsArray = getHealthLevels(penalty, character);

    for (j = 0; j < levelsArray.length; j++) {

        tempBoxesString += "<img src=\"";
        
        if (levelsArray[j].filled) {

            if (levelsArray[j].damageType == DAMAGE_TYPE_BASHING) {

                tempBoxesString += CONSTANT_IMAGE_URL_BOX_BASHING;

            }


            if (levelsArray[j].damageType == DAMAGE_TYPE_LETHAL) {

                tempBoxesString += CONSTANT_IMAGE_URL_BOX_LETHAL;

            }

            
            if (levelsArray[j].damageType == DAMAGE_TYPE_AGGRAVATED) {

                tempBoxesString += CONSTANT_IMAGE_URL_BOX_AGGRAVATED;

            }

        } else {

            tempBoxesString += CONSTANT_IMAGE_URL_BOX_EMPTY;
            
        }
        
        tempBoxesString += "\" id=\"" + boxID + "_" + j + 1 + "\" />";

    }

    return tempBoxesString

}


 

function hasEmptyHealthLevel(character) {

//Check to see whether we can simply damage or need to worry about wrapping.
//The edge case (empty dying levels but Incap only has bashing) is handled when applying damage

    var i;

    for (i = 0; i < character[CONSTANT_TRAIT_HEALTH].length; i++) {

        if (!character[CONSTANT_TRAIT_HEALTH][i].filled) {

            return true;

        }

    }

    return false;

}

function getFirstEmptyHealthLevel(character) {

    //returns penalty as well as index

    var i;

    for (i = 0; i < character[CONSTANT_TRAIT_HEALTH].length; i++) {

        if (!character[CONSTANT_TRAIT_HEALTH][i].filled) {

            return { index: i, penalty: character[CONSTANT_TRAIT_HEALTH][i].penalty };

        }

    }

    return { index: CONSTANT_TRAIT_HEALTH_LEVEL_INVALID, penalty: CONSTANT_TRAIT_HEALTH_LEVEL_INVALID };

}


function isAlive(character) {  //This may be unnecessary now I switched hasEmptyHealthLevel back to caring about Dying

    var tempEmptyHealthLevel = getFirstEmptyHealthLevel(character);

    if (tempEmptyHealthLevel.index == CONSTANT_TRAIT_HEALTH_LEVEL_INVALID) {

        return false;

    }

    return true;
}


function isInactive(character) {

    if (character[CONSTANT_CHARACTER_CURRENT_ACTION].action == COMBAT_ACTION_INACTIVE) {

        return true;

    }

    return false;

}


function getCurrentWoundPenalty(character) {

    //Integer, not a "Bonus"

    var tempWoundPenalty = 0;

    var i;

    for (i = 0; i < character[CONSTANT_TRAIT_HEALTH].length; i++) {

        if (character[CONSTANT_TRAIT_HEALTH][i].filled) {

            tempWoundPenalty = character[CONSTANT_TRAIT_HEALTH][i].penalty;

        }

    }

    return tempWoundPenalty;
}

function getWoundPenaltyAsBonus(character) {

    //By which I mean an object ready to go into the dice roller

    if (getCurrentWoundPenalty(character) < 0) {

        return {

            type: CONSTANT_WOUND_PENALTY,
            label: "Wound Penalty",
            magnitude: getCurrentWoundPenalty(character) * -1

        }

    }

    return {

        type: "Invalid",
        label: "Wound Penalty",
        magnitude: 0    

    }

}


function getCurrentWoundPenaltyLabel(character) {

    //The penalties are integers, which is fine as labels for 0 to -4 but not the rest

    var tempWoundPenalty = getCurrentWoundPenalty(character);

    switch (tempWoundPenalty) {

        case CONSTANT_TRAIT_HEALTH_DYING:
            tempWoundPenalty = "Dying";
            break;

        case CONSTANT_TRAIT_HEALTH_INCAPACITATED:
            tempWoundPenalty = "Incapacitated";
            break;

    }

    if (!isAlive(character)) {

        tempWoundPenalty = "Dead";

    }

    return tempWoundPenalty;
}


function isIncapacitated(character) {

    var i;

    for (i = 0; i < character[CONSTANT_TRAIT_HEALTH].length; i++) {

        if (character[CONSTANT_TRAIT_HEALTH][i].filled) {

            if (character[CONSTANT_TRAIT_HEALTH][i].penalty == CONSTANT_TRAIT_HEALTH_INCAPACITATED) {

                return true;

            }


        }

    }

    return false;

}

function isIncapacitatedByBashing(character) {

    //used to determine if we need to do wrapping stuff rather than going to Dying

    var i;

    for (i = 0; i < character[CONSTANT_TRAIT_HEALTH].length; i++) {

        if (character[CONSTANT_TRAIT_HEALTH][i].filled) {

            if (character[CONSTANT_TRAIT_HEALTH][i].penalty == CONSTANT_TRAIT_HEALTH_INCAPACITATED && character[CONSTANT_TRAIT_HEALTH][i].damageType == DAMAGE_TYPE_BASHING) {

                return true;

            }


        }

    }

    return false;

}

function hasAnyDamageOfType(character, type) {

    var i;

    for (i = 0; i < character[CONSTANT_TRAIT_HEALTH].length; i++) {

        if (character[CONSTANT_TRAIT_HEALTH][i].filled && character[CONSTANT_TRAIT_HEALTH][i].damageType == type) {

            return true;

        }

    }

    return false;

}

function getIndexOfFirstLevelOfDamageType(character, type) {

    var i;
    
    for (i = 0; i < character[CONSTANT_TRAIT_HEALTH].length; i++) {

        if (character[CONSTANT_TRAIT_HEALTH][i].filled && character[CONSTANT_TRAIT_HEALTH][i].damageType == type) {

            return i;

        }

    }    

    return CONSTANT_TRAIT_HEALTH_LEVEL_INVALID;

}


function applyDamage(character, type, magnitude) {

    //So "three levels of lethal" or what have you
    
    var i;

    for (i = 0; i < magnitude; i++) {

         if (hasEmptyHealthLevel(character)) {  

            if (type == DAMAGE_TYPE_BASHING) {

                   if (isIncapacitatedByBashing(character)) {

                       character[CONSTANT_TRAIT_HEALTH][getIndexOfFirstLevelOfDamageType(character, DAMAGE_TYPE_BASHING)].damageType = DAMAGE_TYPE_LETHAL;  //Upgrades a bashing to lethal

                    } else {

                        if (getFirstEmptyHealthLevel(character).penalty == CONSTANT_TRAIT_HEALTH_DYING) {

                            character[CONSTANT_TRAIT_HEALTH][getFirstEmptyHealthLevel(character).index].damageType = DAMAGE_TYPE_LETHAL;  //Bashing upgraded to lethal for Dying

                        } else {
                    
                            character[CONSTANT_TRAIT_HEALTH][getFirstEmptyHealthLevel(character).index].damageType = type;

                        }
                
                        character[CONSTANT_TRAIT_HEALTH][getFirstEmptyHealthLevel(character).index].filled = true;
       
                    }

            }

            if (type == DAMAGE_TYPE_LETHAL) {

                if (hasAnyDamageOfType(character, DAMAGE_TYPE_BASHING)) {

                    character[CONSTANT_TRAIT_HEALTH][getIndexOfFirstLevelOfDamageType(character, DAMAGE_TYPE_BASHING)].damageType = DAMAGE_TYPE_LETHAL;  //upgrade the existing wound
                    applyDamage(character, DAMAGE_TYPE_BASHING, 1); //This is the "push down"

                } else {

                    character[CONSTANT_TRAIT_HEALTH][getFirstEmptyHealthLevel(character).index].damageType = type;
                    character[CONSTANT_TRAIT_HEALTH][getFirstEmptyHealthLevel(character).index].filled = true;
                }

            }

            if (type == DAMAGE_TYPE_AGGRAVATED) {

               if (hasAnyDamageOfType(character, DAMAGE_TYPE_LETHAL)) {

                    character[CONSTANT_TRAIT_HEALTH][getIndexOfFirstLevelOfDamageType(character, DAMAGE_TYPE_LETHAL)].damageType = DAMAGE_TYPE_AGGRAVATED;  //upgrade the existing wound
                    applyDamage(character, DAMAGE_TYPE_LETHAL, 1); //This is the "push down"

                } else {

                    //this block is basically identical to the Lethal block, minor DRY problem in need of refactor

                    if (hasAnyDamageOfType(character, DAMAGE_TYPE_BASHING)) {

                        character[CONSTANT_TRAIT_HEALTH][getIndexOfFirstLevelOfDamageType(character, DAMAGE_TYPE_BASHING)].damageType = DAMAGE_TYPE_AGGRAVATED;  //upgrade the existing wound
                        applyDamage(character, DAMAGE_TYPE_BASHING, 1); //This is the "push down"

                    } else {

                        character[CONSTANT_TRAIT_HEALTH][getFirstEmptyHealthLevel(character).index].damageType = type;
                        character[CONSTANT_TRAIT_HEALTH][getFirstEmptyHealthLevel(character).index].filled = true;
                    }

                }

            }

        }
        
    }

    fillCharacterSheetFromCharacter(currentPC);
    fillCombatTrackerFromCombat(currentCombat);

}


function fullHeal(character) {

    var i;

    for (i = 0; i < character[CONSTANT_TRAIT_HEALTH].length; i++) {

        character[CONSTANT_TRAIT_HEALTH][i].filled = false;

    }

}

function getExtraHealth() {

    //Extra as in the character type.  This is used to overwrite the health object of extras (since the default is seven levels, not three)

    var tempHealth = new Array();

     tempHealth.push({

         penalty: -1,
         filled: false,
         damageType: DAMAGE_TYPE_NONE


     });

     tempHealth.push({

         penalty: -3,
         filled: false,
         damageType: DAMAGE_TYPE_NONE


     });

     tempHealth.push({

         penalty: CONSTANT_TRAIT_HEALTH_INCAPACITATED,
         filled: false,
         damageType: DAMAGE_TYPE_NONE

     });

     tempHealth.push({

         penalty: CONSTANT_TRAIT_HEALTH_DYING,
         filled: false,
         damageType: DAMAGE_TYPE_NONE

     });

     return tempHealth;


 }

 function cloneHealth(healthArray) {

     var returnArray = new Array();

     var i;

     for (i = 0; i < healthArray.length; i++) {

         returnArray.push({

            penalty: healthArray[i].penalty,
            filled: healthArray[i].filled,
            damageType: healthArray[i].damageType

         });

     }

     return returnArray;

 }


 //####################################### CHARM FUNCTIONS ############################################

 function activateCharmForBonus(character, charmKey, preferredPool, actionPool, variableMotes) {   //Currently only supporting First & Second Excellency used at full motes, could end up a monster

    //As usualy this returns an object consumeable by the dice roller

     var tempBonus = {};

     var tempCharm = charmLibrary[charmKey];

     var moteCost = 0;

     var wpCost = 0;

     var diceAdded = 0;

     var successesAdded = 0;

     var commit = false;

     if (character.hasCharm(charmKey)) {

         tempBonus.label = tempCharm.label;

         if (tempCharm.characterType === TRAIT_VALUE_TYPE_DRAGON_BLOODED) {

             if (!(tempCharm.aspect === character[CONSTANT_TRAIT_CASTE])) {

                 moteCost += 1;

             }

         }

         if (tempCharm.bonusType === CHARM_BONUS_TYPE_DICE_ADDER) {

             tempBonus.type = CONSTANT_MAGIC_BONUS;

             if (tempCharm.excellency) {

                 tempBonus.excellency = true;

                 if (variableMotes === VARIABLE_MOTES_MAX) {

                     diceAdded = getDiceCapFromPool(character, actionPool);

                     moteCost += Math.ceil(diceAdded * tempCharm.costMotes);

                 } else {

                     moteCost += variableMotes;

                     diceAdded = Math.floor(variableMotes / tempCharm.costMotes);

                     if (diceAdded > getDiceCapFromPool(character, actionPool)) {

                         diceAdded = getDiceCapFromPool(character, actionPool);

                     }


                 }

                 tempBonus.magnitude = diceAdded;

                 tempBonus.activationLabel = "+" + tempBonus.magnitude + " dice (" + tempBonus.label + ")";

             }

         }

         if (tempCharm.bonusType == CHARM_BONUS_TYPE_SUCCESS_ADDER) {

             tempBonus.type = CONSTANT_SUCCESS_BONUS;

             if (tempCharm.excellency) {

                 tempBonus.excellency = true;

                 if (variableMotes == VARIABLE_MOTES_MAX) {

                     successesAdded = getSuccessCapFromPool(character, actionPool);

                     moteCost += Math.ceil(successesAdded * tempCharm.costMotes);

                 } else {

                     moteCost += variableMotes;

                     successesAdded = Math.floor(variableMotes / tempCharm.costMotes);

                     if (successesAdded > getSuccessCapFromPool(character, actionPool)) {

                         successesAdded = getSuccessCapFromPool(character, actionPool);

                     }

                 }

                 tempBonus.magnitude = successesAdded;

                 tempBonus.activationLabel = "+" + tempBonus.magnitude + " successes (" + tempBonus.label + ")";

             }

         }

         //Specific charms, can't be generalised.

         //Solars

         if (tempCharm.key === CHARM_SOLAR_HEAVENLY_GUARDIAN_DEFENCE) {

             moteCost += tempCharm.costMotes;

             //Flaw of Invulnerability stuff here?
             
         }

         if (tempCharm.key === CHARM_SOLAR_BULWARK_STANCE) {

             commit = true;

             moteCost += tempCharm.costMotes;

             if (character.hasMotes(moteCost)) {

                 addCharmBuffsToCharacter(character, tempCharm.key, moteCost, preferredPool);  //OK, that probably can be generalised.  Only actual example though!

             }

         }

         if (tempCharm.key === CHARM_SOLAR_DIPPING_SWALLOW_DEFENCE) {

             moteCost += tempCharm.costMotes;

             if (character.hasMotes(moteCost)) {

                 character[CONSTANT_TRAIT_BUFFS].push({

                     type: CONSTANT_BUFF_DV_PENALTY_REDUCTION_DEFENCE,
                     source: "Dipping Swallow Defence",
                     magnitude: 0,                     
                     expiryAction: 0  //Just in case it sticks around somehow

                 });

                 tempBonus.activationLabel = "DV Penalties ignored (Dipping Swallow Defence)";

             }

         }

         //DBs

         if (tempCharm.key === CHARM_DRAGON_BLOODED_DRAGON_GRACED_WEAPON_FIRE) {

             moteCost += tempCharm.costMotes;

             tempBonus.type = CONSTANT_DAMAGE_DICE_BONUS;

             tempBonus.magnitude = 4;

             tempBonus.label = tempCharm.label;

             tempBonus.activationLabel = "+" + tempBonus.magnitude + " damage dice (" + tempBonus.label + ")";

         }

         if (tempCharm.key === CHARM_DRAGON_BLOODED_FALLING_STAR_MANEUVER) {

             if (variableMotes > character[CONSTANT_TRAIT_ESSENCE]) {

                 variableMotes = character[CONSTANT_TRAIT_ESSENCE];

             }

             moteCost += variableMotes;

             tempBonus.type = CONSTANT_DAMAGE_DICE_BONUS;

             tempBonus.magnitude = variableMotes * 2;

             tempBonus.label = tempCharm.label;

             tempBonus.activationLabel = "+" + tempBonus.magnitude + " damage dice (" + tempBonus.label + ")";

         }

         if (tempCharm.key === CHARM_DRAGON_BLOODED_WIND_DRAGON_SPEED) {

             moteCost += tempCharm.costMotes;

             tempBonus.type = CONSTANT_SPEED_REDUCTION;

             tempBonus.magnitude = 1;

             tempBonus.label = tempCharm.label;

             tempBonus.activationLabel = "-" + tempBonus.magnitude + " Speed (" + tempBonus.label + ")";

         }

         if (tempCharm.key === CHARM_DRAGON_BLOODED_SHROUDING_THE_BODY_AND_MIND) {

             commit = true;

             moteCost += tempCharm.costMotes;

             if (character.hasMotes(moteCost)) {

                 addCharmBuffsToCharacter(character, CHARM_DRAGON_BLOODED_SHROUDING_THE_BODY_AND_MIND, moteCost, preferredPool, character.actionCount + 5);

             }


         }


         //Pay for it!

         if (character.hasMotes(moteCost) && character[CONSTANT_TRAIT_WILLPOWER_CURRENT] >= wpCost) {

             if (commit) {

                 character.commitMotes(moteCost, preferredPool);

             } else {

                 character.spendMotes(moteCost, preferredPool);

             }

             spendTempTraitMultiple(CONSTANT_TRAIT_WILLPOWER_CURRENT, character, wpCost);

             return tempBonus;

         }

     }

     return {

        type: CONSTANT_BONUS_INVALID,
        magnitude: 0,
        label: "Charm"

     }

 }


 function getDiceCapFromPool(character, actionPool, defence) {

     var tempCap = 0;

     if (character[CONSTANT_TRAIT_CHARACTER_TYPE] == TRAIT_VALUE_TYPE_SOLAR_EXALTED) {

         tempCap = character[actionPool.attribute] + character[actionPool.ability];

     }

     if (character[CONSTANT_TRAIT_CHARACTER_TYPE] == TRAIT_VALUE_TYPE_DRAGON_BLOODED) {

         tempCap = character[actionPool.ability] + getCharacterSpecialty(character[CONSTANT_TRAIT_SPECIALTY], actionPool.specialty);

     }

     //Look for cap-lowering buffs - many NYI

     if (defence && actionPool.ability === CONSTANT_TRAIT_MELEE) {

         if (getBuffTotal(character, CONSTANT_BUFF_DEFENCE_BONUS) > 0) {

             tempCap -= getBuffTotal(character, CONSTANT_BUFF_DEFENCE_BONUS); 

         }

     }

    return tempCap;

}

function getSuccessCapFromPool(character, actionPool) {

    if (character[CONSTANT_TRAIT_CHARACTER_TYPE] == TRAIT_VALUE_TYPE_SOLAR_EXALTED) {

        return Math.floor((character[actionPool.attribute] + character[actionPool.ability]) / 2);

    }

    if (character[CONSTANT_TRAIT_CHARACTER_TYPE] == TRAIT_VALUE_TYPE_DRAGON_BLOODED) {

        return Math.floor((character[actionPool.ability] + getCharacterSpecialty(character[CONSTANT_TRAIT_SPECIALTY], actionPool.specialty)) / 2);

    }

    return 0;

}


function addCharmBuffsToCharacter(character, charmKey, committedMotes, preferredPool, expiryAction) {

    var i;

    var tempBuff;

    var charm = charmLibrary[charmKey];

    if (charm.buffs) {

        for (i = 0; i < charm.buffs.length; i++) {

            clearBuff(character, charm.buffs[i].type);  //This is going to stomp things it shouldn't, needs to be refactored

            tempBuff = {      //We're cloning the buff.  Technically not necessary yet, but very useful if the buff is alterable (eg a multi-action duration that must be tracked)

                type: charm.buffs[i].type,
                source: charm.buffs[i].source,
                duration: charm.buffs[i].duration,
                magnitude: charm.buffs[i].magnitude,
                expiryAction: expiryAction  //it's OK for this to be undefined

            };

            if (committedMotes && i === 0) {  //Only add commit information to one buff, so you don't multiply the released motes when clearing

                tempBuff.committedMotes = committedMotes;
                tempBuff.preferredPool = preferredPool;

            }

            character[CONSTANT_TRAIT_BUFFS].push(tempBuff);

        }

    }

}


 //####################################### ESSENCE FUNCTIONS ############################################


 //These functions are used to overwrite the existing getPersonalMax() etc for characters of the appropriate type

 function solarPersonalMax() {

     return (this[CONSTANT_TRAIT_ESSENCE] * 3) + this[CONSTANT_TRAIT_WILLPOWER];

 }

 function solarPeripheralMax() {

     return (this[CONSTANT_TRAIT_ESSENCE] * 7) + this[CONSTANT_TRAIT_WILLPOWER] + this[CONSTANT_TRAIT_VALOUR] + this[CONSTANT_TRAIT_CONVICTION] + this[CONSTANT_TRAIT_COMPASSION] + this[CONSTANT_TRAIT_TEMPERANCE];

 }

 function dbPersonalMax() {

     return this[CONSTANT_TRAIT_ESSENCE] + this[CONSTANT_TRAIT_WILLPOWER] + getBackgroundRating(this, CONSTANT_BACKGROUND_KEY_BREEDING);

 }

 
 function dbPeripheralMax() {

     var tempPool = 0;

     var virtueArray = new Array();
        
     var tempBreeding = getBackgroundRating(this, CONSTANT_BACKGROUND_KEY_BREEDING);

     switch (tempBreeding) {

         case 1:

             tempPool += 2;
             break;

         case 2:

             tempPool += 3;
             break;

         case 3:

             tempPool += 5;
             break;

         case 4:

             tempPool += 7;
             break;

         case 5:

             tempPool += 9;
             break;



       }

     tempPool += (this[CONSTANT_TRAIT_ESSENCE] * 4) + this[CONSTANT_TRAIT_WILLPOWER];

     virtueArray.push(this[CONSTANT_TRAIT_VALOUR]);
     virtueArray.push(this[CONSTANT_TRAIT_COMPASSION]);
     virtueArray.push(this[CONSTANT_TRAIT_CONVICTION]);
     virtueArray.push(this[CONSTANT_TRAIT_TEMPERANCE]);

     virtueArray.sort(function (a, b) { return (b - a) });

     tempPool += virtueArray[0];
     tempPool += virtueArray[1];

     return tempPool;

 }



 //####################################### ANIMA FUNCTIONS ############################################

 function activateAnima(character, free) {

    if (!free) {

        //charge motes

    }

    switch (character[CONSTANT_TRAIT_CASTE]) {

        case TRAIT_VALUE_CASTE_DAWN:

            clearBuff(character, CONSTANT_BUFF_DV_BONUS_ANIMA);
            clearBuff(character, CONSTANT_BUFF_EXTERNAL_PENALTY_TO_ATTACKERS);  //This has the potential to overwrite better buffs, as we don't yet have a sophisticated stacking thing, and may never

            character[CONSTANT_TRAIT_BUFFS].push({

                type: CONSTANT_BUFF_DV_BONUS_ANIMA,
                source: "Dawn Caste Anima",
                duration: BUFF_DURATION_SCENE,
                magnitude: 2

            });

            character[CONSTANT_TRAIT_BUFFS].push({

                type: CONSTANT_BUFF_EXTERNAL_PENALTY_TO_ATTACKERS,
                source: "Dawn Caste Anima",
                duration: BUFF_DURATION_SCENE,
                magnitude: 1

            });

            break;


    }

 }


 function addMotesToAnima(motes, character) {

     character[CONSTANT_CHARACTER_PERIPHERAL_MOTES_THIS_SCENE] += parseInt(motes);

     character[CONSTANT_CHARACTER_CURRENT_ANIMA] = getAnimaLevelFromMotes(character[CONSTANT_CHARACTER_PERIPHERAL_MOTES_THIS_SCENE]);

     if (character[CONSTANT_CHARACTER_CURRENT_ANIMA] === ANIMA_LEVEL_11_15 || character[CONSTANT_CHARACTER_CURRENT_ANIMA] === ANIMA_LEVEL_16) {

        activateAnima(character, true);

     }
    
 }

 function getAnimaLevelFromMotes(motes) {

     if (motes > 15) {

         return ANIMA_LEVEL_16;

     }

     if (motes > 10) {

         return ANIMA_LEVEL_11_15;

     }

     if (motes > 7) {

         return ANIMA_LEVEL_8_10;

     }

     if (motes > 3) {

         return ANIMA_LEVEL_4_7;

     }

     if (motes > 0) {

         return ANIMA_LEVEL_1_3;

     }

     return ANIMA_LEVEL_NONE;

 }

 function getLowerAnimaLevel(currentAnima) {

     switch (currentAnima) {

         case ANIMA_LEVEL_16:
             return {

                 level: ANIMA_LEVEL_11_15,
                 motes: 15

             };
             break;

         case ANIMA_LEVEL_11_15:
             return {

                 level: ANIMA_LEVEL_8_10,
                 motes: 10

             };
             break;

         case ANIMA_LEVEL_8_10:
             return {

                 level: ANIMA_LEVEL_4_7,
                 motes: 7

             };
             break;

         case ANIMA_LEVEL_4_7:
             return {

                 level: ANIMA_LEVEL_1_3,
                 motes: 3

             };
             break;

         case ANIMA_LEVEL_1_3:
             return {

                 level: ANIMA_LEVEL_NONE,
                 motes: 0

             };
             break;

     }

     return {

         level: ANIMA_LEVEL_NONE,
         motes: 0

     };

 }


 function getAnimaLabel(character) {



     if (character[CONSTANT_TRAIT_CHARACTER_TYPE] === TRAIT_VALUE_TYPE_SOLAR_EXALTED) {

         switch (character[CONSTANT_CHARACTER_CURRENT_ANIMA]) {

             case ANIMA_LEVEL_1_3:

                 return ANIMA_LABEL_SOLAR_1_3;

                 break;
             
             case ANIMA_LEVEL_4_7:

                 return ANIMA_LABEL_SOLAR_4_7;

                 break;

             case ANIMA_LEVEL_8_10:

                 return ANIMA_LABEL_SOLAR_8_10;

                 break;

             case ANIMA_LEVEL_11_15:

                 return ANIMA_LABEL_SOLAR_11_15;

                 break;

             case ANIMA_LEVEL_16:

                 return ANIMA_LABEL_SOLAR_16;

                 break;

         }

     }


     if (character[CONSTANT_TRAIT_CHARACTER_TYPE] === TRAIT_VALUE_TYPE_DRAGON_BLOODED) {

         switch (character[CONSTANT_CHARACTER_CURRENT_ANIMA]) {

             case ANIMA_LEVEL_1_3:

                 return ANIMA_LABEL_DRAGON_BLOODED_1_3;

                 break;

             case ANIMA_LEVEL_4_7:

                 return ANIMA_LABEL_DRAGON_BLOODED_4_7;

                 break;

             case ANIMA_LEVEL_8_10:

                 return ANIMA_LABEL_DRAGON_BLOODED_8_10;

                 break;

             case ANIMA_LEVEL_11_15:

                 return ANIMA_LABEL_DRAGON_BLOODED_11_15;

                 break;

             case ANIMA_LEVEL_16:

                 return ANIMA_LABEL_DRAGON_BLOODED_16;

                 break;

         }

     }


     return ANIMA_LABEL_NONE;

 }