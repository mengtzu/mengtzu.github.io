

erg.utilities.poh = {};


//############################################ DICE ROLL UTILITIES ######################################################

erg.utilities.poh.d100 = function () {

    return Math.floor(Math.random() * 100);

}


//############################################ MISC SORT UTILITIES ######################################################


erg.utilities.poh.preferredNameSort = function (a, b) {

    var nameA = a.preferredName.toLowerCase();

    var nameB = b.preferredName.toLowerCase();

    if (nameA < nameB) {

        return -1;

    }

    if (nameA > nameB) {

        return 1;

    }

    return 0;

}


//############################################ PROFILE UTILITIES ######################################################

erg.utilities.poh.getProfileThumbURL = function (heart) {

    var profileURL = erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceImageSubdirectory"] + "/" + erg.constants["applicationResourceImageProfileThumbsSubdirectory"];

    profileURL += "/" + heart.profilePrefix;

    profileURL += erg.constants["profileExtension"];

    return profileURL;

};

erg.utilities.poh.getProfileLargeURL = function (heart) {

    var profileURL = erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceImageSubdirectory"] + "/" + erg.constants["applicationResourceImageProfileLargeSubdirectory"];

    profileURL += "/" + heart.profilePrefix;

    profileURL += erg.constants["profileExtension"];

    return profileURL;

};


erg.utilities.poh.getLetterImageURL = function (letterFile) {

    var profileURL = erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceImageSubdirectory"] + "/" + erg.constants["applicationResourceImageLettersSubdirectory"] + "/" + letterFile;

    return profileURL;

};







//############################################ TRAIT UTILITIES ######################################################


erg.utilities.poh.hasTrait = function (trait, heart) {

    var i;

    for (i = 0; i < heart.attractionTraits.length; i++) {

        if (heart.attractionTraits[i] === trait) {

            return true;

        }

    }

    for (i = 0; i < heart.reactionTraits.length; i++) {

        if (heart.reactionTraits[i] === trait) {

            return true;

        }

    }

    for (i = 0; i < heart.specialTraits.length; i++) {

        if (heart.specialTraits[i] === trait) {

            return true;

        }

    }

    return false;

};



erg.utilities.poh.getAndExectueRandomTraitChange = function (heart) {

    var newTraitKey;

    var oldTraitKey;

    var traitCategory = erg.constants["pohTraitCategoryAttraction"];

    var arrayToSplice = heart.attractionTraits;

    var arrayToPickFrom = erg.world[erg.constants["pohValidRandomAttractionTraits"]];

    var candidateArray = new Array();

    var scenario;

    var i;

    if (erg.utilities.poh.d100() < 50) {    //Coin toss

        traitCategory = erg.constants["pohTraitCategoryReaction"]

        arrayToSplice = heart.reactionTraits;

        arrayToPickFrom = erg.world[erg.constants["pohValidRandomReactionTraits"]];

    }

    for (i = 0; i < arrayToPickFrom.length; i++) {

        if (!erg.utilities.poh.hasTrait(arrayToPickFrom[i], heart)) {

            candidateArray.push(arrayToPickFrom[i]);

        }

    }


    erg.utilities.shuffleArray(arrayToSplice);

    oldTraitKey = arrayToSplice[arrayToSplice.length - 1];
    arrayToSplice.splice(arrayToSplice.length - 1, 1);

    erg.utilities.shuffleArray(candidateArray);
    newTraitKey = candidateArray[0];
    arrayToSplice.push(newTraitKey);

    erg.utilities.poh.sortTraits(heart);

    scenario = erg[erg.constants["pohTraitChangeScenarios"]][newTraitKey];

    return {

        scenario: scenario,
        newTraitLabel: erg[erg.constants["pohTraits"]][newTraitKey].label,
        oldTraitLabel: erg[erg.constants["pohTraits"]][oldTraitKey].label

    }


}


erg.utilities.poh.handleAdviceTraitChange = function (heart, news) {

    var i;

    var newTraitKey;

    var oldTraitKey = news.trait;

    var traitCategory = erg.constants["pohTraitCategoryAttraction"];

    var arrayToSplice = heart.attractionTraits;

    var arrayToPickFrom = erg.world[erg.constants["pohValidRandomAttractionTraits"]];

    var candidateArray = new Array();

    var scenario;

    var newsItem;

    var newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypePassionChange"]];


    if (erg[erg.constants["pohTraits"]][oldTraitKey].category !== traitCategory) {

        traitCategory = erg.constants["pohTraitCategoryReaction"]

        arrayToSplice = heart.reactionTraits;

        arrayToPickFrom = erg.world[erg.constants["pohValidRandomReactionTraits"]];

    }

    for (i = 0; i < arrayToPickFrom.length; i++) {

        if (!erg.utilities.poh.hasTrait(arrayToPickFrom[i], heart)) {

            candidateArray.push(arrayToPickFrom[i]);

        }

    }

    for (i = arrayToSplice.length - 1; i >= 0; i--) {

        if (arrayToSplice[i] === oldTraitKey) {

            arrayToSplice.splice(i, 1);

        }

    }

    erg.utilities.shuffleArray(candidateArray);
    newTraitKey = candidateArray[0];
    arrayToSplice.push(newTraitKey);

    erg.utilities.poh.sortTraits(heart);

    scenario = erg[erg.constants["pohTraitChangeScenarios"]][newTraitKey];

    if (scenario) {

        newsItem = {

            category: newsType.category,
            type: newsType.type,
            title: scenario.title.replace(/Heart1/g, heart.preferredName),
            image: erg.utilities.poh.getProfileLargeURL(heart),
            imageSmall: erg.utilities.poh.getProfileThumbURL(heart),
            text: scenario.text.replace(/Heart1/g, heart.preferredName).replace(/NewTrait/g, erg[erg.constants["pohTraits"]][newTraitKey].label).replace(/OldTrait/g, erg[erg.constants["pohTraits"]][oldTraitKey].label),
            subjectHeartKey: heart.key,
            summary: heart.preferredName + " trait change: " + erg[erg.constants["pohTraits"]][oldTraitKey].label + " --&gt; " + erg[erg.constants["pohTraits"]][newTraitKey].label,
            timeStamp: new Date().getTime()

        }

        erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push(newsItem);

    }

}


erg.utilities.poh.traitSort = function (a, b) {

    if (erg[erg.constants["pohTraits"]][a].label < erg[erg.constants["pohTraits"]][b].label) {

        return -1;

    }

    if (erg[erg.constants["pohTraits"]][a].label > erg[erg.constants["pohTraits"]][b].label) {

        return 1;

    }

    return 0;

}


erg.utilities.poh.sortTraits = function (heart) {

    heart.attractionTraits.sort(erg.utilities.poh.traitSort);
    heart.reactionTraits.sort(erg.utilities.poh.traitSort);
    heart.specialTraits.sort(erg.utilities.poh.traitSort);


}


//############################################ ATTRACTION UTILITIES ######################################################

erg.utilities.poh.getAttractionTargetValueLabel = function (target, key) {

    //Daddy didn't think this one through.

    if (target === erg.constants["pohAttractionTargetHairLength"]) {

        return erg[erg.constants["pohHairLength"]][key].label;

    }

    if (target === erg.constants["pohAttractionTargetHairColour"]) {

        return erg[erg.constants["pohHairColour"]][key].label;

    }

    if (target === erg.constants["pohAttractionTargetEyeColour"]) {

        return erg[erg.constants["pohEyeColour"]][key].label;

    }

    if (target === erg.constants["pohAttractionTargetSpecies"]) {

        return erg[erg.constants["pohSpecies"]][key].label;

    }

}


erg.utilities.poh.generateBaseAttraction = function () {


    return Math.floor(Math.random() * erg.constants["pohBaseAttractionRange"]) + erg.constants["pohBaseAttractionMinimum"];


}

erg.utilities.poh.adjustBaseAttraction = function (heart1, heart2Key, adjustment) {

    var newAttraction = erg.utilities.getFromArrayByKey(heart1.connections, heart2Key).baseAttraction + adjustment;

    if (newAttraction < erg.constants["pohCurrentAttractionMinimum"]) {

        newAttraction = erg.constants["pohCurrentAttractionMinimum"];

    }

    if (newAttraction > erg.constants["pohCurrentAttractionMaximum"]) {

        newAttraction = erg.constants["pohCurrentAttractionMaximum"];

    }

    erg.utilities.getFromArrayByKey(heart1.connections, heart2Key).baseAttraction = newAttraction;

    return newAttraction;  //Except you probably don't want to use it as I don't think the user ever sees it.

}

erg.utilities.poh.getCurrentAttraction = function (attractee, attractor) {

    var i;

    var j;

    var attractionBonus = 0;

    var trait;

    var tierDiff;

    var connection = erg.utilities.getFromArrayByKey(attractee.connections, attractor.key);

    var totalAttraction = connection.baseAttraction;

    var reputationBonus;

    //########################################### SPECIAL TRAIT HACK ###########################################

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialImpossiblyBeautiful"], attractor)) {

        totalAttraction += erg.constants["pohTraitSpecialImpossiblyBeautifulAttractionBonus"];

    }


    //########################################### END SPECIAL TRAIT HACK #######################################


    //Reputation

    reputationBonus = Math.floor((erg.utilities.getFromArrayByKey(attractor.attributes, erg.constants["pohAttributeReputation"]).value - erg.constants["pohReputationMidpoint"]) / erg.constants["pohReputationAttractionFactor"]);

    totalAttraction += reputationBonus;

    //Traits

    for (i = 0; i < attractee.attractionTraits.length; i++) {

        trait = erg[erg.constants["pohTraits"]][attractee.attractionTraits[i]];

        if (trait.type === erg.constants["pohTraitTypeAttractionModifierAutomaticBuff"]) {

            attractionBonus += trait.magnitude;

        }

        if (trait.type === erg.constants["pohTraitTypeAttractionModifierAutomaticPenalty"]) {

            attractionBonus -= trait.magnitude;

        }

        if (trait.type === erg.constants["pohTraitTypeAttractionModifierConditional"]) {

            //Hair Length - yes I know this sucks from a DRY perspective, it will haunt me and I'll refactor it.
            //Though since Tier is supposed to work differently, maybe premature generalisation would be bad.

            if (trait.target === erg.constants["pohAttractionTargetHairLength"]) {

                for (j = 0; j < trait.positive.length; j++) {

                    if (attractor.hairLength === trait.positive[j]) {

                        attractionBonus += trait.magnitude;

                        //############################### SPECIAL TRAIT HACK ###################################
                        if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialTelegnosis"], attractee)) {

                            attractionBonus += trait.magnitude;

                        }
                        //############################### END SPECIAL TRAIT HACK ###############################

                    }

                }

                for (j = 0; j < trait.negative.length; j++) {

                    if (attractor.hairLength === trait.negative[j]) {

                        attractionBonus -= trait.magnitude;

                        //############################### SPECIAL TRAIT HACK ###################################
                        if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialTelegnosis"], attractee)) {

                            attractionBonus -= trait.magnitude;

                        }
                        //############################### END SPECIAL TRAIT HACK ###############################

                    }

                }

            }

            //Hair Colour

            if (trait.target === erg.constants["pohAttractionTargetHairColour"]) {

                for (j = 0; j < trait.positive.length; j++) {

                    if (attractor.hairColour === trait.positive[j]) {

                        attractionBonus += trait.magnitude;

                        //############################### SPECIAL TRAIT HACK ###################################
                        if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialTelegnosis"], attractee)) {

                            attractionBonus += trait.magnitude;

                        }
                        //############################### END SPECIAL TRAIT HACK ###############################

                    }

                }

                for (j = 0; j < trait.negative.length; j++) {

                    if (attractor.hairColour === trait.negative[j]) {

                        attractionBonus -= trait.magnitude;

                        //############################### SPECIAL TRAIT HACK ###################################
                        if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialTelegnosis"], attractee)) {

                            attractionBonus -= trait.magnitude;

                        }
                        //############################### END SPECIAL TRAIT HACK ###############################

                    }

                }

            }

            //Eye Colour

            if (trait.target === erg.constants["pohAttractionTargetEyeColour"]) {

                for (j = 0; j < trait.positive.length; j++) {

                    if (attractor.eyeColour === trait.positive[j]) {

                        attractionBonus += trait.magnitude;

                        //############################### SPECIAL TRAIT HACK ###################################
                        if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialTelegnosis"], attractee)) {

                            attractionBonus += trait.magnitude;

                        }
                        //############################### END SPECIAL TRAIT HACK ###############################

                    }

                }

                for (j = 0; j < trait.negative.length; j++) {

                    if (attractor.eyeColour === trait.negative[j]) {

                        attractionBonus -= trait.magnitude;

                        //############################### SPECIAL TRAIT HACK ###################################
                        if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialTelegnosis"], attractee)) {

                            attractionBonus -= trait.magnitude;

                        }
                        //############################### END SPECIAL TRAIT HACK ###############################

                    }

                }

            }

            //Species

            if (trait.target === erg.constants["pohAttractionTargetSpecies"]) {

                for (j = 0; j < trait.positive.length; j++) {

                    if (attractor.species === trait.positive[j]) {

                        attractionBonus += trait.magnitude;

                    }

                }

                for (j = 0; j < trait.negative.length; j++) {

                    if (attractor.species === trait.negative[j]) {

                        attractionBonus -= trait.magnitude;

                    }

                }

            }

            //Tier

            if (trait.target === erg.constants["pohAttractionTargetTier"]) {

                if (trait.subtarget === erg.constants["pohAttractionSubtargetTierLower"]) {

                    tierDiff = erg[erg.constants["pohTiers"]][attractee.tier].magnitude - erg[erg.constants["pohTiers"]][attractor.tier].magnitude;

                    if (tierDiff < 0) {

                        tierDiff = 0;

                    }

                    attractionBonus += trait.magnitude * tierDiff;

                }

                if (trait.subtarget === erg.constants["pohAttractionSubtargetTierHigher"]) {

                    tierDiff = erg[erg.constants["pohTiers"]][attractor.tier].magnitude - erg[erg.constants["pohTiers"]][attractee.tier].magnitude;

                    if (tierDiff < 0) {

                        tierDiff = 0;

                    }

                    attractionBonus += trait.magnitude * tierDiff;

                }

                if (trait.subtarget === erg.constants["pohAttractionSubtargetTierEqual"]) {

                    tierDiff = Math.abs(erg[erg.constants["pohTiers"]][attractee.tier].magnitude - erg[erg.constants["pohTiers"]][attractor.tier].magnitude);

                    attractionBonus += trait.magnitude - (trait.magnitudeVariable * tierDiff);

                }

            }

            //Special

            //############################### SPECIAL TRAIT HACK ###################################

            if (trait.target === erg.constants["pohTraitSpecialShipCaptain"] && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialShipCaptain"], attractor)) {

                attractionBonus += trait.magnitude;

                //console.log(attractee.preferredName + " likes the cut of " + attractor.preferredName + "'s uniform!");

            }


            //############################# END SPECIAL TRAIT HACK #################################


        }

    }

    totalAttraction += attractionBonus;


    //#################################### SPECIAL TRAIT HACK ####################################################

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialUndefinedFantasticObject"], attractor) && erg.utilities.getFromArrayByKey(attractor.connections, attractee.key).passion < erg.constants["pohTraitSpecialUndefinedFantasticObjectThreshold"]) {

        totalAttraction = erg.constants["pohTraitSpecialUndefinedFantasticObjectAttraction"];

        //console.log("Nue let " + attractee.preferredName + " see what she wanted to see.");

    }


    //#################################### SPECIAL TRAIT HACK ####################################################

    if (totalAttraction < erg.constants["pohCurrentAttractionMinimum"]) {

        totalAttraction = 0;

    }

    if (totalAttraction > erg.constants["pohCurrentAttractionMaximum"]) {

        totalAttraction = erg.constants["pohCurrentAttractionMaximum"];

    }

    return totalAttraction;

}


//############################################ CONNECTION UTILITIES ######################################################

erg.utilities.poh.generateBasePassion = function () {


    return Math.floor(Math.random() * erg.constants["pohBasePassionRange"]) + erg.constants["pohBasePassionMinimum"];


}


erg.utilities.getPassionTrackStageLabel = function (connection) {

    var i;

    var track = erg[erg.constants["pohPassionTracks"]][connection.track];

    track.stages.sort(function (a, b) {  //Sort into ascending order, so the logic for which stage we fit into is a simple less than

        if (a.threshold < b.threshold) {

            return -1;

        }

        if (a.threshold > b.threshold) {

            return -1;

        }
        return 0;

    });

    for (i = 0; i < track.stages.length; i++) {

        if (connection.passion <= track.stages[i].threshold) {

            return track.stages[i].label;

        }

    }

    return "She's a touhou";

}

