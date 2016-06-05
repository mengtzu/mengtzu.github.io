function getEmptySocialCombat() {


    return {

        nextTickSegment: SEGMENT_KEY_NEXT_TICK_SOCIAL,

        reactionCount: 0,

        currentTick: 0,

        tickActions: new Array(),

        combatants: new Array(),

        segmentBucket: new Array(),

        stuntBucket: new Array(),

        checkCombatResult: function() {
        
            //Must override for social combat, there are no default conditions
                
            return COMBAT_RESULT_NO_RESULT;
        },

        onPCVictory: function(){
        
            processSegmentObject(getSocialCombatSegment(this, currentPC, COMBAT_ACTION_PC_VICTORY));
        
        },

        onPCDefeat: function(){
        
            processSegmentObject(getSocialCombatSegment(this, currentPC, COMBAT_ACTION_PC_DEFEAT));
        
        },

        onCombatEnd: function() {},

        combatReset: function() {},

        getPCCombatOptions: function() {

                return function(){
                
                    processSegmentObject(getSocialCombatSegment(currentSocialCombat, currentPC, COMBAT_ACTION_PC_ACTION_CHOICE));
                
                };

       },

       validVirtues: new Array(),
       
       validMiscActions: new Array(),

       socialAttacks: new Array(),

       pcResistedNMI: false  //This needs to be made more sophisticated for non one-on-one battles

    };

}



