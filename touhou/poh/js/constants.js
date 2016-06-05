//Should be of the form
//erg.constants[CONSTANT] = value;

//################################### APP STRUCTURE CONSTANTS #################################################

erg.constants["gameResourceDirectory"] = "poh";

erg.constants["applicationResourceImageProfileThumbsSubdirectory"] = "portrait_thumbs";
erg.constants["applicationResourceImageProfileLargeSubdirectory"] = "portrait_large";
erg.constants["applicationResourceImageLettersSubdirectory"] = "letters";

//################################### EVENT/CONTROLLER CONSTANTS #################################################

erg.constants["eventInitialisePoH"] = "eventIntialisePoH";

erg.constants["eventPoHViewHeartsList"] = "eventPoHViewHeartsList";
erg.constants["eventPoHViewHeart"] = "eventPoHViewHeart";

erg.constants["eventPoHNextWeek"] = "eventPoHNextWeek";

erg.constants["eventPoHViewNewsItem"] = "eventPoHViewNewsItem";

erg.constants["eventPoHEndGame"] = "eventPoHEndGame";

erg.constants["eventPoHChangeAdvice"] = "eventPoHChangeAdvice";
erg.constants["eventPoHGiveAdvice"] = "eventPoHGiveAdvice";
erg.constants["eventPoHSendAdvice"] = "eventPoHSendAdvice";
erg.constants["eventPoHViewAdvice"] = "eventPoHViewAdvice";
erg.constants["eventPoHUnsolicitedAdvice"] = "eventPoHUnsolicitedAdvice";

erg.constants["eventPoHRemiliaShop"] = "eventPoHRemiliaShop";
erg.constants["eventPoHRemiliaHeartOpen"] = "eventPoHRemiliaHeartOpen";

erg.constants["eventPoHSave"] = "eventPoHSave";
erg.constants["eventPoHQuicksave"] = "eventPoHQuicksave";
erg.constants["eventPoHLoad"] = "eventPoHLoad";

erg.constants["eventPoHViewLoadGameMenu"] = "eventPoHViewLoadGameMenu";  //PoH is it's own thing because we're being lazy and only having two slots - manual save and autosave.  This is something I'll need to return to given local storage size limitations versus the vast quantity of state in an RPG or sim >_<

erg.constants["eventPoHViewLoadGameMenuFromTitleScreen"] = "eventPoHViewLoadGameMenuFromTitleScreen";

erg.constants["eventPoHViewHelp"] = "eventPoHViewHelp";

erg.constants["eventPoHTitleScreen"] = "eventPoHTitleScreen";

//################################### INTERACTION CONSTANTS #################################################

//Typically this is also used as the identifier for delegates that act on behalf of other delegates (eg the Danmaku delegate is at erg.delegates[erg.constants["interactionTypeDanmaku"]] and is called by delegateScene

erg.constants["interactionTypePoHHeartsList"] = "interactionTypePoHHeartsList";

erg.constants["interactionTypePoHViewHeart"] = "interactionTypePoHViewHeart";

erg.constants["interactionTypePoHViewNewsItem"] = "interactionTypePoHViewNewsItem";

erg.constants["interactionTypePoHEndGame"] = "interactionTypePoHEndGame";

erg.constants["interactionTypePoHAdvice"] = "interactionTypePoHAdvice";

erg.constants["interactionTypePoHRemiliaShop"] = "interactionTypePoHRemiliaShop";

erg.constants["interactionTypePoHInterstitial"] = "interactionTypePoHInterstitial"; //We're treating them differently to ActSplashes etc.  Not making a generic LoadingScreen yet, see how the different contexts go before performing an unholy marriage

erg.constants["interactionTypePoHLoadGameMenu"] = "interactionTypePoHLoadGameMenu";

erg.constants["interactionTypePoHHelp"] = "interactionTypePoHHelp";

erg.constants["interactionTypePoHTitleScreen"] = "interactionTypePoHTitleScreen";

//################################### DELEGATE CONSTANTS #################################################

erg.constants["delegateInitialisePoH"] = "delegateInitialisePoH";

erg.constants["delegatePoHHeartsList"] = "delegatePoHHeartsList";

erg.constants["delegatePoHViewHeart"] = "delegatePoHViewHeart";

erg.constants["delegatePoHGenerateNews"] = "delegatePoHGenerateNews";

erg.constants["delegatePoHViewNewsItem"] = "delegatePoHViewNewsItem";

erg.constants["delegatePoHEndGame"] = "delegatePoHEndGame";

erg.constants["delegatePoHAdvice"] = "delegatePoHAdvice";

erg.constants["delegatePoHSendAdvice"] = "delegatePoHSendAdvice";

erg.constants["delegatePoHUnsolicitedAdvice"] = "delegatePoHUnsolicitedAdvice";

erg.constants["delegatePoHRemiliaShop"] = "delegatePoHRemiliaShop";

erg.constants["delegatePoHRemiliaHeartOpen"] = "delegatePoHRemiliaHeartOpen";

erg.constants["delegatePoHInterstitial"] = "delegatePoHInterstitial";

erg.constants["delegatePoHLoadGameMenu"] = "delegatePoHLoadGameMenu";

erg.constants["delegatePoHHelp"] = "delegatePoHHelp";

erg.constants["delegatePoHTitleScreen"] = "delegatePoHTitleScreen";

//################################### MENU CONSTANTS #################################################


//################################### ACT CONSTANTS #################################################

erg.constants["pohSpring"] = "pohSpring";
erg.constants["pohSummer"] = "pohSummer";
erg.constants["pohAutumn"] = "pohAutumn";
erg.constants["pohWinter"] = "pohWinter";

erg.constants["pohStartWeekSummer"] = 13;
erg.constants["pohStartWeekAutumn"] = 26;
erg.constants["pohStartWeekWinter"] = 39;

//################################### BACKDROP CONSTANTS #################################################


//################################### PROFILE IMAGE CONSTANTS #################################################

erg.constants["profileExtension"] = ".jpg"; 

//################################### AUDIO CONSTANTS #################################################

//Jukebox Keys (BGM)


//SFX

erg.constants["titpSFXButton"] = "button.wav";
erg.constants["titpSFXBothMiss"] = "bothMiss.wav";
erg.constants["titpSFXMasterSpark"] = "masterSpark.wav";
erg.constants["titpSFXMenu"] = "menu.wav";
erg.constants["titpSFXNPCHits"] = "npcHits.wav";
erg.constants["titpSFXPCHits"] = "playerHits.wav";
erg.constants["titpSFXDefeat"] = "playerLoses.wav";
erg.constants["titpSFXVictory"] = "playerWins.wav";





//################################### REPOSITORY CONSTANTS #################################################

erg.constants["pohHearts"] = "pohHearts"; //"Hearts" will be the term for the "characters" of PoH, since they're not characters in the assumed ERG sense.

erg.constants["pohTiers"] = "pohTiers";

erg.constants["pohSpecies"] = "pohSpecies";

erg.constants["pohHairLength"] = "pohHairLength";
erg.constants["pohHairColour"] = "pohHairColour";
erg.constants["pohEyeColour"] = "pohEyeColour";

erg.constants["pohAttractionTargets"] = "pohAttractionTargets";

erg.constants["pohTraits"] = "pohTraits";

erg.constants["pohAttributes"] = "pohAttributes";

erg.constants["pohPassionTracks"] = "pohPassionTracks";

erg.constants["pohAttributeTestScenarios"] = "pohAttributeTestScenarios";

erg.constants["pohNews"] = "pohNews";

erg.constants["pohScheduledNewsItems"] = "pohScheduledNewsItems";

erg.constants["pohRelationshipTypes"] = "pohRelationshipTypes";

erg.constants["pohAttributeChangeScenarios"] = "pohAttributeChangeScenarios";

erg.constants["pohTraitChangeScenarios"] = "pohTraitChangeScenarios";

erg.constants["pohDanmakuOpponents"] = "pohDanmkauOpponents";

erg.constants["pohDefaultAdviceLetter"] = "pohDefaultAdviceLetter";

erg.constants["pohUIFunctions"] = "pohUIFunctions";

//################################### GLOSSARY CONSTANTS #################################################


//################################### LOCATION CONSTANTS #################################################


//################################### FLAG CONSTANTS #################################################

erg.constants["pohFlagRemiliaShopOpen"] = "pohFlagRemiliaShopOpen";
erg.constants["pohRemiliaShopOpenWeekNumber"] = 14;

erg.constants["pohFlagUnsolicitedAdviceLetter"] = "pohFlagUnsolicitedAdviceLetter";

//################################### INITIALISATION AND GAME PARAM CONSTANTS #################################################

erg.constants["pohInitialActiveHearts"] = 10;

erg.constants["pohInitialAdviceLetters"] = 2;

erg.constants["pohFinalWeek"] = 51;

//################################### WORLD CONSTANTS #################################################

erg.constants["pohCurrentWeek"] = "pohCurrentWeek";

erg.constants["pohValidInitialHearts"] = "pohValidInitialHearts";

erg.constants["pohHeartsArray"] = "pohHeartsArray";

erg.constants["pohValidRandomAttractionTraits"] = "pohValidRandomAttractionTraits";
erg.constants["pohValidRandomReactionTraits"] = "pohValidRandomReactionTraits";
erg.constants["pohValidRandomRelationshipTraits"] = "pohValidRandomRelationshipTraits";

erg.constants["pohValidAttributes"] = "pohValidAttributes";

erg.constants["pohValidRandomPassionTracks"] = "pohValidRandomPassionTracks";

erg.constants["pohValidRandomDateScenarios"] = "pohValidRandomDateScenarios";

erg.constants["pohCandidateRandomNewsTypes"] = "pohCandidateRandomNewsTypes";

erg.constants["pohWeeks"] = "pohWeeks";

erg.constants["pohRelationships"] = "pohRelationships";

erg.constants["pohValidRandomAttributeChangeScenarios"] = "pohValidRandomAttributeChangeScenarios";

erg.constants["pohAdvice"] = "pohAdvice";

erg.constants["pohLastSelectedNewsTab"] = "pohLastSelectedNewsTab";

//################################### HEARTS CONSTANTS #################################################


erg.constants["pohHeartNone"] = "pohHeartNone";  //For non-heart characters, eg TitTP characters in danmaku

//EoSD

erg.constants["pohKoakuma"] = "pohKoakuma";

//PCB

erg.constants["pohLetty"] = "pohLetty";
erg.constants["pohMerlin"] = "pohMerlin";
erg.constants["pohLunasa"] = "pohLunasa";
erg.constants["pohLyrica"] = "pohLyrica";
erg.constants["pohRan"] = "pohRan";