erg.utilities.poh.modifyPassion = function (heart, connectionKey, modifier) {

    var newPassion = erg.utilities.getFromArrayByKey(heart.connections, connectionKey).passion + modifier;

    if (newPassion < erg.constants["pohCurrentPassionMinimum"]) {

        newPassion = erg.constants["pohCurrentPassionMinimum"];

    }

    if (newPassion > erg.constants["pohCurrentPassionMaximum"]) {

        newPassion = erg.constants["pohCurrentPassionMaximum"];

    }

    erg.utilities.getFromArrayByKey(heart.connections, connectionKey).passion = newPassion;

    return newPassion;

}

erg.utilities.poh.getRandomPassionChangeScenario = function (heartKey) {

    var validScenarios = new Array();

    var scenarios = erg[erg.constants["pohPassionChangeScenarios"]];

    for (scenario in scenarios) {

        if ((scenarios[scenario].heart !== heartKey) && (erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], scenarios[scenario].heart).active)) {

            validScenarios.push(scenarios[scenario].key);

        }

    }

    erg.utilities.shuffleArray(validScenarios);

    return scenarios[validScenarios[0]];

}

erg.utilities.poh.handleAdvicePassionChange = function (heart, news) {

    var i;

    var scenarios = erg[erg.constants["pohPassionChangeScenarios"]];

    var scenario;

    var newsItem;

    var newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypePassionChange"]];

    var newPassionValue;

    var heart2;

    for (scenarioIndex in scenarios) {

        if (scenarios[scenarioIndex].heart === news.targetHeart && ((news.type === erg.constants["pohAdviceExtracurricularPassionRaise"] && scenarios[scenarioIndex].change > 0) || (news.type === erg.constants["pohAdviceExtracurricularPassionLower"] && scenarios[scenarioIndex].change < 0))) {

            scenario = scenarios[scenarioIndex];

        }

    }

    if (scenario) {

        newPassionValue = newPassionValue = erg.utilities.poh.modifyPassion(heart, scenario.heart, scenario.change);

        heart2 = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], scenario.heart);

        newsItem = {

            category: newsType.category,
            type: newsType.type,
            title: scenario.title.replace(/Heart1/g, heart.preferredName),
            image: erg.utilities.poh.getProfileLargeURL(heart),
            imageSmall: erg.utilities.poh.getProfileThumbURL(heart),
            imageSmall2: erg.utilities.poh.getProfileThumbURL(heart2),
            text: scenario.text.replace(/Heart1/g, heart.preferredName).replace(/HeartNewPassionValue1/g, newPassionValue),
            summary: heart.preferredName + "'s passion for " + heart2.preferredName + " change: " + scenario.change + " (to " + newPassionValue + ")",
            subjectHeartKey: heart.key,
            subject2HeartKey: heart2.key,
            timeStamp: new Date().getTime()

        }

        erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push(newsItem);

    }

}

//############################################ ATTRIBUTE UTILITIES ######################################################

erg.utilities.poh.generateBaseAttribute = function () {


    return Math.floor(Math.random() * erg.constants["pohBaseAttributeRange"]) + erg.constants["pohBaseAttributeMinimum"];


}

erg.utilities.poh.adjustAttribute = function (heart, attributeKey, adjustment) {

    var tempAttribute = erg.utilities.getFromArrayByKey(heart.attributes, attributeKey).value + adjustment;

    if (tempAttribute < erg.constants["pohCurrentAttributeMinimum"]) {

        tempAttribute = erg.constants["pohCurrentAttributeMinimum"];

    }

    if (tempAttribute > erg.constants["pohCurrentAttributeMaximum"]) {

        tempAttribute = erg.constants["pohCurrentAttributeMaximum"];

    }

    erg.utilities.getFromArrayByKey(heart.attributes, attributeKey).value = tempAttribute;

    return tempAttribute;
}


//############################################ ATTRIBUTE TEST UTILITIES ######################################################

erg.utilities.poh.rollAttribute = function (heart, attributeKey, bonus) {

    //d100 roll under

    if (!bonus) {

        bonus = 0;

    }

    var attributeRating = erg.utilities.getFromArrayByKey(heart.attributes, attributeKey).value + bonus;

    var random = Math.floor(Math.random() * erg.constants["pohAttributeRollRandomMultiplier"]);

    if (random <= attributeRating) {

        return true;

    }

    return false;
};

erg.utilities.poh.getReactionTraitTestResultModifiers = function (heart, attributeKey) {

    var success = 0;

    var fail = 0;

    var i;

    var j;

    var trait;

    for (i = 0; i < heart.reactionTraits.length; i++) {

        trait = erg[erg.constants["pohTraits"]][heart.reactionTraits[i]];

        for (j = 0; j < trait.attributes.length; j++) {

            if (trait.attributes[j].key === attributeKey) {

                success += trait.attributes[j].success;
                fail += trait.attributes[j].fail;

            }

        }

    }

    //####################################################### SPECIAL TRAIT HACK ########################################################################

    if (attributeKey === erg.constants["pohAttributeCourage"] && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialSurprise"], heart)) {

        success += erg.constants["pohTraitSpecialSurpriseCourageSuccess"];
        fail += erg.constants["pohTraitSpecialSurpriseCourageFail"];

    }

    if (attributeKey === erg.constants["pohAttributeCourage"] && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialDisguisedOni"], heart)) {

        success += erg.constants["pohTraitSpecialDisguisedOniCourageSuccess"];
        fail += erg.constants["pohTraitSpecialDisguisedOniCourageFail"];

    }

    if (attributeKey === erg.constants["pohAttributeSociability"] && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialDisguisedOni"], heart)) {

        success += erg.constants["pohTraitSpecialDisguisedOniSociabilitySuccess"];
        fail += erg.constants["pohTraitSpecialDisguisedOniSociabilityFail"];

    }


    //##################################################### END SPECIAL TRAIT HACK ######################################################################

    //If there's no trait or the effects of traits cancel, then we revert to defaults.  Lots of ifs because of the differing values for categories.

    if (success === 0) {

        if (erg[erg.constants["pohAttributes"]][attributeKey].category === erg.constants["pohAttributeCategoryPositive"]) {

            success = erg.constants["pohAttributeTestDefaultPositiveSuccessChange"];

        }

        if (erg[erg.constants["pohAttributes"]][attributeKey].category === erg.constants["pohAttributeCategoryNegative"]) {

            success = erg.constants["pohAttributeTestDefaultNegativeSuccessChange"];

        }

    }

    if (fail === 0) {

        if (erg[erg.constants["pohAttributes"]][attributeKey].category === erg.constants["pohAttributeCategoryPositive"]) {

            fail = erg.constants["pohAttributeTestDefaultPositiveFailChange"];

        }

        if (erg[erg.constants["pohAttributes"]][attributeKey].category === erg.constants["pohAttributeCategoryNegative"]) {

            fail = erg.constants["pohAttributeTestDefaultNegativeFailChange"];

        }

    }

    return { success: success, fail: fail };  //We're returning an object, remember to get out the value you want :)

};


erg.utilities.poh.resolveAttributeTestScenario = function (heart1, heart2, attributeTestScenario) {

    var heart1AttributeKey = attributeTestScenario.heart1Attribute;  //Testing, refactor to get out of scenario
    var heart1Bonus = 0;
    var heart1Success;
    var heart1PassionChange;
    var heart1NewPassion;

    var heart2AttributeKey = attributeTestScenario.heart2Attribute;  //Testing, refactor to get out of scenario
    var heart2Bonus = 0;
    var heart2Success;
    var heart2PassionChange;
    var heart2NewPassion;

    var heart1Modifiers = erg.utilities.poh.getReactionTraitTestResultModifiers(heart1, heart2AttributeKey); 
    var heart2Modifiers = erg.utilities.poh.getReactionTraitTestResultModifiers(heart2, heart1AttributeKey); 

    var relationshipChange = false;
    var relationshipChangeMagnitude = 0;
    var relationshipNewStrength;


    //######################################## SPECIAL TRAIT HACK #####################################################

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialMournfulMusic"], heart1) && heart1AttributeKey === erg.constants["pohAttributeExpression"]) {

        heart2Bonus = erg.constants["pohTraitSpecialMournfulMusicBonus"];

        //console.log(heart1.preferredName + " depressed " + heart2.preferredName + " (heart1)");

    }

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialMournfulMusic"], heart2) && heart2AttributeKey === erg.constants["pohAttributeExpression"]) {

        heart1Bonus = erg.constants["pohTraitSpecialMournfulMusicBonus"];

        //console.log(heart2.preferredName + " depressed " + heart1.preferredName + " (heart2)");

    }

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialManicMusic"], heart1) && heart1AttributeKey === erg.constants["pohAttributeExpression"]) {

        heart2Bonus = erg.constants["pohTraitSpecialManicMusicBonus"];

        //console.log(heart1.preferredName + " excited " + heart2.preferredName + " (heart1)");

    }

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialManicMusic"], heart2) && heart2AttributeKey === erg.constants["pohAttributeExpression"]) {

        heart1Bonus = erg.constants["pohTraitSpecialManicMusicBonus"];

        //console.log(heart2.preferredName + " excited " + heart1.preferredName + " (heart2)");

    }

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialImpossibleMusic"], heart1) && (!(heart1AttributeKey === erg.constants["pohAttributeExpression"]))) {

        heart1Bonus = Math.floor(erg.utilities.getFromArrayByKey(heart1.attributes, erg.constants["pohAttributeExpression"]).value * erg.constants["pohTraitSpecialImpossibleMusicExpressionBonusFactor"]);

    }

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialImpossibleMusic"], heart2) && (!(heart1AttributeKey === erg.constants["pohAttributeExpression"]))) {

        heart2Bonus = Math.floor(erg.utilities.getFromArrayByKey(heart2.attributes, erg.constants["pohAttributeExpression"]).value * erg.constants["pohTraitSpecialImpossibleMusicExpressionBonusFactor"]);

    }

    //###################################### END SPECIAL TRAIT HACK ###################################################

    //Test for success

    heart1Success = erg.utilities.poh.rollAttribute(heart1, heart1AttributeKey, heart1Bonus);
    heart2Success = erg.utilities.poh.rollAttribute(heart2, heart2AttributeKey, heart2Bonus);

    //######################################## SPECIAL TRAIT HACK ################################################

    if (heart1AttributeKey === heart2AttributeKey && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialEcho"], heart1)) {

        heart1Success = heart2Success;

    }

    if (heart1AttributeKey === heart2AttributeKey && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialEcho"], heart2)) {

        heart2Success = heart1Success;

    }


    //######################################## END SPECIAL TRAIT HACK ################################################

    //Heart 2's passion change

    heart2PassionChange = heart2Modifiers.fail;  //Really supposed to be heart 2, as the test changes the OTHER heart's passion rating back to this one.

    if (heart1Success) {

        heart2PassionChange = heart2Modifiers.success;

    }

    //Heart 1's passion chage


    heart1PassionChange = heart1Modifiers.fail;  //Really supposed to be heart 1, as the test changes the OTHER heart's passion rating back to this one.

    if (heart2Success) {

        heart1PassionChange = heart1Modifiers.success;

    }


    //######################################## SPECIAL TRAIT HACK ################################################

    if (heart1AttributeKey === erg.constants["pohAttributeExpression"] && heart1Success && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialFillingTheWorldWithLight"], heart1)) {

        heart2PassionChange += erg.constants["pohTraitSpecialFillingTheWorldWithLightPassionBonus"];
        //console.log("Byakuren filled the world with light - Heart1");

    }

    if (heart2AttributeKey === erg.constants["pohAttributeExpression"] && heart2Success && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialFillingTheWorldWithLight"], heart2)) {

        heart1PassionChange += erg.constants["pohTraitSpecialFillingTheWorldWithLightPassionBonus"];
        //console.log("Byakuren filled the world with light - Heart2");

    }


    if (heart1AttributeKey === erg.constants["pohAttributeCleverness"] && heart1Success && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialBrainOfTheMoon"], heart1)) {

        heart2PassionChange += erg.constants["pohTraitSpecialBrainOfTheMoonPassionBonus"];
        //console.log("Eirin used her brain - Heart1");

    }

    if (heart2AttributeKey === erg.constants["pohAttributeCleverness"] && heart2Success && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialBrainOfTheMoon"], heart2)) {

        heart1PassionChange += erg.constants["pohTraitSpecialBrainOfTheMoonPassionBonus"];
        //console.log("Eirin used her brain - Heart2");

    }

    if (heart1AttributeKey === erg.constants["pohAttributeCourage"] && heart1Success && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialFlameOfHourai"], heart1)) {

        heart2PassionChange += erg.constants["pohTraitSpecialFlameOfHouraiPassionBonus"];
        //console.log("Mokou unfurled her wings - Heart1");

    }

    if (heart2AttributeKey === erg.constants["pohAttributeCourage"] && heart2Success && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialFlameOfHourai"], heart2)) {

        heart1PassionChange += erg.constants["pohTraitSpecialFlameOfHouraiPassionBonus"];
        //console.log("Mokou unfurled her wings - Heart2");

    }


    if (heart1AttributeKey === erg.constants["pohAttributeSociability"] && heart1Success && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialMoneylender"], heart1)) {

        heart2PassionChange += erg.constants["pohTraitSpecialMoneylenderPassionBonus"];

    }

    if (heart2AttributeKey === erg.constants["pohAttributeSociability"] && heart2Success && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialMoneylender"], heart2)) {

        heart1PassionChange += erg.constants["pohTraitSpecialMoneylenderPassionBonus"];

    }

    //######################################## END SPECIAL TRAIT HACK ################################################



    //Change the connections

    heart1NewPassion = erg.utilities.poh.modifyPassion(heart1, heart2.key, heart1PassionChange);
    heart2NewPassion = erg.utilities.poh.modifyPassion(heart2, heart1.key, heart2PassionChange);

    //Calculate Relationship change

    if ((heart1PassionChange < 0 && heart2PassionChange < 0) || (heart1PassionChange > 0 && heart2PassionChange > 0)) {

        relationshipChange = true;
        relationshipChangeMagnitude = Math.floor((heart1PassionChange + heart2PassionChange) / 2);

    }

    //Change the relationship

    if (relationshipChange) {

        relationshipNewStrength = erg.utilities.poh.adjustRelationshipStrength(heart1.key, heart2.key, relationshipChangeMagnitude);

    }

    return { heart1Success: heart1Success, heart2PassionChange: heart2PassionChange, heart2NewPassion: heart2NewPassion, heart2Success: heart2Success, heart1PassionChange: heart1PassionChange, heart1NewPassion: heart1NewPassion, relationshipChange: relationshipChange, relationshipChangeMagnitude: relationshipChangeMagnitude, relationshipNewStrength: relationshipNewStrength };

};


//############################################ ATTRIBUTE CHANGE SCENARIO UTILITIES ######################################################

erg.utilities.poh.getRandomAttributeChangeScenario = function () {

    var scenarios = erg.world[erg.constants["pohValidRandomAttributeChangeScenarios"]];

    erg.utilities.shuffleArray(scenarios);

    return erg[erg.constants["pohAttributeChangeScenarios"]][scenarios[0]];


}

erg.utilities.poh.handleAdviceAttributeChange = function (heart, news) {

    var i;

    var scenarios = erg.world[erg.constants["pohValidRandomAttributeChangeScenarios"]];

    var tempScenario;

    var scenario;

    var newsItem;

    var newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeAttributeChange"]];

    var newAttributeValue;

    for (i = 0; i < scenarios.length; i++) {

        tempScenario = erg[erg.constants["pohAttributeChangeScenarios"]][scenarios[i]];

        if (tempScenario.attribute === news.attribute && ((news.type === erg.constants["pohAdviceExtracurricularAttributeRaise"] && tempScenario.change > 0) || (news.type === erg.constants["pohAdviceExtracurricularAttributeLower"] && tempScenario.change < 0))) {

            scenario = tempScenario;

        }

    }

    if (scenario) {

        newAttributeValue = erg.utilities.poh.adjustAttribute(heart, scenario.attribute, scenario.change);

        newsItem = {

            category: newsType.category,
            type: newsType.type,
            title: scenario.title.replace(/Heart1/g, heart.preferredName),
            image: erg.utilities.poh.getProfileLargeURL(heart),
            imageSmall: erg.utilities.poh.getProfileThumbURL(heart),
            text: scenario.text.replace(/Heart1/g, heart.preferredName).replace(/HeartNewAttributeValue1/g, newAttributeValue),
            subjectHeartKey: heart.key,
            summary: heart.preferredName + " " + erg[erg.constants["pohAttributes"]][scenario.attribute].label + " change: " + scenario.change + " (to " + newAttributeValue + ")",
            timeStamp: new Date().getTime()

        }

        erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push(newsItem);

    }

}

