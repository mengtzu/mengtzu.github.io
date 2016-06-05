//################################### MAIN MENU RENDERER #################################################

erg.viewRenderers[erg.constants["interactionTypeMainMenu"]] = function (interaction) {

    var i;

    var action;

    var tempHTML = "";

    $("body").css("background-image", "none");
    $("body").css("background-color", "Black");



    tempHTML += "<div id=\"menuImageBox\"><img src=\"" + interaction.menuImageURL + "\" id=\"menuImage\" /></div>";


    $("body").html(tempHTML);


    //Actions now, so they can be hooked up right away.

    if (interaction.actions) {

        for (i = 0; i < interaction.actions.length; i++) {

            action = interaction.actions[i];
            
            erg.utilities.addActionButtonAndHookUp(action, action.id, action.class);

        }

    }

}


//################################### CHARACTER MENU RENDERER #################################################

//Prolly gets overridden by the game (eg TITP needs to display the Spell Card deck button)

erg.viewRenderers[erg.constants["interactionTypeCharacterMenu"]] = function (interaction) {

    var i;

    var action;

    var tempHTML = "";

    $("body").css("background-image", "none");
    $("body").css("background-color", "Black");



    tempHTML += "<div id=\"menuImageBox\"><img src=\"" + interaction.menuImageURL + "\" id=\"menuImage\" /></div>";


    $("body").html(tempHTML);


    //Actions now, so they can be hooked up right away.

    if (interaction.actions) {

        for (i = 0; i < interaction.actions.length; i++) {

            action = interaction.actions[i];

            if (action.type === erg.constants["menuActionTypeReturn"]) {

                erg.utilities.addActionButtonAndHookUp(action, "menuReturn", "menuAction");

            }

        }

    }

}


//################################### JOURNAL RENDERER #################################################

erg.viewRenderers[erg.constants["interactionTypeJournal"]] = function (interaction) {

    var i;

    var action;

    var tempHTML = "";

    $("body").css("background-image", "none");
    $("body").css("background-color", "Black");



    tempHTML += "<div id=\"menuImageBox\"><img src=\"" + interaction.menuImageURL + "\" id=\"menuImage\" /></div>";

    if (interaction.questList.length > 0) {

        tempHTML += "<div id=\"journalQuestListBox\">";

        for (i = 0; i < interaction.questList.length; i++) {

            tempHTML += "<div id=\"" + interaction.questList[i].key + "\" class=\"journalQuestListCategory\">" + interaction.questList[i].label + "</div>";

            for (j = 0; j < interaction.questList[i].quests.length; j++) {

                tempHTML += "<div id=\"" + interaction.questList[i].quests[j].key + "\" class=\"journalQuestListQuest";

                if (interaction.questList[i].quests[j].key === interaction.selectedQuest) {

                    tempHTML += " journalQuestListSelectedQuest";

                }

                tempHTML += "\">" + interaction.questList[i].quests[j].title + "</div>";

            }
        }

        tempHTML += "</div>";

    }

    if (interaction.questDetails) {

        tempHTML += "<div id=\"journalQuestDetailWrapper\">";
        tempHTML += "<div id=\"journalQuestTitle\">" + interaction.questDetails.title + "</div>";
        tempHTML += "<div id=\"journalQuestObjective\"><strong>Objective: </strong>" + interaction.questDetails.objective + "</div>";

        //Fake Map, replace with clever location stuff later
        tempHTML += "<div id=\"journalQuestMapBox\"><img class=\"journalQuestMap\" src=\"titp/images/temp/fakeMap.jpg\" /></div>";

        //Reward

        if (interaction.questDetails.baseReward) {

            tempHTML += "<div id=\"journalQuestRewardHeader\">Reward:</div>";

            if (interaction.questDetails.baseReward.prestige) {

                tempHTML += "<div class=\"journalQuestRewardLine\"><strong>Prestige: </strong>" + interaction.questDetails.baseReward.prestige + "</div>";

            }

            if (interaction.questDetails.baseReward.yen) {

                tempHTML += "<div class=\"journalQuestRewardLine\"><strong>Yen: </strong>" + interaction.questDetails.baseReward.yen + "</div>";

            }

            if (interaction.questDetails.baseReward.bonusReward) {

                tempHTML += "<div class=\"journalQuestRewardLine\"><strong>Bonus Available: </strong>" + interaction.questDetails.baseReward.bonusRewardHint + "</div>";

            }


        }

        //Current State
        tempHTML += "<div id=\"journalQuestCurrentStateWrapper\" class=\"journalQuestStateWrapper\">";

        tempHTML += "<div id=\"journalQuestCurrentStateImageBox\" class=\"journalQuestStateImageBox\"><img class=\"journalQuestStateImage\" src=\"" + interaction.questDetails.states[0].portrait + "\" /><p>" + interaction.questDetails.states[0].name + "</p></div>";

        tempHTML += interaction.questDetails.states[0].text;

        tempHTML += "<div class=\"clear\"></div></div>"

        //History

        if (interaction.questDetails.states.length > 1) {

            tempHTML += "<div id=\"journalQuestHistoryHeader\">History:</div>";

            for (i = 1; i < interaction.questDetails.states.length; i++) {

                tempHTML += "<div id=\"journalQuestStateHistoryWrapper" + i +"\" class=\"journalQuestStateWrapper\">";

                tempHTML += "<div id=\"journalQuestStateHistoryImageBox" + i + "\" class=\"journalQuestStateImageBox\"><img class=\"journalQuestStateImage\" src=\"" + interaction.questDetails.states[i].portrait + "\" /><p>" + interaction.questDetails.states[i].name + "</p></div>";

                tempHTML += interaction.questDetails.states[i].text;

                tempHTML += "<div class=\"clear\"></div></div>"                            

            }

        }


        //Glossary
        if (interaction.questDetails.glossaryArray.length > 0) {

            tempHTML += "<div id=\"journalQuestGlossary\"><strong>Glossary: </strong>";

            for (i = 0; i < interaction.questDetails.glossaryArray.length; i++) {

                tempHTML += "<span class=\"journalQuestGlossaryLink\" id=\"" + interaction.questDetails.glossaryArray[i].key + "\">" + interaction.questDetails.glossaryArray[i].title + "</span>";

                if (!(i === interaction.questDetails.glossaryArray.length - 1)) {

                    tempHTML += ", ";

                }

            }

            tempHTML += "</div>";

        }

        tempHTML += "</div>";

    }




    $("body").html(tempHTML);


    if (interaction.questList.length > 0) {


        for (i = 0; i < interaction.questList.length; i++) {

            for (j = 0; j < interaction.questList[i].quests.length; j++) {

                if (!(interaction.questList[i].quests[j].key === interaction.selectedQuest)) {

                    erg.utilities.hookupIDWithClicksEvent(interaction.questList[i].quests[j].key, erg.constants["eventShowJournal"], { selectedQuest: interaction.questList[i].quests[j].key }, true);

                }


            }
        }

    }



    if (interaction.questDetails.glossaryArray.length > 0) {

        for (i = 0; i < interaction.questDetails.glossaryArray.length; i++) {

            erg.utilities.hookUpGlossaryLink(interaction.questDetails.glossaryArray[i]);

        }

    }



}