//IN

erg.constants["pohMystia"] = "pohMystia";
erg.constants["pohKeine"] = "pohKeine";
erg.constants["pohEirin"] = "pohEirin";
erg.constants["pohKaguya"] = "pohKaguya";
erg.constants["pohMokou"] = "pohMokou";


//PoFV

erg.constants["pohYuuka"] = "pohYuuka";
erg.constants["pohEiki"] = "pohEiki";


//MoF

erg.constants["pohShizuha"] = "pohShizuha";
erg.constants["pohMinoriko"] = "pohMinoriko";
erg.constants["pohHina"] = "pohHina";
erg.constants["pohMomiji"] = "pohMomiji";
erg.constants["pohKanako"] = "pohKanako";


//SA

erg.constants["pohParsee"] = "pohParsee";
erg.constants["pohYuugi"] = "pohYuugi";
erg.constants["pohRin"] = "pohRin";


//UFO

erg.constants["pohKogasa"] = "pohKogasa";
erg.constants["pohIchirin"] = "pohIchirin";
erg.constants["pohMurasa"] = "pohMurasa";
erg.constants["pohShou"] = "pohShou";
erg.constants["pohByakuren"] = "pohByakuren";
erg.constants["pohNue"] = "pohNue";


//DS

erg.constants["pohHatate"] = "pohHatate";


//TD

erg.constants["pohKyouko"] = "pohKyouko";
erg.constants["pohYoshika"] = "pohYoshika";
erg.constants["pohSeiga"] = "pohSeiga";
erg.constants["pohTojiko"] = "pohTojiko";
erg.constants["pohFuto"] = "pohFuto";
erg.constants["pohMiko"] = "pohMiko";
erg.constants["pohMamizou"] = "pohMamizou";

//WaHH

erg.constants["pohKasen"] = "pohKasen";


//################################### TIER CONSTANTS #################################################

//Unlike TitTP, PoH needs to deal with Stage 1 and 2 bosses, and mid-bosses from all stages.  On the plus side, no Yukari occuyping a tier of her own :)

//Midbosses: counted as one tier lower, unless they're already Stage 1 bosses, in which case they stay 1.

//Tier keys

erg.constants["pohTierYoukaiSage"] = "pohTierYoukaiSage";  //Yukari, 11
erg.constants["pohTierYoukaiMiko"] = "pohTierYoukaiMiko";  //Reimu, 9
erg.constants["pohTierConqueringWitch"] = "pohTierConqueringWitch";  //Marisa, 8
erg.constants["pohTierExtra"] = "pohTierExtra";  //Extra
erg.constants["pohTierBoss"] = "pohTierBoss";    //6
erg.constants["pohTierHero"] = "pohTierHero";    //5
erg.constants["pohTierLieutenant"] = "pohTierLieutenant";  //4
erg.constants["pohTierGuard"] = "pohTierGuard";   //3
erg.constants["pohTierThug"] = "pohTierThug"; //2
erg.constants["pohTierRuffian"] = "pohTierRuffian"; //1
erg.constants["pohTierMook"] = "pohTierMook"; //Stage 1 midbosses, 0

//################################### SPECIES CONSTANTS #################################################

erg.constants["pohSpeciesDevil"] = "pohSpeciesDevil";

erg.constants["pohSpeciesYukiOnna"] = "pohSpeciesYukiOnna";

erg.constants["pohSpeciesYuurei"] = "pohSpeciesYuurei";

erg.constants["pohSpeciesPoltergeist"] = "pohSpeciesPoltergeist";

erg.constants["pohSpeciesKitsune"] = "pohSpeciesKitsune";

erg.constants["pohSpeciesNightSparrow"] = "pohSpeciesNightSparrow";

erg.constants["pohSpeciesWereHakutaku"] = "pohSpeciesWereHakutaku";

erg.constants["pohSpeciesGod"] = "pohSpeciesGod";

erg.constants["pohSpeciesHouraiImmortal"] = "pohSpeciesHouraiImmortal";

erg.constants["pohSpeciesYoukai"] = "pohSpeciesYoukai";

erg.constants["pohSpeciesDevil"] = "pohSpeciesDevil";

erg.constants["pohSpeciesYama"] = "pohSpeciesYama";

erg.constants["pohSpeciesDevil"] = "pohSpeciesDevil";

erg.constants["pohSpeciesWhiteWolfTengu"] = "pohSpeciesWhiteWolfTengu";

erg.constants["pohSpeciesCrowTengu"] = "pohSpeciesCrowTengu";

erg.constants["pohSpeciesHashihime"] = "pohSpeciesHashihime";

erg.constants["pohSpeciesOni"] = "pohSpeciesOni";

erg.constants["pohSpeciesKasha"] = "pohSpeciesKasha";

erg.constants["pohSpeciesKarakasaObake"] = "pohSpeciesKarakasaObake";

erg.constants["pohSpeciesTiger"] = "pohSpeciesTiger";

erg.constants["pohSpeciesMagician"] = "pohSpeciesMagician";

erg.constants["pohSpeciesNue"] = "pohSpeciesNue";

erg.constants["pohSpeciesYamabiko"] = "pohSpeciesYamabiko";

erg.constants["pohSpeciesJiangShi"] = "pohSpeciesJiangShi";

erg.constants["pohSpeciesBourei"] = "pohSpeciesBourei";

erg.constants["pohSpeciesSaint"] = "pohSpeciesSaint";

erg.constants["pohSpeciesBakeDanuki"] = "pohSpeciesBakeDanuki";



//################################### APPEARANCE CONSTANTS #################################################

//Hair

erg.constants["pohHairLong"] = "pohHairLong";
erg.constants["pohHairMedium"] = "pohHairMedium";
erg.constants["pohHairShort"] = "pohHairShort";

erg.constants["pohHairBlack"] = "pohHairBlack";
erg.constants["pohHairBlonde"] = "pohHairBlonde";
erg.constants["pohHairWhite"] = "pohHairWhite";
erg.constants["pohHairSilver"] = "pohHairSilver";
erg.constants["pohHairBrown"] = "pohHairBrown";
erg.constants["pohHairGreen"] = "pohHairGreen";
erg.constants["pohHairRed"] = "pohHairRed";
erg.constants["pohHairPink"] = "pohHairPink";
erg.constants["pohHairGrey"] = "pohHairGrey";
erg.constants["pohHairPurple"] = "pohHairPurple";
erg.constants["pohHairLavender"] = "pohHairLavender";
erg.constants["pohHairBlue"] = "pohHairBlue";
erg.constants["pohHairByakuren"] = "pohHairByakuren";
erg.constants["pohHairShou"] = "pohHairShou";

//Eyes

erg.constants["pohEyesHazel"] = "pohEyesHazel";
erg.constants["pohEyesBrown"] = "pohEyesBrown";
erg.constants["pohEyesBlue"] = "pohEyesBlue";
erg.constants["pohEyesGreen"] = "pohEyesGreen";
erg.constants["pohEyesRed"] = "pohEyesRed";
erg.constants["pohEyesLavender"] = "pohEyesLavender";
erg.constants["pohEyesPurple"] = "pohEyesPurple";
erg.constants["pohEyesGold"] = "pohEyesGold";
erg.constants["pohEyesGrey"] = "pohEyesGrey";
erg.constants["pohEyesKogasa"] = "pohEyesKogasa";


//################################### TRAIT CONSTANTS #################################################

//Randomisation controls

erg.constants["pohRandomTraits"] = 5;

//erg.constants["pohRandomTraitsPerCategory"] = 5; - Prolly going to do something like this 

//Categories

erg.constants["pohTraitCategoryAttraction"] = "pohTraitCategoryAttraction";
erg.constants["pohTraitCategoryReaction"] = "pohTraitCategoryReaction";
erg.constants["pohTraitCategorySpecial"] = "pohTraitCategorySpecial";


//ATTRACTION


//Types

erg.constants["pohTraitTypeAttractionModifierConditional"] = "pohTraitTypeAttractionModifierConditional";
erg.constants["pohTraitTypeAttractionModifierAutomaticBuff"] = "pohTraitTypeAttractionModifierAutomaticBuff";
erg.constants["pohTraitTypeAttractionModifierAutomaticPenalty"] = "pohTraitTypeAttractionModifierAutomaticPenalty";

//Targets

erg.constants["pohAttractionTargetHairLength"] = "pohAttractionTargetHairLength";
erg.constants["pohAttractionTargetHairColour"] = "pohAttractionTargetHairColour";
erg.constants["pohAttractionTargetEyeColour"] = "pohAttractionTargetEyeColour";
erg.constants["pohAttractionTargetSpecies"] = "pohAttractionTargetSpecies";

erg.constants["pohAttractionTargetTier"] = "pohAttractionTargetTier";

    erg.constants["pohAttractionSubtargetTierLower"] = "pohAttractionSubtargetTierLower";
    erg.constants["pohAttractionSubtargetTierEqual"] = "pohAttractionSubtargetTierEqual";
    erg.constants["pohAttractionSubtargetTierHigher"] = "pohAttractionSubtargetTierHigher";

erg.constants["pohAttractionTargetGeneric"] = "pohAttractionTargetGeneric";


//Attraction modifying traits

erg.constants["pohAttractionModifierExtreme"] = 40;
erg.constants["pohAttractionModifierVeryHigh"] = 20;
erg.constants["pohAttractionModifierHigh"] = 10;
erg.constants["pohAttractionModifierLow"] = 5;

//Hair Length

erg.constants["pohTraitAttractionHairLong"] = "pohTraitAttractionHairLong";
erg.constants["pohTraitAttractionHairShort"] = "pohTraitAttractionHairShort";
erg.constants["pohTraitAttractionHairAny"] = "pohTraitAttractionHairAny";

//Hair Colour

erg.constants["pohTraitAttractionHairExotic"] = "pohTraitAttractionHairExotic";  //Byakuren, Shou
erg.constants["pohTraitAttractionHairTraditional"] = "pohTraitAttractionHairTraditional"; //Black, Brown
erg.constants["pohTraitAttractionHairGold"] = "pohTraitAttractionHairGold"; //Blonde
erg.constants["pohTraitAttractionHairWinter"] = "pohTraitAttractionHairWinter"; //Grey, Silver, White
erg.constants["pohTraitAttractionHairRose"] = "pohTraitAttractionHairRose"; //Red, Pink
erg.constants["pohTraitAttractionHairCool"] = "pohTraitAttractionHairCool"; //Blue, Purple, Lavender
erg.constants["pohTraitAttractionHairLively"] = "pohTraitAttractionHairLively"; //Green

