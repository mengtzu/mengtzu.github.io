

//#################################### BACKGROUNDS ##############################################



function getBackgroundByKey(backgroundKey, rating) {

    var tempBackground = {}

    //Why does this look like this?  Because I fucking loved switching on strings in Unity and it's obviously damaged my moral fibre.

    if (backgroundKey == CONSTANT_BACKGROUND_KEY_ALLIES) {

        tempBackground.label = CONSTANT_BACKGROUND_LABEL_ALLIES;
        tempBackground.description = CONSTANT_BACKGROUND_DESCRIPTION_ALLIES;

        switch (rating) {

            case 1:
                tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_ALLIES_1;
                break;

            case 2:
                tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_ALLIES_2;
                break;
            
            case 3:
                tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_ALLIES_3;
                break;
            
            case 4:
                tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_ALLIES_4;
                break;
            
            case 5:
                tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_ALLIES_5;
                break;


        }

        return tempBackground;

    }

    if (backgroundKey == CONSTANT_BACKGROUND_KEY_INFLUENCE) {

        tempBackground.label = CONSTANT_BACKGROUND_LABEL_INFLUENCE;
        tempBackground.description = CONSTANT_BACKGROUND_DESCRIPTION_INFLUENCE;

        switch (rating) {

            case 1:
                tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_INFLUENCE_1;
                break;

            case 2:
                tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_INFLUENCE_2;
                break;

            case 3:
                tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_INFLUENCE_3;
                break;

            case 4:
                tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_INFLUENCE_4;
                break;

            case 5:
                tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_INFLUENCE_5;
                break;


        }

        return tempBackground;

    }


    if (backgroundKey == CONSTANT_BACKGROUND_KEY_RESOURCES) {

        tempBackground.label = CONSTANT_BACKGROUND_LABEL_RESOURCES;
        tempBackground.description = CONSTANT_BACKGROUND_DESCRIPTION_RESOURCES;

        switch (rating) {

            case 1:
                tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_RESOURCES_1;
                break;

            case 2:
                tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_RESOURCES_2;
                break;

            case 3:
                tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_RESOURCES_3;
                break;

            case 4:
                tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_RESOURCES_4;
                break;

            case 5:
                tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_RESOURCES_5;
                break;


        }

        return tempBackground;

    }

        if (backgroundKey == CONSTANT_BACKGROUND_KEY_CONTACTS) {

            tempBackground.label = CONSTANT_BACKGROUND_LABEL_CONTACTS;
            tempBackground.description = CONSTANT_BACKGROUND_DESCRIPTION_CONTACTS;

            switch (rating) {

                case 1:
                    tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_CONTACTS_1;
                    break;

                case 2:
                    tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_CONTACTS_2;
                    break;

                case 3:
                    tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_CONTACTS_3;
                    break;

                case 4:
                    tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_CONTACTS_4;
                    break;

                case 5:
                    tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_CONTACTS_5;
                    break;


            }

            return tempBackground;

        }

        if (backgroundKey == CONSTANT_BACKGROUND_KEY_ARTIFACT) {

            tempBackground.label = CONSTANT_BACKGROUND_LABEL_ARTIFACT;
            tempBackground.description = CONSTANT_BACKGROUND_DESCRIPTION_ARTIFACT;

            switch (rating) {

                case 1:
                    tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_ARTIFACT_1;
                    break;

                case 2:
                    tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_ARTIFACT_2;
                    break;

                case 3:
                    tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_ARTIFACT_3;
                    break;

                case 4:
                    tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_ARTIFACT_4;
                    break;

                case 5:
                    tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_ARTIFACT_5;
                    break;


            }

            return tempBackground;

        }


        if (backgroundKey == CONSTANT_BACKGROUND_KEY_CULT) {

            tempBackground.label = CONSTANT_BACKGROUND_LABEL_CULT;
            tempBackground.description = CONSTANT_BACKGROUND_DESCRIPTION_CULT;

            switch (rating) {

                case 1:
                    tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_CULT_1;
                    break;

                case 2:
                    tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_CULT_2;
                    break;

                case 3:
                    tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_CULT_3;
                    break;

                case 4:
                    tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_CULT_4;
                    break;

                case 5:
                    tempBackground.ratingText = CONSTANT_BACKGROUND_DOT_DESCRIPTION_CULT_5;
                    break;


            }

            return tempBackground;

        }
    

    return tempBackground;

}


//#################################### LABELS ##############################################

function getAbilityLabelByTrait(trait) {

//This is the dumbest thing.  If I ever get serious about this I need to refactor traits to be proper entities.

    if (trait == CONSTANT_TRAIT_MELEE) {

        return CONSTANT_TRAIT_LABEL_MELEE;

    }

    if (trait == CONSTANT_TRAIT_MARTIAL_ARTS) {

        return CONSTANT_TRAIT_LABEL_MARTIAL_ARTS;

    }


    if (trait == CONSTANT_TRAIT_INVESTIGATION) {

        return CONSTANT_TRAIT_LABEL_INVESTIGATION;

    }

    if (trait == CONSTANT_TRAIT_PRESENCE) {

        return CONSTANT_TRAIT_LABEL_PRESENCE;

    }

}


