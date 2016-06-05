//####################################### GAME MODE CONSTANTS ##################################################

var GAME_MODE_SEGMENT = "gameModeSegment";
var GAME_MODE_COMBAT = "gameModeCombat";
var GAME_MODE_SOCIAL_COMBAT = "gameModeSocialCombat";

//####################################### DICE ROLLER CONSTANTS ##################################################

var CONSTANT_MUNDANE_BONUS = "mundaneBonus";
var CONSTANT_MAGIC_BONUS = "magicBonus";
var CONSTANT_INTERNAL_PENALTY = "internalPenalty";
var CONSTANT_WOUND_PENALTY = "woundPenalty";
var CONSTANT_ACTION_PENALTY = "actionPenalty";
var CONSTANT_MAGIC_PENALTY = "magicPenalty";
var CONSTANT_EXTERNAL_PENALTY = "externalPenalty";
var CONSTANT_SUCCESS_BONUS = "successBonus";
var CONSTANT_DIFFICULTY = "difficulty";
var CONSTANT_ESSENCE = "essence";
var CONSTANT_TARGET_NUMBER = "targetNumber";
var CONSTANT_HEROIC = "heroic";

var CONSTANT_BONUS_INVALID = "Invalid";

var CONSTANT_DAMAGE_DICE_BONUS = "damageDiceBonus";
var CONSTANT_DAMAGE_LEVEL_BONUS = "damageLevelBonus";

//Not actually used in the dice roller, but scope creep on the role of bonus objects, woo
var CONSTANT_SPEED_REDUCTION = "speedReduction";  //Makes you faster
var CONSTANT_SPEED_INCREASE = "speedIncrease";  //Makes you slower.  You may lol.

var CONSTANT_BOTCH = -99 //Y2what?
var CONSTANT_FAILURE = -1;


//####################################### TRAIT CONSTANTS ##################################################

var CONSTANT_TRAIT_MAX_RATING = 5;
var CONSTANT_TRAIT_LARGE = 10;

var CONSTANT_IMAGE_URL_DOT_EMPTY = "images/characterSheet/dotEmpty.png";   //Also used explicitly in CONSTANT_CHARACTER_TRAIT_PREFIX_SPECIALTY
var CONSTANT_IMAGE_URL_DOT_FULL = "images/characterSheet/dotFull.png";

var CONSTANT_IMAGE_URL_BOX_EMPTY = "images/characterSheet/boxEmpty.png";
var CONSTANT_IMAGE_URL_BOX_FULL = "images/characterSheet/boxFull.png";
var CONSTANT_IMAGE_URL_BOX_BASHING = "images/characterSheet/boxBashing.png";
var CONSTANT_IMAGE_URL_BOX_LETHAL = "images/characterSheet/boxLethal.png";
var CONSTANT_IMAGE_URL_BOX_AGGRAVATED = "images/characterSheet/boxAggravated.png";


var CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_TEXT = "characterSheetTraitTypeText";
var CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_PREFIX = "characterSheetTraitTypePrefix";
var CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_DOTS = "characterSheetTraitTypeDots";
var CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ABILITY = "characterSheetTraitTypeDots";
var CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_SPECIALTY = "characterSheetTraitTypeSpecialty";
var CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_BACKGROUND = "characterSheetTraitTypeBackground";
var CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_WILLPOWER = "characterSheetTraitTypeWillpower";
var CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_VIRTUE = "characterSheetTraitTypeVirtue";
var CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_SOAK = "characterSheetTraitTypeSoak";
var CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_WEAPON = "characterSheetTraitTypeWeapon";
var CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_ESSENCE_POOL = "characterSheetTraitTypeEssencePool";
var CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_CHARM = "characterSheetTraitTypeCharm";
var CONSTANT_CHARACTER_SHEET_TRAIT_TYPE_INTIMACY = "characterSheetTraitTypeIntimacy";


var CONSTANT_TRAIT_CHARACTER_NAME = "traitCharacterName";
var CONSTANT_TRAIT_ID_CHARACTER_NAME = "characterSheetName";
var CONSTANT_TRAIT_CHARACTER_SHORT_NAME = "traitCharacterShortName";

var CONSTANT_TRAIT_MOTIVATION = "traitMotivation";
var CONSTANT_TRAIT_LABEL_MOTIVATION = "<strong>Motivation:</strong>";
var CONSTANT_TRAIT_ID_MOTIVATION = "characterSheetMotivation";

var CONSTANT_TRAIT_CHARACTER_TYPE = "traitCharacterType";
var CONSTANT_TRAIT_LABEL_CHARACTER_TYPE = "<strong>Type:</strong>";
var CONSTANT_TRAIT_ID_CHARACTER_TYPE = "characterSheetType";

var CONSTANT_TRAIT_CASTE = "traitCaste";
var CONSTANT_TRAIT_LABEL_CASTE = "<strong>Caste:</strong>";
var CONSTANT_TRAIT_ID_CASTE = "characterSheetCaste";


//Attributes - Physical

var CONSTANT_TRAIT_STRENGTH = "traitStrength";
var CONSTANT_TRAIT_DOT_ID_STRENGTH = "traitDotStrength";

var CONSTANT_TRAIT_DEXTERITY = "traitDexterity";
var CONSTANT_TRAIT_DOT_ID_DEXTERITY = "traitDotDexterity";

var CONSTANT_TRAIT_STAMINA = "traitStamina";
var CONSTANT_TRAIT_DOT_ID_STAMINA = "traitDotStamina";

//Attributes - Social

var CONSTANT_TRAIT_CHARISMA = "traitCharisma";
var CONSTANT_TRAIT_DOT_ID_CHARISMA = "traitDotCharisma";
var CONSTANT_TRAIT_LABEL_CHARISMA = "Charisma";

var CONSTANT_TRAIT_MANIPULATION = "traitManipulation";
var CONSTANT_TRAIT_DOT_ID_MANIPULATION = "traitDotManipulation";

var CONSTANT_TRAIT_APPEARANCE = "traitAppearance";
var CONSTANT_TRAIT_DOT_ID_APPEARANCE = "traitDotAppearance";

//Attributes - Mental

var CONSTANT_TRAIT_PERCEPTION = "traitPerception";
var CONSTANT_TRAIT_DOT_ID_PERCEPTION = "traitDotPerception";
var CONSTANT_TRAIT_LABEL_PERCEPTION = "Perception";

var CONSTANT_TRAIT_INTELLIGENCE = "traitIntelligence";
var CONSTANT_TRAIT_DOT_ID_INTELLIGENCE = "traitDotIntelligence";

var CONSTANT_TRAIT_WITS = "traitWits";
var CONSTANT_TRAIT_DOT_ID_WITS = "traitDotWits";



//Abilities - Dawn

var CONSTANT_TRAIT_ARCHERY = "traitArchery";
var CONSTANT_TRAIT_ARCHERY_FAVOURED = "traitArcheryFavoured";
var CONSTANT_TRAIT_DOT_ID_ARCHERY = "traitDotArchery";
var CONSTANT_TRAIT_BOX_ID_ARCHERY = "favouredAbilityArchery";

var CONSTANT_TRAIT_MARTIAL_ARTS = "traitMartialArts";
var CONSTANT_TRAIT_LABEL_MARTIAL_ARTS = "Martial Arts";
var CONSTANT_TRAIT_MARTIAL_ARTS_FAVOURED = "traitMartialArtsFavoured";
var CONSTANT_TRAIT_DOT_ID_MARTIAL_ARTS = "traitDotMartialArts";
var CONSTANT_TRAIT_BOX_ID_MARTIAL_ARTS = "favouredAbilityMartialArts";

var CONSTANT_TRAIT_MELEE = "traitMelee";
var CONSTANT_TRAIT_LABEL_MELEE = "Melee";
var CONSTANT_TRAIT_MELEE_FAVOURED = "traitMeleeFavoured";
var CONSTANT_TRAIT_DOT_ID_MELEE = "traitDotMelee";
var CONSTANT_TRAIT_BOX_ID_MELEE = "favouredAbilityMelee";

var CONSTANT_TRAIT_THROWN = "traitThrown";
var CONSTANT_TRAIT_THROWN_FAVOURED = "traitThrownFavoured";
var CONSTANT_TRAIT_DOT_ID_THROWN = "traitDotThrown";
var CONSTANT_TRAIT_BOX_ID_THROWN = "favouredAbilityThrown";

var CONSTANT_TRAIT_WAR = "traitWar";
var CONSTANT_TRAIT_WAR_FAVOURED = "traitWarFavoured";
var CONSTANT_TRAIT_DOT_ID_WAR = "traitDotWar";
var CONSTANT_TRAIT_BOX_ID_WAR = "favouredAbilityWar";

//Abilities - Zenith


var CONSTANT_TRAIT_INTEGRITY = "traitIntegrity";
var CONSTANT_TRAIT_INTEGRITY_FAVOURED = "traitIntegrityFavoured";
var CONSTANT_TRAIT_DOT_ID_INTEGRITY = "traitDotIntegrity";
var CONSTANT_TRAIT_BOX_ID_INTEGRITY = "favouredAbilityIntegrity";

var CONSTANT_TRAIT_PERFORMANCE = "traitPerformance";
var CONSTANT_TRAIT_PERFORMANCE_FAVOURED = "traitPerformanceFavoured";
var CONSTANT_TRAIT_DOT_ID_PERFORMANCE = "traitDotPerformance";
var CONSTANT_TRAIT_BOX_ID_PERFORMANCE = "favouredAbilityPerformance";

var CONSTANT_TRAIT_PRESENCE = "traitPresence";
var CONSTANT_TRAIT_PRESENCE_FAVOURED = "traitPresenceFavoured";
var CONSTANT_TRAIT_DOT_ID_PRESENCE = "traitDotPresence";
var CONSTANT_TRAIT_BOX_ID_PRESENCE = "favouredAbilityPresence";
var CONSTANT_TRAIT_LABEL_PRESENCE = "Presence";

var CONSTANT_TRAIT_RESISTANCE = "traitResistance";
var CONSTANT_TRAIT_RESISTANCE_FAVOURED = "traitResistanceFavoured";
var CONSTANT_TRAIT_DOT_ID_RESISTANCE = "traitDotResistance";
var CONSTANT_TRAIT_BOX_ID_RESISTANCE = "favouredAbilityResistance";

