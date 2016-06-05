//################################### TITLE SCREEN DELEGATE #################################################


erg.delegates[erg.constants["delegatePoHTitleScreen"]] = function (newView, args) {

    newView.interaction = {

        type: erg.constants["interactionTypePoHTitleScreen"],
        text: "<p>You are the Seven-Coloured Puppeteer, <strong>Alice Margatroid</strong>.  You are a powerful and immortal magician living in a realm of gods, heroes and monsters.</p><p>Once again, your wife has entangled you in one of her messes, this time involving the schemes of the ineffable Youkai Sage, Yukari Yakumo.</p><p>And now it's your job to guide a rabble of drunken overpowered thugs into happy and stable romantic relationships.</p><p>Good luck.</p>",
        loadGame: false

    }

    if (localStorage.getItem(erg.constants["saveSlotQuicksave"]) || localStorage.getItem(erg.constants["saveSlotAutosave"])) {

        newView.interaction.loadGame = true;

    }


    return newView;

}


//################################### MAIN MENU DELEGATE #################################################


//OVERRIDING ERG CORE

erg.delegates[erg.constants["delegateMainMenu"]] = function (args, newView) {

    newView.interaction = {};
    newView.interaction.type = erg.constants["interactionTypeMainMenu"];
    
    newView.interaction.menuImageURL = erg.utilities.getDefaultMenuImageURL();
    //When selectable menu images are implemented (if?), look for a selected one here and then override if it exists.

    newView.interaction.actions = [{

        type: erg.constants["menuActionTypeReturn"],
        text: "Return",
        id: "menuReturn",
        class: "menuAction",
        event: erg.constants["eventReturn"],
        args: {}

    }, {

        type: erg.constants["menuActionTypeSaveGame"],
        text: "Save and Continue",
        id: "menuSave",
        class: "menuAction",
        event: erg.constants["eventPoHSave"],  
        args: { slot: erg.constants["saveSlotQuicksave"] }  

    }, {

        type: erg.constants["menuActionTypeLoadGame"],
        text: "Load Game",
        id: "menuLoad",
        class: "menuAction",
        event: erg.constants["eventPoHViewLoadGameMenu"],  //event: erg.constants["eventViewLoadGameMenu"],
        args: {}  

    }, {

        type: erg.constants["menuActionTypeCredits"],
        text: "Credits",
        id: "menuCredits",
        class: "menuAction",
        event: erg.constants["eventViewCredits"],
        args: {}

    }, {

        type: erg.constants["menuActionTypeQuicksave"],
        text: "Save and Quit",
        id: "menuQuicksave",
        class: "menuAction",
        event: erg.constants["eventPoHQuicksave"],
        args: {}

    }, {

        type: erg.constants["menuActionTypeQuit"],
        text: "Quit Without Saving",
        id: "menuQuit",
        class: "menuAction",
        event: erg.constants["eventQuit"],
        args: {}

    }]

    return newView;

}


//################################### LOAD GAME MENU DELEGATE #################################################

erg.delegates[erg.constants["delegatePoHLoadGameMenu"]] = function (args, newView) {

    var tempSave;    

    newView.interaction = {};
    newView.interaction.type = erg.constants["interactionTypePoHLoadGameMenu"];
    
    newView.interaction.menuImageURL = erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceImageSubdirectory"] + "/" + erg.constants["applicationResourceImageMenuSubdirectory"] + "/load.jpg";

    newView.interaction.actions = new Array();

    if (localStorage.getItem(erg.constants["saveSlotQuicksave"])) {

        tempSave = JSON.parse(localStorage.getItem(erg.constants["saveSlotQuicksave"]));

        newView.interaction.actions.push({

            type: erg.constants["menuActionTypeLoadGame"],
            text: "Manual Save - " + tempSave.world[erg.constants["pohWeeks"]][tempSave.world[erg.constants["pohCurrentWeek"]]].label + " - " + tempSave.dateString,
            id: "pohLoadQuicksave",
            class: "menuAction",
            event: erg.constants["eventPoHLoad"],
            args: { slot: erg.constants["saveSlotQuicksave"]}

        });


    }

    if (localStorage.getItem(erg.constants["saveSlotAutosave"])) {

        tempSave = JSON.parse(localStorage.getItem(erg.constants["saveSlotAutosave"]));

        newView.interaction.actions.push({

            type: erg.constants["menuActionTypeLoadGame"],
            text: "Auto Save - " + tempSave.world[erg.constants["pohWeeks"]][tempSave.world[erg.constants["pohCurrentWeek"]]].label + " - " + tempSave.dateString,
            id: "pohLoadAutosave",
            class: "menuAction",
            event: erg.constants["eventPoHLoad"],
            args: { slot: erg.constants["saveSlotAutosave"]}

        });


    }

    return newView;

}

//################################### INITIALISE PoH DELEGATE #################################################