//Eye Colour

erg.constants["pohTraitAttractionEyesRed"] = "pohTraitAttractionEyesRed";   //Red
erg.constants["pohTraitAttractionEyesCool"] = "pohTraitAttractionEyesCool"; //Blue, Purple, Lavender
erg.constants["pohTraitAttractionEyesMetallic"] = "pohTraitAttractionEyesMetallic";   //Gold, Grey
erg.constants["pohTraitAttractionEyesTraditional"] = "pohTraitAttractionEyesTraditional";   //Brown, Hazel
erg.constants["pohTraitAttractionEyesGreen"] = "pohTraitAttractionEyesGreen";   //Green
erg.constants["pohTraitAttractionEyesExotic"] = "pohTraitAttractionEyesExotic";   //Kogasa


//Species

erg.constants["pohTraitAttractionSpeciesHell"] = "pohTraitAttractionSpeciesHell"; //Oni, Devil, Kasha, Yama
erg.constants["pohTraitAttractionSpeciesBeast"] = "pohTraitAttractionSpeciesBeast"; //Kitsune, Bake-danuki, Night Sparrow, Kasha, Were-Hakutaku, Tiger, Tengu
erg.constants["pohTraitAttractionSpeciesDead"] = "pohTraitAttractionSpeciesDead"; //Yuurei, Bourei, Poltergeist, Jiang Shi
erg.constants["pohTraitAttractionSpeciesDivine"] = "pohTraitAttractionSpeciesDivine"; //God, Yama
erg.constants["pohTraitAttractionSpeciesUndying"] = "pohTraitAttractionSpeciesUndying"; //Hourai Immortal, Hermit, Saint, Magician
erg.constants["pohTraitAttractionSpeciesYoukai"] = "pohTraitAttractionSpeciesYoukai"; //Youkai, Yuki-onna, Hashihime, Karakasa obake, Nue, Yamabiko

//Tier

erg.constants["pohTraitAttractionTierWeak"] = "pohTraitAttractionTierWeak";
erg.constants["pohTraitAttractionTierEqual"] = "pohTraitAttractionTierEqual";
erg.constants["pohTraitAttractionTierStrong"] = "pohTraitAttractionTierStrong";

//Generic

erg.constants["pohTraitAttractionGenericMarisa"] = "pohTraitAttractionGenericMarisa"; //Girl crazy, buff to all attraction scores
erg.constants["pohTraitAttractionGenericNone"] = "pohTraitAttractionGenericNone"; //"Not shallow", penalty to all attraction scores

//Special

erg.constants["pohTraitAttractionGirlInUniform"] = "pohTraitAttractionGirlInUniform";  //Target's Murasa's "Ship's Captain" trait


//REACTION

//Types

erg.constants["pohTraitTypeReactionTestModifier"] = "pohTraitTypeReactionTestModifier"; //Standard Attribute test Connection change modifiers

//ReactionTestModifier

//Inversions
erg.constants["pohTraitReactionTsundere"] = "pohTraitReactionTsundere"; //+Hubris, -Expression
erg.constants["pohTraitReactionAwkwardEnvy"] = "pohTraitReactionAwkwardEnvy"; //+Jealousy, -Sociability
erg.constants["pohTraitReactionCoward"] = "pohTraitReactionCoward"; //+Pettiness, -Courage
erg.constants["pohTraitReactionBeast"] = "pohTraitReactionBeast"; //+Viciousness, -Cleverness

erg.constants["pohTraitReactionNoHero"] = "pohTraitReactionNoHero"; //-Cleverness, -Courage
erg.constants["pohTraitReactionNoPoet"] = "pohTraitReactionNoPoet"; //-Expression, -Sociability
erg.constants["pohTraitReactionMistress"] = "pohTraitReactionMistress"; //+Hubris, +Jealousy
erg.constants["pohTraitReactionVillain"] = "pohTraitReactionVillain"; //+Pettiness, +Viciousness

erg.constants["pohTraitReactionIntelligentsiaDistaste"] = "pohTraitReactionIntelligentsiaDistaste"; //--Cleverness
erg.constants["pohTraitReactionHeroicContempt"] = "pohTraitReactionHeroicContempt"; //--Courage
erg.constants["pohTraitReactionHatredSilverTongues"] = "pohTraitReactionHatredSilverTongues"; //--Expression
erg.constants["pohTraitReactionCarousersFoe"] = "pohTraitReactionCarousersFoe"; //--Sociability

erg.constants["pohTraitReactionBelovedProud"] = "pohTraitReactionBelovedProud"; //++Hubris
erg.constants["pohTraitReactionGreenEyedMonster"] = "pohTraitReactionGreenEyedMonster"; //++Jealousy
erg.constants["pohTraitReactionVindictiveCute"] = "pohTraitReactionVindictiveCute"; //++Pettiness
erg.constants["pohTraitReactionLovelyMalice"] = "pohTraitReactionLovelyMalice"; //++Viciousness

//Buffs
erg.constants["pohTraitReactionEgalitarian"] = "pohTraitReactionEgalitarian"; //+Sociability, -Jealousy
erg.constants["pohTraitReactionNoble"] = "pohTraitReactionNoble"; //+Courage, -Pettiness
erg.constants["pohTraitReactionEnlightened"] = "pohTraitReactionEnlightened"; //+Cleverness, -Viciousness
erg.constants["pohTraitReactionSweetHumble"] = "pohTraitReactionSweetHumble"; //+Expression, -Hubris

erg.constants["pohTraitReactionHero"] = "pohTraitReactionHero"; //+Cleverness, +Courage
erg.constants["pohTraitReactionPoet"] = "pohTraitReactionPoet"; //+Expression, +Sociability
erg.constants["pohTraitReactionNoMistress"] = "pohTraitReactionNoMistress"; //-Hubris, -Jealousy
erg.constants["pohTraitReactionNoVillain"] = "pohTraitReactionNoVillain"; //-Pettiness, -Viciousness

erg.constants["pohTraitReactionGenius"] = "pohTraitReactionGenius"; //++Cleverness
erg.constants["pohTraitReactionFearless"] = "pohTraitReactionFearless"; //++Courage
erg.constants["pohTraitReactionMuse"] = "pohTraitReactionMuse"; //++Expression
erg.constants["pohTraitReactionSocialButterfly"] = "pohTraitReactionSocialButterfly"; //++Sociability

erg.constants["pohTraitReactionTragedy"] = "pohTraitReactionTragedy"; //--Hubris
erg.constants["pohTraitReactionTrust"] = "pohTraitReactionTrust"; //--Jealousy
erg.constants["pohTraitReactionVindictiveUgly"] = "pohTraitReactionVindictiveUgly"; //--Pettiness
erg.constants["pohTraitReactionCruelty"] = "pohTraitReactionCruelty"; //--Viciousness




//SPECIAL

erg.constants["pohTraitSpecialInfernalAllure"] = "pohTraitSpecialInfernalAllure"; //Koakuma

erg.constants["pohTraitSpecialPowerToManipulateCold"] = "pohTraitSpecialPowerToManipulateCold"; //Letty
erg.constants["pohTraitSpecialPowerToManipulateColdPassionBonus"] = 10;

erg.constants["pohTraitSpecialMournfulMusic"] = "pohTraitSpecialMournfulMusic" //Lunasa
erg.constants["pohTraitSpecialMournfulMusicBonus"] = -50;

erg.constants["pohTraitSpecialManicMusic"] = "pohTraitSpecialManicMusic" //Merlin
erg.constants["pohTraitSpecialManicMusicBonus"] = 50;

erg.constants["pohTraitSpecialImpossibleMusic"] = "pohTraitSpecialImpossibleMusic";
erg.constants["pohTraitSpecialImpossibleMusicExpressionBonusFactor"] = 0.1;

erg.constants["pohTraitSpecialShikigami"] = "pohTraitSpecialShikigami"; //Ran
erg.constants["pohTraitSpecialShikigamiDateEvents"] = 5;

erg.constants["pohTraitSpecialDeafToAllButTheSong"] = "pohTraitSpecialDeafToAllButTheSong"; //Mystia

erg.constants["pohTraitSpecialHistoryEater"] = "pohTraitSpecialHistoryEater";  //Keine

erg.constants["pohTraitSpecialBrainOfTheMoon"] = "pohTraitSpecialBrainOfTheMoon";  //Eirin
erg.constants["pohTraitSpecialBrainOfTheMoonPassionBonus"] = 5;

erg.constants["pohTraitSpecialImpossiblyBeautiful"] = "pohTraitSpecialImpossiblyBeautiful";  //Kaguya
erg.constants["pohTraitSpecialImpossiblyBeautifulAttractionBonus"] = 10;

erg.constants["pohTraitSpecialFlameOfHourai"] = "pohTraitSpecialFlameOfHourai";  //Mokou
erg.constants["pohTraitSpecialFlameOfHouraiPassionBonus"] = 5;


erg.constants["pohTraitSpecialSayItWithFlowers"] = "pohTraitSpecialSayItWithFlowers"; //Yuuka
erg.constants["pohTraitSpecialSayItWithFlowersPassionBonus"] = 5;

erg.constants["pohTraitSpecialIndependent"] = "pohTraitSpecialIndependent";  //Kanako + Yuuka
erg.constants["pohTraitSpecialIndependentAdviceFactor"] = 0.5;
erg.constants["pohTraitSpecialIndependentDateFactor"] = 2;

erg.constants["pohTraitSpecialBlackOrWhite"] = "pohTraitSpecialBlackOrWhite";  //Eiki
erg.constants["pohTraitSpecialBlackOrWhiteThreshold"] = 51;

erg.constants["pohTraitSpecialSymbolOfLonelinessAndDemise"] = "pohTraitSpecialSymbolOfLonelinessAndDemise";  //Shizuha
erg.constants["pohTraitSpecialSymbolOfLonelinessAndDemiseLonelinessBonus"] = 10;

erg.constants["pohTraitSpecialBountifulHarvest"] = "pohTraitSpecialBountifulHarvest"; //Minoriko
erg.constants["pohTraitSpecialBountifulHarvestPassionBonus"] = 10;

erg.constants["pohTraitSpecialWheelOfFortune"] = "pohTraitSpecialWheelOfFortune";  //Hina
erg.constants["pohTraitSpecialWheelOfFortuneProcBonus"] = 10;

erg.constants["pohTraitSpecialTelegnosis"] = "pohTraitSpecialTelegnosis";  //Momiji