//############################################ DATE UTILITIES ######################################################


erg.utilities.poh.generateAndResolveDate = function (heart1, heart2, datePlan) {

    //This is actually a fairly chunky process, conceptually, and it probably is really a delegate.  But because I'm whipping it up for testing/experimentation it's existing here for the nonce.

    var i;

    var j;

    var notInDatePlan = true;

    var totalRelationshipChange = 0;
    var totalHeart1PassionChange = 0;
    var totalHeart2PassionChange = 0;

    var postIntimacyHeart1PassionTotal = 0;
    var postIntimacyHeart2PassionTotal = 0;
    var postIntimacyRelationshipStrengthTotal = 0;

    var postSpecialHeart1PassionTotal = 0;
    var postSpecialHeart2PassionTotal = 0;

    var successString;
    var changeString;

    var currentScenario;
    var currentTestResult;

    var scenarios = erg.world[erg.constants["pohValidRandomDateScenarios"]];

    var validScenarios = new Array();

    var tempHTML = "<p>Today in the Bunbunmaru News Society Pages, exclusive details of the recent date between <strong>" + heart1.preferredName + " &amp; " + heart2.preferredName + "</strong></p>";

    var summary;

    var intimacy = false;


    var heart1IntimacyPassionBonus;
    var heart2IntimacyPassionBonus;
    var intimacyRelationshipBonus;

    var heart1IntimacyAttractionBonus;
    var heart2IntimacyAttractionBonus;

    var finalRelationshipStrength = 0;

    var tempHatate; //For her special trait
    var tempHatatePassion; //only used for testing, get rid of it

    //Reduce loneliness for both

    erg.utilities.poh.adjustAttribute(heart1, erg.constants["pohAttributeLoneliness"], erg.constants["pohLonelinessAdjustmentDate"]);
    erg.utilities.poh.adjustAttribute(heart2, erg.constants["pohAttributeLoneliness"], erg.constants["pohLonelinessAdjustmentDate"]);

    //Create Relationship if none

    if (!erg.utilities.poh.coupleInRelationship(heart1.key, heart2.key)) {

        erg.utilities.poh.createRelationship(heart1, heart2);

    }

    //Update relationship's Last Date
    erg.utilities.poh.getCoupleRelationship(heart1.key, heart2.key).lastDate = erg.world[erg.constants["pohCurrentWeek"]];

    //Check for jealousy breakups, which is pretty much exactly what the function says does but I'm trying to visually break this into steps here
    erg.utilities.poh.checkForJealousyBreakups(heart1, heart2);


    //################################## SPECIAL TRAIT HACK ##############################################

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialSayItWithFlowers"], heart1)) {

        tempHTML += "<p>" + heart1.preferredName + " began the date with a superb gift of flowers!</p>";

        totalHeart2PassionChange += erg.constants["pohTraitSpecialSayItWithFlowersPassionBonus"];

        postSpecialHeart2PassionTotal = erg.utilities.poh.modifyPassion(heart2, heart1.key, erg.constants["pohTraitSpecialSayItWithFlowersPassionBonus"]);

        tempHTML += "<p><em>" + heart2.preferredName + "'s passion for " + heart1.preferredName + " increases by " + erg.constants["pohTraitSpecialSayItWithFlowersPassionBonus"] + " to " + postSpecialHeart2PassionTotal + ".</em></p>";

    }

    //Yeah so the DRY feeling is going to hurt for a bit here because I'm too lazy to write the code to differentiate between heart1 and heart2 even though it probably wouldn't have taken me much longer than writing this comment.

    if (erg.world.act === erg.constants["pohWinter"] && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialPowerToManipulateCold"], heart1)) {

        tempHTML += "<p>" + heart2.preferredName + " couldn't help but notice how majestic Letty seems in the winter.</p>";

        totalHeart2PassionChange += erg.constants["pohTraitSpecialPowerToManipulateColdPassionBonus"];

        postSpecialHeart2PassionTotal = erg.utilities.poh.modifyPassion(heart2, heart1.key, erg.constants["pohTraitSpecialPowerToManipulateColdPassionBonus"]);

        tempHTML += "<p><em>" + heart2.preferredName + "'s passion for " + heart1.preferredName + " increases by " + erg.constants["pohTraitSpecialPowerToManipulateColdPassionBonus"] + " to " + postSpecialHeart2PassionTotal + ".</em></p>";

    }

    if (erg.world.act === erg.constants["pohWinter"] && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialPowerToManipulateCold"], heart2)) {

        tempHTML += "<p>" + heart1.preferredName + " couldn't help but notice how majestic Letty seems in the winter.</p>";

        totalHeart1PassionChange += erg.constants["pohTraitSpecialPowerToManipulateColdPassionBonus"];

        postSpecialHeart1PassionTotal = erg.utilities.poh.modifyPassion(heart1, heart2.key, erg.constants["pohTraitSpecialPowerToManipulateColdPassionBonus"]);

        tempHTML += "<p><em>" + heart1.preferredName + "'s passion for " + heart2.preferredName + " increases by " + erg.constants["pohTraitSpecialPowerToManipulateColdPassionBonus"] + " to " + postSpecialHeart1PassionTotal + ".</em></p>";

    }

    if (erg.world.act === erg.constants["pohAutumn"] && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialBountifulHarvest"], heart1)) {

        tempHTML += "<p>" + heart2.preferredName + " couldn't help but notice Minoriko's special glow in the autumn.</p>";

        totalHeart2PassionChange += erg.constants["pohTraitSpecialBountifulHarvestPassionBonus"];

        postSpecialHeart2PassionTotal = erg.utilities.poh.modifyPassion(heart2, heart1.key, erg.constants["pohTraitSpecialBountifulHarvestPassionBonus"]);

        tempHTML += "<p><em>" + heart2.preferredName + "'s passion for " + heart1.preferredName + " increases by " + erg.constants["pohTraitSpecialBountifulHarvestPassionBonus"] + " to " + postSpecialHeart2PassionTotal + ".</em></p>";

    }

    if (erg.world.act === erg.constants["pohAutumn"] && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialBountifulHarvest"], heart2)) {

        tempHTML += "<p>" + heart1.preferredName + " couldn't help but notice Minoriko's special glow in the autumn.</p>";

        totalHeart1PassionChange += erg.constants["pohTraitSpecialBountifulHarvestPassionBonus"];

        postSpecialHeart1PassionTotal = erg.utilities.poh.modifyPassion(heart1, heart2.key, erg.constants["pohTraitSpecialBountifulHarvestPassionBonus"]);

        tempHTML += "<p><em>" + heart1.preferredName + "'s passion for " + heart2.preferredName + " increases by " + erg.constants["pohTraitSpecialBountifulHarvestPassionBonus"] + " to " + postSpecialHeart1PassionTotal + ".</em></p>";

    }

    if (erg.world.act === erg.constants["pohSummer"] && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialFurnaceCat"], heart1)) {

        tempHTML += "<p>" + heart2.preferredName + " couldn't help but notice how delightfully energetic Orin is in the summer.</p>";

        totalHeart2PassionChange += erg.constants["pohTraitSpecialFurnaceCatPassionBonus"];

        postSpecialHeart2PassionTotal = erg.utilities.poh.modifyPassion(heart2, heart1.key, erg.constants["pohTraitSpecialFurnaceCatPassionBonus"]);

        tempHTML += "<p><em>" + heart2.preferredName + "'s passion for " + heart1.preferredName + " increases by " + erg.constants["pohTraitSpecialFurnaceCatPassionBonus"] + " to " + postSpecialHeart2PassionTotal + ".</em></p>";

    }

    if (erg.world.act === erg.constants["pohSummer"] && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialFurnaceCat"], heart2)) {

        tempHTML += "<p>" + heart1.preferredName + " couldn't help but noticehow delightfully energetic Orin is in the summer.</p>";

        totalHeart1PassionChange += erg.constants["pohTraitSpecialFurnaceCatPassionBonus"];

        postSpecialHeart1PassionTotal = erg.utilities.poh.modifyPassion(heart1, heart2.key, erg.constants["pohTraitSpecialFurnaceCatPassionBonus"]);

        tempHTML += "<p><em>" + heart1.preferredName + "'s passion for " + heart2.preferredName + " increases by " + erg.constants["pohTraitSpecialFurnaceCatPassionBonus"] + " to " + postSpecialHeart1PassionTotal + ".</em></p>";

    }


    //################################## END SPECIAL TRAIT HACK ##########################################



    //Check Date Plan

    if (!datePlan) {

        datePlan = new Array();

    }

    for (i = 0; i < scenarios.length; i++) {

        notInDatePlan = true;

        for (j = 0; j < datePlan.length; j++) {

            if (datePlan[j] === scenarios[i]) {

                notInDatePlan = false;

            }

        }

        if (notInDatePlan) {

            validScenarios.push(scenarios[i]);

        }

    }

    erg.utilities.shuffleArray(validScenarios);

    for (i = datePlan.length; (i < erg.constants["pohScenariosPerDate"]) && (i < validScenarios.length); i++) {

        datePlan.push(validScenarios[i]);

    }

    erg.utilities.shuffleArray(datePlan);  //This stops the advice date plan from always being the first three steps, it's more interesting otherwise!

    for (i = 0; i < datePlan.length; i++) {

        currentScenario = erg[erg.constants["pohAttributeTestScenarios"]][datePlan[i]];

        tempHTML += "<p><strong>" + currentScenario.title + "</strong></p>";
        tempHTML += "<p>" + currentScenario.description.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName) + "</p>";

        currentTestResult = erg.utilities.poh.resolveAttributeTestScenario(heart1, heart2, currentScenario);

        successString = "fails";

        if (currentTestResult.heart1Success && currentTestResult.heart2Success) {

            tempHTML += "<p>" + currentScenario.bothSucceed.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName) + "</p>";

        }

        if (currentTestResult.heart1Success && (!currentTestResult.heart2Success)) {

            tempHTML += "<p>" + currentScenario.heart1SuccessHeart2Fail.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName) + "</p>";

        }

        if ((!currentTestResult.heart1Success) && currentTestResult.heart2Success) {

            tempHTML += "<p>" + currentScenario.heart1FailHeart2Success.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName) + "</p>";

        }

        if ((!currentTestResult.heart1Success) && (!currentTestResult.heart2Success)) {

            tempHTML += "<p>" + currentScenario.bothFail.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName) + "</p>";

        }

        if (currentTestResult.heart1Success) {

            successString = "succeeds";

        }

        changeString = "falls";

        if (currentTestResult.heart2PassionChange > 0) {

            changeString = "increases";

        }

        tempHTML += "<p><em>" + heart1.preferredName + " rolls <strong>" + erg[erg.constants["pohAttributes"]][currentScenario.heart1Attribute].label + "</strong> and <strong>" + successString + "!</strong> " + heart2.preferredName + "'s passion for " + heart1.preferredName + " " + changeString + " by " + currentTestResult.heart2PassionChange + " to " + currentTestResult.heart2NewPassion + ".</em></p>";

        successString = "fails";

        if (currentTestResult.heart2Success) {

            successString = "succeeds";

        }

        changeString = "falls";

        if (currentTestResult.heart1PassionChange > 0) {

            changeString = "increases";

        }

        tempHTML += "<p><em>" + heart2.preferredName + " rolls <strong>" + erg[erg.constants["pohAttributes"]][currentScenario.heart2Attribute].label + "</strong> and <strong>" + successString + "!</strong> " + heart1.preferredName + "'s passion for " + heart2.preferredName + " " + changeString + " by " + currentTestResult.heart1PassionChange + " to " + currentTestResult.heart1NewPassion + ".</em></p>";

        if (currentTestResult.relationshipChange) {

            changeString = "falls";

            if (currentTestResult.relationshipChangeMagnitude > 0) {

                changeString = "increases";

            }

            tempHTML += "<p><em>Their relationship strength " + changeString + " by " + currentTestResult.relationshipChangeMagnitude + " to " + currentTestResult.relationshipNewStrength + "</em></p>";

        } else {

            tempHTML += "<p><em>Their relationship is unaffected.</em></p>";

        }

        totalHeart2PassionChange += currentTestResult.heart2PassionChange;
        totalHeart1PassionChange += currentTestResult.heart1PassionChange;
        totalRelationshipChange += currentTestResult.relationshipChangeMagnitude;

    }

    //Check for Intimacy

    if (erg.utilities.poh.getIntimacyConsent(heart1, heart2, totalHeart1PassionChange, totalRelationshipChange) && erg.utilities.poh.getIntimacyConsent(heart2, heart1, totalHeart2PassionChange, totalRelationshipChange)) {


        //########################### SPECIAL TRAIT HACK ########################################

        //We don't actually check for the trait, just if Hatate's active.  Which is bad, but I don't feel like iterating over everyone to check for the trait right now

        tempHatate = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], erg.constants["pohHatate"]);

        if (tempHatate.active && (!(heart1.key === tempHatate.key)) && (!(heart2.key === tempHatate.key))) {

            tempHatatePassion = erg.utilities.poh.modifyPassion(tempHatate, heart1.key, erg.constants["pohTraitSpecialThoughtographyPassionBonus"]);

           //console.log("Hatate saw " + heart1.preferredName + " get lucky, dropping her Passion by " + erg.constants["pohTraitSpecialThoughtographyPassionBonus"] + " to " + tempHatatePassion);

            tempHatatePassion = erg.utilities.poh.modifyPassion(tempHatate, heart2.key, erg.constants["pohTraitSpecialThoughtographyPassionBonus"]);

            //console.log("Hatate saw " + heart2.preferredName + " get lucky, dropping her Passion by " + erg.constants["pohTraitSpecialThoughtographyPassionBonus"] + " to " + tempHatatePassion);

        }


        //########################## END SPECIAL TRAIT HACK #####################################


        intimacy = true;

        //Buff to Passion + Relationship

        heart1IntimacyPassionBonus = erg.constants["pohIntimacyPassionBonus"];
        heart2IntimacyPassionBonus = erg.constants["pohIntimacyPassionBonus"];

        //########################### SPECIAL TRAIT HACK ########################################


        if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialGhostlyBody"], heart2)) {

            heart1IntimacyPassionBonus += erg.constants["pohTraitSpecialGhostlyBodyPassionBonus"];

        }

        if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialGhostlyBody"], heart1)) {

            heart2IntimacyPassionBonus += erg.constants["pohTraitSpecialGhostlyBodyPassionBonus"];

        }

        //########################## END SPECIAL TRAIT HACK #####################################


        intimacyRelationshipBonus = Math.floor((heart1IntimacyPassionBonus + heart2IntimacyPassionBonus) / 2);

        postIntimacyHeart1PassionTotal = erg.utilities.poh.modifyPassion(heart1, heart2.key, heart1IntimacyPassionBonus);
        postIntimacyHeart2PassionTotal = erg.utilities.poh.modifyPassion(heart2, heart1.key, heart2IntimacyPassionBonus);
        postIntimacyRelationshipStrengthTotal = erg.utilities.poh.adjustRelationshipStrength(heart1.key, heart2.key, intimacyRelationshipBonus);

        totalHeart2PassionChange += heart2IntimacyPassionBonus;
        totalHeart1PassionChange += heart1IntimacyPassionBonus;
        totalRelationshipChange += intimacyRelationshipBonus;

        //Buff to Base Attraction

        //console.log(heart1.preferredName + " attraction to " + heart2.preferredName + ": " + erg.utilities.poh.getCurrentAttraction(heart1, heart2));
        //console.log(heart2.preferredName + " attraction to " + heart1.preferredName + ": " + erg.utilities.poh.getCurrentAttraction(heart2, heart1));

        heart1IntimacyAttractionBonus = erg.constants["pohIntimacyBaseAttractionBonus"];
        heart2IntimacyAttractionBonus = erg.constants["pohIntimacyBaseAttractionBonus"];

        //########################### SPECIAL TRAIT HACK ########################################

        if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialInfernalAllure"], heart2)) {

            heart1IntimacyAttractionBonus = heart1IntimacyAttractionBonus * 2;

        }

        if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialInfernalAllure"], heart1)) {

            heart2IntimacyAttractionBonus = heart2IntimacyAttractionBonus * 2;

        }

        if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialGhostlyBody"], heart2)) {

            heart1IntimacyAttractionBonus += erg.constants["pohTraitSpecialGhostlyBodyAttractionBonus"];

        }

        if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialGhostlyBody"], heart1)) {

            heart2IntimacyAttractionBonus += erg.constants["pohTraitSpecialGhostlyBodyAttractionBonus"];

        }

        //########################## END SPECIAL TRAIT HACK #####################################

        erg.utilities.poh.adjustBaseAttraction(heart1, heart2.key, heart1IntimacyAttractionBonus);
        erg.utilities.poh.adjustBaseAttraction(heart2, heart1.key, heart2IntimacyAttractionBonus);

        //console.log(heart1.preferredName + " attraction to " + heart2.preferredName + " post-intimacy: " + erg.utilities.poh.getCurrentAttraction(heart1, heart2));
        //console.log(heart2.preferredName + " attraction to " + heart1.preferredName + " post-intimacy: " + erg.utilities.poh.getCurrentAttraction(heart2, heart1));

        tempHTML += "<p><strong>...and a wonderful night followed</strong></p>";
        tempHTML += "<p>While the Bunbunmaru News Social pages wouldn't dream of speculating what our couple got up to in private, they were seen together early the next morning looking pleased with themselves and each other!</p>";
        tempHTML += "<p><em>" + heart1.preferredName + "'s passion for " + heart2.preferredName + " increases by " + heart1IntimacyPassionBonus + " to " + postIntimacyHeart1PassionTotal + "</em></p>";
        tempHTML += "<p><em>" + heart1.preferredName + "'s attraction to " + heart2.preferredName + " increases by " + heart1IntimacyAttractionBonus + " to " + erg.utilities.poh.getCurrentAttraction(heart1, heart2) + "</em></p>";
        tempHTML += "<p><em>" + heart2.preferredName + "'s passion for " + heart1.preferredName + " increases by " + heart2IntimacyPassionBonus + " to " + postIntimacyHeart2PassionTotal + "</p>";
        tempHTML += "<p><em>" + heart2.preferredName + "'s attraction to " + heart1.preferredName + " increases by " + heart2IntimacyAttractionBonus + " to " + erg.utilities.poh.getCurrentAttraction(heart2, heart1) + "</em></p>";
        tempHTML += "<p><em>Their relationship strength increases by " + intimacyRelationshipBonus + " to " + postIntimacyRelationshipStrengthTotal + "</em></p>";


        //Relationships upgrade on itimacy, so check for that (switch prevents chaining upgrades)

        switch (erg[erg.constants["pohRelationshipTypes"]][erg.utilities.poh.getCoupleRelationship(heart1.key, heart2.key).type].level) {

            case 0:

                erg.utilities.poh.checkForLevel1RelationshipUpgrade(heart1, heart2, totalHeart1PassionChange, totalHeart2PassionChange);
                break;

            case 1:

                erg.utilities.poh.checkForLevel2RelationshipUpgrade(heart1, heart2);
                break;

            case 2:

                erg.utilities.poh.checkForLevel3RelationshipUpgrade(heart1, heart2);
                break;

        }

    } else {



        //Check for bad date - intimate date is always good date ^_^

        if ((totalHeart1PassionChange < 0) && (totalHeart2PassionChange < 0) && (totalRelationshipChange < 0)) {

            //Bad date, check for breakup

            erg.utilities.poh.checkForBadDateBreakup(heart1, heart2, totalHeart1PassionChange, totalHeart2PassionChange);

            tempHTML += "<p><strong>A heartbreaking debacle</strong></p>";
            tempHTML += "<p>With the date an unmitigated disaster, the pair parted on poor terms.</p>";

        } else {

            tempHTML += "<p><strong>...and that was the date</strong></p>";
            tempHTML += "<p>Having spent a good while in each other's company, the pair said their goodbyes and went their separate ways.</p>";

        }

    }

    tempHTML += "<p><strong><em>Total change in " + heart1.preferredName + "'s passion for " + heart2.preferredName + ": </strong>" + totalHeart1PassionChange + "</em></p>";
    tempHTML += "<p><strong><em>Total change in " + heart2.preferredName + "'s passion for " + heart1.preferredName + ": </strong>" + totalHeart2PassionChange + "</em></p>";
    tempHTML += "<p><strong><em>Total change in relationship strength: </strong>" + totalRelationshipChange + "</em></p>";

    finalRelationshipStrength = erg.utilities.poh.getCoupleRelationship(heart1.key, heart2.key, true).strength;

    summary = "Relationship strength change: " + totalRelationshipChange + " (to " + finalRelationshipStrength + "); " + heart1.preferredName + "'s passion for " + heart2.preferredName + " change: " + totalHeart1PassionChange + " (to " + erg.utilities.poh.modifyPassion(heart1, heart2.key, 0) + "); " + heart2.preferredName + "'s passion for " + heart1.preferredName + " change: " + totalHeart2PassionChange + " (to " + erg.utilities.poh.modifyPassion(heart2, heart1.key, 0) + ")";

    if (intimacy) {

        summary += "; Intimate ending.";

    }

    return {

        heart1: heart1.key,
        heart2: heart2.key,
        totalHeart1PassionChange: totalHeart1PassionChange,
        totalHeart2PassionChange: totalHeart2PassionChange,
        summary: summary,
        intimacy: intimacy,
        text: tempHTML

    }

}


