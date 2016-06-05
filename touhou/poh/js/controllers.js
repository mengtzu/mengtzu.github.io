//QUIT CONTROLLER

//OVERRIDING ERG CORE

erg.controllers[erg.constants["eventQuit"]] = function (args) {
 
    window.location.reload();

}



//################################### TITLE SCREEN CONTROLLER #################################################

erg.controllers[erg.constants["eventPoHTitleScreen"]] = function (args) {

    var delegate = erg.delegates[erg.constants["delegatePoHTitleScreen"]];

    var newView = {};

    return delegate(newView, args);

}



//################################### SAVE CONTROLLERS #################################################

erg.controllers[erg.constants["eventPoHSave"]] = function (args) {

    var delegate = erg.delegates[erg.constants["delegatePoHInterstitial"]];

    var newView = {};

    if (!args.slot) {

        args.slot = erg.constants["saveSlotQuicksave"];

    }

    erg.cachedView = erg.returnView;

    erg.utilities.coreSave(args.slot);

    return delegate(newView, args, { text: "Continue", event: erg.constants["eventReturn"], args: {} }, erg.utilities.poh.getInterstitialStringsForSave());

}


erg.controllers[erg.constants["eventPoHQuicksave"]] = function (args) {

    var delegate = erg.delegates[erg.constants["delegatePoHInterstitial"]];

    var newView = {};

    if (!args.slot) {

        args.slot = erg.constants["saveSlotQuicksave"];

    }

    erg.cachedView = erg.returnView;

    erg.utilities.coreSave(args.slot);

    return delegate(newView, args, { text: "Quit", event: erg.constants["eventQuit"], args: {} }, erg.utilities.poh.getInterstitialStringsForSave());

}


//################################### LOAD CONTROLLERS #################################################

erg.controllers[erg.constants["eventPoHLoad"]] = function (args) {

    var newView = {};

    if (!args.slot) {

        args.slot = erg.constants["saveSlotQuicksave"];

    }

    var image = erg.constants["gameResourceDirectory"] + "/" + erg.constants["applicationResourceImageSubdirectory"] + "/" + erg.constants["applicationResourceImageActsSubdirectory"] + "/" + erg.utilities.getFromArrayByKey(erg.acts, JSON.parse(localStorage.getItem(args.slot)).world.act).splash.image;

    var delegate = erg.delegates[erg.constants["delegatePoHInterstitial"]];

    return delegate(newView, args, { text: "Continue", event: erg.constants["eventLoad"], args: { slot: args.slot} }, erg.utilities.poh.getInterstitialStringsForLoad(), image);

}


erg.controllers[erg.constants["eventPoHViewLoadGameMenu"]] = function (args) {

    var newView = {};

    var delegate = erg.delegates[erg.constants["delegatePoHLoadGameMenu"]];

    return delegate(args, newView);

}

erg.controllers[erg.constants["eventPoHViewLoadGameMenuFromTitleScreen"]] = function (args) {

    var newView = {};

    erg.returnView = erg.cachedView;

    var delegate = erg.delegates[erg.constants["delegatePoHLoadGameMenu"]];

    return delegate(args, newView);

}


//################################### Initialise CONTROLLER #################################################


erg.controllers[erg.constants["eventInitialisePoH"]] = function (args) {

    var newView = {};

    var delegate = erg.delegates[erg.constants["delegateInitialisePoH"]];

    delegate();
    
    delegate = erg.delegates[erg.constants["delegatePoHInterstitial"]];

    return delegate(newView, args, { text: "Continue", event: erg.constants["eventPoHViewHeartsList"], args: {} }, erg.utilities.poh.getInterstitialStringsForNewGame());

}


//################################### HEARTS LIST CONTROLLERS #################################################


erg.controllers[erg.constants["eventPoHViewHeartsList"]] = function (args) {

    var newView = {};

    var delegate = erg.delegates[erg.constants["delegatePoHHeartsList"]];

    return delegate(newView);

}



//################################### HEART CONTROLLERS #################################################


erg.controllers[erg.constants["eventPoHViewHeart"]] = function (args) {

    var newView = {};

    var delegate = erg.delegates[erg.constants["delegatePoHViewHeart"]];

    return delegate(args, newView);

}



//################################### NEXT WEEK CONTROLLER #################################################