erg.constants["pohTraitSpecialMoriyaShrineConspiracy"] = "pohTraitSpecialMoriayShrineConspiracy"; //Kanako
erg.constants["pohTraitSpecialMoriyaShrineConspiracyReputationFactor"] = 2;

erg.constants["pohTraitSpecialPowerToManipulateJealousy"] = "pohTraitSpecialPowerToManipulateJealousy";  //Parsee

erg.constants["pohTraitSpecialLoveOfStrength"] = "pohTraitSpecialLoveOfStrength";  //Yuugi
erg.constants["pohTraitSpecialLoveOfStrengthPassionBonus"] = 5;

erg.constants["pohTraitSpecialFurnaceCat"] = "pohTraitSpecialFurnaceCat"; //Rin
erg.constants["pohTraitSpecialFurnaceCatPassionBonus"] = 10;

erg.constants["pohTraitSpecialSurprise"] = "pohTraitSpecialSurprise";  //Kogasa
erg.constants["pohTraitSpecialSurpriseCourageSuccess"] = -10;
erg.constants["pohTraitSpecialSurpriseCourageFail"] = 10;

erg.constants["pohTraitSpecialUnzanIsWatching"] = "pohTraitSpecialUnzanIsWatching"; //Ichirin
erg.constants["pohTraitSpecialUnzanIsWatchingRefusalModifier"] = 40;

erg.constants["pohTraitSpecialShipCaptain"] = "pohTraitSpecialShipCaptain";  //Murasa

erg.constants["pohTraitSpecialAvatarOfBishamonten"] = "pohTraitSpecialPowerAvatarOfBishamonten";  //Shou

erg.constants["pohTraitSpecialFillingTheWorldWithLight"] = "pohTraitSpecialFillingTheWorldWithLight";  //Byakuren
erg.constants["pohTraitSpecialFillingTheWorldWithLightPassionBonus"] = 5;

erg.constants["pohTraitSpecialUndefinedFantasticObject"] = "pohTraitSpecialUndefinedFantasticObject";  //Nue
erg.constants["pohTraitSpecialUndefinedFantasticObjectThreshold"] = 50;
erg.constants["pohTraitSpecialUndefinedFantasticObjectAttraction"] = 75;

erg.constants["pohTraitSpecialThoughtography"] = "pohTraitSpecialThoughtography";
erg.constants["pohTraitSpecialThoughtographyPassionBonus"] = -5;

erg.constants["pohTraitSpecialEcho"] = "pohTraitSpecialEcho";  //Kyouko

erg.constants["pohTraitLoyalServant"] = "pohTraitLoyalServant"; //Yoshika

erg.constants["pohTraitDemandingMaster"] = "pohTraitDemandingMaster"; //Seiga

erg.constants["pohTraitSpecialGhostlyBody"] = "pohTraitSpecialGhostlyBody"; //Tojiko
erg.constants["pohTraitSpecialGhostlyBodyAttractionBonus"] = -3;
erg.constants["pohTraitSpecialGhostlyBodyPassionBonus"] = 14;

erg.constants["pohTraitSpecialAnachronism"] = "pohTraitSpecialAnachronism";  //Futo
erg.constants["pohTraitSpecialAnachronismRefusalBonus"] = 20;
erg.constants["pohTraitSpecialAnachronismStabilityBonus"] = 10;

erg.constants["pohTraitSpecialCrownPrince"] = "pohTraitSpecialCrownPrince";  //Miko
erg.constants["pohTraitSpecialCrownPrinceStabilityFactor"] = 2;
erg.constants["pohTraitSpecialCrownPrinceStabilityBonus"] = 20;

erg.constants["pohTraitSpecialTenDesires"] = "pohTraitSpecialTenDesires";  //Miko

erg.constants["pohTraitSpecialMoneylender"] = "pohTraitSpecialMoneylender";  //Mamizou
erg.constants["pohTraitSpecialMoneylenderPassionBonus"] = 5;


erg.constants["pohTraitSpecialDisguisedOni"] = "pohTraitSpecialDisguisedOni";  //Kogasa
erg.constants["pohTraitSpecialDisguisedOniCourageSuccess"] = 5;
erg.constants["pohTraitSpecialDisguisedOniCourageFail"] = -5;
erg.constants["pohTraitSpecialDisguisedOniSociabilitySuccess"] = 5;
erg.constants["pohTraitSpecialDisguisedOniSociabilityFail"] = -5;

//################################### ATTRIBUTE CONSTANTS #################################################

//Params

erg.constants["pohBaseAttributeMinimum"] = 25;
erg.constants["pohBaseAttributeRange"] = 50;

erg.constants["pohCurrentAttributeMinimum"] = 0;
erg.constants["pohCurrentAttributeMaximum"] = 95;

erg.constants["pohAttributeRollRandomMultiplier"] = 100;

//Categories

erg.constants["pohAttributeCategoryPositive"] = "pohAttributeCategoryPositive";
erg.constants["pohAttributeCategoryNegative"] = "pohAttributeCategoryNegative";
erg.constants["pohAttributeCategoryMeta"] = "pohAttributeCategoryMeta";


//Attributes


erg.constants["pohAttributeExpression"] = "pohAttributeExpression";
erg.constants["pohAttributeCourage"] = "pohAttributeCourage";
erg.constants["pohAttributeSociability"] = "pohAttributeSociability";
erg.constants["pohAttributeCleverness"] = "pohAttributeCleverness";

erg.constants["pohAttributeHubris"] = "pohAttributeHubris";
erg.constants["pohAttributeViciousness"] = "pohAttributeViciousness";
erg.constants["pohAttributePettiness"] = "pohAttributePettiness";
erg.constants["pohAttributeJealousy"] = "pohAttributeJealousy";

erg.constants["pohAttributeLoneliness"] = "pohAttributeLoneliness";
erg.constants["pohAttributeReputation"] = "pohAttributeReputation";
//erg.constants["pohAttributeSelfEsteem"] = "pohAttributeSelfEsteem";
//erg.constants["pohAttributeMonogamity"] = "pohAttributeMonogamity";


//Test Constants

erg.constants["pohAttributeTestDefaultPositiveSuccessChange"] = 3;
erg.constants["pohAttributeTestDefaultPositiveFailChange"] = -3;

erg.constants["pohAttributeTestDefaultNegativeSuccessChange"] = -3;
erg.constants["pohAttributeTestDefaultNegativeFailChange"] = 3;

erg.constants["pohAttributeTestTraitAddLow"] = 6;
erg.constants["pohAttributeTestTraitSubtractLow"] = -6;

erg.constants["pohAttributeTestTraitAddHigh"] = 9;
erg.constants["pohAttributeTestTraitSubtractHigh"] = -9;


//################################### ATTRIBUTE CHANGE SCENARIOS CONSTANTS #################################################


erg.constants["pohAttributeChangeScenarioGainValue"] = 5;
erg.constants["pohAttributeChangeScenarioLoseValue"] = -5;  //In practice I expect this will always be the -ve version of the former, but if we specify it we can be lazy and just add


erg.constants["pohAttributeChangeScenarioGainCleverness"] = "pohAttributeChangeScenarioGainCleverness";
erg.constants["pohAttributeChangeScenarioGainCourage"] = "pohAttributeChangeScenarioGainCourage";
erg.constants["pohAttributeChangeScenarioGainExpression"] = "pohAttributeChangeScenarioGainExpression";
erg.constants["pohAttributeChangeScenarioGainSociability"] = "pohAttributeChangeScenarioGainSociability";

erg.constants["pohAttributeChangeScenarioGainHubris"] = "pohAttributeChangeScenarioGainHubris";
erg.constants["pohAttributeChangeScenarioGainJealousy"] = "pohAttributeChangeScenarioGainJealousy";
erg.constants["pohAttributeChangeScenarioGainPettiness"] = "pohAttributeChangeScenarioGainPettiness";
erg.constants["pohAttributeChangeScenarioGainViciousness"] = "pohAttributeChangeScenarioGainViciousness";

erg.constants["pohAttributeChangeScenarioGainLoneliness"] = "pohAttributeChangeScenarioGainLoneliness";

erg.constants["pohAttributeChangeScenarioLoseCleverness"] = "pohAttributeChangeScenarioLoseCleverness";
erg.constants["pohAttributeChangeScenarioLoseCourage"] = "pohAttributeChangeScenarioLoseCourage";
erg.constants["pohAttributeChangeScenarioLoseExpression"] = "pohAttributeChangeScenarioLoseExpression";
erg.constants["pohAttributeChangeScenarioLoseSociability"] = "pohAttributeChangeScenarioLoseSociability";

erg.constants["pohAttributeChangeScenarioLoseHubris"] = "pohAttributeChangeScenarioLoseHubris";
erg.constants["pohAttributeChangeScenarioLoseJealousy"] = "pohAttributeChangeScenarioLoseJealousy";
erg.constants["pohAttributeChangeScenarioLosePettiness"] = "pohAttributeChangeScenarioLosePettiness";
erg.constants["pohAttributeChangeScenarioLoseViciousness"] = "pohAttributeChangeScenarioLoseViciousness";

erg.constants["pohAttributeChangeScenarioLoseLoneliness"] = "pohAttributeChangeScenarioLoseLoneliness";

//################################### ATTRACTION CONSTANTS #################################################

erg.constants["pohBaseAttractionMinimum"] = 25;
erg.constants["pohBaseAttractionRange"] = 50;

erg.constants["pohCurrentAttractionMinimum"] = 0;
erg.constants["pohCurrentAttractionMaximum"] = 95;


erg.constants["pohReputationMidpoint"] = 50;
erg.constants["pohReputationAttractionFactor"] = 2;


//################################### CONNECTION CONSTANTS #################################################

//Passion

erg.constants["pohBasePassionMinimum"] = 0;
erg.constants["pohBasePassionRange"] = 50;

erg.constants["pohCurrentPassionMinimum"] = 0;
erg.constants["pohCurrentPassionMaximum"] = 95;


//Tracks

erg.constants["pohPassionTrackFriend"] = "pohPassionTrackFriend";
erg.constants["pohPassionTrackAlly"] = "pohPassionTrackAlly";
erg.constants["pohPassionTrackRival"] = "pohPassionTrackRival";
erg.constants["pohPassionTrackEnemy"] = "pohPassionTrackEnemy";
erg.constants["pohPassionTrackLove"] = "pohPassionTrackLove";