erg.delegates[erg.constants["delegateInitialisePoH"]] = function () {

    var i;

    var j;

    var traitsDone;

    var traitsAdded;

    var random;

    var currentHeart;

    var currentConnection;

    var validHearts = erg.world[erg.constants["pohValidInitialHearts"]];

    var validAttractionTraits = erg.world[erg.constants["pohValidRandomAttractionTraits"]];
    var validReactionTraits = erg.world[erg.constants["pohValidRandomReactionTraits"]];

    var validAttributes = erg.world[erg.constants["pohValidAttributes"]];

    var validPassionTracks = erg.world[erg.constants["pohValidRandomPassionTracks"]];

    var heartsArray = new Array();

    var newsType;

    //Setup Player

    if (!erg.player.prestige) {

        erg.player.prestige = {

            current: 0,
            total: 0,
            earned: new Array(),
            spent: new Array()

        }

    }

    //Set week

    erg.world.act = erg.constants["pohSpring"];

    erg.world[erg.constants["pohCurrentWeek"]] = 0;

    erg.world[erg.constants["pohRelationships"]] = new Array();

    erg.world[erg.constants["pohWeeks"]] = new Array();

    erg.world[erg.constants["pohWeeks"]].push(erg.utilities.poh.buildNewWeek(erg.world[erg.constants["pohCurrentWeek"]]));

    //Empty advice array

    erg.world[erg.constants["pohAdvice"]] = new Array();

    //Generate hearts

    erg.utilities.shuffleArray(validHearts);

    for (i = 0; i < validHearts.length; i++) {

        currentHeart = erg[erg.constants["pohHearts"]][validHearts[i]];

        currentHeart.active = false;

        if (i < erg.constants["pohInitialActiveHearts"]) {

            currentHeart.active = true;

        }

        if (!currentHeart.attractionTraits) {

            currentHeart.attractionTraits = new Array();

        }

        if (!currentHeart.reactionTraits) {

            currentHeart.reactionTraits = new Array();

        }

        if (!currentHeart.specialTraits) {

            currentHeart.specialTraits = new Array();

        }

        if (!currentHeart.adviceLetters) {

            currentHeart.adviceLetters = new Array();

        }

        //Attraction traits

        erg.utilities.shuffleArray(validAttractionTraits);

        traitsDone = false;

        traitsAdded = currentHeart.attractionTraits.length;

        j = 0;

        if ((validAttractionTraits.length > 0) && (traitsAdded < erg.constants["pohRandomTraits"])) {  //Adding traits based on the random trait constant, no duplicates

            while (!traitsDone) {

                if (!erg.utilities.poh.hasTrait(validAttractionTraits[j], currentHeart)) {

                    currentHeart.attractionTraits.push(validAttractionTraits[j]);
                    traitsAdded += 1;

                }

                j += 1;

                if ((j >= validAttractionTraits.length) || (traitsAdded >= erg.constants["pohRandomTraits"])) {

                    traitsDone = true;

                }

            }

        }

        //Reaction traits

        erg.utilities.shuffleArray(validReactionTraits);

        traitsDone = false;

        traitsAdded = currentHeart.reactionTraits.length;

        j = 0;

        if ((validReactionTraits.length > 0) && (traitsAdded < erg.constants["pohRandomTraits"])) {  //Adding traits based on the random trait constant, no duplicates

            while (!traitsDone) {

                if (!erg.utilities.poh.hasTrait(validReactionTraits[j], currentHeart)) {

                    currentHeart.reactionTraits.push(validReactionTraits[j]);
                    traitsAdded += 1;

                }

                j += 1;

                if ((j >= validReactionTraits.length) || (traitsAdded >= erg.constants["pohRandomTraits"])) {

                    traitsDone = true;

                }

            }

        }


        //Special traits

        //Sort Traits

        erg.utilities.poh.sortTraits(currentHeart);

        //Attributes

        if (!currentHeart.attributes) {

            currentHeart.attributes = new Array();

        }

        for (j = 0; j < validAttributes.length; j++) {

            if (!erg.utilities.getFromArrayByKey(currentHeart.attributes, validAttributes[j])) {

                currentHeart.attributes.push({ key: validAttributes[j], value: erg.utilities.poh.generateBaseAttribute() });

            }

        }

        currentHeart.attributes.sort(function (a, b) {

            if (erg[erg.constants["pohAttributes"]][a.key].label < erg[erg.constants["pohAttributes"]][b.key].label) {

                return -1;

            }

            if (erg[erg.constants["pohAttributes"]][a.key].label > erg[erg.constants["pohAttributes"]][b.key].label) {

                return 1;

            }

            return 0;

        });



        heartsArray.push(currentHeart);

    }

    //Connections must be done after everything else, as all traits and attributes must have been generated

    for (i = 0; i < heartsArray.length; i++) {

        if (!heartsArray[i].connections) {

            heartsArray[i].connections = new Array();

        }

        for (j = 0; j < heartsArray.length; j++) {

            if ((j !== i) && (!erg.utilities.getFromArrayByKey(heartsArray[i].connections, heartsArray[j].key))) {  //ie if it's not the same character and not already set

                currentConnection = {};

                currentConnection.key = heartsArray[j].key;

                currentConnection.passion = erg.utilities.poh.generateBasePassion();

                erg.utilities.shuffleArray(validPassionTracks);

                currentConnection.track = validPassionTracks[0];

                currentConnection.baseAttraction = erg.utilities.poh.generateBaseAttraction();

                heartsArray[i].connections.push(currentConnection);

            }

        }

    }

    //Then we sweep back over to do compatibility based on the above

    for (i = 0; i < heartsArray.length; i++) {

        for (j = 0; j < heartsArray[i].connections.length; j++) {

            heartsArray[i].connections[j].baseCompatibility = erg.utilities.poh.getCurrentCompatibility(heartsArray[i], erg.utilities.getFromArrayByKey(heartsArray, heartsArray[i].connections[j].key));

        }

        //And while we're here alphabetise the connection arrays

        heartsArray[i].connections.sort(function (a, b) {

            var nameA = erg.utilities.getFromArrayByKey(heartsArray, a.key).preferredName.toLowerCase();

            var nameB = erg.utilities.getFromArrayByKey(heartsArray, b.key).preferredName.toLowerCase();

            if (nameA < nameB) {

                return -1;

            }

            if (nameA > nameB) {

                return 1;

            }

            return 0;

        });

    }


    //Set the array

    erg.world[erg.constants["pohHeartsArray"]] = heartsArray;



    //Add initial request letters

    for (i = 0; i < erg.constants["pohInitialAdviceLetters"]; i++) {

        newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeAdviceLetter"]];

        erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push({

            category: newsType.category,
            type: newsType.type,
            title: newsType.title.replace(/Heart1/g, heartsArray[i].preferredName),
            text: erg.utilities.poh.getAdviceLetterText(heartsArray[i]),
            image: erg.utilities.poh.getProfileLargeURL(heartsArray[i]),
            imageSmall: erg.utilities.poh.getProfileThumbURL(heartsArray[i]),
            subjectHeartKey: heartsArray[i].key

        });

    }

    //Set starting flags

    erg.world.flags[erg.constants["pohFlagRemiliaShopOpen"]] = false;
    erg.world.flags[erg.constants["pohFlagUnsolicitedAdviceLetter"]] = false;
    
    //Alphabet sort the hearts

    erg.world[erg.constants["pohHeartsArray"]].sort(erg.utilities.poh.preferredNameSort);

};


//################################### HEARTS LIST DELEGATE #################################################