var CONSTANT_TRAIT_SURVIVAL = "traitSurvival";
var CONSTANT_TRAIT_SURVIVAL_FAVOURED = "traitSurvivalFavoured";
var CONSTANT_TRAIT_DOT_ID_SURVIVAL = "traitDotSurvival";
var CONSTANT_TRAIT_BOX_ID_SURVIVAL = "favouredAbilitySurvival";

//Abilities - Twilight

var CONSTANT_TRAIT_CRAFT = "traitCraft";
var CONSTANT_TRAIT_CRAFT_FAVOURED = "traitCraftFavoured";
var CONSTANT_TRAIT_DOT_ID_CRAFT = "traitDotCraft";
var CONSTANT_TRAIT_BOX_ID_CRAFT = "favouredAbilityCraft";

var CONSTANT_TRAIT_INVESTIGATION = "traitInvestigation";
var CONSTANT_TRAIT_INVESTIGATION_FAVOURED = "traitInvestigationFavoured";
var CONSTANT_TRAIT_DOT_ID_INVESTIGATION = "traitDotInvestigation";
var CONSTANT_TRAIT_BOX_ID_INVESTIGATION = "favouredAbilityInvestigation";
var CONSTANT_TRAIT_LABEL_INVESTIGATION = "Investigation";

var CONSTANT_TRAIT_LORE = "traitLore";
var CONSTANT_TRAIT_LORE_FAVOURED = "traitLoreFavoured";
var CONSTANT_TRAIT_DOT_ID_LORE = "traitDotLore";
var CONSTANT_TRAIT_BOX_ID_LORE = "favouredAbilityLore";

var CONSTANT_TRAIT_MEDICINE = "traitMedicine";
var CONSTANT_TRAIT_MEDICINE_FAVOURED = "traitMedicineFavoured";
var CONSTANT_TRAIT_DOT_ID_MEDICINE = "traitDotMedicine";
var CONSTANT_TRAIT_BOX_ID_MEDICINE = "favouredAbilityMedicine";

var CONSTANT_TRAIT_OCCULT = "traitOccult";
var CONSTANT_TRAIT_OCCULT_FAVOURED = "traitOccultFavoured";
var CONSTANT_TRAIT_DOT_ID_OCCULT = "traitDotOccult";
var CONSTANT_TRAIT_BOX_ID_OCCULT = "favouredAbilityOccult";

//Abilities - Night

var CONSTANT_TRAIT_ATHLETICS = "traitAthletics";
var CONSTANT_TRAIT_ATHLETICS_FAVOURED = "traitAthleticsFavoured";
var CONSTANT_TRAIT_DOT_ID_ATHLETICS = "traitDotAthletics";
var CONSTANT_TRAIT_BOX_ID_ATHLETICS = "favouredAbilityAthletics";

var CONSTANT_TRAIT_AWARENESS = "traitAwareness";
var CONSTANT_TRAIT_AWARENESS_FAVOURED = "traitAwarenessFavoured";
var CONSTANT_TRAIT_DOT_ID_AWARENESS = "traitDotAwareness";
var CONSTANT_TRAIT_BOX_ID_AWARENESS = "favouredAbilityAwareness";

var CONSTANT_TRAIT_DODGE = "traitDodge";
var CONSTANT_TRAIT_DODGE_FAVOURED = "traitDodgeFavoured";
var CONSTANT_TRAIT_DOT_ID_DODGE = "traitDotDodge";
var CONSTANT_TRAIT_BOX_ID_DODGE = "favouredAbilityDodge";

var CONSTANT_TRAIT_LARCENY = "traitLarceny";
var CONSTANT_TRAIT_LARCENY_FAVOURED = "traitLarcenyFavoured";
var CONSTANT_TRAIT_DOT_ID_LARCENY = "traitDotLarceny";
var CONSTANT_TRAIT_BOX_ID_LARCENY = "favouredAbilityLarceny";

var CONSTANT_TRAIT_STEALTH = "traitStealth";
var CONSTANT_TRAIT_STEALTH_FAVOURED = "traitStealthFavoured";
var CONSTANT_TRAIT_DOT_ID_STEALTH = "traitDotStealth";
var CONSTANT_TRAIT_BOX_ID_STEALTH = "favouredAbilityStealth";

//Abilities - Eclipse

var CONSTANT_TRAIT_BUREAUCRACY = "traitBureaucracy";
var CONSTANT_TRAIT_BUREAUCRACY_FAVOURED = "traitBureaucracyFavoured";
var CONSTANT_TRAIT_DOT_ID_BUREAUCRACY = "traitDotBureaucracy";
var CONSTANT_TRAIT_BOX_ID_BUREAUCRACY = "favouredAbilityBureaucracy";

var CONSTANT_TRAIT_LINGUISTICS = "traitLinguistics";
var CONSTANT_TRAIT_LINGUISTICS_FAVOURED = "traitLinguisticsFavoured";
var CONSTANT_TRAIT_DOT_ID_LINGUISTICS = "traitDotLinguistics";
var CONSTANT_TRAIT_BOX_ID_LINGUISTICS = "favouredAbilityLinguistics";

var CONSTANT_TRAIT_RIDE = "traitRide";
var CONSTANT_TRAIT_RIDE_FAVOURED = "traitRideFavoured";
var CONSTANT_TRAIT_DOT_ID_RIDE = "traitDotRide";
var CONSTANT_TRAIT_BOX_ID_RIDE = "favouredAbilityRide";

var CONSTANT_TRAIT_SAIL = "traitSail";
var CONSTANT_TRAIT_SAIL_FAVOURED = "traitSailFavoured";
var CONSTANT_TRAIT_DOT_ID_SAIL = "traitDotSail";
var CONSTANT_TRAIT_BOX_ID_SAIL = "favouredAbilitySail";

var CONSTANT_TRAIT_SOCIALISE = "traitSocialise";
var CONSTANT_TRAIT_SOCIALISE_FAVOURED = "traitSocialiseFavoured";
var CONSTANT_TRAIT_DOT_ID_SOCIALISE = "traitDotSocialise";
var CONSTANT_TRAIT_BOX_ID_SOCIALISE = "favouredAbilitySocialise";

//Specialties

var CONSTANT_TRAIT_SPECIALTY = "traitSpecialty";
var CONSTANT_TRAIT_PREFIX_SPECIALTY = "<img src=\"images/characterSheet/boxEmpty.png\" class=\"characterSheetFavouredAbilityBox\" id=\"favouredAbilitySpecialty";
var CONSTANT_TRAIT_DOT_ID_SPECIALTY = "traitDotSpecialty";
var CONSTANT_TRAIT_LABEL_ID_SPECIALTY = "traitLabelSpecialty";
var CONSTANT_TRAIT_BOX_ID_SPECIALTY = "favouredAbilitySpecialty";

//Backgrounds

var CONSTANT_TRAIT_BACKGROUND = "traitBackground";
var CONSTANT_TRAIT_DOT_ID_BACKGROUND = "traitDotBackground";
var CONSTANT_TRAIT_LABEL_ID_BACKGROUND = "traitLabelBackground";

//Willpower

var CONSTANT_TRAIT_WILLPOWER = "traitWillpower";
var CONSTANT_TRAIT_WILLPOWER_CURRENT = "traitWillpowerCurrent";
var CONSTANT_TRAIT_DOT_ID_WILLPOWER = "traitDotWillpower";
var CONSTANT_TRAIT_BOX_ID_WILLPOWER = "traitBoxWillpower";

//DVs

var CONSTANT_TRAIT_DODGE_DV = "traitDodgeDV";
var CONSTANT_TRAIT_LABEL_DODGE_DV = "Dodge:";
var CONSTANT_TRAIT_ID_DODGE_DV = "dodgeDV";

var CONSTANT_TRAIT_DODGE_MDV = "traitDodgeMDV";
var CONSTANT_TRAIT_LABEL_DODGE_MDV = "M Dodge:";
var CONSTANT_TRAIT_ID_DODGE_MDV = "dodgeMDV";

var CONSTANT_TRAIT_PARRY_MDV = "traitParryMDV";
var CONSTANT_TRAIT_LABEL_PARRY_MDV = "M Parry:";
var CONSTANT_TRAIT_ID_PARRY_MDV = "parryMDV";

//Virtues

var CONSTANT_TRAIT_COMPASSION = "traitCompassion";
var CONSTANT_TRAIT_COMPASSION_CURRENT = "traitCompassionCurrent";
var CONSTANT_TRAIT_DOT_ID_COMPASSION = "traitDotCompassion";
var CONSTANT_TRAIT_BOX_ID_COMPASSION = "traitBoxCompassion";

var CONSTANT_TRAIT_TEMPERANCE = "traitTemperance";
var CONSTANT_TRAIT_TEMPERANCE_CURRENT = "traitTemperanceCurrent";
var CONSTANT_TRAIT_DOT_ID_TEMPERANCE = "traitDotTemperance";
var CONSTANT_TRAIT_BOX_ID_TEMPERANCE = "traitBoxTemperance";

var CONSTANT_TRAIT_CONVICTION = "traitConviction";
var CONSTANT_TRAIT_CONVICTION_CURRENT = "traitConvictionCurrent";
var CONSTANT_TRAIT_DOT_ID_CONVICTION = "traitDotConviction";
var CONSTANT_TRAIT_BOX_ID_CONVICTION = "traitBoxConviction";

var CONSTANT_TRAIT_VALOUR = "traitValor";
var CONSTANT_TRAIT_VALOUR_CURRENT = "traitValorCurrent";
var CONSTANT_TRAIT_DOT_ID_VALOUR = "traitDotValor";
var CONSTANT_TRAIT_BOX_ID_VALOUR = "traitBoxValor";



//Soak

var CONSTANT_TRAIT_ARMOUR = "traitArmour";

var CONSTANT_SOAK_TYPE_NATURAL = "Natural";
var CONSTANT_SOAK_TYPE_ARMOUR = "Armour";
var CONSTANT_SOAK_ID_TYPE = "soakType";
var CONSTANT_SOAK_ID_BASHING = "soakBashing";
var CONSTANT_SOAK_ID_LETHAL = "soakLethal";
var CONSTANT_SOAK_ID_AGGRAVATED = "soakAggravated";
var CONSTANT_SOAK_ID_HARDNESS = "soakHardness";
var CONSTANT_SOAK_ID_MOBILITY = "soakMobility";
var CONSTANT_SOAK_ID_FATIGUE = "soakFatigue";


