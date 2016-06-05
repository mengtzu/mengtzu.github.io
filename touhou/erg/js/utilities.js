
//################################### NUMBER FUNCTIONS #################################################

erg.utilities.formatNumberAsBonusString = function (number) {

    var returnString = "";

    if (number > 0) {

        returnString = "+" + number;

    }

    if (number < 0 || number === 0) {

        returnString = "" + number;

    }

    return returnString;

}


//################################### ARRAY FUNCTIONS #################################################


erg.utilities.getFromArrayByKey = function (array, key) {

    //I probably should add safety around the presence/absence of a key, but basically everything should have one.
    //If you're reading this comment because something blew up, it's because it didn't have a key, referenced a key that didn't exist, or shouldn't have had this function used on it (ie a simple integer array)

    var i;

    for (i = 0; i < array.length; i++) {

        if (array[i].key === key) {

            return array[i];

        }

    }

};

erg.utilities.getIndexFromArrayByKey = function (array, key) {

    //I probably should add safety around the presence/absence of a key, but basically everything should have one.
    //If you're reading this comment because something blew up, it's because it didn't have a key, referenced a key that didn't exist, or shouldn't have had this function used on it (ie a simple integer array)

    var i;

    for (i = 0; i < array.length; i++) {

        if (array[i].key === key) {

            return i;

        }

    }

};

erg.utilities.shuffleArray = function (array) {

    //Stolen from commentor Christoph on stackoverflow

    var tmp, current, top = array.length;

    if (top) while (--top) {

        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;

    }

    return array;

};

erg.utilities.arrayContains = function (array, value) {

    var i;

    for (i = 0; i < array.length; i++) {

        if (array[i] === value) {

            return true;

        }

    }

    return false;

}

erg.utilities.removeFromArray = function (array, value) {

    var i;

    for (i = array.length - 1; i >= 0; i--) {

        if (array[i] === value) {

            array.splice(i, 1);

        }

    }

}

//################################### PORTRAIT FUNCTIONS #################################################

erg.utilities.getPortraitURL = function (character, expression, alpha) {

    if (expression === erg.constants["portraitExpressionNone"]) {

        return "";

    }

    var portraitURL = erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceImageSubdirectory"] + "/" + erg.constants["applicationResourceImagePortraitSubdirectory"];

    portraitURL += "/" + character.portraitPrefix + expression;

    if (alpha) {

        portraitURL += erg.constants["portraitAlphaSuffix"];

    }

    portraitURL += erg.constants["portraitExtension"];

    return portraitURL;

};


//################################### CONVERSATION FUNCTIONS #################################################

erg.utilities.conversation = {};

erg.utilities.conversation.findContinueAndAddSceneKey = function (actions, sceneKey) {

    var i;

    for (i = 0; i < actions.length; i++) {

        if (actions[i].type === erg.constants["dialogueActionTypeContinue"]) {

            actions[i].args.sceneKey = sceneKey;

        }

    }

};


erg.utilities.conversation.addNewRecentSpeaker = function (characterKey, expression, position) {

    var i;

    for (i = erg.world.recentSpeakers.length - 1; i >= 0; i--) {

        if (erg.world.recentSpeakers[i].characterKey === characterKey) {

            erg.world.recentSpeakers.splice(i, 1);

        }

    }

    erg.world.recentSpeakers.unshift({

        characterKey: characterKey,
        expression: expression,
        position: position

    });

    if (erg.world.recentSpeakers.length > erg.constants["recentPortraitCount"]) {

        erg.world.recentSpeakers.length = erg.constants["recentPortraitCount"];

    }

}


erg.utilities.conversation.getDefaultContinue = function () {

    return {

        type: erg.constants["conversationActionTypeContinue"],
        text: "Continue",
        event: erg.constants["eventConversation"],
        args: {}

    }

}


erg.utilities.conversation.removeCharacterFromRecentSpeakers = function (characterKey) {

    var i;

    for (i = erg.world.recentSpeakers.length - 1; i >= 0; i--) {

        if (erg.world.recentSpeakers[i].characterKey === characterKey) {

            erg.world.recentSpeakers.splice(i, 1);

        }

    }

}


//################################### GENERIC EVENT HOOKUP #################################################