erg.utilities.poh.randomDateRequest = function (heart) {

    var i;

    var candidateDates = new Array();

    var chosenHeart;

    var shortlistSize = 3;

    var random;

    var dateAccepted;

    for (i = 0; i < heart.connections.length; i++) {

        if (erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], heart.connections[i].key).active) {

            //############## SPECIAL TRAIT HACK ####################

            if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialTenDesires"], heart)) {

                candidateDates.push({ key: heart.connections[i].key, attraction: Math.floor((erg.utilities.poh.getCurrentAttraction(heart, erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], heart.connections[i].key)) + erg.utilities.poh.getCurrentAttraction(erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], heart.connections[i].key), heart)) / 2) });

            //############ END SPECIAL TRAIT HACK ##################

            } else {

                candidateDates.push({ key: heart.connections[i].key, attraction: erg.utilities.poh.getCurrentAttraction(heart, erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], heart.connections[i].key)) });

            }

        }

    }

    candidateDates.sort(function (a, b) {

        if (a.attraction > b.attraction) {

            return -1;

        }

        if (a.attraction < b.attraction) {

            return 1;

        }

        return 0;

    });

    if (candidateDates.length < shortlistSize) {  //This is still going to blow up if empty

        shortlistSize = candidateDates.length;

    }

    random = Math.floor(Math.random() * shortlistSize);

    chosenHeart = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], candidateDates[random].key);

    return {

        chosenHeart: chosenHeart.key,
        accepted: erg.utilities.poh.getDateAcceptance(heart, chosenHeart)

    };

}

erg.utilities.poh.getDateAcceptance = function (asker, askee) {

    var acceptChance = erg.utilities.getFromArrayByKey(askee.attributes, erg.constants["pohAttributeLoneliness"]).value;

    var attraction = erg.utilities.poh.getCurrentAttraction(askee, asker);

    var random = Math.floor(Math.random() * 100);

    if (attraction > acceptChance) {

        acceptChance = attraction;

    }

    //###################################### SPECIAL TRAIT HACK #######################################

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialDeafToAllButTheSong"], asker) && (acceptChance < erg.utilities.getFromArrayByKey(asker.attributes, erg.constants["pohAttributeExpression"]).value)) {

        acceptChance = erg.utilities.getFromArrayByKey(asker.attributes, erg.constants["pohAttributeExpression"]).value;

        //console.log("Mystia deafened " + askee.preferredName + " to ALL BUT THE SONG");

    }

    //################################## END SPECIAL TRAIT HACK #######################################


    acceptChance += erg.utilities.poh.getDateAcceptanceModifier(asker, askee);


    if (random < acceptChance) {

        return true;

    }

    return false;

}


erg.utilities.poh.getIntimacyConsent = function (heart1, heart2, passionChange, relationshipChange) {

    //I hope that doesn't sound creepy.  No consent === no intimacy!
    //Technically intimacy doesn't mean sex, but since the cast is ostensibly sexually active adults, we can't say it's not.

    //Note no special trait, power etc. should ever make intimacy consent more likely; while they're just electrons, we CANNOT EVER intefere with the characters' free will in this regard.  Or we would be SUPER CREEPY

    var attraction = erg.utilities.poh.getCurrentAttraction(heart1, heart2);

    var passion = erg.utilities.getFromArrayByKey(heart1.connections, heart2.key).passion;

    var consentChance = 0;

    var relationshipModifier = erg.utilities.poh.getIntimacyModifier(heart1, heart2);

    if (!passionChange) {

        passionChange = 0;

    }

    if (!relationshipChange) {

        relationshipChange = 0;

    }

    consentChance = Math.floor((attraction + passion) / 2) + passionChange + relationshipChange + relationshipModifier;

    if (consentChance > erg.constants["pohIntimacyConsentMaximum"]) {

        consentChance = erg.constants["pohIntimacyConsentMaximum"];

    }

    if (erg.utilities.poh.d100() < consentChance) {

        return true;

    }

    return false;

}


erg.utilities.poh.checkForBadDateBreakup = function (heart1, heart2, heart1PassionChange, heart2PassionChange) {

    var heart1Passion = erg.utilities.getFromArrayByKey(heart1.connections, heart2.key).passion + heart1PassionChange;
    var heart2Passion = erg.utilities.getFromArrayByKey(heart1.connections, heart2.key).passion + heart2PassionChange;

    var newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeBadDateBreakup"]];

    var relationship = erg.utilities.poh.getCoupleRelationship(heart1.key, heart2.key);

    var stability = erg.utilities.poh.getCurrentStability(heart1, heart2);

    var breakup = false;

    var historyEaterRoll;

    if ((erg.utilities.poh.d100() >= heart1Passion) && (erg.utilities.poh.d100() >= heart2Passion) && (erg.utilities.poh.d100() >= stability)) {

        breakup = true;

    }


    //#################################### SPECIAL TRAIT HACK #####################################

    if (breakup && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialHistoryEater"], heart1)) {

        historyEaterRoll = heart1Passion;

        if (erg.utilities.poh.getCurrentAttraction(heart1, heart2) > historyEaterRoll) {

            historyEaterRoll = erg.utilities.poh.getCurrentAttraction(heart1, heart2);

        }

        if (erg.utilities.poh.d100() <= historyEaterRoll) {

            breakup = false;

           // console.log("Keine ate the history of this bad date (Heart1)");

        } else {

            //console.log("Keine didn't eat the history of this bad date (Heart1)");
        
        }

    }

    if (breakup && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialHistoryEater"], heart2)) {

        historyEaterRoll = heart2Passion;

        if (erg.utilities.poh.getCurrentAttraction(heart2, heart1) > historyEaterRoll) {

            historyEaterRoll = erg.utilities.poh.getCurrentAttraction(heart2, heart1);

        }

        if (erg.utilities.poh.d100() <= historyEaterRoll) {

            breakup = false;

            //console.log("Keine ate the history of this bad date (Heart2)");

        } else {

            //console.log("Keine didn't eat the history of this bad date (Heart2)");

        }

    }


    //#################################### END SPECIAL TRAIT HACK #####################################

    if (breakup) {

        relationship.active = false;

        erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push({

            category: newsType.category,
            type: newsType.type,
            title: newsType.title.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName),
            text: newsType.text.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName),
            image: erg.utilities.poh.getProfileLargeURL(heart1),
            imageSmall: erg.utilities.poh.getProfileThumbURL(heart1),
            imageSmall2: erg.utilities.poh.getProfileThumbURL(heart2),
            subjectHeartKey: heart1.key,
            subject2HeartKey: heart2.key,
            timeStamp: new Date().getTime()

        });

    }

}


erg.utilities.poh.checkForRelationshipDates = function (heart) {

    var i;

    var relationshipDate = false;

    var newsType;

    var heart2;

    var dateRequest;

    var date;

    var relationshipsArray = erg.world[erg.constants["pohRelationships"]];

    var newLoneliness;

    var summary;

    if (erg.utilities.poh.inRelationship(heart.key)) {

        for (i = 0; i < relationshipsArray.length; i++) {

            if (relationshipsArray[i].active && ((relationshipsArray[i].heart1 === heart.key) || (relationshipsArray[i].heart2 === heart.key))) {

                heart2 = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], relationshipsArray[i].heart2);

                if (heart2.key === heart.key) {

                    heart2 = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], relationshipsArray[i].heart1);

                }

                if (erg.utilities.poh.d100() < erg[erg.constants["pohRelationshipTypes"]][relationshipsArray[i].type].relationshipDateChance) {

                    //We're definitely asking

                    dateRequest = erg.utilities.poh.getDateAcceptance(heart, heart2);

                    if (dateRequest) {

                        //console.log("Relationship date: " + heart.preferredName + " & " + heart2.preferredName);

                        newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeDate"]];

                        relationshipDate = true;

                        date = erg.utilities.poh.generateAndResolveDate(heart, heart2);

                        erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push({

                            category: newsType.category,
                            type: newsType.type,
                            title: newsType.title.replace(/Heart1/g, heart.preferredName).replace(/Heart2/g, heart2.preferredName),
                            text: date.text,
                            summary: date.summary,
                            image: erg.utilities.poh.getProfileLargeURL(heart),
                            imageSmall: erg.utilities.poh.getProfileThumbURL(heart),
                            imageSmall2: erg.utilities.poh.getProfileThumbURL(heart2),
                            subjectHeartKey: heart.key,
                            subject2HeartKey: heart2.key,
                            timeStamp: new Date().getTime()

                        });

                    } else {

                        //console.log("Relationship date refusal: " + heart.preferredName + " & " + heart2.preferredName);

                        newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeDateRefusal"]];

                        newLoneliness = erg.utilities.poh.handleRefusalLoneliness(heart, heart2);

                        summary = heart.preferredName + " " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeLoneliness"]].label + " change: " + newLoneliness.change + " (to " + newLoneliness.total + ")";

                        if (newLoneliness.heart2Change) {

                            summary += "; " + heart2.preferredName + " " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeLoneliness"]].label + " change: " + newLoneliness.change + " (to " + newLoneliness.heart2Loneliness + ")";

                        }

                        erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push({

                            category: newsType.category,
                            type: newsType.type,
                            title: newsType.title.replace(/Heart1/g, heart.preferredName).replace(/Heart2/g, heart2.preferredName),
                            text: newsType.text.replace(/Heart1/g, heart.preferredName).replace(/Heart2/g, heart2.preferredName),
                            summary: summary,
                            image: erg.utilities.poh.getProfileLargeURL(heart),
                            imageSmall: erg.utilities.poh.getProfileThumbURL(heart),
                            imageSmall2: erg.utilities.poh.getProfileThumbURL(heart2),
                            subjectHeartKey: heart.key,
                            subject2HeartKey: heart2.key,
                            timeStamp: new Date().getTime()

                        });

                    }

                }

            }

        }

    }

    return relationshipDate;

}


erg.utilities.poh.handleRefusalLoneliness = function (heart1, heart2) {

    var newLoneliness;

    var lonelinessAdjustment = erg.constants["pohLonelinessAdjustmentRefusedDate"];

    var heart2Change = false;

    var heart2Loneliness;

    //############################################# SPECIAL TRAIT HACK #######################################################

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialSymbolOfLonelinessAndDemise"], heart1)) {

        lonelinessAdjustment = erg.constants["pohTraitSpecialSymbolOfLonelinessAndDemiseLonelinessBonus"];

        heart2Change = true;

        heart2Loneliness = erg.utilities.poh.adjustAttribute(heart2, erg.constants["pohAttributeLoneliness"], lonelinessAdjustment);

    }

    //########################################### END SPECIAL TRAIT HACK #####################################################

    newLoneliness = erg.utilities.poh.adjustAttribute(heart1, erg.constants["pohAttributeLoneliness"], lonelinessAdjustment);

    return { total: newLoneliness, change: lonelinessAdjustment, heart2Change: heart2Change, heart2Loneliness: heart2Loneliness };
}




