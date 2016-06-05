//################################### TITLE SCREEN RENDERER #################################################

erg.viewRenderers[erg.constants["interactionTypePoHTitleScreen"]] = function (interaction) {

    var tempHTML = "";

    tempHTML += "<div id=\"pohTopNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohMenuTitle\" class=\"pohTopNavTitle\">Puppeteer of Hearts</div>";

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohGameArea\" class=\"pohTitleScreenGameArea\">";

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "<div id=\"pohTitleScreenText\" class=\"pohTextCell\">" + interaction.text + "</div>";

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "</div>"  //Game Area

    tempHTML += "<div id=\"pohBottomNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohTitleScreenNewGame\" class=\"pohNavButton\">New Game</div>";

    if (interaction.loadGame) {

        tempHTML += "<div id=\"pohTitleScreenLoadGame\" class=\"pohNavButton\">Load Game</div>";

    }

    tempHTML += "</div>";

    $("body").html(tempHTML);

    erg.utilities.hookupIDWithClicksEvent("pohTitleScreenNewGame", erg.constants["eventInitialisePoH"]);

    erg.utilities.hookupIDWithClicksEvent("pohTitleScreenLoadGame", erg.constants["eventPoHViewLoadGameMenuFromTitleScreen"]);

}

//################################### MAIN MENU RENDERERS #################################################

//OVERRIDING ERG CORE

erg.viewRenderers[erg.constants["interactionTypeMainMenu"]] = function (interaction) {

    var i;

    var action;

    var tempHTML = "";


    tempHTML += "<div id=\"pohTopNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohMenuTitle\" class=\"pohTopNavTitle\">Menu</div>";

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohGameArea\" class=\"pohMenuGameArea\">";

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "<div id=\"pohMenuButtonsWrapper\">";

    tempHTML += "<div id=\"pohMenuSave\" class=\"pohMenuButton\">Save and Continue</div>";

    tempHTML += "<div id=\"pohMenuLoad\" class=\"pohMenuButton\">Load</div>";

    tempHTML += "<div id=\"pohMenuCredits\" class=\"pohMenuButton\">Credits</div>";

    tempHTML += "<div id=\"pohMenuQuicksave\" class=\"pohMenuButton\">Save and Quit</div>";

    tempHTML += "<div id=\"pohMenuQuit\" class=\"pohMenuButton\">Quit Without Saving</div>";

    tempHTML += "</div>"; //Menu button wrapper

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "</div>"  //Game Area

    tempHTML += "<div id=\"pohBottomNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohMenuReturn\" class=\"pohNavButton\">&lt;&lt; Return</div>"

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohMenuImageLargeWrapper\" class=\"pohLandscapeBackdrop\"><img class=\"pohLandscapeBackdropImage\" src=\"" + interaction.menuImageURL + "\" /></div>";


    $("body").html(tempHTML);


    //Return

    erg.utilities.hookupIDWithClicksEvent("pohMenuReturn", erg.constants["eventReturn"]);

    //Everything else

    erg.utilities.hookupIDWithClicksEvent("pohMenuSave", erg.constants["eventPoHSave"], { slot: erg.constants["saveSlotQuicksave"] });

    erg.utilities.hookupIDWithClicksEvent("pohMenuLoad", erg.constants["eventPoHViewLoadGameMenu"]);

    erg.utilities.hookupIDWithClicksEvent("pohMenuCredits", erg.constants["eventViewCredits"]);

    erg.utilities.hookupIDWithClicksEvent("pohMenuQuicksave", erg.constants["eventPoHQuicksave"], { slot: erg.constants["saveSlotQuicksave"] });

    erg.utilities.hookupIDWithClicksEvent("pohMenuQuit", erg.constants["eventQuit"]);


}


//OVERRIDING ERG CORE


erg.viewRenderers[erg.constants["interactionTypeCredits"]] = function (interaction) {

    var i;

    var action;

    var tempHTML = "";


    tempHTML += "<div id=\"pohTopNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohMenuTitle\" class=\"pohTopNavTitle\">Credits</div>";

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohGameArea\" class=\"pohMenuGameArea\">";

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "<div id=\"pohCreditsText\" class=\"pohTextCell\">" + interaction.creditsBody + "</div>";

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "</div>"  //Game Area

    tempHTML += "<div id=\"pohBottomNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohMenuReturn\" class=\"pohNavButton\">&lt;&lt; Return</div>"

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohCreditsImageLargeWrapper\" class=\"pohLandscapeBackdrop\"><img class=\"pohLandscapeBackdropImage\" src=\"" + interaction.menuImageURL + "\" /></div>";


    $("body").html(tempHTML);


    //Return

    erg.utilities.hookupIDWithClicksEvent("pohMenuReturn", erg.constants["eventReturn"]);

  
}



//################################### HEARTS LIST RENDERER #################################################


erg.viewRenderers[erg.constants["interactionTypePoHHeartsList"]] = function (interaction) {

    var i;

    var heartsList = interaction.heartsList;

    var tempHTML = "";

    var readText = "";

    var tempDialogueHTML = "";

    tempHTML += "<div id=\"pohTopNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohAliceDeskWeek\">" + interaction.weekLabel + " (" + interaction.weekSeason + ")</div>";

    tempHTML += "<div id=\"pohAliceDeskPrestige\">Prestige: " + interaction.prestige + "</div>";

    //Next Week/End Game

    if (interaction.endGame) {

        tempHTML += "<div id=\"pohAliceDeskNextWeek\" class=\"pohNavButton\">End Game</div>";

    } else {

        tempHTML += "<div id=\"pohAliceDeskNextWeek\" class=\"pohNavButton\">End Week</div>";

    }

    tempHTML += "<div class=\"clear\" /></div>";



    tempHTML += "<div id=\"pohGameArea\" class=\"pohAliceDeskGameArea\">";

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";


    tempHTML += "<div id=\"pohAliceDeskNewsWrapper\" class=\"pohTextCell\">";

    tempHTML += "<div id=\"pohAliceDeskNewsHeader\" class=\"pohSectionHeader\">News</div>";

    tempHTML += "<div id=\"pohAliceDeskNewsTabs\"><ul>";
    tempHTML += "<li><a href=\"#tabs-letters\">Letters (" + interaction.newsLetters.length + ")</a></li>";
    tempHTML += "<li><a href=\"#tabs-satori\">Satori (" + interaction.newsSatori.length + ")</a></li>";
    tempHTML += "<li><a href=\"#tabs-society\">Society (" + interaction.newsSociety.length + ")</a></li>";
    tempHTML += "<li><a href=\"#tabs-danmaku\">Danmaku (" + interaction.newsDanmaku.length + ")</a></li>";
    tempHTML += "<li><a href=\"#tabs-general\">General (" + interaction.newsGeneral.length + ")</a></li>";
    tempHTML += "</ul><div id=\"tabs-letters\" class=\"pohAliceDeskNewsTab\">"

    for (i = 0; i < interaction.newsLetters.length; i++) {

        tempHTML += erg.utilities.poh.getAliceDeskNewsItemHTML(interaction.newsLetters[i], "pohAliceDeskNewsLettersItem", i);

    }

    tempHTML += "</div>";

    tempHTML += "<div id=\"tabs-satori\" class=\"pohAliceDeskNewsTab\">"

    for (i = 0; i < interaction.newsSatori.length; i++) {

        tempHTML += erg.utilities.poh.getAliceDeskNewsItemHTML(interaction.newsSatori[i], "pohAliceDeskNewsSatoriItem", i);

    }

    tempHTML += "</div>";

    tempHTML += "<div id=\"tabs-society\" class=\"pohAliceDeskNewsTab\">"

    for (i = 0; i < interaction.newsSociety.length; i++) {

        tempHTML += erg.utilities.poh.getAliceDeskNewsItemHTML(interaction.newsSociety[i], "pohAliceDeskNewsSocietyItem", i);

    }

    tempHTML += "</div>";

    tempHTML += "<div id=\"tabs-danmaku\" class=\"pohAliceDeskNewsTab\">"

    for (i = 0; i < interaction.newsDanmaku.length; i++) {

        tempHTML += erg.utilities.poh.getAliceDeskNewsItemHTML(interaction.newsDanmaku[i], "pohAliceDeskNewsDanmakuItem", i);

    }

    tempHTML += "</div>";

    tempHTML += "<div id=\"tabs-general\" class=\"pohAliceDeskNewsTab\">"

    for (i = 0; i < interaction.newsGeneral.length; i++) {

        tempHTML += erg.utilities.poh.getAliceDeskNewsItemHTML(interaction.newsGeneral[i], "pohAliceDeskNewsGeneralItem", i);

    }

    tempHTML += "</div>";


    tempHTML += "</div>"; //News Tab

    tempHTML += "</div>";  //News


    //Status
    tempHTML += "<div id=\"pohAliceDeskStatusWrapper\" class=\"pohTextCell\">";

    tempHTML += "<div id=\"pohAliceDeskStatusHeader\" class=\"pohSectionHeader\">Status</div>";

    tempHTML += "<div id=\"pohAliceDeskStatusTabs\"><ul>";
    tempHTML += "<li><a href=\"#tabs-hearts\">Lonely Hearts (" + heartsList.length + ")</a></li>";
    tempHTML += "<li><a href=\"#tabs-relationships\">Relationships (" + interaction.relationships.length + ")</a></li>";
    tempHTML += "<li><a href=\"#tabs-advice\">Advice (" + interaction.adviceArray.length + ")</a></li>";
    tempHTML += "</ul>";

    tempHTML += "<div id=\"tabs-hearts\" class=\"pohAliceDeskStatusTab\">";

    for (i = 0; i < heartsList.length; i++) {

        tempHTML += "<div class=\"pohHeartsListItem\" id=\"pohHeartsListItem" + i + "\">";

        tempHTML += "<div class=\"pohHeartsListItemProfileImageWrapper\" id=\"pohHeartsListItemProfileImageWrapper" + i + "\"><img src=\"" + heartsList[i].imageUrl + "\" class=\"pohProfileImage\" /></div>";

        tempHTML += "<div class=\"pohHeartsListItemTextWrapper\" id=\"pohHeartsListItemTextWrapper" + i + "\">";

        tempHTML += "<div class=\"pohHeartsListItemName\" id=\"pohHeartsListItemName" + i + "\">" + heartsList[i].name + "</div>";

        tempHTML += "</div>";

        tempHTML += "</div>";

    }

    tempHTML += "<div class=\"clear\" />";

    //Remilia's shop button

    if (interaction.remiliaShop) {

        tempHTML += "<div id=\"pohAliceDeskRemiliaShop\" class=\"pohNewsItemAction\">Request Remilia</div>";

    }
    
    tempHTML += "</div>";

    tempHTML += "<div id=\"tabs-relationships\" class=\"pohAliceDeskStatusTab\">";

    for (i = 0; i < interaction.relationships.length; i++) {

        tempHTML += "<div id=\"pohAliceDeskRelationship" + i + "\" class=\"pohAliceDeskRelationship\"><span class=\"pohAliceDeskRelationshipNames\"><strong>" + interaction.relationships[i].heart1Name + " &amp; " + interaction.relationships[i].heart2Name + ": </strong>" + interaction.relationships[i].strength + " (" + interaction.relationships[i].typeLabel + ")</span><br/><strong>Last Date: </strong>" + interaction.relationships[i].lastDate + ".  <strong>Longevity: </strong>" + interaction.relationships[i].longevity + "  <strong>Stability: </strong>" + interaction.relationships[i].stability + "</div>";

    }

    tempHTML += "</div>";



    tempHTML += "<div id=\"tabs-advice\" class=\"pohAliceDeskStatusTab\">";

    for (i = 0; i < interaction.adviceArray.length; i++) {

        tempHTML += "<div id=\"pohAliceDeskAdvice" + i + "\" class=\"pohAliceDeskAdvice\">";
        tempHTML += "<div class=\"pohAliceDeskAdviceDate\">" + interaction.adviceArray[i].heartName + ": ask out " + interaction.adviceArray[i].dateHeartName + "</div>";

        if (interaction.adviceArray[i].extracurricularString) {

            tempHTML += "<div class=\"pohAliceDeskAdviceExtracurricular\">" + interaction.adviceArray[i].extracurricularString + "</div>";

        }

        tempHTML += "</div>";

    }

    tempHTML += "</div>";

    tempHTML += "</div>"; //Status Tab

    tempHTML += "</div>";  //Status


    

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "</div>"  //Game Area

    tempHTML += "<div id=\"pohBottomNav\" class=\"pohNavBar\">";

    
    tempHTML += "</div>";

    $("body").html(tempHTML);


    //Now we hook up each item with a click event to view details

    for (i = 0; i < heartsList.length; i++) {

        erg.utilities.hookupIDWithClicksEvent("pohHeartsListItem" + i, erg.constants["eventPoHViewHeart"], { key: heartsList[i].key });

    }

    //And we hook up the news items

    for (i = 0; i < interaction.newsLetters.length; i++) {

        erg.utilities.hookupIDWithClicksEvent("pohAliceDeskNewsLettersItem" + i, erg.constants["eventPoHViewNewsItem"], { index: interaction.newsLetters[i].itemIndex, week: interaction.week, lastViewedTab: "tabs-letters" });

    }

    for (i = 0; i < interaction.newsSociety.length; i++) {

        erg.utilities.hookupIDWithClicksEvent("pohAliceDeskNewsSocietyItem" + i, erg.constants["eventPoHViewNewsItem"], { index: interaction.newsSociety[i].itemIndex, week: interaction.week, lastViewedTab: "tabs-society" });

    }

    for (i = 0; i < interaction.newsDanmaku.length; i++) {

        erg.utilities.hookupIDWithClicksEvent("pohAliceDeskNewsDanmakuItem" + i, erg.constants["eventPoHViewNewsItem"], { index: interaction.newsDanmaku[i].itemIndex, week: interaction.week, lastViewedTab: "tabs-danmaku" });

    }

    for (i = 0; i < interaction.newsGeneral.length; i++) {

        erg.utilities.hookupIDWithClicksEvent("pohAliceDeskNewsGeneralItem" + i, erg.constants["eventPoHViewNewsItem"], { index: interaction.newsGeneral[i].itemIndex, week: interaction.week, lastViewedTab: "tabs-general" });

    }

    for (i = 0; i < interaction.newsSatori.length; i++) {

        erg.utilities.hookupIDWithClicksEvent("pohAliceDeskNewsSatoriItem" + i, erg.constants["eventPoHViewNewsItem"], { index: interaction.newsSatori[i].itemIndex, week: interaction.week, lastViewedTab: "tabs-satori" });

    }

    $("#pohAliceDeskNewsTabs").tabs();

    if (interaction.lastSelectedTab) {

        $("#pohAliceDeskNewsTabs").tabs("select", interaction.lastSelectedTab);

    }

    $("#pohAliceDeskStatusTabs").tabs();

    //And the Advice

    for (i = 0; i < interaction.adviceArray.length; i++) {

        erg.utilities.hookupIDWithClicksEvent("pohAliceDeskAdvice" + i, erg.constants["eventPoHViewAdvice"], { heartKey: interaction.adviceArray[i].key });

    }

    //And the next week button

    if (interaction.endGame) {

        tempDialogueHTML = "<p>Are you sure you want to end the game and view your final score?</p>";

        erg.utilities.hookupIDWithDialogueClick("pohAliceDeskNextWeek", tempDialogueHTML, "End Game", [{ id: "pohHeartsListEndGameDialogueAction", class: "popupDialogueAction", event: erg.constants["eventPoHEndGame"], args: {}, text: "End Game"}]);


    } else {

        tempDialogueHTML = "<p>Are you sure you want to end this week and continue to the next?  Make sure you're happy with the advice you've given out!</p>";

        erg.utilities.hookupIDWithDialogueClick("pohAliceDeskNextWeek", tempDialogueHTML, "End Week", [{ id: "pohHeartsListEndWeekDialogueAction", class: "popupDialogueAction", event: erg.constants["eventPoHNextWeek"], args: {}, text: "End Week"}]);


    }


    //And the Relationships

    for (i = 0; i < interaction.relationships.length; i++) {

        erg[erg.constants["pohUIFunctions"]][erg.constants["pohUIFunctionHookupRelationshipDialogue"]]("pohAliceDeskRelationship" + i, interaction.relationships[i]);

    }

    //Remilia's shop button

    if (interaction.remiliaShop) {

        erg.utilities.hookupIDWithClicksEvent("pohAliceDeskRemiliaShop", erg.constants["eventPoHRemiliaShop"]);

    }

    //Main Menu Button

    erg.utilities.addActionButtonAndHookUp({ text: "Menu", event: erg.constants["eventShowMainMenu"], args: {} }, "pohMainMenuButton", "pohNavButton");

    //Help Button

    erg.utilities.addActionButtonAndHookUp({ text: "Help", event: erg.constants["eventPoHViewHelp"], args: {} }, "pohHelpButton", "pohNavButton");

}