function getAttributeLabelByTrait(trait) {

    if (trait == CONSTANT_TRAIT_CHARISMA) {

        return CONSTANT_TRAIT_LABEL_CHARISMA;

    }

    if (trait == CONSTANT_TRAIT_PERCEPTION) {

        return CONSTANT_TRAIT_LABEL_PERCEPTION;

    }


}


//#################################### CHARMS ##############################################



var charmLibrary = {};

//DRAGON BLOODED

//DB Stealth

charmLibrary[CHARM_DRAGON_BLOODED_FIRST_STEALTH_EXCELLENCY] = {

    key: CHARM_DRAGON_BLOODED_FIRST_STEALTH_EXCELLENCY,
    label: "First Stealth Excellency",
    characterType: TRAIT_VALUE_TYPE_DRAGON_BLOODED,
    aspect: TRAIT_VALUE_ASPECT_AIR,
    type: CHARM_TYPE_REFLEXIVE,
    duration: CHARM_DURATION_INSTANT,
    showCombat: true,
    showSocial: false,
    excellency: true,
    costLabel: "1m/2d",
    costType: CHARM_COST_TYPE_PER_DIE,
    costMotes: 0.5,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_DICE_ADDER,
    ability: CONSTANT_TRAIT_STEALTH,
    abilityMin: 1,
    essenceMin: 1,
    shortDescription: "1m/2 bonus dice, up to Stealth + Specialty dice.",
    description: "<p>The First Stealth Excellency allows dice to be added to any Stealth pool at the cost of 1 mote per 2 dice.</p><p>No combination of charms may add more than the relevant Ability + any relevant Specialties to a Dragon Blooded's dice pool.  Excess dice are lost.</p>"

};


charmLibrary[CHARM_DRAGON_BLOODED_SOUNDLESS_ACTION_PRANA] = {

    key: CHARM_DRAGON_BLOODED_SOUNDLESS_ACTION_PRANA,
    label: "Soundless Action Prana",
    characterType: TRAIT_VALUE_TYPE_DRAGON_BLOODED,
    aspect: TRAIT_VALUE_ASPECT_AIR,
    type: CHARM_TYPE_SIMPLE,
    duration: CHARM_DURATION_VARIABLE,
    showCombat: true,
    showSocial: false,
    excellency: true,
    costLabel: "1m/minute",
    costType: CHARM_COST_TYPE_FLAT,
    costMotes: 1,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_NONE,
    ability: CONSTANT_TRAIT_STEALTH,
    abilityMin: 3,
    essenceMin: 3,
    shortDescription: "The Dragon Blooded creates no sound, and is not a valid target for sound-based Perception or Awareness rolls.",
    description: "<p>The Dragon Blooded creates no sound, and is not a valid target for sound-based Perception or Awareness rolls.</p>",
    buffs: [{

        type: CONSTANT_BUFF_SILENCE,
        source: "Soundless Action Prana",
        duration: BUFF_DURATION_SCENE,  //Not really, but what are we going to do, count lots of 60 ticks?
        magnitude: 0

    }]

};



//DB ATHLETICS

charmLibrary[CHARM_DRAGON_BLOODED_FALLING_STAR_MANEUVER] = {

    key: CHARM_DRAGON_BLOODED_FALLING_STAR_MANEUVER,
    label: "Falling Star Maneuver",
    characterType: TRAIT_VALUE_TYPE_DRAGON_BLOODED,
    aspect: TRAIT_VALUE_ASPECT_FIRE,
    type: CHARM_TYPE_SUPPLEMENTAL,
    duration: CHARM_DURATION_INSTANT,
    showCombat: true,
    showSocial: false,
    excellency: false,
    attackCharm: true,
    attackCharmOtherAbilities: true,
    costLabel: "1m/2d",
    costType: CHARM_COST_TYPE_PER_DIE,
    costMotes: 0.5,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_DAMAGE_DICE_ADDER,
    ability: CONSTANT_TRAIT_ATHLETICS,
    abilityMin: 1,
    essenceMin: 1,
    shortDescription: "1m/2 bonus damage dice, up to Essence motes.",
    description: "<p>Adds 2 dice of damage to a hand-to-hand attack per mote spent, up to the user's permanent Essence in motes.</p>"


};

charmLibrary[CHARM_DRAGON_BLOODED_BELLOWS_PUMPING_STRIDE] = {

    key: CHARM_DRAGON_BLOODED_BELLOWS_PUMPING_STRIDE,
    label: "Bellows-Pumping Stride",
    characterType: TRAIT_VALUE_TYPE_DRAGON_BLOODED,
    aspect: TRAIT_VALUE_ASPECT_FIRE,
    type: CHARM_TYPE_REFLEXIVE,
    duration: CHARM_DURATION_SCENE,
    showCombat: true,
    showSocial: false,
    excellency: false,
    costLabel: "1m",
    costType: CHARM_COST_TYPE_FLAT,
    costMotes: 1,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_NONE,
    ability: CONSTANT_TRAIT_ATHLETICS,
    abilityMin: 2,
    essenceMin: 1,
    shortDescription: "Double movement distance.",
    description: "<p>While this charm is active, the Dragon Blooded doubles the distance travelled using the Move and Dash actions, and leaves a trail of firey footprints in her wake.</p>",
    buffs: [{

        type: CONSTANT_BUFF_MOVEMENT_MULTIPLIER,
        source: "Bellows-Pumping Stride",
        duration: BUFF_DURATION_SCENE,
        magnitude: 2

    }]
};


