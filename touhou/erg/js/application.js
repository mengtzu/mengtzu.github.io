EightfoldRoseGarden = {

    game: {},  //Meta information about the software e.g lets you know this instance of ERG is "Together in the Tainted Paradise" by Jye Nicolson

    constants: {},

    utilities: {},  //Essentially a library collection.  Many important game objects do not have behaviours, so they can be stringified into JSON and then reparsed without loss.  Those functions live here instead.\

    factories: {}, //A collection of functions to make objects, with side-effects to help make state and data/behaviour seperation work.  Should accept a single parameter as a block of JSON, so the intended object is re

    controllers: {},

    delegates: {},

    viewRenderers: {},

    cachedView: {},

    returnView: {},

    player: {

        pcs: new Array(),
        questStatus: new Array(),
        inventory: {

            keyItems: new Array()

        }

    },

    questCategories: new Array(),

    quests: new Array(),

    glossary: new Array(),

    help: new Array(),

    characters: new Array(),

    acts: new Array(),

    locations: new Array(),

    scenes: new Array(),

    keyItems: new Array(),

    interrupts: new Array(),

    world: {

        flags: {},
        calendar: {}

    },

    log: new Array(),

    bgm: {

        jukebox: new Array(),
        playing: false,
        audio: {}

    },

    sfx: {

        audio: {}

    },

    event: function (type, args) {

        if (!args) {

            args = {};  //This lets delegates etc. test for args.x without risking args being undefined.

        }

        var controller = erg.controllers[type];

        var newView = controller(args);

        erg.renderView(newView);

        if (newView.autosave) {

            erg.utilities.coreSave(erg.constants["saveSlotAutosave"]);

        }

    },

    renderView: function (view) {

        erg.cachedView = view;

        if (view.background) {

            $("body").css("background-image", "url(\"" + view.background + "\")");

        }

        var viewRenderer = erg.viewRenderers[view.interaction.type];

        viewRenderer(view.interaction);

    }


};

var erg = EightfoldRoseGarden;

//This interacts with view layer/jquery, maybe find somewhere else for it:

var $ergDialogue = $("<div></div").dialog({

    autoOpen: false,
    resizable: false,
    modal: true,
    width: "700px"

});


var test = {

    menu: function () {

        erg.event(erg.constants["eventShowMainMenu"]);

    },
    back: function () {

        erg.event(erg.constants["eventReturn"]);

    },
    actSplash: function (act) {

        erg.event(erg.constants["eventShowActSplash"], erg.acts[act].splash);

    },
    spellCardDeck: function () {

        erg.bgm.audio.pause();
        erg.event(erg.constants["eventShowSpellCardDeck"], {});

    },
    journal: function () {

        erg.bgm.audio.pause();
        erg.event(erg.constants["eventShowJournal"], {});

    }


}