erg.constants["pohPassionTrackSister"] = "pohPassionTrackSister";
erg.constants["pohPassionTrackMaster"] = "pohPassionTrackMaster";
erg.constants["pohPassionTrackServant"] = "pohPassionTrackServant";

erg.constants["pohPassionTrackMokouKaguya"] = "pohPassionTrackMokouKaguya";

erg.constants["pohPassionTrackStage0"] = 0;
erg.constants["pohPassionTrackStage1"] = 1;
erg.constants["pohPassionTrackStage2"] = 2;
erg.constants["pohPassionTrackStage3"] = 3;
erg.constants["pohPassionTrackStage4"] = 4;
erg.constants["pohPassionTrackStage5"] = 5;


//################################### PASSION CHANGE SCENARIOS CONSTANTS #################################################


erg.constants["pohPassionChangeScenarioGainValue"] = 10;
erg.constants["pohPassionChangeScenarioLoseValue"] = -10;  //In practice I expect this will always be the -ve version of the former, but if we specify it we can be lazy and just add


//EoSD
erg.constants["pohPassionChangeScenarioGainKoakuma"] = "pohPassionChangeScenarioGainKoakuma";
erg.constants["pohPassionChangeScenarioLoseKoakuma"] = "pohPassionChangeScenarioLoseKoakuma";

//PCB
erg.constants["pohPassionChangeScenarioGainLetty"] = "pohPassionChangeScenarioGainLetty";
erg.constants["pohPassionChangeScenarioLoseLetty"] = "pohPassionChangeScenarioLoseLetty";
erg.constants["pohPassionChangeScenarioGainLyrica"] = "pohPassionChangeScenarioGainLyrica";
erg.constants["pohPassionChangeScenarioLoseLyrica"] = "pohPassionChangeScenarioLoseLyrica";
erg.constants["pohPassionChangeScenarioGainMerlin"] = "pohPassionChangeScenarioGainMerlin";
erg.constants["pohPassionChangeScenarioLoseMerlin"] = "pohPassionChangeScenarioLoseMerlin";
erg.constants["pohPassionChangeScenarioGainLunasa"] = "pohPassionChangeScenarioGainLunasa";
erg.constants["pohPassionChangeScenarioLoseLunasa"] = "pohPassionChangeScenarioLoseLunasa";
erg.constants["pohPassionChangeScenarioGainRan"] = "pohPassionChangeScenarioGainRan";
erg.constants["pohPassionChangeScenarioLoseRan"] = "pohPassionChangeScenarioLoseRan";

//IN
erg.constants["pohPassionChangeScenarioGainMystia"] = "pohPassionChangeScenarioGainMystia";
erg.constants["pohPassionChangeScenarioLoseMystia"] = "pohPassionChangeScenarioLoseMystia";
erg.constants["pohPassionChangeScenarioGainKeine"] = "pohPassionChangeScenarioGainKeine";
erg.constants["pohPassionChangeScenarioLoseKeine"] = "pohPassionChangeScenarioLoseKeine";
erg.constants["pohPassionChangeScenarioGainEirin"] = "pohPassionChangeScenarioGainEirin";
erg.constants["pohPassionChangeScenarioLoseEirin"] = "pohPassionChangeScenarioLoseEirin";
erg.constants["pohPassionChangeScenarioGainKaguya"] = "pohPassionChangeScenarioGainKaguya";
erg.constants["pohPassionChangeScenarioLoseKaguya"] = "pohPassionChangeScenarioLoseKaguya";
erg.constants["pohPassionChangeScenarioGainMokou"] = "pohPassionChangeScenarioGainMokou";
erg.constants["pohPassionChangeScenarioLoseMokou"] = "pohPassionChangeScenarioLoseMokou";

//PoFV
erg.constants["pohPassionChangeScenarioGainYuuka"] = "pohPassionChangeScenarioGainYuuka";
erg.constants["pohPassionChangeScenarioLoseYuuka"] = "pohPassionChangeScenarioLoseYuuka";
erg.constants["pohPassionChangeScenarioGainEiki"] = "pohPassionChangeScenarioGainEiki";
erg.constants["pohPassionChangeScenarioLoseEiki"] = "pohPassionChangeScenarioLoseEiki";

//MoF
erg.constants["pohPassionChangeScenarioGainShizuha"] = "pohPassionChangeScenarioGainShizuha";
erg.constants["pohPassionChangeScenarioLoseShizuha"] = "pohPassionChangeScenarioLoseShizuha";
erg.constants["pohPassionChangeScenarioGainMinoriko"] = "pohPassionChangeScenarioGainMinoriko";
erg.constants["pohPassionChangeScenarioLoseMinoriko"] = "pohPassionChangeScenarioLoseMinoriko";
erg.constants["pohPassionChangeScenarioGainHina"] = "pohPassionChangeScenarioGainHina";
erg.constants["pohPassionChangeScenarioLoseHina"] = "pohPassionChangeScenarioLoseHina";
erg.constants["pohPassionChangeScenarioGainMomiji"] = "pohPassionChangeScenarioGainMomiji";
erg.constants["pohPassionChangeScenarioLoseMomiji"] = "pohPassionChangeScenarioLoseMomiji";
erg.constants["pohPassionChangeScenarioGainKanako"] = "pohPassionChangeScenarioGainKanako";
erg.constants["pohPassionChangeScenarioLoseKanako"] = "pohPassionChangeScenarioLoseKanako";

//SA
erg.constants["pohPassionChangeScenarioGainParsee"] = "pohPassionChangeScenarioGainParsee";
erg.constants["pohPassionChangeScenarioLoseParsee"] = "pohPassionChangeScenarioLoseParsee";
erg.constants["pohPassionChangeScenarioGainYuugi"] = "pohPassionChangeScenarioGainYuugi";
erg.constants["pohPassionChangeScenarioLoseYuugi"] = "pohPassionChangeScenarioLoseYuugi";
erg.constants["pohPassionChangeScenarioGainRin"] = "pohPassionChangeScenarioGainRin";
erg.constants["pohPassionChangeScenarioLoseRin"] = "pohPassionChangeScenarioLoseRin";

//UFO
erg.constants["pohPassionChangeScenarioGainKogasa"] = "pohPassionChangeScenarioGainKogasa";
erg.constants["pohPassionChangeScenarioLoseKogasa"] = "pohPassionChangeScenarioLoseKogasa";
erg.constants["pohPassionChangeScenarioGainIchirin"] = "pohPassionChangeScenarioGainIchirin";
erg.constants["pohPassionChangeScenarioLoseIchirin"] = "pohPassionChangeScenarioLoseIchirin";
erg.constants["pohPassionChangeScenarioGainMurasa"] = "pohPassionChangeScenarioGainMurasa";
erg.constants["pohPassionChangeScenarioLoseMurasa"] = "pohPassionChangeScenarioLoseMurasa";
erg.constants["pohPassionChangeScenarioGainShou"] = "pohPassionChangeScenarioGainShou";
erg.constants["pohPassionChangeScenarioLoseShou"] = "pohPassionChangeScenarioLoseShou";
erg.constants["pohPassionChangeScenarioGainByakuren"] = "pohPassionChangeScenarioGainByakuren";
erg.constants["pohPassionChangeScenarioLoseByakuren"] = "pohPassionChangeScenarioLoseByakuren";
erg.constants["pohPassionChangeScenarioGainNue"] = "pohPassionChangeScenarioGainNue";
erg.constants["pohPassionChangeScenarioLoseNue"] = "pohPassionChangeScenarioLoseNue";

//StB
erg.constants["pohPassionChangeScenarioGainHatate"] = "pohPassionChangeScenarioGainHatate";
erg.constants["pohPassionChangeScenarioLoseHatate"] = "pohPassionChangeScenarioLoseHatate";

//TD
erg.constants["pohPassionChangeScenarioGainKyouko"] = "pohPassionChangeScenarioGainKyouko";
erg.constants["pohPassionChangeScenarioLoseKyouko"] = "pohPassionChangeScenarioLoseKyouko";
erg.constants["pohPassionChangeScenarioGainYoshika"] = "pohPassionChangeScenarioGainYoshika";
erg.constants["pohPassionChangeScenarioLoseYoshika"] = "pohPassionChangeScenarioLoseYoshika";
erg.constants["pohPassionChangeScenarioGainSeiga"] = "pohPassionChangeScenarioGainSeiga";
erg.constants["pohPassionChangeScenarioLoseSeiga"] = "pohPassionChangeScenarioLoseSeiga";
erg.constants["pohPassionChangeScenarioGainTojiko"] = "pohPassionChangeScenarioGainTojiko";
erg.constants["pohPassionChangeScenarioLoseTojiko"] = "pohPassionChangeScenarioLoseTojiko";
erg.constants["pohPassionChangeScenarioGainFuto"] = "pohPassionChangeScenarioGainFuto";
erg.constants["pohPassionChangeScenarioLoseFuto"] = "pohPassionChangeScenarioLoseFuto";
erg.constants["pohPassionChangeScenarioGainMiko"] = "pohPassionChangeScenarioGainMiko";
erg.constants["pohPassionChangeScenarioLoseMiko"] = "pohPassionChangeScenarioLoseMiko";
erg.constants["pohPassionChangeScenarioGainMamizou"] = "pohPassionChangeScenarioGainMamizou";
erg.constants["pohPassionChangeScenarioLoseMamizou"] = "pohPassionChangeScenarioLoseMamizou";

//WaHH
erg.constants["pohPassionChangeScenarioGainKasen"] = "pohPassionChangeScenarioGainKasen";
erg.constants["pohPassionChangeScenarioLoseKasen"] = "pohPassionChangeScenarioLoseKasen";


//################################### ATTRIBUTE TEST SCENARIO CONSTANTS #################################################

//Same/same

erg.constants["pohAttributeTestScenarioScarletChess"] = "pohAttributeTestScenarioScarletChess"; //Cleverness/Cleverness
erg.constants["pohAttributeTestScenarioWarpathMiko"] = "pohAttributeTestScenarioWarpathMiko"; //Courage/Courage
erg.constants["pohAttributeTestScenarioPoetryBattle"] = "pohAttributeTestScenarioPoetryBattle"; //Expression/Expression
erg.constants["pohAttributeTestScenarioHakureiParty"] = "pohAttributeTestScenarioHakureiParty"; //Sociability/Sociability