erg.controllers[erg.constants["eventPoHNextWeek"]] = function (args) {

    var newView = {};

    var newsItem;

    newView.autosave = true;

    erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.length = 0;

    erg.world[erg.constants["pohCurrentWeek"]] += 1;  //increment week

    erg.world[erg.constants["pohWeeks"]].push(erg.utilities.poh.buildNewWeek(erg.world[erg.constants["pohCurrentWeek"]]));  //Populate the week array with a fresh one

    erg.utilities.poh.weekLoneliness();  //Lonely everyone up a notch

    erg.delegates[erg.constants["delegatePoHGenerateNews"]]();  //Generate random news, populate new week with it

    erg.world[erg.constants["pohAdvice"]] = new Array(); //Advice should have been executed, can now clear it for the new week

    //Flag checking
    //Should prolly be a delegate or similar function, but while it's just Remilia we can do it here
    if (((erg.world[erg.constants["pohCurrentWeek"]] + 1) >= erg.constants["pohRemiliaShopOpenWeekNumber"]) && !erg.world.flags[erg.constants["pohFlagRemiliaShopOpen"]]) {

        erg.world.flags[erg.constants["pohFlagRemiliaShopOpen"]] = true;

    }

    if (erg.player.prestige.current >= erg.constants["pohPrestigeCostUnsolicitedAdvice"] && !erg.world.flags[erg.constants["pohFlagUnsolicitedAdviceLetter"]]) {

        erg.world.flags[erg.constants["pohFlagUnsolicitedAdviceLetter"]] = true;

        newsItem = {

            category: erg.constants["pohNewsCategoryLetter"],
            type: erg.constants["pohNewsTypeMiscLetter"],
            image: erg.utilities.poh.getLetterImageURL("yukariLarge.jpg"),
            imageSmall: erg.utilities.poh.getLetterImageURL("yukari.jpg"),
            title: "Letter from Yukari",
            text: "<p>Dear Alice,</p><p>Your efforts are bearing fruit, and your reputation in matchmaking and intrigue improves.</p><p>While it's more elegant to manipulate events from a purely reactive stance, you may want to consider burning some of that hard-earned prestige by offering advice to a woman who needs it but has not asked for it.  From time to time even I am obliged to force matters.</p><p>Yours,</p><p>Yukari Yakumo</p><p><em>Whenever you have "+ erg.constants["pohPrestigeCostUnsolicitedAdvice"] +" or more Prestige, a &quot;Send Unsolicited Advice&quot; button will appear on the Character Sheet of any girl who has not requested advice from you in that week.</em></p>",
            timeStamp: new Date().getTime()

        }

        erg.world[erg.constants["pohWeeks"]][erg.world[erg.constants["pohCurrentWeek"]]].news.push(newsItem);
    }

    //var delegate = erg.delegates[erg.constants["delegatePoHHeartsList"]];  //Show the hearts list

    var delegate = erg.delegates[erg.constants["delegatePoHInterstitial"]];

    return delegate(newView, args, { text: "Continue", event: erg.constants["eventPoHViewHeartsList"], args: {} }, erg.utilities.poh.getInterstitialStringsFromNews());

}


//################################### NEWS ITEM CONTROLLER #################################################

erg.controllers[erg.constants["eventPoHViewNewsItem"]] = function (args) {

    var newView = {};

    var delegate = erg.delegates[erg.constants["delegatePoHViewNewsItem"]];
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

    newsItem.read = true;

    erg.world[erg.constants["pohLastSelectedNewsTab"]] = args.lastViewedTab;

    return delegate(newView, args, week, itemIndex);
}


//################################### END GAME CONTROLLER #################################################

erg.controllers[erg.constants["eventPoHEndGame"]] = function (args) {

    var newView = {};

    var delegate = erg.delegates[erg.constants["delegatePoHEndGame"]];

    return delegate(newView, args);

}


//################################### ADVICE CONTROLLERS #################################################


erg.controllers[erg.constants["eventPoHGiveAdvice"]] = function (args) {

    var newView = {};

    var delegate = erg.delegates[erg.constants["delegatePoHAdvice"]];

    return delegate(newView, args);

}

erg.controllers[erg.constants["eventPoHViewAdvice"]] = function (args) {

    var week = erg.world[erg.constants["pohCurrentWeek"]];

    var itemIndex;

    var i;

    var newsArray = erg.world[erg.constants["pohWeeks"]][week].news;

    for (i = 0; i < newsArray.length; i++) {

        if (newsArray[i].type === erg.constants["pohNewsTypeAdviceLetter"] && newsArray[i].subjectHeartKey === args.heartKey) {

            itemIndex = i;

        }

    }

    if (itemIndex) {

        return erg.controllers[erg.constants["eventPoHViewNewsItem"]]({ week: week, index: itemIndex });

    }

}

erg.controllers[erg.constants["eventPoHChangeAdvice"]] = function (args) {

    var newView = {};

    var delegate = erg.delegates[erg.constants["delegatePoHAdvice"]];

    return delegate(newView, args);

}


erg.controllers[erg.constants["eventPoHSendAdvice"]] = function (args) {

    var newView = {};

    var i;

    for (i = erg.world[erg.constants["pohAdvice"]].length - 1; i >= 0; i--) {

        if (erg.world[erg.constants["pohAdvice"]][i].key === args.heartKey) {

            erg.world[erg.constants["pohAdvice"]].splice(i, 1);

        }

    }

    erg.delegates[erg.constants["delegatePoHSendAdvice"]](args);
    
    var delegate = erg.delegates[erg.constants["delegatePoHHeartsList"]];

    return delegate(newView);

}


erg.controllers[erg.constants["eventPoHUnsolicitedAdvice"]] = function (args) {

    var newView = {};

    var delegate = erg.delegates[erg.constants["delegatePoHUnsolicitedAdvice"]];

    delegate(args);

    delegate = erg.delegates[erg.constants["delegatePoHAdvice"]];

    return delegate(newView, args);

}


//################################### REMILIA SHOP CONTROLLERS #################################################

erg.controllers[erg.constants["eventPoHRemiliaShop"]] = function (args) {

    var newView = {};

    var delegate = erg.delegates[erg.constants["delegatePoHRemiliaShop"]];

    return delegate(newView, args);

}


erg.controllers[erg.constants["eventPoHRemiliaHeartOpen"]] = function (args) {

    var newView = {};

    var delegate = erg.delegates[erg.constants["delegatePoHRemiliaHeartOpen"]];

    delegate(args);

    delegate = erg.delegates[erg.constants["delegatePoHHeartsList"]];

    return delegate(newView, args);

}


//################################### HELP CONTROLLERS #################################################

erg.controllers[erg.constants["eventPoHViewHelp"]] = function (args) {

    var newView = {};

    var delegate = erg.delegates[erg.constants["delegatePoHHelp"]];

    erg.returnView = erg.cachedView;

    return delegate(args, newView);

}