erg.utilities.poh.generateAdviceDate = function (advice) {

    var heart1 = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], advice.key);

    var dateNews = erg.utilities.getFromArrayByKey(advice.news, erg.constants["pohNewsTypeDate"]);

    var heart2 = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], dateNews.dateHeartKey);

    var newsType;

    var dateRequest;

    var date;

    var newLoneliness;

    var summary;

    dateRequest = erg.utilities.poh.getDateAcceptance(heart1, heart2);

    if (dateRequest) {

        newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeDate"]];

        date = erg.utilities.poh.generateAndResolveDate(heart1, heart2, dateNews.datePlan);

        erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push({

            category: newsType.category,
            type: newsType.type,
            title: newsType.title.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName),
            text: date.text,
            summary: date.summary,
            image: erg.utilities.poh.getProfileLargeURL(heart1),
            imageSmall: erg.utilities.poh.getProfileThumbURL(heart1),
            imageSmall2: erg.utilities.poh.getProfileThumbURL(heart2),
            subjectHeartKey: heart1.key,
            subject2HeartKey: heart2.key,
            timeStamp: new Date().getTime()

        });

    } else {

        newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeDateRefusal"]];

        newLoneliness = erg.utilities.poh.handleRefusalLoneliness(heart1, heart2);

        summary = heart1.preferredName + " " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeLoneliness"]].label + " change: " + newLoneliness.change + " (to " + newLoneliness.total + ")";

        if (newLoneliness.heart2Change) {

            summary += "; " + heart2.preferredName + " " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeLoneliness"]].label + " change: " + newLoneliness.change + " (to " + newLoneliness.heart2Loneliness + ")";

        }

        erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push({

            category: newsType.category,
            type: newsType.type,
            title: newsType.title.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName),
            text: newsType.text.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName),
            summary: summary,
            image: erg.utilities.poh.getProfileLargeURL(heart1),
            imageSmall: erg.utilities.poh.getProfileThumbURL(heart1),
            imageSmall2: erg.utilities.poh.getProfileThumbURL(heart2),
            subjectHeartKey: heart1.key,
            subject2HeartKey: heart2.key,
            timeStamp: new Date().getTime()

        });

    }

}


//############################################ WEEK UTILITIES ######################################################

erg.utilities.poh.buildNewWeek = function (week) {

    var i;

    var weekNumber = week + 1; //0 based --> 1 based

    var scheduledNewsArray = erg[erg.constants["pohScheduledNewsItems"]];

    var season;

    //This would be a "Check For New Act" function if I wasn't terrible.

    if (week === erg.constants["pohStartWeekSummer"]) {

        erg.world.act = erg.constants["pohSummer"];

    }

    if (week === erg.constants["pohStartWeekAutumn"]) {

        erg.world.act = erg.constants["pohAutumn"];

    }

    if (week === erg.constants["pohStartWeekWinter"]) {

        erg.world.act = erg.constants["pohWinter"];

    }

    season = erg.utilities.getFromArrayByKey(erg.acts, erg.world.act).name;

    var newWeek = {

        number: weekNumber,
        label: "Week " + weekNumber,
        season: season,
        news: new Array()  //Do not sort this array ever, we're going to use indexes to find news items as they don't have keys

    };


    //Check for pre-existing news items to go in this week

    for (i = 0; i < scheduledNewsArray.length; i++) {

        if (scheduledNewsArray[i].weekNumber === weekNumber) {

            newWeek.news.push({

                category: scheduledNewsArray[i].category,
                type: scheduledNewsArray[i].type,
                title: scheduledNewsArray[i].title,
                text: scheduledNewsArray[i].text,
                image: scheduledNewsArray[i].image,
                imageSmall: scheduledNewsArray[i].imageSmall,
                subjectHeartKey: scheduledNewsArray[i].subjectHeartKey,
                read: false,
                timeStamp: new Date().getTime()
            
            });

        }

    }

    return newWeek;

}


//Loneliness for everybody

erg.utilities.poh.weekLoneliness = function () {

    var i;

    var heartsArray = erg.world[erg.constants["pohHeartsArray"]];

    for (i = 0; i < heartsArray.length; i++) {

        erg.utilities.poh.adjustAttribute(heartsArray[i], erg.constants["pohAttributeLoneliness"], erg.constants["pohLonelinessAdjustmentWeek"]);

    }

}



//############################################ RELATIONSHIP UTILITIES ######################################################

erg.utilities.poh.inRelationship = function (heartKey) {

    var i;

    var relationshipArray = erg.world[erg.constants["pohRelationships"]];

    for (i = 0; i < relationshipArray.length; i++) {

        if (relationshipArray[i].active && (relationshipArray[i].heart1 === heartKey || relationshipArray[i].heart2 === heartKey)) {

            return true;

        }

    }

    return false;
}

erg.utilities.poh.coupleInRelationship = function (heart1Key, heart2Key) {

    var i;

    var relationshipArray = erg.world[erg.constants["pohRelationships"]];

    for (i = 0; i < relationshipArray.length; i++) {

        if (relationshipArray[i].active && ((relationshipArray[i].heart1 === heart1Key && relationshipArray[i].heart2 === heart2Key) || (relationshipArray[i].heart1 === heart2Key && relationshipArray[i].heart2 === heart1Key))) {

            return true;

        }

    }

    return false;
}

erg.utilities.poh.getCoupleRelationship = function (heart1Key, heart2Key, getInactive) {

    if (!getInactive) {

        getInactive = false;

    }

    var activeCondition;

    var i;

    var relationshipArray = erg.world[erg.constants["pohRelationships"]];

    for (i = 0; i < relationshipArray.length; i++) {

        activeCondition = true;

        if (!getInactive) {

            activeCondition = relationshipArray[i].active ;

        }

        if (activeCondition && ((relationshipArray[i].heart1 === heart1Key && relationshipArray[i].heart2 === heart2Key) || (relationshipArray[i].heart1 === heart2Key && relationshipArray[i].heart2 === heart1Key))) {

            return relationshipArray[i];

        }

    }

    return false;

}


erg.utilities.poh.createRelationship = function (heart1, heart2) {

    var newRelationship = {

        type: erg.constants["pohRelationshipTypePotential"],
        heart1: heart1.key,
        heart2: heart2.key,
        lastDate: 0, //Since this isn't possible, you can test it for an invalid value
        formed: erg.world[erg.constants["pohCurrentWeek"]],
        strength: erg.utilities.poh.getCurrentCompatibility(heart1, heart2),
        heart1InitialPassionTrack: erg.utilities.getFromArrayByKey(heart1.connections, heart2.key).track,
        heart2InitialPassionTrack: erg.utilities.getFromArrayByKey(heart2.connections, heart1.key).track,
        active: true

    };


    erg.world[erg.constants["pohRelationships"]].push(newRelationship);


}


erg.utilities.poh.adjustRelationshipStrength = function (heart1Key, heart2Key, adjustment) {

    var newStrength;

    var relationship = erg.utilities.poh.getCoupleRelationship(heart1Key, heart2Key);

    if (relationship) {

        newStrength = relationship.strength + adjustment;

        if (newStrength < erg.constants["pohRelationshipStrengthMinimum"]) {

            newStrength = erg.constants["pohRelationshipStrengthMinimum"];

        }

        if (newStrength > erg.constants["pohRelationshipStrengthMaximum"]) {

            newStrength = erg.constants["pohRelationshipStrengthMaximum"];

        }

        relationship.strength = newStrength;

        return newStrength;
    }

    return false;

}


erg.utilities.poh.getCurrentStability = function (heart1, heart2) {

    var stability = erg.constants["pohRelationshipStabilityBase"];

    var couplePassionAdjustment = erg.utilities.poh.getCouplePassionStabilityAdjustment(heart1, heart2);

    var tierModifier = Math.abs(erg[erg.constants["pohTiers"]][heart1.tier].magnitude - erg[erg.constants["pohTiers"]][heart2.tier].magnitude) * erg.constants["pohRelationshipStabilityTierModifier"];

    var heart1AttractionAdjustment = erg.utilities.poh.getAttractionStabilityAdjustment(heart1, heart2);

    var heart2AttractionAdjustment = erg.utilities.poh.getAttractionStabilityAdjustment(heart2, heart1);

    var heart1PassionAdjustment = erg.utilities.poh.getPassionStabilityAdjustment(heart1, heart2);

    var heart2PassionAdjustment = erg.utilities.poh.getPassionStabilityAdjustment(heart2, heart1);

    //################################################## SPECIAL TRAIT HACK #################################################################

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialCrownPrince"], heart1) || erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialCrownPrince"], heart2)) {

        tierModifier = Math.floor(tierModifier * erg.constants["pohTraitSpecialCrownPrinceStabilityFactor"]);

        if (tierModifier === 0) {

            tierModifier = erg.constants["pohTraitSpecialCrownPrinceStabilityBonus"];

        }


    }

    //################################################ END SPECIAL TRAIT HACK ###############################################################

    stability = stability + couplePassionAdjustment + tierModifier + heart1AttractionAdjustment + heart2AttractionAdjustment + heart1PassionAdjustment + heart2PassionAdjustment;

    //################################################## SPECIAL TRAIT HACK #################################################################

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialAnachronism"], heart1) || erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialAnachronism"], heart2)) {

        stability += erg.constants["pohTraitSpecialAnachronismStabilityBonus"];

        
    }

    //################################################ END SPECIAL TRAIT HACK ###############################################################

    if (stability < erg.constants["pohRelationshipStabilityMinimum"]) {

        stability = erg.constants["pohRelationshipStabilityMinimum"];

    }

    if (stability > erg.constants["pohRelationshipStabilityMaximum"]) {

        stability = erg.constants["pohRelationshipStabilityMaximum"];

    }

    /*console.log("Couple Passion: " + couplePassionAdjustment);
    console.log("Tier: " + tierModifier);
    console.log("Heart 1 Attraction: " + heart1AttractionAdjustment);
    console.log("Heart 2 Attraction: " + heart2AttractionAdjustment);
    console.log("Heart 1 Passion: " + heart1PassionAdjustment);
    console.log("Heart 2 Passion: " + heart2PassionAdjustment);*/

    return stability;

}


erg.utilities.poh.getCouplePassionStabilityAdjustment = function (heart1, heart2) {

    var heart1Passion = erg.utilities.getFromArrayByKey(heart1.connections, heart2.key).passion;
    var heart2Passion = erg.utilities.getFromArrayByKey(heart2.connections, heart1.key).passion;

    return Math.abs(heart1Passion - heart2Passion) * erg.constants["pohRelationshipStabilityCouplePassionModifier"];

}


erg.utilities.poh.getAttractionStabilityAdjustment = function(heart1, heart2) {

    var i;

    var heartsArray = erg.world[erg.constants["pohHeartsArray"]];
   
    var heart2Attraction = erg.utilities.poh.getCurrentAttraction(heart1, heart2);

    var tempAttraction;

    var rivalAttractionTotal = 0;

    for (i = 0; i < heartsArray.length; i++) {

        if ((heartsArray[i].active) && (heartsArray[i].key !== heart1.key) && (heartsArray[i].key !== heart2.key)) {
        
            tempAttraction = erg.utilities.poh.getCurrentAttraction(heart1, heartsArray[i]);
            
            if (tempAttraction >= heart2Attraction) {    
        
                rivalAttractionTotal += tempAttraction;

            }

        } 

    }

    return Math.floor(rivalAttractionTotal * erg.constants["pohRelationshipStabilityAttractionModifier"]);

}


erg.utilities.poh.getPassionStabilityAdjustment = function (heart1, heart2) {

    var i;

    var heart2Passion = erg.utilities.getFromArrayByKey(heart1.connections, heart2.key).passion;

    var tempPassion;

    var rivalPassionTotal = 0;

    for (i = 0; i < heart1.connections.length; i++) {

        if ((heart1.connections[i].key !== heart2.key) && (erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], heart1.connections[i].key).active)) {

            tempPassion = heart1.connections[i].passion;

            if (tempPassion >= heart2Passion) {

                rivalPassionTotal += tempPassion;

            }

        }

    }

    return  Math.floor(rivalPassionTotal * erg.constants["pohRelationshipStabilityPassionModifier"]);

}

erg.utilities.poh.checkForNoDateBreakups = function () {

    var i;

    var timeSinceThreshold;

    var tempStability;

    var relationshipArray = erg.world[erg.constants["pohRelationships"]];

    var newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeNoDateBreakup"]];

    var heart1;

    var heart2;

    for (i = 0; i < relationshipArray.length; i++) {

        if (relationshipArray[i].active) {

            timeSinceThreshold = (erg.world[erg.constants["pohCurrentWeek"]] - relationshipArray[i].lastDate) - erg[erg.constants["pohRelationshipTypes"]][relationshipArray[i].type].noDateBreakupThreshold;

            if (timeSinceThreshold >= 0) {

                heart1 = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], relationshipArray[i].heart1);

                heart2 = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], relationshipArray[i].heart2);

                tempStability = erg.utilities.poh.getCurrentStability(heart1, heart2);

                tempStability -= timeSinceThreshold * erg.constants["pohNoDateBreakupStabilityPenalty"];

                if (heart1.active && heart2.active && Math.floor(Math.random() * 100) >= tempStability) {

                    relationshipArray[i].active = false;

                    erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push({

                        category: newsType.category,
                        type: newsType.type,
                        title: newsType.title.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName),
                        text: newsType.text,
                        image: erg.utilities.poh.getProfileLargeURL(heart1),
                        imageSmall: erg.utilities.poh.getProfileThumbURL(heart1),
                        imageSmall2: erg.utilities.poh.getProfileThumbURL(heart2),
                        subjectHeartKey: heart1.key,
                        subjectHeart2Key: heart2.key,
                        timeStamp: new Date().getTime()

                    });

                }

            }

        }

    }

}

erg.utilities.poh.getDateAcceptanceModifier = function (heart1, heart2) {

    var acceptanceModifier = 0;

    if (erg.utilities.poh.coupleInRelationship(heart1.key, heart2.key)) {

        acceptanceModifier = erg[erg.constants["pohRelationshipTypes"]][erg.utilities.poh.getCoupleRelationship(heart1.key, heart2.key).type].dateAcceptanceModifier;

    } else {

        acceptanceModifier -= erg.utilities.poh.getHighestOutsiderRefusalModifier(heart2);

    }

    return acceptanceModifier;
}

erg.utilities.poh.getJealousyModifier = function (heart1, heart2) {

    var jealousyModifier = 0;
    
    if (erg.utilities.poh.coupleInRelationship(heart1.key, heart2.key)) {

        jealousyModifier = erg[erg.constants["pohRelationshipTypes"]][erg.utilities.poh.getCoupleRelationship(heart1.key, heart2.key).type].jealousyModifier;

    }

    return jealousyModifier;
}


erg.utilities.poh.getHighestOutsiderRefusalModifier = function (heart) {

    var relationshipsArray = erg.world[erg.constants["pohRelationships"]];

    var i;

    var refusalModifier = 0;

    for (i = 0; i < relationshipsArray.length; i++) {

        if (relationshipsArray[i].active && (relationshipsArray[i].heart1 === heart.key || relationshipsArray[i].heart2 === heart.key)) {

            if (erg[erg.constants["pohRelationshipTypes"]][relationshipsArray[i].type].outsiderRefusalModifier > refusalModifier) {

                refusalModifier = erg[erg.constants["pohRelationshipTypes"]][relationshipsArray[i].type].outsiderRefusalModifier;

            }


            //#################################### SPECIAL TRAIT HACK ###################################################

            if (!erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialUnzanIsWatching"], heart) && (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialUnzanIsWatching"], erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], relationshipsArray[i].heart1)) || erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialUnzanIsWatching"], erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], relationshipsArray[i].heart2)))) {

                refusalModifier += erg.constants["pohTraitSpecialUnzanIsWatchingRefusalModifier"];

                //console.log("Unzan is watching " + heart.preferredName);

            }

            //################################## END SPECIAL TRAIT HACK #################################################

        }

    }

    //#################################### SPECIAL TRAIT HACK ###################################################

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialAnachronism"], heart)) {

        refusalModifier += erg.constants["pohTraitSpecialRefusalBonus"];

        //console.log("Futo got uncomfortable");

    }

    //################################## END SPECIAL TRAIT HACK #################################################

    return refusalModifier;

}


