
function testSakuyaVsDBs() {

    currentPC.exalt();
    currentPC.spendMotes(15);
    currentPC.commitMotes(16);
    currentPC.restoreMotes(4);

    currentPC[CONSTANT_TRAIT_ARMOUR] = {

        type: CONSTANT_SOAK_TYPE_ARMOUR,
        label: "Orichalcum Breastplate",
        bashing: 6,
        lethal: 8,
        mobility: 0,
        fatigue: 0,
        hardness: true,
        hardnessLethal: 3,
        hardnessBashing: 3

    };

    clearBuff(currentPC, CONSTANT_BUFF_MOBILITY_PENALTY);

    currentPC[CONSTANT_TRAIT_WEAPON] = {

        label: "Orichalcum Reaper Daiklave",
        type: CONSTANT_WEAPON_TYPE_SWORD,
        ability: CONSTANT_TRAIT_MELEE,
        specialty: CONSTANT_SPECIALTY_MELEE_SWORDS,
        attackType: CONSTANT_ATTACK_TYPE_MELEE,
        speed: 4,
        accuracy: 6,
        damage: 4,
        damageType: DAMAGE_TYPE_LETHAL,
        defence: 2,
        rate: 4,
        range: "-",
        tags: "O(2)",
        overwhelming: 2

    };


    addCharmBuffsToCharacter(currentPC, CHARM_SOLAR_PROTECTION_OF_CELESTIAL_BLISS, 3, PREFERRED_POOL_PERIPHERAL_FIRST);
    addCharmBuffsToCharacter(currentPC, CHARM_SOLAR_GRACEFUL_CRANE_STANCE, 3, PREFERRED_POOL_PERIPHERAL_FIRST);
    addCharmBuffsToCharacter(currentPC, CHARM_SOLAR_MONKEY_LEAP_TECHNIQUE, 3, PREFERRED_POOL_PERIPHERAL_FIRST);

    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_81));

    flags[FLAG_FLURRY_UNLOCKED] = true;
    flags[FLAG_GUARD_UNLOCKED] = true;
    flags[FLAG_AIM_UNLOCKED] = true;

    fillCharacterSheetFromCharacter(currentPC);



}

function testStartStory() {

    $("#attributesHeader").show();
    $("#attributes").show();
    $("#abilitiesHeader").show();
    $("#abilities").show();
    $("#advantagesHeader").show();
    $("#advantages").show();
    $("#exaltedAdvantagesHeader").show();
    $("#exaltedAdvantages").show();

    processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_0));

}

function testSegment(segmentKey) {

    testStartStory();
    processSegmentObject(getSegmentObjectByKey(segmentKey));

}