//Weapons

var CONSTANT_TRAIT_WEAPON = "traitWeapon";

var CONSTANT_WEAPON_ID_NAME = "weaponName";
var CONSTANT_WEAPON_ID_SPEED = "weaponSpeed";
var CONSTANT_WEAPON_ID_ACCURACY = "weaponAccuracy";
var CONSTANT_WEAPON_ID_DAMAGE = "weaponDamage";
var CONSTANT_WEAPON_ID_PARRY_DV = "weaponParryDV";
var CONSTANT_WEAPON_ID_RATE = "weaponRate";
var CONSTANT_WEAPON_ID_RANGE = "weaponRange";
var CONSTANT_WEAPON_ID_TAGS = "weaponTags";


//Equipment

var CONSTANT_TRAIT_EQUIPMENT = "traitEquipment";
var CONSTANT_TRAIT_LABEL_EQUIPMENT = "<strong>Other Equipment:</strong>";
var CONSTANT_TRAIT_ID_EQUIPMENT = "otherEquipment";


//Health

var CONSTANT_TRAIT_HEALTH = "traitHealth";

var CONSTANT_TRAIT_HEALTH_INCAPACITATED = -98;  //using an int just so weird type coercion stuff never trips me up; other levels are 0, -1 etc.
var CONSTANT_TRAIT_HEALTH_DYING = -99;
var CONSTANT_TRAIT_HEALTH_LEVEL_INVALID = -97; //This is the return value for "getFirstEmptyHealthLevel" if there isn't one

var CONSTANT_TRAIT_HEALTH_LEVEL_BOX_WRAPPER_ID_DYING = "healthLevelsDyingBoxes";
var CONSTANT_TRAIT_HEALTH_LEVEL_BOX_ID_DYING = "traitBoxHealthDying";

var CONSTANT_TRAIT_HEALTH_LEVEL_BOX_WRAPPER_ID_INCAPACITATED = "healthLevelsIncapacitatedBoxes";
var CONSTANT_TRAIT_HEALTH_LEVEL_BOX_ID_INCAPACITATED = "traitBoxHealthIncapacitated";

var CONSTANT_TRAIT_HEALTH_LEVEL_BOX_WRAPPER_ID_4 = "healthLevels4Boxes";
var CONSTANT_TRAIT_HEALTH_LEVEL_BOX_ID_4 = "traitBoxHealth4";

var CONSTANT_TRAIT_HEALTH_LEVEL_BOX_WRAPPER_ID_2 = "healthLevels2Boxes";
var CONSTANT_TRAIT_HEALTH_LEVEL_BOX_ID_2 = "traitBoxHealth2";

var CONSTANT_TRAIT_HEALTH_LEVEL_BOX_WRAPPER_ID_1 = "healthLevels1Boxes";
var CONSTANT_TRAIT_HEALTH_LEVEL_BOX_ID_1 = "traitBoxHealth1";

var CONSTANT_TRAIT_HEALTH_LEVEL_BOX_WRAPPER_ID_0 = "healthLevels0Boxes";
var CONSTANT_TRAIT_HEALTH_LEVEL_BOX_ID_0 = "traitBoxHealth0";


//Essence

var CONSTANT_TRAIT_ESSENCE = "traitEssence";
var CONSTANT_TRAIT_DOT_ID_ESSENCE = "traitDotEssence";

var CONSTANT_ESSENCE_POOL_ID_PREFIX = "essencePool";
var CONSTANT_ESSENCE_POOL_TYPE_PERSONAL = "Personal"
var CONSTANT_ESSENCE_POOL_TYPE_PERIPHERAL = "Peripheral"
var CONSTANT_ESSENCE_POOL_ID_TOTAL = "Total";
var CONSTANT_ESSENCE_POOL_ID_COMMITTED = "Committed";
var CONSTANT_ESSENCE_POOL_ID_CAP = "Cap";
var CONSTANT_ESSENCE_POOL_ID_AVAILABLE = "Available";
var CONSTANT_ESSENCE_POOL_ID_SUFFIX = "Number";

var CONSTANT_TRAIT_COMMITTED_PERSONAL = "traitCommittedPersonal";
var CONSTANT_TRAIT_COMMITTED_PERIPHERAL = "traitCommittedPeripheral";

var CONSTANT_TRAIT_PERSONAL_CURRENT = "traitPersonalCurrent";
var CONSTANT_TRAIT_PERIPHERAL_CURRENT = "traitPeripheralCurrent";


//Limit

var CONSTANT_TRAIT_LIMIT = "traitLimit";

//Virtue Flaw

var CONSTANT_TRAIT_VIRTUE_FLAW = "traitVirtueFlaw";
var CONSTANT_TRAIT_VIRTUE_FLAW_ID = "virtueFlaw";


//Charms

var CONSTANT_TRAIT_CHARMS = "traitCharms";

var CONSTANT_CHARM_ID_PREFIX = "charm";
var CONSTANT_CHARM_LABEL_ID = "Label";
var CONSTANT_CHARM_COST_ID = "Cost";


//Intimacies

var CONSTANT_TRAIT_INTIMACIES = "traitIntimacies";
var CONSTANT_INTIMACIES_ID = "intimacy";


//Hidden Traits

var CONSTANT_TRAIT_HEROIC = "traitHeroic";
var CONSTANT_TRAIT_EXALTED = "traitExalted";   //At the moment this means "round up or down for DVs?"/"suffers unskilled penalties?"
var CONSTANT_TRAIT_EXTRA = "traitExtra";

var CONSTANT_TRAIT_BUFFS = "traitBuffs";

var CONSTANT_TRAIT_COMBAT_AI = "traitCombatAI";


//####################################### TRAIT VALUE CONSTANTS ##################################################

var TRAIT_VALUE_TYPE_HEROIC_MORTAL = "Heroic Mortal";
var TRAIT_VALUE_TYPE_SOLAR_EXALTED = "Solar Exalted";
var TRAIT_VALUE_TYPE_DRAGON_BLOODED = "Dragon Blooded";

var TRAIT_VALUE_CASTE_NA = "N/A";
var TRAIT_VALUE_CASTE_DAWN = "Dawn";

var TRAIT_VALUE_ASPECT_AIR = "Air Aspect";
var TRAIT_VALUE_ASPECT_EARTH = "Earth Aspect";
var TRAIT_VALUE_ASPECT_FIRE = "Fire Aspect";
var TRAIT_VALUE_ASPECT_WATER = "Water Aspect";
var TRAIT_VALUE_ASPECT_WOOD = "Wood Aspect";

var CONSTANT_TRAIT_VALUE_FAVOURED = "<p><strong>Favoured/Caste Ability:</strong> Improvement costs and training times associated with this Ability are reduced.</p>";
var CONSTANT_TRAIT_VALUE_UNSKILLED = "<p>As they have no dots, this character suffers a -2 internal penalty when using this Ability.</p>";
var CONSTANT_TRAIT_VALUE_ABILITY_GROUP = "<p>Ability groups are only important to the Exalted, and only then when improving the Abilties.  They do not impact play and may be safely ignored by Heroic Mortals.</p>";


var CONSTANT_TRAIT_VALUE_FOOLHARDY_CONTEMPT = "Foolhardy Contempt";
var CONSTANT_TRAIT_DESCRIPTION_FOOLHARDY_CONTEMPT = "<p>During Limit Break, you know no fear.  You throw yourself into danger gleefully, and cannot countenance the possibility of defeat.  You may not retreat under any circumstances.</p><p><strong>Virtue:</strong> Valor</p><p><strong>Partial Control:</strong> You're not obliged to rush into combat, and may retreat if tactically sensible, but you are still utterly fearless and take no account of personal risk while planning.</p><p><strong>Duration:</strong> One day</p><p><strong>Limit Break Condition:</strong> Fighting against losing odds, being challenged to single combat, having an opportunity to prove her bravery.</p>";

//####################################### TRAIT: LANGUAGUES ##################################################

var CONSTANT_TRAIT_LANGUAGE_NATIVE = "traitLanguageNative";
var CONSTANT_TRAIT_LANGUAGES = "traitLanguagues";

var CONSTANT_LANGUAGE_SKYTONGUE = "Skytongue";
var CONSTANT_LANGUAGE_DESCRIPTION_SKYTONGUE = "The family of languages spoken in the civilised lands of the North.";

var CONSTANT_LANGUAGE_RIVERSPEAK = "Riverspeak";
var CONSTANT_LANGUAGE_DESCRIPTION_RIVERSPEAK = "The language of the Scavenger Lands.  The official trade tongue of the Guild, and unofficially used almost everywhere outside the Realm.";

var CONSTANT_LANGUAGE_HIGH_REALM = "High Realm";
var CONSTANT_LANGUAGE_DESCRIPTION_HIGH_REALM = "The language of the Dragon Blooded aristocracy of the Realm and their mortal servants.";


//####################################### TRAIT: BACKGROUNDS ##################################################

var CONSTANT_BACKGROUND_KEY_ALLIES = "backgroundAllies";
var CONSTANT_BACKGROUND_LABEL_ALLIES = "Allies";
var CONSTANT_BACKGROUND_DESCRIPTION_ALLIES = "<p>Allies are trusted friends who are powerful enough to meaningfully aid the character (and expect similar aid in return).</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_ALLIES_1 = "<p>A character with Allies 1 has one ally roughly as powerful as a starting character of their type, or possibly a greater number of lesser allies.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_ALLIES_2 = "<p>A character with Allies 2 has two allies roughly as powerful as a starting character of their type.  Alternately they have more lesser allies, or a single more powerful friend.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_ALLIES_3 = "<p>A character with Allies 3 has three allies roughly as powerful as a starting character of their type.  Alternately they have more lesser allies, or one or two more powerful friends.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_ALLIES_4 = "<p>A character with Allies 4 has four allies roughly as powerful as a starting character of their type.  Alternately they have more lesser allies, or fewer greater ones.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_ALLIES_5 = "<p>A character with Allies 5 has five allies roughly as powerful as a starting character of their type.  Alternately they have more lesser allies, or fewer greater ones.</p>";