//DB Dodge


charmLibrary[CHARM_DRAGON_BLOODED_FIRST_DODGE_EXCELLENCY] = {

    key: CHARM_DRAGON_BLOODED_FIRST_DODGE_EXCELLENCY,
    label: "First Dodge Excellency",
    characterType: TRAIT_VALUE_TYPE_DRAGON_BLOODED,
    aspect: TRAIT_VALUE_ASPECT_FIRE,
    type: CHARM_TYPE_REFLEXIVE,
    duration: CHARM_DURATION_INSTANT,
    showCombat: true,
    showSocial: false,
    excellency: true,
    defenceCharm: true,
    costLabel: "1m/2d",
    costType: CHARM_COST_TYPE_PER_DIE,
    costMotes: 0.5,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_DICE_ADDER,
    ability: CONSTANT_TRAIT_DODGE,
    abilityMin: 1,
    essenceMin: 1,
    shortDescription: "1m/2 bonus dice, up to Dodge + Specialty dice.",
    description: "<p>The First Dodge Excellency allows dice to be added to any Dodge pool at the cost of 1 mote per 2 dice.</p><p>No combination of charms may add more than the relevant Ability + any relevant Specialties to a Dragon Blooded's dice pool.  Excess dice are lost.</p>"

};


//DB MELEE

charmLibrary[CHARM_DRAGON_BLOODED_FIRST_MELEE_EXCELLENCY] = {

    key: CHARM_DRAGON_BLOODED_FIRST_MELEE_EXCELLENCY,
    label: "First Melee Excellency",
    characterType: TRAIT_VALUE_TYPE_DRAGON_BLOODED,
    aspect: TRAIT_VALUE_ASPECT_FIRE,
    type: CHARM_TYPE_REFLEXIVE,
    duration: CHARM_DURATION_INSTANT,
    showCombat: true,
    showSocial: false,
    excellency: true,
    attackCharm: true,
    defenceCharm: true,
    costLabel: "1m/2d",
    costType: CHARM_COST_TYPE_PER_DIE,
    costMotes: 0.5,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_DICE_ADDER,
    ability: CONSTANT_TRAIT_MELEE,
    abilityMin: 1,
    essenceMin: 1,
    shortDescription: "1m/2 bonus dice, up to Melee + Specialty dice.",
    description: "<p>The First Melee Excellency allows dice to be added to any Melee pool at the cost of 1 mote per 2 dice.</p><p>No combination of charms may add more than the relevant Ability + any relevant Specialties to a Dragon Blooded's dice pool.  Excess dice are lost.</p>"

};


charmLibrary[CHARM_DRAGON_BLOODED_DRAGON_GRACED_WEAPON_FIRE] = {

    key: CHARM_DRAGON_BLOODED_DRAGON_GRACED_WEAPON_FIRE,
    label: "Dragon Graced Weapon (Fire)",
    characterType: TRAIT_VALUE_TYPE_DRAGON_BLOODED,
    aspect: TRAIT_VALUE_ASPECT_FIRE,
    type: CHARM_TYPE_SUPPLEMENTAL,
    duration: CHARM_DURATION_INSTANT,
    showCombat: true,
    showSocial: false,
    excellency: false,
    attackCharm: true,
    costLabel: "1m",
    costType: CHARM_COST_TYPE_FLAT,
    costMotes: 1,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_DAMAGE_DICE_ADDER,
    ability: CONSTANT_TRAIT_MELEE,
    abilityMin: 2,
    essenceMin: 1,
    shortDescription: "Adds 4 damage to a successful attack",
    description: "<p>The Dragon-Blood imparts some of her elemental nature to her weapon during an attack, causing an effect on a succesful hit based on her elemental aspect.  The fire version adds 4 to the raw damage of the attack.</p>"

};

charmLibrary[CHARM_DRAGON_BLOODED_RINGING_ANVIL_ONSLAUGHT] = {

    key: CHARM_DRAGON_BLOODED_RINGING_ANVIL_ONSLAUGHT,
    label: "Ringing Anvil Onslaught",
    characterType: TRAIT_VALUE_TYPE_DRAGON_BLOODED,
    aspect: TRAIT_VALUE_ASPECT_FIRE,
    type: CHARM_TYPE_EXTRA_ACTION,
    duration: CHARM_DURATION_INSTANT,
    showCombat: true,
    showSocial: false,
    excellency: false,
    attackCharm: true,
    costLabel: "8m",
    costType: CHARM_COST_TYPE_FLAT,
    costMotes: 8,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_NONE,
    ability: CONSTANT_TRAIT_MELEE,
    abilityMin: 5,
    essenceMin: 3,
    shortDescription: "Creates a magical flurry of 4 attacks.",
    description: "<p>This charm creates a magical flurry of melee attacks, numbering one plus the successes on an unmodified roll of the character's Melee ability, to a maximum of (1 + their Melee ability).  For simplicity in this tutorial, we'll assume that roll always comes up as three successes, for four total attacks.</p>"

};



