

function getEmptyCombat() {


    return {

        nextTickSegment: SEGMENT_KEY_NEXT_TICK,

        reactionCount: 0,

        currentTick: 0,

        tickActions: new Array(),

        combatants: new Array(),

        getPCCombatOptions: function() {

            return function(){};

        },

        segmentBucket: new Array(),

        stuntBucket: new Array(),

        checkCombatResult: function() {
        
            //ONLY SUITABLE FOR 1 PC vs X NPC FIGHTS.  OVERRIDE FOR ANYTHING ELSE        
                
                if (allNPCsIncapacitated(this)) {

                    return COMBAT_RESULT_PC_VICTORY;

                }

                if (isIncapacitated(currentPC)) {

                    return COMBAT_RESULT_PC_DEFEAT;

                }

                return COMBAT_RESULT_NO_RESULT;
                
        },

        onPCVictory: function(){
        
            processSegmentObject(getCombatSegment(this, currentPC, COMBAT_ACTION_PC_VICTORY));
        
        },

        onPCDefeat: function(){
        
            processSegmentObject(getCombatSegment(this, currentPC, COMBAT_ACTION_PC_DEFEAT));
        
        },

        onCombatEnd: function() {},

        combatReset: function() {},

        getPCCombatOptions: function() {

                return function(){
                
                    processSegmentObject(getCombatSegment(currentCombat, currentPC, COMBAT_ACTION_PC_ACTION_CHOICE));
                
                };

       },

       validVirtues: new Array(),
       
       validMiscActions: new Array()

    };

}



