//################################################  CHARACTER SHEET SHOW/HIDE #####################################################

//These functions work on toggles, so they reassign the click events of the toggles to the opposite function (ie use On() and your toggles get assigned Off())


function characterSheetToggle() {

    $("#characterSheetToggleOn").toggle();
    $("#characterSheetToggleOff").toggle();
    $("#characterSheet").toggle();
}


//################################################  DOTS AND BOXES #####################################################

//The following functions switch the URLs of dot and box images on the character sheet to show full or empty

function setDots(idString, dots, maxValue) {

    for (i = 0; i < maxValue; i++) {

        $("#" + idString + (i + 1)).attr("src", CONSTANT_IMAGE_URL_DOT_EMPTY);

    }

    for (i = 0; i < dots; i++) {

        $("#" + idString + (i + 1)).attr("src", CONSTANT_IMAGE_URL_DOT_FULL);

    }


}


function fillBoxes(idString, boxes, maxValue) {

    for (i = 0; i < maxValue; i++) {

        boxOff(idString + (i + 1));

    }

    for (i = 0; i < boxes; i++) {

        boxOn(idString + (i + 1));

    }


}


function fillDots(idString, dots) {

    setDots(idString, dots, CONSTANT_TRAIT_MAX_RATING);

}

function fillDotsLarge(idString, dots) {

    setDots(idString, dots, CONSTANT_TRAIT_LARGE);

}

function boxOn(idString) {

    $("#" + idString).attr("src", CONSTANT_IMAGE_URL_BOX_FULL);

}

function boxOff(idString) {

    $("#" + idString).attr("src", CONSTANT_IMAGE_URL_BOX_EMPTY);

}


//################################################  MODIFY INDIVIDUAL TRAIT #####################################################


//This was created early, when fakery was assumed in place of a game.  As such it doesn't match the model of the character, and its "trait" is really just a character sheet element model.
//Hence this function, while perfectly serviceable, is rarely used directly; instead it's the instrument of fillCharacterSheetFromCharacter(), which knows how to translate from the model to this view thing.

function modifyCharacterSheetTrait(trait) {

    if (trait.type == CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_TEXT) {

        $("#" + trait.valueElement).html(trait.value);

    }


    if (trait.type == CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_PREFIX) {

        $("#" + trait.valueElement).html(trait.prefix + " " + trait.value);

    }

    if (trait.type == CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS) {

        fillDots(trait.valueElement, trait.value);

    }

    if (trait.type == CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY) {

        fillDots(trait.valueElement, trait.value);

        if (trait.favouredAbility) {

            boxOn(trait.boxId);

        } else {

            boxOff(trait.boxId);

        }

    }

    if (trait.type == CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_SPECIALTY) {

        fillDots(trait.valueElement + trait.index + "_", trait.value);
        
        $("#" + trait.labelId + trait.index).html("" + trait.prefix + trait.index + "\" /> " + trait.label);

        if (trait.favouredAbility) {

            boxOn(trait.boxId + trait.index);

        }

    }


    if (trait.type == CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_BACKGROUND) {

        fillDots(trait.valueElement + trait.index + "_", trait.value);

        $("#" + trait.labelId + trait.index).html(trait.label);

    }

    if (trait.type == CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_WILLPOWER) {

        fillDotsLarge(trait.valueElement, trait.value);
        fillBoxes(trait.currentElement, trait.currentValue, CONSTANT_TRAIT_LARGE);

    }

    if (trait.type == CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_VIRTUE) {

        fillDots(trait.valueElement, trait.value);
        fillBoxes(trait.currentElement, trait.currentValue, CONSTANT_TRAIT_MAX_RATING);

    }

    if (trait.type == CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_SOAK) {

        $("#" + trait.soakTypeElement + trait.soakType).html(trait.soakTypeValue);
        $("#" + trait.bashingElement + trait.soakType).html(trait.bashingValue);
        $("#" + trait.lethalElement + trait.soakType).html(trait.lethalValue);
        $("#" + trait.aggravatedElement + trait.soakType).html(trait.aggravatedValue);
        $("#" + trait.hardnessElement + trait.soakType).html(trait.hardnessValue);
        $("#" + trait.mobilityElement + trait.soakType).html(trait.mobilityValue);
        $("#" + trait.fatigueElement + trait.soakType).html(trait.fatigueValue);

    }

    if (trait.type == CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_WEAPON) {

        $("#" + trait.nameElement + trait.index).html(trait.nameValue);
        $("#" + trait.speedElement + trait.index).html(trait.speedValue);
        $("#" + trait.accuracyElement + trait.index).html(trait.accuracyValue);
        $("#" + trait.damageElement + trait.index).html(trait.damageValue);
        $("#" + trait.parryDVElement + trait.index).html(trait.parryDVValue);
        $("#" + trait.rateElement + trait.index).html(trait.rateValue);
        $("#" + trait.rangeElement + trait.index).html(trait.rangeValue);
        $("#" + trait.tagsElement + trait.index).html(trait.tagsValue);

    }

    if (trait.type == CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ESSENCE_POOL) {

        $("#" + trait.prefix + trait.poolType + trait.totalId + trait.suffix).html(trait.totalValue);
        $("#" + trait.prefix + trait.poolType + trait.committedId + trait.suffix).html(trait.committedValue);
        $("#" + trait.prefix + trait.poolType + trait.capId + trait.suffix).html(trait.capValue);
        $("#" + trait.prefix + trait.poolType + trait.availableId + trait.suffix).html(trait.availableValue);


    }

    if (trait.type == CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_CHARM) {

        $("#" + trait.prefix + trait.index + trait.labelId).html(trait.labelValue);
        $("#" + trait.prefix + trait.index + trait.costId).html(trait.costValue);

    }

    if (trait.type == CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_INTIMACY) {

        $("#" + trait.labelId + trait.index).html(trait.labelValue);

    }


}

//################################################  RESET/FILL CHARACTER SHEET #####################################################

function resetCharacterSheet() {

    //uses modifyCharacterSheetTrait() to manually zero everything.  Not very elegant!

    var i;
    var j;

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_TEXT,
        trait: CONSTANT_TRAIT_CHARACTER_NAME,
        value: "&nbsp;",
        valueElement: CONSTANT_TRAIT_ID_CHARACTER_NAME

    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_PREFIX,
        trait: CONSTANT_TRAIT_MOTIVATION,
        prefix: CONSTANT_TRAIT_LABEL_MOTIVATION,
        value: "&nbsp;",
        valueElement: CONSTANT_TRAIT_ID_MOTIVATION

    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_PREFIX,
        trait: CONSTANT_TRAIT_CHARACTER_TYPE,
        prefix: CONSTANT_TRAIT_LABEL_CHARACTER_TYPE,
        value: "&nbsp;",
        valueElement: CONSTANT_TRAIT_ID_CHARACTER_TYPE

    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_PREFIX,
        trait: CONSTANT_TRAIT_CASTE,
        prefix: CONSTANT_TRAIT_LABEL_CASTE,
        value: "&nbsp;",
        valueElement: CONSTANT_TRAIT_ID_CASTE

    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_STRENGTH,
        value: 1,
        valueElement: CONSTANT_TRAIT_DOT_ID_STRENGTH


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_DEXTERITY,
        value: 1,
        valueElement: CONSTANT_TRAIT_DOT_ID_DEXTERITY


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_STAMINA,
        value: 1,
        valueElement: CONSTANT_TRAIT_DOT_ID_STAMINA


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_CHARISMA,
        value: 1,
        valueElement: CONSTANT_TRAIT_DOT_ID_CHARISMA


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_MANIPULATION,
        value: 1,
        valueElement: CONSTANT_TRAIT_DOT_ID_MANIPULATION


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_APPEARANCE,
        value: 1,
        valueElement: CONSTANT_TRAIT_DOT_ID_APPEARANCE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_PERCEPTION,
        value: 1,
        valueElement: CONSTANT_TRAIT_DOT_ID_PERCEPTION


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_INTELLIGENCE,
        value: 1,
        valueElement: CONSTANT_TRAIT_DOT_ID_INTELLIGENCE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_WITS,
        value: 1,
        valueElement: CONSTANT_TRAIT_DOT_ID_WITS


    });


    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_ARCHERY,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_ARCHERY,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_ARCHERY


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_MARTIAL_ARTS,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_MARTIAL_ARTS,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_MARTIAL_ARTS


    });


    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_MELEE,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_MELEE,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_MELEE


    });


    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_THROWN,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_THROWN,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_THROWN


    });


    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_WAR,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_WAR,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_WAR


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_INTEGRITY,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_INTEGRITY,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_INTEGRITY


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_PERFORMANCE,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_PERFORMANCE,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_PERFORMANCE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_PRESENCE,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_PRESENCE,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_PRESENCE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_RESISTANCE,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_RESISTANCE,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_RESISTANCE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_SURVIVAL,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_SURVIVAL,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_SURVIVAL


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_CRAFT,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_CRAFT,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_CRAFT


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_INVESTIGATION,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_INVESTIGATION,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_INVESTIGATION


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_LORE,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_LORE,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_LORE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_MEDICINE,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_MEDICINE,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_MEDICINE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_OCCULT,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_OCCULT,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_OCCULT


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_ATHLETICS,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_ATHLETICS,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_ATHLETICS


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_AWARENESS,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_AWARENESS,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_AWARENESS


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_DODGE,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_DODGE,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_DODGE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_LARCENY,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_LARCENY,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_LARCENY


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_STEALTH,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_STEALTH,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_STEALTH


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_BUREAUCRACY,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_BUREAUCRACY,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_BUREAUCRACY


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_LINGUISTICS,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_LINGUISTICS,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_LINGUISTICS


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_RIDE,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_RIDE,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_RIDE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_SAIL,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_SAIL,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_SAIL


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_SOCIALISE,
        value: 0,
        valueElement: CONSTANT_TRAIT_DOT_ID_SOCIALISE,
        favouredAbility: false,
        boxId: CONSTANT_TRAIT_BOX_ID_SOCIALISE


    });


    for (j = 1; j < 6; j++) {

        modifyCharacterSheetTrait({

            type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_SPECIALTY,
            label: "&nbsp;",
            index: j,
            value: 0,
            favouredAbility: false,
            valueElement: CONSTANT_TRAIT_DOT_ID_SPECIALTY,
            labelId: CONSTANT_TRAIT_LABEL_ID_SPECIALTY,
            boxId: CONSTANT_TRAIT_BOX_ID_SPECIALTY,
            prefix: CONSTANT_TRAIT_PREFIX_SPECIALTY


        });

    }

    for (j = 1; j < 6; j++) {

        modifyCharacterSheetTrait({

            type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_BACKGROUND,
            label: "&nbsp;",
            index: j,
            value: 0,
            valueElement: CONSTANT_TRAIT_DOT_ID_BACKGROUND,
            labelId: CONSTANT_TRAIT_LABEL_ID_BACKGROUND


        });

        $("#traitWrapperBackground" + i).off("click");

    }

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_WILLPOWER,
        trait: CONSTANT_TRAIT_WILLPOWER,
        value: 5,
        valueElement: CONSTANT_TRAIT_DOT_ID_WILLPOWER,
        currentValue: 0,
        currentElement: CONSTANT_TRAIT_BOX_ID_WILLPOWER


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_PREFIX,
        trait: CONSTANT_TRAIT_DODGE_DV,
        prefix: CONSTANT_TRAIT_LABEL_DODGE_DV,
        value: "",
        valueElement: CONSTANT_TRAIT_ID_DODGE_DV

    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_PREFIX,
        trait: CONSTANT_TRAIT_DODGE_MDV,
        prefix: CONSTANT_TRAIT_LABEL_DODGE_MDV,
        value: "",
        valueElement: CONSTANT_TRAIT_ID_DODGE_MDV

    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_PREFIX,
        trait: CONSTANT_TRAIT_PARRY_MDV,
        prefix: CONSTANT_TRAIT_LABEL_PARRY_MDV,
        value: "",
        valueElement: CONSTANT_TRAIT_ID_PARRY_MDV

    });


    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_VIRTUE,
        trait: CONSTANT_TRAIT_COMPASSION,
        value: 1,
        valueElement: CONSTANT_TRAIT_DOT_ID_COMPASSION,
        currentValue: 0,
        currentElement: CONSTANT_TRAIT_BOX_ID_COMPASSION


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_VIRTUE,
        trait: CONSTANT_TRAIT_TEMPERANCE,
        value: 1,
        valueElement: CONSTANT_TRAIT_DOT_ID_TEMPERANCE,
        currentValue: 0,
        currentElement: CONSTANT_TRAIT_BOX_ID_TEMPERANCE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_VIRTUE,
        trait: CONSTANT_TRAIT_CONVICTION,
        value: 1,
        valueElement: CONSTANT_TRAIT_DOT_ID_CONVICTION,
        currentValue: 0,
        currentElement: CONSTANT_TRAIT_BOX_ID_CONVICTION


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_VIRTUE,
        trait: CONSTANT_TRAIT_VALOUR,
        value: 1,
        valueElement: CONSTANT_TRAIT_DOT_ID_VALOUR,
        currentValue: 0,
        currentElement: CONSTANT_TRAIT_BOX_ID_VALOUR


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_SOAK,
        soakType: CONSTANT_SOAK_TYPE_NATURAL,
        soakTypeValue: CONSTANT_SOAK_TYPE_NATURAL,
        soakTypeElement: CONSTANT_SOAK_ID_TYPE,
        bashingValue: "",
        bashingElement: CONSTANT_SOAK_ID_BASHING,
        lethalValue: "",
        lethalElement: CONSTANT_SOAK_ID_LETHAL,
        aggravatedValue: "",
        aggravatedElement: CONSTANT_SOAK_ID_AGGRAVATED,
        hardnessValue: " - ",
        hardnessElement: CONSTANT_SOAK_ID_HARDNESS,
        mobilityValue: " - ",
        mobilityElement: CONSTANT_SOAK_ID_MOBILITY,
        fatigueValue: " - ",
        fatigueElement: CONSTANT_SOAK_ID_FATIGUE

    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_SOAK,
        soakType: CONSTANT_SOAK_TYPE_ARMOUR,
        soakTypeValue: CONSTANT_SOAK_TYPE_ARMOUR,
        soakTypeElement: CONSTANT_SOAK_ID_TYPE,
        bashingValue: "",
        bashingElement: CONSTANT_SOAK_ID_BASHING,
        lethalValue: "",
        lethalElement: CONSTANT_SOAK_ID_LETHAL,
        aggravatedValue: "",
        aggravatedElement: CONSTANT_SOAK_ID_AGGRAVATED,
        hardnessValue: " - ",
        hardnessElement: CONSTANT_SOAK_ID_HARDNESS,
        mobilityValue: " - ",
        mobilityElement: CONSTANT_SOAK_ID_MOBILITY,
        fatigueValue: " - ",
        fatigueElement: CONSTANT_SOAK_ID_FATIGUE

    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_WEAPON,
        index: 1,
        nameValue: "",
        nameElement: CONSTANT_WEAPON_ID_NAME,
        speedValue: "",
        speedElement: CONSTANT_WEAPON_ID_SPEED,
        accuracyValue: "",
        accuracyElement: CONSTANT_WEAPON_ID_ACCURACY,
        damageValue: "",
        damageElement: CONSTANT_WEAPON_ID_DAMAGE,
        parryDVValue: "",
        parryDVElement: CONSTANT_WEAPON_ID_PARRY_DV,
        rateValue: "",
        rateElement: CONSTANT_WEAPON_ID_RATE,
        rangeValue: "-",
        rangeElement: CONSTANT_WEAPON_ID_RANGE,
        tagsValue: "",
        tagsElement: CONSTANT_WEAPON_ID_TAGS


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_WEAPON,
        index: 2,
        nameValue: "",
        nameElement: CONSTANT_WEAPON_ID_NAME,
        speedValue: "",
        speedElement: CONSTANT_WEAPON_ID_SPEED,
        accuracyValue: "",
        accuracyElement: CONSTANT_WEAPON_ID_ACCURACY,
        damageValue: "",
        damageElement: CONSTANT_WEAPON_ID_DAMAGE,
        parryDVValue: "",
        parryDVElement: CONSTANT_WEAPON_ID_PARRY_DV,
        rateValue: "",
        rateElement: CONSTANT_WEAPON_ID_RATE,
        rangeValue: "-",
        rangeElement: CONSTANT_WEAPON_ID_RANGE,
        tagsValue: "",
        tagsElement: CONSTANT_WEAPON_ID_TAGS


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_WEAPON,
        index: 3,
        nameValue: "",
        nameElement: CONSTANT_WEAPON_ID_NAME,
        speedValue: "",
        speedElement: CONSTANT_WEAPON_ID_SPEED,
        accuracyValue: "",
        accuracyElement: CONSTANT_WEAPON_ID_ACCURACY,
        damageValue: "",
        damageElement: CONSTANT_WEAPON_ID_DAMAGE,
        parryDVValue: "",
        parryDVElement: CONSTANT_WEAPON_ID_PARRY_DV,
        rateValue: "",
        rateElement: CONSTANT_WEAPON_ID_RATE,
        rangeValue: "-",
        rangeElement: CONSTANT_WEAPON_ID_RANGE,
        tagsValue: "",
        tagsElement: CONSTANT_WEAPON_ID_TAGS


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_PREFIX,
        trait: CONSTANT_TRAIT_EQUIPMENT,
        prefix: CONSTANT_TRAIT_LABEL_EQUIPMENT,
        value: "&nbsp;",
        valueElement: CONSTANT_TRAIT_ID_EQUIPMENT

    });

    $("#" + CONSTANT_TRAIT_HEALTH_LEVEL_BOX_WRAPPER_ID_DYING).html("&nbsp;");
    
    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_ESSENCE,
        value: 1,
        valueElement: CONSTANT_TRAIT_DOT_ID_ESSENCE


    });


    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ESSENCE_POOL,
        poolType: CONSTANT_ESSENCE_POOL_TYPE_PERSONAL,
        totalValue: 0,
        totalId: CONSTANT_ESSENCE_POOL_ID_TOTAL,
        committedValue: 0,
        committedId: CONSTANT_ESSENCE_POOL_ID_COMMITTED,
        capValue: 0,
        capId: CONSTANT_ESSENCE_POOL_ID_CAP,
        availableValue: 0,
        availableId: CONSTANT_ESSENCE_POOL_ID_AVAILABLE,
        prefix: CONSTANT_ESSENCE_POOL_ID_PREFIX,
        suffix: CONSTANT_ESSENCE_POOL_ID_SUFFIX


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ESSENCE_POOL,
        poolType: CONSTANT_ESSENCE_POOL_TYPE_PERIPHERAL,
        totalValue: 0,
        totalId: CONSTANT_ESSENCE_POOL_ID_TOTAL,
        committedValue: 0,
        committedId: CONSTANT_ESSENCE_POOL_ID_COMMITTED,
        capValue: 0,
        capId: CONSTANT_ESSENCE_POOL_ID_CAP,
        availableValue: 0,
        availableId: CONSTANT_ESSENCE_POOL_ID_AVAILABLE,
        prefix: CONSTANT_ESSENCE_POOL_ID_PREFIX,
        suffix: CONSTANT_ESSENCE_POOL_ID_SUFFIX


    });


    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_TEXT,
        trait: CONSTANT_TRAIT_VIRTUE_FLAW,
        value: "-",
        valueElement: CONSTANT_TRAIT_VIRTUE_FLAW_ID

    });

    for (j = 1; j < 16; j++) {

        modifyCharacterSheetTrait({

            type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_CHARM,
            index: j,
            labelValue: "&nbsp;",
            labelId: CONSTANT_CHARM_LABEL_ID,
            costValue: "-",
            costId: CONSTANT_CHARM_COST_ID,
            prefix: CONSTANT_CHARM_ID_PREFIX

        });

    }

    for (j = 1; j < 6; j++) {

        modifyCharacterSheetTrait({

            type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_INTIMACY,
            index: j,
            labelValue: "&nbsp;",
            labelId: CONSTANT_INTIMACIES_ID,
            
        });

    }

}