//################################### LOG RENDERER #################################################

erg.viewRenderers[erg.constants["interactionTypeLog"]] = function (interaction) {

    var i;

    var action;

    var tempHTML = "";

    $("body").css("background-image", "none");
    $("body").css("background-color", "Black");



    tempHTML += "<div id=\"menuImageBox\"><img src=\"" + interaction.menuImageURL + "\" id=\"menuImage\" /></div>";

    if (interaction.log) {

        tempHTML += "<div id=\"logBox\">";

        for (i = interaction.log.length - 1; i >= 0; i--) {

            tempHTML += "<div id=\"logLine" + i + "\" class=\"logLine\"><span class=\"logTitle\">" + interaction.log[i].title + ":</span> <span class=\"logText\">" + interaction.log[i].text + "</span></div>";

        }

        tempHTML += "</div>";

    }

    $("body").html(tempHTML);


    //Actions now, so they can be hooked up right away.

    if (interaction.actions) {

        for (i = 0; i < interaction.actions.length; i++) {

            action = interaction.actions[i];

            if (action.type === erg.constants["menuActionTypeReturn"]) {

                erg.utilities.addActionButtonAndHookUp(action, "menuReturn", "menuAction");

            }

        }

    }

}


//################################### CREDITS RENDERER #################################################

erg.viewRenderers[erg.constants["interactionTypeCredits"]] = function (interaction) {

    var i;

    var action;

    var tempHTML = "";

    $("body").css("background-image", "none");
    $("body").css("background-color", "Black");



    tempHTML += "<div id=\"menuImageBox\"><img src=\"" + interaction.menuImageURL + "\" id=\"menuImage\" /></div>";

    //tempHTML += "<div id=\"creditsHeader\">Credits</div>";

    tempHTML += "<div id=\"creditsText\">" + interaction.creditsBody + "</div>";

    $("body").html(tempHTML);


    //Actions now, so they can be hooked up right away.

    if (interaction.actions) {

        for (i = 0; i < interaction.actions.length; i++) {

            action = interaction.actions[i];

            if (action.type === erg.constants["menuActionTypeReturn"]) {

                erg.utilities.addActionButtonAndHookUp(action, "menuReturn", "menuAction");

            }

        }

    }

}



//################################### ACT SPLASH RENDERER #################################################