erg.constants["pohAttributeTestScenarioGensokyoChronicles"] = "pohAttributeTestScenarioGensokyoChronicles"; //Hubris/Hubris
erg.constants["pohAttributeTestScenarioTripleDate"] = "pohAttributeTestScenarioTripleDate"; //Jealousy/Jealousy
erg.constants["pohAttributeTestScenarioYuyukoTrolling"] = "pohAttributeTestScenarioYuyukoTrolling"; //Pettiness/Pettiness
erg.constants["pohAttributeTestScenarioFairySquishing"] = "pohAttributeTestScenarioFairySquishing"; //Viciousness/Viciousness

//+Different/+Different

erg.constants["pohAttributeTestScenarioBorderTeam"] = "pohAttributeTestScenarioBorderTeam"; //Courage/Sociability
erg.constants["pohAttributeTestScenarioCharades"] = "pohAttributeTestScenarioCharades"; //Expression/Cleverness
erg.constants["pohAttributeTestScenarioTruthPatrol"] = "pohAttributeTestScenarioTruthPatrol"; //Cleverness/Courage
erg.constants["pohAttributeTestScenarioVillageInfluence"] = "pohAttributeTestScenarioVillageInfluence"; //Sociability/Expression

//-Different/-Different

erg.constants["pohAttributeTestScenarioChivalry"] = "pohAttributeTestScenarioChivalry"; //Hubris/Pettiness
erg.constants["pohAttributeTestScenarioGhostTeam"] = "pohAttributeTestScenarioGhostTeam"; //Jealousy/Viciousness
erg.constants["pohAttributeTestScenarioCelestialTeam"] = "pohAttributeTestScenarioCelestialTeam"; //Viciousness/Hubris
erg.constants["pohAttributeTestScenarioVampireTeam"] = "pohAttributeTestScenarioVampireTeam"; //Pettiness/Jealousy

//+Different/-Different

erg.constants["pohAttributeTestScenarioPatchouliRiddles"] = "pohAttributeTestScenarioPatchouliRiddles"; //Cleverness/Hubris
erg.constants["pohAttributeTestScenarioMismatchedDanmaku"] = "pohAttributeTestScenarioMismatchedDanmaku"; //Courage/Viciousness
erg.constants["pohAttributeTestScenarioSingForKomachi"] = "pohAttributeTestScenarioSingForKomachi"; //Expression/Jealousy
erg.constants["pohAttributeTestScenarioHakureiSakeScramble"] = "pohAttributeTestScenarioHakureiSakeScramble"; //Sociability/Pettiness

erg.constants["pohAttributeTestScenarioTreasuresOfThePast"] = "pohAttributeTestScenarioTreasuresOfThePast"; //Cleverness/Jealousy
erg.constants["pohAttributeTestScenarioTheGreatMovingLibrary"] = "pohAttributeTestScenarioTheGreatMovingLibrary"; //Courage/Pettiness
erg.constants["pohAttributeTestScenarioTragicHistories"] = "pohAttributeTestScenarioTragicHistories"; //Expression/Hubris
erg.constants["pohAttributeTestScenarioDangerousChildren"] = "pohAttributeTestScenarioDangerousChildren"; //Sociability/Viciousness

//-Different/+Different

erg.constants["pohAttributeTestScenarioRabbits"] = "pohAttributeTestScenarioRabbits"; //Pettiness/Cleverness
erg.constants["pohAttributeTestScenarioMountainBorder"] = "pohAttributeTestScenarioMountainBorder"; //Hubris/Courage
erg.constants["pohAttributeTestScenarioPenaltyGame"] = "pohAttributeTestScenarioPenaltyGame"; //Viciousness/Expression
erg.constants["pohAttributeTestScenarioIsThatSo"] = "pohAttributeTestScenarioIsThatSo"; //Jealousy/Sociability

erg.constants["pohAttributeTestScenarioPlayingTheVillains"] = "pohAttributeTestScenarioPlayingTheVillains"; //Hubris/Sociability
erg.constants["pohAttributeTestScenarioForestOfMagicInfiltration"] = "pohAttributeTestScenarioForestOfMagicInfiltration"; //Jealousy/Courage
erg.constants["pohAttributeTestScenarioDoubleDate"] = "pohAttributeTestScenarioDoubleDate"; //Pettiness/Expression
erg.constants["pohAttributeTestScenarioVenom"] = "pohAttributeTestScenarioVenom"; //Viciousness/Cleverness



//################################### DATE CONSTANTS #################################################

erg.constants["pohScenariosPerDate"] = 5;

erg.constants["pohIntimacyConsentMaximum"] = 95;  //"Not tonight, dear".  There's no minimum, since that's kind of creepy.  I could set it to 0, but I feel way less skeezy letting it go deeply negative.
erg.constants["pohIntimacyPassionBonus"] = 5;
erg.constants["pohIntimacyBaseAttractionBonus"] = 5;

//################################### LONELINESS CONSTANTS #################################################

erg.constants["pohLonelinessAdjustmentDate"] = -10;
erg.constants["pohLonelinessAdjustmentRefusedDate"] = 5;
erg.constants["pohLonelinessAdjustmentWeek"] = 5;

//################################### NEWS CONSTANTS #################################################


//Categories

erg.constants["pohNewsCategoryLetter"] = "pohNewsCategoryLetter";
erg.constants["pohNewsCategoryBunbunmaruSociety"] = "pohNewsCategoryBunbunmaruSociety";
erg.constants["pohNewsCategoryBunbunmaruGeneral"] = "pohNewsCategoryBunbunmaruGeneral";
erg.constants["pohNewsCategoryBunbunmaruDanmaku"] = "pohNewsCategoryBunbunmaruDanmaku";
erg.constants["pohNewsCategorySatori"] = "pohNewsCategorySatori";

//Types

erg.constants["pohNewsTypeMiscLetter"] = "pohNewsTypeMiscLetter";
erg.constants["pohNewsTypeAdviceLetter"] = "pohNewsTypeAdviceLetter";

erg.constants["pohNewsTypeDateRefusal"] = "pohNewsTypeDateRefusal";
erg.constants["pohNewsTypeDate"] = "pohNewsTypeDate";

erg.constants["pohNewsTypeRelationshipChange"] = "pohNewsTypeRelationshipChange";
erg.constants["pohNewsTypeRelationshipChangeCouple"] = "pohNewsTypeRelationshipChangeCouple";
erg.constants["pohNewsTypeRelationshipChangeTrueLove"] = "pohNewsTypeRelationshipChangeTrueLove";

erg.constants["pohNewsTypePassionTrackChange"] = "pohNewsTypePassionTrackChange";

erg.constants["pohNewsTypeAttributeChange"] = "pohNewsTypeAttributeChange";
erg.constants["pohNewsTypeTraitChange"] = "pohNewsTypeTraitChange";
erg.constants["pohNewsTypePassionChange"] = "pohNewsTypePassionChange";

erg.constants["pohNewsTypeHeartEntry"] = "pohNewsTypeHeartEntry";

erg.constants["pohNewsTypeNoDateBreakup"] = "pohNewsTypeNoDateBreakup";
erg.constants["pohNewsTypeJealousyBreakup"] = "pohNewsTypeJealousyBreakup";
erg.constants["pohNewsTypeBadDateBreakup"] = "pohNewsTypeBadDateBreakup";

erg.constants["pohNewsTypeDanmakuMatch"] = "pohNewsTypeDanmakuMatch";

//################################### RELATIONSHIP CONSTANTS #################################################

//0
erg.constants["pohRelationshipTypePotential"] = "pohRelationshipTypePotential";

//1
erg.constants["pohRelationshipTypeFriendsWithBenefits"] = "pohRelationshipTypeFriendsWithBenefits";
erg.constants["pohRelationshipTypeFoesWithBenefits"] = "pohRelationshipTypeFoesWithBenefits";
erg.constants["pohRelationshipTypeItem"] = "pohRelationshipTypeItem";
erg.constants["pohRelationshipTypeExtremelyCloseSisters"] = "pohRelationshipTypeExtremelyCloseSisters";
erg.constants["pohRelationshipTypeWorkplaceRomance"] = "pohRelationshipTypeWorkplaceRomance";

//2
erg.constants["pohRelationshipTypeCouple"] = "pohRelationshipTypeCouple";

//3 - Victory
erg.constants["pohRelationshipTypeTrueLove"] = "pohRelationshipTypeTrueLove";


erg.constants["pohRelationshipStrengthMinimum"] = 0;
erg.constants["pohRelationshipStrengthMaximum"] = 100;


erg.constants["pohRelationshipStabilityMinimum"] = 0;
erg.constants["pohRelationshipStabilityMaximum"] = 100;

erg.constants["pohRelationshipStabilityBase"] = 100;

erg.constants["pohRelationshipStabilityCouplePassionModifier"] = -1;
erg.constants["pohRelationshipStabilityTierModifier"] = -5;
erg.constants["pohRelationshipStabilityPassionModifier"] = -0.1;
erg.constants["pohRelationshipStabilityAttractionModifier"] = -0.1;

erg.constants["pohNoDateBreakupStabilityPenalty"] = 10;

erg.constants["pohTrueLoveStrengthThreshold"] = 100;
erg.constants["pohTrueLoveLongevityThreshold"] = 10;


//################################### COMPATIBILITY CONSTANTS #################################################

erg.constants["pohCompatibilityAttractionModifier"] = 0.25;
erg.constants["pohCompatibilityPassionModifier"] = 0.25;
erg.constants["pohCompatabilityAttributeReactionModifier"] = 2;
erg.constants["pohCompatibilityTierModifier"] = -5;

erg.constants["pohCompatibilityMinimum"] = 0;
erg.constants["pohCompatibilityMaximum"] = 100;


//################################### DANMAKU OPPONENTS CONSTANTS #################################################

//PCs

erg.constants["pohDanmakuOpponentReimu"] = "pohDanmakuOpponentReimu";
erg.constants["pohDanmakuOpponentMarisa"] = "pohDanmakuOpponentMarisa";

//EoSD

erg.constants["pohDanmakuOpponentRumia"] = "pohDanmakuOpponentRumia";
erg.constants["pohDanmakuOpponentDaiyousei"] = "pohDanmakuOpponentDaiyousei";
erg.constants["pohDanmakuOpponentCirno"] = "pohDanmakuOpponentCirno";
erg.constants["pohDanmakuOpponentChina"] = "pohDanmakuOpponentChina";
erg.constants["pohDanmakuOpponentKoakuma"] = "pohDanmakuOpponentKoakuma";
erg.constants["pohDanmakuOpponentPatchouli"] = "pohDanmakuOpponentPatchouli";
erg.constants["pohDanmakuOpponentSakuya"] = "pohDanmakuOpponentSakuya";
erg.constants["pohDanmakuOpponentRemilia"] = "pohDanmakuOpponentRemilia";
erg.constants["pohDanmakuOpponentFlandre"] = "pohDanmakuOpponentFlandre";