erg.delegates[erg.constants["delegatePoHHeartsList"]] = function (newView) {

    var i;

    var heartsArray = erg.world[erg.constants["pohHeartsArray"]];

    var heartsList = new Array();

    var profileUrl;

    var week = erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]];

    var newsLetters = new Array();
    var newsSociety = new Array();
    var newsGeneral = new Array();
    var newsDanmaku = new Array();
    var newsSatori = new Array();


    var relationships = erg.world[erg.constants["pohRelationships"]];

    var currentRelationships = new Array();

    var tempRelationshipType;

    var endGame = false;

    var advice = erg.world[erg.constants["pohAdvice"]];

    var adviceArray = new Array();

    //Check for endgame
    if (erg.world[erg.constants["pohCurrentWeek"]] >= erg.constants["pohFinalWeek"]) {

        endGame = true;
        erg.utilities.poh.clearNewsTypeCurrentWeek(erg.constants["pohNewsTypeAdviceLetter"]);

    }

    for (i = 0; i < heartsArray.length; i++) {

        if (heartsArray[i].active) {

            profileUrl = erg.utilities.poh.getProfileThumbURL(heartsArray[i]);

            heartsList.push({ key: heartsArray[i].key, title: heartsArray[i].title, name: heartsArray[i].preferredName, imageUrl: profileUrl });

        }

    }

    for (i = 0; i < week.news.length; i++) {

        switch (week.news[i].category) {

           case erg.constants["pohNewsCategoryLetter"]:

                newsLetters.push({

                    title: week.news[i].title,
                    summary: week.news[i].summary,
                    read: week.news[i].read,
                    itemIndex: i

                });

                break;

           case erg.constants["pohNewsCategoryBunbunmaruSociety"]:

                newsSociety.push({

                    title: week.news[i].title,
                    summary: week.news[i].summary,
                    read: week.news[i].read,
                    itemIndex: i

                });

                break;

           case erg.constants["pohNewsCategoryBunbunmaruGeneral"]:

                newsGeneral.push({

                    title: week.news[i].title,
                    summary: week.news[i].summary,
                    read: week.news[i].read,
                    itemIndex: i

                });

                break;

           case erg.constants["pohNewsCategoryBunbunmaruDanmaku"]:

                newsDanmaku.push({

                    title: week.news[i].title,
                    summary: week.news[i].summary,
                    read: week.news[i].read,
                    itemIndex: i

                });

                break;

           case erg.constants["pohNewsCategorySatori"]:

                newsSatori.push({

                    title: week.news[i].title,
                    summary: week.news[i].summary,
                    read: week.news[i].read,
                    itemIndex: i

                });

                break;

        }


    }

    newsLetters.sort(erg.utilities.poh.newsSort);
    newsSociety.sort(erg.utilities.poh.newsSort);
    newsDanmaku.sort(erg.utilities.poh.newsSort);
    newsGeneral.sort(erg.utilities.poh.newsSort);
    newsSatori.sort(erg.utilities.poh.newsSort);

    for (i = 0; i < relationships.length; i++) {

        if (relationships[i].active) {

            tempRelationshipType = erg[erg.constants["pohRelationshipTypes"]][relationships[i].type];

            currentRelationships.push({

                heart1Name: erg.utilities.getFromArrayByKey(heartsArray, relationships[i].heart1).preferredName,
                heart2Name: erg.utilities.getFromArrayByKey(heartsArray, relationships[i].heart2).preferredName,
                strength: relationships[i].strength,
                typeKey: relationships[i].type,
                typeLabel: erg[erg.constants["pohRelationshipTypes"]][relationships[i].type].label,
                longevity: erg.world[erg.constants["pohCurrentWeek"]] - relationships[i].formed,
                lastDate: erg.world[erg.constants["pohWeeks"]][relationships[i].lastDate].label,
                stability: erg.utilities.poh.getCurrentStability(erg.utilities.getFromArrayByKey(heartsArray, relationships[i].heart1), erg.utilities.getFromArrayByKey(heartsArray, relationships[i].heart2)),
                relationshipDateChance: tempRelationshipType.relationshipDateChance,
                dateAcceptanceModifier: tempRelationshipType.dateAcceptanceModifier,
                intimacyModifier: tempRelationshipType.intimacyModifier,
                jealousyModifier: tempRelationshipType.jealousyModifier,
                outsiderRefusalModifier: tempRelationshipType.outsiderRefusalModifier,
                noDateBreakupThreshold: tempRelationshipType.noDateBreakupThreshold,
                description: tempRelationshipType.description,
                level: tempRelationshipType.level

            });


        }

    }


    for (i = 0; i < advice.length; i++) {

        adviceArray.push(erg.utilities.poh.getDisplayObjectForAdvice(advice[i]));

    }

    //Populate and send on its way
    newView.interaction = {

        type: erg.constants["interactionTypePoHHeartsList"],
        heartsList: heartsList,
        week: erg.world[erg.constants["pohCurrentWeek"]],
        weekLabel: week.label,
        weekSeason: week.season,
        newsLetters: newsLetters,
        newsSociety: newsSociety,
        newsDanmaku: newsDanmaku,
        newsGeneral: newsGeneral,
        newsSatori: newsSatori,
        relationships: currentRelationships,
        endGame: endGame,
        adviceArray: adviceArray,
        prestige: erg.player.prestige.current

    };

    if (erg.world[erg.constants["pohLastSelectedNewsTab"]]) {

        newView.interaction.lastSelectedTab = erg.world[erg.constants["pohLastSelectedNewsTab"]];

    }

    //Check for Remilia

    if (erg.world.flags[erg.constants["pohFlagRemiliaShopOpen"]]) {

        newView.interaction.remiliaShop = true;

    }

    return newView;

}



//################################### VIEW HEART DELEGATE #################################################