erg.viewRenderers[erg.constants["interactionTypeActSplash"]] = function (interaction) {

    var i;

    var action;

    var tempHTML = "";

    $("body").css("background-image", "none");
    $("body").css("background-color", "Black");



    tempHTML += "<div id=\"actSplashImageBox\"><img src=\"" + interaction.imageURL + "\" id=\"actSplashImage\" /></div>";

    tempHTML += "<div id=\"actSplashTitleBox\">" + interaction.title + "</div>";
    tempHTML += "<div id=\"actSplashBGMDetailsWrapper\"><strong>BGM: </strong> <span id=\"bgmTitle\"></span> (Artist: <span id=\"bgmArtist\"></span>, Album: <span id=\"bgmAlbum\"></span>, Original: <span id=\"bgmOriginal\"></span>, Original Artist: <span id=\"bgmOriginalArtist\"></span>)";


    $("body").html(tempHTML);


    if (interaction.bgm) {

        erg.utilities.playBGM(interaction.bgm, true);

    }

    if (interaction.action) {

        erg.utilities.addActionButtonAndHookUp(interaction.action, "actSplashAction", "actSplashAction");

    }

}


//################################### CONVERSATION RENDERER #################################################

erg.viewRenderers[erg.constants["interactionTypeConversation"]] = function (interaction) {

    var i;

    var action;

    var tempHTML = "";

    var dialogueOptions = false;

    var tempFunction;

    var usedOptionSlots = {};

    var bgmOverride = false;

    if (interaction.bgmOverride) {

        bgmOverride = true;

    }


    for (i = 0; i < interaction.portraitArray.length; i++) {

        tempHTML += "<div id=\"" + interaction.portraitArray[i].portraitSlot + "\" class=\"conversationPortraitWrapper\"><img src=\"" + interaction.portraitArray[i].portraitURL + "\" id=\"conversationPortrait0\" class=\"conversationPortrait";

        if (interaction.portraitArray[i].currentSpeaker) {

            tempHTML += " conversationPortraitCurrentSpeaker";

        }

        tempHTML += "\" /></div>";

    }

    tempHTML += "<div id=\"conversationTextBox\">";
    tempHTML += "<div id=\"conversationSpeakerName\">" + interaction.name + "</div>";
    tempHTML += "<div id=\"conversationText\">" + interaction.text + "</div>";
    tempHTML += "</div>";


    tempHTML += "<div id=\"conversationActionBar\"></div>";
    tempHTML += "<div id=\"conversationBGMDetailsWrapper\"><strong>BGM: </strong> <span id=\"bgmTitle\"></span> (Artist: <span id=\"bgmArtist\"></span>, Album: <span id=\"bgmAlbum\"></span>, Original: <span id=\"bgmOriginal\"></span>, Original Artist: <span id=\"bgmOriginalArtist\"></span>)</div>";

    $("body").html(tempHTML);

    if (interaction.bgm) {

        erg.utilities.playBGM(interaction.bgm, bgmOverride);

    }

    //Actions now, so they can be hooked up right away.

    if (interaction.actions) {

        $("body").append("<div id=\"dialogueOptionPreviewPortraitBox\">&nbsp;</div>");
        $("body").append("<div id=\"dialogueOptionLabel\">&nbsp;</div>");


        for (i = 0; i < interaction.actions.length; i++) {

            action = interaction.actions[i];

            if (action.type === erg.constants["dialogueActionTypeContinue"]) {

                erg.utilities.addActionButtonAndHookUp(action, "dialogueContinue", "dialogueAction");

            }

            if (action.type === erg.constants["dialogueActionTypeContinuePair1"]) {

                erg.utilities.addActionButtonAndHookUp(action, "dialogueContinuePair1", "dialogueAction");

            }

            if (action.type === erg.constants["dialogueActionTypeContinuePair2"]) {

                erg.utilities.addActionButtonAndHookUp(action, "dialogueContinuePair2", "dialogueAction");

            }

            if (action.type === erg.constants["dialogueActionTypeOption"]) {

                dialogueOptions = true;

                if ((!action.used || action.repeatable) && !usedOptionSlots[action.slot]) {

                    usedOptionSlots[action.slot] = true;

                    erg.utilities.addActionButtonAndHookUp(action, action.slot, "dialogueOption");

                    tempFunction = function (event) {

                        $("#dialogueOptionLabel").html(arguments.callee.label);
                        $("#dialogueOptionLabel").show();
                        $("#dialogueOptionPreviewPortraitBox").html("<img id=\"dialogueOptionPreviewPortrait\" src=\"" + arguments.callee.previewPortraitURL + "\" />");
                        $("#dialogueOptionPreviewPortraitBox").show();

                    }
                    tempFunction.label = action.label;

                    if (action.displayLabel) {

                        tempFunction.label = action.displayLabel;  //This just allows an override, frex TitTP tension option labels with the effect string added

                    }

                    tempFunction.previewPortraitURL = action.previewPortraitURL;

                    $("#" + action.slot).mouseenter(tempFunction);
                    $("#" + action.slot).mouseleave(function (event) {

                        $("#dialogueOptionLabel").html("&nbsp;");
                        $("#dialogueOptionLabel").hide();
                        $("#dialogueOptionPreviewPortraitBox").html("&nbsp;");
                        $("#dialogueOptionPreviewPortraitBox").hide();

                    });

                }

            }


        }

    }

    //Menu Bar
    erg.utilities.addMenuBarAndHookUp();

}