var CONSTANT_BACKGROUND_KEY_INFLUENCE = "backgroundInfluence";
var CONSTANT_BACKGROUND_LABEL_INFLUENCE = "Influence";
var CONSTANT_BACKGROUND_DESCRIPTION_INFLUENCE = "<p>Influence represents political and social power as a result of fame or status.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_INFLUENCE_1 = "<p>A character with Influence 1 has sway in a town or district.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_INFLUENCE_2 = "<p>A character with Influence 2 has clout in a city-state or satrapy.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_INFLUENCE_3 = "<p>A character with Influence 3 can throw their weight around in the local community of nations.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_INFLUENCE_4 = "<p>A character with Influence 4 is a player across a quarter of Creation.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_INFLUENCE_5 = "<p>A character with Influence 5 is active on the world stage, possibly as the ruler of a nation.</p>";

var CONSTANT_BACKGROUND_KEY_RESOURCES = "backgroundResources";
var CONSTANT_BACKGROUND_LABEL_RESOURCES = "Resources";
var CONSTANT_BACKGROUND_DESCRIPTION_RESOURCES = "<p>Resources represents a character's wealth and income.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_RESOURCES_1 = "<p>A character with Resources 1 is poor but not destitute.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_RESOURCES_2 = "<p>A character with Resources 2 is of average wealth, and can support a comfortable lifestyle.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_RESOURCES_3 = "<p>A character with Resources 3 is prosperous, lives in a good location, and can afford quality goods.  They likely have domestic servants.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_RESOURCES_4 = "<p>A character with Resources 4 is exceptionally wealthy, owning multiple properties and able to support a lavish lifestyle.  They likely have many employees, including guards.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_RESOURCES_5 = "<p>A character with Resources 5 is fantastically rich, able to procure anything that can be had for money.</p>";

var CONSTANT_BACKGROUND_KEY_CONTACTS = "backgroundContacts";
var CONSTANT_BACKGROUND_LABEL_CONTACTS = "Contacts";
var CONSTANT_BACKGROUND_DESCRIPTION_CONTACTS = "<p>Contacts represents both individuals known to the character who are in a position to aid them in return for commensurate favours, and their general level of connectedness in society.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_CONTACTS_1 = "<p>A character with Contacts 1 has one major contact and one bonus die for finding minor ones.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_CONTACTS_2 = "<p>A character with Contacts 2 has two major contacts and two bonus dice for finding minor ones.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_CONTACTS_3 = "<p>A character with Contacts 3 has three major contacts and three bonus dice for finding minor ones.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_CONTACTS_4 = "<p>A character with Contacts 4 has four major contacts and four bonus dice for finding minor ones.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_CONTACTS_5 = "<p>A character with Contacts 5 has five major contacts and five bonus dice for finding minor ones.</p>";

var CONSTANT_BACKGROUND_KEY_ARTIFACT = "backgroundArtifact";
var CONSTANT_BACKGROUND_LABEL_ARTIFACT = "Artifact";
var CONSTANT_BACKGROUND_DESCRIPTION_ARTIFACT = "<p>Artifact represents magical items in the character's possession, typically those made of the Five Magical Materials.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_ARTIFACT_1 = "<p>A character with Artifact 1 has a single one dot artifact.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_ARTIFACT_2 = "<p>A character with Artifact 2 has artifacts totalling 2 dots in value.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_ARTIFACT_3 = "<p>A character with Artifact 3 has artifacts totalling 3 dots in value.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_ARTIFACT_4 = "<p>A character with Artifact 4 has artifacts totalling 4 dots in value.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_ARTIFACT_5 = "<p>A character with Artifact 5 has artifacts totalling 5 dots in value.</p>";

var CONSTANT_BACKGROUND_KEY_CULT = "backgroundCult";
var CONSTANT_BACKGROUND_LABEL_CULT = "Cult";
var CONSTANT_BACKGROUND_DESCRIPTION_CULT = "<p>Cult represents worshippers who regularly pray to the character.  This prayer grants power in the form of Willpower and motes of essence.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_CULT_1 = "<p>A character with Cult 1 has a small following of devoted worshippers.  They gain a Willpower point each morning when they awaken.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_CULT_2 = "<p>A character with Cult 2 is worshipped by a following equivalent to a single large community.  They gain a Willpower point each morning when they awaken, and 2 motes of essence each hour.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_CULT_3 = "<p>A character with Cult 3 is worshipped by a following equivalent to the population of a city.  They may gain a Willpower point once a day as a reflexive action, and gain 3 motes of essence each hour.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_CULT_4 = "<p>A character with Cult 4 is worshipped by a following equivalent to a nation.  They may gain a Willpower point every 12 hours as a reflexive action, and gain 4 motes of essence each hour.</p>";
var CONSTANT_BACKGROUND_DOT_DESCRIPTION_CULT_5 = "<p>A character with Cult 5 has a Creation-wide following.  They may gain a Willpower point every 6 hours as a reflexive action, and gain 6 motes of essence each hour.</p>";



var CONSTANT_BACKGROUND_KEY_BREEDING = "backgroundBreeding";


//####################################### TRAIT: EQUIPMENT ##################################################

var CONSTANT_SOAK_DESCRIPTION_BASHING = "<p>Bashing soak protects against Bashing damage (usually blunt trauma).  Natural bashing soak is equal to the character's Stamina.</p>";
var CONSTANT_SOAK_DESCRIPTION_LETHAL = "<p>Lethal soak protects against Lethal damage (usually cutting or piercing damage).  Natural lethal soak is 0 for mortals and most creatures.  Exalted and similarly mighty beings have a natural lethal soak of half their Stamina, rounded down.</p>";
var CONSTANT_SOAK_DESCRIPTION_AGGRAVATED = "<p>Aggravated soak protects against Aggravated damage (usually inflicted by supernatural sources).  Natural aggravated soak is 0.  Lethal soak from armour does count as aggravated soak.</p>";
var CONSTANT_SOAK_DESCRIPTION_HARDNESS = "<p>Hardness is a threshold a raw damage pool (before soak) must overcome; if not, the attack does no damage (not even its usual minimum damage).  It has no effect on damage pools that defeat its threshold, which are then soaked normally.</p><p>Hardness is generally granted only by artifact armour and charms.</p>";
var CONSTANT_SOAK_DESCRIPTION_MOBILITY = "<p>The mobility penalty represents the difficulty of moving around in the armour.  It is applied to pools requiring full-body movement, such as the pool from which Dodge DV is derived and most Athletics rolls.</p>";
var CONSTANT_SOAK_DESCRIPTION_FATIGUE = "<p>The fatigue trait represents how tiring it is to wear the armour.  It is the difficulty of a Stamina + Resistance roll required periodically while wearing the armour (every 30 minutes in the worst conditions, four hours in normal circumstances).  Failure applies a cumulative -1 internal penalty to all actions from exhaustion.";


var CONSTANT_WEAPON_DESCRIPTION_SPEED = "<p>Speed is the number of ticks a character will have to wait before acting again after attacking with the weapon; that is, low Speed is faster.</p>";
var CONSTANT_WEAPON_DESCRIPTION_ACCURACY = "<p>Accuracy is the dice pool used to attack with the weapon.  It is derived from Dexterity + the relevant Ability + the weapon's Accuracy bonus.</p>";
var CONSTANT_WEAPON_DESCRIPTION_DAMAGE = "<p>The base damage of an attack is the character's Strength + the weapon's Damage bonus, before any bonus damage from successes, charms etc.  B indicates the damage is bashing, L lethal and A aggravated.</p>";
var CONSTANT_WEAPON_DESCRIPTION_PARRY_DV = "<p>Parry DV is a defence value representing the character's ability to avoid attacks by deflecting them with a weapon.  It is calculated as half (Dexterity + relevant Ability + the weapon's defence bonus).  Exalts and similarly mighty beings round up, everyone else rounds down.</p>";
var CONSTANT_WEAPON_DESCRIPTION_RATE = "<p>Rate is the number of times a weapon may be used to attack per flurry.</p>";
var CONSTANT_WEAPON_DESCRIPTION_RANGE = "<p>The Range trait indicates how far the weapon can be fired/thrown without incurring penalties.  Firing at up to twice this range incurs a -1 external penalty, up to triple the range a -3 external penalty.  Beyond that is impossible without magical assistance.</p>";
var CONSTANT_WEAPON_DESCRIPTION_TAGS = "<p>Tags indicate miscellaneous special properties of a weapon, such as requiring two hands to use, inflicting piercing damage etc.</p><p><strong>Tag Key:</strong></p><ul><li><strong>O</strong> - Overwhelming.  Indicated number is the minimum damage of the weapon.  Soak cannot reduce damage below this many dice.</li></ul>";

//####################################### SPECIALTY CONSTANTS ##################################################

var CONSTANT_SPECIALTY_NONE = "specialtyNone";

var CONSTANT_SPECIALTY_MELEE_SWORDS = "specialtyMeleeSwords";
var CONSTANT_SPECIALTY_LABEL_MELEE_SWORDS = "Swords (Melee)";

var CONSTANT_SPECIALTY_INVESTIGATION_PHYSICAL_CLUES = "specialtyInvestigationPhysicalClues";
var CONSTANT_SPECIALTY_LABEL_INVESTIGATION_PHYSICAL_CLUES = "Physical Clues (Investigation)";

var CONSTANT_SPECIALTY_INVESTIGATION_INTERROGATION = "specialtyInvestigationInterrogation";
var CONSTANT_SPECIALTY_LABEL_INVESTIGATION_INTERROGATION = "Interrogation (Investigation)";

var CONSTANT_SPECIALTY_ATHLETICS_LEAPING = "specialtyAthleticsLeaping";
var CONSTANT_SPECIALTY_LABEL_ATHLETICS_LEAPING = "Leaping (Athletics)";

var CONSTANT_SPECIALTY_MARTIAL_ARTS_FISTS = "specialtyMartialArtsFists";
var CONSTANT_SPECIALTY_LABEL_MARTIAL_ARTS_FISTS = "Fists (Martial Arts)";

var CONSTANT_SPECIALTY_MARTIAL_ARTS_CHAKRAM = "specialtyMartialArtsChakram";
var CONSTANT_SPECIALTY_LABEL_MARTIAL_ARTS_CHAKRAM = "Chakram (Martial Arts)";

var CONSTANT_SPECIALTY_PRESENCE_SEDUCTION = "specialtyPresenceSeduction";
var CONSTANT_SPECIALTY_LABEL_PRESENCE_SEDUCTION = "Seduction (Presence)";

var CONSTANT_SPECIALTY_STEALTH_AMBUSH = "specialtyStealthAmbush";
var CONSTANT_SPECIALTY_LABEL_STEALTH_AMBUSH = "Ambush (Stealth)";