//DB PRESENCE

charmLibrary[CHARM_DRAGON_BLOODED_FIRST_PRESENCE_EXCELLENCY] = {

    key: CHARM_DRAGON_BLOODED_FIRST_PRESENCE_EXCELLENCY,
    label: "First Presence Excellency",
    characterType: TRAIT_VALUE_TYPE_DRAGON_BLOODED,
    aspect: TRAIT_VALUE_ASPECT_FIRE,
    type: CHARM_TYPE_REFLEXIVE,
    showCombat: false,
    showSocial: true,
    excellency: true,
    costLabel: "1m/2d",
    costType: CHARM_COST_TYPE_PER_DIE,
    costMotes: 0.5,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_DICE_ADDER,
    ability: CONSTANT_TRAIT_PRESENCE,
    abilityMin: 1,
    essenceMin: 1,
    shortDescription: "1m/2 bonus dice, up to Presence + Specialty dice.",
    description: "<p>The First Presence Excellency allows dice to be added to any Presence pool at the cost of 1 mote per 2 dice.</p><p>No combination of charms may add more than the relevant Ability + any relevant Specialties to a Dragon Blooded's dice pool.  Excess dice are lost.</p>"

};



//DB MARTIAL ARTS

charmLibrary[CHARM_DRAGON_BLOODED_FIRST_MARTIAL_ARTS_EXCELLENCY] = {

    key: CHARM_DRAGON_BLOODED_FIRST_MARTIAL_ARTS_EXCELLENCY,
    label: "First Martial Arts Excellency",
    characterType: TRAIT_VALUE_TYPE_DRAGON_BLOODED,
    aspect: TRAIT_VALUE_ASPECT_WATER,
    type: CHARM_TYPE_REFLEXIVE,
    duration: CHARM_DURATION_INSTANT,
    showCombat: true,
    showSocial: false,
    excellency: true,
    attackCharm: true,
    defenceCharm: true,
    costLabel: "1m/2d",
    costType: CHARM_COST_TYPE_PER_DIE,
    costMotes: 0.5,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_DICE_ADDER,
    ability: CONSTANT_TRAIT_MARTIAL_ARTS,
    abilityMin: 1,
    essenceMin: 1,
    shortDescription: "1m/2 bonus dice, up to Martial Arts + Specialty dice.",
    description: "<p>The First Martial Arts Excellency allows dice to be added to any Martial Arts pool at the cost of 1 mote per 2 dice.</p><p>No combination of charms may add more than the relevant Ability + any relevant Specialties to a Dragon Blooded's dice pool.  Excess dice are lost.</p>"

};


//DB MARTIAL ARTS - AIR DRAGON


charmLibrary[CHARM_DRAGON_BLOODED_WIND_DRAGON_SPEED] = {

    key: CHARM_DRAGON_BLOODED_WIND_DRAGON_SPEED,
    label: "Wind Dragon Speed",
    characterType: TRAIT_VALUE_TYPE_DRAGON_BLOODED,
    aspect: TRAIT_VALUE_ASPECT_AIR,
    type: CHARM_TYPE_REFLEXIVE,
    duration: CHARM_DURATION_INSTANT,
    showCombat: true,
    showSocial: false,
    excellency: false,
    attackCharm: true,
    costLabel: "2m",
    costType: CHARM_COST_TYPE_FLAT,
    costMotes: 2,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_NONE,
    ability: CONSTANT_TRAIT_MARTIAL_ARTS,
    abilityMin: 2,
    essenceMin: 2,
    shortDescription: "Reduce a Martial Arts attack's speed by 1 (minimum 3).",
    description: "<p>Activating this charm in conjunction with an unarmed Martial Arts attack reduces its speed by 1, to a minimum of 3.</p>"

};


