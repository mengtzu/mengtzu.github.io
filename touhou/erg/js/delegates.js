//################################### MAIN MENU DELEGATE #################################################

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

        type: erg.constants["menuActionTypeLoadGame"],
        text: "Load Game",
        id: "menuLoad",
        class: "menuAction",
        event: erg.constants["eventLoadSplash"],  //event: erg.constants["eventViewLoadGameMenu"],
        args: { slot: erg.constants["saveSlotQuicksave"] }  

    }, {

        type: erg.constants["menuActionTypeCredits"],
        text: "Credits",
        id: "menuCredits",
        class: "menuAction",
        event: erg.constants["eventReturn"],
        args: {}

    }, {

        type: erg.constants["menuActionTypeOptions"],
        text: "Options",
        id: "menuOptions",
        class: "menuAction",
        event: erg.constants["eventReturn"],
        args: {}

    }, {

        type: erg.constants["menuActionTypeQuicksave"],
        text: "Quicksave and Quit",
        id: "menuQuicksave",
        class: "menuAction",
        event: erg.constants["eventQuicksave"],
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


//################################### CHARACTER MENU DELEGATE #################################################

erg.delegates[erg.constants["delegateCharacterMenu"]] = function (args, newView) {

    //Probably best if the game just overrides this function.

    newView.interaction = {};
    newView.interaction.type = erg.constants["interactionTypeCharacterMenu"];

    newView.interaction.menuImageURL = erg.utilities.getDefaultCharacterMenuImageURL();
    //When selectable menu images are implemented (if?), look for a selected one here and then override if it exists.

    newView.interaction.actions = [{

        type: erg.constants["menuActionTypeReturn"],
        text: "Return",
        event: erg.constants["eventReturn"],
        args: {}

    }]

    return newView;

}

//################################### JOURNAL DELEGATE #################################################

erg.delegates[erg.constants["delegateJournal"]] = function (args, newView) {

    var selectedQuest;

    newView.interaction = {};
    newView.interaction.type = erg.constants["interactionTypeJournal"];

    newView.interaction.menuImageURL = erg.utilities.getDefaultJournalImageURL();
    //When selectable menu images are implemented (if?), look for a selected one here and then override if it exists.

    newView.interaction.questList = erg.utilities.getActiveQuestsFromQuestList(erg.player.questStatus, erg.world.act);

    if (newView.interaction.questList.length > 0) {

        selectedQuest = newView.interaction.questList[0].quests[0].key;

    }

    if (args.selectedQuest) {

        selectedQuest = args.selectedQuest;

    }

    newView.interaction.selectedQuest = selectedQuest;

    newView.interaction.questDetails = erg.utilities.getQuestDetailsForJournal(erg.utilities.getFromArrayByKey(erg.player.questStatus, selectedQuest));

    newView.interaction.actions = [{

        type: erg.constants["menuActionTypeReturn"],
        text: "Return",
        event: erg.constants["eventReturn"],
        args: {}

    }]

    return newView;

}

//################################### LOG DELEGATE #################################################

erg.delegates[erg.constants["delegateLog"]] = function (args, newView) {

    newView.interaction = {};
    newView.interaction.type = erg.constants["interactionTypeLog"];

    newView.interaction.menuImageURL = erg.utilities.getDefaultLogImageURL();
    //When selectable menu images are implemented (if?), look for a selected one here and then override if it exists.

    newView.interaction.log = erg.log;

    newView.interaction.actions = [{

        type: erg.constants["menuActionTypeReturn"],
        text: "Return",
        event: erg.constants["eventReturn"],
        args: {}

    }]

    return newView;

}


//################################### CREDITS DELEGATE #################################################

erg.delegates[erg.constants["delegateViewCredits"]] = function (args, newView) {

    newView.interaction = {};
    newView.interaction.type = erg.constants["interactionTypeCredits"];

    newView.interaction.menuImageURL = erg.utilities.getDefaultCreditsImageURL();
    //When selectable menu images are implemented (if?), look for a selected one here and then override if it exists.

    newView.interaction.creditsBody = erg.constants["creditsBody"];

    newView.interaction.actions = [{

        type: erg.constants["menuActionTypeReturn"],
        text: "Return",
        event: erg.constants["eventReturn"],
        args: {}

    }]

    return newView;

}




//################################### ACT SPLASH DELEGATE #################################################

erg.delegates[erg.constants["delegateActSplash"]] = function (args, newView) {

    newView.interaction = {};
    newView.interaction.type = erg.constants["interactionTypeActSplash"];

    newView.interaction.imageURL = erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceImageSubdirectory"] + "/" + erg.constants["applicationResourceImageActsSubdirectory"] + "/" + args.image;
    newView.interaction.title = args.title;
    newView.interaction.bgm = args.bgm;

    newView.interaction.action = args.action;

    return newView;

}



//################################### SCENE DELEGATE #################################################


erg.delegates[erg.constants["delegateScene"]] = function (args, newView) {

    var scene = erg.utilities.getFromArrayByKey(erg.scenes, args.sceneKey);

    newView.background = scene.background;

    var interaction = scene.currentInteraction;

    var delegate = erg.delegates[interaction.type];

    newView = delegate(scene, interaction.key, newView, args);  //Making some assumptions here about interaction delegate function params which may be unfounded.

    return newView;

};


//################################### CONVERSATION DELEGATE #################################################


erg.delegates[erg.constants["interactionTypeConversation"]] = function (scene, conversationKey, newView) {

    var i;

    var conversation = erg.utilities.getFromArrayByKey(scene.interactions, conversationKey);

    var line = conversation.lines[conversation.currentLineIndex];

    var previewLine;

    var details;

    var usingCharacter = true;

    var portraitURL = "";

    var portraitSlot = erg.constants["portraitSlotDefault"];

    var usingPortrait = true;

    var name = "";

    var portraitArray = new Array();

    if (line.speakerKey === erg.constants["characterNobody"]) {

        usingCharacter = false;
        usingPortrait = false;

    }

    if (usingCharacter) {

        details = erg.utilities.getParticipantDetailsByKey(conversation, line.speakerKey);

        name = details.firstName;

        portraitURL = erg.utilities.getPortraitURL(details, line.expression, false);


        if (line.portraitSlot) {

            portraitSlot = line.portraitSlot;

        } else {

            portraitSlot = details.defaultPortraitSlot;

        }

        if (portraitSlot !== "") {

            conversation.recentPortraits[portraitSlot] = erg.utilities.getPortraitURL(details, line.expression, true);

        }

    }

    if (line.overridePortrait && line.portraitUrl) {

        //Overriding portraits does not yet work with recent portraits :<

        portraitURL = line.portraitURL;

    }

    if (portraitURL === "") {

        usingPortrait = false;  //In case the expression was none or whatever.

    }

    for (key in conversation.recentPortraits) {

        if (conversation.recentPortraits.hasOwnProperty(key)) {

            portraitArray.push({ portraitSlot: key, portraitURL: conversation.recentPortraits[key], currentSpeaker: false });

        }

    }

    if (usingPortrait) {

        for (i = 0; i < portraitArray.length; i++) {

            if (portraitArray[i].portraitSlot === portraitSlot) {

                portraitArray.splice(i, 1);

            }

        }

        portraitArray.push({ portraitSlot: portraitSlot, portraitURL: portraitURL, currentSpeaker: true });

    }

    if (line.overrideName) {

        name = line.name;

    }

    if (line.actions) {

        erg.utilities.findContinueAndAddSceneKey(line.actions, scene.key);  //This is kind of dumb, but stops you from needing to fully specify a routine Continue.

        for (i = 0; i < line.actions.length; i++) {

            if (line.actions[i].type === erg.constants["dialogueActionTypeOption"]) {

                previewLine = erg.utilities.getFromArrayByKey(conversation.lines, line.actions[i].args.linkKey);
                line.actions[i].previewPortraitURL = erg.utilities.getPortraitURL(erg.utilities.getParticipantDetailsByKey(conversation, previewLine.speakerKey), previewLine.expression, false);

            }

        }
    }

    newView.interaction = {

        type: erg.constants["interactionTypeConversation"],
        name: name,
        portraitArray: portraitArray,
        text: line.text,
        actions: line.actions,
        bgm: conversation.bgm

    };

    line.used = true;

    if (conversation.log) {

        conversation.log.push(line);

    }

    erg.log.push({

        title: newView.interaction.name,
        text: newView.interaction.text

    });

    return newView;  //technically unnecessary since it's an object passed by reference but whatever.

} 