//####################################### BUFF CONSTANTS ##################################################

var CONSTANT_BUFF_ACTION_PENALTY = "buffActionPenalty";

var CONSTANT_BUFF_MOBILITY_PENALTY = "buffMobilityPenalty";

var CONSTANT_BUFF_ONSLAUGHT_PENALTY = "buffOnslaughtPenalty";

var CONSTANT_BUFF_SHIELD_BONUS_MELEE = "buffShieldBonusMelee";  //Deprecated
var CONSTANT_BUFF_SHIELD_BONUS_RANGED = "buffShieldBonusRanged"; //Deprecated

var CONSTANT_BUFF_DICE_BONUS_ATTACK_CHARM = "buffDiceBonusAttackCharm";

var CONSTANT_BUFF_DV_BONUS_ANIMA = "buffDVBonusAnima";

var CONSTANT_BUFF_DODGE_DV_BONUS_CHARM = "buffDodgeDVBonusCharm";

var CONSTANT_BUFF_EXTERNAL_PENALTY_TO_ATTACKERS = "buffExternalPenaltyToAttackers";

var CONSTANT_BUFF_DEFENCE_BONUS = "buffDefenceBonus";

var CONSTANT_BUFF_DV_PENALTY_REDUCTION_ATTACK = "buffDVPenaltyReductionAttack";  //ie reducing the action penalty caused by attacking (PoCB)
var CONSTANT_BUFF_DV_PENALTY_REDUCTION_DEFENCE = "buffDVPenaltyReductionDefence";  //ie reducing all penalties to DV at time of defence (Bulwark Stance)

var CONSTANT_BUFF_PROTECTION_OF_CELESTIAL_BLISS = "buffProtectionOfCelestialBliss"; //thought about generalising to "Hanging Perfect Defence", but the cancel rules make the charm unique.

var CONSTANT_BUFF_AIM_BONUS = "buffAimBonus";

var CONSTANT_BUFF_MOVEMENT_MULTIPLIER = "buffMovementMultiplier";

var CONSTANT_BUFF_JUMP_MULTIPLIER = "buffJumpMultiplier";
var CONSTANT_BUFF_JUMP_REFLEXIVE_ON_ACTION = "buffJumpReflexiveOnAction";

var CONSTANT_BUFF_PERFECT_BALANCE = "buffPerfectBalance";

var CONSTANT_BUFF_REESTABLISH_SURPRISE_BONUS_SUCCESSES = "buffReestablishSurpriseBonusSuccesses";

var CONSTANT_BUFF_SILENCE = "buffSilence";

var CONSTANT_BUFF_AIR_DRAGON_STYLE = "buffAirDragonStyle";

var CONSTANT_NO_ACTIVE_BUFFS = "<p>No active effects.</p>";

var BUFF_DURATION_INSTANT = "Instant";
var BUFF_DURATION_NEXT_ACTION = "Until Next Action";
var BUFF_DURATION_SCENE = "One Scene";
var BUFF_DURATION_INDEFINITE = "Indefinite";
var BUFF_DURATION_PERMANENT = "Permanent";
var BUFF_DURATION_VARIABLE = "Variable";


//####################################### ANIMA CONSTANTS ##################################################

var CONSTANT_CHARACTER_CURRENT_ANIMA = "characterCurrentAnima";

var CONSTANT_CHARACTER_PERIPHERAL_MOTES_THIS_SCENE = "characterPeripheralMotesThisScene";

var ANIMA_LEVEL_NONE = "animaLevelNone";
var ANIMA_LEVEL_1_3 = "animaLevel1_3";
var ANIMA_LEVEL_4_7 = "animaLevel4_7";
var ANIMA_LEVEL_8_10 = "animaLevel8_10";
var ANIMA_LEVEL_11_15 = "animaLevel11_15";
var ANIMA_LEVEL_16 = "animaLevel16";

var ANIMA_LABEL_NONE = "None";

var ANIMA_LABEL_SOLAR_1_3 = "Glittering Caste Mark (1-3)";
var ANIMA_LABEL_SOLAR_4_7 = "Burning Caste Mark (4-7)";
var ANIMA_LABEL_SOLAR_8_10 = "Bright Aura (8-10)";
var ANIMA_LABEL_SOLAR_11_15 = "Bonfire (11-15)";
var ANIMA_LABEL_SOLAR_16 = "Totemic (16+)";

var ANIMA_LABEL_DRAGON_BLOODED_1_3 = "Subtle (1-3)";
var ANIMA_LABEL_DRAGON_BLOODED_4_7 = "Obvious (4-7)";
var ANIMA_LABEL_DRAGON_BLOODED_8_10 = "Damaging (8-10)";
var ANIMA_LABEL_DRAGON_BLOODED_11_15 = "Destructive (11-15)";
var ANIMA_LABEL_DRAGON_BLOODED_16 = "Elemental Vortex (16+)";


//####################################### COMBAT CONSTANTS ##################################################

var DAMAGE_TYPE_LETHAL = "L";
var DAMAGE_TYPE_BASHING = "B";
var DAMAGE_TYPE_AGGRAVATED = "A";
var DAMAGE_TYPE_NONE = "N";

var CONSTANT_ATTACK_TYPE_RANGED = "attackTypeRanged";
var CONSTANT_ATTACK_TYPE_MELEE = "attackTypeMelee";

var DV_PARRY = "dvParry";
var DV_DODGE = "dvDodge";
var DV_BEST = "dvBest";

//Some dilution of semantics has occured here - some of these actions are first class actions, others are just ways to access the right stunts or segments.

var COMBAT_ACTION_FLURRY = "combatActionFlurry";

var COMBAT_ACTION_AIM = "combatActionAim";
var COMBAT_ACTION_GUARD = "combatActionGuard";

var COMBAT_ACTION_ATTACK = "combatActionAttack";
var COMBAT_ACTION_ATTACK_HIT = "combatActionAttackHit";
var COMBAT_ACTION_ATTACK_MISS = "combatActionAttackMiss";

var COMBAT_ACTION_DAMAGE_SUCCESS = "combatActionDamageSuccess";
var COMBAT_ACTION_DAMAGE_FAIL = "combatActionDamageFail";

var COMBAT_ACTION_SIMPLE_CHARM = "combatActionSimpleCharm";

var COMBAT_ACTION_MISCELLANEOUS = "combatActionMiscellaneous";
var COMBAT_ACTION_REESTABLISH_SURPRISE = "combatActionReestablishSurprise";
var COMBAT_ACTION_REESTABLISH_SURPRISE_SUCCESS = "combatActionReestablishSuccess";
var COMBAT_ACTION_REESTABLISH_SURPRISE_FAIL = "combatActionReestablishSurpriseFail";

var COMBAT_ACTION_PC_ACTION_CHOICE = "combatActionPCActionChoice";

var COMBAT_ACTION_PROMPT_DV_CHOICE = "combatActionPromptDVChoice";
var COMBAT_ACTION_PARRY = "combatActionParry";
var COMBAT_ACTION_DODGE = "combatActionDodge";

var COMBAT_ACTION_INACTIVE = "combatActionInactive";
var COMBAT_ACTION_INCAPACITATED = "combatActionIncapacitated";
var COMBAT_ACTION_DYING = "combatActionDying";
var COMBAT_ACTION_DEAD = "combatActionDead";

var COMBAT_ACTION_PC_VICTORY = "combatActionPCVictory";
var COMBAT_ACTION_PC_DEFEAT = "combatActionPCDefeat";

var COMBAT_ACTION_ATTACK_ACCEPTED = "combatActionAttackAccepted";  //These two are social-only
var COMBAT_ACTION_ATTACK_REFUSED = "combatActionAttackRefused";


var COMBAT_RESULT_PC_VICTORY = "combatResultPCVictory";
var COMBAT_RESULT_PC_DEFEAT = "combatResultPCDefeat";
var COMBAT_RESULT_NO_RESULT = "combatResultNoResult";


var SPEED_GUARD = 3;
var SPEED_AIM = 3;
var SPEED_INACTIVE = 5;
var SPEED_MISCELLANEOUS = 5;

var CONSTANT_CHARACTER_CURRENT_ACTION = "characterCurrentAction";
var CONSTANT_CHARACTER_CURRENT_FLURRY = "characterCurrentFlurry";

var CONSTANT_CHARACTER_CURRENT_STUNT = "characterCurrentStunt";
var CONSTANT_CHARACTER_BEST_STUNT = "characterBestStunt";

var CONSTANT_NO_STUNT = "noStunt";
var CONSTANT_FLURRY_STUNT = "flurryStunt";

var CONSTANT_MAX_STUNTS = 3;


var CONSTANT_WP_AUTO_SUCCESS = "wpAutoSuccess";
var CONSTANT_WP_VIRTUE_CHANNEL = "wpVirtueChannel";
var CONSTANT_WP_NONE = "wpNone";

var CONSTANT_PIERCING = 4;


//####################################### EQUIPMENT CONSTANTS ##################################################

var CONSTANT_WEAPON_TYPE_SWORD = "weaponTypeSword";
var CONSTANT_WEAPON_TYPE_CHAKRAM = "weaponTypeChakram";
var CONSTANT_WEAPON_TYPE_SHIELD = "weaponTypeShield";
var CONSTANT_WEAPON_TYPE_UNARMED = "weaponTypeUnarmed";

//####################################### FUNCTION KEY, COMBAT KEY AND SEGMENT KEY CONSTANTS - MUST BE KEPT UNIQUE AT ALL COSTS ##################################################

//Note most of these are in ascending order, but that's not necessary, they just need to be unique.