charmLibrary[CHARM_DRAGON_BLOODED_SHROUDING_THE_BODY_AND_MIND] = {

    key: CHARM_DRAGON_BLOODED_SHROUDING_THE_BODY_AND_MIND,
    label: "Shrouding the Body and Mind",
    characterType: TRAIT_VALUE_TYPE_DRAGON_BLOODED,
    aspect: TRAIT_VALUE_ASPECT_AIR,
    type: CHARM_TYPE_SIMPLE,
    speed: 5,
    dvPenalty: 1,
    duration: CHARM_DURATION_VARIABLE,
    showCombat: true,
    showSocial: false,
    excellency: false,
    costLabel: "4m",
    costType: CHARM_COST_TYPE_FLAT,
    costMotes: 4,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_NONE,
    ability: CONSTANT_TRAIT_MARTIAL_ARTS,
    abilityMin: 3,
    essenceMin: 2,
    shortDescription: "Renders the Dragon Blooded invisible for (Martial Arts) actions, gaining +2 successes on Reestablish Surprise actions.  Attackers suffer an external penalty of 2.",
    description: "<p>Renders the Dragon Blooded invisible for (Martial Arts) actions, gaining +2 successes on Reestablish Surprise actions.  Attackers suffer an external penalty of 2.</p>",
    buffs: [{

        type: CONSTANT_BUFF_EXTERNAL_PENALTY_TO_ATTACKERS,
        source: "Shrouding the Body and Mind",
        duration: BUFF_DURATION_VARIABLE,
        magnitude: 2

    }, {
    
        type: CONSTANT_BUFF_REESTABLISH_SURPRISE_BONUS_SUCCESSES,
        source: "Shrouding the Body and Mind",
        duration: BUFF_DURATION_VARIABLE,
        magnitude: 2    
    
    }]

};


charmLibrary[CHARM_DRAGON_BLOODED_AIR_DRAGON_FORM] = {

    key: CHARM_DRAGON_BLOODED_AIR_DRAGON_FORM,
    label: "Air Dragon Form",
    characterType: TRAIT_VALUE_TYPE_DRAGON_BLOODED,
    aspect: TRAIT_VALUE_ASPECT_AIR,
    type: CHARM_TYPE_SIMPLE,
    speed: 5,
    dvPenalty: 1,
    duration: CHARM_DURATION_SCENE,
    showCombat: true,
    showSocial: false,
    excellency: false,
    costLabel: "5m",
    costType: CHARM_COST_TYPE_FLAT,
    costMotes: 5,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_NONE,
    ability: CONSTANT_TRAIT_MARTIAL_ARTS,
    abilityMin: 4,
    essenceMin: 2,
    shortDescription: "Adds (Martial Arts) bonus dice to unarmed Martial Arts attacks, and half (Essence) to Dodge DV.",
    description: "<p>Adds (Martial Arts) bonus dice to unarmed Martial Arts attacks, and half (Essence) to Dodge DV.</p>",
    buffs: [{

        type: CONSTANT_BUFF_DODGE_DV_BONUS_CHARM,
        source: "Air Dragon Form",
        duration: BUFF_DURATION_SCENE,
        magnitude: 2  //If you happen to be Vedara or otherwise Ess 3-4, argh

    }, {
    
        type: CONSTANT_BUFF_DICE_BONUS_ATTACK_CHARM,  //Should be more specific, but Vedara will only ever use applicable attacks so eh
        source: "Air Dragon Form",
        duration: BUFF_DURATION_SCENE,
        magnitude: 5  //If you happen to be Vedara or otherwise MA 5, argh  
    
    }]

};




//SOLAR


//SOLAR ANIMA

charmLibrary[CHARM_SOLAR_DAWN_ANIMA_POWER] = {

    key: CHARM_SOLAR_DAWN_ANIMA_POWER,
    label: "Dawn Caste Anima Power",
    characterType: TRAIT_VALUE_TYPE_SOLAR_EXALTED,
    type: CHARM_TYPE_REFLEXIVE,
    duration: CHARM_DURATION_SCENE,
    showCombat: true,
    showSocial: false,
    excellency: false,
    costLabel: "5m",
    costType: CHARM_COST_TYPE_ANIMA,
    costMotes: 5,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_NONE,
    ability: CONSTANT_TRAIT_CASTE,
    abilityMin: 0,
    essenceMin: 0,
    shortDescription: "-1 external penalty to all attackers.  +2 DV bonus.  Immune to fear.",
    description: "<p>While the Dawn's anima power is active, any attempt to attack or oppose the character in any way suffers a -1 external penalty.  The character gains a +2 bonus to DVs.  The Coordinate Attacks action is at +2 difficulty against the Solar.  Finally, the Dawn is immune to fear-based Emotion effects.</p><p>This anima power activates itself automatically and without cost when the Dawn's anima banner reaches the 11-15 mote range.</p>"

};


//SOLAR MELEE

charmLibrary[CHARM_SOLAR_FIRST_MELEE_EXCELLENCY] = {

    key: CHARM_SOLAR_FIRST_MELEE_EXCELLENCY,
    label: "First Melee Excellency",
    characterType: TRAIT_VALUE_TYPE_SOLAR_EXALTED,
    type: CHARM_TYPE_REFLEXIVE,
    duration: CHARM_DURATION_INSTANT,
    showCombat: true,
    showSocial: false,
    excellency: true,
    attackCharm: true,
    defenceCharm: true,
    costLabel: "1m/d",
    costType: CHARM_COST_TYPE_PER_DIE,
    costMotes: 1,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_DICE_ADDER,
    ability: CONSTANT_TRAIT_MELEE,
    abilityMin: 1,
    essenceMin: 1,
    shortDescription: "1m per bonus die, up to Attribute + Melee dice.",
    description: "<p>When invoking the First Melee Excellency on a Melee roll, you may spend up to your (Attribute being rolled + Melee) in motes.  For each mote spent, you gain one die to your dice pool.  No combination of charms may add more than the relevant Attribute + Ability to a Solar dice pool.</p>"

};