erg.utilities.poh.checkForJealousyBreakups = function (heart1, heart2) {

    var i;

    var relationshipArray = erg.world[erg.constants["pohRelationships"]];

    var newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeJealousyBreakup"]];

    var jealousHeart;

    var cheatingHeart;

    var jealousyModifier;

    var tempJealousy;

    var tempStability;

    for (i = 0; i < relationshipArray.length; i++) {

        if (heart1.active && heart2.active && relationshipArray[i].active && (!((relationshipArray[i].heart1 === heart1.key && relationshipArray[i].heart2 === heart2.key) || (relationshipArray[i].heart1 === heart2.key && relationshipArray[i].heart2 === heart1.key))) && ((relationshipArray[i].heart1 === heart1.key) || (relationshipArray[i].heart1 === heart2.key) || (relationshipArray[i].heart2 === heart1.key) || (relationshipArray[i].heart2 === heart2.key))) {

            jealousHeart = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], relationshipArray[i].heart1);
            cheatingHeart = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], relationshipArray[i].heart2);

            if (jealousHeart.key === heart1.key || jealousHeart.key === heart2.key) {

                jealousHeart = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], relationshipArray[i].heart2);
                cheatingHeart = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], relationshipArray[i].heart1);

            }

            jealousyModifier = erg.utilities.poh.getJealousyModifier(jealousHeart, cheatingHeart);

            tempJealousy = erg.utilities.getFromArrayByKey(jealousHeart.attributes, erg.constants["pohAttributeJealousy"]).value + jealousyModifier;


            //################################### SPECIAL TRAIT HACK ####################################################################

            //If Parsee is cheating or being cheated upon, prevent breakup
            if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialPowerToManipulateJealousy"], jealousHeart) || erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialPowerToManipulateJealousy"], cheatingHeart)) {

                tempJealousy = 0;

                //console.log("Parsee manipulated jealousy to prevent a breakup.  Jealous heart: " + jealousHeart.preferredName + ", Cheating heart: " + cheatingHeart.preferredName);

            }

            //If Parsee is the third party, auto-succeed Jealousy test
            
            if ((erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialPowerToManipulateJealousy"], heart1) || erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialPowerToManipulateJealousy"], heart2)) && (!(erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialPowerToManipulateJealousy"], jealousHeart) || erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialPowerToManipulateJealousy"], cheatingHeart)))) {

                tempJealousy = 999;

                //console.log("Parsee manipulated jealousy to cause a breakup.  Jealous heart: " + jealousHeart.preferredName + ", Cheating heart: " + cheatingHeart.preferredName);

            }


            //################################## SPECIAL TRAIT HACK #####################################################################

            if (erg.utilities.poh.d100() <= tempJealousy) {

                tempStability = erg.utilities.poh.getCurrentStability(jealousHeart, cheatingHeart);

                if (erg.utilities.poh.d100() > tempStability) {

                    relationshipArray[i].active = false;

                    erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push({

                        category: newsType.category,
                        type: newsType.type,
                        title: newsType.title.replace(/JealousHeart/g, jealousHeart.preferredName).replace(/CheatingHeart/g, cheatingHeart.preferredName),
                        text: newsType.text.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName).replace(/JealousHeart/g, jealousHeart.preferredName),
                        image: erg.utilities.poh.getProfileLargeURL(jealousHeart),
                        imageSmall: erg.utilities.poh.getProfileThumbURL(jealousHeart),
                        imageSmall2: erg.utilities.poh.getProfileThumbURL(cheatingHeart),
                        subjectHeartKey: heart1.key,
                        subject2HeartKey: heart2.key,
                        timeStamp: new Date().getTime()

                    });

                }

            }

        }

    }

};

erg.utilities.poh.getIntimacyModifier = function (heart1, heart2) {

    var intimacyModifier = 0;
    
    if (erg.utilities.poh.coupleInRelationship(heart1.key, heart2.key)) {

        intimacyModifier = erg[erg.constants["pohRelationshipTypes"]][erg.utilities.poh.getCoupleRelationship(heart1.key, heart2.key).type].intimacyModifier;

    }

    return intimacyModifier;
}


erg.utilities.poh.relationshipUpgradePrestige = function (relationshipTypeKey, heart1, heart2) {

    var relationshipType = erg[erg.constants["pohRelationshipTypes"]][relationshipTypeKey];

    var baseCompatibility = erg.utilities.getFromArrayByKey(heart1.connections, heart2.key).baseCompatibility;

    var baseCompatibilityBonus = erg.constants["pohBaseCompatibilityPrestigeBonus"] - baseCompatibility;

    var totalPrestige = 0;

    totalPrestige += relationshipType.basePrestige;

    totalPrestige += Math.floor(baseCompatibilityBonus * relationshipType.compatibilityPrestigeModifier);

    erg.player.prestige.current += totalPrestige;

    erg.player.prestige.total += totalPrestige;  //Might need it for something

    erg.player.prestige.earned.push({

        amount: totalPrestige,
        type: erg.constants["pohPrestigeTypeRelationship"],
        relationshipType: relationshipTypeKey,
        label: heart1.preferredName + " &amp; " + heart2.preferredName + ": " + relationshipType.label,
        timestamp: new Date().getTime()

    });

    return totalPrestige;

}


erg.utilities.poh.checkForLevel1RelationshipUpgrade = function (heart1, heart2, heart1PassionChange, heart2PassionChange) {

    var i;

    var heart1Connection = erg.utilities.getFromArrayByKey(heart1.connections, heart2.key);

    var heart2Connection = erg.utilities.getFromArrayByKey(heart2.connections, heart1.key);

    var heart1Passion = heart1Connection.passion + heart1PassionChange;
    var heart2Passion = heart2Connection.passion + heart2PassionChange;

    var newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeRelationshipChange"]];

    var relationshipTypeArray;

    var relationshipType = erg.constants["pohRelationshipTypeItem"];

    var prestige = 0;

    var newsText;

    var relationship = erg.utilities.poh.getCoupleRelationship(heart1.key, heart2.key);

    var heart1PassionTrack = relationship.heart1InitialPassionTrack;
    var heart2PassionTrack = relationship.heart2InitialPassionTrack;

    if (heart1.key !== relationship.heart1) {

        //round the wrong way;

        heart1PassionTrack = relationship.heart2InitialPassionTrack;
        heart2PassionTrack = relationship.heart1InitialPassionTrack;        

    }

    if ((erg.utilities.poh.d100() < heart1Passion) && (erg.utilities.poh.d100() < heart2Passion)) {

        relationshipTypeArray = new Array();

        for (i = 0; i < erg[erg.constants["pohPassionTracks"]][heart1Connection.track].relationshipUpgrades.length; i++) {

            relationshipTypeArray.push(erg[erg.constants["pohPassionTracks"]][heart1Connection.track].relationshipUpgrades[i]);

        }

        for (i = 0; i < erg[erg.constants["pohPassionTracks"]][heart2Connection.track].relationshipUpgrades.length; i++) {

            relationshipTypeArray.push(erg[erg.constants["pohPassionTracks"]][heart2Connection.track].relationshipUpgrades[i]);

        }

        if (relationshipTypeArray.length > 0) {

            erg.utilities.shuffleArray(relationshipTypeArray);
            relationshipType = relationshipTypeArray[0];
        }

        relationship.type = relationshipType;

        prestige = erg.utilities.poh.relationshipUpgradePrestige(relationshipType, heart1, heart2);

        text = erg[erg.constants["pohRelationshipTypes"]][relationshipType].newsText.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName).replace(/RelationshipLabel/g, erg[erg.constants["pohRelationshipTypes"]][relationshipType].label).replace(/PrestigeTotal/g, prestige);

        text = text.replace(/HeartComment1/g, erg.utilities.poh.getRelationshipUpgradeComment(heart1PassionTrack, 1, 1));

        text = text.replace(/HeartComment2/g, erg.utilities.poh.getRelationshipUpgradeComment(heart2PassionTrack, 1, 2));

        erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push({

            category: newsType.category,
            type: newsType.type,
            title: newsType.title.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName).replace(/RelationshipLabel/g, erg[erg.constants["pohRelationshipTypes"]][relationshipType].label),
            text: text,
            image: erg.utilities.poh.getProfileLargeURL(heart1),
            imageSmall: erg.utilities.poh.getProfileThumbURL(heart1),
            imageSmall2: erg.utilities.poh.getProfileThumbURL(heart2),
            subjectHeartKey: heart1.key,
            subject2HeartKey: heart2.key,
            timeStamp: new Date().getTime()

        });


    }

}


erg.utilities.poh.checkForLevel2RelationshipUpgrade = function (heart1, heart2) {

    var i;

    var heart1Connection = erg.utilities.getFromArrayByKey(heart1.connections, heart2.key);

    var heart2Connection = erg.utilities.getFromArrayByKey(heart2.connections, heart1.key);

    var heart1Passion = heart1Connection.passion;
    var heart2Passion = heart2Connection.passion;

    var relationship = erg.utilities.poh.getCoupleRelationship(heart1.key, heart2.key);

    var relationshipType = erg.constants["pohRelationshipTypeCouple"];

    var stability = erg.utilities.poh.getCurrentStability(heart1, heart2);

    var newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeRelationshipChangeCouple"]];

    var prestige = 0;

    var text;

    var heart1PassionTrack = relationship.heart1InitialPassionTrack;
    var heart2PassionTrack = relationship.heart2InitialPassionTrack;

    if (heart1.key !== relationship.heart1) {

        //round the wrong way;

        heart1PassionTrack = relationship.heart2InitialPassionTrack;
        heart2PassionTrack = relationship.heart1InitialPassionTrack;

    }

    //######################################## SPECIAL TRAIT HACK #################################################

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialBlackOrWhite"], heart1) || erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialBlackOrWhite"], heart2)) {

        if (stability < erg.constants["pohTraitSpecialBlackOrWhiteThreshold"]) {

            stability = 0;

            //console.log("Eiki says NO.  Stability set to 0 for Level 2 upgrade");

        } else {

            stability = 999;

            //console.log("Eiki says YES.  Stability set to 999 for Level 2 upgrade");

        }

    }


    //######################################## END SPECIAL TRAIT HACK #############################################

    if ((erg.utilities.poh.d100() < heart1Passion) && (erg.utilities.poh.d100() < heart2Passion) && (erg.utilities.poh.d100() < relationship.strength) && (erg.utilities.poh.d100() < stability)) {

        relationship.type = relationshipType;

        heart1Connection.track = erg.constants["pohPassionTrackLove"];
        heart2Connection.track = erg.constants["pohPassionTrackLove"];

        prestige = erg.utilities.poh.relationshipUpgradePrestige(relationshipType, heart1, heart2);

        text = newsType.text.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName).replace(/RelationshipLabel/g, erg[erg.constants["pohRelationshipTypes"]][relationshipType].label).replace(/PrestigeTotal/g, prestige);

        text = text.replace(/HeartComment1/g, erg.utilities.poh.getRelationshipUpgradeComment(heart1PassionTrack, 2, 1));

        text = text.replace(/HeartComment2/g, erg.utilities.poh.getRelationshipUpgradeComment(heart2PassionTrack, 2, 2));

        erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push({

            category: newsType.category,
            type: newsType.type,
            title: newsType.title.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName).replace(/RelationshipLabel/g, erg[erg.constants["pohRelationshipTypes"]][relationshipType].label),
            text: text,
            image: erg.utilities.poh.getProfileLargeURL(heart1),
            imageSmall: erg.utilities.poh.getProfileThumbURL(heart1),
            imageSmall2: erg.utilities.poh.getProfileThumbURL(heart2),
            subjectHeartKey: heart1.key,
            subject2HeartKey: heart2.key,
            timeStamp: new Date().getTime()

        });

    }

}


erg.utilities.poh.checkForLevel3RelationshipUpgrade = function (heart1, heart2) {

    var i;

    var heart1Connection = erg.utilities.getFromArrayByKey(heart1.connections, heart2.key);

    var heart2Connection = erg.utilities.getFromArrayByKey(heart2.connections, heart1.key);

    var heart1Passion = heart1Connection.passion;
    var heart2Passion = heart2Connection.passion;

    var relationship = erg.utilities.poh.getCoupleRelationship(heart1.key, heart2.key);

    var relationshipType = erg.constants["pohRelationshipTypeTrueLove"];

    var stability = erg.utilities.poh.getCurrentStability(heart1, heart2);

    var newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeRelationshipChangeTrueLove"]];

    var longevity = erg.world[erg.constants["pohCurrentWeek"]] - relationship.formed;

    var prestige = 0;

    var text;

    var heart1PassionTrack = relationship.heart1InitialPassionTrack;
    var heart2PassionTrack = relationship.heart2InitialPassionTrack;

    if (heart1.key !== relationship.heart1) {

        //round the wrong way;

        heart1PassionTrack = relationship.heart2InitialPassionTrack;
        heart2PassionTrack = relationship.heart1InitialPassionTrack;

    }

    //######################################## SPECIAL TRAIT HACK #################################################

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialBlackOrWhite"], heart1) || erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialBlackOrWhite"], heart2)) {

        if (stability < erg.constants["pohTraitSpecialBlackOrWhiteThreshold"]) {

            stability = 0;

            //console.log("Eiki says NO.  Stability set to 0 for True Love upgrade");

        } else {

            stability = 999;

            //console.log("Eiki says YES.  Stability set to 999 for True Love upgrade");

        }

    }


    //######################################## END SPECIAL TRAIT HACK #############################################

    if ((relationship.strength >= erg.constants["pohTrueLoveStrengthThreshold"]) && (longevity >= erg.constants["pohTrueLoveLongevityThreshold"]) && (erg.utilities.poh.d100() < heart1Passion) && (erg.utilities.poh.d100() < heart2Passion) && (erg.utilities.poh.d100() < stability)) {

        relationship.type = relationshipType;

        prestige = erg.utilities.poh.relationshipUpgradePrestige(relationshipType, heart1, heart2);

        relationship.active = false;

        erg.utilities.poh.setAllRelationshipsInactive(heart1);  //This actually breaks polyamoury, so I guess it may need a review at some point.
        erg.utilities.poh.setAllRelationshipsInactive(heart2);

        erg.utilities.poh.clearNewsTypeCurrentWeek(erg.constants["pohNewsTypeAdviceLetter"], heart1.key);
        erg.utilities.poh.clearNewsTypeCurrentWeek(erg.constants["pohNewsTypeAdviceLetter"], heart2.key);

        //Prestige goes here

        heart1.active = false;
        heart2.active = false;

        heart1.retired = true;
        heart2.retired = true;

        text = newsType.text.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName).replace(/RelationshipLabel/g, erg[erg.constants["pohRelationshipTypes"]][relationshipType].label).replace(/PrestigeTotal/g, prestige);

        text = text.replace(/HeartComment1/g, erg.utilities.poh.getRelationshipUpgradeComment(heart1PassionTrack, 3, 1));

        text = text.replace(/HeartComment2/g, erg.utilities.poh.getRelationshipUpgradeComment(heart2PassionTrack, 3, 2));

        erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push({

            category: newsType.category,
            type: newsType.type,
            title: newsType.title.replace(/Heart1/g, heart1.preferredName).replace(/Heart2/g, heart2.preferredName).replace(/RelationshipLabel/g, erg[erg.constants["pohRelationshipTypes"]][relationshipType].label),
            text: text,
            image: erg.utilities.poh.getProfileLargeURL(heart1),
            imageSmall: erg.utilities.poh.getProfileThumbURL(heart1),
            imageSmall2: erg.utilities.poh.getProfileThumbURL(heart2),
            subjectHeartKey: heart1.key,
            subjectHeart2Key: heart2.key,
            timeStamp: new Date().getTime()

        });



    }

}


erg.utilities.poh.setAllRelationshipsInactive = function (heart) {

    var i;

    var relationshipArray = erg.world[erg.constants["pohRelationships"]];

    for (i = 0; i < relationshipArray.length; i++) {

        if (relationshipArray[i].heart1 === heart.key || relationshipArray[i].heart2 === heart.key) {

            relationshipArray[i].active = false;

        }


    }

}



erg.utilities.poh.getRelationshipUpgradeComment = function (trackKey, level, heartNumber) {

    var i;

    var track = erg[erg.constants["pohPassionTracks"]][trackKey];

    for (i = 0; i < track.relationshipResponses.length; i++) {

        if (track.relationshipResponses[i].level === level && track.relationshipResponses[i].heart === heartNumber) {

            return track.relationshipResponses[i].text;

        }

    }

    return "&quot;No comment.&quot;";

}



//############################################ COMPATIBILITY UTILITIES ######################################################

