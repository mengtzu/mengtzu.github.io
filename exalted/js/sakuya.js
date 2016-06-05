//This JS builds Sakuya (in a fairly conventional assigning-values-to-properties kind of way) but also sets off the game itself in its document.ready


//####################################### MAKING SAKUYA ##################################################

var sakuya = {};

function createSakuya() {

    sakuya = initialiseCharacter(sakuya);

    sakuya.key = COMBATANT_KEY_PC;

    sakuya[CONSTANT_TRAIT_CHARACTER_NAME] = "Sakuya Thrice-Elegant";
    sakuya[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] = "Sakuya";
    sakuya[CONSTANT_TRAIT_MOTIVATION] = "Protect the King of Makai";
    sakuya[CONSTANT_TRAIT_CHARACTER_TYPE] = TRAIT_VALUE_TYPE_HEROIC_MORTAL,
    sakuya[CONSTANT_TRAIT_CASTE] = TRAIT_VALUE_CASTE_NA,

    sakuya[CONSTANT_TRAIT_STRENGTH] =  4;    
    sakuya[CONSTANT_TRAIT_DEXTERITY] =  5;
    sakuya[CONSTANT_TRAIT_STAMINA] =  2;

    sakuya[CONSTANT_TRAIT_CHARISMA] =  1;
    sakuya[CONSTANT_TRAIT_MANIPULATION] =  1;
    sakuya[CONSTANT_TRAIT_APPEARANCE] =  5;

    sakuya[CONSTANT_TRAIT_PERCEPTION] =  5;
    sakuya[CONSTANT_TRAIT_INTELLIGENCE] =  2;
    sakuya[CONSTANT_TRAIT_WITS] =  2;

    sakuya[CONSTANT_TRAIT_MELEE] = 5;
    sakuya[CONSTANT_TRAIT_MELEE_FAVOURED] = true;
    sakuya[CONSTANT_TRAIT_WAR] = 1;

    sakuya[CONSTANT_TRAIT_INTEGRITY] = 5;
    sakuya[CONSTANT_TRAIT_RESISTANCE] = 1;

    sakuya[CONSTANT_TRAIT_INVESTIGATION] = 5;
    sakuya[CONSTANT_TRAIT_LORE] = 1;

    sakuya[CONSTANT_TRAIT_ATHLETICS] = 5;
    sakuya[CONSTANT_TRAIT_AWARENESS] = 5;
    sakuya[CONSTANT_TRAIT_DODGE] = 1;

    sakuya[CONSTANT_TRAIT_LINGUISTICS] = 2;

    sakuya[CONSTANT_TRAIT_LANGUAGE_NATIVE] = {

        language: CONSTANT_LANGUAGE_SKYTONGUE,
        description: CONSTANT_LANGUAGE_DESCRIPTION_SKYTONGUE

    };

    sakuya[CONSTANT_TRAIT_LANGUAGES].push({

        language: CONSTANT_LANGUAGE_RIVERSPEAK,
        description: CONSTANT_LANGUAGE_DESCRIPTION_RIVERSPEAK

    });

    sakuya[CONSTANT_TRAIT_LANGUAGES].push({

        language: CONSTANT_LANGUAGE_HIGH_REALM,
        description: CONSTANT_LANGUAGE_DESCRIPTION_HIGH_REALM

    });

    sakuya[CONSTANT_TRAIT_SPECIALTY] = new Array();

    sakuya[CONSTANT_TRAIT_SPECIALTY].push({

        trait: CONSTANT_TRAIT_MELEE,
        specialty: CONSTANT_SPECIALTY_MELEE_SWORDS,
        favoured: true,
        socialCombat: false,
        label: CONSTANT_SPECIALTY_LABEL_MELEE_SWORDS,
        rating: 3

    });

    sakuya[CONSTANT_TRAIT_SPECIALTY].push({

        trait: CONSTANT_TRAIT_INVESTIGATION,
        specialty: CONSTANT_SPECIALTY_INVESTIGATION_PHYSICAL_CLUES,
        favoured: false,
        socialCombat: false,
        label: CONSTANT_SPECIALTY_LABEL_INVESTIGATION_PHYSICAL_CLUES,
        rating: 3

    });

    sakuya[CONSTANT_TRAIT_SPECIALTY].push({

        trait: CONSTANT_TRAIT_ATHLETICS,
        specialty: CONSTANT_SPECIALTY_ATHLETICS_LEAPING,
        favoured: false,
        socialCombat: false,
        label: CONSTANT_SPECIALTY_LABEL_ATHLETICS_LEAPING,
        rating: 2

    });


    sakuya[CONSTANT_TRAIT_BACKGROUND] = new Array();

    sakuya[CONSTANT_TRAIT_BACKGROUND].push({

        key: CONSTANT_BACKGROUND_KEY_INFLUENCE,
        rating: 3,
        characterText: "<p>While Sakuya's positions as King's Champion and First Sword of the Winter Tigers bestow little formal authority, she has made herself a power through her many successes as a duellist and investigator.  Even those who dislike her are usually willing to accept her importance.</p>"

    });

    sakuya[CONSTANT_TRAIT_BACKGROUND].push({

        key: CONSTANT_BACKGROUND_KEY_RESOURCES,
        rating: 3,
        characterText: "<p>The King of Makai ensures his Champion never need worry about money.  She's too generous and fond of wine, women and song to ever be wealthy, however.</p>"

    });

    sakuya[CONSTANT_TRAIT_BACKGROUND].push({

        key: CONSTANT_BACKGROUND_KEY_ALLIES,
        rating: 2,
        characterText: "<p>Sakuya's \"winning\" personality keeps her circle of friends small, but to the king of Makai and the Sifu of the Winter Tiger school she is like a daughter.  A willful, stubborn daughter who can be relied upon to be neck-deep in any trouble that afflicts the kingdom, but a daughter nonetheless.</p>"

    });

    sakuya[CONSTANT_TRAIT_WILLPOWER] = 10;
    sakuya[CONSTANT_TRAIT_WILLPOWER_CURRENT] = 10;

    /*sakuya[CONSTANT_TRAIT_DODGE_DV] = 2;
    sakuya[CONSTANT_TRAIT_DODGE_MDV] = 6;
    sakuya[CONSTANT_TRAIT_PARRY_MDV] = 3;*/

    sakuya[CONSTANT_TRAIT_COMPASSION] = 3;
    sakuya[CONSTANT_TRAIT_COMPASSION_CURRENT] = 3;

    sakuya[CONSTANT_TRAIT_TEMPERANCE] = 1;
    sakuya[CONSTANT_TRAIT_TEMPERANCE_CURRENT] = 1;

    sakuya[CONSTANT_TRAIT_CONVICTION] = 5;
    sakuya[CONSTANT_TRAIT_CONVICTION_CURRENT] = 5;

    sakuya[CONSTANT_TRAIT_VALOUR] = 5;
    sakuya[CONSTANT_TRAIT_VALOUR_CURRENT] = 5;

    sakuya[CONSTANT_TRAIT_ARMOUR] = {

        type: CONSTANT_SOAK_TYPE_ARMOUR,
        label: "Exceptional Reinforced Buff Jacket",
        bashing: 9,
        lethal: 6,
        mobility: -1,
        fatigue: 2,
        hardness: false

    };

    sakuya[CONSTANT_TRAIT_BUFFS].push({

        type: CONSTANT_BUFF_MOBILITY_PENALTY,
        source: "Armour",
        magnitude: 1

    });

    
    sakuya[CONSTANT_TRAIT_WEAPON] = {

        label: "Exceptional Slashing Sword",
        type: CONSTANT_WEAPON_TYPE_SWORD,
        ability: CONSTANT_TRAIT_MELEE,
        specialty: CONSTANT_SPECIALTY_MELEE_SWORDS,
        attackType: CONSTANT_ATTACK_TYPE_MELEE,
        speed: 4,
        accuracy: 2,
        damage: 4,
        damageType: DAMAGE_TYPE_LETHAL,
        defence: 1,
        rate: 3,
        range: "-",
        tags: "-"

    };

    
  /*  sakuya[CONSTANT_TRAIT_EQUIPMENT].push({

        label: "Buckler",
        description: "<p>A small shield, easily wielded but providing only limited protection (+1 DV cover bonus versus hand-to-hand attacks)</p>",
        type: CONSTANT_WEAPON_TYPE_SHIELD,
        meleeBonus: 1,
        rangedBonus: 0,
        mobility: 0        

    }); */

    

/*    sakuya[CONSTANT_TRAIT_BUFFS].push({

        type: CONSTANT_BUFF_SHIELD_BONUS_MELEE,
        source: "Buckler",
        magnitude: 1

    }); */

    sakuya[CONSTANT_TRAIT_HEALTH].push({

        penalty: CONSTANT_TRAIT_HEALTH_DYING,
        filled: false,
        damageType: DAMAGE_TYPE_NONE


    });


    sakuya[CONSTANT_TRAIT_INTIMACIES].push({
    
        label: "Makai",
        description: "Sakuya is a patriot, though strictly speaking her devotion is to the city and not the full territory it controls."

    });

    sakuya[CONSTANT_TRAIT_INTIMACIES].push({

        label: "Winter Tiger School",
        description: "Sakuya has trouble forming close bonds with her comrades, but she does her best to bring glory to them through her deeds."

    });

    sakuya[CONSTANT_TRAIT_INTIMACIES].push({

        label: "The King",
        description: "The King of Makai is something of a father figure to Sakuya, and one of her few trusted friends.  She's saved his life countless times, and in return he ensures she can live carelessly."

    });

    sakuya[CONSTANT_TRAIT_INTIMACIES].push({

        label: "Sifu",
        description: "Sifu is Sakuya's other father figure.  She feels guilty about not being a dutiful First Sword, and hopes her victories will make him proud."

    });

    sakuya[CONSTANT_TRAIT_INTIMACIES].push({

        label: "Ex-wives",
        description: "Sakuya has been married an extraordinary number of times for a woman of her age (or any age really).  She's accepted that the continual disintegration of her relationships is her own fault, and regards each of her former wives fondly."

    });

    sakuya.exalt = function (event) {

        currentPC[CONSTANT_TRAIT_EXALTED] = true;

        currentPC[CONSTANT_TRAIT_MOTIVATION] = "Throw the Wyld Hunt out of the North";
        currentPC[CONSTANT_TRAIT_CHARACTER_TYPE] = TRAIT_VALUE_TYPE_SOLAR_EXALTED;
        currentPC[CONSTANT_TRAIT_CASTE] = TRAIT_VALUE_CASTE_DAWN;

        currentPC[CONSTANT_TRAIT_ARCHERY_FAVOURED] = true;
        currentPC[CONSTANT_TRAIT_MARTIAL_ARTS_FAVOURED] = true;
        currentPC[CONSTANT_TRAIT_MELEE_FAVOURED] = true;
        currentPC[CONSTANT_TRAIT_THROWN_FAVOURED] = true;
        currentPC[CONSTANT_TRAIT_WAR_FAVOURED] = true;

        currentPC[CONSTANT_TRAIT_INTEGRITY_FAVOURED] = true;
        currentPC[CONSTANT_TRAIT_INVESTIGATION_FAVOURED] = true;
        currentPC[CONSTANT_TRAIT_ATHLETICS_FAVOURED] = true;
        currentPC[CONSTANT_TRAIT_AWARENESS_FAVOURED] = true;
        currentPC[CONSTANT_TRAIT_LINGUISTICS_FAVOURED] = true;

        currentPC[CONSTANT_TRAIT_BACKGROUND][0] = {};

        currentPC[CONSTANT_TRAIT_BACKGROUND][1] = {};

        currentPC[CONSTANT_TRAIT_BACKGROUND][2] = {};

        currentPC[CONSTANT_TRAIT_SPECIALTY][1].favoured = true;
        currentPC[CONSTANT_TRAIT_SPECIALTY][2].favoured = true;

        currentPC[CONSTANT_TRAIT_ESSENCE] = 2;
        currentPC.getPersonalMax = solarPersonalMax;
        currentPC.getPeripheralMax = solarPeripheralMax;
        currentPC[CONSTANT_TRAIT_PERSONAL_CURRENT] = currentPC.getPersonalCap();
        currentPC[CONSTANT_TRAIT_PERIPHERAL_CURRENT] = currentPC.getPeripheralCap();

        currentPC[CONSTANT_TRAIT_WILLPOWER_CURRENT] = currentPC[CONSTANT_TRAIT_WILLPOWER];
        currentPC[CONSTANT_TRAIT_COMPASSION_CURRENT] = currentPC[CONSTANT_TRAIT_COMPASSION];
        currentPC[CONSTANT_TRAIT_CONVICTION_CURRENT] = currentPC[CONSTANT_TRAIT_CONVICTION];
        currentPC[CONSTANT_TRAIT_TEMPERANCE_CURRENT] = currentPC[CONSTANT_TRAIT_TEMPERANCE];
        currentPC[CONSTANT_TRAIT_VALOUR_CURRENT] = currentPC[CONSTANT_TRAIT_VALOUR];

        currentPC[CONSTANT_TRAIT_VIRTUE_FLAW] = CONSTANT_TRAIT_VALUE_FOOLHARDY_CONTEMPT;

        currentPC[CONSTANT_TRAIT_CHARMS].push(CHARM_SOLAR_DAWN_ANIMA_POWER);

        currentPC[CONSTANT_TRAIT_CHARMS].push(CHARM_SOLAR_FIRST_MELEE_EXCELLENCY);
        currentPC[CONSTANT_TRAIT_CHARMS].push(CHARM_SOLAR_DIPPING_SWALLOW_DEFENCE);
        currentPC[CONSTANT_TRAIT_CHARMS].push(CHARM_SOLAR_BULWARK_STANCE);
        currentPC[CONSTANT_TRAIT_CHARMS].push(CHARM_SOLAR_PROTECTION_OF_CELESTIAL_BLISS);
        currentPC[CONSTANT_TRAIT_CHARMS].push(CHARM_SOLAR_HEAVENLY_GUARDIAN_DEFENCE);
        currentPC[CONSTANT_TRAIT_CHARMS].push(CHARM_SOLAR_HUNGRY_TIGER_TECHNIQUE);

        currentPC[CONSTANT_TRAIT_CHARMS].push(CHARM_SOLAR_SECOND_INVESTIGATION_EXCELLENCY);
        currentPC[CONSTANT_TRAIT_CHARMS].push(CHARM_SOLAR_CRAFTY_OBSERVATION_METHOD);

        currentPC[CONSTANT_TRAIT_CHARMS].push(CHARM_SOLAR_SURPRISE_ANTICIPATION_METHOD);

        currentPC[CONSTANT_TRAIT_CHARMS].push(CHARM_SOLAR_GRACEFUL_CRANE_STANCE);
        currentPC[CONSTANT_TRAIT_CHARMS].push(CHARM_SOLAR_MONKEY_LEAP_TECHNIQUE);

        fullHeal(currentPC);

        fillCharacterSheetFromCharacter(currentPC);

    };

    fillCharacterSheetFromCharacter(sakuya);

}


//####################################### DOCUMENT.READY ##################################################

//Actually starting the game now

$(document).ready(function () {


    flags[FLAG_GUARD_UNLOCKED] = false;
    flags[FLAG_AIM_UNLOCKED] = false;
    flags[FLAG_FLURRY_UNLOCKED] = false;

    createSakuya();

    currentPC = sakuya;

    $("#attributesHeader").hide();
    $("#attributes").hide();
    $("#abilitiesHeader").hide();
    $("#abilities").hide();
    $("#advantagesHeader").hide();
    $("#advantages").hide();
    $("#exaltedAdvantagesHeader").hide();
    $("#exaltedAdvantages").hide();

    flags[FLAG_ATTRIBUTES_VISIBLE] = false;
    flags[FLAG_ABILITIES_VISIBLE] = false;
    flags[FLAG_ADVANTAGES_1_VISIBLE] = false;
    flags[FLAG_ADVANTAGES_2_VISIBLE] = false;
    flags[FLAG_ADVANTAGES_EXALTED_VISIBLE] = false;

    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_INTRO_0));


});