var SEGMENT_KEY_SAKUYA_0 = 1000000;
var SEGMENT_KEY_SAKUYA_1 = 1000001;
var SEGMENT_KEY_SAKUYA_2 = 1000002;
var SEGMENT_KEY_SAKUYA_3 = 1000003;
var SEGMENT_KEY_SAKUYA_4 = 1000004;
var SEGMENT_KEY_SAKUYA_5 = 1000005;
var SEGMENT_KEY_SAKUYA_6 = 1000006;
var SEGMENT_KEY_SAKUYA_7 = 1000007;
var SEGMENT_KEY_SAKUYA_8 = 1000008;
var SEGMENT_KEY_SAKUYA_9 = 1000009;
var SEGMENT_KEY_SAKUYA_10 = 1000010;
var SEGMENT_KEY_SAKUYA_11 = 1000011;
var SEGMENT_KEY_SAKUYA_12 = 1000012;
var SEGMENT_KEY_SAKUYA_13 = 1000013;
var SEGMENT_KEY_SAKUYA_14 = 1000014;
var SEGMENT_KEY_SAKUYA_15 = 1000015;
var SEGMENT_KEY_SAKUYA_16 = 1000016;
var SEGMENT_KEY_SAKUYA_17 = 1000017;
var SEGMENT_KEY_SAKUYA_18 = 1000018;
var SEGMENT_KEY_SAKUYA_19 = 1000019;
var SEGMENT_KEY_SAKUYA_20 = 1000020;
var SEGMENT_KEY_SAKUYA_21 = 1000021;
var SEGMENT_KEY_SAKUYA_22 = 1000022;
var SEGMENT_KEY_SAKUYA_23 = 1000023;
var SEGMENT_KEY_SAKUYA_24 = 1000024;
var SEGMENT_KEY_SAKUYA_25 = 1000025;
var SEGMENT_KEY_SAKUYA_26 = 1000026;
var SEGMENT_KEY_SAKUYA_27 = 1000027;
var SEGMENT_KEY_SAKUYA_28 = 1000028;
var SEGMENT_KEY_SAKUYA_29 = 1000029;
var SEGMENT_KEY_SAKUYA_30 = 1000030;
var SEGMENT_KEY_SAKUYA_31 = 1000031;
var SEGMENT_KEY_SAKUYA_32 = 1000032;
var SEGMENT_KEY_SAKUYA_33 = 1000033;
var SEGMENT_KEY_SAKUYA_34 = 1000034;
var SEGMENT_KEY_SAKUYA_35 = 1000035;
var SEGMENT_KEY_SAKUYA_36 = 1000036;
var SEGMENT_KEY_SAKUYA_37 = 1000037;
var SEGMENT_KEY_SAKUYA_38 = 1000038;
var SEGMENT_KEY_SAKUYA_39 = 1000039;
var SEGMENT_KEY_SAKUYA_40 = 1000040;
var SEGMENT_KEY_SAKUYA_41 = 1000041;
var SEGMENT_KEY_SAKUYA_42 = 1000042;
var SEGMENT_KEY_SAKUYA_43 = 1000043;
var SEGMENT_KEY_SAKUYA_44 = 1000044;
var SEGMENT_KEY_SAKUYA_45 = 1000045;
var SEGMENT_KEY_SAKUYA_46 = 1000046;
var SEGMENT_KEY_SAKUYA_47 = 1000047;
var SEGMENT_KEY_SAKUYA_48 = 1000048;
var SEGMENT_KEY_SAKUYA_49 = 1000049;
var SEGMENT_KEY_SAKUYA_50 = 1000050;
var SEGMENT_KEY_SAKUYA_51 = 1000051;
var SEGMENT_KEY_SAKUYA_52 = 1000052;
var SEGMENT_KEY_SAKUYA_53 = 1000053;
var SEGMENT_KEY_SAKUYA_54 = 1000054;
var SEGMENT_KEY_SAKUYA_55 = 1000055;
var SEGMENT_KEY_SAKUYA_56 = 1000056;
var SEGMENT_KEY_SAKUYA_57 = 1000057;
var SEGMENT_KEY_SAKUYA_58 = 1000058;
var SEGMENT_KEY_SAKUYA_59 = 1000059;
var SEGMENT_KEY_SAKUYA_60 = 1000060;
var SEGMENT_KEY_SAKUYA_61 = 1000061;
var SEGMENT_KEY_SAKUYA_62 = 1000062;
var SEGMENT_KEY_SAKUYA_63 = 1000063;
var SEGMENT_KEY_SAKUYA_64 = 1000064;
var SEGMENT_KEY_SAKUYA_65 = 1000065;
var SEGMENT_KEY_SAKUYA_66 = 1000066;
var SEGMENT_KEY_SAKUYA_67 = 1000067;
var SEGMENT_KEY_SAKUYA_68 = 1000068;
var SEGMENT_KEY_SAKUYA_69 = 1000069;
var SEGMENT_KEY_SAKUYA_70 = 1000070;
var SEGMENT_KEY_SAKUYA_71 = 1000071;
var SEGMENT_KEY_SAKUYA_72 = 1000072;
var SEGMENT_KEY_SAKUYA_73 = 1000073;
var SEGMENT_KEY_SAKUYA_74 = 1000074;
var SEGMENT_KEY_SAKUYA_75 = 1000075;
var SEGMENT_KEY_SAKUYA_76 = 1000076;
var SEGMENT_KEY_SAKUYA_77 = 1000077;
var SEGMENT_KEY_SAKUYA_78 = 1000078;
var SEGMENT_KEY_SAKUYA_79 = 1000079;
var SEGMENT_KEY_SAKUYA_80 = 1000080;
var SEGMENT_KEY_SAKUYA_81 = 1000081;
var SEGMENT_KEY_SAKUYA_82 = 1000082;
var SEGMENT_KEY_SAKUYA_83 = 1000083;
var SEGMENT_KEY_SAKUYA_84 = 1000084;
var SEGMENT_KEY_SAKUYA_85 = 1000085;
var SEGMENT_KEY_SAKUYA_86 = 1000086;
var SEGMENT_KEY_SAKUYA_87 = 1000087;
var SEGMENT_KEY_SAKUYA_88 = 1000088;
var SEGMENT_KEY_SAKUYA_89 = 1000089;
var SEGMENT_KEY_SAKUYA_90 = 1000090;
var SEGMENT_KEY_SAKUYA_91 = 1000091;
var SEGMENT_KEY_SAKUYA_92 = 1000092;
var SEGMENT_KEY_SAKUYA_93 = 1000093;
var SEGMENT_KEY_SAKUYA_94 = 1000094;
var SEGMENT_KEY_SAKUYA_95 = 1000095;
var SEGMENT_KEY_SAKUYA_96 = 1000096;
var SEGMENT_KEY_SAKUYA_97 = 1000097;
var SEGMENT_KEY_SAKUYA_98 = 1000098;
var SEGMENT_KEY_SAKUYA_99 = 1000099;

var SEGMENT_KEY_SAKUYA_INTRO_0 = 1000100;
var SEGMENT_KEY_SAKUYA_INTRO_1 = 1000101;
var SEGMENT_KEY_SAKUYA_INTRO_2 = 1000102;
var SEGMENT_KEY_SAKUYA_INTRO_3 = 1000103;
var SEGMENT_KEY_SAKUYA_INTRO_4 = 1000104;
var SEGMENT_KEY_SAKUYA_INTRO_5 = 1000105;
var SEGMENT_KEY_SAKUYA_INTRO_6 = 1000106;
var SEGMENT_KEY_SAKUYA_INTRO_7 = 1000107;
var SEGMENT_KEY_SAKUYA_INTRO_8 = 1000108;
var SEGMENT_KEY_SAKUYA_INTRO_9 = 1000109;

//Random extra segments

var SEGMENT_KEY_SAKUYA_26A = 1000110;
var SEGMENT_KEY_SAKUYA_55A = 1000111;


