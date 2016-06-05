

//################################### HEARTS REPOSITORY #################################################

erg[erg.constants["pohHearts"]] = {};

//EoSD

//Koakuma

erg[erg.constants["pohHearts"]][erg.constants["pohKoakuma"]] = {

    key: erg.constants["pohKoakuma"],
    firstName: "Koakuma",
    lastName: "Knowledge",
    fullName: "Koakuma",
    preferredName: "Koakuma",
    title: "Little Devil",
    profilePrefix: "koakuma",
    tier: erg.constants["pohTierGuard"],
    species: erg.constants["pohSpeciesDevil"],
    hairLength: erg.constants["pohHairLong"],
    hairColour: erg.constants["pohHairRed"],
    eyeColour: erg.constants["pohEyesRed"],
    attractionTraits: [erg.constants["pohTraitAttractionSpeciesUndying"], erg.constants["pohTraitAttractionHairCool"], erg.constants["pohTraitAttractionHairLong"]],
    attributes: [{ key: erg.constants["pohAttributeCleverness"], value: 75 }, { key: erg.constants["pohAttributeViciousness"], value: 75 }],
    reactionTraits: [erg.constants["pohTraitReactionCarousersFoe"], erg.constants["pohTraitReactionGenius"]],
    specialTraits: [erg.constants["pohTraitSpecialInfernalAllure"]]
    
};


//PCB


//Letty

erg[erg.constants["pohHearts"]][erg.constants["pohLetty"]] = {

    key: erg.constants["pohLetty"],
    firstName: "Letty",
    lastName: "Whiterock",
    fullName: "Letty Whiterock",
    preferredName: "Letty",
    title: "Youkai of Winter",
    profilePrefix: "letty",
    tier: erg.constants["pohTierRuffian"],
    species: erg.constants["pohSpeciesYukiOnna"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairLavender"],
    eyeColour: erg.constants["pohEyesLavender"],
    attractionTraits: [erg.constants["pohTraitAttractionHairCool"], erg.constants["pohTraitAttractionEyesCool"], erg.constants["pohTraitAttractionHairWinter"]],
    attributes: [{ key: erg.constants["pohAttributeSociability"], value: 30}, { key: erg.constants["pohAttributeHubris"], value: 75}],
    specialTraits: [erg.constants["pohTraitSpecialPowerToManipulateCold"]]
    
};


//Lunasa

erg[erg.constants["pohHearts"]][erg.constants["pohLunasa"]] = {

    key: erg.constants["pohLunasa"],
    firstName: "Lunasa",
    lastName: "Prismriver",
    fullName: "Lunasa Prismriver",
    preferredName: "Lunasa",
    title: "Poltergeist Violinist",
    profilePrefix: "lunasa",
    tier: erg.constants["pohTierGuard"],  //Tier demotion outside the team
    species: erg.constants["pohSpeciesPoltergeist"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairBlonde"],
    eyeColour: erg.constants["pohEyesGold"],
    attributes: [{ key: erg.constants["pohAttributeExpression"], value: 85 }, { key: erg.constants["pohAttributeCourage"], value: 75 }, { key: erg.constants["pohAttributePettiness"], value: 25 }, { key: erg.constants["pohAttributeSociability"], value: 35}],
    reactionTraits: [erg.constants["pohTraitReactionMuse"]],
    connections: [{ key: erg.constants["pohMerlin"], passion: 75, track: erg.constants["pohPassionTrackSister"], baseAttraction: 40 }, { key: erg.constants["pohLyrica"], passion: 75, track: erg.constants["pohPassionTrackSister"], baseAttraction: 40 }],
    specialTraits: [erg.constants["pohTraitSpecialMournfulMusic"]]

};

//Merlin

erg[erg.constants["pohHearts"]][erg.constants["pohMerlin"]] = {

    key: erg.constants["pohMerlin"],
    firstName: "Merlin",
    lastName: "Prismriver",
    fullName: "Merlin Prismriver",
    preferredName: "Merlin",
    title: "Poltergeist Trumpeter",
    profilePrefix: "merlin",
    tier: erg.constants["pohTierGuard"], //Tier demotion outside the team
    species: erg.constants["pohSpeciesPoltergeist"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairBlue"],
    eyeColour: erg.constants["pohEyesBlue"],
    attributes: [{ key: erg.constants["pohAttributeExpression"], value: 85 }, { key: erg.constants["pohAttributeSociability"], value: 75 }],
    reactionTraits: [erg.constants["pohTraitReactionMuse"]],
    connections: [{ key: erg.constants["pohLunasa"], passion: 75, track: erg.constants["pohPassionTrackSister"], baseAttraction: 40 }, { key: erg.constants["pohLyrica"], passion: 75, track: erg.constants["pohPassionTrackSister"], baseAttraction: 40}],
    specialTraits: [erg.constants["pohTraitSpecialManicMusic"]]

};

//Lyrica

erg[erg.constants["pohHearts"]][erg.constants["pohLyrica"]] = {

    key: erg.constants["pohLyrica"],
    firstName: "Lyrica",
    lastName: "Prismriver",
    fullName: "Lyrica Prismriver",
    preferredName: "Lyrica",
    title: "Poltergeist Keyboardist",
    profilePrefix: "lyrica",
    tier: erg.constants["pohTierGuard"], //Tier demotion outside the team
    species: erg.constants["pohSpeciesPoltergeist"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairBrown"],
    eyeColour: erg.constants["pohEyesBrown"],
    attributes: [{ key: erg.constants["pohAttributeExpression"], value: 85 }, { key: erg.constants["pohAttributeCourage"], value: 25 }, { key: erg.constants["pohAttributeCleverness"], value: 75}],
    reactionTraits: [erg.constants["pohTraitReactionMuse"]],
    connections: [{ key: erg.constants["pohMerlin"], passion: 75, track: erg.constants["pohPassionTrackSister"], baseAttraction: 40 }, { key: erg.constants["pohLunasa"], passion: 75, track: erg.constants["pohPassionTrackSister"], baseAttraction: 40}],
    specialTraits: [erg.constants["pohTraitSpecialImpossibleMusic"]]

    
};

//Ran

erg[erg.constants["pohHearts"]][erg.constants["pohRan"]] = {

    key: erg.constants["pohRan"],
    firstName: "Ran",
    lastName: "Yakumo",
    fullName: "Ran Yakumo",
    preferredName: "Ran",
    title: "Shikigami of the Sukima Youkai",
    profilePrefix: "ran",
    tier: erg.constants["pohTierExtra"],
    species: erg.constants["pohSpeciesKitsune"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairBlonde"],
    eyeColour: erg.constants["pohEyesGold"],
    attractionTraits: [erg.constants["pohTraitAttractionHairLong"], erg.constants["pohTraitAttractionSpeciesYoukai"], erg.constants["pohTraitAttractionHairGold"]],
    attributes: [{ key: erg.constants["pohAttributeCourage"], value: 89 }, { key: erg.constants["pohAttributeCleverness"], value: 89 }, { key: erg.constants["pohAttributeViciousness"], value: 27}],
    reactionTraits: [erg.constants["pohTraitReactionGenius"]],
    connections: [{ key: erg.constants["pohMamizou"], passion: 40, track: erg.constants["pohPassionTrackEnemy"], baseAttraction: 20 }],
    specialTraits: [erg.constants["pohTraitSpecialShikigami"]]

};


//IN

//Mystia

erg[erg.constants["pohHearts"]][erg.constants["pohMystia"]] = {

    key: erg.constants["pohMystia"],
    firstName: "Mystia",
    lastName: "Lorelei",
    fullName: "Mystia Lorelei",
    preferredName: "Mystia",
    title: "Singing Night Sparrow",
    profilePrefix: "mystia",
    tier: erg.constants["pohTierThug"],
    species: erg.constants["pohSpeciesNightSparrow"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairPink"],
    eyeColour: erg.constants["pohEyesGrey"],
    attributes: [{ key: erg.constants["pohAttributeExpression"], value: 75 }, { key: erg.constants["pohAttributeHubris"], value: 75 }, { key: erg.constants["pohAttributeCleverness"], value: 25 }, { key: erg.constants["pohAttributeSociability"], value: 60}],
    connections: [{ key: erg.constants["pohKyouko"], passion: 50, track: erg.constants["pohPassionTrackFriend"], baseAttraction: 75 }, { key: erg.constants["pohMokou"], passion: 20, track: erg.constants["pohPassionTrackLove"], baseAttraction: 75}],
    specialTraits: [erg.constants["pohTraitSpecialDeafToAllButTheSong"]]

};

//Keine

erg[erg.constants["pohHearts"]][erg.constants["pohKeine"]] = {

    key: erg.constants["pohKeine"],
    firstName: "Keine",
    lastName: "Kamashirasawa",
    fullName: "Keine Kamishirasawa",
    preferredName: "Keine",
    title: "History-Eating Half Beast",
    profilePrefix: "keine",
    tier: erg.constants["pohTierHero"],  //Averaging out her forms
    species: erg.constants["pohSpeciesWereHakutaku"],
    hairLength: erg.constants["pohHairLong"],
    hairColour: erg.constants["pohHairSilver"],
    eyeColour: erg.constants["pohEyesBrown"],
    attractionTraits: [erg.constants["pohTraitAttractionHairLong"], erg.constants["pohTraitAttractionSpeciesUndying"]],
    attributes: [{ key: erg.constants["pohAttributeCourage"], value: 75 }, { key: erg.constants["pohAttributeCleverness"], value: 80 }, { key: erg.constants["pohAttributeViciousness"], value: 5 }, { key: erg.constants["pohAttributeExpression"], value: 25 }, { key: erg.constants["pohAttributeSociability"], value: 40}],
    reactionTraits: [erg.constants["pohTraitReactionFearless"]],
    connections: [{ key: erg.constants["pohMokou"], passion: 70, track: erg.constants["pohPassionTrackFriend"], baseAttraction: 75 }, { key: erg.constants["pohKaguya"], passion: 50, track: erg.constants["pohPassionTrackRival"], baseAttraction: 50 }, { key: erg.constants["pohEirin"], passion: 50, track: erg.constants["pohPassionTrackRival"], baseAttraction: 50 }],
    specialTraits: [erg.constants["pohTraitSpecialHistoryEater"]]


};

//Eirin

erg[erg.constants["pohHearts"]][erg.constants["pohEirin"]] = {

    key: erg.constants["pohEirin"],
    firstName: "Eirin",
    lastName: "Yagokoro",
    fullName: "Eirin Yagokoro",
    preferredName: "Eirin",
    title: "Lunar Sage",
    profilePrefix: "eirin",
    tier: erg.constants["pohTierBoss"],
    species: erg.constants["pohSpeciesGod"],
    hairLength: erg.constants["pohHairLong"],
    hairColour: erg.constants["pohHairSilver"],
    eyeColour: erg.constants["pohEyesGrey"],
    attractionTraits: [erg.constants["pohTraitAttractionHairLong"], erg.constants["pohTraitAttractionSpeciesUndying"]],
    attributes: [{ key: erg.constants["pohAttributeCourage"], value: 75 }, { key: erg.constants["pohAttributeCleverness"], value: erg.constants["pohCurrentAttributeMaximum"] }, { key: erg.constants["pohAttributeExpression"], value: 30 }, { key: erg.constants["pohAttributePettiness"], value: 25}],
    reactionTraits: [erg.constants["pohTraitReactionFearless"], erg.constants["pohTraitReactionPoet"], erg.constants["pohTraitReactionGenius"]],
    connections: [{ key: erg.constants["pohMokou"], passion: 70, track: erg.constants["pohPassionTrackRival"], baseAttraction: 50 }, { key: erg.constants["pohKaguya"], passion: 95, track: erg.constants["pohPassionTrackFriend"], baseAttraction: 75 }, { key: erg.constants["pohKeine"], passion: 50, track: erg.constants["pohPassionTrackRival"], baseAttraction: 50}],
    specialTraits: [erg.constants["pohTraitSpecialBrainOfTheMoon"]]

    
};

//Kaguya

erg[erg.constants["pohHearts"]][erg.constants["pohKaguya"]] = {

    key: erg.constants["pohKaguya"],
    firstName: "Kaguya",
    lastName: "Houraisen",
    fullName: "Kaguya Houraisen",
    preferredName: "Kaguya",
    title: "Eternal Princess",
    profilePrefix: "kaguya",
    tier: erg.constants["pohTierBoss"],
    species: erg.constants["pohSpeciesHouraiImmortal"],
    hairLength: erg.constants["pohHairLong"],
    hairColour: erg.constants["pohHairBlack"],
    eyeColour: erg.constants["pohEyesBrown"], 
    attractionTraits: [erg.constants["pohTraitAttractionHairLong"], erg.constants["pohTraitAttractionSpeciesUndying"]],
    attributes: [{ key: erg.constants["pohAttributeCourage"], value: erg.constants["pohCurrentAttributeMaximum"] }, { key: erg.constants["pohAttributeExpression"], value: erg.constants["pohCurrentAttributeMaximum"] }, { key: erg.constants["pohAttributeViciousness"], value: 75 }, { key: erg.constants["pohAttributeSociability"], value: 20}],
    reactionTraits: [erg.constants["pohTraitReactionFearless"], erg.constants["pohTraitReactionBelovedProud"], erg.constants["pohTraitReactionHatredSilverTongues"]],
    connections: [{ key: erg.constants["pohMokou"], passion: 95, track: erg.constants["pohPassionTrackMokouKaguya"], baseAttraction: 80 }, { key: erg.constants["pohKeine"], passion: 50, track: erg.constants["pohPassionTrackRival"], baseAttraction: 50 }, { key: erg.constants["pohEirin"], passion: 95, track: erg.constants["pohPassionTrackFriend"], baseAttraction: 75}],
    specialTraits: [erg.constants["pohTraitSpecialImpossiblyBeautiful"]]
};

//Mokou

erg[erg.constants["pohHearts"]][erg.constants["pohMokou"]] = {

    key: erg.constants["pohMokou"],
    firstName: "Mokou",
    lastName: "Fujiwara",
    fullName: "Fujiwara no Mokou",
    preferredName: "Mokou",
    title: "The Crimson Watchguard",
    profilePrefix: "mokou",
    tier: erg.constants["pohTierExtra"],
    species: erg.constants["pohSpeciesHouraiImmortal"],
    hairLength: erg.constants["pohHairLong"],
    hairColour: erg.constants["pohHairWhite"],
    eyeColour: erg.constants["pohEyesRed"],
    attractionTraits: [erg.constants["pohTraitAttractionHairLong"], erg.constants["pohTraitAttractionSpeciesUndying"]],
    reactionTraits: [erg.constants["pohTraitReactionFearless"], erg.constants["pohTraitReactionMuse"], erg.constants["pohTraitReactionCarousersFoe"]],
    attributes: [{key: erg.constants["pohAttributeCourage"], value: erg.constants["pohCurrentAttributeMaximum"]}, {key: erg.constants["pohAttributeHubris"], value: erg.constants["pohCurrentAttributeMaximum"]}, {key: erg.constants["pohAttributeExpression"], value: 30}],
    connections: [{ key: erg.constants["pohKaguya"], passion: 95, track: erg.constants["pohPassionTrackMokouKaguya"], baseAttraction: 80 }, { key: erg.constants["pohKeine"], passion: 70, track: erg.constants["pohPassionTrackFriend"], baseAttraction: 60 }, { key: erg.constants["pohEirin"], passion: 70, track: erg.constants["pohPassionTrackEnemy"], baseAttraction: 50}],
    specialTraits: [erg.constants["pohTraitSpecialFlameOfHourai"]]
    
};

//PoFV

//Yuuka

erg[erg.constants["pohHearts"]][erg.constants["pohYuuka"]] = {

    key: erg.constants["pohYuuka"],
    firstName: "Yuuka",
    lastName: "Kazami",
    fullName: "Yuuka Kazami",
    preferredName: "Yuuka",
    title: "Flower Master of the Four Seasons",
    profilePrefix: "yuuka",
    tier: erg.constants["pohTierBoss"],  //FFS PoFV.
    species: erg.constants["pohSpeciesYoukai"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairGreen"],
    eyeColour: erg.constants["pohEyesRed"],
    attributes: [{ key: erg.constants["pohAttributeCourage"], value: 90 }, { key: erg.constants["pohAttributeViciousness"], value: erg.constants["pohCurrentAttributeMaximum"] }],
    specialTraits: [erg.constants["pohTraitSpecialIndependent"], erg.constants["pohTraitSpecialSayItWithFlowers"]]

};

//Eiki

erg[erg.constants["pohHearts"]][erg.constants["pohEiki"]] = {

    key: erg.constants["pohEiki"],
    firstName: "Eiki",
    lastName: "Shiki",
    fullName: "Eiki Shiki Yamaxanadu",
    preferredName: "Eiki",
    title: "Supreme Judge of Hell",
    profilePrefix: "eiki",
    tier: erg.constants["pohTierBoss"],
    species: erg.constants["pohSpeciesYama"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairGreen"],
    eyeColour: erg.constants["pohEyesGreen"],
    attractionTraits: [erg.constants["pohTraitAttractionGenericNone"]],
    reactionTraits: [erg.constants["pohTraitReactionCarousersFoe"], erg.constants["pohTraitReactionTragedy"], erg.constants["pohTraitReactionTrust"], erg.constants["pohTraitReactionVindictiveUgly"], erg.constants["pohTraitReactionCruelty"]],
    attributes: [{ key: erg.constants["pohAttributePettiness"], value: erg.constants["pohCurrentAttributeMinimum"] }, { key: erg.constants["pohAttributeHubris"], value: erg.constants["pohCurrentAttributeMinimum"] }, { key: erg.constants["pohAttributeJealousy"], value: erg.constants["pohCurrentAttributeMinimum"]}, { key: erg.constants["pohAttributeViciousness"], value: erg.constants["pohCurrentAttributeMinimum"]}, { key: erg.constants["pohAttributeSociability"], value: erg.constants["pohCurrentAttributeMinimum"]}],
    specialTraits: [erg.constants["pohTraitSpecialBlackOrWhite"]]
    


    
};


//MoF

//Shizuha

erg[erg.constants["pohHearts"]][erg.constants["pohShizuha"]] = {

    key: erg.constants["pohShizuha"],
    firstName: "Shizuha",
    lastName: "Aki",
    fullName: "Shizuha Aki",
    preferredName: "Shizuha",
    title: "Heart-rending Crimson Rain",
    profilePrefix: "shizuha",
    tier: erg.constants["pohTierRuffian"],
    species: erg.constants["pohSpeciesGod"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairBlonde"],
    eyeColour: erg.constants["pohEyesGold"],
    attractionTraits: [erg.constants["pohTraitAttractionHairRose"], erg.constants["pohTraitAttractionHairGold"], erg.constants["pohTraitAttractionEyesMetallic"], erg.constants["pohTraitAttractionEyesRed"]],
    attributes: [{key: erg.constants["pohAttributeHubris"], value: 70 }, {key: erg.constants["pohAttributeJealousy"], value: 70}],
    connections: [{ key: erg.constants["pohMinoriko"], passion: 75, track: erg.constants["pohPassionTrackSister"], baseAttraction: 40 }],
    specialTraits: [erg.constants["pohTraitSpecialSymbolOfLonelinessAndDemise"]]
    
};

//Minoriko

erg[erg.constants["pohHearts"]][erg.constants["pohMinoriko"]] = {

    key: erg.constants["pohMinoriko"],
    firstName: "Minoriko",
    lastName: "Aki",
    fullName: "Minoriko Aki",
    preferredName: "Minoriko",
    title: "Symbol of Abundance and Harvest",
    profilePrefix: "minoriko",
    tier: erg.constants["pohTierRuffian"],
    species: erg.constants["pohSpeciesGod"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairBlonde"],
    eyeColour: erg.constants["pohEyesRed"],
    attractionTraits: [erg.constants["pohTraitAttractionHairRose"], erg.constants["pohTraitAttractionHairGold"], erg.constants["pohTraitAttractionEyesMetallic"], erg.constants["pohTraitAttractionEyesRed"]],
    attributes: [{key: erg.constants["pohAttributeSociability"], value: 75 }, {key: erg.constants["pohAttributeHubris"], value: 70 }],
    connections: [{ key: erg.constants["pohShizuha"], passion: 75, track: erg.constants["pohPassionTrackSister"], baseAttraction: 40 }],
    specialTraits: [erg.constants["pohTraitSpecialBountifulHarvest"]]
    
};

//Hina

erg[erg.constants["pohHearts"]][erg.constants["pohHina"]] = {

    key: erg.constants["pohHina"],
    firstName: "Hina",
    lastName: "Kagiyama",
    fullName: "Hina Kagiyama",
    preferredName: "Hina",
    title: "Nagashi-bina of the Hidden God",
    profilePrefix: "hina",
    tier: erg.constants["pohTierThug"],
    species: erg.constants["pohSpeciesGod"],
    hairLength: erg.constants["pohHairLong"],
    hairColour: erg.constants["pohHairGreen"],
    eyeColour: erg.constants["pohEyesGreen"],
    specialTraits: [erg.constants["pohTraitSpecialWheelOfFortune"]]
    
};

//Momiji

erg[erg.constants["pohHearts"]][erg.constants["pohMomiji"]] = {

    key: erg.constants["pohMomiji"],
    firstName: "Momiji",
    lastName: "Inubashiri",
    fullName: "Momiji Inubashiri",
    preferredName: "Momiji",
    title: "Mountain's Telegnosis",
    profilePrefix: "momiji",
    tier: erg.constants["pohTierGuard"],
    species: erg.constants["pohSpeciesWhiteWolfTengu"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairWhite"],
    eyeColour: erg.constants["pohEyesRed"],
    reactionTraits: [erg.constants["pohTraitReactionHero"]],
    attributes: [{key: erg.constants["pohAttributeCourage"], value: 75 }, {key: erg.constants["pohAttributeCleverness"], value: 70 }],
    connections: [{ key: erg.constants["pohHatate"], passion: 40, track: erg.constants["pohPassionTrackAlly"], baseAttraction: 40 }],
    specialTraits: [erg.constants["pohTraitSpecialTelegnosis"]]
    
};

//Kanako

erg[erg.constants["pohHearts"]][erg.constants["pohKanako"]] = {

    key: erg.constants["pohKanako"],
    firstName: "Kanako",
    lastName: "Yasaka",
    fullName: "Kanako Yasaka",
    preferredName: "Kanako",
    title: "Independent and Inflexible God",
    profilePrefix: "kanako",
    tier: erg.constants["pohTierBoss"],
    species: erg.constants["pohSpeciesGod"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairPurple"],
    eyeColour: erg.constants["pohEyesRed"],
    attributes: [{key: erg.constants["pohAttributeCourage"], value: 75 }, {key: erg.constants["pohAttributeCleverness"], value: 75 }, {key: erg.constants["pohAttributeSociability"], value: 75 }, {key: erg.constants["pohAttributeHubris"], value: 75 }, {key: erg.constants["pohAttributePettiness"], value: 75 }, {key: erg.constants["pohAttributeViciousness"], value: 75 }],
    connections: [{ key: erg.constants["pohByakuren"], passion: 40, track: erg.constants["pohPassionTrackRival"], baseAttraction: 50 }, { key: erg.constants["pohMiko"], passion: 40, track: erg.constants["pohPassionTrackRival"], baseAttraction: 50 }],
    specialTraits: [erg.constants["pohTraitSpecialIndependent"], erg.constants["pohTraitSpecialMoriyaShrineConspiracy"]]
    
    
};


//SA

//Parsee

erg[erg.constants["pohHearts"]][erg.constants["pohParsee"]] = {

    key: erg.constants["pohParsee"],
    firstName: "Parsee",
    lastName: "Mizuhashi",
    fullName: "Parsee Mizuhashi",
    preferredName: "Parsee",
    title: "The Jealousy Beneath the Earth's Crust",
    profilePrefix: "parsee",
    tier: erg.constants["pohTierThug"],
    species: erg.constants["pohSpeciesHashihime"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairBlonde"],
    eyeColour: erg.constants["pohEyesGreen"],
    reactionTraits: [erg.constants["pohTraitReactionGreenEyedMonster"]],
    attributes: [{ key: erg.constants["pohAttributeJealousy"], value: erg.constants["pohCurrentAttributeMaximum"] }],
    connections: [{ key: erg.constants["pohYuugi"], passion: 60, track: erg.constants["pohPassionTrackFriend"], baseAttraction: 60 }],
    specialTraits: [erg.constants["pohTraitSpecialPowerToManipulateJealousy"]]
        
};


//Yuugi

erg[erg.constants["pohHearts"]][erg.constants["pohYuugi"]] = {

    key: erg.constants["pohYuugi"],
    firstName: "Yuugi",
    lastName: "Hoshiguma",
    fullName: "Yuugi Hoshiguma",
    preferredName: "Yuugi",
    title: "The Spoken-of Unexplainable Phenomena",
    profilePrefix: "yuugi",
    tier: erg.constants["pohTierHero"],  //SAKE NOT EVEN DROP
    species: erg.constants["pohSpeciesOni"],
    hairLength: erg.constants["pohHairLong"],
    hairColour: erg.constants["pohHairBlonde"],
    eyeColour: erg.constants["pohEyesRed"],
    reactionTraits: [erg.constants["pohTraitReactionHatredSilverTongues"], erg.constants["pohTraitReactionNoble"]],
    attributes: [{ key: erg.constants["pohAttributeCourage"], value: 90 }, { key: erg.constants["pohAttributePettiness"], value: 5 }, { key: erg.constants["pohAttributeSociability"], value: 70 }],
    connections: [{ key: erg.constants["pohParsee"], passion: 60, track: erg.constants["pohPassionTrackFriend"], baseAttraction: 60 }, { key: erg.constants["pohKasen"], passion: 80, track: erg.constants["pohPassionTrackFriend"], baseAttraction: 40 }],
    specialTraits: [erg.constants["pohTraitSpecialLoveOfStrength"]]
};

//Rin

erg[erg.constants["pohHearts"]][erg.constants["pohRin"]] = {

    key: erg.constants["pohRin"],
    firstName: "Rin",
    lastName: "Kaenbyou",
    fullName: "Rin Kaenbyou",
    preferredName: "Orin",
    title: "Hell's Traffic Accident",
    profilePrefix: "rin",
    tier: erg.constants["pohTierHero"],
    species: erg.constants["pohSpeciesKasha"],
    hairLength: erg.constants["pohHairLong"],
    hairColour: erg.constants["pohHairRed"],
    eyeColour: erg.constants["pohEyesRed"],
    attributes: [{ key: erg.constants["pohAttributeExpression"], value: 75 }],
    specialTraits: [erg.constants["pohTraitSpecialFurnaceCat"]]

};


//UFO

//Kogasa

erg[erg.constants["pohHearts"]][erg.constants["pohKogasa"]] = {

    key: erg.constants["pohKogasa"],
    firstName: "Kogasa",
    lastName: "Tatara",
    fullName: "Kogasa Tatara",
    preferredName: "Kogasa",
    title: "The Cheery Forgotten Umbrella",
    profilePrefix: "kogasa",
    tier: erg.constants["pohTierThug"],
    species: erg.constants["pohSpeciesKarakasaObake"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairBlue"],
    eyeColour: erg.constants["pohEyesKogasa"],
    reactionTraits: [erg.constants["pohTraitReactionHeroicContempt"]],
    attributes: [{ key: erg.constants["pohAttributeCleverness"], value: 30 }, { key: erg.constants["pohAttributeViciousness"], value: 15 }],
    connections: [{ key: erg.constants["pohYoshika"], passion: 30, track: erg.constants["pohPassionTrackRival"], baseAttraction: 30 }],
    specialTraits: [erg.constants["pohTraitSpecialSurprise"]]


};

//Ichirin

erg[erg.constants["pohHearts"]][erg.constants["pohIchirin"]] = {

    key: erg.constants["pohIchirin"],
    firstName: "Ichirin",
    lastName: "Kumoi",
    fullName: "Ichirin Kumoi",
    preferredName: "Ichirin",
    title: "The Flower that Blooms in the Sky",
    profilePrefix: "ichirin",
    tier: erg.constants["pohTierGuard"],
    species: erg.constants["pohSpeciesYoukai"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairPurple"],
    eyeColour: erg.constants["pohEyesPurple"],
    attributes: [{ key: erg.constants["pohAttributeCleverness"], value: 75 }],
    connections: [{ key: erg.constants["pohMurasa"], passion: 70, track: erg.constants["pohPassionTrackAlly"], baseAttraction: 50 }, { key: erg.constants["pohShou"], passion: 70, track: erg.constants["pohPassionTrackAlly"], baseAttraction: 50 }, { key: erg.constants["pohByakuren"], passion: 80, track: erg.constants["pohPassionTrackMaster"], baseAttraction: 60 }],
    specialTraits: [erg.constants["pohTraitSpecialUnzanIsWatching"]]

};

//Murasa

erg[erg.constants["pohHearts"]][erg.constants["pohMurasa"]] = {

    key: erg.constants["pohMurasa"],
    firstName: "Minamitsu",
    lastName: "Murasa",
    fullName: "Minamitsu Murasa",
    preferredName: "Murasa",
    title: "Miserable Expanse of the Ocean",
    profilePrefix: "murasa",
    tier: erg.constants["pohTierLieutenant"],
    species: erg.constants["pohSpeciesYuurei"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairBlack"],
    eyeColour: erg.constants["pohEyesGreen"],
    attributes: [{ key: erg.constants["pohAttributeViciousness"], value: 40}],
    connections: [{ key: erg.constants["pohIchirin"], passion: 70, track: erg.constants["pohPassionTrackAlly"], baseAttraction: 50 }, { key: erg.constants["pohShou"], passion: 70, track: erg.constants["pohPassionTrackAlly"], baseAttraction: 50 }, { key: erg.constants["pohByakuren"], passion: 80, track: erg.constants["pohPassionTrackMaster"], baseAttraction: 60}],
    specialTraits: [erg.constants["pohTraitSpecialShipCaptain"]]

};

//Shou

erg[erg.constants["pohHearts"]][erg.constants["pohShou"]] = {

    key: erg.constants["pohShou"],
    firstName: "Shou",
    lastName: "Toramaru",
    fullName: "Shou Toramaru",
    preferredName: "Shou",
    title: "Disciple of Vaisravana",
    profilePrefix: "shou",
    tier: erg.constants["pohTierHero"],
    species: erg.constants["pohSpeciesTiger"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairShou"],
    eyeColour: erg.constants["pohEyesGold"],
    attributes: [{ key: erg.constants["pohAttributeCourage"], value: 85 }, { key: erg.constants["pohAttributeSociability"], value: 75 }, { key: erg.constants["pohAttributePettiness"], value: 15 }, { key: erg.constants["pohAttributeViciousness"], value: 15 }],
    connections: [{ key: erg.constants["pohIchirin"], passion: 70, track: erg.constants["pohPassionTrackAlly"], baseAttraction: 50 }, { key: erg.constants["pohMurasa"], passion: 70, track: erg.constants["pohPassionTrackAlly"], baseAttraction: 50 }, { key: erg.constants["pohByakuren"], passion: 80, track: erg.constants["pohPassionTrackMaster"], baseAttraction: 60}],
    specialTraits: [erg.constants["pohTraitSpecialAvatarOfBishamonten"]]

};

//Byakuren

erg[erg.constants["pohHearts"]][erg.constants["pohByakuren"]] = {

    key: erg.constants["pohByakuren"],
    firstName: "Byakuren",
    lastName: "Hijiri",
    fullName: "Byakuren Hijiri",
    preferredName: "Byakuren",
    title: "Bodhisattva of Youkai and Cursed Magic",
    profilePrefix: "byakuren",
    tier: erg.constants["pohTierBoss"],
    species: erg.constants["pohSpeciesMagician"],
    hairLength: erg.constants["pohHairLong"],
    hairColour: erg.constants["pohHairByakuren"],
    eyeColour: erg.constants["pohEyesHazel"],
    reactionTraits: [erg.constants["pohTraitReactionNoMistress"], erg.constants["pohTraitReactionNoVillain"], erg.constants["pohTraitReactionEnlightened"]],
    attributes: [{ key: erg.constants["pohAttributeHubris"], value: 85 }, { key: erg.constants["pohAttributeExpression"], value: 85 }, { key: erg.constants["pohAttributeSociability"], value: 5 }, { key: erg.constants["pohAttributePettiness"], value: 5 }, { key: erg.constants["pohAttributeViciousness"], value: 5 }, { key: erg.constants["pohAttributeJealousy"], value: 5 }],
    connections: [{ key: erg.constants["pohKyouko"], passion: 30, track: erg.constants["pohPassionTrackServant"], baseAttraction: 30 }, { key: erg.constants["pohIchirin"], passion: 70, track: erg.constants["pohPassionTrackServant"], baseAttraction: 50 }, { key: erg.constants["pohMurasa"], passion: 70, track: erg.constants["pohPassionTrackServant"], baseAttraction: 50 }, { key: erg.constants["pohShou"], passion: 70, track: erg.constants["pohPassionTrackServant"], baseAttraction: 50 }, { key: erg.constants["pohKanako"], passion: 40, track: erg.constants["pohPassionTrackRival"], baseAttraction: 50 }, { key: erg.constants["pohMiko"], passion: 40, track: erg.constants["pohPassionTrackRival"], baseAttraction: 50 }, { key: erg.constants["pohNue"], passion: 40, track: erg.constants["pohPassionTrackFriend"], baseAttraction: 50 }],
    specialTraits: [erg.constants["pohTraitSpecialFillingTheWorldWithLight"]]
    
};

//Nue

erg[erg.constants["pohHearts"]][erg.constants["pohNue"]] = {

    key: erg.constants["pohNue"],
    firstName: "Nue",
    lastName: "Houjuu",
    fullName: "Nue Houjuu",
    preferredName: "Nue",
    title: "The Unidentified Fantastic Flying Girl",
    profilePrefix: "nue",
    tier: erg.constants["pohTierExtra"],
    species: erg.constants["pohSpeciesNue"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairBlack"],
    eyeColour: erg.constants["pohEyesRed"],
    attributes: [{ key: erg.constants["pohAttributeCourage"], value: 60 }, { key: erg.constants["pohAttributePettiness"], value: 75 }, { key: erg.constants["pohAttributeViciousness"], value: 75 }],
    connections: [{ key: erg.constants["pohByakuren"], passion: 40, track: erg.constants["pohPassionTrackFriend"], baseAttraction: 50 }, { key: erg.constants["pohMamizou"], passion: 60, track: erg.constants["pohPassionTrackFriend"], baseAttraction: 50 }],
    specialTraits: [erg.constants["pohTraitSpecialUndefinedFantasticObject"]]
    
};


//DS

//Hatate

erg[erg.constants["pohHearts"]][erg.constants["pohHatate"]] = {

    key: erg.constants["pohHatate"],
    firstName: "Hatate",  //rs gonna Hatate!
    lastName: "Himekaidou",
    fullName: "Hatate Himekaidou",
    preferredName: "Hatate",
    title: "Modern-Day Thoughtography Reporter",
    profilePrefix: "hatate",
    tier: erg.constants["pohTierLieutenant"],  //Probably generous, but eh.
    species: erg.constants["pohSpeciesCrowTengu"],
    hairLength: erg.constants["pohHairLong"],
    hairColour: erg.constants["pohHairBrown"],
    eyeColour: erg.constants["pohEyesBrown"],
    connections: [{ key: erg.constants["pohMomiji"], passion: 40, track: erg.constants["pohPassionTrackAlly"], baseAttraction: 40 }],
    specialTraits: [erg.constants["pohTraitSpecialThoughtography"]]

};


//TD

//Kyouko

erg[erg.constants["pohHearts"]][erg.constants["pohKyouko"]] = {

    key: erg.constants["pohKyouko"],
    firstName: "Kyouko",
    lastName: "Kasadani",
    fullName: "Kyouko Kasadani",
    preferredName: "Kyouko",
    title: "Echoing Sutra Chant",
    profilePrefix: "kyouko",
    tier: erg.constants["pohTierThug"],
    species: erg.constants["pohSpeciesYamabiko"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairGreen"],
    eyeColour: erg.constants["pohEyesGreen"],
    attributes: [{ key: erg.constants["pohAttributeExpression"], value: 75 }, { key: erg.constants["pohAttributeSociability"], value: 65}],
    connections: [{ key: erg.constants["pohByakuren"], passion: 50, track: erg.constants["pohPassionTrackMaster"], baseAttraction: 75 }, { key: erg.constants["pohMystia"], passion: 50, track: erg.constants["pohPassionTrackFriend"], baseAttraction: 75 }],
    specialTraits: [erg.constants["pohTraitSpecialEcho"]]

};

//Yoshika

erg[erg.constants["pohHearts"]][erg.constants["pohYoshika"]] = {

    key: erg.constants["pohYoshika"],
    firstName: "Yoshika",
    lastName: "Miyako",
    fullName: "Yoshika Miyako",
    preferredName: "Yoshika",
    title: "Loyal Undead",
    profilePrefix: "yoshika",
    tier: erg.constants["pohTierGuard"],
    species: erg.constants["pohSpeciesJiangShi"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairBlue"],
    eyeColour: erg.constants["pohEyesBlue"],
    attributes: [{ key: erg.constants["pohAttributeExpression"], value: 5 }, { key: erg.constants["pohAttributeCleverness"], value: 5}, { key: erg.constants["pohAttributeCourage"], value: 95}],
    connections: [{ key: erg.constants["pohSeiga"], passion: 80, track: erg.constants["pohPassionTrackMaster"], baseAttraction: 80 }],
    specialTraits: [erg.constants["pohTraitLoyalServant"]]
};

//Seiga

erg[erg.constants["pohHearts"]][erg.constants["pohSeiga"]] = {

    key: erg.constants["pohSeiga"],
    firstName: "Seiga",
    lastName: "Kaku",
    fullName: "Seiga Kaku",
    preferredName: "Seiga",
    title: "Unreasonable and Unjust Hermit",
    profilePrefix: "seiga",
    tier: erg.constants["pohTierLieutenant"],
    species: erg.constants["pohSpeciesHermit"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairBlue"],
    eyeColour: erg.constants["pohEyesBlue"],
    attributes: [{ key: erg.constants["pohAttributeHubris"], value: 90 }, { key: erg.constants["pohAttributeCleverness"], value: 75}, { key: erg.constants["pohAttributeViciousness"], value: 90}, { key: erg.constants["pohAttributePettiness"], value: 90}],
    connections: [{ key: erg.constants["pohYoshika"], passion: 40, track: erg.constants["pohPassionTrackServant"], baseAttraction: 30 }, { key: erg.constants["pohTojiko"], passion: 20, track: erg.constants["pohPassionTrackAlly"], baseAttraction: 30 }, { key: erg.constants["pohFuto"], passion: 20, track: erg.constants["pohPassionTrackAlly"], baseAttraction: 30 }, { key: erg.constants["pohMiko"], passion: 30, track: erg.constants["pohPassionTrackAlly"], baseAttraction: 40 }],
    specialTraits: [erg.constants["pohTraitDemandingMaster"]]

};

//Tojiko

erg[erg.constants["pohHearts"]][erg.constants["pohTojiko"]] = {

    key: erg.constants["pohTojiko"],
    firstName: "Tojiko",
    lastName: "Soga",
    fullName: "Soga no Tojiko",
    preferredName: "Tojiko",
    title: "Bourei of the Children of the Gods",
    profilePrefix: "tojiko",
    tier: erg.constants["pohTierLieutenant"],
    species: erg.constants["pohSpeciesBourei"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairGreen"],
    eyeColour: erg.constants["pohEyesGreen"],
    attributes:  [{ key: erg.constants["pohAttributePettiness"], value: 25 }, { key: erg.constants["pohAttributeViciousness"], value: 75}],
    connections: [{ key: erg.constants["pohSeiga"], passion: 20, track: erg.constants["pohPassionTrackAlly"], baseAttraction: 30 }, { key: erg.constants["pohFuto"], passion: 75, track: erg.constants["pohPassionTrackRival"], baseAttraction: 60 }, { key: erg.constants["pohMiko"], passion: 60, track: erg.constants["pohPassionTrackMaster"], baseAttraction: 50 }],
    specialTraits: [erg.constants["pohTraitSpecialGhostlyBody"]]

};

//Futo

erg[erg.constants["pohHearts"]][erg.constants["pohFuto"]] = {

    key: erg.constants["pohFuto"],
    firstName: "Futo",
    lastName: "Mononobe",
    fullName: "Mononobe no Futo",
    preferredName: "Futo",
    title: "Dead Nirvana Hermit from Ancient Japan",
    profilePrefix: "futo",
    tier: erg.constants["pohTierHero"],
    species: erg.constants["pohSpeciesHermit"],
    hairLength: erg.constants["pohHairLong"],
    hairColour: erg.constants["pohHairGrey"],
    eyeColour: erg.constants["pohEyesGrey"],
    attributes:  [{ key: erg.constants["pohAttributePettiness"], value: 75 }, { key: erg.constants["pohAttributeViciousness"], value: 25}, { key: erg.constants["pohAttributeExpression"], value: 25}, { key: erg.constants["pohAttributeSociability"], value: 25}],
    connections: [{ key: erg.constants["pohSeiga"], passion: 20, track: erg.constants["pohPassionTrackAlly"], baseAttraction: 30 }, { key: erg.constants["pohTojiko"], passion: 75, track: erg.constants["pohPassionTrackRival"], baseAttraction: 60 }, { key: erg.constants["pohMiko"], passion: 60, track: erg.constants["pohPassionTrackMaster"], baseAttraction: 50 }],
    specialTraits: [erg.constants["pohTraitSpecialAnachronism"]]

};

//Miko

erg[erg.constants["pohHearts"]][erg.constants["pohMiko"]] = {

    key: erg.constants["pohMiko"],
    firstName: "Miko",
    lastName: "Toyosatomimi",
    fullName: "Toyosatomimi no Miko",
    preferredName: "Miko",
    title: "Shoutoko Taoist",
    profilePrefix: "miko",
    tier: erg.constants["pohTierBoss"],
    species: erg.constants["pohSpeciesSaint"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairBlonde"],
    eyeColour: erg.constants["pohEyesGrey"],
    attributes:  [{ key: erg.constants["pohAttributeCleverness"], value: 90 }, { key: erg.constants["pohAttributeExpression"], value: 90}, { key: erg.constants["pohAttributeHubris"], value: 90}],
    connections: [{ key: erg.constants["pohSeiga"], passion: 20, track: erg.constants["pohPassionTrackAlly"], baseAttraction: 30 }, { key: erg.constants["pohFuto"], passion: 50, track: erg.constants["pohPassionTrackServant"], baseAttraction: 50 }, { key: erg.constants["pohTojiko"], passion: 50, track: erg.constants["pohPassionTrackServant"], baseAttraction: 50 }, { key: erg.constants["pohKanako"], passion: 40, track: erg.constants["pohPassionTrackRival"], baseAttraction: 50 }, { key: erg.constants["pohByakuren"], passion: 40, track: erg.constants["pohPassionTrackRival"], baseAttraction: 50 }, { key: erg.constants["pohMamizou"], passion: 40, track: erg.constants["pohPassionTrackEnemy"], baseAttraction: 50 }],
    specialTraits: [erg.constants["pohTraitSpecialCrownPrince"], erg.constants["pohTraitSpecialTenDesires"]]

};

//Mamizou

erg[erg.constants["pohHearts"]][erg.constants["pohMamizou"]] = {

    key: erg.constants["pohMamizou"],
    firstName: "Mamizou",
    lastName: "Futatsuiwa",
    fullName: "Mamizou Futatsuiwa",
    preferredName: "Mamizou",
    title: "Bake-danuki with Ten Transformations",
    profilePrefix: "mamizou",
    tier: erg.constants["pohTierExtra"],
    species: erg.constants["pohSpeciesBakeDanuki"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairBrown"],
    eyeColour: erg.constants["pohEyesBrown"],
    attributes: [{ key: erg.constants["pohAttributeCourage"], value: 90 }, { key: erg.constants["pohAttributePettiness"], value: 25}, { key: erg.constants["pohAttributeSociability"], value: 80}], 
    connections: [{ key: erg.constants["pohNue"], passion: 60, track: erg.constants["pohPassionTrackFriend"], baseAttraction: 50 }, { key: erg.constants["pohMiko"], passion: 40, track: erg.constants["pohPassionTrackEnemy"], baseAttraction: 50 }, { key: erg.constants["pohRan"], passion: 60, track: erg.constants["pohPassionTrackEnemy"], baseAttraction: 10 }],
    specialTraits: [erg.constants["pohTraitSpecialMoneylender"]]

};


//WaHH

//Kasen

erg[erg.constants["pohHearts"]][erg.constants["pohKasen"]] = {

    key: erg.constants["pohKasen"],
    firstName: "Kasen",
    lastName: "Ibaraki",
    fullName: "Kasen Ibaraki",
    preferredName: "Kasen",
    title: "The One-Armed Horned Hermit",
    profilePrefix: "kasen",
    tier: erg.constants["pohTierHero"],
    species: erg.constants["pohSpeciesOni"],
    hairLength: erg.constants["pohHairShort"],
    hairColour: erg.constants["pohHairPink"],
    eyeColour: erg.constants["pohEyesRed"],
    reactionTraits: [erg.constants["pohTraitReactionNoMistress"], erg.constants["pohTraitReactionNoVillain"], erg.constants["pohTraitReactionEnlightened"]],
    attributes: [{ key: erg.constants["pohAttributeCourage"], value: 75 }, { key: erg.constants["pohAttributeCleverness"], value: 80 }, { key: erg.constants["pohAttributePettiness"], value: 75 }, { key: erg.constants["pohAttributeHubris"], value: 80 }],
    connections: [{ key: erg.constants["pohYuugi"], passion: 80, track: erg.constants["pohPassionTrackFriend"], baseAttraction: 40 }],
    specialTraits: [erg.constants["pohTraitSpecialDisguisedOni"]]

};



//################################### TIERS REPOSITORY #################################################

erg[erg.constants["pohTiers"]] = {};

erg[erg.constants["pohTiers"]][erg.constants["pohTierYoukaiSage"]] = {

    key: erg.constants["pohTierYoukaiSage"],
    magnitude: 11,
    label: "Youkai Sage (Phantasm Stage)"

};

erg[erg.constants["pohTiers"]][erg.constants["pohTierYoukaiMiko"]] = {

    key: erg.constants["pohTierYoukaiMiko"],
    magnitude: 9,
    label: "Youkai Shrine Maiden"

};

erg[erg.constants["pohTiers"]][erg.constants["pohTierConqueringWitch"]] = {

    key: erg.constants["pohTierConqueringWitch"],
    magnitude: 8,
    label: "Conquering Witch"

};

erg[erg.constants["pohTiers"]][erg.constants["pohTierExtra"]] = {

    key: erg.constants["pohTierExtra"],
    magnitude: 7,
    label: "Terror (Extra Stage)"

};

erg[erg.constants["pohTiers"]][erg.constants["pohTierBoss"]] = {

    key: erg.constants["pohTierBoss"],
    magnitude: 6,
    label: "Boss (Stage 6)"

};

erg[erg.constants["pohTiers"]][erg.constants["pohTierHero"]] = {

    key: erg.constants["pohTierHero"],
    magnitude: 5,
    label: "Hero (Stage 5)"

};

erg[erg.constants["pohTiers"]][erg.constants["pohTierLieutenant"]] = {

    key: erg.constants["pohTierLieutenant"],
    magnitude: 4,
    label: "Lieutenant (Stage 4)"

};

erg[erg.constants["pohTiers"]][erg.constants["pohTierGuard"]] = {

    key: erg.constants["pohTierGuard"],
    magnitude: 3,
    label: "Guard (Stage 3)"

};

erg[erg.constants["pohTiers"]][erg.constants["pohTierThug"]] = {

    key: erg.constants["pohTierThug"],
    magnitude: 2,
    label: "Thug (Stage 2)"

};

erg[erg.constants["pohTiers"]][erg.constants["pohTierRuffian"]] = {

    key: erg.constants["pohTierRuffian"],
    magnitude: 1,
    label: "Ruffian (Stage 1)"

};

erg[erg.constants["pohTiers"]][erg.constants["pohTierMook"]] = {

    key: erg.constants["pohTierMook"],
    magnitude: 1,
    label: "Mook (Stage 1 Midboss)"

};


//################################### SPECIES REPOSITORY #################################################


erg[erg.constants["pohSpecies"]] = {};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesDevil"]] = {

    key:  erg.constants["pohSpeciesDevil"],
    label: "Devil",
    description: "Devils are ostensibly evil creatures originating from Western infernal realms.  Powerful magicians may summon and bind a devil for important tasks, such as library assistance and secretarial work.",
    wikiLink: "http://en.touhouwiki.net/wiki/Devil"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesYukiOnna"]] = {

    key: erg.constants["pohSpeciesYukiOnna"],
    label: "Yuki-onna",
    description: "&quot;Snow Woman.&quot;  A species of youkai associated with winter and snowstorms, known for their inhuman beauty (though in Gensokyo it's hard to stand out that way!).  Usually not seen outside of their native season, but it's promising to be an unusual year.",
    wikiLink: "http://en.touhouwiki.net/wiki/Yuki-onna"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesYuurei"]] = {

    key: erg.constants["pohSpeciesYuurei"],
    label: "Yuurei",
    description: "Ghosts, spirits of the deceased.  Most are bodiless entities within the Netherworld, but some more powerful and heroic yuurei are notables of Gensokyo.",
    wikiLink: "http://en.touhouwiki.net/wiki/Yuurei"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesPoltergeist"]] = {

    key: erg.constants["pohSpeciesPoltergeist"],
    label: "Poltergeist",
    description: "Paranormal phenomena similar to yuurei, but created as they are rather than being the spirits of deceased persons.  Have the power to manipulate objects remotely.",
    wikiLink: "http://en.touhouwiki.net/wiki/Poltergeist"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesKitsune"]] = {

    key: erg.constants["pohSpeciesKitsune"],
    label: "Kitsune",
    description: "A fox who lives a long time may become a youkai, developing great intelligence and magical powers.  They grow an additional tail for each century of life.",
    wikiLink: "http://en.touhouwiki.net/wiki/Kitsune"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesNightSparrow"]] = {

    key: erg.constants["pohSpeciesNightSparrow"],
    label: "Night Sparrow (Youkai)",
    description: "A youkai species known for their singing and ability to inflict night-blindness.",
    wikiLink: "http://en.touhouwiki.net/wiki/Night_Sparrow"


};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesWereHakutaku"]] = {

    key: erg.constants["pohSpeciesWereHakutaku"],
    label: "Were-hakutaku",
    description: "A hakutaku is a youkai beast, somewhat like a great horned lion, which serves as an advisor to virtuous rulers.  A were-hakutaku is a human who can transform partially or fully into a hakutaku, usually under the influence of the full moon.",
    wikiLink: "http://en.touhouwiki.net/wiki/Hakutaku"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesGod"]] = {

    key: erg.constants["pohSpeciesGod"],
    label: "God",
    description:  "A divine being or deity.  Most gods in Gensokyo are kami as understood by Shinto thought, though Myouren temple boasts an avatar of a Buddhist deity.  Some gods wield terrifying power, but others are minor spirits, easy prey for shrine maidens and other heroes.",
    wikiLink: "http://en.touhouwiki.net/wiki/God"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesHouraiImmortal"]] = {

    key: erg.constants["pohSpeciesHouraiImmortal"],
    label: "Hourai Immortal",
    description: "One who has imbibed the forbidden Hourai Elixir and has been forever cut off from death, aging, illness and destruction.  No force can affect any permanent change upon their immortal bodies.",
    wikiLink: "http://en.touhouwiki.net/wiki/Hourai_Elixir"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesYama"]] = {

    key: erg.constants["pohSpeciesYama"],
    label: "Yama",
    description: "Gods that sit in judgement of the dead, with the power to look into the past deeds of any person.",
    wikiLink: "http://en.touhouwiki.net/wiki/Yama"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesWhiteWolfTengu"]] = {

    key: erg.constants["pohSpeciesWhiteWolfTengu"],
    label: "White Wolf Tengu",
    description: "Tengu are a powerful race of beast-youkai.  In Gensokyo, they live mostly on the Youkai Mountain; the wolf tengu are charged with the mountain's defence.  They play shogi during their leisure time.",
    wikiLink: "http://en.touhouwiki.net/wiki/Hakurou_Tengu#Hakurou_Tengu"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesCrowTengu"]] = {

    key: erg.constants["pohSpeciesCrowTengu"],
    label: "Crow Tengu",
    description: "Tengu are a powerful race of beast-youkai.  In Gensokyo, they live mostly on the Youkai Mountain; the crow tengu are the ones most often seen away from the mountain, as their responsibility is information-gathering.  At some point this espionage-work seems to have been displaced by tabloid journalism; many crow tengu publish newspapers of lurid content and questionable veracity.",
    wikiLink: "http://en.touhouwiki.net/wiki/Hakurou_Tengu#Karasu_Tengu"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesHashihime"]] = {

    key: erg.constants["pohSpeciesHashihime"],
    label: "Hashihime",
    description: "&quot;Bridge Princess.&quot;  A species of youkai empowered by jealousy; legend has it the first hashihime was a woman who begged the gods for the means to take revenge on an unfaithful lover.",
    wikiLink: "http://en.touhouwiki.net/wiki/Hashihime"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesOni"]] = {

    key: erg.constants["pohSpeciesOni"],
    label: "Oni",
    description: "Horned creatures of immense physical strength.  Exceptionally fond of drink and contests of skill and power.  Oni loathe lies, but have been known to indulge in trickery and pranks.",
    wikiLink: "http://en.touhouwiki.net/wiki/Oni"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesKasha"]] = {

    key: erg.constants["pohSpeciesKasha"],
    label: "Kasha",
    description: "Cat-demons who cart the corpses of the dead to hell.  Kasha are thought to be ordinary cats who have become youkai over the course of their lives, though why a cat would become a kasha rather than an ordinary youkai cat is unclear.",
    wikiLink: "http://en.touhouwiki.net/wiki/Kasha"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesKarakasaObake"]] = {

    key: erg.constants["pohSpeciesKarakasaObake"],
    label: "Karakasa obake (Tsukumogami)",
    description: "Tsukumogami are youkai born when a tool or inanimate object is disrespectfully thrown away, seeking vengeance against the humans that discarded it.  Karakasa obake are umbrella tsukumogami, who delight in startling humans.",
    wikiLink: "http://en.touhouwiki.net/wiki/Tsukumogami"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesTiger"]] = {

    key: erg.constants["pohSpeciesTiger"],
    label: "Tiger (Youkai)",
    description:  "While youkai created from beasts or sharing features of animals are common in Gensokyo, there is only one youkai tiger: Shou Toramaru, the avatar of Bishamonten.  She is a powerful and noble youkai, reflecting the virtues of the tiger.",
    wikiLink: "http://en.touhouwiki.net/wiki/Tiger"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesMagician"]] = {

    key: erg.constants["pohSpeciesMagician"],
    label: "Magician",
    description: "Beings able to practice magic, learning new powers through study and experimentation, rather than relying on unique or innate power.  Magicians can refer to either a race of youkai or humans that follow magic as a profession, but since many humans that do so become youkai thereby, the distinction is blurry.  There is only one notable human magician in Gensokyo at present, and her qualifications as a human grow increasingly questionable.  The rest are properly considered youkai; they do not age and consider the mightiest youkai to be their peers.",
    wikiLink: "http://en.touhouwiki.net/wiki/Magician"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesNue"]] = {

    key: erg.constants["pohSpeciesNue"],
    label: "Nue",
    description: "There are a myriad of contradictory legends describing this mysterious and powerful species of youkai.  It seems likely that there is only one nue, Nue Houjuu, whose powers of shapechanging and deception have spawned the myth of an entire race.",
    wikiLink: "http://en.touhouwiki.net/wiki/Nue_(Species)"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesYamabiko"]] = {

    key: erg.constants["pohSpeciesYamabiko"],
    label: "Yamabiko",
    description: "A species of youkai once responsible for echoing back words shouted into mountains.  Now that echoes are generally understood to be a natural phenomena, they are without purpose and their existence is under threat.  Gensokyo is a haven for such youkai.",
    wikiLink: "http://en.touhouwiki.net/wiki/Yamabiko"
};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesJiangShi"]] = {

    key: erg.constants["pohSpeciesJiangShi"],
    label: "Jiang Shi (Zombie)",
    description: "Reanimated corpses bound to the service of a sorcerous master, controlled by a charm attached to the forehead.  Unlike other formerly living creatures haunting the world, there's no special attachment or emotion chaining them, just their misfortune to be chosen by a necromancer.  The only known jiang shi active in Gensokyo is much more like a western zombie than the Chinese version, though this may just reflect the twisted personality of her master, Seiga Kaku.",
    wikiLink: "http://en.touhouwiki.net/wiki/Zombie"
};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesBourei"]] = {

    key: erg.constants["pohSpeciesBourei"],
    label: "Bourei",
    description: "Ghosts formed by the powerful attachment of a dead person to the living world.  Unlike most yuurei, bourei have a solid body and appear as they do while alive; their weakness is their true body, their corpse.  Some bourei do display ghostly traits, such as spirit-tails in the place of legs.",
    wikiLink: "http://en.touhouwiki.net/wiki/Bourei"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesSaint"]] = {

    key: erg.constants["pohSpeciesSaint"],
    label: "Saint",
    description:  "A human canonised as holy by a religion, considered to be a semi-divine class of being.  The most prominent example in Gensokyo is known to have only used her professed religion as a political tool, so it seems sincerity is not necessary.",
    wikiLink: "http://en.touhouwiki.net/wiki/Saint"


};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesBakeDanuki"]] = {

    key: erg.constants["pohSpeciesBakeDanuki"],
    label: "Bake-danuki",
    description: "Youkai tanuki (racoon dog).  Bake-danuki have the power to shapeshift themselves, others and objects; leaves into money is one of their favourite tricks.",
    wikiLink: "http://en.touhouwiki.net/wiki/Tanuki"

};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesYoukai"]] = {

    key: erg.constants["pohSpeciesYoukai"],
    label: "Youkai",
    description: "An extremely broad category of supernatural creatures, usually applied to those of Japanese origin.  The term is mostly useful for distinguishing Gensokyo's supernatural inhabitants from animals, humans and gods.  While the majority of youkai are like wild animals, physically powerful and dangerous but vulnerable to spiritual power, those with humanoid forms are intelligent, mighty and often very sociable.  A youkai referred to only as such, without a qualifying species name, is likely to be a unique creature with its own strange powers, such as the terrifying Yuuka Kazami and Yukari Yakumo.",
    wikiLink: "http://en.touhouwiki.net/wiki/Youkai"
};

erg[erg.constants["pohSpecies"]][erg.constants["pohSpeciesHermit"]] = {

    key: erg.constants["pohSpeciesHermit"],
    label: "Hermit",
    description: "Beings (generally humans) who have cultivated a degree of immortality and supernatural power through mystic training.  Righteous hermits can ascend to the heavens as Celestials, or enter Nirvana, but it seems possible to enjoy the powers and longevity of an earthly hermit while remaining a wicked person.",
    wikiLink: "http://en.touhouwiki.net/wiki/Hermit"

};


//################################### APPEARANCE REPOSITORIES #################################################

//Hair - Length

erg[erg.constants["pohHairLength"]] = {};

erg[erg.constants["pohHairLength"]][erg.constants["pohHairLong"]] = {

    key: erg.constants["pohHairLong"],
    label: "Long"

};

erg[erg.constants["pohHairLength"]][erg.constants["pohHairMedium"]] = {

    key: erg.constants["pohHairMedium"],
    label: "Medium"

};

erg[erg.constants["pohHairLength"]][erg.constants["pohHairShort"]] = {

    key: erg.constants["pohHairShort"],
    label: "Short"

};


//Hair - Colour

erg[erg.constants["pohHairColour"]] = {};

erg[erg.constants["pohHairColour"]][erg.constants["pohHairBlack"]] = {

    key: erg.constants["pohHairBlack"],
    label: "Black"

};

erg[erg.constants["pohHairColour"]][erg.constants["pohHairBlonde"]] = {

    key: erg.constants["pohHairBlonde"],
    label: "Blonde"

};

erg[erg.constants["pohHairColour"]][erg.constants["pohHairWhite"]] = {

    key: erg.constants["pohHairWhite"],
    label: "White"

};

erg[erg.constants["pohHairColour"]][erg.constants["pohHairSilver"]] = {

    key: erg.constants["pohHairSilver"],
    label: "Silver"

};

erg[erg.constants["pohHairColour"]][erg.constants["pohHairBrown"]] = {

    key: erg.constants["pohHairBrown"],
    label: "Brown"

};

erg[erg.constants["pohHairColour"]][erg.constants["pohHairGreen"]] = {

    key: erg.constants["pohHairGreen"],
    label: "Green"

};

erg[erg.constants["pohHairColour"]][erg.constants["pohHairRed"]] = {

    key: erg.constants["pohHairRed"],
    label: "Red"

};

erg[erg.constants["pohHairColour"]][erg.constants["pohHairPink"]] = {

    key: erg.constants["pohHairPink"],
    label: "Pink"

};

erg[erg.constants["pohHairColour"]][erg.constants["pohHairGrey"]] = {

    key: erg.constants["pohHairGrey"],
    label: "Grey"

};

erg[erg.constants["pohHairColour"]][erg.constants["pohHairPurple"]] = {

    key: erg.constants["pohHairPurple"],
    label: "Purple"

};

erg[erg.constants["pohHairColour"]][erg.constants["pohHairLavender"]] = {

    key: erg.constants["pohHairLavender"],
    label: "Lavender"

};

erg[erg.constants["pohHairColour"]][erg.constants["pohHairBlue"]] = {

    key: erg.constants["pohHairBlue"],
    label: "Blue"

};

erg[erg.constants["pohHairColour"]][erg.constants["pohHairByakuren"]] = {

    key: erg.constants["pohHairByakuren"],
    label: "Purple to Brown gradient"

};

erg[erg.constants["pohHairColour"]][erg.constants["pohHairShou"]] = {

    key: erg.constants["pohHairShou"],
    label: "Tiger-striped blonde"

};


//Eyes - Colour

erg[erg.constants["pohEyeColour"]] = {};

erg[erg.constants["pohEyeColour"]][erg.constants["pohEyesHazel"]] = {

    key: erg.constants["pohEyesHazel"],
    label: "Hazel"

};

erg[erg.constants["pohEyeColour"]][erg.constants["pohEyesBrown"]] = {

    key: erg.constants["pohEyesBrown"],
    label: "Brown"

};

erg[erg.constants["pohEyeColour"]][erg.constants["pohEyesBlue"]] = {

    key: erg.constants["pohEyesBlue"],
    label: "Blue"

};

erg[erg.constants["pohEyeColour"]][erg.constants["pohEyesGreen"]] = {

    key: erg.constants["pohEyesGreen"],
    label: "Green"

};

erg[erg.constants["pohEyeColour"]][erg.constants["pohEyesRed"]] = {

    key: erg.constants["pohEyesRed"],
    label: "Red"

};

erg[erg.constants["pohEyeColour"]][erg.constants["pohEyesLavender"]] = {

    key: erg.constants["pohEyesLavender"],
    label: "Lavender"

};

erg[erg.constants["pohEyeColour"]][erg.constants["pohEyesPurple"]] = {

    key: erg.constants["pohEyesPurple"],
    label: "Purple"

};

erg[erg.constants["pohEyeColour"]][erg.constants["pohEyesGold"]] = {

    key: erg.constants["pohEyesGold"],
    label: "Gold"

};

erg[erg.constants["pohEyeColour"]][erg.constants["pohEyesGrey"]] = {

    key: erg.constants["pohEyesGrey"],
    label: "Grey"

};

erg[erg.constants["pohEyeColour"]][erg.constants["pohEyesKogasa"]] = {

    key: erg.constants["pohEyesKogasa"],
    label: "Blue right, Red left"

};


//################################### ATTRACTION TARGETS #################################################

erg[erg.constants["pohAttractionTargets"]] = {};

erg[erg.constants["pohAttractionTargets"]][erg.constants["pohAttractionTargetHairLength"]] = {

    key: erg.constants["pohAttractionTargetHairLength"],
    label: "Hair Length"

}

erg[erg.constants["pohAttractionTargets"]][erg.constants["pohAttractionTargetHairColour"]] = {

    key: erg.constants["pohAttractionTargetHairColour"],
    label: "Hair Colour"

}

erg[erg.constants["pohAttractionTargets"]][erg.constants["pohAttractionTargetEyeColour"]] = {

    key: erg.constants["pohAttractionTargetEyeColour"],
    label: "Eye Colour"

}

erg[erg.constants["pohAttractionTargets"]][erg.constants["pohAttractionTargetSpecies"]] = {

    key: erg.constants["pohAttractionTargetSpecies"],
    label: "Species"

}

erg[erg.constants["pohAttractionTargets"]][erg.constants["pohAttractionTargetTier"]] = {

    key: erg.constants["pohAttractionTargetTier"],
    label: "Tier"

}

erg[erg.constants["pohAttractionTargets"]][erg.constants["pohAttractionTargetGeneric"]] = {

    key: erg.constants["pohAttractionTargetGeneric"],
    label: "Generic"

}

erg[erg.constants["pohAttractionTargets"]][erg.constants["pohTraitSpecialShipCaptain"]] = {

    key: erg.constants["pohTraitSpecialShipCaptain"],
    label: "Special Trait: Ship's Captain"

}

//################################### TRAIT REPOSITORY #################################################

erg[erg.constants["pohTraits"]] = {};


//Attraction Traits

//Hair length

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionHairLong"]] = {

    key: erg.constants["pohTraitAttractionHairLong"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetHairLength"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Long Hair Is Pretty!",
    positive: [erg.constants["pohHairLong"]],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionHairShort"]] = {

    key: erg.constants["pohTraitAttractionHairShort"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetHairLength"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Short Hair Is Cute!",
    positive: [erg.constants["pohHairShort"]],
    negative: []

};


//Hair Colour


erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionHairExotic"]] = {

    key: erg.constants["pohTraitAttractionHairExotic"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetHairColour"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Hair Should Be Amazing!",
    positive: [erg.constants["pohHairByakuren"], erg.constants["pohHairShou"]],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionHairTraditional"]] = {

    key: erg.constants["pohTraitAttractionHairTraditional"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetHairColour"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "For Hair, Traditional Colours",
    positive: [erg.constants["pohHairBrown"], erg.constants["pohHairBlack"]],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionHairWinter"]] = {

    key: erg.constants["pohTraitAttractionHairWinter"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetHairColour"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Hair Should Be Like Winter",
    positive: [erg.constants["pohHairWhite"], erg.constants["pohHairGrey"], erg.constants["pohHairSilver"]],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionHairGold"]] = {

    key: erg.constants["pohTraitAttractionHairGold"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetHairColour"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Like Spun Gold...",
    positive: [erg.constants["pohHairBlonde"]],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionHairRose"]] = {

    key: erg.constants["pohTraitAttractionHairRose"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetHairColour"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "At Home in a Rose Garden",
    positive: [erg.constants["pohHairRed"], erg.constants["pohHairPink"]],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionHairCool"]] = {

    key: erg.constants["pohTraitAttractionHairCool"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetHairColour"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Soothing Colours Are Lovely",
    positive: [erg.constants["pohHairBlue"], erg.constants["pohHairPurple"], erg.constants["pohHairLavender"]],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionHairLively"]] = {

    key: erg.constants["pohTraitAttractionHairLively"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetHairColour"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Doesn't Green Look Lively?",
    positive: [erg.constants["pohHairGreen"]],
    negative: []

};


//Eye Colour

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionEyesRed"]] = {

    key: erg.constants["pohTraitAttractionEyesRed"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetEyeColour"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Eyes Like Rubies!",
    positive: [erg.constants["pohEyesRed"]],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionEyesCool"]] = {

    key: erg.constants["pohTraitAttractionEyesCool"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetEyeColour"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Like Pools of Water",
    positive: [erg.constants["pohEyesBlue"], erg.constants["pohEyesPurple"], erg.constants["pohEyesLavender"]],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionEyesMetallic"]] = {

    key: erg.constants["pohTraitAttractionEyesMetallic"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetEyeColour"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Gold or Steel For Me!",
    positive: [erg.constants["pohEyesGold"], erg.constants["pohEyesGrey"]],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionEyesTraditional"]] = {

    key: erg.constants["pohTraitAttractionEyesTraditional"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetEyeColour"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Normal Eyes, Normal!",
    positive: [erg.constants["pohEyesBrown"], erg.constants["pohEyesHazel"]],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionEyesGreen"]] = {

    key: erg.constants["pohTraitAttractionEyesGreen"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetEyeColour"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Give Me Emeralds",
    positive: [erg.constants["pohEyesGreen"]],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionEyesExotic"]] = {

    key: erg.constants["pohTraitAttractionEyesExotic"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetEyeColour"],
    magnitude: erg.constants["pohAttractionModifierVeryHigh"],
    label: "Heterochromia Is Lovely",
    positive: [erg.constants["pohEyesKogasa"]],
    negative: []

};


//Species


erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionSpeciesHell"]] = {

    key: erg.constants["pohTraitAttractionSpeciesHell"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetSpecies"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Enticed by the Nether Realms",
    positive: [erg.constants["pohSpeciesOni"], erg.constants["pohSpeciesDevil"], erg.constants["pohSpeciesKasha"], erg.constants["pohSpeciesYama"]],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionSpeciesBeast"]] = {

    key: erg.constants["pohTraitAttractionSpeciesBeast"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetSpecies"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Animal Lover",
    positive: [erg.constants["pohSpeciesKitsune"], erg.constants["pohSpeciesBakeDanuki"], erg.constants["pohSpeciesNightSparrow"], erg.constants["pohSpeciesKasha"], erg.constants["pohSpeciesWereHakutaku"], erg.constants["pohSpeciesTiger"], erg.constants["pohSpeciesWhiteWolfTengu"], erg.constants["pohSpeciesCrowTengu"]],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionSpeciesDead"]] = {

    key: erg.constants["pohTraitAttractionSpeciesDead"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetSpecies"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Love Beyond Death",
    positive: [erg.constants["pohSpeciesYuurei"], erg.constants["pohSpeciesBourei"], erg.constants["pohSpeciesPoltergeist"], erg.constants["pohSpeciesJiangShi"]],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionSpeciesDivine"]] = {

    key: erg.constants["pohTraitAttractionSpeciesDivine"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetSpecies"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Worshipful",
    positive: [erg.constants["pohSpeciesGod"], erg.constants["pohSpeciesYama"]],
    negative: []

};


erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionSpeciesUndying"]] = {

    key: erg.constants["pohTraitAttractionSpeciesUndying"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetSpecies"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Immortal Love",
    positive: [erg.constants["pohSpeciesHouraiImmortal"], erg.constants["pohSpeciesHermit"], erg.constants["pohSpeciesSaint"], erg.constants["pohSpeciesMagician"]],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionSpeciesYoukai"]] = {

    key: erg.constants["pohTraitAttractionSpeciesYoukai"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetSpecies"],
    magnitude: erg.constants["pohAttractionModifierHigh"],
    label: "Likes Interesting Youkai",
    positive: [erg.constants["pohSpeciesYoukai"], erg.constants["pohSpeciesYukiOnna"], erg.constants["pohSpeciesHashihime"], erg.constants["pohSpeciesKarakasaObake"], erg.constants["pohSpeciesNue"], erg.constants["pohSpeciesYamabiko"]],
    negative: []

};


//Tier traits go here

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionTierWeak"]] = {

    key: erg.constants["pohTraitAttractionTierWeak"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetTier"],
    subtarget: erg.constants["pohAttractionSubtargetTierLower"],
    magnitude: erg.constants["pohAttractionModifierLow"],
    magnitudeVariable: 0,
    label: "Big Sister",
    positive: [],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionTierEqual"]] = {

    key: erg.constants["pohTraitAttractionTierEqual"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetTier"],
    subtarget: erg.constants["pohAttractionSubtargetTierEqual"],
    magnitude: erg.constants["pohAttractionModifierVeryHigh"],
    magnitudeVariable: erg.constants["pohAttractionModifierHigh"],
    label: "Attracted to Peers",
    positive: [],
    negative: []

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionTierStrong"]] = {

    key: erg.constants["pohTraitAttractionTierStrong"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohAttractionTargetTier"],
    subtarget: erg.constants["pohAttractionSubtargetTierHigher"],
    magnitude: erg.constants["pohAttractionModifierLow"],
    magnitudeVariable: 0,
    label: "Hero Worship",
    positive: [],
    negative: []

};


//Generic buff/penalty traits

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionGenericMarisa"]] = {

    key: erg.constants["pohTraitAttractionGenericMarisa"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierAutomaticBuff"],
    target: erg.constants["pohAttractionTargetGeneric"],
    magnitude: erg.constants["pohAttractionModifierVeryHigh"],
    label: "Marisa's Student: Girl Crazy"
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionGenericNone"]] = {

    key: erg.constants["pohTraitAttractionGenericMarisa"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierAutomaticPenalty"],
    target: erg.constants["pohAttractionTargetGeneric"],
    magnitude: erg.constants["pohAttractionModifierExtreme"],
    label: "Not Shallow"
};

//Special attraction traits

erg[erg.constants["pohTraits"]][erg.constants["pohTraitAttractionGirlInUniform"]] = {

    key: erg.constants["pohTraitAttractionGirlInUniform"],
    category: erg.constants["pohTraitCategoryAttraction"],
    type: erg.constants["pohTraitTypeAttractionModifierConditional"],
    target: erg.constants["pohTraitSpecialShipCaptain"],
    magnitude: erg.constants["pohAttractionModifierExtreme"],
    label: "Girl in Uniform",
    positive: [],
    negative: []

};


//REACTION TRAITS

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionTsundere"]] = {

    key: erg.constants["pohTraitReactionTsundere"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Love of Tsundere",
    description: "Isn't it adorable when they're too proud to admit they love me?",
    attributes: [{

        key: erg.constants["pohAttributeExpression"],
        success: erg.constants["pohAttributeTestTraitSubtractLow"],
        fail: erg.constants["pohAttributeTestTraitAddLow"]

    }, {

        key: erg.constants["pohAttributeHubris"],
        success: erg.constants["pohAttributeTestTraitAddLow"],
        fail: erg.constants["pohAttributeTestTraitSubtractLow"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionAwkwardEnvy"]] = {

    key: erg.constants["pohTraitReactionAwkwardEnvy"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Her Awkward Envy!",
    description: "When they're jealous but too shy to speak up, doesn't it catch your heart a little?",
    attributes: [{

        key: erg.constants["pohAttributeSociability"],
        success: erg.constants["pohAttributeTestTraitSubtractLow"],
        fail: erg.constants["pohAttributeTestTraitAddLow"]

    }, {

        key: erg.constants["pohAttributeJealousy"],
        success: erg.constants["pohAttributeTestTraitAddLow"],
        fail: erg.constants["pohAttributeTestTraitSubtractLow"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionCoward"]] = {

    key: erg.constants["pohTraitReactionCoward"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Cute Cowards",
    description: "If she's scared and focused on little things, doesn't she need me to protect her from the real dangers?",
    attributes: [{

        key: erg.constants["pohAttributeCourage"],
        success: erg.constants["pohAttributeTestTraitSubtractLow"],
        fail: erg.constants["pohAttributeTestTraitAddLow"]

    }, {

        key: erg.constants["pohAttributePettiness"],
        success: erg.constants["pohAttributeTestTraitAddLow"],
        fail: erg.constants["pohAttributeTestTraitSubtractLow"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionBeast"]] = {

    key: erg.constants["pohTraitReactionBeast"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Bestial Love",
    description: "Savage and not too bright - it makes me want to put a leash on them!",
    attributes: [{

        key: erg.constants["pohAttributeCleverness"],
        success: erg.constants["pohAttributeTestTraitSubtractLow"],
        fail: erg.constants["pohAttributeTestTraitAddLow"]

    }, {

        key: erg.constants["pohAttributeViciousness"],
        success: erg.constants["pohAttributeTestTraitAddLow"],
        fail: erg.constants["pohAttributeTestTraitSubtractLow"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionNoHero"]] = {

    key: erg.constants["pohTraitReactionNoHero"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "No Heroes!",
    description: "If I wanted wits and bravery, I would have just married Marisa.  Who envies Alice's lot?",
    attributes: [{

        key: erg.constants["pohAttributeCleverness"],
        success: erg.constants["pohAttributeTestTraitSubtractLow"],
        fail: erg.constants["pohAttributeTestTraitAddLow"]

    }, {

        key: erg.constants["pohAttributeCourage"],
        success: erg.constants["pohAttributeTestTraitSubtractLow"],
        fail: erg.constants["pohAttributeTestTraitAddLow"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionNoPoet"]] = {

    key: erg.constants["pohTraitReactionNoPoet"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "No Poets!",
    description: "Honeyed words and everyone's friend, who could trust a wife like that?",
    attributes: [{

        key: erg.constants["pohAttributeExpression"],
        success: erg.constants["pohAttributeTestTraitSubtractLow"],
        fail: erg.constants["pohAttributeTestTraitAddLow"]

    }, {

        key: erg.constants["pohAttributeSociability"],
        success: erg.constants["pohAttributeTestTraitSubtractLow"],
        fail: erg.constants["pohAttributeTestTraitAddLow"]

    }]
};


erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionMistress"]] = {

    key: erg.constants["pohTraitReactionMistress"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "A Regal Mistress",
    description: "I might envy the vampire's maid a little.  Who wouldn't want a queen to order them about and be so possessive of their time?",
    attributes: [{

        key: erg.constants["pohAttributeHubris"],
        success: erg.constants["pohAttributeTestTraitAddLow"],
        fail: erg.constants["pohAttributeTestTraitSubtractLow"]

    }, {

        key: erg.constants["pohAttributeJealousy"],
        success: erg.constants["pohAttributeTestTraitAddLow"],
        fail: erg.constants["pohAttributeTestTraitSubtractLow"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionVillain"]] = {

    key: erg.constants["pohTraitReactionVillain"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Villains, Please",
    description: "This is Gensokyo, there's no downside to sticking with the evil mastermind.",
    attributes: [{

        key: erg.constants["pohAttributePettiness"],
        success: erg.constants["pohAttributeTestTraitAddLow"],
        fail: erg.constants["pohAttributeTestTraitSubtractLow"]

    }, {

        key: erg.constants["pohAttributeViciousness"],
        success: erg.constants["pohAttributeTestTraitAddLow"],
        fail: erg.constants["pohAttributeTestTraitSubtractLow"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionIntelligentsiaDistaste"]] = {

    key: erg.constants["pohTraitReactionIntelligentsiaDistaste"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Distaste for the Intelligentsia",
    description: "I can't stand the clever ones.  So condescending.",
    attributes: [{

        key: erg.constants["pohAttributeCleverness"],
        success: erg.constants["pohAttributeTestTraitSubtractHigh"],
        fail: erg.constants["pohAttributeTestTraitAddHigh"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionHeroicContempt"]] = {

    key: erg.constants["pohTraitReactionHeroicContempt"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Heroic Contempt",
    description: "Why make such a big show of your courage?  It's not like you're really going to die - the Hakurei and Yakumo won't let go of you that easily.",
    attributes: [{

        key: erg.constants["pohAttributeCourage"],
        success: erg.constants["pohAttributeTestTraitSubtractHigh"],
        fail: erg.constants["pohAttributeTestTraitAddHigh"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionHatredSilverTongues"]] = {

    key: erg.constants["pohTraitReactionHatredSilverTongues"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Hatred of the Silver Tongues",
    description: "When every word is so beautifully constructed, you know there's no spontaneity.  A poetic phrase is a liar's phrase.",
    attributes: [{

        key: erg.constants["pohAttributeExpression"],
        success: erg.constants["pohAttributeTestTraitSubtractHigh"],
        fail: erg.constants["pohAttributeTestTraitAddHigh"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionCarousersFoe"]] = {

    key: erg.constants["pohTraitReactionCarousersFoe"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Carouser's Foe",
    description: "I can't stand someone always drunk and at the centre of attention.",
    attributes: [{

        key: erg.constants["pohAttributeSociability"],
        success: erg.constants["pohAttributeTestTraitSubtractHigh"],
        fail: erg.constants["pohAttributeTestTraitAddHigh"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionBelovedProud"]] = {

    key: erg.constants["pohTraitReactionBelovedProud"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Beloved Proud",
    description: "A lady shouldn't be meek!  She should have a sense of her own worth and dignity, and let everyone else know about it!",
    attributes: [{

        key: erg.constants["pohAttributeHubris"],
        success: erg.constants["pohAttributeTestTraitAddHigh"],
        fail: erg.constants["pohAttributeTestTraitSubtractHigh"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionGreenEyedMonster"]] = {

    key: erg.constants["pohTraitReactionGreenEyedMonster"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "My Green-Eyed Monster!",
    description: "It's a sign of her devotion!  No, I don't think it's unhealthy at all, I have no idea what you're talking about.",
    attributes: [{

        key: erg.constants["pohAttributeJealousy"],
        success: erg.constants["pohAttributeTestTraitAddHigh"],
        fail: erg.constants["pohAttributeTestTraitSubtractHigh"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionVindictiveCute"]] = {

    key: erg.constants["pohTraitReactionVindictiveCute"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Vindictive Cute",
    description: "It's adorable when they won't let go of even the smallest thing, like forgetting an anniversary.",
    attributes: [{

        key: erg.constants["pohAttributePettiness"],
        success: erg.constants["pohAttributeTestTraitAddHigh"],
        fail: erg.constants["pohAttributeTestTraitSubtractHigh"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionLovelyMalice"]] = {

    key: erg.constants["pohTraitReactionLovelyMalice"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Lovely Malice",
    description: "When your beloved has destroyed your enemies utterly and salted the earth over their graves, that's when you can feel secure.",
    attributes: [{

        key: erg.constants["pohAttributeViciousness"],
        success: erg.constants["pohAttributeTestTraitAddHigh"],
        fail: erg.constants["pohAttributeTestTraitSubtractHigh"]

    }]
};


erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionEgalitarian"]] = {

    key: erg.constants["pohTraitReactionEgalitarian"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "An Egalitarian Girl",
    description: "Friends with everyone and unthreatened by my friends - can't I have a wife like that?  Alice does!",
    attributes: [{

        key: erg.constants["pohAttributeJealousy"],
        success: erg.constants["pohAttributeTestTraitSubtractLow"],
        fail: erg.constants["pohAttributeTestTraitAddLow"]

    }, {

        key: erg.constants["pohAttributeSociability"],
        success: erg.constants["pohAttributeTestTraitAddLow"],
        fail: erg.constants["pohAttributeTestTraitSubtractLow"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionNoble"]] = {

    key: erg.constants["pohTraitReactionNoble"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Love of Nobility",
    description: "Brave against the true threats, easy going with the little problems - someone with perspective!",
    attributes: [{

        key: erg.constants["pohAttributePettiness"],
        success: erg.constants["pohAttributeTestTraitSubtractLow"],
        fail: erg.constants["pohAttributeTestTraitAddLow"]

    }, {

        key: erg.constants["pohAttributeCourage"],
        success: erg.constants["pohAttributeTestTraitAddLow"],
        fail: erg.constants["pohAttributeTestTraitSubtractLow"]

    }]
};


erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionEnlightened"]] = {

    key: erg.constants["pohTraitReactionEnlightened"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Enlightened Company",
    description: "Intelligent and compassionate - with a woman like that, you can begin to discuss the classics.",
    attributes: [{

        key: erg.constants["pohAttributeViciousness"],
        success: erg.constants["pohAttributeTestTraitSubtractLow"],
        fail: erg.constants["pohAttributeTestTraitAddLow"]

    }, {

        key: erg.constants["pohAttributeCleverness"],
        success: erg.constants["pohAttributeTestTraitAddLow"],
        fail: erg.constants["pohAttributeTestTraitSubtractLow"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionSweetHumble"]] = {

    key: erg.constants["pohTraitReactionSweetHumble"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Humble Sweet",
    description: "When a girl writes me superb poetry, but doesn't think of herself as literati, then I can fall in love.",
    attributes: [{

        key: erg.constants["pohAttributeHubris"],
        success: erg.constants["pohAttributeTestTraitSubtractLow"],
        fail: erg.constants["pohAttributeTestTraitAddLow"]

    }, {

        key: erg.constants["pohAttributeExpression"],
        success: erg.constants["pohAttributeTestTraitAddLow"],
        fail: erg.constants["pohAttributeTestTraitSubtractLow"]

    }]
};


erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionHero"]] = {

    key: erg.constants["pohTraitReactionHero"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "A Hero!",
    description: "Alice is envied by every lonely heart in the land.  Who wouldn't want a valiant and cunning hero for a wife?",
    attributes: [{

        key: erg.constants["pohAttributeCleverness"],
        success: erg.constants["pohAttributeTestTraitAddLow"],
        fail: erg.constants["pohAttributeTestTraitSubtractLow"]

    }, {

        key: erg.constants["pohAttributeCourage"],
        success: erg.constants["pohAttributeTestTraitAddLow"],
        fail: erg.constants["pohAttributeTestTraitSubtractLow"]

    }]
};


erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionPoet"]] = {

    key: erg.constants["pohTraitReactionPoet"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "A Poet!",
    description: "Shouldn't she speak with practised elegance and be affable with all?  Shouldn't she inspire me with words of love, and shouldn't we have the congratulations of many friends?",
    attributes: [{

        key: erg.constants["pohAttributeExpression"],
        success: erg.constants["pohAttributeTestTraitAddLow"],
        fail: erg.constants["pohAttributeTestTraitSubtractLow"]

    }, {

        key: erg.constants["pohAttributeSociability"],
        success: erg.constants["pohAttributeTestTraitAddLow"],
        fail: erg.constants["pohAttributeTestTraitSubtractLow"]

    }]
};


erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionNoMistress"]] = {

    key: erg.constants["pohTraitReactionNoMistress"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "I Won't Be Ruled",
    description: "If you think so highly of yourself that you claim ownership of my time, I won't be your bride!",
    attributes: [{

        key: erg.constants["pohAttributeHubris"],
        success: erg.constants["pohAttributeTestTraitSubtractLow"],
        fail: erg.constants["pohAttributeTestTraitAddLow"]

    }, {

        key: erg.constants["pohAttributeJealousy"],
        success: erg.constants["pohAttributeTestTraitSubtractLow"],
        fail: erg.constants["pohAttributeTestTraitAddLow"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionNoVillain"]] = {

    key: erg.constants["pohTraitReactionNoVillain"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Contempt for the Wicked",
    description: "You expect me to comfort you when the shrine maiden exterminates you for your unrighteous deeds?  I'll be laughing at your fall instead!",
    attributes: [{

        key: erg.constants["pohAttributePettiness"],
        success: erg.constants["pohAttributeTestTraitSubtractLow"],
        fail: erg.constants["pohAttributeTestTraitAddLow"]

    }, {

        key: erg.constants["pohAttributeViciousness"],
        success: erg.constants["pohAttributeTestTraitSubtractLow"],
        fail: erg.constants["pohAttributeTestTraitAddLow"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionGenius"]] = {

    key: erg.constants["pohTraitReactionGenius"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Beautiful Minds",
    description: "Everyone in Gensokyo is pretty - it's the brilliant ones that stand out!  Can't I take a genius to wife?",
    attributes: [{

        key: erg.constants["pohAttributeCleverness"],
        success: erg.constants["pohAttributeTestTraitAddHigh"],
        fail: erg.constants["pohAttributeTestTraitSubtractHigh"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionFearless"]] = {

    key: erg.constants["pohTraitReactionFearless"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Adoring the Fearless",
    description: "To face a deathless terror without hesitation; that's how you'll win my heart!",
    attributes: [{

        key: erg.constants["pohAttributeCourage"],
        success: erg.constants["pohAttributeTestTraitAddHigh"],
        fail: erg.constants["pohAttributeTestTraitSubtractHigh"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionMuse"]] = {

    key: erg.constants["pohTraitReactionMuse"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Muse in Waiting",
    description: "I'm sure I can inspire the most beautiful words; where is my lovely poet to write them?",
    attributes: [{

        key: erg.constants["pohAttributeExpression"],
        success: erg.constants["pohAttributeTestTraitAddHigh"],
        fail: erg.constants["pohAttributeTestTraitSubtractHigh"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionSocialButterfly"]] = {

    key: erg.constants["pohTraitReactionSocialButterfly"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Social Butterfly",
    description: "If she's the queen of Gensokyo's parties, doesn't she need a consort?  I'd look appropriately regal on her arm.",
    attributes: [{

        key: erg.constants["pohAttributeSociability"],
        success: erg.constants["pohAttributeTestTraitAddHigh"],
        fail: erg.constants["pohAttributeTestTraitSubtractHigh"]

    }]
};


erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionTragedy"]] = {

    key: erg.constants["pohTraitReactionTragedy"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Avoiding Tragedy",
    description: "We all know what happens to the excessively proud.  Why entangle yourself in their ruin just because they're pretty?",
    attributes: [{

        key: erg.constants["pohAttributeHubris"],
        success: erg.constants["pohAttributeTestTraitSubtractHigh"],
        fail: erg.constants["pohAttributeTestTraitAddHigh"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionTrust"]] = {

    key: erg.constants["pohTraitReactionTrust"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Trust",
    description: "A relationship must wither in the face of suspicion.  If you can't trust me, you're telling me I indeed should be elsewhere!",
    attributes: [{

        key: erg.constants["pohAttributeJealousy"],
        success: erg.constants["pohAttributeTestTraitSubtractHigh"],
        fail: erg.constants["pohAttributeTestTraitAddHigh"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionVindictiveUgly"]] = {

    key: erg.constants["pohTraitReactionVindictiveUgly"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Vindictive ugly",
    description: "When you focus so much power on so small a thing, you must be seen as gauche.  And I will not be seen with you.",
    attributes: [{

        key: erg.constants["pohAttributePettiness"],
        success: erg.constants["pohAttributeTestTraitSubtractHigh"],
        fail: erg.constants["pohAttributeTestTraitAddHigh"]

    }]
};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitReactionCruelty"]] = {

    key: erg.constants["pohTraitReactionCruelty"],
    category: erg.constants["pohTraitCategoryReaction"],
    type: erg.constants["pohTraitTypeReactionTestModifier"],
    label: "Distaste for the Cruel",
    description: "Victory should be dignified.  If a girl goes beyond mercilessness to savagery, how should I think of her other than as an animal?",
    attributes: [{

        key: erg.constants["pohAttributeViciousness"],
        success: erg.constants["pohAttributeTestTraitSubtractHigh"],
        fail: erg.constants["pohAttributeTestTraitAddHigh"]

    }]
};





//SPECIAL TRAITS

//Koakuma

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialInfernalAllure"]] = {

    key: erg.constants["pohTraitSpecialInfernalAllure"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Infernal Allure",
    description: "Well, she IS a devil.",
    effectText: "Doubles her partner's Attraction bonus for Koakuma following intimacy."

};


//Letty

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialPowerToManipulateCold"]] = {

    key: erg.constants["pohTraitSpecialPowerToManipulateCold"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Power to Manipulate Cold",
    description: "Letty comes into her own in the winter; those who spend time with her in that season can't help but find her majestic.",
    effectText: "At the start of any date involving Letty during winter (week 40-52), her partner gains " + erg.constants["pohTraitSpecialPowerToManipulateColdPassionBonus"] + " Passion for her."

};

//Lunasa

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialMournfulMusic"]] = {

    key: erg.constants["pohTraitSpecialMournfulMusic"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Mournful Music",
    description: "Lunasa's music calms the spirit; sometimes too much, draining the listener of all motivation.",
    effectText: "When Lunasa rolls an Expression test, her partner suffers a " + erg.constants["pohTraitSpecialMournfulMusicBonus"] + " penalty to her tested Attribute."

};

//Merlin

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialManicMusic"]] = {

    key: erg.constants["pohTraitSpecialManicMusic"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Manic Music",
    description: "Merlin's music uplifts the spirit; sometimes too much, inciting a manic energy in the listener.",
    effectText: "When Merlin rolls an Expression test, her partner gains a +" + erg.constants["pohTraitSpecialManicMusicBonus"] + " bonus to her tested Attribute."

};

//Lyrica

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialImpossibleMusic"]] = {

    key: erg.constants["pohTraitSpecialImpossibleMusic"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Impossible Music",
    description: "Lyrica is just as talented as her sisters, but even more eccentric.  Her music is colours every aspect of her life.",
    effectText: "When testing an Attribute other than Expression, Lyrica gains a bonus to that Attribute equal to 10% of her Expression."

};


//Ran

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialShikigami"]] = {

    key: erg.constants["pohTraitSpecialShikigami"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Shikigami",
    description: "Ran is the Shikigami of the Youkai Sage.  You are fulfilling a task set by the Youkai Sage.  Ran is happy to cooperate.",
    effectText: "You may choose up to " + erg.constants["pohTraitSpecialShikigamiDateEvents"] + " date events when advising Ran."

};

//Mystia

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialDeafToAllButTheSong"]] = {

    key: erg.constants["pohTraitSpecialDeafToAllButTheSong"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Deaf to All But The Song",
    description: "Mystia's energetic song can make you forget your troubles and put you in the mood to enjoy life.",
    effectText: "When asked on a date by Mystia, characters base their acceptance on her Expression if it's higher than their Attraction to her or their Loneliness."

};

//Keine

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialHistoryEater"]] = {

    key: erg.constants["pohTraitSpecialHistoryEater"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "History Eater",
    description: "&quot;I don't care what your article says, Aya, it never happened.&quot;",
    effectText: "If Keine is about to suffer a breakup due a bad date, she rolls against the higher of her Attraction and Passion for her partner.  On success, the breakup is prevented."

};

//Kaguya

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialImpossiblyBeautiful"]] = {

    key: erg.constants["pohTraitSpecialImpossiblyBeautiful"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Impossibly Beautiful",
    description: "Gensokyo is not short of beauties, but only one could have made the Impossible Requests.",
    effectText: "All characters have an additional " + erg.constants["pohTraitSpecialImpossiblyBeautifulAttractionBonus"] + " points of Attraction towards Kaguya."

};


//Eirin

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialBrainOfTheMoon"]] = {

    key: erg.constants["pohTraitSpecialBrainOfTheMoon"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Brain of the Moon",
    description: "Eirin recognises no peer but the Youkai Sage in intelligence; it's a difference of kind as well as degree with everyone else.",
    effectText: "Whenever Eirin succeeds on a Cleverness test, her partner gains " + erg.constants["pohTraitSpecialBrainOfTheMoonPassionBonus"] + " points of Passion towards her."

};


//Mokou

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialFlameOfHourai"]] = {

    key: erg.constants["pohTraitSpecialFlameOfHourai"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Flame of Hourai",
    description: "The secret truth of their long feud is that Kaguya is not Mokou's equal; in battle the phoenix's glory fills the endless sky and sets hearts aflame.  It took Alice and Marisa together to defeat her, and by that act did they first become known as true heroes.",
    effectText: "Whenever Mokou succeeds on a Courage test, her partner gains " + erg.constants["pohTraitSpecialFlameOfHouraiPassionBonus"] + " points of Passion towards her."

};

//Yuuka

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialSayItWithFlowers"]] = {

    key: erg.constants["pohTraitSpecialSayItWithFlowers"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Say it With Flowers",
    description: "Everyone loves flowers, which makes romance a little easier for the florist.",
    effectText: "If Yuuka initiates a date, her partner gains " + erg.constants["pohTraitSpecialSayItWithFlowersPassionBonus"] + " points of Passion towards her."

};

//Yuuka + Kanako

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialIndependent"]] = {

    key: erg.constants["pohTraitSpecialIndependent"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Independent",
    description: "Some people never like being told what to do.",
    effectText: "Halves the chance of asking Alice for advice, and doubles the chance of randomly asking out another character."

};


//Eiki

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialBlackOrWhite"]] = {

    key: erg.constants["pohTraitSpecialBlackOrWhite"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Black or White",
    description: "It is the nature of a Yama to resolve complex issues into a simple verdict.",
    effectText: "When making Stability rolls to achieve a higher relationship level, Eiki's relationships automatically fail if below " + erg.constants["pohTraitSpecialSayItWithFlowersPassionBonus"] + " Stability, and automatically succeed if higher."

};


//Shizuha

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialSymbolOfLonelinessAndDemise"]] = {

    key: erg.constants["pohTraitSpecialSymbolOfLonelinessAndDemise"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Symbol of Loneliness and Demise",
    description: "Where her sister shares the bounties of autumn, Shizuha shares her despair that winter must come.",
    effectText: "When Shizuha is refused for a date, both parties gain " + erg.constants["pohTraitSpecialSymbolOfLonelinessAndDemiseLonelinessBonus"] + " Loneliness."

};

//Minoriko

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialBountifulHarvest"]] = {

    key: erg.constants["pohTraitSpecialBountifulHarvest"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Bountiful Harvest",
    description: "Minoriko's warmth overflows in autumn; she projects an infectious joy for life and its bounties.",
    effectText: "At the start of any date involving Minoriko during autumn (week 27-39), her partner gains " + erg.constants["pohTraitSpecialBountifulHarvestPassionBonus"] + " Passion for her."

};

//Hina

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialWheelOfFortune"]] = {

    key: erg.constants["pohTraitSpecialWheelOfFortune"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Wheel of Fortune",
    description: "Hina stores up misfortune to keep it from affecting others; in that respect she's good luck.  But if you stay close to her, curses inevitably attach themselves to you.  It evens out, but it's a dizzying ride!",
    effectText: "A character in a relationship with Hina has a " + erg.constants["pohTraitSpecialWheelOfFortuneProcBonus"] + "% greater chance to have random events occur."

};

//Momiji

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialTelegnosis"]] = {

    key: erg.constants["pohTraitSpecialTelegnosis"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Telegnosis",
    description: "Momiji isn't shallow, but with eyesight as good as hers it's hard to overlook visual appeal.",
    effectText: "Doubles Attraction modifiers for Momiji's traits targeting Hair Length, Hair Colour and Eye Colour."

};

//Kanako

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialMoriyaShrineConspiracy"]] = {

    key: erg.constants["pohTraitSpecialMoriyaShrineConspiracy"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Moriya Shrine Conspiracy",
    description: "Most of Kanako's battles involve the advancement of some scheme or another that she, Suwako and Sanae have cooked up.  Gods can't ever stop gathering faith!",
    effectText: "When initiating danmaku, Kanako always chooses Suwako or Sanae as a partner and doubles all reputation gains from the battle."

};


//Parsee

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialPowerToManipulateJealousy"]] = {

    key: erg.constants["pohTraitSpecialPowerToManipulateJealousy"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Power to Manipulate Jealousy",
    description: "It's not a nice power, but it's useful",
    effectText: "Parsee's relationships never break up due to jealousy over dating other partners.  If Parsee dates a character in a relationship with a third party, the third party will auto-succeed on their Jealousy roll to check for break up (the relationship still gets a Stability roll to survive)."

};

//Yuugi

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialLoveOfStrength"]] = {

    key: erg.constants["pohTraitSpecialLoveOfStrength"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Love of Strength",
    description: "The mere act of taking the field with an Oni is worthy of respect.",
    effectText: "When initiating danmaku, Yuugi gains " + erg.constants["pohTraitSpecialLoveOfStrengthPassionBonus"] + " Passion towards all relevant participants."

};


//Rin

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialFurnaceCat"]] = {

    key: erg.constants["pohTraitSpecialFurnaceCat"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Furnace Cat",
    description: "As a kasha, Orin is accustomed to the fires of Hell and has no problem frolicking in summer when any other cat would be asleep in the shade.  It's endearing!",
    effectText: "At the start of any date involving Orin during summer (week 14-26), her partner gains " + erg.constants["pohTraitSpecialFurnaceCatPassionBonus"] + " Passion for her."

};

//Kogasa

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialSurprise"]] = {

    key: erg.constants["pohTraitSpecialSurprise"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Surprise!",
    description: "It's hard for a karakasa-obake to get along with the brave!",
    effectText: "Kogasa's default reaction to Courage rolls is " + erg.constants["pohTraitSpecialSurpriseCourageSuccess"] + "/" + erg.constants["pohTraitSpecialSurpriseCourageFail"] +".  This stacks with any modifications from Reaction Traits."

};

//Ichirin

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialUnzanIsWatching"]] = {

    key: erg.constants["pohTraitSpecialUnzanIsWatching"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Unzan is Watching",
    description: "There's no evidence that Ichirin uses her nyuudou ally to keep tabs on girls she's involved with, but the mere possibility has a chilling effect.",
    effectText: "Characters in a relationship with Ichirin are " + erg.constants["pohTraitSpecialUnzanIsWatchingRefusalModifier"] + "% more likely to refuse a date request from a character they don't have a relationship with."

};

//Murasa

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialShipCaptain"]] = {

    key: erg.constants["pohTraitSpecialShipCaptain"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Ship's Captain",
    description: "A ship's captain is always a dashing and romantic figure; and in Gensokyo there's exactly one of them.",
    effectText: "Murasa is a valid target for the Girl In Uniform trait."

};


//Shou

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialAvatarOfBishamonten"]] = {

    key: erg.constants["pohTraitSpecialAvatarOfBishamonten"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Avatar of Bishamonten",
    description: "The power of Bishamonten might not be automatically impressive in Gensokyo, but his dignity - and that of his avatar - is invincible.",
    effectText: "When initiating danmaku, Shou automatically passes her Expression roll for challenge-banter, and always gains Nazrin as an ally if she cannot get anyone more powerful.  When used in this way, Nazrin's Tier is raised to Hero."

};


//Byakuren

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialFillingTheWorldWithLight"]] = {

    key: erg.constants["pohTraitSpecialFillingTheWorldWithLight"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Filling the World With Light",
    description: "Byakuren's take upon Buddhism might be...unique...but there's no question of her ability to inspire!",
    effectText: "Whenever Byakuren succeeds on an Expression test, her partner gains " + erg.constants["pohTraitSpecialFillingTheWorldWithLightPassionBonus"] + " points of Passion towards her."

};



//Nue

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialUndefinedFantasticObject"]] = {

    key: erg.constants["pohTraitSpecialUndefinedFantasticObject"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Undefined Fantastic Object",
    description: "If Nue isn't close enough to you to reveal her true form, you're just going to see what you want to see.",
    effectText: "If Nue's passion for a character is less than " + erg.constants["pohTraitSpecialUndefinedFantasticObjectThreshold"] + ", their Attraction to her is " + erg.constants["pohTraitSpecialUndefinedFantasticObjectAttraction"] + "."

};



//Hatate

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialThoughtography"]] = {

    key: erg.constants["pohTraitSpecialThoughtography"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Thoughtography",
    description: "Hatate doesn't have a photo of what you did last night, but she does have a photo of you leaving someone else's house this morning with mussed up hair and a goofy grin.",
    effectText: "Whenever a date not involving Hatate ends with intimacy, her Passion for both parties falls by " + Math.abs(erg.constants["pohTraitSpecialThoughtographyPassionBonus"]) + "."

};


//Kyouko

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialEcho"]] = {

    key: erg.constants["pohTraitSpecialEcho"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Echo",
    description: "Reciprocation is natural for a yamabiko!",
    effectText: "If Kyouko and her partner are testing the same attribute, Kyouko uses her partner's result instead of rolling."

};


//Yoshika

erg[erg.constants["pohTraits"]][erg.constants["pohTraitLoyalServant"]] = {

    key: erg.constants["pohTraitLoyalServant"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Loyal Servant",
    description: "Technically Yoshika's loyalty to her mistress is compulsory and not a virtue per se, but shouldn't we still count her alongside the most devoted retainers in Gensokyo?",
    effectText: "At the beginning of any week in which Seiga is active and Yoshika is not, Yoshika will open her heart."

};

//Seiga

erg[erg.constants["pohTraits"]][erg.constants["pohTraitDemandingMaster"]] = {

    key: erg.constants["pohTraitDemandingMaster"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Demanding Master",
    description: "Seiga works poor Yoshika hard, and doesn't hesitate to use her to relieve boredom.  If it looks like Yoshika is involved in something interesting, her mistress is sure to get involved.",
    effectText: "At the beginning of any week in which Yoshika is active and Seiga is not, Seiga will open her heart."

};

//Tojiko

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialGhostlyBody"]] = {

    key: erg.constants["pohTraitSpecialGhostlyBody"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Ghostly Body",
    description: "Unlike most of the dead amongst Gensokyo's mighty, Tojiko does not manifest a full human-like physical body.  Thus intimate moments with her are more matters of the heart.",
    effectText: "If a date with Tojiko ends with intimacy, her partner gains " + (erg.constants["pohIntimacyBaseAttractionBonus"] + erg.constants["pohTraitSpecialGhostlyBodyAttractionBonus"]) + " Attraction and " + (erg.constants["pohIntimacyPassionBonus"] + erg.constants["pohTraitSpecialGhostlyBodyPassionBonus"]) + " Passion for her instead of the usual amounts."

};

//Futo

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialAnachronism"]] = {

    key: erg.constants["pohTraitSpecialAnachronism"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Anachronism",
    description: "Futo is uncomfortable in the modern day, even in pastoral Gensokyo.  This aggravates her naturally inflexible character; she avoids new experiences but clings to relationships like a drowning woman once they've been established.",
    effectText: "Futo is " + erg.constants["pohTraitSpecialAnachronismRefusalBonus"] + "% less likely to accept a date request from a character she is not in a relationship with, but has a +" + erg.constants["pohTraitSpecialAnachronismStabilityBonus"] + " bonus to Stability for all her relationships."

};

//Miko

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialCrownPrince"]] = {

    key: erg.constants["pohTraitSpecialCrownPrince"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Crown Prince",
    description: "Relationships between equals are more likely to prosper; doubly so for the statesman whose dignity cannot tolerate a lesser consort, and whose pride will not allow a greater.",
    effectText: "Miko's relationships suffer double the normal Stability penalty for tier difference, but her relationships with other Boss tier characters gain a +" + erg.constants["pohTraitSpecialCrownPrinceStabilityBonus"] +" Stability bonus."

};

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialTenDesires"]] = {

    key: erg.constants["pohTraitSpecialTenDesires"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Ten Desires",
    description: "Even during her mortal life, Miko's insight into the character of others was superhuman.",
    effectText: "When making random date requests, Miko considers other characters' Attraction to her as well as her Attraction to them."

};

//Mamizou

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialMoneylender"]] = {

    key: erg.constants["pohTraitSpecialMoneylender"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Moneylender",
    description: "Even youkai find it wise to be on good terms with the bank.",
    effectText: "Whenever Mamizou succeeds on a Sociability test, her partner gains " + erg.constants["pohTraitSpecialMoneylenderPassionBonus"] + " points of Passion towards her."

};


//Kasen

erg[erg.constants["pohTraits"]][erg.constants["pohTraitSpecialDisguisedOni"]] = {

    key: erg.constants["pohTraitSpecialDisguisedOni"],
    category: erg.constants["pohTraitCategorySpecial"],
    label: "Disguised Oni",
    description: "Deception and discipline can only suppress the wild spirit of a Deva of the Mountain, never tame it entirely.",
    effectText: "Kasen's default reaction to Courage rolls is " + erg.constants["pohTraitSpecialDisguisedOniCourageSuccess"] + "/" + erg.constants["pohTraitSpecialDisguisedOniCourageFail"] + ", and to Sociability " + erg.constants["pohTraitSpecialDisguisedOniSociabilitySuccess"] + "/" + erg.constants["pohTraitSpecialDisguisedOniSociabilityFail"] + ".  This stacks with any modifications from Reaction Traits.  Don't tell Suika!"

};

//################################### ATTRIBUTE REPOSITORY #################################################

erg[erg.constants["pohAttributes"]] = {};

erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeLoneliness"]] = {

    key: erg.constants["pohAttributeLoneliness"],
    category: erg.constants["pohAttributeCategoryMeta"],
    label: "Loneliness",
    description: "It's hard to be alone when everyone else seems to be pairing off!  It can even lead to you doing things you otherwise wouldn't consider.  Loneliness overrides Attraction when accepting a date if it is higher.  Loneliness increases each week but decreases whenever a character goes on a date."

};

erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeReputation"]] = {

    key: erg.constants["pohAttributeReputation"],
    category: erg.constants["pohAttributeCategoryMeta"],
    label: "Reputation",
    description: "How well-regarded the character is by Gensokyo's notables, largely derived from their recent performance in danmaku.  Characters with high reputation are more attractive."

};

erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeExpression"]] = {

    key: erg.constants["pohAttributeExpression"],
    category: erg.constants["pohAttributeCategoryPositive"],
    label: "Expression",
    description: "Use of words, gestures or song to eloquently convey your feelings (or at least what you want her to think you're feeling).  Poets, musicians and stateswomen tend to have high Expression, tsundere characters not so much."

};

erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeCourage"]] = {

    key: erg.constants["pohAttributeCourage"],
    category: erg.constants["pohAttributeCategoryPositive"],
    label: "Courage",
    description: "Gensokyo is filled with immortal terrors and heroes that think nothing of fighting them - you'll need to be brave indeed if you want to impress a paramour with your Courage."

};

erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeSociability"]] = {

    key: erg.constants["pohAttributeSociability"],
    category: erg.constants["pohAttributeCategoryPositive"],
    label: "Sociability",
    description: "Affability and social graces.  Life in Gensokyo revolves around fighting and parties, so being socially awkward is just as shameful as weakness in battle.  Characters who don't drink tend to have a low Sociability despite their best intentions, as the people they're trying to interact with are drunkards of the first order."

};

erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeCleverness"]] = {

    key: erg.constants["pohAttributeCleverness"],
    category: erg.constants["pohAttributeCategoryPositive"],
    label: "Cleverness",
    description: "Wit, cunning, knowledge, deceit - they're all useful for winning someone over!"

};

erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeHubris"]] = {

    key: erg.constants["pohAttributeHubris"],
    category: erg.constants["pohAttributeCategoryNegative"],
    label: "Hubris",
    description: "Humility is a rare virtue in Gensokyo at the best of times; injured pride sparks battles every day.  A character with high Hubris takes that charming cultural trait to extremes, frequently allowing their pride to lure them into obnoxious or destructive choices."

};

erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeViciousness"]] = {

    key: erg.constants["pohAttributeViciousness"],
    category: erg.constants["pohAttributeCategoryNegative"],
    label: "Viciousness",
    description: "Gensokyo's notables are warriors and monsters, hardly known for their compassion or patience.  A character with high Viciousness often takes aggressiveness and malice to the point of gaucheness, disconcerting even their jaded peers."

};

erg[erg.constants["pohAttributes"]][erg.constants["pohAttributePettiness"]] = {

    key: erg.constants["pohAttributePettiness"],
    category: erg.constants["pohAttributeCategoryNegative"],
    label: "Pettiness",
    description: "It doesn't take much to start a fight in Gensokyo, and some grudges fester for centuries.  So if a character's Pettiness is high by Gensokyo standards, they really need to learn to let things go."

};

erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeJealousy"]] = {

    key: erg.constants["pohAttributeJealousy"],
    category: erg.constants["pohAttributeCategoryNegative"],
    label: "Jealousy",
    description: "A character with high Jealousy has great trouble remaining calm when there is competition for her paramour's affections, real or imagined.  As well as being rolled during dates, it is rolled to determine whether a character will break up with a character who cheats on her by dating someone else."

};



//################################### PASSION TRACKS #################################################

erg[erg.constants["pohPassionTracks"]] = {};

erg[erg.constants["pohPassionTracks"]][erg.constants["pohPassionTrackFriend"]] = {

    key: erg.constants["pohPassionTrackFriend"],
    label: "Friend",
    relationshipUpgrades: [erg.constants["pohRelationshipTypeFriendsWithBenefits"], erg.constants["pohRelationshipTypeItem"]],
    stages: [{

        key: erg.constants["pohPassionTrackStage0"], threshold: 10, label: "Introduced"

    }, {

        key: erg.constants["pohPassionTrackStage1"], threshold: 30, label: "Acquaintance"

    }, {

        key: erg.constants["pohPassionTrackStage2"], threshold: 50, label: "Friend"

    }, {

        key: erg.constants["pohPassionTrackStage3"], threshold: 70, label: "Good Friend"

    }, {

        key: erg.constants["pohPassionTrackStage4"], threshold: 90, label: "Close Friend"

    }, {

        key: erg.constants["pohPassionTrackStage5"], threshold: 100, label: "Best Friend"

    }],
    relationshipResponses: [{

        level: 1,
        heart: 1,
        text: "&quot;Isn't it normal for friends to do this sort of thing?&quot;"

    }, {

        level: 1,
        heart: 2,
        text: "&quot;We were spending time together anyway so this is convenient.&quot;"

    }, {

        level: 2,
        heart: 1,
        text: "&quot;It's better to get to know someone first before taking the plunge, so isn't it easier to choose your lovers from amongst your friends?&quot;"

    }, {

        level: 2,
        heart: 2,
        text: "&quot;So many of my things ended up at her place, it just seemed like less hassle to make it official.&quot;"

    }, {

        level: 3,
        heart: 1,
        text: "&quot;What do you mean we were just friends?  From the moment I met her I knew this was the girl I would marry!&quot;"

    }, {

        level: 3,
        heart: 2,
        text: "&quot;It happened gradually and naturally.  Sometimes two lives can just fit together seamlessly.&quot;"

    }]

};


erg[erg.constants["pohPassionTracks"]][erg.constants["pohPassionTrackAlly"]] = {

    key: erg.constants["pohPassionTrackAlly"],
    label: "Ally",
    relationshipUpgrades: [erg.constants["pohRelationshipTypeFriendsWithBenefits"], erg.constants["pohRelationshipTypeItem"]],
    stages: [{

        key: erg.constants["pohPassionTrackStage0"], threshold: 10, label: "Possible asset"

    }, {

        key: erg.constants["pohPassionTrackStage1"], threshold: 30, label: "Seems useful"

    }, {

        key: erg.constants["pohPassionTrackStage2"], threshold: 50, label: "Ally"

    }, {

        key: erg.constants["pohPassionTrackStage3"], threshold: 70, label: "Proven Ally"

    }, {

        key: erg.constants["pohPassionTrackStage4"], threshold: 90, label: "Trusted Ally"

    }, {

        key: erg.constants["pohPassionTrackStage5"], threshold: 100, label: "Partner"

    }],
    relationshipResponses: [{

        level: 1,
        heart: 1,
        text: "&quot;She's been a big help to me, so I'm just repaying her with my company.  Don't read so much into it, Aya!&quot;"

    }, {

        level: 1,
        heart: 2,
        text: "&quot;We have a cause in common, so it's helpful to spend some leisure time together and strengthen our alliance thereby.&quot;"

    }, {

        level: 2,
        heart: 1,
        text: "&quot;I suppose I can't pretend we're just allies any more, can I?  It's true we're together, but any of our rivals that think they can use that to their advantage will bitterly regret it.&quot;"

    }, {

        level: 2,
        heart: 2,
        text: "&quot;Being useful to each other - that's a habit that can end up surprisingly wide in scope.&quot;"

    }, {

        level: 3,
        heart: 1,
        text: "&quot;I guess you could say our common cause is a family cause now.&quot;"

    }, {

        level: 3,
        heart: 2,
        text: "&quot;We make too good a team to be involved with anyone else.&quot;"

    }]

};


erg[erg.constants["pohPassionTracks"]][erg.constants["pohPassionTrackRival"]] = {

    key: erg.constants["pohPassionTrackRival"],
    label: "Rival",
    relationshipUpgrades: [erg.constants["pohRelationshipTypeFoesWithBenefits"], erg.constants["pohRelationshipTypeItem"]],
    stages: [{

        key: erg.constants["pohPassionTrackStage0"], threshold: 10, label: "To be watched"

    }, {

        key: erg.constants["pohPassionTrackStage1"], threshold: 30, label: "Competitor"

    }, {

        key: erg.constants["pohPassionTrackStage2"], threshold: 50, label: "Rival"

    }, {

        key: erg.constants["pohPassionTrackStage3"], threshold: 70, label: "Strong Rival"

    }, {

        key: erg.constants["pohPassionTrackStage4"], threshold: 90, label: "Indispensable Rival"

    }, {

        key: erg.constants["pohPassionTrackStage5"], threshold: 100, label: "Archrival"

    }],
    relationshipResponses: [{

        level: 1,
        heart: 1,
        text: "&quot;Well we can hardly compete properly if we never spend time with each other.&quot;"

    }, {

        level: 1,
        heart: 2,
        text: "&quot;It's a dating competition, how can I show her my superiority if I don't take her out myself?&quot;"

    }, {

        level: 2,
        heart: 1,
        text: "&quot;Just because I'm in love with her, doesn't mean I like her or anything.  Don't be stupid, Aya.&quot;"

    }, {

        level: 2,
        heart: 2,
        text: "&quot;It's a competition to be the best girlfriend; obviously third parties would spoil the data collection.&quot;"

    }, {

        level: 3,
        heart: 1,
        text: "&quot;Rivals?  Well I suppose we were.  And naturally I won, since now she'll be pampering me for eternity.&quot;"

    }, {

        level: 3,
        heart: 2,
        text: "&quot;It's a competition to be the best wife...forget it, the rivalry thing was a front from the beginning.  Get out of here, Aya, before I start gushing.&quot;"

    }]

};


erg[erg.constants["pohPassionTracks"]][erg.constants["pohPassionTrackEnemy"]] = {

    key: erg.constants["pohPassionTrackEnemy"],
    label: "Enemy",
    relationshipUpgrades: [erg.constants["pohRelationshipTypeFoesWithBenefits"], erg.constants["pohRelationshipTypeItem"]],
    stages: [{

        key: erg.constants["pohPassionTrackStage0"], threshold: 10, label: "Threat"

    }, {

        key: erg.constants["pohPassionTrackStage1"], threshold: 30, label: "Antagonist"

    }, {

        key: erg.constants["pohPassionTrackStage2"], threshold: 50, label: "Enemy"

    }, {

        key: erg.constants["pohPassionTrackStage3"], threshold: 70, label: "Hated Enemy"

    }, {

        key: erg.constants["pohPassionTrackStage4"], threshold: 90, label: "Despised Foe"

    }, {

        key: erg.constants["pohPassionTrackStage5"], threshold: 100, label: "Eternal Foe"

    }],
    relationshipResponses: [{

        level: 1,
        heart: 1,
        text: "&quot;Regarding your allegations that I've been seen socially with my sworn enemy...I have no comment to make at this time.&quot;"

    }, {

        level: 1,
        heart: 2,
        text: "&quot;Off the record, Aya, it's all a trap.  Once I've got her where I want her, I'll strike.&quot;"

    }, {

        level: 2,
        heart: 1,
        text: "&quot;Keeping your friends close and your enemies closer?  Well, physical and emotional proximity both count.&quot;"

    }, {

        level: 2,
        heart: 2,
        text: "&quot;Of course I sprung my trap...with a confession of love.  It's a deep strategy, she'll be forced to accept my victory before long.&quot;"

    }, {

        level: 3,
        heart: 1,
        text: "&quot;It turns out that if you're holding your enemy in your arms while she sleeps, you can be less paranoid about assassination.&quot;"

    }, {

        level: 3,
        heart: 2,
        text: "&quot;The tsun phase was quite some time ago, Aya.  I'm all dere now.&quot;"

    }]

};


erg[erg.constants["pohPassionTracks"]][erg.constants["pohPassionTrackLove"]] = {

    key: erg.constants["pohPassionTrackLove"],
    label: "Love",
    relationshipUpgrades: [erg.constants["pohRelationshipTypeItem"]],
    stages: [{

        key: erg.constants["pohPassionTrackStage0"], threshold: 10, label: "Fancy"

    }, {

        key: erg.constants["pohPassionTrackStage1"], threshold: 30, label: "Crush"

    }, {

        key: erg.constants["pohPassionTrackStage2"], threshold: 50, label: "Desire"

    }, {

        key: erg.constants["pohPassionTrackStage3"], threshold: 70, label: "Love"

    }, {

        key: erg.constants["pohPassionTrackStage4"], threshold: 90, label: "My wished-for bride"

    }, {

        key: erg.constants["pohPassionTrackStage5"], threshold: 100, label: "Love of my life"

    }],
    relationshipResponses: [{

        level: 1,
        heart: 1,
        text: "&quot;Yes, I am seeing someone.  What gave it away, the flowers or the way I'm grinning like an idiot?&quot;"

    }, {

        level: 1,
        heart: 2,
        text: "&quot;Time for me to provide fodder for the society pages, I suppose.  Well, it's true enough; and isn't she wonderful?&quot;"

    }, {

        level: 2,
        heart: 1,
        text: "&quot;Even amongst the fire and terror of Gensokyo's endless battles, it's possible to fall in love.&quot;"

    }, {

        level: 2,
        heart: 2,
        text: "&quot;I feel like I'm floating through the air...well, I am literally doing that, I should say I feel how humans feel when they imagine they're floating on wings of love.&quot;"

    }, {

        level: 3,
        heart: 1,
        text: "&quot;All I have to say is this:  THANK YOU ALICE!&quot;"

    }, {

        level: 3,
        heart: 2,
        text: "&quot;Aya, what did you charge Alice and Marisa for wedding photography?  Oh, no reason.&quot;"

    }]

};


erg[erg.constants["pohPassionTracks"]][erg.constants["pohPassionTrackSister"]] = {

    key: erg.constants["pohPassionTrackSister"],
    label: "Sister",
    relationshipUpgrades: [erg.constants["pohRelationshipTypeExtremelyCloseSisters"]],
    stages: [{

        key: erg.constants["pohPassionTrackStage0"], threshold: 10, label: "Estranged sister"

    }, {

        key: erg.constants["pohPassionTrackStage1"], threshold: 30, label: "Distant sister"

    }, {

        key: erg.constants["pohPassionTrackStage2"], threshold: 50, label: "Sister"

    }, {

        key: erg.constants["pohPassionTrackStage3"], threshold: 70, label: "Close sister"

    }, {

        key: erg.constants["pohPassionTrackStage4"], threshold: 90, label: "Beloved sister"

    }, {

        key: erg.constants["pohPassionTrackStage5"], threshold: 100, label: "Inseperable sister"

    }],
    relationshipResponses: [{

        level: 1,
        heart: 1,
        text: "&quot;It's normal for sisters to spend time together, get your mind out of the gutter Aya.&quot;"

    }, {

        level: 1,
        heart: 2,
        text: "&quot;Whatever you thought you saw, you didn't see it.  Not that you've ever used actual evidence to write an article.&quot;"

    }, {

        level: 2,
        heart: 1,
        text: "&quot;This is an internal family matter, Aya, and I'll thank you not to pry.&quot;"

    }, {

        level: 2,
        heart: 2,
        text: "&quot;We're not humans.  This is perfectly natural for us.&quot;"

    }, {

        level: 3,
        heart: 1,
        text: "&quot;Ah well, we're in love and we were going to spend eternity together anyway, so it seems silly to fight it.&quot;"

    }, {

        level: 3,
        heart: 2,
        text: "&quot;If Reimu and Yukari approve, I think we're morally OK.  And they can be bribed.&quot;"

    }]

};


erg[erg.constants["pohPassionTracks"]][erg.constants["pohPassionTrackMaster"]] = {

    key: erg.constants["pohPassionTrackMaster"],
    label: "Master",
    relationshipUpgrades: [erg.constants["pohRelationshipTypeWorkplaceRomance"]],
    stages: [{

        key: erg.constants["pohPassionTrackStage0"], threshold: 10, label: "Employer"

    }, {

        key: erg.constants["pohPassionTrackStage1"], threshold: 30, label: "Boss"

    }, {

        key: erg.constants["pohPassionTrackStage2"], threshold: 50, label: "Master"

    }, {

        key: erg.constants["pohPassionTrackStage3"], threshold: 70, label: "Worthy master"

    }, {

        key: erg.constants["pohPassionTrackStage4"], threshold: 90, label: "Beloved master"

    }, {

        key: erg.constants["pohPassionTrackStage5"], threshold: 100, label: "My queen"

    }],
    relationshipResponses: [{

        level: 1,
        heart: 1,
        text: "&quot;My relationship with my employer is strictly professional.&quot;"

    }, {

        level: 1,
        heart: 2,
        text: "&quot;It's normal to spend some of your leisure time with your colleagues, even the boss!&quot;"

    }, {

        level: 2,
        heart: 1,
        text: "&quot;As soon as work's done for the day, I'm in charge.  That's how we preserve equality!&quot;"

    }, {

        level: 2,
        heart: 2,
        text: "&quot;Well Aya, why do you think I took this job in the first place?&quot;"

    }, {

        level: 3,
        heart: 1,
        text: "&quot;I've always thought that amongst my Lady's most admirable qualities is how fine a wife she'd make...and I'll be verifying that personally.&quot;"

    }, {

        level: 3,
        heart: 2,
        text: "&quot;I'm a professional.  This won't affect our working lives at all, unless she thinks we're working on our anniversary.&quot;"

    }]

};

erg[erg.constants["pohPassionTracks"]][erg.constants["pohPassionTrackServant"]] = {

    key: erg.constants["pohPassionTrackServant"],
    label: "Servant",
    relationshipUpgrades: [erg.constants["pohRelationshipTypeWorkplaceRomance"]],
    stages: [{

        key: erg.constants["pohPassionTrackStage0"], threshold: 10, label: "Employee"

    }, {

        key: erg.constants["pohPassionTrackStage1"], threshold: 30, label: "Useful tool"

    }, {

        key: erg.constants["pohPassionTrackStage2"], threshold: 50, label: "Servant"

    }, {

        key: erg.constants["pohPassionTrackStage3"], threshold: 70, label: "Trusted servant"

    }, {

        key: erg.constants["pohPassionTrackStage4"], threshold: 90, label: "Beloved servant"

    }, {

        key: erg.constants["pohPassionTrackStage5"], threshold: 100, label: "My right hand"

    }],
    relationshipResponses: [{

        level: 1,
        heart: 1,
        text: "&quot;My relationship with my employees is strictly professional.&quot;"

    }, {

        level: 1,
        heart: 2,
        text: "&quot;Aya, are you accusing me of hiring someone just because I'm attracted to her?&quot;"

    }, {

        level: 2,
        heart: 1,
        text: "&quot;I can confirm that I have a romantic relationship with one of my employees, and I am prepared to redefine the word professional until that seems OK.&quot;"

    }, {

        level: 2,
        heart: 2,
        text: "&quot;I didn't just recruit her because she's beautiful.  That's just one of her many fine, employable qualities!&quot;"

    }, {

        level: 3,
        heart: 1,
        text: "&quot;Our working life won't be affected; unless she asks me for...anything, really.  This might be unfair on my other employees, sorry in advance!&quot;"

    }, {

        level: 3,
        heart: 2,
        text: "&quot;Fine, I offered her a job because I didn't have the courage to propose on the spot.  Are you happy now, tengu?&quot;"

    }]

};


erg[erg.constants["pohPassionTracks"]][erg.constants["pohPassionTrackMokouKaguya"]] = {

    key: erg.constants["pohPassionTrackMokouKaguya"],
    label: "Hourai Dolls",
    relationshipUpgrades: [erg.constants["pohRelationshipTypeFoesWithBenefits"]],
    stages: [{

        key: erg.constants["pohPassionTrackStage0"], threshold: 10, label: "Waste of time"

    }, {

        key: erg.constants["pohPassionTrackStage1"], threshold: 30, label: "A painful memory"

    }, {

        key: erg.constants["pohPassionTrackStage2"], threshold: 50, label: "Unfinished business"

    }, {

        key: erg.constants["pohPassionTrackStage3"], threshold: 70, label: "My peer and shame"

    }, {

        key: erg.constants["pohPassionTrackStage4"], threshold: 90, label: "Eternal enemy and companion"

    }, {

        key: erg.constants["pohPassionTrackStage5"], threshold: 100, label: "My beloved foe"

    }],
    relationshipResponses: [{

        level: 1,
        heart: 1,
        text: "&quot;Well Aya, you're telling me that I'm romantically involved with her, and I'm telling you that I killed her three times yesterday.  So either you're just spouting unsubstantiated lies, or you're accusing me of having particularly perverse tastes.  Choose carefully.&quot;"

    }, {

        level: 1,
        heart: 2,
        text: "&quot;A date?  Just ask the survivors amongst the eyewitnesses if that looked like a date...uh, but not Tewi.&quot;"

    }, {

        level: 2,
        heart: 1,
        text: "&quot;So I guess Keine isn't eating this history after all.  How awkward.  Very well, the hideously cliched hatred-to-love twist happened, can't be helped.&quot;"

    }, {

        level: 2,
        heart: 2,
        text: "&quot;Ah, maintaining a blood feud is so difficult in Gensokyo with the social scene the way it is...and all that passion has to go somewhere.&quot;"

    }, {

        level: 3,
        heart: 1,
        text: "&quot;In retrospect this was the obvious solution to the problem of the Fujiwara clan's honour and the Impossible Requests.&quot;"

    }, {

        level: 3,
        heart: 2,
        text: "&quot;Honeymoon?  A western tradition, but we're considering it; perhaps incinerating the Lunar Capital with deathless flame.&quot;"

    }]

};


//################################### ATTRIBUTE TEST SCENARIOS  #################################################

erg[erg.constants["pohAttributeTestScenarios"]] = {};

//Same/Same

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioScarletChess"]] = {

    key: erg.constants["pohAttributeTestScenarioScarletChess"],
    heart1Attribute: erg.constants["pohAttributeCleverness"],
    heart2Attribute: erg.constants["pohAttributeCleverness"],
    title: "Scarlet Chess",
    description: "While at the Scarlet Devil Mansion, the couple were dragged into a doubles match of chess at the whim of the mistress.  With Remilia and Patchouli as their opponents in a western game, it seemed like they'd been invited only to a humiliating defeat.",
    bothSucceed: "But Heart1 and Heart2 not only played with uncommon brilliance, they cooperated, achieving a tactical integration impossible for the impetuous vampire and the bookish witch.  Remilia was gracious in defeat, but this reporter did hear rumours of a brace of fairy maids being murdered for &quot;slacking&quot; later in the day; an unrelated incident to be sure.",
    heart1SuccessHeart2Fail: "Heart1 managed to press the vampire hard, but was let down by her partner witlessly blundering into a classic trap set by the witch.  Remilia thanked Heart1 for a good challenge, then congratulated herself on her strategic acumen in her use of Patchouli.",
    heart1FailHeart2Success: "Heart1 was stymied by the vampire's brilliant improvisations and quickly crushed.  Heart2 had been dealing with the witch handily, but against two opponents couldn't possibly hold out.  Remilia was very pleased with her victory, but chided Patchouli for her conventional and slow strategies.",
    bothFail: "And indeed they were swiftly outwitted and crushed, forced to slink away from the table in shame.  An anonymous silver-haired knife-wielding head maid source told this reporter &quot;Oh yes, Lady Remilia was just <em>insufferably</em> smug for the rest of the day, it was wonderful.&quot;"

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioWarpathMiko"]] = {

    key: erg.constants["pohAttributeTestScenarioWarpathMiko"],
    heart1Attribute: erg.constants["pohAttributeCourage"],
    heart2Attribute: erg.constants["pohAttributeCourage"],
    title: "Warpath Miko",
    description: "The couple were among the victims of the cross-Gensokyo rampage of shrine maidens Reimu Hakurei and Sanae Kochiya (covered extensively in this issue of the Bunbunmaru News!).",
    bothSucceed: "But they showed uncommon courage against such dread opponents, and managed to stave off the assault until the miko were distracted by other opportunities for destruction, and the date was saved.",
    heart1SuccessHeart2Fail: "Heart1 rose to the challenge with a brave defence, but swiftly discovered that all she was defending was her paramour's retreating back.  Under assault by Divine Arts: Omnidirectional Demon Binding Circle and Great Miracle: Yasaka's Divine Wind, she took several hits and was forced into humiliating retreat.",
    heart1FailHeart2Success: "Heart1's morale broke instantly at the sight of Snake Sign: Orochi of Ancient Times and Dream Sign: Fantasy Dimensional Rift.  While Heart2 was ready to offer the berserk miko battle, she was tackled by her partner and dragged off at high speed.  The shrine maidens gave brief chase before being distracted by other victims.",
    bothFail: "Neither Heart1 nor Heart2 had the courage to face the awful menace, clutching to each other in the shelter of a tree and sustaining several wounds from the barrages of danmaku fire sweeping the ground.  It's not clear whether the miko were aiming at the couple or even aware of their presence, but the Bunbunmaru News is officially recording the incident on their roll of defeated foes."


}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioPoetryBattle"]] = {

    key: erg.constants["pohAttributeTestScenarioPoetryBattle"],
    heart1Attribute: erg.constants["pohAttributeExpression"],
    heart2Attribute: erg.constants["pohAttributeExpression"],
    title: "Poetry Battle",
    description: "Witnesses report that the couple was involved in yesterday's poetry exchange at Eientei, before it devolved into the typical spiral of violence and destruction.",
    bothSucceed: "Both acquitted themselves well, offering elegant and charming poems, naturally choosing each other as subjects.  Sadly both verses were lost in the devastation that followed Tewi Inaba's reading of her satirical piece.",
    heart1SuccessHeart2Fail: "Heart1 composed a piece or remarkable beauty in Heart2's honour; sadly all her paramour had to offer in reply was a bit of doggerel on the subject of sake.  Reportedly Heart2 started the fighting to cover her shame.",
    heart1FailHeart2Success: "Heart1 allegedly saw Heart2 staring at her in a creative rapture, brush meeting paper with sublime skill.  Having no words of her own to reply, she decided to skip a humiliating scene by shooting bystander Reisen Udongein Inaba in the face with danmaku.",
    bothFail: "It's not clear why they participated, as both Heart1 and Heart2 proved themselves terrible at poetry, composing verses ostensibly about each other though also fitting shoes, ducks and rice pudding.  Luckily for the pair the ensuing danmkau battle destroyed all physical evidence of their crimes against art and elegance, though witness Tewi Inaba told the Bunbunmaru News that &quot;The memory of their horrifying incompetence will never leave me!&quot;"

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioHakureiParty"]] = {

    key: erg.constants["pohAttributeTestScenarioHakureiParty"],
    heart1Attribute: erg.constants["pohAttributeSociability"],
    heart2Attribute: erg.constants["pohAttributeSociability"],
    title: "Hakurei Party",
    description: "This reporter was present at yesterday's Hakurei shrine party when Heart1 and Heart2 arrived as a couple.  Naturally the company resolved on teasing and mocking them mercilessly to test the strength of their relationship.",
    bothSucceed: "Sadly for all concerned, both showed grace and aplomb, navigating the treacherous social waters without resorting to danmaku.  Honestly it was all a bit of a let-down until Remilia started describing French cuisine to Yuyuko, causing the ghost princess to make a hilariously ill-advised attempt to eat Suwako.",
    heart1SuccessHeart2Fail: "Heart1 was making some headway into calming the party down and distracting them with other matters when Heart2 threw it all away, blurting out a denial that they were on a date, along with some curiously specific denials of what she'd hoped for during the evening.  Yukari Yakumo and Reimu Hakurei seized the opportunity, and unleashed a ruthless and devastating barrage of mockery, a teasing that will go down in Gensokian history.",
    heart1FailHeart2Success: "Heart1 valiantly snatched defeat from the jaws of Heart2's victory; as her paramour set about controlling the voracious crowd and deflecting their vicious mirth, she made an ostentatious display of coupledom.  While this was a better tactic than the tsundere behaviour the company was hoping for, it played right into the hands of Suika Ibuki and Sanae Kochiya, who used her &quot;honesty&quot; as an opportunity to deliver yet more teasing.",
    bothFail: "This plan was a flawless success as both Heart1 and Heart2 aborted to a tsundere routine instantly, starting that party's inevitable all-hands danmaku brawl."


}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioGensokyoChronicles"]] = {

    key: erg.constants["pohAttributeTestScenarioGensokyoChronicles"],
    heart1Attribute: erg.constants["pohAttributeHubris"],
    heart2Attribute: erg.constants["pohAttributeHubris"],
    title: "Unflattering Chronicles",
    description: "Passing through the human village on their date, the couple encountered Hieda Akyuu, who has recently released an update to her Gensokyo Chronicles painting both of them in an unflattering light.  Allegedly there was instantly a &quot;menacing atmosphere&quot; and the defenceless Akyuu must be supposed to have been in fear for her life.",
    bothSucceed: "And with good reason!  Heart1 and Heart2, their great pride slighted, apparently decided to give the human a taste of their power.  While Akyuu was ultimately saved by the timely intervention of the Hakurei shrine maiden (who arrived on the scene with uncommon swiftness), she received several injuries before the couple were chased off.  It has to be said that this ugly incident has damaged human-youkai relations, and the Bunbunmaru News will be watching the Youkai Sage and Hakurei miko closely for further developments.",
    heart1SuccessHeart2Fail: "Indeed, Heart1 had to be physically restrained by Heart2, unable to hold back her wounded pride's longing for vengeance.  Witnesses report the scene as being somewhat comical, if one &quot;could forget the awful power near to being unleashed on the heart of the village.&quot;",
    heart1FailHeart2Success: "Heart1 found herself obliged to smooth things over with the young historian and a gathering crowd of villagers, as Heart2 gave way to her pride and began to distribute threats and insults to all comers.  When Heart1 finally persuaded her to leave, she allegedly told the villagers to thank the Youkai Sage and Hakurei shrine maiden for their lives, as only fear of them held back her wrath.",
    bothFail: "But neither Heart1 nor Heart2 rose to bait of their wounded pride, conducting themselves with perfect civility.  To be honest, if the date itself wasn't of interest this incident would never have made it to the pages of the Bunbunmaru News."

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioTripleDate"]] = {

    key: erg.constants["pohAttributeTestScenarioTripleDate"],
    heart1Attribute: erg.constants["pohAttributeJealousy"],
    heart2Attribute: erg.constants["pohAttributeJealousy"],
    title: "Triple Date",
    description: "It seems Heart1 had planned to lure Heart2 into the intimate seclusion of the hot springs, only to discover on the couple's arrival that they were pre-empted by four of Gensokyo's most prominent citizens - Reimu Hakurei, Yukari Yakumo, Sanae Kochiya and Sakuya Izayoi.  As our readers will easily grasp, bathing with a paramour in the company of four such beauties is a threatening experience that can be assumed to have put great presure on the couple.",
    bothSucceed: "Indeed, that pressure was too much.  A certain sagely youkai witness reports that it was not five minutes before Heart1 asked Sakuya Izayoi &quot;Why don't you stop time if you want to spend so much of it admiring Heart2?&quot; to which Heart2 retorted that she had &quot;no idea how you'd know where Sakuya is looking, considering the way your eyes have been locked on Sanae!&quot;  Not long after, the couple were reportedly gapped out of the springs to prevent their ruining the Sage's bath with danmaku fire.",
    heart1SuccessHeart2Fail: "Heart1 allegedly snapped instantly, hurling spare towels at the heads of the spring's occupants, shouting &quot;You're not worthy to look upon Heart2, you harpies!&quot;  Naturally she was interdicted by the time manipulation of Sakuya Izayoi, who can be surmised to never tolerate unnecessary dirtying of laundry, but the resulting awkward atmosphere had Heart2 shortly making excuses and dragging her paramour away.",
    heart1FailHeart2Success: "Heart1 reportedly negotiated the situation deftly with careful attention to her paramour, but Heart2 quickly became convinced this was a cover-up for something going on between her and the Hakurei shrine maiden.  The resultant ugly scene was stopped only when Heart2 was rendered unconscious by a yin-yang orb, and had to be removed from the spring by Heart1 lest she drown.",
    bothFail: "Sadly neither Heart1 nor Heart2 gave into jealousy, reportedly enjoying the extended company while remaining primarily focused on each other.  &quot;It was terrible!&quot; a green-haired shrine maiden witness told the Bunbunmaru News &quot;I was relying on them causing a scene to distract that old woman Yukari from creeping on poor Reimu.  I don't know why she puts up with that hag!&quot;"

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioYuyukoTrolling"]] = {

    key: erg.constants["pohAttributeTestScenarioYuyukoTrolling"],
    heart1Attribute: erg.constants["pohAttributePettiness"],
    heart2Attribute: erg.constants["pohAttributePettiness"],
    title: "Yuyuko is Trolling",
    description: "During their date, the couple crossed paths with Yuyuko Saigyouji's epic gastronomical tour of Gensokyo (see the special lift-out feature in every day's issue of the Bunbunmaru News this week!) in a quaint tea house in the hills.  The shaken tea house owner told the Bunbunmaru News later: &quot;I wouldn't ever say anything against such a charming and important person as Lady Saigyouji, but it was amazing their conversation kept coming back to old wounds and grudges between Heart1 and Heart2.  Could she have meant that?&quot;",
    bothSucceed: "Apparently forgiveness is not a defining trait of Heart1 and Heart2's relationship, as the conversation ended with the destruction of the tea house through suddenly unleashed danmaku.  Yuyuko saved the owner from harm, and was allegedly &quot;very pleased with herself.&quot;",
    heart1SuccessHeart2Fail: "Heart1, not a forgiving soul at the best of times, allegedly snapped at mention of &quot;that incident at the Kirisame-Margatroid wedding&quot; and flew into a rage.  Heart2, apparently not wanting to give Yuyuko the satisfaction she &quot;obviously craved&quot; was forced to meekly apologise and beg forgiveness.",
    heart1FailHeart2Success: "Heart1 allegedly &quot;seemed to catch on to Lady Saigyouji's game&quot; and attempted to deflect the conversation to the welfare of her retainer Youmu Konpaku.  However, this reminded Heart2 of the encounter between Heart1 and Youmu at last year's Lunar Capital Festival, and the couple were obliged to leave the tea house under a cloud lest Yuyuko provoke them further.",
    bothFail: "However neither Heart1 nor Heart2 rose to the bait, and while the owner spent a tense half-hour fearing for life and property, the encounter ended without so much as a raised word.  Allegedly Yuyuko was &quot;clearly disappointed.&quot;"
}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioFairySquishing"]] = {

    key: erg.constants["pohAttributeTestScenarioFairySquishing"],
    heart1Attribute: erg.constants["pohAttributeViciousness"],
    heart2Attribute: erg.constants["pohAttributeViciousness"],
    title: "Fairy Squishing",
    description: "While in transit during their date, the couple participated in the beginning and end of yesterday's &quot;Great Fairy Uprising&quot; as ice fairy Cirno and her many allies attacked them as the opening assault of their revolution.  Naturally Heart1 and Heart2 shot them down without difficulty.",
    bothSucceed: "But they didn't stop at victory, ruthlessly exterminating every fairy that had dared to fire upon them, scouring the ground with danmaku to ensure those that had fallen were utterly dead.  Witness Daiyousei told the Bunbunmaru News &quot;I hid, but now I wish they'd killed me too, that way I'd be able to forget the horrifying sight!&quot;",
    heart1SuccessHeart2Fail: "Heart1 was reportedly offended at the hubris of the tiny creatures, flying in close to blast them with devastating close-range danmaku, unwilling to let any escape. Cirno herself was only saved from a rare death when Heart2 dragged her battle-crazed paramour away.",
    heart1FailHeart2Success: "Heart1 at that point was apparently ready to laugh the matter off, but Heart2 would have none of it.  Having shot down the fairies, she landed to beat upon the fallen with her fists, determined to see the colour of fairy blood.  Heart1 was obliged to mercy-kill the handful of survivors with clean danmaku fire to save them from a more brutal fate; allegedly only Cirno herself managed to escape relatively intact.",
    bothFail: "Having done so, Heart1 and Heart2 flew on their way, reportedly not giving the fallen fairies even another look.  Whether such mercy came from battlefield chivalry or a simple desire not to dignify their opponents' abortive rebellion, the Bunbunmaru News cannot speculate."

}


//+Different/+Different

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioBorderTeam"]] = {

    key: erg.constants["pohAttributeTestScenarioBorderTeam"],
    heart1Attribute: erg.constants["pohAttributeCourage"],
    heart2Attribute: erg.constants["pohAttributeSociability"],
    title: "Illusionary Border Team",
    description: "The couple's date was interrupted high above the Forest of Magic when they were intercepted by a belligerent Hakurei shrine maiden and a bemused Youkai Sage.  Some Bunbunmaru News readers will be able to empathise with the pair, having experienced such a situation for themselves - one must be sufficiently valourous as to not be instantly crushed by Reimu, while convincing Yukari that she'll derive more amusement from letting you go than allowing Reimu to exterminate you.",
    bothSucceed: "Thankfully for the pair (if regrettable for the drama of this article), the couples' virtues were equal even to this dread challenge.  Heart1 faced the Hakurei miko with supreme courage, while Heart2 bantered cheerfully with Lady Yakumo as if they were sitting down to tea rather than flying through the heart of a danmaku storm.  Perhaps seeing no hope of easily disrupting the couple's equanimity, the Youkai Sage soon departed, dragging her pet shrine maiden.",
    heart1SuccessHeart2Fail: "Heart1 was not daunted by the overwhelming spiritual might of the Hakurei, offering battle without hesitation.  Her valour was rendered moot by Heart2's lack of social graces; finding herself swiftly bored, Yukari joined the fray herself, leaving the couple with no option but humiliating retreat.",
    heart1FailHeart2Success: "Heart1 simply did not have the courage to face the shrine maiden head-on, fleeing before the fury of Spirit Sign: Fantasy Seal ~ Concentrate ~.  This was most inconvenient for Heart2, who had been successfully charming the Youkai Sage before suffering a crushing surprise attack from the unoccupied Reimu.  While her injuries were ultimately not serious, she was undoubtedly seriously betrayed.",
    bothFail: "Heart1 and Heart2 were not equal to the challenge.  Whatever reserves of valour and charm they might normally claim abandoned them, and they fell prey to Bounded Field: Border of Life and Death.  Allegedly Eientei's medical services were required before the date could continue."

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioCharades"]] = {

    key: erg.constants["pohAttributeTestScenarioCharades"],
    heart1Attribute: erg.constants["pohAttributeExpression"],
    heart2Attribute: erg.constants["pohAttributeCleverness"],
    title: "Charades",
    description: "Heart1 and Heart2's date included an appearance at a Moriya shrine drinking party as a couple.  Sanae Kochiya and Suwako Moriya seized upon this opportunity to impose a game for pairs upon the company - an outside world game known as charades.  Naturally the couple were expected to excel, or to fail entertainingly for the goddess' amusement.",
    bothSucceed: "Indeed, not only was Heart1 able to make gestures of surpassing eloquence to her partner, but Heart2 was brilliant in their interpretation.  The couple carried the day without serious competition, frustrating more than a few maidens who imagined themselves to have a greater insight into their lovers' hearts.",
    heart1SuccessHeart2Fail: "Heart1 took to the game admirably, her wordless gestures communicating her mind to all the party - except her partner, who proved staggeringly obtuse.  In the end, the couple were obliged to retire early from the gathering, driven off by overwhelming drunken mirth at the expense of Heart2's slow wit.",
    heart1FailHeart2Success: "Heart1 claimed to understand Sanae's explanations of the alien game, but her actions betrayed no such comprehension.  Despite some brilliant intuitive deductions on the part of Heart2, she was largely unable to make herself understood, and the couple suffered a total defeat at the hands of a shrine maiden team.",
    bothFail: "&quot;There are few things so tragic&quot; native god Suwako Moriya told the Bunbunmaru News this morning &quot;as a fool trying to communicate with an imbecile.  The former has no means to convey her thoughts, and the latter would not apprehend them even if she did.  A splendid game, I'm glad Sanae suggested it!&quot;"

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioTruthPatrol"]] = {

    key: erg.constants["pohAttributeTestScenarioTruthPatrol"],
    heart1Attribute: erg.constants["pohAttributeCleverness"],
    heart2Attribute: erg.constants["pohAttributeCourage"],
    title: "The Truth Patrol",
    description: "This reporter personally witnessed part of Heart1 and Heart2's date, as they happened to cross the path of Suika Ibuki and myself.  We had just concluded a very successful interview over a modest quantity of sake, and full of good cheer had resolved on tearing Gensokyo apart to bring every secret and mistruth into the light.  Seeing a happy couple at play, we naturally resolved to increase their happiness by bringing honesty into their relationship.",
    bothSucceed: "Over the course of a short interview with Heart1, I concluded that she was being amply honest with her paramour (after all, who could lie to this reporter's face and get away with it?), while Suika verified that there was no fear of the truth in Heart2's heart by way of a few light threats.  Satisfied, we sent them on their happy way and continued our inquisition (see tomorrow's Bunbunmaru News for the full story!).",
    heart1SuccessHeart2Fail: "Heart1 quickly caught our intent and engaged me in lively debate, claiming that &quot;romance relies on a little mystique, it's all right to leave a few harmless secrets in the shadows!&quot;  But her arguments were undermined when Heart2 broke and ran before the fury of the oni; she revealed nothing but was obliged to retire in humiliation herself.",
    heart1FailHeart2Success: "Heart1, while a woman of many fine qualities, cannot be accused of having wit to match with a Tengu.  She obligingly spilled Heart2's secrets from just a little interrogation by this reporter, making a mockery of the latter's courage in facing up to the oni.",
    bothFail: "Naturally they could not resist the honest purity of our intent, and were undone in the swift questioning and battle that ensued.  Please see pages 8-10 of this issue of the Bunbunmaru News for a full analysis of their confessions!"

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioVillageInfluence"]] = {

    key: erg.constants["pohAttributeTestScenarioVillageInfluence"],
    heart1Attribute: erg.constants["pohAttributeSociability"],
    heart2Attribute: erg.constants["pohAttributeExpression"],
    title: "Village Influence",
    description: "Calling into a tavern in the human village for a few atmosphere-enabling drinks, Heart1 and Heart2 quickly became the centre of attention amongst the human regulars.  Apparently hoping to seize the opportunity for good public relations, Heart1 unleashed a barrage of charm upon the crowd, while Heart2 argued their side of various issues of the day.",
    bothSucceed: "Their efforts were a success, and before long they easily had the humans toasting their health and supporting their opinions.  It's not known if the Hakurei or Moriya shrine maidens will see this as unrighteous interference in human affairs, but the couple seem to have won enough popularity to justify that risk.",
    heart1SuccessHeart2Fail: "Heart1's charm is undoubted, and she reportedly ingratiated herself with the villagers without difficulty.  But her good work was undone by Heart2's clumsy attempts at persuasion, using cliched slogans that other meddlesome powers had prepared the humans against.  The atmosphere became awkward, and Heart1 was obliged to manufacture an excuse for the couple to leave.",
    heart1FailHeart2Success: "Heart1 overestimated the extent to which her charm could overcome the injury and property damage she'd inflicted upon the humans that week, let alone over her colourful history.  Heart2's eloquence and sophisticated persuasions couldn't hope to achieve much in the resulting ugly atmosphere; she was obliged to buy drinks for everyone and pull Heart1 back into a shadowed corner until the crowd calmed.",
    bothFail: "Eyewitnesses report this plan was hilariously ill-advised.  Not only were the humans so terrified of the couple's power that Heart1's charm seemed only that of a cat playing with its food, but Heart2 was advocating various policies detrimental to mortals by definition.  They were obliged to leave when a brave young boy successfully made a break for the door, declaring his intent to fetch the shrine maidens."

}

//-Different/-Different

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioChivalry"]] = {

    key: erg.constants["pohAttributeTestScenarioChivalry"],
    heart1Attribute: erg.constants["pohAttributeHubris"],
    heart2Attribute: erg.constants["pohAttributePettiness"],
    title: "Being Looked Up To",
    description: "While relaxing near the waterfall on the Youkai Mountain, the couple were discovered by Chen Yakumo and Nitori Kawashiro, who had been playing nearby.  Based on this reporter's lip-reading through a telephoto lens, the young girls pressed their seniors with questions about dating and being adults.",
    bothSucceed: "Heart1 took this as an opportunity to boast and paint an impossibly romantic picture of their relationship.  Heart2, clearly irritated, shared her objections in frank detail, provoking an undignified shouting match.  This reporter couldn't help but notice Chen and Nitori giggling with great satisfaction at the blow-up, bringing into question the innocence of their intent.",
    heart1SuccessHeart2Fail: "Heart1 took this as an opportunity to boast and paint an impossibly romantic picture of their relationship.  Heart2 showed great patience in humouring her and the girls, waiting on the younger pair to be on their way before questioning Heart1's ludicrous portrayal of adult life.",
    heart1FailHeart2Success: "Heart1 told the girls that adulthood had its own excitement but also its own troubles, and was neither to be regretted by adults nor excessively longed for by children - perhaps showing some compassion to child-like youkai that might never &quot;grow up.&quot;  But Heart2 saw fit to ruin this touching scene, telling the girls that in truth the adults they look up to are driven by anger, greed and lust - that &quot;most of them are even worse than the lies Aya writes about them in that rag!&quot;  Well, the Bunbunmaru News is honest to a fault, dear reader, but we are a family publication!  In any case, Chen and Nitori fled in tears from this shameful display.",
    bothFail: "Heart1 and Heart2 deftly humoured their innocent queries without stooping to condescension or lies.  The Bunbunmaru News has no concrete information at this time, but we have to speculate as to whether they're making a concious effort to become good mothers?"


}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioGhostTeam"]] = {

    key: erg.constants["pohAttributeTestScenarioGhostTeam"],
    heart1Attribute: erg.constants["pohAttributeJealousy"],
    heart2Attribute: erg.constants["pohAttributeViciousness"],
    title: "Netherworld Dwellers Team",
    description: "Visiting the gardens of Hakugyokuro, an increasingly popular date spot, our couple were reportedly joined by the mistress of the house Yuyuko Saigyouji and her retainer Youmu Konpaku.  The famed beauty had been teasing Konpaku all day and invited Heart2 to join in her mockery.",
    bothSucceed: "A ghostly witness told the Bunbunmaru News &quot;You'd think Gensokyo would be alert to the Lady's traps by now.  But not today - Ms Heart1 was fuming with jealousy at the attention that such a beauty was paying to her girl, while Ms Heart2 made everything worse with her enthusiasm in harassing poor Ms Youmu.  Within minutes it was all swords and danmaku and Lady Yuyuko's laughter.&quot;",
    heart1SuccessHeart2Fail: "Heart1 saw this particular attention to her paramour as a threat, and became obviously wroth with the ghost princess; though Heart2 gently deflected Yuyuko's invitation, she nevertheless found herself dragged off to the rest of the date within minutes, and Youmu was left to her fate.",
    heart1FailHeart2Success: "Heart1 was not provoked by the ghost princess' fishing for jealousy, but her paramour either did not understand the dangers of the situation so clearly or simply didn't care.  Heart2 launched into mockery of Youmu with obvious relish, perhaps nursing a grudge, perhaps simply failing to apprehend that the swordswoman would never cut her mistress but would draw on an outsider without hesitation.  The inevitable danmaku battle was swift, with Heart1 seeking only to prevent injury and conceding defeat at the first opportunity.",
    bothFail: "Heart1 and Heart2 did not give in to the temptations of the Bourei of Immaculate Beauty, keeping the conversation civil and seemingly prolonging the encounter only to give Youmu a rest from her attentions.  This reporter would like to offer their tactics as an example to our readers for dealing with Gensokyo's more eccentric and powerful residents.  Unless I happen to be nearby, as it's a bit boring and as you can see makes for a poor article."

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioCelestialTeam"]] = {

    key: erg.constants["pohAttributeTestScenarioCelestialTeam"],
    heart1Attribute: erg.constants["pohAttributeViciousness"],
    heart2Attribute: erg.constants["pohAttributeHubris"],
    title: "Celestial Oddity",
    description: "Our couple took a scenic high-altitude flight as a particularly romantic part of their date, only to find themselves suddenly assaulted by Celestial troublemaker Tenshi Hinanawi and retainer Iku Nagae.  Long-sighted witnesses report the danmaku battle was short and decisive, with Iku's brave showing totally undermined by Tenshi's lacklustre defence.",
    bothSucceed: "Heart1 mercilessly exploited the Celestial's poor form, unleashing the full force of her power on her opponent with repeated close-range blasts.  Tenshi's crumpled body spiralled out of the sky and cratered somewhere in the Bamboo Forest of the Lost.  Witnesses report that while drinking later at Eientei, Heart2 boasted of her paramour's prowess with more pride than if she herself had fired the danmaku; Nagae reportedly just gave a long-suffering sigh and downed more sake.",
    heart1SuccessHeart2Fail: "Heart1 mercilessly exploited the Celestial's poor form, unleashing the full force of her power on her opponent with repeated close-range blasts.  Tenshi's crumpled body spiralled out of the sky and cratered somewhere in the Bamboo Forest of the Lost.  Witnesses report that while drinking later at Eientei, Heart2 questioned Iku closely about the attack and the Celestial's swift defeat, as if suspicious that it had been staged; Nagae reportedly just gave long-suffering sighs and downed more sake.",
    heart1FailHeart2Success: "Heart1, perhaps suspicious of the powerful Celestial's unusually poor performance, secured the win quickly but with a minimum of force.  This reporter became aware of the incident during a party at the Hakurei shrine, where the duelling parties were reunited for the first time; Heart2 mocked Tenshi for her weak danmaku and boasted of Heart1's power, but the Celestial seemed strangely pleased to hear such talk and did her best to provoke more of it.",
    bothFail: "Heart1, perhaps suspicious of the powerful Celestial's unusually poor performance, secured the win quickly but with a minimum of force.  When questioned about the victory later over sake at the Moriya shrine, Heart2 was reportedly dismissive, claiming it &quot;Wasn't real danmaku&quot; and not wanting it to &quot;count against Iku.&quot;  The Bunbunmaru News can't speculate what eccentric whim Tenshi Hinanawi was pursuing in this affair, but it cannot be doubted that the couple handled her as gracefully as possible."

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioVampireTeam"]] = {

    key: erg.constants["pohAttributeTestScenarioVampireTeam"],
    heart1Attribute: erg.constants["pohAttributePettiness"],
    heart2Attribute: erg.constants["pohAttributeJealousy"],
    title: "Visionary Scarlet Devil Team",
    description: "Apparently intending to enjoy a lakeside picnic, the couple passed through the domains of the Scarlet Devil, stopping in vassal villages for supplies on their way.  They reportedly encountered the Lady herself holding court in one of the villages, listening to the concerns of those under her rule and judging criminal cases, her Perfect Elegant Maid at her side.",
    bothSucceed: "Heart1 found this display of western-style feudalism from the the child-sized vampire to be hilarious, openly mocking her for her pretensions.  Heart2 seemed more perplexed that such a ridiculous figure could command the loyalty of the exquisite Sakuya Izayoi, and offered the maid the chance to &quot;come serve a real woman.&quot;  Human witnesses that spoke to the Bunbunmaru News report that following the brutal yet elegant beating that resulted they're &quot;more loyal to her ladyship than ever!  Seeing her punish those outsiders just makes you feel safe, and all it costs us is a little blood.&quot;",
    heart1SuccessHeart2Fail: "Heart1 found this display of western-style feudalism from the the child-sized vampire to be hilarious, openly mocking her for her pretensions.  Heart2 can be assumed to have read the situation better, perhaps aware of the power of Remilia's charisma over the humans and the mighty Sakuya Izayoi both.  She reportedly turned what promised to be an elegant yet gruesome mauling for the couple into a mere humiliating retreat.",
    heart1FailHeart2Success: "Heart1 greeted Lady Remilia with respect and civility, not the familiarity that would be normal from one intimate with Gensokyo's social scene, reportedly pleasing the Devil greatly.  But Heart2 seemed perplexed that a child could command the loyalty of the exquisite Sakuya Izayoi, offering the maid the chance to &quot;come serve a real woman.&quot;  As can be expected, this turned the situation ugly, and Heart1 was obliged to evacuate her paramour, retreating to the sounds of the humans cheering their Lady's victory.",
    bothFail: "Reportedly reading the atmosphere well, the couple greeted the court with perfect civility.  Heart1 congratulated the humans on having such an attentive and just protector, while Heart2 complimented Remilia on the loyalty and excellence of her servants.  While this is undoubtedly the safest and most graceful way to handle the Scarlet Devil, the Bunbunmaru News must question whether it's wise in the long term to encourage youkai feudalism in seeming contradiction to the Hakurei Accords."

}

//+Different/-Different

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioPatchouliRiddles"]] = {

    key: erg.constants["pohAttributeTestScenarioPatchouliRiddles"],
    heart1Attribute: erg.constants["pohAttributeCleverness"],
    heart2Attribute: erg.constants["pohAttributeHubris"],
    title: "Riddling Patchouli",
    description: "A mild argument over trivia apparently derailed the date, for the couple were found trying to resolve the matter in the Scarlet Devil library.  It was mistress of the library Patchouli Knowledge who found them, and they found <em>her</em> to be in a fey mood, challenging Heart1 to a game of riddles.",
    bothSucceed: "Heart1 was equal to the challenge, confounding the brilliant magician by neatly dissecting her abstract clues and swiftly solving each riddle.  But Heart2's pride in her paramour was the couple's undoing, as her taunting of the Great Unmoving Library provoked riddles of impossible obscurity and complexity, seizing a decisive defeat from the hands of victory.",
    heart1SuccessHeart2Fail: "Heart1 was equal to the challenge, confounding the brilliant magician by neatly dissecting her abstract clues and swiftly solving each riddle.  Heart2 was reportedly very pleased with her paramour's efforts, but made excuses to cut the encounter short, preventing the Great Unmoving Library from escalating the game.",
    heart1FailHeart2Success: "Heart1 had some initial success, but as the difficulty of the riddles scaled steadily up she realised this was merely part of the Great Unmoving Library's calibrations for the game.  Heart2 was not so perceptive, mistaking Heart1's early victories for brilliance, and reportedly egged Patchouli on, unaware that she was digging a humiliating intellectual grave for her paramour.",
    bothFail: "Heart1 was no match for the wit of the Great Unmoving Library, guessing not a single riddle.  Her paramour mercifully cut short the encounter, retreating with wounded prestige rather than risking any kind of escalation with Patchouli in such a strange mood.  The Bunbunmaru News must stress to its readers that despite the elegance of the Scarlet Devil Mansion, utmost care must be taken when dealing with its proud and mighty inhabitants!"


}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioMismatchedDanmaku"]] = {

    key: erg.constants["pohAttributeTestScenarioMismatchedDanmaku"],
    heart1Attribute: erg.constants["pohAttributeCourage"],
    heart2Attribute: erg.constants["pohAttributeViciousness"],
    title: "Mismatched Danmaku",
    description: "While flying over the Forest of Magic on route to another drinking session, our couple were attacked by the berserk ice fairy Cirno; a regular enough occurrence, but witnesses report this time she had the aid of the Youkai Sage, Yukari Yakumo.",
    bothSucceed: "Heart1 bravely engaged the Mistress of Boundaries, flying without hesitation into her nightmare field of danmaku.  This left Heart2 to contend with the ice fairy, and she reportedly used the time afforded by her paramour's valour to overcome and grievously injure her opponent, taking obvious relish in the mauling.  &quot;It was a bit much!&quot; eyewitness Marisa Kirisame told this reporter &quot;I didn't see any choice but to blast that cruel Heart1 with a Master Spark from where I was sitting.  Of course that blew up Cirno too, but wasn't I just being merciful?&quot;",
    heart1SuccessHeart2Fail: "Heart1 bravely engaged the Mistress of Boundaries, flying without hesitation into her nightmare field of danmaku.  Her paramour used the time afforded to defeat Cirno with swiftness and precision, compelling a surrender with minimal injury.  Heart2 was thus able to quickly ask for Yukari's concession with the justification of her victory, to which the Sage gracefully assented.  Eyewitness Marisa Kirisame complained to the Bunbunmaru News that she'd been &quot;hoping for a better fight&quot; but that she &quot;can't complain about how Heart1 and Heart2 handled themselves, good luck to them!&quot;",
    heart1FailHeart2Success: "In the face of Yukari's nightmare fields of danmaku, Heart1's morale lasted but scant seconds.  But those seconds were enough for Heart2 to tear into Cirno, injuring her with obvious relish.  Eyewitness Marisa Kirisame told this reporter &quot;Well, it was bad for Cirno obviously, but hilarious.  Heart2 had no idea that her date had abandoned the field, nor that Yukari was storming up on her with Profound Danmaku Barrier ~Phantasm, Foam and Shadow~.  She got rolled like a cheap barrel of sake down the Hakurei steps.&quot;",
    bothFail: "In the face of Yukari's nightmare fields of danmaku, Heart1's morale lasted but scant seconds.  Heart2 saw her paramour break, and with no apparent appetite for violence against the ice fairy made an orderly retreat, laying down danmaku only to cover their escape.  Certainly a loss for the couple, but not the utter thrashing they risked by staying on the field with the Youkai Sage."


}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioSingForKomachi"]] = {

    key: erg.constants["pohAttributeTestScenarioSingForKomachi"],
    heart1Attribute: erg.constants["pohAttributeExpression"],
    heart2Attribute: erg.constants["pohAttributeJealousy"],
    title: "A Song for Komachi",
    description: "While flying over sparsely-settled land near the human village, the couple were reportedly flagged down by a distraught farmer; he claimed his daughter's soul had been frightened out of her body by a strange youkai, but that as she hadn't been eaten it was clearly not a true death.  He begged the couple to reclaim the girl from the shinigami, as the afterlife had no just claim upon her yet.  Reportedly claiming &quot;That's Reimu's problem, but we don't have anything better to do so why not?&quot; the couple travelled to the banks of the Sanzu and demanded ferrywoman Komachi Onozuka turn over the soul.  The reaper agreed, but requested a song in her honour as price.",
    bothSucceed: "Heart1 composed a hauntingly beautiful lay on the spot, impressing the shinigami and the gathered souls alike.  &quot;I was rather flattered!&quot; Komachi told the Bunbunmaru News &quot;I'd only asked for the song as a nominal price, for the pride of Hell and to make a good story of it, but I had to blush at how beautifully it praised me.  I don't think Heart2 appreciated it though - she grabbed the girl's soul roughly and flew off with it before the song even finished.  I wonder if Heart1 has ever sang like that for her?&quot;",
    heart1SuccessHeart2Fail: "Heart1 composed a hauntingly beautiful lay on the spot, impressing the shinigami and the gathered souls alike.  &quot;I was rather flattered!&quot; Komachi told the Bunbunmaru News &quot;I'd only asked for the song as a nominal price, for the pride of Hell and to make a good story of it, but I had to blush at how beautifully it praised me.  I can't believe Heart2 could just stand there and watch her sing like that to another woman on their date - maybe she hears songs like that for herself all the time?&quot;",
    heart1FailHeart2Success: "&quot;Honestly I regret asking that now.&quot; a chastened Komachi told the Bunbunmaru News &quot;When I dragged the poor girl into the Yama's court I got in a great deal of trouble, but that song was wretched and I have my pride as a shinigami.  And despite the woeful job Heart1 did of singing my praises, Heart2 was obviously sore that she'd agreed to do so at all, giving me the most filthy looks.  It was a terrible scene, perfect for your paper, Aya.&quot;",
    bothFail: "&quot;It was the worst song I've ever heard.&quot; a wincing Komachi told this reporter later.  &quot;Honestly I wish I'd asked for a pot of tea or a bottle of sake.  But I felt sorry for Heart2, who was such a good sport about it even though I'd obliged her date to praise another woman in song, so I let them claim their soul and tried to pretend my ears weren't bleeding.&quot;"

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioHakureiSakeScramble"]] = {

    key: erg.constants["pohAttributeTestScenarioHakureiSakeScramble"],
    heart1Attribute: erg.constants["pohAttributeSociability"],
    heart2Attribute: erg.constants["pohAttributePettiness"],
    title: "Hakurei Shrine Sake Scramble",
    description: "As a Hakurei shrine alcohol appreciation party happily coincided with their date, the couple picked up a very fine wheat sochu to share and made an appearance.  But the refined atmosphere of Gensokyo's most serious drinkers soberly assessing the quality of the spirits on offer was soon spoiled by the arrival of Scarlet Devil gate guard Hong Meiling and sun-crow Utsuho Reiuji.  The delinquent pair had only the cheapest sake to offer, but were plainly hammered and their breath betrayed the scent of much finer stuff.",
    bothSucceed: "Heart1 took a diplomatic approach, calming the party down and taking the drunken pair aside to let them recover their composure with tea and water.  But this return to order would be brief, as Heart2 was found guzzling (and spilling) the most expensive liquour at prodigious pace, declaring between gulps that she wouldn't &quot;let those treacherous cows have a drop!&quot;  The resulting brawl destroyed all surviving bottles and extensively damaged the shrine.",
    heart1SuccessHeart2Fail: "Heart1 took a diplomatic approach, calming the party down and taking the drunken pair aside to let them recover their composure with tea and water.  Heart2 was found to have taken a guarding position over the precious shared stock of fine liquor, but seeing her paramour's success, gracefully relented and encouraged Meiling and Utsuho to have small sampling tastes despite their grotesque breach of etiquette.",
    heart1FailHeart2Success: "While the whole company was offended, Heart1 was enraged.  She launched into a tirade described by those present as &quot;vile; inventive, but vile&quot; against the drunken miscreants, and had to be held back from attacking them - even Reimu Hakurei was reportedly unwilling to see women too drunk to defend themselves assaulted.  However all thoughts of mercy were abandoned when Heart2 was found guzzling (and spilling) the most expensive liquour at prodigious pace, declaring between gulps that she wouldn't &quot;let those treacherous cows have a drop!&quot;  The resulting brawl destroyed all surviving bottles and extensively damaged the shrine.",
    bothFail: "While the whole company was offended, Heart1 was enraged.  She launched into a tirade described by those present as &quot;vile; inventive, but vile&quot; against the drunken miscreants, and had to be held back from attacking them - even Reimu Hakurei was reportedly unwilling to see women too drunk to defend themselves assaulted.  Heart2 pressed the bottle of wheat sochu upon the shrine maiden and dragged her frothing paramour off to calm down, delaying the party's descent into violence by several hours."

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioTreasuresOfThePast"]] = {

    key: erg.constants["pohAttributeTestScenarioTreasuresOfThePast"],
    heart1Attribute: erg.constants["pohAttributeCleverness"],
    heart2Attribute: erg.constants["pohAttributeJealousy"],
    title: "Treasures of the Past",
    description: "By coincidence, this reporter crossed paths with the pair on their date while attached to rodent commander Nazrin's treasure-seeking expedition for the Myouren temple.  Nazrin's dousing lead us directly to Heart1's home, where the couple were enjoying a quiet moment.  The rods pointed to concealed treasure near Heart1's sleeping place, which initially confused her before realisation seemed to dawn.",
    bothSucceed: "She instantly went to work convincing Nazrin that the rods were being misled by the very great value she places on sleep and rest; thus there was no point searching the area when only metaphorical treasure was to be had.  But Heart2 was not convinced, leaping to the conclusion that there must be hidden keepsakes of ex-girlfriends there, and the lingering connection of hearts rendered them precious.  She slapped her erstwhile paramour across the face, declared &quot;There's your keepsake of me!&quot; and stormed out.  An unprofitable search for Nazrin, but a great find of drama for readers of the Bunbunmaru News!",
    heart1SuccessHeart2Fail: "She instantly went to work convincing Nazrin that the rods were being misled by the very great value she places on sleep and rest; thus there was no point searching the area when only metaphorical treasure was to be had.  I believe that Heart2 intuited that it was discovery by her - not Nazrin or I - that Heart1 feared, but she appeared to respect her privacy and gently ushered us out of the room.  Well played by the couple, but a poor result for your entertainment, dear readers!",
    heart1FailHeart2Success: "She tried to protest to Nazrin that whatever treasures were there had to be of only metaphorical value, but this served only as encouragement for the tiny clever commander, who swiftly uncovered a lacquered box filled with letters, poems, photographs and preserved flowers - clearly relics of past lovers.  Heart2 was infuriated, slapping her erstwhile paramour across the face, declaring &quot;There's your keepsake of me!&quot; and storming out.  An unprofitable search for Nazrin, but a great find of drama for readers of the Bunbunmaru News!",
    bothFail: "She tried to protest to Nazrin that whatever treasures were there had to be of only metaphorical value, but this served only as encouragement for the tiny clever commander, who swiftly uncovered a lacquered box filled with letters, poems, photographs and preserved flowers - clearly relics of past lovers.  Sadly for the drama of this article, Heart2 was unmoved, saying with a laugh that &quot;Everyone has a past, don't be silly Aya&quot; before making a nice soothing pot of tea for the party."

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioTheGreatMovingLibrary"]] = {

    key: erg.constants["pohAttributeTestScenarioTheGreatMovingLibrary"],
    heart1Attribute: erg.constants["pohAttributeCourage"],
    heart2Attribute: erg.constants["pohAttributePettiness"],
    title: "The Great Moving Library",
    description: "While apparently swapping lazy ghost stories near Muenzuka, the couple saw a rare sight: Patchouli Knowledge outside her library, flying in the company of the Perfect Elegant Maid, Sakuya Izayoi.  Upon being hailed, the pair from the Scarlet Devil Mansion explained that as a place of the dead, Muenzuka has a metaphysically inert atmosphere that is kind on Patchouli's lungs; as proof, Sakuya proposed a danmaku battle, that the witch might exert herself fully.",
    bothSucceed: "Heart1 readily assented, undaunted even by the fierce combination of the maid's heroic prowess and the full power of Patchouli's magic, and valiantly took the fore of the battle.  Heart2 was no less eager for battle, but shamefully unwilling to face defeat; to secure the couple's victory, she attacked the graves of Muenzuka themselves, sending up a dusty cloud of human remains to render the witch a coughing wreck.  Sakuya was obliged to take her friend and retreat for the safety of the mansion, but told this reporter later that she &quot;would stop at nothing to see the heartless perpetrator of this crime suffer her due!&quot;",
    heart1SuccessHeart2Fail: "Heart1 readily assented, undaunted even by the fierce combination of the maid's heroic prowess and the full power of Patchouli's magic, and valiantly took the fore of the battle.  Heart2 was more reluctant, but read the atmosphere well and rose to the challenge, allowing the witch her moment in the sun and accepting the eventual defeat with grace.",
    heart1FailHeart2Success: "Heart1 was daunted by the prospect of facing the full might of Patchouli, a feat few had managed since Marisa first defeated her many years ago; no doubt she was even less eager for danmaku given the heroic presence of Sakuya Izayoi on the field.  Such was her craven temporising that the maid was obliged to simply attack her to start the battle.  Heart2 was eager enough for the fight, but shamefully unwilling to face defeat; to secure the couple's victory, she attacked the graves of Muenzuka themselves, sending up a dusty cloud of human remains to render the witch a coughing wreck.  Sakuya was obliged to take her friend and retreat for the safety of the mansion, but told this reporter later that she &quot;would stop at nothing to see the heartless perpetrator of this crime suffer her due!&quot;",
    bothFail: "Heart1 was daunted by the prospect of facing the full might of Patchouli, a feat few had managed since Marisa first defeated her many years ago; no doubt she was even less eager for danmaku given the heroic presence of Sakuya Izayoi on the field.  Such was her craven temporising that the maid was obliged to simply attack her to start the battle.  But Heart2 saved face for the couple, clearly realising it was the witch's moment in the sun; she fought bravely enough to make the affair worthy of being called danmaku, and accepted defeat with grace."

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioTragicHistories"]] = {

    key: erg.constants["pohAttributeTestScenarioTragicHistories"],
    heart1Attribute: erg.constants["pohAttributeExpression"],
    heart2Attribute: erg.constants["pohAttributeHubris"],
    title: "Tragic Histories",
    description: "The couple joined an ironic night-time picnic at the Garden of the Sun and found themselves in the circle of elder Youkai Yukari Yakumo and Yuyuko Saigyouji, who were discussing poetry.  Yuyuko was playing poetry games with the other guests, her responses ancient odes rising up from the depths of her time-clouded memories; at each poem her friend the Sage gently reminded her of the real events that inspired it.",
    bothSucceed: "Heart1 excelled at the game, lacing her spontaneous compositions with historical allusions that provoked Yuyuko to reveal lost treasures of poetry within her heart.  Heart2 was too taken with the idea of uncovering the veiled history of these Youkai titans, and forgetting the danger pushed her paramour to continue the game and delve ever deeper.  Yuyuko's poetry smoothly took on a more modern tone, and the events the Youkai Sage related became recent indeed - humiliating and supposedly private details of the couple's own histories.  See page 32 for a full transcript!",
    heart1SuccessHeart2Fail: "Heart1 excelled at the game, lacing her spontaneous compositions with historical allusions that provoked Yuyuko to reveal lost treasures of poetry within her heart.  But Heart2 was alert to the dangers of success, perhaps aware that some of the secrets locked in the ghost princess' unreliable memory would be tragic beyond compare, and no good could come of provoking such mighty Youkai.  She whispered careful advice to her paramour, and when she felt the game had outstayed its welcome deftly diverted the conversation.",
    heart1FailHeart2Success: "Heart1 was sadly unequal to the task of inspiring Yuyuko with her poetry; her awful compositions seemed to put the ghost princess off the idea altogether and on to the evergreen subject of food.  But Heart2, seemingly intoxicated with the idea of uncovering the veiled history of these Youkai titans, pushed her paramour to continue the game and delve ever deeper.  Yuyuko's poetry smoothly took on a more modern tone, and the events the Youkai Sage related became recent indeed - humiliating and supposedly private details of the couple's own histories.  See page 32 for a full transcript!",
    bothFail: "Heart1 was sadly unequal to the task of inspiring Yuyuko with her poetry; her awful compositions seemed to put ghost princess off the idea altogether and on to the evergreen subject of food.  Heart2 encouraged this diversion, filling Yuyuko's cup and fetching dishes for her to try.  Witnesses report that a significant look passed between Yukari and Heart2, as if it was understood that the treasures of the Youkai titans' past were best lest uncovered, for some are painful and dangerous. <em>(Doesn't this seem fanciful even for Aya? - SK)</em>"

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioDangerousChildren"]] = {

    key: erg.constants["pohAttributeTestScenarioDangerousChildren"],
    heart1Attribute: erg.constants["pohAttributeSociability"],
    heart2Attribute: erg.constants["pohAttributeViciousness"],
    title: "Dangerous Children",
    description: "While raiding the Scarlet Devil Mansion's basement for a sample of Lady Remilia's famous wine collection, the couple encountered the Devil's younger sister, Flandre Scarlet.  The vampire terror was entertaining a guest that she had somehow dug up from the underground - murderous well-spirit Kisume - and was in a mood to play the sophisticated hostess.",
    bothSucceed: "There was no question of danmaku; even if the couple had the courage to face Flandre, battle would destroy the priceless wine collection, and they'd have Remilia to contend with.  Heart1 read the atmosphere well, effortlessly taking on the role of a guest at a western manor, putting Flandre in an excellent mood.  But Heart2, finding herself obliged to converse with the vicious well-spirit only to have her fingers bitten and head threatened with decapitation, could not maintain etiquette.  She smashed Kisume's bucket against the wall, wounding the little monster and scattering her collection of bones.  Enraged at the breach of her hospitality, the vampire threw all three of her guests back down the hole to the underground, and &quot;was in quite the mood for the rest of the day&quot; source Hong Meiling told this reporter from her bed in Eientei's medical ward.",
    heart1SuccessHeart2Fail: "There was no question of danmaku; even if the couple had the courage to face Flandre, battle would destroy the priceless wine collection, and they'd have Remilia to contend with.  Heart1 read the atmosphere well, effortlessly taking on the role of a guest at a western manor, putting Flandre in an excellent mood.  Heart2, finding herself obliged to converse with the vicious well-spirit only to have her fingers bitten and head threatened with decapitation, did a superb job of maintaining etiquette.  She resisted the overwhelming temptation to crush the weak but nasty well monster, and the tense afternoon ended without incident.",
    heart1FailHeart2Success: "But Heart1 proved herself ill-equipped for the role of guest in a western mansion (perhaps explaining why she needed to steal Remilia's wine).  Her breaches of etiquette wore away at the hostess' determination to act like an adult, bringing out childish, angry instincts.  This came to a head when Heart2, provoked by the well-spirit's biting and threats, smashed Kisume's bucket against a wall in frustration.  &quot;It was terrible!&quot; first respondent Hong Meiling told this reporter just before publication &quot;The basement is in shambles, Lady Remilia is enraged by the loss of her wine, and that damn well-spirit is loose somewhere.  Help me find her before she decapitates a villager, will you?&quot;",
    bothFail: "But Heart1 proved herself ill-equipped for the role of guest in a western mansion (perhaps explaining why she needed to steal Remilia's wine).  Her breaches of etiquette wore away at the hostess' determination to act like an adult, bringing out childish, angry instincts.  Only Heart2's saintly patience with the biting, threatening little beast of a well-spirit saved the afternoon, and the couple were obliged to make their excuses and retreat wine-less rather than risking an irreversible downturn in Flandre's mood."

}

//-Different/+Different

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioRabbits"]] = {

    key: erg.constants["pohAttributeTestScenarioRabbits"],
    heart1Attribute: erg.constants["pohAttributePettiness"],
    heart2Attribute: erg.constants["pohAttributeCleverness"],
    title: "Troublesome Rabbits",
    description: "It seems every couple in Gensokyo must learn the hard way that the Bamboo Forest of the Lost is a poor choice for an intimate moment unless Tewi Inaba is known to be elsewhere.  The Bunbunmaru News has not been able to learn exactly what humiliating hallucination the noted prankster and alleged crime lord obliged her accomplice Reisen Udongein Inaba to inflict on the couple.  We have been informed that photographs of their reaction are available for sufficient currency.",
    bothSucceed: "In terms of justice, the situation came out as a wash.  Not caring that Reisen's participation was reluctant at best, Heart1 attacked her with remarkable ferocity.  While the Red Eyes of Madness is a fierce opponent, she has difficulty fighting when her morale is poor and raised no meaningful defence.  Heart2 however saw through Tewi's deceptions and pursued her as true culprit, delivering a similarly savage beating as the shady rabbit was laughing far too hard to defend herself.",
    heart1SuccessHeart2Fail: "Not caring that Reisen's participation was reluctant at best, Heart1 attacked her with remarkable ferocity.  While the Red Eyes of Madness is a fierce opponent, she has difficulty fighting when her morale is poor and raised no meaningful defence.  Heart2 attempted to pursue Tewi but was easily outwitted and became lost in the forest; once again the true culprit escaped justice.",
    heart1FailHeart2Success: "Graciously acknowledging that Reisen was an unwilling instrument of the true culprit, Heart1 set off in pursuit of Tewi.  Heart2 followed, quickly devising a plan that saw the shady rabbit receive the beating she so richly deserved, despite her efforts to lose them in the forest.  Reisen was happy to escape injury, but told the Bunbunmaru News in strictest confidence &quot;You don't understand, since I didn't save her she'll go through with her threat and send those photos to Youmu.  It's all over!&quot;",
    bothFail: "Graciously acknowledging that Reisen was an unwilling instrument of the true culprit, Heart1 set off in pursuit of Tewi.  Heart2 joined the chase, but was tricked by the rabbit into leading her paramour the wrong way; once again the true culprit escaped justice."


}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioMountainBorder"]] = {

    key: erg.constants["pohAttributeTestScenarioMountainBorder"],
    heart1Attribute: erg.constants["pohAttributeHubris"],
    heart2Attribute: erg.constants["pohAttributeCourage"],
    title: "Mountain Border Talks",
    description: "Readers following the politics pages of the Bunbunmaru News will be aware that crucial territory negotiations between native god Suwako Moriya and Youkai Sage Yukari Yakumo have broken down as both parties have become more interested in drinking and assaulting passers-by for fun than in discharging their duties.  Our dating couple must have been too concerned with each other to keep current with the news this week, as they foolishly flew past the summit site at the foot of the Youkai Mountain, and were subjected to a barrage of drunken insults hurled their way by the blonde titans.",
    bothSucceed: "Her pride wounded by what is reported to have been a particularly vile slur from the frog-goddess, Heart1 attacked in a rage.  Heart2, faced with the choice of abandoning her paramour and joining her in a crushing defeat flew valiantly into the danmaku storm, preserving the honour of the couple if not their health.",
    heart1SuccessHeart2Fail: "Her pride wounded by what is reported to have been a particularly vile slur from the frog-goddess, Heart1 attacked in a rage.  But having not consulted with her date about this particular choice of activity, she found herself abandoned, Heart2 apparently flying at full speed away from the mountain and the apocalyptic storm of danmaku erupting on its flank.  A humiliating defeat for both parties, but at least Heart2 will be able to read this newspaper and eat solid food today.",
    heart1FailHeart2Success: "Heart1 successfully affected cool disinterest in the calumnies hurled her way, while her partner stood before her with valiant heart, ready to face the worst those two great powers might unleash.  Deprived of their fun, the drunken pair resolved to harass the shrine maidens instead, and the couple's date proceeded without incident.",
    bothFail: "Heart1 successfully affected cool disinterest in the calumnies hurled her way, but her polished indifference reportedly wavered when she noticed she was quite alone.  Heart2 was already half way back to the Hakurei shrine, hoping to hide behind Reimu until the storm passed.  Needless to say the abandoned Heart1 fared poorly as an object of the great powers' amusement."
    
}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioPenaltyGame"]] = {

    key: erg.constants["pohAttributeTestScenarioPenaltyGame"],
    heart1Attribute: erg.constants["pohAttributeViciousness"],
    heart2Attribute: erg.constants["pohAttributeExpression"],
    title: "Penalty Game",
    description: "While the Bunbunmaru News has been unable to uncover the substance of the bet that saw Heart2 obliged to shout elaborate praise for Heart1 throughout the valley, it must surely have been a grave matter if she felt so very compelled.",
    bothSucceed: "Heart1 clearly had the whip-hand, showing no mercy to her ostensible paramour.  Heart2 was obliged to shout praise over the course of four hours, through several danmaku battles, until entirely hoarse.  But such was her eloquence that it seemed a service to all Gensokyo; despite her poor choice of subject, it was poetry that set the heart of this reporter aflame.",
    heart1SuccessHeart2Fail: "Heart1 clearly had the whip-hand, showing no mercy to her ostensible paramour.  Heart2 was obliged to shout praise over the course of four hours, through several danmaku battles, until entirely hoarse.  This reporter is of the opinion that this was cruelty to all of Gensokyo, for the violence done by Heart2 to the language was an affront that quite reversed any sympathy one might have had for her plight.",
    heart1FailHeart2Success: "Heart1, though clearly in a position of control showed mercy and called the penalty game off after a minimally acceptable degree of punishment.  This was in truth a shame, as Heart2's eloquence was an adornment to the hills of Gensokyo; despite her poor choice of subject, it was poetry that set the heart of this reporter aflame.",
    bothFail: "Heart1, though clearly in a position of control showed mercy and called the penalty game off after a minimally acceptable degree of punishment.  This reporter is of the opinion that this was mercy for Gensokyo rather than the ostensible victim, for the violence done by Heart2 to the language was an affront that quite reversed any sympathy one might have had for her plight."
 

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioIsThatSo"]] = {

    key: erg.constants["pohAttributeTestScenarioIsThatSo"],
    heart1Attribute: erg.constants["pohAttributeJealousy"],
    heart2Attribute: erg.constants["pohAttributeSociability"],
    title: "Is that so?",
    description: "The couple's date took them to the Former Hell, where a rare gathering at the Palace of Earth Spirits proved too tempting an occasion to miss.  However the atmosphere was soured when the hostess, Lady Satori Komeiji, over-excited from company and liquor, began to regale the party with revelations of Heart2's real feelings for the women of Gensokyo.  The matter was aggravated by gate guard Hong Meiling, who encouraged Satori in both drinking and revelations.<br/><br/><em>Ms Alice - I assure Aya has fabricated most of this story, but since the substance of its effect on the couple's relationship is accurate, I won't bore you with the less sensational truth.</em>",
    bothSucceed: "Heart1 did not take the details of Heart2's real assessments of beauties such as Yuyuko Saigyouji, Yukari Yakumo, Marisa Kirisame and Alice Margatroid well, storming out of the palace and towards the furnaces, where the climate at least matched her mood.  Heart2, perhaps realising the futility of arguing with a satori, charmed the company with good humour and grace, only later making her excuses to slip away and deliver what must have been a grovelling apology.",
    heart1SuccessHeart2Fail: "Heart1 did not take the details of Heart2's real assessments of beauties such as Yuyuko Saigyouji, Yukari Yakumo, Marisa Kirisame and Alice Margatroid well, storming out of the palace and towards the furnaces, where the climate at least matched her mood.  Heart2 unwisely decided to share a piece of her mind with the party before pursuing her, gracelessly slathering her hostess with arguably deserved but certainly undignified invective, provoking general amusement.",
    heart1FailHeart2Success: "Heart1 nobly allowed that &quot;everyone's a bit in love with Alice and Marisa, so why should I expect Heart2 to feel differently?  We were all at their wedding though, so moving on is just a fact of life for all of us.&quot;  Heart2 deftly seized the opportunity to move the conversation on, keeping the neutral subject of the wedding alive for a good half-hour before provoking Satori to turn her eye on the secrets of Meiling's feelings on Sakuya Izayoi and Remilia Scarlet.",
    bothFail: "Heart1 nobly allowed that &quot;everyone's a bit in love with Alice and Marisa, so why should I expect Heart2 to feel differently?  We were all at their wedding though, so moving on is just a fact of life for all of us.&quot;  But her paramour missed this opportunity to move the conversation on gracefully, instead choosing to hurl vile invective at her hostess in an arguably just but undoubtedly gauche breach of etiquette.  The couple were obliged to make their excuses and leave early; this reporter only wishes she could bring you details of whatever awkward conversation they shared on the way home."

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioPlayingTheVillains"]] = {

    key: erg.constants["pohAttributeTestScenarioPlayingTheVillains"],
    heart1Attribute: erg.constants["pohAttributeHubris"],
    heart2Attribute: erg.constants["pohAttributeSociability"],
    title: "Playing the Villains",
    description: "The couple reportedly joined a party at the Hall of Dreams, and found themselves in the company of Gensokyo's foremost heroes, shrine maiden Reimu Hakurei and witch Marisa Kirisame, temporarily left to their own devices with their usual companions occupied elsewhere.  As the drinks flowed, conversation turned to how in all their long years of resolving incidents, the heroic pair had never actually teamed up - &quot;Even when Eientei first made trouble, you and Alice teamed up to beat me!&quot; complained the shrine maiden.  &quot;Easily fixed!&quot; the witch reportedly replied.  &quot;All we need is a pair of villains to cause a fuss, and we can beat them together.&quot;",
    bothSucceed: "Heart1 fell for Marisa's trap, taking on the villain's role with relish.  Perhaps she imagined herself a top-class rival to the all-conquering incident-resolvers, or perhaps she overestimated the extent to which the heroes' incompatible danmaku styles would hinder their power.  Only Heart2's determination and skill in keeping the affair a friendly joke, laughing throughout the defeat and pressing drinks on her opponents mid-fight, kept it from the brutal beating it easily could have been.",
    heart1SuccessHeart2Fail: "Heart1 fell for Marisa's trap, taking on the villain's role with relish.  Perhaps she imagined herself a top-class rival to the all-conquering incident-resolvers, or perhaps she overestimated the extent to which the heroes' incompatible danmaku styles would hinder their power.  Heart2's half-hearted efforts to keep the affair a friendly joke had little impact with the witch and miko's blood up, and the couple spent the rest of the party unconscious.",
    heart1FailHeart2Success: "Heart1 had little intention of being Master Sparked.  She couldn't refuse the challenge, but didn't taunt her opponents like a proper villain and fought conservatively, hoping the heroes' incompatible danmaku styles would irritate them into suspending the fight before their raw power crushed the couple.  Heart2 applied superb skill in keeping the affair a friendly joke, laughing throughout the defeat and pressing drinks on her opponents mid-fight.  While the party at large generally agreed the match was an entertaining spectacle, the couple managed to avert the massacre everyone else was hoping for.",
    bothFail: "Heart1 had little intention of being Master Sparked.  She couldn't refuse the challenge, but didn't taunt her opponents like a proper villain and fought conservatively, hoping the heroes' incompatible danmaku styles would irritate them into suspending the fight before their raw power crushed the couple.  But Heart2's half-hearted efforts to keep the affair a friendly joke had little impact with the witch and miko's blood up, and a savage beating was unleashed before Reimu and Marisa were sufficiently bored with their victory to return to their drinks."

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioForestOfMagicInfiltration"]] = {

    key: erg.constants["pohAttributeTestScenarioForestOfMagicInfiltration"],
    heart1Attribute: erg.constants["pohAttributeJealousy"],
    heart2Attribute: erg.constants["pohAttributeCourage"],
    title: "Forest of Magic Infiltration",
    description: "Reports from the Limited-Autonomy Forest Defence Dolls reveal that as part of their date the couple infiltrated the Forest of Magic late at night, seeking to raid Marisa Kirisame's crop of eldritch mushrooms.",
    bothSucceed: "Heart1 was caught stomping over the huge mushroom patch, trying to crush as many as she could, shouting &quot;Everything goes right for that damned witch, why should she have such a prodigious crop?&quot;  Only Heart2's valiant engagement of the Doll Army vanguard allowed the couple to retreat in good order.",
    heart1SuccessHeart2Fail: "Heart1 was caught stomping over the huge mushroom patch, trying to crush as many as she could, shouting &quot;Everything goes right for that damned witch, why should she have such a prodigious crop?&quot;  She might have still survived the incident without injury had her partner been guarding her back, but it seems Heart2 fled as soon as the legion of dolls appeared amongst the trees, dead eyes gleaming in the moonlight.  Heart1 consequently required extensive medical attention following her desperate escape from the forest.",
    heart1FailHeart2Success: "Heart1 maintained a cool attitude, ignoring the vast richness of Marisa's crop to calmly pick enough to be easily carried.  While the Doll Army responded quickly, Heart2 valiantly engaged them and protected her partner's back, allowing the couple to retreat in good order with their prize.",
    bothFail: "Heart1 maintained a cool attitude, ignoring the vast richness of Marisa's crop to calmly pick enough to be easily carried.  She would certainly have escaped cleanly with her prize despite the rapid response of the Doll Army had her partner protected her back, but it seems Heart2 fled as soon as the legion of dolls appeared amongst the trees, dead eyes gleaming in the moonlight.  Heart1 consequently escaped with only part of her payload, and left behind more than enough blood to provide certain proof of the operation."

}

erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioDoubleDate"]] = {

    key: erg.constants["pohAttributeTestScenarioDoubleDate"],
    heart1Attribute: erg.constants["pohAttributePettiness"],
    heart2Attribute: erg.constants["pohAttributeExpression"],
    title: "Double Date",
    description: "Despite seeking out the hidden peony field on the Youkai Mountain, the couple's hopes of a private moment were thwarted, as half-ghost Youmu Konpaku and moon rabbit Reisen Udongein Inaba had the same plan at the same time (and because the field is not far from the Bunbunmaru News office as the crow flies, but that's incidental to the drama of this article!).",
    bothSucceed: "Heart1 found herself in conversation with Reisen, and quickly deduced that she had been the one to suggest the peony field for a date.  Irrationally blaming the moon-rabbit for her own missed chance at an intimate moment, Heart1 began to speculate aloud that Youmu could never truly love anyone but her mistress Yuyuko.  Reisen's date was only saved by the efforts of Heart2, who in her kindness had been quietly coaching Youmu on the precise words with which to woo the rabbit. The resulting romantic scene was only slightly marred by Heart1's pettiness.",
    heart1SuccessHeart2Fail: "Heart1 found herself in conversation with Reisen, and quickly deduced that she had been the one to suggest the peony field for a date.  Irrationally blaming the moon-rabbit for her own missed chance at an intimate moment, Heart1 began to speculate aloud that Youmu could never truly love anyone but her mistress Yuyuko.  Somehow Heart2 made this even worse, having quietly coached Youmu on the precise words with which to woo the rabbit...the precisely wrong words.  This reporter was not sure exactly what happened when the Red Eyes of Madness and the swords of Hakugyokuro's gardener were unleashed, but it's safe to assume no-one escaped the scene intact in body or mind.",
    heart1FailHeart2Success: "Heart1 found herself in conversation with Reisen, and quickly deduced that she had been the one to suggest the peony field for a date.  Realising they were in the same position, she apologised to Reisen and smoothed over the awkwardness of the situation.  Heart2 in her kindness had been quietly coaching Youmu on the precise words with which to woo the rabbit; the resulting romantic moment gave the couples an excuse to part ways, and the evening was saved.",
    bothFail: "Heart1 found herself in conversation with Reisen, and quickly deduced that she had been the one to suggest the peony field for a date.  Realising they were in the same position, she apologised to Reisen and smoothed over the awkwardness of the situation.  The evening would have ended well if not for Heart2, in misguided kindness, quietly coaching Youmu on the precise words with which to woo the rabbit...the precisely wrong words.  Though one might argue the resulting misunderstanding and tears that cleared rabbit and half-ghost from the Peony field gave Heart2 exactly what she wanted."

}


erg[erg.constants["pohAttributeTestScenarios"]][erg.constants["pohAttributeTestScenarioVenom"]] = {

    key: erg.constants["pohAttributeTestScenarioVenom"],
    heart1Attribute: erg.constants["pohAttributeViciousness"],
    heart2Attribute: erg.constants["pohAttributeCleverness"],
    title: "Venom",
    description: "Retiring to Eientei's medical facilities after sustaining minor injuries while watching danmaku, the couple found poisonous doll youkai Medicine Melancholy and disease-manipulating spider Yamame Kurodani already there, sick from each others' powers.",
    bothSucceed: "Heart1, seeing the relatively weak but troublesome youkai in a position of vulnerability attacked instantly with short-ranged danmaku and fistfuls of dangerous pharmaceuticals.  The toxic pair were only saved by Heart2's deduction that their presence was a trap, aimed at contaminating Eientei's drug supply and afflicting as many of its rabbits as possible; she used a concussive-type danmaku to propel them out the side of the thin-walled building and into the bamboo forest, where according to witness Tewi Inaba &quot;They'll stay lost until they can pay me to let them out&quot;",
    heart1SuccessHeart2Fail: "Heart1, seeing the relatively weak but troublesome youkai in a position of vulnerability attacked instantly with short-ranged danmaku and fistfuls of dangerous pharmaceuticals.  Heart2 encouraged her, reportedly saying &quot;surely if they're here we don't have to worry about their toxins!&quot;  In doing so she fell into the doll and spider's trap, and the couple were afflicted by disease and poison even as they wreaked horrifying injury upon the toxic pair.  In the end, the four (and Eientei's medical capacity) were only saved when eyewitness Tewi Inaba graciously offered her &quot;emergency medicine supplies&quot; for a &quot;nominal fee.&quot;",
    heart1FailHeart2Success: "Heart1, though no doubt sorely tempted to dispense some brutal justice on the troublesome but vulnerable youkai, stayed her hand and made to leave them to their rest after securing some supplies.  But Heart2 deduced that the doll and spider's presence was a trap, aimed at contaminating Eientei's drug supply and afflicting as many of its rabbits as possible; she used a concussive-type danmaku to propel them out the side of the thin-walled building and into the bamboo forest, where according to witness Tewi Inaba &quot;They'll stay lost until they can pay me to let them out&quot;",
    bothFail: "Heart1, though no doubt sorely tempted to dispense some brutal justice on the troublesome but vulnerable youkai, stayed her hand and made to leave them to their rest after securing some supplies.  But Heart2 proteseted &quot;if it's here, we don't have to worry about their toxins!  Let's stay and patch ourselves up, they'll be glad of the company.&quot; As a result, the couple ended up poisoned and diseased, as intended by the wily youkai from the start; only by paying a &quot;nominal fee&quot; to passer-by Tewi Inaba for her &quot;emergency medical supplies&quot; were they able to recover."

}




//################################### WEEKS #################################################

//Note this is an array, not a standard object/hashmap like most of the repository stuff.  This is because these things aren't referred to individually from anywhere, there's just a function that checks the array each week for valid news items.

erg[erg.constants["pohScheduledNewsItems"]] = new Array();

erg[erg.constants["pohScheduledNewsItems"]].push({

        weekNumber: 1,
        category: erg.constants["pohNewsCategoryLetter"],
        type: erg.constants["pohNewsTypeMiscLetter"],
        image: erg.utilities.poh.getLetterImageURL("yukariLarge.jpg"),
        imageSmall: erg.utilities.poh.getLetterImageURL("yukari.jpg"),
        title: "Letter from Yukari",
        text: "<p>Dear Alice,</p><p>I have weakened the boundary between hearts, and soon the thoughts of Gensokyo's residents will turn to each other.</p><p>As you know, the people are lead to harmony and happiness by the virtuous example of their leader, but as an unmarried maiden myself I cannot serve in this regard.  I have let it be known that the famous Alice Margatroid, the woman who tamed the wild heart of Marisa Kirisame, will be happy to advise the lonely and lovelorn should they but send her a letter pleading their case.</p><p>Aya Shameimaru and Satori Komeiji have kindly consented to assist you at my request.</p><p>I hope to see Gensokyo filled with happy couples by next spring.  I'm sure, given the domestic bliss of the Margatroid-Kirisame house, you will agree that none should be obliged to live in paradise alone.</p><p>Yours,</p><p>Yukari Yakumo</p><p><em>You have until Week 52 to get as many couples into the True Love state as possible.</em></p>"

    });
    
    
erg[erg.constants["pohScheduledNewsItems"]].push({

        weekNumber: 1,
        category: erg.constants["pohNewsCategoryLetter"],
        type: erg.constants["pohNewsTypeMiscLetter"],
        image: erg.utilities.poh.getLetterImageURL("ayaLarge.jpg"),
        imageSmall: erg.utilities.poh.getLetterImageURL("aya.jpg"),
        title: "Letter from Aya",
        text: "<p>Alice,</p><p>I'll prepare a special collation of the Bunbunmaru News Social Pages and related articles for you each week, for your convenience in your romance project.  Please don't forget to tell the Youkai Sage I helped!</p><p> - Your honest and faithful Aya Shameimaru</p><p><em>Each week you'll receive articles in the Society, Danmaku and General tabs, describing both events you have set in motion and those randomly generated by the game.</em></p>"

});
    
    
    
erg[erg.constants["pohScheduledNewsItems"]].push({

        weekNumber: 1,
        category: erg.constants["pohNewsCategoryLetter"],
        type: erg.constants["pohNewsTypeMiscLetter"],
        image: erg.utilities.poh.getLetterImageURL("satoriLarge.jpg"),
        title: "Letter from Satori",
        imageSmall: erg.utilities.poh.getLetterImageURL("satori.jpg"),
        text: "<p>Ms Alice,</p><p>At the Sage's request, I have prepared notes detailing the hearts of a selection of Gensokyo's youkai and divine residents, information I believe you will find useful in guiding them to happiness.  Lady Yakumo was explicit upon whom I was permitted to use my power to collect this data; I dare not stray outside the bounds she has set.</p><p>Where I have given a number to represent a virtue or flaw, it is my estimate of the percentage chance the person in question will act in according to that drive in any given situation.  Hearts are fickle and a perfect prediction of behaviour is impossible.</p><p>I will update the record each week to reflect changes in the currents of each subject's heart, as well annotating the collation of the Bunbunmaru News Social Pages that Ms Shameimaru is providing you, that you might better understand which events lead to which changes.</p><p>It will be an honour to watch you at work, Seven-Coloured Puppeteer.  Please do not think the Komeiji family supports you only at the will of Yukari Yakumo.</p><p>Faithfully yours,</p><p>Satori Komeiji</p><p><em>Satori's power provides you with accurate data on the personalities of Gensokyo's lonely hearts.  Click on a portrait in the Lonely Hearts tab to see that character's full details.  Their characteristics are presented in terms of percentages (e.g. Mokou's Courage is 95, meaning she has a 95% chance to show Courage when called upon to do so by events).</em></p>"

});
    
erg[erg.constants["pohScheduledNewsItems"]].push({

        weekNumber: 1,
        category: erg.constants["pohNewsCategoryLetter"],
        type: erg.constants["pohNewsTypeMiscLetter"],
        image: erg.utilities.poh.getLetterImageURL("marisaLarge.jpg"),
        imageSmall: erg.utilities.poh.getLetterImageURL("marisa.jpg"),
        title: "Note from Marisa",
        text: "<p>'ello dear,</p><p>Sorry Yukari stuck you with this job, especially since from a certain point of view it might concievably be my fault.  Should only be a few hours every week anyway, right?  I'll use the time to obtain...procure...well, steal stuff that we might be able to use to beat her.  Also if you hear anything from the lab, it was nothing and I'll definitely have it cleaned up by the time you're done.</p><p>While you were sleeping Aya delivered letters from people asking for your advice, I added them to your pile.  You probably should read Satori's notes before you answer them though.</p><p>I'm out to grab us dinner, good luck!</p><p>Love M</p><p><em>Each week you will receive a random number of letters from lonely hearts looking for advice.  Send them on dates with girls you judge they have good compatibility with, and pick scenarios for them that have a good chance of raising the couple's Passion for each other (e.g. if Mokou has high Courage and Kaguya has a good reaction to successful Courage rolls, pick a date plan that involves Mokou rolling Courage where possible).</em></p><p><em>You should have two requests for advice in your Letters tab now.  Once you've familiarised yourself with the lonely hearts, click the requests to go through and give your advice, then click the &quot;End Week&quot; button once you're satisfied.  Next week, check the Society tab to see the results of your advice.</em></p>"

});

erg[erg.constants["pohScheduledNewsItems"]].push({

        weekNumber: erg.constants["pohRemiliaShopOpenWeekNumber"],
        category: erg.constants["pohNewsCategoryLetter"],
        type: erg.constants["pohNewsTypeMiscLetter"],
        image: erg.utilities.poh.getLetterImageURL("remilia.jpg"),
        imageSmall: erg.utilities.poh.getLetterImageURL("remiliaSmall.jpg"),
        title: "Letter from Remilia",
        text: "<p>Alice Margatroid,</p><p>I find myself in need of occupation, and your endeavour on behalf of the Youkai Sage is proving to be a source of much amusement.</p><p>Should you wish me to alter the fate of one of Gensokyo's maidens to involve her in your schemes, I would be happy to do so.  Of course, the assistance of such a power as myself will naturally diminish the glory of your accomplishments, but I judge you a woman more interested in the securing of a result than its contribution to your legend.</p><p>Yours sincerely,</p><p>Remilia Scarlet</p><p><em>The Request Remilia button now appears at the bottom of the Lonely Hearts tab.  You can spend Prestige to open the hearts of currently inactive characters.</em></p>"

});


erg[erg.constants["pohScheduledNewsItems"]].push({

    weekNumber: 27,
    category: erg.constants["pohNewsCategoryLetter"],
    type: erg.constants["pohNewsTypeMiscLetter"],
    image: erg.utilities.poh.getLetterImageURL("marisaLarge.jpg"),
    imageSmall: erg.utilities.poh.getLetterImageURL("marisa.jpg"),
    title: "Note from Marisa",
    text: "<p>'ello dear,</p><p>Just wanted to let you know that I think it's wonderful you're putting in so much work to make our friends and aquaintaces happy.  But no matter what happens, you've already made me happier in love than any other woman will ever be.</p><p>Also I'm not in the house right now because some of your things may have been incinerated in a <em>completely unforseeable</em> alchemy accident and I might be organising replacements.  But since you're busy architechting romances there'll be no net inconvenience, right?</p><p>Love M</p>"

});

erg[erg.constants["pohScheduledNewsItems"]].push({

    weekNumber: 40,
    category: erg.constants["pohNewsCategoryLetter"],
    type: erg.constants["pohNewsTypeMiscLetter"],
    image: erg.utilities.poh.getLetterImageURL("marisaLarge.jpg"),
    imageSmall: erg.utilities.poh.getLetterImageURL("marisa.jpg"),
    title: "Note from Marisa",
    text: "<p>'ello dear,</p><p>When this is over, I promise I'll take you on a holiday somewhere, just the two of us.  No rampaging vampires, no truth-obsessed oni, no crusading frog gods.  And no need to play matchmaker.</p><p>It might have to be after Sanae's funeral though, I think Yukari is going to actually kill her over Reimu.  Maybe people will stop sniggering at us about Patchouli then?</p><p>Love M</p>"

});


erg[erg.constants["pohScheduledNewsItems"]].push({

    weekNumber: 52,
    category: erg.constants["pohNewsCategoryLetter"],
    type: erg.constants["pohNewsTypeMiscLetter"],
    image: erg.utilities.poh.getLetterImageURL("marisaLarge.jpg"),
    imageSmall: erg.utilities.poh.getLetterImageURL("marisa.jpg"),
    title: "Note from Marisa",
    text: "<p>Well I guess we can't put it off any longer.  We're fighting her tonight, aren't we?  Ah, how powerful can she be really, we'll pull through.</p><p>Let's just hope I'm wrong about who she's chosen as her partner.</p><p>I love you.</p>"

});


//################################### NEWS #################################################

erg[erg.constants["pohNews"]] = {};

//Letter

erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeAdviceLetter"]] = {

    category: erg.constants["pohNewsCategoryLetter"],
    type: erg.constants["pohNewsTypeAdviceLetter"],
    title: "Request for advice from Heart1",
    text: "Help me, Alice!",
    baseChance: 33

};

//Satori

erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeHeartEntry"]] = {

    category: erg.constants["pohNewsCategorySatori"],
    type: erg.constants["pohNewsTypeHeartEntry"],
    title: "Heart1 has opened her heart to love!",
    text: "<p>Ms Alice,</p><p>I have detected a change in Heart1's heart.  She is no longer content to live alone, and will be seeking companionship.  Expect a letter from her soon.</p><p>Yours, Satori Komeiji</p>",
    baseChance: 3

};


//Bunbunmaru General

erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeAttributeChange"]] = {

    category: erg.constants["pohNewsCategoryBunbunmaruGeneral"],
    type: erg.constants["pohNewsTypeAttributeChange"],
    title: "",  //gets replaced by scenario
    text: "",   //gets replaced by scenario
    baseChance: 5

};

erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeTraitChange"]] = {

    category: erg.constants["pohNewsCategoryBunbunmaruGeneral"],
    type: erg.constants["pohNewsTypeTraitChange"],
    title: "",  //gets replaced by scenario
    text: "",   //gets replaced by scenario
    baseChance: 5

};

erg[erg.constants["pohNews"]][erg.constants["pohNewsTypePassionChange"]] = {

    category: erg.constants["pohNewsCategoryBunbunmaruGeneral"],
    type: erg.constants["pohNewsTypePassionChange"],
    title: "",  //gets replaced by scenario
    text: "",   //gets replaced by scenario
    baseChance: 5

};


//Bunbunmaru Danmaku

erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeDanmakuMatch"]] = {

    category: erg.constants["pohNewsCategoryBunbunmaruDanmaku"],
    type: erg.constants["pohNewsTypeDanmakuMatch"],
    title: "Victor1 &amp; Victor2 defeat Loser1 &amp; Loser2",  //gets replaced by scenario
    text: "",   //gets replaced by scenario
    baseChance: 25

};

//Bunbunmaru Society

erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeDate"]] = {

    category: erg.constants["pohNewsCategoryBunbunmaruSociety"],
    type: erg.constants["pohNewsTypeDate"],
    title: "Heart1 takes out Heart2!",
    baseChance: 25

};

erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeDateRefusal"]] = {

    category: erg.constants["pohNewsCategoryBunbunmaruSociety"],
    type: erg.constants["pohNewsTypeDateRefusal"],
    title: "Heart1 is refused by Heart2!",
    text: "Heart1 couldn't persuade Heart2 to spend a little time with her, no doubt a crushing blow to her confidence.  The Bunbunmaru News Social Pages thinks it's time for someone to write to Alice!"

};

erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeNoDateBreakup"]] = {

    category: erg.constants["pohNewsCategoryBunbunmaruSociety"],
    type: erg.constants["pohNewsTypeNoDateBreakup"],
    title: "Heart1 and Heart2 have broken up!",
    text: "Or at least so the Bunbunmaru Social Pages concludes!  They haven't been seen together in some time, it seems their passion has gone well off the boil."

};

erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeJealousyBreakup"]] = {

    category: erg.constants["pohNewsCategoryBunbunmaruSociety"],
    type: erg.constants["pohNewsTypeJealousyBreakup"],
    title: "JealousHeart has dumped the cheating CheatingHeart!",
    text: "Infuriated and heartbroken at a romantic rendezvous between Heart1 and Heart2, JealousHeart is now officially single again.  Friends and interested parties should take the opportunity to console her with sake and sweets."

};

erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeBadDateBreakup"]] = {

    category: erg.constants["pohNewsCategoryBunbunmaruSociety"],
    type: erg.constants["pohNewsTypeBadDateBreakup"],
    title: "Heart1 and Heart2 call it off after disastrous date!",
    text: "<p>It seems that only one bad date stands between happiness and misery!  After a day full of bitter mishaps, misundersandings and misanthropy, Heart1 and Heart2 have parted acrimoniously.</p><p>The Bunbunmaru News Social Pages would never <em>accuse</em> anyone of orchestrating these events, but we have to wonder if the vampire who controls fate can account for her movements during the time of the date?  And if not, who paid her to interfere?</p>"

};

erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeRelationshipChange"]] = {

    category: erg.constants["pohNewsCategoryBunbunmaruSociety"],
    type: erg.constants["pohNewsTypeRelationshipChange"],
    title: "Heart1 & Heart2 now: RelationshipLabel",
    text: "<p>The Bunbunmaru News Social Pages are excited to confirm that Heart1 and Heart2's relationship has blossomed after their recent date.  Their passion puts even Marisa and Alice to shame!</p><p>We tracked Heart1 down for comment, and she had this to say: HeartComment1</p><p>This reporter also managed to find Heart2, who added this to the record: HeartComment2</p><p><em>Alice has earned <strong>PrestigeTotal</strong> Prestige for this success.</em></p>"

};


erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeRelationshipChangeCouple"]] = {

    category: erg.constants["pohNewsCategoryBunbunmaruSociety"],
    type: erg.constants["pohNewsTypeRelationshipChangeCouple"],
    title: "Heart1 & Heart2 are serious!  Start thinking about what you'll wear to the wedding!",
    text: "<p>The Bunbunmaru News Social Pages are pleased to announce that Heart1 and Heart2 are now openly a committed couple; we hope their happiness gives hope to all the lonely hearts amongst our readers.</p><p>While nothing has been formally announced, is it too much to hope for another wedding soon?  Those of you who remember the Kirisame-Margatroid wedding will recall it was one of Gensokyo's greatest celebrations.  Those who don't remember can discover what they got up to under the influence of alcohol by requesting the relevant back issues of the Bunbunmaru news!</p><p>When approached for confirmation of the happy couple's status, Heart1 had this to say: HeartComment1</p><p>For her part, Heart2 later told the Bunbunmaru News: HeartComment2</p><p><em>Alice has earned <strong>PrestigeTotal</strong> Prestige for this success.</em></p>"

};

erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeRelationshipChangeTrueLove"]] = {

    category: erg.constants["pohNewsCategoryBunbunmaruSociety"],
    type: erg.constants["pohNewsTypeRelationshipChangeTrueLove"],
    title: "Heart1 & Heart2: True Love!",
    text: "<p>The Bunbunmaru News Social Pages are overjoyed to name Heart1 and Heart2 as an official Gensokyoian example of true love, joining the famed Alice and Marisa!</p><p>Such is Heart1 and Heart2's devotion to each other that there's little hope of hearing of them in the Bunbunmaru News Social Pages, as their days of romantic adventurism are now happily behind them.  But fear not, loyal readers, for surely the spring will bring a beautiful wedding amongst the cherry blossoms, rivalling even the Kirisame-Margatroid ceremony?</p><p>When this reporter tracked down the deliriously happy Heart1 for words to immortalise the happy occasion, she said:  HeartComment1</p><p>Her beloved Heart2, graciously sparing some time for the Bunbunmaru News, had this to say:  HeartComment2</p><p>When asked whether they'd been approached to organise wedding rituals, the Hakurei and Moriya shrine maidens declined to comment, and began to bicker about just what if anything Reimu was doing with the Youkai Sage at the last wedding party.</p><p><em>Ms Alice - congratulations on deftly accomplishing this union of hearts.  As I anticipate no further changes in their situation, I will be removing them from my reports.  I am sure the Youkai Sage will be very pleased with your achievement.  Yours, Satori Komeiji.</em></p><p><em>Alice has earned <strong>PrestigeTotal</strong> Prestige for this success.</em></p>"

};

//################################### RELATIONSHIP TYPE REPOSITORY #################################################

erg[erg.constants["pohRelationshipTypes"]] = {};

erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypePotential"]] = {

    key: erg.constants["pohRelationshipTypePotential"],
    level: 0,
    label: "Potential",
    description: "There might be something there, but they'll need to see more of each other to know the truth.",
    relationshipDateChance: 0,
    dateAcceptanceModifier: 20,
    intimacyModifier: 0,
    jealousyModifier: -20,
    outsiderRefusalModifier: 0,
    noDateBreakupThreshold: 4,
    basePrestige: 0,
    compatibilityPrestigeModifier: 0

};

erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeItem"]] = {

    key: erg.constants["pohRelationshipTypeItem"],
    level: 1,
    label: "An item!",
    description: "Anyone who reads the society pages knows they're involved!",
    relationshipDateChance: 33,
    dateAcceptanceModifier: 40,
    intimacyModifier: 20,
    jealousyModifier: 20,
    outsiderRefusalModifier: 40,
    noDateBreakupThreshold: 3,
    basePrestige: 50,
    compatibilityPrestigeModifier: 0.5,
    newsText: "<p>In this modern Gensokyo, you can't make any assume that two ladies are an item just because you photographed them together on a date.  But, dear readers, let me encourage you to make any assumptions you want about Heart1 and Heart2!</p><p>The pair are reported by friends to be caught in the throes of new love, a far cry from the typical cool and detached dating in Gensokyo's danmaku scene.</p><p>Approached to confirm or deny, Heart1 told this reporter the following: HeartComment1</p><p>Given an opportunity to add her voice to the record, Heart2 came back with: HeartComment2</p><p><em>Alice has earned <strong>PrestigeTotal</strong> Prestige for this success.</em></p>"

};

erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeFriendsWithBenefits"]] = {

    key: erg.constants["pohRelationshipTypeFriendsWithBenefits"],
    level: 1,
    label: "Friends with benefits",
    description: "Friends don't let friends wake up alone.",
    relationshipDateChance: 33,
    dateAcceptanceModifier: 20,
    intimacyModifier: 40,
    jealousyModifier: -20,
    outsiderRefusalModifier: 20,
    noDateBreakupThreshold: 5,
    basePrestige: 50,
    compatibilityPrestigeModifier: 0.5,
    newsText: "<p>Connections of the inseparable Heart1 and Heart2 aren't prepared to officially out them as a couple, but have told the Bunbunmaru News in confidence that it's &quot;getting too close for comfort.&quot;  While the pair claim to simply be friends enjoying occasional complication-free intimacy, their other friends are reportedly feeling a strong &quot;us and them&quot; divide.</p><p>Approached by this reporter, Heart1's comment was: HeartComment1</p><p>Later, we managed to track down Heart2, who had this message for our readers: HeartComment2</p><p><em>Alice has earned <strong>PrestigeTotal</strong> Prestige for this success.</em></p>"

};


erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeFoesWithBenefits"]] = {

    key: erg.constants["pohRelationshipTypeFoesWithBenefits"],
    level: 1,
    label: "Foes with benefits",
    description: "They still hate each other, they just have a very particular kind of periodic truce.",
    relationshipDateChance: 33,
    dateAcceptanceModifier: 0,
    intimacyModifier: 60,
    jealousyModifier: -40, 
    outsiderRefusalModifier: 0,
    noDateBreakupThreshold: 8,
    basePrestige: 50,
    compatibilityPrestigeModifier: 0.5,
    newsText: "<p>The border between hate and love is thin in Gensokyo even when the Youkai Sage isn't messing with it for her own amusement; reports say feuding foes Heart1 and Heart2 have been crossing it frequently.  While the pair's public facade of loathing and violence hasn't slipped, reliable witnesses state moments of tenderness and intimacy (or at least what would pass for such by their standards) have begun to infiltrate the bloodshed.</p><p>When presented with these allegations, Heart1 had this to say: HeartComment1</p><p>The Bunbunmaru news also spoke with her alleged lover Heart2, who supplied the following comment: HeartComment2</p><p><em>Alice has earned <strong>PrestigeTotal</strong> Prestige for this success.</em></p>"

};

erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeExtremelyCloseSisters"]] = {

    key: erg.constants["pohRelationshipTypeExtremelyCloseSisters"],
    level: 1,
    label: "Extremely close sisters",
    description: "This is probably OK in Gensokyo?",
    relationshipDateChance: 50,
    dateAcceptanceModifier: 100,
    intimacyModifier: 20,
    jealousyModifier: -80,
    outsiderRefusalModifier: 40,
    noDateBreakupThreshold: 52,
    basePrestige: 50,
    compatibilityPrestigeModifier: 0.5,
    newsText: "<p>Evidence that the already close relationship between sisters Heart1 and Heart2 has blossomed into something more significant has reignited debate on whether Gensokyo's mighty should conduct themselves according to human morality and social customs.  Some insist that gods, heroes and youkai have lives too idiosyncratic to be constrained by any general rule, and that what's appropriate for one set of sisters may not be for another.  Others believe that Gensokyo cannot survive if there's one rule for the humans and no rule for the mighty, hence certain sisters should probably stay out of each others' beds despite whatever unique family circumstances they might possess.</p><p>It is the editorial position of the Bunbunmaru News that the debate is more interesting than any resolution, and thus we commit to representing both sides equally in our pages.  Furthermore we deny accusations by the Kakashi Spirit News and others that the entire debate is our own fabrication.</p><p>Asked to confirm the incident that sparked the political tempest, Heart1 told this reporter: HeartComment1</p><p>Not content with half the story, we located Heart2, who shared the following: HeartComment2</p><p><em>Alice has earned <strong>PrestigeTotal</strong> Prestige for this success.</em></p>"

};

erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeWorkplaceRomance"]] = {

    key: erg.constants["pohRelationshipTypeWorkplaceRomance"],
    level: 1,
    label: "Workplace romance",
    description: "One assumes the power imbalance in their working life is inversed for their private time.",
    relationshipDateChance: 50,
    dateAcceptanceModifier: 100,
    intimacyModifier: 40,
    jealousyModifier: -60,
    outsiderRefusalModifier: 40,
    noDateBreakupThreshold: 2,
    basePrestige: 50,
    compatibilityPrestigeModifier: 0.5,
    newsText: "<p>With Heart1 and Heart2 spotted recently in a decidedly unprofessional context, the Bunbunmaru News has to ask: is workplace romance endemic in Gensokyo's factions?  While outside Tengu and Kappa society standards of professionalism technically don't apply, most local organisations are functionally warbands lead by a powerful and charismatic master; their coercive power over their uniformly attractive underlings can only provoke the highest degree of scrutiny from the press.</p><p>While those in question are ostensibly adults and free to romance each other should they please, the Bunbunmaru News will be watching very carefully to see if any of these relationships show signs of legitimate, enduring affection, or whether it's just the price of fealty in the Youkai Sage's Gensokyo.</p><p>Heart1 was asked whether she is indeed involved with Heart2, and had this answer for us: HeartComment1</p><p>We put the same question to Heart2 and received this reply: HeartComment2</p><p><em>Alice has earned <strong>PrestigeTotal</strong> Prestige for this success.</em></p>"

};


erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeCouple"]] = {

    key: erg.constants["pohRelationshipTypeCouple"],
    level: 2,
    label: "Couple",
    description: "Their friends no longer think of them as separate people.",
    relationshipDateChance: 66,
    dateAcceptanceModifier: 80,
    intimacyModifier: 40,
    jealousyModifier: 40,
    outsiderRefusalModifier: 60,
    noDateBreakupThreshold: 2,
    basePrestige: 200,
    compatibilityPrestigeModifier: 2

};


erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeTrueLove"]] = {

    key: erg.constants["pohRelationshipTypeTrueLove"],
    level: 3,
    label: "True Love",
    description: "A union that has stood the test of time and promises an eternity of happiness.  A great victory for Alice!",
    relationshipDateChance: 0,
    dateAcceptanceModifier: 0,
    intimacyModifier: 0,
    jealousyModifier: 0,
    outsiderRefusalModifier: 0,
    noDateBreakupThreshold: 0,
    basePrestige: 500,
    compatibilityPrestigeModifier: 5

    //Stats zeroed as this relationship is never active.  They'd be like 100/100/100/100/100/52 or something ridiculous.
};



//################################### ATTRIBUTE CHANGE SCENARIO REPOSITORY #################################################

erg[erg.constants["pohAttributeChangeScenarios"]] = {}

erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioGainCleverness"]] = {

    key: erg.constants["pohAttributeChangeScenarioGainCleverness"],
    attribute: erg.constants["pohAttributeCleverness"],
    change: erg.constants["pohAttributeChangeScenarioGainValue"],
    title: "Heart1 hits the books at Scarlet Devil's library",
    text: "<p>Heart1 has recently been spotted at the library of the Scarlet Devil Mansion, engaged in a program of study under the tuition of the Great Unmoving Library herself, Patchouli Knowledge.  It's not known exactly what matter is the subject of inquiry, but Heart1 is carrying herself with the dignified air of one of cultivated intellect.</p><p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeCleverness"]].label + " raises by " + erg.constants["pohAttributeChangeScenarioGainValue"] + " to HeartNewAttributeValue1</em></p>"

};

erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioGainCourage"]] = {

    key: erg.constants["pohAttributeChangeScenarioGainCourage"],
    attribute: erg.constants["pohAttributeCourage"],
    change: erg.constants["pohAttributeChangeScenarioGainValue"],
    title: "Heart1 pranks the Hakurei donation box, somehow avoids death",
    text: "<p>Heart1 provoked a rampage from the Hakurei shrine maiden this morning by &quot;donating&quot; illusionary fox-money at the shrine.  Her hopes raised only to find leaves and twigs in place of desperately needed funds, Reimu scoured the area with devastating barrages of danmaku, wounding the intrepid prankster.</p><p>It's not known what Heart1 hoped to achieve by waking the invincible battle-rage of the Hakurei, but everyone agrees that her courage is greater than previously thought.</p><p>Sources confirm that a substantial quantity of hard cash was mysteriously gapped into the shrine's donation box around midday, and that the miko consequently exterminated no-one during the course of the afternoon.</p><p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeCourage"]].label + " raises by " + erg.constants["pohAttributeChangeScenarioGainValue"] + " to HeartNewAttributeValue1</em></p>"

};

erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioGainExpression"]] = {

    key: erg.constants["pohAttributeChangeScenarioGainExpression"],
    attribute: erg.constants["pohAttributeExpression"],
    change: erg.constants["pohAttributeChangeScenarioGainValue"],
    title: "Heart1 guest editor on today's Bunbunmaru news",
    text: "<p>Today Heart1 assisted with the preparation of the very newspaper you hold in your hands, loyal reader!  Not only did she assist with fact-checking and fight off attempts to cover up today's scoops, she learned to appreciate the beauty of moulding (totally accurate!) reports to suit the taste of our audience.</p><p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeExpression"]].label + " raises by " + erg.constants["pohAttributeChangeScenarioGainValue"] + " to HeartNewAttributeValue1</em></p>"

};

erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioGainSociability"]] = {

    key: erg.constants["pohAttributeChangeScenarioGainSociability"],
    attribute: erg.constants["pohAttributeSociability"],
    change: erg.constants["pohAttributeChangeScenarioGainValue"],
    title: "Heart1 shows refinement at Hakugyokuro",
    text: "<p>Yesterday evening Heart1 was a guest at the Netherworld's Hakugyokuro, enjoying an evening of moon-viewing while the lovely Yuyuko Saigyouji instructed her in the etiquette of Heian times.  Look out for her to make an elegant impression at the next party!</p><p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeSociability"]].label + " raises by " + erg.constants["pohAttributeChangeScenarioGainValue"] + " to HeartNewAttributeValue1</em></p>"

};

erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioGainHubris"]] = {

    key: erg.constants["pohAttributeChangeScenarioGainHubris"],
    attribute: erg.constants["pohAttributeHubris"],
    change: erg.constants["pohAttributeChangeScenarioGainValue"],
    title: "Heart1 insufferable after heavenly day-trip",
    text: "<p>Like many who have made a trip to the heavens, Heart1 is reportedly insufferably tiresome about it.  Friends say in confidence that she looks down on the peaceful and easygoing life of the Celestials, but won't stop talking about them anyway.</p><p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeHubris"]].label + " raises by " + erg.constants["pohAttributeChangeScenarioGainValue"] + " to HeartNewAttributeValue1</em></p>"

};

erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioGainJealousy"]] = {

    key: erg.constants["pohAttributeChangeScenarioGainJealousy"],
    attribute: erg.constants["pohAttributeJealousy"],
    change: erg.constants["pohAttributeChangeScenarioGainValue"],
    title: "Heart1 seethes at the Forest of Magic",
    text: "<p>Heart1 spent much of yesterday in conversation with the witch Marisa Kirisame while looking for a rare breed of mushroom in the Forest of Magic.  Oddly she seemed to end the day sullen and envious; it's not as if there's any reason to be jealous of Marisa.  What does she have that the rest of Gensokyo doesn't, other than beauty, wits, popularity, overwhelming magical power, a perfect wife, an apparent license to steal whatever takes her fancy...</p><p>The Bunbunmaru News would like to take this opportunity to remind Gensokyo that Marisa Kirisame is not the fastest flyer.</p><p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeJealousy"]].label + " raises by " + erg.constants["pohAttributeChangeScenarioGainValue"] + " to HeartNewAttributeValue1</em></p>"

};

erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioGainPettiness"]] = {

    key: erg.constants["pohAttributeChangeScenarioGainPettiness"],
    attribute: erg.constants["pohAttributePettiness"],
    change: erg.constants["pohAttributeChangeScenarioGainValue"],
    title: "Heart1 learns to hate children, rabbits, fun",
    text: "<p>Having spent an entire day being victimised by the pranks of Tewi Inaba at the human village, Heart1 had harsh words for an innocent group of human children today.  They had apparently asked her to fly up to catch a lost kite that was heading in the direction of the Youkai Mountain, and received a curmudgeonly suggestion to learn to fly themselves.</p><p>The Bunbunmaru News would like to remind our loyal readers that taunting defenceless humans can bring down the wrath of the Hakurei and Moriya shrine maidens, or worse inspire children to grow up like them.</p><p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributePettiness"]].label + " raises by " + erg.constants["pohAttributeChangeScenarioGainValue"] + " to HeartNewAttributeValue1</em></p>"

};

erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioGainViciousness"]] = {

    key: erg.constants["pohAttributeChangeScenarioGainViciousness"],
    attribute: erg.constants["pohAttributeViciousness"],
    change: erg.constants["pohAttributeChangeScenarioGainValue"],
    title: "Heart1 temporarily reduces Mischevous Fairy count from 3 to 0",
    text: "<p>Heart1 declared this week that she was &quot;at her limit,&quot; &quot;fed up,&quot; and &quot;no longer inclined to mercy.&quot;  Reliable witnesses have her killing the Three Mischevous Fairies at least twelve times each this week, with cries of &quot;Milk this, Sunny!&quot; &quot;Murdering you is child's play, Luna!&quot; and &quot;Sapphire, ey?  You'll be the star of my jewellery collection!&quot;</p><p>While the Bunbunmaru News advocates fairy extermination in most cases, we would like to remind our beloved readers that it rarely achieves anything outside the short term.</p><p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeViciousness"]].label + " raises by " + erg.constants["pohAttributeChangeScenarioGainValue"] + " to HeartNewAttributeValue1</em></p>"

};

erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioGainLoneliness"]] = {

    key: erg.constants["pohAttributeChangeScenarioGainLoneliness"],
    attribute: erg.constants["pohAttributeLoneliness"],
    change: erg.constants["pohAttributeChangeScenarioGainValue"],
    title: "Heart1 harrowed by errand",
    text: "<p>While carousing at the Hakurei shrine, Heart1 generously volunteered to fly down to the village to fetch more food for the company.  Pressed to speed up the delivery by a ravenous Yuyuko Saigyouji but herself encumbered by an intoxicated shrine maiden, the Youkai Sage opened one of her gaps for Heart1's convenience.</p><p>The Bunbunmaru News would like to remind its precious and irreplaceable readers that no good can come of seeing the infinite darkness between all things, empty and yet full of pitiless, indifferent eyes.  One should not be obliged to dwell on the decay at the heart of the universe, the grinding and invincible weight of time that will corrupt and break everything good and bright in this world.  Nor should any of our readers be forced to understand the awful nothingness from which reality was born and which entropy will return it to, leaving only the Youkai Sage to laugh and create a new universe of terror, pain and bittersweet love with which to amuse her alien and ineffable mind.  And certainly never for the sake of some extra mochi.</p><p>Interested parties should note that Heart1 will be feeling quite lonely now, and would certainly appreciate a drink and the warm embrace of any living thing - at least if the Bunbunmaru News' experience is anything to go by.</p><p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeLoneliness"]].label + " raises by " + erg.constants["pohAttributeChangeScenarioGainValue"] + " to HeartNewAttributeValue1</em></p>"

};


erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioLoseCleverness"]] = {

    key: erg.constants["pohAttributeChangeScenarioLoseCleverness"],
    attribute: erg.constants["pohAttributeCleverness"],
    change: erg.constants["pohAttributeChangeScenarioLoseValue"],
    title: "Heart1 generously donates knowledge and expertise to the Black-White Witch",
    text: "<p>Heart1 was heard complaining earlier today that a book was stolen from her overnight, but that she can't recall which book or what was in it.</p><p>In unrelated news, Marisa Kirisame boasted to the Bunbunmaru News of a groundbreaking new study technique - &quot;It turns out it's possible to extract knowledge from someone's mind and transplant it into your own by enchanting the book they learned it from and taking it into your custody.  I believe this method heralds the dawn of a new era in my profession of archaeology.  Eh...no, it's useless for archaeologists, is anthropology the word I'm looking for?  Well, it's good for a thief.  I expected Patchouli to finally snap and murder me if I used it at the Scarlet Devil library, so I tested it out on some poor random sap instead.&quot;</p><p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeCleverness"]].label + " drops by " + erg.constants["pohAttributeChangeScenarioLoseValue"] + " to HeartNewAttributeValue1</em></p>"

};

erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioLoseCourage"]] = {

    key: erg.constants["pohAttributeChangeScenarioLoseCourage"],
    attribute: erg.constants["pohAttributeCourage"],
    change: erg.constants["pohAttributeChangeScenarioLoseValue"],
    title: "Heart1 dabbles briefly in childcare",
    text: "<p>Heart1 today was obliged to make good on a drunken boast that she could trivially charm and rehabilitate the unfortunate younger sister of the Scarlet Devil, Flandre Scarlet.  At time of writing, she was seen stumbling back towards her home, her trembling too violent for safe flight.</p><p>When asked for comment, Remilia Scarlet brushed aside this reporter's concerns: &quot;Why, I'd call it quite the success!  My sister rarely opens up so quickly to a playmate; Heart1 did well indeed to gain such rapid insight into Flandre's history and internal life.  I'm sure she'll be back in a few days.  In the meantime, my sister is very fond of birds, can I oblige you to spend the evening for her sake?&quot;</p><p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeCourage"]].label + " drops by " + erg.constants["pohAttributeChangeScenarioLoseValue"] + " to HeartNewAttributeValue1</em></p>"

};

erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioLoseExpression"]] = {

    key: erg.constants["pohAttributeChangeScenarioLoseExpression"],
    attribute: erg.constants["pohAttributeExpression"],
    change: erg.constants["pohAttributeChangeScenarioLoseValue"],
    title: "Heart1 attempts to outdrink Suika Ibuki, may never regain full powers of speech",
    text: "<p>Last night Suika Ibuki stormed a celebration at the Moriya shrine, dressed as a Hakurei miko and challenging all present to a drinking match.  She defeated all the company in sequence until only Heart1 was left to stand against her.  Unsatisfied with the performance of her previous opponents, Sukia would not allow the last to surrender to the blessed mercy of unconsciousness, obliging her to drink until literally paralysed.</p><p>Heroically Heart1 did emerge from the Moriya shrine today and attempt to go about her business, but suffered great trouble in making herself understood, her speech slurred and her handwriting nigh-illegible.</p><p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeExpression"]].label + " drops by " + erg.constants["pohAttributeChangeScenarioLoseValue"] + " to HeartNewAttributeValue1</em></p>"

};

erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioLoseSociability"]] = {

    key: erg.constants["pohAttributeChangeScenarioLoseSociability"],
    attribute: erg.constants["pohAttributeSociability"],
    change: erg.constants["pohAttributeChangeScenarioLoseValue"],
    title: "Heart1 swears off parties, probably means it for now",
    text: "<p>Heart1 woke this morning near the heart of a nuclear fusion reactor.  Reports indicate that she was happy to find herself fully clothed, but upset that the clothes in question were not her own.  The resulting tirade is said to have rivalled the reactor itself for heat production, in which she swore never again to be lead into irresponsible madness by Gensokyo's hard-drinking party set.</p><p>Utsuho Reiuji had this to say:  &quot;Oh yes, Ms Heart1 was very nice to me at that party, complementing me on my cloak and skirt.  We promised to swap clothes and do each others' jobs for a day, only I forgot what she said her job was and just burned things randomly on the surface until Ms Sanae chased me away.  Don't tell Lady Satori!&quot;</p><p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeSociability"]].label + " drops by " + erg.constants["pohAttributeChangeScenarioLoseValue"] + " to HeartNewAttributeValue1</em></p>"

};

erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioLoseHubris"]] = {

    key: erg.constants["pohAttributeChangeScenarioLoseHubris"],
    attribute: erg.constants["pohAttributeHubris"],
    change: erg.constants["pohAttributeChangeScenarioLoseValue"],
    title: "Heart1 works a day as a maid, votes Sakuya Izayoi woman of the year",
    text: "<p>After an incident involving Western red wine, chandeliers and duelling grandfather clocks, Heart1 was obliged today to put in a shift as a maid at the Scarlet Devil Mansion.  She ended the day exhausted, but full of praise for the head maid, Sakuya Izayoi.</p><p>&quot;You might think infinite time would make her job easy, but you can't comprehend the sheer scope of her labours until you've attempted them yourself.  Not even the passage of eons between each of Remilia's ridiculous demands could render them reasonable.  If, every morning, she took a few million years to evolve a species of fairy perfectly suited to that day's tasks and bred them to numbers surpassing the stars in the sky, she would not have adequate assistance for the challenges that face her.  I am humbled.&quot;<p><p>The Bunbunmaru News would like to remind its cherished readers that our editorial and advertising functions are separate, and encourage them to view the special &quot;Exciting Careers at the Scarlet Devil Mansion&quot; liftout in today's issue.</p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeHubris"]].label + " drops by " + erg.constants["pohAttributeChangeScenarioLoseValue"] + " to HeartNewAttributeValue1</em></p>"

};

erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioLoseJealousy"]] = {

    key: erg.constants["pohAttributeChangeScenarioLoseJealousy"],
    attribute: erg.constants["pohAttributeJealousy"],
    change: erg.constants["pohAttributeChangeScenarioLoseValue"],
    title: "Heart1 listens patiently to Youmu Konpaku, gains perspective",
    text: "<p>Heart1 spent much of today bailed up in the corner of a village tea-house by an embittered Youmu Konpaku, obliged to listen to her tales of woe.  The ordinarily stoic samurai was apparently still intoxicated from the night before and ready to unburden all the troubles of serving Yuyuko Saigyouji on her captive audience.</p><p>&quot;I learned a few things I'd rather not know;&quot; a shaken Heart1 confided to the Bunbunmaru News &quot;It's not like I don't have my own troubles, but they somehow seemed less significant when I finally emerged from that dingy tavern into the light of day.  That ghost's sense of humour...there's something terribly wrong there.&quot;</p><p>Youmu herself was seen later that day happily following her mistress, as if her duty were lighter than a feather.</p><p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeJealousy"]].label + " drops by " + erg.constants["pohAttributeChangeScenarioLoseValue"] + " to HeartNewAttributeValue1</em></p>"

};

erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioLosePettiness"]] = {

    key: erg.constants["pohAttributeChangeScenarioLosePettiness"],
    attribute: erg.constants["pohAttributePettiness"],
    change: erg.constants["pohAttributeChangeScenarioLoseValue"],
    title: "Heart1 chills out on the banks of the Sanzu",
    text: "<p>Heart1 was seen today lazing about in the company of the death goddess Komachi Onozuka, on the banks of Komachi's ostensible workplace, the Sanzu River.  Watching the clouds roll past and the souls of the unjudged dead waiting for a ferry that would never come, they spoke of nothing in particular and accomplished even less.</p><p>&quot;Well, of course I need to do my job&quot; Komachi commented later to the Bunbunmaru news, half-heartedly cleaning her boat while the queue of waiting souls grew ever longer.  &quot;But Heart1, she's wound far too tight.  I just helped her unpack her baggage, let go of the little things.  What's the point of living in paradise if you're a slave to trivial concerns?&quot;</p><p>The Bunbunmaru News suggests to any human readers with recently deceased relatives that they offer up a sacrifice of something interesting to keep their spirits occupied during their extended stay by the Sanzu - perhaps you could burn a second copy of this newspaper on their behalf?</p><p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributePettiness"]].label + " drops by " + erg.constants["pohAttributeChangeScenarioLoseValue"] + " to HeartNewAttributeValue1</em></p>"

};

erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioLoseViciousness"]] = {

    key: erg.constants["pohAttributeChangeScenarioLoseViciousness"],
    attribute: erg.constants["pohAttributeViciousness"],
    change: erg.constants["pohAttributeChangeScenarioLoseValue"],
    title: "Heart1 aids Cirno against the Illusionary Border Team, bitterly regrets it",
    text: "<p>Heart1 is spending today convalescing with severe injuries after a brutal and merciless mauling yesterday at the hands of the Youkai Sage and Hakurei miko.  She encountered them in the process of opening hostilities against the ice fairy Cirno, and for reasons now lost to concussion and psychological trauma attempted to even the odds.</p><p>The odds proved unevenable.</p><p>Lady Satori Komeiji volunteered to act as an interpreter when the Bunbunmaru News went to interview Heart1 earlier this morning, as her injuries prevent her from vocalising anything but piteous moans.</p><p>&quot;I've fought Yukari and Reimu before; I suppose everyone has.  But yesterday they held nothing back, unleashing all their cruel majesty, the terrible fruit of their unconquerable union.  Whatever Cirno did or said to them, she didn't deserve that.  No-one could ever deserve that.&quot;</p><p>&quot;This must be what a fairy or human feels like before us; I don't think I can hurt anyone the way I once did.&quot;</p><p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeViciousness"]].label + " drops by " + erg.constants["pohAttributeChangeScenarioLoseValue"] + " to HeartNewAttributeValue1</em></p>"

};

erg[erg.constants["pohAttributeChangeScenarios"]][erg.constants["pohAttributeChangeScenarioLoseLoneliness"]] = {

    key: erg.constants["pohAttributeChangeScenarioLoseLoneliness"],
    attribute: erg.constants["pohAttributeLoneliness"],
    change: erg.constants["pohAttributeChangeScenarioLoseValue"],
    title: "Heart1 spends a day guarding a gate, feels pretty good about it",
    text: "<p>Heart1 was visiting the Scarlet Devil Mansion today when she apparently had a whim to spend time with gate guard Hong Meiling rather than proceed inside.</p><p>&quot;To be honest, I've had a good time&quot; she confided to the Bunbunmaru News as we arrived to conduct an interview with the head maid. &quot;The mansion is a busy place, so you see a lot of interesting people dropping by.  Meiling herself is excellent company, cheerful and a good listener.  I'd come here every day if I wasn't certain the novelty would wear off almost instantly.&quot;</p><p><em>Heart1's " + erg[erg.constants["pohAttributes"]][erg.constants["pohAttributeLoneliness"]].label + " drops by " + erg.constants["pohAttributeChangeScenarioLoseValue"] + " to HeartNewAttributeValue1</em></p>"

};



//################################### TRAIT CHANGE SCENARIO REPOSITORY #################################################

//Scenarios represent the trait gained.  The trait lost goes without a whimper (but must be of the same type, which will need to be enforced by the appropriate function
//The scenarios have the same key as the trait gained.  This is because I can't help but feel needing two scenarios for the same trait is a serious edge case

erg[erg.constants["pohTraitChangeScenarios"]] = {};

//Hair Length

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionHairLong"]] = {

    key: erg.constants["pohTraitAttractionHairLong"],
    title: "Heart1 obviously impressed by that thing Yukari does with her hair",
    text: "<p>&quot;I'm not saying it's Yukari specifically that I'm attracted to.&quot; Heart1 was overheard to say at an unwise volume at last night's gathering at the Hakurei shrine &quot;But when she's had her hair up to fight, then takes off her cap and lets it all spill out in its golden elegance, doesn't it make you feel warmly towards long haired girls in general?  What?  No, I'm sure Aya can't hear us from over there.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionHairShort"]] = {

    key: erg.constants["pohTraitAttractionHairLong"],
    title: "Should you grow out your hair before attaining immortality?  Heart1 says no.",
    text: "<p>This week's <strong>Bunbunmaru News Question for Gensokyo</strong> is:  &quot;Should a human grow her hair long before attaining immortality and halting her body's natural processes?&quot;</p><p>We asked Heart1: &quot;You'd think the answer would be yes, but look at Alice - her hair is adorable, never in the way, and probably a hundred times easier to care for than her wife's.  Immortality might stop your hair growing or becoming unhealthy, but it doesn't do anything for tangles - think of the long-haired deathless in this little country, and then think about how the brush-maker in the human village just built her family a nice new house.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

//Hair Colour

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionHairExotic"]] = {

    key: erg.constants["pohTraitAttractionHairExotic"],
    title: "Outside world magazine prompts Heart1 to advocate for multi-coloured hair",
    text: "<p>Witnesses report that Heart1 caused a scene yesterday when killing time at an outside-world-goods store on the edge of the Forest of Magic, set off by a magazine showing fashionable young women with exotic hairstyles.</p><p></p>&quot;In Gensokyo, it's nothing to see a girl with green or blue hair fly by, but it seems the outside world has surpassed us!&quot; she reportedly exclaimed &quot;Streaks, layers, gradients in every colour - we need to spread this through the land of fantasy.  Perhaps the Choujuu Gigaku fandom will be the vehicle for this glorious renaissance!&quot;</p><p>This reporter was unable to confirm reports that the shop owner's hair was mercilessly experimented with; he has not come out of hiding since the incident.</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionHairTraditional"]] = {

    key: erg.constants["pohTraitAttractionHairTraditional"],
    title: "Heart1 chased out of human village by Hakurei shrine maiden, claims &quot;Totally worth it&quot;",
    text: "<p>Yesterday afternoon this reporter encountered Heart1 retreating from the human village, having fled the wrath of the Hakurei shrine maiden.  Despite having faced the wrath of one of Gensokyo's great powers, she looked awfully pleased with herself.</p><p>&quot;Reimu was spouting some nonsense about my hanging around the human girls being creepy.&quot; she volunteered when questioned &quot;How silly - I was just complementing them on their lovely hair, so many of them with brown or black locks, no green or red or blue to spoil the picture. But it's fine because I got to admire Reimu's hair in flight, and now yours Aya!&quot;</p><p>The Bunbunmaru News' editorial opinion is that when your behaviour is disturbing a paparazzi photographer, it's time to reassess your life choices.</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionHairGold"]] = {

    key: erg.constants["pohTraitAttractionHairGold"],
    title: "Heart1 displays staggering lack of tact over blondes",
    text: "<p>An awkward scene transpired at the Scarlet Devil Mansion's soiree last night as Heart1 allegedly bailed up resident magician Patchouli Knowledge to enthusiastically praise the golden locks of heart-throbs Marisa Kirisame and Alice Margatroid.  Witnesses report that she acted as if she had no idea she was talking to the losing member of a love triangle, blithely ignorant of the Great Unmoving Library's obvious distress.</p><p>&quot;I'll tell you all about it if you don't print my name&quot; a silver-haired, knife-wielding, time-manipulating head maid told this reporter in confidence &quot;Heart1 was looking for a comrade in her appreciation of blondes, which to be fair Pache is, but why did she have to use those specific examples, and so relentlessly?  She kept going on about how they wore their hair at the wedding, as if she didn't know how brave Pache had to be to keep her composure at the ceremony.  It all ended with a 'myukuu' an an athsma attack, as you'd expect.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionHairWinter"]] = {

    key: erg.constants["pohTraitAttractionHairWinter"],
    title: "Rare moment of inelegance catches Heart1's eye, freight train catches her body",
    text: "<p>Heart1 is reportedly unpopular at Moriya shrine following her poor performance in a danmaku battle yesterday.  Recruited by native god Suwako Moriya to face the powerhouse team of perfect elegant maid Sakuya Izayoi and Youkai Sage Yukari Yakumo over the issue of the last red flowers available for sale in the human village that day, she proved herself a crippling liability for the frog-goddess.  Witnesses claim that Heart1 performed strongly out of the gate, but when a near miss sliced open one of Izayoi's ribbons and caused a braid to unwind in a spiral of silver, she was obviously enchanted and stopped grazing.  At that point, the Youkai Sage hit her with a freight train.</p><p>&quot;It was a JR Freight EH200 Blue Thunder!&quot; Moriya shrine maiden Sanae Kochiya told the Bunbunmaru News with obvious nostalgia.  When asked why she hadn't supported Lady Suwako herself, since she was present, she replied &quot;Heart1 dodged all those knives only to get hit by a freight train.  That's what was on offer yesterday.  How stupid do I look?&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionHairRose"]] = {

    key: erg.constants["pohTraitAttractionHairRose"],
    title: "Heart1 can't concentrate on reporter's questions for thirty damn seconds in the presence of redheads, what the hell",
    text: "<p>&quot;I'm sorry, can you repeat that?&quot; Heart1 asked this reporter for I swear the twentieth time yesterday, as I attempted to interview her about her recent spectacular danmaku battle.  &quot;I'm sorry, I just can't concentrate today for some reason.&quot;</p><p>When the Bunbunmaru News told her bluntly that the reason was obviously shinigami Komachi Onozuka and gate guard Hong Meiling, slacking off their jobs by practicing tai chi in the shade of a nearby tree, their red locks following their movements through the forms like blazing ribbons, Heart1 pretended to have no idea what I was talking about.  After she denied my sixth request to move the interview to a more suitable location, this reporter simply flew off, no doubt unnoticed by the spellbound tai chi spectator.</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionHairCool"]] = {

    key: erg.constants["pohTraitAttractionHairCool"],
    title: "Heart1 grudgingly admits Celestial pair have pretty hair",
    text: "<p>Following the latest outrage perpetrated by Celestial heiress Tenshi Hinanawi and reluctant accomplice Iku Nagae, Gensokyo has been filled with drunken anger directed at the pair.  Heart1 was last night amongst the foremost of agitators against the pair, bottle in hand and shouting at the inmates of a human village tavern.  She reportedly claimed that nothing good ever came out of the heavens, and it was high time they were either sealed off or razed.</p><p>But when reminded by insufferable stickler for honesty Suika Ibuki that she'd previously praised some aspects of the pair, she was forced to change her tone.  &quot;Well yes, I do like their hair.&quot; she allegedly conceded &quot;Blue and purple are such soothing colours, they make you feel as if everything will turn out fine.  So maybe after we sack Heaven I'll keep their heads.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionHairLively"]] = {

    key: erg.constants["pohTraitAttractionHairLively"],
    title: "Heart1 finds no satisfaction in exterminating green-haired fairy",
    text: "<p>Heart1, in her cups last night at a taoist-sponsered feast, confessed to this reporter in strictest confidence that she'd recently lost the joy of fairy killing.  &quot;Well, maybe it's just this one fairy.&quot; she clarified, slumped over onto the table &quot;I think they call her Daiyousei?  Well I've killed her plenty of times passing over the lake, as you do, but I feel worse about it every time.  She has such lovely green hair, it makes her look so full of life.  There should be more adults around with hair like that.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};


//Eye Colour

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionEyesRed"]] = {

    key: erg.constants["pohTraitAttractionEyesRed"],
    title: "Heart1 risks insanity by teasing red-eyed rabbit",
    text: "<p>Heart1 was found hallucinating at the edge of the Bamboo Forest of the Lost this morning, again.  If this reporter had literally anything else to print in this space, I wouldn't belabour my readers' patience with yet another story on this ridiculous habit of hers.  The Bunbunmaru News would like to remind its readers that it's the nature of Gensokyo for everyone to do some damn fool thing every now and again, but repeatedly taunting the Red Eyes of Madness, Reisen Udongein Inaba, just makes you an object of frustration and pity.</p><p>&quot;It's not that I care about rabbits one way or the other&quot; a recovering Heart1 replied when asked for comment &quot;It's just when she does it, her eyes go so very red...&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionEyesCool"]] = {

    key: erg.constants["pohTraitAttractionEyesCool"],
    title: "Heart1 spends whole day at Hakurei shrine; Reimu wants to know if Yukari turned her eyes blue again",
    text: "<p>Bunbunmaru News reader Reimu Hakurei has issued a public appeal asking if &quot;anyone knows if Yukari turned my eyes blue again yesterday?  I had Heart1 mooning over me all day at the shrine, and it wasn't for my snappy red-white outfit.  This has the awful stench of Sukima on it.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionEyesMetallic"]] = {

    key: erg.constants["pohTraitAttractionEyesMetallic"],
    title: "Heart1 dazzled by roguish Prince of Witches's golden eyes",
    text: "<p>Heart1 was saved from certain death yesterday by the swiftness of Marisa Kirisame, who snatched her out of the path of a drunken Reimu Hakurei and Sanae Kochiya, who were at the time raining destruction on anything that moved during the pursuit of an obscure theological argument.  Since this reporter was easily (trivially!) able to keep up with the speeding witch, we can report first-hand that Heart1 looked deep into her rescuer's eyes, blushed and said &quot;Marisa, you're married, save the dashing routine for your wife.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionEyesTraditional"]] = {

    key: erg.constants["pohTraitAttractionEyesTraditional"],
    title: "Heart1 and Sanae grace Hakuygyokuro with unwanted duet",
    text: "<p>A perplexed Yuyuko Saigyouji told the Bunbunmaru News that last night Moriya shrine maiden Sanae Kochiya and accomplice Heart1 appeared uninvited at her home, drunk and singing in very poor English.  &quot;Sanae claims she studied English in school...&quot; reported the ghost &quot;But she doesn't seem to have much of a command of it, particularly with some sake in her.  I had to ask the ghost of Koizumi-san to translate; he said the song was some doggerel about a brown-eyed girl.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionEyesGreen"]] = {

    key: erg.constants["pohTraitAttractionEyesGreen"],
    title: "Heart1 haunted by dreams of green-eyed ghost, mostly okay with it",
    text: "<p>Heart1 has reportedly been suffering repeated dream-visitations by an evil spirit trying to manifest through her body, but isn't really concerned, she told this reporter.  &quot;It's some ancient spirit or another with green hair and the most lovely green eyes.  I put up with it because it's a more entertaining dream than others I might have, and I don't think she'll ever successfully manifest in Gensokyo the way it is.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionEyesExotic"]] = {

    key: erg.constants["pohTraitAttractionEyesExotic"],
    title: "Gensokyo Heterochromia Appreciation Society welcomes new member, Heart1",
    text: "<p>In what Bunbunmaru News staff are referring to as &quot;a slow news day,&quot; we have column space to spare for the announcement by the shadowy Gensokyo Heterochromia Appreciation Society that they welcome a new member, Heart1.  The Association declares &quot;In Gensokyo, you can live a long time, and it's easy to become jaded.  Uniform and expected beauties are no good - asymmetry and surprise are better suited to enjoying the ages.  So join us and Heart1 in appreciating heterochromia!&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};


//Species

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionSpeciesHell"]] = {

    key: erg.constants["pohTraitAttractionSpeciesHell"],
    title: "Heart1's thing for hell-girls getting tiresome, report friends",
    text: "<p>&quot;It's like she's only interested in the sort of girls you'd see on a Choujuu Gigaku album cover.&quot; said pretty much the person you'd first suspect if you were told Heart1's friends were griping behind her back.  &quot;I wouldn't be surprised to hear she'd been pestering Patchouli Knowledge to summon more devils, or headed off on a quest to find the Fourth Deva of the Mountain.  She's a fanatic.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionSpeciesBeast"]] = {

    key: erg.constants["pohTraitAttractionSpeciesBeast"],
    title: "Heart1's manga collection betrays unhealthy fixation on animal ears, says rabbit",
    text: "<p>Rabbit youkai and alleged criminal mastermind Tewi Inaba contacted the Bunbunmaru News today with shocking revelations about Heart1 - allegedly she has been paying for outside-world manga featuring animal youkai to be smuggled into Gensokyo.  Ms Inaba claims the material ranges from &quot;adorable&quot; to &quot;unspeakable&quot;</p><p>&quot;I guess it got to the point where Kourindou wouldn't deal with her, so she had no choice but to come to me.&quot; the rabbit told this reporter &quot;I could get the stuff, certainly, but I didn't feel good about it.  I sent a different girl to deliver and take payment every month, since the first one came back frightened.  And it goes without saying that I wouldn't deal with her personally.  Still, I am a professional, and I'd never be revealing the depths of her perversion if she'd just paid her damn debts.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionSpeciesDead"]] = {

    key: erg.constants["pohTraitAttractionSpeciesDead"],
    title: "Heart1 kicked out of Hakugyokuro, again",
    text: "<p>&quot;I suppose I'm partially to blame for the romantic image attached to death and the dead in Gensokyo&quot; confessed Yuyuko Saigyouji to this reporter as she supervised repairs to Hakuygyokuro this morning &quot;But behaviour like Heart1's is unjustifiable.  The afterlife is not for the aesthetic benefit of those still active in the world, and furthermore many of Gensokyo's cultural peculiarities do not apply to all residents of the Netherworld.  It's best to reflect on that before subjecting the spirit of an imperial princess to your drunken antics.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionSpeciesDivine"]] = {

    key: erg.constants["pohTraitAttractionSpeciesDivine"],
    title: "Heart1 inists racy pictures of Amaterasu are legitimate religious paraphenalia",
    text: "<p>Having raided Heart1's possessions in her capacity as a brazen thief, Black-White Witch Marisa Kirisame was shocked to discover what can only be described as erotic art of the goddess of the Sun, Amaterasu.  &quot;I caught it pretty bad from Alice when she discovered them.&quot; Marisa told this reporter &quot;And rightly so, not only are they not the sort of thing a married woman should own, they're sacriligious to boot.  Hence I'm enlisting the Bunbunmaru News to reassure her - and the rest of Gensokyo - that the pictures were Heart1's, and I just stole them.&quot;</p><p>When approached for comment, Heart1 tried to bribe this reporter to recover the art for her, and began to bluster about religious freedom when I refused.</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionSpeciesUndying"]] = {

    key: erg.constants["pohTraitAttractionSpeciesUndying"],
    title: "Heart1 planning to be around forever, thinks a wife should be similarly enduring",
    text: "<p>This week's <strong>Bunbunmaru News Question for Gensokyo</strong> is:  &quot;Should your partner have a similar lifespan to you?&quot;</p><p>We asked Heart1: &quot;Absolutely, in that both of you should be permanent fixtures to the universe.  I'm not planning on going anywhere, ever, so I'd like to marry a girl whom I can rely on not to die and be reincarnated, be utterly changed by an alteration in her myth, or wink out of existence when peasants stop believing in her.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionSpeciesYoukai"]] = {

    key: erg.constants["pohTraitAttractionSpeciesYoukai"],
    title: "Heart1 petitions Youkai Sage for more weird youkai",
    text: "<p>Bearing down angrily on the Yukari Yakumo at a Hakurei shrine party last night, Heart1 loudly demanded &quot;more weird youkai in Gensokyo,&quot; witnesses report.  Allegedly she complained that most of the recent arrivals in Gensokyo were all members of some identifiable species or another, almost like Yukari was afraid of diluting her own unique status by importing similarly idiosyncratic youkai.</p><p>When the Sage mildly protested that she had no idea why anyone would assume she was responsible for who or what made up Gensokian immigration, she was met by loud cries of &quot;Oh come on, Yukari!&quot; from the assembled company.</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

//Tier

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionTierWeak"]] = {

    key: erg.constants["pohTraitAttractionTierWeak"],
    title: "Heart1 defends fairies from rampaging Oni, enjoys it more than she probably should",
    text: "<p>Early this morning Heart1 reportedly rescued a swarm of fairies from mobile natural disaster Suika Ibuki, apparently motivated by a desire for praise from those weaker than herself.  &quot;Honestly I found it creepy&quot; the Oni told this reporter shortly afterwards &quot;I didn't think she could really stop me from exterminating the pests, but she was just so into it that I felt more comfortable getting the hell out of there.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionTierEqual"]] = {

    key: erg.constants["pohTraitAttractionTierEqual"],
    title: "Heart1 not into power plays",
    text: "<p>This week's <strong>Bunbunmaru News Question for Gensokyo</strong> is:  &quot;Should your partner be of the same power level as you?&quot;</p><p>We asked Heart1: &quot;Of course!  It's hard for a relationship to last if one partner is fighting on equal terms with the Youkai Sage while the other is bullied by Cirno.  Marisa and Alice are the model - they both drive themselves to be the best they can, and though Marisa has more output and Alice more depth, they make an even team.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionTierStrong"]] = {

    key: erg.constants["pohTraitAttractionTierStrong"],
    title: "Heart1 better cough up some donations if she expects protection: Hakurei",
    text: "<p>&quot;The Hakurei shrine isn't a charity!&quot; insisted shrine maiden Reimu Hakurei to this reporter earlier today &quot;To be precise, we're the recipients of charity, not the givers.  So if you're in the habit of provoking vampires, native gods or gap youkai and then running here for protection, you'd better be in the habit of filling the donation box first.&quot;</p><p>The shrine maiden refused to answer any further questions, instead handing the crumpled, bleeding form of Heart1 over to this reporter before returning to her tea party with the Scarlet sisters.</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

//Generic

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionGenericMarisa"]] = {

    key: erg.constants["pohTraitAttractionGenericMarisa"],
    title: "Heart1 promises to stand in for retired rake Kirisame",
    text: "<p>Bunbunmaru News reader Heart1 would like it to be known that she well recalls how much fun Gensokyo was when Marisa Kirisame was stealing the heart of every maiden she set eyes upon.  Now that the mighty Prince of Witches has been tamed by the invincible Puppeteer of Hearts, Heart1 declares she will inherit the fallow legacy and distribute romance to Gensokyo without fear or favour.</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionGenericNone"]] = {

    key: erg.constants["pohTraitAttractionGenericNone"],
    title: "Everyone in Gensokyo is pretty but also terrible: Heart1",
    text: "<p>Holding court in a Myouren temple shindig last night, Heart1 reportedly swore off judging people on their looks.  &quot;Which is a terrible sacrifice on my part, since you lot are all gorgeous but have awful personalities.&quot; she allegedly observed between drinks.  &quot;Let's face it, even our supposed heroes are drunken thugs with no virtues to speak of.  I promise to only involve myself with people for whom I have legitimate regard, or who catch me drunk and lonely.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

//Special

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitAttractionGirlInUniform"]] = {

    key: erg.constants["pohTraitAttractionGirlInUniform"],
    title: "Shrine maidens need traditional uniforms: Heart1",
    text: "<p>Watching a rare joint ritual between the Hakurei and Moriya shrines, Heart1 wondered aloud to this reporter why the shrine maidens &quot;didn't at least wear their traditional uniforms?  I understand that Reimu and Sanae are bold young heroes with their own distinctive style, but you can't blame me for wanting to see the timeless beauty of a real miko uniform.&quot;</p><p>&quot;And why <em>armpits?</em>&quot; she added after a few minutes of puzzled silence.</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

//Reaction Traits

//Inversions

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionTsundere"]] = {

    key: erg.constants["pohTraitReactionTsundere"],
    title: "Heart1's romance tips best ignored: Hieda Akyuu",
    text: "<p>Gensokyo Chronicles author Hieda Akyuu has been obliged to step in after advice offered by Heart1 set off some bizarre fashions amongst the maidens of the human village.  &quot;Owing to my circumstances I can't claim to be an expert on matters of the heart, but it's easy to see this isn't right.&quot; the historian told the Bunbunmaru News &quot;If you've baked a gift for someone, you can just tell them that, there's no need to claim it's simply leftovers you need to be rid of.  Likewise continually belittling the object of your affections and affecting rage if they show any consideration towards you is unlikely to be tactically wise.  It seems Heart1 is just trying to serve her own interests at the expense of these poor girls.&quot;</p><p>When asked if she had any advice of her own for the lonely hearts of her village, Akyuu said &quot;Just look at positive role models and how they behave, like your elders in the village or the heroes of Gensokyo.  Not the Hakurei though, her all-tsun-no-dere routine is right out.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionAwkwardEnvy"]] = {

    key: erg.constants["pohTraitReactionAwkwardEnvy"],
    title: "Celestial's nonsense actually rather cute: Heart1",
    text: "<p>Last weekend's Moriya shrine picnic was surprised to hear Heart1 has time for the tiresome Tenshi Hinanawi, witnesses say.  &quot;It's painfully obvious she envies our life here in Gensokyo, she just doesn't have the graces to put into words.  Don't you find that sort of awkwardness adorable?&quot; she was reported to ask.</p><p>For the record, most of those gathered claimed they did not.</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionCoward"]] = {

    key: erg.constants["pohTraitReactionCoward"],
    title: "Heart1 criticised for ill-treatment of bucket youkai",
    text: "<p>In a statement to the Bunbunmaru News today, the Palace of Earth Spirits called for an end to Heart1's cruel practice of brandishing a bucket-youkai as a pet at social gatherings.  &quot;The satori know why you're doing it - you enjoy both the terror it incites in the poor creature, and the vicious grudges she cultivates as a result.  We think that's reprehensible, even by the depraved standards of the surface world.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionBeast"]] = {

    key: erg.constants["pohTraitReactionBeast"],
    title: "Frog-goddess obliged to keep hell-crow and Heart1 apart",
    text: "<p>Investigative work by the Bunbunmaru News has tied recent underground explosions to obvious culprit Utsuho Reiuji, but with a twist:  she was provoked by Heart1.  Native god Suwako Moria reluctantly shared the story when questioned:  &quot;Well, to be blunt, it seems Heart1 likes girls who are violent and not too bright, which I'm afraid to say fits Okuu very well.  She's been making a habit of confusing and enraging the poor bird by outwitting her, hoping to provoke a chain reaction, as it were.  I was forced to take...steps to keep them apart.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionNoHero"]] = {

    key: erg.constants["pohTraitReactionNoHero"],
    title: "Heart1's gone off heroes for life, blames Perfect Elegant Maid",
    text: "<p>After yet another menace to one of the Scarlet Devil Mansion's satellite villages was deftly defeated by Perfect Elegant Maid Sakuya Izayoi, villain Heart1 reportedly &quot;lost it.&quot; She claimed it was people like Izayoi that prevented her from caring for the intelligent and brave, as their flawlessness raised an unbridgeable gap with everyone else.  She insisted that the maid and her heroic ilk &quot;show some damn weakness sometimes, please!&quot;</p><p>In response to this outburst the Perfect Elegant Maid sat Heart1 down with a nice cup of tea and listened patiently until she calmed down.</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionNoPoet"]] = {

    key: erg.constants["pohTraitReactionNoPoet"],
    title: "Ghost princess just trolling everyone all the time: Heart1",
    text: "<p>&quot;Yuyuko's got them all fooled, but I know the truth!&quot; a wild-eyed Heart1 insisted to this reporter very late last night &quot;Those honeyed words and easy manners are just covering her hobby of provoking every single person she meets.  Look at the feuds and destruction she leaves in her wake!&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionMistress"]] = {

    key: erg.constants["pohTraitReactionMistress"],
    title: "Heart1 latest victim of vampire's charisma",
    text: "<p>Swirling some blood about in an expensive glass, the Scarlet Devil boasted to the Bunbunmaru News of another proud Gensokian reduced to a thrall by her charisma.  &quot;That Heart1, yes, I've got her.  She's more than tolerant of my childish pride and insane jealousy - she craves it!  But of course there's no woman in Gensokyo to equal to me, and I'll never grow up, so she's stuck without a wife for eternity.  Hah!&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionVillain"]] = {

    key: erg.constants["pohTraitReactionVillain"],
    title: "Heart1 heckles Youkai Sage, questions her credibility as a villain",
    text: "<p>During a seasonal ceremony at the human village yesterday, spectator Heart1 caused a scene while attempting to provoke the Youkai Sage into acts of evil.  Shouting &quot;Stop playing jokes and chasing shrine-maiden skirt, start trying to destroy the world!&quot; she ignored the attempts of friends to quieten her ranting and kept up her harassment until Yukari was obliged to gap her somewhere else entirely.</p><p>When asked for comment, the Sage brushed off any concerns: &quot;It's just difficult for some people to reconcile the everyday terror and violence of Gensokyo with the fact that almost no-one is permanently harmed.  They start longing for real atrocities to somehow justify all the pointless intrigue and meaningless fighting.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionIntelligentsiaDistaste"]] = {

    key: erg.constants["pohTraitReactionIntelligentsiaDistaste"],
    title: "Heart1 goes too far with anti-intellectual tirade",
    text: "<p>Heart1 chose a bad day to confront witch and academic Patchouli Knowledge, and a particularly obnoxious method for doing so, witnesses report.  Barging in on the Scarlet Devil library and interupting the witch's study, she loudly proclaimed that &quot;Nobody likes people who wield their intellects like clubs to make others feel inferior; that's why you're alone in this dusty library while your ex-girlfriends are enjoying a perfect marriage in the Forest!&quot;</p><p>Gate guard Hong Meiling, still obviously shaken by the aftermath of the confrontation, was happy to answer this reporter's questions: &quot;Normally Lady Sakuya or I would have to protect Lady Patchouli in such a case, since she'd just go myukuu and collapse.  But somehow this week the fairy maids were useful, and the library was largely dust-free.  Lady Patchouli could recite all her spells easily, and...they tell me Heart1 isn't dead, but I'm not sure how she can survive without the bits of her I keep finding about the grounds.  In fact, is that a spleen I see over there?&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionHeroicContempt"]] = {

    key: erg.constants["pohTraitReactionHeroicContempt"],
    title: "Heart1 sick of this invincible courage business",
    text: "<p>In a letter to the Bunbunmaru News, Heart1 asks &quot;Is it even worth having incidents this year?  Marisa is just going to sail in blithely, Alice in tow, and blow everything up without ever having the grace to seem daunted.  At least Youmu pretends to be frightened before she carves up everything in sight.  How are the youkai supposed to incite fear in the humans if the heroes aren't afraid of anything?&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionHatredSilverTongues"]] = {

    key: erg.constants["pohTraitReactionHatredSilverTongues"],
    title: "Heart1 hears too much poetry, yells at tree",
    text: "<p>After losing yet another poetry contest during afternoon tea at Hakugyokuro yesterday, Heart1 flew off in a huff, reportedly shouting about &quot;insincere rubbish getting past the judges because of overpolished turns of phrase.&quot;  She surfaced sometime later, allegedly beating the youkai cherry tree Saigyou Ayakashi with the flat of a shovel, telling it that &quot;it's all your fault, chopping down is too good for you, I'll keep you standing until you've got what's coming to you!&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionCarousersFoe"]] = {

    key: erg.constants["pohTraitReactionCarousersFoe"],
    title: "Shrine maidens gone wild break Heart1's sleep, belongings, patience",
    text: "<p>Heart1 was awoken very early this morning by drunken pests throwing bottles and danmaku at her house - the alleged culprits being none other than shrine maidens Reimu Hakurei and Sanae Kochiya.  &quot;At some point in the evening they'd obviously swapped clothes and hair ornaments, but very sloppily.&quot; the victim told this reporter &quot;And what was the point?  They were both there, they were hardly going to escape blame if I'd mistaken one for the other.  They shouted the most vulgar things, broke everything in sight, and were resolved on exterminating me before I told them there was free wine and cheese on at the Scarlet Devil Mansion.&quot;</p><p>&quot;I like a party as much as anyone, but can't the ostensible heroes of Gensokyo show some dignity?&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionBelovedProud"]] = {

    key: erg.constants["pohTraitReactionBelovedProud"],
    title: "Heart1's encouragement making Scarlet Devil &quot;unmanageable&quot; complains Sakuya Izayoi",
    text: "<p>&quot;Now I might be guilty of bolstering my Lady's ego from time to time&quot; admitted Scarlet Devil head maid Sakuya Izayoi mid-rant to this reporter &quot;But Heart1 is going too far.  Buttering up Lady Remilia into an insufferable ball of hubris might be cute, but it can't end well.  Today she decided she was too regal for doors, and has been simply walking through walls.  She's not a ghost!  This is bad for the wall!&quot;</p><p>&quot;Furthermore, while the mistress is an ancient and peerless vampire queen, brilliant and deadly, she is also a child.  It's not appropriate to encourage in her traits one finds romantically appealing.  She is never going to grow up.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionGreenEyedMonster"]] = {

    key: erg.constants["pohTraitReactionGreenEyedMonster"],
    title: "Bunbunmaru News Special Editorial: Heart1 is a wicked liar",
    text: "<p>The Bunbunmaru News would like to make it clear to its beloved and faithful readers that comparative circulation numbers spread by the vile Heart1 have been discredited and disowned by all reputable Tengu media bodies, being largely fabricated, and where nominally real using questionable sampling methods on anomalous circulation periods.  And even if - as she alleges - the White Wolf Danmaku Daily enjoyed an order of magnitude greater readership throughout Gensokyo, and the Kakashi Spirit News was steadily eroding our subscriber base, we certainly wouldn't be so childish as to be jealous over it.</p><p>And it's not true, as our own scrupulously honest circulation figures show.</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionVindictiveCute"]] = {

    key: erg.constants["pohTraitReactionVindictiveCute"],
    title: "Ancient grudges just sublime, says Heart1",
    text: "<p>Details are slowly emerging of the colossal violence that rocked Gensokyo last night, reducing a vast swathe of the countryside to ash and knocking a hole through to the Former Hell at the epicentre.  Eyewitness Heart1 has recovered sufficiently to speak with the assistance of Lady Satori Komeiji, and volunteered the following account to the Bunbunmaru News.</p><p>&quot;The moon-viewing picnic was going splendidly; in particular Yukari and Yuyuko were reminiscing about old times rather than bothering Reimu and Youmu as they normally do.  Yuyuko called for a brush and ink to compose a poem in memory of those bygone days, but when she was given the brush she instead stabbed it into the Youkai Sage's eye, letting her know that she did indeed remember the actress from Izumo.  Blood gushing from her head, Yukari laughed and offered that Yuyuko had clearly forgotten the other girl from Gion, gapping what looked like a hundred brushes into the ghost's body.  And then things really got interesting!&quot;</p><p>When approached (carefully) for comment by this reporter, the Youkai Sage and Mistress of Hakugyokuro both seemed in perfect health, though they did not deny the tale, merely insisting that &quot;last night is last night, why let that stand in the way of friendship this morning?&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionLovelyMalice"]] = {

    key: erg.constants["pohTraitReactionLovelyMalice"],
    title: "Heart1's enthusiastically supports shrine maiden's over-extermination",
    text: "<p>Speaking at an impromptu tavern meeting on the subject of Reimu Hakurei's unrelenting brutality towards youkai, Heart1 unexpectedly leapt to the shrine maiden's defence, as witnessed by this reporter.  &quot;She has to exterminate, that's a fact of life here.  If she's obliged to, isn't it better that she gives it her all?  Crushing her victims with her spiritual power like grapes being pressed for wine, their blood and bones littering the battlefield as mute poetry to her glory?&quot;</p><p>Those present agreed that this was &quot;messed up&quot; and resolved instead to complain to the Youkai Sage.</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};


//Buffs

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionEgalitarian"]] = {

    key: erg.constants["pohTraitReactionEgalitarian"],
    title: "Heart1 charmed by Black-White Witch's easy trust",
    text: "<p>Heart1 was surprised at a recent Forest of Magic party at the easy and confident manners of witch Marisa Kirisame, who &quot;worked the room&quot; with perfect poise while her wife chatted with rumoured former paramour Patchouli Knowledge.</p><p>&quot;I couldn't believe it&quot; Heart1 insisted on telling this reporter as I tried to get past her for more sake &quot;If I was Marisa I would have cut Patchouli's throat, buried her deep in the loam, then sealed her in with an ocean's worth of salt.  Yet there she is without the slightest concern!  Most admirable.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionNoble"]] = {

    key: erg.constants["pohTraitReactionNoble"],
    title: "Heart1 resolved on summoning Queen Arthur",
    text: "<p>Heart1 made an amazing discovery earlier this week when pawing through the belongings of Moriya shrine maiden Sanae Kochiya out of &quot;perfectly natural curiosity&quot; - she claims to have found documents proving the famed King Arthur of western legend was in fact a woman, noble and brave, who can even now be summoned through the correct rituals.  Since such a figure would be a perfect fit for Gensokyo, she is allegedly attempting to enlist magician Patchouli Knowledge to perform the summoning.</p><p>&quot;Yeah, she's insane.&quot; Sanae Kochiya said in response to this reporter's questions &quot;What she uncovered was an art book for an anime, and...actually, forget it.  If Patchy tries to summon a beautiful and noble knight, I'd like to see what she comes up with.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionEnlightened"]] = {

    key: erg.constants["pohTraitReactionEnlightened"],
    title: "Yukari Yakumo actually wonderful when she's not being awful: Heart1",
    text: "<p>Heart1 was found in something of a daze today, wandering the human village in deep contemplation.  When this reporter disturbed her at the urging of fellow eyewitness Suika Ibuki, she confessed the reason: she'd just had a deep and enlightening conversation with the Youkai Sage, Yukari Yakumo.</p><p>&quot;I found her brilliant, an inexhaustible font of knowledge and shockingly moral!&quot; the bemused Heart1 told us &quot;She truly is a Sage.  All of Gensokyo would be in love with her, were she not such a heinous manipulative cow all the time.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionSweetHumble"]] = {

    key: erg.constants["pohTraitReactionSweetHumble"],
    title: "Heart1 reads enchanting book of Heian tales, bitterly regrets it",
    text: "<p>&quot;Well that's torn it!&quot; an agitated Heart1 told a drunken Hakugyokuro party after raiding its library.  &quot;I've gone and fallen in love with a fictional princess because she's eloquent and humble.  Plenty of you can throw a poem together, but you think you're something special for doing so, <em>Yuyuko</em>, and those of you that are humble are only that way because you can't string a sentence together, <em>Youmu.</em>&quot;</p><p>Reports say the assembled party found her heartbreak hilarious.</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionHero"]] = {

    key: erg.constants["pohTraitReactionHero"],
    title: "Heart1 rather taken by Youmu Konpaku, may eventually recover from sword-wounds",
    text: "<p>&quot;Well it wasn't much of an incident.&quot; admitted Heart1 wheezily through repeatedly slashed lungs when questioned by this reporter &quot;more of a rolling, drunken brawl really.  It's no surprise Konpaku and Izayoi cleaned us up so easily without any need to call on Kirisame and Margatroid.  But I must tell you, they looked quite the sight doing it, and don't underestimate Youmu's elegance just because the Perfect Elegant Maid was about.  She fought with bravery, skill and more cunning than you'd suspect.  I'll admit it - I was cut down because she outwitted me.  Glorious!&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};


erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionPoet"]] = {

    key: erg.constants["pohTraitReactionPoet"],
    title: "Heart1 knows enough to leave Yuyuko alone, still obviously tempted",
    text: "<p>Heart1 left a Hakurei shrine party abruptly last night after a conversation with the Bourei of Immaculate Beauty, Yuyuko Saigyouji.  The affable and elegant ghost had put on a performance of dance and poetry for the party, before circling around the various groups to receive their congratulations and thanks, ending with the lone Heart1.  Witnesses say that after Yuyuko gently touched her cheek, she turned on her heel and walked out, perhaps fighting back tears.</p><p>When questioned by this reporter, the ghost merely said &quot;Enticing Gensokyo's mighty into hopeless devotion and then breaking their hearts?  Perhaps you have me confused with my friend Yukari.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionNoMistress"]] = {

    key: erg.constants["pohTraitReactionNoMistress"],
    title: "Heart1's crude but effective retort causes charisma break",
    text: "<p>&quot;Heart1 had lost at chess to my Lady&quot; a somewhat dreamy-looking Sakuya Izayoi told the Bunbunbmaru News this morning &quot;Naturally the Scarlet Devil was demanding the greatest possible forfeit, but her victim would have none of it!  She said that Lady Remilia could go...&quot; (the Bunbunmaru News apologises; we can't possibly print such a vile statement, and we rely on the power of your imagination) &quot;...and my poor mistress ended up crying in my arms.  My nose is bleeding?  You are certainly mistaken.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionNoVillain"]] = {

    key: erg.constants["pohTraitReactionNoVillain"],
    title: "Heart1 just wants someone who isn't awful",
    text: "<p>Late last night at the Moriya shrine Heart1 - tired and emotional - cornered this reporter and collapsed on me, weeping.  &quot;It's not like I need a hero!&quot; she insisted on blubbering in my ear &quot;I just want to find a girl who isn't petty and vicious deep down.  But it's hopeless!  Once you're past the frills and ribbons, everyone in Gensokyo is vile.  Even I'm vile!  Why would a normal girl have anything to do with a monster like me?&quot;</p><p>&quot;But you, Aya...&quot; she said, stroking my hair with disconcerting familiarity &quot;You're the worst of the lot.  At least we're honest about being misanthropes.  Who knows what vicious little spin you'll put on this when it hits your disgusting rag?&quot;</p><p>This reporter believes the unvarnished truth will serve amply, you drunken, broken wretch!</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionGenius"]] = {

    key: erg.constants["pohTraitReactionGenius"],
    title: "Heart1 wants to hear how you beat the Lunarians again, Yukari",
    text: "<p>It has not escaped the Bunbunmaru News Social Pages' attention that at every party or other gathering where the Youkai Sage graces with her presence, there can be seen Heart1, unconsciously playing with a lock of her hair, asking Yukari to recount some brilliant exploit.  While it is the editorial position of the Bunbunmaru News that the Second Great Lunar War was an unrivalled coup of strategic genius, we have heard the story several hundred times already, thank you Heart1.</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionFearless"]] = {

    key: erg.constants["pohTraitReactionFearless"],
    title: "Heart1 praises Moriya shrine maiden's courage, denies it's just berserk malice",
    text: "<p>After witnessing a duel between the Komeiji sisters and shrine maidens Reimu Hakurei and Sanae Kochiya yesterday, Heart1 enthused to this reporter about the Moriya girl's courage:  &quot;Reimu doesn't fear much, but she does fear Yukari.  Half the reason the Komeiji sisters posed a challenge to the miko at all was Satori's access to Reimu's memories of the cherry blossom incident.  But with Sanae, who's wonderfully fearless, she has nothing to work with.&quot;</p><p>Lady Satori herself told a subtly different story:  &quot;Indeed, when I look into Ms Kochiya's heart, it is I who is traumatised.  She's a personable enough girl on the surface, but in battle she throws aside her human persona and becomes a pure force of divine destruction, Goddess of Extermination.  Fearless yes, but you can't call it courage either.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionMuse"]] = {

    key: erg.constants["pohTraitReactionMuse"],
    title: "Gensokyo's poets should shape up: Heart1",
    text: "<p>&quot;This land has a proud tradition of poetry, yet it has produced no verse worthy of my glory as a subject.&quot; an intoxicated Heart1 told an incredulous audience on the slopes of the Youkai Mountain yesterday.  &quot;I can't give my heart away for anything less than the perfect poem - so get writing!  You, tengu, I see you scribbling, it had best be a verse!&quot;</p><p>The Bunbunmaru News does not as a rule produce or print poetry, but if anyone has something that might calm Heart1 down, we'll happily run it for the sake of public safety.</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionSocialButterfly"]] = {

    key: erg.constants["pohTraitReactionSocialButterfly"],
    title: "Hakurei shrine maiden utter failure as belle of Gensokyo: Heart1",
    text: "<p>&quot;There's no getting around it&quot; declared Heart1 to an indifferent Reimu Hakurei at yet another party that had materialised at the shrine without any effort on the miko's part yesterday.  &quot;You're at the heart of Gensokyo's social calendar, but you don't fit the role at all!  You should be mingling, attending to your guests, brightening the hearts of everyone present.  Yet you're lying here with your head in the lap of the Youkai Sage, too drunk to move!&quot;</p><p>Witnesses report that the shrine maiden replied by muttering something to the Sage before lapsing into sleep.  Yukari repeated it as &quot;She says we're not guests, we're trespassers she's too lazy to chase off.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionTragedy"]] = {

    key: erg.constants["pohTraitReactionTragedy"],
    title: "Heart1's tip for immigrants to Gensokyo: make it easy on yourself, don't aggravate the heroes",
    text: "<p>In a preview of the upcoming <em>So You're Invading Gensokyo: Welcome and Good Luck!</em> the Bunbunmaru News is pleased to share the advice Heart1 contributed to the work.</p><p>&quot;It's a fact that you'll get beaten.  Outside of Gensokyo our heroes are admittedly listless and lazy, but on home turf they're unstoppable monsters.  You'll get eviscerated by swords and knives, crushed by yin-yang orbs, incinerated by the Master Spark and...does Sanae eat hearts?  I think she eats hearts.  Anyway, having the proper attitude is the difference between dropping by for tea and mochi the next day and spending a few years in intensive care.  It's most important to avoid hubris - show proper self-confidence, don't let yourself be sold short, and give them a good match, but do not let your pride lure you into aggravating them.  That way lies pain.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionTrust"]] = {

    key: erg.constants["pohTraitReactionTrust"],
    title: "Heart1 tired of being lonely, blames rampant jealousy",
    text: "<p>&quot;The fact is, too many women in Gensokyo have trust issues.&quot; claimed Heart1 last night during a forest booze-up, forced into confession during Suika Ibuki's &quot;Truth or Truth&quot game.  &quot;My last relationship failed because she found me naked not far from this very spot, and wouldn't accept the simple truth: Marisa <strong>stole</strong> my clothes.&quot;</p><p>While the assembled party reportedly snickered in disbelief, the Prince of Witches came to her defence:  &quot;Oh, so that's why Alice was so upset with me - you were naked without your clothes.  Silly me.  Look, if it helps you can have them back, they're in the house somewhere.&quot;<p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionVindictiveUgly"]] = {

    key: erg.constants["pohTraitReactionVindictiveUgly"],
    title: "Heart1 discovers true reason for reaper's indolence, is flabbergasted",
    text: "<p>&quot;I'm flabbergasted.&quot; Heart1 told this reporter after Komachi Onozukas's drunken declaration at a riverside picnic.  &quot;She missed a day off during the Nara period and has been on a go-slow protest ever since?  Let it go, Komachi.  Just let it go.&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

erg[erg.constants["pohTraitChangeScenarios"]][erg.constants["pohTraitReactionCruelty"]] = {

    key: erg.constants["pohTraitReactionCruelty"],
    title: "Youmu Konpaku cuts her way to the truth, Heart1 is sickened",
    text: "<p>Ordered yesterday by her mistress Yuyuko Saigyouji to hunt down a tub of outside-world ice cream rumoured to have passed through Kourindou, half-ghost Youmu Konpaku set about her work with grim determination, cutting down everyone who stood between her and the truth.  Several dozen casualties have already been reported, and the toll rises by the hour.</p><p>Eyewitness Heart1 spoke to the Bunbunmaru News: &quot;Everyone knows Reimu is a monster, Sanae's a psychopath, and Sakuya is the devil's pet, but I always thought Youmu was a kinder soul.  Not a bit of it!  She is utterly without mercy and resorts to the sword before anything else, cutting with precise cruelty.  Do you know who that leaves as the reasonable one?  Marisa Laser-everything-let-the-Yama-sort-the-ashes Kirisame!&quot;</p><p><em>Heart1 has lost the trait OldTrait and now has trait NewTrait in its place.</em></p>"

};

//################################### PASSION CHANGE SCENARIO REPOSITORY #################################################

erg[erg.constants["pohPassionChangeScenarios"]] = {};


//EoSD

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainKoakuma"]] = {

    key: erg.constants["pohPassionChangeScenarioGainKoakuma"],
    heart: erg.constants["pohKoakuma"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1 finds obscure volume, new-found respect for the librarian's craft",
    text: "<p>Heart1 yesterday caused something of a scene, bickering with Patchouli Knowledge in the Scarlet Devil Mansion's library over her refusal to help locate a particularly obscure tome amidst the endless shelves.  Before the matter could come to danmaku, " + erg[erg.constants["pohHearts"]][erg.constants["pohKoakuma"]].fullName + " appeared to defuse the flaring tempers, having swiftly located the book in question as soon as it was asked for.</p><p>Heart1 learned what the Bunbunmaru News has long known - the Seven-Day Witch may have the contents of ten thousand books committed to memory, but she is the Great <strong>Unmoving</strong> Library - she wouldn't waste reading time on walking the aisles herself!  The little devil is the true mistress of the shelves.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohKoakuma"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"
    
};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseKoakuma"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseKoakuma"],
    heart: erg.constants["pohKoakuma"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 learns a bitter truth about familiars",
    text: "<p>While calling on Scarlet Devil earlier today, Heart1 &quot;accidentally&quot; overheard Patchouli Knowledge giving private orders to " + erg[erg.constants["pohHearts"]][erg.constants["pohKoakuma"]].fullName + ".  When this reporter caught up with her for comment, she still appeared haunted by what she had heard.</p><p>&quot;I had some respect for that girl; I really thought she was something in her own right!  But she's utterly bound to her mistress, far beyond mere obedience.  Patchouli can make her do anything.  <strong>Anything.</strong>&quot;</p><p>The Bunbunmaru News would like to remind its sweet, innocent readers that when a magician chooses to summon a devil, of all the entities they could possibly bind as familiars, they have a reason for doing so, and it's unlikely to be righteous.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohKoakuma"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};


//PCB

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainLetty"]] = {

    key: erg.constants["pohPassionChangeScenarioGainLetty"],
    heart: erg.constants["pohLetty"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1's hot-spring soak saved by quick-thinking yuki-onna",
    text: "<p>Heart1 was seen late last night enjoying the pleasures of Gensokyo's (largely) natural onsen when the water began suddenly to overheat and boil.  Witnesses report the situation was saved by passer-by " + erg[erg.constants["pohHearts"]][erg.constants["pohLetty"]].fullName + ", who jumped into the bath herself, cooling it to its customary temperature with her chilling aura of winter.  Heart1 was allegedly most grateful, commenting that even the cooled water would have been far too hot for the yuki-onna's own comfort.</p><p>The Palace of Earth Spirits and Moriya Shrine could not be reached for comment on the state of the hell furnaces or reactors at time of publication.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohLetty"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseLetty"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseLetty"],
    heart: erg.constants["pohLetty"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 rescues frozen humans from winter mastermind",
    text: "<p>Late yesterday, Heart1 encountered a small band of humans frozen solid in the course of a lopsided battle against " + erg[erg.constants["pohHearts"]][erg.constants["pohLetty"]].fullName + ".  Taking offence at the shameful display, our heroine chased off the winter youkai and freed the humans from their prisons of ice.</p><p>&quot;There's nothing wrong with youkai terrorising humans&quot; she commented to the Bunbunmaru News later &quot;But preventing them from fighting back at all, when their attacks are so pathetic?  That's poor form.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohLetty"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainLunasa"]] = {

    key: erg.constants["pohPassionChangeScenarioGainLunasa"],
    heart: erg.constants["pohLunasa"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1 captivated by violin solo",
    text: "<p>Early this morning, " + erg[erg.constants["pohHearts"]][erg.constants["pohLunasa"]].fullName + "'s secluded practice session at the foot of the Youkai Mountain became an impromptu concert as those flying by stopped to listen.  Occupying the best seat in the house was Heart1, who when asked for comment by this reporter responded irritably with &quot;Shut up, you're interupting!&quot;</p><p>It seems it's easy to find a spot too secluded for humans to overhear your practice, but with the amount of ground gods, heroes and youkai cover by flight every day, escaping an audience in Gensokyo is almost impossible!</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohLunasa"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseLunasa"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseLunasa"],
    heart: erg.constants["pohLunasa"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 loses danmaku battle, blames violinist",
    text: "<p>Yesterday afternoon, witnesses report Heart1 was obliged to join Hong Meiling in a danmaku battle against Remilia Scarlet and Sakuya Izayoi, owing to an etiquette dispute over afternoon tea.  Lady Remilia instructed the musician hired for the soiree, " + erg[erg.constants["pohHearts"]][erg.constants["pohLunasa"]].fullName + " to play at a loud volume as elegant accompaniment to the duel.</p><p>After suffering a crushing defeat at the hands of vampire and maid, witnesses claim Heart1 laid responsibility at the violinist's feet, saying the crushing spiritual ennui evoked by her mournful strings robbed her of the energy needed for danmaku.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohLunasa"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainMerlin"]] = {

    key: erg.constants["pohPassionChangeScenarioGainMerlin"],
    heart: erg.constants["pohMerlin"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1 approves of sophisticated brass addition to Choujuu Gigaku",
    text: "<p>Late last night, another barrage of thundering punk rock was delivered by the girls of Choujuu Gigaku, Mystia Lorelei and Kyouko Kasadani, but this time with reinforcements - " + erg[erg.constants["pohHearts"]][erg.constants["pohMerlin"]].fullName + ", trumpeter of the Phantom Ensemble.  The veteran musician had no trouble rising to the energy level demanded by the punk band's blistering sound, yet still added a deep and graceful sophistication born from her mastery of the classical and jazz spirits.</p><p>This reporter spoke to Heart1 after the concert, and when our ears stopped ringing and we were able to understand each other, she had this to say: &quot;While punk has a strong voice of its own, you really hear something special when it's in a duet with jazz. " + erg[erg.constants["pohHearts"]][erg.constants["pohMerlin"]].fullName + " is of course a performer in a class of her own, she can stand on stage with any band in Gensokyo, but even so I think the combination with Choujuu Gigaku produced a unique magic.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohMerlin"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseMerlin"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseMerlin"],
    heart: erg.constants["pohMerlin"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 frustrated by bizarre conversation with trumpeter",
    text: "<p>Yesterday evening, a gathering at the Moriya shrine was disappointed when an altercation between Heart1 and " + erg[erg.constants["pohHearts"]][erg.constants["pohMerlin"]].fullName + " ended in confusion rather than violence.  The Phantom Ensemble trumpeter, prone to vocalisation of gibberish at the best of times, was deep in her cups and cornered Heart1 while releasing a torrent of nonsense.  While attempting to cut off the rambling with sharp words, the victim found she'd been affected by the Poltergeist's power and was herself unable to form a coherent sentence.</p><p>Sadly for the party, " + erg[erg.constants["pohHearts"]][erg.constants["pohMerlin"]].preferredName + " was unable to rise to the challenge of Heart1's anger, falling into a sake-induced slumber before the matter could come to blows.  Witnesses report her victim drinking alone for the rest of the night in sullen silence, as if unable to accept her bizarre ill-fortune.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohMerlin"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainLyrica"]] = {

    key: erg.constants["pohPassionChangeScenarioGainLyrica"],
    heart: erg.constants["pohLyrica"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Sly keyboardist sets Heart1 laughing, Suwako hopping",
    text: "<p><strong>Evening edition special report:</strong> This afternoon, " + erg[erg.constants["pohHearts"]][erg.constants["pohLyrica"]].fullName + " and accomplice Heart1 came under brutal assault by the goddess Suwako Moriya after disrupting an evangelical speech by shrine maiden Sanae Kochiya in the human village.  Witnesses report the Phantom Ensemble keyboardist whispered a cutting barb on the subject of frogs into Heart1's ear, who laughed aloud and repeated it for the gathering to hear, so impressed was she by the joke.  Suwako attacked furiously in response, her rage aggravated by her victims' inability to defend themselves due to paralysing fits of laughter.</p><p>While badly bruised, Heart1 and " + erg[erg.constants["pohHearts"]][erg.constants["pohLyrica"]].preferredName + " somehow escaped serious injury and insisted to this reporter later that the incident was &quot;totally worth it.&quot;  Sanae Kochiya, who technically acted as Suwako's second in the &quot;duel&quot; happily explained that the matter had been smoothed over, and the Moriya shrine bore no grudge against its comedic adversaries: &quot;Lady Suwako's display of power gathered a lot of faith, and Lady Kanako restored the shattered shops and houses as good as new, so all's well that ends well!&quot;</p><p>While it was all smiles when the Bunbunmaru News arrived at the scene, this reporter could not find any witnesses willing to repeat the actual joke.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohLyrica"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseLyrica"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseLyrica"],
    heart: erg.constants["pohLyrica"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 finds keyboardist's frank assessment of her romantic history discordant",
    text: "<p>Witnesses report that during an impromptu get-together in a lonely forest tea-house (necessitated by a sudden rainstorm), an intoxicated " + erg[erg.constants["pohHearts"]][erg.constants["pohLyrica"]].fullName + " decided to improvise some personalised songs for the party to pass the time.  Her first choice of subject was Heart1, specifically dwelling upon her colourful romantic history.</p><p>The resulting barrage of danmaku destroyed the inn and obliged the party to make their way home in the rain.  When asked for comment by this reporter, a sodden Heart1 muttered &quot;It may be common knowledge, but making a song about it is too far!&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohLyrica"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainRan"]] = {

    key: erg.constants["pohPassionChangeScenarioGainRan"],
    heart: erg.constants["pohRan"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Fox shikigami's lightning calculations slay imaginary beast, win Heart1's praise ",
    text: "<p>Last night, Moriya shrine maiden Sanae Kochiya suffered a crushing and unexpected defeat at the hands of Yuyuko Saigyouji, Youmu Konpaku, " + erg[erg.constants["pohHearts"]][erg.constants["pohRan"]].fullName + " and Heart1.  She had challenged the group during a party at Hakugyoukuro to a round of a strange outside world game, wherein one strong player contends against a weaker group using unusual dice and numbers written on paper.  Reports say the lone player's strength derives from &quot;horror,&quot; and thus Sanae counted on Hakugyokuro's spooky atmosphere and her opponents' inexperience to carry her to victory.</p><p>She had not reckoned with the fox shikigami's abilities.  Heart1 boasted to this reporter later: &quot;It looked like we were in trouble.  Yuyuko was ignoring the game for the sake of the snacks, Youmu isn't good with scary things, and while I'd managed to make my playing piece powerful by mastering the tactical mathematics, the strategic calculations involved very complex probability.  " + erg[erg.constants["pohHearts"]][erg.constants["pohRan"]].preferredName + " saved us.  With her ability to instantly calculate the odds no matter how many factors were added to the equation, she was able to concoct a plan that allowed us to attack Sanae's most powerful piece with almost no chance of failure.&quot;</p><p>For her part, the shikigami was humble: &quot;Ah, you see the large aquatic demon that Ms Kochiya used reminded me of one of my mistress' old rivals, so in defeating it I merely acted as a loyal shikigami.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohRan"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseRan"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseRan"],
    heart: erg.constants["pohRan"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 learns of shikigami remote viewing, is undone by paranoia",
    text: "<p>During a midnight outdoor moon-viewing party, Heart1 was successfully provoked into a fit of paranoia by the cruel Youkai Sage, witnesses claim.  Over sake and sweet dumplings, Yukari Yakumo confided in Heart1 that whenever she pleases she can see through the eyes of her shikigami, " + erg[erg.constants["pohHearts"]][erg.constants["pohRan"]].fullName + ", and gave a knowing smile.  Allegedly her target turned very pale, took one guilty look at the fox shikigami and fled the scene.</p><p>The Bunbunmaru News approached Heart1 for comment this morning, but this reporter was unable to gain entrance to speak properly with her without proving to her that I'm not a shikigami.  Since that's impossible I was obliged to be on my way.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohRan"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};


//IN

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainMystia"]] = {

    key: erg.constants["pohPassionChangeScenarioGainMystia"],
    heart: erg.constants["pohMystia"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1 catches sparrow's eye, glasses at Choujuu Gigaku gig",
    text: "<p>Fan Heart1 was lucky enough to walk away with a souveneir from last night's riotous Choujuu Gigaku gig.  Amidst the storming cacophony of their encore number, guitarist/vocalist " + erg[erg.constants["pohHearts"]][erg.constants["pohMystia"]].fullName + " spotted Heart1 amongst the crowd and threw her &quot;sunglasses&quot; down to the devoted fan.</p><p>This morning, Heart1 had this to say to the Bunbunmaru News: &quot;On stage, " + erg[erg.constants["pohHearts"]][erg.constants["pohMystia"]].preferredName + " is a different person, a totally separate level of charisma and energy.  When you're in the crowd, you become a different person too.  That's why I cheered and put the glasses on, even though they made it impossible to see in the dark.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohMystia"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseMystia"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseMystia"],
    heart: erg.constants["pohMystia"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 terrorised by yakuza shrine maiden at lamprey stand",
    text: "<p>Late last night, Heart1 had just finished a hot meal of lamprey at " + erg[erg.constants["pohHearts"]][erg.constants["pohMystia"]].fullName + "'s stand when she was set upon by the Hakurei shrine maiden.  Reports indicate that Reimu accused her victim of stealing from an honest business owner by continually putting lampreys on a tab that would never be paid off, threatening instant extermination if payment was not forthcoming.</p><p>&quot;Business is business&quot; a visibly shaken Heart1 told this reporter this morning &quot;But bringing the Hakurei into it as a mercenary is unacceptable.&quot;</p><p>The Bunbunmaru News speculates that <em>if</em> an overwhelmingly powerful shrine maiden known to be the favourite of the Youkai Sage were operating a protection racket targeting youkai businesses, terror would prevent anyone from speaking to the media or authorities.  In such a situation, the business owners themselves may be blamed for any violence or property damage caused, even as their margins are squeezed by ruinous extortion.  Naturally we'd never accuse the Hakurei miko of such a thing!</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohMystia"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};


erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainKeine"]] = {

    key: erg.constants["pohPassionChangeScenarioGainKeine"],
    heart: erg.constants["pohKeine"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Bunbunmaru Special Request: Heart1's eaten history",
    text: "<p>The Bunbunmaru News is obliged to ask its beloved readers if they have any information regarding a story that recently vanished from our back issues.  We believe the article involved Heart1, but can recall no other details, so we must conclude that she engaged " + erg[erg.constants["pohHearts"]][erg.constants["pohKeine"]].fullName + " to eat that part of her history.  We understand some amongst our readership are sufficiently mighty to resist the hakutaku's power - can you shed any light on this mystery?</p><p>When confronted for comment earlier today, Heart1 wore a sickeningly smug expression, and refused to say anything other than a hearty endorsement of " + erg[erg.constants["pohHearts"]][erg.constants["pohKeine"]].preferredName + "'s services.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohKeine"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseKeine"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseKeine"],
    heart: erg.constants["pohKeine"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 blames last night's excesses on fabricated history",
    text: "<p>Early this morning, human villagers were disturbed by a row between Heart1 and were-hakutaku " + erg[erg.constants["pohHearts"]][erg.constants["pohKeine"]].fullName + " over an alleged incident of fabricated history.  As it's the time of the full moon, Ms " + erg[erg.constants["pohHearts"]][erg.constants["pohKeine"]].lastName + " was in beast form and little inclined to brook accusations, so an ugly scene threatened until medicine saleswoman Reisen Udongein Inaba managed to talk the furious parties down.</p><p>Investigation by this reporter uncovered witnesses to the incident that may have sparked the accusation, involving a series of moon-viewing parties across Gensokyo and beyond last night, ending in a spectacular drunken blow-out in the Celestial Heavens.  Witness Tenshi Hinanai claimed that she &quot;would definitely blame a hakutaku if I was seen doing that with my worst enemy!&quot; while Marisa Kirisame ventured &quot;It doesn't matter if Keine fabricated it or not, what I remember is so entertaining that I'm declaring it canonical.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohKeine"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainEirin"]] = {

    key: erg.constants["pohPassionChangeScenarioGainEirin"],
    heart: erg.constants["pohEirin"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Brain of the Moon intercedes with Youkai Sage, saves Heart1",
    text: "<p>This reporter personally witnessed a shocking confrontation this morning between the Youkai Sage, Yukari Yakumo and " + erg[erg.constants["pohHearts"]][erg.constants["pohEirin"]].fullName + " over the fate of Heart1, during the aftermath of the previous night's party at Eientei.  Having made an untimely joke about Lady Yakumo's interest in shrine maidens, Heart1 was at risk of having her boundary between pleasure and torment dissolved when Lady " + erg[erg.constants["pohHearts"]][erg.constants["pohEirin"]].lastName + " boldly stated that unleashing such a power in her house would &quot;impose certain obligations upon her as a host&quot;, and that she was concerned that she might &quot;perform inelegantly if called upon to do so after such a long time.&quot;  After a tense moment that seemed to this reporter to encompass eternity, the Youkai Sage laughed, complimented her host on her etiquette, and offered to pour tea to aid Heart1's recovery from hangover.</p><p>While naturally it would be dangerous for a simple reporter to speculate on the affairs of the mighty, wouldn't it seem like some elder beings conceal their greatest powers in order to further their schemes, while others do so simply out of a polite desire to fit in with Gensokyo society?</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohEirin"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseEirin"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseEirin"],
    heart: erg.constants["pohEirin"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 asks for second opinion, gets seven more she doesn't like",
    text: "<p>A youkai rabbit informant claims Heart1 was seen leaving a consultation with medical genius " + erg[erg.constants["pohHearts"]][erg.constants["pohEirin"]].fullName + " in a fury.  It seems she had hoped for a convenient treatment for a personal complaint, but was told to her dismay that changing her habits would be more efficacious than any drug.</p><p>When questioned by this reporter, the doctor refused to break the dread oath of patient confidentiality, but had this to say: &quot;Sometimes my patients don't like my diagnosis and declare they'll get a second opinion.  I tell them that I consider each problem from eight sides and think eight times before I speak, so in reality they're well past the second opinion already.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohEirin"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainKaguya"]] = {

    key: erg.constants["pohPassionChangeScenarioGainKaguya"],
    heart: erg.constants["pohKaguya"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Princesses display refined manners, charm Heart1",
    text: "<p>While drinking at Hakugyokuro last night, Heart1 reportedly observed that both Yuyuko Saigyouji and " + erg[erg.constants["pohHearts"]][erg.constants["pohKaguya"]].fullName + " were princesses of the Heian era, and should act more like it.  Rising to the bait, they conducted themselves in the refined manner of the ancient court, composed poetry with a haunting antique air, and implied scandalous things of men and women gone to dust ten centuries before.</p><p>Heart1 was happy to confirm the incident to the Bunbunmaru News this morning:  &quot;Slow news day, I suppose?  Well, it's true, their princess spirits rose to the challenge.  I felt just like Genji!  Of course Kaguya's performance was more like herself; wasn't Yuyuko just imitating the ghosts of princesses she's entertained for her job?&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohKaguya"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseKaguya"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseKaguya"],
    heart: erg.constants["pohKaguya"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Lunar Princess invokes royal prerogative over mochi, irritates Heart1",
    text: "<p>Reports indicate that Eientei's famed (but normal) mochi might be finally living up to the level of its reputation after head chef Reisen Udongein Inaba's recent training journey...but good luck getting a taste with " + erg[erg.constants["pohHearts"]][erg.constants["pohKaguya"]].fullName + " around.  Rabbit youkai informants described a scene from last week's mochi tasting when the princess swooped just before Heart1 could lay hands on a sample, claiming that &quot;as the princess, it's my duty to take the first taste.&quot; before eating everything in sight.  Her victim was not amused.</p><p>When pressed for comment by this reporter, the erstwhile Lunarian claimed ignorance, and insisted &quot;Hungry ghosts sometimes impersonate royalty - doesn't that story remind you of someone else?&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohKaguya"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainMokou"]] = {

    key: erg.constants["pohPassionChangeScenarioGainMokou"],
    heart: erg.constants["pohMokou"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Phoenix Terror completes pilgrimage, impresses Heart1",
    text: "<p>Reports from the Moriya shrine confirm that early yesterday morning " + erg[erg.constants["pohHearts"]][erg.constants["pohMokou"]].fullName + " arrived at the peak of the Youkai Mountain wreathed in flame to speak with the goddess Iwanagahime.  That divine personage rarely shows herself in this land of nightmare youkai and ambitious gods, but appeared promptly before the Hourai Immortal and engaged her in long conversation.</p><p>Heart1, who happened to have business at the shrine and saw the entire affair, found herself moved by the sight.  She told the Bunbunmaru News later that &quot;it's not at all uncommon to see someone in Gensokyo pursuing a grudge a thousand years old, but to apologise for their own wrongdoing of so long ago?  Perhaps it's justice and not vindictive pride that drives that phoenix-girl...&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohMokou"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseMokou"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseMokou"],
    heart: erg.constants["pohMokou"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 in awkward flight home after phoenix-flame burns clothes, hair",
    text: "<p>Heart1 was spotted flying furtively home in a dishevelled state last night after drawing too close to a practice spell card display by " + erg[erg.constants["pohHearts"]][erg.constants["pohMokou"]].fullName + " and Marisa Kirisame.  It seems when obliged to dodge a magical attack tentatively named &quot;Eternal Love Sign: Eight-Directions-Seeking Spark&quot;, she ran into the blast zone of a trial version of &quot;Unforgiving Earth's Core ~ Liquid Stone Mandala Eating the Sky.&quot;  While her spiritual power protected her from serious harm, her clothes and hair were not so lucky, leaving her to flee the seen largely disrobed and bald.</p><p>This reporter arrived on the scene to find the Hourai Doll and Black-White Witch still laughing.  I couldn't help but notice Ms Kirisame's hat, broom and clothes were covered with seals, just like those in " + erg[erg.constants["pohHearts"]][erg.constants["pohMokou"]].preferredName + "'s hair and clothes...</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohMokou"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};


//PoFV

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainYuuka"]] = {

    key: erg.constants["pohPassionChangeScenarioGainYuuka"],
    heart: erg.constants["pohYuuka"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Perfect flower brightens day of Heart1",
    text: "<p>This reporter spotted a touching scene earlier today while returning to the Youkai Mountain to print the very issue you hold in your hands!  Heart1 sat alone at the edge of the Garden of the Sun, seemingly lost in a world of her own troubles (perhaps stewing on her recent defeat at the hands of the shrine maiden team?).  Suddenly, a beautiful flower sprouted from the earth between her feet, provoking an equally pretty smile.</p><p>The Bunbunmaru news is unable to confirm that this was the work of " + erg[erg.constants["pohHearts"]][erg.constants["pohYuuka"]].fullName + ", and we certainly wouldn't accuse that mighty youkai warrior of harbouring a soft side.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohYuuka"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseYuuka"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseYuuka"],
    heart: erg.constants["pohYuuka"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Flower Master of the Four Seasons doesn't care about Heart1's story, clearly only at party for a fight",
    text: "<p>The colossal brawl at yesterday afternoon's Hakurei shrine drinking party was set off by " + erg[erg.constants["pohHearts"]][erg.constants["pohYuuka"]].fullName + "'s boredom during conversation with Heart1, witnesses claim.  While an all-hands battle is hardly unusual at a Gensokyo party, this incidence occurred much earlier than normal, when many of the gathering were still largely sober.</p><p>This reporter may have over-indulged earlier and consequently can't remember events clearly, but witness Youmu Konpaku was happy to speak to the Bunbunmaru News:  &quot;No-one thought it was time for a fight yet, but Heart1 was insisting on telling " + erg[erg.constants["pohHearts"]][erg.constants["pohYuuka"]].preferredName + " some story she clearly didn't care for.  Before long, she escaped the conversation by turning and striking Suika Ibuki in the face.  Naturally at such violence I was obliged to draw my swords to defend Lady Yuyuko's position by the snack table, and began to cut anyone who strayed too near...&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohYuuka"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainEiki"]] = {

    key: erg.constants["pohPassionChangeScenarioGainEiki"],
    heart: erg.constants["pohEiki"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Yamaxanadu divides fairy in half, satisfying Heart1",
    text: "<p>An ugly scene was narrowly averted this morning outside a certain curio shop near the Forest of Magic, thanks to the wisdom of Lady " + erg[erg.constants["pohHearts"]][erg.constants["pohEiki"]].fullName + ".  Having been pranked in humiliating fashion by a fairy living in the shop's roof, Heart1 and Komachi Onozuka were bickering over the right to exterminate it, and looked ready to unleash devastating power in the hopes of hitting it first, reports say.  The Yama's timely arrival provided a means of resolving the dispute: she cut the fairy in half, giving the injured parties one half each to exterminate.</p><p>Heart1 told Bunbunmaru News that she was satisfied with the decision:  &quot;It seemed eminently fair, and though you could say the fairy was truly exterminated by the Yama, I've never obliterated a half-fairy before, so the situation had novelty going for it.&quot;  The shinigami was less pleased: &quot;This fairness is really going too far.  Where are the employee perks?  I'm no better off than that maid or that rabbit..&quot;</p><p>The store's owner, though an eyewitness, had nothing useful to contribute to this report, continually exclaiming &quot;Why does no-one care that my roof was destroyed?&quot; in agitated fashion.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohEiki"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseEiki"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseEiki"],
    heart: erg.constants["pohEiki"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 well aware of her sins already, thanks anyway Lady Yama",
    text: "<p>Heart1 expressed &quot;what everyone else is thinking anyway&quot; in a drunken rant directed at " + erg[erg.constants["pohHearts"]][erg.constants["pohEiki"]].fullName + " during an evening gathering at Muenzuka, according to reports.  She is said to have been provoked, after an alleged lecture, to remark &quot;Of course I know what my sins are, I did commit them deliberately!  Next time I have to hide a body, should I leave a note informing the revered Lady Yama that I know she's watching?  This is Gensokyo, we're not going to stop on the account of morality!&quot;</p><p>Witness Iku Nagae later told Bunbunmaru News:  &quot;No matter how a Yama lectures you, it's imperative to take it with good grace.  I have enough trouble with the Eldest Daughter's disrespect for the shinigami without Gensokyo setting her this kind of bad example.  Still, it's to be expected when you hold a party at Muenzuka.  Who would do that?  Why did we even go?&quot;</p><p>Bunbunmaru News could not reach Heart1 for comment; there is some speculation she's undergoing a short corrective treatment in hell.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohEiki"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};


//MoF

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainShizuha"]] = {

    key: erg.constants["pohPassionChangeScenarioGainShizuha"],
    heart: erg.constants["pohShizuha"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Leaf goddess stages false autumn for Heart1",
    text: "<p>Having commented at a recent Moriya shrine party that it's a shame the autumn colours couldn't properly be viewed inside, Heart1 reportedly woke this morning to find beautifully lifelike autumn leaves painted around her bed, doubtless the work of " + erg[erg.constants["pohHearts"]][erg.constants["pohShizuha"]].fullName + ".</p><p>She spoke to Bunbunmaru News about her experience: &quot;It's a little disconcerting to think that someone was at work in your room while you slept, but I suppose I did invoke her divine domain, and the work is beautiful.  The paint was even dry, as if by a warm autumn wind!&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohShizuha"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseShizuha"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseShizuha"],
    heart: erg.constants["pohShizuha"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 traces injury of favourite oak tree back to slacker goddess",
    text: "<p>Early this morning, an angry Heart1 flagged down this reporter, gesticulating in animated fashion at a dying oak tree.  She claimed that evidence pointed to the tree having been damaged by a fierce kick the previous autumn, causing its subsequent failure to thrive and likely spiral into death.</p><p>When this reporter enquired as to who would go about kicking trees, an angry rant was provoked: &quot;Isn't it obvious?  There's only one girl who goes about kicking trees every year, and this is the price Gensokyo pays for her for her lazy habits.  How hard is it to pluck the leaves individually when you're a god with no other responsibilities?  Do your job!&quot;</p></p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohShizuha"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainMinoriko"]] = {

    key: erg.constants["pohPassionChangeScenarioGainMinoriko"],
    heart: erg.constants["pohMinoriko"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Sweet potato harvest for Heart1",
    text: "<p>Faithful Bunbunmaru News reader Heart1 asked this reporter to pass along a message of thanks to " + erg[erg.constants["pohHearts"]][erg.constants["pohMinoriko"]].fullName + " for the plate of freshly baked sweet potatoes that appeared on her doorstep this morning.  Gathering faith through breakfast service?  The Bunbunmaru News official editorial position is: yes please.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohMinoriko"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseMinoriko"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseMinoriko"],
    heart: erg.constants["pohMinoriko"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 reaps bad harvest",
    text: "<p>While enjoying lunch at a human village eatery yesterday, Heart1 began to choke and splutter in disgust and outrage as her food literally turned into ash in her mouth.  The resulting loss of her temper caused significant property damage and put the establishment's staff into fear for their lives.</p><p>Subsequent investigation by the Bunbunmaru News implicates harvest god " + erg[erg.constants["pohHearts"]][erg.constants["pohMinoriko"]].fullName + " in the affair, apparently as a campaign of divine retribution against farmers experimenting with outside world pesticides to protect their crops.  The god herself could not be reached for comment, but other deities around the Youkai Mountain agreed &quot;she'd probably do that&quot;</p><p>On calming down, Heart1 was obliged to apologise to the humans and compensate them for damages; she's sworn vengeance against the real culprit, and promised to exterminate insect youkai Wriggle Nightbug as a representative of the ultimate cause of the pesticide dispute.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohMinoriko"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainHina"]] = {

    key: erg.constants["pohPassionChangeScenarioGainHina"],
    heart: erg.constants["pohHina"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Absence of bad luck is good luck for Heart1",
    text: "<p>Festivalgoer Heart1 and alleged accomplice " + erg[erg.constants["pohHearts"]][erg.constants["pohHina"]].fullName + " were ejected from yesterday's Moriya shrine festival by a furious Sanae Kochiya, accused of cheating at festival games.  Witnesses report that the Moriya miko traced an unusual run of good and average luck on the part of Heart1 to the curse goddess' misfortune-absorbing abilities.</p><p>When questioned by this reporter, Heart1 refused to comment on the allegations, but did say &quot;Sanae should have let me keep the goldfish.  Scooping is a game of skill, luck doesn't come into it, good or bad!&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohHina"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseHina"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseHina"],
    heart: erg.constants["pohHina"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 regrets poorly concieved mercenary deal",
    text: "<p>The Bunbunmaru News has been able to confirm that the recent spell of bad luck plaguing Heart1 is a result of excessive contact with curse goddess " + erg[erg.constants["pohHearts"]][erg.constants["pohHina"]].fullName + ".  While this will not surprise our wonderfully astute readership, the question on everyone's lips must be &quot;Why did she go anywhere near a deity of misfortune without precautions?&quot;</p><p>&quot;Heart1 wanted me to get Sakuya Izayoi&quot; sighed " + erg[erg.constants["pohHearts"]][erg.constants["pohHina"]].preferredName + " sighed when questioned by this reporter.  &quot;I did my best to explain to her that it was best to mail me instructions, but she was so obsessed with having misfortune take the perfect maid down a peg that she insisted on briefing me in person and at length on what mishaps she wanted to befall her.  My powers don't even work that way!&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohHina"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainMomiji"]] = {

    key: erg.constants["pohPassionChangeScenarioGainMomiji"],
    heart: erg.constants["pohMomiji"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Telegnosis helps Heart1 avoid brutal beating",
    text: "<p>Stories of horrifying casualties and unbelievable property damage are still rolling in from across Gensokyo as a stunned populace tries to pull itself together and count the cost of an oni and a vampire making friends.  But amongst the tales of stomach-churning violence come episodes of miraculous escapes, such as that of Heart1, kept safe by the talents of " + erg[erg.constants["pohHearts"]][erg.constants["pohMomiji"]].fullName + ".</p><p>&quot;Without the wolf tengu's thousand-ri sight, I'd be a red smear under the fists of Ibuki and Scarlet.  With her keeping watch, we were able to keep something or someone breakable between us and the undersized titans at all times, until the Hakurei miko and Youkai Sage finally sobered up enough to put a stop to the carnage.&quot;<p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohMomiji"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseMomiji"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseMomiji"],
    heart: erg.constants["pohMomiji"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 sure that tengu are just claiming shogi rules are whatever the hell they need them to be at the time",
    text: "<p>After a mere three days of shogi, less than half the time a decent match requires, Heart1 conceded to " + erg[erg.constants["pohHearts"]][erg.constants["pohMomiji"]].fullName + ", bringing eternal shame upon herself and her connections.  The Bunbunmaru News condemns such weakness, especially when compounded by slander against the rules of the game.</p><p>When asked by this reporter to explain her wicked deed, Heart1 was defiant:  &quot;Ms Shameimaru, I know shogi, and that was no shogi. " + erg[erg.constants["pohHearts"]][erg.constants["pohMomiji"]].preferredName + " brought out a new rule every single time I touched a piece.  For three days!  She triple-promoted a Fusion Reactor piece, an act which you'll note makes no sense on any level.  She performed a wedding ceremony between her Magician and Puppeteer pieces, allowing her Miko and Sage pieces to stack and gap to my side of the board.  I won't take this mockery!&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohMomiji"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainKanako"]] = {

    key: erg.constants["pohPassionChangeScenarioGainKanako"],
    heart: erg.constants["pohKanako"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1 commissions sumo stadium from peerless divine builder for no good reason",
    text: "<p>The Bunbunmaru News can confirm that Moriya shrine deity " + erg[erg.constants["pohHearts"]][erg.constants["pohKanako"]].fullName + " constructed a huge sumo stadium overnight on flat land between the human village and the Great Youkai Forest.  While initial rumours indicated this was yet another Moriya shrine conspiracy to gather faith, investigation by this reporter has revealed the effort as a simple commission, or perhaps more accurately a dare.</p><p>&quot;Heart1 wanted one for some reason.&quot; the mountain god was happy to confirm &quot;I think she was drunk.  But it set me thinking - one of our shrines at Lake Suwa has a modest sumo ring, so it's still associated with my mythology.  If I had something in the outside world, couldn't I build it in Gensokyo at vastly grander scale?  That's the sort of place this is, right?  That turned out to be the case, though I'm not sure what good it is without wrestlers.  Maybe the oni will take up the sport?&quot;</p><p>For her part, Heart1 seemed nonplussed but pleased.  &quot;To be honest I don't remember much of last night, and I'm not sure what I'll do with a sumo stadium, but I'm certainly impressed at the craftsmanship and speed of service.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohKanako"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseKanako"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseKanako"],
    heart: erg.constants["pohKanako"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 nearly skewered by flying log",
    text: "<p>While flying about on her own business yesterday, Heart1 was very nearly shot down by a giant airborne log, according to witnesses.  Suspecting the culprit to be mountain god " + erg[erg.constants["pohHearts"]][erg.constants["pohKanako"]].fullName + ", she instantly set out for vengeance, and a violent incident was only avoided by the intercession of Suwako Moriya and Sanae Kochiya on their divine colleague's behalf.</p><p>When approached by this reporter for comment, " + erg[erg.constants["pohHearts"]][erg.constants["pohKanako"]].preferredName + " brushed aside the incident: &quot;It's normal for there to be a little risk when transporting sacred logs to a shrine.  At lake Suwa, our worshippers rode the logs down the mountains to the shrines at the shore, and it wasn't unusual for a few to be killed.  Since our shrine in Gensokyo is on top of the mountain, we're cutting down logs on the flatland and firing them towards the shrine with a rail gun.  It's the only rational way of proceeding.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohKanako"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};


//SA

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainParsee"]] = {

    key: erg.constants["pohPassionChangeScenarioGainParsee"],
    heart: erg.constants["pohParsee"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1 and hashihime make nuisances of themselves, bond",
    text: "<p>Heart1 was reportedly much the worse for wear during a recent trip to the Forest of Magic in the company of " + erg[erg.constants["pohHearts"]][erg.constants["pohParsee"]].fullName + ", though we are unable to confirm whether it was due to alcohol, narcotic mushroom fumes, the dread power of the hashihime or all three.  They were discovered out the back of the Kirisame-Margatroid household by the Black-White Witch, making a racket while comically failing to nail straw dolls into the trees.</p><p>Marisa was happy to speak with the Bunbunmaru News about the incident, on the condition that this reporter escort &quot;those two idiots&quot; out of the forest.  &quot;My wife is very busy right now answering the cries for help from Gensokyo's lovelorn that flood our mailbox every day.  It's shameful that this green-eyed pair tried to curse us in our own homes when we're giving our all for this land, day in and day out.  Though I can understand the jealousy.  We are amazing.  Alice is so beautiful and brilliant, I'm so noble and brave...hmm?  No, those are my wallets and alcohol.  Of course these two didn't bring anything like that with them.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohParsee"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseParsee"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseParsee"],
    heart: erg.constants["pohParsee"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 just wants to cross the damn bridge",
    text: "<p>&quot;If jealousy is the source of your youkai power, you can't help that&quot; confided Heart1 in her cups to this reporter &quot;But you can't stop people and make them relate every piece of gossip from the surface world before you let them cross your bridge.  I wouldn't even mind if she came with me to the Palace of Earth Spirits or the surface, I'd tell her everything on the way!  But I don't want to wait on that damn bridge all day for her curiosity to finally dry up.&quot;</p><p>The Bunbunmaru News would like to remind " + erg[erg.constants["pohHearts"]][erg.constants["pohParsee"]].fullName + " and the rest of our loyal readership that every piece of gossip worth knowing can be found in the Bunbunmaru News Society Pages, in the very edition you're holding in your hands.  Remember - it's the news Alice Margatroid relies on to unite you with the woman of your dreams!</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohParsee"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainYuugi"]] = {

    key: erg.constants["pohPassionChangeScenarioGainYuugi"],
    heart: erg.constants["pohYuugi"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1 rakes in a bonanza backing the oni",
    text: "<p>In an impromptu athletics tournament on the shores of the Misty Lake yesterday, oni champion " + erg[erg.constants["pohHearts"]][erg.constants["pohYuugi"]].fullName + " narrowly defeated challenger Hong Meiling.  After securing a comfortable win in the physical strength round by crushing charcoal into diamonds in her fists, the oni was trounced in the endurance round, as her youkai opponent stood with stalwart grace against thousands of merciless cuts unleashed by judge Youmu Konpaku.  The deciding round - jumping - went to the oni on a technicality when it was determined that her earth-shaking leaps were a more practical attack than Meiling's qi-powered glides when it was considered that both competitors could just fly anyway.</p><p>The real winner though was Heart1, whose wager with the Hakurei shrine maiden on the winner came up glittering.  &quot;It was just a silly bet, so we wagered rights to the rubble left by the strength competition - neither of us expected diamonds!  I didn't think I'd get my winnings home alive.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohYuugi"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseYuugi"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseYuugi"],
    heart: erg.constants["pohYuugi"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Deva of the Mountain really sorry about that unfortunate business, Heart1",
    text: "<p>The oni " + erg[erg.constants["pohHearts"]][erg.constants["pohYuugi"]].fullName + " insisted that today's edition of the Bunbunmaru News feature an apology from her to Heart1, adamant that &quot;She'll know what it's about.  Well, a lot happened yesterday, but she'll understand that I feel bad about unleashing...that.  How was I supposed to know just how wide an area would be affected?  Anyway, I'll be trying to make it right, I'm sure I can get the materials from...somewhere.&quot;</p><p>This reporter is at an absolute loss for what she might be talking about - if anything, yesterday was unusually quiet for Gensokyo.  Readers with any information should send word to the Youkai Mountain!</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohYuugi"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainRin"]] = {

    key: erg.constants["pohPassionChangeScenarioGainRin"],
    heart: erg.constants["pohRin"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1 disarmed by infernal purring",
    text: "<p>Heart1, poised yesterday to unleash devastation on the Palace of Earth Spirits over humiliating personal details allegedly leaked to the Bunbunmaru News by Satori Komeiji (enquire after our back-issues!), was halted mid-cast by the appearance of a purring, affectionate " + erg[erg.constants["pohHearts"]][erg.constants["pohRin"]].fullName + " in cat-form.  Flustered, she appeared unable to concentrate on her accusations towards Lady Satori, obliged to scratch the kasha behind the ears and rub her belly. Reportedly after a few minutes of playing with the &quot;kitty&quot; she sheepishly withdrew, as if no longer sure exactly what she was so angry about.</p><p>Witness Utsuho Reiuji was full of praise for the quick-thinking feline:  &quot;Hah, wasn't her way of dealing with it better than mine?  I was going to burn Heart1 to cinders, probably half the underground with her!  Lady Satori might have been mad.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohRin"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseRin"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseRin"],
    heart: erg.constants["pohRin"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Corpses are not gifts, insists Heart1",
    text: "<p>Heart1, while claiming to &quot;honestly appreciate the sentiment&quot; has been overheard to complain about gifts of corpses left on her doorstep by the kasha " + erg[erg.constants["pohHearts"]][erg.constants["pohRin"]].fullName + ".  Friends have confided in the Bunbunmaru News that they are unwilling to visit Heart1 while the hell-cat's fit of &quot;generosity&quot; continues, citing the putrescent odour that no amount of cleaning seems sufficient to defeat.</p><p>This reporter set out to corner the culprit for questioning, but finding her engaged in her gruesome work quickly decided the details were not of interest to the Bunbunmaru News' readers.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohRin"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};


//UFO

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainKogasa"]] = {

    key: erg.constants["pohPassionChangeScenarioGainKogasa"],
    heart: erg.constants["pohKogasa"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1 pleasantly surprised",
    text: "<p>Heart1, limping home yesterday after having been obliged to join the unfortunate Reisen Udongein Inaba in a danmaku battle against the Scarlet sisters, fell victim to the surprise attack of karakasa obake " + erg[erg.constants["pohHearts"]][erg.constants["pohKogasa"]].fullName + ".  This attack took the form of a care package of hot compresses, bandages, tea, sweets and flowers, much to Heart1's surprise.</p><p>&quot;She must have known I was prepared for my day to just keep getting worse&quot; the victim(?) commented today to this reporter &quot;So kindness was her only viable means of surprise.  Still, I can't argue with the result.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohKogasa"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseKogasa"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseKogasa"],
    heart: erg.constants["pohKogasa"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 finding tsukumogami activism increasingly tiresome",
    text: "<p>Heart1, while attempting to dispose of various worn-out household items yesterday was overheard bickering with umbrella girl " + erg[erg.constants["pohHearts"]][erg.constants["pohKogasa"]].fullName + ".  The karakasa obake reportedly calimed that the disposal was disrespectful and traumatic for the divine inhabitants of the items, insisting Heart1 take her rubbish to the kappa for recycling.  The victim only managed to escape harrasment by sending " + erg[erg.constants["pohHearts"]][erg.constants["pohKogasa"]].preferredName + " after Scarlet Devil Mansion head maid Sakuya Izayoi, whose daily routine includes merciless disposal of vast quantities of ruined goods from that wasteful household.</p><p>&quot;It's not like I want Gensokyo to be overrun by tsukumogami either,&quot; insisted Heart1 when questioned by the Bunbunmaru News &quot;but the kappa aren't running a charity - they'll only take what they can use for whatever bizarre project they have on at the time.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohKogasa"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainIchirin"]] = {

    key: erg.constants["pohPassionChangeScenarioGainIchirin"],
    heart: erg.constants["pohIchirin"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1's flower viewing saved by cloud-ruling youkai",
    text: "<p>Heart1's long-anticipated flower-viewing party was in danger of cancellation yesterday, threatened by a sudden rainstorm.  Attendee " + erg[erg.constants["pohHearts"]][erg.constants["pohIchirin"]].fullName + " made herself the hero of the party when she simply summoned the clouds from the sky into her hand, packing them into a tight ball which she threw to ice fairy Cirno to freeze for later release.</p><p>This reporter was on the scene and spoke to the cloud-taming nun about her feat:  &quot;It was nothing much.  Everyone thinks I'm just a nyuudou user, but that's like calling the Youkai Sage just a fox user.  My vehicle is the dharmacakra, I should be ashamed if I couldn't deal with a few clouds!&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohIchirin"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseIchirin"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseIchirin"],
    heart: erg.constants["pohIchirin"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 tired of lazy nuns, refuses to name names",
    text: "<p>Heart1, tired and emotional in the dying stages of a Myouren temple party last night, cornered this reporter to unburden herself of some rankling resentment.  &quot;It's fine to use a familiar or shikigami in a fight, that much is expected.  But don't you have to use some danmaku yourself?  Some nuns want respect as youkai even though they're never seen to do anything, even going so far as to get their cloud-youkai slaves to pull down jars from high shelves.  That's like a strategist seeking respect as a soldier without ever drawing her sword or marching in formation!&quot;</p><p>This reporter managed to escape by distracting Heart1 with a claim that the Hakurei shrine maiden wished to see her, and forgot about the incident until it was noticed the Bunbunmaru News was short a couple of paragraphs of column space on page 3 a few minutes ago.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohIchirin"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainMurasa"]] = {

    key: erg.constants["pohPassionChangeScenarioGainMurasa"],
    heart: erg.constants["pohMurasa"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1 wins boating competition with funayuurei assistance ",
    text: "<p>Heart1, challenged yesterday to a boating race on the Misty Lake for no good reason by the Celestial Tenshi Hinanawi, found herself carried to victory by the intervention of ship-sinking specialist " + erg[erg.constants["pohHearts"]][erg.constants["pohMurasa"]].fullName + ".  Appearing suddenly on the Celestial's boat, the funayuurei engaged her in easy conversation while using her ladle to inexorably fill the vessel with water.  Charmed by the ghost's elegant manner and focused on defeating Heart1, Hinanawi was unaware of her plight until the boat finally slipped beneath the surface and was lost.</p><p>&quot;Funayuurei are legitimate nautical hazards!&quot; competition judge Komachi Onozuka told the Bunbunmaru News &quot;Every sailor must be ready for them at all times; even the appearance of a powerful one like Myouren Temple's can't invalidate the results of a race!&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohMurasa"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseMurasa"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseMurasa"],
    heart: erg.constants["pohMurasa"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 tired of ship's captain monopolising Yuyuko at parties",
    text: "<p>Heart1, exasperated at yet another Hakugyokuro party in which ship captain " + erg[erg.constants["pohHearts"]][erg.constants["pohMurasa"]].fullName + " kept Mistress of the Netherworld Yuyuko Saigyouji talking about drowning victims all night, complained loudly of the situation to a clearly disinterested Youkai Sage and Hakurei miko.  &quot;It's not like the rest of us haven't seen plenty of humans go to their graves over the years.&quot; witnesses claim she said &quot;It'd be nice to hear how the ones that were beheaded, burned, shot, struck by lightning or eaten are doing on the other side, but no, it's drowning, every night!  Anyway, it's not like I care who Yuyuko talks to, I just want to hear some different stories.&quot;</p><p>The hostess herself spoke to the Bunbumaru News this morning:  &quot;Oh, last night?  Wasn't I speaking with that dashing ship's captain?  A girl in uniform you know, it can make even this old ghost's heart race.  Eh?  Heart1 was bothering Yukari and Reimu?  Sounds like something that Kochiya girl would orchestrate.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohMurasa"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainShou"]] = {

    key: erg.constants["pohPassionChangeScenarioGainShou"],
    heart: erg.constants["pohShou"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1 reports avatar of Bishamonten &quot;much more fun when she's been drinking&quot;",
    text: "<p>Late last night, a dishevelled Heart1, still clearly recovering from the previous night, flagged down this reporter while on her way home.  &quot;I'm not going to remember any of this tomorrow, so you'll have to print it in that rag of a newspaper and I'll read it for once.&quot; - readers should note that Heart1 is a devoted customer of the Bunbunmaru News and would only say such a thing when deranged from excessive festivities - &quot;Everybody needs to know that " + erg[erg.constants["pohHearts"]][erg.constants["pohShou"]].fullName + " is great when she's had a drink or seventy.  Just great.&quot;</p><p>&quot;Normally she's so reserved, you know?  But on her eighth bottle or so it all changes - out come the tiger growls, the dirty jokes, the lasers!  I'm going to have to apologise to half of Gensokyo tomorrow, but it'll be worth it.  Go see for yourself - I left her in a tree in the Forest of Magic, messed up on mushrooms from Marisa's garden.  Take her some clothes and another bottle and she'll tell you all about it!&quot;</p><p>Disciple Nazrin of Myouren temple contacted the Bunbunmaru News this morning to clarify that the actions of avatars do not necessarily reflect the character or opinions of their divine selves.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohShou"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseShou"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseShou"],
    heart: erg.constants["pohShou"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 tired of gems",
    text: "<p>Heart1, seen pouring another bucket of worthless sapphires, diamonds and emeralds into the Hakurei shrine donation box yesterday by this reporter, blamed avatar of Bishamonten " + erg[erg.constants["pohHearts"]][erg.constants["pohShou"]].fullName + " for the depression in gem prices.  &quot;There was a time I'd be excited to spot a ruby from the air - I'd even swoop down to pick it up, fight off any other claimants!  But since that tiger youkai settled into Gensokyo and started blasting away with her treasure-creating laser during danmaku matches, gemstones have just become a nuisance.  I hear Marisa, Alice and Patchouli are set for reagents for the next thousand years, but it's done no-one else any good.&quot;  She then advised this reporter to flee the scene, since &quot;nobody has told Reimu that she isn't really fabulously wealthy.&quot;</p><p>Disciple Nazrin of Myouren Temple contacted the Bunbunmaru News shortly before press time to assert that the economy was merely a manifestation of worldly suffering, and that only by understanding its illusionary nature can one free oneself from the agonies of depreciation.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohShou"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainByakuren"]] = {

    key: erg.constants["pohPassionChangeScenarioGainByakuren"],
    heart: erg.constants["pohByakuren"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1 helps Myouren temple chief priest maintain her vows",
    text: "<p>&quot;It's difficult fitting in with Gensokyo's mighty as a priest!&quot; confided youkai temple leader " + erg[erg.constants["pohHearts"]][erg.constants["pohByakuren"]].fullName + " to this reporter late last night at a particularly rambunctious Moriya shrine celebration.  &quot;It's rude to refuse your hostess and friends pouring cups for you, but I can't drink!  Thankfully I have the company of compassionate souls such as Heart1 here, who is bravely shouldering my burden for me tonight.  She is another Kannon.&quot;  At this, she delicately poured the contents of her cup into that of her ally, who in turn disposed of it with only moderate spillage.</p><p>This reporter is proud to say she also volunteered to do her bit for the Myouren leader, though as a result details of other stories from the party may be sketchy.  Please accept the Bunbunmaru News' apologies, faithful readers!</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohByakuren"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseByakuren"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseByakuren"],
    heart: erg.constants["pohByakuren"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Auto-chanting feature disturbs Heart1, other restaurant patrons",
    text: "<p>Last night the grand opening of a new yakitoriya in the human village came to a disastrous end when Myouren shrine leader " + erg[erg.constants["pohHearts"]][erg.constants["pohByakuren"]].fullName + "'s auto-chanting sutra scroll enraged restaurant patron Heart1, setting off a massive brawl.  While thankfully no humans were seriously injured and the shrine maidens have concluded that no retaliatory exterminations are necessary, the yakitoriya was totally destroyed and unlikely to reopen this season.</p><p>The Bunbunmaru News caught up with a recovering Heart1 for comment:  &quot;I was discussing danmaku with Marisa, as you do, and most of the other tables were discussing notable battles from the last week too.  Well, every time someone mentioned an attack, that damn scroll unfurled itself and chanted a defensive spell.  It made conversation impossible, but " + erg[erg.constants["pohHearts"]][erg.constants["pohByakuren"]].preferredName + " insisted she couldn't turn it off or leave it outside.  What good is eating out if you can't talk danmaku?&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohByakuren"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainNue"]] = {

    key: erg.constants["pohPassionChangeScenarioGainNue"],
    heart: erg.constants["pohNue"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Seeds of Unknown Form OK by Heart1",
    text: "<p>While the Seeds of Unknown Form used by " + erg[erg.constants["pohHearts"]][erg.constants["pohNue"]].fullName + " to rob identity from objects are generally regarded as a nuisance, they have a fan in Heart1, who explained her partiality to the Bunbunmaru News today:  &quot;People make a fuss about the seeds, but only because they're afraid of their own desires.  When the nue robs an object of its identity, don't you see what you want to see?  I see flowers, sweets and pretty girls, there's no shame in that!  I wonder what the others are trying to hide?&quot;</p><p>This reporter sees awards for excellence in reporting and high circulation, which frankly <strong>is</strong> a nuisance as the Bunbunmaru News has so many of them around already.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohNue"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseNue"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseNue"],
    heart: erg.constants["pohNue"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 tired of nue's tentacle excuse",
    text: "<p>Heart1 is fed up with " + erg[erg.constants["pohHearts"]][erg.constants["pohNue"]].fullName + "'s protests of innocence after &quot;pranks&quot; perpetrated by her tentacles at parties, the Bunbunmaru News was told yesterday.  &quot;This is serious.  Some of the things she's done with those tentacles are deeply inappropriate, she can't claim they have a mind of their own and laugh it off.  If you're reading this, nue, I'm telling you that you can't have face in Gensokyo as a youkai if you don't own your deeds and fight whatever trouble they earn you.&quot;</p><p>This reporter approached the alleged culprit (both girl and tentacles) for comment, but couldn't make out anything intelligible from the laughter provoked by the question.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohNue"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};


//DS

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainHatate"]] = {

    key: erg.constants["pohPassionChangeScenarioGainHatate"],
    heart: erg.constants["pohHatate"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1 inexplicably turns to Spirit Photography for answers",
    text: "<p>In a troubling development for the cause of truth in Gensokyo, Heart1 is crediting " + erg[erg.constants["pohHearts"]][erg.constants["pohHatate"]].fullName + "'s Spirit Photography techniques for saving her from the intrigues of Celestial Tenshi Hinanawi.  Allegedly the sole journalist (and sole reader!) of the disreputable Kakashi Spirit News produced photographs showing Hinanawi briefing her servant Iku Nagae on a planned assault upon Heart1's home.</p><p>The Bunbunmaru News would like to remind its readers that Spirit Photography is a process discredited by the Tengu and Kappa Association of Journalistic Science, and that rather than serving as proof of Tenshi Hinanawi's guilt, such images must instead demonstrate her innocence.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohHatate"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseHatate"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseHatate"],
    heart: erg.constants["pohHatate"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 makes mistake of reading wrong newspaper",
    text: "<p>The Bunbunmaru News recieved a letter to the editor today from Heart1, protesting against her treatment in the pages of " + erg[erg.constants["pohHearts"]][erg.constants["pohHatate"]].fullName + "'s Kakashi Spirit News.  Supposedly a recent article was completely inaccurate, whether due to malice on the author's part or one of the many flaws in the disreputable practice of Spirit Photography.</p><p>This reporter would like to remind our faithful readers that there's never any reason to concern yourself with the contents of the Kakashi Spirit News, indeed no reason to ever read it at all.  The Bunbunmaru News is the only newspaper of record in Gensokyo; you can rely on your honest and pure Aya Shameimaru to bring you the news of the day without fear or favour!</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohHatate"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};


//TD

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainKyouko"]] = {

    key: erg.constants["pohPassionChangeScenarioGainKyouko"],
    heart: erg.constants["pohKyouko"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1 enlists yamabiko as amplifier",
    text: "<p>Chosen by lot yesterday as the general for the blue team in a series of mock war-games against the forces of vampire Remilia Scarlet, Heart1 found herself obliged to negotiate with the aristocratic devil across a broad canyon near the Youkai Mountain.  As the parties were having difficulty conversing across the windy divide, yet the tense military situation prevented either side from simply flying across, the quick-thinking blue general enlisted yamabiko " + erg[erg.constants["pohHearts"]][erg.constants["pohKyouko"]].fullName + " to bellow her demands at Remilia.</p><p>&quot;In the end, negotiations didn't go well,&quot; Heart1 told this reporter during a break in the fighting &quot;but thanks to the yamabiko, at least they were possible!&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohKyouko"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseKyouko"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseKyouko"],
    heart: erg.constants["pohKyouko"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 showered by glass in Choujuu Gigaku stunt",
    text: "<p>Yesterday afternoon a publicity stunt by punk rockers Choujuu Gigaku in the human village left Heart1 covered in cuts after lead vocalist " + erg[erg.constants["pohHearts"]][erg.constants["pohKyouko"]].fullName + " shattered a stack of glass vases with just her voice.  The event quickly descended into violence, obliging shrine maidens Reimu Hakurei and Sane Kochiya to bombard the area with danmaku.</p><p>&quot;When you have a voice like that, you have to use it, I suppose.&quot; the victim conceded to the Bunbunmaru News later that day &quot;But show some restraint, " + erg[erg.constants["pohHearts"]][erg.constants["pohKyouko"]].preferredName + "!  I was standing right there!&quot;</p><p>When asked for comment, the yamabiko herself said only that the publicity session was &quot;a great success&quot; and that &quot;people should come to the show if they want to see even greater punk power!&quot;<p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohKyouko"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainYoshika"]] = {

    key: erg.constants["pohPassionChangeScenarioGainYoshika"],
    heart: erg.constants["pohYoshika"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Jiang Shi robbed in anti-thievery contest, claims Heart1",
    text: "<p>Tempers flared yesterday when an anti-thievery competition between Scarlet Devil gate guard Hong Meiling and guard-type Jiang Shi " + erg[erg.constants["pohHearts"]][erg.constants["pohYoshika"]].fullName + " ended without resolution thanks to Meiling's unusual tactics.  Both competitors were tasked with defending a storehouse full of valuables from all comers.  As they were even on points after the final round, the competition went to Extra Mode, with peerless thief Marisa Kirisame their opponent.  The Jiang Shi resisted normally but was overcome; Hong Meiling chatted amiably with the Black-White Witch, let her take what she wanted, then left the competition grounds to simply re-purchase the stolen goods from the Kirisame Anything Goes Magic Shop.</p><p>As arguments exploded around her on all sides, competition judge Reimu Hakurei reportedly stated &quot;This is stupid, I'm going home.&quot; and departed the field.</p><p>This non-result enraged fans even further, as Heart1 told this reporter this morning: &quot;" + erg[erg.constants["pohHearts"]][erg.constants["pohYoshika"]].fullName + " was the only one who acted like a guard to the end - and even beyond, you can still see her out there guarding her half of the competition ground now!  One flash of a black-white dress and Meiling turned into a gangster.  The only just result could be a win to the Jiang Shi by disqualification!&quot;</p><p>Bookmaker Tewi Inaba, in a prepared statement for the Bunbunmaru News, sympathised with customers who had lost out on this &quot;unlikely debacle&quot; but reminded them she had offered excellent odds on the competition failing due to &quot;accident, corruption or bickering&quot; and had faithfully paid out to those who backed that option; thus she is no position to refund losing bets.  Furthermore, she categorically denies &quot;making any incentive or other payment to the Kirisame Anything Goes Magic Shop over this matter.&quot;<p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohYoshika"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseYoshika"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseYoshika"],
    heart: erg.constants["pohYoshika"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 feels obliged to remind everyone that Jiang Shi is a corpse",
    text: "<p>&quot;Look, I know she's quite personable and has many other good qualities, but " + erg[erg.constants["pohHearts"]][erg.constants["pohYoshika"]].fullName + " is a dead body!&quot; Heart1 reportedly told anyone who would listen last night.  &quot;It's not just that she's inflexible, that's actually rigor mortis.  This is serious, she's not a vampire with their vague, romantic affectations to unlife, she's one failed spell away from worm food.&quot;</p><p>The Bunbunmaru News can't dispute the truth of Heart1's statements, but weren't they a bit gauche?  Readers with any information on what set off this tirade are asked to contact the Bunbunmaru News Social Pages.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohYoshika"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainSeiga"]] = {

    key: erg.constants["pohPassionChangeScenarioGainSeiga"],
    heart: erg.constants["pohSeiga"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Wicked hermit OK when she's targeting someone else, says Heart1",
    text: "<p>&quot;I've got plenty of time for " + erg[erg.constants["pohHearts"]][erg.constants["pohSeiga"]].fullName + "&quot; confided Heart1 to this reporter earlier today &quot;Certainly she's full of wicked thoughts and says terrible things about everyone, particularly what they do within the four walls of their homes.  But if she's telling you about what goes on in the Hakurei shrine late at night, she's not telling Reimu about what you get up to.  I've found it safer to drink with her whenever possible; and I'm not so virtuous a woman as to be uninterested in gossip.  Otherwise I'd never read your terrible paper!&quot;</p><p>The Bunbunmaru News would like to remind its beloved readers that getting your information from the pure and honest Aya Shameimaru is infinitely more reliable than gossip from evil hermits!</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohSeiga"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseSeiga"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseSeiga"],
    heart: erg.constants["pohSeiga"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 cremates another evil Taoist, claims it's a bamboo rod",
    text: "<p>This reporter came across a shocking sight this morning:  Heart1 dragging the corpse of hermit " + erg[erg.constants["pohHearts"]][erg.constants["pohSeiga"]].fullName + " out to a slapdash pyre for incineration.  On being confronted, the apparent murderer showed only irritation.  &quot;Oh, here's one for your rag, Aya.  This damn hermit keeps leaving bamboo rods around the place, disguised as her own dead body.  It's a Taoist trick used to fool your family when you're sneaking off to gain enlightenment, but not having a family she just uses it to annoy me.  I can't have fake corpses stacked up around my house!&quot;</p><p>The Bunbunmaru News urges its readers to check any corpses they find around Gensokyo for signs of really being sticks.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohSeiga"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};


erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainTojiko"]] = {

    key: erg.constants["pohPassionChangeScenarioGainTojiko"],
    heart: erg.constants["pohTojiko"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1 enjoys rousing game of Lightning Bomb",
    text: "<p>Fired up after last night's Choujuu Gigaku alcohol-fuelled concert/riot, Heart1 and accomplice " + erg[erg.constants["pohHearts"]][erg.constants["pohTojiko"]].fullName + " decided to wake up the few of Gensokyo's residents who'd somehow slept through the avalanche of noise by exploding random objects over their houses with thunder and lightning.  Furious victims report hearing giggling in the wake of the detonations, and property damage caused by the rain of miscellaneous shrapnel.</p><p>When speaking to the Bunbunmaru News today, Heart1 was unapologetic:  &quot;I'd just haul something that caught my eye up into the sky and fling it away before " + erg[erg.constants["pohHearts"]][erg.constants["pohTojiko"]].preferredName + " called the thunder down.  It was hilarious!  Oh, we disturbed people?  Well, if they'd been at Choujuu Gigaku they wouldn't have had any trouble, so surely it's their own fault.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohTojiko"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseTojiko"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseTojiko"],
    heart: erg.constants["pohTojiko"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 begs vengeful ghost to just let it go",
    text: "<p>After being obliged to dodge a lightning strike following a mild disagreement over the fate of a block of tofu in the human village this morning, Heart1 wearily begged " + erg[erg.constants["pohHearts"]][erg.constants["pohTojiko"]].fullName + " to &quot;stop being a vengeful ghost about every bloody thing,&quot; witnesses report.  She continued with &quot;In Gensokyo, it's fine to be just a thunder ghost.  You don't need the vengeful angle, so please just calm down and let something go for once in your unlife!&quot;</p><p>The bourei, taking some offence to this, reportedly claimed that &quot;under that logic, I can just blast away with thunder whenever I please for no reason!&quot; - resulting in the worst thunderstorm to hit the village in over ten years.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohTojiko"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainFuto"]] = {

    key: erg.constants["pohPassionChangeScenarioGainFuto"],
    heart: erg.constants["pohFuto"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Shikaisen hermit cuts noble figure losing to shinigami, impresses Heart1",
    text: "<p>Attacked unexpectedly by shinigami Komachi Onozuka and accomplice Yuyuko Saigyouji last night in the garden of the Scarlet Devil Mansion, shikaisen hermit " + erg[erg.constants["pohHearts"]][erg.constants["pohFuto"]].fullName + " reportedly appealed to passer-by Heart1 for aid.  The battle did not go well for the hermit or her erstwhile rescuer, but she managed to cut an impressive figure in stoically accepting her fate for having been at last struck down by the reaper.  So moving was her nobility, witnesses say, that everyone felt let down when it became apparent that Komachi had no intention of claiming the hermit's soul; the netherworld powers were attacking randomly for their own amusement rather than discharging their duties.</p><p>&quot;" + erg[erg.constants["pohHearts"]][erg.constants["pohFuto"]].preferredName + " really did accept her fate with uncommon grace!&quot; Heart1 told this reporter later that evening &quot;I hope I get to see her last real battle against the shinigami, it was such a shame today turned out to be ordinary Gensokyo thuggery.&quot;</p><p>For her part, Onozuka insisted her hands were tied &quot;It was such a moving scene, I would have claimed her soul if I could.  But a ferrywoman like myself can't get involved with direct collection - demarcation disputes amongst shinigami are nothing to laugh at!&quot;<p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohFuto"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseFuto"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseFuto"],
    heart: erg.constants["pohFuto"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 attempts to mediate conversation between old-fashioned hermit and fashionable shrine maiden, loses it",
    text: "<p>Finding herself in the company of shikaisen hermit " + erg[erg.constants["pohHearts"]][erg.constants["pohFuto"]].fullName + " and deified shrine maiden Sanae Kochiya at a recent Hakurei shrine gathering, Heart1 reportedly made a naive attempt to get the two talking amongst themselves.  Witnesses claim this lead directly to her throwing her drink at both her companions and storming out of the party.</p><p>&quot;They were being such children about it!&quot; a still-agitated Heart1 told the Bunbunmaru News today &quot;Fourteen hundred years' age difference is nothing to be sniffed at, but they were treating each other like alien beings.  I know for a fact Sanae has been to Horyuji and Shitennoji on school trips, she can't pretend to be ignorant of the Asuka period.  And as for the hermit, she might not understand outside world shikigami, but Sanae doesn't use those anymore!  And it's not like Lake Suwa sprang up yesterday.  Honestly, when they started telling each other to speak Japanese, I lost it.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohFuto"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainMiko"]] = {

    key: erg.constants["pohPassionChangeScenarioGainMiko"],
    heart: erg.constants["pohMiko"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Taoist saint takes Heart1's side in debate with Great Unmoving Library",
    text: "<p>During a soiree held in the Scarlet Devil Mansion's library yesterday, Heart1 reportedly found herself in a bitter debate with an irritable Patchouli Knowledge.  Apparently upset that her landlord had exercised her right to hold a party in the library, the witch allegedly set out to intellectually bully Heart1 and thereby assert some sort of authority.  Taking an interest in the matter, " + erg[erg.constants["pohHearts"]][erg.constants["pohMiko"]].fullName + " begged leave of the victim to take up the gauntlet in her stead, engaging in a furious battle of wits with the Seven Day Witch.</p><p>&quot;It's not like I couldn't have overcome her myself!&quot; Heart1 insisted to this reporter &quot;But " + erg[erg.constants["pohHearts"]][erg.constants["pohMiko"]].preferredName + " cut something of a dashing figure, didn't she?  I didn't have the heart to refuse her.  I'm sure she only did it out of want of intellectual exercise, but I still have a right to let myself be spoiled now and again.&quot;</p><p>The hero herself brushed aside this reporter's questions, but clearly had been provoked to a contemplative mood by the affair:  &quot;I should write some books of my own.  These modern-day scholars have nothing but contempt for an oral argument, and it turns out my efforts to fabricate history in the past have been all too successful.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohMiko"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseMiko"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseMiko"],
    heart: erg.constants["pohMiko"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Shotouku Taoist gives Heart1 ticket number 11",
    text: "<p>After yesterday's intense and bitter factional struggles, statesman-saint " + erg[erg.constants["pohHearts"]][erg.constants["pohMiko"]].fullName + " found herself besieged by petitioners and complainants when passing impudently through the grounds of Myouren temple this morning.  Witnesses claim she listened patiently to the first nine shout over the top of each other, but when Heart1 attempted to barge in on the noisy scene, passed her a scrap of paper with the number 11 scrawled on it, and motioned her to wait.  This set off yet another brawl.</p><p>&quot;I was the tenth!&quot; a furious Heart1 told the Bunbunmaru News &quot;Everyone knows she can hear ten conversations at once, how dare she pretend I was one too many?&quot;</p><p>Joining the crowd questioning the saint shortly before publication, this reporter patiently waited to drop into the top ten and then enquired after the incident.  She replied:  &quot;The Kochiya goddess has been kind enough to help me connect a small outside-world shikigami to my earmuffs.  A so-called audio drama has been my number ten all day.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohMiko"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainMamizou"]] = {

    key: erg.constants["pohPassionChangeScenarioGainMamizou"],
    heart: erg.constants["pohMamizou"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Bake-danuki bankrolls Heart1's fairy workforce scheme",
    text: "<p>Gensokyo entrepreneur Heart1 has concluded a deal with moneylender " + erg[erg.constants["pohHearts"]][erg.constants["pohMamizou"]].fullName + " to finance her scheme to legitimise and professionalise the fairy labour industry.  Local heavyweights Remilia Scarlet, Marisa Kirisame and Suwako Moriya are touted as potential customers, with long-term prospects for the industry looking rosy as Gensokyo's incident-causing miscreant population grows.</p><p>The bake-danuki expressed unqualified optimism for the scheme:  &quot;Everyone here seems to use fairies and wild youkai to slow down heroes on a rampage, but not much planning goes into it, just the same old slapdash baiting and herding you'd see centuries ago.  Heart1's company will see both fairy quality and quantity increased for its customers, while freeing them up to plan out their witty repartee rather than herd brainless nature spirits.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohMamizou"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseMamizou"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseMamizou"],
    heart: erg.constants["pohMamizou"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Heart1 can see the tail, seriously",
    text: "<p>Bunbunmaru News reader Heart1 has requested that it be made known to infamous bake-danuki " + erg[erg.constants["pohHearts"]][erg.constants["pohMamizou"]].fullName + " that she &quot;can see the tail.  You know I can see the tail.  Please stop, it's humiliating for both of us.  Next time I'm just going to set the whole area on fire.&quot;</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohMamizou"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};


//WaHH

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioGainKasen"]] = {

    key: erg.constants["pohPassionChangeScenarioGainKasen"],
    heart: erg.constants["pohKasen"],
    change: erg.constants["pohPassionChangeScenarioGainValue"],
    title: "Heart1 applauds oni hermit's incessant nagging of shrine maidens",
    text: "<p>&quot;I'll say this about " + erg[erg.constants["pohHearts"]][erg.constants["pohKasen"]].fullName + ",&quot; a festive Heart1 told this reporter while the rose-haired hermit lectured shrine maidens Reimu Hakurei and Sanae Kochiya nearby &quot;she'll never give up on telling those out-of-control miko what for!  Certainly one of them is a living goddess who does as she pleases and the other is an unholy terror whose spiritual power is enough to darken the sun and turn all the land to ash, but that's no reason for them to ignore the traditions of their job!  That hermit is the one with the courage to tell them what they need to hear, even though they never listen and will probably just exterminate her at some point.&quot;</p><p>When asked for comment by the Bunbunmaru News, both shrine maidens rolled their eyes before launching into a drunken competition to do the best Ibaraki impersonation.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohKasen"]].preferredName + " raises by " + erg.constants["pohPassionChangeScenarioGainValue"] + " to HeartNewPassionValue1</em></p>"

};

erg[erg.constants["pohPassionChangeScenarios"]][erg.constants["pohPassionChangeScenarioLoseKasen"]] = {

    key: erg.constants["pohPassionChangeScenarioLoseKasen"],
    heart: erg.constants["pohKasen"],
    change: erg.constants["pohPassionChangeScenarioLoseValue"],
    title: "Hermit oni not fooling anyone: Heart1",
    text: "<p>After yet another Hakurei shrine party where " + erg[erg.constants["pohHearts"]][erg.constants["pohKasen"]].fullName + " excused herself on hearing of the arrival of Suika Ibuki, Heart1 reportedly lost patience with the rose-haired hermit.  &quot;Everyone knows you're an oni!&quot; she reportedly shouted after the departing partygoer &quot;Who do you think you're fooling with those cute buns over your horns?  I'm going to go tell Suika that the third Deva of the Mountain was here, and she's not even going to care!&quot;</p><p>When this reporter approached Ms Ibuki for comment, she had this to say:  &quot;Kasen's in town?  This is cause for celebration - everyone drink until you can't remember your name.&quot;  Long-suffering and unwilling hostess Reimu Hakurei clarified this exact sequence of events played out dozens of times a year.</p><p><em>Heart1's passion for " + erg[erg.constants["pohHearts"]][erg.constants["pohKasen"]].preferredName + " falls by " + erg.constants["pohPassionChangeScenarioLoseValue"] + " to HeartNewPassionValue1</em></p>"

};



//################################### DANMAKU OPPONENT REPOSITORY #################################################

erg[erg.constants["pohDanmakuOpponents"]] = {};


//PCs

//Reimu

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentReimu"]] = {

    key: erg.constants["pohDanmakuOpponentReimu"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Reimu",
    lastName: "Hakurei",
    fullName: "Reimu Hakurei",
    preferredName: "Reimu",
    title: "Shrine Maiden of Paradise",
    profilePrefix: "reimu",
    tier: erg.constants["pohTierYoukaiMiko"],
    attackLabel: "humiliated",
    spellCards: ["Spirit Sign: Fantasy Seal -Concentrate -", "Divine Arts: Omnidirectional Demon Binding Circle", "Divine Arts: Omnidirectional Dragon Slaying Circle", "Great Barrier: Hakurei Danmaku Barrier", "Dream Sign: Fantasy Dimensional Rift", "Holy Relic: Yin-Yang Sanctifier Orb"]
    
};

//Marisa

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentMarisa"]] = {

    key: erg.constants["pohDanmakuOpponentMarisa"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Marisa",
    lastName: "Kirisame",
    fullName: "Marisa Kirisame",
    preferredName: "Marisa",
    title: "Prince of Witches",
    profilePrefix: "marisa",
    tier: erg.constants["pohTierConqueringWitch"],
    attackLabel: "overpowered",
    spellCards: ["Magicannon: Final Spark", "Loving Heart: Double Spark", "Love Sign: Master Spark", "Light Blast: Shoot the Moon", "Black Magic: Event Horizon", "Love Storm: Starlight Typhoon"]
    
};

//EoSD

//Rumia
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentRumia"]] = {

    key: erg.constants["pohDanmakuOpponentRumia"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Rumia",
    lastName: "Rumia",
    fullName: "Rumia",
    preferredName: "Rumia",
    title: "Youkai of the Dusk",
    profilePrefix: "rumia",
    tier: erg.constants["pohTierRuffian"],
    attackLabel: "befuddled",
    spellCards: ["Moon Sign: Moonlight Ray", "Darkness Sign: Demarcation", "Darkness Sign: Dark Side of the Moon"]
    
};

//Daiyousei
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentDaiyousei"]] = {

    key: erg.constants["pohDanmakuOpponentDaiyousei"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Daiyousei",
    lastName: "Daiyousei",
    fullName: "Daiyousei",
    preferredName: "Daiyousei",
    title: "Greater Fairy",
    profilePrefix: "daiyousei",
    tier: erg.constants["pohTierRuffian"],
    attackLabel: "enchanted",
    spellCards: ["Eladrin Sign: Eyes of Arcadia"]
    
};

//Cirno
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentCirno"]] = {

    key: erg.constants["pohDanmakuOpponentCirno"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Cirno",
    lastName: "Cirno",
    fullName: "Cirno",
    preferredName: "Cirno",
    title: "Fairy of the Ice",
    profilePrefix: "cirno",
    tier: erg.constants["pohTierThug"],
    attackLabel: "frozen",
    spellCards: ["Ice Sign: Icicle Fall", "Freeze Sign: Perfect Freeze", "Snow Sign: Diamond Blizzard"]
    
};

//China
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentChina"]] = {

    key: erg.constants["pohDanmakuOpponentChina"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Meiling",
    lastName: "Hong",
    fullName: "Hong Meiling",
    preferredName: "Meiling",
    title: "Chinese Girl",
    profilePrefix: "meiling",
    tier: erg.constants["pohTierGuard"],
    attackLabel: "defeated",
    spellCards: ["Flower Sign: Selaginella 9", "Colourful Sign: Extreme Colour Typhoon", "Chi Sign: Earth Dragon Sky Dragon Kick", "Firey Arrack: Roc-killing Fist"]
    
};



//Koakuma

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentKoakuma"]] = {

    key: erg.constants["pohDanmakuOpponentKoakuma"],
    heart: erg.constants["pohKoakuma"],
    attackLabel: "bedevilled",
    spellCards: ["Infernal Efficiency ~ Contractually Obligated Destruction ~"]


};

//Patchouli
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentPatchouli"]] = {

    key: erg.constants["pohDanmakuOpponentPatchouli"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Patchouli",
    lastName: "Knowledge",
    fullName: "Patchouli Knowledge",
    preferredName: "Patchouli",
    title: "The Great Unmoving Library",
    profilePrefix: "patchouli",
    tier: erg.constants["pohTierHero"],
    attackLabel: "ensorcelled",
    spellCards: ["Fire Sign: Agni Shrine", "Water Sign: Princess Undine", "Wood Sign: Sylphae Horn", "Metal Sign: Metal Fatigue", "Earth Sign: Rage Trilithon"]

};

//Sakuya
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentSakuya"]] = {

    key: erg.constants["pohDanmakuOpponentSakuya"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Sakuya",
    lastName: "Izayoi",
    fullName: "Sakuya Izayoi",
    preferredName: "Sakuya",
    title: "Perfect Elegant Maid",
    profilePrefix: "sakuya",
    tier: erg.constants["pohTierHero"],
    attackLabel: "outdone",
    spellCards: ["Illusion Sign: Killing Doll", "Illusion Sign: The World", "Illusion Existence: Clock Corpse", "Strange Art: Misdirection", "Wound Sign: Inscribe Red Soul"]

};

//Remilia
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentRemilia"]] = {

    key: erg.constants["pohDanmakuOpponentRemilia"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Remilia",
    lastName: "Scarlet",
    fullName: "Remilia Scarlet",
    preferredName: "Remilia",
    title: "The Scarlet Devil",
    profilePrefix: "remilia",
    tier: erg.constants["pohTierBoss"],
    attackLabel: "subjugated",
    spellCards: ["Scarlet Sign: Red the Nightless Castle", "Divine Spear: The Gungnir", "Night Sign: Queen of Midnight", "God Art: Vampire Illusion", "Divine Punishment: Young Demon Lord"]

};

//Flandre
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentFlandre"]] = {

    key: erg.constants["pohDanmakuOpponentFlandre"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Flandre",
    lastName: "Scarlet",
    fullName: "Flandre Scarlet",
    preferredName: "Flandre",
    title: "Sister of the Devil",
    profilePrefix: "flandre",
    tier: erg.constants["pohTierExtra"],
    attackLabel: "broken",
    spellCards: ["Taboo: Cranberry Trap", "Taboo: Lavatein", "Taboo: Four of a Kind", "Secret Barrage: And Then There Will Be None?", "Q.E.D: Ripples of 510 Years"]

};


//PCB

//Letty

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentLetty"]] = {

    key: erg.constants["pohDanmakuOpponentLetty"],
    heart: erg.constants["pohLetty"],
    attackLabel: "snowed in",
    spellCards: ["Cold Sign: Lingering Cold", "Winter Sign: Flower Wither Away", "White Sign: Undulation Ray", "Cold Sign: Cold Snap"]

};

//Chen
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentChen"]] = {

    key: erg.constants["pohDanmakuOpponentChen"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Chen",
    lastName: "Yakumo",
    fullName: "Chen Yakumo",
    preferredName: "Chen",
    title: "Black Cat of Bad Omens",
    profilePrefix: "chen",
    tier: erg.constants["pohTierThug"],
    attackLabel: "scratched",
    spellCards: ["Wizard Sign: Phoenix Egg", "Shikigami Sign: Pentagram Flight", "Wizard Sign: Incarnate Immortal Sage", "Oni Sign: Konjin of the Demon's Gate"]

};

//Merlin

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentMerlin"]] = {

    key: erg.constants["pohDanmakuOpponentMerlin"],
    heart: erg.constants["pohMerlin"],
    attackLabel: "haunted",
    spellCards: ["Trumpet Ghost: Hino Phantasm", "Dark Trumpet: Ghost Clifford", "Noise Sign: Soul Go Happy"]

};

//Lunasa

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentLunasa"]] = {

    key: erg.constants["pohDanmakuOpponentLunasa"],
    heart: erg.constants["pohLunasa"],
    attackLabel: "haunted",
    spellCards: ["String Performance: Guarneri del Gesu", "Spirit Strings: Stradivarius", "Noise Sign: Noise Melancholy"]

};

//Lyrica

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentLyrica"]] = {

    key: erg.constants["pohDanmakuOpponentLyrica"],
    heart: erg.constants["pohLyrica"],
    attackLabel: "haunted",
    spellCards: ["Dark Keys: Fazioli Dark Performance", "Key Ghost: Bosendorfer Spirit Performance", "Noise Sign: Soul Noise Flow"]

};

//Youmu
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentYoumu"]] = {

    key: erg.constants["pohDanmakuOpponentYoumu"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Youmu",
    lastName: "Konpaku",
    fullName: "Youmu Konpaku",
    preferredName: "Youmu",
    title: "Half-Human Half-Ghost Gardener",
    profilePrefix: "youmu",
    tier: erg.constants["pohTierHero"],
    attackLabel: "slashed",
    spellCards: ["Hungry Sword: Ten Kings' Retribution on the Preta", "Hell God Sword: God's Flashing Slash as Karma Gust", "Asura Sword: Obsession With the Present World", "Deva God Sword: Components of Konpaku", "Six Realms Sword: Ageless Obsession", "Voidness Sword: Slash Clearing the Six Senses", "Sword Skill: Flashing Cherry Blossoms"]

};

//Yuyuko
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentYuyuko"]] = {

    key: erg.constants["pohDanmakuOpponentYuyuko"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Yuyuko",
    lastName: "Saigyouji",
    fullName: "Yuyuko Saigyouji",
    preferredName: "Yuyuko",
    title: "Bourei of Flawless Immaculate Beauty",
    profilePrefix: "yuyuko",
    tier: erg.constants["pohTierBoss"],
    attackLabel: "entranced",
    spellCards: ["Deadly Dance: Law of Mortality ~Demon World~", "Flowery Soul: Butterfly Delusion", "Subtle Melody: Repository of Hirokawa ~Divine Soul~", "Cherry Blossom Sign: The Perfect Ink-black Cherry Blossom ~Bloom~", "Nether Sign: Passage to the Netherworld", "Butterfly Sign: Swallowtail Butterfly Pattern's Death Spear", "Ghostly Elegance: Fatal Light Trap"]

};

//Ran

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentRan"]] = {

    key: erg.constants["pohDanmakuOpponentRan"],
    heart: erg.constants["pohRan"],
    attackLabel: "mauled",
    spellCards: ["Shikigami's Radiance: Fox-Tanuki Youkai Laser", "Shikigami's Radiance: Charming Seige From All Sides", "Illusion God: Descent of Izuna Gongen", "Shikigami: Banquet of 12 Gods", "Shikigami: Dakini's Heavenly Possession", "Secret Sign: Hierarch's Arcanum"]

};

//Yukari
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentYukari"]] = {

    key: erg.constants["pohDanmakuOpponentYukari"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Yukari",
    lastName: "Yakumo",
    fullName: "Yukari Yakumo",
    preferredName: "Yukari",
    title: "Eightfold Fortress Enclosing Paradise",
    profilePrefix: "yukari",
    tier: erg.constants["pohTierYoukaiSage"],
    attackLabel: "harrowed",
    spellCards: ["Barrier: Balance of Motion and Stillness", "Evil Spirits: Bewitching Butterfly Living in the Zen Temple", "Shikigami: Ran Yakumo", "Boundary of Humans and Youkai", "Bounded Field: Border of Life and Death", "Profound Danmaku Barrier ~Phantasm, Foam and Shadow~", "Barrier: Mesh of Light and Darkness"]

};


//IMP

//Suika
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentSuika"]] = {

    key: erg.constants["pohDanmakuOpponentSuika"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Suika",
    lastName: "Ibuiki",
    fullName: "Suika Ibuki",
    preferredName: "Suika",
    title: "Free-Spirited Oni",
    profilePrefix: "suika",
    tier: erg.constants["pohTierBoss"],
    attackLabel: "crushed",
    spellCards: ["Great Oni: Missing Purple Power", "Night Parade of One Million Demons", "Gather Sign: Throwing Mt. Togakushi", "Drunken Dream: Art of Segaki Binding", "Oni Sign: Complete Massacre on Mt. Ooe", "Hell: Sigh of Purgatory"]

};


//IN

//Wriggle
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentWriggle"]] = {

    key: erg.constants["pohDanmakuOpponentWriggle"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Wriggle",
    lastName: "Nightbug",
    fullName: "Wriggle Nightbug",
    preferredName: "Wriggle",
    title: "A Bug of Light Wriggling in the Dark",
    profilePrefix: "wriggle",
    tier: erg.constants["pohTierRuffian"],
    attackLabel: "stung",
    spellCards: ["Lamp Sign: Firefly Phenomenon", "Wriggle Sign: Nightbug Tornado", "Hidden Bug: Hermit of an Endless Night"]

};

//Mystia

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentMystia"]] = {

    key: erg.constants["pohDanmakuOpponentMystia"],
    heart: erg.constants["pohMystia"],
    attackLabel: "blinded",
    spellCards: ["Vocal Sign: Howl of the Horned Owl", "Toxin Sign: Poisonous Moth's Scales", "Night-Blindness: Song of the Night Sparrow"]

};

//Keine

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentKeine"]] = {

    key: erg.constants["pohDanmakuOpponentKeine"],
    heart: erg.constants["pohKeine"],
    attackLabel: "invalidated",
    spellCards: ["Light Sign: Amaterasu", "Ambition Sign: Yoshimitsu Crisis", "Land Scheme: Three Sacred Treasures ~Country~", "Pseudo-History: The Legend of Gensokyo", "Reincarnation: Returning-Bridge Ichijo"]

};

//Tewi
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentTewi"]] = {

    key: erg.constants["pohDanmakuOpponentTewi"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Tewi",
    lastName: "Inaba",
    fullName: "Tewi Inaba",
    preferredName: "Tewi",
    title: "White Rabbit of Good Fortune",
    profilePrefix: "tewi",
    tier: erg.constants["pohTierLieutenant"],
    attackLabel: "tricked",
    spellCards: ["Rabbit Sign: Great Fortune Crest", "Runaway Rabbit: Fluster Escape", "Owing Sign: Vulnerary of Ohnamuji-Sama"]

};

//Reisen
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentReisen"]] = {

    key: erg.constants["pohDanmakuOpponentReisen"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Reisen",
    lastName: "Inaba",
    fullName: "Reisen Udongein Inaba",
    preferredName: "Reisen",
    title: "Red Eyes of Madness",
    profilePrefix: "reisen",
    tier: erg.constants["pohTierHero"],
    attackLabel: "crazed",
    spellCards: ["Visionary Wave: Red-Eyed Hypnosis ~Mind Blowing~", "Lunatic Gaze: Lunatic Stare Tuning ~Illusion Seeker~", "Spread Sign: Moon of Truth ~Invisible Full Moon~", "Spread Sign: Rocket in Mist", "Weak Heart: Demotivation", "Red Eye: Viewing the Circle Moon ~Lunatic Blast~"]

};

//Eirin

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentEirin"]] = {

    key: erg.constants["pohDanmakuOpponentEirin"],
    heart: erg.constants["pohEirin"],
    attackLabel: "shot down",
    spellCards: ["Awakened God: Memories of the Age of the Gods", "Heaven Spider's Butterfly-Capturing Web", "Curse of the Heavens: Apollo 13", "Forbidden Arcanum: Hourai Elixir", "Medicine Sign: Butterfly Dream Pill ~Nightmare Type~", "Mind of God: Omoikane's Brain"]

};

//Kaguya

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentKaguya"]] = {

    key: erg.constants["pohDanmakuOpponentKaguya"],
    heart: erg.constants["pohKaguya"],
    attackLabel: "bewitched",
    spellCards: ["Impossible Request: Jewel from the Dragon's Neck ~Five-Coloured Shots~", "Impossible Request: Buddha's Stone Bowl ~Indomitable Will~", "Impossible Request: Robe of Fire Rat ~Patient Mind~", "Impossible Request: Swallow's Cowrie Shell ~Everlasting Life~", "Impossible Request: Bullet Branch of Hourai ~Rainbow Danmaku~"]

};

//Mokou

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentMokou"]] = {

    key: erg.constants["pohDanmakuOpponentMokou"],
    heart: erg.constants["pohMokou"],
    attackLabel: "incinerated",
    spellCards: ["Immortal: Fire Bird ~Flying Phoenix~", "Forgiveness: Honest Man's Death", "Hourai: South Wind, Clear Sky ~Fujiyama Volcano~", "Fujiwara: Flaw of Forgiving Shrine", "Possessed by Phoenix", "Deathless: Xu Fu's Dimension"]

};


//PoFV

//Aya
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentAya"]] = {

    key: erg.constants["pohDanmakuOpponentAya"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Aya",
    lastName: "Shameimaru",
    fullName: "Aya Shameimaru",
    preferredName: "Aya",
    title: "Traditional Reporter of Fantasy",
    profilePrefix: "aya",
    tier: erg.constants["pohTierLieutenant"],
    attackLabel: "embarrassed",
    spellCards: ["Wind Sign: Wind God's Fan", "Crossroad Sign: Crossroads of Heaven", "Gust: Saratahiko's Guidance", "Reporting: Aya Shameimaru's Coercive Reporting", "Telescoping: Candid Shot", "Demonic Beast: Sickle Weasel Veiling", "Breeze Sign: Opening Winds of Tengu Road"]

};

//Medicine
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentMedicine"]] = {

    key: erg.constants["pohDanmakuOpponentMedicine"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Medicine",
    lastName: "Melancholy",
    fullName: "Medicine Melancholy",
    preferredName: "Medicine",
    title: "Little Sweet Poison",
    profilePrefix: "medicine",
    tier: erg.constants["pohTierThug"],
    attackLabel: "posioned",
    spellCards: ["Poison Sign: Nerve Poison", "Fog Sign: Gassing Garden", "Confusion: Into Delirium", "Poison Sign: Melancholy Poison"]

};

//Komachi
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentKomachi"]] = {

    key: erg.constants["pohDanmakuOpponentKomachi"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Komachi",
    lastName: "Onazuka",
    fullName: "Komachi Onazuka",
    preferredName: "Komachi",
    title: "Guide of the Sanzu River",
    profilePrefix: "komachi",
    tier: erg.constants["pohTierHero"],
    attackLabel: "scythed down",
    spellCards: ["Death: Higan Retour", "Death Song: Ferriage in the Deep Fog", "Poor Fate: Short Life Expectancy", "Death Sign: Scythe that Chooses the Dead", "Hell: Narrow Confines of Avici", "Throw Away: Yesterday's Money"]

};

//Yuuka

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentYuuka"]] = {

    key: erg.constants["pohDanmakuOpponentYuuka"],
    heart: erg.constants["pohYuuka"],
    attackLabel: "menaced",
    spellCards: ["Flower Sign: The Reflowering of Gensokyo", "Phantasm: The Beauty of Nature", "Ettiquette of Malice: Eternity of Battle ~Savagery of the Elder Youkai~", "The Flower that Never Withers ~Watering its Roots With Blood~"]

};

//Eiki

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentEiki"]] = {

    key: erg.constants["pohDanmakuOpponentEiki"],
    heart: erg.constants["pohEiki"],
    attackLabel: "judged",
    spellCards: ["Guilt Sign: Wandering Sin", "Judgement: Last Judgement", "Lie: Tongue of the Wolf", "Judgement: Trial of the Ten Kings"]

};


//MoF

//Shizuha

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentShizuha"]] = {

    key: erg.constants["pohDanmakuOpponentShizuha"],
    heart: erg.constants["pohShizuha"],
    attackLabel: "left mournful",
    spellCards: ["Leaf Sign: Falling Leaves of Madness", "Autumn Sign: Falling Blast", "Wilted Path: Lost Windrow"]

};

//Minoriko

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentMinoriko"]] = {

    key: erg.constants["pohDanmakuOpponentMinoriko"],
    heart: erg.constants["pohMinoriko"],
    attackLabel: "harvested",
    spellCards: ["Autumn Sky: The Autumn Sky and a Maiden's Heart", "Bumper Crop: Promise of the Wheat God", "Fruit Sign: Warm Colour Harvest"]

};

//Hina

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentHina"]] = {

    key: erg.constants["pohDanmakuOpponentHina"],
    heart: erg.constants["pohHina"],
    attackLabel: "cursed",
    spellCards: ["Bad Luck Sign: Biorhythm of the Misfortune God", "Scar: Broken Charm of Protection", "Fate: Old Lady Ohgane's Fire", "Wound Sign: Exiled Doll"]

};

//Nitori
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentNitori"]] = {

    key: erg.constants["pohDanmakuOpponentNitori"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Nitori",
    lastName: "Kawashiro",
    fullName: "Nitori Kawashiro",
    preferredName: "Nitori",
    title: "Super Youkai Warhead",
    profilePrefix: "nitori",
    tier: erg.constants["pohTierGuard"],
    attackLabel: "processed",
    spellCards: ["Water Sign: Hydro Camouflage", "Flood: Diluvial Mere", "Drown: Trauma in the Glimmering Depths", "Kappa: Spin the Cephalic Plate"]

};

//Momiji

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentMomiji"]] = {

    key: erg.constants["pohDanmakuOpponentMomiji"],
    heart: erg.constants["pohMomiji"],
    attackLabel: "routed",
    spellCards: ["Dog Sign: Rabies Bite", "Mountain Nomad: Expellee's Canaan"]

};

//Sanae
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentSanae"]] = {

    key: erg.constants["pohDanmakuOpponentSanae"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Sanae",
    lastName: "Kochiya",
    fullName: "Sanae Kochiya",
    preferredName: "Sanae",
    title: "Deified Human of the Wind",
    profilePrefix: "sanae",
    tier: erg.constants["pohTierHero"],
    attackLabel: "exterminated",
    spellCards: ["Esoterica: Secretly Inherited Art of Danmaku", "Miracle: Night of the Supernova Storm", "Great Miracle: Yasaka's Divine Wind", "Snake Sign: Orochi of Ancient Times", "Preparation: Summon Takeminakata", "Miracle Sign: Divine Wind of the Kouan Era"]

};

//Kanako

erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentKanako"]] = {

    key: erg.constants["pohDanmakuOpponentKanako"],
    heart: erg.constants["pohKanako"],
    attackLabel: "converted",
    spellCards: ["Divine Festival: Expanded Onbashira", "Divine Husk: Divining Crop", "Mystery: Yamato Torus", "Heaven's Dragon: Source of Rains", "God Sign: Omiwatari that God Walked", "Divine Pillar: Meteoric Onbashira"]

};

//Suwako
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentSuwako"]] = {

    key: erg.constants["pohDanmakuOpponentSuwako"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Suwako",
    lastName: "Moriya",
    fullName: "Suwako Moriya",
    preferredName: "Suwako",
    title: "The Highest of Native Gods",
    profilePrefix: "suwako",
    tier: erg.constants["pohTierExtra"],
    attackLabel: "trampled",
    spellCards: ["Divine Tool: Moriya's Iron Rings", "Native God: The Red Frog in the Fourth Year of the Houei Era", "Suwa War: Native Myth vs Central Myth", "Scourge Sign: Mishaguchi-sama", "Divine Battle Above Gensokyo", "Hime River: Princess Jade Green"]

};


//SWR

//Iku
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentIku"]] = {

    key: erg.constants["pohDanmakuOpponentIku"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Iku",
    lastName: "Nagae",
    fullName: "Iku Nagae",
    preferredName: "Iku",
    title: "Messenger of the Dragon Palace",
    profilePrefix: "iku",
    tier: erg.constants["pohTierHero"],
    attackLabel: "chastised",
    spellCards: ["Thunder Sign: Residence of the Thunder God", "Cloud Realm: The Thunder Court in the Sea of Abstruse Clouds", "Star Light: Light Dragon's Sigh", "Spine Sign: Acanthodii of the Thunder Clouds", "Angel's Raiment: Veils Like Time"]

};

//Tenshi
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentTenshi"]] = {

    key: erg.constants["pohDanmakuOpponentTenshi"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Tenshi",
    lastName: "Hinanawi",
    fullName: "Tenshi Hinanawi",
    preferredName: "Tenshi",
    title: "Young Mistress of Bhavaagra",
    profilePrefix: "tenshi",
    tier: erg.constants["pohTierBoss"],
    attackLabel: "overruled",
    spellCards: ["Scarlet Weather Rhapsody of All Humankind", "Heaven Sign: Sword of Divine Justice", "Keystone: Sky's Spiritual Stone", "Earthquake: Evacuation Along the Steep Path"]

};

//SA

//Kisume
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentKisume"]] = {

    key: erg.constants["pohDanmakuOpponentKisume"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Kisume",
    lastName: "Kisume",
    fullName: "Kisume",
    preferredName: "Kisume",
    title: "The Fearsome Well Spirit",
    profilePrefix: "kisume",
    tier: erg.constants["pohTierMook"],
    attackLabel: "collected",
    spellCards: ["Horror: Well-bucket-dropping Monster", "Well Bucket: Flying in a Well"]

};

//Yamame
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentYamame"]] = {

    key: erg.constants["pohDanmakuOpponentYamame"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Yamame",
    lastName: "Kurodani",
    fullName: "Yamame Kurodani",
    preferredName: "Yamame",
    title: "The Bright Net in the Dark Cave",
    profilePrefix: "yamame",
    tier: erg.constants["pohTierRuffian"],
    attackLabel: "plagued",
    spellCards: ["Trap Sign: Capture Web", "Miasma: Unexplained Fever", "Small Thread: Kandata's Rope"]

};

//Parsee
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentParsee"]] = {

    key: erg.constants["pohDanmakuOpponentParsee"],
    heart: erg.constants["pohParsee"],
    attackLabel: "sundered",
    spellCards: ["Envy: Green-Eyed Invisible Monster", "Grandfather Hanasaka: Jealousy of the Kind and the Lovely", "Tongue-Cut Sparrow: Hate for the Humble and Rich", "Malice Sign: Midnight Anathema Ritual"]

};

//Yuugi
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentYuugi"]] = {

    key: erg.constants["pohDanmakuOpponentYuugi"],
    heart: erg.constants["pohYuugi"],
    attackLabel: "overwhelmed",
    spellCards: ["Mysterious Ring: Hell's Wheel of Pain", "Oni's Voice: Annihilating Roar", "Feat of Strength: Storm on Mt. Ooe", "Shackles Sign: Shackles a Criminal Can't Take Off", "Light Oni: Adamant Helix"]

};

//Satori
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentSatori"]] = {

    key: erg.constants["pohDanmakuOpponentSatori"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Satori",
    lastName: "Komeiji",
    fullName: "Satori Komeiji",
    preferredName: "Satori",
    title: "The Girl Even the Evil Spirits Fear",
    profilePrefix: "satori",
    tier: erg.constants["pohTierLieutenant"],
    attackLabel: "traumatised",
    spellCards: ["Recollection: Spring Kyoto Dolls", "Recollection: Straw Doll Kamikaze", "Recollection: Return Inanimateness"]

};

//Rin
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentRin"]] = {

    key: erg.constants["pohDanmakuOpponentRin"],
    heart: erg.constants["pohRin"],
    attackLabel: "entombed",
    spellCards: ["Cat Sign: Vengeful Cat Spirit's Erratic Step", "Malicious Spirit: Spleen Eater", "Apology: The Needles of Yore and the Vengeful Spirits in Pain", "Youkai: Blazing Wheel"]

};

//Utsuho
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentUtsuho"]] = {

    key: erg.constants["pohDanmakuOpponentUtsuho"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Utsuho",
    lastName: "Reiuji",
    fullName: "Utsuho Reiuji",
    preferredName: "Okuu",
    title: "Scorching, Troublesome Divine Flame",
    profilePrefix: "utsuho",
    tier: erg.constants["pohTierBoss"],
    attackLabel: "atomised",
    spellCards: ["Atomic Fire: Nuclear Fusion", "Burning Star: The Ten Suns", "Hell's Tokamak", "Explosion Sign: Peta Flare", "Crow Sign: Yatagarasu Dive", "Seven Stars: Septenitron", "Hell and Heaven's Meltdown"]

};

//Koishi
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentKoishi"]] = {

    key: erg.constants["pohDanmakuOpponentKoishi"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Koishi",
    lastName: "Komeiji",
    fullName: "Koishi Komeiji",
    preferredName: "Koishi",
    title: "The Closed Eyes of Love",
    profilePrefix: "koishi",
    tier: erg.constants["pohTierExtra"],
    attackLabel: "suppressed",
    spellCards: ["Symbol: All Ancestors Standing Beside Your Bed", "Suppression: Super-ego", "Response: Youkai Polygraph", "Subconscious: Rorschach in Danmaku", "Rekindled: The Embers of Love", "Philosophy of a Hated Person", "Heart Sign: Selfless Love"]

};

//UFO

//Nazrin
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentNazrin"]] = {

    key: erg.constants["pohDanmakuOpponentNazrin"],
    heart: erg.constants["pohHeartNone"],
    firstName: "Nazrin",
    lastName: "Komeiji",
    fullName: "Nazrin",
    preferredName: "Nazrin",
    title: "The Tiny, Clever Commander",
    profilePrefix: "nazrin",
    tier: erg.constants["pohTierRuffian"],
    attackLabel: "swarmed",
    spellCards: ["Search Sign: Gold Detector", "Vision Sign: High Sensitivity Nazrin Pendulum", "Treasure: Gold Rush"]

};

//Kogasa
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentKogasa"]] = {

    key: erg.constants["pohDanmakuOpponentKogasa"],
    heart: erg.constants["pohKogasa"],
    attackLabel: "surprised",
    spellCards: ["Rainbow Sign: Umbrella Cyclone", "Monster Sign: Spare Umbrella Express Night Carnival", "Rain Sign: A Rainy Night's Ghost Story", "Umbrella Sign: Parasol Star Memories"]

};

//Ichirin
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentIchirin"]] = {

    key: erg.constants["pohDanmakuOpponentIchirin"],
    heart: erg.constants["pohIchirin"],
    attackLabel: "knocked out",
    spellCards: ["Divine Fist: Hell Thrust from the Heavenly Seas", "Barrage: Cloud World Kraken Strike", "Rage: Falling Sky Hammer", "Iron Fist: Nyuudou Nyoki"]

};

//Murasa
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentMurasa"]] = {

    key: erg.constants["pohDanmakuOpponentMurasa"],
    heart: erg.constants["pohMurasa"],
    attackLabel: "sunk",
    spellCards: ["Capsize: Sinking Anchor", "Harbor Sign: Eternally Anchored Ghost Ship", "Drowning Sign: Sinkable Vortex", "Flood: Venus of the Bilge"]

};

//Shou
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentShou"]] = {

    key: erg.constants["pohDanmakuOpponentShou"],
    heart: erg.constants["pohShou"],
    attackLabel: "blasted",
    spellCards: ["Jewelled Pagoda: Radiant Treasure Gun", "Light Sign: Aura of Justice", "Buddha's Light: Vajra of Perfect Buddhism", "Heaven Sign: Scorched Earth Mandala"]

};

//Byakuren
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentByakuren"]] = {

    key: erg.constants["pohDanmakuOpponentByakuren"],
    heart: erg.constants["pohByakuren"],
    attackLabel: "castigated",
    spellCards: ["Good Omen: Nirvana's Cloudy Way in Purple", "Light Magic: Magic Milky Way", "Great Magic: Devil's Recitation", "Superhuman: Byakuren Hijiri", "Syncretism: Manifestation of Mahavariocana"]

};

//Nue
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentNue"]] = {

    key: erg.constants["pohDanmakuOpponentNue"],
    heart: erg.constants["pohNue"],
    attackLabel: "deceived",
    spellCards: ["Ominous Clouds: Heian Dark Clouds", "Nue Sign: Mysterious Snake Show", "Nightmare of Heiankyou", "Grudge Bow: The Bow of Genzanmi Yorimasa", "Danmaku X from a Wandering Star"]

};


//DS

//Hatate
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentHatate"]] = {

    key: erg.constants["pohDanmakuOpponentHatate"],
    heart: erg.constants["pohHatate"],
    attackLabel: "scryed",
    spellCards: ["Continuous Shooting: Rapid Shot", "Far-sightedness: Tengu Psychography"]

};

//TD

//Kyouko
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentKyouko"]] = {

    key: erg.constants["pohDanmakuOpponentKyouko"],
    heart: erg.constants["pohKyouko"],
    attackLabel: "deafened",
    spellCards: ["Echo Sign: Mountain Echo Scramble", "Mountain Echo: Amplify Echo", "Great Voice: Charged Cry"]

};

//Yoshika
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentYoshika"]] = {

    key: erg.constants["pohDanmakuOpponentYoshika"],
    heart: erg.constants["pohYoshika"],
    attackLabel: "outlasted",
    spellCards: ["Recovery: Heal by Desire", "Poison Nail: Poison Murder", "Desire Sign: Score Desire Eater"]

};

//Seiga
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentSeiga"]] = {

    key: erg.constants["pohDanmakuOpponentSeiga"],
    heart: erg.constants["pohSeiga"],
    attackLabel: "spited",
    spellCards: ["Evil Sign: Guhun Yegui", "Demonify: Zouhuo Rumo", "Spirit Link: Tongling Yoshika", "Path Sign: Dao Fetal Movement"]

};

//Tojiko
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentTojiko"]] = {

    key: erg.constants["pohDanmakuOpponentTojiko"],
    heart: erg.constants["pohTojiko"],
    attackLabel: "shocked",
    spellCards: ["Thunder Arrow: Gagouji's Tornado", "Apparition: Iruka's Thunder"]

};

//Futo
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentFuto"]] = {

    key: erg.constants["pohDanmakuOpponentFuto"],
    heart: erg.constants["pohFuto"],
    attackLabel: "punished",
    spellCards: ["Heaven Sign: Iwafune Ascending to Heaven", "Throwing Dishes: Mononobe's Eighty Sake Cups", "Blaze Sign: Sakuraiji in Flames", "Saint Girl: Oomonoimi's Dinner", "Saint Girl: Sun Goddess' Sacrifice"]

};

//Miko
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentMiko"]] = {

    key: erg.constants["pohDanmakuOpponentMiko"],
    heart: erg.constants["pohMiko"],
    attackLabel: "harmonised",
    spellCards: ["Honor: Ranks of Twelve Leaves", "Hermit Sign: Emperor of the Land of the Rising Sun", "Summon: Royal Clan's Chaotic Dance", "Secret Treasure: Prince Shotoku's Out-of-place Artifact", "Light Sign: Halo of the Guse Kannon", "Discernment: Laser of Seventeen Articles"]

};

//Mamizou
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentMamizou"]] = {

    key: erg.constants["pohDanmakuOpponentMamizou"],
    heart: erg.constants["pohMamizou"],
    attackLabel: "transformed",
    spellCards: ["First Duel: Primate Danmaku Transformation", "Fifth Duel: Scrolls of Frolicking Animals", "Sixth Duel: Tanuki's Monstrous School", "Seventh Duel: Wild Deserted Island", "Racoon Sign: Full Moon Pompokolin"]

};


//WaHH

//Kasen
erg[erg.constants["pohDanmakuOpponents"]][erg.constants["pohDanmakuOpponentKasen"]] = {

    key: erg.constants["pohDanmakuOpponentKasen"],
    heart: erg.constants["pohKasen"],
    attackLabel: "browbeaten",
    spellCards: ["Hermit Sign: The Holy Woman Descending the Mountain ~An End to Fury~", "Demonic Arm: Capture ~The Righteous Will Crushes the Wicked~", "Beast Sign: Obedience to the Enlightened ~Merit for Future Lives~", "Deva Sign: Revelation of the Unbroken General ~Strategy of Strength~", "Disguise Sign: Clouds Shrouding Mt Ooe"]

};


//################################### DEFAULT ADVICE LETTER #################################################

erg[erg.constants["pohDefaultAdviceLetter"]] = "<p>Dear Alice,</p><p>My love life's a mess.  I'm sure you've read all about it in Aya's tawdry rag.  Just tell me what to do to fix it.</p><p>Yours, FullName</p>";

//################################### ADVICE LETTERS #################################################

//It's a bit ugly but these are not independent of the hearts, and removing a heart while leaving these may cause errors

//Koakuma

erg[erg.constants["pohHearts"]][erg.constants["pohKoakuma"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohKoakuma"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Dear Lady Margatroid,</p><p>My mistress now gives me a small amount of time off each week, and I should like to spend it getting to know appropriate young women of Gensokyo better.  Can you help point me in the right direction?</p><p>(Please don't mention this to my mistress, she's still somewhat...sensitive...where your romantic exploits are concerned)</p><p>Yours,</p><p>Koakuma</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohKoakuma"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Dear Lady Margatroid,</p><p>Who gets the pleasure of spending time with me this week?  It's always more fun when you pick for me!</p><p>Yours,</p><p>Koakuma</p>"

});

//Letty

erg[erg.constants["pohHearts"]][erg.constants["pohLetty"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohLetty"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Ms Margatroid,</p><p>There's an assumption that youkai associated with winter have &quot;cold&quot; hearts.  But isn't it wrong to associate love with warmth?  To do so is to ignorantly confuse warmth and comfort.</p><p>I should like to prove that there is as much or more love and desire for love in the cold than in the hellish heat.  Will you advise me?</p><p>- Letty Whiterock</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohLetty"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Ms Margatroid,</p><p>Do I yet make a credible figure of romance amongst the warm-blooded of Gensokyo?  I rely on your continued guidance.</p><p> - Letty Whiterock</p>"

});

//Lunasa

erg[erg.constants["pohHearts"]][erg.constants["pohLunasa"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohLunasa"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Dear Alice,</p><p>There's a hollowness in my sound recently; it's disturbing the harmony of my sisters.  Our audiences don't seem to notice, but I don't think I can continue this way with my pride as a musician intact.</p><p>I need a muse.  Please recommend one to me.</p><p>Yours,</p><p>Lunasa Prismriver</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohLunasa"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Dear Alice,</p><p>This week I feel I'm on the verge of a new composition; whom should I look to for inspiration?</p><p>Yours,</p><p>Lunasa Prismriver</p>"

});


//Merlin

erg[erg.constants["pohHearts"]][erg.constants["pohMerlin"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohMerlin"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Dear Alice,</p><p>I find my own music gives me too much joy and energy!  I need to share it with someone, or I'll surely bubble over into madness.</p><p>Can you think of someone who might contain the energy of my song?</p><p>Yours,</p><p>Merlin Prismriver</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohMerlin"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Dear Alice,</p><p>This week I have a special song, just for two.  Who should I share it with?</p><p>Yours,</p><p>Merlin Prismriver</p>"

});


//Lyrica

erg[erg.constants["pohHearts"]][erg.constants["pohLyrica"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohLyrica"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Dear Alice,</p><p>The impossibility of my music is my soul as an artist.  I can't give it up, but it does make it difficult for me to exist, even in Gensokyo.</p><p>I need to have my waveform partially collapsed - an anchor if you will.  I asked that rabbit girl but it appears she's spoken for.  Can you direct me?</p><p>Yours,</p><p>Lyrica Prismriver</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohLyrica"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Dear Alice,</p><p>This week I feel like my vibrations will tear me in half.  Who will anchor me?</p><p>Yours,</p><p>Lyrica Prismriver</p>"

});


//Ran

erg[erg.constants["pohHearts"]][erg.constants["pohRan"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohRan"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Lady Alice,</p><p>As you know, modelling the behaviour of sentient creatures with any accuracy demands the highest degree of mathematical power; that is, it's something only my mistress can do.  Yet she refuses to give me orders in the matter of my heart, so I cannot access her power to build a prediction engine for whom to associate with.</p><p>I rely instead upon the heuristics of your romantic strategic genius.  Please consider me a soldier in this regard and issue orders.</p><p>Yours faithfully,</p><p>Ran Yakumo</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohRan"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Dear Alice,</p><p>I am still unable to accurately simulate the problem space of my love-life.  Will you kindly advise me on whom to pursue?</p><p>Yours faithfully,</p><p>Ran Yakumo</p>"

});

//Mystia

erg[erg.constants["pohHearts"]][erg.constants["pohMystia"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohMystia"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Ms Alice,</p><p>I'm having trouble finding a girl who understands my sleep by day, work by evening, rock star by night lifestyle.  Other than Kyouko, but is it right to mix music and love?  The band has to come first!</p><p>Help me, Ms Alice.  I need someone to come home to after screaming all night and breaking guitars.</p><p> - Mystia Lorelei</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohMystia"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Ms Alice,</p><p>I don't even remember what happened last night, and I can't read the paper to find out.  Just...just tell me who to ask out this week.  Make it all right somehow.</p><p> - Mystia Lorelei</p>"

});


//Keine

erg[erg.constants["pohHearts"]][erg.constants["pohKeine"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohKeine"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Dear Alice,</p><p>The situation with Mokou and Eientei is...complicated.  I've eaten and created so much history around the four of us over the last few years that I can't remember what objectively happened.</p><p>In this state I can't be trusted to direct my own heart.  I'm sorry to impose upon you, Alice, but would you advise me on where to find happiness?</p><p>Yours,</p><p>Keine Kamashirasawa</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohKeine"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Dear Alice,</p><p>I've eaten a few unfortunate promises that I shouldn't have made this week, so my time is open to be directed by your strategy.</p><p>Yours,</p><p>Keine Kamishirasawa</p>"

});


//Eirin

erg[erg.constants["pohHearts"]][erg.constants["pohEirin"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohEirin"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Dear Alice,</p><p>Since our defeat at the hands of yourself and Marisa, Eientei is no longer eternally unchanging, and the chaotic influence of a certain phoenix woman and her hakutaku ally has destabilised arrangements that had persisted for a very long time indeed.  Furthermore I have deduced that my own foreknowledge (via caluclation or artifice) would be counterproductive in finding the most harmonious alignment of relations.</p><p>Thus while it places me implicitly in the Youkai Sage's web of influence, I believe relying upon your strategy is the strongest move in this game.  Your skills are more than equal to the task.</p><p>Yours faithfully,</p><p>Eirin Yagokoro</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohEirin"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Dear Alice,</p><p>As you are already aware, it is time to refresh your instructions; if I am not much mistaken, you have already comprehended the changing situation and inferred the correct course of action.  Nothing less from the Seven Coloured Puppeteer!</p><p>Yours faithfully,</p><p>Eirin Yagokoro</p>"

});


//Kaguya

erg[erg.constants["pohHearts"]][erg.constants["pohKaguya"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohKaguya"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Alice,</p><p>I'm ashamed to admit it, but I'd put off the thought of romance until after your wedding. When you and Marisa defeated my Impossible Requests, it obliged me to marry you, which was awkward considering there were two of you and obviously very much in love with each other.</p><p>Having successfully dealt with that problem by ignoring it until it went away, I'm ready to move on and find someone at last.  But on top of complications involving a certain phoenix girl and my arrangements with Eirin, I'm quite out of touch; Gensokyo isn't the Fujiwara court.  I need a bright modern girl to advise me - can you oblige, Seven-Coloured Puppeteer?</p><p>Yours faithfully,</p><p>Kaguya Houraisen</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohKaguya"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Alice,</p><p>Should I call on her again?  Or is time to let that cool for a bit and spend some time with that other girl?  Ah, I should have written a poem, this is much easier to do with seasonal metaphors.</p><p>Yours faithfully,</p><p>Kaguya Houraisen</p>"

});

//Mokou

erg[erg.constants["pohHearts"]][erg.constants["pohMokou"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohMokou"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Alice,</p><p>I have spent too long living only to shed blood.  If I do not have a family, I will forget what it means to be Fujiwara, and this deathless body will be that of a beast.  To have a family, I must have a wife.</p><p>Please assist me by serving as my matchmaker.  You know my situation well enough - Eientei, Keine, all of it.  Your judgement is proven; I can rest easy if you agree to take up the matter.</p><p>Best wishes to you and your family,</p><p>Fujiwara no Mokou</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohMokou"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Alice,</p><p>Another week passes and I am not married.  I have the patience of the undying, but this affair does not suit my temperament, and I cannot help but to look forward to its resolution.  Please arrange another meeting.</p><p>Best wishes to you and your family,</p><p>Fujiwara no Mokou</p>"

});


//Yuuka

erg[erg.constants["pohHearts"]][erg.constants["pohYuuka"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohYuuka"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>My Dear Alice,</p><p>Yukari seems determined to have me consult you on how best to order my romantic life, as if I did not have centuries of experience to call upon in conducting my own business.  I wonder if she would be better served directing you to attend to her own strategy; she seems much in danger of losing the heart of one shrine maiden to the charms of another.</p><p>But the Youkai Sage is not to be lightly denied.  I will submit to your direction - for whom should the flower of my heart bloom?</p><p>Yours,</p><p>Yuuka Kazami</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohYuuka"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>My Dear Alice,</p><p>A woman with a parasol called upon my garden and enquired after my romantic life.  Shouldn't the Youkai Sage have more dignity than a common gossip?  I had best ask your advice again, or I shall never escape her nagging.</p><p>Yours,</p><p>Yuuka Kazami</p>"

});


//Eiki

erg[erg.constants["pohHearts"]][erg.constants["pohEiki"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohEiki"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Ms Alice Margatroid,</p><p>It has been determined that all functionaries of the afterlife - yes, even the Yama - must engage in mandatory leisure time to prevent death, rebellion or insanity caused by excessive continuous work (we are unable to easily replace staff lost in this fashion).  My subordinate Komachi Onozuka refuses to spend these mandatory periods with me, advising me with most serious conviction that my health and thus productivity depends upon association with those outside the industry.</p><p>Thus I must impose upon you for your advice; I require companionship for these occasions and lack the expertise to make an appropriate selection myself.</p><p>Yours sincerely,</p><p>Eiki Shiki, Yamaxanadu</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohEiki"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Ms Alice Margatroid,</p><p>I have another mandatory leisure period approaching, and neither time nor resources to arrange for a companion myself.  I am obliged to impose upon you in this regard.</p><p>Yours sincerely,</p><p>Eiki Shiki, Yamaxanadu</p>"

});


//Shizuha

erg[erg.constants["pohHearts"]][erg.constants["pohShizuha"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohShizuha"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Lady Alice,</p><p>It gets harder every year, watching the winter come in.  Watching my season die.  I have a certain amount of <em>sisterly</em> consolation, but it's not enough.  I need something more to hold on to.</p><p>I'm told you can help me find her.</p><p>Yours,</p><p>Shizuha Aki</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohShizuha"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Lady Alice,</p><p>If you cannot guide me to happiness, I am sure my despair and loneliness will stain the soul of Gensokyo itself.  I may write some very bad poetry.  Please do your best.</p><p>Yours,</p><p>Shizuha Aki</p>"

});


//Minoriko

erg[erg.constants["pohHearts"]][erg.constants["pohMinoriko"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohMinoriko"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Lady Alice,</p><p>I have a close bond with my sister, the society of many gods, heroes and youkai, and the faith of the humans.  But I have a bounty to be shared in a fashion you couldn't call sisterly, friendly or godly.</p><p>Er, that's not a euphemism.  Probably.  This is awkward.  Help?<p>Yours,</p><p>Minoriko Aki</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohMinoriko"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Lady Alice,</p><p>This was sent with a basket of baked potatoes; they're to be shared with your wife, but don't let her eat them all and deny they were ever there!  Looking forward to receiving your advice in return.</p><p>Yours,</p><p>Minoriko Aki</p><p><em>You see no evidence of baked potatoes anywhere in the house, but you can certainly smell them.  Marisa!</em></p>"

});


//Hina

erg[erg.constants["pohHearts"]][erg.constants["pohHina"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohHina"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Ms Alice,</p><p>This is a bit embarrassing, since I'm an adult and should be able to manage my own social life, but I'm in a unique situation.  It's hard to get close to someone as a curse goddess; it takes a high degree of compatibility to overcome the misfortunes I've gathered.</p><p>Can I rely on your insight to guide my way?<p>Yours faithfully,</p><p>Hina Kagiyama</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohHina"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Ms Alice,</p><p>I think I have my good and bad luck in equilibrium; I can go out this week.  Who should I call upon?</p><p>Yours faithfully,</p><p>Hina Kagiyama</p>"

});


//Momiji

erg[erg.constants["pohHearts"]][erg.constants["pohMomiji"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohMomiji"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Ms Margatroid,</p><p>It's said the best soldier is one who has someone to come home to; the opposite is said as well, but not so much in Gensokyo these days.  As a wolf tengu, it can be difficult for me to socialise with the lowlanders.  Please order me to the task as if you were my commander.</p><p>Is there a girl out there who'd want to be a soldier's wife?<p>Yours,</p><p>Momiji Inibashiri</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohMomiji"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Ms Margatroid,</p><p>Orders for this week, ma'am?</p><p>Yours,</p><p>Momiji Inubashiri</p>"

});


//Kanako

erg[erg.constants["pohHearts"]][erg.constants["pohKanako"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohKanako"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Alice,</p><p>As you know, divine romance is an important aspect of myth, going back to Inzanami and Inzanagi.  Even Suwako has the story that lead to Sanae; for gathering faith and building up a divine faction over time, it can't be ignored.</p><p>Obviously I have my own plans, but I'd like to engage you as an outside consultant from time to time to help me refine my romantic strategy.  A matchmaker could be a dramatic addition to my myth, and it's always best if these things have a grain of truth.<p>I hope Marisa's doing well - and isn't it about time we heard the good news of a baby for the Margatroid-Kirisames?</p><p> - Kanako Yasaka</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohKanako"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Alice,</p><p>Still working on the romance myth, but I think it needs a little matchmaker touch-up.  Please submit a plan for this week, it'll help keep your character in the story.</p><p>Any news on the pitter-patter of little feet around the Forest of Magic?</p><p> - Kanako Yasaka</p>"

});

//Parsee

erg[erg.constants["pohHearts"]][erg.constants["pohParsee"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohParsee"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Dear Ms Margatroid,</p><p>You're probably expecting me to tell you how jealous I am of the happy couples, and how I need your help to find happiness myself.  That much is true, but I've been jealous for centuries, under normal circumstances I could deal with it well enough myself.  But half the Underground and most of Gensokyo is jealous of the happiness you share with Marisa, and while I'll gladly take the extra power it's driving me insane.</p><p>Doesn't that mean you have a responsibility to help me find happiness of my own, or at least a pretty distraction?</p><p>Yours sincerely,</p><p>Parsee Mizuhashi</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohParsee"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Dear Ms Margatroid,</p><p>I'm having a little trouble thinking straight with the heady draught of jealousy Gensokyo insists on pouring into my cup these days.  Could you advise me where to turn these green eyes this week?</p><p>Yours,</p><p>Parsee Mizuhashi</p>"

});


//Yuugi

erg[erg.constants["pohHearts"]][erg.constants["pohYuugi"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohYuugi"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Hi Alice,</p><p>Suika tells me there's some fun on, count me in.</p><p>Hook me up with someone strong!</p><p> - Yuugi</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohYuugi"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Hi Alice,</p><p>Not intending on hitting this week's parties alone.  Give me a name, I'll sort the rest!</p><p> - Yuugi</p>"

});


//Rin

erg[erg.constants["pohHearts"]][erg.constants["pohRin"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohRin"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Hiya Alice,</p><p>You know I love my mistress and Okuu dearly, but let's be honest: they'd make one adult between the two of them.  The things Aya prints about me in that paper of hers are bad enough, I'm not going to compound them by looking for romance in the Palace of Earth Spirits.</p><p>Can you help me find an outsider?  Someone who likes corpses would be best.</p><p>Seeya,</p><p>Orin</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohRin"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Hiya Alice,</p><p>Can I get some advice on who to see this week?  I can trade a corpse for it.</p><p>Seeya,</p><p>Orin</p>"

});


//Kogasa

erg[erg.constants["pohHearts"]][erg.constants["pohKogasa"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohKogasa"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Surprise!  It's a letter from Kogasa!</p><p>Not really surprised, are you?  I guess that's what it's like being a mistress of intrigue.  Well, then you must know I'm feeling a little lonely and wouldn't mind finding a special girl.</p><p>Surprise me!</p><p>Yours faithfully,</p><p>Kogasa Tatara</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohKogasa"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Surprise!  I'm writing again.</p><p>You probably guessed already, maybe I shouldn't use the eggplant-coloured envelopes.  Well, shock me with your insightful advice!</p><p>Yours faithfully,</p><p>Kogasa Tatara</p>"

});


//Ichirin

erg[erg.constants["pohHearts"]][erg.constants["pohIchirin"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohIchirin"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Ms Alice,</p><p>I've been living in Gensokyo for some time now, but I'm afraid I haven't exerted much of a presence.  I'm a little tired of being taken as Unzan's off-sider, and I think a romance might help raise my profile and get the mighty to consider me as my own woman.</p><p>Please nominate a candidate for my affections, I trust you to choose appropriately</p><p>Yours,</p><p>Ichirin Kumoi</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohIchirin"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Ms Alice,</p><p>I feel like I'm emerging from Unzan's shadow, but I must confess there's more to this now than wanting a presence.  I'd like a successful romance, so...advise me, please?</p><p>Yours,</p><p>Ichirin Kumoi</p>"

});


//Murasa

erg[erg.constants["pohHearts"]][erg.constants["pohMurasa"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohMurasa"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Ms Alice,</p><p>I'm glad you're offering this service.  I've been around a long time, but most of the girls I've fallen for have drowned not long after, meaning at best they became business competitors.  As for my last real relationship, she wanted me to do the &quot;pirate&quot; act at the most inappropriate times...I'm accomplished in many areas, I have nothing to be ashamed of, but when it comes to my love life I'm (if you'll pardon) all at sea.</p><p>I'm turning the wheel of my heart over to you, Seven-Coloured Puppeteer.  Good sailing.</p><p>Yours,</p><p>Minamitsu Murasa</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohMurasa"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Ms Alice,</p><p>We haven't struck reefs yet, but neither are we in port...and maybe I wouldn't have such trouble if I could express a concept without a nautical metaphor.  At any rate, please advise.</p><p>Yours,</p><p>Minamitsu Murasa</p>"

});


//Shou

erg[erg.constants["pohHearts"]][erg.constants["pohShou"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohShou"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Lady Alice Margatroid,</p><p>Even an avatar of a Heavenly King cannot lightly place her own judgement over that of a Sage.  Between Yukari Yakumo and yourself I see the genius which will guide me to a fitting bride for an embodiment of Bishamonten.</p><p>Please don't tell Nazrin I made this request.</p><p>In Bishamonten's name,</p><p>Shou Toramaru</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohShou"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Lady Alice Margatroid,</p><p>Your wisdom has guided me well thus far; I have faith in the golden path you have laid down for me.  Remember Nazrin must not know!</p><p>In Bishamonten's name,</p><p>Shou Toramaru</p>"

});


//Byakuren

erg[erg.constants["pohHearts"]][erg.constants["pohByakuren"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohByakuren"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>The world is filled with light!</p><p>I sense that after uncountable rebirths, it is time for my soul to reunite with one from whom I was cruelly sundered in eras past.  However the overwhelming spiritual power of Gensokyo's residents makes it difficult to pick out her kharma from the throng.</p><p>Seven-Coloured Puppeteer, I rely on your insight and powers of deduction.  I am sure she will be a woman of surpassing merit; please guide me to her.</p><p>Your humble servant,</p><p>Byakuren Hijiri</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohByakuren"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>The world is filled with light!</p><p>Our search is not yet over, Seven-Coloured Puppeteer, but I feel my kharma calling ever-louder to hers.  Direct me, it cannot be long now!</p><p>Your humble servant,</p><p>Byakuren Hijiri</p>"

});


//Nue

erg[erg.constants["pohHearts"]][erg.constants["pohNue"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohNue"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Dear Alice,</p><p>I don't know what Yukari did, but suddenly everyone who sees my Seeds of Unknown Form is getting...well, romantic, from the tsundere to the very forward.  This is awkward when I'm using them to disguise my own form.  I think I'll need a girlfriend of my own, lest I be tempted to take advantage of the situation.</p><p>Because if I did, I think you'd find pieces of me scattered across Gensokyo.  They don't take pranks well here.</p><p>Cheers,</p><p>Nue Houjuu</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohNue"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Dear Alice,</p><p>I'm not sure what you think you saw in your garden yesterday, but I swear it wasn't me.  Please advise on my love-life, still hoping to lock in that girlfriend and avoid temptation.</p><p>Cheers,</p><p>Nue Houjuu</p>"

});


//Hatate

erg[erg.constants["pohHearts"]][erg.constants["pohHatate"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohHatate"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Dear Ms Margatroid,</p><p>I'm hesitant to send this; while your integrity is peerless in Gensokyo, Aya Shameimaru has recently entered your service and is not to be trusted in any circumstances.  But...journalism is lonely work, and I feel the need for a source of strength to keep going in my quest to bury the Bunbunmaru News forever.</p><p>Can you suggest a girl who might make a good companion?  And can you not breathe even the first word of it to that vile Shameimaru?</p><p>Yours,</p><p>Hatate Himekaidou</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohHatate"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Dear Ms Margatroid,</p><p>Please help me again this week, I beg you.  I spent too long putting the Kakashi Spirit News together and I haven't sorted my social calendar at all.  In return I'll burn that photo, you know the one.  Or more importantly, Aya will never know about it.</p><p>Yours,</p><p>Hatate Himekaidou</p>"

});


//Kyouko

erg[erg.constants["pohHearts"]][erg.constants["pohKyouko"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohKyouko"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Dear Lady Alice,</p><p>I feel like I'm going in circles.  Sweeping and reciting sutras like a good girl during the day, tearing it up with Choujuu Gigaku at night.  I can't live like there's two Kyoukos forever, I need to have a foundation of truth in my life, even if it's just one special girl who knows the real me.</p><p>And please don't tell Mystia I'm a secret romantic, she'll twist my arm to add love songs to our gigs.  Angry love songs.</p><p>Thanks,</p><p>Kyouko Kasadani</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohKyouko"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Dear Lady Alice,</p><p>I wanted to hold an impromptu Choujuu Gigaku concert in your yard to thank you for all your help, but your wife chased us off.  So I'm not sure how to show my appreciation, even though I'm here asking for your advice again!</p><p>Thanks,</p><p>Kyouko Kasadani</p>"

});


//Yoshika

erg[erg.constants["pohHearts"]][erg.constants["pohYoshika"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohYoshika"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Lady Alice Margatroid,</p><p>It's very difficult for me to write this.  Actually I can't write it at all, so my friend Hong Meiling is helping me <em>(Hello Alice, hope you and Marisa are well, love Meiling!)</em>.  Anyway I find myself missing the warmth of love from when I was alive, even though I can't remember it very well.</p><p>Please help me, Lady Alice Margatroid, I don't think a jiang-shi like me can find love on her own.</p><p>Your servant,</p><p>Yoshika Miyako</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohYoshika"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Lady Alice Margatroid,</p><p>My friend Hong Meiling came to visit again today, so I can write to you again for advice <em>( &lt;3 - HM!)</em>.  Thank you for the help you have given me so far, I am sorry to impose on you again.</p><p>Your servant,</p><p>Yoshika Miyako</p>"

});


//Seiga

erg[erg.constants["pohHearts"]][erg.constants["pohSeiga"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohSeiga"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Dear Ms Margatroid,</p><p>Did I ever tell you I was married, back in the old country?  Dreadful business, you really don't want to know the details.  Suffice to say I was young and needed the social status.  Faked my own death eventually, as you do.</p><p>Anyway, you girls in Gensokyo seem to do it right, and I'd like a piece of it.  Find me a suitable filly, would you?</p><p>Your dear friend,</p><p>Seiga Kaku</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohSeiga"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Dear Ms Margatroid,</p><p>This marriage-for-love thing takes its time, doesn't it?  Back in the old country we disposed of the matter much more efficiently, though I suppose there's something to be said for not having to fake your own death.  At any rate I don't have time for that multi-year tsundere routine I heard you used to wear down Kirisame, so see what you can do to expedite my case, there's a good girl.</p><p>Your dear friend,</p><p>Seiga Kaku</p>"

});


//Tojiko

erg[erg.constants["pohHearts"]][erg.constants["pohTojiko"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohTojiko"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Lady Alice,</p><p>As you may know, I'm getting out of the vengeance business, looking to specialise as a thunder spirit.  Since that's a more emotionally stable trade, I think I'll be ready for a committed relationship if I can just find the right girl.</p><p>Could you organise introductions for me?  Obviously we all socialise already, but your association gives the affair a bit of respectability.</p><p>Yours,</p><p>Soga no Tojiko</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohTojiko"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Lady Alice,</p><p>I feel the vengeance obsession draining away a little more each day.  I really am ready for that stable relationship, so just keep pointing me in the right direction.</p><p>Yours,</p><p>Soga no Tojiko</p>"

});


//Futo

erg[erg.constants["pohHearts"]][erg.constants["pohFuto"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohFuto"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Fair Lady Alice Margatroid,</p><p>I am a lost and lonely traveller, cast upon the shores of this modern Gensokyo in my service to the Crown Prince, heartsick for my homeland.  I must beseech you in your genius and compassion, oh great Seven-Coloured Puppeteer, to think upon my sad case and name the woman who might uplift me and fill the aching void in my chest.</p><p>I am ashamed that I must impose on you so, and wish only the greatest honour and fortune for the house of Margatroid-Kirisame.</p><p>Your most devoted and faithful servant,</p><p>Monobe no Futo</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohFuto"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Fair Lady Alice Margatroid,</p><p>Once again I come to the shores of your infinite wisdom to drink of your peerless strategy.  Can this poor graceless hermit beg but a glimpse of your radiant insight?</p><p>Your most devoted and faithful servant,</p><p>Mononobe no Futo</p>"

});

//Miko

erg[erg.constants["pohHearts"]][erg.constants["pohMiko"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohMiko"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Alice Margatroid,</p><p>In establishing myself in Gensokyo, I find myself in need of a consort.  While there is no necessity of securing succession with the country an effective ornament to the Youkai Sage's panoply, the time where a single woman might occupy a position of respectable seniority in society seems to have come to a close with your own nuptials.</p><p>The Sage vouches for your abilities as a matchmaker, thus please suggest a woman appropriate to my station and stature.  As Gensokyo has little use for political marriage I suppose I will be obliged to make a love match; I assure you I will do my part if you choose wisely.</p><p><em>(This letter bears the personal seal of Toyosatomimi no Miko but no signature.  It was most likely dictated to a disciple.)</em></p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohMiko"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Alice Margatroid,</p><p>Please forward an update in the strategy for securing my consort.  Your advice has proved most cogent so far, but I see the matter is inherently more difficult than I had first estimated.</p><p><em>(This letter bears the personal seal of Toyosatomimi no Miko but no signature.  It was most likely dictated to a disciple.)</em></p>"

});


//Mamizou

erg[erg.constants["pohHearts"]][erg.constants["pohMamizou"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohMamizou"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Dear Alice,</p><p>It's been a while since we first met, hasn't it?  I suppose I'm true resident of Gensokyo now; I'll miss Sado, but that's life and there's plenty to love here.  Including girls, and Yukari says you'll pick one out for me!</p><p>Ah, she should have a good tolerance for alcohol and pranks, a bake-danuki can't change her nature even for the most beautiful woman!</p><p>Your friend,</p><p>Mamizou Futatsuiwa</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohMamizou"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Dear Alice,</p><p>I'm looking to have some fun this week, let me know who should share it with me.  Also please tell your wife that financing offer is still open for whenever she wants to make a respectable businesswoman of herself.</p><p>Your friend,</p><p>Mamizou Futatsuiwa</p>"

});


//Kasen

erg[erg.constants["pohHearts"]][erg.constants["pohKasen"]].adviceLetters = new Array();

erg[erg.constants["pohHearts"]][erg.constants["pohKasen"]].adviceLetters.push({

    used: false,
    repeatable: false,
    text: "<p>Dear Ms Margatroid,</p><p>I know what the Youkai Sage has done, and I'm not strong enough to fight it.  I can't be alone any more, even though a hermit by definition should be.  Ah, I haven't felt like this since Mt. Ooe.</p><p>I'm afraid I haven't been conducting myself with romance in mind these many years; the lecturing might have caused some problems.  Please advise me on how best to proceed.</p><p>Yours,</p><p>Kasen Ibaraki</p>"

});

erg[erg.constants["pohHearts"]][erg.constants["pohKasen"]].adviceLetters.push({

    used: false,
    repeatable: true,
    text: "<p>Dear Ms Margatroid,</p><p>I think I've achieved a balance that will allow me to face the Shinigami at full strength this week even if I violate my hermit-nature by seeking love.  Please advise.</p><p>Yours,</p><p>Kasen Ibaraki</p>"

});





//################################### UI FUNCTIONS REPOSITORY #################################################

erg[erg.constants["pohUIFunctions"]] = {};

erg[erg.constants["pohUIFunctions"]][erg.constants["pohUIFunctionSwitchAdviceExtracurricularForm"]] = function (extracurricularType) {

    $("#pohAdviceExtracurricularAttributeRaiseForm").hide();
    $("#pohAdviceExtracurricularAttributeLowerForm").hide();
    $("#pohAdviceExtracurricularPassionRaiseForm").hide();
    $("#pohAdviceExtracurricularPassionLowerForm").hide();
    $("#pohAdviceExtracurricularTraitForm").hide();

    switch (extracurricularType) {

        case erg.constants["pohAdviceExtracurricularAttributeRaise"]:
            
            $("#pohAdviceExtracurricularAttributeRaiseForm").show();
            break;

        case erg.constants["pohAdviceExtracurricularAttributeLower"]:

            $("#pohAdviceExtracurricularAttributeLowerForm").show();
            break;

        case erg.constants["pohAdviceExtracurricularPassionRaise"]:

            $("#pohAdviceExtracurricularPassionRaiseForm").show();
            break;

        case erg.constants["pohAdviceExtracurricularPassionLower"]:

            $("#pohAdviceExtracurricularPassionLowerForm").show();
            break;

        case erg.constants["pohAdviceExtracurricularTrait"]:

            $("#pohAdviceExtracurricularTraitForm").show();
            break;
            
    }

}

erg[erg.constants["pohUIFunctions"]][erg.constants["pohUIFunctionPopulateAdviceDateHeart"]] = function (dateHeartKey, heartKey) {

    //So this function is a bit of an experiment, since it's going to know an awful lot of stuff it shouldn't.  But it seems silly to keep rebuilding the view just to for an informational change
    //Also yes vast chunks of c/p code, sob.

    var i;

    var j;

    var tempHTML = "";

    var tempDialogueHTML = "";

    var heart1 = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], heartKey);

    var heart2 = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], dateHeartKey);

    var profileUrl = erg.utilities.poh.getProfileThumbURL(heart2);

    var attributesPositive = new Array();

    var attributesNegative = new Array();

    var attributesMeta = new Array();

    var specialTraits = new Array();

    var connectionHeart1Heart2 = erg.utilities.getFromArrayByKey(heart1.connections, heart2.key);

    var attractionHeart1Heart2 = erg.utilities.poh.getCurrentAttraction(heart1, heart2);

    var connectionHeart2Heart1 = erg.utilities.getFromArrayByKey(heart2.connections, heart1.key);

    var attractionHeart2Heart1 = erg.utilities.poh.getCurrentAttraction(heart2, heart1);

    var currentCompatibility = erg.utilities.poh.getCurrentCompatibility(heart1, heart2);

    var relationship = erg.utilities.poh.getCoupleRelationship(heart1.key, heart2.key);

    var tempReaction;

    var tempTrait;


    for (i = 0; i < heart2.attributes.length; i++) {

        if (erg[erg.constants["pohAttributes"]][heart2.attributes[i].key].category === erg.constants["pohAttributeCategoryPositive"]) {

            tempReaction = erg.utilities.poh.getReactionTraitTestResultModifiers(heart2, heart2.attributes[i].key);

            attributesPositive.push({ key: heart2.attributes[i].key, label: erg[erg.constants["pohAttributes"]][heart2.attributes[i].key].label, value: heart2.attributes[i].value, description: erg[erg.constants["pohAttributes"]][heart2.attributes[i].key].description, successReaction: tempReaction.success, failReaction: tempReaction.fail });

        }

        if (erg[erg.constants["pohAttributes"]][heart2.attributes[i].key].category === erg.constants["pohAttributeCategoryNegative"]) {

            tempReaction = erg.utilities.poh.getReactionTraitTestResultModifiers(heart2, heart2.attributes[i].key);

            attributesNegative.push({ key: heart2.attributes[i].key, label: erg[erg.constants["pohAttributes"]][heart2.attributes[i].key].label, value: heart2.attributes[i].value, description: erg[erg.constants["pohAttributes"]][heart2.attributes[i].key].description, successReaction: tempReaction.success, failReaction: tempReaction.fail });

        }

        if (erg[erg.constants["pohAttributes"]][heart2.attributes[i].key].category === erg.constants["pohAttributeCategoryMeta"]) {

            tempReaction = erg.utilities.poh.getReactionTraitTestResultModifiers(heart2, heart2.attributes[i].key);

            attributesMeta.push({ key: heart2.attributes[i].key, label: erg[erg.constants["pohAttributes"]][heart2.attributes[i].key].label, value: heart2.attributes[i].value, description: erg[erg.constants["pohAttributes"]][heart2.attributes[i].key].description, successReaction: tempReaction.success, failReaction: tempReaction.fail });

        }

    }

    for (i = 0; i < heart2.specialTraits.length; i++) {

        tempTrait = erg[erg.constants["pohTraits"]][heart2.specialTraits[i]];

        specialTraits.push({ key: heart2.specialTraits[i], label: tempTrait.label, description: tempTrait.description, effectText: tempTrait.effectText });

    }

    //Heart1 Connection

    tempHTML += "<div id=\"pohAdviceHeart1ConnectionHeader\" class=\"pohSectionSubHeader\">Connection: " + erg.utilities.getPassionTrackStageLabel(connectionHeart1Heart2) + "</div>";
    tempHTML += "<div class=\"pohAdviceHeartConnectionStats\">";
    tempHTML += "<div class=\"pohAdviceHeartConnectionPassion\"><strong>Passion: </strong>" + connectionHeart1Heart2.passion + "</div>";
    tempHTML += "<div class=\"pohAdviceHeartConnectionAttraction\"><strong>Attraction: </strong>" + attractionHeart1Heart2 + "</div>";
    tempHTML += "<div class=\"clear\" />";
    tempHTML += "</div>";

    $("#pohAdviceHeart1Connection").html(tempHTML);

    tempHTML = "";

    //Image, Header, Bio


    tempHTML += "<div id=\"pohAdviceHeart2Name\" class=\"pohSectionHeader\">" + heart2.preferredName + "</div>";

    tempHTML += "<div id=\"pohAdviceHeart2ProfileImageWrapper\"><img src=\"" + profileUrl + "\" id=\"pohAdviceHeart2ProfileImage\" class=\"pohProfileImage\" /></div>";

    tempHTML += "<div id=\"pohAdviceHeart2BioWrapper\" class=\"pohAdviceHeartBioWrapper\">";

    tempHTML += "<div id=\"pohAdviceHeart2BioTierWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohAdviceHeart2BioTierLabel\" class=\"pohHeartDetailsLabel\">Tier:</div>";
    tempHTML += "<div id=\"pohAdviceHeart2BioTierValue\" class=\"pohHeartDetailsValue\">" + erg[erg.constants["pohTiers"]][heart2.tier].label + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div id=\"pohAdviceHeart2BioSpeciesWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohAdviceHeart2BioSpeciesLabel\" class=\"pohHeartDetailsLabel\">Species:</div>";
    tempHTML += "<div id=\"pohAdviceHeart2BioSpeciesValue\" class=\"pohHeartDetailsValue\">" + erg[erg.constants["pohSpecies"]][heart2.species].label + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div id=\"pohAdviceHeart2BioHairLengthWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohAdviceHeart2BioHairLengthLabel\" class=\"pohHeartDetailsLabel\">Hair Length:</div>";
    tempHTML += "<div id=\"pohAdviceHeart2BioHairLengthValue\" class=\"pohHeartDetailsValue\">" + erg[erg.constants["pohHairLength"]][heart2.hairLength].label + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div id=\"pohAdviceHeart2BioHairColourWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohAdviceHeart2BioHairColourLabel\" class=\"pohHeartDetailsLabel\">Hair Colour:</div>";
    tempHTML += "<div id=\"pohAdviceHeart2BioHairColourValue\" class=\"pohHeartDetailsValue\">" + erg[erg.constants["pohHairColour"]][heart2.hairColour].label + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div id=\"pohAdviceHeart2BioEyeColourWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohAdviceHeart2BioEyeColourLabel\" class=\"pohHeartDetailsLabel\">Eye Colour:</div>";
    tempHTML += "<div id=\"pohAdviceHeart2BioEyeColourValue\" class=\"pohHeartDetailsValue\">" + erg[erg.constants["pohEyeColour"]][heart2.eyeColour].label + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div class=\"clear\" /></div>";

    tempHTML += "<div class=\"clear\" />";


    //REACTIONS

    tempHTML += "<div id=\"pohAdviceHeart2DetailsAttributeReactionPositiveWrapper\" class=\"pohHeartDetailsAttributeReactionCategoryWrapper\">";

    tempHTML += "<div id=\"pohAdviceHeart2DetailsAttributeReactionPositiveHeader\" class=\"pohSectionSubHeader\">Positive</div>";

    for (i = 0; i < attributesPositive.length; i++) {

        tempHTML += "<div id=\"pohAdviceHeart2DetailsAttributeReactionWrapperPositive" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeReactionLabelPositive" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + attributesPositive[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeReactionValuePositive" + i + "\" class=\"pohHeartDetailsAttributeValue\">" + attributesPositive[i].successReaction + " / " + attributesPositive[i].failReaction + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Positive

    tempHTML += "<div id=\"pohAdviceHeart2DetailsAttributeReactionNegativeWrapper\" class=\"pohHeartDetailsAttributeReactionCategoryWrapper\">";

    tempHTML += "<div id=\"pohAdviceHeart2DetailsAttributeReactionNegativeHeader\" class=\"pohSectionSubHeader\">Negative</div>";

    for (i = 0; i < attributesNegative.length; i++) {

        tempHTML += "<div id=\"pohAdviceHeart2DetailsAttributeReactionWrapperNegative" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeReactionLabelNegative" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + attributesNegative[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeReactionValueNegative" + i + "\" class=\"pohHeartDetailsAttributeValue\">" + attributesNegative[i].successReaction + " / " + attributesNegative[i].failReaction + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Negative

    tempHTML += "<div class=\"clear\"/>";






    //Attributes


    tempHTML += "<div id=\"pohAdviceHeart2DetailsAttributePositiveWrapper\" class=\"pohHeartDetailsAttributeCategoryWrapper\">";

    tempHTML += "<div id=\"pohAdviceHeart2DetailsAttributePositiveHeader\" class=\"pohSectionSubHeader\">Positive</div>";

    for (i = 0; i < attributesPositive.length; i++) {

        tempHTML += "<div id=\"pohAdviceHeart2DetailsAttributeWrapperPositive" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeLabelPositive" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + attributesPositive[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeValuePositive" + i + "\" class=\"pohHeartDetailsAttributeValue\">" + attributesPositive[i].value + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Positive

    tempHTML += "<div id=\"pohAdviceHeart2DetailsAttributeNegativeWrapper\" class=\"pohHeartDetailsAttributeCategoryWrapper\">";

    tempHTML += "<div id=\"pohAdviceHeart2DetailsAttributeNegativeHeader\" class=\"pohSectionSubHeader\">Negative</div>";

    for (i = 0; i < attributesNegative.length; i++) {

        tempHTML += "<div id=\"pohAdviceHeart2DetailsAttributeWrapperNegative" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeLabelNegative" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + attributesNegative[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeValueNegative" + i + "\" class=\"pohHeartDetailsAttributeValue\">" + attributesNegative[i].value + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Negative

    tempHTML += "<div id=\"pohAdviceHeart2DetailsAttributeMetaWrapper\" class=\"pohHeartDetailsAttributeCategoryWrapper\">";

    tempHTML += "<div id=\"pohAdviceHeart2DetailsAttributeMetaHeader\" class=\"pohSectionSubHeader\">Meta</div>";

    for (i = 0; i < attributesMeta.length; i++) {

        tempHTML += "<div id=\"pohAdviceHeart2DetailsAttributeWrapperMeta" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeLabelMeta" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + attributesMeta[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeValueMeta" + i + "\" class=\"pohHeartDetailsAttributeValue\">" + attributesMeta[i].value + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Meta

    tempHTML += "<div class=\"clear\"/>";  //Attributes

    //Connection
    tempHTML += "<div id=\"pohAdviceHeart2ConnectionHeader\" class=\"pohSectionSubHeader\">Connection: " + erg.utilities.getPassionTrackStageLabel(connectionHeart2Heart1) + "</div>";
    tempHTML += "<div class=\"pohAdviceHeartConnectionStats\">";
    tempHTML += "<div class=\"pohAdviceHeartConnectionPassion\"><strong>Passion: </strong>" + connectionHeart2Heart1.passion + "</div>";
    tempHTML += "<div class=\"pohAdviceHeartConnectionAttraction\"><strong>Attraction: </strong>" + attractionHeart2Heart1 + "</div>";
    tempHTML += "<div class=\"clear\" />";
    tempHTML += "</div>";


    //Relationship

    if (relationship) {

        tempHTML += "<div id=\"pohAdviceHeart2RelationshipHeader\" class=\"pohSectionSubHeader\">Relationship: " + erg[erg.constants["pohRelationshipTypes"]][relationship.type].label + "</div>";
        tempHTML += "<div id=\"pohAdviceHeart2RelationshipDetails\"><strong>Strength: </strong>" + relationship.strength + " <strong>Last Date: </strong>" + erg.world[erg.constants["pohWeeks"]][relationship.lastDate].label + "  <strong>Longevity: </strong>" + (erg.world[erg.constants["pohCurrentWeek"]] - relationship.formed) + "  <strong>Stability: </strong>" + erg.utilities.poh.getCurrentStability(heart1, heart2) + "</div>";
    }


    //Compatibility

    tempHTML += "<div id=\"pohAdviceHeart2CompatibilityHeader\" class=\"pohSectionSubHeader\">Compatibility</div>";
    tempHTML += "<div id=\"pohAdviceHeart2CompatibilityDetails\"><strong>Base: </strong>" + connectionHeart1Heart2.baseCompatibility + " <strong>Current: </strong>" + currentCompatibility + "</div>";

    //Special

    tempHTML += "<div id=\"pohAdviceHeart2TraitRelationshipHeader\" class=\"pohSectionSubHeader\">Special</div>";

    for (i = 0; i < specialTraits.length; i++) {

        tempHTML += "<div class=\"pohHeartDetailsTrait\" id=\"pohAdviceHeart2SpecialTrait" + i + "\">" + specialTraits[i].label + "</div>";

    }

    tempHTML += "</div>";  //Special


    $("#pohAdviceHeart2Wrapper").html(tempHTML);


    //Clickies

    //Species

    erg.utilities.hookupIDWithDialogueClick("pohAdviceHeart2DetailsBioSpeciesWrapper", "<p>" + erg[erg.constants["pohSpecies"]][heart2.species].description + "</p><p><a href=\"" + erg[erg.constants["pohSpecies"]][heart2.species].wikiLink + "\" target=\"_new\">" + erg[erg.constants["pohSpecies"]][heart2.species].label + " on TohouWiki</a></p>", erg[erg.constants["pohSpecies"]][heart2.species].label);

    //Attributes

    for (i = 0; i < attributesPositive.length; i++) {

        tempDialogueHTML = "<p>" + attributesPositive[i].description + "</p>";

        tempDialogueHTML += "<p>This is a <strong>positive</strong> attribute.  By default, making a " + attributesPositive[i].label + " roll during a date changes the other character's Passion by:</p>";
        tempDialogueHTML += "<p><strong>Success: </strong>" + erg.constants["pohAttributeTestDefaultPositiveSuccessChange"];
        tempDialogueHTML += "<br/><strong>Failure: </strong>" + erg.constants["pohAttributeTestDefaultPositiveFailChange"] + "</p>";

        erg.utilities.hookupIDWithDialogueClick("pohAdviceHeart2DetailsAttributeWrapperPositive" + i, tempDialogueHTML, attributesPositive[i].label);

    }

    for (i = 0; i < attributesNegative.length; i++) {

        tempDialogueHTML = "<p>" + attributesNegative[i].description + "</p>";

        tempDialogueHTML += "<p>This is a <strong>negative</strong> attribute.  By default, making a " + attributesNegative[i].label + " roll during a date changes the other character's Passion by:</p>";
        tempDialogueHTML += "<p><strong>Success: </strong>" + erg.constants["pohAttributeTestDefaultNegativeSuccessChange"];
        tempDialogueHTML += "<br/><strong>Failure: </strong>" + erg.constants["pohAttributeTestDefaultNegativeFailChange"] + "</p>";

        erg.utilities.hookupIDWithDialogueClick("pohAdviceHeart2DetailsAttributeWrapperNegative" + i, tempDialogueHTML, attributesNegative[i].label);

    }

    for (i = 0; i < attributesMeta.length; i++) {

        tempDialogueHTML = "<p>" + attributesMeta[i].description + "</p>";

        erg.utilities.hookupIDWithDialogueClick("pohAdviceHeart2DetailsAttributeWrapperMeta" + i, tempDialogueHTML, attributesMeta[i].label);

    }

    //Traits

    for (i = 0; i < specialTraits.length; i++) {

        tempDialogueHTML = "<p><em>" + specialTraits[i].description + "</em></p>";

        tempDialogueHTML += "<p>" + specialTraits[i].effectText + "</p>";

        erg.utilities.hookupIDWithDialogueClick("pohAdviceHeart2SpecialTrait" + i, tempDialogueHTML, specialTraits[i].label);

    }


}



erg[erg.constants["pohUIFunctions"]][erg.constants["pohUIFunctionPopulateRemiliaShopHeart"]] = function (heartKey) {

    //Oh yes, this is awful.  Looks like I'll need to refactor to have a generic heart function at some point, but right now I'm more worried about getting the prestige spend working so it's copy/paste wheee

    var i;

    var j;

    var tempHTML = "";

    var tempDialogueHTML = "";

    var heart = erg.utilities.getFromArrayByKey(erg.world[erg.constants["pohHeartsArray"]], heartKey);

    var profileUrl = erg.utilities.poh.getProfileThumbURL(heart);

    var attributesPositive = new Array();

    var attributesNegative = new Array();

    var attributesMeta = new Array();

    var attractionTraits = new Array();

    var reactionTraits = new Array();

    var specialTraits = new Array();

    var tempTrait;

    var tempReaction;



    //Image, Header, Bio

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsWrapper\"  class=\"pohTextCell\">";




    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsName\" class=\"pohSectionSubHeader\">" + heart.fullName + "</div>";
    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsTitle\">" + heart.title + "</div>";

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsBioWrapper\">";

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsBioTierWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohHeartDeatilsBioTierLabel\" class=\"pohHeartDetailsLabel\">Tier:</div>";
    tempHTML += "<div id=\"pohHeartDeatilsBioTierValue\" class=\"pohHeartDetailsValue\">" + erg[erg.constants["pohTiers"]][heart.tier].label + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsBioSpeciesWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohHeartDeatilsBioSpeciesLabel\" class=\"pohHeartDetailsLabel\">Species:</div>";
    tempHTML += "<div id=\"pohHeartDeatilsBioSpeciesValue\" class=\"pohHeartDetailsValue\">" + erg[erg.constants["pohSpecies"]][heart.species].label + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsBioHairLengthWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohHeartDeatilsBioHairLengthLabel\" class=\"pohHeartDetailsLabel\">Hair Length:</div>";
    tempHTML += "<div id=\"pohHeartDeatilsBioHairLengthValue\" class=\"pohHeartDetailsValue\">" + erg[erg.constants["pohHairLength"]][heart.hairLength].label + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsBioHairColourWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohHeartDeatilsBioHairColourLabel\" class=\"pohHeartDetailsLabel\">Hair Colour:</div>";
    tempHTML += "<div id=\"pohHeartDeatilsBioHairColourValue\" class=\"pohHeartDetailsValue\">" + erg[erg.constants["pohHairColour"]][heart.hairColour].label + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsBioEyeColourWrapper\" class=\"pohHeartDetailsLabelValueWrapper\">";
    tempHTML += "<div id=\"pohHeartDeatilsBioEyeColourLabel\" class=\"pohHeartDetailsLabel\">Eye Colour:</div>";
    tempHTML += "<div id=\"pohHeartDeatilsBioEyeColourValue\" class=\"pohHeartDetailsValue\">" + erg[erg.constants["pohEyeColour"]][heart.eyeColour].label + "</div>";
    tempHTML += "</div>";

    tempHTML += "<div class=\"clear\" /></div>";  //Bio

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsProfileImageWrapper\"><img src=\"" + profileUrl + "\" id=\"pohRemiliaShopHeartDetailsProfileImage\" /></div>";

    tempHTML += "<div class=\"clear\" />";  //HeaderBio Wrapper

    //Traits

    for (i = 0; i < heart.attractionTraits.length; i++) {

        tempTrait = erg[erg.constants["pohTraits"]][heart.attractionTraits[i]];

        tempIndex = attractionTraits.push({ key: heart.attractionTraits[i], type: tempTrait.type, label: tempTrait.label, target: tempTrait.target, targetLabel: erg[erg.constants["pohAttractionTargets"]][tempTrait.target].label, magnitude: tempTrait.magnitude });
        tempIndex -= 1; //push returns length, but we want the actual index, which is one less

        if (tempTrait.type === erg.constants["pohTraitTypeAttractionModifierConditional"]) {

            attractionTraits[tempIndex].positive = new Array();

            for (j = 0; j < tempTrait.positive.length; j++) {

                attractionTraits[tempIndex].positive.push(erg.utilities.poh.getAttractionTargetValueLabel(tempTrait.target, tempTrait.positive[j]));

            }

            if (tempTrait.target === erg.constants["pohAttractionTargetTier"]) {

                attractionTraits[tempIndex].subTarget = tempTrait.subtarget;
                attractionTraits[tempIndex].magnitudeVariable = tempTrait.magnitudeVariable;

            }

        }


    }

    for (i = 0; i < heart.reactionTraits.length; i++) {

        tempTrait = erg[erg.constants["pohTraits"]][heart.reactionTraits[i]];

        tempIndex = reactionTraits.push({ key: heart.reactionTraits[i], label: tempTrait.label, description: tempTrait.description });
        tempIndex -= 1; //push returns length, but we want the actual index, which is one less

        reactionTraits[tempIndex].attributes = new Array();

        for (j = 0; j < tempTrait.attributes.length; j++) {

            reactionTraits[tempIndex].attributes.push({

                key: tempTrait.attributes[j].key,
                label: erg[erg.constants["pohAttributes"]][tempTrait.attributes[j].key].label,
                success: tempTrait.attributes[j].success,
                fail: tempTrait.attributes[j].fail

            });

        }

    }

    for (i = 0; i < heart.specialTraits.length; i++) {

        tempTrait = erg[erg.constants["pohTraits"]][heart.specialTraits[i]];

        specialTraits.push({ key: heart.specialTraits[i], label: tempTrait.label, description: tempTrait.description, effectText: tempTrait.effectText });

    }


    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsTraitAttractionWrapper\" class=\"pohHeartDetailsTraitCategoryWrapper\">";

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsTraitAttractionHeader\" class=\"pohSectionSubHeader\">Attraction</div>";

    for (i = 0; i < attractionTraits.length; i++) {

        tempHTML += "<div class=\"pohHeartDetailsTrait\" id=\"pohRemiliaShopHeartDetailsAttractionTrait" + i + "\">" + attractionTraits[i].label + "</div>";

    }

    tempHTML += "</div>";  //Attraction

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsTraitReactionWrapper\" class=\"pohHeartDetailsTraitCategoryWrapper\">";

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsTraitReactionHeader\" class=\"pohSectionSubHeader\">Reaction</div>";

    for (i = 0; i < reactionTraits.length; i++) {

        tempHTML += "<div class=\"pohHeartDetailsTrait\" id=\"pohRemiliaShopHeartDetailsReactionTrait" + i + "\">" + reactionTraits[i].label + "</div>";

    }

    tempHTML += "</div>";  //Reaction

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsTraitSpecialWrapper\" class=\"pohHeartDetailsTraitCategoryWrapper\">";

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsTraitSpecialHeader\" class=\"pohSectionSubHeader\">Special</div>";

    for (i = 0; i < specialTraits.length; i++) {

        tempHTML += "<div class=\"pohHeartDetailsTrait\" id=\"pohRemiliaShopHeartDetailsSpecialTrait" + i + "\">" + specialTraits[i].label + "</div>";

    }

    tempHTML += "</div>";  //Special

    tempHTML += "<div class=\"clear\" />";  //Traits


    //Attributes


    for (i = 0; i < heart.attributes.length; i++) {

        if (erg[erg.constants["pohAttributes"]][heart.attributes[i].key].category === erg.constants["pohAttributeCategoryPositive"]) {

            tempReaction = erg.utilities.poh.getReactionTraitTestResultModifiers(heart, heart.attributes[i].key);

            attributesPositive.push({ key: heart.attributes[i].key, label: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].label, value: heart.attributes[i].value, description: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].description, successReaction: tempReaction.success, failReaction: tempReaction.fail });

        }

        if (erg[erg.constants["pohAttributes"]][heart.attributes[i].key].category === erg.constants["pohAttributeCategoryNegative"]) {

            tempReaction = erg.utilities.poh.getReactionTraitTestResultModifiers(heart, heart.attributes[i].key);

            attributesNegative.push({ key: heart.attributes[i].key, label: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].label, value: heart.attributes[i].value, description: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].description, successReaction: tempReaction.success, failReaction: tempReaction.fail });

        }

        if (erg[erg.constants["pohAttributes"]][heart.attributes[i].key].category === erg.constants["pohAttributeCategoryMeta"]) {

            tempReaction = erg.utilities.poh.getReactionTraitTestResultModifiers(heart, heart.attributes[i].key);

            attributesMeta.push({ key: heart.attributes[i].key, label: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].label, value: heart.attributes[i].value, description: erg[erg.constants["pohAttributes"]][heart.attributes[i].key].description, successReaction: tempReaction.success, failReaction: tempReaction.fail });

        }

    }


    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsAttributePositiveWrapper\" class=\"pohHeartDetailsAttributeCategoryWrapper\">";

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsAttributePositiveHeader\" class=\"pohSectionSubHeader\">Positive</div>";

    for (i = 0; i < attributesPositive.length; i++) {

        tempHTML += "<div id=\"pohRemiliaShopHeartDetailsAttributeWrapperPositive" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeLabelPositive" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + attributesPositive[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeValuePositive" + i + "\" class=\"pohHeartDetailsAttributeValue\">" + attributesPositive[i].value + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Positive

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsAttributeNegativeWrapper\" class=\"pohHeartDetailsAttributeCategoryWrapper\">";

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsAttributeNegativeHeader\" class=\"pohSectionSubHeader\">Negative</div>";

    for (i = 0; i < attributesNegative.length; i++) {

        tempHTML += "<div id=\"pohRemiliaShopHeartDetailsAttributeWrapperNegative" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeLabelNegative" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + attributesNegative[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeValueNegative" + i + "\" class=\"pohHeartDetailsAttributeValue\">" + attributesNegative[i].value + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Negative

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsAttributeMetaWrapper\" class=\"pohHeartDetailsAttributeCategoryWrapper\">";

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsAttributeMetaHeader\" class=\"pohSectionSubHeader\">Meta</div>";

    for (i = 0; i < attributesMeta.length; i++) {

        tempHTML += "<div id=\"pohRemiliaShopHeartDetailsAttributeWrapperMeta" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeLabelMeta" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + attributesMeta[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeValueMeta" + i + "\" class=\"pohHeartDetailsAttribueValue\">" + attributesMeta[i].value + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Meta

    tempHTML += "<div class=\"clear\"/>";  //Attributes


    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsAttributeReactionPositiveWrapper\" class=\"pohHeartDetailsAttributeReactionCategoryWrapper\">";

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsAttributeReactionPositiveHeader\" class=\"pohSectionSubHeader\">Positive</div>";

    for (i = 0; i < attributesPositive.length; i++) {

        tempHTML += "<div id=\"pohRemiliaShopHeartDetailsAttributeReactionWrapperPositive" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeReactionLabelPositive" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + attributesPositive[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeReactionValuePositive" + i + "\" class=\"pohHeartDetailsAttributeValue\">" + attributesPositive[i].successReaction + " / " + attributesPositive[i].failReaction + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Positive

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsAttributeReactionNegativeWrapper\" class=\"pohHeartDetailsAttributeReactionCategoryWrapper\">";

    tempHTML += "<div id=\"pohRemiliaShopHeartDetailsAttributeReactionNegativeHeader\" class=\"pohSectionSubHeader\">Negative</div>";

    for (i = 0; i < attributesNegative.length; i++) {

        tempHTML += "<div id=\"pohRemiliaShopHeartDetailsAttributeReactionWrapperNegative" + i + "\" class=\"pohHeartDetailsLabelValueWrapper\">";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeReactionLabelNegative" + i + "\" class=\"pohHeartDetailsAttributeLabel\">" + attributesNegative[i].label + ":</div>";
        tempHTML += "<div id=\"pohHeartDeatilsAttributeReactionValueNegative" + i + "\" class=\"pohHeartDetailsAttributeValue\">" + attributesNegative[i].successReaction + " / " + attributesNegative[i].failReaction + "</div>";
        tempHTML += "</div>";

    }

    tempHTML += "</div>";  //Negative

    tempHTML += "<div class=\"clear\"/>";  //Attribute Reactions

    tempHTML += "</div>"; //Heart Details Wrapper


    $("#pohRemiliaShopHeartWrapper").html(tempHTML);


    //Clickies

    //Species

    erg.utilities.hookupIDWithDialogueClick("pohRemiliaShopHeartDetailsBioSpeciesWrapper", "<p>" + erg[erg.constants["pohSpecies"]][heart.species].description + "</p><p><a href=\"" + erg[erg.constants["pohSpecies"]][heart.species].wikiLink + "\" target=\"_new\">" + erg[erg.constants["pohSpecies"]][heart.species].label + " on TohouWiki</a></p>", erg[erg.constants["pohSpecies"]][heart.species].label);


    //Traits

    for (i = 0; i < attractionTraits.length; i++) {

        tempDialogueHTML = "<p>This is an <strong>attraction</strong> trait.  It modifies the degree to which this character is attracted to others based on the following criteria:</p>";

        if (attractionTraits[i].type === erg.constants["pohTraitTypeAttractionModifierConditional"] && attractionTraits[i].target !== erg.constants["pohAttractionTargetTier"] && attractionTraits[i].target !== erg.constants["pohTraitSpecialShipCaptain"]) {  //Special trait hack - last term) {

            tempDialogueHTML += "<p><strong>Bonus Attraction: </strong>" + attractionTraits[i].magnitude + "</p>";
            tempDialogueHTML += "<p>For characters whose <strong>" + attractionTraits[i].targetLabel + "</strong> is in this list:</p>";
            tempDialogueHTML += "<ul>";

            for (j = 0; j < attractionTraits[i].positive.length; j++) {

                tempDialogueHTML += "<li>" + attractionTraits[i].positive[j] + "</li>";

            }

            tempDialogueHTML += "</ul>";

        }


        //################################################ SPECIAL TRAIT HACK #################################################################################

        if (attractionTraits[i].type === erg.constants["pohTraitTypeAttractionModifierConditional"] && attractionTraits[i].target === erg.constants["pohTraitSpecialShipCaptain"]) {  //Special trait hack - last term

            tempDialogueHTML += "<p><strong>Bonus Attraction: </strong>" + attractionTraits[i].magnitude + "</p>";
            tempDialogueHTML += "<p>For characters with appropriate Special Traits (such as Ship's Captain).</p>";

        }

        //############################################## END SPECIAL TRAIT HACK ###############################################################################

        if (attractionTraits[i].type === erg.constants["pohTraitTypeAttractionModifierConditional"] && attractionTraits[i].target === erg.constants["pohAttractionTargetTier"]) {

            tempDialogueHTML += "<p><strong>Bonus Attraction: </strong>" + attractionTraits[i].magnitude + "</p>";

            if (attractionTraits[i].subTarget === erg.constants["pohAttractionSubtargetTierLower"]) {

                tempDialogueHTML += "<p>For each <strong>" + attractionTraits[i].targetLabel + "</strong> lower than this character.</p>";

            }

            if (attractionTraits[i].subTarget === erg.constants["pohAttractionSubtargetTierHigher"]) {

                tempDialogueHTML += "<p>For each <strong>" + attractionTraits[i].targetLabel + "</strong> higher than this character.</p>";

            }

            if (attractionTraits[i].subTarget === erg.constants["pohAttractionSubtargetTierEqual"]) {

                tempDialogueHTML += "<p>For <strong>all</strong> characters, then:</p>";
                tempDialogueHTML += "<p><strong>Attraction Penalty: </strong>" + attractionTraits[i].magnitudeVariable + "</p>";
                tempDialogueHTML += "<p>For each <strong>" + attractionTraits[i].targetLabel + "</strong> lower or higher than this character.</p>";

            }

        }

        if (attractionTraits[i].type === erg.constants["pohTraitTypeAttractionModifierAutomaticBuff"]) {

            tempDialogueHTML += "<p><strong>Bonus Attraction: </strong>" + attractionTraits[i].magnitude + "</p>";
            tempDialogueHTML += "<p>For <strong>all</strong> characters.</p>";

        }

        if (attractionTraits[i].type === erg.constants["pohTraitTypeAttractionModifierAutomaticPenalty"]) {

            tempDialogueHTML += "<p><strong>Attraction Penalty: </strong>" + attractionTraits[i].magnitude + "</p>";
            tempDialogueHTML += "<p>For <strong>all</strong> characters.</p>";

        }

        erg.utilities.hookupIDWithDialogueClick("pohRemiliaShopHeartDetailsAttractionTrait" + i, tempDialogueHTML, attractionTraits[i].label);

    }

    for (i = 0; i < reactionTraits.length; i++) {

        tempDialogueHTML = "<p><em>" + reactionTraits[i].description + "</em></p>";

        tempDialogueHTML += "<p>This is a <strong>reaction</strong> trait.  It modifies this character's change in Passion for another character on a date when that character rolls the following attributes:</p>";

        for (j = 0; j < reactionTraits[i].attributes.length; j++) {

            tempDialogueHTML += "<p><strong>" + reactionTraits[i].attributes[j].label + "</strong></p>";
            tempDialogueHTML += "<p><strong>Success: </strong>" + reactionTraits[i].attributes[j].success;
            tempDialogueHTML += "<br/><strong>Failure: </strong>" + reactionTraits[i].attributes[j].fail + "</p>";

        }

        erg.utilities.hookupIDWithDialogueClick("pohRemiliaShopHeartDetailsReactionTrait" + i, tempDialogueHTML, reactionTraits[i].label);

    }


    for (i = 0; i < specialTraits.length; i++) {

        tempDialogueHTML = "<p><em>" + specialTraits[i].description + "</em></p>";

        tempDialogueHTML += "<p>" + specialTraits[i].effectText + "</p>";

        erg.utilities.hookupIDWithDialogueClick("pohRemiliaShopHeartDetailsSpecialTrait" + i, tempDialogueHTML, specialTraits[i].label);

    }


    //Attributes

    for (i = 0; i < attributesPositive.length; i++) {

        tempDialogueHTML = "<p>" + attributesPositive[i].description + "</p>";

        tempDialogueHTML += "<p>This is a <strong>positive</strong> attribute.  By default, making a " + attributesPositive[i].label + " roll during a date changes the other character's Passion by:</p>";
        tempDialogueHTML += "<p><strong>Success: </strong>" + erg.constants["pohAttributeTestDefaultPositiveSuccessChange"];
        tempDialogueHTML += "<br/><strong>Failure: </strong>" + erg.constants["pohAttributeTestDefaultPositiveFailChange"] + "</p>";

        erg.utilities.hookupIDWithDialogueClick("pohRemiliaShopHeartDetailsAttributeWrapperPositive" + i, tempDialogueHTML, attributesPositive[i].label);

    }

    for (i = 0; i < attributesNegative.length; i++) {

        tempDialogueHTML = "<p>" + attributesNegative[i].description + "</p>";

        tempDialogueHTML += "<p>This is a <strong>negative</strong> attribute.  By default, making a " + attributesNegative[i].label + " roll during a date changes the other character's Passion by:</p>";
        tempDialogueHTML += "<p><strong>Success: </strong>" + erg.constants["pohAttributeTestDefaultNegativeSuccessChange"];
        tempDialogueHTML += "<br/><strong>Failure: </strong>" + erg.constants["pohAttributeTestDefaultNegativeFailChange"] + "</p>";

        erg.utilities.hookupIDWithDialogueClick("pohRemiliaShopHeartDetailsAttributeWrapperNegative" + i, tempDialogueHTML, attributesNegative[i].label);

    }

    for (i = 0; i < attributesMeta.length; i++) {

        tempDialogueHTML = "<p>" + attributesMeta[i].description + "</p>";

        erg.utilities.hookupIDWithDialogueClick("pohRemiliaShopHeartDetailsAttributeWrapperMeta" + i, tempDialogueHTML, attributesMeta[i].label);

    }



}


erg[erg.constants["pohUIFunctions"]][erg.constants["pohUIFunctionHookupRelationshipDialogue"]] = function (id, relationshipObject) {

    var tempDialogueHTML = "";

    var dialogueLabel = relationshipObject.heart1Name + " &amp; " + relationshipObject.heart2Name + ": " + relationshipObject.typeLabel;

    tempDialogueHTML += "<p><em>" + relationshipObject.description + "</em></p>";

    tempDialogueHTML += "<p><strong>Strength: </strong>" + relationshipObject.strength + "</p>";
    tempDialogueHTML += "<p>Strength increases whenever both partners' Passion for each other increases at the same time; it falls whenever their Passion falls at the same time.</p>";

    tempDialogueHTML += "<p><strong>Longevity: </strong>" + relationshipObject.longevity + " weeks</p>";

    tempDialogueHTML += "<p><strong>Stability: </strong>" + relationshipObject.stability + "</p>";
    tempDialogueHTML += "<p>Increase Stability by making sure both partners have higher Attraction and Passion for each other than any other characters.</p>";

    tempDialogueHTML += "<p><strong>Weekly Date Chance: </strong>" + relationshipObject.relationshipDateChance + "% (tested for each partner)</p>";

    tempDialogueHTML += "<p><strong>Date Acceptance: </strong>+" + relationshipObject.dateAcceptanceModifier + "%</p>";

    tempDialogueHTML += "<p><strong>Intimacy Chance: </strong>+" + relationshipObject.intimacyModifier + "%</p>";

    tempDialogueHTML += "<p><strong>Jealousy On Cheating Modifier: </strong>" + relationshipObject.jealousyModifier + "%</p>";

    tempDialogueHTML += "<p><strong>Date Refusal for Outsiders: </strong>" + relationshipObject.outsiderRefusalModifier + "% (only if not in relationship with third party)</p>";

    tempDialogueHTML += "<p><strong>Weeks Without Date Before Breakup Check: </strong>" + relationshipObject.noDateBreakupThreshold + " (Last Date: " + relationshipObject.lastDate + ")</p>";

    tempDialogueHTML += "<p><strong>To upgrade to the next level, this relationship must:</strong></p>";

    switch (relationshipObject.level) {

        case 0:

            tempDialogueHTML += "<p>On an intimate ending to a date, each partner must pass a roll of their Passion for the other (modified by their Passion gain on that date).</p>";
            break;

        case 1:

            tempDialogueHTML += "<p>On an intimate ending to a date, each partner must pass a roll of their Passion for the other (unmodified), and the relationship must pass rolls of its Strength and Stability.</p>";
            break;

        case 2:

            tempDialogueHTML += "<p>On an intimate ending to a date when the relationship is of Strength " + erg.constants["pohTrueLoveStrengthThreshold"] + " and Longevity " + erg.constants["pohTrueLoveLongevityThreshold"] + " or higher, each partner must pass a roll of their Passion for the other (unmodified), and the relationship must pass a roll of its Stability.</p>";
            break;

    }

    erg.utilities.hookupIDWithDialogueClick(id, tempDialogueHTML, dialogueLabel);

}