erg.utilities.poh.getCurrentCompatibility = function (heart1, heart2) {

    var i;

    var heart1AttractionContribution;
    var heart1PassionContribution;
    var heart1AttributeReactionContribution = 0;

    var heart2AttractionContribution;
    var heart2PassionContribution;
    var heart2AttributeReactionContribution = 0;

    var tierContribution = 0;



    var compatibility;

    heart1PassionContribution = erg.utilities.getFromArrayByKey(heart1.connections, heart2.key).passion * erg.constants["pohCompatibilityPassionModifier"];
    heart1AttractionContribution = erg.utilities.poh.getCurrentAttraction(heart1, heart2) * erg.constants["pohCompatibilityAttractionModifier"];
    heart1AttributeReactionContribution = erg.utilities.getCompatibilityAttributeReactionContribution(heart1, heart2);


    //Yeah I know, DRY

    heart2PassionContribution = erg.utilities.getFromArrayByKey(heart2.connections, heart1.key).passion * erg.constants["pohCompatibilityPassionModifier"];
    heart2AttractionContribution = erg.utilities.poh.getCurrentAttraction(heart2, heart1) * erg.constants["pohCompatibilityAttractionModifier"];
    heart2AttributeReactionContribution = erg.utilities.getCompatibilityAttributeReactionContribution(heart2, heart1);

    compatibility = Math.floor(((heart1PassionContribution + heart1AttractionContribution + heart1AttributeReactionContribution) + (heart2PassionContribution + heart2AttractionContribution + heart2AttributeReactionContribution)) / 2);

    tierContribution = Math.abs(erg[erg.constants["pohTiers"]][heart1.tier].magnitude - erg[erg.constants["pohTiers"]][heart2.tier].magnitude) * erg.constants["pohCompatibilityTierModifier"];

    compatibility += tierContribution;  //Assumed to be negative


    if (compatibility < erg.constants["pohCompatibilityMinimum"]) {

        compatibility = erg.constants["pohCompatibilityMinimum"];

    }

    if (compatibility > erg.constants["pohCompatibilityMaximum"]) {

        compatibility = erg.constants["pohCompatibilityMaximum"];

    }

    return compatibility;

}

erg.utilities.getCompatibilityAttributeReactionContribution = function(heart1, heart2) {

    var i;

    var tempModifiers;
    var tempReactionContribution;
    var totalReactionContribution = 0;

    for (i = 0; i < heart2.attributes.length; i++) {

        if ((erg[erg.constants["pohAttributes"]][heart2.attributes[i].key].category === erg.constants["pohAttributeCategoryPositive"]) || (erg[erg.constants["pohAttributes"]][heart2.attributes[i].key].category === erg.constants["pohAttributeCategoryNegative"])) {

            tempReactionContribution = 0;

            tempModifiers = erg.utilities.poh.getReactionTraitTestResultModifiers(heart1, heart2.attributes[i].key);

            tempReactionContribution += (heart2.attributes[i].value / 100) * tempModifiers.success;
            tempReactionContribution += Math.abs((heart2.attributes[i].value / 100) - 1) * tempModifiers.fail;

            tempReactionContribution = tempReactionContribution * erg.constants["pohCompatabilityAttributeReactionModifier"];

            totalReactionContribution += tempReactionContribution;

        }

    }

    return totalReactionContribution;

}


//############################################ POH DANMAKU UTILITIES ######################################################

//PoH Danmaku is not the same as TitTP danmaku.  TitTP is allowed to use "danmaku" unadorned, PoH isn't.


erg.utilities.poh.getPoHDanmakuVictory = function (tierTotalChallengers, tierTotalDefenders) {

    var winChance = 50;

    var tierDifference = (tierTotalChallengers - tierTotalDefenders) * erg.constants["pohDanmakuTierDifferenceWinChanceModifier"];

    winChance += tierDifference;

    if (erg.utilities.poh.d100() <= winChance) {

        return true;

    }

    return false;
}

erg.utilities.poh.getPoHRandomSpellcard = function (danmakuOpponent) {

    erg.utilities.shuffleArray(danmakuOpponent.spellCards);

    return danmakuOpponent.spellCards[0];

}

erg.utilities.poh.getPoHDanmakuOpponentDetails = function (opponentKey) {

    var opponentHeart;

    var opponent = erg[erg.constants["pohDanmakuOpponents"]][opponentKey];

    if (opponent.heart !== erg.constants["pohHeartNone"]) {

        opponentHeart = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], opponent.heart);

        opponent.firstName = opponentHeart.firstName;
        opponent.lastName = opponentHeart.lastName;
        opponent.fullName = opponentHeart.fullName;
        opponent.preferredName = opponentHeart.preferredName;
        opponent.title = opponentHeart.title;
        opponent.profilePrefix = opponentHeart.profilePrefix;
        opponent.tier = opponentHeart.tier;
        
    };

    return opponent;

};

erg.utilities.poh.getPoHDanmakuOpponentKeyByHeartKey = function (heartKey) {

    var opponents = erg[erg.constants["pohDanmakuOpponents"]];

    for (opponent in opponents) {

        if (opponents[opponent].heart === heartKey) {

            return opponents[opponent].key;

        }

    }
}

erg.utilities.poh.getPoHDanmakuAlly = function (goodAlly, challenger) {

    var allyArray = new Array();
    var challengerTierMagnitude = erg[erg.constants["pohTiers"]][challenger.tier].magnitude;
    var tempOpponent;

    //############################################# SPECIAL TRAIT HACK ################################################

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialMoriyaShrineConspiracy"], erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], challenger.heart)) && goodAlly) {

        return erg.utilities.poh.getPoHDanmakuOpponentDetails(erg.constants["pohDanmakuOpponentSuwako"]);

    }

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialMoriyaShrineConspiracy"], erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], challenger.heart)) && !goodAlly) {

        return erg.utilities.poh.getPoHDanmakuOpponentDetails(erg.constants["pohDanmakuOpponentSanae"]);

    }

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialAvatarOfBishamonten"], erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], challenger.heart)) && !goodAlly) {

        return erg.utilities.poh.getPoHDanmakuOpponentDetails(erg.constants["pohDanmakuOpponentNazrin"]);

    }

    //########################################## END SPECIAL TRAIT HACK ###############################################

    if ((!goodAlly) && challengerTierMagnitude === 1) {

        challengerTierMagnitude = 2; //This prevents Kisume from being the only possible ally for a poorly socialised Shizuha, which is basically the only kind of Shizuha

    }

    var opponents = erg[erg.constants["pohDanmakuOpponents"]];

    for (opponent in opponents) {

        tempOpponent = erg.utilities.poh.getPoHDanmakuOpponentDetails(opponents[opponent].key);

        if (tempOpponent.key !== challenger.key) {

            if (goodAlly && erg[erg.constants["pohTiers"]][tempOpponent.tier].magnitude >= challengerTierMagnitude) {

                allyArray.push(tempOpponent.key);

            }

            if ((!goodAlly) && erg[erg.constants["pohTiers"]][tempOpponent.tier].magnitude < challengerTierMagnitude) {

                allyArray.push(tempOpponent.key);

            }

        }

    }

    erg.utilities.shuffleArray(allyArray);

    return erg.utilities.poh.getPoHDanmakuOpponentDetails(allyArray[0]);

}


erg.utilities.poh.getPoHDanmakuOpponentTeam = function (badMatch, challengerTierTotal, challengerKey, allyKey) {

    if (challengerTierTotal === 1) {

        //Then Kisume is one of the challengers, oh shit!

        challengerTierTotal += 1;  //This lets the Aki sisters/Rumia etc. qualify as a "good match"  You could get rid of this if there were enough level 1 midbosses in canon

    }

    if (challengerTierTotal > 14) {

        //Reimu, Yukari or Marisa are in the mix, making a bad match very difficult to arrange.

        challengerTierTotal = 14; //If you've sociability'd your way into one of those, you can get away with your hubris

    }

    var firstPickTierMin = 0;
    var firstPickTierMax = challengerTierTotal - 1;
    var firstPickActual;

    var minBudget = 0;
    var maxBudget = challengerTierTotal;

    var opponents = erg[erg.constants["pohDanmakuOpponents"]];

    var opponentArray = new Array();

    var tempOpponent;

    var opponentKey;
    var assistKey;

    var exclusionArray = new Array();

    exclusionArray.push({ key: challengerKey });
    exclusionArray.push({ key: allyKey });

    if (badMatch) {

        firstPickTierMax = 100;
        firstPickTierMin = Math.floor(challengerTierTotal / 2);

        minBudget = challengerTierTotal + 1;
        maxBudget = 100;

    }

    for (opponent in opponents) {

        tempOpponent = erg.utilities.poh.getPoHDanmakuOpponentDetails(opponents[opponent].key);

        if ((erg[erg.constants["pohTiers"]][tempOpponent.tier].magnitude >= firstPickTierMin) && (erg[erg.constants["pohTiers"]][tempOpponent.tier].magnitude <= firstPickTierMax) && (!erg.utilities.getFromArrayByKey(exclusionArray, tempOpponent.key))) {

            opponentArray.push(tempOpponent.key);

        }

    }

    erg.utilities.shuffleArray(opponentArray);

    opponentKey = opponentArray[0];
    exclusionArray.push({ key: opponentKey });
    firstPickActual = erg[erg.constants["pohTiers"]][opponents[opponentKey].tier].magnitude;

    opponentArray = new Array();

    for (opponent in opponents) {

        tempOpponent = erg.utilities.poh.getPoHDanmakuOpponentDetails(opponents[opponent].key);

        if ((erg[erg.constants["pohTiers"]][tempOpponent.tier].magnitude + firstPickActual >= minBudget) && (erg[erg.constants["pohTiers"]][tempOpponent.tier].magnitude + firstPickActual <= maxBudget) && (!erg.utilities.getFromArrayByKey(exclusionArray, tempOpponent.key))) {

            opponentArray.push(tempOpponent.key);

        }

    }

    erg.utilities.shuffleArray(opponentArray);

    assistKey = opponentArray[0];

    return {

        opponent: opponentKey,
        assist: assistKey

    }

}

erg.utilities.poh.generatePoHDanmaku = function (heart) {

    var sociability = erg.utilities.getFromArrayByKey(heart.attributes, erg.constants["pohAttributeSociability"]).value;
    var hubris = erg.utilities.getFromArrayByKey(heart.attributes, erg.constants["pohAttributeHubris"]).value;

    var expressiveness = erg.utilities.getFromArrayByKey(heart.attributes, erg.constants["pohAttributeExpression"]).value;
    var cleverness = erg.utilities.getFromArrayByKey(heart.attributes, erg.constants["pohAttributeCleverness"]).value;
    var pettiness = erg.utilities.getFromArrayByKey(heart.attributes, erg.constants["pohAttributePettiness"]).value;

    var courage = erg.utilities.getFromArrayByKey(heart.attributes, erg.constants["pohAttributeCourage"]).value;
    var viciousness = erg.utilities.getFromArrayByKey(heart.attributes, erg.constants["pohAttributeViciousness"]).value;

    var goodAlly = false;
    var badMatch = false;

    var challenger = erg.utilities.poh.getPoHDanmakuOpponentDetails(erg.utilities.poh.getPoHDanmakuOpponentKeyByHeartKey(heart.key));
    var ally;
    var opponentTeam;
    var opponent;
    var assist;

    var challengerTierTotal;
    var defenderTierTotal;
    var totalTierDifference;

    var challengerVictory = false;
    var courageInDefeat = false;
    var viciousnessInVictory = false;

    var challengerReputationBonus = 0;
    var challengerNewReputation;

    var totalReputationBonus = 0;

    var danmaku = {};

    var text = "";

    var newPassion;

    //Get Ally

    text += "<p><strong>" + challenger.title + ", " + challenger.fullName + "</strong> felt the need to prove herself on the field of battle.</p>";
    text += "<p>She was ";

    if (erg.utilities.poh.d100() <= sociability) {

        goodAlly = true;

    } else {

        text += "<strong>not</strong> ";

    }

    text += "able to befriend a strong ally; she recruited ";

    ally = erg.utilities.poh.getPoHDanmakuAlly(goodAlly, challenger);

    text += "<strong>" + ally.title + ", " + ally.fullName + ".</strong></p>";



    //Get Opponents

    challengerTierTotal = erg[erg.constants["pohTiers"]][challenger.tier].magnitude + erg[erg.constants["pohTiers"]][ally.tier].magnitude;

    text += "<p>She was ";

    if (erg.utilities.poh.d100() <= hubris) {

        badMatch = true;

    } else {

        text += "<strong>not</strong> ";

    }

    text += "consumed by hubris; she challenged ";

    opponentTeam = erg.utilities.poh.getPoHDanmakuOpponentTeam(badMatch, challengerTierTotal, challenger.key, ally.key);

    opponent = erg.utilities.poh.getPoHDanmakuOpponentDetails(opponentTeam.opponent);
    assist = erg.utilities.poh.getPoHDanmakuOpponentDetails(opponentTeam.assist);

    defenderTierTotal = erg[erg.constants["pohTiers"]][opponent.tier].magnitude + erg[erg.constants["pohTiers"]][assist.tier].magnitude;
    totalTierDifference = defenderTierTotal - challengerTierTotal;

    text += "<strong>" + opponent.title + ", " + opponent.fullName + "</strong> &amp; <strong>" + assist.title + ", " + assist.fullName + ".</strong></p>";

    //######################################### SPECIAL TRAIT HACK ###################################################

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialAvatarOfBishamonten"], heart) && ally.key === erg.constants["pohDanmakuOpponentNazrin"]) {

        challengerTierTotal += 4;
        totalTierDifference = defenderTierTotal - challengerTierTotal;

        //console.log("Shou buffed Nazrin");

    }

    //####################################### END SPECIAL TRAIT HACK #################################################


    //######################################### SPECIAL TRAIT HACK ###################################################

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialLoveOfStrength"], heart)) {

        text += "<p>With a booming laugh, " + heart.preferredName + " thanked her ally and opponents alike for daring to take the field with her.</p>";

        if (ally.heart !== erg.constants["pohHeartNone"]) {

            newPassion = erg.utilities.poh.modifyPassion(heart, ally.heart, erg.constants["pohTraitSpecialLoveOfStrengthPassionBonus"]);
            text += "<p><em>" + heart.preferredName + "'s Passion for " + ally.preferredName + " increases by " + erg.constants["pohTraitSpecialLoveOfStrengthPassionBonus"] + " to " + newPassion + ".</em></p>";

        }

        if (opponent.heart !== erg.constants["pohHeartNone"]) {

            newPassion = erg.utilities.poh.modifyPassion(heart, opponent.heart, erg.constants["pohTraitSpecialLoveOfStrengthPassionBonus"]);
            text += "<p><em>" + heart.preferredName + "'s Passion for " + opponent.preferredName + " increases by " + erg.constants["pohTraitSpecialLoveOfStrengthPassionBonus"] + " to " + newPassion + ".</em></p>";

        }

        if (assist.heart !== erg.constants["pohHeartNone"]) {

            newPassion = erg.utilities.poh.modifyPassion(heart, assist.heart, erg.constants["pohTraitSpecialLoveOfStrengthPassionBonus"]);
            text += "<p><em>" + heart.preferredName + "'s Passion for " + assist.preferredName + " increases by " + erg.constants["pohTraitSpecialLoveOfStrengthPassionBonus"] + " to " + newPassion + ".</em></p>";

        }

    }

    //####################################### END SPECIAL TRAIT HACK #################################################

    //Trash Talk

    text += "<p>During her challenge-banter, she <strong>expressed</strong> herself ";


    //######################################### SPECIAL TRAIT HACK ###################################################

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialAvatarOfBishamonten"], heart)) {

        expressiveness = 999;
        //console.log("Shou channeled Bishamonten");

    }

    //####################################### END SPECIAL TRAIT HACK #################################################

    if (erg.utilities.poh.d100() <= expressiveness) {

        text += "<strong>well.</strong>";

        challengerReputationBonus = erg.constants["pohDanmakuGoodTrashTalkReputationBonus"];

        if (erg.utilities.poh.d100() <= pettiness) {

            text += " But her words seemed <strong>petty</strong> even for Gensokyo.";
            challengerReputationBonus = Math.floor(challengerReputationBonus * erg.constants["pohDanmakuAttributeRollReputationBonusFactor"]);

        }

    } else {

        text += "<strong>poorly.</strong>";

        challengerReputationBonus = erg.constants["pohDanmakuBadTrashTalkReputationBonus"];

        if (erg.utilities.poh.d100() <= cleverness) {

            text += " But some <strong>clever</strong> insults helped her save face.";
            challengerReputationBonus = Math.floor(challengerReputationBonus * erg.constants["pohDanmakuAttributeRollReputationBonusFactor"]);

        }

    }


    //####################################### SPECIAL TRAIT HACK ####################################################

    if (challengerReputationBonus > 0 && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialMoriyaShrineConspiracy"], heart)) {

        challengerReputationBonus = Math.floor(challengerReputationBonus * erg.constants["pohTraitSpecialMoriyaShrineConspiracyReputationFactor"]);

    }

    //##################################### END SPECIAL TRAIT HACK ##################################################


    totalReputationBonus += challengerReputationBonus;
    challengerNewReputation = erg.utilities.poh.adjustAttribute(heart, erg.constants["pohAttributeReputation"], challengerReputationBonus);

    text += "</p><p><em>" + challenger.preferredName + " earned " + challengerReputationBonus + " Reputation (now " + challengerNewReputation + ")</em></p>";

    //Danmaku

    challengerVictory = erg.utilities.poh.getPoHDanmakuVictory(challengerTierTotal, defenderTierTotal);

    if (challengerVictory) {

        danmaku.victor1 = challenger.preferredName;
        danmaku.victor2 = ally.preferredName;
        danmaku.loser1 = opponent.preferredName;
        danmaku.loser2 = assist.preferredName;

        challengerReputationBonus = erg.constants["pohDanmakuWinReputationBonus"] + (totalTierDifference * erg.constants["pohDanmakuTierDifferenceReputationModifier"]);

        if (challengerReputationBonus < 2) {

            challengerReputationBonus = 2;

        }

        text += "<p>In the fight itself, she was <strong>victorious!</strong></p>";

        text += "<p>" + opponent.preferredName + " was " + challenger.attackLabel + " by " + challenger.preferredName + "'s <strong>" + erg.utilities.poh.getPoHRandomSpellcard(challenger) + "</strong></p>";

        text += "<p>" + assist.preferredName + " was " + ally.attackLabel + " by " + ally.preferredName + "'s <strong>" + erg.utilities.poh.getPoHRandomSpellcard(ally) + "</strong></p>";


        if (erg.utilities.poh.d100() <= viciousness) {

            viciousnessInVictory = true;
            challengerReputationBonus = Math.floor(challengerReputationBonus * erg.constants["pohDanmakuAttributeRollReputationBonusFactor"]);

            text += "<p>But " + challenger.preferredName + " was <strong>vicious</strong> in punishing the foe.</p>";

        } else {

            text += "<p>" + challenger.preferredName + " was graceful in victory.</p>";

        }


    } else {

        danmaku.victor1 = opponent.preferredName;
        danmaku.victor2 = assist.preferredName;
        danmaku.loser1 = challenger.preferredName;
        danmaku.loser2 = ally.preferredName;

        challengerReputationBonus = erg.constants["pohDanmakuLoseReputationBonus"] + (totalTierDifference * erg.constants["pohDanmakuTierDifferenceReputationModifier"]);

        if (challengerReputationBonus > -2) {

            challengerReputationBonus = -2;

        }

        text += "<p><p>In the fight itself, she was <strong>defeated!</strong></p>";

        text += "<p>" + challenger.preferredName + " was " + opponent.attackLabel + " by " + opponent.preferredName + "'s <strong>" + erg.utilities.poh.getPoHRandomSpellcard(opponent) + "</strong></p>";

        text += "<p>" + ally.preferredName + " was " + assist.attackLabel + " by " + assist.preferredName + "'s <strong>" + erg.utilities.poh.getPoHRandomSpellcard(assist) + "</strong></p>";

        if (erg.utilities.poh.d100() <= courage) {

            courageInDefeat = true;
            challengerReputationBonus = Math.floor(challengerReputationBonus * erg.constants["pohDanmakuAttributeRollReputationBonusFactor"]);
            text += "<p>But " + challenger.preferredName + " was <strong>courageous</strong> in defeat.</p>";

        } else {

            text += "<p>" + challenger.preferredName + "'s morale broke in defeat.</p>";

        }


    }

    //####################################### SPECIAL TRAIT HACK ####################################################

    if (challengerReputationBonus > 0 && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialMoriyaShrineConspiracy"], heart)) {

        challengerReputationBonus = Math.floor(challengerReputationBonus * erg.constants["pohTraitSpecialMoriyaShrineConspiracyReputationFactor"]);

    }

    //##################################### END SPECIAL TRAIT HACK ##################################################

    totalReputationBonus += challengerReputationBonus;
    challengerNewReputation = erg.utilities.poh.adjustAttribute(heart, erg.constants["pohAttributeReputation"], challengerReputationBonus);

    text += "<p><em>" + challenger.preferredName + " earned " + challengerReputationBonus + " Reputation (now " + challengerNewReputation + ")</em></p>";

    danmaku.text = text;

    danmaku.summary = challenger.preferredName + " reputation change: " + totalReputationBonus + " (to " + challengerNewReputation + ")";

    return danmaku;


}