var FUNCTION_KEY_SAKUYA_SEGMENT_0_FUNCTION_0 = 1000000;
var FUNCTION_KEY_SAKUYA_SEGMENT_1_FUNCTION_0 = 1000001;
var FUNCTION_KEY_SAKUYA_SEGMENT_2_FUNCTION_0 = 1000002;
var FUNCTION_KEY_SAKUYA_SEGMENT_5_FUNCTION_0 = 1000003;
var FUNCTION_KEY_SAKUYA_SEGMENT_5_FUNCTION_1 = 1000004;
var FUNCTION_KEY_SAKUYA_SEGMENT_5_FUNCTION_2 = 1000005;
var FUNCTION_KEY_SAKUYA_SEGMENT_6_FUNCTION_0 = 1000006;
var FUNCTION_KEY_SAKUYA_SEGMENT_9_FUNCTION_0 = 1000007;
var FUNCTION_KEY_SAKUYA_SEGMENT_10_FUNCTION_0 = 1000008;
var FUNCTION_KEY_SAKUYA_SEGMENT_10_FUNCTION_1 = 1000009;
var FUNCTION_KEY_SAKUYA_SEGMENT_10_FUNCTION_2 = 10000010;
var FUNCTION_KEY_SAKUYA_SEGMENT_10_FUNCTION_3 = 10000011;
var FUNCTION_KEY_SAKUYA_SEGMENT_11_FUNCTION_0 = 10000012;
var FUNCTION_KEY_SAKUYA_SEGMENT_12_FUNCTION_0 = 10000013;
var FUNCTION_KEY_SAKUYA_SEGMENT_13_FUNCTION_0 = 10000014;
var FUNCTION_KEY_SAKUYA_SEGMENT_14_FUNCTION_0 = 10000015;
var FUNCTION_KEY_SAKUYA_SEGMENT_15_FUNCTION_0 = 10000016;
var FUNCTION_KEY_SAKUYA_SEGMENT_16_FUNCTION_0 = 10000017;
var FUNCTION_KEY_SAKUYA_SEGMENT_17_FUNCTION_0 = 10000018;
var FUNCTION_KEY_SAKUYA_SEGMENT_18_FUNCTION_0 = 10000019;
var FUNCTION_KEY_SAKUYA_SEGMENT_19_FUNCTION_0 = 10000020;
var FUNCTION_KEY_SAKUYA_SEGMENT_19_FUNCTION_1 = 10000021;
var FUNCTION_KEY_SAKUYA_SEGMENT_19_FUNCTION_2 = 10000022;
var FUNCTION_KEY_SAKUYA_SEGMENT_20_FUNCTION_0 = 10000022;
var FUNCTION_KEY_SAKUYA_SEGMENT_21_FUNCTION_0 = 10000023;
var FUNCTION_KEY_SAKUYA_SEGMENT_21_FUNCTION_1 = 10000024;
var FUNCTION_KEY_SAKUYA_SEGMENT_21_FUNCTION_2 = 10000025;
var FUNCTION_KEY_SAKUYA_SEGMENT_21_FUNCTION_3 = 10000026;
var FUNCTION_KEY_SAKUYA_SEGMENT_22_FUNCTION_0 = 10000027;
var FUNCTION_KEY_SAKUYA_SEGMENT_25_FUNCTION_0 = 10000028;
var FUNCTION_KEY_SAKUYA_SEGMENT_26_FUNCTION_0 = 10000029;
var FUNCTION_KEY_SAKUYA_SEGMENT_27_FUNCTION_0 = 10000030;
var FUNCTION_KEY_SAKUYA_SEGMENT_28_FUNCTION_0 = 10000031;
var FUNCTION_KEY_SAKUYA_SEGMENT_29_FUNCTION_0 = 10000032;
var FUNCTION_KEY_SAKUYA_SEGMENT_29_FUNCTION_1 = 10000033;
var FUNCTION_KEY_SAKUYA_SEGMENT_29_FUNCTION_2 = 10000034;
var FUNCTION_KEY_SAKUYA_SEGMENT_30_FUNCTION_0 = 10000035;
var FUNCTION_KEY_SAKUYA_SEGMENT_31_FUNCTION_0 = 10000036;
var FUNCTION_KEY_SAKUYA_SEGMENT_31_FUNCTION_1 = 10000037;
var FUNCTION_KEY_SAKUYA_SEGMENT_31_FUNCTION_2 = 10000038;
var FUNCTION_KEY_SAKUYA_SEGMENT_32_FUNCTION_0 = 10000039;
var FUNCTION_KEY_SAKUYA_SEGMENT_35_FUNCTION_0 = 10000040;
var FUNCTION_KEY_SAKUYA_SEGMENT_36_FUNCTION_0 = 10000041;
var FUNCTION_KEY_SAKUYA_SEGMENT_37_FUNCTION_0 = 10000042;
var FUNCTION_KEY_SAKUYA_SEGMENT_37_FUNCTION_1 = 10000043;
var FUNCTION_KEY_SAKUYA_SEGMENT_37_FUNCTION_2 = 10000044;
var FUNCTION_KEY_SAKUYA_SEGMENT_38_FUNCTION_0 = 10000045;
var FUNCTION_KEY_SAKUYA_SEGMENT_39_FUNCTION_0 = 10000046;
var FUNCTION_KEY_SAKUYA_SEGMENT_39_FUNCTION_1 = 10000047;
var FUNCTION_KEY_SAKUYA_SEGMENT_40_FUNCTION_0 = 10000048;
var FUNCTION_KEY_SAKUYA_SEGMENT_41_FUNCTION_0 = 10000047;
var FUNCTION_KEY_SAKUYA_SEGMENT_42_FUNCTION_0 = 10000048;
var FUNCTION_KEY_SAKUYA_SEGMENT_42_FUNCTION_1 = 10000049;
var FUNCTION_KEY_SAKUYA_SEGMENT_43_FUNCTION_0 = 10000050;
var FUNCTION_KEY_SAKUYA_SEGMENT_43_FUNCTION_0 = 10000051;
var FUNCTION_KEY_SAKUYA_SEGMENT_45_FUNCTION_0 = 10000052;
var FUNCTION_KEY_SAKUYA_SEGMENT_47_FUNCTION_0 = 10000053;
var FUNCTION_KEY_SAKUYA_SEGMENT_48_FUNCTION_0 = 10000054;
var FUNCTION_KEY_SAKUYA_SEGMENT_49_FUNCTION_0 = 10000055;
var FUNCTION_KEY_SAKUYA_SEGMENT_50_FUNCTION_0 = 10000056;
var FUNCTION_KEY_SAKUYA_SEGMENT_51_FUNCTION_0 = 10000057;
var FUNCTION_KEY_SAKUYA_SEGMENT_51_FUNCTION_1 = 10000058;
var FUNCTION_KEY_SAKUYA_SEGMENT_51_FUNCTION_2 = 10000059;
var FUNCTION_KEY_SAKUYA_SEGMENT_52_FUNCTION_0 = 10000060;
var FUNCTION_KEY_SAKUYA_SEGMENT_54_FUNCTION_0 = 10000063;
var FUNCTION_KEY_SAKUYA_SEGMENT_55_FUNCTION_0 = 10000064;
var FUNCTION_KEY_SAKUYA_SEGMENT_56_FUNCTION_0 = 10000065;
var FUNCTION_KEY_SAKUYA_SEGMENT_57_FUNCTION_0 = 10000066;
var FUNCTION_KEY_SAKUYA_SEGMENT_58_FUNCTION_0 = 10000067;
var FUNCTION_KEY_SAKUYA_SEGMENT_59_FUNCTION_0 = 10000068;
var FUNCTION_KEY_SAKUYA_SEGMENT_60_FUNCTION_0 = 10000069;
var FUNCTION_KEY_SAKUYA_SEGMENT_60_FUNCTION_1 = 10000070;
var FUNCTION_KEY_SAKUYA_SEGMENT_61_FUNCTION_0 = 10000071;
var FUNCTION_KEY_SAKUYA_SEGMENT_62_FUNCTION_0 = 10000072;
var FUNCTION_KEY_SAKUYA_SEGMENT_63_FUNCTION_0 = 10000073;
var FUNCTION_KEY_SAKUYA_SEGMENT_64_FUNCTION_0 = 10000074;
var FUNCTION_KEY_SAKUYA_SEGMENT_65_FUNCTION_0 = 10000075;
var FUNCTION_KEY_SAKUYA_SEGMENT_66_FUNCTION_0 = 10000076;
var FUNCTION_KEY_SAKUYA_SEGMENT_67_FUNCTION_0 = 10000077;
var FUNCTION_KEY_SAKUYA_SEGMENT_67_FUNCTION_1 = 10000078;
var FUNCTION_KEY_SAKUYA_SEGMENT_68_FUNCTION_0 = 10000079;
var FUNCTION_KEY_SAKUYA_SEGMENT_69_FUNCTION_0 = 10000080;
var FUNCTION_KEY_SAKUYA_SEGMENT_70_FUNCTION_0 = 10000081;
var FUNCTION_KEY_SAKUYA_SEGMENT_71_FUNCTION_0 = 10000082;
var FUNCTION_KEY_SAKUYA_SEGMENT_72_FUNCTION_0 = 10000083;
var FUNCTION_KEY_SAKUYA_SEGMENT_73_FUNCTION_0 = 10000084;
var FUNCTION_KEY_SAKUYA_SEGMENT_75_FUNCTION_0 = 10000085;
var FUNCTION_KEY_SAKUYA_SEGMENT_76_FUNCTION_0 = 10000086;
var FUNCTION_KEY_SAKUYA_SEGMENT_77_FUNCTION_0 = 10000087;
var FUNCTION_KEY_SAKUYA_SEGMENT_78_FUNCTION_0 = 10000088;
var FUNCTION_KEY_SAKUYA_SEGMENT_79_FUNCTION_0 = 10000089;
var FUNCTION_KEY_SAKUYA_SEGMENT_80_FUNCTION_0 = 10000090;
var FUNCTION_KEY_SAKUYA_SEGMENT_81_FUNCTION_0 = 10000091;
var FUNCTION_KEY_SAKUYA_SEGMENT_82_FUNCTION_0 = 10000092;
var FUNCTION_KEY_SAKUYA_SEGMENT_83_FUNCTION_0 = 10000093;
var FUNCTION_KEY_SAKUYA_SEGMENT_84_FUNCTION_0 = 10000094;
var FUNCTION_KEY_SAKUYA_SEGMENT_86_FUNCTION_0 = 10000095;

var FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_0_FUNCTION_0 = 10000100;
var FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_1_FUNCTION_0 = 10000101;
var FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_2_FUNCTION_0 = 10000102;
var FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_3_FUNCTION_0 = 10000103;
var FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_4_FUNCTION_0 = 10000104;
var FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_5_FUNCTION_0 = 10000105;
var FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_6_FUNCTION_0 = 10000106;
var FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_7_FUNCTION_0 = 10000107;
var FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_8_FUNCTION_0 = 10000108;
var FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_9_FUNCTION_0 = 10000109;

var FUNCTION_KEY_SAKUYA_SEGMENT_26A_FUNCTION_0 = 10000110;
var FUNCTION_KEY_SAKUYA_SEGMENT_55A_FUNCTION_0 = 10000111;


var SEGMENT_KEY_NEXT_TICK = 9999999000;
var SEGMENT_KEY_NEXT_TICK_SOCIAL = 9999999001;

var FUNCTION_KEY_NEXT_TICK = 9999999000;
var FUNCTION_KEY_COMBAT_FINISH_ACTION_CONTINUE = 9999999001;
var FUNCTION_KEY_COMBAT_ROLL_DAMAGE = 9999999002;
var FUNCTION_KEY_COMBAT_RESET = 9999999003;
var FUNCTION_KEY_COMBAT_PC_VICTORY_CONTINUE = 9999999004;
var FUNCTION_KEY_SOCIAL_FINISH_ACTION_CONTINUE = 9999999005;
var FUNCTION_KEY_NEXT_TICK_SOCIAL = 9999999006;
var FUNCTION_KEY_SOCIAL_ACCEPT_ATTACK = 9999999007;
var FUNCTION_KEY_SOCIAL_REFUSE_ATTACK = 9999999008;
var FUNCTION_KEY_SOCIAL_COMBAT_RESET = 9999999009;
var FUNCTION_KEY_SOCIAL_COMBAT_PC_VICTORY_CONTINUE = 9999999010;
var FUNCTION_KEY_COMBAT_NPC_FLURRY_CONTINUE = 9999999011;
var FUNCTION_KEY_COMBAT_OPPOSE_REESTABLISH_SURPRISE = 9999999012;

var COMBAT_KEY_SAKUYA_0 = 1000000;  //Sakuya vs Sifu
var COMBAT_KEY_SAKUYA_1 = 1000001;  //Sakuya vs AWOL goons
var COMBAT_KEY_SAKUYA_2 = 1000002;  //Sakuya vs DBs

var COMBATANT_KEY_PC = 1;

var COMBATANT_KEY_SAKUYA_SIFU_0 = 1000000;
var COMBATANT_KEY_SAKUYA_AWOL_GOON_0 = 1000001;
var COMBATANT_KEY_SAKUYA_AWOL_GOON_1 = 1000002;
var COMBATANT_KEY_SAKUYA_AWOL_GOON_2 = 1000003;
var COMBATANT_KEY_SAKUYA_AWOL_GOON_3 = 1000004;
var COMBATANT_KEY_SAKUYA_AWOL_GOON_4 = 1000005;
var COMBATANT_KEY_SAKUYA_CRIMSON_RAIN = 1000006;
var COMBATANT_KEY_SAKUYA_VEDARA = 1000007;