erg.delegates[erg.constants["delegatePoHViewHeart"]] = function (args, newView) {

    var heart = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], args.key);

    var heart2;

    var profileUrl = erg.utilities.poh.getProfileThumbURL(heart);
    var profileLargeUrl = erg.utilities.poh.getProfileLargeURL(heart);

    var relationships = erg.world[erg.constants["pohRelationships"]];

    var i;

    var j;

    var tempTrait;

    var tempRelationshipType;

    var tempIndex;

    newView.interaction = {};

    newView.interaction.type = erg.constants["interactionTypePoHViewHeart"];

    newView.interaction.heart = {

        key: heart.key,
        name: heart.fullName,
        title: heart.title,
        imageUrl: profileUrl,
        imageLargeUrl: profileLargeUrl,
        tierKey: heart.tier,
        tierLabel: erg[erg.constants["pohTiers"]][heart.tier].label,
        species: heart.species,
        speciesLabel: erg[erg.constants["pohSpecies"]][heart.species].label,
        speciesDescription: erg[erg.constants["pohSpecies"]][heart.species].description,
        speciesWikiLink: erg[erg.constants["pohSpecies"]][heart.species].wikiLink,
        hairLength: heart.hairLength,
        hairLengthLabel: erg[erg.constants["pohHairLength"]][heart.hairLength].label,
        hairColour: heart.hairColour,
        hairColourLabel: erg[erg.constants["pohHairColour"]][heart.hairColour].label,
        eyeColour: heart.eyeColour,
        eyeColourLabel: erg[erg.constants["pohEyeColour"]][heart.eyeColour].label

    };

    newView.interaction.heart.attractionTraits = new Array();
    newView.interaction.heart.reactionTraits = new Array();
    newView.interaction.heart.specialTraits = new Array();

    for (i = 0; i < heart.attractionTraits.length; i++) {

        tempTrait = erg[erg.constants["pohTraits"]][heart.attractionTraits[i]];

        tempIndex = newView.interaction.heart.attractionTraits.push({ key: heart.attractionTraits[i], type: tempTrait.type, label: tempTrait.label, target: tempTrait.target, targetLabel: erg[erg.constants["pohAttractionTargets"]][tempTrait.target].label, magnitude: tempTrait.magnitude });
        tempIndex -= 1; //push returns length, but we want the actual index, which is one less

        if (tempTrait.type === erg.constants["pohTraitTypeAttractionModifierConditional"]) {

            newView.interaction.heart.attractionTraits[tempIndex].positive = new Array();

            for (j = 0; j < tempTrait.positive.length; j++) {

                newView.interaction.heart.attractionTraits[tempIndex].positive.push(erg.utilities.poh.getAttractionTargetValueLabel(tempTrait.target, tempTrait.positive[j]));

            }

            if (tempTrait.target === erg.constants["pohAttractionTargetTier"]) {

                newView.interaction.heart.attractionTraits[tempIndex].subTarget = tempTrait.subtarget;
                newView.interaction.heart.attractionTraits[tempIndex].magnitudeVariable = tempTrait.magnitudeVariable;

            }

        }


    }

    for (i = 0; i < heart.reactionTraits.length; i++) {

        tempTrait = erg[erg.constants["pohTraits"]][heart.reactionTraits[i]];

        tempIndex = newView.interaction.heart.reactionTraits.push({ key: heart.reactionTraits[i], label: tempTrait.label, description: tempTrait.description });
        tempIndex -= 1; //push returns length, but we want the actual index, which is one less

        newView.interaction.heart.reactionTraits[tempIndex].attributes = new Array();

        for (j = 0; j < tempTrait.attributes.length; j++) {

            newView.interaction.heart.reactionTraits[tempIndex].attributes.push({

                key: tempTrait.attributes[j].key,
                label: erg[erg.constants["pohAttributes"]][tempTrait.attributes[j].key].label,
                success: tempTrait.attributes[j].success,
                fail: tempTrait.attributes[j].fail

            });

        }

    }

    for (i = 0; i < heart.specialTraits.length; i++) {

        tempTrait = erg[erg.constants["pohTraits"]][heart.specialTraits[i]];

        newView.interaction.heart.specialTraits.push({ key: heart.specialTraits[i], label: tempTrait.label, description: tempTrait.description, effectText: tempTrait.effectText });

    }


    newView.interaction.heart.attributesPositive = new Array();
    newView.interaction.heart.attributesNegative = new Array();
    newView.interaction.heart.attributesMeta = new Array();

    for (i = 0; i < heart.attributes.length; i++) {

        if (erg[erg.constants["pohAttributes"]][heart.attributes[i].key].category === erg.constants["pohAttributeCategoryPositive"]) {

            newView.interaction.heart.attributesPositive.push({ key: heart.attributes[i].key, label: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].label, value: heart.attributes[i].value, description: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].description });

        }

        if (erg[erg.constants["pohAttributes"]][heart.attributes[i].key].category === erg.constants["pohAttributeCategoryNegative"]) {

            newView.interaction.heart.attributesNegative.push({ key: heart.attributes[i].key, label: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].label, value: heart.attributes[i].value, description: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].description });

        }

        if (erg[erg.constants["pohAttributes"]][heart.attributes[i].key].category === erg.constants["pohAttributeCategoryMeta"]) {

            newView.interaction.heart.attributesMeta.push({ key: heart.attributes[i].key, label: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].label, value: heart.attributes[i].value, description: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].description });

        }

    }

    newView.interaction.heart.relationships = new Array();

    for (i = 0; i < relationships.length; i++) {

        if ((relationships[i].active) && ((relationships[i].heart1 === heart.key) || (relationships[i].heart2 === heart.key))) {

            heart2 = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], relationships[i].heart2);

            if (heart2.key === heart.key) {

                heart2 = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], relationships[i].heart1);

            }

            tempRelationshipType = erg[erg.constants["pohRelationshipTypes"]][relationships[i].type];

            newView.interaction.heart.relationships.push({

                heart1Name: heart.preferredName,
                heart2Name: heart2.preferredName,
                strength: relationships[i].strength,
                typeKey: relationships[i].type,
                typeLabel: erg[erg.constants["pohRelationshipTypes"]][relationships[i].type].label,
                longevity: erg.world[erg.constants["pohCurrentWeek"]] - relationships[i].formed,
                lastDate: erg.world[erg.constants["pohWeeks"]][relationships[i].lastDate].label,
                stability: erg.utilities.poh.getCurrentStability(heart, heart2),
                relationshipDateChance: tempRelationshipType.relationshipDateChance,
                dateAcceptanceModifier: tempRelationshipType.dateAcceptanceModifier,
                intimacyModifier: tempRelationshipType.intimacyModifier,
                jealousyModifier: tempRelationshipType.jealousyModifier,
                outsiderRefusalModifier: tempRelationshipType.outsiderRefusalModifier,
                noDateBreakupThreshold: tempRelationshipType.noDateBreakupThreshold,
                description: tempRelationshipType.description,
                level: tempRelationshipType.level

            });

        }

    }

    newView.interaction.heart.connections = new Array();

    for (i = 0; i < heart.connections.length; i++) {

        if (erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], heart.connections[i].key).active) {

            newView.interaction.heart.connections.push({ key: heart.connections[i].key, name: erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], heart.connections[i].key).preferredName, passion: heart.connections[i].passion, trackStage: erg.utilities.getPassionTrackStageLabel(heart.connections[i]), attraction: erg.utilities.poh.getCurrentAttraction(heart, erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], heart.connections[i].key)), baseCompatibility: heart.connections[i].baseCompatibility, currentCompatibility: erg.utilities.poh.getCurrentCompatibility(heart, erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], heart.connections[i].key)) });

        }

    }


    //Unsolicited Advice

    if ((!erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohAdvice"]], heart.key)) && (!erg.utilities.poh.hasNewsTypeThisWeek(erg.constants["pohNewsTypeAdviceLetter"], heart.key)) && erg.player.prestige.current >= erg.constants["pohPrestigeCostUnsolicitedAdvice"]) {

        newView.interaction.unsolicitedAdvice = true;
        newView.interaction.prestige = erg.player.prestige.current;
        newView.interaction.unsolicitedAdviceCost = erg.constants["pohPrestigeCostUnsolicitedAdvice"];

        //Really should be events and stuff in here, I'll just do it in the view renderer for now.

    }

    return newView;

}




//################################### GENERATE NEWS DELEGATE #################################################