function getCombatByKey(combatKey) {

    var tempCombat = getEmptyCombat();

    switch (combatKey) {

        case COMBAT_KEY_SAKUYA_0:

            tempCombat.key = COMBAT_KEY_SAKUYA_0;

            tempCombat.name = "Sharing Sifu's wisdom";

            tempCombat.combatants.push(getCombatantByKey(COMBATANT_KEY_SAKUYA_SIFU_0));

            flags[FLAG_SAKUYA_SIFU_FIGHT_USED_GUARD] = false;

            flags[FLAG_SAKUYA_SIFU_FIGHT_USED_AIM] = false;

            flags[FLAG_FLURRY_UNLOCKED] = false;

            tempCombat.pcVictorySegment = SEGMENT_KEY_SAKUYA_31;

            tempCombat.onCombatEnd = function(event) {

                currentPC[CONSTANT_TRAIT_WEAPON] = {

                    label: "Exceptional Slashing Sword",
                    type: CONSTANT_WEAPON_TYPE_SWORD,
                    ability: CONSTANT_TRAIT_MELEE,
                    specialty: CONSTANT_SPECIALTY_MELEE_SWORDS,
                    attackType: CONSTANT_ATTACK_TYPE_MELEE,
                    speed: 4,
                    accuracy: 2,
                    damage: 4,
                    damageType: DAMAGE_TYPE_LETHAL,
                    defence: 1,
                    rate: 3,
                    range: "-",
                    tags: "-"

                };

                fullHeal(currentPC);

                fillCharacterSheetFromCharacter(currentPC);

                flags[FLAG_AIM_UNLOCKED] = true;
                flags[FLAG_GUARD_UNLOCKED] = true;

            };

            tempCombat.combatReset = function() {
                
                standardReset(this);

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_29));
            
            }

            //Segments

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_GUARD,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu widens his stance and centers his blade.  He waits for your attack, confident that he will not be easy to strike.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Sifu has taken the <strong>Guard</strong> action.</p><p>In most games, this would increase his defence.  In Exalted, it's assumed you're doing your best to defend yourself at all times, so your Defence Values are at their maximum until you take an action.</p><p>Guard is thus a waiting action, since doing anything else would penalise your DVs.  It has a Speed of 3, so Sifu will act again in another three ticks.</p><p>Note that it's possible to abort a Guard and take any other kind of action on any tick in which you're guarding - because you're waiting, you're also ready - but for simplicity's sake in this tutorial anyone taking a Guard action will wait out their full three ticks.</p><p>Guard is rarely used in actual play, but because you <strong>must</strong> choose an action whenever your tick comes up, it's worth remembering the one that doesn't commit you to anything.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_AIM,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu shifts to a more aggressive stance, blade raised over his head.  His eyes follow your motions with predatory intensity, seeking out the gaps in your defences.  His attack will come soon, and with great strength.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Sifu has taken the <strong>Aim</strong> action.</p><p>When you aim, you nominate a target (Sakuya in this case), and then wait for up to three ticks before attacking them.  You gain one bonus die to your attack for each tick waited.</p><p>For simplicity's sake in this tutorial we'll assume anyone taking the Aim action will wait the full three ticks and get the full three-dice bonus.</p><p>Aim applies a -1 penalty to your DVs.  You do not refresh your DV at the end of an Aim, so be prepared to wear that penalty until the action following your attack.</p><p>Aim is rarely used in actual play, particularly by Exalts who have much better means of gaining extra dice for their attack rolls.  However, it can be useful for heroic mortals, particularly when using high damage/low accuracy weapons who only need to hit once to end a fight.</p>",
                actions: new Array()


            });


            
          tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu's blade snaps into a parry position with the precision of decades of practice; it would be a thing of beauty were it enough to stop your serpent-swift cut.</p><p>&quotYou are incapable of deception, Sakuya.  You would not be half the swordswoman you are were you not so fast.&quot  He winces as he assumes a ready stance.  &quot;Remember that the Exalted are swifter.&quot;</p><p>&quot;I suppose I can't hide anything.  But I wasn't planning on fighting the Dragon Blooded!&quot;</p><p>&quot;Indeed?  I was sure my First Sword would think 'Perhaps I can kill a young one!'  But the Exalted are beyond the reach of mortals.  If you were such an enlightened warrior that you could cut down one of the Chosen, you would be Exalted yourself.&quot;</p><p>&quot;I thought the Dragon Blooded were chosen for virtue in their past lives; it's that I haven't incarnated into their bloodlines, not that my sword is weak.&quot;</p><p>&quot;It's true, you're no child of the Dragons.  Put aside your thoughts of fighting them.&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>Sifu chose his Parry DV (his best of the two) to defend himself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Damage is calculated with a second roll.</p><p>The damage roll is your base damage (your Strength + the weapon's Damage stat), plus one die for each remaining success on the attack roll after penalties.  This roll is just a result of your attack roll; it isn't considered a pool in its own right, and cannot be stunted or increased with Willpower expenditure.  Nor does it benefit from your character's heroic nature:  10s do not count twice for successes.  A damage roll cannot botch.</p><p>Each success on the damage roll inflicts one health level of damage on the opponent, so if you roll no successes they will be unharmed.</p>",
                actions: new Array()


            });


          tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu sighs as your attack gracefully slides around his parry and makes contact.  &quot;It is good I don't have the students watch these little encounters.  None of them will ever be skilled enough to imitate your...innovations.&quot;</p><p>&quot;My attacks belong to the spur of the moment, Sifu, there's no imitating them without replicating the circumstances!&quot;</p><p>&quot;And we cannot afford to ruin a sake-house every training session.&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>Sifu chose his Parry DV (his best of the two) to defend himself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p>",
                actions: new Array()


            });

          
          tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu laughs as his defence is defeated again.  &quot;I should have recognised that one.  Wasn't that the attack that killed Ygnir Stone-Eater?&quot;</p><p>&quot;Close.  There were more follow-up hacks, that rock skin he inherited from his mother gave me trouble.&quot;</p><p>&quot;He was mighty, even for a god's son.  But do not dream that any Dragon Blooded would fall so easily.&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>Sifu chose his Parry DV (his best of the two) to defend himself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p>",
                actions: new Array()


            });

          
          tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu seems almost surprised as your blade slides through his defences as if they weren't there.  He's had two decades to get used to it!</p>",
                currentActionText: true,
                currentActionHTML: "<p>Sifu chose his Parry DV (his best of the two) to defend himself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu rolls his wrists with practiced finesse, and his blade drives yours into the ground.  &quot;In all my long years, I have never had your talent or skill, Sakuya.  But you are not Exalted.  Perhaps there is only one in ten million who might match your sword, but one in a hundred might turn aside any given cut.  Do not overcommit.&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu dances back lightly and taps the fingers on your sword-hand with the point of his blade.  It doesn't hurt, but it does spoil your cut.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu drives his sword strongly into your attack, then hammers down on the back of your blade with his fist.  Since your live blades are single-edged, it's technically sound.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>There is an all-too familiar clunk of wood as Sifu elegantly parries your blow.  You dutifully reflect on his warning that inferior opponents will sometimes pull off a block, even against Sakuya Thrice-Elegant.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_DAMAGE_SUCCESS,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML:  "<p>If you were wielding anything but a practice blade, blood would be pooling on the floor.</p><p>&quot;And here would be the point that I began to bleed and you would take command of the battle, like a wolf stalking an elk.&quot;</p><p>&quot;I'm taller than you, Sifu.  Can't we say it's a wolf stalking a rabbit?&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p><strong>Soak</strong> is a statistic granted by the Stamina Attribute and any armour that a character might be wearing.  It's applied as a dice penalty to the damage roll, though it cannot reduce the pool to less than one die.  In this case, since you're inflicting bashing damage (blunt trauma is usually bashing, piercing or cutting weapons are usually lethal), we look at Sifu's bashing soak, which we can see by clicking on his &quot;Armour&quot; line in the damage tracker.  It's 7, so 7 dice were subtracted from your damage roll</p><p>Each success on your damage roll is one health level of damage inflicted on your opponent - bashing damage in this case.  Click on Sifu's &quot;Wound Penalty&quot; in the combat tracker to see the health levels filled with /.  He will suffer the dice penalty listed next to his last filled health level from all pools and his DVs.  A character whose Incapacitated health level is filled with bashing damage is unconscious and out of the fight; they're at grave risk if they take any further injury.</p>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_DAMAGE_SUCCESS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML:  "<p>The cut is good; were it a real sword it would be followed by an elegant red ribbon of blood.  Sifu is drawing closer to admitting defeat.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You've inflicted damage - remember to click on the Sifu's \"Wound Penalty\" on the combat tracker to see his health levels.</p>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_DAMAGE_FAIL,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu stops very still, critically eyeing the angle of your cut.</p><p>&quot;The cut was skillful, but unlucky.  A live blade would have been defeated by my armour.  You rely too much on causing your opponent to bleed, Sakuya.  Remember even the surest cut will sometimes do no injury.&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>Soak is a statistic granted by the Stamina Attribute and any armour that a character might be wearing.  It's applied as a dice penalty to the damage roll, though it cannot reduce the pool to less than one die.  In this case, since you're inflicting bashing damage (blunt trauma is usually bashing, piercing or cutting weapons are usually lethal), we look at Sifu's bashing soak, which we can see by clicking on his &quot;Armour&quot; line in the damage tracker.  It's 7, so 7 dice were subtracted from your damage roll.</p><p>Since each success rolled inflicts one health level of damage, and you rolled no successes, Sifu was undamaged.  Some Exalted have Charms that can guarantee successes on a damage roll, but otherwise it's best not to trust to a single attack doing damage; your luck might be poor.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_DAMAGE_FAIL,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu stops again, letting you see clearly that the cut did not make good contact.  Maybe he's wearing a lucky talisman today?</p>",
                currentActionText: true,
                currentActionHTML: "<p>You rolled no successes on the damage roll, and your opponent is unharmed.  Such is the fate of a gamer, living by the dice.</p>",
                actions: new Array()


            });



            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu feints with his free hand then explodes forward with a stab aimed directly at your heart.  It's the third kata, but performed with such resolute skill that even you can't treat it lightly!</p>",
                currentActionText: true,
                currentActionHTML: "<p>Sifu is taking an Attack action, and will be rolling his Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.</p><p>You may always choose to use either your dodge or parry DV against an attack.  You might wish to dodge instead of parry if the attack would harm your weapon, or parry instead of dodge if remaining perfectly still is important.  In the vast majority of cases, you should simply choose the higher value.</p><p>A DV is essentially an ordinary pool that is assumed to have rolled the average number of successes (you can see how your Dodge DV is derived by clicking on it on your character sheet, as you can for Parry DV by clicking on the Parry DV of your equipped weapon).  As a result, most bonuses and penalties simply apply to the underlying pool as normal.  The exceptions are wound penalties, the DV penalty from taking an action, cover, elevation and stunt bonuses, all of which are applied to the DV directly.</p><p>This means it's a very bad idea to get wounded, and a very good idea to stunt your defence.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu shifts to a high stance and lashes out with cuts to your forehead and both shoulders; it's the eighth kata, and the real attack will be coming at your ankles.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Sifu is taking another Attack action, and will be rolling his Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.</p><p>Choose your DV!</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu's always lecturing you about failing to conceal your intentions, but his trick of confusing an opponent as to whether he's launching the second or tenth kata never works on you.  You parry the wrist-flank-shoulder-shoulder pattern effortlessly, knowing the real attack will be wrists again.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Sifu is taking another Attack action, and will be rolling his Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.</p><p>Choose your DV!</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu takes a low stance and begins a series of upwards-sweeping cuts.  There's no trick to it, just relentless pressure; normally it wouldn't work well, as you're stronger than he is, but he's also shorter, so your knees are at threat.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Sifu is taking another Attack action, and will be rolling his Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.</p><p>Choose your DV!</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_SIFU_0,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu makes a single precise cut at your head.  That's not even a kata!  Maybe he's getting tired.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Sifu is taking another Attack action, and will be rolling his Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.</p><p>Choose your DV!</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_GUARD,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You strike an elegant stance, breathing deeply as you flood your awareness with all the details of the battlefield.  Whatever happens, you'll be ready.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You Guard, and will act again in 3 ticks.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_AIM,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You shift your grip, ready to cut with terrible force, just waiting for your opportunity.  Sifu surely sees what you're doing, but what of it?  Your attack cannot be stopped.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You Aim.  You will act again in 3 ticks.  If you choose to attack, you will gain 3 bonus dice.</p>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: true,
                currentResponse: false,
                currentActionText: true,
                currentActionHTML: "<p>Your opponent had successes remaining on their roll after your DV was applied as an external penalty.  This means they hit you, and you're in danger of taking damage.</p><p>The damage pool is comprised of Strength + the weapon's Damage trait + one die per remaining success on the attack roll - the soak rating of your armour.  Because Sifu is wielding a wooden sword causing bashing damage (where a real sword would cause lethal), we look at Sakuya's bashing soak, which is rated at 11. This is applied as a dice penalty to the damage roll, but it can't reduce damage dice rolled below 1.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: true,
                currentResponse: false,
                currentActionText: true,
                currentActionHTML: "<p>Your opponent had no successes left on their roll after your DV was applied as an external penalty.  That means you were missed, and are in no danger of taking damage.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_DAMAGE_SUCCESS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You let out an involuntary grunt as the blow makes clean contact.  That's quite painful; you hope it's not serious.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Each success on the damage roll inflicts a health level of damage.  You've taken some bashing damage here, so check the <strong>Health</strong> section on your character sheet - you should see some of your health levels filled with a / to indicate bashing damage.  You'll suffer the penalty listed next to your last filled health level to all pools and DVs until the damage is healed.</p>",
                actions: new Array()


            });



            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_DAMAGE_FAIL,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You feel the blow connect cleanly, but only against the metal plates sewn into your buff jacket.  The armour protects you from any injury.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Each success on a damage roll inflicts one health level of damage.  Since your opponent didn't roll any successes, you're unharmed.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_PC_ACTION_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>You feel the initiative shift to you; for a moment, you control the flow of the battle.  What will you do?</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your action has come up!  Three things happen at this time:</p><p><strong>1.  You refresh your DVs.</strong> Every action you take levies a penalty on your Defence Values - the more focus you've put into acting, the less you have to defend yourself.  When your action comes up, these penalties are wiped.</p><p><strong>2.  You are rewarded for your stunts.</strong>  In combat, you receive the dice bonus for stunts as normal, but you only receive the resource reward (i.e a Willpower point for a Heroic Mortal) for the best stunt performed between DV refreshes.  For example, if Sakuya makes an attack with a +1 stunt, and three parries with +2 stunts, then she'll recieve a single Willpower point on her next DV refresh for having performed a +2 stunt.  Since this is your first action, you will have just received the reward for your Join Battle stunt, if any.<p><strong>3.  You MUST choose an action.</strong>  Some of the actions amount to \"waiting\" or \"being unconscious\", but you still have to choose something.  Most of the time, you'll want to take an Attack action.</p><p><strong>Attack</strong></p><p>The Attack action is the most complex in the game, but most of those complexities are consequences of the Charms of the Exalted.  For a pair of heroic mortals like Sakuya and Sifu, it's simple.</p><p>Like every action, Attack has a <strong>Speed</strong> and a <strong>DV penalty</strong>.  The Speed is the number of ticks before you can act again after you've completed the action - for Attack, it's the Speed of your weapon (4 in this case for the wooden practice sword).  The DV penalty is applied to your Defence Values until your DV refresh on your next action; by acting, you've left yourself a bit open and are easier to hit.  The DV penalty for Attack is -1.</p><p>When you take an Attack action, you nominate a target and declare how you'll be attacking them (usually with your weapon) - this is when you'll want to stunt.  Then the target chooses how they'll defend (usually their Dodge DV or Parry DV), and then you make your rolls to see if you hit and damage them.</p><p>Try making an atack on Sifu.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_PC_ACTION_CHOICE,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You feel the initiative shift to you; for a moment, you control the flow of the battle.  What will you do?</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your action has come up again.  Your DVs have refreshed, and you have received <span id=\"stuntRewardTarget\"></span> for stunts since your last DV refresh.</p><p> Another Attack is probably your best option, but consider the advantages and disadvantages of Aim and Guard.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_PC_VICTORY,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu steps back and bows in acknowledgement of your victory.  &quot;Well, I see some traces of my lessons in that outlandish assault.  It is a shame that you are so talented; a student who had to work for her skill would make for a better warrior.&quot;</p><p>This lecture again.</p><p>&quot;Sakuya, the students don't understand the raw effort you can focus on a task when it interests you, because they're not old enough to have been here when you were sixteen.  You lost interest in improving your fighting skills when it became clear that you were the best the city had ever seen, so you never learned proper footwork!  What happens if you're disarmed and need to dodge?  Because you win so swiftly, you don't keep yourself fit enough for an extended fight!  What happens when you meet a foe with unnatural endurance?&quot;</p><p>&quot;Feel better?&quot;</p><p>&quot;After a fashion.  It needs saying at least once a month.  But today most of all, because you have come to ask about the Dragon Blooded, and they will kill anyone short of perfect.&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>You fill Sifu's Incapacitated health level with bashing damage, knocking him out of the fight.  We're going to assume the damage wasn't real, since you were just sparring, and heal both of you.  If this was a serious encounter, Sifu would be unconscious, and would wake up to many days of painful healing.  If he took any further bashing damage while his Incapacitated health level was full, it would \"wrap around\" and convert existing bashing wounds to lethal (which we'll learn about later).</p><p>At this point you may continue with the tutorial, or replay the combat to make sure you understand the concepts involved before we introduce yet more in the next scene.  In particular, you should reset the combat and replay if you don't feel confident with the following rules:<ul><li>Join Battle</li><li>Attack Action</li><li>Speed and ticks</li><li>DVs</li><li>Soak and damage rolls.</li><li>Guard Action</li><li>Aim Action</li></ul></p><p>It might also be a good idea to replay the combat just to get a better feel for the bell-curve of dice rolls, the Willpower/stunt economy etc.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_PC_DEFEAT,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Sifu looks critically at the spot on your armour where his last blow made contact.  &quot;Hmm.  It's taken more years than I care to count, but I've won another match against you.  This is why I have stressed the importance of training to you over and over, Sakuya!  Every time you draw your blade, you are taking a risk, which you must mitigate with ceaseless practice.&quot;</p><p>You feel that something is terribly wrong.  Is this really how the story of the Thrice-Elegant Sword Maiden is supposed to play out?</p>",
                currentActionText: true,
                currentActionHTML: "<p>Well, that was unlucky.  Sifu filled your Incapacitated health levels with bashing damage, knocking you out of the fight.</p><p>While Sifu is only a few dice behind Sakuya in most pools, the wooden practice swords don't really have the damage to push through her armour.  In combat between mortals high soak is a decisive advantage; that's why Sakuya goes to the trouble of wearing it despite her excellent Parry DV.</p><p>Thus it was unusually poor dice luck that got you here, but it's always worth thinking about how bad luck can be controlled.  You should play out the combat again by hitting the \"Reset Combat\" button below, and while it's likely your luck should be better, you should also consider changing your strategy. Spending Willpower on attacks or defences with reliable +2 stunts is a good start.  You might also consider the Aim action if you despair of your luck!</p>",
                actions: new Array()


            });



  

            //Stunts

            tempCombat.stuntBucket.push({

                key: "sakuyaVsSifuAttackStunt0",
                action: COMBAT_ACTION_ATTACK,
                used: false,
                rating: 2,
                text: "&quot;I press Sifu with quick attacks, forcing him to give ground.  Once he's too close to one of the precious technique scrolls hanging on the wall, I unleash a devestating cut that he must catch with his body if he's to preserve it.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsSifuAttackStunt1",
                action: COMBAT_ACTION_ATTACK,
                used: false,
                rating: 2,
                text: "&quot;I give ground until we come to Sifu's writing area, where amongst the scrolls there are beautiful inked portraits of his family.  'Did I ever tell you what really happened the night I met your daughter in Whitewall?'  In the second he flinches, I lash out with an attack.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsSifuAttackStunt2",
                action: COMBAT_ACTION_ATTACK,
                used: false,
                rating: 1,
                text: "&quot;I sweep at Sifu's ankles and then spin a cut into his shoulder faster than he can react.  Poor old guy!&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsSifuAttackStunt3",
                action: COMBAT_ACTION_ATTACK,
                used: false,
                rating: 2,
                text: "&quot;I throw my blade high up above Sifu, then start grabbing swords from the racks to make lightning-fast feinting attacks, discarding each as I do.  Once I've forced Sifu off balance with awkward parries, I dart behind him, catch my original sword, and drive it into his back.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsSifuAttackStunt4",
                action: COMBAT_ACTION_ATTACK,
                used: false,
                rating: 2,
                text: "&quot;I kick aside a mat to reveal the stone beneath, then slam my blade into it hard enough to snap it in half.  I catch the ricocheting loose half with my off hand, then dive through the splinters to attack Sifu with my two improvised short swords.  Hit or miss, I'll keep moving through to grab a new sword from a rack.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsSifuParryStunt0",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;I guide Sifu's blade into his own hand, still extended from his feint.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsSifuParryStunt1",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;I kick up a mat from the floor, and use my sword to flick it in the way of Sifu's attack.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsSifuParryStunt2",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;I flip and run up the wall, spilling a rack of spare practice swords onto Sifu's attack with a push of my blade.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsSifuParryStunt3",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 1,
                text: "&quot;I lock my sword onto Sifu's, using my superior height and strength to push him back.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsSifuParryStunt4",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;I catch Sifu's wrist with my free hand, then shatter his practice sword with my own.  As he starts back from the splinters, I scoop up a fresh blade from the rack and toss it to him.&quot;"

            });



            tempCombat.stuntBucket.push({

                key: "sakuyaVsSifuDodgeStunt0",
                action: COMBAT_ACTION_DODGE,
                used: false,
                rating: 2,
                text: "&quot;I leap well above his attack, too swiftly for his eyes to follow, leaving him staring at the wall scroll that had been behind me: <em>Unthinking mastery</em>.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsSifuDodgeStunt1",
                action: COMBAT_ACTION_DODGE,
                used: false,
                rating: 2,
                text: "&quot;I cartweel backwards to the back of the hall, coming to a stop under the statue of the school's founder.  I mirror her stance, showing Sifu that I command the entire essence of the style; to face me is to face his martial ancestors.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsSifuDodgeStunt2",
                action: COMBAT_ACTION_DODGE,
                used: false,
                rating: 2,
                text: "&quot;I hop upwards, landing on tiptoe on Sifu's extended blade.  We pause for a second before his strength and my balance give out, resulting in a comical collapse.  After rolling to my feet and assuming a ready stance, I give an apologetic shrug.  Worth a try.&quot;"

            });


            break;


        case COMBAT_KEY_SAKUYA_1:

            tempCombat.key = COMBAT_KEY_SAKUYA_1;
            
            tempCombat.name = "Blood in Lily's parlour";

            flags[FLAG_FLURRY_UNLOCKED] = true;

            tempCombat.combatants.push(getCombatantByKey(COMBATANT_KEY_SAKUYA_AWOL_GOON_0));
            tempCombat.combatants.push(getCombatantByKey(COMBATANT_KEY_SAKUYA_AWOL_GOON_1));
            tempCombat.combatants.push(getCombatantByKey(COMBATANT_KEY_SAKUYA_AWOL_GOON_2));
            tempCombat.combatants.push(getCombatantByKey(COMBATANT_KEY_SAKUYA_AWOL_GOON_3));
            tempCombat.combatants.push(getCombatantByKey(COMBATANT_KEY_SAKUYA_AWOL_GOON_4));

            tempCombat.pcVictorySegment = SEGMENT_KEY_SAKUYA_39;
            
            flags[FLAG_SAKUYA_SAVED_HISAO] = false;

            flags[FLAG_SAKUYA_SAVED_KENJI] = false;

            tempCombat.validVirtues.push(CONSTANT_TRAIT_VALOUR);

            tempCombat.validVirtues.push(CONSTANT_TRAIT_COMPASSION);

            tempCombat.combatReset = function() {
                
                standardReset(this);

                flags[FLAG_SAKUYA_SAVED_HISAO] = false;

                flags[FLAG_SAKUYA_SAVED_KENJI] = false;

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_37));
            
            }


            //Misc Actions

            tempCombat.validMiscActions.push({

                key: MISC_ACTION_SAKUYA_GOONS_0,
                dvPenalty: 1,
                used: false,
                repeatable: false,
                setFlag: true,
                flag: FLAG_SAKUYA_SAVED_HISAO,
                title: "Save Hisao",
                description: "Haul one of Lily's boys from behind the bar and toss him to safety.  This is a feat of strength requiring a Strength + Athletics total of 7.",
                callback: function(event) { miscAction(currentPC, MISC_ACTION_SAKUYA_GOONS_0) },
                flurryCallback: function (event) { flurryAction(currentPC, $("#flurryActionNumberActions").val(), $("input:radio[name=flurryStuntRadio]:checked").val(), function(event) { miscAction(currentPC, MISC_ACTION_SAKUYA_GOONS_0) })}               

            });

            tempCombat.validMiscActions.push({

                key: MISC_ACTION_SAKUYA_GOONS_1,
                dvPenalty: 1,
                used: false,
                repeatable: false,
                setFlag: true,
                flag: FLAG_SAKUYA_SAVED_KENJI,
                title: "Save Kenji",
                description: "Haul one of Lily's boys from behind the bar and toss him to safety.  This is a feat of strength requiring a Strength + Athletics total of 7.",
                callback: function(event) { miscAction(currentPC, MISC_ACTION_SAKUYA_GOONS_1) },
                flurryCallback: function (event) { flurryAction(currentPC, $("#flurryActionNumberActions").val(), $("input:radio[name=flurryStuntRadio]:checked").val(), function(event) { miscAction(currentPC, MISC_ACTION_SAKUYA_GOONS_1) })}                

            });


            //Segments

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_0,
                action: COMBAT_ACTION_DEAD,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>The veteran chokes out a final curse - something unkind about your gender - and then passes from Creation.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The veteran's last Dying health level has been filled with lethal damage, and he is dead.  As he can no longer take actions, we'll remove him from the tick tracker.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_0,
                action: COMBAT_ACTION_DYING,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>There is an awful lot of blood pouring out of the prone form of the veteran.  He's not long for the world.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The veteran is Dying.  This forces him to take the Inactive action (Speed 5, DVs set to 0), and inflicts an automatic level of lethal damage on him each time his action comes up.  Unless he receives emergency surgery from a particularly skilled doctor (note: he won't), he's done for.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_0,
                action: COMBAT_ACTION_INCAPACITATED,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>The veteran slurs out some particularly coarse words through his blood-filled mouth and twitches about on the floor.  He's no longer a threat.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The veteran's Incapacitated health level has been filled.  This forces him to take the Inactive action (Speed 5, DVs set to 0).  He will continue to take that action every time his action comes up while his Incapacitated health level remains filled (which, without magical healing, it will).</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_1,
                action: COMBAT_ACTION_DEAD,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>The militiaman dies in silence, far from home, unmourned.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The extra's Dying health level has been filled with lethal damage, and he is dead.  As he can no longer take actions, we'll remove him from the tick tracker.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_1,
                action: COMBAT_ACTION_INCAPACITATED,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>The militiaman dies in silence, far from home, unmourned.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Extras who have been Incapacitated are assumed to quickly succumb to their wounds and die, unless there's a pressing dramatic reason to keep them alive.  Which, as they're extras, is almost never the case.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_2,
                action: COMBAT_ACTION_DEAD,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>The militiaman dies in silence, far from home, unmourned.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The extra's Dying health level has been filled with lethal damage, and he is dead.  As he can no longer take actions, we'll remove him from the tick tracker.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_2,
                action: COMBAT_ACTION_INCAPACITATED,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>The militiaman dies in silence, far from home, unmourned.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Extras who have been Incapacitated are assumed to quickly succumb to their wounds and die, unless there's a pressing dramatic reason to keep them alive.  Which, as they're extras, is almost never the case.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_3,
                action: COMBAT_ACTION_DEAD,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>The militiaman dies in silence, far from home, unmourned.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The extra's Dying health level has been filled with lethal damage, and he is dead.  As he can no longer take actions, we'll remove him from the tick tracker.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_3,
                action: COMBAT_ACTION_INCAPACITATED,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>The militiaman dies in silence, far from home, unmourned.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Extras who have been Incapacitated are assumed to quickly succumb to their wounds and die, unless there's a pressing dramatic reason to keep them alive.  Which, as they're extras, is almost never the case.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_4,
                action: COMBAT_ACTION_DEAD,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>The militiaman dies in silence, far from home, unmourned.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The extra's Dying health level has been filled with lethal damage, and he is dead.  As he can no longer take actions, we'll remove him from the tick tracker.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_4,
                action: COMBAT_ACTION_INCAPACITATED,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>The militiaman dies in silence, far from home, unmourned.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Extras who have been Incapacitated are assumed to quickly succumb to their wounds and die, unless there's a pressing dramatic reason to keep them alive.  Which, as they're extras, is almost never the case.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_0,
                action: COMBAT_ACTION_AIM,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>The veteran looks at your formidible defence and slows down, waiting for an opportunity to slip an attack through.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The veteran has taken the <strong>Aim</strong> action.  He will act again in 3 ticks.</p>",
                actions: new Array()


            });


          tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_0,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>The veteran's confidence melts as you make your attack.  Your entrance made it clear you were dangerous, but only now does he realise the true extent of his peril.  You are a master, the peak of mortal excellence, wielding a blade you know better than your own hands.</p><p>Does he think you a god's daughter or an Anathema come to claim his soul?  Or does he realise now how far short he falls of human potential?</p>",
                currentActionText: true,
                currentActionHTML: "<p>The veteran chose his Parry DV to defend himself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

          tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_0,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>&quot;Don't you ever slow down, witch?&quot;</p><p>You'd have to slow down a great deal for this oaf to have a chance.  Someone's taught him solid parry practice, but he hasn't internalised it.  He has to think once he's recognised an attack is coming, and his wits are slower than your hands.</p><p>&quot;I was married to a witch, as it happened.  Nice girl, made wonderful talismans.  Didn't like my pace any more than you do.  That only killed the marriage.  You're actually going to die.&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>The veteran chose his Parry DV to defend himself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });
            
          tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_0,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>The veteran holds his blade in a better position than his fellows, clearly much more experienced in the business of deflecting attacks with his sword.  He has never faced anyone of your skill though, and your attack easily penetrates his defences.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The veteran chose his Parry DV to defend himself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_1,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>If you were investigating this scene for yourself, you might call it murder; while the militamen are attempting to defend themselves from your attacks, they have no competence to do so.  You have a twinge of conscience, but the memory of Lily's bruised face refreshes your resolve.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The extra chose his Parry DV to defend himself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_2,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You think the parry this poor fool attempted comes from a school in the far east.  You doubt he was ever their student; he has no idea what he's doing, and your cut is barely impeded.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The extra chose his Parry DV to defend himself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_3,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>This solider might have had potential, given appropriate instruction in a style that suited his physique.  As it is, his footwork is appalling and his parries far too slow, which you demonstrate by effortlessly cutting him.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The extra chose his Parry DV to defend himself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            
            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_4,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You think this solider might have once been an icewalker, like Sifu.  Unlike Sifu, his skill with the sword is shamefully inadequate, and you cut him without difficulty.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The extra chose his Parry DV to defend himself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });




            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_0,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>There is a clang as the veteran manages to deflect your attack with a lucky parry.  Everyone looks suitably surprised.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            
            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_1,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>It's not so much that the militaman manages to parry you, but that you're obliged to take an abrupt step backwards to avoid slipping in the slick of blood and firewater still spreading across the floor.  Your opponent looks self-congratulatory, not realising their brief respite from death is owed to luck.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_2,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>It's not so much that the militaman manages to parry you, but that you're obliged to take an abrupt step backwards to avoid slipping in the slick of blood and firewater still spreading across the floor.  Your opponent looks self-congratulatory, not realising their brief respite from death is owed to luck.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_3,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>It's not so much that the militaman manages to parry you, but that you're obliged to take an abrupt step backwards to avoid slipping in the slick of blood and firewater still spreading across the floor.  Your opponent looks self-congratulatory, not realising their brief respite from death is owed to luck.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_4,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>It's not so much that the militaman manages to parry you, but that you're obliged to take an abrupt step backwards to avoid slipping in the slick of blood and firewater still spreading across the floor.  Your opponent looks self-congratulatory, not realising their brief respite from death is owed to luck.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });



   
            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_0,
                action: COMBAT_ACTION_DAMAGE_SUCCESS,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML:  "<p>There is a flash of crimson, and the veteran's blood begins to stain the hard wood of Lily's floor.  Somebody will be scrubbing that for a long time.</p>",
                currentActionText: true,
                currentActionHTML: "<p><strong>Lethal Damage</strong></p><p>You've inflicted some lethal damage, a more severe injury than the bashing damage caused by the wooden sword you used before.</p><p>Click on the Veteran's &quot;Wound Penalty&quot; in the Combat Tracker.  Note that the bashing damage he'd taken earlier has been <strong>pushed down</strong> the chart.  Lethal pushes down Bashing, while Aggravated pushes down Lethal.  This means your most severe wounds are always at the top of the chart, which is important because you heal from the bottom up.</p><p>When a character's Incapacitated health level is filled with bashing damage, each subsequent level of bashing damage <strong>wraps around</strong>, converting the highest health level filled with bashing damage to lethal damage.  If the Incapacitated health level is filled with lethal or aggravated damage, any further damage goes into the Dying health levels.  When all Dying health levels are filled, the character is dead.</p><p>A character who has suffered a lethal injury is bleeding.  They take an automatic level of lethal damage every interval of Stamina minutes.  Mortals must receive medical attention to stop bleeding.</p><p>Finally, any character who has taken a lethal wound needs to worry about infection after the combat finishes, if they manage not to bleed out.  Characters in Exalted should be at great pains to avoid injury!</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_0,
                action: COMBAT_ACTION_DAMAGE_SUCCESS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML:  "<p>Flesh and bone give way easily to the hungry edge of your blade, its fine steel supporting a remarkable sharpness.  This must be a hint of what it is like to wield a daiklave.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You've inflicted damage - remember to click on the veteran's \"Wound Penalty\" on the combat tracker to see his health levels.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_1,
                action: COMBAT_ACTION_DAMAGE_SUCCESS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML:  "<p>You feel the unmistakeable sensation of your blade passing through flesh.  This will be your opponent's last day on Creation.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Damage against extras is not rolled.  You inflict a number of health levels of damage equal to your damage pool divided by three, rounded up.  This means any successful hit will do at least one health level of damage to an extra.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_2,
                action: COMBAT_ACTION_DAMAGE_SUCCESS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML:  "<p>You feel the unmistakeable sensation of your blade passing through flesh.  This will be your opponent's last day on Creation.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Damage against extras is not rolled.  You inflict a number of health levels of damage equal to your damage pool divided by three, rounded up.  This means any successful hit will do at least one health level of damage to an extra.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_3,
                action: COMBAT_ACTION_DAMAGE_SUCCESS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML:  "<p>You feel the unmistakeable sensation of your blade passing through flesh.  This will be your opponent's last day on Creation.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Damage against extras is not rolled.  You inflict a number of health levels of damage equal to your damage pool divided by three, rounded up.  This means any successful hit will do at least one health level of damage to an extra.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_4,
                action: COMBAT_ACTION_DAMAGE_SUCCESS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML:  "<p>You feel the unmistakeable sensation of your blade passing through flesh.  This will be your opponent's last day on Creation.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Damage against extras is not rolled.  You inflict a number of health levels of damage equal to your damage pool divided by three, rounded up.  This means any successful hit will do at least one health level of damage to an extra.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_0,
                action: COMBAT_ACTION_DAMAGE_FAIL,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>That was a good cut!  How did it avoid drawing blood?  This must be the veteran's lucky day, apart from the bit where you'll be killing him.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You rolled no damage successes, and your opponent is unhurt.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_0,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>&quot;Sorry, old bag, this establishment is man-only now.  Since you don't look like you'll go quietly, I'll just have to cut you up 'till you're not recognisably female.&quot;</p><p>The attack that follows is better than the taunt, but not much.  Unlike his subordinates, this veteran seems to have received personal training from a competent instructor, reinforced by a little experience.  He might be dangerous to an average soldier or even an icewalker, but to trouble the First Sword of the Winter Tiger School is clearly far beyond his abilities.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The veteran is taking an attack action against you with a pool of <span id=\"attackPoolTarget\"></span> dice.</p><p>The veteran has a better attack pool than the extras, but as he is not heroic, cannot count on a lucky roll of multiple 0s to eventually beat a DV if he attacks enough.  Keep your DV penalties under control and he will have very little chance of hitting you.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_0,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>The veteran, beginning to understand the calibre of swordswoman he's dealing with, tries to drive you back through the slick of alcohol and blood pooling on the floor.  You're getting the distinct impression he's done most of his fighting in taverns and brothels; sadly for both of you, not so much as you.</p><p>The next attack is competent, but a girl tried a similar cut against you one drunken night in Cherak, and it didn't end well for her.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The veteran is taking an attack action against you with a pool of <span id=\"attackPoolTarget\"></span> dice.</p><p>The veteran has a better attack pool than the extras, but as he is not heroic, cannot count on a lucky roll of multiple 0s to eventually beat a DV if he attacks enough.  Keep your DV penalties under control and he will have very little chance of hitting you.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_0,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>&quot;We're here as legion auxilleries!  You'll answer to the Realm for this!&quot;</p><p>He's running out of confidence, already obvious from his erratic attack patterns.</p><p>&quot;Son, I don't believe the satrap's staff know who you are, and I wager if I presented your head to your commanding officer, I'd get a round of cheers and a few bottles of firewater in thanks.&quot;</p><p>He tries to cut off your witticisms with a wild attack; how gauche.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The veteran is taking an attack action against you with a pool of <span id=\"attackPoolTarget\"></span> dice.</p><p>The veteran has a better attack pool than the extras, but as he is not heroic, cannot count on a lucky roll of multiple 0s to eventually beat a DV if he attacks enough.  Keep your DV penalties under control and he will have very little chance of hitting you.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_0,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Desperate now, the veteran takes a wild swing, trusting more to muttered prayers to half-remembered war gods than to his training.</p>",
                currentActionText: true,
                currentActionHTML: "<p>The veteran is taking an attack action against you with a pool of <span id=\"attackPoolTarget\"></span> dice.</p><p>The veteran has a better attack pool than the extras, but as he is not heroic, cannot count on a lucky roll of multiple 0s to eventually beat a DV if he attacks enough.  Keep your DV penalties under control and he will have very little chance of hitting you.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            
            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_1,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>One of the militamen takes a hurried swing at you.  It's almost unworthy of a parry, but you'd hate to bolster Sifu's arsenal of lectures by taking a wound from a barely-trained thug.</p>",
                currentActionText: true,
                currentActionHTML: "<p>An extra is taking an attack action against you with a pool of <span id=\"attackPoolTarget\"></span> dice.</p><p>Extras typically have very low dice pools.  If you keep your DV penalties under control they may not be able to hit you at all.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_2,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>One of the militamen takes a hurried swing at you.  It's almost unworthy of a parry, but you'd hate to bolster Sifu's arsenal of lectures by taking a wound from a barely-trained thug.</p>",
                currentActionText: true,
                currentActionHTML: "<p>An extra is taking an attack action against you with a pool of <span id=\"attackPoolTarget\"></span> dice.</p><p>Extras typically have very low dice pools.  If you keep your DV penalties under control they may not be able to hit you at all.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_3,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>One of the militamen takes a hurried swing at you.  It's almost unworthy of a parry, but you'd hate to bolster Sifu's arsenal of lectures by taking a wound from a barely-trained thug.</p>",
                currentActionText: true,
                currentActionHTML: "<p>An extra is taking an attack action against you with a pool of <span id=\"attackPoolTarget\"></span> dice.</p><p>Extras typically have very low dice pools.  If you keep your DV penalties under control they may not be able to hit you at all.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_AWOL_GOON_4,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>One of the militamen takes a hurried swing at you.  It's almost unworthy of a parry, but you'd hate to bolster Sifu's arsenal of lectures by taking a wound from a barely-trained thug.</p>",
                currentActionText: true,
                currentActionHTML: "<p>An extra is taking an attack action against you with a pool of <span id=\"attackPoolTarget\"></span> dice.</p><p>Extras typically have very low dice pools.  If you keep your DV penalties under control they may not be able to hit you at all.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_MISCELLANEOUS,
                key: MISC_ACTION_SAKUYA_GOONS_0,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You seize poor Hisao by the belt (he's not wearing a shirt) and haul him up over the bar.  He seems happy to see you, given the circumstances.</p><p>&quot;It's all right dear, aunt Sakuya is here, and Lily will be back soon.&quot</p><p>He whimpers something you don't quite catch before you toss him to the far side of the common room.  That'll earn him a few bruises, but it betters a sword wound by some margin.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You rescue Hisao, by way of a feat of strength.  Lifting a grown man requires a Strength + Athletics pool of 2.  Throwing something you can lift requires a pool five higher (7 in this case).  With her pool of 9, it's no trouble for Sakuya.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_MISCELLANEOUS,
                key: MISC_ACTION_SAKUYA_GOONS_1,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You grab the scruff of Kenji's collar.  It's been a few years, and you've never seen him look so frightened, but he's still the most boyish looking of Lily's employees.</p><p>&quot;What did aunt Sakuya always tell you about soldier boys?  You need to meet a nice clerk or savant.&quot</p><p>He manages a laugh, though it's interrupted by you tossing him to the relative safety of the far side of the room.  He might break something, but you can vouch from experience that getting stabbed is worse.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You rescuse Kenji, by way of a feat of strength.  Lifting a grown man requires a Strength + Athletics pool of 2.  Throwing something you can lift requires a pool five higher (7 in this case).  With her pool of 9, it's no trouble for Sakuya.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_GUARD,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You strike an elegant stance, breathing deeply as you flood your awareness with all the details of the battlefield.  Whatever happens, you'll be ready.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You Guard, and will act again in 3 ticks.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_AIM,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You shift your grip, ready to cut with terrible force, just waiting for your opportunity.  Your opponents surely see what you're doing, but what of it?  Your attack cannot be stopped.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You Aim.  You will act again in 3 ticks.  If you choose to attack, you will gain 3 bonus dice.</p>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: true,
                currentResponse: false,
                currentActionText: true,
                currentActionHTML: "<p>Your opponent had successes remaining on their roll after your DV was applied as an external penalty.  This means they hit you, and you're in danger of taking damage.</p><p>The damage pool is comprised of Strength + the weapon's Damage trait + one die per remaining success on the attack roll - the soak rating of your armour.  Because this is lethal damage, we'll be using the lethal soak rating of your armour, which is 6.  Damage may not be reduced to less than 1 die.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: true,
                currentResponse: false,
                currentActionText: true,
                currentActionHTML: "<p>Your opponent had no successes left on their roll after your DV was applied as an external penalty.  That means you were missed, and are in no danger of taking damage.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_DAMAGE_SUCCESS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You're already cursing as you feel the cut.  You're bleeding.  Not good.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Each success on the damage roll inflicts a health level of damage.  You've taken some lethal damage here, so check the <strong>Health</strong> section on your character sheet - you should see some of your health levels filled with a X to indicate lethal damage.  You'll suffer the penalty listed next to your last filled health level to all pools and DVs until the damage is healed.</p><p>After combat, you will need to contend with bleeding and infection.</p>",
                actions: new Array()


            });



            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_DAMAGE_FAIL,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You feel the blow connect cleanly, but only against the metal plates sewn into your buff jacket.  The armour protects you from any injury.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Each success on a damage roll inflicts one health level of damage.  Since your opponent didn't roll any successes, you're unharmed.</p>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_PC_ACTION_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>In the space of a heartbeat, you internalise the situation and formulate a plan.  Five living foes.  Two hostage catamites.  Both numbers must be reduced, one with the blade and the other with mercy.</p><p>As the heartbeat ends, you are already moving.</p>",
                currentActionText: true,
                currentActionHTML: "<p><strong>Miscellaneous Actions</strong></p><p>A catch-all category for actions taken in combat not directly related to attack or defence, miscellaneous actions always have Speed 5 and usually have a DV penalty of -1.  If Sakuya had not drawn her weapon before combat, she'd be obliged to do so now with a miscellaneous action.  Contextual interactions with the battlefield often take the form of miscellaneous actions; see the opportunity to rescue Lily's employees below.</p><p><strong>Flurries</strong></p><p>A flurry is an action type allowing multiple actions to be taken on a single tick.  You must decide on the number of actions you will be taking when you begin the flurry.  The first action will take a dice penalty equal to the number of actions, all subsequent ones will take an additional cumulative one die penalty.  The speed of a flurry is equal to the highest speed of all actions in the flurry, while the DV penalty is the sum of all DV penalties of actions in the flurry.</p><p>A weapon may not be used to attack in a flurry more times than its Rate (which is 3 for Sakuya's sword).  Certain actions, such as Guard and Aim, may not be used in a flurry.  It's unwise to attempt more actions than your weapon's Rate plus the number of miscellaneous actions you wish to take; you may find yourself out of valid actions and obliged to cancel the flurry.</p><p>Stunts benefit all actions they describe, so you only need one for a flurry.  The stunts on offer here are generic by necessity, but in an odinary tabletop game you'd be describing exactly what you mean to do for the flurry.</p><p><strong>Onslaught Penalty</strong></p><p>Each attack against an opponent in a flurry applies a cumulative -1 penalty to their DVs.  This applies only to attacks from that flurry.</p><p><br/><br/>Using the flurry action, try to kill at least one of the Militia and rescue at least one of Lily's boys on this tick.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_PC_ACTION_CHOICE,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You feel the initiative shift to you; for a moment, you control the flow of the battle.  What will you do?</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your action has come up again.  Your DVs have refreshed, and you have received <span id=\"stuntRewardTarget\"></span> for stunts since your last DV refresh.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_PC_VICTORY,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>The last of the soldiers collapses to the bloody floor with the hideous groan of a broken, dying man.  Lily's common room, already in bad shape when you arrived, is now like an abbotoir.  You kept your promise.</p><p>The fight was easier than you anticipated.  You don't expect the common soldier to be a threat, but it's hard to empathise with anyone who takes up a profession defined by the sword without devoting themselves to mastering it.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You're victorious!  Singlehandedly defeating five soldiers shows the value of defence in Exalted - Sakuya's Parry DV is excellent, while the DVs of her opponents were poor.  That not only makes it difficult for them to hit her, but gives her leeway to expend her DV on flurries.</p><p>You may continue with the tutorial, or reset the combat to have another look at the mechanics we introduced.  In particular, you should reset if you don't clearly understand Flurries, or how lethal damage interacts with existing bashing damage (which is easy to miss if you do too much damage to the veteran on your first attack).</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_PC_DEFEAT,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Your vision goes dark as your blood runs out over Lily's floor.  How could you die to such inferior opponents?  Has ill-luck dictated an ignoble end to the legend of the Thrice-Elegant Sword Maiden?</p>",
                currentActionText: true,
                currentActionHTML: "<p>That didn't go so well.  Your DV advantage and the low pools of your enemies should have kept you relatively safe from harm.  Bad luck can't be helped, but you can reduce your exposure to it with careful control of your DV penalties.  Try again!</p>",
                actions: new Array()


            });

            //Stunts

            tempCombat.stuntBucket.push({

                key: "sakuyaVsAwolGoonsAttackStunt1",
                action: COMBAT_ACTION_ATTACK,
                used: false,
                rating: 2,
                text: "&quot;I sieze a low-burning lantern from the wall and throw it into an isolated pool of liquor just behind my target.  As he starts forward in shock, I greet him with a blade through the sternum.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsAwolGoonsAttackStunt2",
                action: COMBAT_ACTION_ATTACK,
                used: false,
                rating: 2,
                text: "&quot;I once gave Lily a lovely porcelain statue of Venus, and these filthy oafs broke it.  I pick up the remains, whisper an apologetic prayer to the Smiling Lady, and then stab them into the face of my target.  Of course, the short sword to his belly is the real attack.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsAwolGoonsAttackStunt3",
                action: COMBAT_ACTION_ATTACK,
                used: false,
                rating: 2,
                text: "&quot;The floor is too damn slippery, so I flip up and run along the ceiling, dropping down onto my target with my off-hand pushing his face into a broken table, and my sword slipping into his spine.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsAwolGoonsAttackStunt4",
                action: COMBAT_ACTION_ATTACK,
                used: false,
                rating: 2,
                text: "&quot;Lily unwisely keeps a fine rug from the far south in her common room; it's now stained with a variety of substances I don't want to speculate on, and my target is standing on it.  I grab the edge, make a note to wash my hands later, and pull it back sharply.  As my target falls, I rise up and stab him in the crotch.&quot;"

            });


            tempCombat.stuntBucket.push({

                key: "sakuyaVsAwolGoonsDodgeStunt1",
                action: COMBAT_ACTION_DODGE,
                used: false,
                rating: 2,
                text: "&quot;As my opponent's cut comes in, I skip back, splashing up some of the vile pool of blood, liquor and other things into his eyes.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsAwolGoonsDodgeStunt2",
                action: COMBAT_ACTION_DODGE,
                used: false,
                rating: 2,
                text: "&quot;I cartwheel back onto a couch, slashing a pillow to release a burst of feathers at my attacker.  I'll just tell Lily the thugs did it.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsAwolGoonsDodgeStunt3",
                action: COMBAT_ACTION_DODGE,
                used: false,
                rating: 2,
                text: "&quot;I'd like to slide along the floor to avoid the attack, but frankly it's disgusting.  I knock a silver tray to the ground and ride it just out of reach of my attacker's cut, keeping my armour relatively pristine.  I'll still need new shoes.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsAwolGoonsParryStunt1",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;I flip back onto the bar, bringing my blade down on my attacker's to catch it in the ancient hardwood.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsAwolGoonsParryStunt2",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;I grind the flat of my blade along the edge of my attacker's sword, sending a shower of sparks out.  It doesn't actually catch the liquor pools alight, but he's scared enough by the prospect not to properly commit to his attack.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsAwolGoonsParryStunt3",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;I give ground against their attacks until I'm back at the window.  When the decisive attack comes, I guide their blade and arm through the window, then cut down the remaining glass onto the elbow joint.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsAwolGoonsParryStunt4",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;I scoop up one of the broken benches, block the incoming strike then push hard, sending my attacker reeling back under the weight of furniture.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsAwolGoonsParryStunt5",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;Miraculously, Lily's exotic southern hash pipe is intact.  This calls for tearing it out of its enclosure, hammering it down on my attacker's cut and filling his face with glass and smoke.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsAwolGoonsParryStunt6",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;I deflect the cut, keeping it not only from my precious flesh, but the minature shrine mounted on the wall.  With an apology to Lily's ancestors, I lock blades with my opponent and then wrap the tip of his sword in a prayer strip.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsAwolGoonsFlurryStunt1",
                action: COMBAT_ACTION_FLURRY,
                used: false,
                rating: 2,
                text: "&quot;Amidst all the damage, I note that a painting on the far side of the bar has been knocked down.  I burst forwards at nearly inhuman speed, blade and hands everywhere, leaving only chaos in my wake.  As my opponents recover, I gently right the picture - a beautiful rendition of Lily and I's wedding day.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsAwolGoonsFlurryStunt2",
                action: COMBAT_ACTION_FLURRY,
                used: false,
                rating: 2,
                text: "&quot;Well, Lily is going to have to completely refit the room anyway; I technically can't make it any worse.  I start throwing furniture randomly - a card-table at the window, a bench at the bar, a couch into the middle of the room - weaving my real actions subtly into the flashy rampage.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsAwolGoonsFlurryStunt3",
                action: COMBAT_ACTION_FLURRY,
                used: false,
                rating: 2,
                text: "&quot;In absolute disgust at the floor, I leap up to the ceiling, then down onto my targets' heads, then back up again, doing everything I can to avoid touching the ground.  There is a patch of some mysterious substance on the ceiling, but I can avoid that easily enough.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsAwolGoonsFlurryStunt4",
                action: COMBAT_ACTION_FLURRY,
                used: false,
                rating: 2,
                text: "&quot;I tear down the velvet curtains (I never liked them) and hurl them ahead into the press of my enemies.  As they cut and tear at them, I duck low and sprint in, slashing at knees to create space to do my work.&quot;"

            });


            break;

    case COMBAT_KEY_SAKUYA_2:

            tempCombat.key = COMBAT_KEY_SAKUYA_2;

            tempCombat.name = "Battle of the Statues";

            tempCombat.combatants.push(getCombatantByKey(COMBATANT_KEY_SAKUYA_CRIMSON_RAIN));

            tempCombat.combatants.push(getCombatantByKey(COMBATANT_KEY_SAKUYA_VEDARA));

            currentPC.elevation = 2;

            flags[FLAG_SAKUYA_CRIMSON_RAIN_DEAD] = false;
            flags[FLAG_SAKUYA_VEDARA_DEAD] = false;
            flags[FLAG_SAKUYA_VEDARA_USED_SHROUDING] = false;
            flags[FLAG_SAKUYA_VEDARA_AMBUSH] = false;
            flags[FLAG_SAKUYA_CRIMSON_RAIN_USED_EA_CHARM] = false;

            tempCombat.combatants[0].elevation = 0;

            tempCombat.combatants[1].elevation = 0;

            tempCombat.pcVictorySegment = SEGMENT_KEY_SAKUYA_83;

            tempCombat.onCombatEnd = function(event) {

            };

            tempCombat.combatReset = function() {
                
                standardReset(this);

                flags[FLAG_SAKUYA_CRIMSON_RAIN_DEAD] = false;
                flags[FLAG_SAKUYA_VEDARA_DEAD] = false;
                flags[FLAG_SAKUYA_VEDARA_USED_SHROUDING] = false;
                flags[FLAG_SAKUYA_VEDARA_AMBUSH] = false;
                flags[FLAG_SAKUYA_CRIMSON_RAIN_USED_EA_CHARM] = false;

                processSegmentObject(getSegmentObjectByKey(SEGMENT_KEY_SAKUYA_81));
            
            };

            tempCombat.checkCombatResult = function() {
                
                if (flags[FLAG_SAKUYA_CRIMSON_RAIN_DEAD] && flags[FLAG_SAKUYA_VEDARA_DEAD]) {

                    return COMBAT_RESULT_PC_VICTORY;

                }

                if (isIncapacitated(currentPC)) {

                    return COMBAT_RESULT_PC_DEFEAT;

                }

                return COMBAT_RESULT_NO_RESULT;
                
            };

            tempCombat.validVirtues.push(CONSTANT_TRAIT_VALOUR);

            tempCombat.validVirtues.push(CONSTANT_TRAIT_CONVICTION);

            
            //Segments

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_PC_ACTION_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>This is your debut upon the battlefields of the Exalted, your daiklave's first taste of combat in sixteen centuries.  Best make it glorious.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your action has come up again.  Your DVs have refreshed, and you have received <span id=\"stuntRewardTarget\"></span> for stunts since your last DV refresh.</p><p><strong>Flurry versus single attack</strong></p><p>When you were fighting the thugs in Lily's parlour, the tension between flurrying and taking a single action was in how far you were willing to drop your DVs from action penalties.  Because the DVs of your opponents were low and their armour poor, a flurry guaranteed multiple kills.  Because your DVs were high and their accuracy low, taking only one action made you effectively invincible.</p><p>This battle is different.  You keep your DVs high with Charms, not by restricting your actions.  Your opponents have excellent DVs, accuracy pools and artifact equipment.  The choice is between conservative pressure tactics designed to make an opponent spend more motes in defence than you do in attack, and risky one-shot-kill attempts where you spend as much as you can. Experiment, but be careful not to leave yourself moteless on your enemy's action.</p><p><strong>The Last Battle</strong></p><p>This is the last encounter of this tutorial, don't hesitate to use your Virtue activations, Willpower points and motes.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });
            
            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_PC_ACTION_CHOICE,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Perched atop a statue, you control the centre of the maelstrom of battle.  How will you impose your will on your enemies' fates?</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your action has come up again.  Your DVs have refreshed, and you have received <span id=\"stuntRewardTarget\"></span> for stunts since your last DV refresh.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: true,
                currentResponse: false,
                currentActionText: true,
                currentActionHTML: "<p>Your opponent had successes remaining on their roll after your DV was applied as an external penalty.  This means they hit you, and you're in danger of taking damage.</p><p>The damage pool is comprised of Strength + the weapon's Damage trait + one die per remaining success on the attack roll - the soak rating of your armour.  Because this is lethal damage, we'll be using the lethal soak rating of your armour, which is 9.  Damage may not be reduced to less than the Overwhelming rating of an artifact weapon, which is 2 for both Crimson Rain's daiklave and Vedara's chakram.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: true,
                currentResponse: false,
                currentActionText: true,
                currentActionHTML: "<p>Your opponent had no successes left on their roll after your DV was applied as an external penalty.  That means you were missed, and are in no danger of taking damage.</p>",
                actions: new Array()


            });

            
            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_DAMAGE_SUCCESS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You've been cut before, but the sting of elementally-charged jade cleaving through flesh is an unpleasent novelty.  This is how all too many of your kind met their ends on the blades of the Wyld Hunt.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Each success on the damage roll inflicts a health level of damage.  You've taken some lethal damage here, so check the <strong>Health</strong> section on your character sheet - you should see some of your health levels filled with a X to indicate lethal damage.  You'll suffer the penalty listed next to your last filled health level to all pools and DVs until the damage is healed.</p><p>Thankfully as an Exalted bleeding and infection are of little concern.</p>",
                actions: new Array()


            });



            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_DAMAGE_FAIL,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Jade meets orichalcum, issuing a grinding complaint that echoes amongst the statues.  Your armour, light as it is, does not surrender to the attack.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Each success on a damage roll inflicts one health level of damage.  Since your opponent didn't roll any successes, you're unharmed.</p>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_GUARD,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You vault onto the shoulders of King Genji the Invincible, relaxing your stance and breathing in the essence of the battlefield.  This is a moment to be cherished.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You Guard, and will act again in 3 ticks.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_AIM,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You leap onto the arms of Queen Udongein the Hunter, holding your blade ready to cut.  You study the foe, how their animas betray the state of their essence, and draw them in to their deaths.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You Aim.  You will act again in 3 ticks.  If you choose to attack, you will gain 3 bonus dice.</p>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_DAMAGE_SUCCESS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML:  "<p>The blood of a Dragon spurts out to stain the courtyard; even jade cannot stop the divine edge of an orichalcum daiklave.</p>",
                currentActionText: true,
                currentActionHTML: "You've inflicted damage - remember to click on Crimson Rain's \"Wound Penalty\" on the combat tracker to see his health levels.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_DAMAGE_FAIL,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Your blade grinds to a halt on the solid red plates of Crimson Rain's armour.  Orichalcum may be superior to jade, but not by enough...</p>",
                currentActionText: true,
                currentActionHTML: "<p>You rolled no damage successes, and your opponent is unhurt.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            
            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Winter Tiger skills bolstered by ancient memories of transcendent mastery, you break Crimson Rain's guard and strike.</p><p>&quot;Only your stolen, blasphemous power lets you stand against Cathak swordsmanship, Anathema.  Even in that sword-maiden's body you have no legitimate means to strike me.&quot;</p><p>&quot;No-one likes a sore loser, Dragonling.&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain chose his Parry DV to defend himself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()

            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>The cut is good, too good for Crimson Rain.  His underlying skill is a step short of your own, and your Exalted excellence far surpasses his.</p><p>&quot;...ugh.  Well, a few scars will serve only to impress my concubines.  There's no victory here for you, demon.&quot;</p><p>&quot;Whereas your head will serve to impress mine.  Not that you've ever impressed Meiling before.&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain chose his Parry DV to defend himself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()

            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Crimson Rain's parry is hasty and a shade clumsy, allowing you to guide your blade along his weapon and arm into his body.</p><p>&quot;Cathak, even I know your vaunted schools teach better practice than that.  Did you miss your calling as a shepherd or basket-weaver?&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain chose his Parry DV to defend himself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()

            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Hit!  You wish Sifu could have seen that.  Or Meiling was facing this way.  Or that the king and his guards weren't distracted by mortal danger.</p><p><em>Nobody</em> will see your wonderful cut other than the Dragon Blooded you'll be killing.  That's terribly unfair.  Maybe the Unconquered Sun is still paying attention?</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain chose his Parry DV to defend himself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()

            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Your blade strikes true again, leaving swirls of fire in its wake through Crimson Rain's anima.</p><p>&quot;Don't think you've won, Anathema.  I am a student of Hessiesh, you will never drain my last mote!&quot;</p><p>&quot;The Dragon's fire seems to be guttering, Cathak.  I could extinguish you with a bucket of water, were it worth the effort to fetch one.&quot;",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain chose his Parry DV to defend himself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()

            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Bolstered by his essence, Crimson Rain's swordsmanship is superhuman.  As he tires, that excellence falls away.  Once again, his parry is not the equal of your strike.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain chose his Parry DV to defend himself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()

            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>There is a crunch of stone against metal as the red daiklave turns away the golden.</p><p>&quot;Where are the vaunted powers of the Anathema now?&quot;</p><p>&quot;Waiting for one worthy of unleashing them upon, of course.  I thought the Air Aspect to be the danger here, and you her jester.&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()

            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Again your cut is turned aside.  Crimson Rain has neither your skill nor power, but enough of both to be a serious impediment.</p><p>&quot;A shame for you, demon, that there was no true warrior's soul to consume.  The feeble sword of this girl is betraying you.&quot;</p><p>&quot;If you could continue distracting yourself with gloating while I build towards my victory, I should be very grateful.&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()

            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>You twist your blade in an attempt to get inside Crimson Rain's parry, but earn only a shower of sparks for your trouble.</p><p>&quot;Is that a local technique, or is that the best the sword schools of hell can manage?&quot;</p><p>&quot;I've never been to hell, but give me a moment and I shall send you to tour the underworld's dojos.&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()

            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>The Cathak parries another cut.  It seems as an Exalted warrior you'll need to learn the patience Sifu always despaired of teaching you.</p><p>&quot;This is the attack of the might Forsaken?  Pathetic.  I should have left the affair to Vedara, there is less glory here than I was promised.&quot;</p><p>His tone is boastful, but his stance betrays his fear.  He is breaking under your assault.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()

            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Your cut is parried, but the effort takes a visible toll on Crimson Rain.  Neither his skill nor essence can sustain this duel.  He must hope to cut you down swiftly.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()

            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Notched it may be, but Crimson Rain's daiklave is still the heirloom weapon of a proud Dragon Blooded house, capable of turning aside even the fury of the Dawn.  He parries your attack, and earns a brief respite.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });



            //Crimson Rain attacks:  note the first four assume he's using his magical flurry, which should be guaranteed to happen by his AI routine and defence function (he won't spend motes under what he'll need to use it, until he's used it)

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Crimson Rain launches himself at your perch, trailing smoke, fire and steam from melted snow.  His daiklave glows with an impossible heat, and he chops at you with inhuman speed.  One strike...</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain is using the <em>Ringing Anvil Onslaught</em> Charm to attack you with a magical flurry. For the first attack he will be rolling his Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.  <span id=\"flurryTarget\"></span></p><span id=\"activatedCharmsTarget\"></span><span id=\"dvAdjustmentsTarget\"></span><p><strong>Magical Flurries</strong></p><p>Extra Action Charms generate magical flurries, which break the rules for flurries in various beneficial ways.  A typical magical flurry (such as <em>Ringing Anvil Onslaught</em>) grants a certain number of attacks with no multiple action penalty, and a DV penalty equal to a single attack rather than the total number.</p><p><em>Ringing Anvil Onslaught</em> is atypical in that it demands a roll to see how many attacks it generates.  In this case, we've assumed an average result of 4 attacks.</p><p><strong>Defending Against Flurries</strong></p><p>You may use a single stunt to describe all your defences for an attacker's flurry.  Instant duration Charms need to be used seperately against each attack, whereas Charms with a duration of One Tick or longer will protect against all of them.  Onslaught penalties apply to your defence as normal (a cumulative -1DV for each attack after the first), so you may want to consider Bulwark Stance in order to ignore them.</p><p>There is a species of Charm known as flurry-breakers that allow you to avoid all subsequent attacks in a flurry after successfully defending against one; they're generally Dodge Charms.<div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>...two...</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain is taking another attack, and will be rolling his Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.  <span id=\"flurryTarget\"></span></p><span id=\"activatedCharmsTarget\"></span><span id=\"dvAdjustmentsTarget\"></span><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>...three...</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain is taking another attack, and will be rolling his Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.  <span id=\"flurryTarget\"></span></p><span id=\"activatedCharmsTarget\"></span><span id=\"dvAdjustmentsTarget\"></span><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()

            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>...and with a fourth, the onslaught ends.  The bonfire of his anima eloquently speaks of its cost, incinerating the sacrificial offerings left for the monarchs.  Thanks to the enchanted might of your armour, you are unburned.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain is taking the final attack of his flurry, and will be rolling his Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.  <span id=\"flurryTarget\"></span></p><span id=\"activatedCharmsTarget\"></span><span id=\"dvAdjustmentsTarget\"></span><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>&quot;Your head was to be an ornament for my wedding to Meiling, Anathema.  Now that you've poisoned her, both your heads will just have to adorn some lonely pikes.&quot;</p><p>&quot;I'd consider using your head as a decoration for my next wedding, but it's rather hideous.  Thankfully your Air Aspected cousin will be providing one more suitable.&quot;</p><p>Crimson Rain tries his daiklave in place of another witticism, attempting to cut through a stone neck and your fleshy one in a single blow.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain is taking an Attack action, and will be rolling his Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.  <span id=\"flurryTarget\"></span></p><span id=\"activatedCharmsTarget\"></span><span id=\"dvAdjustmentsTarget\"></span><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>&quot;It's good that so many of your foul kind arise in the north, demon.  All the more glory for House Cathak to claim!&quot;</p><p>&quot;I'll happily grant you the glory the Tepet claimed here.  I won't even make you trek out onto the ice to collect it.&quot;</p><p>Feeling worse off in another exchange of words, Crimson Rain is determined to do better in the clash of daiklaves.  He leaps up past you, a wave of fire rippling out from his launch point to singe the kneeling monarchs of Makai, hoping to crash down on you with the force of a falling star.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain is taking an Attack action, and will be rolling his Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.  <span id=\"flurryTarget\"></span></p><span id=\"activatedCharmsTarget\"></span><span id=\"dvAdjustmentsTarget\"></span><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            
            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>&quot;You can't win this, Anathema.  Your stolen powers might impress a lackwit like Meiling, but they cannot stand against the infinite essence of the Dragons!&quot;</p><p>&quot;My powers were granted to me by the Unconquered Sun, that I might burn away the unrighteousness of this world.  The Dragons may have infinite essence, but I won't listen to the bleatings of a spoiled brat who squanders what little share of their power he has through accident of birth.&quot;</p><p>He didn't like that.  Enraged, Crimson Rain bursts through the statue of King Minato to reach you, hacking wildly at your chest.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain is taking an Attack action, and will be rolling his Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.  <span id=\"flurryTarget\"></span></p><span id=\"activatedCharmsTarget\"></span><span id=\"dvAdjustmentsTarget\"></span><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>&quot;How dare you question my sacred blood?  I am an heir to Hessiesh himself!  Watch as I unleash his fires upon you!&quot;</p><p>&quot;I don't know many Dragon Blooded, but I've met Meiling and I can tell good breeding from bad.  I doubt your grandfather bothers to remember your name, let alone this Hessiesh.&quot;</p><p>You've met barbarian beserkers more difficult to goad.  But they don't come at you with blades trailing serpentine smoke and flame...</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain is taking an Attack action, and will be rolling his Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.  <span id=\"flurryTarget\"></span></p><span id=\"activatedCharmsTarget\"></span><span id=\"dvAdjustmentsTarget\"></span><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>&quot;You are doomed, demon.  Even if your foul powers somehow lay me low, my family will marshal its legions and scorch the north bare to avenge me.&quot;</p><p>&quot;I expect when I send your soldiers home with your armour and both pieces of your daiklave they'll thank me for freeing them up for a more useful scion.&quot;</p><p>It'd almost be a shame to kill Crimson Rain and lose a source of amusement, but even now his attacks hit like meteorites.  You can't tempt poor luck forever.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain is taking an Attack action, and will be rolling his Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.  <span id=\"flurryTarget\"></span></p><span id=\"activatedCharmsTarget\"></span><span id=\"dvAdjustmentsTarget\"></span><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Unable to express his fury in words, Crimson Rain drives at you, striking all about him in a deranged flurry that showers you with sparks as jade grinds against stone.  Only one attack truly threatens you, but it is fuelled with what remains of his essence.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain is taking an Attack action, and will be rolling his Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.  <span id=\"flurryTarget\"></span></p><span id=\"activatedCharmsTarget\"></span><span id=\"dvAdjustmentsTarget\"></span><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            
            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_DEAD,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Somehow, the dying Crimson Rain manages to lurch to his feet, the blood pumping from his wounds igniting in a final flare of his anima.  He drives at you, incoherent with rage and pain, cutting wildly.</p><p>Your response is less parry than counterattack, slamming your daiklave into the notch left by the statue last night.  Orichalcum shears through jade and then flesh unimpeded, Crimson Rain's head rolling to a stop between the two halves of his broken weapon.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain's last Dying health level has been filled with lethal damage, and he is dead.  We think it's fun to add a little drama to the description of his death, don't you?</p><p><strong>Note:</strong> you must kill both Dragon Blooded to win this battle.  They are a danger to your mortal friends and countrymen, and cannot be allowed to live.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_DYING,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Crimson Rain's blood gushes from his body, spreading over the puzzle mosaic like a great red puddle.  Would he be ashamed that he bleeds no differently to the rabble you cut down in Lily's parlour?</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain is Dying.  This forces him to take the Inactive action (Speed 5, DVs set to 0), and inflicts an automatic level of lethal damage on him each time his action comes up.  Unlike bleeding damage, Exalts get no special dispensation here.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_CRIMSON_RAIN,
                action: COMBAT_ACTION_INCAPACITATED,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>The flames of Crimson Rain's anima are suddenly extinguished.  He collapses, blood running from joints of his armour.  He's no longer a threat.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Crimson Rain's Incapacitated health level has been filled.  This forces him to take the Inactive action (Speed 5, DVs set to 0).  He will continue to take that action every time his action comes up while his Incapacitated health level remains filled (which, without magical healing, it will).</p><p><strong>Note:</strong> you must kill (not Incapacitate) both Dragon Blooded to win this battle.  They are a danger to your mortal friends and countrymen, and cannot be allowed to live.</p>",
                actions: new Array()


            });


          tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_DEAD,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Vedara wipes the blood from her eyes and focuses them upon you, willing her body to one last effort.  She rises to a crouch, grasps her chakram, and...</p><p>...you pounce, swift as sunlight.  Your daiklave slides through her up to the hilt, pinning her to the ground.  Your off-hand holds her wrist; the chakram will fly no more.  Your face close to hers, you see the peace of acceptance come over her, and hear her final words as at last her Charm of silence breaks.</p><p>&quot;Take pity upon my House, warrior.&quot;</p>",
                currentActionText: true,
                currentActionHTML: "<p>Vedara's last Dying health level has been filled with lethal damage, and she is dead.  We've stunted her death for you.</p><p><strong>Note:</strong> you must kill both Dragon Blooded to win this battle.  They are a danger to your mortal friends and countrymen, and cannot be allowed to live.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_DYING,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>It is not so difficult to see Cathak Vedara now, her broken form propped up against a statue, her blood trickling through the patterns of the puzzle mosaic.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Vedara is Dying.  This forces her to take the Inactive action (Speed 5, DVs set to 0), and inflicts an automatic level of lethal damage on him each time her action comes up.  Unlike bleeding damage, Exalts get no special dispensation here.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_INCAPACITATED,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Vedara's body, no longer swift as the wind, no longer light as air, crashes into a statue and is still.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Vedara's Incapacitated health level has been filled.  This forces her to take the Inactive action (Speed 5, DVs set to 0).  She will continue to take that action every time her action comes up while her Incapacitated health level remains filled (which, without magical healing, it will).</p><p><strong>Note:</strong> you must kill (not Incapacitate) both Dragon Blooded to win this battle.  They are a danger to your mortal friends and countrymen, and cannot be allowed to live.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_SIMPLE_CHARM,
                key: CHARM_DRAGON_BLOODED_SHROUDING_THE_BODY_AND_MIND,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You feel the Air Aspect out there amongst the statues somewhere, but you can neither see nor hear her.  Dragon Blooded stealth magics are not to be underestimated.  You're sure she'll be unable to ambush you, but you've little hope of tracking her down until she makes her move.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Vedara has activated a Simple Charm, <em>Shrouding the Body and Mind</em>.  This renders her mostly invisible, leaving just a rippling blur in the air - check her &quot;Active Effects&quot; link in the combat tracker to see how this translates into mechanics.</p><p><strong>Activating Simple Charms</strong></p><p>Activating a Simple Charm is an action in its own right, defaulting to Speed 6/DV - 1 (Charms may overrule these values - <em>Shrouding the Body and Mind</em> has a speed of 5).  This may not be part of a flurry, so you may only activate one Simple Charm per action.</p><p>There is an exception, in that you may use a Simple Charm multiple times in combination with an Extra Action Charm.  If you do so, you must use the Simple Charm on every action of the magical flurry.  This is generally only useful for attacks (there's no point turning yourself invisible five times over), and usually cost-prohibitive.</p><p><strong>Immaculate Martial Arts</strong></p><p><em>Shrouding the Body and Mind, Air Dragon Form</em> and <em>Wind Dragon Speed</em> are excellent Charms, clearly superior to Crimson Rain's.  This is because Vedara is practicing a supernatural Martial Arts style, Air Dragon Style, that is more powerful than ordinary Dragon Blooded Charms.</p><p>The Dragon Blooded monks of the Immaculate Order possess the secrets of the Five Glorious Dragon Styles, groups of Martial Arts Charms of the power level normally reserved for Celestial Exalted, but adapted for the use of the Terrestrials.  Those attending the Order's Cloister of Wisdom may learn these styles if they have the aptitude, whether they intend to graduate as monks or return to secular life.  These Charms are difficult for a Dragon Blooded to master, so such characters will have less Charms than peers of a similar level of experience.  Both Meiling and Vedara attended the Cloister of Wisdom, but have only learned the easy half of their styles, as they need a number of normal Dragon Blooded Charms to fulfil their roles in society (social, military, stealth etc).  A monk can be expected to have more Immaculate Charms and less secular, and thus be more dangerous in battle.</p><p>Solar Charms are still more powerful than Celestial Martial Arts - the Immaculate Styles help narrow the gap, not close it - but Dragon Blooded using these styles will likely have a higher level of experience than player characters and should not be dismissed.</p> <div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_REESTABLISH_SURPRISE,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Still very nearly invisible, Vedara dives back and forth between statues, leaving an overlapping trail of rippling air.  She stops, but it's difficult to tell where.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Vedara is attempting to reestablish surprise by hiding.  This is normally an excellent tactic for assassins, though we must assume in this case she hasn't deduced that she's wasting her time due to <em>Surprise Anticipation Method</em>.</p><p><strong>Reestablishing Surprise</strong></p><p>Hiding during combat is a Speed 5/DV - 1 Miscellaneous action, rolling (Dexterity + Stealth) against reflexive (Wits + Awareness + 2) rolls of any opposed witnesses.  The acting character is hidden from any witness who fails to equal their successes, and will gain the benefits of surprise if they attack them.</p><p>Vedara can't use her Stealth Excellency to benefit this roll, as she's out of Personal motes and would be obliged to spend Peripheral, pushing her anima level up and making stealth difficult.  But she does gain a success bonus from <em>Shrouding the Body and Mind</em>.  Her pool is Dex 4 + Stealth 5 + Ambush specialty 3 + Stunt 2 + Conviction 4 (spent Willpower to activate) - multiple action penalty 3, or a total of 13.  We'll assume she rolls 6 successes (roughly average), plus 2 from <em>Shrouding the Body and Mind</em> for a total of 8.</p><p>Since you only need to equal her successes, your difficulty is 8.  Technically Meiling, the king, Shinichi etc. could also roll, but they're busy with their own combats.  Failing this roll will not expose you to surprise attack, so long as you have motes available for Surprise Anticipation Method, but it will prevent you from attacking Vedara until she reveals herself again.  Normally you can take a miscellaneous action to search for a hidden character, but as Vedara is both invisible and soundless, doing so is impossible without Charms to counteract her advantages.</p><div id=\"pcActionOptionsTarget\"></div>",
                actionDiceRoll: true,
                actionAttribute: CONSTANT_TRAIT_WITS,
                actionAbility: CONSTANT_TRAIT_AWARENESS,
                validVirtues: new Array(CONSTANT_TRAIT_VALOUR, CONSTANT_TRAIT_CONVICTION),
                actionStunts: new Array({

                    key: "sakuyaDBsVedaraReestablishesSurpriseStunt1",
                    used: false,
                    rating: 2,
                    text: "&quot;She may conceal her body and destroy the sound of her footsteps, but she cannot suppress her anima.  I look not for her but the tiny spurts of lightning following in her wake.&quot;"

                }, {

                    key: "sakuyaDBsVedaraReestablishesSurpriseStunt2",
                    used: false,
                    rating: 2,
                    text: "&quot;I leap about nearby statues, grabbing little bits of snow still remaining in their contours, and hurl them in the general direction of her last location.  Mostly I hit other statues, but a few splatter midair where they shouldn't.&quot;"

                }),
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_REESTABLISH_SURPRISE_SUCCESS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>It's no use, she's gone.  It's more irritating than dangerous, but you'll need to be on your guard.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You did not equal Vedara's successes, and she has successfully hidden.  You won't be able to attack her until she reveals herself, and you will be exposed to a surprise attack if you don't save a mote for Surprise Anticipation Method.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()
                
            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_REESTABLISH_SURPRISE_FAIL,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Her invisibility Charm is potent but not perfect.  Now that you've learned to recognise the ripple she leaves in the air, you can hunt her without difficulty.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You equalled Vedara's successes, spoiling her attempt to hide.  You can attack her normally, and she is unable to ambush you with a surprise attack.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()
                
            });


            //Vedara attacks - the first assumes ambush, the second an attempted ambush that may have failed, the rest her anima will be flaring and no more stealth possible.  All attacks except the first assume a double-chakram throw.

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>A ring of blue jade, razor-edged, spins out of the shadow of an ancient king to arc into your back.  Cathak Vedara has shown her hand.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Vedara is attacking from ambush, and will be rolling her Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.  <span id=\"surpriseTarget\"></span></p><span id=\"activatedCharmsTarget\"></span><span id=\"flurryTarget\"></span><p><strong>Revealed target</strong></p><p>Vedara has given away her position by attacking.  While the partial invisibility from <em>Shrouding the Body and Mind</em> levies a penalty on attack rolls against her, she needs to hide again if she wants to prevent attacks entirely.  As we'll see shortly, this is why she's flurrying.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Once again the blue jade razor spins out from cover, but this time it is shadowed by a twin, offset by a few centimetres.  Double-gashes appear on intervening statues as they slice towards you unimpeded by any obstruction.</p><p>With her anima beginning to flare and little hope of concealing her position, Vedara dashes in perfect silence perpendicular to the flight of her chakram - but a transparent ring shimmers in her invisible grasp!  Either artifact or technique is allowing Vedara to throw copies of her chakram rather than the weapon itself.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Vedara is taking an Attack action, and will be rolling her Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.  As she is not flurrying, this attack will benefit from her Air Dragon Style double-chakram effect.  <span id=\"surpriseTarget\"></span></p><span id=\"activatedCharmsTarget\"></span><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()

            });

            
            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Her anima too bright for stealth but her powerful Charms still shrouding sight and sound of her body, Vedara dances through the forest of statues with practiced grace, sending two more chakrams at your throat.</p><p>The eerie, deadly silence of her assault beside the bluster and impotent fury of Crimson Rain makes clear the true threat.  You wonder who assigned such a powerful operative to this insignificant satrapy.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Vedara is taking an Attack action, and will be rolling her Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.  As she is not flurrying, this attack will benefit from her Air Dragon Style double-chakram effect.  <span id=\"surpriseTarget\"></span></p><span id=\"activatedCharmsTarget\"></span><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()

            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>You can barely see her, but you can feel the intensity of Vedara's focus, the same cold eyes that followed you through the palace.  She cares nothing for the troops cut down by Makai's guard or swept aside by Meiling's power; she thinks of nothing but cutting you down.</p><p>Two more swift blue rings attempt to make good on that determination.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Vedara is taking an Attack action, and will be rolling her Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.  As she is not flurrying, this attack will benefit from her Air Dragon Style double-chakram effect.  <span id=\"surpriseTarget\"></span></p><span id=\"activatedCharmsTarget\"></span><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()

            });

            //This segment assumes Shrouding the Body and Mind has just dropped.  Obviously any changes to its duration or segment order could mess that up.

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>The shroud of air dissipates, and Cathak Vedara appears in the shadow of Queen Yakogoro, blue jade against old weathered stone.  She betrays no surprise at her Charm's failure, moving fluidly through the forms of her style, sending yet another pair of discs at your eyes.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Vedara is taking an Attack action, and will be rolling her Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.  As she is not flurrying, this attack will benefit from her Air Dragon Style double-chakram effect.  <span id=\"surpriseTarget\"></span></p><span id=\"activatedCharmsTarget\"></span><p><strong>Charm expiry</strong></p><p><em>Shrouding the Body and Mind</em> has a duration measured in actions.  Those actions are now up, so its effects end, and the motes committed to the Charm are released.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()

            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_PROMPT_DV_CHOICE,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>In the face of your seemingly invincible defence, Vedara falls back on her training.  Always in motion, rythmically sending paired copies of her chakram spinning towards you on essence-bolstered winds, trusting to the Dragons that you will fall before she.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Vedara is taking an Attack action, and will be rolling her Accuracy pool of <span id=\"attackPoolTarget\"></span> dice against your chosen defence.  As she is not flurrying, this attack will benefit from her Air Dragon Style double-chakram effect.  <span id=\"surpriseTarget\"></span></p><span id=\"activatedCharmsTarget\"></span><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });



            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_DAMAGE_SUCCESS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML:  "<p>If Vedara cries out as the razor edge of your daiklave passes through her flesh, none hear it; her Charm of silence holds.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You've inflicted damage - remember to click on Vedara's \"Wound Penalty\" on the combat tracker to see her health levels.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_DAMAGE_FAIL,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Cathak Vedara's armour is light, just as yours, but no less magical.  That blow would surely have spilled a mortal's blood, but her thin carapace of jade keeps her safe.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You rolled no damage successes, and your opponent is unhurt.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            
            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>Vedara has the grace of air, but you have the flawless excellence of the sun.  Wind cannot outrace light; she does not avoid your blade.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Vedara chose her Dodge DV to defend herself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>You strike true once more, anticipating Vedara's movements and exploiting them.</p><p>She maintains the impassive mask of an Exalted martial artist, but comprehension of your power must be assaulting her serenity.  She will break, and soon.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Vedara chose her Dodge DV to defend herself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>She is fast, her body lightened by the principles of her element, her movements polished by relentless drill.  Yet she is not faster than your blade.</p><p>A crack appears in the facade of the Air Dragon, a fleeting moment of despair.  Her best is not good enough to escape the daiklave of Sakuya Thrice-Elegant.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Vedara chose her Dodge DV to defend herself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: false,
                currentResponse: true,
                currentResponseHTML: "<p>You see fear, at last, as the Air Dragon dance fails to take her from the path of your daiklave.  She has trained since childhood in the most deadly art of her people, and yet the might of a newborn Chosen of the Unconquered Sun overwhelms her.  She will die here today, and her House will gain nothing but an invincible foe.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Vedara chose her Dodge DV to defend herself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_ATTACK_HIT,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>By now, the raw elemental fury surrounding Vedara reflects how little of her essence remains within, and misdirection is useless to her.  She has only her agility to protect her from your transcendent skill.</p><p>It is not enough.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Vedara chose her Dedge DV to defend herself, and it was applied as an external penalty to your roll.  You had successes left over, so your attack hit.  Your remaining successes are added as dice to the damage roll.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });



            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Every other opponent today has wielded a sword and sought to parry your cuts.  Not so Vedara.  Your cut is flawless, but she no longer occupies the space it passes through.</p><p>Her martial stance is superb, Meiling's equal, and speaks eloquently of a lifetime of relentless practice.  You see the supreme skill of her instructors in her every movement.  You had best summon all of your heroism if you wish to cut this woman.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>The dance of the Air Dragon defeats you again.  There is but a hair's breadth of space between Vedara's body and the golden arc of your blade, but it may as well be the width of the Inner Sea.  She spins behind the plinth of Queen Moriya and is outside your grasp.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            
            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>She but flexes her foot, and floats gracefully out of the murderous sweep of your daiklave, soaring backwards through the ranks of royalty.  Well, she looks regal enough.  It will be almost a pity to cut her down.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            
            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>She slips inside your cut, her anima crackling off the orichalcum of your breastplate.  Spinning, she ends behind you, not swiftly enough for a counterattack, but enough that you're obliged to shift your stance.</p><p>Is she tiring, and taking greater risks?  Or does she believe she's calculated your prowess, and has nothing to fear from your cuts?  Either way, you will demonstrate her folly.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });

            
            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You are hounding Vedara's mote reserves dry, but you can break neither her form nor her silence.  Her movements remain elegant as she slips from the arc of your blade once again, never motionless, never hurried.  She must feel the terror that comes from facing a Dawn caste upon the field of battle, but her discipline holds.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });


            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_SAKUYA_VEDARA,
                action: COMBAT_ACTION_ATTACK_MISS,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Her grace is astonishing, though she is nearly spent.  She instinctively dodges your cut with movements honed over a lifetime of training.  It becomes a little clearer why Sifu complains so bitterly about your footwork.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Your roll had no successes left after your opponent's DV was applied as an external penalty.  You miss.</p><div id=\"pcActionOptionsTarget\"></div>",
                actions: new Array()


            });



            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_PC_VICTORY,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>Where there were three dragons, there is but one, and she is yours.  No sooner had House Cathak slipped their leash about Makai's throat than it fell slack once more.</p><p>&quot;Lady Sakuya has slain your commanders.  Paddle back to the Isle as fast as your oars will take you, dogs, for you shall not have mercy of me again.&quot;  To their credit, the retreat of the legion at Meiling's declaration is orderly; their duty rendered impossible, they must return and seek orders.  You do not think they will menace the populous and risk failure to escape.</p>",
                currentActionText: true,
                currentActionHTML: "<p>You have slain both your Dragon Blooded opponents, proving yourself as an Exalted warrior and securing the safety of your allies.</p><p>At this point you may continue to the end of the tutorial, or replay the combat to make sure you understand the concepts of combat between Exalted opponents (Solar versus Dragon Blooded is one of the most common forms of conflict in the game, and while this tutorial can't hope to cover all of that space, you will find all the concepts introduced to be useful).  In particular, you should reset the combat and replay if you don't feel confident with the following rules:<ul><li>Magical flurries</li><li>Perfect defences</li><li>Anti-DV-penalty Charms (Bulwark Stance, Dipping Swallow Defence)</li><li>Ambush and Surprise Anticipation Method</li><li>Reestablishing surprise</li></ul></p><p>It's worth playing through more than once to get a feel for mote economy from stunts and how spending motes on attack or defence affects your fortunes.</p>",
                actions: new Array()


            });

            tempCombat.segmentBucket.push({

                combatant: COMBATANT_KEY_PC,
                action: COMBAT_ACTION_PC_DEFEAT,
                used: false,
                default: true,
                currentResponse: true,
                currentResponseHTML: "<p>You fall backwards, blood streaming freely from your wounds, and stretch your hand up to the sun with the last of your strength.  You were so powerful, so skilled - how did you fall?  Was it luck?  Hubris?  How did you fail the Unconquered Sun so soon?</p>",
                currentActionText: true,
                currentActionHTML: "<p>Ouch.  As you will have noted, the Dragon Blooded hit very hard indeed.  While they are common opponents for new Solar Exalted player characters, they are Exalted in their own right and splendidly equipped.  They are not to be taken lightly.</p><p>With her exceptional Parry DV, it's tempting to blame bad luck if Sakuya is hit.  But her Charms give you the tools to manage bad luck, and this is a valuable lesson in the risks posed to your own characters when you're playing at the table with your friends (where you will not receive a do-over!).  Invest in defence and use it to mitigate your risk.  Reset this combat and try a more conservative approach.</p>",
                actions: new Array()


            });


            //Stunts


            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsAttackStunt0",
                action: COMBAT_ACTION_ATTACK,
                used: false,
                rating: 2,
                text: "&quot;I wait until my target passes under the outstretched arm of Queen Kamishirasawa, and then pounce.  I take the queen's stone hand in mine, spinning around it to bring my daiklave down on a Dragon Blooded head.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsAttackStunt1",
                action: COMBAT_ACTION_ATTACK,
                used: false,
                rating: 2,
                text: "&quot;As my target leaps over the stairs down to Makai's tomb, I leap upon them and bounce off.  They land halfway down the stairs, I land on the edge, my daiklave slashing for their throat.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsAttackStunt2",
                action: COMBAT_ACTION_ATTACK,
                used: false,
                rating: 2,
                text: "&quot;I feint, landing in front of my opponent and telegraphing a slash.  They easily avoid it by leaping backwards, only to run into the elemental vortex of Meiling's anima.  Scrambling out of tetsubo range, they run into my impaling thrust.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsAttackStunt3",
                action: COMBAT_ACTION_ATTACK,
                used: false,
                rating: 2,
                text: "&quot;A Cathak banner hangs over the keep.  I soar up and cut it down, hurling it towards my opponent.  It disintegrates in their anima, but I burst through its wake, slashing at their face.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsAttackStunt4",
                action: COMBAT_ACTION_ATTACK,
                used: false,
                rating: 2,
                text: "&quot;With a prayer of apology for the sacrelige, I cut through the ankles of the statue of Queen Yamame.  She falls on my opponent as if gathering them in an embrace, and I sink my blade through Queen and Dynast both.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsAttackStunt5",
                action: COMBAT_ACTION_ATTACK,
                used: false,
                rating: 2,
                text: "&quot;As I skip from statue to statue, my target throws a hasty attack to break my relentless pursuit.  I parry, but it slices off the stone sword of Queen Momiji.  I catch the blade and dive onto the Dragon Blooded, shattering it against their jade armour.  The orichalcum that follows it, however...&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsAttackStunt6",
                action: COMBAT_ACTION_ATTACK,
                used: false,
                rating: 2,
                text: "&quot;Blazing animas have melted most of the remaining snow, and clear water ripples back and forth across the puzzle mosaic.  As my target passes over a mandala encapsulating the principle of opening, I intuit how to open their guard with my blade.  Skidding through the water, I offer my attack as a koan.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsAttackStunt7",
                action: COMBAT_ACTION_ATTACK,
                used: false,
                rating: 2,
                text: "&quot;I hear a yell from Shinichi as he closes inside the reach of a legionnaire to run him through.  I soar in, seize the spear falling from lifeless fingers, and hurl it at one of the Dragon Blooded commanders.  With a leap, I pass the spear mid-air, landing behind the target and completing my own pincer attack.&quot;"

            });

            
            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsFlurryStunt0",
                action: COMBAT_ACTION_FLURRY,
                used: false,
                rating: 2,
                text: "&quot;Queens Satori and Koishi were sisters that ritually traded the throne every year of their lives; as my target passes between their statues I skip from one to the other, launching a series of alternating attacks resonating with their interleaved reign.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsFlurryStunt1",
                action: COMBAT_ACTION_FLURRY,
                used: false,
                rating: 2,
                text: "&quot;One of my opponents draws too near the engagement between palace guard and legion.  Fearing their anima will murder the mortals, I use my own, appearing in the midst of the fray like the dawning sun.  As all parties recoil from the glare, I launch at the Dragon Blooded, each cut swifter than light.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsFlurryStunt2",
                action: COMBAT_ACTION_FLURRY,
                used: false,
                rating: 2,
                text: "&quot;I apologise to Queen Yasaka's ghost as I steal the bowl of rice offered to her this morning, then skip up to launch off her shoulders at my opponent.  As I descend, I hurl the bowl of rice, following with a storm of cuts to bisect every grain, and the Dragon Blooded caught amongst them.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsFlurryStunt3",
                action: COMBAT_ACTION_FLURRY,
                used: false,
                rating: 2,
                text: "&quot;I stand upon the grey stone shoulders of Queen Kazama the Peerless and flare my anima.  A pulse of light ripples over the courtyard, and a four-armed sword maiden appears above me, her gaze scorching the souls of my foes.  'I am the Chosen of the Dawn, here to bring the new day to those who have suffered under your tyranny.  You may kneel now, or reincarnate until you are willing.'  They do not kneel.  Kazama is bleached white with my light; I will stain her red with Dragon's blood.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsFlurryStunt4",
                action: COMBAT_ACTION_FLURRY,
                used: false,
                rating: 2,
                text: "&quot;There are sheafs of prayer-strips throughout the courtyard for the benefit of those paying respects; I seize one and then leap upon my opponent, sticking a strip to their armour with my free hand and then impaling it with my daiklave, over and over.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsFlurryStunt5",
                action: COMBAT_ACTION_FLURRY,
                used: false,
                rating: 2,
                text: "&quot;I drive my opponent back against the palace walls with a series of feints.  Their back against white stone, their movements are curtailed - but my sword is the blade that carved that walls, and my cuts will not be impeded.&quot;"

            });

            
            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsParryStunt0",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;King Yosuke stood back-to-back with his champion against the icewalkers and saved the city.  I brace my back against his and absorb the force of the blow with my blade.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsParryStunt1",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;I push down hard on the attack, grinding the weapon against the puzzle mosaic.  An arc of sparks rises as jade meets enchanted stone, neither willing to yield.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsParryStunt2",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;King Kanji kneels, but his acknowledgement of a Chosen of the Unconquered Sun does not diminish his aura of might.  Likewise, I am obliged out of respect for the Terrestrial Exalted to take a defensive stance against this attack, but it does not diminish my command of the battle.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsParryStunt3",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;'Not today' I snarl, stopping the weapon with my own and causing the pools of melted snow on the mosaic to ripple.  'Not any day.  You are no longer permitted to deny Creation its champions.'&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsParryStunt4",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;I rely on the benevolence of King Akihiko as I crouch on his shoulder, guiding my enemy's weapon into his shield.  The stone shatters, yielding instantly before the jade, but I am unharmed.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsParryStunt5",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;Two battles rage on the periphery of our duel.  My two opponents are seperated by their own tactics and mobility.  I hold the center.  In perfect harmony with all things, I find the imbalance in my enemy's attack and break their momentum.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsParryStunt6",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;I contemptuously knock the pitiful blow aside, accidentally sending the jade weapon through the statue of King Rinnosuke the Scholar.  Oops.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsParryStunt7",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;Four animas scourge this battlefield, but mine is the light of the Unconquered Sun, and my blade is not dull jade but mirror-bright orichalcum.  My parry not only deflects the weapon, but slashes at my opponent with a spray of searing light.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsParryStunt8",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;I propel myself off the statue of King Mutou the Teacher, pushing the enemy's weapon to the ground.  'If you will not kow-tow before Makai's heirs, your arsenal will!'&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsParryStunt9",
                action: COMBAT_ACTION_PARRY,
                used: false,
                rating: 2,
                text: "&quot;I feel the desperation in my opponent's blow, too much of their essence burning in their anima, what little remains fuelling this attack.  I feel the certainty of my victory, as I have hundreds of times before, and Makai a hundred thousand times before me, and stop the attack with the authority of a Prince of the Earth.&quot;"

            });


            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsDodgeStunt0",
                action: COMBAT_ACTION_DODGE,
                used: false,
                rating: 2,
                text: "&quot;I reflexively duck behind King Youki's statue, wincing as I realise I've doomed the priceless relic.  Miraculously the jade weapon simply deflects off the ancient stone, as if some of the father's invicible power protected his son still.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsDodgeStunt1",
                action: COMBAT_ACTION_DODGE,
                used: false,
                rating: 2,
                text: "&quot;I flare my anima, pouring a day's worth of sunlight onto one of the remaining patches of snow in an instant.  As it melts and runs across the stone, I skid through it to safety.&quot;"

            });

            tempCombat.stuntBucket.push({

                key: "sakuyaVsDBsDodgeStunt2",
                action: COMBAT_ACTION_DODGE,
                used: false,
                rating: 2,
                text: "&quot;I leap onto King Junpei's back to escape the blow, and I'm obliged to leap again when it slices him in half.  He wasn't a popular king or ancestor, so no loss.&quot;"

            });


            break;

    }


    return tempCombat;

}