function getSocialCombatByKey(socialKey) {

    var tempCombat = getEmptySocialCombat();

    switch (socialKey) {

        case SOCIAL_COMBAT_KEY_SAKUYA_0:

            tempCombat.key = SOCIAL_COMBAT_KEY_SAKUYA_0;

            tempCombat.name = "&quot;Be my concubine!&quot; vs intelligence gathering";

            flags[FLAG_SAKUYA_BECAME_CONCUBINE] = false;

            tempCombat.combatants.push(getSocialCombatantByKey(SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0));

            tempCombat.checkCombatResult = function() {

                if (flags[FLAG_SAKUYA_BECAME_CONCUBINE]) {

                    return COMBAT_RESULT_PC_DEFEAT;

                }

                if (getNextSocialAttack(SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0, SOCIAL_COMBATANT_KEY_PC, this).exhausted || (getNextSocialAttack(SOCIAL_COMBATANT_KEY_PC, SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0, this).exhausted && this.pcResistedNMI)) {

                    return COMBAT_RESULT_PC_VICTORY;

                }
                
                return COMBAT_RESULT_NO_RESULT;

            };

            tempCombat.pcVictorySegment = SEGMENT_KEY_SAKUYA_55;

            tempCombat.combatReset = function () {

                standardReset(this);

                flags[FLAG_SAKUYA_BECAME_CONCUBINE] = false;
                flags[FLAG_SAKUYA_MISHA_SPILLS_ON_RAIN] = false;
                flags[FLAG_SAKUYA_MISHA_SPILLS_ON_PROPHECY] = false;
                flags[FLAG_SAKUYA_MISHA_RAIN_WORKING_ALONE] = false;
                flags[FLAG_SAKUYA_MISHA_TALKS_ABOUT_WYLD_HUNT] = false;
                flags[FLAG_SAKUYA_READ_MOTIVATION_MISHA] = false;


                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_51));

            }

            tempCombat.validVirtues.push(CONSTANT_TRAIT_CONVICTION);

            tempCombat.validVirtues.push(CONSTANT_TRAIT_TEMPERANCE);

            //Attacks

            tempCombat.socialAttacks.push({

                attackSegmentKey: 3,
                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                target: SOCIAL_COMBATANT_KEY_PC,
                attackAttribute: CONSTANT_TRAIT_CHARISMA,
                attackAbility: CONSTANT_TRAIT_PRESENCE,
                attackSpecialty: CONSTANT_SPECIALTY_PRESENCE_SEDUCTION,
                attackStunt: 2,
                attackCharm: CHARM_DRAGON_BLOODED_FIRST_PRESENCE_EXCELLENCY,
                preferredPool: PREFERRED_POOL_PERSONAL_ONLY,
                spendWP: true,
                spendWPType: CONSTANT_WP_VIRTUE_CHANNEL,
                channeledVirtue: CONSTANT_TRAIT_COMPASSION,
                speed: 4,
                attackDVAdjustment: 1,
                attackDVAdjustmentLabel: "Ex-Wives -1, Conviction +2",
                refusalChance: 0,
                hitSegmentKey: 5,
                failSegmentKey: 4,
                refusedSegmentKey: 6,
                acceptedSegmentKey: 7,
                used: false,
                setAcceptFlag: true,
                acceptFlag: FLAG_SAKUYA_BECAME_CONCUBINE

            });

            tempCombat.socialAttacks.push({

                attackSegmentKey: 16,
                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                target: SOCIAL_COMBATANT_KEY_PC,
                attackAttribute: CONSTANT_TRAIT_CHARISMA,
                attackAbility: CONSTANT_TRAIT_PRESENCE,
                attackSpecialty: CONSTANT_SPECIALTY_PRESENCE_SEDUCTION,
                attackStunt: 2,
                attackCharm: CHARM_DRAGON_BLOODED_FIRST_PRESENCE_EXCELLENCY,
                preferredPool: PREFERRED_POOL_PERSONAL_ONLY,
                spendWP: true,
                spendWPType: CONSTANT_WP_VIRTUE_CHANNEL,
                channeledVirtue: CONSTANT_TRAIT_COMPASSION,
                speed: 4,
                attackDVAdjustment: -1,
                attackDVAdjustmentLabel: "Winter Tiger School",
                refusalChance: 0,
                hitSegmentKey: 18,
                failSegmentKey: 17,
                refusedSegmentKey: 19,
                acceptedSegmentKey: 20,
                used: false,
                setAcceptFlag: true,
                acceptFlag: FLAG_SAKUYA_BECAME_CONCUBINE

            });


            tempCombat.socialAttacks.push({

                attackSegmentKey: 21,
                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                target: SOCIAL_COMBATANT_KEY_PC,
                attackAttribute: CONSTANT_TRAIT_CHARISMA,
                attackAbility: CONSTANT_TRAIT_PRESENCE,
                attackSpecialty: CONSTANT_SPECIALTY_PRESENCE_SEDUCTION,
                attackStunt: 2,
                attackCharm: CHARM_DRAGON_BLOODED_FIRST_PRESENCE_EXCELLENCY,
                preferredPool: PREFERRED_POOL_PERSONAL_ONLY,
                spendWP: true,
                spendWPType: CONSTANT_WP_VIRTUE_CHANNEL,
                channeledVirtue: CONSTANT_TRAIT_COMPASSION,
                speed: 4,
                attackDVAdjustment: -3,
                attackDVAdjustmentLabel: "Motivation: Protect the king of Makai",
                refusalChance: 0,
                hitSegmentKey: 23,
                failSegmentKey: 22,
                refusedSegmentKey: 24,
                acceptedSegmentKey: 25,
                used: false,
                setAcceptFlag: true,
                acceptFlag: FLAG_SAKUYA_BECAME_CONCUBINE

            });

            
            tempCombat.socialAttacks.push({

                attackSegmentKey: 26,
                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                target: SOCIAL_COMBATANT_KEY_PC,
                attackAttribute: CONSTANT_TRAIT_CHARISMA,
                attackAbility: CONSTANT_TRAIT_PRESENCE,
                attackSpecialty: CONSTANT_SPECIALTY_PRESENCE_SEDUCTION,
                attackStunt: 2,
                attackCharm: CHARM_DRAGON_BLOODED_FIRST_PRESENCE_EXCELLENCY,
                preferredPool: PREFERRED_POOL_PERSONAL_ONLY,
                spendWP: true,
                spendWPType: CONSTANT_WP_VIRTUE_CHANNEL,
                channeledVirtue: CONSTANT_TRAIT_COMPASSION,
                speed: 4,
                attackDVAdjustment: 0,
                attackDVAdjustmentLabel: "Valor -2, Conviction +2",
                refusalChance: 0,
                hitSegmentKey: 28,
                failSegmentKey: 27,
                refusedSegmentKey: 29,
                acceptedSegmentKey: 30,
                used: false,
                setAcceptFlag: true,
                acceptFlag: FLAG_SAKUYA_BECAME_CONCUBINE

            });


            
            tempCombat.socialAttacks.push({

                attackSegmentKey: 0,
                combatant: SOCIAL_COMBATANT_KEY_PC,
                target: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                attackAttribute: CONSTANT_TRAIT_CHARISMA,
                attackAbility: CONSTANT_TRAIT_INVESTIGATION,
                attackSpecialty: CONSTANT_SPECIALTY_INVESTIGATION_INTERROGATION,
                attackStunt: 2,
                attackStuntText: "&quot;I reverse my normal approach and sit almost girlishly on the raised edge of one of the snow-covered stone flowerbeds.  By letting the Dragon Blooded giantess tower over me, I hope that her absolute physical control of the situation leads her to humour my tactless interrogation.  'Lady Meiling, one of your companions wields a red jade daiklave and managed to damage it somehow.  Could you tell me about them?  I'm concerned there'll be a diplomatic incident.'&quot;",
                speed: 5,
                attackDVAdjustment: -1,
                attackDVAdjustmentLabel: "Hatred: Cathak Crimson Rain",
                defenceStunt: 1,
                refusalChance: 0,
                failSegmentKey: 2,
                refusedSegmentKey: 0,
                acceptedSegmentKey: 1,
                used: false,
                setAcceptFlag: true,
                acceptFlag: FLAG_SAKUYA_MISHA_SPILLS_ON_RAIN

            });


            tempCombat.socialAttacks.push({

                attackSegmentKey: 0,
                combatant: SOCIAL_COMBATANT_KEY_PC,
                target: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                attackAttribute: CONSTANT_TRAIT_CHARISMA,
                attackAbility: CONSTANT_TRAIT_INVESTIGATION,
                attackSpecialty: CONSTANT_SPECIALTY_INVESTIGATION_INTERROGATION,
                attackStunt: 2,
                attackStuntText: "&quot;I stand, thread my arm through hers, and gesture out over the city, directing her gaze to the people making welcome the levies.  'This is a peaceful city, Lady Meiling.  Its people offered no rebellion to the Tepet, nor will they to the Cathak.  But they will suffer terribly if your cousin continues as he is.  Is there nothing you can tell me that might help resolve the situation?'&quot;",
                speed: 5,
                attackDVAdjustment: -2,
                attackDVAdjustmentLabel: "Compassion",
                defenceStunt: 1,
                refusalChance: 0,
                failSegmentKey: 11,
                refusedSegmentKey: 0,
                acceptedSegmentKey: 10,
                used: false,
                setAcceptFlag: true,
                acceptFlag: FLAG_SAKUYA_MISHA_SPILLS_ON_PROPHECY

            });

            tempCombat.socialAttacks.push({

                attackSegmentKey: 0,
                combatant: SOCIAL_COMBATANT_KEY_PC,
                target: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                attackAttribute: CONSTANT_TRAIT_CHARISMA,
                attackAbility: CONSTANT_TRAIT_INVESTIGATION,
                attackSpecialty: CONSTANT_SPECIALTY_INVESTIGATION_INTERROGATION,
                attackStunt: 2,
                attackStuntText: "&quot;I turn my face south, dragging Meiling's gaze to the the unseen bulk of the Blessed Isle across the horizon, hoping her feelings for home are sufficiently mixed.  'It doesn't seem like your cousin is working with his colleagues or subordinates, lady Meiling.  Is it usual for a Prince of the Earth to pursue a quest alone and in such secrecy?'&quot;",
                speed: 5,
                attackDVAdjustment: -1,
                attackDVAdjustmentLabel: "Hatred: Cathak Crimson Rain",
                defenceStunt: 1,
                refusalChance: 0,
                failSegmentKey: 12,
                refusedSegmentKey: 0,
                acceptedSegmentKey: 13,
                used: false,
                setAcceptFlag: true,
                acceptFlag: FLAG_SAKUYA_MISHA_RAIN_WORKING_ALONE

            });

            tempCombat.socialAttacks.push({

                attackSegmentKey: 0,
                combatant: SOCIAL_COMBATANT_KEY_PC,
                target: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                attackAttribute: CONSTANT_TRAIT_CHARISMA,
                attackAbility: CONSTANT_TRAIT_INVESTIGATION,
                attackSpecialty: CONSTANT_SPECIALTY_INVESTIGATION_INTERROGATION,
                attackStunt: 2,
                attackStuntText: "&quot;I make a bit of a show of counting the various banners that have appeared around the city, particularly the palace.  'You've brought a substantial force, my lady, almost as if you were planning to resist a siege.  Yet fewer Princes of the Earth to command them than I would have suspected.'&quot;",
                speed: 5,
                attackDVAdjustment: -1,
                attackDVAdjustmentLabel: "Independence",
                defenceStunt: 1,
                refusalChance: 0,
                failSegmentKey: 14,
                refusedSegmentKey: 0,
                acceptedSegmentKey: 15,
                used: false,
                setAcceptFlag: true,
                acceptFlag: FLAG_SAKUYA_MISHA_TALKS_ABOUT_WYLD_HUNT

            });

            //Segments


             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_PC,
                action: COMBAT_ACTION_PC_ACTION_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>You hadn't anticipated an amorous bodhisattva, but it presents an opportunity.  If you can pry out information on the man with the red daiklave before she tires of the game, you'll have an easier time of piecing his together his motivations.  You just need to avoid becoming her concubine.</p><p>...well, not on <strong>her</strong> terms.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The action options in social combat should be familiar - Attack, Aim, Guard, Miscellaneous etc.  Note most social actions have a high DV penalty (e.g. -2 for an attack), making Flurries riskier.</p><p><strong>Intimacies</strong></p><p>Intimicaies are personality traits that represent people, places, causes and the like that the character cares enough about that it affects their behaviour.  Sakuya's patriotism is represented by the Intimacies &quot;Makai&quot; and &quot;The king,&quot; while her willingness to drop everything to help Frosted Lily is partly explained by her &quot;Ex-wives&quot; Intimacy.</p><p><strong>MDV Adjustments</strong></p><p>More reasonable arguments are more effective.  Bonuses or penalties apply to MDVs based on the argument's relevance to the target's personality traits.</p><p>An attack that <strong>supports</strong> an exisiting Intimacy, Virtue of 3+ or Motivation, a penalty of -1, -2 or -3 respectively is applied to the defender's MDV.  For example, if Sakuya was attacked by Lily, she'd suffer a -1 MDV penalty due to her &quot;Ex-wives&quot; Intimacy. These penalties are not cumulative, only the highest applies. If the attack <strong>contradicts</strong> an Intimacy, Virtue or motivation, the defender gets a corresponding MDV bonus (+1, +2, +3).</p><p>Furthermore, looks and bearing have an impact on social combat.  The defender's MDVs are modified by the difference between their Appearance and the attacker's (maximum +/- 3).  If Sakuya (Appearance 5) is attacked by Meiling (Appearance 3), she gains a +2 MDV bonus.  Meiling likewise suffers a -2 MDV penalty when attacked by Sakuya.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_PC,
                action: COMBAT_ACTION_PC_ACTION_CHOICE,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Once again, the cadence of the conversation turns in your favour.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your action has come up again.  Your DVs have refreshed, and you have received <span id=\"stuntRewardTarget\"></span> for stunts since your last DV refresh.</p>  </p> You may wish to try the Read Motiviation miscellaneous action if you haven't already - while it offers no decisive advantage in this battle, it's a very useful mechanic in general play and worth getting to know.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_PC,
                action: COMBAT_ACTION_ATTACK,  //ACCEPTED
                key: 1,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>&quot;Crimson Rain not only damaged his daiklave, but mortals know about it?  Superb.  He's a distant cousin of poor blood, the worst caricature of Fire-Aspected impulsiveness.  He's hoping to win enough glory in the satrapies to be considered worthy of my hand.&quot;  Meiling crouches down in front of you, bringing your eyes level with some difficulty.  &quot;Normally one of my breeding would be outside his reach, but I've been remarkably childish about my obligation to marry and breed.  Hence the family is willing to contemplate his suit, should he manage to distinguish himself in any way.  It is my hope that he gets himself killed.&quot;</p><p>&quot;Do you think that likely?&quot;</p><p>&quot;He spends his essence heedlessly, always gambling on his first strike and leaving nothing for contingency.  The first clever opponent he meets will drain him dry and cut him to pieces.&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>You had successes left on your roll after your opponent's MDV was subtracted as an external penalty.</p> <p>The Willpower cost to resist a social attack is one, plus one per three full successes remaining on the attack roll.  You scored <span id=\"attackSuccessesTarget\"></span> additional successes, adding <span id=\"refuseCostFromAttackSuccessesTarget\"></span> Willpower points to the cost to resist.  The total cost is <span id=\"refuseCostTarget\"></span> Willpower points.</p>  <p>Meiling chose not to spend Willpower to resist, and has thus complied with your request.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_PC,
                action: COMBAT_ACTION_ATTACK,  //MISS
                key: 2,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Meiling makes a face.  &quot;His name's Cathak Crimson Rain, a distant cousin, but let's please not talk about him.  Let's talk about us.&quot;</p><p>Normally at this point you'd be tempted to get your way by stabbing, but looking at Meiling's superheavy armour and gigantic hammer, you're forced to accept talking it out is the easier way.  This is terrible.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You had no successes left on your roll after your opponent's MDV was subtracted as an external penalty.  You didn't pry anything out of Meiling.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //ATTACK
                key: 3,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Meiling plucks a doughty snowflower from the frosted garden and threads it into your hair with surprising grace.  &quot;We're taught never to commit to battle without good intelligence, Snowflake.  I know a great deal about you already, particularly that rather prodigious string of lovely girls you've married only to have things fall apart.&quot;</p><p>&quot;And you think I'm so ill-educated that I'll make a commitment without equivalent intelligence?&quot;</p><p>&quot;I think you realise those marriages failed because they were ordinary girls, not the equals of the Thrice-Elegant Swordmaiden.  I can't promise you equality either, but wouldn't you like to experience the power difference from the other side?&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>Meiling is making an attack against you with a pool of <span id=\"attackPoolTarget\"></span> dice.  How is she getting so many?  She's stunting and activating a Virtue (Compassion), much as Sakuya does, but she's also able to supplement her pools with her Exalted power.</p><p><strong>Charms</strong></p><p>Charms are specific magical techniques that channel Essence to achieve particular effects.  Magical beings of all kinds use Charms, but usually only those specific to their type - Solar Exalted, Dragon Blooded and gods have different Charms and can't learn each others'.</p><p>Meiling is using an <strong>excellency</strong> - specifically the First Presence Excellency.  Excellencies are Charms that directly enhance dicepools, usually by adding dice or successes.  Every type of creature that can use Charms have their own excellencies, using slightly different rules to other types.  The Dragon Blooded First Excellency allows a number of dice to be added to a pool equal to the character's rating in the appropriate Ability, plus any relevant specialties, at the cost of 1 mote of essence per two dice.</p><p>Meiling has Presence 4 and 2 dots in the Seduction specialty, allowing her to add 6 dice at a cost of 3 motes (+1 mote surcharge for being an Earth Aspect using a Fire Aspect Charm).</p><p><strong>Personal and Peripheral Essence</strong></p><p>The Exalted store their motes of essence in two pools - the personal and peripheral.  Motes spent from the peripheral pool cause the Exalt's <strong>anima</strong> to flare, a visible display of power.  In the case of Dragon Blooded, the anima flare can cause damage to those nearby as their elemental power rages out of control, so Meiling has no desire to spend peripheral essence in what she hopes will be a romantic situation.  Motes spent from the personal pool do not flare the anima, but it is the smaller pool.  This limits Meiling's ability to make a sustained social assault.</p><p>Note that the Exalted can choose to regain motes rather than Willpower from stunts, 2 motes for 1 die, 4 motes for 2 dice.</p> <p><strong>MDV Adjustment:</strong> Misha's attack supports your Ex-Wives Intimacy, so you get a -1 MDV penalty.  But it's not addressing your duties, so we'll give you a +2 MDV bonus for your high Conviction, for a total of +1 MDV.  You gain a further +2 MDV from your 2 point Appearance advantage over Meiling.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //MISS
                key: 4,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>There's something a little entrancing about how she presents her words with such little artifice, how she smiles as she does so.  But for all that she is a Prince of the Earth, you are a woman of such incredible will that you can make your heart like stone at need.  Meiling's words do not reach you.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Misha had no successes left after your DV was subtracted as an external penalty, and has missed.  You are not obliged to conform with her attack or spend Willpower to resist it.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //HIT
                key: 5,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>She's right.  Many of the wonderful women who've agreed to marry you were extraordinary, but none were heroes of your stature.  There's a limit to how much empathy can exist in a relationship between someone who must accept the harsh realities of Creation and one who simply rises above them.</p><p>Seeing that from the other side would give you perspective at least; maybe an affair with a Prince of the Earth would be a growth experience.  And the candidate certainly has her charms.</p><p>Or you could grit your teeth, ignore the seductive logic and continue with your interrogation.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Misha had successes remaining after your DV was subtracted as an external penalty, and has hit.  You are obliged to conform with her attack and agree to become her concubine, or spend Willpower to resist it.</p><p>The Willpower cost to resist a social attack is one, plus one per three full successes remaining on the attack roll.  Meiling scored <span id=\"attackSuccessesTarget\"></span> additional successes, adding <span id=\"refuseCostFromAttackSuccessesTarget\"></span> Willpower points to the cost to resist.  The total cost is <span id=\"refuseCostTarget\"></span> Willpower points.</p>  <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //REFUSED
                key: 6,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>&quot;That's a pretty speech, my Lady, but if you know so much about me, you must understand that I'm more thrice-stubborn than thrice-elegant.  It hardly seems appropriate for a Prince of the Earth to squander her time on an old mule like me.&quot;</p><p>&quot;It's difficult to squander something I have in such abundance, and given my situation in this little satrapy, what nobler pursuit could I have than securing its finest flower?&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p><strong>Resisting Natural Mental Influence</strong></p><p>You have spent Willpower points to resist Meiling's attack, depriving her of the pleasure of hearing you call her &quot;Misha.&quot;</p><p>This prevents Meiling from influencing you for the remainder of the scene - she would need Charms that use Unnatural Mental Influence to make any further social attacks against you.  Any other characters attempting to influence you during this scene would have an external penalty of your Integrity.</p><p>You may continue making social attacks against Meiling, but she will have to wait for a later occasion to make any against you.</p>  <p><strong>Scenes</strong></p><p>A scene is a contiguous block of play, closely analagous to a scene in a play or movie.  Many Charms and other magical effects have a duration of one scene.  In this tutorial the investigation at the ruined shrine was the first scene, followed by sparring with Sifu at the dojo, followed by the combat in Frosted Lily's parlour, and so forth.</p><p>Scenes usually end when the group wants to skip over a period of game time in order to reach the next interesting event.  For example, most of the scenes in this tutorial are separated by glossed-over travel time, in which Sakuya walks across the city of Makai.  But there are no rules for scene timing - it's absolutely up to the group and the ST.  A scene might be a thirty-second bloodbath or a ten-hour forced march.  It's important to get a feel for how your group handles scenes, so that you can anticipate how long your charms will last, when you'll be able to try Natural Mental Influence again after being resisted etc.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //ACCEPTED
                key: 7,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>You pull the snowflower out of your hair and stand on tip-toes to thread it through hers, marvelling at the strands of ruby.  &quot;Very well.  Please be good to me.&quot;</p><p>She answers with a kiss, pulling you into her armoured embrace with surprising tenderness.  She doesn't crush you against the jade, but you have the impression she easily could; she's not actually much stronger than you, but far more skilled at grappling.  You've never been so much at another's mercy, but there's no malice in that kiss.  Misha is very far from what you expected of a Dynast.</p><p>Eventually she relaxes her arms, and you take a half-step back to clear your head.  &quot;I didn't say anything about leaving my king's service, Misha.  I'll be calling on him now; he's always the first to hear of my engagements.&quot;</p><p>Misha laughs, like a joyous landslide.  She's evidently very satisfied with herself, but such infectious cheer is difficult to resent.  &quot;Of course, pretty snowflake.  When your work is done, you can take me on a tour of your city.&quot;</p><p>You move off towards the palace gate, shrugging off the knowing grins of the patrolling guards.  You're not sure that was a good idea - you can't make a hasty promise to a Prince of the Earth and expect to escape it - but if worst comes to worst the relationship should sour on its own in a few weeks.  It always does!</p>",
                currentActionText: true,
                currentActionHTML: "<p>You have accepted Meiling's successful attack and have agreed to become her concubine.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_PC,
                action: COMBAT_ACTION_MISCELLANEOUS,  //READ MOTIVATION - FAILED
                key: 8,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>It's like trying to read the motivation of the Imperial Mountain.  For all that Meiling seems charmingly honest and straight-forward, there's something simply inhuman about her.  Her potent elemental blood gives her an armour even your prodigious perception cannot penetrate.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You did not have enough successes to meet the difficulty, and have failed.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_PC,
                action: COMBAT_ACTION_MISCELLANEOUS,  //READ MOTIVATION - SUCCESS
                key: 9,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>You can't help but smile.  For all the potency of her elementaly-charged blood, a human heart beats in Meiling's sturdy breast.</p><p>She's quite honestly infatuated; unless she's superhumanly deceptive (which you assume some Dragon Blooded are, but not a walking mountain like this one) then her attempt to woo you is absolutely genuine.  You don't believe she has any motive beyond securing the affections of a heroic beauty.</p><p>Somehow you don't think the rest of the Cathak contingent will be so obliging.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You had sufficient successes to meet the difficulty, and have succeeded.  Success on a Reading Motivation roll allows you to determine the target's dominant emotion and its context in the scene.  Alternatively, Read Motivation can be used to determine if a particular statement was a lie or deceptive ommission.  In this case you've discovered Meiling's dominant emotion is a genuine infatuation with Sakuya.</p><p>Rolling twice as many successes as the difficulty (ie having a threshold equal or higher than the difficulty) allows you to identify one of the target's relevant Intimacies; that's not useful in this tutorial where we're revealing everything by default, but can be an advantage in actual play.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_PC,
                action: COMBAT_ACTION_ATTACK,  //ACCEPTED
                key: 10,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>&quot;Do you take me for soft-hearted?&quot;  Meiling raises an eyebrow impassively, and for a moment you curse your optimism.  &quot;...because I am afraid it is so.  I don't want to see any of your people die without need, Snowflake.&quot;</p><p>You share a quick smile.</p><p>&quot;Then, my lady, perhaps you can tell me what he's looking for?&quot;</p><p>&quot;Ah, he's searching for something that isn't here yet.  He's not very bright.&quot;</p><p>&quot;Then you know what it is.  Be a dear, Lady Cathak.&quot;</p><p>Meiling gives a slightly hollow laugh.  &quot;If any agents of the Unseen Eye are listening, I'd like you to know I'm just selling out my cousin in an ordinary way owing to my infatuation with this charming mortal, not betraying the Realm.  Crimson Rain claims he received warning that an Anathema will rise here, and very soon.  He means to defeat it to earn his fame.  I don't share his conviction; if there were auguries of such a thing, the Wyld Hunt would be here already.&quot;</p><p>That's troubling.  Who knows what damage a battle between Anathema and the Dragon Blooded might wreak on the city?  You heard of absolute devestation in the wake of the Bull's clashes with the Tepet.  If something of that scale came to Makai...</p><p>&quot;Where does he think the Anathema will appear?&quot;</p><p>Meiling shrugs.  &quot;He was boasting, not seeking aid.  But we are taught that Anathema have an uncontrollable desire to seek the tombs of their own kind.  If such a thing is here...&quot;</p><p>...then you will find it.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You had successes left on your roll after your opponent's MDV was subtracted as an external penalty.</p> <p>The Willpower cost to resist a social attack is one, plus one per three full successes remaining on the attack roll.  You scored <span id=\"attackSuccessesTarget\"></span> additional successes, adding <span id=\"refuseCostFromAttackSuccessesTarget\"></span> Willpower points to the cost to resist.  The total cost is <span id=\"refuseCostTarget\"></span> Willpower points.</p>  <p>Meiling chose not to spend Willpower to resist, and has thus complied with your request.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_PC,
                action: COMBAT_ACTION_ATTACK,  //MISS
                key: 11,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>&quot;I feel for the people of your charming city, but I can't betray the Realm by sharing secrets with a girl who isn't even my legal concubine yet.&quot;</p><p>You idly wonder if it's worth sacrificing your diginity with a pout.  Probably not.</p><p>Meiling shrugs with feigned indifference.  &quot;He's probably just looking for a tomb.  What else would there be of interest in land dominated by the ancestor cult heresy?&quot;</p><p>You let the &quot;heresy&quot; jab slide - she wouldn't tell you the full story, but the crumb she offered might be useful.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You had no successes left on your roll after your opponent's MDV was subtracted as an external penalty.</p><p>Note that Meiling <strong>did</strong> share something useful, if much less than she would have to a successful roll.  That's not a consequence of the rules, just ordinary roleplaying; it indicates Meiling doesn't feel free to simply give Sakuya everything that she wants, but does want to offer some assistance at the expense of Crimson Rain.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_PC,
                action: COMBAT_ACTION_ATTACK,  //MISS
                key: 12,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>&quot;It's hardly appropriate to comment in detail on my idiot cousin when you have yet to accept my offer.  Let's just say operating alone would be unusual for our very correct and sensible family.&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>You had no successes left on your roll after your opponent's MDV was subtracted as an external penalty.  Your attack failed.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_PC,
                action: COMBAT_ACTION_ATTACK,  //ACCEPTED
                key: 13,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>&quot;We are taught that the Anathema were surpassingly mighty, but full of arrogance.  They underestimated the strength of Dragon Blooded working in concert, and thus were cast down.  Even today, we are instructed that the Prince of the Earth who fights alone squanders the blood of his family.&quot;  The Earth-Aspect grins, her teeth glittering.  &quot;So even a poseur like Crimson Rain wouldn't dare act alone.  It's just that you haven't found any evidence of his co-conspirator.  I've heard a few pretty tales of your skill as an investigator, but you are still mortal.&quot;</p><p>You had been hoping the Cathak hadn't brought anyone particularly subtle with them.  This is unfortunate.</p><p>&quot;Could I oblige you to elaborate?  I'd hate to inadvertantly offend a Prince of the Earth.&quot;</p><p>&quot;My cousin Vedara came on Crimson Rain's invitation, for reasons known only to herself.  She's highly regarded in the family, a student of the Glorious Air Dragon Form, intelligent and cautious.  Everything that Crimson Rain is not.  And she is never seen unless she wishes to be.&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>You had successes left on your roll after your opponent's MDV was subtracted as an external penalty.</p> <p>The Willpower cost to resist a social attack is one, plus one per three full successes remaining on the attack roll.  You scored <span id=\"attackSuccessesTarget\"></span> additional successes, adding <span id=\"refuseCostFromAttackSuccessesTarget\"></span> Willpower points to the cost to resist.  The total cost is <span id=\"refuseCostTarget\"></span> Willpower points.</p>  <p>Meiling chose not to spend Willpower to resist, and has thus complied with your request.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_PC,
                action: COMBAT_ACTION_ATTACK,  //MISS
                key: 14,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>&quot;You have me, my sweet Snowflake.  What other Prince of the Earth could you ever need?&quot;</p><p>Meiling sweeps in for a kiss, believing she's created a suave moment to captialise on.  You barely manage to avoid her, and wonder if there isn't merit in Sifu's insistence that you should learn to dodge when you cannot parry.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You had no successes left on your roll after your opponent's MDV was subtracted as an external penalty.  Your attack failed.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_PC,
                action: COMBAT_ACTION_ATTACK,  //ACCEPTED
                key: 15,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>The Earth Aspect smiles and sweeps her hand in an arc that encompasses the whole city, reminding you that while it is your entire world, it's of little note to the Exalted.  &quot;You love Makai, but nobody is much fond of it as a satrapy.  Little profit and prestige, but the ever-present danger of the Bull.  The only way a truly important Prince of the Earth would be here was if she had spent decades steadily eroding her family's good will through petulance over the question of her marriage.&quot;</p><p>&quot;Then it seems your levies are surplus to the task.&quot;</p><p>&quot;The levies aren't here to fight, just to intimidate your neighbours and to die if the Bull comes.  We only have a talon of real troops, House Cathak infantry.&quot;  She furrows her brow, looking to the snows northwards with a frown.  &quot;It's not enough.  I hear the Anathema named Fear Eater can leap walls that high; he's killed talons of elite Tepet troops.  And if Invincible Sword Princess comes...well, I'm sure she's just a myth.&quot;</p><p>&quot;There's an Invincible Sword Princess?&quot;</p><p>&quot;I certainly hope not, the real Anathema are trouble enough.  Maybe you can call yourself that if a demon eats your soul, Snowflake.  It sounds sweeter than 'Fear Eater'.  Ah, I'd miss you, but it might be worth it just to get a Wyld Hunt here.&quot;</p><p>This is good news.  If the Realm doesn't want to send any more Dragon Blooded to Makai, Crimson Rain will need more than a statue and a dead priest to cause large-scale trouble.  As long as you can prevent him from discovering any evidence useful to his cause, you might be able to keep the city safe.</p><p>Unless this Fear Eater really does leap the walls.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You had successes left on your roll after your opponent's MDV was subtracted as an external penalty</p> <p>The Willpower cost to resist a social attack is one, plus one per three full successes remaining on the attack roll.  You scored <span id=\"attackSuccessesTarget\"></span> additional successes, adding <span id=\"refuseCostFromAttackSuccessesTarget\"></span> Willpower points to the cost to resist.  The total cost is <span id=\"refuseCostTarget\"></span> Willpower points.</p>  <p>Meiling chose not to spend Willpower to resist, and has thus complied with your request.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //ATTACK
                key: 16,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Meiling caresses your cheek gently, much as you did Lily's not long ago.  The white jade encasing her fingers is oddly warm; you fancy you can feel her essence pulsing through it.  &quot;You truly are an exquisite beauty, Lady Sakuya.  You've not faded even in your fourth decade.  But that cannot last - for all your perfection of form and skill, you're mortal and doomed to wither.  Won't you let me rescue you?  I can't give you a Dragon Blooded's span, but I am very wealthy, and I will keep you in Age-Staving Cordial for as long as you live.&quot;</p><p>Given how gracefully you've aged so far, that might add thirty years to your life, another ten at least to your prime.</p><p>Meiling makes an exaggerated grimace. &quot;I have heard that for all your other virtues, you're not a very good teacher, Sakuya.  Don't you need more years in which to earn glory with your blade if you're to have any hope of discharging your filial duty to your school?&quot;</p><p>She's not playing fair.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Meiling is making an attack against you with a pool of <span id=\"attackPoolTarget\"></span> dice.  She's using her Presence Excellency again in order to achieve that pool.</p><p><strong>MDV Adjustment:</strong> Misha's attack supports your Intimacy with the Winter Tiger School; this gives you a -1 MDV penalty.  You gain a further +2 MDV from your 2 point Appearance advantage over the Prince of the Earth.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //MISS
                key: 17,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>If you earned those deeds with borrowed life, they would belong to Meiling, not the Winter Tigers.  You'd love another thirty years, but you can't accept them as a gift, or as a payment for your affections.</p><p>&quot;Lady Meiling, the Winter Tigers are taught to disdain that which they did not earn.  How much worse a teacher would I be if I accepted your drugs as a concubine rather than winning them as a warrior?&quot;</p><p>The Prince of the Earth sighs.  &quot;Very well, but I don't want to hear from your ghost when you die.  And when you reincarnate, I insist you be reborn as a Cathak, for a hero of your stature must surely be on the cusp of an incarnation amongst the Dragon Blooded Host.  Misha will look after her cute little cousin!&quot;</p><p>...this is the ruthless and overwhelming power Sifu warned you against?</p>",
                currentActionText: true,
                currentActionHTML: "<p>Misha had no successes left after your DV was subtracted as an external penalty, and has missed.  You are not obliged to conform with her attack or spend Willpower to resist it.</p>  <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //HIT
                key: 18,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>She's right.  You're the best sword your school has ever produced, but you've not succeeded in passing on your skills.  There's no-one in Makai with the talent to fight as you do anyway.  You can't repay Sifu by training a successor; you can only honour him and the school by living long enough to achieve even greater deeds.</p><p>The question is whether you're willing to bond yourself to &quotMisha&quot; to make that happen.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Misha had successes remaining after your DV was subtracted as an external penalty, and has hit.  You are obliged to conform with her attack and agree to become her concubine, or spend Willpower to resist it.</p> <p>The Willpower cost to resist a social attack is one, plus one per three full successes remaining on the attack roll.  Meiling scored <span id=\"attackSuccessesTarget\"></span> additional successes, adding <span id=\"refuseCostFromAttackSuccessesTarget\"></span> Willpower points to the cost to resist.  The total cost is <span id=\"refuseCostTarget\"></span> Willpower points.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //REFUSED
                key: 19,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>If you earned those deeds with borrowed life, they would belong to Meiling, not the Winter Tigers.  You'd love another thirty years, but you can't accept them as a gift, or as a payment for your affections.</p><p>&quot;Lady Meiling, the Winter Tigers are taught to disdain that which they did not earn.  How much worse a teacher would I be if I accepted your drugs as a concubine rather than winning them as a warrior?&quot;</p><p>The Prince of the Earth sighs.  &quot;Very well, but I don't want to hear from your ghost when you die.  And when you reincarnate, I insist you be reborn as a Cathak, for a hero of your stature must surely be on the cusp of an incarnation amongst the Dragon Blooded Host.  Misha will look after her cute little cousin!&quot;</p><p>...this is the ruthless and overwhelming power Sifu warned you against?</p>",
                currentActionText: true,
                currentActionHTML: "<p><strong>Resisting Natural Mental Influence</strong></p><p>You have spent Willpower points to resist Meiling's attack, depriving her of the pleasure of hearing you call her &quot;Misha.&quot;</p><p>This prevents Meiling from influencing you for the remainder of the scene - she would need Charms that use Unnatural Mental Influence to make any further social attacks against you.  Any other characters attempting to influence you during this scene would have an external penalty of your Integrity.</p><p>You may continue making social attacks against Meiling, but she will have to wait for a later occasion to make any against you.</p>  <p><strong>Scenes</strong></p><p>A scene is a contiguous block of play, closely analagous to a scene in a play or movie.  Many Charms and other magical effects have a duration of one scene.  In this tutorial the investigation at the ruined shrine was the first scene, followed by sparring with Sifu at the dojo, followed by the combat in Frosted Lily's parlour, and so forth.</p><p>Scenes usually end when the group wants to skip over a period of game time in order to reach the next interesting event.  For example, most of the scenes in this tutorial are separated by glossed-over travel time, in which Sakuya walks across the city of Makai.  But there are no rules for scene timing - it's absolutely up to the group and the ST.  A scene might be a thirty-second bloodbath or a ten-hour forced march.  It's important to get a feel for how your group handles scenes, so that you can anticipate how long your charms will last, when you'll be able to try Natural Mental Influence again after being resisted etc.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //ACCEPTED
                key: 20,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>You pull the snowflower out of your hair and stand on tip-toes to thread it through hers, marvelling at the strands of ruby.  &quot;Very well.  Please be good to me.&quot;</p><p>She answers with a kiss, pulling you into her armoured embrace with surprising tenderness.  She doesn't crush you against the jade, but you have the impression she easily could; she's not actually much stronger than you, but far more skilled at grappling.  You've never been so much at another's mercy, but there's no malice in that kiss.  Misha is very far from what you expected of a Dynast.</p><p>Eventually she relaxes her arms, and you take a half-step back to clear your head.  &quot;I didn't say anything about leaving my king's service, Misha.  I'll be calling on him now; he's always the first to hear of my engagements.&quot;</p><p>Misha laughs, like a joyous landslide.  She's evidently very satisfied with herself, but such infectious cheer is difficult to resent.  &quot;Of course, pretty Snowflake.  When your work is done, you can take me on a tour of your city.&quot;</p><p>You move off towards the palace gate, shrugging off the knowing grins of the patrolling guards.  You're not sure that was a good idea - you can't make a hasty promise to a Prince of the Earth and expect to escape it - but if worst comes to worst the relationship should sour on its own in a few weeks.  It always does!</p>",
                currentActionText: true,
                currentActionHTML: "<p>You have accepted Meiling's successful attack and have agreed to become her concubine.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //ATTACK
                key: 21,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>The amorous Prince of the Earth gestures towards a statue of the king, a reminder of how hale and handsome he had been sixty years before.  &quot;I understand your king has had a particularly distinguished reign, Snowflake, not least because you have cut down any that threatened him in his twilight years.  But soon some Cathak will find a pliable member of the royal family that they feel would suit the throne better.  They will isolate or kill you and then strike.&quot;</p><p>It wouldn't be the first time someone's thought to assassinate you to clear the way to killing the king.  You've never been impressed by ninja, but it'd be difficult to stop a Prince of the Earth from executing the plan.</p><p>&quot;If you had reason to be constantly with the Dragon Blooded, and had the most powerful warrior in the satrapy, perhaps even the North at your side...&quot;</p><p>&quot;You're blackmailing me into becoming your concubine with my liege's life?&quot;</p><p>She looks a little hurt, though she's obviously not that naive.  &quot;I wouldn't threaten your king.  I don't need to.  I merely indicate that my concubine would be in an unassailable position to save him.&quot;</p><p>You're not sure what the Dynasty teaches its children, but surely &quot;get your way&quot; and &quot;avoid fair play at all costs&quot; are first amongst the lessons.  Meiling seems to have internalised them long before you were born.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Meiling is making an attack against you with a pool of <span id=\"attackPoolTarget\"></span> dice.  She's using her Presence Excellency again in order to achieve that pool.</p><p><strong>MDV Adjustment:</strong> Misha's attack supports your Motivation to protect the king; this gives you a -3 MDV penalty.  You gain a further +2 MDV from your 2 point Appearance advantage over the Prince of the Earth.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //MISS
                key: 22,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>You can't ignore any danger to your king, but neither can you put him in the position of owing Cathak Meiling his life.  &quot;You're too pragmatic, Lady Meiling.  Shouldn't it be all flowers, kittens and southern chocolates?&quot;</p><p>&quot;It should be, but you know very well that wouldn't work either.  A pity, you'd be quite a picture cooing over a kitten.&quot;</p><p>&quot;My lady, even those of us not wearing a half-ton of jade have our dignity as warriors.  You'll never catch me doting on a cat.&quot</p><p>Hmm...from her smile, you think it was a mistake to challenge her.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Misha had no successes left after your DV was subtracted as an external penalty, and has missed.  You are not obliged to conform with her attack or spend Willpower to resist it.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //HIT
                key: 23,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>There's no denying her words.  For all that he's a very old man like to pass of natural causes at any time, the king is razor sharp.  He won't resist the Realm overtly, but he has a lifetime's experience in thwarting efforts to exploit his country.  There's no doubt the Dragon Blooded will want to remove him in favour of an easily cowed nephew.</p><p>But is becoming a concubine the surest way to safeguard him?  Is Meiling simply trying to tempt you into using your duty as an excuse?</p>",
                currentActionText: true,
                currentActionHTML: "<p>Misha had successes remaining after your DV was subtracted as an external penalty, and has hit.  You are obliged to conform with her attack and agree to become her concubine, or spend Willpower to resist it.</p>  <p>The Willpower cost to resist a social attack is one, plus one per three full successes remaining on the attack roll.  Meiling scored <span id=\"attackSuccessesTarget\"></span> additional successes, adding <span id=\"refuseCostFromAttackSuccessesTarget\"></span> Willpower points to the cost to resist.  The total cost is <span id=\"refuseCostTarget\"></span> Willpower points.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //REFUSED
                key: 24,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>It's difficult.  She's pretty, her cheer is infectious, and she's charming in her eccentric fashion.  What she's saying makes sense.  You want it to make sense.</p><p>But you cannot put the king in the position of owing Cathak Meiling his life.  &quot;You're too pragmatic, Lady Meiling.  Shouldn't it be all flowers, kittens and southern chocolates?&quot;</p><p>&quot;It should be, but you know very well that wouldn't work either.  A pity, you'd be quite a picture cooing over a kitten.&quot;</p><p>&quot;My lady, even those of us not wearing a half-ton of jade have our dignity as warriors.  You'll never catch me doting on a cat.&quot</p><p>Hmm...from her smile, you think it was a mistake to challenge her.</p>",
                currentActionText: true,
                currentActionHTML: "<p><strong>Resisting Natural Mental Influence</strong></p><p>You have spent Willpower points to resist Meiling's attack, depriving her of the pleasure of hearing you call her &quot;Misha.&quot;</p><p>This prevents Meiling from influencing you for the remainder of the scene - she would need Charms that use Unnatural Mental Influence to make any further social attacks against you.  Any other characters attempting to influence you during this scene would have an external penalty of your Integrity.</p><p>You may continue making social attacks against Meiling, but she will have to wait for a later occasion to make any against you.</p>  <p><strong>Scenes</strong></p><p>A scene is a contiguous block of play, closely analagous to a scene in a play or movie.  Many Charms and other magical effects have a duration of one scene.  In this tutorial the investigation at the ruined shrine was the first scene, followed by sparring with Sifu at the dojo, followed by the combat in Frosted Lily's parlour, and so forth.</p><p>Scenes usually end when the group wants to skip over a period of game time in order to reach the next interesting event.  For example, most of the scenes in this tutorial are separated by glossed-over travel time, in which Sakuya walks across the city of Makai.  But there are no rules for scene timing - it's absolutely up to the group and the ST.  A scene might be a thirty-second bloodbath or a ten-hour forced march.  It's important to get a feel for how your group handles scenes, so that you can anticipate how long your charms will last, when you'll be able to try Natural Mental Influence again after being resisted etc.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //ACCEPTED
                key: 25,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>You pull the snowflower out of your hair and stand on tip-toes to thread it through hers, marvelling at the strands of ruby.  &quot;Very well.  Please be good to me.&quot;</p><p>She answers with a kiss, pulling you into her armoured embrace with surprising tenderness.  She doesn't crush you against the jade, but you have the impression she easily could; she's not actually much stronger than you, but far more skilled at grappling.  You've never been so much at another's mercy, but there's no malice in that kiss.  Misha is very far from what you expected of a Dynast.</p><p>Eventually she relaxes her arms, and you take a half-step back to clear your head.  &quot;I didn't say anything about leaving my king's service, Misha.  I'll be calling on him now; he's always the first to hear of my engagements.&quot;</p><p>Misha laughs, like a joyous landslide.  She's evidently very satisfied with herself, but such infectious cheer is difficult to resent.  &quot;Of course, pretty snowflake.  When your work is done, you can take me on a tour of your city.&quot;</p><p>You move off towards the palace gate, shrugging off the knowing grins of the patrolling guards.  You're not sure that was a good idea - you can't make a hasty promise to a Prince of the Earth and expect to escape it - but if worst comes to worst the relationship should sour on its own in a few weeks.  It always does!</p>",
                currentActionText: true,
                currentActionHTML: "<p>You have accepted Meiling's successful attack and have agreed to become her concubine.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //ATTACK
                key: 26,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Meiling moves suddenly, grasping your shoulders and smelling your hair.</p><p>&quot;I hate to disappoint you, but I'm not wearing perfume, and I haven't washed my hair today.&quot;</p><p>&quot;Well, that would explain the aroma of liquor; but it's blood that I can smell most of all, Snowflake.  You killed a man before you came here, several if I don't miss my mark.  Such a brave warrior!  Why does your courage fail you when offered the love of a beautiful Prince of the Earth?  Why are you afraid?&quot;</p><p>You narrow your eyes.  &quot;That's unseemly, Lady Meiling.  Dishonourable.&quot;</p><p>&quot;Well, this is the point to which you've driven this poor, lovestruck woman!  If the Thrice-Elegant Sword Maiden responded better to sweet words, she might not be obliged to prove her courage.&quot;</p><p>Well, you can't fight her.  You don't particularly want to reward such shameful behaviour with a kiss either, but you've never let a question on your courage stand.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Meiling is making an attack against you with a pool of <span id=\"attackPoolTarget\"></span> dice.  She's using her Presence Excellency again in order to achieve that pool.</p><p><strong>MDV Adjustment:</strong> Misha's attack supports one of your high-rated Virtues (Valor), and thus levies a -2 MDV penalty.  Once again, the attack doesn't address your duty, so we'll give you a +2 MDV bonus for your Conviction, for a total of +0 MDV. Technically we could also call for a failed Valor roll to avoid having to prove your courage, but since it's already having a mechanical impact on your DVs it seems silly to double up.</p><p>You gain a further +2 MDV from your 2 point Appearance advantage over the Prince of the Earth.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //MISS
                key: 27,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>You breathe slowly, waiting for the indignation to pass.  &quot;You're not questioning my courage, you're trying to goad me.&quot;</p><p>Meiling pouts.  Marble shouldn't pout.  &quot;You're less fun than I hoped, Snowflake.  But I'm capable of patience, and I know how this will end.&quot;</p><p>You might almost be at the point of escaping this dangerous conversation...</p>",
                currentActionText: true,
                currentActionHTML: "<p>Misha had no successes left after your DV was subtracted as an external penalty, and has missed.  You are not obliged to conform with her attack or spend Willpower to resist it.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //HIT
                key: 28,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>You can't stand being called a coward.  You're a hero, not a monk!  You shouldn't fear entanglement in the life of a Prince of the Earth, even if she's twice your size and can tear boulders in half.  She's just another girl who's fallen for you!</p><p>It may take some effort to deal with this argument sensibly.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Misha had successes remaining after your DV was subtracted as an external penalty, and has hit.  You are obliged to conform with her attack and agree to become her concubine, or spend Willpower to resist it.</p>  <p>The Willpower cost to resist a social attack is one, plus one per three full successes remaining on the attack roll.  Meiling scored <span id=\"attackSuccessesTarget\"></span> additional successes, adding <span id=\"refuseCostFromAttackSuccessesTarget\"></span> Willpower points to the cost to resist.  The total cost is <span id=\"refuseCostTarget\"></span> Willpower points.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             
             
            tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //REFUSED
                key: 29,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>...no.  You can't allow your own valour to be used against you.  You can't throw away your dignity in the name of your honour.</p><p>You breathe slowly, waiting for the indignation to pass.  &quot;You're not questioning my courage, you're trying to goad me.&quot;</p><p>Meiling pouts.  Marble shouldn't pout.  &quot;You're less fun than I hoped, Snowflake.  But I'm capable of patience, and I know how this will end.&quot;</p><p>You might almost be at the point of escaping this dangerous conversation...</p>",
                currentActionText: true,
                currentActionHTML: "<p><strong>Resisting Natural Mental Influence</strong></p><p>You have spent Willpower points to resist Meiling's attack, depriving her of the pleasure of hearing you call her &quot;Misha.&quot;</p><p>This prevents Meiling from influencing you for the remainder of the scene - she would need Charms that use Unnatural Mental Influence to make any further social attacks against you.  Any other characters attempting to influence you during this scene would have an external penalty of your Integrity.</p><p>You may continue making social attacks against Meiling, but she will have to wait for a later occasion to make any against you.</p>  <p><strong>Scenes</strong></p><p>A scene is a contiguous block of play, closely analagous to a scene in a play or movie.  Many Charms and other magical effects have a duration of one scene.  In this tutorial the investigation at the ruined shrine was the first scene, followed by sparring with Sifu at the dojo, followed by the combat in Frosted Lily's parlour, and so forth.</p><p>Scenes usually end when the group wants to skip over a period of game time in order to reach the next interesting event.  For example, most of the scenes in this tutorial are separated by glossed-over travel time, in which Sakuya walks across the city of Makai.  But there are no rules for scene timing - it's absolutely up to the group and the ST.  A scene might be a thirty-second bloodbath or a ten-hour forced march.  It's important to get a feel for how your group handles scenes, so that you can anticipate how long your charms will last, when you'll be able to try Natural Mental Influence again after being resisted etc.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_ATTACK,  //ACCEPTED
                key: 30,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>You pull the snowflower out of your hair and stand on tip-toes to thread it through hers, marvelling at the strands of ruby.  &quot;Very well.  Please be good to me.&quot;</p><p>She answers with a kiss, pulling you into her armoured embrace with surprising tenderness.  She doesn't crush you against the jade, but you have the impression she easily could; she's not actually much stronger than you, but far more skilled at grappling.  You've never been so much at another's mercy, but there's no malice in that kiss.  Misha is very far from what you expected of a Dynast.</p><p>Eventually she relaxes her arms, and you take a half-step back to clear your head.  &quot;I didn't say anything about leaving my king's service, Misha.  I'll be calling on him now; he's always the first to hear of my engagements.&quot;</p><p>Misha laughs, like a joyous landslide.  She's evidently very satisfied with herself, but such infectious cheer is difficult to resent.  &quot;Of course, pretty Snowflake.  When your work is done, you can take me on a tour of your city.&quot;</p><p>You move off towards the palace gate, shrugging off the knowing grins of the patrolling guards.  You're not sure that was a good idea - you can't make a hasty promise to a Prince of the Earth and expect to escape it - but if worst comes to worst the relationship should sour on its own in a few weeks.  It always does!</p>",
                currentActionText: true,
                currentActionHTML: "<p>You have accepted Meiling's successful attack and have agreed to become her concubine.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_PC,
                action: COMBAT_ACTION_PC_DEFEAT,
                used: false,
                default: false,
                currentResponse: false,
                currentActionText: true,
                currentActionHTML: "<p>Unlike being killed by thugs in Frosted Lily's common room, there's nothing to stop Sakuya continuing the tutorial as Cathak Meiling's newest concubine rather than as a free woman.  But we suggest you reset the encounter and try again if you don't feel confident with the social combat rules.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

             tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_PC,
                action: COMBAT_ACTION_PC_VICTORY,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Meiling sighs, running jade-clad fingers through her ruby hair.  &quot;I think I've reached the limits of your patience.  Fly along, pretty Snowflake; I wouldn't want you to resent me for holding you from your duty.  Perhaps you'll be more interested in calling me 'Misha' this evening.&quot;</p><p>You incline your head as respectfully as you can manage, forgoing the opportunity for a last witty quip or anything else that might extend the conversation.  &quot;Your assistance is appreciated, Lady Meiling.&quot;</p><p>You take your leave quickly, striding with purpose towards the palace gates.  That was more dangerous than most battles; you knew the Exalted were powerful, but to have the full attention of a Prince of the Earth was overwhelming.  An affair or alliance with the woman wouldn't necessarily be undesireable, but entering into one meekly as an implicit inferior would be.  Her might exerted an awful gravity over your interaction.  You could very easily see how someone of weaker will would simply be swept up in her heroic narrative.</p><p>As you pass through into the first palace courtyard, you idly wonder in how many of your relationships you had been the 'Misha,' the hero drawing the ordinary girl into her world with irresistable will.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Victory is often clear cut in normal combat - one side is dead or has quit the field, the other wins.  Sometimes it's more complex, with multiple sides pursuing objectives that are not entirely incompatible with each other, and in such cases it's up to the ST and group's judgement as to when the scene ends.  Social combat is almost always of the latter type.</p><p>In this case we're ending the scene because Meiling can't make progress in persuading Sakuya to quickly agree to a relationship, while Sakuya has gained as much useful information from Meiling as she's likely to, and has put off seeing the king too long.  She can be judged to have won the scene, but her victory is not as decisive as that over the thugs in Lily's common room.</p><p>You may continue with the tutorial, or reset the encounter to review the concepts of social combat.  You should reset if you're not confident of your understanding of:</p><ul><li>Surprise attacks</li><li>MDVs</li><li>MDV bonuses and penalties from Intimacies, Virtues and Motivation</li><li>MDV bonuses and penalties from Appearance difference.</li><li>Spending Willpower points to resist natural mental influence</li><li>The Read Motivation action</li></ul>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_GUARD,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Surprised at the strength of your will, Meiling relaxes and lets you take the lead in the conversation.</p>",
                currentActionText: true,
                currentActionHTML: "<p>As you spent Willpower to resist Misha's attack, she can't influence you for the rest of the scene.  She takes the Guard action.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_GUARD,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Having failed in her initial assault, Meiling assumes an air of infinite patience, befitting a woman who looks like a mountain.  She's enjoying your company and biding her time; you doubt you'll be easily rid of this one.</p>",
                currentActionText: true,
                currentActionHTML: "<p>As you spent Willpower to resist Misha's attack, she can't influence you for the rest of the scene.  She takes the Guard action.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0,
                action: COMBAT_ACTION_GUARD,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Her attacks have ceased, but it's more difficult to interrogate a patient smile than an active rake.</p>",
                currentActionText: true,
                currentActionHTML: "<p>As you spent Willpower to resist Misha's attack, she can't influence you for the rest of the scene.  She takes the Guard action.</p>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_PC,
                action: COMBAT_ACTION_GUARD,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You hold your tongue a moment, concentrating on Meiling's words.  You won't fall into her traps!</p>",
                currentActionText: true,
                currentActionHTML: "<p>You Guard, and will act again in 3 ticks.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: SOCIAL_COMBATANT_KEY_PC,
                action: COMBAT_ACTION_AIM,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You pause, contemplating Meiling and the flaws in her manner.  There is much to exploit.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You take the Study action.  You will act again in 3 ticks.  If you choose to attack, you will gain 3 bonus dice.</p>",
                actions: new Array()


            });


            //Stunts

            tempCombat.stuntBucket.push({

                key: "sakuyaVsMishaSocialReadMotivationStunt1",
                action: COMBAT_ACTION_MISCELLANEOUS,
                actionKey:  MISC_ACTION_SAKUYA_MISHA_0,
                used: false,
                rating: 2,
                text: "&quot;I prowl around Meiling in a circle, forcing her to keep her eyes on me, to break out of any pre-prepared approach.  I watch her eyes closely, seeking to understand how she truly sees me, what she's really experiencing.&quot;"

            });

            
            tempCombat.stuntBucket.push({

                key: "sakuyaVsMishaSocialParryStunt1",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 1,
                text: "&quot;I weigh her argument carefully, looking for the points of artifice and falsehood amidst the sincerity.  Where she is weak, I counterattack.&quot;"

            });            

            tempCombat.stuntBucket.push({

                key: "sakuyaVsMishaSocialParryStunt2",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;I languidly drum my fingers on the jade above her collarbone, distracting her just enough to disrupt the cadence of her speech and make it easier for me to get a word in edgewise.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsMishaSocialDodgeStunt1",
                action: COMBAT_ACTION_DODGE,
                used: false,
                rating: 2,
                text: "&quot;I let her words pass me by mostly unheard, focusing instead on committing her face to my memory under the label 'Meiling', not 'Misha'.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsMishaSocialDodgeStunt2",
                action: COMBAT_ACTION_DODGE,
                used: false,
                rating: 2,
                text: "&quot;As Meiling weaves her cage of words around me, I run my fingers along one of the armour plates sewn into my jacket.  It reminds me that I am First Sword of the Winter Tigers; I am no-one's concubine.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsMishaSocialDodgeStunt3",
                action: COMBAT_ACTION_DODGE,
                used: false,
                rating: 2,
                text: "&quot;I turn away just a little as she speaks, looking in the direction of the Blessed Isle over the southern horizon.  I must remember that this is not just a charming traveller, but the agent of a foreign power that sees Makai only as a vassal.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsMishaSocialDodgeStunt4",
                action: COMBAT_ACTION_DODGE,
                used: false,
                rating: 2,
                text: "&quot;As she speaks, the image of that orichalcum statue fills my mind, and I consider the awful power of Meiling's testubo.  If she were to decide we were a nation of anathema cultists, that hammer would spill Makai blood.  It might not be wise to volunteer to be nearby when that happens.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsMishaSocialDodgeStunt5",
                action: COMBAT_ACTION_DODGE,
                used: false,
                rating: 2,
                text: "&quot;I let my eyes wander over a statue of the king, and I think on the oaths I've sworn to Makai's throne.  An entanglement with Cathak Meiling wouldn't break those oaths, but it would put them under pressure.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsMishaSocialDodgeStunt6",
                action: COMBAT_ACTION_DODGE,
                used: false,
                rating: 1,
                text: "&quot;I silently go over the Winter Tiger kata in my mind, reminding myself this is a conflict.&quot;"

            });

            //Misc Actions

            tempCombat.validMiscActions.push({

                key: MISC_ACTION_SAKUYA_MISHA_0,
                dvPenalty: 2,
                used: false,
                repeatable: false,
                rolled: true,
                setFlag: true,
                flag: FLAG_SAKUYA_READ_MOTIVATION_MISHA,
                successKey: 9,
                failKey: 8,
                title: "Read Motivation (Misha)",
                description: "Discern Meiling's dominant emotion.  This is a Perception + Investigation roll at a difficulty of half her Manipulation + Socialise, rounded up.  Manipulation 2 + Socialise 3 therefore makes for difficulty 3.",
                callback: function(event) { 

                    var willpower = {
        
                        type: CONSTANT_WP_NONE
        
                    };

                    if ($("input:checkbox[name=miscAction0SpendWillpower]:checked").val() == "true") {

                        willpower = {
            
                            type: $("input:radio[name=miscAction0WPSpendRadio]:checked").val(),
                            virtue: $("#miscAction0ChanneledVirtue").val()
            
                        };

                    }
                
                    readMotivationAction(currentPC, getCombatCombatant(currentSocialCombat, SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0), MISC_ACTION_SAKUYA_MISHA_0, willpower, $("input:radio[name=miscAction0StuntRadio]:checked").val()); 
                    
                },
                flurryCallback: function (event) { 
                
                
                        var willpower = {
        
                            type: CONSTANT_WP_NONE
        
                        };

                        if ($("input:checkbox[name=miscFlurryAction0SpendWillpower]:checked").val() == "true") {

                            willpower = {
            
                                type: $("input:radio[name=miscFlurryAction0WPSpendRadio]:checked").val(),
                                virtue: $("#miscFlurryAction0ChanneledVirtue").val()
            
                            };

                        }

                        socialFlurryAction(currentPC, $("#flurryActionNumberActions").val(), COMBAT_ACTION_MISCELLANEOUS, $("input:radio[name=miscFlurryAction0StuntRadio]:checked").val(), function () { readMotivationAction(currentPC, getCombatCombatant(currentSocialCombat, SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0), MISC_ACTION_SAKUYA_MISHA_0, willpower, CONSTANT_FLURRY_STUNT); });

                
                
                }               

            });

            break;


    }   


    return tempCombat;

}