erg.delegates[erg.constants["delegatePoHGenerateNews"]] = function () {


    var i;
    var j;

    var newsType;

    var newsItem;

    var random;

    var dateRequest;

    var date;

    var scenario;

    var newAttributeValue;

    var newPassionValue;

    var traitChange;

    var danmaku;

    var heart2;

    var heartsArray = erg.world[erg.constants["pohHeartsArray"]];

    var candidateNewsArray = erg.world[erg.constants["pohCandidateRandomNewsTypes"]];

    var heartAdvice;

    var newLoneliness;

    var summary;

    for (i = 0; i < heartsArray.length; i++) {

        if (heartsArray[i].active) {

            heartAdvice = false;

            heartAdvice = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohAdvice"]], heartsArray[i].key);

            if (heartAdvice) {

                for (j = 0; j < heartAdvice.news.length; j++) {

                    switch (heartAdvice.news[j].key) {

                        case erg.constants["pohNewsTypeDate"]:
                            
                            erg.utilities.poh.generateAdviceDate(heartAdvice);
                            break;

                        case erg.constants["pohNewsTypeDanmakuMatch"]:

                            erg.utilities.poh.generatePoHDanmakuAndNews(heartsArray[i]);
                            break;

                        case erg.constants["pohNewsTypeAttributeChange"]:
                            
                            erg.utilities.poh.handleAdviceAttributeChange(heartsArray[i], heartAdvice.news[j]);
                            break;

                        case erg.constants["pohNewsTypePassionChange"]:
                            
                            erg.utilities.poh.handleAdvicePassionChange(heartsArray[i], heartAdvice.news[j]);
                            break;


                        case erg.constants["pohNewsTypeTraitChange"]:

                            erg.utilities.poh.handleAdviceTraitChange(heartsArray[i], heartAdvice.news[j]);
                            break;


                    }

                }

            }

            if (!erg.utilities.poh.hasNewsTypeThisWeek(erg.constants["pohNewsTypeDate"], heartsArray[i].key)) {

                erg.utilities.poh.checkForRelationshipDates(heartsArray[i]);

            }

            for (j = 0; j < candidateNewsArray.length; j++) {

                newsType = erg[erg.constants["pohNews"]][candidateNewsArray[j]];

                if (heartsArray[i].active && (!erg.utilities.poh.hasNewsTypeThisWeek(newsType.type, heartsArray[i].key))) {  //Since they could stop being active suddenly due to dates.

                    if (Math.floor(Math.random() * 100) < erg.utilities.poh.getNewsProcChanceForHeart(newsType.type, heartsArray[i])) {

                        newsItem = {

                            category: newsType.category,
                            type: newsType.type,
                            title: newsType.title.replace(/Heart1/g, heartsArray[i].preferredName),
                            image: erg.utilities.poh.getProfileLargeURL(heartsArray[i]),
                            imageSmall: erg.utilities.poh.getProfileThumbURL(heartsArray[i]),
                            timeStamp: new Date().getTime()

                        };

                        if (newsType.type === erg.constants["pohNewsTypeDate"]) {

                            dateRequest = erg.utilities.poh.randomDateRequest(heartsArray[i]);

                            heart2 = erg.utilities.getFromArrayByKey(heartsArray, dateRequest.chosenHeart);

                            newsItem.imageSmall2 = erg.utilities.poh.getProfileThumbURL(heart2);
                            newsItem.subject2HeartKey = heart2.key;

                            if (dateRequest.accepted) {

                                date = erg.utilities.poh.generateAndResolveDate(heartsArray[i], heart2);

                                newsItem.title = newsItem.title.replace(/Heart2/g, heart2.preferredName);
                                newsItem.text = date.text;
                                newsItem.summary = date.summary;

                            } else {

                                newLoneliness = erg.utilities.poh.handleRefusalLoneliness(heartsArray[i], heart2);

                                summary = heartsArray[i].preferredName + " " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeLoneliness"]].label + " change: " + newLoneliness.change + " (to " + newLoneliness.total + ")";

                                if (newLoneliness.heart2Change) {

                                    summary += "; " + heart2.preferredName + " " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeLoneliness"]].label + " change: " + newLoneliness.change + " (to " + newLoneliness.heart2Loneliness + ")";

                                }

                                newsItem.type = erg.constants["pohNewsTypeDateRefusal"];
                                newsItem.title = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeDateRefusal"]].title.replace(/Heart1/g, heartsArray[i].preferredName).replace(/Heart2/g, heart2.preferredName);
                                newsItem.text = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeDateRefusal"]].text.replace(/Heart1/g, heartsArray[i].preferredName).replace(/Heart2/g, heart2.preferredName);
                                newsItem.summary = summary;

                            }

                        }

                        if (newsType.type === erg.constants["pohNewsTypeAttributeChange"]) {

                            scenario = erg.utilities.poh.getRandomAttributeChangeScenario();

                            newAttributeValue = erg.utilities.poh.adjustAttribute(heartsArray[i], scenario.attribute, scenario.change);

                            newsItem.title = scenario.title.replace(/Heart1/g, heartsArray[i].preferredName);
                            newsItem.text = scenario.text.replace(/Heart1/g, heartsArray[i].preferredName).replace(/HeartNewAttributeValue1/g, newAttributeValue);
                            newsItem.summary = heartsArray[i].preferredName + " " + erg[erg.constants["pohAttributes"]][scenario.attribute].label + " change: " + scenario.change + " (to " + newAttributeValue + ")";

                        }

                        if (newsType.type === erg.constants["pohNewsTypeTraitChange"]) {

                            traitChange = erg.utilities.poh.getAndExectueRandomTraitChange(heartsArray[i]);

                            scenario = traitChange.scenario;

                            newsItem.title = scenario.title.replace(/Heart1/g, heartsArray[i].preferredName);
                            newsItem.text = scenario.text.replace(/Heart1/g, heartsArray[i].preferredName).replace(/NewTrait/g, traitChange.newTraitLabel).replace(/OldTrait/g, traitChange.oldTraitLabel);
                            newsItem.summary = heartsArray[i].preferredName + " trait change: " + traitChange.oldTraitLabel + " --&gt; " + traitChange.newTraitLabel;

                        }


                        if (newsType.type === erg.constants["pohNewsTypePassionChange"]) {

                            scenario = erg.utilities.poh.getRandomPassionChangeScenario(heartsArray[i].key);

                            heart2 = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], scenario.heart);

                            newsItem.imageSmall2 = erg.utilities.poh.getProfileThumbURL(heart2);
                            newsItem.subject2HeartKey = heart2.key;

                            newPassionValue = erg.utilities.poh.modifyPassion(heartsArray[i], scenario.heart, scenario.change);

                            newsItem.title = scenario.title.replace(/Heart1/g, heartsArray[i].preferredName);
                            newsItem.text = scenario.text.replace(/Heart1/g, heartsArray[i].preferredName).replace(/HeartNewPassionValue1/g, newPassionValue);
                            newsItem.summary = heartsArray[i].preferredName + "'s passion for " + heart2.preferredName + " change: " + scenario.change + " (to " + newPassionValue + ")";
                        
                        }


                        if (newsType.type === erg.constants["pohNewsTypeDanmakuMatch"]) {

                            danmaku = erg.utilities.poh.generatePoHDanmaku(heartsArray[i]);

                            newsItem.title = newsType.title.replace(/Victor1/g, danmaku.victor1).replace(/Victor2/g, danmaku.victor2).replace(/Loser1/g, danmaku.loser1).replace(/Loser2/g, danmaku.loser2);
                            newsItem.text = danmaku.text;
                            newsItem.summary = danmaku.summary;
                        }

                        if (newsType.type === erg.constants["pohNewsTypeAdviceLetter"]) {

                            newsItem.text = erg.utilities.poh.getAdviceLetterText(heartsArray[i]);

                        }

                        newsItem.subjectHeartKey = heartsArray[i].key;

                        erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push(newsItem);

                    }

                }


            }


        } else {

            //test to see if they become active

            newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeHeartEntry"]];

            if ((!heartsArray[i].retired) && (Math.floor(Math.random() * 100) < erg.utilities.poh.getNewsProcChanceForHeart(newsType.type, heartsArray[i]))) {

                heartsArray[i].active = true;

                erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push({

                    category: newsType.category,
                    type: newsType.type,
                    title: newsType.title.replace(/Heart1/g, heartsArray[i].preferredName),
                    text: newsType.text.replace(/Heart1/g, heartsArray[i].preferredName),
                    image: erg.utilities.poh.getProfileLargeURL(heartsArray[i]),
                    imageSmall: erg.utilities.poh.getProfileThumbURL(heartsArray[i]),
                    subjectHeartKey: heartsArray[i].key

                });

            }

        }

    }

    //Check for timeout breakups

    erg.utilities.poh.checkForNoDateBreakups();

}