charmLibrary[CHARM_SOLAR_DIPPING_SWALLOW_DEFENCE] = {

    key: CHARM_SOLAR_DIPPING_SWALLOW_DEFENCE,
    label: "Dipping Swallow Defence",
    characterType: TRAIT_VALUE_TYPE_SOLAR_EXALTED,
    type: CHARM_TYPE_REFLEXIVE,
    duration: CHARM_DURATION_INSTANT,
    showCombat: true,
    showSocial: false,
    excellency: false,
    defenceCharm: true,
    costLabel: "2m",
    costType: CHARM_COST_TYPE_FLAT,
    costMotes: 2,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_NONE,
    ability: CONSTANT_TRAIT_MELEE,
    abilityMin: 2,
    essenceMin: 1,
    shortDescription: "Ignore all penalties to your Parry DV for one attack.",
    description: "<p>This charm is used in response to an attack.  It allows the Solar to ignore all penalties to their Melee-derived Parry DV for that attack.  This does not make the Parry DV applicable against surprise or unblockable attacks.</p>"

};


charmLibrary[CHARM_SOLAR_BULWARK_STANCE] = {

    key: CHARM_SOLAR_BULWARK_STANCE,
    label: "Bulwark Stance",
    characterType: TRAIT_VALUE_TYPE_SOLAR_EXALTED,
    type: CHARM_TYPE_REFLEXIVE,
    duration: CHARM_DURATION_NEXT_ACTION,
    showCombat: true,
    showSocial: false,
    excellency: false,
    defenceCharm: true,
    costLabel: "5m",
    costType: CHARM_COST_TYPE_FLAT,
    costMotes: 5,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_NONE,
    ability: CONSTANT_TRAIT_MELEE,
    abilityMin: 3,
    essenceMin: 2,
    shortDescription: "Ignore all penalties to your Parry DV until your next action.",
    description: "<p>This charm allows the Solar to ignore all penalties to their Melee-derived Parry DV until their next action.  This does not make the Parry DV applicable against surprise or unblockable attacks.</p>",
    buffs: [{

        type: CONSTANT_BUFF_DV_PENALTY_REDUCTION_DEFENCE,
        source: "Bulwark Stance",
        duration: BUFF_DURATION_NEXT_ACTION,
        magnitude: 99999

    }]

};

charmLibrary[CHARM_SOLAR_HEAVENLY_GUARDIAN_DEFENCE] = {

    key: CHARM_SOLAR_HEAVENLY_GUARDIAN_DEFENCE,
    label: "Heavenly Guardian Defence",
    characterType: TRAIT_VALUE_TYPE_SOLAR_EXALTED,
    type: CHARM_TYPE_REFLEXIVE,
    duration: CHARM_DURATION_INSTANT,
    showCombat: true,
    showSocial: false,
    excellency: false,
    defenceCharm: true,
    costLabel: "8m",
    costType: CHARM_COST_TYPE_FLAT,
    costMotes: 8,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_NONE,
    ability: CONSTANT_TRAIT_MELEE,
    abilityMin: 4,
    essenceMin: 2,
    shortDescription: "Perfectly parry one attack.",
    description: "<p>This Charm is used in response to an attack, which may not be unexpected.  The attack is perfectly parried, even if unblockable.</p><p><strong>Flaw of Invulnerability (Conviction): </strong> This Charm may not be used in a scene in which the character has acted contrary to their Motivation.  It carries a 3m surcharge if the character has acted against a Virtue rated at 3+ or an Intimacy during the scene."

};

charmLibrary[CHARM_SOLAR_HUNGRY_TIGER_TECHNIQUE] = {

    key: CHARM_SOLAR_HUNGRY_TIGER_TECHNIQUE,
    label: "Hungry Tiger Technique",
    characterType: TRAIT_VALUE_TYPE_SOLAR_EXALTED,
    type: CHARM_TYPE_SUPPLEMENTAL,
    duration: CHARM_DURATION_INSTANT,
    showCombat: true,
    showSocial: false,
    excellency: false,
    attackCharm: true,
    costLabel: "1m",
    costType: CHARM_COST_TYPE_FLAT,
    costMotes: 1,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_NONE,
    ability: CONSTANT_TRAIT_MELEE,
    abilityMin: 2,
    essenceMin: 1,
    shortDescription: "Double the damage contribution of attack successes.",
    description: "<p>This Charm is used to supplement a melee attack.  If the attack hits, remaining successes are counted twice for the purpose of damage.</p>"

};