function getCombatantByKey(combatantKey) {

    if (combatantKey == COMBATANT_KEY_PC) {

        return currentPC;

    }

    var tempCombatant = initialiseCharacter({});

    switch(combatantKey) {

        case COMBATANT_KEY_SAKUYA_SIFU_0:

            tempCombatant.key = COMBATANT_KEY_SAKUYA_SIFU_0;

            tempCombatant[CONSTANT_TRAIT_CHARACTER_NAME] = "Sifu";
            tempCombatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] = "Sifu";

            tempCombatant[CONSTANT_TRAIT_STRENGTH] = 3;
            tempCombatant[CONSTANT_TRAIT_DEXTERITY] = 4;
            tempCombatant[CONSTANT_TRAIT_STAMINA] = 3;

            tempCombatant[CONSTANT_TRAIT_WITS] = 3;

            tempCombatant[CONSTANT_TRAIT_MELEE] = 4;

            tempCombatant[CONSTANT_TRAIT_RESISTANCE] = 3;

            tempCombatant[CONSTANT_TRAIT_ATHLETICS] = 3;
            tempCombatant[CONSTANT_TRAIT_AWARENESS] = 4;
            tempCombatant[CONSTANT_TRAIT_DODGE] = 4;

            tempCombatant[CONSTANT_TRAIT_SPECIALTY].push({

                trait: CONSTANT_TRAIT_MELEE,
                specialty: CONSTANT_SPECIALTY_MELEE_SWORDS,
                favoured: true,
                socialCombat: false,
                label: CONSTANT_SPECIALTY_LABEL_MELEE_SWORDS,
                rating: 2

            });

            tempCombatant[CONSTANT_TRAIT_WILLPOWER] = 7;
            tempCombatant[CONSTANT_TRAIT_WILLPOWER_CURRENT] = 7;

            tempCombatant[CONSTANT_TRAIT_COMPASSION] = 2;
            tempCombatant[CONSTANT_TRAIT_COMPASSION_CURRENT] = 2;

            tempCombatant[CONSTANT_TRAIT_TEMPERANCE] = 3;
            tempCombatant[CONSTANT_TRAIT_TEMPERANCE_CURRENT] = 3;

            tempCombatant[CONSTANT_TRAIT_CONVICTION] = 2;
            tempCombatant[CONSTANT_TRAIT_CONVICTION_CURRENT] = 2;

            tempCombatant[CONSTANT_TRAIT_VALOUR] = 3;
            tempCombatant[CONSTANT_TRAIT_VALOUR_CURRENT] = 3;

            tempCombatant[CONSTANT_TRAIT_ARMOUR] = {

                type: CONSTANT_SOAK_TYPE_ARMOUR,
                label: "Buff Jacket",
                bashing: 4,
                lethal: 3,
                mobility: -1,
                fatigue: 2

            };


            tempCombatant[CONSTANT_TRAIT_WEAPON] = {

                label: "Wooden Practice Sword",
                type: CONSTANT_WEAPON_TYPE_SWORD,
                ability: CONSTANT_TRAIT_MELEE,
                specialty: CONSTANT_SPECIALTY_MELEE_SWORDS,
                attackType: CONSTANT_ATTACK_TYPE_MELEE,
                speed: 4,
                accuracy: 1,
                damage: 3,
                damageType: DAMAGE_TYPE_BASHING,
                defence: 0,
                rate: 3,
                range: "-",
                tags: "-"

            };


            /* tempCombatant[CONSTANT_TRAIT_EQUIPMENT].push({

                label: "Buckler",
                description: "<p>A small shield, easily wielded but providing only limited protection (+1 DV cover bonus versus hand-to-hand attacks)</p>",
                type: CONSTANT_WEAPON_TYPE_SHIELD,
                meleeBonus: 1,
                rangedBonus: 0,
                mobility: 0

            });



            tempCombatant[CONSTANT_TRAIT_BUFFS].push({

                type: CONSTANT_BUFF_SHIELD_BONUS_MELEE,
                source: "Buckler",
                magnitude: 1

            });  */

            tempCombatant[CONSTANT_TRAIT_HEALTH].push({

                penalty: CONSTANT_TRAIT_HEALTH_DYING,
                filled: false,
                damageType: DAMAGE_TYPE_NONE


            });

            tempCombatant[CONSTANT_TRAIT_HEALTH].push({

                penalty: CONSTANT_TRAIT_HEALTH_DYING,
                filled: false,
                damageType: DAMAGE_TYPE_NONE


            });

            tempCombatant[CONSTANT_TRAIT_COMBAT_AI] = function () {

                if (!flags[FLAG_SAKUYA_SIFU_FIGHT_USED_GUARD]) {

                    return function () {

                        flags[FLAG_SAKUYA_SIFU_FIGHT_USED_GUARD] = true;
                        flags[FLAG_GUARD_UNLOCKED] = true;
                        guardAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_SIFU_0));

                    };

                }

                if (!flags[FLAG_SAKUYA_SIFU_FIGHT_USED_AIM]) {

                    return function () {

                        flags[FLAG_SAKUYA_SIFU_FIGHT_USED_AIM] = true;
                        flags[FLAG_AIM_UNLOCKED] = true;
                        aimAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_SIFU_0));

                    };

                }


                return function () {

                    attackAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_SIFU_0), COMBATANT_KEY_PC, false);

                };



            };


            break;



       case COMBATANT_KEY_SAKUYA_AWOL_GOON_0:

            tempCombatant[CONSTANT_TRAIT_HEROIC] = false;
            
            tempCombatant.key = COMBATANT_KEY_SAKUYA_AWOL_GOON_0;
            

            tempCombatant[CONSTANT_TRAIT_CHARACTER_NAME] = "Veteran Soldier";
            tempCombatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] = "Veteran";

            tempCombatant[CONSTANT_TRAIT_STRENGTH] = 3;
            tempCombatant[CONSTANT_TRAIT_DEXTERITY] = 3;
            //tempCombatant[CONSTANT_TRAIT_DEXTERITY] = 50;
            tempCombatant[CONSTANT_TRAIT_STAMINA] = 3;

            tempCombatant[CONSTANT_TRAIT_WITS] = 3;

            tempCombatant[CONSTANT_TRAIT_MELEE] = 3;

            tempCombatant[CONSTANT_TRAIT_RESISTANCE] = 3;

            tempCombatant[CONSTANT_TRAIT_ATHLETICS] = 3;
            tempCombatant[CONSTANT_TRAIT_AWARENESS] = 3;
            tempCombatant[CONSTANT_TRAIT_DODGE] = 3;

            tempCombatant[CONSTANT_TRAIT_ARMOUR] = {

                type: CONSTANT_SOAK_TYPE_ARMOUR,
                label: "Lamellar",
                bashing: 8,
                lethal: 6,
                mobility: -2,
                fatigue: 1,
                hardness: "-"

            };

            tempCombatant[CONSTANT_TRAIT_BUFFS].push({

                type: CONSTANT_BUFF_MOBILITY_PENALTY,
                source: "Armour",
                magnitude: 2

            });


            tempCombatant[CONSTANT_TRAIT_WEAPON] = {

                label: "Straight Sword",
                type: CONSTANT_WEAPON_TYPE_SWORD,
                ability: CONSTANT_TRAIT_MELEE,
                specialty: CONSTANT_SPECIALTY_MELEE_SWORDS,
                attackType: CONSTANT_ATTACK_TYPE_MELEE,
                speed: 5,
                accuracy: 2,
                damage: 3,
                damageType: DAMAGE_TYPE_LETHAL,
                defence: 1,
                rate: 2,
                range: "-",
                tags: "-"

            };


            tempCombatant[CONSTANT_TRAIT_HEALTH].push({

                penalty: CONSTANT_TRAIT_HEALTH_DYING,
                filled: false,
                damageType: DAMAGE_TYPE_NONE


            });

            tempCombatant[CONSTANT_TRAIT_HEALTH].push({

                penalty: CONSTANT_TRAIT_HEALTH_DYING,
                filled: false,
                damageType: DAMAGE_TYPE_NONE


            });

            applyDamage(tempCombatant, DAMAGE_TYPE_BASHING, 2);

            tempCombatant[CONSTANT_TRAIT_COMBAT_AI] = function () {
        
                if (!(isAlive(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_0)))) {

                    return function() {

                        deadAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_0));            

                    }

                }        

                if (getCurrentWoundPenalty(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_0)) == CONSTANT_TRAIT_HEALTH_DYING) {

                    return function() {

                        dyingAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_0));            

                    }

                }   


                if (isIncapacitated(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_0))) {

                    return function() {

                        incapacitatedAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_0));            

                    }

                }


                return function () {

                    attackAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_0), COMBATANT_KEY_PC, false);

                };

            };

            break;

       case COMBATANT_KEY_SAKUYA_AWOL_GOON_1:

            tempCombatant[CONSTANT_TRAIT_HEROIC] = false;
            tempCombatant[CONSTANT_TRAIT_EXTRA] = true;

            tempCombatant.key = COMBATANT_KEY_SAKUYA_AWOL_GOON_1;

            tempCombatant[CONSTANT_TRAIT_CHARACTER_NAME] = "Drunken Militia 1";
            tempCombatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] = "Militia 1";

            tempCombatant[CONSTANT_TRAIT_STRENGTH] = 2;
            tempCombatant[CONSTANT_TRAIT_DEXTERITY] = 2;
            tempCombatant[CONSTANT_TRAIT_STAMINA] = 2;

            tempCombatant[CONSTANT_TRAIT_WITS] = 1;

            tempCombatant[CONSTANT_TRAIT_MELEE] = 2;

            tempCombatant[CONSTANT_TRAIT_RESISTANCE] = 2;

            tempCombatant[CONSTANT_TRAIT_ATHLETICS] = 2;
            tempCombatant[CONSTANT_TRAIT_AWARENESS] = 1;
            tempCombatant[CONSTANT_TRAIT_DODGE] = 2;

            tempCombatant[CONSTANT_TRAIT_ARMOUR] = {

                type: CONSTANT_SOAK_TYPE_ARMOUR,
                label: "Breastplate",
                bashing: 2,
                lethal: 4,
                mobility: -1,
                fatigue: 1,
                hardness: "-"

            };

            tempCombatant[CONSTANT_TRAIT_BUFFS].push({

                type: CONSTANT_BUFF_MOBILITY_PENALTY,
                source: "Armour",
                magnitude: 1

            });


            tempCombatant[CONSTANT_TRAIT_WEAPON] = {

                label: "Straight Sword",
                type: CONSTANT_WEAPON_TYPE_SWORD,
                ability: CONSTANT_TRAIT_MELEE,
                specialty: CONSTANT_SPECIALTY_MELEE_SWORDS,
                attackType: CONSTANT_ATTACK_TYPE_MELEE,
                speed: 5,
                accuracy: 2,
                damage: 3,
                damageType: DAMAGE_TYPE_LETHAL,
                defence: 1,
                rate: 2,
                range: "-",
                tags: "-"

            };


            tempCombatant[CONSTANT_TRAIT_HEALTH] = getExtraHealth();

            tempCombatant[CONSTANT_TRAIT_COMBAT_AI] = function () {

                if (!(isAlive(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_1)))) {

                    return function() {

                        deadAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_1));            

                    }

                }        

                if (getCurrentWoundPenalty(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_1)) == CONSTANT_TRAIT_HEALTH_DYING) {

                    return function() {

                        dyingAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_1));            

                    }

                }   


                if (isIncapacitated(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_1))) {

                    return function() {

                        incapacitatedAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_1));            

                    }

                }
                
                 return function () {

                        attackAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_1), COMBATANT_KEY_PC, false);

                    };

            };

            
            break;


       case COMBATANT_KEY_SAKUYA_AWOL_GOON_2:

            tempCombatant[CONSTANT_TRAIT_HEROIC] = false;
            tempCombatant[CONSTANT_TRAIT_EXTRA] = true;

            tempCombatant.key = COMBATANT_KEY_SAKUYA_AWOL_GOON_2;

            tempCombatant[CONSTANT_TRAIT_CHARACTER_NAME] = "Drunken Militia 2";
            tempCombatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] = "Militia 2";

            tempCombatant[CONSTANT_TRAIT_STRENGTH] = 2;
            tempCombatant[CONSTANT_TRAIT_DEXTERITY] = 2;
            tempCombatant[CONSTANT_TRAIT_STAMINA] = 2;

            tempCombatant[CONSTANT_TRAIT_WITS] = 1;

            tempCombatant[CONSTANT_TRAIT_MELEE] = 2;

            tempCombatant[CONSTANT_TRAIT_RESISTANCE] = 2;

            tempCombatant[CONSTANT_TRAIT_ATHLETICS] = 2;
            tempCombatant[CONSTANT_TRAIT_AWARENESS] = 1;
            tempCombatant[CONSTANT_TRAIT_DODGE] = 2;

            tempCombatant[CONSTANT_TRAIT_ARMOUR] = {

                type: CONSTANT_SOAK_TYPE_ARMOUR,
                label: "Breastplate",
                bashing: 2,
                lethal: 4,
                mobility: -1,
                fatigue: 1,
                hardness: "-"

            };

            tempCombatant[CONSTANT_TRAIT_BUFFS].push({

                type: CONSTANT_BUFF_MOBILITY_PENALTY,
                source: "Armour",
                magnitude: 1

            });

            tempCombatant[CONSTANT_TRAIT_WEAPON] = {

                label: "Straight Sword",
                type: CONSTANT_WEAPON_TYPE_SWORD,
                ability: CONSTANT_TRAIT_MELEE,
                specialty: CONSTANT_SPECIALTY_MELEE_SWORDS,
                attackType: CONSTANT_ATTACK_TYPE_MELEE,
                speed: 5,
                accuracy: 2,
                damage: 3,
                damageType: DAMAGE_TYPE_LETHAL,
                defence: 1,
                rate: 2,
                range: "-",
                tags: "-"

            };


            tempCombatant[CONSTANT_TRAIT_HEALTH] = getExtraHealth();

            tempCombatant[CONSTANT_TRAIT_COMBAT_AI] = function () {
       
                if (!(isAlive(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_2)))) {

                    return function() {

                        deadAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_2));            

                    }

                }        

                if (getCurrentWoundPenalty(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_2)) == CONSTANT_TRAIT_HEALTH_DYING) {

                    return function() {

                        dyingAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_2));            

                    }

                }   


                if (isIncapacitated(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_2))) {

                    return function() {

                        incapacitatedAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_2));            

                    }

                }       
                
                 return function () {

                        attackAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_2), COMBATANT_KEY_PC, false);

                    };

            };

            
            break;

       case COMBATANT_KEY_SAKUYA_AWOL_GOON_3:

            tempCombatant[CONSTANT_TRAIT_HEROIC] = false;
            tempCombatant[CONSTANT_TRAIT_EXTRA] = true;

            tempCombatant.key = COMBATANT_KEY_SAKUYA_AWOL_GOON_3;

            tempCombatant[CONSTANT_TRAIT_CHARACTER_NAME] = "Drunken Militia 3";
            tempCombatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] = "Militia 3";

            tempCombatant[CONSTANT_TRAIT_STRENGTH] = 2;
            tempCombatant[CONSTANT_TRAIT_DEXTERITY] = 2;
            tempCombatant[CONSTANT_TRAIT_STAMINA] = 2;

            tempCombatant[CONSTANT_TRAIT_WITS] = 1;

            tempCombatant[CONSTANT_TRAIT_MELEE] = 2;

            tempCombatant[CONSTANT_TRAIT_RESISTANCE] = 2;

            tempCombatant[CONSTANT_TRAIT_ATHLETICS] = 2;
            tempCombatant[CONSTANT_TRAIT_AWARENESS] = 1;
            tempCombatant[CONSTANT_TRAIT_DODGE] = 2;

            tempCombatant[CONSTANT_TRAIT_ARMOUR] = {

                type: CONSTANT_SOAK_TYPE_ARMOUR,
                label: "Breastplate",
                bashing: 2,
                lethal: 4,
                mobility: -1,
                fatigue: 1,
                hardness: "-"

            };

            tempCombatant[CONSTANT_TRAIT_BUFFS].push({

                type: CONSTANT_BUFF_MOBILITY_PENALTY,
                source: "Armour",
                magnitude: 1

            });


            tempCombatant[CONSTANT_TRAIT_WEAPON] = {

                label: "Straight Sword",
                type: CONSTANT_WEAPON_TYPE_SWORD,
                ability: CONSTANT_TRAIT_MELEE,
                specialty: CONSTANT_SPECIALTY_MELEE_SWORDS,
                attackType: CONSTANT_ATTACK_TYPE_MELEE,
                speed: 5,
                accuracy: 2,
                damage: 3,
                damageType: DAMAGE_TYPE_LETHAL,
                defence: 1,
                rate: 2,
                range: "-",
                tags: "-"

            };


            tempCombatant[CONSTANT_TRAIT_HEALTH] = getExtraHealth();

            tempCombatant[CONSTANT_TRAIT_COMBAT_AI] = function () {

                if (!(isAlive(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_3)))) {

                    return function() {

                        deadAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_3));            

                    }

                }        

                if (getCurrentWoundPenalty(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_3)) == CONSTANT_TRAIT_HEALTH_DYING) {

                    return function() {

                        dyingAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_3));            

                    }

                }   


                if (isIncapacitated(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_3))) {

                    return function() {

                        incapacitatedAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_3));            

                    }

                }
                
                 return function () {

                        attackAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_3), COMBATANT_KEY_PC, false);

                    };

            };

            
            break;


       case COMBATANT_KEY_SAKUYA_AWOL_GOON_4:

            tempCombatant[CONSTANT_TRAIT_HEROIC] = false;
            tempCombatant[CONSTANT_TRAIT_EXTRA] = true;

            tempCombatant.key = COMBATANT_KEY_SAKUYA_AWOL_GOON_4;

            tempCombatant[CONSTANT_TRAIT_CHARACTER_NAME] = "Drunken Militia 4";
            tempCombatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] = "Militia 4";

            tempCombatant[CONSTANT_TRAIT_STRENGTH] = 2;
            tempCombatant[CONSTANT_TRAIT_DEXTERITY] = 2;
            tempCombatant[CONSTANT_TRAIT_STAMINA] = 2;

            tempCombatant[CONSTANT_TRAIT_WITS] = 1;

            tempCombatant[CONSTANT_TRAIT_MELEE] = 2;

            tempCombatant[CONSTANT_TRAIT_RESISTANCE] = 2;

            tempCombatant[CONSTANT_TRAIT_ATHLETICS] = 2;
            tempCombatant[CONSTANT_TRAIT_AWARENESS] = 1;
            tempCombatant[CONSTANT_TRAIT_DODGE] = 2;

            tempCombatant[CONSTANT_TRAIT_ARMOUR] = {

                type: CONSTANT_SOAK_TYPE_ARMOUR,
                label: "Breastplate",
                bashing: 2,
                lethal: 4,
                mobility: -1,
                fatigue: 1,
                hardness: "-"

            };

            tempCombatant[CONSTANT_TRAIT_BUFFS].push({

                type: CONSTANT_BUFF_MOBILITY_PENALTY,
                source: "Armour",
                magnitude: 1

            });


            tempCombatant[CONSTANT_TRAIT_WEAPON] = {

                label: "Straight Sword",
                type: CONSTANT_WEAPON_TYPE_SWORD,
                ability: CONSTANT_TRAIT_MELEE,
                specialty: CONSTANT_SPECIALTY_MELEE_SWORDS,
                attackType: CONSTANT_ATTACK_TYPE_MELEE,
                speed: 4,
                accuracy: 2,
                damage: 3,
                damageType: DAMAGE_TYPE_LETHAL,
                defence: 1,
                rate: 2,
                range: "-",
                tags: "-"

            };


            tempCombatant[CONSTANT_TRAIT_HEALTH] = getExtraHealth();

            tempCombatant[CONSTANT_TRAIT_COMBAT_AI] = function () {

                if (!(isAlive(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_4)))) {

                    return function() {

                        deadAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_4));            

                    }

                }        

                if (getCurrentWoundPenalty(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_4)) == CONSTANT_TRAIT_HEALTH_DYING) {

                    return function() {

                        dyingAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_4));            

                    }

                }   


                if (isIncapacitated(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_4))) {

                    return function() {

                        incapacitatedAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_4));            

                    }

                }
                
                 return function () {

                        attackAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_AWOL_GOON_4), COMBATANT_KEY_PC, false);

                    };

            };

            
            break;


    case COMBATANT_KEY_SAKUYA_CRIMSON_RAIN:

            tempCombatant.key = COMBATANT_KEY_SAKUYA_CRIMSON_RAIN;

            tempCombatant[CONSTANT_TRAIT_CHARACTER_NAME] = "Cathak Crimson Rain";
            tempCombatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] = "Crimson Rain";

            tempCombatant[CONSTANT_TRAIT_CHARACTER_TYPE] = TRAIT_VALUE_TYPE_DRAGON_BLOODED;
            tempCombatant[CONSTANT_TRAIT_CASTE] = TRAIT_VALUE_ASPECT_FIRE;
            tempCombatant[CONSTANT_TRAIT_EXALTED] = true;

            tempCombatant[CONSTANT_TRAIT_STRENGTH] = 3;
            tempCombatant[CONSTANT_TRAIT_DEXTERITY] = 4;
            tempCombatant[CONSTANT_TRAIT_STAMINA] = 3;

            tempCombatant[CONSTANT_TRAIT_WITS] = 3;

            tempCombatant[CONSTANT_TRAIT_PRESENCE] = 4;

            tempCombatant[CONSTANT_TRAIT_AWARENESS] = 2;

            tempCombatant[CONSTANT_TRAIT_RESISTANCE] = 3;

            tempCombatant[CONSTANT_TRAIT_ATHLETICS] = 4;

            tempCombatant[CONSTANT_TRAIT_DODGE] = 3;

            tempCombatant[CONSTANT_TRAIT_MELEE] = 5;

            tempCombatant[CONSTANT_TRAIT_SPECIALTY].push({

                trait: CONSTANT_TRAIT_MELEE,
                specialty: CONSTANT_SPECIALTY_MELEE_SWORDS,
                favoured: true,
                socialCombat: false,
                label: CONSTANT_SPECIALTY_LABEL_MELEE_SWORDS,
                rating: 2

            });

            tempCombatant[CONSTANT_TRAIT_WILLPOWER] = 6;
            tempCombatant[CONSTANT_TRAIT_WILLPOWER_CURRENT] = 6;

            tempCombatant[CONSTANT_TRAIT_COMPASSION] = 1;
            tempCombatant[CONSTANT_TRAIT_COMPASSION_CURRENT] = 1;

            tempCombatant[CONSTANT_TRAIT_TEMPERANCE] = 2;
            tempCombatant[CONSTANT_TRAIT_TEMPERANCE_CURRENT] = 2;

            tempCombatant[CONSTANT_TRAIT_CONVICTION] = 3;
            tempCombatant[CONSTANT_TRAIT_CONVICTION_CURRENT] = 3;

            tempCombatant[CONSTANT_TRAIT_VALOUR] = 3;
            tempCombatant[CONSTANT_TRAIT_VALOUR_CURRENT] = 3;

            tempCombatant[CONSTANT_TRAIT_ESSENCE] = 3;

            tempCombatant.getPersonalMax = dbPersonalMax;
            tempCombatant.getPeripheralMax = dbPeripheralMax;

            tempCombatant[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] = 12;

            tempCombatant[CONSTANT_TRAIT_CHARMS].push(CHARM_DRAGON_BLOODED_FIRST_MELEE_EXCELLENCY);
            tempCombatant[CONSTANT_TRAIT_CHARMS].push(CHARM_DRAGON_BLOODED_DRAGON_GRACED_WEAPON_FIRE);
            tempCombatant[CONSTANT_TRAIT_CHARMS].push(CHARM_DRAGON_BLOODED_RINGING_ANVIL_ONSLAUGHT);

            tempCombatant[CONSTANT_TRAIT_CHARMS].push(CHARM_DRAGON_BLOODED_FALLING_STAR_MANEUVER);
            tempCombatant[CONSTANT_TRAIT_CHARMS].push(CHARM_DRAGON_BLOODED_BELLOWS_PUMPING_STRIDE);

            addCharmBuffsToCharacter(tempCombatant, CHARM_DRAGON_BLOODED_BELLOWS_PUMPING_STRIDE);

            tempCombatant[CONSTANT_TRAIT_ARMOUR] = {

                type: CONSTANT_SOAK_TYPE_ARMOUR,
                label: "Jade Articulated Plate",
                bashing: 14,
                lethal: 12,
                mobility: -2,
                fatigue: 0,
                hardness: true,
                hardnessLethal: 8,
                hardnessBashing: 8

            };

            tempCombatant[CONSTANT_TRAIT_BUFFS].push({

                type: CONSTANT_BUFF_MOBILITY_PENALTY,
                source: "Armour",
                magnitude: 2

            });


            tempCombatant[CONSTANT_TRAIT_WEAPON] = {

                label: "Jade Daiklave",
                type: CONSTANT_WEAPON_TYPE_SWORD,
                ability: CONSTANT_TRAIT_MELEE,
                specialty: CONSTANT_SPECIALTY_MELEE_SWORDS,
                attackType: CONSTANT_ATTACK_TYPE_MELEE,
                speed: 4,
                accuracy: 2,
                damage: 5,
                damageType: DAMAGE_TYPE_LETHAL,
                defence: 2,
                rate: 3,
                range: "-",
                tags: "O(2)",
                overwhelming: 2

            };

            tempCombatant[CONSTANT_TRAIT_COMBAT_AI] = function () {

                    if (!(isAlive(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN)))) {

                        return function() {

                            deadAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN));            
                            flags[FLAG_SAKUYA_CRIMSON_RAIN_DEAD] = true;

                        }

                    }        

                    if (getCurrentWoundPenalty(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN)) == CONSTANT_TRAIT_HEALTH_DYING) {

                        return function() {

                            dyingAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN));            

                        }

                    }   


                    if (isIncapacitated(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN))) {

                        return function() {

                            incapacitatedAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN));            

                        }

                    }

                if ((!flags[FLAG_SAKUYA_CRIMSON_RAIN_USED_EA_CHARM]) && getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN).hasMotes(charmLibrary[CHARM_DRAGON_BLOODED_RINGING_ANVIL_ONSLAUGHT].costMotes)) {
                
                    getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN).spendMotes(charmLibrary[CHARM_DRAGON_BLOODED_RINGING_ANVIL_ONSLAUGHT].costMotes);

                    flags[FLAG_SAKUYA_CRIMSON_RAIN_USED_EA_CHARM] = true;
                
                    return function () {

                        flurryAction(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN), 4, "", {}, [function() {
                    
                            var charms = {};

                            charms["charm0"] = {

                                key: CHARM_DRAGON_BLOODED_DRAGON_GRACED_WEAPON_FIRE,
                                preferredPool: PREFERRED_POOL_ANY,
                                motes: 1

                            }

                            var willpower = getWPSpendAsBonus(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN), {type: CONSTANT_WP_VIRTUE_CHANNEL, virtue: CONSTANT_TRAIT_VALOUR});

                            if (willpower.type === CONSTANT_BONUS_INVALID) {

                                willpower = getWPSpendAsBonus(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN), {type: CONSTANT_WP_VIRTUE_CHANNEL, virtue: CONSTANT_TRAIT_CONVICTION});

                            }
                    
                            attackAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN), COMBATANT_KEY_PC, willpower, charms);
                    
                    
                    
                        }, function() {
                    
                            var charms = {};

                            charms["charm0"] = {

                                key: CHARM_DRAGON_BLOODED_DRAGON_GRACED_WEAPON_FIRE,
                                preferredPool: PREFERRED_POOL_ANY,
                                motes: 1

                            }

                            var willpower = getWPSpendAsBonus(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN), {type: CONSTANT_WP_VIRTUE_CHANNEL, virtue: CONSTANT_TRAIT_VALOUR});

                            if (willpower.type === CONSTANT_BONUS_INVALID) {

                                willpower = getWPSpendAsBonus(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN), {type: CONSTANT_WP_VIRTUE_CHANNEL, virtue: CONSTANT_TRAIT_CONVICTION});

                            }
                    
                            attackAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN), COMBATANT_KEY_PC, willpower, charms);                        
                    
                    
                    
                         }, function() {
                    
                            var charms = {};

                            charms["charm0"] = {

                                key: CHARM_DRAGON_BLOODED_DRAGON_GRACED_WEAPON_FIRE,
                                preferredPool: PREFERRED_POOL_ANY,
                                motes: 1

                            }

                            var willpower = getWPSpendAsBonus(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN), {type: CONSTANT_WP_VIRTUE_CHANNEL, virtue: CONSTANT_TRAIT_VALOUR});

                            if (willpower.type === CONSTANT_BONUS_INVALID) {

                                willpower = getWPSpendAsBonus(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN), {type: CONSTANT_WP_VIRTUE_CHANNEL, virtue: CONSTANT_TRAIT_CONVICTION});

                            }
                    
                            attackAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN), COMBATANT_KEY_PC, willpower, charms);                        
                    
                        }, function() {
                    
                            var charms = {};

                            charms["charm0"] = {

                                key: CHARM_DRAGON_BLOODED_DRAGON_GRACED_WEAPON_FIRE,
                                preferredPool: PREFERRED_POOL_ANY,
                                motes: 1

                            }

                            var willpower = getWPSpendAsBonus(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN), {type: CONSTANT_WP_VIRTUE_CHANNEL, virtue: CONSTANT_TRAIT_VALOUR});

                            if (willpower.type === CONSTANT_BONUS_INVALID) {

                                willpower = getWPSpendAsBonus(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN), {type: CONSTANT_WP_VIRTUE_CHANNEL, virtue: CONSTANT_TRAIT_CONVICTION});

                            }
                    
                            attackAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN), COMBATANT_KEY_PC, willpower, charms);                        
                    
                        }], true);
                

                    }

                }


                return function () {

                    var charms = {};

                    charms["charm0"] = {

                        key: CHARM_DRAGON_BLOODED_FIRST_MELEE_EXCELLENCY,
                        preferredPool: PREFERRED_POOL_ANY,
                        motes: 3,
                        actionPool: {

                            attribute: CONSTANT_TRAIT_DEXTERITY,
                            ability: CONSTANT_TRAIT_MELEE,
                            specialty: CONSTANT_SPECIALTY_MELEE_SWORDS

                        }

                    }

                    charms["charm1"] = {

                        key: CHARM_DRAGON_BLOODED_DRAGON_GRACED_WEAPON_FIRE,
                        preferredPool: PREFERRED_POOL_ANY,
                        motes: 1

                    }

                    charms["charm2"] = {

                        key: CHARM_DRAGON_BLOODED_FALLING_STAR_MANEUVER,
                        preferredPool: PREFERRED_POOL_ANY,
                        motes: 3

                    }

                    var willpower = getWPSpendAsBonus(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN), {type: CONSTANT_WP_VIRTUE_CHANNEL, virtue: CONSTANT_TRAIT_VALOUR});

                    if (willpower.type === CONSTANT_BONUS_INVALID) {

                        willpower = getWPSpendAsBonus(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN), {type: CONSTANT_WP_VIRTUE_CHANNEL, virtue: CONSTANT_TRAIT_CONVICTION});

                    }

                    attackAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_CRIMSON_RAIN), COMBATANT_KEY_PC, willpower, charms);

                };

            };

            tempCombatant.closeDVDeltaWithCharms = function (dvDelta) {

                //This is unsophisticated, assuming only Sakuya as an opponent (eg no need to go beserk avoiding a huge killstick or bad touch), and that parry is the only DV likely to be used
               
                var dv = 0;

                var label = "";

                var motesSpent = 0;

                var dvAdded = 0;

                var diceAdded;


                //1st Melee Excellency

                motesSpent = dvDelta;

                if (motesSpent > 3) {

                    motesSpent = 3;

                }

                if (flags[FLAG_SAKUYA_CRIMSON_RAIN_USED_EA_CHARM] || this.hasMotes(motesSpent + 4)) {
                 
                    if (this.spendMotes(motesSpent)) {

                        diceAdded = motesSpent * 2;
                        label += "+" + diceAdded + " dice - First Melee Excellency; ";
                        dv += motesSpent;
                    }
                
                }

                //All done

                if (!(label === "")) {

                    label = "<p><strong>Activated Charm Bonuses:</strong> " + label + "</p>";

                }

                return {

                    dv: dv,
                    label: label

                }

            };


           tempCombatant[CONSTANT_TRAIT_HEALTH].push({

                penalty: CONSTANT_TRAIT_HEALTH_DYING,
                filled: false,
                damageType: DAMAGE_TYPE_NONE


            });

            tempCombatant[CONSTANT_TRAIT_HEALTH].push({

                penalty: CONSTANT_TRAIT_HEALTH_DYING,
                filled: false,
                damageType: DAMAGE_TYPE_NONE


            });

            tempCombatant[CONSTANT_TRAIT_PERSONAL_CURRENT] = tempCombatant.getPersonalCap();  //Needs to be after Breeding :)
            tempCombatant[CONSTANT_TRAIT_PERIPHERAL_CURRENT] = tempCombatant.getPeripheralCap();

           break;


    case COMBATANT_KEY_SAKUYA_VEDARA:

            tempCombatant.key = COMBATANT_KEY_SAKUYA_VEDARA;

            tempCombatant.hidden = true;

            tempCombatant[CONSTANT_TRAIT_CHARACTER_NAME] = "Cathak Vedara";
            tempCombatant[CONSTANT_TRAIT_CHARACTER_SHORT_NAME] = "Vedara";

            tempCombatant[CONSTANT_TRAIT_CHARACTER_TYPE] = TRAIT_VALUE_TYPE_DRAGON_BLOODED;
            tempCombatant[CONSTANT_TRAIT_CASTE] = TRAIT_VALUE_ASPECT_AIR;
            tempCombatant[CONSTANT_TRAIT_EXALTED] = true;

            tempCombatant[CONSTANT_TRAIT_STRENGTH] = 3;
            tempCombatant[CONSTANT_TRAIT_DEXTERITY] = 4;
            tempCombatant[CONSTANT_TRAIT_STAMINA] = 3;

            tempCombatant[CONSTANT_TRAIT_WITS] = 3;

            tempCombatant[CONSTANT_TRAIT_STEALTH] = 5;

            tempCombatant[CONSTANT_TRAIT_AWARENESS] = 4;

            tempCombatant[CONSTANT_TRAIT_RESISTANCE] = 3;

            tempCombatant[CONSTANT_TRAIT_ATHLETICS] = 4;

            tempCombatant[CONSTANT_TRAIT_DODGE] = 5;

            tempCombatant[CONSTANT_TRAIT_MARTIAL_ARTS] = 5;

            tempCombatant[CONSTANT_TRAIT_SPECIALTY].push({

                trait: CONSTANT_TRAIT_MARTIAL_ARTS,
                specialty: CONSTANT_SPECIALTY_MARTIAL_ARTS_CHAKRAM,
                favoured: true,
                socialCombat: false,
                label: CONSTANT_SPECIALTY_LABEL_MARTIAL_ARTS_CHAKRAM,
                rating: 3

            });

            tempCombatant[CONSTANT_TRAIT_SPECIALTY].push({

                trait: CONSTANT_TRAIT_STEALTH,
                specialty: CONSTANT_SPECIALTY_STEALTH_AMBUSH,
                favoured: true,
                socialCombat: false,
                label: CONSTANT_SPECIALTY_LABEL_STEALTH_AMBUSH,
                rating: 3

            });

            

           
           tempCombatant[CONSTANT_TRAIT_BACKGROUND].push({

                key: CONSTANT_BACKGROUND_KEY_BREEDING,
                rating: 2,
                characterText: "<p>Vedara is of excellent stock.</p>"

            });            
            
            
            tempCombatant[CONSTANT_TRAIT_WILLPOWER] = 6;
            tempCombatant[CONSTANT_TRAIT_WILLPOWER_CURRENT] = 6;

            tempCombatant[CONSTANT_TRAIT_COMPASSION] = 1;
            tempCombatant[CONSTANT_TRAIT_COMPASSION_CURRENT] = 1;

            tempCombatant[CONSTANT_TRAIT_TEMPERANCE] = 2;
            tempCombatant[CONSTANT_TRAIT_TEMPERANCE_CURRENT] = 2;

            tempCombatant[CONSTANT_TRAIT_CONVICTION] = 4;
            tempCombatant[CONSTANT_TRAIT_CONVICTION_CURRENT] = 4;

            tempCombatant[CONSTANT_TRAIT_VALOUR] = 3;
            tempCombatant[CONSTANT_TRAIT_VALOUR_CURRENT] = 3;

            tempCombatant[CONSTANT_TRAIT_ESSENCE] = 3;

            tempCombatant.getPersonalMax = dbPersonalMax;
            tempCombatant.getPeripheralMax = dbPeripheralMax;

            tempCombatant[CONSTANT_TRAIT_COMMITTED_PERSONAL] = 6;

            tempCombatant[CONSTANT_TRAIT_COMMITTED_PERIPHERAL] = 7;

            tempCombatant[CONSTANT_TRAIT_CHARMS].push(CHARM_DRAGON_BLOODED_FIRST_STEALTH_EXCELLENCY);
            tempCombatant[CONSTANT_TRAIT_CHARMS].push(CHARM_DRAGON_BLOODED_SOUNDLESS_ACTION_PRANA);

            tempCombatant[CONSTANT_TRAIT_CHARMS].push(CHARM_DRAGON_BLOODED_FIRST_MARTIAL_ARTS_EXCELLENCY);
            tempCombatant[CONSTANT_TRAIT_CHARMS].push(CHARM_DRAGON_BLOODED_WIND_DRAGON_SPEED);
            tempCombatant[CONSTANT_TRAIT_CHARMS].push(CHARM_DRAGON_BLOODED_SHROUDING_THE_BODY_AND_MIND);
            tempCombatant[CONSTANT_TRAIT_CHARMS].push(CHARM_DRAGON_BLOODED_AIR_DRAGON_FORM);

            tempCombatant[CONSTANT_TRAIT_CHARMS].push(CHARM_DRAGON_BLOODED_FIRST_DODGE_EXCELLENCY);

            addCharmBuffsToCharacter(tempCombatant, CHARM_DRAGON_BLOODED_SOUNDLESS_ACTION_PRANA);
            addCharmBuffsToCharacter(tempCombatant, CHARM_DRAGON_BLOODED_AIR_DRAGON_FORM);
            
            tempCombatant[CONSTANT_TRAIT_BUFFS].push({

                type: CONSTANT_BUFF_AIR_DRAGON_STYLE,
                source: "Air Dragon Style",
                duration: BUFF_DURATION_PERMANENT,
                magnitude: 0

            });

            tempCombatant[CONSTANT_TRAIT_ARMOUR] = {

                type: CONSTANT_SOAK_TYPE_ARMOUR,
                label: "Jade Breastplate",
                bashing: 4,
                lethal: 6,
                mobility: 0,
                fatigue: 0,
                hardness: true,
                hardnessLethal: 2,
                hardnessBashing: 2

            };

            tempCombatant[CONSTANT_TRAIT_WEAPON] = {

                label: "Infinite Jade Chakram",
                type: CONSTANT_WEAPON_TYPE_CHAKRAM,
                ability: CONSTANT_TRAIT_MARTIAL_ARTS,
                specialty: CONSTANT_SPECIALTY_MARTIAL_ARTS_CHAKRAM,
                attackType: CONSTANT_ATTACK_TYPE_MELEE,
                speed: 4,
                accuracy: 0,
                damage: 4,
                damageType: DAMAGE_TYPE_LETHAL,
                defence: 0,
                rate: 4,
                range: "60",
                ranged: true,
                tags: "O(2)",
                overwhelming: 2

            };

            tempCombatant[CONSTANT_TRAIT_COMBAT_AI] = function () {

            
                    if (!(isAlive(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA)))) {

                        return function() {

                            deadAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA));   
                            flags[FLAG_SAKUYA_VEDARA_DEAD] = true;         

                        }

                    }        

                    if (getCurrentWoundPenalty(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA)) == CONSTANT_TRAIT_HEALTH_DYING) {

                        return function() {

                            dyingAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA));            

                        }

                    }   


                    if (isIncapacitated(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA))) {

                        return function() {

                            incapacitatedAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA));            

                        }

                    }


                if ((!flags[FLAG_SAKUYA_VEDARA_USED_SHROUDING]) && getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA).hasMotes(charmLibrary[CHARM_DRAGON_BLOODED_SHROUDING_THE_BODY_AND_MIND].costMotes)) {

                    flags[FLAG_SAKUYA_VEDARA_USED_SHROUDING] = true;

                    return function() {

                        simpleCharmAction(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA), CHARM_DRAGON_BLOODED_SHROUDING_THE_BODY_AND_MIND, PREFERRED_POOL_PERSONAL_FIRST);

                    }

                }


                if (!flags[FLAG_SAKUYA_VEDARA_AMBUSH]) {

                    flags[FLAG_SAKUYA_VEDARA_AMBUSH] = true;

                    return function () {

                        flurryAction(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA), 2, "", {}, [function() {

                            getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA).hidden = false;

                            currentPC.surprised = true;

                            var charms = {};

                            charms["charm0"] = {

                                key: CHARM_DRAGON_BLOODED_FIRST_MARTIAL_ARTS_EXCELLENCY,
                                preferredPool: PREFERRED_POOL_PERSONAL_FIRST,
                                motes: 1,
                                actionPool: {

                                    attribute: CONSTANT_TRAIT_DEXTERITY,
                                    ability: CONSTANT_TRAIT_MARTIAL_ARTS,
                                    specialty: CONSTANT_SPECIALTY_MARTIAL_ARTS_CHAKRAM

                                }

                            }

                            var willpower = getWPSpendAsBonus(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA), {type: CONSTANT_WP_VIRTUE_CHANNEL, virtue: CONSTANT_TRAIT_CONVICTION});

                            if (willpower.type === CONSTANT_BONUS_INVALID) {

                                willpower = getWPSpendAsBonus(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA), {type: CONSTANT_WP_VIRTUE_CHANNEL, virtue: CONSTANT_TRAIT_VALOUR});

                            }

                            attackAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA), COMBATANT_KEY_PC, willpower, charms);

                        }, function () {

                            getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA).stunt(2);

                            var willpower = getWPSpendAsBonus(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA), {type: CONSTANT_WP_VIRTUE_CHANNEL, virtue: CONSTANT_TRAIT_CONVICTION});

                            var difficulty = 8; //This could be rolled out, but whatever.  It's the presumed successes of Vedara's roll (incl. Shrouding), minus one.
                            
                            npcReestablishSurpriseAction(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA), difficulty);

                        }]);

                    };


                }

                return function () {

                    if (getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA).hidden) {

                        currentPC.surprised = true;
                        
                    }

                    getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA).hidden = false;

                    var charms = {};

                    charms["charm0"] = {

                        key: CHARM_DRAGON_BLOODED_FIRST_MARTIAL_ARTS_EXCELLENCY,
                        preferredPool: PREFERRED_POOL_ANY,
                        motes: 1,
                        actionPool: {

                            attribute: CONSTANT_TRAIT_DEXTERITY,
                            ability: CONSTANT_TRAIT_MARTIAL_ARTS,
                            specialty: CONSTANT_SPECIALTY_MARTIAL_ARTS_CHAKRAM

                        }

                    }

                    charms["charm1"] = {

                        key: CHARM_DRAGON_BLOODED_WIND_DRAGON_SPEED,
                        preferredPool: PREFERRED_POOL_ANY,
                        motes: 2

                    }

                        var willpower = getWPSpendAsBonus(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA), {type: CONSTANT_WP_VIRTUE_CHANNEL, virtue: CONSTANT_TRAIT_CONVICTION});

                        if (willpower.type === CONSTANT_BONUS_INVALID) {

                            willpower = getWPSpendAsBonus(getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA), {type: CONSTANT_WP_VIRTUE_CHANNEL, virtue: CONSTANT_TRAIT_VALOUR});

                        }

                        attackAction(currentCombat, getCombatCombatant(currentCombat, COMBATANT_KEY_SAKUYA_VEDARA), COMBATANT_KEY_PC, willpower, charms);

                };

            };

            tempCombatant.closeDVDeltaWithCharms = function (dvDelta) {

                //This is unsophisticated, assuming only Sakuya as an opponent (eg no need to go beserk avoiding a huge killstick or bad touch), and that Dodge is the only DV likely to be used
                //Also pays surcharge manually, sigh
               
                var dv = 0;

                var label = "";

                var motesSpent = 0;

                var dvAdded = 0;

                var diceAdded;


                //1st Dodge Excellency

                motesSpent = dvDelta;

                if (motesSpent > 3) {

                    motesSpent = 3;

                }

                if (this.spendMotes(motesSpent + 1)) {  //Surcharge

                    diceAdded = motesSpent * 2;
                    
                    if (diceAdded > 5) {

                        diceAdded = 5;  //No specialties, sadness

                    }
                    
                    label += "+" + diceAdded + " dice - First Dodge Excellency; ";
                    dv += motesSpent;
                }
                

                //All done

                if (!(label === "")) {

                    label = "<p><strong>Activated Charm Bonuses:</strong> " + label + "</p>";

                }

                return {

                    dv: dv,
                    label: label

                }

            };

           tempCombatant[CONSTANT_TRAIT_HEALTH].push({

                penalty: CONSTANT_TRAIT_HEALTH_DYING,
                filled: false,
                damageType: DAMAGE_TYPE_NONE


            });

            tempCombatant[CONSTANT_TRAIT_HEALTH].push({

                penalty: CONSTANT_TRAIT_HEALTH_DYING,
                filled: false,
                damageType: DAMAGE_TYPE_NONE


            });

            tempCombatant[CONSTANT_TRAIT_PERSONAL_CURRENT] = tempCombatant.getPersonalCap();  //Needs to be after Breeding :)
            tempCombatant[CONSTANT_TRAIT_PERIPHERAL_CURRENT] = tempCombatant.getPeripheralCap();

           break;


    }

    return tempCombatant;

}