//################################### VIEW NEWS ITEM DELEGATE #################################################


erg.delegates[erg.constants["delegatePoHViewNewsItem"]] = function (newView, args) {

    var itemIndex = 0;
    var week = erg.world[erg.constants["pohCurrentWeek"]];

    var newsItem;

    if (args.index) {

        itemIndex = args.index;

    }

    if (args.week) {

        week = args.week;

    }

    newsItem = erg.world[erg.constants["pohWeeks"]][week].news[itemIndex];

    newView.interaction = {

        type: erg.constants["interactionTypePoHViewNewsItem"],
        title: newsItem.title,
        text: newsItem.text,
        image: newsItem.image,
        imageSmall: newsItem.imageSmall,
        imageSmall2: newsItem.imageSmall2,
        actions: new Array()

    }

    if (newsItem.type === erg.constants["pohNewsTypeAdviceLetter"]) {

        if (erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohAdvice"]], newsItem.subjectHeartKey)) {

            newView.interaction.actions.push({

                type: erg.constants["pohActionTypeChangeAdvice"],
                text: erg.constants["pohActionChangeAdviceText"],
                id: erg.constants["pohActionChangeAdviceButtonID"],
                event: erg.constants["eventPoHChangeAdvice"],
                args: { heartKey: newsItem.subjectHeartKey }

            });

            newView.interaction.adviceDisplay = erg.utilities.poh.getDisplayObjectForAdvice(erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohAdvice"]], newsItem.subjectHeartKey));

        } else {

            newView.interaction.actions.push({

                type: erg.constants["pohActionTypeGiveAdvice"],
                text: erg.constants["pohActionGiveAdviceText"],
                id: erg.constants["pohActionGiveAdviceButtonID"],
                event: erg.constants["eventPoHGiveAdvice"],
                args: { heartKey: newsItem.subjectHeartKey }

            });

        }

    }

    return newView;

}


//################################### END GAME DELEGATE #################################################


erg.delegates[erg.constants["delegatePoHEndGame"]] = function (newView, args) {

    var trueLove = new Array();
    var couple = new Array();

    var heart1;
    var heart2;

    var relationships = erg.world[erg.constants["pohRelationships"]];

    var i;

    for (i = 0; i < relationships.length; i++) {

        if (erg[erg.constants["pohRelationshipTypes"]][relationships[i].type].level === 3) {

            heart1 = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], relationships[i].heart1);
            heart2 = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], relationships[i].heart2);

            trueLove.push({

                heart1Name: heart1.fullName,
                heart2Name: heart2.fullName,
                heart1Image: erg.utilities.poh.getProfileThumbURL(heart1),
                heart2Image: erg.utilities.poh.getProfileThumbURL(heart2)

            });

        }

        if (relationships[i].active && erg[erg.constants["pohRelationshipTypes"]][relationships[i].type].level === 2) {

            heart1 = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], relationships[i].heart1);
            heart2 = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], relationships[i].heart2);

            couple.push({

                heart1Name: heart1.fullName,
                heart2Name: heart2.fullName,
                heart1Image: erg.utilities.poh.getProfileThumbURL(heart1),
                heart2Image: erg.utilities.poh.getProfileThumbURL(heart2)

            });

        }

    }

    newView.interaction = {

        type: erg.constants["interactionTypePoHEndGame"],
        trueLove: trueLove,
        couple: couple,
        prestige: erg.player.prestige.current

    }; 

    return newView;

}


//################################### ADVICE DELEGATES #################################################


