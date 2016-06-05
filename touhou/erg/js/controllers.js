//################################### GENERIC LOAD CONTROLLERS #################################################

erg.controllers[erg.constants["eventLoad"]] = function (args) {

    if (!args.slot) {

        args.slot = erg.constants["saveSlotQuicksave"];

    }

    erg.utilities.coreLoad(args.slot);

    return erg.cachedView;

}

erg.controllers[erg.constants["eventLoadSplash"]] = function (args) {

    var newView = {};

    if (!args.slot) {

        args.slot = erg.constants["saveSlotQuicksave"];

    }

    var splashArgs = erg.utilities.getFromArrayByKey(erg.acts, JSON.parse(localStorage.getItem(args.slot)).world.act).splash;

    splashArgs.action = {

        text: "Continue",
        event: erg.constants["eventLoad"],
        args: { slot: args.slot }

    }

    var delegate = erg.delegates[erg.constants["delegateActSplash"]];

    return delegate(splashArgs, newView);
}


//################################### MAIN MENU CONTROLLERS #################################################

erg.controllers[erg.constants["eventShowMainMenu"]] = function (args) {

    var newView = {};

    erg.returnView = erg.cachedView;

    var delegate = erg.delegates[erg.constants["delegateMainMenu"]];

    return delegate(args, newView);

}


erg.controllers[erg.constants["eventReturn"]] = function (args) {

    return erg.returnView;

}

erg.controllers[erg.constants["eventQuicksave"]] = function (args) {

    erg.utilities.coreSave(erg.constants["saveSlotQuicksave"]);
    window.location.href = "index.html";

}

erg.controllers[erg.constants["eventQuit"]] = function (args) {

    erg.utilities.coreSave(erg.constants["saveSlotAutosave"]);
    window.location.href = "index.html";

}

erg.controllers[erg.constants["eventViewLoadGameMenu"]] = function (args) {

    //Replace with proper save browse scheme thing at some point.

    //In the meantime, is a non-volatile quickload

    erg.utilities.coreLoad(erg.constants["saveSlotQuicksave"]);

    return erg.cachedView;

}

erg.controllers[erg.constants["eventViewCredits"]] = function (args) {

    var newView = {};

    var delegate = erg.delegates[erg.constants["delegateViewCredits"]];

    return delegate(args, newView);

}

//################################### CHARACTER MENU CONTROLLERS #################################################

erg.controllers[erg.constants["eventShowCharacterMenu"]] = function (args) {

    var newView = {};

    erg.returnView = erg.cachedView;

    var delegate = erg.delegates[erg.constants["delegateCharacterMenu"]];

    return delegate(args, newView);

}

//################################### JOURNAL CONTROLLERS #################################################

erg.controllers[erg.constants["eventShowJournal"]] = function (args) {

    var newView = {};

    var delegate = erg.delegates[erg.constants["delegateJournal"]];

    return delegate(args, newView);
}


//################################### LOG CONTROLLERS #################################################

erg.controllers[erg.constants["eventShowLog"]] = function (args) {

    var newView = {};

    erg.returnView = erg.cachedView;

    var delegate = erg.delegates[erg.constants["delegateLog"]];

    return delegate(args, newView);

}


//################################### ACT SPLASH CONTROLLER #################################################

erg.controllers[erg.constants["eventShowActSplash"]] = function (args) {

    var newView = {};

    var delegate = erg.delegates[erg.constants["delegateActSplash"]];

    return delegate(args, newView);
}


//################################### SCENE CONTROLLERS #################################################


erg.controllers[erg.constants["eventLoadScene"]] = function (args) {

    var newView = {};

    var scene = erg.utilities.getFromArrayByKey(erg.scenes, args.sceneKey);

    var interaction = scene.initialInteraction;

    scene.currentInteraction = interaction;  //the magic of pass-by-reference

    var delegate = erg.delegates[erg.constants["delegateScene"]];

    newView = delegate(args, newView);

    if (newView.interaction.bgm) {

        newView.interaction.bgmOverride = true;

    }

    return newView;

}


erg.controllers[erg.constants["eventPlayScene"]] = function (args) {

    var newView = {};

    var location = erg.utilities.getFromArrayByKey(erg.locations, args.location);

    var scene = erg.utilities.getFromArrayByKey(location.scenes, args.sceneKey);

    var interactionKey = scene.interactions[0].key;

    if (args.interactionKey) {

        interactionKey = args.interactionKey;

    } else {

        args.interactionKey = interactionKey;

    }

    var delegate = erg.delegates[erg.utilities.getFromArrayByKey(scene.interactions, interactionKey).type];

    newView = delegate(newView, args);

    if (newView.interaction.bgm) {

        newView.interaction.bgmOverride = true;

    }

    return newView;


}



//################################### CONVERSATION EVENT CONTROLLERS #################################################


/*

erg.controllers[erg.constants["eventAdvanceDialogue"]] = function (args) {

    var newView = {};

    var scene = erg.utilities.getFromArrayByKey(erg.scenes, args.sceneKey);

    var conversation = erg.utilities.getFromArrayByKey(scene.interactions, scene.currentInteraction.key);

    conversation.currentLineIndex += 1;

    if (conversation.currentLineIndex >= conversation.lines.length && conversation.currentLineIndex > 0) {

        conversation.currentLineIndex = conversation.lines.length - 1;

    }

    var delegate = erg.delegates[erg.constants["delegateScene"]];

    return delegate(args, newView);


}


erg.controllers[erg.constants["eventLinkDialogue"]] = function (args) {

    var newView = {};

    var scene = erg.utilities.getFromArrayByKey(erg.scenes, args.sceneKey);

    var conversation = erg.utilities.getFromArrayByKey(scene.interactions, args.conversationKey);

    conversation.currentLineIndex = erg.utilities.getIndexFromArrayByKey(conversation.lines, args.linkKey);

    var delegate = erg.delegates[erg.constants["delegateScene"]];

    return delegate(args, newView);


} */


erg.controllers[erg.constants["eventConversation"]] = function (args) {

    var newView = {};

    var delegate = erg.delegates[erg.constants["interactionTypeConversation"]];

    return delegate(newView, args);

}