function getSocialCombatantByKey(socialCombatantKey) {

    if (socialCombatantKey == SOCIAL_COMBATANT_KEY_PC) {

        return currentPC;

    }

    var tempCombatant = initialiseCharacter({});

    switch (socialCombatantKey) {

        case SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0:

            tempCombatant.key = SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0;

            tempCombatant[CONSTANT_TRAIT_CHARACTER_NAME] = "Cathak Meiling";
            tempCombatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] = "Misha";

            tempCombatant[CONSTANT_TRAIT_MOTIVATION] = "To be the foundation of something bigger than herself.";

            tempCombatant[CONSTANT_TRAIT_CHARACTER_TYPE] = TRAIT_VALUE_TYPE_DRAGON_BLOODED;
            tempCombatant[CONSTANT_TRAIT_CASTE] = TRAIT_VALUE_ASPECT_EARTH;
            tempCombatant[CONSTANT_TRAIT_EXALTED] = true;

            tempCombatant[CONSTANT_TRAIT_CHARISMA] = 4;
            tempCombatant[CONSTANT_TRAIT_MANIPULATION] = 2;
            tempCombatant[CONSTANT_TRAIT_APPEARANCE] = 3;

            tempCombatant[CONSTANT_TRAIT_WITS] = 3;

            tempCombatant[CONSTANT_TRAIT_PRESENCE] = 4;

            tempCombatant[CONSTANT_TRAIT_AWARENESS] = 4;

            tempCombatant[CONSTANT_TRAIT_PERFORMANCE] = 1;

            tempCombatant[CONSTANT_TRAIT_INTEGRITY] = 3;

            tempCombatant[CONSTANT_TRAIT_SOCIALISE] = 3;

            tempCombatant[CONSTANT_TRAIT_SPECIALTY].push({

                trait: CONSTANT_TRAIT_PRESENCE,
                specialty: CONSTANT_SPECIALTY_PRESENCE_SEDUCTION,
                favoured: true,
                socialCombat: true,
                label: CONSTANT_SPECIALTY_LABEL_PRESENCE_SEDUCTION,
                rating: 2

            });

            tempCombatant[CONSTANT_TRAIT_WILLPOWER] = 6;
            tempCombatant[CONSTANT_TRAIT_WILLPOWER_CURRENT] = 5;

            tempCombatant[CONSTANT_TRAIT_COMPASSION] = 4;
            tempCombatant[CONSTANT_TRAIT_COMPASSION_CURRENT] = 4;

            tempCombatant[CONSTANT_TRAIT_TEMPERANCE] = 1;
            tempCombatant[CONSTANT_TRAIT_TEMPERANCE_CURRENT] = 1;

            tempCombatant[CONSTANT_TRAIT_CONVICTION] = 2;
            tempCombatant[CONSTANT_TRAIT_CONVICTION_CURRENT] = 2;

            tempCombatant[CONSTANT_TRAIT_VALOUR] = 4;
            tempCombatant[CONSTANT_TRAIT_VALOUR_CURRENT] = 4;

            tempCombatant[CONSTANT_TRAIT_ESSENCE] = 3;

            tempCombatant.getPersonalMax = dbPersonalMax;
            tempCombatant.getPeripheralMax = dbPeripheralMax;

            tempCombatant[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] = 16;

            tempCombatant[CONSTANT_TRAIT_CHARMS].push(CHARM_DRAGON_BLOODED_FIRST_PRESENCE_EXCELLENCY);

            tempCombatant[CONSTANT_TRAIT_INTIMACIES].push({

                label: "Independence",
                description: "Meiling doesn't fit in well with Dynastic society, and doesn't particularly want to.  She values any chance to exercise her will outside the sphere of her domineering family."

            });

            tempCombatant[CONSTANT_TRAIT_INTIMACIES].push({

                label: "Hatred: Cathak Crimson Rain",
                description: "As her nominal betrothed, Crimson Rain represents everything Meiling resents about Dynastic society.  His personal flaws only serve to confirm her dislike."

            });


           tempCombatant[CONSTANT_TRAIT_BACKGROUND].push({

                key: CONSTANT_BACKGROUND_KEY_BREEDING,
                rating: 5,
                characterText: "<p>Meiling's blood is amazingly strong, rare not only in of itself, but especially for an Earth Aspect in Fire-Aspected House Cathak.</p>"

            });

            //She needs a Presence excellency

            tempCombatant[CONSTANT_TRAIT_COMBAT_AI] = function () {

                return function () {

                    if (currentSocialCombat.pcResistedNMI) {

                        guardActionSocial(currentSocialCombat, getCombatCombatant(currentSocialCombat, SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0));

                    } else {

                        attackActionSocial(currentSocialCombat, getCombatCombatant(currentSocialCombat, SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0), {}, getNextSocialAttack(SOCIAL_COMBATANT_KEY_SAKUYA_MISHA_0, SOCIAL_COMBATANT_KEY_PC, currentSocialCombat).index);

                    }

                };

            };


            tempCombatant[CONSTANT_TRAIT_PERSONAL_CURRENT] = tempCombatant.getPersonalCap();  //Needs to be after Breeding :)
            tempCombatant[CONSTANT_TRAIT_PERIPHERAL_CURRENT] = tempCombatant.getPeripheralCap();

            break;




    }

    return tempCombatant;

}