erg.utilities.hookupIDWithClicksEvent = function (id, event, args, closeErgDialogue, playSound) {

    var tempFunction = function (event) {

        if (arguments.callee.playSound) {

            erg.utilities.playSFX(erg.constants["titpSFXButton"]);

        }

        erg.event(arguments.callee.event, arguments.callee.args);

        if (arguments.callee.closeErgDialogue) {

            $ergDialogue.dialog("close");

        }

    }

    tempFunction.event = event;
    tempFunction.args = args;

    if (closeErgDialogue) {

        tempFunction.closeErgDialogue = true;

    } else {

        tempFunction.closeErgDialogue = false;

    }

    if (playSound) {

        tempFunction.playSound = true;

    } else {

        tempFunction.playSound = false;

    }

    $("#" + id).css("cursor", "pointer");
    $("#" + id).click(tempFunction);

};


//################################### GENERIC DIALOGUE HOOKUP #################################################

erg.utilities.hookupIDWithDialogueClick = function (id, html, title, actions, playSound) {

    var tempFunction = function (event) {

        var i;

        

        $ergDialogue.html(arguments.callee.html);

        $ergDialogue.append("<div id=\"popupDialogueActions\">");

        if (actions) {

            for (i = 0; i < actions.length; i++) {

                $ergDialogue.append("<div id=\"" + actions[i].id + "\" class=\"" + actions[i].class + "\">" + actions[i].text + "</div>");

            }

        }

        $ergDialogue.append("<div id=\"popupDialogueActionClose\" class=\"" + erg.constants["popupDialogueActionClass"] + "\">Close</div>");

        $ergDialogue.append("<div class=\"clear\" /></div>");  //The closing tag is for a different div, it's kosher.

        if ($("#" + arguments.callee.id).hasClass('noclick')) {   //This is to prevent the draggable spellcards on the deck screen from clicking on drag.

            $("#" + arguments.callee.id).removeClass('noclick');

        } else {

            $ergDialogue.dialog({

                title: arguments.callee.title

            });

            //erg.utilities.playSFX(erg.constants["titpSFXButton"]);

            //$ergDialogue.dialog("open");

        }

        if (actions) {

            for (i = 0; i < actions.length; i++) {

                erg.utilities.hookupIDWithClicksEvent(actions[i].id, actions[i].event, actions[i].args, true);

            }

        }

        $("#popupDialogueActionClose").css("cursor", "pointer");
        $("#popupDialogueActionClose").click(function (event) {

            //erg.utilities.playSFX(erg.constants["titpSFXButton"]);
            $ergDialogue.dialog("close");

        });

        return false;

    }

    tempFunction.html = html;

    tempFunction.title = title;

    tempFunction.id = id;

    $("#" + id).css("cursor", "pointer");
    $("#" + id).click(tempFunction);

}


erg.utilities.addActionButtonAndHookUp = function (action, htmlID, cssClass) {

    $("body").append("<div id=\"" + htmlID + "\" class=\"" + cssClass + "\">" + action.text + "</div>");
    erg.utilities.hookupIDWithClicksEvent(htmlID, action.event, action.args);

}


//################################### MENU BAR HOOKUP #################################################

erg.utilities.addMenuBarAndHookUp = function () {

    erg.utilities.addActionButtonAndHookUp({ text: "Log", event: erg.constants["eventShowLog"], args: {} }, "menuBarLog", "menuBarButton");
    erg.utilities.addActionButtonAndHookUp({ text: "Character", event: erg.constants["eventShowCharacterMenu"], args: {} }, "menuBarCharacter", "menuBarButton");
    erg.utilities.addActionButtonAndHookUp({ text: "Main", event: erg.constants["eventShowMainMenu"], args: {} }, "menuBarMain", "menuBarButton");

}



//################################### CHARACTER/PARTICIPANT FUNCTIONS #################################################

erg.utilities.getParticipantDetailsByKey = function (interaction, key) {

    //Essentially returns a character with added and overridden attributes from the "participant" - ie the NPC local to the interaction or the PC version of the character
    //eg EX Patchouli inherits from the character Patchouli
    //Possibly a fancier inheritance way to do this, but smashing the objects together works too without anything getting out of sync

    var participant;
    var details = {};

    participant = erg.utilities.getFromArrayByKey(interaction.npcs, key);

    if (!participant) {

        participant = erg.utilities.getFromArrayByKey(erg.player.pcs, key);

    }

    if (!participant) {

        //ie still undefined.

        return details;

    }

    details = erg.utilities.getFromArrayByKey(erg.characters, participant.characterKey);  //Generic participants must be characters.

    details.participantKey = participant.key;

    details.defaultPortraitSlot = participant.defaultPortraitSlot;

    if (participant.leader) {

        details.leader = true;

    } else {

        details.leader = false;

    }

    if (participant.portraitPrefix) {

        details.portraitPrefix = participant.portraitPrefix;

    }

    if (participant.firstName) {

        details.firstName = participant.firstName;

    }

    if (participant.lastName) {

        details.lastName = participant.lastName;

    }

    if (participant.fullName) {

        details.fullName = participant.fullName;

    }

    if (participant.title) {

        details.title = participant.title;

    }

    return details;
};