erg.delegates[erg.constants["delegatePoHAdvice"]] = function (newView, args) {

    var heart = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], args.heartKey);

    var profileUrl = erg.utilities.poh.getProfileThumbURL(heart);
    var profileLargeUrl = erg.utilities.poh.getProfileLargeURL(heart);

    var i;

    var j;

    var tempTrait;

    var tempIndex;

    var heartsArray = erg.world[erg.constants["pohHeartsArray"]];

    var heartsList = new Array();

    var clevernessTests = new Array();
    var courageTests = new Array();
    var expressivenessTests = new Array();
    var sociabilityTests = new Array();

    var hubrisTests = new Array();
    var jealousyTests = new Array();
    var pettinessTests = new Array();
    var viciousnessTests = new Array();

    var tempTestArray;

    var tempReaction;

    var tempTest;

    newView.interaction = {};

    newView.interaction.type = erg.constants["interactionTypePoHAdvice"];

    newView.interaction.dateEventCap = erg.constants["pohAdviceSelectableScenarios"];

    //######################### SPECIAL TRAIT HACK #####################################

    if (erg.utilities.poh.hasTrait(erg.constants["pohTraitSpecialShikigami"], heart)) {

        newView.interaction.dateEventCap = erg.constants["pohTraitSpecialShikigamiDateEvents"];

    }

    //######################### END SPECIAL TRAIT HACK #################################

    //In this context, "heart" is the one we're giving advice to.  We need her stats so the player can make decisions without needing to remember them
    //Also, yes, this is complete bullshit from a DRY P.o.V.  Sorry.

    newView.interaction.heart = {

        name: heart.fullName,
        key: heart.key,
        preferredName: heart.preferredName,
        title: heart.title,
        imageUrl: profileUrl,
        imageLargeUrl: profileLargeUrl,
        tierKey: heart.tier,
        tierLabel: erg[erg.constants["pohTiers"]][heart.tier].label,
        species: heart.species,
        speciesLabel: erg[erg.constants["pohSpecies"]][heart.species].label,
        speciesDescription: erg[erg.constants["pohSpecies"]][heart.species].description,
        speciesWikiLink: erg[erg.constants["pohSpecies"]][heart.species].wikiLink,
        hairLength: heart.hairLength,
        hairLengthLabel: erg[erg.constants["pohHairLength"]][heart.hairLength].label,
        hairColour: heart.hairColour,
        hairColourLabel: erg[erg.constants["pohHairColour"]][heart.hairColour].label,
        eyeColour: heart.eyeColour,
        eyeColourLabel: erg[erg.constants["pohEyeColour"]][heart.eyeColour].label

    };

    newView.interaction.heart.attractionTraits = new Array();
    newView.interaction.heart.reactionTraits = new Array();
    newView.interaction.heart.specialTraits = new Array();

    for (i = 0; i < heart.attractionTraits.length; i++) {

        tempTrait = erg[erg.constants["pohTraits"]][heart.attractionTraits[i]];

        tempIndex = newView.interaction.heart.attractionTraits.push({ key: heart.attractionTraits[i], type: tempTrait.type, label: tempTrait.label, target: tempTrait.target, targetLabel: erg[erg.constants["pohAttractionTargets"]][tempTrait.target].label, magnitude: tempTrait.magnitude });
        tempIndex -= 1; //push returns length, but we want the actual index, which is one less

        if (tempTrait.type === erg.constants["pohTraitTypeAttractionModifierConditional"]) {

            newView.interaction.heart.attractionTraits[tempIndex].positive = new Array();

            for (j = 0; j < tempTrait.positive.length; j++) {

                newView.interaction.heart.attractionTraits[tempIndex].positive.push(erg.utilities.poh.getAttractionTargetValueLabel(tempTrait.target, tempTrait.positive[j]));

            }

            if (tempTrait.target === erg.constants["pohAttractionTargetTier"]) {

                newView.interaction.heart.attractionTraits[tempIndex].subTarget = tempTrait.subtarget;
                newView.interaction.heart.attractionTraits[tempIndex].magnitudeVariable = tempTrait.magnitudeVariable;

            }

        }


    }

    for (i = 0; i < heart.reactionTraits.length; i++) {

        tempTrait = erg[erg.constants["pohTraits"]][heart.reactionTraits[i]];

        tempIndex = newView.interaction.heart.reactionTraits.push({ key: heart.reactionTraits[i], label: tempTrait.label, description: tempTrait.description });
        tempIndex -= 1; //push returns length, but we want the actual index, which is one less

        newView.interaction.heart.reactionTraits[tempIndex].attributes = new Array();

        for (j = 0; j < tempTrait.attributes.length; j++) {

            newView.interaction.heart.reactionTraits[tempIndex].attributes.push({

                key: tempTrait.attributes[j].key,
                label: erg[erg.constants["pohAttributes"]][tempTrait.attributes[j].key].label,
                success: tempTrait.attributes[j].success,
                fail: tempTrait.attributes[j].fail

            });

        }

    }

    for (i = 0; i < heart.specialTraits.length; i++) {

        tempTrait = erg[erg.constants["pohTraits"]][heart.specialTraits[i]];

        newView.interaction.heart.specialTraits.push({ key: heart.specialTraits[i], label: tempTrait.label, description: tempTrait.description, effectText: tempTrait.effectText });

    }


    newView.interaction.heart.attributesPositive = new Array();
    newView.interaction.heart.attributesNegative = new Array();
    newView.interaction.heart.attributesMeta = new Array();

    for (i = 0; i < heart.attributes.length; i++) {

        if (erg[erg.constants["pohAttributes"]][heart.attributes[i].key].category === erg.constants["pohAttributeCategoryPositive"]) {

            tempReaction = erg.utilities.poh.getReactionTraitTestResultModifiers(heart, heart.attributes[i].key);

            newView.interaction.heart.attributesPositive.push({ key: heart.attributes[i].key, label: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].label, value: heart.attributes[i].value, description: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].description, successReaction: tempReaction.success, failReaction: tempReaction.fail });

        }

        if (erg[erg.constants["pohAttributes"]][heart.attributes[i].key].category === erg.constants["pohAttributeCategoryNegative"]) {

            tempReaction = erg.utilities.poh.getReactionTraitTestResultModifiers(heart, heart.attributes[i].key);

            newView.interaction.heart.attributesNegative.push({ key: heart.attributes[i].key, label: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].label, value: heart.attributes[i].value, description: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].description, successReaction: tempReaction.success, failReaction: tempReaction.fail });

        }

        if (erg[erg.constants["pohAttributes"]][heart.attributes[i].key].category === erg.constants["pohAttributeCategoryMeta"]) {

            tempReaction = erg.utilities.poh.getReactionTraitTestResultModifiers(heart, heart.attributes[i].key);

            newView.interaction.heart.attributesMeta.push({ key: heart.attributes[i].key, label: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].label, value: heart.attributes[i].value, description: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].description, successReaction: tempReaction.success, failReaction: tempReaction.fail });

        }

    }


    //Hearts list - the ones that can be asked out on a date

    for (i = 0; i < heartsArray.length; i++) {

        if (heartsArray[i].active && heartsArray[i].key !== heart.key) {

            heartsList.push({ key: heartsArray[i].key, preferredName: heartsArray[i].preferredName });

        }

    }

    heartsList.sort(erg.utilities.poh.preferredNameSort);

    newView.interaction.heartsList = heartsList;

    newView.interaction.heartsListChangeFunction = erg[erg.constants["pohUIFunctions"]][erg.constants["pohUIFunctionPopulateAdviceDateHeart"]];

    //Date Activities

    for (i = 0; i < erg.world[erg.constants["pohValidRandomDateScenarios"]].length; i++) {

        tempTest = erg[erg.constants["pohAttributeTestScenarios"]][erg.world[erg.constants["pohValidRandomDateScenarios"]][i]];


        switch (tempTest.heart1Attribute) {

            case erg.constants["pohAttributeCleverness"]:

                tempTestArray = clevernessTests;
                break;

            case erg.constants["pohAttributeCourage"]:

                tempTestArray = courageTests;
                break;

            case erg.constants["pohAttributeExpression"]:

                tempTestArray = expressivenessTests;
                break;

            case erg.constants["pohAttributeSociability"]:

                tempTestArray = sociabilityTests;
                break;

            case erg.constants["pohAttributeHubris"]:

                tempTestArray = hubrisTests;
                break;

            case erg.constants["pohAttributeJealousy"]:

                tempTestArray = jealousyTests;
                break;

            case erg.constants["pohAttributePettiness"]:

                tempTestArray = pettinessTests;
                break;

            case erg.constants["pohAttributeViciousness"]:

                tempTestArray = viciousnessTests;
                break;

        }

        tempTestArray.push({

            key: tempTest.key,
            title: tempTest.title,
            heart1Attribute: erg[erg.constants["pohAttributes"]][tempTest.heart1Attribute].label,
            heart2Attribute: erg[erg.constants["pohAttributes"]][tempTest.heart2Attribute].label

        });


    }

    newView.interaction.clevernessTests = clevernessTests;
    newView.interaction.courageTests = courageTests;
    newView.interaction.expressivenessTests = expressivenessTests;
    newView.interaction.sociabilityTests = sociabilityTests;
    newView.interaction.hubrisTests = hubrisTests;
    newView.interaction.jealousyTests = jealousyTests;
    newView.interaction.pettinessTests = pettinessTests;
    newView.interaction.viciousnessTests = viciousnessTests;

    //Extracurricular

    newView.interaction.extracurricularChangeFunction = erg[erg.constants["pohUIFunctions"]][erg.constants["pohUIFunctionSwitchAdviceExtracurricularForm"]];

    //Previous Advice Date Plan

    if (heart.lastDateAdvice) {

        newView.interaction.lastDateAdvice = heart.lastDateAdvice;

    }

    return newView;

}