//################################### HEART DETAILS RENDERER #################################################

erg.viewRenderers[erg.constants["interactionTypePoHViewHeart"]] = function (interaction) {

    var tempHTML = "";

    var tempDialogueHTML = "";

    var i;

    var j;

    tempHTML += "<div id=\"pohTopNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohHeartDetailsName\" class=\"pohTopNavTitle\">" + interaction.heart.name + "</div>";

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohGameArea\" class=\"pohCharacterSheetGameArea\">";

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";


    tempHTML += "<div id=\"pohHeartDetailsTraitWrapper\" class=\"pohTextCell\">";

    tempHTML += "<div id=\"pohHeartDetailsTitle\">" + interaction.heart.title + "</div>";

    tempHTML += "<div id=\"pohHeartDetailsBioWrapper\">";

    tempHTML += "<div id=\"pohHeartDetailsBioTierWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohHeartDeatilsBioTierLabel\" class=\"pohHeartDetailsLabel\">Tier:</div>";
    tempHTML += "<div id=\"pohHeartDeatilsBioTierValue\" class=\"pohHeartDetailsValue\">" + interaction.heart.tierLabel + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div id=\"pohHeartDetailsBioSpeciesWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohHeartDeatilsBioSpeciesLabel\" class=\"pohHeartDetailsLabel\">Species:</div>";
    tempHTML += "<div id=\"pohHeartDeatilsBioSpeciesValue\" class=\"pohHeartDetailsValue\">" + interaction.heart.speciesLabel + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div id=\"pohHeartDetailsBioHairLengthWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohHeartDeatilsBioHairLengthLabel\" class=\"pohHeartDetailsLabel\">Hair Length:</div>";
    tempHTML += "<div id=\"pohHeartDeatilsBioHairLengthValue\" class=\"pohHeartDetailsValue\">" + interaction.heart.hairLengthLabel + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div id=\"pohHeartDetailsBioHairColourWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohHeartDeatilsBioHairColourLabel\" class=\"pohHeartDetailsLabel\">Hair Colour:</div>";
    tempHTML += "<div id=\"pohHeartDeatilsBioHairColourValue\" class=\"pohHeartDetailsValue\">" + interaction.heart.hairColourLabel + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div id=\"pohHeartDetailsBioEyeColourWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohHeartDeatilsBioEyeColourLabel\" class=\"pohHeartDetailsLabel\">Eye Colour:</div>";
    tempHTML += "<div id=\"pohHeartDeatilsBioEyeColourValue\" class=\"pohHeartDetailsValue\">" + interaction.heart.eyeColourLabel + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div class=\"clear\" /></div>";  //Bio

    tempHTML += "<div id=\"pohHeartDetailsProfileImageWrapper\"><img src=\"" + interaction.heart.imageUrl + "\" id=\"pohHeartDetailsProfileImage\" class=\"pohProfileImage\" /></div>";

    tempHTML += "<div class=\"clear\" />";

    tempHTML += "<div id=\"pohHeartDetailsTraitHeader\" class=\"pohSectionHeader\">Traits</div>";

    tempHTML += "<div id=\"pohHeartDetailsTraitAttractionWrapper\" class=\"pohHeartDetailsTraitCategoryWrapper\">";

    tempHTML += "<div id=\"pohHeartDetailsTraitAttractionHeader\" class=\"pohSectionSubHeader\">Attraction</div>";

    for (i = 0; i < interaction.heart.attractionTraits.length; i++) {

        tempHTML += "<div class=\"pohHeartDetailsTrait\" id=\"pohHeartDetailsAttractionTrait" + i + "\">" + interaction.heart.attractionTraits[i].label + "</div>";

    }

    tempHTML += "</div>";  //Attraction

    tempHTML += "<div id=\"pohHeartDetailsTraitReactionWrapper\" class=\"pohHeartDetailsTraitCategoryWrapper\">";

    tempHTML += "<div id=\"pohHeartDetailsTraitReactionHeader\" class=\"pohSectionSubHeader\">Reaction</div>";

    for (i = 0; i < interaction.heart.reactionTraits.length; i++) {

        tempHTML += "<div class=\"pohHeartDetailsTrait\" id=\"pohHeartDetailsReactionTrait" + i + "\">" + interaction.heart.reactionTraits[i].label + "</div>";

    }

    tempHTML += "</div>";  //Reaction

    tempHTML += "<div id=\"pohHeartDetailsTraitSpecialWrapper\" class=\"pohHeartDetailsTraitCategoryWrapper\">";

    tempHTML += "<div id=\"pohHeartDetailsTraitSpecialHeader\" class=\"pohSectionSubHeader\">Special</div>";

    for (i = 0; i < interaction.heart.specialTraits.length; i++) {

        tempHTML += "<div class=\"pohHeartDetailsTrait\" id=\"pohHeartDetailsSpecialTrait" + i + "\">" + interaction.heart.specialTraits[i].label + "</div>";

    }

    tempHTML += "</div>";  //Special

    tempHTML += "<div class=\"clear\" />";

    // tempHTML += "</div>";  //Traits





    // tempHTML += "<div id=\"pohHeartDetailsAttributeWrapper\" class=\"pohTextCell\">";

    tempHTML += "<div id=\"pohHeartDetailsAttributeHeader\" class=\"pohSectionHeader\">Attributes</div>";

    tempHTML += "<div id=\"pohHeartDetailsAttributePositiveWrapper\" class=\"pohHeartDetailsAttributeCategoryWrapper\">";

    tempHTML += "<div id=\"pohHeartDetailsAttributePositiveHeader\" class=\"pohSectionSubHeader\">Positive</div>";

    for (i = 0; i < interaction.heart.attributesPositive.length; i++) {

        tempHTML += "<div id=\"pohHeartDetailsAttributeWrapperPositive" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeLabelPositive" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + interaction.heart.attributesPositive[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeValuePositive" + i + "\" class=\"pohHeartDetailsAttributeValue\">" + interaction.heart.attributesPositive[i].value + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Positive

    tempHTML += "<div id=\"pohHeartDetailsAttributeNegativeWrapper\" class=\"pohHeartDetailsAttributeCategoryWrapper\">";

    tempHTML += "<div id=\"pohHeartDetailsAttributeNegativeHeader\" class=\"pohSectionSubHeader\">Negative</div>";

    for (i = 0; i < interaction.heart.attributesNegative.length; i++) {

        tempHTML += "<div id=\"pohHeartDetailsAttributeWrapperNegative" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeLabelNegative" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + interaction.heart.attributesNegative[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeValueNegative" + i + "\" class=\"pohHeartDetailsAttributeValue\">" + interaction.heart.attributesNegative[i].value + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Negative

    tempHTML += "<div id=\"pohHeartDetailsAttributeMetaWrapper\" class=\"pohHeartDetailsAttributeCategoryWrapper\">";

    tempHTML += "<div id=\"pohHeartDetailsAttributeMetaHeader\" class=\"pohSectionSubHeader\">Meta</div>";

    for (i = 0; i < interaction.heart.attributesMeta.length; i++) {

        tempHTML += "<div id=\"pohHeartDetailsAttributeWrapperMeta" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeLabelMeta" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + interaction.heart.attributesMeta[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeValueMeta" + i + "\" class=\"pohHeartDetailsAttributeValue\">" + interaction.heart.attributesMeta[i].value + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Meta

    tempHTML += "<div class=\"clear\"/>"
    
    if (interaction.unsolicitedAdvice) {

        tempHTML += "<div id=\"pohHeartDetailsUnsolicitedAdvice\" class=\"pohNewsItemAction\">Send Unsolicited Advice</div>"

    }
    
    tempHTML += "</div>";  //Characteristics


    tempHTML += "<div id=\"pohHeartDetailsConnectionsWrapper\" class=\"pohTextCell\">";

    tempHTML += "<div id=\"pohHeartDetailsConnectionsTabs\"><ul>";
    tempHTML += "<li><a href=\"#tabs-connections\">Connections (" + interaction.heart.connections.length + ")</a></li>";
    tempHTML += "<li><a href=\"#tabs-relationships\">Relationships (" + interaction.heart.relationships.length + ")</a></li>";
    tempHTML += "</ul>";

    tempHTML += "<div id=\"tabs-connections\" class=\"pohHeartDetailsConnectionsTab\">";


    for (i = 0; i < interaction.heart.connections.length; i++) {



        tempHTML += "<div id=\"pohHeartDetailsConnection" + i + "\" class=\"pohHeartDetailsConnection\">";
        tempHTML += "<div class=\"pohHeartDetailsConnectionName\"><strong>" + interaction.heart.connections[i].name + ": </strong>" + interaction.heart.connections[i].trackStage + "</div>";
        tempHTML += "<div class=\"pohHeartDetailsConnectionStats\">";
        tempHTML += "<div class=\"pohHeartDetailsConnectionPassion\"><strong>Passion: </strong>" + interaction.heart.connections[i].passion + "</div>";
        tempHTML += "<div class=\"pohHeartDetailsConnectionAttraction\"><strong>Attraction: </strong>" + interaction.heart.connections[i].attraction + "</div>";
        tempHTML += "<div class=\"pohHeartDetailsConnectionCompatibility\"><strong>Compatibility (Base/Current): </strong>" + +interaction.heart.connections[i].baseCompatibility + " / " + interaction.heart.connections[i].currentCompatibility + "</div>";
        tempHTML += "<div class=\"clear\" />";
        tempHTML += "</div>";
        tempHTML += "</div>";

    }

    //tempHTML += "</table>"

    tempHTML += "</div>";  //Connections

    tempHTML += "<div id=\"tabs-relationships\" class=\"pohHeartDetailsConnectionsTab\">";

    for (i = 0; i < interaction.heart.relationships.length; i++) {

        tempHTML += "<div id=\"pohHeartDetailsRelationship" + i + "\" class=\"pohAliceDeskRelationship\"><span class=\"pohAliceDeskRelationshipNames\"><strong>" + interaction.heart.relationships[i].heart2Name + ": </strong>" + interaction.heart.relationships[i].strength + " (" + interaction.heart.relationships[i].typeLabel + ")</span><br/><strong>Last Date: </strong>" + interaction.heart.relationships[i].lastDate + ".  <strong>Longevity: </strong>" + interaction.heart.relationships[i].longevity + "  <strong>Stability: </strong>" + interaction.heart.relationships[i].stability + "</div>";

    }

    tempHTML += "</div>";  //Relationships

    tempHTML += "</div>" //Tabs

    tempHTML += "</div>"; //Relationships/Connections wrapper


    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "</div>"  //Game Area

    tempHTML += "<div id=\"pohBottomNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohReturnToAliceDesk\" class=\"pohNavButton\">&lt;&lt; Alice's Desk</div>";

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohHeartDetailsImageLargeWrapper\" class=\"pohLandscapeBackdrop\"><img class=\"pohLandscapeBackdropImage\" src=\"" + interaction.heart.imageLargeUrl + "\" /></div>";

    $("body").html(tempHTML);

    $("#pohHeartDetailsConnectionsTabs").tabs();

    erg.utilities.hookupIDWithClicksEvent("pohReturnToAliceDesk", erg.constants["eventPoHViewHeartsList"]);

    //Species

    erg.utilities.hookupIDWithDialogueClick("pohHeartDetailsBioSpeciesWrapper", "<p>" + interaction.heart.speciesDescription + "</p><p><a href=\"" + interaction.heart.speciesWikiLink + "\" target=\"_new\">" + interaction.heart.speciesLabel + " on TohouWiki</a></p>", interaction.heart.speciesLabel);


    //Traits

    for (i = 0; i < interaction.heart.attractionTraits.length; i++) {

        tempDialogueHTML = "<p>This is an <strong>attraction</strong> trait.  It modifies the degree to which this character is attracted to others based on the following criteria:</p>";

        if (interaction.heart.attractionTraits[i].type === erg.constants["pohTraitTypeAttractionModifierConditional"] && interaction.heart.attractionTraits[i].target !== erg.constants["pohAttractionTargetTier"] && interaction.heart.attractionTraits[i].target !== erg.constants["pohTraitSpecialShipCaptain"]) {  //Special trait hack - last term

            tempDialogueHTML += "<p><strong>Bonus Attraction: </strong>" + interaction.heart.attractionTraits[i].magnitude + "</p>";
            tempDialogueHTML += "<p>For characters whose <strong>" + interaction.heart.attractionTraits[i].targetLabel + "</strong> is in this list:</p>";
            tempDialogueHTML += "<ul>";

            for (j = 0; j < interaction.heart.attractionTraits[i].positive.length; j++) {

                tempDialogueHTML += "<li>" + interaction.heart.attractionTraits[i].positive[j] + "</li>";

            }

            tempDialogueHTML += "</ul>";

        }


        //################################################ SPECIAL TRAIT HACK #################################################################################

        if (interaction.heart.attractionTraits[i].type === erg.constants["pohTraitTypeAttractionModifierConditional"] && interaction.heart.attractionTraits[i].target === erg.constants["pohTraitSpecialShipCaptain"]) {  //Special trait hack - last term

            tempDialogueHTML += "<p><strong>Bonus Attraction: </strong>" + interaction.heart.attractionTraits[i].magnitude + "</p>";
            tempDialogueHTML += "<p>For characters with appropriate Special Traits (such as Ship's Captain).</p>";

        }

        //############################################## END SPECIAL TRAIT HACK ###############################################################################

        if (interaction.heart.attractionTraits[i].type === erg.constants["pohTraitTypeAttractionModifierConditional"] && interaction.heart.attractionTraits[i].target === erg.constants["pohAttractionTargetTier"]) {

            tempDialogueHTML += "<p><strong>Bonus Attraction: </strong>" + interaction.heart.attractionTraits[i].magnitude + "</p>";

            if (interaction.heart.attractionTraits[i].subTarget === erg.constants["pohAttractionSubtargetTierLower"]) {

                tempDialogueHTML += "<p>For each <strong>" + interaction.heart.attractionTraits[i].targetLabel + "</strong> lower than this character.</p>";

            }

            if (interaction.heart.attractionTraits[i].subTarget === erg.constants["pohAttractionSubtargetTierHigher"]) {

                tempDialogueHTML += "<p>For each <strong>" + interaction.heart.attractionTraits[i].targetLabel + "</strong> higher than this character.</p>";

            }

            if (interaction.heart.attractionTraits[i].subTarget === erg.constants["pohAttractionSubtargetTierEqual"]) {

                tempDialogueHTML += "<p>For <strong>all</strong> characters, then:</p>";
                tempDialogueHTML += "<p><strong>Attraction Penalty: </strong>" + interaction.heart.attractionTraits[i].magnitudeVariable + "</p>";
                tempDialogueHTML += "<p>For each <strong>" + interaction.heart.attractionTraits[i].targetLabel + "</strong> lower or higher than this character.</p>";

            }

        }

        if (interaction.heart.attractionTraits[i].type === erg.constants["pohTraitTypeAttractionModifierAutomaticBuff"]) {

            tempDialogueHTML += "<p><strong>Bonus Attraction: </strong>" + interaction.heart.attractionTraits[i].magnitude + "</p>";
            tempDialogueHTML += "<p>For <strong>all</strong> characters.</p>";

        }

        if (interaction.heart.attractionTraits[i].type === erg.constants["pohTraitTypeAttractionModifierAutomaticPenalty"]) {

            tempDialogueHTML += "<p><strong>Attraction Penalty: </strong>" + interaction.heart.attractionTraits[i].magnitude + "</p>";
            tempDialogueHTML += "<p>For <strong>all</strong> characters.</p>";

        }

        erg.utilities.hookupIDWithDialogueClick("pohHeartDetailsAttractionTrait" + i, tempDialogueHTML, interaction.heart.attractionTraits[i].label);

    }

    for (i = 0; i < interaction.heart.reactionTraits.length; i++) {

        tempDialogueHTML = "<p><em>" + interaction.heart.reactionTraits[i].description + "</em></p>";

        tempDialogueHTML += "<p>This is a <strong>reaction</strong> trait.  It modifies this character's change in Passion for another character on a date when that character rolls the following attributes:</p>";

        for (j = 0; j < interaction.heart.reactionTraits[i].attributes.length; j++) {

            tempDialogueHTML += "<p><strong>" + interaction.heart.reactionTraits[i].attributes[j].label + "</strong></p>";
            tempDialogueHTML += "<p><strong>Success: </strong>" + interaction.heart.reactionTraits[i].attributes[j].success;
            tempDialogueHTML += "<br/><strong>Failure: </strong>" + interaction.heart.reactionTraits[i].attributes[j].fail + "</p>";

        }

        erg.utilities.hookupIDWithDialogueClick("pohHeartDetailsReactionTrait" + i, tempDialogueHTML, interaction.heart.reactionTraits[i].label);

    }

    for (i = 0; i < interaction.heart.specialTraits.length; i++) {

        tempDialogueHTML = "<p><em>" + interaction.heart.specialTraits[i].description + "</em></p>";

        tempDialogueHTML += "<p>" + interaction.heart.specialTraits[i].effectText + "</p>";

        erg.utilities.hookupIDWithDialogueClick("pohHeartDetailsSpecialTrait" + i, tempDialogueHTML, interaction.heart.specialTraits[i].label);

    }


    //Attributes

    for (i = 0; i < interaction.heart.attributesPositive.length; i++) {

        tempDialogueHTML = "<p>" + interaction.heart.attributesPositive[i].description + "</p>";

        tempDialogueHTML += "<p>This is a <strong>positive</strong> attribute.  By default, making a " + interaction.heart.attributesPositive[i].label + " roll during a date changes the other character's Passion by:</p>";
        tempDialogueHTML += "<p><strong>Success: </strong>" + erg.constants["pohAttributeTestDefaultPositiveSuccessChange"];
        tempDialogueHTML += "<br/><strong>Failure: </strong>" + erg.constants["pohAttributeTestDefaultPositiveFailChange"] + "</p>";

        erg.utilities.hookupIDWithDialogueClick("pohHeartDetailsAttributeWrapperPositive" + i, tempDialogueHTML, interaction.heart.attributesPositive[i].label);

    }

    for (i = 0; i < interaction.heart.attributesNegative.length; i++) {

        tempDialogueHTML = "<p>" + interaction.heart.attributesNegative[i].description + "</p>";

        tempDialogueHTML += "<p>This is a <strong>negative</strong> attribute.  By default, making a " + interaction.heart.attributesNegative[i].label + " roll during a date changes the other character's Passion by:</p>";
        tempDialogueHTML += "<p><strong>Success: </strong>" + erg.constants["pohAttributeTestDefaultNegativeSuccessChange"];
        tempDialogueHTML += "<br/><strong>Failure: </strong>" + erg.constants["pohAttributeTestDefaultNegativeFailChange"] + "</p>";

        erg.utilities.hookupIDWithDialogueClick("pohHeartDetailsAttributeWrapperNegative" + i, tempDialogueHTML, interaction.heart.attributesNegative[i].label);

    }

    for (i = 0; i < interaction.heart.attributesMeta.length; i++) {

        tempDialogueHTML = "<p>" + interaction.heart.attributesMeta[i].description + "</p>";

        erg.utilities.hookupIDWithDialogueClick("pohHeartDetailsAttributeWrapperMeta" + i, tempDialogueHTML, interaction.heart.attributesMeta[i].label);

    }

    //Relationships

    for (i = 0; i < interaction.heart.relationships.length; i++) {

        erg[erg.constants["pohUIFunctions"]][erg.constants["pohUIFunctionHookupRelationshipDialogue"]]("pohHeartDetailsRelationship" + i, interaction.heart.relationships[i]);

    }

    //Connections

    for (i = 0; i < interaction.heart.connections.length; i++) {

        erg.utilities.hookupIDWithClicksEvent("pohHeartDetailsConnection" + i, erg.constants["eventPoHViewHeart"], { key: interaction.heart.connections[i].key });

    }

    //Main Menu Button

    erg.utilities.addActionButtonAndHookUp({ text: "Menu", event: erg.constants["eventShowMainMenu"], args: {} }, "pohMainMenuButton", "pohNavButton");

    //Help Button

    erg.utilities.addActionButtonAndHookUp({ text: "Help", event: erg.constants["eventPoHViewHelp"], args: {} }, "pohHelpButton", "pohNavButton");

    //Unsolicited Advice

    tempDialogueHTML = "<p>Give unsolicited advice to " + interaction.heart.name + "?</p><p>This will cost <strong>" + interaction.unsolicitedAdviceCost + "</strong> Prestige (current Prestige: " + interaction.prestige + ")</p>";

    erg.utilities.hookupIDWithDialogueClick("pohHeartDetailsUnsolicitedAdvice", tempDialogueHTML, "Unsolicited Advice", [{ id: "pohHeartDetailsUnsolicitedAdviceGive", class: "popupDialogueAction", event: erg.constants["eventPoHUnsolicitedAdvice"], args: { heartKey: interaction.heart.key }, text: "Give Advice"}]);

}




//################################### NEWS ITEM RENDERER #################################################


erg.viewRenderers[erg.constants["interactionTypePoHViewNewsItem"]] = function (interaction) {

    var i;

    var tempHTML = "";

    //$("body").css("background-image", "none");
    //$("body").css("background-color", "#536eb5");

    tempHTML += "<div id=\"pohTopNav\" class=\"pohNavBar\">";

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohGameArea\" class=\"pohNewsItemGameArea\">";

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "<div id=\"pohNewsItemTextWrapper\">";

    tempHTML += "<div id=\"pohNewsItemHeader\" class=\"pohTextCell\">" + interaction.title + "</div>";

    tempHTML += "<div id=\"pohNewsItemText\" class=\"pohTextCell\">";

    tempHTML += "<div id=\"pohNewsItemImagesWrapper\">";

    if (interaction.imageSmall2) {

        tempHTML += "<div class=\"pohNewsItemImageSmallWrapper\" id=\"pohNewsItemImageSmallWrapper1\"><img class=\"pohNewsItemImageSmall\" id=\"pohNewsItemImageSmall1\" src=\"" + interaction.imageSmall + "\" /></div>";
        tempHTML += "<div class=\"pohNewsItemImageSmallWrapper\" id=\"pohNewsItemImageSmallWrapper2\"><img class=\"pohNewsItemImageSmall\" id=\"pohNewsItemImageSmall2\" src=\"" + interaction.imageSmall2 + "\" /></div>";
        tempHTML += "<div class=\"clear\" />";

    } else {

        tempHTML += "<div class=\"pohNewsItemImageSmallWrapper\" id=\"pohNewsItemImageSmallWrapperSolo\"><img class=\"pohNewsItemImageSmall\" id=\"pohNewsItemImageSmallSolo\" src=\"" + interaction.imageSmall + "\" /></div>";

    }

    tempHTML += "</div>";

    tempHTML += interaction.text + "</div>";

    if (interaction.adviceDisplay) {

        tempHTML += "<div id=\"pohNewsItemAdvice\" class=\"pohTextCell\">";
        tempHTML += "<div id=\"pohNewsItemAdviceHeader\" class=\"pohSectionHeader\">Advice</div>";
        tempHTML += "<p>Dear " + interaction.adviceDisplay.heartName + ",</p>";
        tempHTML += "<p>I think it's best if this week you spend some time with <strong>" + interaction.adviceDisplay.dateHeartName + ".</strong></p>";

        if (interaction.adviceDisplay.datePlan.length > 0) {

            tempHTML += "<p>If she acceps you, you should take her on the following outings:</p>";
            tempHTML += "<ul class=\"pohNewsItemAdviceDatePlanList\">";

            for (i = 0; i < interaction.adviceDisplay.datePlan.length; i++) {

                tempHTML += "<li>" + interaction.adviceDisplay.datePlan[i] + "</li>";

            }

            tempHTML += "</ul>";


        }

        if (interaction.adviceDisplay.extracurricularString) {

            tempHTML += "<p>In your free time this week, I think you'll find it profitable to...<strong>" + interaction.adviceDisplay.extracurricularString + "</strong></p>";

        }

        tempHTML += "<p>Yours faithfully,</p><p>Alice Margatroid</p>";

        tempHTML += "</div>";

    }

    for (i = 0; i < interaction.actions.length; i++) {

        tempHTML += "<div id=\"" + interaction.actions[i].id + "\" class=\"pohNewsItemAction\">" + interaction.actions[i].text + "</div>";

    }

    tempHTML += "</div>";

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "</div>"  //Game Area

    tempHTML += "<div id=\"pohBottomNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohReturnToAliceDesk\" class=\"pohNavButton\">&lt;&lt; Alice's Desk</div>";

    tempHTML += "</div>";


    tempHTML += "<div id=\"pohNewsItemImageLargeWrapper\" class=\"pohLandscapeBackdrop\"><img class=\"pohLandscapeBackdropImage\" src=\"" + interaction.image + "\" /></div>";

    $("body").html(tempHTML);

    erg.utilities.hookupIDWithClicksEvent("pohReturnToAliceDesk", erg.constants["eventPoHViewHeartsList"]);

    for (i = 0; i < interaction.actions.length; i++) {

        erg.utilities.hookupIDWithClicksEvent(interaction.actions[i].id, interaction.actions[i].event, interaction.actions[i].args);

    }

    //Main Menu Button

    erg.utilities.addActionButtonAndHookUp({ text: "Menu", event: erg.constants["eventShowMainMenu"], args: {} }, "pohMainMenuButton", "pohNavButton");

    //Help Button

    erg.utilities.addActionButtonAndHookUp({ text: "Help", event: erg.constants["eventPoHViewHelp"], args: {} }, "pohHelpButton", "pohNavButton");



}


//################################### END GAME RENDERER #################################################


erg.viewRenderers[erg.constants["interactionTypePoHEndGame"]] = function (interaction) {

    var tempHTML = "";

    var i;

    tempHTML += "<div id=\"pohTopNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohEndGameTitle\" class=\"pohTopNavTitle\">Puppeteer of Hearts</div>";

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohGameArea\" class=\"pohCharacterSheetGameArea\">";

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "<div id=\"pohEndGameWrapper\">";

    tempHTML += "<div id=\"pohEndGameHeaderWrapper\" class=\"pohTextCell\">Final Prestige: " + interaction.prestige + "</div>";

    if (interaction.trueLove.length > 0) {

        tempHTML += "<div id=\"pohEndGameTrueLoveWrapper\">";

        tempHTML += "<div id=\"pohEndGameTrueLoveHeader\">True Love</div>";

        for (i = 0; i < interaction.trueLove.length; i++) {

            tempHTML += "<div id=\"pohEndGameTrueLoveRelationship" + i + "\" class=\"pohEndGameRelationshipTrueLove\">";

            tempHTML += "<div class=\"pohEndGameRelationshipHeart1ImageWrapper\" id=\"pohEndGameTrueLoveHeart1ImageWrapper" + i + "\"><img src=\"" + interaction.trueLove[i].heart1Image + "\" class=\"pohEndGameRelationshipImage\" /></div>";

            tempHTML += "<div class=\"pohEndGameRelationshipHeart2ImageWrapper\" id=\"pohEndGameTrueLoveHeart2ImageWrapper" + i + "\"><img src=\"" + interaction.trueLove[i].heart2Image + "\" class=\"pohEndGameRelationshipImage\" /></div>";

            tempHTML += "<div class=\"pohEndGameRelationshipTextWrapper\" id=\"pohEndGameTrueLoveTextWrapper" + i + "\">";

            tempHTML += "<div class=\"pohEndGameRelationshipHeartName\" id=\"pohEndGameTrueLoveHeart1" + i + "\">" + interaction.trueLove[i].heart1Name + "</div>";

            tempHTML += "<div class=\"pohEndGameRelationshipHeartName\" id=\"pohEndGameTrueLoveHeart2" + i + "\">" + interaction.trueLove[i].heart2Name + "</div>";

            tempHTML += "</div>";

            tempHTML += "<div class=\"clear\"></div></div>";

        }

        tempHTML += "</div>"; //True Love wrapper

    }

    if (interaction.couple.length > 0) {

        tempHTML += "<div id=\"pohEndGameCoupleWrapper\">";

        tempHTML += "<div id=\"pohEndGameCoupleHeader\">Couples</div>";

        for (i = 0; i < interaction.couple.length; i++) {

            tempHTML += "<div id=\"pohEndGameCoupleRelationship" + i + "\" class=\"pohEndGameRelationshipCouple\">";

            tempHTML += "<div class=\"pohEndGameRelationshipHeart1ImageWrapper\" id=\"pohEndGameCoupleHeart1ImageWrapper" + i + "\"><img src=\"" + interaction.couple[i].heart1Image + "\" class=\"pohEndGameRelationshipImage\" /></div>";

            tempHTML += "<div class=\"pohEndGameRelationshipHeart2ImageWrapper\" id=\"pohEndGameCoupleHeart2ImageWrapper" + i + "\"><img src=\"" + interaction.couple[i].heart2Image + "\" class=\"pohEndGameRelationshipImage\" /></div>";

            tempHTML += "<div class=\"pohEndGameRelationshipTextWrapper\" id=\"pohEndGameCoupleTextWrapper" + i + "\">";

            tempHTML += "<div class=\"pohEndGameRelationshipHeartName\" id=\"pohEndGameCoupleHeart1" + i + "\">" + interaction.couple[i].heart1Name + "</div>";

            tempHTML += "<div class=\"pohEndGameRelationshipHeartName\" id=\"pohEndGameCoupleHeart2" + i + "\">" + interaction.couple[i].heart2Name + "</div>";

            tempHTML += "</div>";



            tempHTML += "<div class=\"clear\"></div></div>";

        }

        tempHTML += "</div>"; //Couple wrapper

    }

    tempHTML += "<div class=\"clear\" /></div>"  //End Game Wrapper

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "</div>"  //Game Area

    tempHTML += "<div id=\"pohBottomNav\" class=\"pohNavBar\">";

    tempHTML += "</div>";


    tempHTML += "<div id=\"pohEndGameImageLargeWrapper\" class=\"pohLandscapeBackdrop\"><img class=\"pohLandscapeBackdropImage\" src=\"poh/images/backdrops/endGame.jpg\" /></div>";

    $("body").html(tempHTML);


    //Main Menu Button

    erg.utilities.addActionButtonAndHookUp({ text: "Menu", event: erg.constants["eventShowMainMenu"], args: {} }, "pohMainMenuButton", "pohNavButton");

    //Help Button

    erg.utilities.addActionButtonAndHookUp({ text: "Help", event: erg.constants["eventPoHViewHelp"], args: {} }, "pohHelpButton", "pohNavButton");

}


//################################### ADVICE RENDERER #################################################

erg.viewRenderers[erg.constants["interactionTypePoHAdvice"]] = function (interaction) {

    var tempHTML = "";

    var tempDialogueHTML = "";

    var tempFunction;

    var i;

    var j;

    //$("body").css("background-image", "none");
    //$("body").css("background-color", "#536eb5");

    tempHTML += "<div id=\"pohTopNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohAdviceTitle\" class=\"pohTopNavTitle\">Advice for " + interaction.heart.preferredName + "</div>";

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohGameArea\" class=\"pohCharacterSheetGameArea\">";

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";


    tempHTML += "<div id=\"pohAdviceAliceLetterHead\" class=\"pohTextCell\">"

    tempHTML += "<p>Dear " + interaction.heart.preferredName + ",</p>";

    tempHTML += "<p>I think it's best if this week you spend some time with <select id=\"pohAdviceDateHeartSelect\">";

    for (i = 0; i < interaction.heartsList.length; i++) {

        tempHTML += "<option value=\"" + interaction.heartsList[i].key + "\"";

        if (interaction.lastDateAdvice && interaction.lastDateAdvice.dateHeartKey === interaction.heartsList[i].key) {

            tempHTML += " selected=\"selected\"";

        }

        tempHTML += ">" + interaction.heartsList[i].preferredName + "</option>";

    }

    tempHTML += "</select></p>";

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohAdviceHeartsWrapper\"  class=\"pohTextCell\">";

    tempHTML += "<div id=\"pohAdviceHeart1Wrapper\">";

    tempHTML += "<div id=\"pohAdviceHeart1Name\" class=\"pohSectionHeader\">" + interaction.heart.preferredName + "</div>";

    tempHTML += "<div id=\"pohAdviceHeart1BioWrapper\" class=\"pohAdviceHeartBioWrapper\">";

    tempHTML += "<div id=\"pohAdviceHeart1BioTierWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohAdviceHeart1BioTierLabel\" class=\"pohHeartDetailsLabel\">Tier:</div>";
    tempHTML += "<div id=\"pohAdviceHeart1BioTierValue\" class=\"pohHeartDetailsValue\">" + interaction.heart.tierLabel + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div id=\"pohAdviceHeart1BioSpeciesWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohAdviceHeart1BioSpeciesLabel\" class=\"pohHeartDetailsLabel\">Species:</div>";
    tempHTML += "<div id=\"pohAdviceHeart1BioSpeciesValue\" class=\"pohHeartDetailsValue\">" + interaction.heart.speciesLabel + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div id=\"pohAdviceHeart1BioHairLengthWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohAdviceHeart1BioHairLengthLabel\" class=\"pohHeartDetailsLabel\">Hair Length:</div>";
    tempHTML += "<div id=\"pohAdviceHeart1BioHairLengthValue\" class=\"pohHeartDetailsValue\">" + interaction.heart.hairLengthLabel + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div id=\"pohAdviceHeart1BioHairColourWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohAdviceHeart1BioHairColourLabel\" class=\"pohHeartDetailsLabel\">Hair Colour:</div>";
    tempHTML += "<div id=\"pohAdviceHeart1BioHairColourValue\" class=\"pohHeartDetailsValue\">" + interaction.heart.hairColourLabel + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div id=\"pohAdviceHeart1BioEyeColourWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohAdviceHeart1BioEyeColourLabel\" class=\"pohHeartDetailsLabel\">Eye Colour:</div>";
    tempHTML += "<div id=\"pohAdviceHeart1BioEyeColourValue\" class=\"pohHeartDetailsValue\">" + interaction.heart.eyeColourLabel + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div class=\"clear\" /></div>";

    tempHTML += "<div id=\"pohAdviceHeart1ProfileImageWrapper\"><img src=\"" + interaction.heart.imageUrl + "\" id=\"pohAdviceHeartDetailsProfileImage\" class=\"pohProfileImage\" /></div>";

    tempHTML += "<div class=\"clear\" />";

    //Attributes
    tempHTML += "<div id=\"pohAdviceHeart1AttributePositiveWrapper\" class=\"pohHeartDetailsAttributeCategoryWrapper\">";

    tempHTML += "<div id=\"pohAdviceHeart1AttributePositiveHeader\" class=\"pohSectionSubHeader\">Positive</div>";

    for (i = 0; i < interaction.heart.attributesPositive.length; i++) {

        tempHTML += "<div id=\"pohAdviceHeart1AttributeWrapperPositive" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeLabelPositive" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + interaction.heart.attributesPositive[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeValuePositive" + i + "\" class=\"pohHeartDetailsAttributeValue\">" + interaction.heart.attributesPositive[i].value + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Positive

    tempHTML += "<div id=\"pohAdviceHeart1AttributeNegativeWrapper\" class=\"pohHeartDetailsAttributeCategoryWrapper\">";

    tempHTML += "<div id=\"pohAdviceHeart1AttributeNegativeHeader\" class=\"pohSectionSubHeader\">Negative</div>";

    for (i = 0; i < interaction.heart.attributesNegative.length; i++) {

        tempHTML += "<div id=\"pohAdviceHeart1AttributeWrapperNegative" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeLabelNegative" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + interaction.heart.attributesNegative[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeValueNegative" + i + "\" class=\"pohHeartDetailsAttributeValue\">" + interaction.heart.attributesNegative[i].value + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Negative

    tempHTML += "<div id=\"pohAdviceHeart1AttributeMetaWrapper\" class=\"pohHeartDetailsAttributeCategoryWrapper\">";

    tempHTML += "<div id=\"pohAdviceHeart1AttributeMetaHeader\" class=\"pohSectionSubHeader\">Meta</div>";

    for (i = 0; i < interaction.heart.attributesMeta.length; i++) {

        tempHTML += "<div id=\"pohAdviceHeart1AttributeWrapperMeta" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeLabelMeta" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + interaction.heart.attributesMeta[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeValueMeta" + i + "\" class=\"pohHeartDetailsAttributeValue\">" + interaction.heart.attributesMeta[i].value + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Meta

    tempHTML += "<div class=\"clear\"/>";  //Attributes


    //Reactions

    tempHTML += "<div id=\"pohAdviceHeart1AttributeReactionPositiveWrapper\" class=\"pohHeartDetailsAttributeReactionCategoryWrapper\">";

    tempHTML += "<div id=\"pohAdviceHeart1AttributeReactionPositiveHeader\" class=\"pohSectionSubHeader\">Positive</div>";

    for (i = 0; i < interaction.heart.attributesPositive.length; i++) {

        tempHTML += "<div id=\"pohAdviceHeart1AttributeReactionWrapperPositive" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeReactionLabelPositive" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + interaction.heart.attributesPositive[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeReactionValuePositive" + i + "\" class=\"pohHeartDetailsAttributeValue\">" + interaction.heart.attributesPositive[i].successReaction + " / " + interaction.heart.attributesPositive[i].failReaction + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Positive

    tempHTML += "<div id=\"pohAdviceHeart1AttributeReactionNegativeWrapper\" class=\"pohHeartDetailsAttributeReactionCategoryWrapper\">";

    tempHTML += "<div id=\"pohAdviceHeart1AttributeReactionNegativeHeader\" class=\"pohSectionSubHeader\">Negative</div>";

    for (i = 0; i < interaction.heart.attributesNegative.length; i++) {

        tempHTML += "<div id=\"pohAdviceHeart1AttributeReactionWrapperNegative" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeReactionLabelNegative" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + interaction.heart.attributesNegative[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeReactionValueNegative" + i + "\" class=\"pohHeartDetailsAttributeValue\">" + interaction.heart.attributesNegative[i].successReaction + " / " + interaction.heart.attributesNegative[i].failReaction + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Negative

    tempHTML += "<div class=\"clear\"/>";  //Reactions

    tempHTML += "<div id=\"pohAdviceHeart1Connection\" class=\"pohAdviceConnection\"></div>";

    //Traits

    tempHTML += "<div id=\"pohAdviceHeart1TraitAttractionWrapper\" class=\"pohHeartDetailsTraitCategoryWrapper\">";

    tempHTML += "<div id=\"pohAdviceHeart1TraitAttractionHeader\" class=\"pohSectionSubHeader\">Attraction</div>";

    for (i = 0; i < interaction.heart.attractionTraits.length; i++) {

        tempHTML += "<div class=\"pohHeartDetailsTrait\" id=\"pohAdviceHeart1AttractionTrait" + i + "\">" + interaction.heart.attractionTraits[i].label + "</div>";

    }

    tempHTML += "</div>";  //Attraction

    tempHTML += "<div id=\"pohAdviceHeart1TraitReactionWrapper\" class=\"pohHeartDetailsTraitCategoryWrapper\">";

    tempHTML += "<div id=\"pohAdviceHeart1TraitReactionHeader\" class=\"pohSectionSubHeader\">Reaction</div>";

    for (i = 0; i < interaction.heart.reactionTraits.length; i++) {

        tempHTML += "<div class=\"pohHeartDetailsTrait\" id=\"pohAdviceHeart1ReactionTrait" + i + "\">" + interaction.heart.reactionTraits[i].label + "</div>";

    }

    tempHTML += "</div>";  //Reaction

    tempHTML += "<div id=\"pohAdviceHeart1TraitRelationshipWrapper\" class=\"pohHeartDetailsTraitCategoryWrapper\">";

    tempHTML += "<div id=\"pohAdviceHeart1TraitRelationshipHeader\" class=\"pohSectionSubHeader\">Special</div>";

    for (i = 0; i < interaction.heart.specialTraits.length; i++) {

        tempHTML += "<div class=\"pohHeartDetailsTrait\" id=\"pohAdviceHeart1SpecialTrait" + i + "\">" + interaction.heart.specialTraits[i].label + "</div>";

    }

    tempHTML += "</div>";  //Special

    tempHTML += "<div class=\"clear\" />";




    tempHTML += "</div>";  //Heart1



    tempHTML += "<div id=\"pohAdviceHeart2Wrapper\"></div>";


    tempHTML += "<div class=\"clear\" />";
    tempHTML += "</div>"; //Hearts Wrapper


    tempHTML += "<div id=\"pohAdviceAliceLetterDatePlan\" class=\"pohTextCell\">";

    tempHTML += "<p>If she accepts you, you should take her on the following outings (<em>choose up to " + interaction.dateEventCap + "</em>):</p>";

    tempHTML += "<div class=\"pohAdviceAttributeTestWrapper\" id=\"pohAdviceClevernessTests\">";
    tempHTML += "<div id=\"pohAdviceClevernessTestsHeader\" class=\"pohSectionSubHeader\">Cleverness</div>";

    for (i = 0; i < interaction.clevernessTests.length; i++) {

        tempHTML += "<div class=\"pohAdviceAttributeTest\"><label><input type=\"checkbox\" class=\"pohAdviceAttributeTestCheckbox\" id=\"pohAdviceClevernessTestCheckbox" + i + "\" value=\"" + interaction.clevernessTests[i].key + "\" /> " + interaction.clevernessTests[i].title + " (" + interaction.clevernessTests[i].heart2Attribute + ")</label></div>";

    }


    tempHTML += "</div>"; //Cleverness

    tempHTML += "<div class=\"pohAdviceAttributeTestWrapper\" id=\"pohAdviceCourageTests\">";
    tempHTML += "<div id=\"pohAdviceCourageTestsHeader\" class=\"pohSectionSubHeader\">Courage</div>";

    for (i = 0; i < interaction.courageTests.length; i++) {

        tempHTML += "<div class=\"pohAdviceAttributeTest\"><label><input type=\"checkbox\" class=\"pohAdviceAttributeTestCheckbox\" id=\"pohAdviceCourageTestCheckbox" + i + "\" value=\"" + interaction.courageTests[i].key + "\" /> " + interaction.courageTests[i].title + " (" + interaction.courageTests[i].heart2Attribute + ")</label></div>";

    }


    tempHTML += "</div>"; //Courage

    tempHTML += "<div class=\"pohAdviceAttributeTestWrapper\" id=\"pohAdviceExpressionTests\">";
    tempHTML += "<div id=\"pohAdviceExpressionTestsHeader\" class=\"pohSectionSubHeader\">Expression</div>";

    for (i = 0; i < interaction.expressivenessTests.length; i++) {

        tempHTML += "<div class=\"pohAdviceAttributeTest\"><label><input type=\"checkbox\" class=\"pohAdviceAttributeTestCheckbox\" id=\"pohAdviceExpressionTestCheckbox" + i + "\" value=\"" + interaction.expressivenessTests[i].key + "\" /> " + interaction.expressivenessTests[i].title + " (" + interaction.expressivenessTests[i].heart2Attribute + ")</label></div>";

    }


    tempHTML += "</div>"; //Expression

    tempHTML += "<div class=\"pohAdviceAttributeTestWrapper\" id=\"pohAdviceSociabilityTests\">";
    tempHTML += "<div id=\"pohAdviceSociabilityTestsHeader\" class=\"pohSectionSubHeader\">Sociability</div>";

    for (i = 0; i < interaction.sociabilityTests.length; i++) {

        tempHTML += "<div class=\"pohAdviceAttributeTest\"><label><input type=\"checkbox\" class=\"pohAdviceAttributeTestCheckbox\" id=\"pohAdviceSociabilityTestCheckbox" + i + "\" value=\"" + interaction.sociabilityTests[i].key + "\" /> " + interaction.sociabilityTests[i].title + " (" + interaction.sociabilityTests[i].heart2Attribute + ")</label></div>";

    }


    tempHTML += "</div>"; //Sociability

    tempHTML += "<div class=\"pohAdviceAttributeTestWrapper\" id=\"pohAdviceHubrisTests\">";
    tempHTML += "<div id=\"pohAdviceHubrisTestsHeader\" class=\"pohSectionSubHeader\">Hubris</div>";

    for (i = 0; i < interaction.hubrisTests.length; i++) {

        tempHTML += "<div class=\"pohAdviceAttributeTest\"><label><input type=\"checkbox\" class=\"pohAdviceAttributeTestCheckbox\" id=\"pohAdviceHubrisTestCheckbox" + i + "\" value=\"" + interaction.hubrisTests[i].key + "\" /> " + interaction.hubrisTests[i].title + " (" + interaction.hubrisTests[i].heart2Attribute + ")</label></div>";

    }


    tempHTML += "</div>"; //Hubris

    tempHTML += "<div class=\"pohAdviceAttributeTestWrapper\" id=\"pohAdviceJealousyTests\">";
    tempHTML += "<div id=\"pohAdviceJealousyTestsHeader\" class=\"pohSectionSubHeader\">Jealousy</div>";

    for (i = 0; i < interaction.jealousyTests.length; i++) {

        tempHTML += "<div class=\"pohAdviceAttributeTest\"><label><input type=\"checkbox\" class=\"pohAdviceAttributeTestCheckbox\" id=\"pohAdviceJealousyTestCheckbox" + i + "\" value=\"" + interaction.jealousyTests[i].key + "\" /> " + interaction.jealousyTests[i].title + " (" + interaction.jealousyTests[i].heart2Attribute + ")</label></div>";

    }


    tempHTML += "</div>"; //Jealousy

    tempHTML += "<div class=\"pohAdviceAttributeTestWrapper\" id=\"pohAdvicePettinessTests\">";
    tempHTML += "<div id=\"pohAdvicePettinessTestsHeader\" class=\"pohSectionSubHeader\">Pettiness</div>";

    for (i = 0; i < interaction.pettinessTests.length; i++) {

        tempHTML += "<div class=\"pohAdviceAttributeTest\"><label><input type=\"checkbox\" class=\"pohAdviceAttributeTestCheckbox\" id=\"pohAdvicePettinessTestCheckbox" + i + "\" value=\"" + interaction.pettinessTests[i].key + "\" /> " + interaction.pettinessTests[i].title + " (" + interaction.pettinessTests[i].heart2Attribute + ")</label></div>";

    }


    tempHTML += "</div>"; //Pettiness

    tempHTML += "<div class=\"pohAdviceAttributeTestWrapper\" id=\"pohAdviceViciousnessTests\">";
    tempHTML += "<div id=\"pohAdviceViciousnessTestsHeader\" class=\"pohSectionSubHeader\">Viciousness</div>";

    for (i = 0; i < interaction.viciousnessTests.length; i++) {

        tempHTML += "<div class=\"pohAdviceAttributeTest\"><label><input type=\"checkbox\" class=\"pohAdviceAttributeTestCheckbox\" id=\"pohAdviceViciousnessTestCheckbox" + i + "\" value=\"" + interaction.viciousnessTests[i].key + "\" /> " + interaction.viciousnessTests[i].title + " (" + interaction.viciousnessTests[i].heart2Attribute + ")</label></div>";

    }


    tempHTML += "</div>"; //Viciousness




    tempHTML += "<div class=\"clear\"/>";

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohAdviceAliceLetterExtracurricular\" class=\"pohTextCell\">";

    tempHTML += "<p>In your free time this week, I think you'll find it profitable to: ";
    tempHTML += "<select id=\"pohAdviceExtracurricularSelect\">";
    tempHTML += "<option value=\"pohAdviceExtracurricularNothing\">Do as you please</option>";
    tempHTML += "<option value=\"pohAdviceExtracurricularDanmaku\">Seek out danmaku battles</option>";
    tempHTML += "<option value=\"pohAdviceExtracurricularAttributeRaise\">Cultivate your...</option>";
    tempHTML += "<option value=\"pohAdviceExtracurricularAttributeLower\">Suppress your...</option>";
    tempHTML += "<option value=\"pohAdviceExtracurricularPassionRaise\">Get closer to...</option>";
    tempHTML += "<option value=\"pohAdviceExtracurricularPassionLower\">Distance yourself from...</option>";
    tempHTML += "<option value=\"pohAdviceExtracurricularTrait\">Change this aspect of your personality...</option>";
    tempHTML += "</select></p>";


    tempHTML += "<div id=\"pohAdviceExtracurricularAttributeRaiseForm\">";
    tempHTML += "<div id=\"pohAdviceExtracurricularAttributeRaisePositiveWrapper\" class=\"pohAdviceExtracurricularAttributeWrapper\">";

    for (i = 0; i < interaction.heart.attributesPositive.length; i++) {

        tempHTML += "<div class=\"pohAdviceExtracurricularAttribute\"><label><input type=\"radio\" name=\"pohAdviceExtracurricularAttributeRaise\" value=\"" + interaction.heart.attributesPositive[i].key + "\" class=\"pohAdviceExtracurricularAttributeRaiseRadio\" ";

        if (i === 0) {

            tempHTML += "checked=\"true\" ";

        }

        tempHTML += "/> " + interaction.heart.attributesPositive[i].label + "</label></div>";

    }

    tempHTML += "</div><div id=\"pohAdviceExtracurricularAttributeRaiseNegativeWrapper\" class=\"pohAdviceExtracurricularAttributeWrapper\">";

    for (i = 0; i < interaction.heart.attributesNegative.length; i++) {

        tempHTML += "<div class=\"pohAdviceExtracurricularAttribute\"><label><input type=\"radio\" name=\"pohAdviceExtracurricularAttributeRaise\" value=\"" + interaction.heart.attributesNegative[i].key + "\" class=\"pohAdviceExtracurricularAttributeRaiseRadio\" /> " + interaction.heart.attributesNegative[i].label + "</label></div>";

    }

    tempHTML += "</div>";
    tempHTML += "<div class=\"clear\"/></div>"; //Cultivate Attribute

    tempHTML += "<div id=\"pohAdviceExtracurricularAttributeLowerForm\">";
    tempHTML += "<div id=\"pohAdviceExtracurricularAttributeLowerPositiveWrapper\" class=\"pohAdviceExtracurricularAttributeWrapper\">";

    for (i = 0; i < interaction.heart.attributesPositive.length; i++) {

        tempHTML += "<div class=\"pohAdviceExtracurricularAttribute\"><label><input type=\"radio\" name=\"pohAdviceExtracurricularAttributeLower\" value=\"" + interaction.heart.attributesPositive[i].key + "\" class=\"pohAdviceExtracurricularAttributeLowerRadio\" ";

        if (i === 0) {

            tempHTML += "checked=\"true\" ";

        }

        tempHTML += "/> " + interaction.heart.attributesPositive[i].label + "</label></div>";

    }

    tempHTML += "</div><div id=\"pohAdviceExtracurricularAttributeLowerNegativeWrapper\" class=\"pohAdviceExtracurricularAttributeWrapper\">";

    for (i = 0; i < interaction.heart.attributesNegative.length; i++) {

        tempHTML += "<div class=\"pohAdviceExtracurricularAttribute\"><label><input type=\"radio\" name=\"pohAdviceExtracurricularAttributeLower\" value=\"" + interaction.heart.attributesNegative[i].key + "\" class=\"pohAdviceExtracurricularAttributeLowerRadio\" /> " + interaction.heart.attributesNegative[i].label + "</label></div>";

    }

    tempHTML += "</div>";
    tempHTML += "<div class=\"clear\"/></div>"; //Lower Attribute

    tempHTML += "<div id=\"pohAdviceExtracurricularPassionRaiseForm\">";
    tempHTML += "<select id=\"pohAdviceExtracurricularPassionRaiseSelect\">";

    for (i = 0; i < interaction.heartsList.length; i++) {

        tempHTML += "<option value=\"" + interaction.heartsList[i].key + "\">" + interaction.heartsList[i].preferredName + "</option>";

    }

    tempHTML += "</select>";
    tempHTML += "</div>" //Raise Passion

    tempHTML += "<div id=\"pohAdviceExtracurricularPassionLowerForm\">";
    tempHTML += "<select id=\"pohAdviceExtracurricularPassionLowerSelect\">";

    for (i = 0; i < interaction.heartsList.length; i++) {

        tempHTML += "<option value=\"" + interaction.heartsList[i].key + "\">" + interaction.heartsList[i].preferredName + "</option>";

    }

    tempHTML += "</select>";
    tempHTML += "</div>" //Lower Passion

    tempHTML += "<div id=\"pohAdviceExtracurricularTraitForm\">";
    tempHTML += "<div id=\"pohAdviceExtracurricularTraitAttractionWrapper\" class=\"pohAdviceExtracurricularTraitWrapper\">";

    for (i = 0; i < interaction.heart.attractionTraits.length; i++) {

        tempHTML += "<div class=\"pohAdviceExtracurricularTrait\"><label><input type=\"radio\" name=\"pohAdviceExtracurricularTrait\" value=\"" + interaction.heart.attractionTraits[i].key + "\" class=\"pohAdviceExtracurricularTraitRadio\" ";

        if (i === 0) {

            tempHTML += "checked=\"true\" ";

        }

        tempHTML += "/> " + interaction.heart.attractionTraits[i].label + "</label></div>";

    }

    tempHTML += "</div><div id=\"pohAdviceExtracurricularTraitReactionWrapper\" class=\"pohAdviceExtracurricularTraitWrapper\">";

    for (i = 0; i < interaction.heart.reactionTraits.length; i++) {

        tempHTML += "<div class=\"pohAdviceExtracurricularTrait\"><label><input type=\"radio\" name=\"pohAdviceExtracurricularTrait\" value=\"" + interaction.heart.reactionTraits[i].key + "\" class=\"pohAdviceExtracurricularTraitRadio\" /> " + interaction.heart.reactionTraits[i].label + "</label></div>";

    }

    tempHTML += "</div>";
    tempHTML += "<div class=\"clear\"/></div>"; //Trait

    tempHTML += "<p>Yours faithfully,</p><p>Alice Margatroid</p>";

    tempHTML += "</div>"; //Alice Letter   

    tempHTML += "<div id=\"pohAdviceSendAction\" class=\"pohNewsItemAction\">Send Advice</div>";



    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "</div>"  //Game Area

    tempHTML += "<div id=\"pohBottomNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohReturnToAliceDesk\" class=\"pohNavButton\">&lt;&lt; Alice's Desk</div>";

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohAdviceImageLargeWrapper\" class=\"pohLandscapeBackdrop\"><img class=\"pohLandscapeBackdropImage\" src=\"" + interaction.heart.imageLargeUrl + "\" /></div>";


    $("body").html(tempHTML);


    erg.utilities.hookupIDWithClicksEvent("pohReturnToAliceDesk", erg.constants["eventPoHViewHeartsList"]);

    //Main Menu Button

    erg.utilities.addActionButtonAndHookUp({ text: "Menu", event: erg.constants["eventShowMainMenu"], args: {} }, "pohMainMenuButton", "pohNavButton");

    //Help Button

    erg.utilities.addActionButtonAndHookUp({ text: "Help", event: erg.constants["eventPoHViewHelp"], args: {} }, "pohHelpButton", "pohNavButton");



    //Heart Clickies

    //Species

    erg.utilities.hookupIDWithDialogueClick("pohAdviceHeart1BioSpeciesWrapper", "<p>" + interaction.heart.speciesDescription + "</p><p><a href=\"" + interaction.heart.speciesWikiLink + "\" target=\"_new\">" + interaction.heart.speciesLabel + " on TohouWiki</a></p>", interaction.heart.speciesLabel);


    //Traits

    for (i = 0; i < interaction.heart.attractionTraits.length; i++) {

        tempDialogueHTML = "<p>This is an <strong>attraction</strong> trait.  It modifies the degree to which this character is attracted to others based on the following criteria:</p>";

        if (interaction.heart.attractionTraits[i].type === erg.constants["pohTraitTypeAttractionModifierConditional"] && interaction.heart.attractionTraits[i].target !== erg.constants["pohAttractionTargetTier"] && interaction.heart.attractionTraits[i].target !== erg.constants["pohTraitSpecialShipCaptain"]) {  //Special trait hack - last term

            tempDialogueHTML += "<p><strong>Bonus Attraction: </strong>" + interaction.heart.attractionTraits[i].magnitude + "</p>";
            tempDialogueHTML += "<p>For characters whose <strong>" + interaction.heart.attractionTraits[i].targetLabel + "</strong> is in this list:</p>";
            tempDialogueHTML += "<ul>";

            for (j = 0; j < interaction.heart.attractionTraits[i].positive.length; j++) {

                tempDialogueHTML += "<li>" + interaction.heart.attractionTraits[i].positive[j] + "</li>";

            }

            tempDialogueHTML += "</ul>";

        }


        //################################################ SPECIAL TRAIT HACK #################################################################################

        if (interaction.heart.attractionTraits[i].type === erg.constants["pohTraitTypeAttractionModifierConditional"] && interaction.heart.attractionTraits[i].target === erg.constants["pohTraitSpecialShipCaptain"]) {  //Special trait hack - last term

            tempDialogueHTML += "<p><strong>Bonus Attraction: </strong>" + interaction.heart.attractionTraits[i].magnitude + "</p>";
            tempDialogueHTML += "<p>For characters with appropriate Special Traits (such as Ship's Captain).</p>";

        }

        //############################################## END SPECIAL TRAIT HACK ###############################################################################


        if (interaction.heart.attractionTraits[i].type === erg.constants["pohTraitTypeAttractionModifierConditional"] && interaction.heart.attractionTraits[i].target === erg.constants["pohAttractionTargetTier"]) {

            tempDialogueHTML += "<p><strong>Bonus Attraction: </strong>" + interaction.heart.attractionTraits[i].magnitude + "</p>";

            if (interaction.heart.attractionTraits[i].subTarget === erg.constants["pohAttractionSubtargetTierLower"]) {

                tempDialogueHTML += "<p>For each <strong>" + interaction.heart.attractionTraits[i].targetLabel + "</strong> lower than this character.</p>";

            }

            if (interaction.heart.attractionTraits[i].subTarget === erg.constants["pohAttractionSubtargetTierHigher"]) {

                tempDialogueHTML += "<p>For each <strong>" + interaction.heart.attractionTraits[i].targetLabel + "</strong> higher than this character.</p>";

            }

            if (interaction.heart.attractionTraits[i].subTarget === erg.constants["pohAttractionSubtargetTierEqual"]) {

                tempDialogueHTML += "<p>For <strong>all</strong> characters, then:</p>";
                tempDialogueHTML += "<p><strong>Attraction Penalty: </strong>" + interaction.heart.attractionTraits[i].magnitudeVariable + "</p>";
                tempDialogueHTML += "<p>For each <strong>" + interaction.heart.attractionTraits[i].targetLabel + "</strong> lower or higher than this character.</p>";

            }

        }

        if (interaction.heart.attractionTraits[i].type === erg.constants["pohTraitTypeAttractionModifierAutomaticBuff"]) {

            tempDialogueHTML += "<p><strong>Bonus Attraction: </strong>" + interaction.heart.attractionTraits[i].magnitude + "</p>";
            tempDialogueHTML += "<p>For <strong>all</strong> characters.</p>";

        }

        if (interaction.heart.attractionTraits[i].type === erg.constants["pohTraitTypeAttractionModifierAutomaticPenalty"]) {

            tempDialogueHTML += "<p><strong>Attraction Penalty: </strong>" + interaction.heart.attractionTraits[i].magnitude + "</p>";
            tempDialogueHTML += "<p>For <strong>all</strong> characters.</p>";

        }

        erg.utilities.hookupIDWithDialogueClick("pohAdviceHeart1AttractionTrait" + i, tempDialogueHTML, interaction.heart.attractionTraits[i].label);

    }

    for (i = 0; i < interaction.heart.reactionTraits.length; i++) {

        tempDialogueHTML = "<p><em>" + interaction.heart.reactionTraits[i].description + "</em></p>";

        tempDialogueHTML += "<p>This is a <strong>reaction</strong> trait.  It modifies this character's change in Passion for another character on a date when that character rolls the following attributes:</p>";

        for (j = 0; j < interaction.heart.reactionTraits[i].attributes.length; j++) {

            tempDialogueHTML += "<p><strong>" + interaction.heart.reactionTraits[i].attributes[j].label + "</strong></p>";
            tempDialogueHTML += "<p><strong>Success: </strong>" + interaction.heart.reactionTraits[i].attributes[j].success;
            tempDialogueHTML += "<br/><strong>Failure: </strong>" + interaction.heart.reactionTraits[i].attributes[j].fail + "</p>";

        }

        erg.utilities.hookupIDWithDialogueClick("pohAdviceHeart1ReactionTrait" + i, tempDialogueHTML, interaction.heart.reactionTraits[i].label);

    }

    for (i = 0; i < interaction.heart.specialTraits.length; i++) {

        tempDialogueHTML = "<p><em>" + interaction.heart.specialTraits[i].description + "</em></p>";

        tempDialogueHTML += "<p>" + interaction.heart.specialTraits[i].effectText + "</p>";

        erg.utilities.hookupIDWithDialogueClick("pohAdviceHeart1SpecialTrait" + i, tempDialogueHTML, interaction.heart.specialTraits[i].label);

    }


    //Attributes

    for (i = 0; i < interaction.heart.attributesPositive.length; i++) {

        tempDialogueHTML = "<p>" + interaction.heart.attributesPositive[i].description + "</p>";

        tempDialogueHTML += "<p>This is a <strong>positive</strong> attribute.  By default, making a " + interaction.heart.attributesPositive[i].label + " roll during a date changes the other character's Passion by:</p>";
        tempDialogueHTML += "<p><strong>Success: </strong>" + erg.constants["pohAttributeTestDefaultPositiveSuccessChange"];
        tempDialogueHTML += "<br/><strong>Failure: </strong>" + erg.constants["pohAttributeTestDefaultPositiveFailChange"] + "</p>";

        erg.utilities.hookupIDWithDialogueClick("pohAdviceHeart1AttributeWrapperPositive" + i, tempDialogueHTML, interaction.heart.attributesPositive[i].label);

    }

    for (i = 0; i < interaction.heart.attributesNegative.length; i++) {

        tempDialogueHTML = "<p>" + interaction.heart.attributesNegative[i].description + "</p>";

        tempDialogueHTML += "<p>This is a <strong>negative</strong> attribute.  By default, making a " + interaction.heart.attributesNegative[i].label + " roll during a date changes the other character's Passion by:</p>";
        tempDialogueHTML += "<p><strong>Success: </strong>" + erg.constants["pohAttributeTestDefaultNegativeSuccessChange"];
        tempDialogueHTML += "<br/><strong>Failure: </strong>" + erg.constants["pohAttributeTestDefaultNegativeFailChange"] + "</p>";

        erg.utilities.hookupIDWithDialogueClick("pohAdviceHeart1AttributeWrapperNegative" + i, tempDialogueHTML, interaction.heart.attributesNegative[i].label);

    }

    for (i = 0; i < interaction.heart.attributesMeta.length; i++) {

        tempDialogueHTML = "<p>" + interaction.heart.attributesMeta[i].description + "</p>";

        erg.utilities.hookupIDWithDialogueClick("pohAdviceHeart1AttributeWrapperMeta" + i, tempDialogueHTML, interaction.heart.attributesMeta[i].label);

    }


    //Date Hearts Select

    tempFunction = function () {

        interaction.heartsListChangeFunction($("#pohAdviceDateHeartSelect").val(), arguments.callee.heartKey);

    }

    tempFunction.heartKey = interaction.heart.key;

    $("#pohAdviceDateHeartSelect").change(tempFunction);

    //Date Attribute Tests checkboxes

    $("#pohAdviceAliceLetterDatePlan :checkbox").click(function () {

        if ($("#pohAdviceAliceLetterDatePlan :checkbox:checked").length >= interaction.dateEventCap) {

            $("#pohAdviceAliceLetterDatePlan :checkbox:not(:checked)").prop("disabled", "disabled");

        } else {

            $("#pohAdviceAliceLetterDatePlan :checkbox").prop("disabled", "");

        }

    });

    //Extracurricular

    tempFunction = function () {

        interaction.extracurricularChangeFunction($("#pohAdviceExtracurricularSelect").val());

    }

    $("#pohAdviceExtracurricularSelect").change(tempFunction);

    //Send Advice

    tempFunction = function () {

        var dateHeart = $("#pohAdviceDateHeartSelect").val();

        var selectedTests = new Array();

        $("#pohAdviceAliceLetterDatePlan :checkbox:checked").each(function () {

            selectedTests.push($(this).attr('value'));

        });

        var extracurricularType = $("#pohAdviceExtracurricularSelect").val();

        var extracurricularTarget;

        //erg.utilities.playSFX(erg.constants["titpSFXButton"]);

        switch (extracurricularType) {

            case erg.constants["pohAdviceExtracurricularAttributeRaise"]:

                extracurricularTarget = $("input:radio[name=pohAdviceExtracurricularAttributeRaise]:checked").val();
                break;

            case erg.constants["pohAdviceExtracurricularAttributeLower"]:

                extracurricularTarget = $("input:radio[name=pohAdviceExtracurricularAttributeLower]:checked").val();
                break;

            case erg.constants["pohAdviceExtracurricularPassionRaise"]:

                extracurricularTarget = $("#pohAdviceExtracurricularPassionRaiseSelect").val();
                break;

            case erg.constants["pohAdviceExtracurricularPassionLower"]:

                extracurricularTarget = $("#pohAdviceExtracurricularPassionLowerSelect").val();
                break;

            case erg.constants["pohAdviceExtracurricularTrait"]:

                extracurricularTarget = $("input:radio[name=pohAdviceExtracurricularTrait]:checked").val();
                break;

        }

        erg.event(erg.constants["eventPoHSendAdvice"], { heartKey: arguments.callee.heartKey, dateHeartKey: dateHeart, dateScenarios: selectedTests, extracurricularType: extracurricularType, extracurricularTarget: extracurricularTarget });

    }

    tempFunction.heartKey = interaction.heart.key;

    $("#pohAdviceSendAction").click(tempFunction);


    //Restore state from saved advice

    $("#pohAdviceDateHeartSelect").change();

    if (interaction.lastDateAdvice) {

        tempFunction = function () {

            if ($(this).val() === arguments.callee.scenarioID) {

                this.checked = true;

                if ($("#pohAdviceAliceLetterDatePlan :checkbox:checked").length >= interaction.dateEventCap) {

                    $("#pohAdviceAliceLetterDatePlan :checkbox:not(:checked)").prop("disabled", "disabled");

                } else {

                    $("#pohAdviceAliceLetterDatePlan :checkbox").prop("disabled", "");

                }

            }

        }

        for (i = 0; i < interaction.lastDateAdvice.datePlan.length; i++) {

            tempFunction.scenarioID = interaction.lastDateAdvice.datePlan[i];

            $("#pohAdviceAliceLetterDatePlan :checkbox").each(tempFunction);

        }



    }

}



//################################### REMILIA SHOP RENDERER #################################################


erg.viewRenderers[erg.constants["interactionTypePoHRemiliaShop"]] = function (interaction) {

    var i;

    var tempHTML = "";

    var tempFunction;

    tempHTML += "<div id=\"pohTopNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohRemilaShopTitle\" class=\"pohTopNavTitle\">Master of Fate</div>";

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohGameArea\" class=\"pohCharacterSheetGameArea\">";

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    

    tempHTML += "<div id=\"pohRemiliaShopTextWrapper\">";

    tempHTML += "<div id=\"pohRemiliaShopLetter\" class=\"pohTextCell\">"

    tempHTML += "<p>Dear Lady Remilia,</p>";

    tempHTML += "<p>I'd like to prevail on your services in the case of <select id=\"pohRemiliaShopHeartSelect\">";

    for (i = 0; i < interaction.heartsList.length; i++) {

        tempHTML += "<option value=\"" + interaction.heartsList[i].key + "\"";

        if (interaction.lastDateAdvice && interaction.lastDateAdvice.dateHeartKey === interaction.heartsList[i].key) {

            tempHTML += " selected=\"selected\"";

        }

        tempHTML += ">" + interaction.heartsList[i].preferredName + "</option>";

    }

    tempHTML += "</select></p>";

    tempHTML += "<p>Please entangle her fate with Gensokyo's lovers.</p><p>Yours faithfully,</p><p>Alice Margatroid</p>";

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohRemiliaShopHeartWrapper\"></div>"; //Will be filled in by UI function

    tempHTML += "<div id=\"pohRemiliaShopBuyWrapper\" class=\"pohTextCell\">";
    tempHTML += "Engaging Remilia's services will cost you <strong>" + interaction.unlockPrestigeCost + "</strong> Prestige.  You currently have " + interaction.prestige + " Prestige.";
    tempHTML += "</div>";

    if (interaction.purchasePossible) {

        tempHTML += "<div id=\"pohRemiliaShopBuyAction\" class=\"pohNewsItemAction\">Make Request</div>";

    }

    tempHTML += "</div>";


    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "</div>"  //Game Area

    tempHTML += "<div id=\"pohBottomNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohReturnToAliceDesk\" class=\"pohNavButton\">&lt;&lt; Alice's Desk</div>";

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohRemiliaShopImageWrapper\" class=\"pohLandscapeBackdrop\"><img class=\"pohLandscapeBackdropImage\" src=\"" + interaction.image + "\" /></div>";

    $("body").html(tempHTML);


    erg.utilities.hookupIDWithClicksEvent("pohReturnToAliceDesk", erg.constants["eventPoHViewHeartsList"]);

    //Main Menu Button

    erg.utilities.addActionButtonAndHookUp({ text: "Menu", event: erg.constants["eventShowMainMenu"], args: {} }, "pohMainMenuButton", "pohNavButton");

    //Help Button

    erg.utilities.addActionButtonAndHookUp({ text: "Help", event: erg.constants["eventPoHViewHelp"], args: {} }, "pohHelpButton", "pohNavButton");

    //Clickies etc.

    erg.utilities.hookupIDWithClicksEvent("pohViewHeartsList", erg.constants["eventPoHViewHeartsList"]);

    //Hearts List Change

    tempFunction = function () {

        interaction.heartsListChangeFunction($("#pohRemiliaShopHeartSelect").val());

    }

    $("#pohRemiliaShopHeartSelect").change(tempFunction);

    $("#pohRemiliaShopHeartSelect").change();

    //Purchase button

    if (interaction.purchasePossible) {

        tempFunction = function () {

            //The other way to do this would be have the change function on the heart selector rebind the purchase key every time!

            var dialogueHTML;

            var heartKey = $("#pohRemiliaShopHeartSelect").val();

            dialogueHTML = "<p>Engage Remilia to make <strong>" + erg.utilities.getFromArrayByKey(arguments.callee.heartsList, heartKey).preferredName + "</strong> enter play?</p>";
            dialogueHTML += "<p>This will cost you <strong>" + arguments.callee.prestigeCost + "</strong> Prestige.  You currently have " + arguments.callee.prestige + " Prestige.</p>";
            dialogueHTML += "<div id=\"popupDialogueActions\">";
            dialogueHTML += "<div id=\"popupDialogueActionRemiliaBuy\" class=\"" + erg.constants["popupDialogueActionClass"] + "\">Make Request</div>";
            dialogueHTML += "<div id=\"popupDialogueActionClose\" class=\"" + erg.constants["popupDialogueActionClass"] + "\">Close</div>";
            dialogueHTML += "<div class=\"clear\" /></div>";

            $ergDialogue.html(dialogueHTML);

            $ergDialogue.dialog({

                title: "Engage Remilia's Services"

            });

            erg.utilities.playSFX(erg.constants["titpSFXButton"]);

            erg.utilities.hookupIDWithClicksEvent("popupDialogueActionRemiliaBuy", erg.constants["eventPoHRemiliaHeartOpen"], { heartKey: heartKey }, true);

            $("#popupDialogueActionClose").css("cursor", "pointer");
            $("#popupDialogueActionClose").click(function (event) {

                erg.utilities.playSFX(erg.constants["titpSFXButton"]);
                $ergDialogue.dialog("close");

            });

        }

        tempFunction.heartsList = interaction.heartsList;
        tempFunction.prestigeCost = interaction.unlockPrestigeCost;
        tempFunction.prestige = interaction.prestige;

        $("#pohRemiliaShopBuyAction").css("cursor", "pointer");
        $("#pohRemiliaShopBuyAction").click(tempFunction);

    }

}


//################################### INTERSTITIAL RENDERER #################################################


erg.viewRenderers[erg.constants["interactionTypePoHInterstitial"]] = function (interaction) {

    var i;

    var tempHTML = "";

    var timePerString;


    tempHTML += "<div id=\"pohTopNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohInterstitialTitle\" class=\"pohTopNavTitle\">Please Wait Warmly</div>";

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohGameArea\" class=\"pohCharacterSheetGameArea\">";

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "</div>";


    tempHTML += "<div id=\"pohBottomNav\" class=\"pohNavBar\">";

    for (i = 0; i < interaction.displayStrings.length; i++) {

        tempHTML += "<div id=\"pohInterstitialTimedString" + i + "\" class=\"pohInterstitialText\">" + interaction.displayStrings[i] + "</div>";

    }

    tempHTML += "</div>";


    $("body").html(tempHTML);

    $("#pohGameArea").css("background", "url(" + interaction.image + ") no-repeat center center fixed");
    $("#pohGameArea").css("background-size", "cover");

    if (interaction.continueAction) {

        erg.utilities.addActionButtonAndHookUp(interaction.continueAction, "pohInterstitialAction", "pohNavButton");

    }

    if (interaction.displayStrings.length > 1) {

        timePerString = erg.constants["pohInterstitialTimeToAction"] / (interaction.displayStrings.length - 1);

        for (i = 1; i < interaction.displayStrings.length; i++) {

            $("#pohInterstitialTimedString" + i).hide().delay(timePerString * i).fadeIn(erg.constants["pohInterstitialActionFadeIn"]);

        }

        $("#pohInterstitialAction").hide().delay(erg.constants["pohInterstitialTimeToAction"] + timePerString).fadeIn(erg.constants["pohInterstitialActionFadeIn"]);

    }



}

//################################### LOAD GAME MENU RENDERER #################################################

erg.viewRenderers[erg.constants["interactionTypePoHLoadGameMenu"]] = function (interaction) {


    var i;

    var action;

    var tempHTML = "";


    tempHTML += "<div id=\"pohTopNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohMenuTitle\" class=\"pohTopNavTitle\">Load</div>";

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohGameArea\" class=\"pohMenuGameArea\">";

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "<div id=\"pohLoadableGamesWrapper\">";

    if (!interaction.actions || interaction.actions.length === 0) {

        tempHTML += "<div id=\"pohLoadNoGames\" class=\"pohTextCell\">You have no save games stored in your browser.</div>";

    } else {

        for (i = 0; i < interaction.actions.length; i++) {

            tempHTML += "<div id=\"pohLoadableGame" + i + "\" class=\"pohMenuButton\">" + interaction.actions[i].text + "</div>";

        }

    }

    tempHTML += "</div>";

    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "</div>"  //Game Area

    tempHTML += "<div id=\"pohBottomNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohMenuReturn\" class=\"pohNavButton\">&lt;&lt; Return</div>"

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohLoadImageLargeWrapper\" class=\"pohLandscapeBackdrop\"><img class=\"pohLandscapeBackdropImage\" src=\"" + interaction.menuImageURL + "\" /></div>";


    $("body").html(tempHTML);


    //Return

    erg.utilities.hookupIDWithClicksEvent("pohMenuReturn", erg.constants["eventReturn"]);

    //The loadable games

    if (interaction.actions) {

        for (i = 0; i < interaction.actions.length; i++) {

            action = interaction.actions[i];

            erg.utilities.hookupIDWithClicksEvent("pohLoadableGame" + i, action.event, action.args);

        }

    }


}


//################################### HELP RENDERER #################################################

erg.viewRenderers[erg.constants["interactionTypePoHHelp"]] = function (interaction) {

    //This might end up entirely generic, in which case it can go back to erg core.
    //That might be a problem with the background colour, but eh.

    var i;

    var j;

    var k;

    var action;

    var subsection;

    var item;

    var tempHTML = "";




    tempHTML += "<div id=\"pohTopNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohMenuTitle\" class=\"pohTopNavTitle\">Help</div>";

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohGameArea\" class=\"pohMenuGameArea\">";

    tempHTML += "<a name=\"top\" /><div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "<div id=\"pohHelpBox\">";

    tempHTML += "<div id=\"pohHelpToCBox\">";

    tempHTML += "<div id=\"pohHelpToCHeader\">Table of Contents</div>";

    tempHTML += "<ul class=\"pohHelpToCSectionList\">";

    for (i = 0; i < interaction.help.length; i++) {

        tempHTML += "<li><a href=\"#" + interaction.help[i].key + "Anchor\">" + interaction.help[i].title + "</a>";

        tempHTML += "<ul class=\"pohHelpToCSubsectionList\">";

        for (j = 0; j < interaction.help[i].subsections.length; j++) {

            subsection = interaction.help[i].subsections[j];

            tempHTML += "<li><a href=\"#" + subsection.key + "Anchor\">" + subsection.title + "</a>";

            tempHTML += "<ul class=\"pohHelpToCItemList\">";

            for (k = 0; k < subsection.items.length; k++) {

                item = subsection.items[k];

                tempHTML += "<li><a href=\"#" + item.key + "Anchor\">" + item.title + "</a></li>";

            }

            tempHTML += "</ul>";

            tempHTML += "</li>";

        }

        tempHTML += "</ul>";

        tempHTML += "</li>";

    }

    tempHTML += "</ul>";

    tempHTML += "</div>";

    for (i = 0; i < interaction.help.length; i++) {

        tempHTML += "<a name=\"" + interaction.help[i].key + "Anchor\">&nbsp;</a><div id=\"" + interaction.help[i].key + "\" class=\"pohHelpSection\">" + interaction.help[i].title + "</div>";

        for (j = 0; j < interaction.help[i].subsections.length; j++) {

            subsection = interaction.help[i].subsections[j];

            tempHTML += "<a class=\"pohHelpAnchor\" name=\"" + subsection.key + "Anchor\" />&nbsp;</a><div id=\"" + subsection.key + "\" class=\"pohHelpSubSection\">" + subsection.title + "</div>";

            for (k = 0; k < subsection.items.length; k++) {

                item = subsection.items[k];

                tempHTML += "<a class=\"pohHelpAnchor\" name=\"" + item.key + "Anchor\" />&nbsp;</a><div id=\"" + item.key + "\" class=\"pohHelpItem\">";

                tempHTML += "<div class=\"pohHelpItemTitle\">" + item.title + "</div>";

                tempHTML += item.text;

                tempHTML += "<p><a class=\"pohHelpAnchor\" href=\"#top\">Back to top</a>";

                tempHTML += "</div>";


            }

        }

    }

    tempHTML += "</div>" //pohHelpBox


    tempHTML += "<div class=\"pohGameAreaBuffer\">&nbsp;</div>";

    tempHTML += "</div>"  //Game Area

    tempHTML += "<div id=\"pohBottomNav\" class=\"pohNavBar\">";

    tempHTML += "<div id=\"pohMenuReturn\" class=\"pohNavButton\">&lt;&lt; Return</div>"

    tempHTML += "</div>";

    tempHTML += "<div id=\"pohHelpImageLargeWrapper\" class=\"pohLandscapeBackdrop\"><img class=\"pohLandscapeBackdropImage\" src=\"" + interaction.menuImageURL + "\" /></div>";


    $("body").html(tempHTML);


    //Return

    erg.utilities.hookupIDWithClicksEvent("pohMenuReturn", erg.constants["eventReturn"]);

}