erg.utilities.getPCLeader = function () {

    //Returns first found; should only ever be one

    var i;

    for (i = 0; i < erg.player.pcs.length; i++) {

        if (erg.player.pcs[i].leader) {

            return erg.player.pcs[i];

        }

    }

    return false;

}

erg.utilities.getPCAlly = function () {

    //Returns first found; assumes only one.  This is a bit of a titp-ism, probably not harmful as you (hopefuly) wouldn't call this in a 3+ party

    var i;

    for (i = 0; i < erg.player.pcs.length; i++) {

        if (!erg.player.pcs[i].leader) {

            return erg.player.pcs[i];

        }

    }

    return false;

}


//################################### GLOSSARY FUNCTIONS #################################################

erg.utilities.hookUpGlossaryLink = function (glossaryEntry) {

    var tempHTML = "";

    tempHTML += "<div class=\"glossaryDialogueSubTitle\">" + glossaryEntry.subTitle + "</div>";
    tempHTML += "<div class=\"glossaryDialogueTextImageWrapper\">";

    if (glossaryEntry.image) {

        tempHTML += "<div class=\"glossaryDialogueImageBox\"><img class=\"glossaryDialogueImage\" src=\"" + erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceImageSubdirectory"] + "/" + erg.constants["applicationResourceImageGlossarySubdirectory"] + "/" + glossaryEntry.image + "\" /></div>";

    }

    tempHTML += glossaryEntry.text;

    tempHTML += "<div class=\"clear\"></div></div>";

    if (glossaryEntry.canon) {

        tempHTML += "<div class=\"glossaryDialogueCanon\"><strong>Canon and Fanon: </strong>" + glossaryEntry.canon + "</div>";

    }

    erg.utilities.hookupIDWithDialogueClick(glossaryEntry.key, tempHTML, glossaryEntry.title);

}


//################################### QUEST FUNCTIONS #################################################

erg.utilities.getActiveQuestsFromQuestList = function (questStatus, act) {

    var i;

    var j;

    var tempQuest;

    var tempCategory;

    var categoryArray = new Array();

    var questArray;

    //Build our array of categories with active quests

    for (i = 0; i < erg.questCategories.length; i++) {

        tempCategory = erg.questCategories[i];

        questArray = new Array();

        for (j = 0; j < questStatus.length; j++) {

            tempQuest = erg.utilities.getFromArrayByKey(erg.quests, questStatus[j].key);

            if (tempQuest.category === tempCategory.key && tempQuest.act === act && (erg.utilities.getFromArrayByKey(tempQuest.states, questStatus[j].stateKey))) {

                if (!erg.utilities.getFromArrayByKey(tempQuest.states, questStatus[j].stateKey).completion) {  //This can live in the above if, I just got sick of looking at it.

                    questArray.push({

                        key: tempQuest.key,
                        title: tempQuest.title

                    });

                }

            }

        }

        if (questArray.length > 0) {

            categoryArray.push({

                key: tempCategory.key,
                label: tempCategory.label,
                quests: questArray

            });

        }

    }

    return categoryArray;

}


erg.utilities.getQuestDetailsForJournal = function (questStatus) {

    //We're doing cloning here so as not to end up with bits of state hanging off our quests; their not having state is the whole point of the questStatus object

    var details = {};

    var tempQuest = erg.utilities.getFromArrayByKey(erg.quests, questStatus.key);

    var i;

    var j;

    var glossaryArray = new Array();

    details.title = tempQuest.title;
    details.objective = erg.utilities.getFromArrayByKey(tempQuest.states, questStatus.stateKey).objective;
    //Put some fancy location stuff in here when that exists
    if (tempQuest.baseReward) {

        details.baseReward = tempQuest.baseReward;

    }

    details.states = new Array();

    details.states.push(erg.utilities.getQuestStateDetailsForJournal(erg.utilities.getFromArrayByKey(tempQuest.states, questStatus.stateKey)));

    if (questStatus.previousStates.length > 0) {

        for (i = questStatus.previousStates.length - 1; i >= 0; i--) {

            details.states.push(erg.utilities.getQuestStateDetailsForJournal(erg.utilities.getFromArrayByKey(tempQuest.states, questStatus.previousStates[i])));

        }

    }

    for (i = 0; i < details.states.length; i++) {

        for (j = 0; j < details.states[i].glossaryEntries.length; j++) {

            if (!erg.utilities.getFromArrayByKey(glossaryArray, details.states[i].glossaryEntries[j])) {

                glossaryArray.push(erg.utilities.getFromArrayByKey(erg.glossary, details.states[i].glossaryEntries[j]));  //This may be a call to a cloning function once I've sorted out the extras thing.

            }

        }

    }

    details.glossaryArray = glossaryArray;

    return details;

}