charmLibrary[CHARM_SOLAR_PROTECTION_OF_CELESTIAL_BLISS] = {

    key: CHARM_SOLAR_PROTECTION_OF_CELESTIAL_BLISS,
    label: "Protection of Celestial Bliss",
    characterType: TRAIT_VALUE_TYPE_SOLAR_EXALTED,
    type: CHARM_TYPE_REFLEXIVE,
    duration: CHARM_DURATION_SCENE,
    showCombat: true,
    showSocial: false,
    excellency: false,
    costLabel: "3m",
    costType: CHARM_COST_TYPE_FLAT,
    costMotes: 3,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_NONE,
    ability: CONSTANT_TRAIT_MELEE,
    abilityMin: 3,
    essenceMin: 2,
    shortDescription: "Add to defence and prevent DV penalties from attacks.  Can be cancelled for a perfect parry.",
    description: "<p>When activating this charm, choose a weapon you are currently wielding.  You do not take DV penalties from attacks with that weapon, and you add +2 to its Defence rating.  You may cancel this Charm in response to an attack, causing that attack to be perfectly parried, even if unblockable.  If you do so, you may not reactivate this Charm for the remainder of the scene.</p>",
    buffs: [{

        type: CONSTANT_BUFF_DV_PENALTY_REDUCTION_ATTACK,
        source: "Protection of Celestial Bliss",
        duration: BUFF_DURATION_SCENE,
        magnitude: 99999

    }, {

        type: CONSTANT_BUFF_DEFENCE_BONUS,
        source: "Protection of Celestial Bliss",
        duration: BUFF_DURATION_SCENE,
        magnitude: 2

    }, {

        type: CONSTANT_BUFF_PROTECTION_OF_CELESTIAL_BLISS,
        source: "Protection of Celestial Bliss",
        duration: BUFF_DURATION_SCENE,
        magnitude: 0

    }]

};


//SOLAR INVESTIGATION

charmLibrary[CHARM_SOLAR_SECOND_INVESTIGATION_EXCELLENCY] = {

    key: CHARM_SOLAR_SECOND_INVESTIGATION_EXCELLENCY,
    label: "Second Investigation Excellency",
    characterType: TRAIT_VALUE_TYPE_SOLAR_EXALTED,
    type: CHARM_TYPE_REFLEXIVE,
    duration: CHARM_DURATION_INSTANT,
    showCombat: false,
    showSocial: true,
    excellency: true,
    costLabel: "2m/s",
    costType: CHARM_COST_TYPE_PER_SUCCESS,
    costMotes: 2,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_SUCCESS_ADDER,
    ability: CONSTANT_TRAIT_INVESTIGATION,
    abilityMin: 1,
    essenceMin: 1,
    shortDescription: "2m per bonus success, up to half (Attribute + Investigation) successes.",
    description: "<p>When invoking the Second Investigation Excellency on an Investigation roll, you may spend up to your (Attribute being rolled + Investigation) in motes.  For each two motes spent, you gain one success on the roll.  Excess motes are lost.  Each success gained counts as two dice towards the Solar dice-adder cap; no combination of charms may add more than the relevant Attribute + Ability to a Solar dice pool.</p>"

};


charmLibrary[CHARM_SOLAR_CRAFTY_OBSERVATION_METHOD] = {

    key: CHARM_SOLAR_CRAFTY_OBSERVATION_METHOD,
    label: "Crafty Observation Method",
    characterType: TRAIT_VALUE_TYPE_SOLAR_EXALTED,
    type: CHARM_TYPE_SIMPLE,
    duration: CHARM_DURATION_INSTANT,
    showCombat: false,
    showSocial: false,
    excellency: false,
    costLabel: "5m",
    costType: CHARM_COST_TYPE_FLAT,
    costMotes: 5,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_NONE,
    ability: CONSTANT_TRAIT_INVESTIGATION,
    abilityMin: 3,
    essenceMin: 2,
    shortDescription: "Make an Investigation action Instant",
    description: "<p>Invoking this charm allows the Solar to take a dramatic Investigation action to examine observable evidence, as would normally take up to 15 minutes, instantly and without disturbing the scene.</p>"

};


//SOLAR ATHLETICS 


charmLibrary[CHARM_SOLAR_GRACEFUL_CRANE_STANCE] = {

    key: CHARM_SOLAR_GRACEFUL_CRANE_STANCE,
    label: "Graceful Crane Stance",
    characterType: TRAIT_VALUE_TYPE_SOLAR_EXALTED,
    type: CHARM_TYPE_REFLEXIVE,
    duration: CHARM_DURATION_SCENE,
    showCombat: true,
    showSocial: false,
    excellency: false,
    costLabel: "3m",
    costType: CHARM_COST_TYPE_FLAT,
    costMotes: 3,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_NONE,
    ability: CONSTANT_TRAIT_ATHLETICS,
    abilityMin: 1,
    essenceMin: 2,
    shortDescription: "Automatically succeed on balance rolls",
    description: "<p>While this charm is active, the Solar automatically succeeds on any Athletics roll to maintain her balance.  She may treat any surface at least as strong and wide as a single strand of human hair as a three-foot wide ledge capable of supporting a thousand pounds of weight.</p>",
    buffs: [{

        type: CONSTANT_BUFF_PERFECT_BALANCE,
        source: "Graceful Crane Stance",
        duration: BUFF_DURATION_SCENE,
        magnitude: 0

    }]

};