erg.delegates[erg.constants["delegatePoHSendAdvice"]] = function (args) {

    var advice = {};

    var i;

    var savedDatePlan = new Array();

    advice.key = args.heartKey;

    advice.news = new Array();

    advice.news.push({

        key: erg.constants["pohNewsTypeDate"],
        dateHeartKey: args.dateHeartKey,
        datePlan: args.dateScenarios

    });

    switch (args.extracurricularType) {

        case erg.constants["pohAdviceExtracurricularDanmaku"]:

            advice.news.push({

                key: erg.constants["pohNewsTypeDanmakuMatch"],
                
            });

            break;

        case erg.constants["pohAdviceExtracurricularAttributeRaise"]:

            advice.news.push({

                key: erg.constants["pohNewsTypeAttributeChange"],
                attribute: args.extracurricularTarget,
                type: args.extracurricularType

            });
            break;

        case erg.constants["pohAdviceExtracurricularAttributeLower"]:

            advice.news.push({

                key: erg.constants["pohNewsTypeAttributeChange"],
                attribute: args.extracurricularTarget,
                type: args.extracurricularType

            });
            break;

        case erg.constants["pohAdviceExtracurricularPassionRaise"]:

            advice.news.push({

                key: erg.constants["pohNewsTypePassionChange"],
                targetHeart: args.extracurricularTarget,
                type: args.extracurricularType

            });
            break;

        case erg.constants["pohAdviceExtracurricularPassionLower"]:

            advice.news.push({

                key: erg.constants["pohNewsTypePassionChange"],
                targetHeart: args.extracurricularTarget,
                type: args.extracurricularType

            });
            break;

        case erg.constants["pohAdviceExtracurricularTrait"]:

            advice.news.push({

                key: erg.constants["pohNewsTypeTraitChange"],
                trait: args.extracurricularTarget

            });
            break;

    }

    erg.world[erg.constants["pohAdvice"]].push(advice);


    for (i = 0; i < args.dateScenarios.length; i++) {

        savedDatePlan.push(args.dateScenarios[i]);

    }

    erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], advice.key).lastDateAdvice = {
    
        dateHeartKey: args.dateHeartKey,
        datePlan: savedDatePlan
    
    };
}


erg.delegates[erg.constants["delegatePoHUnsolicitedAdvice"]] = function (args) {

    var heart = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], args.heartKey);

    var prestigeCost = erg.constants["pohPrestigeCostUnsolicitedAdvice"];

    var newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeAdviceLetter"]];

    erg.player.prestige.current -= prestigeCost;

    erg.player.prestige.spent.push({

        amount: prestigeCost,
        type: erg.constants["pohPrestigeTypeUnsolicitedAdvice"],
        label: "Unsolicited advice sent to " + heart.preferredName,
        timestamp: new Date().getTime()

    });

    erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push({

            category: newsType.category,
            type: newsType.type,
            title: "Unsolicited advice for " + heart.preferredName,
            text: "<p><em>This week you are sending unsolicited advice to " + heart.fullName + ".</em></p><p><em>This cost you " + prestigeCost + " Prestige.</em></p>",
            image: erg.utilities.poh.getProfileLargeURL(heart),
            subjectHeartKey: heart.key,
            timeStamp: new Date().getTime()

     });

}



//################################### REMILIA SHOP DELEGATES #################################################

erg.delegates[erg.constants["delegatePoHRemiliaShop"]] = function (newView, args) {

    var i;

    var inactiveHeartList = new Array();    

    var heartsArray = erg.world[erg.constants["pohHeartsArray"]];

    var purchasePossible = false;

    for (i = 0; i < heartsArray.length; i++) {

        if ((!heartsArray[i].active) && (!heartsArray[i].retired)) {

            inactiveHeartList.push({ key: heartsArray[i].key, preferredName: heartsArray[i].preferredName })

        }

    }

    inactiveHeartList.sort(erg.utilities.poh.preferredNameSort);

    if (erg.player.prestige.current >= erg.constants["pohPrestigeCostRemiliaHeartOpen"]) {

        purchasePossible = true;

    }

    newView.interaction = {

        type: erg.constants["interactionTypePoHRemiliaShop"],
        heartsList: inactiveHeartList,
        image: erg.utilities.poh.getLetterImageURL("remilia.jpg"),
        prestige: erg.player.prestige.current,
        unlockPrestigeCost: erg.constants["pohPrestigeCostRemiliaHeartOpen"],
        heartsListChangeFunction: erg[erg.constants["pohUIFunctions"]][erg.constants["pohUIFunctionPopulateRemiliaShopHeart"]],
        purchasePossible: purchasePossible

    }

    return newView;

}


erg.delegates[erg.constants["delegatePoHRemiliaHeartOpen"]] = function (args) {

    var heart = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], args.heartKey);

    var prestigeCost = erg.constants["pohPrestigeCostRemiliaHeartOpen"];

    var newsType = erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeHeartEntry"]];

    heart.active = true;

    erg.player.prestige.current -= prestigeCost;

    erg.player.prestige.spent.push({

        amount: prestigeCost,
        type: erg.constants["pohPrestigeTypeRemiliaHeartOpen"],
        label: "Heart opened to love by Remilia's power: " + heart.preferredName,
        timestamp: new Date().getTime()

    });

    erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push({

            category: newsType.category,
            type: newsType.type,
            title: "Remilia has altered the fate of " + heart.preferredName,
            text: "<p>Ms Alice,</p><p>Lady Remilia has altered the fate of " + heart.fullName + " at your request.</p><p>I have confirmed that her heart is now open to love, and she has entered your sphere of influence.</p><p>Yours, Satori Komeiji</p><p><em>This cost you " + prestigeCost + " Prestige.</em></p>",
            image: erg.utilities.poh.getProfileLargeURL(heart),
            imageSmall: erg.utilities.poh.getProfileThumbURL(heart),
            subjectHeartKey: heart.key,
            timeStamp: new Date().getTime()

     });

}



//################################### INTERSTITIAL DELEGATES #################################################

erg.delegates[erg.constants["delegatePoHInterstitial"]] = function (newView, args, continueAction, displayStrings, image) {

    
    if (!displayStrings) {

        displayStrings = new Array();
        displayStrings.push("Girls are loading.");

    }

    displayStrings.push("Done!");

    if (!image) {

        image = erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceImageSubdirectory"] + "/" + erg.constants["applicationResourceImageActsSubdirectory"] + "/" + erg.utilities.getFromArrayByKey(erg.acts, erg.world.act).splash.image;

    }

    if (!continueAction) {

        continueAction = {

            text: "Continue",
            event: erg.constants["eventPoHViewHeartsList"],
            args: {}

        }

    }

    newView.interaction = {

        type: erg.constants["interactionTypePoHInterstitial"],
        continueAction: continueAction,
        displayStrings: displayStrings,
        image: image

    }

    return newView;

};



//################################### HELP DELEGATE #################################################

erg.delegates[erg.constants["delegatePoHHelp"]] = function (args, newView) {

    newView.interaction = {

        type: erg.constants["interactionTypePoHHelp"]

    }

    newView.interaction.menuImageURL = erg.utilities.getDefaultHelpImageURL();

    newView.interaction.actions = [{

        type: erg.constants["menuActionTypeReturn"],
        text: "Return",
        id: "helpReturn",
        class: "menuAction",
        event: erg.constants["eventReturn"],
        args: {}

    }];

    newView.interaction.help = erg.help;

    return newView;

}