erg.utilities.getQuestStateDetailsForJournal = function (questState) {

    var details = {};
    var questGiver = {};

    details.text = questState.text;
    details.glossaryEntries = questState.glossaryEntries;

    if (questState.questGiver.characterKey) {

        details.portrait = erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceImageSubdirectory"] + "/" + erg.constants["applicationResourceImageQuestGiversSubdirectory"] + "/" + erg.utilities.getFromArrayByKey(erg.characters, questState.questGiver.characterKey).questGiverPortrait;
        details.name = erg.utilities.getFromArrayByKey(erg.characters, questState.questGiver.characterKey).fullName;
    }

    if (questState.questGiver.portrait) {

        details.portrait = erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceImageSubdirectory"] + "/" + erg.constants["applicationResourceImageQuestGiversSubdirectory"] + "/" + questState.questGiver.portrait;

    }

    if (questState.questGiver.name) {

        details.name = questState.questGiver.name;

    }

    return details;

}

//################################### AUDIO FUNCTIONS #################################################

erg.utilities.playBGM = function (bgmKey, overrideCurrent) {

    var track = erg.utilities.getFromArrayByKey(erg.bgm.jukebox, erg.bgm.current);

    if (!track || track.key !== bgmKey) {

        overrideCurrent = true;

    }

    if ((!erg.bgm.playing) || overrideCurrent) {

        if (erg.bgm.playing) {

            erg.bgm.audio.pause();

        }

        erg.bgm.current = bgmKey;

        track = erg.utilities.getFromArrayByKey(erg.bgm.jukebox, bgmKey);

        erg.bgm.audio = new Audio(erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceAudioSubdirectory"] + "/" + erg.constants["applicationResourceAudioBGMSubdirectory"] + "/" + track.file);
        erg.bgm.audio.volume = erg.constants["bgmVolume"];
        erg.bgm.audio.loop = true;
        erg.bgm.audio.play();

        erg.bgm.playing = true;

        //It's OK to hit up $ from here because this function is only ever called by viewRenderers

    }

    $("#bgmTitle").html(track.title);
    $("#bgmArtist").html(track.artist);
    $("#bgmAlbum").html(track.album);
    $("#bgmOriginal").html(track.original);
    $("#bgmOriginalArtist").html(track.originalArtist);

};


erg.utilities.playSFX = function (sfxURL) {

    erg.sfx.audio = new Audio(erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceAudioSubdirectory"] + "/" + erg.constants["applicationResourceAudioSFXSubdirectory"] + "/" + sfxURL);
    erg.sfx.audio.volume = erg.constants["sfxVolume"];
    erg.sfx.audio.play();


};


//################################### SAVE/LOAD FUNCTIONS #################################################

erg.utilities.coreSave = function (saveSlot) {

    var saveObject = {};

    var dateStamp = new Date();

    saveObject.acts = erg.acts;
    saveObject.cachedView = erg.cachedView;
    saveObject.returnView = erg.returnView;
    saveObject.interrupts = erg.interrupts;
    saveObject.locations = erg.locations;
    saveObject.maps = erg.maps;
    saveObject.scenes = erg.scenes;
    saveObject.player = erg.player;
    saveObject.world = erg.world;
    saveObject.log = erg.log;
    saveObject.dateString = dateStamp.toLocaleDateString() + " " + dateStamp.toLocaleTimeString();
    saveObject.timeStamp = dateStamp.getTime();

    localStorage.setItem(saveSlot, JSON.stringify(saveObject));

}

erg.utilities.coreLoad = function (saveSlot) {

    var loadObject = JSON.parse(localStorage.getItem(saveSlot));

    erg.acts = loadObject.acts;
    erg.cachedView = loadObject.cachedView;
    erg.returnView = loadObject.returnView;
    erg.interrupts = loadObject.interrupts;
    erg.locations = loadObject.locations;
    erg.maps = loadObject.maps;
    erg.scenes = loadObject.scenes;
    erg.player = loadObject.player;
    erg.world = loadObject.world;
    erg.log = loadObject.log;

    if (erg.cachedView.interaction.type === erg.constants["interactionTypeMainMenu"]) {

        //Which it will, if it's a quicksave
        erg.cachedView = erg.returnView;

    }

    if (erg.bgm.audio.pause) {

        erg.bgm.audio.pause();

    }
    erg.bgm.playing = false;  //So whatever the music for the loaded thing plays

    erg.renderView(erg.cachedView);


}



//################################### MISC UI FUNCTIONS #################################################


erg.utilities.getDefaultMenuImageURL = function () {

    return erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceImageSubdirectory"] + "/" + erg.constants["applicationResourceImageMenuSubdirectory"] + "/" + erg.constants["mainMenuDefaultImageFilename"];

}

erg.utilities.getDefaultCharacterMenuImageURL = function () {

    return erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceImageSubdirectory"] + "/" + erg.constants["applicationResourceImageMenuSubdirectory"] + "/" + erg.constants["characterMenuDefaultImageFilename"];

}

erg.utilities.getDefaultJournalImageURL = function () {

    var actImageURL = erg.utilities.getFromArrayByKey(erg.acts, erg.world.act).journalImage;

    return erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceImageSubdirectory"] + "/" + erg.constants["applicationResourceImageActsSubdirectory"] + "/" + actImageURL;

}

erg.utilities.getDefaultLogImageURL = function () {

    return erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceImageSubdirectory"] + "/" + erg.constants["applicationResourceImageMenuSubdirectory"] + "/" + erg.constants["logDefaultImageFilename"];

}


erg.utilities.getDefaultCreditsImageURL = function () {

    return erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceImageSubdirectory"] + "/" + erg.constants["applicationResourceImageMenuSubdirectory"] + "/" + erg.constants["creditsDefaultImageFilename"];

}

erg.utilities.getDefaultHelpImageURL = function () {

    return erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceImageSubdirectory"] + "/" + erg.constants["applicationResourceImageMenuSubdirectory"] + "/" + erg.constants["helpDefaultImageFilename"];

}



//################################### IN-GAME DATE/TIME FUNCTIONS #################################################

erg.utilities.calendar = {};


erg.utilities.calendar.getDayName = function (day) {

    //Why am I writing this function wtf Javascript

    //Could be a safety here but it'd be TiTP based so I dunno

    switch (day) {

        case 0:

            return "Sunday";
            break;

        case 1:

            return "Monday";
            break;

        case 2:

            return "Tuesday";
            break;

        case 3:

            return "Wednesday";
            break;

        case 4:

            return "Thursday";
            break;

        case 5:

            return "Friday";
            break;

        case 6:

            return "Saturday";
            break;

    }

}

erg.utilities.calendar.getMonthName = function (month) {

    //Why am I writing this function wtf Javascript

    switch (month) {

        case 0:

            return "January";
            break;

        case 1:

            return "February";
            break;

        case 2:

            return "March";
            break;

        case 3:

            return "April";
            break;

        case 4:

            return "May";
            break;

        case 5:

            return "June";
            break;

        case 6:

            return "July";
            break;

        case 7:

            return "August";
            break;

        case 8:

            return "September";
            break;

        case 9:

            return "October";
            break;

        case 10:

            return "November";
            break;

        case 11:

            return "December";
            break;

    }

}


erg.utilities.calendar.getNorthenHemisphereSeason = function (month) {

    switch (month) {

        case 2:
        case 3:
        case 4:

            return "Spring";
            break;

        case 5:
        case 6:
        case 7:

            return "Summer";
            break;

        case 8:
        case 9:
        case 10:

            return "Autumn";
            break;

        case 11:
        case 0:
        case 1:

            return "Winter";
            break;

    }


}



//################################### LOCATION FUNCTIONS #################################################

erg.utilities.locations = {};

erg.utilities.locations.getDefaultActiveFunction = function () {

    return function () { return true; };    

};

erg.utilities.locations.getDefaultVisibleFunction = function () {

    return function () { return true; };    

};


//################################### SCENE FUNCTIONS #################################################

erg.utilities.scenes = {};

erg.utilities.scenes.getDefaultActiveFunction = function () {

    return function () { return true; };

};

erg.utilities.scenes.getDefaultVisibleFunction = function () {

    return function () { return true; };

};


//################################### EXPLORATION UI FUNCTIONS #################################################

erg.utilities.exploration = {}

//################################### INVENTORY FUNCTIONS #################################################

erg.utilities.inventory = {}

//################################### GENERIC UI FUNCTIONS #################################################

erg.utilities.ui = {}

//################################### PLAYER FUNCTIONS #################################################

erg.utilities.player = {};