//PCB

erg.constants["pohDanmakuOpponentLetty"] = "pohDanmakuOpponentLetty";
erg.constants["pohDanmakuOpponentChen"] = "pohDanmakuOpponentChen";
erg.constants["pohDanmakuOpponentMerlin"] = "pohDanmakuOpponentMerlin";
erg.constants["pohDanmakuOpponentLunasa"] = "pohDanmakuOpponentLunasa";
erg.constants["pohDanmakuOpponentLyrica"] = "pohDanmakuOpponentLyrica";
erg.constants["pohDanmakuOpponentYoumu"] = "pohDanmakuOpponentYoumu";
erg.constants["pohDanmakuOpponentYuyuko"] = "pohDanmakuOpponentYuyuko";
erg.constants["pohDanmakuOpponentRan"] = "pohDanmakuOpponentRan";
erg.constants["pohDanmakuOpponentYukari"] = "pohDanmakuOpponentYukari";

//IMP

erg.constants["pohDanmakuOpponentSuika"] = "pohDanmakuOpponentSuika";


//IN

erg.constants["pohDanmakuOpponentWriggle"] = "pohDanmakuOpponentWriggle";
erg.constants["pohDanmakuOpponentMystia"] = "pohDanmakuOpponentMystia";
erg.constants["pohDanmakuOpponentKeine"] = "pohDanmakuOpponentKeine";
erg.constants["pohDanmakuOpponentTewi"] = "pohDanmakuOpponentTewi";
erg.constants["pohDanmakuOpponentReisen"] = "pohDanmakuOpponentReisen";
erg.constants["pohDanmakuOpponentEirin"] = "pohDanmakuOpponentEirin";
erg.constants["pohDanmakuOpponentKaguya"] = "pohDanmakuOpponentKaguya";
erg.constants["pohDanmakuOpponentMokou"] = "pohDanmakuOpponentMokou";


//PoFV

erg.constants["pohDanmakuOpponentAya"] = "pohDanmakuOpponentAya";
erg.constants["pohDanmakuOpponentMedicine"] = "pohDanmakuOpponentMedicine";
erg.constants["pohDanmakuOpponentYuuka"] = "pohDanmakuOpponentYuuka";
erg.constants["pohDanmakuOpponentKomachi"] = "pohDanmakuOpponentKomachi";
erg.constants["pohDanmakuOpponentEiki"] = "pohDanmakuOpponentEiki";


//MoF

erg.constants["pohDanmakuOpponentShizuha"] = "pohDanmakuOpponentShizuha";
erg.constants["pohDanmakuOpponentMinoriko"] = "pohDanmakuOpponentMinoriko";
erg.constants["pohDanmakuOpponentHina"] = "pohDanmakuOpponentHina";
erg.constants["pohDanmakuOpponentNitori"] = "pohDanmakuOpponentNitori";
erg.constants["pohDanmakuOpponentMomiji"] = "pohDanmakuOpponentMomiji";
erg.constants["pohDanmakuOpponentSanae"] = "pohDanmakuOpponentSanae";
erg.constants["pohDanmakuOpponentKanako"] = "pohDanmakuOpponentKanako";
erg.constants["pohDanmakuOpponentSuwako"] = "pohDanmakuOpponentSuwako";

//SWR

erg.constants["pohDanmakuOpponentIku"] = "pohDanmakuOpponentIku";
erg.constants["pohDanmakuOpponentTenshi"] = "pohDanmakuOpponentTenshi";


//SA

erg.constants["pohDanmakuOpponentKisume"] = "pohDanmakuOpponentKisume";
erg.constants["pohDanmakuOpponentYamame"] = "pohDanmakuOpponentYamame";
erg.constants["pohDanmakuOpponentParsee"] = "pohDanmakuOpponentParsee";
erg.constants["pohDanmakuOpponentYuugi"] = "pohDanmakuOpponentYuugi";
erg.constants["pohDanmakuOpponentSatori"] = "pohDanmakuOpponentSatori";
erg.constants["pohDanmakuOpponentRin"] = "pohDanmakuOpponentRin";
erg.constants["pohDanmakuOpponentUtsuho"] = "pohDanmakuOpponentUtsuho";
erg.constants["pohDanmakuOpponentKoishi"] = "pohDanmakuOpponentKoishi";


//UFO

erg.constants["pohDanmakuOpponentNazrin"] = "pohDanmakuOpponentNazrin";
erg.constants["pohDanmakuOpponentKogasa"] = "pohDanmakuOpponentKogasa";
erg.constants["pohDanmakuOpponentIchirin"] = "pohDanmakuOpponentIchirin";
erg.constants["pohDanmakuOpponentMurasa"] = "pohDanmakuOpponentMurasa";
erg.constants["pohDanmakuOpponentShou"] = "pohDanmakuOpponentShou";
erg.constants["pohDanmakuOpponentByakuren"] = "pohDanmakuOpponentByakuren";
erg.constants["pohDanmakuOpponentNue"] = "pohDanmakuOpponentNue";


//DS

erg.constants["pohDanmakuOpponentHatate"] = "pohDanmakuOpponentHatate";


//TD

erg.constants["pohDanmakuOpponentKyouko"] = "pohDanmakuOpponentKyouko";
erg.constants["pohDanmakuOpponentYoshika"] = "pohDanmakuOpponentYoshika";
erg.constants["pohDanmakuOpponentSeiga"] = "pohDanmakuOpponentSeiga";
erg.constants["pohDanmakuOpponentTojiko"] = "pohDanmakuOpponentTojiko";
erg.constants["pohDanmakuOpponentFuto"] = "pohDanmakuOpponentFuto";
erg.constants["pohDanmakuOpponentMiko"] = "pohDanmakuOpponentMiko";
erg.constants["pohDanmakuOpponentMamizou"] = "pohDanmakuOpponentMamizou";

//WaHH

erg.constants["pohDanmakuOpponentKasen"] = "pohDanmakuOpponentKasen";


//############################################ POH DANMAKU CONSTANTS ######################################################

erg.constants["pohDanmakuTierDifferenceWinChanceModifier"] = 10;

erg.constants["pohDanmakuTierDifferenceReputationModifier"] = 1;

erg.constants["pohDanmakuGoodTrashTalkReputationBonus"] = 6;

erg.constants["pohDanmakuBadTrashTalkReputationBonus"] = -6;

erg.constants["pohDanmakuWinReputationBonus"] = 10;

erg.constants["pohDanmakuLoseReputationBonus"] = -10;

erg.constants["pohDanmakuAttributeRollReputationBonusFactor"] = 0.5;



//############################################ ACTION CONSTANTS ######################################################

erg.constants["pohActionTypeChangeAdvice"] = "pohActionTypeChangeAdvice";
erg.constants["pohActionChangeAdviceText"] = "Change Advice";
erg.constants["pohActionChangeAdviceButtonID"] = "pohNewsItemChangeAdviceButton";

erg.constants["pohActionTypeGiveAdvice"] = "pohActionTypeGiveAdvice";
erg.constants["pohActionGiveAdviceText"] = "Give Advice";
erg.constants["pohActionGiveAdviceButtonID"] = "pohNewsItemGiveAdviceButton";



//################################### UI FUNCTIONS CONSTANTS #################################################

erg.constants["pohUIFunctionPopulateAdviceDateHeart"] = "pohUIFunctionPopulateAdviceDateHeart";
erg.constants["pohUIFunctionSwitchAdviceExtracurricularForm"] = "pohUIFunctionSwitchAdviceExtracurricularForm";

erg.constants["pohUIFunctionPopulateRemiliaShopHeart"] = "pohUIFunctionPopulateRemiliaShopHeart";

erg.constants["pohUIFunctionHookupRelationshipDialogue"] = "pohUIFunctionHookupRelationshipDialogue";


//############################################ ADVICE CONSTANTS ######################################################

erg.constants["pohAdviceExtracurricularNothing"] = "pohAdviceExtracurricularNothing";
erg.constants["pohAdviceExtracurricularDanmaku"] = "pohAdviceExtracurricularDanmaku";
erg.constants["pohAdviceExtracurricularAttributeRaise"] = "pohAdviceExtracurricularAttributeRaise";
erg.constants["pohAdviceExtracurricularAttributeLower"] = "pohAdviceExtracurricularAttributeLower";
erg.constants["pohAdviceExtracurricularPassionRaise"] = "pohAdviceExtracurricularPassionRaise";
erg.constants["pohAdviceExtracurricularPassionLower"] = "pohAdviceExtracurricularPassionLower";
erg.constants["pohAdviceExtracurricularTrait"] = "pohAdviceExtracurricularTrait";

erg.constants["pohAdviceSelectableScenarios"] = 3;

//############################################ PRESTIGE CONSTANTS ######################################################

erg.constants["pohBaseCompatibilityPrestigeBonus"] = 100;

erg.constants["pohPrestigeTypeRelationship"] = "pohPrestigeTypeRelationship";
erg.constants["pohPrestigeTypeUnsolicitedAdvice"] = "pohPrestigeTypeUnsolicitedAdvice";
erg.constants["pohPrestigeTypeRemiliaHeartOpen"] = "pohPrestigeTypeRemiliaHeartOpen";

erg.constants["pohPrestigeCostUnsolicitedAdvice"] = 200;

erg.constants["pohPrestigeCostRemiliaHeartOpen"] = 1000;


//############################################ INTERSTITIAL CONSTANTS ######################################################

erg.constants["pohInterstitialTimeToAction"] = 4000;

erg.constants["pohInterstitialActionFadeIn"] = 300;


//############################################ CREDITS CONSTANTS ######################################################

erg.constants["creditsBody"] = "<p>This is prototype software, not intended for final release or public viewing.  Any and all elements may be placeholders.  &quot;Puppeteer of Hearts&quot; and &quot;Together in the Tainted Paradise&quot; are not intended to ever be commercial works; they are strictly fan games/remix projects.</p><p>Touhou, Gensokyo and all characters are the work and property of ZUN/Team Shanghai Alice.  SFX in this application are taken from <em>Imperishable Night</em>, and are likewise the work and property of ZUN/Team Shanghai Alice.  This application is a fan work intended to celebrate the Touhou property, and is not intended to challenge any copyright.</p><p>All images (with the exception of the one appearing on this screen in landscape mode, which should explain everything) are Touhou fan works sourced randomly from the internet; they are the work and property of their respective artists.  To the best of my knowledge, no commercial art work is used, only amateur fan works created for love of Touhou.  Their use here is intended to recontextualise them as part of a celebration of Touhou, not to challenge the copyright of the artists.  I will happily comply with the wishes of any artist who does not want their work used in this fashion.</p><p>This application uses the jQuery and jQueryUI libraries.</p><p>All other code and text by Jye Nicolson/Mengtzu.  Please attribute if you find it useful.</p>";