charmLibrary[CHARM_SOLAR_MONKEY_LEAP_TECHNIQUE] = {

    key: CHARM_SOLAR_MONKEY_LEAP_TECHNIQUE,
    label: "Monkey Leap Technique",
    characterType: TRAIT_VALUE_TYPE_SOLAR_EXALTED,
    type: CHARM_TYPE_REFLEXIVE,
    duration: CHARM_DURATION_SCENE,
    showCombat: true,
    showSocial: false,
    excellency: false,
    costLabel: "3m",
    costType: CHARM_COST_TYPE_FLAT,
    costMotes: 3,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_NONE,
    ability: CONSTANT_TRAIT_ATHLETICS,
    abilityMin: 1,
    essenceMin: 2,
    shortDescription: "Double jumping distance and take a reflexive jump on each action.",
    description: "<p>While this charm is active, the Solar doubles the length of all jumps.  She may take a reflexive miscellaneous action to jump on her action tick (ie the tick where her DV refreshes).</p>",
    buffs: [{

        type: CONSTANT_BUFF_JUMP_MULTIPLIER,
        source: "Monkey Leap Technique",
        duration: BUFF_DURATION_SCENE,
        magnitude: 2

    }, {

        type: CONSTANT_BUFF_JUMP_REFLEXIVE_ON_ACTION,
        source: "Monkey Leap Technique",
        duration: BUFF_DURATION_SCENE,
        magnitude: 0

    }]
};



//SOLAR AWARENESS


charmLibrary[CHARM_SOLAR_SECOND_AWARENESS_EXCELLENCY] = {

    key: CHARM_SOLAR_SECOND_AWARENESS_EXCELLENCY,
    label: "Second Awareness Excellency",
    characterType: TRAIT_VALUE_TYPE_SOLAR_EXALTED,
    type: CHARM_TYPE_REFLEXIVE,
    duration: CHARM_DURATION_INSTANT,
    showCombat: true,
    showSocial: true,
    excellency: true,
    costLabel: "2m/s",
    costType: CHARM_COST_TYPE_PER_SUCCESS,
    costMotes: 2,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_SUCCESS_ADDER,
    ability: CONSTANT_TRAIT_AWARENESS,
    abilityMin: 1,
    essenceMin: 1,
    shortDescription: "2m per bonus success, up to half (Attribute + Awareness) successes.",
    description: "<p>When invoking the Second Awareness Excellency on an Awareness roll, you may spend up to your (Attribute being rolled + Awareness) in motes.  For each two motes spent, you gain one success on the roll.  Excess motes are lost.  Each success gained counts as two dice towards the Solar dice-adder cap; no combination of charms may add more than the relevant Attribute + Ability to a Solar dice pool.</p>"

};

charmLibrary[CHARM_SOLAR_SURPRISE_ANTICIPATION_METHOD] = {

    key: CHARM_SOLAR_SURPRISE_ANTICIPATION_METHOD,
    label: "Surprise Anticipation Method",
    characterType: TRAIT_VALUE_TYPE_SOLAR_EXALTED,
    type: CHARM_TYPE_REFLEXIVE,
    duration: CHARM_DURATION_INSTANT,
    showCombat: true,
    showSocial: true,
    excellency: false,
    costLabel: "1m",
    costType: CHARM_COST_TYPE_FLAT,
    costMotes: 1,
    costWP: 0,
    bonusType: CHARM_BONUS_TYPE_NONE,
    ability: CONSTANT_TRAIT_AWARENESS,
    abilityMin: 5,
    essenceMin: 2,
    shortDescription: "Automatically detect surprise attacks or danger",
    description: "<p>This charm causes any valid Awareness roll to detect mortal danger to automatically succeed, even if the Solar is asleep.  The charm invokes itself at any time the Solar must make such a roll, will not already automatically succeed, and has sufficient motes to pay its cost.</p>"

};




//#################################### VIRTUES ##############################################

var virtueLibrary = {};

virtueLibrary[CONSTANT_TRAIT_COMPASSION] = {

    label: "Compassion",
    tempTrait: CONSTANT_TRAIT_COMPASSION_CURRENT,
    trait: CONSTANT_TRAIT_COMPASSION
    
};

virtueLibrary[CONSTANT_TRAIT_CONVICTION] = {

    label: "Conviction",
    tempTrait: CONSTANT_TRAIT_CONVICTION_CURRENT,
    trait: CONSTANT_TRAIT_CONVICTION
    
};

virtueLibrary[CONSTANT_TRAIT_TEMPERANCE] = {

    label: "Temperance",
    tempTrait: CONSTANT_TRAIT_TEMPERANCE_CURRENT,
    trait: CONSTANT_TRAIT_TEMPERANCE
    
};

virtueLibrary[CONSTANT_TRAIT_VALOUR] = {

    label: "Valor",
    tempTrait: CONSTANT_TRAIT_VALOUR_CURRENT,
    trait: CONSTANT_TRAIT_VALOUR
    
};

