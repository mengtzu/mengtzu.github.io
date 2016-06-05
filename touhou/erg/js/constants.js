//Should be of the form
//erg.constants[CONSTANT] = value;


//################################### APP STRUCTURE CONSTANTS #################################################

erg.constants["applicationResourceDirectory"] = "erg";

erg.constants["applicationResourceImageSubdirectory"] = "images";

erg.constants["applicationResourceImagePortraitSubdirectory"] = "portraits";
erg.constants["applicationResourceImageMenuSubdirectory"] = "menu";
erg.constants["applicationResourceImageActsSubdirectory"] = "acts";
erg.constants["applicationResourceImageQuestGiversSubdirectory"] = "questGivers";
erg.constants["applicationResourceImageGlossarySubdirectory"] = "glossary";

erg.constants["applicationResourceAudioSubdirectory"] = "audio";

erg.constants["applicationResourceAudioBGMSubdirectory"] = "bgm";
erg.constants["applicationResourceAudioSFXSubdirectory"] = "sfx";

//################################### EVENT/CONTROLLER CONSTANTS #################################################


erg.constants["eventLoadScene"] = "eventLoadScene";
erg.constants["eventPlayScene"] = "eventPlayScene";

erg.constants["eventConversation"] = "eventConversation";

erg.constants["eventShowMainMenu"] = "eventShowMainMenu";
erg.constants["eventReturn"] = "eventReturn";
erg.constants["eventViewLoadGameMenu"] = "eventViewLoadGameMenu";
erg.constants["eventViewCredits"] = "eventViewCredits";
erg.constants["eventQuicksave"] = "eventQuicksave";
erg.constants["eventQuit"] = "eventQuit";

erg.constants["eventShowCharacterMenu"] = "eventShowCharacterMenu";
erg.constants["eventShowJournal"] = "eventShowJournal";

erg.constants["eventShowLog"] = "eventShowLog";

erg.constants["eventShowActSplash"] = "eventShowActSplash";
erg.constants["eventLoadSplash"] = "eventLoadSplash";

erg.constants["eventLoad"] = "eventLoad";


//################################### INTERACTION CONSTANTS #################################################

erg.constants["interactionTypeConversation"] = "interactionTypeConversation";

erg.constants["interactionTypeMainMenu"] = "interactionTypeMainMenu";
erg.constants["interactionTypeCharacterMenu"] = "interactionTypeCharacterMenu";
erg.constants["interactionTypeJournal"] = "interactionTypeJournal";
erg.constants["interactionTypeLog"] = "interactionTypeLog";
erg.constants["interactionTypeCredits"] = "interactionTypeCredits";

erg.constants["interactionTypeActSplash"] = "interactionTypeActSplash";


//################################### DELEGATE CONSTANTS #################################################


erg.constants["delegateScene"] = "delegateScene";

erg.constants["delegateMainMenu"] = "delegateMainMenu";
erg.constants["delegateCharacterMenu"] = "delegateCharacterMenu";
erg.constants["delegateJournal"] = "delegateJournal";
erg.constants["delegateLog"] = "delegateLog";

erg.constants["delegateViewCredits"] = "delegateViewCredits";

erg.constants["delegateActSplash"] = "delegateActSplash";


//################################### CHARACTER CONSTANTS #################################################

erg.constants["characterNobody"] = "characterNobody";  //Used when an element that assumes a character (eg dialogue) doesn't have one.


erg.constants["PC"] = "PC";
erg.constants["NPC"] = "NPC";


//################################### PORTRAIT CONSTANTS #################################################

erg.constants["portraitExtension"] = ".png";

erg.constants["portraitAlphaSuffix"] = "_f";

erg.constants["portraitExpressionNone"] = -1;  //Flag to not build a url or attempt to load a portrait image

erg.constants["portraitSlotDefault"] = "conversationPortraitWrapper0";

erg.constants["portraitSlot0"] = "conversationPortraitWrapper0";
erg.constants["portraitSlot1"] = "conversationPortraitWrapper1";
erg.constants["portraitSlot2"] = "conversationPortraitWrapper2";
erg.constants["portraitSlot3"] = "conversationPortraitWrapper3";

erg.constants["recentPortraitCount"] = 4;


//################################### CONVERSATION CONSTANTS #################################################


erg.constants["conversationActionTypeContinue"] = "conversationActionTypeContinue";

erg.constants["conversationActionTypeContinuePair1"] = "conversationActionTypeContinuePair1";  //Refactor this to be less stupid
erg.constants["conversationActionTypeContinuePair2"] = "conversationActionTypeContinuePair2";

/*erg.constants["conversationActionContinue"] = {

    type: erg.constants["conversationActionTypeContinue"],
    text: "Continue",
    event: erg.constants["eventConversation"],
    args: {}

}*/

erg.constants["conversationActionTypeOption"] = "conversationActionTypeOption";


erg.constants["conversationOptionSlotDefault"] = "conversationOption0";
erg.constants["conversationOptionSlot0"] = "conversationOption0";
erg.constants["conversationOptionSlot1"] = "conversationOption1";
erg.constants["conversationOptionSlot2"] = "conversationOption2";
erg.constants["conversationOptionSlot3"] = "conversationOption3";
erg.constants["conversationOptionSlot4"] = "conversationOption4";
erg.constants["conversationOptionSlot5"] = "conversationOption5";

erg.constants["conversationOptionArray"] = [erg.constants["conversationOptionSlot0"], erg.constants["conversationOptionSlot1"], erg.constants["conversationOptionSlot2"], erg.constants["conversationOptionSlot3"], erg.constants["conversationOptionSlot4"], erg.constants["conversationOptionSlot5"]];

//################################### POP-UP DIALOGUE CONSTANTS #################################################
//TODO: refactor other Dialogue to Conversation to avoid ambiguity

erg.constants["popupDialogueActionClass"] = "popupDialogueAction";


//################################### AUDIO CONSTANTS #################################################

erg.constants["bgmVolume"] = 0.2;
erg.constants["sfxVolume"] = 0.4;


//################################### MENU CONSTANTS #################################################

erg.constants["mainMenuDefaultImageFilename"] = "default.jpg";
erg.constants["characterMenuDefaultImageFilename"] = "characterDefault.jpg";
erg.constants["logDefaultImageFilename"] = "logDefault.jpg";
erg.constants["creditsDefaultImageFilename"] = "credits.jpg";
erg.constants["helpDefaultImageFilename"] = "help.jpg";

erg.constants["menuActionTypeReturn"] = "menuActionTypeReturn";
erg.constants["menuActionTypeSaveGame"] = "menuActionTypeSaveGame";
erg.constants["menuActionTypeLoadGame"] = "menuActionTypeLoadGame";
erg.constants["menuActionTypeOptions"] = "menuActionTypeOptions";
erg.constants["menuActionTypeCredits"] = "menuActionTypeCredits";
erg.constants["menuActionTypeQuicksave"] = "menuActionTypeQuicksave";
erg.constants["menuActionTypeQuit"] = "menuActionTypeQuit";

erg.constants["menuActionTypeJournal"] = "menuActionTypeJournal";


//################################### SAVE CONSTANTS #################################################


erg.constants["saveSlotQuicksave"] = "saveSlotQuicksave";
erg.constants["saveSlot1"] = "saveSlot1";
erg.constants["saveSlot2"] = "saveSlot2";
erg.constants["saveSlot3"] = "saveSlot3";
erg.constants["saveSlotAutosave"] = "saveSlotAutosave";