var MISC_ACTION_SAKUYA_GOONS_0 = 1000000;
var MISC_ACTION_SAKUYA_GOONS_1 = 1000001;
var MISC_ACTION_SAKUYA_MISHA_0 = 1000002;

var SOCIAL_COMBAT_KEY_SAKUYA_0 = 1000000; //Sakuya vs Misha - be my concubine!

var SOCIAL_COMBATANT_KEY_PC = 1;
var SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0 = 1000000;



//####################################### SAVE CONSTANTS ##################################################

var SAVE_PREFIX_SAVE = "save_";
var SAVE_PREFIX_CACHE = "cache_";


//####################################### MISC HTML CONSTANTS ##################################################


var CONSTANT_HTML_ID_DICE_BOX = "diceBox";



//####################################### PLOT FLAG CONSTANTS ##################################################

var FLAG_HISTORY_STARTED = "flagHistoryStarted";

var FLAG_AIM_UNLOCKED = "flagAimUnlocked";
var FLAG_GUARD_UNLOCKED = "flagGuardUnlocked";
var FLAG_FLURRY_UNLOCKED = "flagFlurryUnlocked";

var FLAG_ATTRIBUTES_VISIBLE = "flagAttributesVisible";
var FLAG_ABILITIES_VISIBLE = "flagAbilitiesVisible";
var FLAG_ADVANTAGES_1_VISIBLE = "flagAdvantages1Visible";
var FLAG_ADVANTAGES_2_VISIBLE = "flagAdvantages2Visible";
var FLAG_ADVANTAGES_EXALTED_VISIBLE = "flagAdvantagesExaltedVisible";

var FLAG_SAKUYA_SHRINE_INVESTIGATION_THRESHOLD = "flagSakuyaShrineInvestigationThreshold";

var FLAG_SAKUYA_SIFU_FIGHT_USED_GUARD = "flagSakuyaSifuFightUsedGuard";
var FLAG_SAKUYA_SIFU_FIGHT_USED_AIM = "flagSakuyaSifuFightUsedAim";

var FLAG_SAKUYA_SAVED_HISAO = "flagSakuyaSavedHisao";
var FLAG_SAKUYA_SAVED_KENJI = "flagSakuyaSavedKenji";

var FLAG_SAKUYA_BECAME_CONCUBINE = "flagSakuyaBecameConcubine";
var FLAG_SAKUYA_MISHA_SPILLS_ON_RAIN = "flagSakuyaMishaSpillsOnRain";
var FLAG_SAKUYA_MISHA_SPILLS_ON_PROPHECY = "flagSakuyaMishaSpillsOnProphecy";
var FLAG_SAKUYA_MISHA_RAIN_WORKING_ALONE = "flagSakuyaMishaRainWorkingAlone";
var FLAG_SAKUYA_MISHA_TALKS_ABOUT_WYLD_HUNT = "flagSakuyaMishaTalksAboutWyldHunt";
var FLAG_SAKUYA_READ_MOTIVATION_MISHA = "flagSakuyaReadMotivationMisha";

var FLAG_SAKUYA_RETURNED_JADE_CHIP = "flagSakuyaReturnedJadeChip";

var FLAG_SAKUYA_CRIMSON_RAIN_DEAD = "flagSakuyaCrimsonRainDead";
var FLAG_SAKUYA_VEDARA_DEAD = "flagSakuyaVedaraDead";
var FLAG_SAKUYA_VEDARA_USED_SHROUDING = "flagSakuyaVedaraUsedShrouding";
var FLAG_SAKUYA_VEDARA_AMBUSH = "flagSakuyaVedaraAmbush";
var FLAG_SAKUYA_CRIMSON_RAIN_USED_EA_CHARM = "flagSakuyaCrimsonRainUsedEACharm";


//####################################### CHARM CONSTANTS ##################################################

var CONSTANT_ACTION_OPTION_CHARMS_MAX = 10;

var CHARM_TYPE_REFLEXIVE = "Reflexive";
var CHARM_TYPE_SIMPLE = "Simple";
var CHARM_TYPE_SUPPLEMENTAL = "Supplemental";
var CHARM_TYPE_EXTRA_ACTION = "Extra Action";
var CHARM_TYPE_PERMANENT = "Permanent";

var CHARM_COST_TYPE_FLAT = "charmCostTypeFlat";
var CHARM_COST_TYPE_PER_DIE = "charmCostTypePerDie";
var CHARM_COST_TYPE_PER_SUCCESS = "charmCostTypePerSuccess";
var CHARM_COST_TYPE_ANIMA = "charmCostTypeAnima"; //spent but scene duration

var CHARM_BONUS_TYPE_DICE_ADDER = "charmBonusTypeDiceAdder";
var CHARM_BONUS_TYPE_SUCCESS_ADDER = "charmBonusTypeSuccessAdder";
var CHARM_BONUS_TYPE_DAMAGE_DICE_ADDER = "charmBonusTypeDamageDiceAdder";
var CHARM_BONUS_TYPE_DAMAGE_LEVEL_ADDER = "charmBonusTypeDamageLevelAdder";
var CHARM_BONUS_TYPE_FLAT = "charmBonusTypeFlat";
var CHARM_BONUS_TYPE_NONE = "charmBonusTypeNone;"


var CHARM_DURATION_INSTANT = "Instant";
var CHARM_DURATION_NEXT_ACTION = "Until Next Action";
var CHARM_DURATION_VARIABLE = "Variable";
var CHARM_DURATION_SCENE = "One Scene";
var CHARM_DURATION_INDEFINITE = "Indefinite";
var CHARM_DURATION_PERMANENT = "Permanent";

//DBs

//DB Stealth

var CHARM_DRAGON_BLOODED_FIRST_STEALTH_EXCELLENCY = "dbFirstStealthExcellency";

var CHARM_DRAGON_BLOODED_SOUNDLESS_ACTION_PRANA = "dbSoundlessActionPrana";

//DB Thrown

var CHARM_DRAGON_BLOODED_FIRST_THROWN_EXCELLENCY = "dbFirstThrownExcellency";

//DB Air Dragon

var CHARM_DRAGON_BLOODED_WIND_DRAGON_SPEED = "dbWindDragonSpeed";
var CHARM_DRAGON_BLOODED_SHROUDING_THE_BODY_AND_MIND = "dbShroudingTheBodyAndMind";
var CHARM_DRAGON_BLOODED_AIR_DRAGON_FORM = "dbAirDragonForm";
var CHARM_DRAGON_BLOODED_TORNADO_OFFENSE_TECHNIQUE = "dbTornadoOffenseTechnique";



//DB ATHLETICS

var CHARM_DRAGON_BLOODED_EFFORTLESSLY_RISING_FLAME = "dbEffortlesslyRisingFlame";
var CHARM_DRAGON_BLOODED_FALLING_STAR_MANEUVER = "dbFallingStarManeuver";
var CHARM_DRAGON_BLOODED_BELLOWS_PUMPING_STRIDE = "dbBellowsPumpingStride";

//DB DODGE

var CHARM_DRAGON_BLOODED_FIRST_DODGE_EXCELLENCY = "dbFirstDodgeExcellency";

//DB Melee

var CHARM_DRAGON_BLOODED_FIRST_MELEE_EXCELLENCY = "dbFirstMeleeExcellency";

var CHARM_DRAGON_BLOODED_DRAGON_GRACED_WEAPON_FIRE = "dbDragonGracedWeaponFire";
var CHARM_DRAGON_BLOODED_RINGING_ANVIL_ONSLAUGHT = "dbRingingAnvilOnslaught";


//DB Presence

var CHARM_DRAGON_BLOODED_FIRST_PRESENCE_EXCELLENCY = "dbFirstPresenceExcellency";


//DB Martial Arts

var CHARM_DRAGON_BLOODED_FIRST_MARTIAL_ARTS_EXCELLENCY = "dbFirstMartialArtsExcellency";

//Solars


//Solar Animas

var CHARM_SOLAR_DAWN_ANIMA_POWER = "dawnAnimaPower";

//Solar Melee

var CHARM_SOLAR_FIRST_MELEE_EXCELLENCY = "solarFirstMeleeExcellency";

var CHARM_SOLAR_DIPPING_SWALLOW_DEFENCE = "solarDippingSwallowDefence";
var CHARM_SOLAR_BULWARK_STANCE = "solarBulwarkStance";
var CHARM_SOLAR_HEAVENLY_GUARDIAN_DEFENCE = "solarHeavenlyGuardianDefence";
var CHARM_SOLAR_PROTECTION_OF_CELESTIAL_BLISS = "solarProtectionOfCelestialBliss";

var CHARM_SOLAR_HUNGRY_TIGER_TECHNIQUE = "solarHungryTigerTechnique";

//Solar Investigation

var CHARM_SOLAR_SECOND_INVESTIGATION_EXCELLENCY = "solarSecondInvestigationExcellency";
var CHARM_SOLAR_CRAFTY_OBSERVATION_METHOD = "solarCraftyObservationMethod";

//Solar Athletics

var CHARM_SOLAR_GRACEFUL_CRANE_STANCE = "solarGracefulCraneStance";
var CHARM_SOLAR_MONKEY_LEAP_TECHNIQUE = "solarMonkeyLeapTechnique";

//Solar Awareness

var CHARM_SOLAR_SECOND_AWARENESS_EXCELLENCY = "solarSecondAwarenessExcellency";
var CHARM_SOLAR_SURPRISE_ANTICIPATION_METHOD = "solarSurpriseAnticipationMethod";



//####################################### MOTE/ESSENCE CONSTANTS ##################################################

var PREFERRED_POOL_PERSONAL_ONLY = "preferredPoolPersonalOnly";
var PREFERRED_POOL_PERIPHERAL_ONLY = "preferredPoolPeripheralOnly";
var PREFERRED_POOL_PERSONAL_FIRST = "preferredPoolPersonalFirst";
var PREFERRED_POOL_PERIPHERAL_FIRST = "preferredPoolPeripheralFirst";
var PREFERRED_POOL_ANY = "preferredPoolAny";

var STUNT_REWARD_WILLPOWER = "stuntRewardWillpower";
var STUNT_REWARD_MOTES = "stuntRewardMotes";

var VARIABLE_MOTES_MAX = 999999999999; 