//############################################ HELP CONSTANTS ######################################################

erg.constants["pohHelpSectionHelp"] = "pohSectionHelp";

    erg.constants["pohHelpSectionHelpSubsectionOverview"] = "pohHelpSectionHelpSubsectionOverview";

        erg.constants["pohHelpSectionHelpSubsectionOverviewItemGoal"] = "pohHelpSectionHelpSubsectionOverviewItemGoal";
        erg.constants["pohHelpSectionHelpSubsectionOverviewItemPremise"] = "pohHelpSectionHelpSubsectionOverviewItemPremise";
        erg.constants["pohHelpSectionHelpSubsectionOverviewItemProcedure"] = "pohHelpSectionHelpSubsectionOverviewItemProcedure";
        erg.constants["pohHelpSectionHelpSubsectionOverviewItemRandomness"] = "pohHelpSectionHelpSubsectionOverviewItemRandomness";

    erg.constants["pohHelpSectionHelpSubsectionAliceDesk"] = "pohHelpSectionHelpSubsectionAliceDesk";

        erg.constants["pohHelpSectionHelpSubsectionAliceDeskItemScreen"] = "pohHelpSectionHelpSubsectionAliceDeskItemScreen";
        erg.constants["pohHelpSectionHelpSubsectionAliceDeskItemWeek"] = "pohHelpSectionHelpSubsectionAliceDeskItemWeek";
        erg.constants["pohHelpSectionHelpSubsectionAliceDeskItemHeartList"] = "pohHelpSectionHelpSubsectionAliceDeskItemHeartList";
        erg.constants["pohHelpSectionHelpSubsectionAliceDeskItemNews"] = "pohHelpSectionHelpSubsectionAliceDeskItemNews";
        erg.constants["pohHelpSectionHelpSubsectionAliceDeskItemPrestige"] = "pohHelpSectionHelpSubsectionOverviewItemPrestige";
        erg.constants["pohHelpSectionHelpSubsectionAliceDeskItemRelationships"] = "pohHelpSectionHelpSubsectionOverviewItemRelationships";
        erg.constants["pohHelpSectionHelpSubsectionAliceDeskItemAdvice"] = "pohHelpSectionHelpSubsectionOverviewItemAdvice";

    erg.constants["pohHelpSectionHelpSubsectionCharacterSheet"] = "pohHelpSectionHelpSubsectionCharacterSheet";

        erg.constants["pohHelpSectionHelpSubsectionCharacterSheetItemCharacterSheet"] = "pohHelpSectionHelpSubsectionCharacterSheetItemCharacterSheet";
        erg.constants["pohHelpSectionHelpSubsectionCharacterSheetItemTier"] = "pohHelpSectionHelpSubsectionCharacterSheetItemTier";
        erg.constants["pohHelpSectionHelpSubsectionCharacterSheetItemPhysical"] = "pohHelpSectionHelpSubsectionCharacterSheetItemPhysical";
        erg.constants["pohHelpSectionHelpSubsectionCharacterSheetItemTraits"] = "pohHelpSectionHelpSubsectionCharacterSheetItemTraits";
        erg.constants["pohHelpSectionHelpSubsectionCharacterSheetItemAttributes"] = "pohHelpSectionHelpSubsectionCharacterSheetItemAttributes";
        erg.constants["pohHelpSectionHelpSubsectionCharacterSheetItemRelationships"] = "pohHelpSectionHelpSubsectionCharacterSheetItemRelationships";
        erg.constants["pohHelpSectionHelpSubsectionCharacterSheetItemConnections"] = "pohHelpSectionHelpSubsectionCharacterSheetItemConnections";
        erg.constants["pohHelpSectionHelpSubsectionCharacterSheetItemUnsolicitedAdvice"] = "pohHelpSectionHelpSubsectionCharacterSheetItemUnsolicitedAdvice";
        
    erg.constants["pohHelpSectionHelpSubsectionNews"] = "pohHelpSectionHelpSubsectionNews";

        erg.constants["pohHelpSectionHelpSubsectionNewsItemEvents"] = "pohHelpSectionHelpSubsectionNewsItemEvents";
        erg.constants["pohHelpSectionHelpSubsectionNewsItemLetters"] = "pohHelpSectionHelpSubsectionNewsItemLetters";
        erg.constants["pohHelpSectionHelpSubsectionNewsItemSatori"] = "pohHelpSectionHelpSubsectionNewsItemSatori";
        erg.constants["pohHelpSectionHelpSubsectionNewsItemSociety"] = "pohHelpSectionHelpSubsectionNewsItemSociety";
        erg.constants["pohHelpSectionHelpSubsectionNewsItemDanmaku"] = "pohHelpSectionHelpSubsectionNewsItemDanmaku";
        erg.constants["pohHelpSectionHelpSubsectionNewsItemGeneral"] = "pohHelpSectionHelpSubsectionNewsItemGeneral";

    erg.constants["pohHelpSectionHelpSubsectionDates"] = "pohHelpSectionHelpSubsectionDates";

        erg.constants["pohHelpSectionHelpSubsectionDatesItemAcceptance"] = "pohHelpSectionHelpSubsectionDatesItemAcceptance";
        erg.constants["pohHelpSectionHelpSubsectionDatesItemEvents"] = "pohHelpSectionHelpSubsectionDatesItemEvents";
        erg.constants["pohHelpSectionHelpSubsectionDatesItemIntimacy"] = "pohHelpSectionHelpSubsectionDatesItemIntimacy";
        erg.constants["pohHelpSectionHelpSubsectionDatesItemBadDate"] = "pohHelpSectionHelpSubsectionDatesItemBadDate";

    erg.constants["pohHelpSectionHelpSubsectionRelationships"] = "pohHelpSectionHelpSubsectionRelationships";

        erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemStarting"] = "pohHelpSectionHelpSubsectionRelationshipsItemStarting";
        erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemStrength"] = "pohHelpSectionHelpSubsectionRelationshipsItemStrength";
        erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemStability"] = "pohHelpSectionHelpSubsectionRelationshipsItemStability";
        erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemLongevity"] = "pohHelpSectionHelpSubsectionRelationshipsItemLongevity";
        erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemLevel0"] = "pohHelpSectionHelpSubsectionRelationshipsItemLevel0";
        erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemLevel1"] = "pohHelpSectionHelpSubsectionRelationshipsItemLevel1";
        erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemLevel2"] = "pohHelpSectionHelpSubsectionRelationshipsItemLevel2";
        erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemLevel3"] = "pohHelpSectionHelpSubsectionRelationshipsItemLevel3";
        erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemBreakup"] = "pohHelpSectionHelpSubsectionRelationshipsItemBreakup";
        erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemBreakupBadDate"] = "pohHelpSectionHelpSubsectionRelationshipsItemBreakupBadDate";
        erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemBreakupJealousy"] = "pohHelpSectionHelpSubsectionRelationshipsItemBreakupJealousy";
        erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemBreakupNoDate"] = "pohHelpSectionHelpSubsectionRelationshipsItemBreakupNoDate";
        
    erg.constants["pohHelpSectionHelpSubsectionAdvice"] = "pohHelpSectionHelpSubsectionAdvice";

        erg.constants["pohHelpSectionHelpSubsectionAdviceItemScreen"] = "pohHelpSectionHelpSubsectionAdviceItemScreen";
        erg.constants["pohHelpSectionHelpSubsectionAdviceItemPartner"] = "pohHelpSectionHelpSubsectionAdviceItemPartner";
        erg.constants["pohHelpSectionHelpSubsectionAdviceItemPlan"] = "pohHelpSectionHelpSubsectionAdviceItemPlan";
        erg.constants["pohHelpSectionHelpSubsectionAdviceItemExtracurricular"] = "pohHelpSectionHelpSubsectionAdviceItemExtracurricular";
        erg.constants["pohHelpSectionHelpSubsectionAdviceItemSubmitting"] = "pohHelpSectionHelpSubsectionAdviceItemSubmitting";
        erg.constants["pohHelpSectionHelpSubsectionAdviceItemUnsolicited"] = "pohHelpSectionHelpSubsectionAdviceItemUnsolicited";
        erg.constants["pohHelpSectionHelpSubsectionAdviceItemStrategy"] = "pohHelpSectionHelpSubsectionAdviceItemStrategy";

    erg.constants["pohHelpSectionHelpSubsectionRemilia"] = "pohHelpSectionHelpSubsectionRemilia";

        erg.constants["pohHelpSectionHelpSubsectionRemiliaItemBuying"] = "pohHelpSectionHelpSubsectionRemiliaItemBuying";

erg.constants["pohHelpSectionFAQ"] = "pohHelpSectionFAQ";

    erg.constants["pohHelpSectionFAQSubsectionTouhou"] = "pohHelpSectionFAQSubsectionTouhou";

        erg.constants["pohHelpSectionFAQSubsectionTouhouItemLearn"] = "pohHelpSectionFAQSubsectionTouhouItemLearn";
        erg.constants["pohHelpSectionFAQSubsectionTouhouItemFavourite"] = "pohHelpSectionFAQSubsectionTouhouItemFavourite";
        erg.constants["pohHelpSectionFAQSubsectionTouhouItemMusicians"] = "pohHelpSectionFAQSubsectionTouhouItemMusicians";
        erg.constants["pohHelpSectionFAQSubsectionTouhouItemDeviations"] = "pohHelpSectionFAQSubsectionTouhouItemDeviations";

    erg.constants["pohHelpSectionFAQSubsectionGame"] = "pohHelpSectionFAQSubsectionGame";

        erg.constants["pohHelpSectionFAQSubsectionGameItemRounding"] = "pohHelpSectionFAQSubsectionTouhouItemRounding";


    erg.constants["pohHelpSectionFAQSubsectionTechnical"] = "pohHelpSectionFAQSubsectionTechnical";

    erg.constants["pohHelpSectionFAQSubsectionTechnicalItemSaves"] = "pohHelpSectionFAQSubsectionTechnicalItemSaves";
    erg.constants["pohHelpSectionFAQSubsectionTechnicalItemBrowsersAndResolutions"] = "pohHelpSectionFAQSubsectionTechnicalItemBrowsersAndResolutions";