erg.utilities.poh.generatePoHDanmakuAndNews = function (heart) {

    var danmaku = erg.utilities.poh.generatePoHDanmaku(heart);

    var newsItem;

    var newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeDanmakuMatch"]];

    newsItem = {

        category: newsType.category,
        type: newsType.type,
        title: newsType.title.replace(/Victor1/g, danmaku.victor1).replace(/Victor2/g, danmaku.victor2).replace(/Loser1/g, danmaku.loser1).replace(/Loser2/g, danmaku.loser2),
        image: erg.utilities.poh.getProfileLargeURL(heart),
        imageSmall: erg.utilities.poh.getProfileThumbURL(heart),
        text: danmaku.text,
        summary: danmaku.summary,
        subjectHeartKey: heart.key,
        timeStamp: new Date().getTime()

    }

    erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push(newsItem);


}



//############################################ NEWS UTILITIES ######################################################

erg.utilities.poh.hasNewsTypeThisWeek = function (newsType, heartKey) {

    var i;

    var currentNews = erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news;

    for (i = 0; i < currentNews.length; i++) {

        if (currentNews[i].subjectHeartKey === heartKey && currentNews[i].type === newsType) {

            return true;

        }

    }

    return false;

}


erg.utilities.poh.newsSort = function (a, b) {

    if (a.read && !b.read) {

        return 1;

    }

    if (!a.read && b.read) {

        return -1;

    }

    if (a.timeStamp > b.timeStamp) {

        return 1;

    }

    if (a.timeStamp < b.timeStamp) {

        return -1;

    }

    return 0;

}


erg.utilities.poh.clearNewsTypeCurrentWeek = function (newsType, subjectHeart) {

    var i;

    var currentNews = erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news;

    for (i = currentNews.length - 1; i >= 0; i--) {

        if (currentNews[i].type === newsType && ((!subjectHeart) || (currentNews[i].subjectHeartKey === subjectHeart))) {

            currentNews.splice(i, 1);

        }

    }

}

erg.utilities.poh.getAliceDeskNewsItemHTML = function (newsItem, id, index) {

    var tempHTML = "";

    var readText = "<span class=\"pohAliceDeskNewsNew\">New! </span>";

    if (newsItem.read) {

        readText = "";

    }

    tempHTML += "<div id=\"" + id + index + "\" class=\"pohAliceDeskNewsItem\">";
    tempHTML += "<div class=\"pohAliceDeskNewsItemTitle\">" + readText + newsItem.title + "</div>";
    
    if (newsItem.summary) {

        tempHTML += "<div class=\"pohAliceDeskNewsItemSummary\">" + newsItem.summary + "</div>";

    }
    
    tempHTML += "</div>";

    return tempHTML;

}


erg.utilities.poh.getNewsProcChanceForHeart = function (newsTypeKey, heart) {

    var newsType = erg[erg.constants["pohNews"]][newsTypeKey];

    var procChance = newsType.baseChance;


    //############################################ SPECIAL TRAIT HACKS #############################################################

    if (newsTypeKey === erg.constants["pohNewsTypeAdviceLetter"] && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialIndependent"], heart)) {

        procChance = Math.floor(procChance * erg.constants["pohTraitSpecialIndependentAdviceFactor"]);

        //console.log("Indepenent Advice Proc chance for " + heart.preferredName + ": " + procChance);

    }

    if (newsTypeKey === erg.constants["pohNewsTypeDate"] && erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialIndependent"], heart)) {

        procChance = Math.floor(procChance * erg.constants["pohTraitSpecialIndependentDateFactor"]);

        //console.log("Indepenent Date Proc chance for " + heart.preferredName + ": " + procChance);

    }

    if (newsTypeKey === erg.constants["pohNewsTypeHeartEntry"] && erg.utilities.poh.hasTrait(erg.constants["pohTraitLoyalServant"], heart) && erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], erg.constants["pohSeiga"]).active) {

        procChance = 999;

    }

    if (newsTypeKey === erg.constants["pohNewsTypeHeartEntry"] && erg.utilities.poh.hasTrait(erg.constants["pohTraitDemandingMaster"], heart) && erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], erg.constants["pohYoshika"]).active) {

        procChance = 999;

    }

    if (erg.utilities.poh.coupleInRelationship(heart.key, erg.constants["pohHina"])) {  //This is bad, since we're checking for Hina rather than the trait

        procChance += erg.constants["pohTraitSpecialWheelOfFortuneProcBonus"];

    }

    //############################################ END SPECIAL TRAIT HACKS #########################################################



    return procChance;

}


erg.utilities.poh.getAdviceLetterText = function (heart) {

    var i;

    for (i = 0; i < heart.adviceLetters.length; i++) {

        if ((!heart.adviceLetters[i].used) || heart.adviceLetters[i].repeatable) {

            heart.adviceLetters[i].used = true;

            return heart.adviceLetters[i].text;

        }

    }

    return erg[erg.constants["pohDefaultAdviceLetter"]].replace(/FullName/g, heart.fullName);

}


//############################################ ADVICE UTILITIES ######################################################

erg.utilities.poh.getDisplayObjectForAdvice = function (advice) {

    var i;

    var j;

    var displayObject = {};

    var datePlan = new Array();

    var extracurricularString;

    var tempNews;

    var tempScenario;

    displayObject.key = advice.key;

    displayObject.heartName = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], advice.key).preferredName;

    for (i = 0; i < advice.news.length; i++) {

        tempNews = advice.news[i];

        switch (tempNews.key) {

            case erg.constants["pohNewsTypeDate"]:

                displayObject.dateHeartName = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], tempNews.dateHeartKey).preferredName;

                for (j = 0; j < tempNews.datePlan.length; j++) {

                    tempScenario = erg[erg.constants["pohAttributeTestScenarios"]][tempNews.datePlan[j]];

                    datePlan.push(tempScenario.title + " (" + erg[erg.constants["pohAttributes"]][tempScenario.heart1Attribute].label + "/" + erg[erg.constants["pohAttributes"]][tempScenario.heart2Attribute].label + ")");

                }

                displayObject.datePlan = datePlan;

                break;

            case erg.constants["pohNewsTypeDanmakuMatch"]:

                extracurricularString = "Seek out a danmaku battle.";

                break;

            case erg.constants["pohNewsTypeAttributeChange"]:

                extracurricularString = "Cultivate";

                if (tempNews.type === erg.constants["pohAdviceExtracurricularAttributeLower"]) {

                    extracurricularString = "Suppress";

                }

                extracurricularString += " your " + erg[erg.constants["pohAttributes"]][tempNews.attribute].label;

                break;

            case erg.constants["pohNewsTypePassionChange"]:

                extracurricularString = "Get closer to";

                if (tempNews.type === erg.constants["pohAdviceExtracurricularPassionLower"]) {

                    extracurricularString = "Distance yourself from";

                }

                extracurricularString += " " + erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], tempNews.targetHeart).preferredName;

                break;


            case erg.constants["pohNewsTypeTraitChange"]:

                extracurricularString = "Change your personality: " + erg[erg.constants["pohTraits"]][tempNews.trait].label;

                break;

        }


    }

    displayObject.extracurricularString = extracurricularString;

    return displayObject;

}


//################################################### INTERSTITIAL UTILITIES ##################################################################################


erg.utilities.poh.getInterstitialStringsFromNews = function () {

    var stringsArray = new Array();

    var fightingCount = 0;
    var fightingString = "Girls are fighting";

    var adventureCount = 0;
    var adventureString = "Girls are having adventures";

    var openingHeartsCount = 0;
    var openingHeartsString = "Girls are opening their hearts";

    var adviceCount = 0;
    var adviceString = "Girls are asking for advice";

    var dateCount = 0;
    var dateString = "Girls are dating";

    var refuseCount = 0;
    var refuseString = "Girls are turning girls down";

    var breakupCount = 0;
    var breakupString = "Girls are breaking up";

    var closerCount = 0;
    var closerString = "Girls are getting closer";

    var trueLoveCount = 0;
    var trueLoveString = "Girls are finding true love";

    var newsArray = erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news;

    var i;

    stringsArray.push("Girls are drinking");

    for (i = 0; i < newsArray.length; i++) {

        switch (newsArray[i].type) {

            case erg.constants["pohNewsTypeDanmakuMatch"]:
                fightingCount += 1;
                break;

            case erg.constants["pohNewsTypeAttributeChange"]:
            case erg.constants["pohNewsTypePassionChange"]:
            case erg.constants["pohNewsTypeTraitChange"]:
                adventureCount += 1;
                break;

            case erg.constants["pohNewsTypeHeartEntry"]:
                openingHeartsCount += 1;
                break;

            case erg.constants["pohNewsTypeAdviceLetter"]:
                adviceCount += 1;
                break;

            case erg.constants["pohNewsTypeDate"]:
                dateCount += 1;
                break;

            case erg.constants["pohNewsTypeDateRefusal"]:
                refuseCount += 1;
                break;

            case erg.constants["pohNewsTypeDate"]:
                dateCount += 1;
                break;

            case erg.constants["pohNewsTypeNoDateBreakup"]:
            case erg.constants["pohNewsTypeJealousyBreakup"]:
            case erg.constants["pohNewsTypeBadDateBreakup"]:
                breakupCount += 1;
                break;

            case erg.constants["pohNewsTypeRelationshipChange"]:
            case erg.constants["pohNewsTypeRelationshipChangeCouple"]:
                closerCount += 1;
                break;

            case erg.constants["pohNewsTypeRelationshipChangeTrueLove"]:
                trueLoveCount += 1;
                break;

        }

    }

    if (fightingCount > 0) {

        for (i = 0; i < fightingCount; i++) {

            fightingString += ".";

        }

        stringsArray.push(fightingString);

    }

    if (adventureCount > 0) {

        for (i = 0; i < adventureCount; i++) {

            adventureString += ".";

        }

        stringsArray.push(adventureString);

    }

    if (openingHeartsCount > 0) {

        for (i = 0; i < openingHeartsCount; i++) {

            openingHeartsString += ".";

        }

        stringsArray.push(openingHeartsString);

    }

    if (adviceCount > 0) {

        for (i = 0; i < adviceCount; i++) {

            adviceString += ".";

        }

        stringsArray.push(adviceString);

    }

    if (dateCount > 0) {

        for (i = 0; i < dateCount; i++) {

            dateString += ".";

        }

        stringsArray.push(dateString);

    }

    if (refuseCount > 0) {

        for (i = 0; i < refuseCount; i++) {

            refuseString += ".";

        }

        stringsArray.push(refuseString);

    }

    if (breakupCount > 0) {

        for (i = 0; i < breakupCount; i++) {

            breakupString += ".";

        }

        stringsArray.push(breakupString);

    }

    if (closerCount > 0) {

        for (i = 0; i < closerCount; i++) {

            closerString += ".";

        }

        stringsArray.push(closerString);

    }

    if (trueLoveCount > 0) {

        for (i = 0; i < trueLoveCount; i++) {

            trueLoveString += ".";

        }

        stringsArray.push(trueLoveString);

    }

    return stringsArray;

}


erg.utilities.poh.getInterstitialStringsForSave = function () {


    var stringsArray = new Array();

    stringsArray.push("Girls are drinking");

    stringsArray.push("Girls are asking friends to remember");

    stringsArray.push("Girls are lying that they'll remember anything");

    stringsArray.push("Girls are giving up and trusting Aya");

    stringsArray.push("Girls are drunk");

    return stringsArray;

}


erg.utilities.poh.getInterstitialStringsForLoad = function () {


    var stringsArray = new Array();

    stringsArray.push("Girls are waking up");

    stringsArray.push("Girls are hung over");

    stringsArray.push("Girls are trying to remember what happened");

    stringsArray.push("Girls are reading the newspaper");

    stringsArray.push("Girls are not believing any of it");

    stringsArray.push("Girls are drinking");

    return stringsArray;

}


erg.utilities.poh.getInterstitialStringsForNewGame = function () {


    var stringsArray = new Array();

    stringsArray.push("Girls are picking fights");

    stringsArray.push("Girls are fighting Yukari Yakumo");

    stringsArray.push("Girls are losing");

    stringsArray.push("Girls are burdened with terrible labours as forfeit");

    stringsArray.push("Girls are drinking");

    return stringsArray;

}