function fillCharacterSheetFromCharacter(character) {

    //This is our mapping of the character model to the character sheet; this function knows how to make the parameter object for modifyCharacterSheetTrait from the character object and the various id-storing constants

    var i;

    var j;

    resetCharacterSheet();

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_TEXT,
        trait: CONSTANT_TRAIT_CHARACTER_NAME,
        value: character[CONSTANT_TRAIT_CHARACTER_NAME],
        valueElement: CONSTANT_TRAIT_ID_CHARACTER_NAME

    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_PREFIX,
        trait: CONSTANT_TRAIT_MOTIVATION,
        prefix: CONSTANT_TRAIT_LABEL_MOTIVATION,
        value: character[CONSTANT_TRAIT_MOTIVATION],
        valueElement: CONSTANT_TRAIT_ID_MOTIVATION

    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_PREFIX,
        trait: CONSTANT_TRAIT_CHARACTER_TYPE,
        prefix: CONSTANT_TRAIT_LABEL_CHARACTER_TYPE,
        value: character[CONSTANT_TRAIT_CHARACTER_TYPE],
        valueElement: CONSTANT_TRAIT_ID_CHARACTER_TYPE

    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_PREFIX,
        trait: CONSTANT_TRAIT_CASTE,
        prefix: CONSTANT_TRAIT_LABEL_CASTE,
        value: character[CONSTANT_TRAIT_CASTE],
        valueElement: CONSTANT_TRAIT_ID_CASTE

    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_STRENGTH,
        value: character[CONSTANT_TRAIT_STRENGTH],
        valueElement: CONSTANT_TRAIT_DOT_ID_STRENGTH


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_DEXTERITY,
        value: character[CONSTANT_TRAIT_DEXTERITY],
        valueElement: CONSTANT_TRAIT_DOT_ID_DEXTERITY


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_STAMINA,
        value: character[CONSTANT_TRAIT_STAMINA],
        valueElement: CONSTANT_TRAIT_DOT_ID_STAMINA


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_CHARISMA,
        value: character[CONSTANT_TRAIT_CHARISMA],
        valueElement: CONSTANT_TRAIT_DOT_ID_CHARISMA


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_MANIPULATION,
        value: character[CONSTANT_TRAIT_MANIPULATION],
        valueElement: CONSTANT_TRAIT_DOT_ID_MANIPULATION


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_APPEARANCE,
        value: character[CONSTANT_TRAIT_APPEARANCE],
        valueElement: CONSTANT_TRAIT_DOT_ID_APPEARANCE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_PERCEPTION,
        value: character[CONSTANT_TRAIT_PERCEPTION],
        valueElement: CONSTANT_TRAIT_DOT_ID_PERCEPTION


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_INTELLIGENCE,
        value: character[CONSTANT_TRAIT_INTELLIGENCE],
        valueElement: CONSTANT_TRAIT_DOT_ID_INTELLIGENCE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_WITS,
        value: character[CONSTANT_TRAIT_WITS],
        valueElement: CONSTANT_TRAIT_DOT_ID_WITS


    });


    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_ARCHERY,
        value: character[CONSTANT_TRAIT_ARCHERY],
        valueElement: CONSTANT_TRAIT_DOT_ID_ARCHERY,
        favouredAbility: character[CONSTANT_TRAIT_ARCHERY_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_ARCHERY


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_MARTIAL_ARTS,
        value: character[CONSTANT_TRAIT_MARTIAL_ARTS],
        valueElement: CONSTANT_TRAIT_DOT_ID_MARTIAL_ARTS,
        favouredAbility: character[CONSTANT_TRAIT_MARTIAL_ARTS_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_MARTIAL_ARTS


    });


    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_MELEE,
        value: character[CONSTANT_TRAIT_MELEE],
        valueElement: CONSTANT_TRAIT_DOT_ID_MELEE,
        favouredAbility: character[CONSTANT_TRAIT_MELEE_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_MELEE


    });


    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_THROWN,
        value: character[CONSTANT_TRAIT_THROWN],
        valueElement: CONSTANT_TRAIT_DOT_ID_THROWN,
        favouredAbility: character[CONSTANT_TRAIT_THROWN_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_THROWN


    });


    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_WAR,
        value: character[CONSTANT_TRAIT_WAR],
        valueElement: CONSTANT_TRAIT_DOT_ID_WAR,
        favouredAbility: character[CONSTANT_TRAIT_WAR_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_WAR


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_INTEGRITY,
        value: character[CONSTANT_TRAIT_INTEGRITY],
        valueElement: CONSTANT_TRAIT_DOT_ID_INTEGRITY,
        favouredAbility: character[CONSTANT_TRAIT_INTEGRITY_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_INTEGRITY


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_PERFORMANCE,
        value: character[CONSTANT_TRAIT_PERFORMANCE],
        valueElement: CONSTANT_TRAIT_DOT_ID_PERFORMANCE,
        favouredAbility: character[CONSTANT_TRAIT_PERFORMANCE_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_PERFORMANCE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_PRESENCE,
        value: character[CONSTANT_TRAIT_PRESENCE],
        valueElement: CONSTANT_TRAIT_DOT_ID_PRESENCE,
        favouredAbility: character[CONSTANT_TRAIT_PRESENCE_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_PRESENCE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_RESISTANCE,
        value: character[CONSTANT_TRAIT_RESISTANCE],
        valueElement: CONSTANT_TRAIT_DOT_ID_RESISTANCE,
        favouredAbility: character[CONSTANT_TRAIT_RESISTANCE_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_RESISTANCE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_SURVIVAL,
        value: character[CONSTANT_TRAIT_SURVIVAL],
        valueElement: CONSTANT_TRAIT_DOT_ID_SURVIVAL,
        favouredAbility: character[CONSTANT_TRAIT_SURVIVAL_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_SURVIVAL


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_CRAFT,
        value: character[CONSTANT_TRAIT_CRAFT],
        valueElement: CONSTANT_TRAIT_DOT_ID_CRAFT,
        favouredAbility: character[CONSTANT_TRAIT_CRAFT_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_CRAFT


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_INVESTIGATION,
        value: character[CONSTANT_TRAIT_INVESTIGATION],
        valueElement: CONSTANT_TRAIT_DOT_ID_INVESTIGATION,
        favouredAbility: character[CONSTANT_TRAIT_INVESTIGATION_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_INVESTIGATION


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_LORE,
        value: character[CONSTANT_TRAIT_LORE],
        valueElement: CONSTANT_TRAIT_DOT_ID_LORE,
        favouredAbility: character[CONSTANT_TRAIT_LORE_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_LORE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_MEDICINE,
        value: character[CONSTANT_TRAIT_MEDICINE],
        valueElement: CONSTANT_TRAIT_DOT_ID_MEDICINE,
        favouredAbility: character[CONSTANT_TRAIT_MEDICINE],
        boxId: CONSTANT_TRAIT_BOX_ID_MEDICINE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_OCCULT,
        value: character[CONSTANT_TRAIT_OCCULT],
        valueElement: CONSTANT_TRAIT_DOT_ID_OCCULT,
        favouredAbility: character[CONSTANT_TRAIT_OCCULT_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_OCCULT


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_ATHLETICS,
        value: character[CONSTANT_TRAIT_ATHLETICS],
        valueElement: CONSTANT_TRAIT_DOT_ID_ATHLETICS,
        favouredAbility: character[CONSTANT_TRAIT_ATHLETICS_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_ATHLETICS


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_AWARENESS,
        value: character[CONSTANT_TRAIT_AWARENESS],
        valueElement: CONSTANT_TRAIT_DOT_ID_AWARENESS,
        favouredAbility: character[CONSTANT_TRAIT_AWARENESS_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_AWARENESS


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_DODGE,
        value: character[CONSTANT_TRAIT_DODGE],
        valueElement: CONSTANT_TRAIT_DOT_ID_DODGE,
        favouredAbility: character[CONSTANT_TRAIT_DODGE_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_DODGE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_LARCENY,
        value: character[CONSTANT_TRAIT_LARCENY],
        valueElement: CONSTANT_TRAIT_DOT_ID_LARCENY,
        favouredAbility: character[CONSTANT_TRAIT_LARCENY_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_LARCENY


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_STEALTH,
        value: character[CONSTANT_TRAIT_STEALTH],
        valueElement: CONSTANT_TRAIT_DOT_ID_STEALTH,
        favouredAbility: character[CONSTANT_TRAIT_STEALTH_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_STEALTH


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_BUREAUCRACY,
        value: character[CONSTANT_TRAIT_BUREAUCRACY],
        valueElement: CONSTANT_TRAIT_DOT_ID_BUREAUCRACY,
        favouredAbility: character[CONSTANT_TRAIT_BUREAUCRACY_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_BUREAUCRACY


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_LINGUISTICS,
        value: character[CONSTANT_TRAIT_LINGUISTICS],
        valueElement: CONSTANT_TRAIT_DOT_ID_LINGUISTICS,
        favouredAbility: character[CONSTANT_TRAIT_LINGUISTICS_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_LINGUISTICS


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_RIDE,
        value: character[CONSTANT_TRAIT_RIDE],
        valueElement: CONSTANT_TRAIT_DOT_ID_RIDE,
        favouredAbility: character[CONSTANT_TRAIT_RIDE_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_RIDE


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_SAIL,
        value: character[CONSTANT_TRAIT_SAIL],
        valueElement: CONSTANT_TRAIT_DOT_ID_SAIL,
        favouredAbility: character[CONSTANT_TRAIT_SAIL_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_SAIL


    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY,
        trait: CONSTANT_TRAIT_SOCIALISE,
        value: character[CONSTANT_TRAIT_SOCIALISE],
        valueElement: CONSTANT_TRAIT_DOT_ID_SOCIALISE,
        favouredAbility: character[CONSTANT_TRAIT_SOCIALISE_FAVOURED],
        boxId: CONSTANT_TRAIT_BOX_ID_SOCIALISE


    });


    for (j = 0; j < character[CONSTANT_TRAIT_SPECIALTY].length; j++) {

        modifyCharacterSheetTrait({

            type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_SPECIALTY,
            label: character[CONSTANT_TRAIT_SPECIALTY][j].label,
            index: j+1,
            value: character[CONSTANT_TRAIT_SPECIALTY][j].rating,
            favouredAbility: character[CONSTANT_TRAIT_SPECIALTY][j].favoured,
            valueElement: CONSTANT_TRAIT_DOT_ID_SPECIALTY,
            labelId: CONSTANT_TRAIT_LABEL_ID_SPECIALTY,
            boxId: CONSTANT_TRAIT_BOX_ID_SPECIALTY,
            prefix: CONSTANT_TRAIT_PREFIX_SPECIALTY


        });

    }


    for (j = 0; j < character[CONSTANT_TRAIT_INTIMACIES].length; j++) {

         modifyCharacterSheetTrait({

            type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_INTIMACY,
            index: j+1,
            labelValue: character[CONSTANT_TRAIT_INTIMACIES][j].label,
            labelId: CONSTANT_INTIMACIES_ID,
            
        });

        registerIntimacyDialogue(j+1, character[CONSTANT_TRAIT_INTIMACIES][j].label, character[CONSTANT_TRAIT_INTIMACIES][j].description)

    }

    var tempBackground = {};

    for (j = 0; j < character[CONSTANT_TRAIT_BACKGROUND].length; j++) {

        tempBackground = getBackgroundByKey(character[CONSTANT_TRAIT_BACKGROUND][j].key, character[CONSTANT_TRAIT_BACKGROUND][j].rating);

        modifyCharacterSheetTrait({

            type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_BACKGROUND,
            label: tempBackground.label,
            index: j+1,
            value: character[CONSTANT_TRAIT_BACKGROUND][j].rating,
            valueElement: CONSTANT_TRAIT_DOT_ID_BACKGROUND,
            labelId: CONSTANT_TRAIT_LABEL_ID_BACKGROUND
            
        });

        registerBackgroundDialogue(j+1, tempBackground.label, tempBackground.description, tempBackground.ratingText, character[CONSTANT_TRAIT_BACKGROUND][j].characterText);

    }


    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_WILLPOWER,
        trait: CONSTANT_TRAIT_WILLPOWER,
        value: character[CONSTANT_TRAIT_WILLPOWER],
        valueElement: CONSTANT_TRAIT_DOT_ID_WILLPOWER,
        currentValue: character[CONSTANT_TRAIT_WILLPOWER_CURRENT],
        currentElement: CONSTANT_TRAIT_BOX_ID_WILLPOWER
        
    });


    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_VIRTUE,
        trait: CONSTANT_TRAIT_COMPASSION,
        value: character[CONSTANT_TRAIT_COMPASSION],
        valueElement: CONSTANT_TRAIT_DOT_ID_COMPASSION,
        currentValue: character[CONSTANT_TRAIT_COMPASSION_CURRENT],
        currentElement: CONSTANT_TRAIT_BOX_ID_COMPASSION
        
    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_VIRTUE,
        trait: CONSTANT_TRAIT_TEMPERANCE,
        value: character[CONSTANT_TRAIT_TEMPERANCE],
        valueElement: CONSTANT_TRAIT_DOT_ID_TEMPERANCE,
        currentValue: character[CONSTANT_TRAIT_TEMPERANCE_CURRENT],
        currentElement: CONSTANT_TRAIT_BOX_ID_TEMPERANCE
        
    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_VIRTUE,
        trait: CONSTANT_TRAIT_CONVICTION,
        value: character[CONSTANT_TRAIT_CONVICTION],
        valueElement: CONSTANT_TRAIT_DOT_ID_CONVICTION,
        currentValue: character[CONSTANT_TRAIT_CONVICTION_CURRENT],
        currentElement: CONSTANT_TRAIT_BOX_ID_CONVICTION
        
    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_VIRTUE,
        trait: CONSTANT_TRAIT_VALOUR,
        value: character[CONSTANT_TRAIT_VALOUR],
        valueElement: CONSTANT_TRAIT_DOT_ID_VALOUR,
        currentValue: character[CONSTANT_TRAIT_VALOUR_CURRENT],
        currentElement: CONSTANT_TRAIT_BOX_ID_VALOUR

    });


    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS,
        trait: CONSTANT_TRAIT_ESSENCE,
        value: character[CONSTANT_TRAIT_ESSENCE],
        valueElement: CONSTANT_TRAIT_DOT_ID_ESSENCE


    });


    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_PREFIX,
        trait: CONSTANT_TRAIT_DODGE_DV,
        prefix: CONSTANT_TRAIT_LABEL_DODGE_DV,
        value: getDodgeDV(character),
        valueElement: CONSTANT_TRAIT_ID_DODGE_DV

    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_PREFIX,
        trait: CONSTANT_TRAIT_DODGE_MDV,
        prefix: CONSTANT_TRAIT_LABEL_DODGE_MDV,
        value: getDodgeMDV(character),
        valueElement: CONSTANT_TRAIT_ID_DODGE_MDV

    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_PREFIX,
        trait: CONSTANT_TRAIT_PARRY_MDV,
        prefix: CONSTANT_TRAIT_LABEL_PARRY_MDV,
        value: getParryMDV(character),
        valueElement: CONSTANT_TRAIT_ID_PARRY_MDV

    });


    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_SOAK,
        soakType: CONSTANT_SOAK_TYPE_NATURAL,
        soakTypeValue: CONSTANT_SOAK_TYPE_NATURAL,
        soakTypeElement: CONSTANT_SOAK_ID_TYPE,
        bashingValue: getNaturalBashingSoak(character),
        bashingElement: CONSTANT_SOAK_ID_BASHING,
        lethalValue: getNaturalLethalSoak(character),
        lethalElement: CONSTANT_SOAK_ID_LETHAL,
        aggravatedValue: getNaturalAggravatedSoak(character),
        aggravatedElement: CONSTANT_SOAK_ID_AGGRAVATED,
        hardnessValue: " - ",
        hardnessElement: CONSTANT_SOAK_ID_HARDNESS,
        mobilityValue: " - ",
        mobilityElement: CONSTANT_SOAK_ID_MOBILITY,
        fatigueValue: " - ",
        fatigueElement: CONSTANT_SOAK_ID_FATIGUE

    });

    var tempHardness = " - ";

    if (character[CONSTANT_TRAIT_ARMOUR].hardness) {

        tempHardness = character[CONSTANT_TRAIT_ARMOUR].hardnessBashing + "B/" + character[CONSTANT_TRAIT_ARMOUR].hardnessLethal + "L";

    }

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_SOAK,
        soakType: CONSTANT_SOAK_TYPE_ARMOUR,
        soakTypeValue: character[CONSTANT_TRAIT_ARMOUR].label,
        soakTypeElement: CONSTANT_SOAK_ID_TYPE,
        bashingValue: getArmouredBashingSoak(character),
        bashingElement: CONSTANT_SOAK_ID_BASHING,
        lethalValue: getArmouredLethalSoak(character),
        lethalElement: CONSTANT_SOAK_ID_LETHAL,
        aggravatedValue: getArmouredAggravatedSoak(character),
        aggravatedElement: CONSTANT_SOAK_ID_AGGRAVATED,
        hardnessValue: tempHardness,
        hardnessElement: CONSTANT_SOAK_ID_HARDNESS,
        mobilityValue: character[CONSTANT_TRAIT_ARMOUR].mobility,
        mobilityElement: CONSTANT_SOAK_ID_MOBILITY,
        fatigueValue: character[CONSTANT_TRAIT_ARMOUR].fatigue,
        fatigueElement: CONSTANT_SOAK_ID_FATIGUE

    });

    modifyCharacterSheetTrait({

        type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_WEAPON,
        index: 1,
        nameValue: character[CONSTANT_TRAIT_WEAPON].label,
        nameElement: CONSTANT_WEAPON_ID_NAME,
        speedValue: character[CONSTANT_TRAIT_WEAPON].speed,
        speedElement: CONSTANT_WEAPON_ID_SPEED,
        accuracyValue: getEquippedAccuracy(character),
        accuracyElement: CONSTANT_WEAPON_ID_ACCURACY,
        damageValue: getEquippedBaseDamage(character) + character[CONSTANT_TRAIT_WEAPON].damageType,
        damageElement: CONSTANT_WEAPON_ID_DAMAGE,
        parryDVValue: getEquippedParryDV(character),
        parryDVElement: CONSTANT_WEAPON_ID_PARRY_DV,
        rateValue: character[CONSTANT_TRAIT_WEAPON].rate,
        rateElement: CONSTANT_WEAPON_ID_RATE,
        rangeValue: "-",
        rangeElement: CONSTANT_WEAPON_ID_RANGE,
        tagsValue: character[CONSTANT_TRAIT_WEAPON].tags,
        tagsElement: CONSTANT_WEAPON_ID_TAGS


    });


    if (character[CONSTANT_TRAIT_EQUIPMENT].length > 0) {

        var tempEquipmentText = "";

        for (j = 0; j < character[CONSTANT_TRAIT_EQUIPMENT].length; j++) {

            if (j != 0) {

                tempEquipmentText += ", ";

            }

            tempEquipmentText += "<span id=\"otherEquipment" + j + "\">" + character[CONSTANT_TRAIT_EQUIPMENT][j].label + "</span>";

        }

        modifyCharacterSheetTrait({

            type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_PREFIX,
            trait: CONSTANT_TRAIT_EQUIPMENT,
            prefix: CONSTANT_TRAIT_LABEL_EQUIPMENT,
            value: tempEquipmentText,
            valueElement: CONSTANT_TRAIT_ID_EQUIPMENT

        });

        for (j = 0; j < character[CONSTANT_TRAIT_EQUIPMENT].length; j++) {

            registerOtherEquipment("otherEquipment" + j, character[CONSTANT_TRAIT_EQUIPMENT][j].label, character[CONSTANT_TRAIT_EQUIPMENT][j].description);

        }

    }

    $("#" + CONSTANT_TRAIT_HEALTH_LEVEL_BOX_WRAPPER_ID_0).html(getHealthLevelsCharacterSheetString(character, 0, CONSTANT_TRAIT_HEALTH_LEVEL_BOX_ID_0));
    $("#" + CONSTANT_TRAIT_HEALTH_LEVEL_BOX_WRAPPER_ID_1).html(getHealthLevelsCharacterSheetString(character, -1, CONSTANT_TRAIT_HEALTH_LEVEL_BOX_ID_1));
    $("#" + CONSTANT_TRAIT_HEALTH_LEVEL_BOX_WRAPPER_ID_2).html(getHealthLevelsCharacterSheetString(character, -2, CONSTANT_TRAIT_HEALTH_LEVEL_BOX_ID_2));
    $("#" + CONSTANT_TRAIT_HEALTH_LEVEL_BOX_WRAPPER_ID_4).html(getHealthLevelsCharacterSheetString(character, -4, CONSTANT_TRAIT_HEALTH_LEVEL_BOX_ID_4));
    $("#" + CONSTANT_TRAIT_HEALTH_LEVEL_BOX_WRAPPER_ID_INCAPACITATED).html(getHealthLevelsCharacterSheetString(character, CONSTANT_TRAIT_HEALTH_INCAPACITATED, CONSTANT_TRAIT_HEALTH_LEVEL_BOX_ID_INCAPACITATED));
    $("#" + CONSTANT_TRAIT_HEALTH_LEVEL_BOX_WRAPPER_ID_DYING).html(getHealthLevelsCharacterSheetString(character, CONSTANT_TRAIT_HEALTH_DYING, CONSTANT_TRAIT_HEALTH_LEVEL_BOX_ID_DYING));


    if (character[CONSTANT_TRAIT_EXALTED]) {

        modifyCharacterSheetTrait({

            type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_TEXT,
            trait: CONSTANT_TRAIT_VIRTUE_FLAW,
            value: character[CONSTANT_TRAIT_VIRTUE_FLAW],
            valueElement: CONSTANT_TRAIT_VIRTUE_FLAW_ID

        });


        modifyCharacterSheetTrait({

            type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ESSENCE_POOL,
            poolType: CONSTANT_ESSENCE_POOL_TYPE_PERSONAL,
            totalValue: character.getPersonalMax(),
            totalId: CONSTANT_ESSENCE_POOL_ID_TOTAL,
            committedValue: character[CONSTANT_TRAIT_COMMITTED_PERSONAL],
            committedId: CONSTANT_ESSENCE_POOL_ID_COMMITTED,
            capValue: character.getPersonalCap(),
            capId: CONSTANT_ESSENCE_POOL_ID_CAP,
            availableValue: character[CONSTANT_TRAIT_PERSONAL_CURRENT],
            availableId: CONSTANT_ESSENCE_POOL_ID_AVAILABLE,
            prefix: CONSTANT_ESSENCE_POOL_ID_PREFIX,
            suffix: CONSTANT_ESSENCE_POOL_ID_SUFFIX


        });

        modifyCharacterSheetTrait({

            type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ESSENCE_POOL,
            poolType: CONSTANT_ESSENCE_POOL_TYPE_PERIPHERAL,
            totalValue: character.getPeripheralMax(),
            totalId: CONSTANT_ESSENCE_POOL_ID_TOTAL,
            committedValue: character[CONSTANT_TRAIT_COMMITTED_PERIPHERAL],
            committedId: CONSTANT_ESSENCE_POOL_ID_COMMITTED,
            capValue: character.getPeripheralCap(),
            capId: CONSTANT_ESSENCE_POOL_ID_CAP,
            availableValue: character[CONSTANT_TRAIT_PERIPHERAL_CURRENT],
            availableId: CONSTANT_ESSENCE_POOL_ID_AVAILABLE,
            prefix: CONSTANT_ESSENCE_POOL_ID_PREFIX,
            suffix: CONSTANT_ESSENCE_POOL_ID_SUFFIX


        });


        for (i = 0; i < character[CONSTANT_TRAIT_CHARMS].length; i++) {

             modifyCharacterSheetTrait({

                type: CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_CHARM,
                index: i+1,
                labelValue: charmLibrary[character[CONSTANT_TRAIT_CHARMS][i]].label,
                labelId: CONSTANT_CHARM_LABEL_ID,
                costValue: charmLibrary[character[CONSTANT_TRAIT_CHARMS][i]].costLabel,
                costId: CONSTANT_CHARM_COST_ID,
                prefix: CONSTANT_CHARM_ID_PREFIX

            });


        }

    }


    hookUpCharacterSheet();

}

//######################################## HOOK UP CHARACTER SHEET #########################################


function hookUpCharacterSheet() {

    //Pretty much everything on the sheet needs a click event to invoke a dialogue with an explanation of it.
    //Note a lot of description text is hardcoded here - the function "knows" more about Exalted than it should.  Most of these should be string constants somewhere (which could be overridden for translations)

    //Having a better model for the character sheet might allow this to be a relatively short iterative function rather than a horror of repetition.

    var i;

    var tempFunction;

    //Top of Sheet

    $("#characterSheetMotivation").css("cursor", "pointer");

    $("#characterSheetMotivation").click(function (event) {

        $traitDialogue.html("<p>Motivation is the character's primary goal, the cause providing them with the drive to be the sort of person who makes an interesting character in an <em>Exalted</em> game.</p>");

        if (currentPC[CONSTANT_TRAIT_CHARACTER_TYPE] == TRAIT_VALUE_TYPE_HEROIC_MORTAL) {

            $traitDialogue.append("<p>Heroic Mortals have correspondingly heroic motivations, usually on the scale of a city or nation.</p>");

        }

        if (currentPC[CONSTANT_TRAIT_CHARACTER_TYPE] == TRAIT_VALUE_TYPE_SOLAR_EXALTED) {

            $traitDialogue.append("<p>Solar Exalted have epic motivations, usually beginning at the scale of a nation and broadening as they achieve ever-greater feats.</p>");

        }

        $traitDialogue.dialog({

            title: "Motivation"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#characterSheetType").css("cursor", "pointer");

    $("#characterSheetType").click(function (event) {

        if (currentPC[CONSTANT_TRAIT_CHARACTER_TYPE] == TRAIT_VALUE_TYPE_HEROIC_MORTAL) {

            $traitDialogue.html("<p>Talent, destiny or supreme effort has set a Heroic Mortal apart from their fellows.  They are the peak of human excellence, with the ability and drive to shape the fate of a nation.  It is from this rare stock that the Celestial Exalted are chosen.</p><p><em>Exalted</em> uses \"Hero\" in a classical sense: excellence and the quality of being larger than life.  The most virtuous are certainly heroes, but not all heroes are virtuous.</p><p>Heroic Mortals may stunt, gain a bonus success on any die that rolls 0, and may have Attributes as high as 5.</p>");

        }

        if (currentPC[CONSTANT_TRAIT_CHARACTER_TYPE] == TRAIT_VALUE_TYPE_SOLAR_EXALTED) {

            $traitDialogue.html("<p>As the Chosen of the Unconquered Sun, greatest of the Gods, the Solar Exalted are likewise the mightiest of the Exalted.  They are heroes without peer, but they have returned to a world taught to despise them, harried by the Wyld Hunts of the Dragon Blooded.  They are also known as Lawgivers, reflecting their authority in the First Age.</p>");

        }

        $traitDialogue.dialog({

            title: currentPC[CONSTANT_TRAIT_CHARACTER_TYPE]

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#characterSheetCaste").css("cursor", "pointer");

    $("#characterSheetCaste").click(function (event) {

        $traitDialogue.html("<p>Each type of Celestial Exalted is further divided into Castes, reflecting the role or duties to which that Chosen is called.</p>");

        if (currentPC[CONSTANT_TRAIT_CASTE] == TRAIT_VALUE_CASTE_NA) {

            $traitDialogue.append("<p>Heroic Mortals do not have a Caste.</p>");

        }

        if (currentPC[CONSTANT_TRAIT_CASTE] == TRAIT_VALUE_CASTE_DAWN) {

            $traitDialogue.append("<p>The Dawn Caste are the foremost generals and warrior-champions of the Exalted, talented with every aspect of battle.  They are terrifying foes, whom even the strongest hesitate to strike.</p>");

        }

        $traitDialogue.dialog({

            title: "Caste"

        });

        $traitDialogue.dialog("open");

        return false;


    });


    //Attributes

    $("#attributesHeader").css("cursor", "pointer");

    $("#attributesHeader").click(function (event) {

        $traitDialogue.html("<p>Attributes represent a character's innate capabilities and talents.  While they can be improved after character creation, it is relatively expensive to do so.</p><p>Most dice rolls in <em>Exalted</em> use one Attribute and one Ability.</p>");

        $traitDialogue.dialog({

            title: "Attributes"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#traitWrapperStrength").css("cursor", "pointer");

    $("#traitWrapperStrength").click(function (event) {

        $traitDialogue.html("<p>Strength represents raw physical prowess.  It contributes to damage dealt unarmed and with most weapons, leaping, lifting and carrying.</p>");

        switch (currentPC[CONSTANT_TRAIT_STRENGTH]) {

            case 1:

                $traitDialogue.append("<p>A character with Strength 1 is weaker than an average person.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Strength 2 has average physical prowess.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Strength 3 is stronger than the average person, and can easily wield a greatsword.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Strength 4 is significantly stronger than the average person.  Huge weapons like sledges pose no difficulties to such a powerhouse.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Strength 5 is as strong as humanly possible.  They can be expected to bend iron bars and lift horses.</p>");

                break;


        }

        $traitDialogue.dialog({

            title: "Strength"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperDexterity").css("cursor", "pointer");

    $("#traitWrapperDexterity").click(function (event) {

        $traitDialogue.html("<p>Dexterity represents agility, swiftness and coordination.  It is the most important Attribute in combat, contributing to both attack and defence.  It also contributes to running speed, stealth and any other situation where grace and speed are called for.</p>");

        switch (currentPC[CONSTANT_TRAIT_DEXTERITY]) {

            case 1:

                $traitDialogue.append("<p>A character with Dexterity 1 is clumsier and slower than an average person.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Dexterity 2 has average grace and speed.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Dexterity 3 is faster and more agile than the average human.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Dexterity 4 is significantly faster and more agile than the average person.  Only the best martial artists or dancers could boast of such grace.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Dexterity 5 is as swift and graceful as humanly possible.  Such a character has the potential to be an incomparable dancer, thief or swordmaster.</p>");

                break;


        }

        $traitDialogue.dialog({

            title: "Dexterity"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperStamina").css("cursor", "pointer");

    $("#traitWrapperStamina").click(function (event) {

        $traitDialogue.html("<p>Stamina represents toughness, endurance and health.  It contributes to soak, activities requiring sustained exertion and resistance to poisons and diseases.  It is extremely important in combat for mortals (who can easily die from bleeding or infection), less so for the Exalted.</p>");

        switch (currentPC[CONSTANT_TRAIT_STAMINA]) {

            case 1:

                $traitDialogue.append("<p>A character with Stamina 1 is relatively frail and likely often sick.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Stamina 2 has average health.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Stamina 3 is hardier than the average human.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Stamina 4 is significantly tougher than the average person.  Whether in a fistfight or marathon, this person is very difficult to stop.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Stamina 5 is as hardy as humanly possible.  Even in the hard world of <em>Exalted</em>, such a character will have a long and healthy life.</p>");

                break;


        }

        $traitDialogue.dialog({

            title: "Stamina"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperCharisma").css("cursor", "pointer");

    $("#traitWrapperCharisma").click(function (event) {

        $traitDialogue.html("<p>Charisma represents how inately likeable the character is, usually in the form of instinctive social grace and magnetism.  It's useful in social combat.</p>");

        switch (currentPC[CONSTANT_TRAIT_CHARISMA]) {

            case 1:

                $traitDialogue.append("<p>A character with Charisma 1 is less appealing than average, due to quirks, disposition or some subtle cue that puts people off.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Charisma 2 has average likeability.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Charisma 3 attracts friends and allies more easily than the average person.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Charisma 4 is significantly more appealing than the average person.  They have a talent suitable for exceptional success in trade, religion or politics.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Charimsa 5 is as magnetic as humanly possible.  They have the potential to turn their enemies into zealous followers.</p>");

                break;


        }

        $traitDialogue.dialog({

            title: "Charisma"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperManipulation").css("cursor", "pointer");

    $("#traitWrapperManipulation").click(function (event) {

        $traitDialogue.html("<p>Manipulation represents the innate capacity to get your way in social situations via coercion, trickery or intimidation.  It's useful in social combat.</p>");

        switch (currentPC[CONSTANT_TRAIT_MANIPULATION]) {

            case 1:

                $traitDialogue.append("<p>A character with Manipulation 1, whether by inclination or lack of talent, is unsuited for deception.  They would be advised to make a virtue of honesty, having little hope of lying successfully.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Manipulation 2 has average talent for deception.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Manipulation 3 can easily trick the average person.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Manipulation 4 has a remarkable talent for deceit, suitable for exceptional success in trade, religion or politics.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Manipulation 5 has the greatest possible human talent for coercion and trickery.  They can expect to turn almost any situaiton to their advantage.</p>");

                break;


        }

        $traitDialogue.dialog({

            title: "Manipulation"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperAppearance").css("cursor", "pointer");

    $("#traitWrapperAppearance").click(function (event) {

        $traitDialogue.html("<p>Appearance represents innate physical attractiveness, both in terms of raw beauty and bearing.  It's rarely used as part of a dice pool, but is the most powerful Attribute in social combat.</p>");

        switch (currentPC[CONSTANT_TRAIT_APPEARANCE]) {

            case 1:

                $traitDialogue.append("<p>A character with Appearance 1 is less attractive than normal, pleasing few eyes.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Appearance 2 is of average attractiveness.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Appearance 3 is of above-average attractiveness and turns many heads when walking down the street.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Appearance 4 is a remarkable beauty, an object of desire and envy regardless of their other virtues.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Appearance 5 is as beautiful as a human can possibly be, of note even to the most jaded god or fae.  Such a character has not only perfect looks but an effortlessly regal bearing; they inspire awe wherever they go.</p>");

                break;


        }

        $traitDialogue.dialog({

            title: "Appearance"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperPerception").css("cursor", "pointer");

    $("#traitWrapperPerception").click(function (event) {

        $traitDialogue.html("<p>Perception represents alertness and comprehension of the world around the character.  It contributes to noticing details, finding the hidden and detecting ambushes.</p>");

        switch (currentPC[CONSTANT_TRAIT_PERCEPTION]) {

            case 1:

                $traitDialogue.append("<p>A character with Perception 1 is less attentive than normal, possibly due to perpetual obtuseness, preoccupation or distraction.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Perception 2 is of average alertness.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Perception 3 is above-average, missing few details and having little to fear from pickpockets.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Perception 4 is exceptionally alert and difficult to mislead.  This talent would make for a truly great magistrate or hunter.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Perception 5 is at the human limit of alertness and attentiveness.  Only by supernatural power are they likely to be decieved.</p>");

                break;


        }

        $traitDialogue.dialog({

            title: "Perception"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperIntelligence").css("cursor", "pointer");

    $("#traitWrapperIntelligence").click(function (event) {

        $traitDialogue.html("<p>Intelligence represents the character's powers of considered thought - reasoning, comprehension, memory and creativity when given time to think.  It's generally not useful for mental tasks during action scenes, but can be relied upon at all other times.</p>");

        switch (currentPC[CONSTANT_TRAIT_INTELLIGENCE]) {

            case 1:

                $traitDialogue.append("<p>A character with Intelligence 1 is duller than average, due to stupidity or inability to devote time to considered thought.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Intelligence 2 is of average brightness.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Intelligence 3 is above-average, suitable for scholastic or stategic work.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Intelligence 4 is exceptionally gifted.  They have the capacity to be a leading intellectual, engineer, general or sorcerer in their nation.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Intelligence 5 is at the human limit of genius.  They have the talent to be a world leader in any intellectual field.</p>");

                break;


        }

        $traitDialogue.dialog({

            title: "Intelligence"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperWits").css("cursor", "pointer");

    $("#traitWrapperWits").click(function (event) {

        $traitDialogue.html("<p>Wits represents the character's powers of rapid thought - their capability to react to sudden changes, on-the-spot creativity and general mental agility.  It's useful for mental tasks in action scenes and contributes to how soon you can act once combat begins.</p>");

        switch (currentPC[CONSTANT_TRAIT_INTELLIGENCE]) {

            case 1:

                $traitDialogue.append("<p>A character with Wits 1 is slow and easily caught off guard.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Wits 2 is of average mental agility.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Wits 3 is of above-average cleverness and composure.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Wits 4 is an exceptional improvisor, giving the impression of being thouroughly prepared for any eventuallity.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Wits 5 is at the human limit of cleverness.  They have the talent to be a world-class tactician, debater or tomb-raider.</p>");

                break;


        }

        $traitDialogue.dialog({

            title: "Wits"

        });

        $traitDialogue.dialog("open");

        return false;

    });



    //Abilities

    $("#abilitiesHeader").css("cursor", "pointer");

    $("#abilitiesHeader").click(function (event) {

        $traitDialogue.html("<p>Abilities represent a character's trained skills and experience.</p><p>Most dice rolls in <em>Exalted</em> use one Attribute and one Ability.</p>");

        $traitDialogue.dialog({

            title: "Abilities"

        });

        $traitDialogue.dialog("open");

        return false;


    });


    $("#dawnAbilityGroupLabel").css("cursor", "pointer");

    $("#dawnAbilityGroupLabel").click(function (event) {

        $traitDialogue.html("<p>The Dawn caste of the Solar Exalted are innately gifted with all things martial; the Archery, Martial Arts, Melee, Thrown and War abilities fall under their domain.</p>");
        $traitDialogue.append(CONSTANT_TRAIT_VALUE_ABILITY_GROUP);

        $traitDialogue.dialog({

            title: "Dawn Abilities"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperArchery").css("cursor", "pointer");

    $("#traitWrapperArchery").click(function (event) {

        $traitDialogue.html("<p>The Archery Ability represents the character's skill with bows of all kinds.</p>");

        switch (currentPC[CONSTANT_TRAIT_ARCHERY]) {

            case 0:

                if (!(currentPC[CONSTANT_TRAIT_EXALTED])) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Archery 1 has some training or experience with a bow, probably from practice against stationary targets.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Archery 2 has the skill to be a professional archer.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Archery 3 is of above-average skill, and could expect to pull off trick-shots.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Archery 4 is exceptionally skilled, and is likely to win any tournament they enter.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Archery 5 is as skilled as any human can be with a bow.  They can attempt trick shots under even the most difficult circumstances, and no enemy likes to be in bow-shot of them.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_ARCHERY_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Archery"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperMartialArts").css("cursor", "pointer");

    $("#traitWrapperMartialArts").click(function (event) {

        $traitDialogue.html("<p>The Martial Arts Ability represents the character's skill at unarmed combat (and with certain special martial arts weapons).  This includes everything from tavern brawling to ancient formal schools.</p>");

        switch (currentPC[CONSTANT_TRAIT_MARTIAL_ARTS]) {

            case 0:

                if (!(currentPC[CONSTANT_TRAIT_EXALTED])) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Martial Arts 1 has some training or experience, whether it's satisfying formal instructors or frequently holding their own in drunken fist-fights.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Martial Arts 2 has the skill to be a professional pugilist.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Martial Arts 3 is of above-average skill, and would make a good instructor for others.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Martial Arts 4 is exceptionally skilled, capable of founding an enduring martial arts school or becoming a local legend as a pugilist.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Martial Arts 5 is as skilled as any human can be with fists and feet.  They can easily face multiple foes and inspire legions of imitators.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_MARTIAL_ARTS_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Martial Arts"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperMelee").css("cursor", "pointer");

    $("#traitWrapperMelee").click(function (event) {

        $traitDialogue.html("<p>The Melee Ability represents the character's skill at using hand-to-hand weapons.</p>");

        switch (currentPC[CONSTANT_TRAIT_MELEE]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Melee 1 has some training or experience with weapons, but probably needs an advantage to win a fight.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Melee 2 has the skill to be a professional soldier or warrior.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Melee 3 is of above-average skill, and could expect to beat the average soldier.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Melee 4 is exceptionally skilled, and is likely widely feared as a duellist.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Melee 5 is as skilled as any human can be with weapons.  They have dozens of personal techniques that represent permanent innovations to the art.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_MELEE_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Melee"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperThrown").css("cursor", "pointer");

    $("#traitWrapperThrown").click(function (event) {

        $traitDialogue.html("<p>The Thrown Ability represents the character's skill with thrown missile weapons, whether specialised for that purpose or improvised.</p>");

        switch (currentPC[CONSTANT_TRAIT_THROWN]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Thrown 1 has some training or experience with throwing weapons, probably practice against stationary targets.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Thrown 2 has the skill to be a professional javelineer.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Thrown 3 is of above-average skill, and can attempt trick shots with confidence.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Thrown 4 is exceptionally skilled, and is likely famed for particularly impressive deeds with a thrown dagger or chakram.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Thrown 5 is as skilled as any human can be with thrown weapons.  No enemy feels safe within their throwing distance - and that is long indeed.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_THROWN_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Thrown"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperWar").css("cursor", "pointer");

    $("#traitWrapperWar").click(function (event) {

        $traitDialogue.html("<p>The War Ability represents the character's skill at operating in the context of armies and mass combat.  It covers tactics, strategy, general militariy familiarity and the ability to fight effectively on a battlefield.</p><p>The War Ability caps all other abilities during mass combat - for example if attacking with a sword, you would roll the lower of your Melee and War.</p>");

        switch (currentPC[CONSTANT_TRAIT_WAR]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with War 1 has training or experience on the level of a civilian militia member.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with War 2 has the skill to be a professional soldier.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with War 3 is of above-average skill, and would make an excellent officer.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with War 4 is exceptionally skilled, and if they are not a general their gifts are being wasted.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with War 5 is as skilled as any human can be at the art of war.  Given an army to command they are capable of deeds that will be remembered for millenia.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_WAR_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "War"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#zenithAbilityGroupLabel").css("cursor", "pointer");

    $("#zenithAbilityGroupLabel").click(function (event) {

        $traitDialogue.html("<p>The Zenith caste of the Solar Exalted are the stuff of priest-kings, gifted in leardership and endurance both physical and mental; the Integrity, Performance, Presence, Resistance and Survival abilities fall under their domain.</p>");
        $traitDialogue.append(CONSTANT_TRAIT_VALUE_ABILITY_GROUP);

        $traitDialogue.dialog({

            title: "Zenith Abilities"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperIntegrity").css("cursor", "pointer");

    $("#traitWrapperIntegrity").click(function (event) {

        $traitDialogue.html("<p>The Integrity Ability represents a cultivated capacity to resist the will of others.  It provides resistance to persuasion, supernatural mental control or any other attempt to influence the character's thoughts.  It is important in social combat.</p>");

        switch (currentPC[CONSTANT_TRAIT_INTEGRITY]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Integrity 1 is rarely taken in by merchants.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Integrity 2 has the fortitude work professionally in trade or politics.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Integrity 3 is of above-average resistance to compulsion, and can expect to resist torture or thaumaturgy.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Integrity 4 is exceptionally conditioned against influence, and has little to fear from courtly intrigue.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Integrity 5 is as staunch as any human can be against persuasion or coercion.  Only the supernatural powers of the Exalted or Fae are likely to sway their legendary resolve.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_INTEGRITY_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Integrity"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperPerformance").css("cursor", "pointer");

    $("#traitWrapperPerformance").click(function (event) {

        $traitDialogue.html("<p>The Performance Ability represents both oratory and live artistic expression (eg music, dance, acting).  It is used to make area attacks in social combat.</p>");

        switch (currentPC[CONSTANT_TRAIT_PERFORMANCE]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Performance 1 is accustomed to performing before crowds.  Their work is good, if not professional quality.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Performance 2 has the skill to work professionally as an orator, musician or artist.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Performance 3 is of above-average skill, and can expect to excel at politics or religion on the strength of their oratory alone, or attract some fame as an artist.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Performance 4 is exceptionally skilled, and almost certainly nationally famous.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Performance 5 is as at the human limit of ability in oratory and the performing arts.  They can expect to move nations with their speeches, or the hearts of gods with their songs.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_PERFORMANCE_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Performance"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperPresence").css("cursor", "pointer");

    $("#traitWrapperPresence").click(function (event) {

        $traitDialogue.html("<p>The Presence Ability represents leadership and the persuasion, charm and intimidation of individuals.  It is used to make single-target attacks in social combat.</p>");

        switch (currentPC[CONSTANT_TRAIT_PRESENCE]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Presence 1 is accustomed to providing leadership and getting what they want through words, but not able to make a living doing so.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Presence 2 has the skill to earn their daily bread through persuasion.  Merchants, military officers, magistrates and confidence tricksters often have this level of ability.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Presence 3 is of above-average skill, and can expect to quickly create religious conversions, convince criminals to inform on their fellows or fortify the morale of a timid soldier.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Presence 4 is exceptionally skilled, able to get their way in even the most cut-throat political situation.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Performance 5 is as at the human limit of ability in persuasion and charm.  They can expect to bend almost any mortal to their will.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_PRESENCE_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Presence"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperResistance").css("cursor", "pointer");

    $("#traitWrapperResistance").click(function (event) {

        $traitDialogue.html("<p>The Resistance Ability represents cultivated resilience.  It is helpful against sleep deprivation, fatigue, pain, poison, disease and extreme environmental conditions.  It is very important in combat for Heroic Mortals, less so for the Exalted.</p>");

        switch (currentPC[CONSTANT_TRAIT_RESISTANCE]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Resistance 1 is accustomed to hard work or deprivation.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Resistance 2 has the fortitude to earn their living through heavy labour, or working in dangerous conditions.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Resistance 3 is of above-average resilience, and can expect to quickly recover from illness or infection, and exercise for long periods without rest.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Resistance 4 is exceptionally hardy, and is likely famed for their endurance.  Enemies wishing to poison such a character must resort to expensive and rare varieties.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Resistance 5 is as at the human limit of hardiness.  They have learned to thrive on hardships that would destroy the average person.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_RESISTANCE_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Resistance"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperSurvival").css("cursor", "pointer");

    $("#traitWrapperSurvival").click(function (event) {

        $traitDialogue.html("<p>The Survival Ability represents experience and skill with living in the wilderness.  It's useful for finding food and shelter in the wild, tracking game or enemies, and taming wild animals.</p>");

        switch (currentPC[CONSTANT_TRAIT_SURVIVAL]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Survival 1 is accustomed to living outside the comforts of civilisation, but probably not in actively dangerous territory.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Survival 2 has the skills to live permanently in the wild.  This level of ability is common amongst tribal peoples, hunters and itinerant traders.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Survival 3 is of above-average skill, and can expect success as an explorer.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Survival 4 is exceptionally skilled at wilderness living, and can expect to improvise food and shelter in any environment.  They may be a famed explorer, or a hermit living so remotely that no other mortal knows they're alive.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Survival 5 is as at the human limit of adaption to the wild.  They could expect to lead large numbers of unskilled followers through even the most extreme conditions.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_SURVIVAL_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Survival"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#twilightAbilityGroupLabel").css("cursor", "pointer");

    $("#twilightAbilityGroupLabel").click(function (event) {

        $traitDialogue.html("<p>The Twilight caste of the Solar Exalted are innately talented at all the arts of the intellect; the Craft, Investigation, Lore, Medicine and Occult abilities fall under their domain.</p>");
        $traitDialogue.append(CONSTANT_TRAIT_VALUE_ABILITY_GROUP);

        $traitDialogue.dialog({

            title: "Twilight Abilities"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperCraft").css("cursor", "pointer");

    $("#traitWrapperCraft").click(function (event) {

        $traitDialogue.html("<p>The ability to make things is represented by the Craft Abilities; there are five mortal Craft abilties covering all mundane objects, and several additional Craft abilities dealing with specific supernatural media.</p><p>Unlike other Abilities, which are naturally broad and absorb new use-cases as they arrive, Craft is narrow if bought once and expensive if broad competence is desired.  Great care should be taken when creating a character whose concept includes crafting skill.</p>");

        switch (currentPC[CONSTANT_TRAIT_CRAFT]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

        }

        if (currentPC[CONSTANT_TRAIT_CRAFT_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Craft"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperInvestigation").css("cursor", "pointer");

    $("#traitWrapperInvestigation").click(function (event) {

        $traitDialogue.html("<p>The Investigation Ability represents the ability to unveil hidden information, whether deliberately concealed (such as evidence at a crime scene) or merely obscure (a text somewhere in the depths of the Imperial Library).  It may be used to divine people's motivations, and is useful as an attack and defence in social combat.</p>");

        switch (currentPC[CONSTANT_TRAIT_INVESTIGATION]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Investigation 1 has experience getting to the bottom of things.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Investigation 2 has the skills to work professionally as a magistrate or researcher.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Investigation 3 is of above-average skill, and can expect to easily solve most crimes.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Investigation 4 is exceptionally skilled at uncovering information.  They may expect wealthy and powerful patrons to petition them to solve cases that have defeated all others.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Investigation 5 is as at the human limit of detective skill.  They can expect to accurately piece together events based on the vaguest clues, and see clearly the motivations of even the greatest deceivers.  They are rightly feared.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_INVESTIGATION_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Investigation"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperLore").css("cursor", "pointer");

    $("#traitWrapperLore").click(function (event) {

        $traitDialogue.html("<p>The Lore Ability represents general and academic knowledge - history, geography, natural sciences, current events etc.  A character must have Lore 1 to be literate.</p>");

        switch (currentPC[CONSTANT_TRAIT_LORE]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Lore 1 can read and write, and could draw a roughly accurate map of Creation on the scale of empires.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Lore 2 could work professionally as a scholar.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Lore 3 is of above-average knowledge, counted as an expert in one or more fields.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Lore 4 is exceptionally knowledgeable.  They likely enjoy fame as a savant.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Lore 5 has cultivated their command of knowledge to the human limit.  While there are ever more details to be learned, they have a broad knowledge of almost literally everything.  Only that outside Creation and the secrets of gods and Exalted are unknown to them; and even then they have hints of the truth.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_LORE_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Lore"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperMedicine").css("cursor", "pointer");

    $("#traitWrapperMedicine").click(function (event) {

        $traitDialogue.html("<p>The Medicine Ability represents skill and knowledge of the healing arts, such as they are practiced in Creation.</p>");

        switch (currentPC[CONSTANT_TRAIT_MEDICINE]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Medicine 1 can supply adequate first aid and treat simple complaints.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Medicine 2 could work professionally as a doctor.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Medicine 3 is of above-average skill, able to reliably perform simple surgeries (in as much as any surgery is simple in the Second Age).</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Medicine 4 is exceptionally skilled.  They may find themselves summoned to the bedside of sick or injured royalty.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Medicine 5 is as skilled as any can be in the Second Age.  They can be expected to continually advance the field by improvisation.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_MEDICINE_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Medicine"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperOccult").css("cursor", "pointer");

    $("#traitWrapperOccult").click(function (event) {

        $traitDialogue.html("<p>The Occult Ability represents knowledge of magic and supernatural phenomena, as well as skill in the art of thaumaturgy (mortal ritual magic).</p>");

        switch (currentPC[CONSTANT_TRAIT_OCCULT]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Occult 1 knows the correct rites to appease local gods and ancestor spirits.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Occult 2 could work professionally as a thaumaturge.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Occult 3 is of above-average knowledge, skilled with rites from across creation.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Occult 4 is exceptionally knowledgeable.  They may be called upon if their nation has incurred the wrath of a powerful god.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Occult 5 has cultivated their command of arcane knowledge to the human limit.  Anything they do not know about magic and the supernatural has probably never been known to mortals.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_OCCULT_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Occult"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#nightAbilityGroupLabel").css("cursor", "pointer");

    $("#nightAbilityGroupLabel").click(function (event) {

        $traitDialogue.html("<p>The Night caste of the Solar Exalted are called to the roles of spies, assassins and other hunters in darkness; the Athletics, Awareness, Dodge, Larceny and Stealth abilities fall under their domain.</p>");
        $traitDialogue.append(CONSTANT_TRAIT_VALUE_ABILITY_GROUP);

        $traitDialogue.dialog({

            title: "Night Abilities"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperAthletics").css("cursor", "pointer");

    $("#traitWrapperAthletics").click(function (event) {

        $traitDialogue.html("<p>The Athletics Ability represents trained physical prowess.  It covers feats of strength, leaping, balance and climbing.  Athletics can be very important in combat, particularly when fighting on difficult or unstable terrain.</p>");

        switch (currentPC[CONSTANT_TRAIT_ATHLETICS]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Athletics 1 has good balance and probably gets regular exercise.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Athletics 2 could earn their living as an acrobat.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Athletics 3 is of above-average prowess, able to use their poise and strength much more effectively than similarly talented people.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Athletics 4 is exceptionally skilled in the physical arts.  They can expect to win almost any competition they might enter, and are likely famed from doing just that.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Athletics 5 has cultivated their command of their body to the human limit.  They can easily climb sheer cliffs, leap seemingly impossible chasms and otherwise inspire awe in any privileged to behold their astounding grace.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_ATHLETICS_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Athletics"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperAwareness").css("cursor", "pointer");

    $("#traitWrapperAwareness").click(function (event) {

        $traitDialogue.html("<p>The Awareness Ability represents trained use of a character's senses, the skill counterpart of Perception's talent (though it is also often paired with Wits).</p>");

        switch (currentPC[CONSTANT_TRAIT_AWARENESS]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Awareness 1 has the attentiveness and ability to eavesdrop of a champion gossip.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Awareness 2 has the skills to be a professional informant or spy.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Awareness 3 is of above-average skill, and can expect to be the first to notice any change in their environment.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Awareness 4 is exceptionally skilled in the use of their senses.  Whether a scout, spy or bodyguard, they will be amongst the greatest of their calling.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Athletics 5 has cultivated their senses to the human limit.  They hear the assassin's breath, see the lone scout on the horizon, smell the week-old trace of a unique perfume at the crime scene.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_AWARENESS_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Awareness"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperDodge").css("cursor", "pointer");

    $("#traitWrapperDodge").click(function (event) {

        $traitDialogue.html("<p>The Dodge bility represents the skill of physically moving out of harm's way.  It is an essential combat skill for those relying on missile weapons, and sometimes useful even for those who prefer to parry.</p><p>Dodge is rarely rolled, instead contributing the static Dodge Defence Value (DV).</p>");

        switch (currentPC[CONSTANT_TRAIT_DODGE]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Dodge 1 has experience getting out of the way of things that are about to hurt them.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Dodge 2 is fairly matched against an average soldier.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Dodge 3 is of above-average skill, and has an advantage in a fight against an average solder.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Dodge 4 is exceptionally skilled in the business of not being hurt.  They may be called upon to brave a tomb filled with First Age traps that have killed all others willing to make the attempt.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Dodge 5 has trained to the limit of human skill.  They may brave the fiercest battles unarmoured or run safely through a rockslide.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_DODGE_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Dodge"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperLarceny").css("cursor", "pointer");

    $("#traitWrapperLarceny").click(function (event) {

        $traitDialogue.html("<p>The Larceny Ability represents skill in the domain of thievery and allied arts.  Sleight of hand, lock-picking, pick-pocketing, gambling and are covered by the Ability, as well as knowledge of the customs and personalities of the criminal underworld.</p>");

        switch (currentPC[CONSTANT_TRAIT_LARCENY]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Larceny 1 is equipped for petty crime.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Larceny 2 has the skill to be a professional criminal.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Larceny 3 is of above-average skill, and may be a significant presence in the local crimianl fraternity.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Larceny 4 is exceptionally skilled in the criminal arts.  They will be eagerly sought for the most challenging jobs.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Larceny 5 is as skilled in dishonest work as a human can possibly be.  Even if their name is unknown, their deeds will be legendary even outside the criminal fraternity.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_LARCENY_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Larceny"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperStealth").css("cursor", "pointer");

    $("#traitWrapperStealth").click(function (event) {

        $traitDialogue.html("<p>The Stealth Ability represents the trained knack of avoiding notice or detection.</p>");

        switch (currentPC[CONSTANT_TRAIT_STEALTH]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Stealth 1 is unobtrusive by practice.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Stealth 2 could be a professional sneak-thief.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Stealth 3 is of above-average skill, capable of being a notable (as it were) assassin.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Stealth 4 is exceptionally skilled in remaining hidden.  Soldiers, assassins and thieves would beg for their instruction.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Stealth 5 has attained the human limit in avoiding detection.  The very few aware of the character's skill are utterly terrified.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_STEALTH_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Stealth"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#eclipseAbilityGroupLabel").css("cursor", "pointer");

    $("#eclipseAbilityGroupLabel").click(function (event) {

        $traitDialogue.html("<p>The Eclipse caste of the Solar Exalted are the diplomats of the chosen, gifted in travel and communication; the Bureaucracy, Linguistics, Ride, Sail and Socialise abilities fall under their domain.</p>");
        $traitDialogue.append(CONSTANT_TRAIT_VALUE_ABILITY_GROUP);

        $traitDialogue.dialog({

            title: "Eclipse Abilities"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperBureaucracy").css("cursor", "pointer");

    $("#traitWrapperBureaucracy").click(function (event) {

        $traitDialogue.html("<p>The Bureaucracy Ability represents experience and skill in negotiating the intricacies of laws, regulations and commerce.</p>");

        switch (currentPC[CONSTANT_TRAIT_OCCULT]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Bureacracy 1 is accustomed to bribery, haggling and red tape, but isn't ready to make a living as a merchant or official.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Bureaucracy 2 could work professionally as a merchant or functionary.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Bureaucracy 3 is of above-average experience and skill, and could expect success as a department head or merchant prince.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Bureaucracy 4 is exceptionally skilled.  They can expect to do business with the Guild or the Realm on good terms.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Bureaucracy 5 is as skilled with commerce and government as any human could be.  They can expect to amass a truly outrageous fortune or design a system of government far better than any currently functioning in Creation.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_BUREAUCRACY_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Bureaucracy"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperLinguistics").css("cursor", "pointer");

    $("#traitWrapperLinguistics").click(function (event) {

        $traitDialogue.html("<p>The Linguistics Ability grants aditional language families to a character, one per dot.  It is used in place of Appearance when making social attacks by correspondance.</p>");

        $traitDialogue.append("<p>" + currentPC[CONSTANT_TRAIT_CHARACTER_NAME] + " speaks: </p><p><strong>Native: " + currentPC[CONSTANT_TRAIT_LANGUAGE_NATIVE].language + "</strong><br/>" + currentPC[CONSTANT_TRAIT_LANGUAGE_NATIVE].description + "</p>");

        for (i = 0; i < currentPC[CONSTANT_TRAIT_LANGUAGES].length; i++) {

            $traitDialogue.append("<p><strong>" + currentPC[CONSTANT_TRAIT_LANGUAGES][i].language + "</strong><br/>" + currentPC[CONSTANT_TRAIT_LANGUAGES][i].description + "</p>");

        }

        if (currentPC[CONSTANT_TRAIT_LINGUISTICS_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Linguistics"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperRide").css("cursor", "pointer");

    $("#traitWrapperRide").click(function (event) {

        $traitDialogue.html("<p>The Ride Ability represents experience and skill with mounts of all kinds.  In combat, a mounted character's abilities are capped by their Ride (eg if attacking with a sword from horseback, they would use the lower of their Melee and Ride).</p>");

        switch (currentPC[CONSTANT_TRAIT_RIDE]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Ride 1 is experienced with the local mount of choice, and likely rides every day.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Ride 2 has the skill to be a professional rider. This level of ability is common amongst messengers, scouts and nomads.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Ride 3 is of above-average skill, and may ride an exotic mount with confidence.  They would be suitable for an elite cavalry unit.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Ride 4 is exceptionally comfortable in the saddle.  They are likely famed for mounted deeds and can expect to have a large advantage in mounted combat.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Ride 5 is as skilled with mounts as a human can possibly be.  They may have lead famous cavalry charges or tamed magical beasts.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_RIDE_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Ride"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperSail").css("cursor", "pointer");

    $("#traitWrapperSail").click(function (event) {

        $traitDialogue.html("<p>The Sail Ability represents experience and skill with water-going craft and airships, including navigation, piloting and maintenance.  While few in Creation are familiar with airships, most are designed to be crewed by sailors, and minimal adjustment is needed.</p>");

        switch (currentPC[CONSTANT_TRAIT_SAIL]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Sail 1 is experienced with boats and can brave a mild storm.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Sail 2 has the skill to be a professional sailor.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Sail 3 is of above-average skill, and may handle difficult craft or conditions with confidence.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Sail 4 is an exceptionally skilled sailor, likely famed for remarkable feats in the sea or sky.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Sail 5 is as skilled with ships as a human can possibly be.  Such a character has little need of maps and has no fear of the weather.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_SAIL_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Sail"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#traitWrapperSocialise").css("cursor", "pointer");

    $("#traitWrapperSocialise").click(function (event) {

        $traitDialogue.html("<p>The Socialise Ability represents experience and skill with customs, ettiquette and intrigue.  It is useful for creating opportunities to launch Presence, Performance or Investigation social attacks.  Socialise fills a role equivalent to War in mass social combat, capping other abilities (eg if making a Presence attack against a social unit, you would roll the lower of your Presence and Socialise).</p>");

        switch (currentPC[CONSTANT_TRAIT_SOCIALISE]) {

            case 0:

                if (!currentPC[CONSTANT_TRAIT_EXALTED]) {

                    $traitDialogue.append(CONSTANT_TRAIT_VALUE_UNSKILLED);

                }

                break;

            case 1:

                $traitDialogue.append("<p>A character with Socialise 1 is familiar with the ebb and flow of social occaisions, and has little difficulty talking to those they wish to.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Socialise 2 has the skill to be a professional courtier.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Socialise 3 is of above-average skill, and can expect to effortlessly move between cultures without making faux pas or losing social momentum.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Socialise 4 is exceptionally skilled, and may be called upon to smooth negotiations between beligerant nations, or help the Guild and the Realm do business.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Socialise 5 has cultivated their ability to deal with human culture the limit.  Such a character can expect to shape rumour precisely to their taste, to create effortlessly networks of alliances across class and culture, and to set fashions wherever they go.</p>");

                break;


        }

        if (currentPC[CONSTANT_TRAIT_SOCIALISE_FAVOURED]) {

            $traitDialogue.append(CONSTANT_TRAIT_VALUE_FAVOURED);

        }


        $traitDialogue.dialog({

            title: "Socialise"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#specialtiesAbilityGroup").css("cursor", "pointer");

    $("#specialtiesAbilityGroup").click(function (event) {

        $traitDialogue.html("<p>Specialties add bonus dice to rolls using their parent Ability when applicable.  For example, a character with 3 points of \"Swords\" specialty for Melee would add three bonus dice whenever using a sword with the Melee Ability, but not when using an axe or making a sword with the Craft Ability.</p><p>Characters may only have three points of specialties per Ability.</p>");

        $traitDialogue.dialog({

            title: "Specialties"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#advantagesHeader").css("cursor", "pointer");

    $("#advantagesHeader").click(function (event) {

        $traitDialogue.html("<p>A catch-all category including traits related to the character's personality, state of injury, connections to the world and equipment.</p>");

        $traitDialogue.dialog({

            title: "Advantages"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#willpowerWrapper").css("cursor", "pointer");

    $("#willpowerWrapper").click(function (event) {

        $traitDialogue.html("<p>Willpower represents a character's self-control and determination.  A character has a permanent rating in the trait (indicated by dots <img src=\"" + CONSTANT_IMAGE_URL_DOT_FULL + "\" />) and a pool of points to spend (up to their permanent rating, indicated by boxes <img src=\"" + CONSTANT_IMAGE_URL_BOX_FULL + "\" />).</p>");
        $traitDialogue.append("<p>A character's Willpower rating contributes to their Dodge Mental Defence Value, and is occaisionally rolled as part of a pool.  Willpower points may be spent to resist compulsion, buy an automatic success for a roll or activate a Virtue.</p><p>Spent Willpower points are primarily regained through stunting and rest.</p>");


        switch (currentPC[CONSTANT_TRAIT_WILLPOWER]) {

            case 1:

                $traitDialogue.append("<p>A character with Willpower 1 is almost incapable of resisting compulsion, possibly as a result of being broken by prolonged torture or mental damage.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Willpower 2 has abnormally low confidence.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Willpower 3 has little determination or stability.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Willpower 4 has below-average strength of will.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Willower 5 has roughly average confidence.</p>");

                break;

            case 6:

                $traitDialogue.append("<p>A character with Willpower 6 has above-average self confidence.</p>");

                break;

            case 7:

                $traitDialogue.append("<p>A character with Willpower 7 is remarkable for their strong will.</p>");

                break;

            case 8:

                $traitDialogue.append("<p>A character with Willpower 8 is incredibly difficult to sway.  Even practiced manipulators will have to make a major project of changing their mind.</p>");

                break;

            case 9:

                $traitDialogue.append("<p>A character with Willpower 9 is near the human peak of determination and self-control.  They have enormous reserves of will to devote to their cause.</p>");

                break;

            case 10:

                $traitDialogue.append("<p>A character with Willower 10 is at the human limit of confidence and drive.  Such will must surely reshape the world.</p>");

                break;


        }

        $traitDialogue.dialog({

            title: "Willpower"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#virtueLabel").css("cursor", "pointer");

    $("#virtueLabel").click(function (event) {

        $traitDialogue.html("<p>Virtues represent a character's passion and drive towards certain kinds of behaviour.</p><p>A character may spend a point of Willpower to activate one of their Virtues, gaining its permanent rating (represented by dots <img src=\"" + CONSTANT_IMAGE_URL_DOT_FULL + "\" />) as bonus dice to a roll.  They may do this a number of times per story equal to the Virtue's rating (this pool of opportunities is tracked with boxes <img src=\"" + CONSTANT_IMAGE_URL_BOX_FULL + "\" />).  A character may not spend Willpower for an automatic success on a roll which benefits from a Virtue, so it is generally only useful to do for Virtues rated at 3 or higher.</p><p>Virtues rated 3 or higher control the behaviour of the character to an extent; they may need to fail a roll of that Virtue or spend a Willpower point to take an action that contradicts the Virtue (eg for a Valor 5 character to flee from battle).  However a character with a low Virtue rating is not obliged to act against that Virtue (eg a character with low Temperance is not required to succumb to every temptation, they just have little strength to draw upon for self-denial).</p>");

        $traitDialogue.dialog({

            title: "Virtues"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#compassion").css("cursor", "pointer");

    $("#compassion").click(function (event) {

        $traitDialogue.html("<p>Compassion measures the degree to which the character is moved by the suffering of others.  It can aid actions that benefit others (particularly to rescue them from harm); it can make it difficult to harm others.</p>");

        switch (currentPC[CONSTANT_TRAIT_COMPASSION]) {

            case 1:

                $traitDialogue.append("<p>A character with Compassion 1 has below-average empathy, possibly none at all.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Compassion 2 has average regard for the suffering of others.  Sometimes in Creation, that's not much.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Compassion 3 is of above-average empathy, and may find it difficult to ignore those in need.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Compassionate 4 is exceptionally moved by suffering, and will likely feel obliged to act whenever they see injustice, pain or danger to life.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Compassion 5 is at the human limit of empathy, and will find it difficult to harm even those who despise them.</p>");

                break;


        }


        $traitDialogue.dialog({

            title: "Compassion"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#temperance").css("cursor", "pointer");

    $("#temperance").click(function (event) {

        $traitDialogue.html("<p>Temperance measures the degree to which the character can deny their own wants.  It's useful for remaining calm in the face of provocation, resisting temptation and remaining objecitve.  It can make it difficult to indulge yourself, act dishonestly or impulsively.</p>");

        switch (currentPC[CONSTANT_TRAIT_TEMPERANCE]) {

            case 1:

                $traitDialogue.append("<p>A character with Temperance 1 has below-average capacity for self-denial; they likely lose their temper easily and induldge whenever they have leisure to do so.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Temperance 2 has average self-control.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Temperance 3 is of above-average capacity for self-denial, and may find it difficult to renege on their word.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Temperance 4 has exceptional control over their own desires; they are unlikely to ever act impusively.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Temperance 5 is at the human limit of self-denial, never in any danger from their own emotions.</p>");

                break;


        }


        $traitDialogue.dialog({

            title: "Temperance"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#conviction").css("cursor", "pointer");

    $("#conviction").click(function (event) {

        $traitDialogue.html("<p>Conviction represents the degree to which the character's commitment to their goals allows them to endure hardship and inflict suffering upon others.  It is useful whenever your goals oblige you to take an action you'd rather not, resisting torture and overcoming challenges to achieve your objectives.  It can make it difficult to abandon a cause or comrades, or avoid problems when your goals would benefit from facing them.</p><p>When awaking after a substantial rest (usually each morning after sleep) a character may make a Conviction roll, recovering one spent Willpower point per success.</p>");

        switch (currentPC[CONSTANT_TRAIT_CONVICTION]) {

            case 1:

                $traitDialogue.append("<p>A character with Conviction 1 has below-average capacity to suffer or inflict suffering for their goals.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Conviction 2 has average commitment to their goals.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Conviction 3 is of above-average capacity to take drastic measures on behalf of their cause.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Conviction 4 has exceptional commitment to their cause; they can expect to have the will to take horrible actions when necessary.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Conviction 5 is as committed to their cause as any human can be.  They can be relied upon to never give up, no matter what their cause asks of them.</p>");

                break;


        }


        $traitDialogue.dialog({

            title: "Conviction"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    $("#valour").css("cursor", "pointer");

    $("#valour").click(function (event) {

        $traitDialogue.html("<p>Valor measures a character's courage and enthusiasm for danger.  It helps resist fear of all kinds and in risky situations (particularly combat).  It can make it difficult to refuse challenges, retreat from combat or suffer insults.</p>");

        switch (currentPC[CONSTANT_TRAIT_VALOUR]) {

            case 1:

                $traitDialogue.append("<p>A character with Valor 1 has below-average bravery, and will have difficulty avoiding cowardly behaviour.</p>");

                break;

            case 2:

                $traitDialogue.append("<p>A character with Valor 2 has average mettle.</p>");

                break;

            case 3:

                $traitDialogue.append("<p>A character with Valor 3 is of above-average courage.  They can expect to face a superior opponent without fear.</p>");

                break;

            case 4:

                $traitDialogue.append("<p>A character with Valor 4 has exceptional bravery; they may find it difficult to retreat or refuse a duel.</p>");

                break;

            case 5:

                $traitDialogue.append("<p>A character with Valor 5 is as courageous as any human can be.  They can expect to withstand even magically-induced fear, and engage any enemy without hesitation.</p>");

                break;


        }


        $traitDialogue.dialog({

            title: "Valor"

        });

        $traitDialogue.dialog("open");

        return false;

    });


    $("#backgroundsAbilityGroupLabel").css("cursor", "pointer");

    $("#backgroundsAbilityGroupLabel").click(function (event) {

        $traitDialogue.html("<p>Backgrounds are traits representing a character's connections, position and possessions.  Each Background has its own mechanics.</p>");

        $traitDialogue.dialog({

            title: "Backgrounds"

        });

        $traitDialogue.dialog("open");

        return false;


    });


    $("#defenceValuesLabel").css("cursor", "pointer");

    $("#defenceValuesLabel").click(function (event) {

        $traitDialogue.html("<p>Defence Values are static values that an opponent must beat with their attack roll in order to hit (effectively the difficulty the attack).  For most intents and purposes they are normal dice pools, with their calculated value equal to the average number of successes the pool would provide.</p>");

        $traitDialogue.append("<p>Dodge and Parry DVs are used in physical combat.  Mental defence values - Dodge and Parry MDVs - are used in social combat.</p>");

        $traitDialogue.dialog({

            title: "Defence Values"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#dodgeDV").css("cursor", "pointer");

    $("#dodgeDV").click(function (event) {

        $traitDialogue.html("<p>The Dodge DV is the character's ability to avoid physical harm by getting out of its way.</p><p>It is calculated from half (Dexterity + Dodge), rounded up for Exalted and other mighty beings, rounded down for everyone else.  Characters with Essence of 2 or more add their Essence score to the pool before halving.</p>");
        $traitDialogue.append("<p>Any mobility penalty from armour, shields etc. is also applied to the pool before halving.</p>");

        var tempString = "<p>" + currentPC[CONSTANT_TRAIT_CHARACTER_NAME] + "'s Dodge DV is <strong>" + getDodgeDV(currentPC) + "</strong> ((Dexterity " + currentPC[CONSTANT_TRAIT_DEXTERITY] + " + Dodge " + currentPC[CONSTANT_TRAIT_DODGE];

        if (currentPC[CONSTANT_TRAIT_ESSENCE] > 1) {

            tempString += " + Essence " + currentPC[CONSTANT_TRAIT_ESSENCE];

        }

        if (getBuffTotal(currentPC, CONSTANT_BUFF_MOBILITY_PENALTY) > 0) {

            tempString += " - Mobility Penalty " + getBuffTotal(currentPC, CONSTANT_BUFF_MOBILITY_PENALTY);

        }

        tempString += ") / 2)</p>";

        $traitDialogue.append(tempString);

        $traitDialogue.dialog({

            title: "Dodge MDV"

        });

        $traitDialogue.dialog("open");

        return false;
    });

    $("#dodgeMDV").css("cursor", "pointer");

    $("#dodgeMDV").click(function (event) {

        $traitDialogue.html("<p>The Dodge MDV is the character's capacity to simply ignore the arguments of their social opponents through mental discipline and sheer will.</p><p>It is calculated from half (Willpower + Integrity + Essence), rounded down.");

        $traitDialogue.append("<p>" + currentPC[CONSTANT_TRAIT_CHARACTER_NAME] + "'s Dodge MDV is <strong>" + getDodgeMDV(currentPC) + "</strong> ((Willpower " + currentPC[CONSTANT_TRAIT_WILLPOWER] + " + Integrity " + currentPC[CONSTANT_TRAIT_INTEGRITY] + " + Essence " + currentPC[CONSTANT_TRAIT_ESSENCE] + ") / 2)</p>");

        $traitDialogue.dialog({

            title: "Dodge MDV"

        });

        $traitDialogue.dialog("open");

        return false;
    });

    $("#parryMDV").css("cursor", "pointer");

    $("#parryMDV").click(function (event) {

        $traitDialogue.html("<p>The Parry MDV is the character's capacity to deflect the arguments of their social opponents through retort and debate.</p><p>It is calculated from half ((the best of Charisma and Manipulation) + (the best of Presence, Performance and Investigation)), rounded up.");

        var tempBestAttribute = getBestTraitOf({ label: "Charisma", rating: currentPC[CONSTANT_TRAIT_CHARISMA] }, { label: "Manipulation", rating: currentPC[CONSTANT_TRAIT_MANIPULATION] });
        var tempBestAbility = getBestTraitOf({ label: "Presence", rating: currentPC[CONSTANT_TRAIT_PRESENCE] }, { label: "Performance", rating: currentPC[CONSTANT_TRAIT_PERFORMANCE] }, { label: "Investigation", rating: currentPC[CONSTANT_TRAIT_INVESTIGATION] });

        $traitDialogue.append("<p>" + currentPC[CONSTANT_TRAIT_CHARACTER_NAME] + "'s Parry MDV is <strong>" + getParryMDV(currentPC) + "</strong> ((" + tempBestAttribute.label + " " + tempBestAttribute.rating + " + " + tempBestAbility.label + " " + tempBestAbility.rating + ") / 2)</p>");

        $traitDialogue.dialog({

            title: "Dodge MDV"

        });

        $traitDialogue.dialog("open");

        return false;
    });


    //Equipment

    $("#soakAbilityGroupLabel").css("cursor", "pointer");

    $("#soakAbilityGroupLabel").click(function (event) {

        $traitDialogue.html("<p>Soak protects a character by absorbing damage. It is a static total subtracted from the opponent's damage pool before rolling.</p><p>For example, if an opponent was about to roll 11 lethal damage dice against a character with 8 lethal soak, the damage would be reduced to 3 dice.</p>");

        $traitDialogue.dialog({

            title: "Soak"

        });

        $traitDialogue.dialog("open");

        return false;


    });


    $("#soakHeaderBashing").css("cursor", "pointer");

    $("#soakHeaderBashing").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_BASHING);

        $traitDialogue.dialog({

            title: "Bashing Soak"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#soakBashingNatural").css("cursor", "pointer");

    $("#soakBashingNatural").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_BASHING);

        $traitDialogue.dialog({

            title: "Bashing Soak"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#soakBashingArmour").css("cursor", "pointer");

    $("#soakBashingArmour").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_BASHING);

        $traitDialogue.append("<p>This armour provides " + currentPC[CONSTANT_TRAIT_ARMOUR].bashing + " bashing soak + " + getNaturalBashingSoak(currentPC) + " natural soak = <strong>" + getArmouredBashingSoak(currentPC) + " bashing soak total.</strong></p>");

        $traitDialogue.dialog({

            title: "Bashing Soak"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#soakHeaderLethal").css("cursor", "pointer");

    $("#soakHeaderLethal").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_LETHAL);

        $traitDialogue.dialog({

            title: "Lethal Soak"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#soakLethalNatural").css("cursor", "pointer");

    $("#soakLethalNatural").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_LETHAL);

        $traitDialogue.dialog({

            title: "Lethal Soak"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#soakLethalArmour").css("cursor", "pointer");

    $("#soakLethalArmour").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_LETHAL);

        $traitDialogue.append("<p>This armour provides " + currentPC[CONSTANT_TRAIT_ARMOUR].lethal + " lethal soak + " + getNaturalLethalSoak(currentPC) + " natural soak = <strong>" + getArmouredLethalSoak(currentPC) + " lethal soak total.</strong></p>");

        $traitDialogue.dialog({

            title: "Lethal Soak"

        });

        $traitDialogue.dialog("open");

        return false;


    });


    $("#soakHeaderAggravated").css("cursor", "pointer");

    $("#soakHeaderAggravated").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_AGGRAVATED);

        $traitDialogue.dialog({

            title: "Aggravated Soak"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#soakAggravatedNatural").css("cursor", "pointer");

    $("#soakAggravatedNatural").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_AGGRAVATED);

        $traitDialogue.dialog({

            title: "Aggravated Soak"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#soakAggravatedArmour").css("cursor", "pointer");

    $("#soakAggravatedArmour").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_AGGRAVATED);

        $traitDialogue.dialog({

            title: "Aggravated Soak"

        });

        $traitDialogue.dialog("open");

        return false;


    });


    $("#soakHeaderHardness").css("cursor", "pointer");

    $("#soakHeaderHardness").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_HARDNESS);

        $traitDialogue.dialog({

            title: "Hardness"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#soakHardnessNatural").css("cursor", "pointer");

    $("#soakHardnessNatural").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_HARDNESS);

        $traitDialogue.dialog({

            title: "Hardness"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#soakHardnessArmour").css("cursor", "pointer");

    $("#soakHardnessArmour").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_HARDNESS);

        if (currentPC[CONSTANT_TRAIT_ARMOUR].hardness) {

            $traitDialogue.append("<p>This armour provides <strong>" + currentPC[CONSTANT_TRAIT_ARMOUR].hardnessBashing + " bashing</strong> hardness and <strong>" + currentPC[CONSTANT_TRAIT_ARMOUR].hardnessLethal +" lethal</strong> hardness.</p>");

        }

        $traitDialogue.dialog({

            title: "Hardness"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#soakHeaderMobility").css("cursor", "pointer");

    $("#soakHeaderMobility").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_MOBILITY);

        $traitDialogue.dialog({

            title: "Mobility"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#soakMobilityNatural").css("cursor", "pointer");

    $("#soakMobilityNatural").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_MOBILITY);

        $traitDialogue.dialog({

            title: "Mobility"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#soakMobilityArmour").css("cursor", "pointer");

    $("#soakMobilityArmour").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_MOBILITY);

        $traitDialogue.dialog({

            title: "Mobility"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#soakHeaderFatigue").css("cursor", "pointer");

    $("#soakHeaderFatigue").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_FATIGUE);

        $traitDialogue.dialog({

            title: "Fatigue"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#soakFatigueNatural").css("cursor", "pointer");

    $("#soakFatigueNatural").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_FATIGUE);

        $traitDialogue.dialog({

            title: "Fatigue"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#soakFatigueArmour").css("cursor", "pointer");

    $("#soakFatigueArmour").click(function (event) {

        $traitDialogue.html(CONSTANT_SOAK_DESCRIPTION_FATIGUE);

        $traitDialogue.dialog({

            title: "Fatigue"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#weaponHeaderSpeed").css("cursor", "pointer");

    $("#weaponHeaderSpeed").click(function (event) {

        $traitDialogue.html(CONSTANT_WEAPON_DESCRIPTION_SPEED);

        $traitDialogue.dialog({

            title: "Speed"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#weaponSpeed1").css("cursor", "pointer");

    $("#weaponSpeed1").click(function (event) {

        $traitDialogue.html(CONSTANT_WEAPON_DESCRIPTION_SPEED);

        $traitDialogue.dialog({

            title: "Speed"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#weaponHeaderAccuracy").css("cursor", "pointer");

    $("#weaponHeaderAccuracy").click(function (event) {

        $traitDialogue.html(CONSTANT_WEAPON_DESCRIPTION_ACCURACY);

        $traitDialogue.dialog({

            title: "Accuracy"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#weaponAccuracy1").css("cursor", "pointer");

    $("#weaponAccuracy1").click(function (event) {

        $traitDialogue.html(CONSTANT_WEAPON_DESCRIPTION_ACCURACY);

        $traitDialogue.append(getEquippedAccuracyDerivationString(currentPC));

        $traitDialogue.dialog({

            title: "Accuracy"

        });

        $traitDialogue.dialog("open");

        return false;


    });


    $("#weaponHeaderDamage").css("cursor", "pointer");

    $("#weaponHeaderDamage").click(function (event) {

        $traitDialogue.html(CONSTANT_WEAPON_DESCRIPTION_DAMAGE);

        $traitDialogue.dialog({

            title: "Damage"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#weaponDamage1").css("cursor", "pointer");

    $("#weaponDamage1").click(function (event) {

        $traitDialogue.html(CONSTANT_WEAPON_DESCRIPTION_DAMAGE);

        $traitDialogue.append(getEquippedBaseDamageDerivationString(currentPC));

        $traitDialogue.dialog({

            title: "Damage"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#weaponHeaderParryDV").css("cursor", "pointer");

    $("#weaponHeaderParryDV").click(function (event) {

        $traitDialogue.html(CONSTANT_WEAPON_DESCRIPTION_PARRY_DV);

        $traitDialogue.dialog({

            title: "Parry DV"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#weaponParryDV1").css("cursor", "pointer");

    $("#weaponParryDV1").click(function (event) {

        $traitDialogue.html(CONSTANT_WEAPON_DESCRIPTION_PARRY_DV);

        $traitDialogue.append(getEquippedParryDVDerivationString(currentPC));

        $traitDialogue.dialog({

            title: "Parry DV"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#weaponHeaderRate").css("cursor", "pointer");

    $("#weaponHeaderRate").click(function (event) {

        $traitDialogue.html(CONSTANT_WEAPON_DESCRIPTION_RATE);

        $traitDialogue.dialog({

            title: "Rate"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#weaponRate1").css("cursor", "pointer");

    $("#weaponRate1").click(function (event) {

        $traitDialogue.html(CONSTANT_WEAPON_DESCRIPTION_RATE);

        $traitDialogue.dialog({

            title: "Rate"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#weaponHeaderRange").css("cursor", "pointer");

    $("#weaponHeaderRange").click(function (event) {

        $traitDialogue.html(CONSTANT_WEAPON_DESCRIPTION_RANGE);

        $traitDialogue.dialog({

            title: "Range"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#weaponRange1").css("cursor", "pointer");

    $("#weaponRange1").click(function (event) {

        $traitDialogue.html(CONSTANT_WEAPON_DESCRIPTION_RANGE);

        $traitDialogue.dialog({

            title: "Range"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#weaponHeaderTags").css("cursor", "pointer");

    $("#weaponHeaderTags").click(function (event) {

        $traitDialogue.html(CONSTANT_WEAPON_DESCRIPTION_TAGS);

        $traitDialogue.dialog({

            title: "Tags"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#weaponTags1").css("cursor", "pointer");

    $("#weaponTags1").click(function (event) {

        $traitDialogue.html(CONSTANT_WEAPON_DESCRIPTION_TAGS);

        $traitDialogue.dialog({

            title: "Tags"

        });

        $traitDialogue.dialog("open");

        return false;


    });


    $("#intimaciesGroupLabel").css("cursor", "pointer");

    $("#intimaciesGroupLabel").click(function (event) {

        $traitDialogue.html("Intimacies are things a character cares about enough for it to affect their behaviour - causes, concepts, people, places etc.  They are important in social combat.  The higher a character's Conviction, the harder it is to gain or lose an Intimacy.");

        $traitDialogue.dialog({

            title: "Intimacy"

        });

        $traitDialogue.dialog("open");

        return false;

    });

    

    $("#health").css("cursor", "pointer");

    $("#health").click(function (event) {

        $traitDialogue.html("<p>Health levels represent the character's current state of injury.  When they are all empty, the character is uninjured.  If their Dying levels are filled, they are dead.</p>");

        $traitDialogue.append("<p>An empty box (<img src=\"" + CONSTANT_IMAGE_URL_BOX_EMPTY + "\" /> indicates that health level has not been filled by a wound.</p>");

        $traitDialogue.append("<p>A slash (<img src=\"" + CONSTANT_IMAGE_URL_BOX_BASHING + "\" /> indicates that health level has been filled with a <strong>bashing</strong> wound.</p>");

        $traitDialogue.append("<p>A cross (<img src=\"" + CONSTANT_IMAGE_URL_BOX_LETHAL + "\" /> indicates that health level has been filled with a <strong>lethal</strong> wound.</p>");

        $traitDialogue.append("<p>A star (<img src=\"" + CONSTANT_IMAGE_URL_BOX_AGGRAVATED + "\" /> indicates that health level has been filled with an <strong>aggravated</strong> wound.</p>");

        $traitDialogue.append("<p>The numbers beside the health levels are the wound penalty (an internal penalty applied to all dice rolls) suffered by the character if one of the corresponding wound levels are filled.  They are not cumulative; only the worst is suffered.  Characters with filled Incapacitated or Dying wound levels are not in a position to be making rolls of any kind.</p>");

        $traitDialogue.append("<p>All characters have one -0 health level, two -1s, two -2s, one -4 and one Incapacitated (unless granted more by effects such as Ox-Body Technique).  All characters have a number of Dying health levels equal to their Stamina.</p>");

        $traitDialogue.dialog({

            title: "Health"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#exaltedAdvantagesHeader").css("cursor", "pointer");

    $("#exaltedAdvantagesHeader").click(function (event) {

        $traitDialogue.html("<p>A catch-all category for traits, resources and powers granted by the Exalted state.</p>");

        $traitDialogue.dialog({

            title: "Exalted Advantages"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    $("#permanentEssenceWrapper").css("cursor", "pointer");

    $("#permanentEssenceWrapper").click(function (event) {

        $traitDialogue.html("<p>Essence measures the cultivation of the soul, an indicator of a character's mystic power.  Mortals and animals have Essence 1, a handful of exceptions amongst thaumaturges and martial artists aside.  The Exalted begin with Essence 2 and range upwards with experience and age.</p>");

        $traitDialogue.append("<p>The Essence trait is sometimes referred to as \"Permanent Essence\" to distinguish it from the motes of Essence spent to power Charms and spells.  Exalted and other mystically powerful beings have pools of these motes, the size of which is partially derived from the Essence trait.</p>");

        $traitDialogue.dialog({

            title: "Essence"

        });

        $traitDialogue.dialog("open");

        return false;


    });

    if (currentPC[CONSTANT_TRAIT_EXALTED]) {

        $("#limitAbilityGroupLabel").css("cursor", "pointer");

        $("#limitAbilityGroupLabel").click(function (event) {

            $traitDialogue.html("<p>The Limit Break is the manifestation of the Great Curse levied on the Exalted by the dying Primordials at the beginning of history.  When the condition of a character's Virtue Flaw is satisfied, they roll dice equal to the relevant Virtue.  Each success gives the character a point of Limit.  Solars also gain a point of Limit whenever they spend a Willpower point to resist acting on their primary Virtue or to resist Unnatural Mental Influence.  When the character has 10 points of Limit, they Limit Break.  This causes them to act in the manner described by their Virtue Flaw.</p><p>Limit Breaking grants the character points of Willpower equal to the relevant Virtue, even if that would take them over their maximum or over 10 points.  They may forgo this Willpower in order to partially control the Limit Break, with effects as described by their Virtue Flaw.");

            $traitDialogue.dialog({

                title: "Limit Break"

            });

            $traitDialogue.dialog("open");

            return false;


        });

        $("#limitBoxes").css("cursor", "pointer");

        $("#limitBoxes").click(function (event) {

            $traitDialogue.html("<p>The Limit Break is the manifestation of the Great Curse levied on the Exalted by the dying Primordials at the beginning of history.  When the condition of a character's Virtue Flaw is satisfied, they roll dice equal to the relevant Virtue.  Each success gives the character a point of Limit.  Solars also gain a point of Limit whenever they spend a Willpower point to resist acting on their primary Virtue or to resist Unnatural Mental Influence.  When the character has 10 points of Limit, they Limit Break.  This causes them to act in the manner described by their Virtue Flaw.</p><p>Limit Breaking grants the character points of Willpower equal to the relevant Virtue, even if that would take them over their maximum or over 10 points.  They may forgo this Willpower in order to partially control the Limit Break, with effects as described by their Virtue Flaw.");

            $traitDialogue.dialog({

                title: "Limit Break"

            });

            $traitDialogue.dialog("open");

            return false;


        });


        $("#virtueFlawAbilityGroupLabel").css("cursor", "pointer");

        $("#virtueFlawAbilityGroupLabel").click(function (event) {

            if (currentPC[CONSTANT_TRAIT_VIRTUE_FLAW] == CONSTANT_TRAIT_VALUE_FOOLHARDY_CONTEMPT) {

                $traitDialogue.html(CONSTANT_TRAIT_DESCRIPTION_FOOLHARDY_CONTEMPT);

            }
            
            $traitDialogue.dialog({

                title: currentPC[CONSTANT_TRAIT_VIRTUE_FLAW]

            });

            $traitDialogue.dialog("open");

            return false;


        });

        $("#virtueFlaw").css("cursor", "pointer");

        $("#virtueFlaw").click(function (event) {

            if (currentPC[CONSTANT_TRAIT_VIRTUE_FLAW] == CONSTANT_TRAIT_VALUE_FOOLHARDY_CONTEMPT) {

                $traitDialogue.html(CONSTANT_TRAIT_DESCRIPTION_FOOLHARDY_CONTEMPT);

            }
            
            $traitDialogue.dialog({

                title: currentPC[CONSTANT_TRAIT_VIRTUE_FLAW]

            });

            $traitDialogue.dialog("open");

            return false;


        });


        $("#personalMotes").css("cursor", "pointer");

        $("#personalMotes").click(function (event) {

            $traitDialogue.html("<p>Motes spent from the personal pool are under the complete control of the Exalt.  They do not contribute to the anima banner as Peripheral motes do unless the Exalt wills it.</p><p><strong>Total: </strong> This is the maximum size of the pool when no motes are committed.</p><p><strong>Committed: </strong> These are motes locked up in attuned artifacts or ongoing Charms.  These motes are unavailable to be spent, but are not themselves considered spent until the relevant Charm or artifact is released, at which point they may be regained normally via stunts, time etc.</p><p><strong>Cap:</strong> This is not an official game term.  It's the pool's maximum size minus the number of committed motes, called out explicitly in this tutorial so it's easy to see how many motes you can regain from stunting etc.</p><p><strong>Available:</strong> motes in the pool available to be spent.</p>");

            $traitDialogue.dialog({

                title: "Personal Mote Pool"

            });

            $traitDialogue.dialog("open");

            return false;


        });

        $("#peripheralMotes").css("cursor", "pointer");

        $("#peripheralMotes").click(function (event) {

            $traitDialogue.html("<p>Motes spent from the peripheral pool cause a visible essence display known as the anima banner.  The anima displays depedning on the number of motes of peripheral spent in the scene as follows:</p><p><ul><li><strong>1-3: </strong>The character's Caste Mark glitters, and may be spotted with a Perception + Awareness roll. The character may still use stealth.  This may last for up to an hour.</li><li><strong>4-7: </strong>The character's Caste Mark burns brightly and is visible through any covering.  Stealth magic fails.  Hiding in natural cover is at +2 difficulty.</li><li><strong>8-10: </strong>The character's aura of light is sufficient to read by, and their Caste Mark blazes.  Stealth is impossible.</li><li><strong>11-15: </strong>The character is a brilliant bonfire of essence, visible for miles around.  They may bleach and fade nearby objects.  Their anima power activates automatically and without cost.</li><li><strong>16+: </strong>The character's anima becomes a great totemic image of light specific to the character.  This image fades on any action where the character does not spend peripheral motes, but flares again whenever their player feels it's dramatically appropriate.</li></ul></p><p>Anima fades at the rate of one step per scene.</p><p><strong>Pool traits:</strong></p><p><strong>Total: </strong> This is the maximum size of the pool when no motes are committed.</p><p><strong>Committed: </strong> These are motes locked up in attuned artifacts or ongoing Charms.  These motes are unavailable to be spent, but are not themselves considered spent until the relevant Charm or artifact is released, at which point they may be regained normally via stunts, time etc.</p><p><strong>Cap:</strong> This is not an official game term.  It's the pool's maximum size minus the number of committed motes, called out explicitly in this tutorial so it's easy to see how many motes you can regain from stunting etc.</p><p><strong>Available:</strong> motes in the pool available to be spent.</p>");

            $traitDialogue.dialog({

                title: "Peripheral Mote Pool"

            });

            $traitDialogue.dialog("open");

            return false;


        });


        for (i = 0; i < currentPC[CONSTANT_TRAIT_CHARMS].length; i++) {

            $("#charm" + (i+1)).css("cursor", "pointer");

            tempFunction = function (event) {

                    $traitDialogue.html("<p><strong>Cost:</strong> " + arguments.callee.charm.costLabel + "</p><p><strong>Type: </strong> " + arguments.callee.charm.type + "</p><p><strong>Duration: </strong> " + arguments.callee.charm.duration + "</p><p>" + arguments.callee.charm.description + "</p>");

                    $traitDialogue.dialog({

                        title: arguments.callee.charm.label

                    });

                    $traitDialogue.dialog("open");

                return false;


            };

            tempFunction.charm = charmLibrary[currentPC[CONSTANT_TRAIT_CHARMS][i]];

            $("#charm" + (i+1)).click(tempFunction);

        }


    }


}



//###################### DOCUMENT.READY - Character Sheet dialogues ###########################################

var $traitDialogue = $("<div></div>").dialog({  //ew global!

    autoOpen: false  //Otherwise we see an open (and empty) dialog straight away

});


$(document).ready(function () {


    hookUpCharacterSheet();


});


//###################### Character Sheet dialogues (ad-hoc registering) ###########################################


//Honestly I don't remember why these things exist.  As long as things follow a Update Character --> Modify Sheet --> Hook Up Sheet flow ad-hoc click event registration shouldn't be needed
//That being said functions for types of trait hookups is so much better than all the hardcoded shit for abilities etc. so the functions themselves are fine.

function registerBackgroundDialogue(index, backgroundName, backgroundDescription, ratingText, characterText) {

    $("#traitWrapperBackground" + index).css("cursor", "pointer");

    $("#traitWrapperBackground" + index).click(function (event) {   //index is 1 based here

        $traitDialogue.html(backgroundDescription);

        $traitDialogue.append(ratingText);

        $traitDialogue.append(characterText);

        $traitDialogue.dialog({

            title: backgroundName

        });

        $traitDialogue.dialog("open");

        return false;



    });


}


function registerIntimacyDialogue(index, intimacyLabel, intimacyDescription) {

    $("#intimacy" + index).css("cursor", "pointer");

    $("#intimacy" + index).click(function(event) {  //index is 1 based

        $traitDialogue.html(intimacyDescription);

        $traitDialogue.dialog({

            title: intimacyLabel

        });

        $traitDialogue.dialog("open");

        return false;


    });


}


function registerOtherEquipment(spanID, equipmentName, equipmentText) {

    $("#" + spanID).css("cursor", "pointer");

    $("#" + spanID).click(function (event) {

        $traitDialogue.html(equipmentText);

        $traitDialogue.dialog({

            title: equipmentName

        });

        $traitDialogue.dialog("open");


    });


}