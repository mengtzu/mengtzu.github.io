//This is a big factory for making what are essentially the view objects.

//This could be replaced by a lookup to a database or AJAX call or whatever.


function getSegmentObjectByKey(segmentKey) {


    var returnObject = {};


    switch (segmentKey) {

        case SEGMENT_KEY_NEXT_TICK:

            returnObject = {

                key: SEGMENT_KEY_NEXT_TICK,
                currentResponse: false,
                currentActionText: true,
                currentActionHTML: "<p>No actions to resolve, proceed to next tick.</p>",
                actions: new Array()

            };

            returnObject.actions.push({

                id: "segmentNextTickAction0",
                type: "button",
                value: "Next Tick",
                functionKey: FUNCTION_KEY_NEXT_TICK

            });

            return returnObject;
            break;

        
        case SEGMENT_KEY_NEXT_TICK_SOCIAL:

            returnObject = {

                key: SEGMENT_KEY_NEXT_TICK_SOCIAL,
                currentResponse: false,
                currentActionText: true,
                currentActionHTML: "<p>No actions to resolve, proceed to next tick.</p>",
                actions: new Array()

            };

            returnObject.actions.push({

                id: "segmentNextTickAction0",
                type: "button",
                value: "Next Tick",
                functionKey: FUNCTION_KEY_NEXT_TICK_SOCIAL

            });

            return returnObject;
            break;



        case SEGMENT_KEY_SAKUYA_0:

            returnObject = {

                key: SEGMENT_KEY_SAKUYA_0,
                currentResponse: true,
                currentResponseHTML: "<p>\"Champion, the misfortunes of this poor shrine are beneath your notice.  Do not trouble yourself over a trifling accident of the weather\".</p><p>You do not recognise the young guard who is at such pains to move you on from the ruined shrine.  He has recognised you - Sakuya Thrice-Elegant, champion of the king of Makai, first sword of the Winter Tiger School - but his superiors have clearly not warned him of the danger of your curiosity.</p><p>The shrine certainly appears to have been demolished by a storm, but the city suffered no more than a moderate snow last night.  Nor would the smallfolk turn a blind eye to the destruction of the house that venerated their beloved ancestors and served as home for a kindly priest - and yet they avoid the scene, finding excuses to take other streets.</p><p>You are not a woman given to leaving well enough alone.</p>",
                currentActionText: true,
                currentActionHTML: " <p>With Sakuya's abilities as a detective, it's easy for her to make some preliminary deductions on the situation at the shrine just from what she can see from outside.</p><p>In <em>Exalted</em>, we roll dice to determine how well a character performs on a task.  We use 10 sided dice, with the number rolled depending on your character's talent, skill and other advantages.</p>",
                actions: new Array()
            }

            returnObject.actions.push({

                id: "segment0action0",
                type: "button",
                value: "Click here to highlight Sakuya's relevant traits",
                functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_0_FUNCTION_0

            });

            return returnObject;
            break;


        case SEGMENT_KEY_SAKUYA_1:

            returnObject = {

                key: SEGMENT_KEY_SAKUYA_1,
                currentResponse: false,
                currentActionText: true,
                currentActionHTML: "<p>Most rolls are made with a pool of dice equal to the number of dots the character has in one <strong>Attribute</strong>, one <strong>Ability</strong> and any relevant <b>Specialties</b>.</p><p>Sakuya is looking for clues to what's going on at the shrine, a task that relies on her <strong>Perception</strong> Attribute, and her <strong>Investigation</strong> Ability.  She has an Investigation specialty in \"Physical Clues\", so those dots count as well.  You'll roll 13 dice for this action.</p>",
                actions: new Array()
            }

            returnObject.actions.push({

                id: "segment1action0",
                type: "button",
                value: "Click here to roll Sakuya's Investigation pool and deduce what happened to the Shrine",
                functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_1_FUNCTION_0

            });

            return returnObject;

            break;


        case SEGMENT_KEY_SAKUYA_2:

            returnObject = {

                key: SEGMENT_KEY_SAKUYA_2,
                currentResponse: true,
                currentResponseHTML: "<p>The shrine has not completely collapsed, and a few of the guard's colleagues can be seen moving around awkwardly inside.  Whatever force hit the old building did so from inside, and the smell of ash and cinders is far beyond what you'd expect for a priest's little hearth.</p><p>You need to get inside and properly go over the scene.  The guard's feeble cover-up had already signalled it was worth your attention, but you're sure there's much more to this than a few soldiers saving face.</p>",
                currentActionText: true,
                currentActionHTML: "<p>Sakuya succeeds!</p><p>When we roll dice in <em>Exalted</em>, we're looking for successes.  Any dice that show 7 or higher is a success (for heroic individuals like Sakuya, dice showing 0 count as two successes).  You count those dice and compare the number of successes to the roll's <strong>difficulty</strong>.  If it's equal or higher, your character succeeds at whatever she was attempting to do.</p><p>The difficulty for this roll was only one, and you had dice showing 7 or higher, so you succeeded.</p><p>The number of successes you scored in excess of the difficulty is called the <strong>threshold</strong>, and it often serves as a bonus.  In this situation, we're only interested in Sakuya beating the difficulty.</p>",
                actions: new Array()
            }


            returnObject.actions.push({

                id: "segment2action0",
                type: "button",
                value: "Continue",
                functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_2_FUNCTION_0

            });

            return returnObject;

            break;

        case SEGMENT_KEY_SAKUYA_3:

            returnObject = {

                key: SEGMENT_KEY_SAKUYA_3,
                currentResponse: false,
                currentActionText: true,
                currentActionHTML: "<p>Sakuya failed.</p><p>When we roll dice in <em>Exalted</em>, we're looking for successes.  Any dice that show 7 or higher is a success (for heroic individuals like Sakuya, dice showing 0 count as two successes).  You count those dice and compare the number of successes to the roll's <strong>difficulty</strong>.  If it's equal or higher, your character succeeds at whatever she was attempting to do.</p><p>The difficulty for this roll was only one, but you didn't roll any successes at all, so Sakuya fails to figure out what happened to the shrine.  That's an extremely unlikely outcome with 13 dice - you can expect to reliably get about half as many successes as you rolled dice.</p><p>Failure is bad for the character, but not the game - it wouldn't have dice rolls unless either result was potentially interesting.  When playing at the table with friends, it's best to roll with the punches and try to enjoy the drama of your character's failures.  However, since this is the very first action of the tutorial and we'd like you to see a successful roll before moving on, this time you can roll the dice again.</p>",
                actions: new Array()
            }

            returnObject.actions.push({

                id: "segment1action0",
                type: "button",
                value: "Click here to reroll Sakuya's Investigation pool and pretend this never happened",
                functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_1_FUNCTION_0

            });

            return returnObject;

            break;

        case SEGMENT_KEY_SAKUYA_4:

            returnObject = {

                key: SEGMENT_KEY_SAKUYA_4,
                currentResponse: false,
                currentActionText: true,
                currentActionHTML: "<p>Sakuya botched.</p><p>When we roll dice in <em>Exalted</em>, we're looking for successes.  Any dice that show 7 or higher is a success (for heroic individuals like Sakuya, dice showing 0 count as two successes).  You count those dice and compare the number of successes to the roll's <strong>difficulty</strong>.  If it's equal or higher, your character succeeds at whatever she was attempting to do.</p><p>Botches are fantastically unlikely on pools of 13 dice, so you can congratulate yourself on getting a very rare result.  I'm typing this half-suspecting that no other human eyes will ever read it, so thanks for making sure it was worthwhile :)</p><p>Botches, while bad for the character, can introduce fun drama.  If it happens while you're playing around the table with your friends, it's best to just roll with the punches and enjoy it.  However, since this is the very first action of the tutorial and I'd like you to see a successful roll before moving on, this time you can roll the dice again.</p>",
                actions: new Array()
            }

            returnObject.actions.push({

                id: "segment1action0",
                type: "button",
                value: "Click here to reroll Sakuya's Investigation pool and pretend this never happened",
                functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_1_FUNCTION_0

            });

            return returnObject;

            break;


        case SEGMENT_KEY_SAKUYA_5:

            returnObject = {

                key: SEGMENT_KEY_SAKUYA_5,
                currentResponse: true,
                currentResponseHTML: "<p>\"Lady Sakuya, please, allow the guard to handle this.  If my captain has to explain to the king that his champion wasted her day doing our work for us...\"</p><p>Your determined expression betrays you; he's growing increasingly desperate to put you off.</p><p>Too bad for him.  If he was the sort of person who could prevent you from doing as you please, you'd know his name.</p>",
                currentActionText: true,
                currentActionHTML: "<p>A magnificent detective like Sakuya can get a feel for a crime scene in an instant, but only one of the Exalted can hope to see all the clues at a glance.  A thorough investigation of a location takes fifteen minutes, so Sakuya doesn't have time to be stonewalled by some fresh conscript.  She has to get inside!</p>",
                actions: new Array()
            }


            returnObject.actions.push({

                id: "segment5action0",
                type: "button",
                value: "Order him out of the way",
                functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_5_FUNCTION_0

            });

            returnObject.actions.push({

                id: "segment5action1",
                type: "button",
                value: "Push past him",
                functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_5_FUNCTION_1

            });

            returnObject.actions.push({

                id: "segment5action2",
                type: "button",
                value: "Ask who his captain is",
                functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_5_FUNCTION_2

            });

            return returnObject;

            break;

    



        case SEGMENT_KEY_SAKUYA_6:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_6,
                    currentResponse: true,
                    currentResponseHTML: "<p>\"Young man, you've said the word 'champion' twice, as if you knew who I was, and yet you're making the mistake of standing in my way.\"</p><p>The guard swallows, looks at the sword on your hip as if seeing it for the first time, then leaps out of your path. He bows deeply, choking out an apology.</p><p>You suppose that did come out more threat than order.  You probably could have worded that better - well, <em>someone else</em> could have worded it better.  One of your ex-wives was a diplomat; you could rely on her to smooth over your social difficulties, but there was no-one to smooth over things with her...</p><p>Forgetting the guard, you duck under the broken lintel of the shrine and make your way into the ruin.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>Note Sakuya's Influence background (currently highlighted on the character sheet, click for a description).  Backgrounds are traits that reflect the character's circumstances, like social rank or possessions, rather than their skills or talents.  They are rarely rolled, instead giving opportunities to roll, resources to spend or simply allowing the character to get her way in the right circumstances.</p><p>In this case, Sakuya's Influence tells us that while she doesn't have a formal rank that would let her order around our guard friend, she is a famous warrior with plenty of political clout; he can't afford to mess with her and has already pushed his luck.</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment6action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_6_FUNCTION_0

                });

                return returnObject;

                break;

      

        case SEGMENT_KEY_SAKUYA_7:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_7,
                    currentResponse: true,
                    currentResponseHTML: "<p>You frown at the guard and give him a light shove to get him out of the way.  You note with bemusement that his balance and reactions are terrible as he keels over into the snow.  He sputters indignantly for a moment before remembering who he's dealing with and throws a feeble salute.</p><p>You sometimes forget how slow and unsteady on their feet others can be - one of your wives had been terribly clumsy, always dropping things and tumbling into the snow.  It was adorable until she decided to visit you on the walls during a siege...</p><p>Forgetting the guard, you duck under the broken lintel of the shrine and make your way into the ruin.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>Note Sakuya's Influence background (currently highlighted on the character sheet, click for a description).  Backgrounds are traits that reflect the character's circumstances, like social rank or possessions, rather than their skills or talents.  They are rarely rolled, instead giving opportunities to roll, resources to spend or simply allowing the character to get her way in the right circumstances.</p><p>In this case, Sakuya's Influence tells us that while she doesn't have a formal rank that would let her order around our guard friend, she is a famous warrior with plenty of political clout; he can't afford to mess with her and has already pushed his luck.</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment6action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_6_FUNCTION_0

                });

                return returnObject;

                break;

       

        case SEGMENT_KEY_SAKUYA_8:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_8,
                    currentResponse: true,
                    currentResponseHTML: "<p>\"Who is this captain, boy?\"</p><p>\"Captain Shinichi, my Lady.\"</p><p>There can't be two Shinichis serving the king as captains.  You're surprised your brother-in-law hadn't better prepared his subordinate.</p><p>\"Shinichi holds his position due to my influence.  You may think it's your duty to keep me out of his hair, but rest assured your captain won't thank you if I'm in a bad mood when I do see him.\"</p><p>The guard opens his mouth and closes it again several times, trying to formulate a response that won't incur your infamous temper (or worse, provoke you into learning his name).  He settles for a smart salute and waves you on through.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>Note Sakuya's Influence background (currently highlighted on the character sheet, click for a description).  Backgrounds are traits that reflect the character's circumstances, like social rank or possessions, rather than their skills or talents.  They are rarely rolled, instead giving opportunities to roll, resources to spend or simply allowing the character to get her way in the right circumstances.</p><p>In this case, Sakuya's Influence tells us that while she doesn't have a formal rank that would let her order around our guard friend, she is a famous warrior with plenty of political clout; he can't afford to mess with her and has already pushed his luck.</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment6action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_6_FUNCTION_0

                });

                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_9:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_9,
                    currentResponse: true,
                    currentResponseHTML: "<p>The shrine isn't in danger of total collapse, but most of the walls are not where they should be, with the ceiling held up by the random rubble it fell on.   Charred wood and stone are everywhere.  There's enough room for several soldiers to move around, but the taller ones are continually ducking their heads, as you are obliged to yourself.</p><p>You recognise their captain, though soot and dust obscure his heraldry.</p><p>\"Good morning, Shinichi.  Has Kaguya forgiven me yet?\"</p><p>\"She divorced you for killing her father.  Try reincarnating a few times if you're looking for forgiveness.\"</p><p>\"He was a rebel who threatened the life of the king and was a terrible boor at our wedding.  She didn't like him any more than you or I did!\"</p><p>\"Yes, but you didn't have to make him bleed quite so much.  Kaguya has sworn never to take another wife, devoting herself to filial piety.  She's a nun, praying to the ancestors and living in a shrine much like this one.\"</p><p>\"But intact, I presume.  What happened here?\"</p><p>\"A storm.  Maybe the ancestors were displeased?\"</p><p>\"They're more like to be displeased that you're lying to me on sacred ground.\"</p><p>\"Sakuya, if it isn't a storm then it's something that would risk everyone's lives to be curious about...so it's a storm.\"</p><p>\"Then I must inspect the storm damage closely, that I can describe it to the king.  He will be gravely concerned if we've displeased the ancestors.\"</p><p>You know you can't verbally outmanoeuvre Shinichi, but he knows just as well that he doesn't have the authority to stop you, and that you're impossible to dislodge once set on your path.  Time to give the scene a thorough inspection.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>In <em>Exalted</em>, as with most role-playing games, there's often long stretches of conversation in which no dice are rolled.  There is a system - called Social Combat, which we'll learn about later - where many dice are rolled to sway the hearts and minds of others.  But in this situation Sakuya has no real chance of persuading Shinichi to cooperate (see her Manipulation Attribute and Presence Ability - not good), and thanks to her Influence doesn't need to.  Shinichi for his part has no hope of persuading the amazingly stubborn Sakuya to leave well enough alone (see her Integrity Ability and Willpower trait).</p><p>It's fun to play out their conversation, but there's no need to roll any dice, as there's no meaningful conflict - it's just a preamble to the real action of Sakuya's detailed investigation of the scene.</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment9action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_9_FUNCTION_0

                });

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_10:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_10,
                    currentResponse: false,
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Stunts</strong><p>Stunts are the signature of heroic characters in <em>Exalted</em>, and arguably the heart of the game.  They are a reward for describing your character's actions in an interesting manner, granting bonus dice to any relevant rolls.</p><p>Simply stating your action isn't a stunt, and receives no bonus dice.</p><p>A <strong>one die stunt</strong> requires you describe the action without repeating an earlier description</p><p>A <strong>two dice stunt</strong> has the same requirements as a one die stunt, plus you must describe interacting with the environment or riffing on the ongoing drama of the scene.</p><p>Stunts are adjudicated as if you'd described the simplest possible way to get the mechanical result you want.  Cosmetic flourishes don't add to the difficulty.</p><p><strong>Try it yourself!</strong></p><p>Sakuya will be making a thorough investigation of the shrine.  This will be the same roll as before - Perception + Investigation (+ the relevant specialty) - but will take fifteen minutes of in-character time and allow her to find all the clues if you roll well enough.</p><p>As a two dice stunt only requires adding a short, novel description that somehow interacts with the environment, it's worth stunting all but the most trivial of actions.  See if you can get +2 dice by choosing from the options below:</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment10action0",
                    type: "button",
                    value: "&quot;I investigate the scene.&quot;",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_10_FUNCTION_0

                });

                returnObject.actions.push({

                    id: "segment10action1",
                    type: "button",
                    value: "&quot;I recall the last time a shrine collapsed like this - which really was the fury of the ancestors - comparing the incidents.&quot;",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_10_FUNCTION_1

                });

                returnObject.actions.push({

                    id: "segment10action2",
                    type: "button",
                    value: "&quot;I brush my fingers lightly over the cracks in the walls, following the fault-lines around until I reach one of Shinichi's soldiers.  Then I apologise - a little passive-aggressively - and move on.&quot;",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_10_FUNCTION_2

                });

                returnObject.actions.push({

                    id: "segment10action3",
                    type: "button",
                    value: "&quot;I move into the center of the awkward, ruined space and crouch to the ground.  There is an unmistakeable metallic ring as I draw my sword, then plunge it into the floor.  With two fingers very lightly on the pommel, I close my eyes and feel the vibration of my blow ringing out into the temple and then reflecting back up into the blade.  I feel every piece of fractured stone and splintered wood, hear every place so fragile that even this small force moves it, and envision the shrine as it was.  I reconstruct what sort of forces could have caused the destruction - what angle they came from, at what height they must have originated, slowly piecing together what must have inevitably been their source.  After a quarter hour of meditation, I open my eyes and turn to Shinichi.  'This shrine suffered amazing punishment, Shinichi.  I guess you can say that it's just like my case...built on solid foundations.'&quot;",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_10_FUNCTION_3

                });


                return returnObject;

                break;


            
            case SEGMENT_KEY_SAKUYA_11:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_11,
                    currentResponse: true,
                    currentResponseHTML: "<p>You investigate the scene.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>That's...not a stunt.  It's OK not to stunt every action, but it's worthwhile to stunt most of them.  Remember that while you get the mechanical reward, it's to the benefit of everyone at the table to have variety and connection to the scene in every description.  A little bit goes a long way in making your shared story more vivid and cohesive.</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment11action0",
                    type: "button",
                    value: "Roll the dice",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_11_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_12:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_12,
                    currentResponse: true,
                    currentResponseHTML: "<p>You recall the last time a shrine collapsed like this - which really was the fury of the ancestors - comparing the incidents.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>That's a <strong>1 die stunt</strong>.  It's a novel description of the action, but doesn't involve the present scene in any way, so it misses out on the extra die.  Part of the purpose of stunting is to make the group's shared story more cohesive; constantly reinforcing the scenery in each description helps everyone have a similar picture in their heads, stopping the action from seeming like it's happening in a vaccum.</p><p>That being said, adding interconnection to the story with references to past events (including those you made up on the spot) is a cool thing to do with stunts.</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment12action0",
                    type: "button",
                    value: "Roll the dice",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_12_FUNCTION_0

                });

                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_13:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_13,
                    currentResponse: true,
                    currentResponseHTML: "<p>You brush your fingers lightly over the cracks in the walls, following the fault-lines around until you reach one of Shinichi's soldiers.  Then you apologise - a little passive-aggressively - and move on.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>That's a <strong>2 die stunt</strong>.  It's a novel description of the action and involves details of the current scene (both the broken walls and Shinichi's soldiers).  Best of all it's about the right length - your stunt helps everyone at the table by making their imagined version of your shared story more vivid and cohesive, but if it's too long they may stop paying attention.  Lots of long stunts from everyone makes it longer between turns, in which time the other players might get distracted.</p><p>A good stunt should have the elegance of haiku, or at least remember that brevity is the soul of wit.  It doesn't need to be a shining jewel of poetry or coolness - it just needs to be another brick in the wall of your story.  A little description goes a long way.  With that in mind, you chose very well.</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment13action0",
                    type: "button",
                    value: "Roll the dice",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_13_FUNCTION_0

                });

                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_14:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_14,
                    currentResponse: true,
                    currentResponseHTML: "<p>You move into the center of the awkward, ruined space and crouch to the ground.  There is an unmistakeable metallic ring as you draw your sword, then plunge it into the floor.  With two fingers very lightly on the pommel, you close my eyes and feel the vibration of your blow ringing out into the shrine and then reflecting back up into the blade.  You feel every piece of fractured stone and splintered wood, hear every place so fragile that even this small force moves it, and envision the shrine as it was.  You reconstruct what sort of forces could have caused the destruction - what angle they came from, at height they must have originated, slowly piecing together what must have inevitably been their source.  After a quarter hour of meditation, you open your eyes and turn to Shinichi.</p><p>\"This shrine suffered amazing punishment, Shinichi.  I guess you can say that it's just like my case...built on solid foundations.\"</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>That's a <strong>2 die stunt</strong>.  It's a novel description of the action and involves details of the current scene.  But it's far too wordy!</p><p>It's up to your group how long a stunt is too long - but in most groups peoples' attention will drop off the longer you talk about your character (and the longer they have to wait for their character to get do something).  Note the two rules - novel description, involvement of the scene - say nothing about quality!  Just hit those two points and move on.</p><p>Stabbing your sword into the ground and reading the structure of the room from vibrations is a good example of describing a routine action in a heroic way as part of a stunt.  It's not any more effective than simply methodically searching the scene, but it's more interesting.  While the stunt was overlong, the idea behind it was sound.</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment14action0",
                    type: "button",
                    value: "Roll the dice",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_14_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_15:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_15,
                    currentResponse: true,
                    currentResponseHTML: "<p>You narrow your eyes at the dusty figure of Captain Shinichi, suddenly aware of his guilt.</p><p>\"You have defiled a sacred place, Shinichi - and you dare to linger here, attempting to hide your crime!  Draw your sword, dog.  Nothing can be concealed from Sakuya Thrice-Elegant; for the sake of our former kinship I will purge your shame with my own blade!\"</p><p>Moments later, Shinichi and all his soldiers are dead, victims of your peerless sword.  As you contemplate their pooling blood, steaming slightly in the chill of a Makai's winter morning, you catch a reflection of the angle of the shattered ceiling...<p><p>\"Ah, my mistake, a human couldn't possibly have broken it like that.  Sorry, Shinichi, I'll bring food and wine for your ghost!\"</p><p>...thankfully, that's not how the story <strong>really</strong> went...</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>You botched!  Botches occur when you roll no successes at all (all dice show 6 or lower) and any die shows a 1.  Botches are disastrous failures where things go spectacularly wrong for the character (such as Sakuya misidentifying Shinichi as the villain and wiping out his squad).</p><p>Botches are fantastically unlikely on large pools of dice, so congratulate yourself on seeing a very rare outcome :)  Normally your human ST would handle the story suddenly going in an extremely divergent direction (part of the Charm of tabletop RPGs is the story diverting from any kind of plan almost constantly), but it's a little much for this poor computerised tutorial to cope with at this early stage.  Just this once you can roll again and pretend this never happened!</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment15action0",
                    type: "button",
                    value: "Reroll, because this NEVER HAPPENED!",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_15_FUNCTION_0

                });


                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_16:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_16,
                    currentResponse: true,
                    currentResponseHTML: "<p>While Shinichi is opposed to your aims, he knows you well and is resigned to your peerless skill divining the mystery of the shrine's collapse.  When that fails to happen, and a quarter-hour sees you looking mystified, he's understandably concerned.</p><p>\"Sakuya...just how much did you drink last night?\"</p><p>\"There was a pretty Guild merchant from Nexus...she'd crossed half the world, her acheivement needed to be toasted.  Couldn't be helped.\"</p><p>\"My sister-in-law still cries herself to sleep each night over you, and you consort with merchants?\"</p><p>\"Not so loud, Shinichi.  I'm trying to think without my brains leaking out of my ears in protest.</p><p>You concentrate, with some difficulty, and try once more to piece together the clues...</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>You failed!  Fails occur when you roll less successes than the difficulty...which in this case was quite a feat given the size of your dice pool.</p><p>Most actions can simply be repeated, though the time invested is lost, and each retry attracts a cumulative one success penalty.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment16action0",
                    type: "button",
                    value: "Retry, with an extra -1 success penalty",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_16_FUNCTION_0

                });


                return returnObject;

                break;



            case SEGMENT_KEY_SAKUYA_17:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_17,
                    currentResponse: true,
                    currentResponseHTML: "<p>\"Shinichi, that shrine Kaguya lives in, does it have a basement?\"</p><p>\"Of course not.  Have you ever seen a shrine with a basement?\"</p><p>\"I have today.  It's the only way to explain the pattern of collapse, the walls wouldn't have fallen like this if there was solid ground beneath.  If I'm right - as I usually am - there should be an opening under that chunk of ceiling.\"</p><p>\"Good luck moving it, then.  I can't order my soldiers to participate in a potential desecration of the ruins.\"</p><p>Well, you can probably move it yourself - the mass of wood and slate couldn't be even a couple of thousand pounds, could it?</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>Success!  You've confirmed your suspicions (that the damage to the shrine came from within), but even better, discovered that the shrine has a concealed basement.  You're about to get to the bottom of the mystery in a pleasingly literal way.</p><p id=\"thresholdTextTarget\"></p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment17action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_17_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_18:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_18,
                    currentResponse: true,
                    currentResponseHTML: "<p>You consider the section of fallen ceiling that conceals (you're sure!) the way down into the hidden basement.  It looks awfully like it might weigh more than a couple of thousand pounds.  You can't lift that much.</p><p>But this is important.  Makai is a nation founded on filial piety, in this life and the next.  To destroy a shrine is to cut at the heart of the nation's very identity.  Something powerful enough to terrify the army into covering up for them has done just that - and when the king cannot rely on the army, he can only rely on his champion.</p><p>You <strong>have</strong> to lift that much.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Feats of Strength</strong></p><p>For some actions, your character's efforts are presumed to be reliable enough that you don't roll dice; success or failure is calculated from the size of your dice pool.  Feats of strength are a common example - either you're strong enough to lift or break something, or you're not.</p><p>Your dice pool for feats of strength is your Strength + Athletics (+ any relevant Athletics specialty).  This is compared to a table on page 127 of the Exalted Second Edition core book to see what your character can achieve.</p><p>In this case, Sakuya's Strength 4 + Athletics 5 (her Leaping specialty doesn't count) is <strong>9</strong> - enough to pull a fully laden wagon, but insufficient to shift the wood and stone between her and her goal.  She needs a total of <strong>16</strong> (enough to lift about 1100kg/2500lb), and she's 7 dice short.</p><p><strong>Willpower and Virtues</strong></p><p>The Strength + Athletics total is still a dice pool, even if it isn't rolled, so any means of adding dice are fair game.  Stunts can be relied on for 2 dice, leaving only 5 more to get.</p><p>Spending Willpower points is another way of improving a dice pool.  You may spend a one Willpower point to add an automatic success to a roll, or to activate one of your character's Virtues, adding its rating as dice to the pool.  You can't do both, and you can't do either multiple times for the same pool.  If activating a Virtue, you must justify it as being appropriate to the current situation.</p><p>Sakuya has two Virtues rated at 5, exactly what we need to close the gap on a total of 16.  Valor isn't appropriate, as the collapsed ceiling is just sitting there, not calling her bravery into question.  But you can make a case that as the king's champion, she can't ignore a threat to Makai's culture of ancestor worship; her Conviction is relevant.</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment18action0",
                    type: "button",
                    value: "Spend a Willpower point to activate your Conviction",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_18_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_19:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_18,
                    currentResponse: true,
                    currentResponseHTML: "<p>You crouch in front of the debris, making sure your feet have good purchase on the floor, and that the awful weight will fall on your palms rather than your fingers when you start to lift.</p><p>This isn't about idle curiosity anymore.  This is a matter of patriotism.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>Note that you've spent a point of temporary Willpower (one of your Willpower <strong>boxes</strong> is now empty).  That doesn't reduce your permanent Willpower rating (which is represented by <strong>dots</strong>).  Likewise, you've spent one of your Conviction activations (one of your Conviction <strong>boxes</strong> is now empty), which means you'll only be able to activate it another four times in this story.  You'll still get the full five dice whenever you do so.</p><p>The primary means of replenishing Willpower points is stunting - a two dice stunt rewards a point of Willpower along with its dice.  Since you need to get a two dice stunt to get Sakuya's feat of strength pool up to 16 anyway, so it's reasonable to plan on getting that point.</p><p>Try to choose an option below that will get you a two dice stunt:</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment19action0",
                    type: "button",
                    value: "&quot;I push all my strength down into the earth as I straighten my knees, shouting 'MAKAI!' with all the force of my patriotism.  It echoes out even above the sound of grinding stone, splintering wood and falling dust as I lift the debris and cast it aside.&quot;",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_19_FUNCTION_0

                });

                returnObject.actions.push({

                    id: "segment19action1",
                    type: "button",
                    value: "&quot;I smile at Shinichi.  'Captain, do you know why Kaguya defied her father and married a woman?  Men are too weak to be worthy of her.'  The stone under my feet cracks as I haul up the debris, shaming the male soldiers and drawing fierce grins from the women.&quot;",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_19_FUNCTION_0

                });

                returnObject.actions.push({

                    id: "segment19action2",
                    type: "button",
                    value: "&quot;I seize a torn and singed tapestry, looking at the faded image of worthies from Makai's past, the progenitors of those who worshipped in this shrine.  Wrapping it around my hands I renew my grip on the debris and bellow a prayer.  'Honoured ancestors!  I, Sakuya, humbly offer my services to restore the honour of your families, besmirched by this desecration!  Lend me strength if you have any love for your houses!'  I surge upwards, trusting in the beyond.&quot;",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_19_FUNCTION_0

                });

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_20:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_20,
                    currentResponse: true,
                    currentResponseHTML: "<p>Shinichi stares in open-mouthed awe as you wrench the immense weight of wood and stone aside.  It's rather gratifying; you're used to men and women both struck dumb by your beauty, stunned at your perceptiveness or terrified by your sword skill, but not left slack-jawed by your raw might and determination.  This must be how the Exalted feel.</p><p>\"Sakuya, you did not do that.  You did not just move a ton of ceiling under your own power.  You are many things, but not a god.\"</p><p>\"Who needs gods for that sort of work?  Any woman who loves her country could do the same.\"</p><p>The soldiers aren't buying your false humility; you weren't making much effort to sell it.  In truth you should be years past such a feat - a mature woman in her thirties should be looking back at the glories of her twenties, not feeling stronger and more alive than ever.  Perhaps the ancestors favour you for your service to Makai.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>You chose a valid +2 stunt!  You receive the bonus dice you need to close the gap to 16 (Strength 4 + Athletics 5 + Conviction 5 + Stunt 2), and gain 1 Willpower point.</p><p>You might have guessed that all three options were valid +2 stunts - they all involved a novel description and the scene.  Feats of strength are particularly easy to hit two dice, as they inherently interact with the scenery!</p><p>It should be noted that while Exalted can be a gritty game, where mortals fear bleeding and infection in combat, heroic characters receive certain exemptions from realism (and the Exalted more so).  Sakuya just lifted over twice as much as any weightlifter has ever done in the real world, fuelled by the power of her heroic passion.  Likewise she can leap much further than any real world human, and run a bit faster than the Olympic sprint record. Such is the stuff of heroes.</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment20action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_20_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_21:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_21,
                    currentResponse: true,
                    currentResponseHTML: "<p>Sure enough, you've revealed a pit that opens onto a darkened lower floor.  You expect this was the site of a concealed trap door, turned into a gaping hole by the collapse.</p><p>The unmistakeable smell of singed flesh wafts up, as if it had been trapped by the debris that concealed the pit.  It's a poor omen for the shrine's priest.</p><p>The path down is unsafe; rather than a straight drop, you will have to contend with a jumble of jagged rock and splintered wood the whole way down.  You're confident of your grace and balance, but a mishap could be painful.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Difficulty and Penalties</strong></p><p>Some tasks are inherently difficult.  These require more successes than a normal roll - their <strong>difficulty</strong> is higher.</p><p>Circumstances can also make a character less likely to succeed at a task than she normally would be - these are <strong>penalties</strong> applied to her roll.</p><p><strong>External penalties</strong> are factors that aggravate the task - in this case, climbing down safely into the darkened basement is hard enough, but the spikes of rock and wood make it worse.  External penalties subtract successes from the roll, after rolling.  This is mathematically identical to increasing the difficulty, but has a flavour distinction.</p><p><strong>Internal penalties</strong> are factors that impair the acting character, such as wounds.  Internal penalties remove dice from the pool before rolling.  In this case Sakuya is trying to move with precision, so she'll suffer her armour's Mobility Penalty as an internal penalty.</p><p>We'll say that the difficulty of the Dexterity + Athletics roll to climb down is 2, with a further <strong>external penalty</strong> of 2 from the dangerous debris.  Furthermore, Sakuya will lose 1 die for her Mobility Penalty, bringing her pool down to 8 dice (Dexterity 5 + Athletics 4 - Mobility 1), needing a total of 4 successes.</p><p>Because heroic dice rolls bell-curve at around 1 success for every 2 dice, you have a better than 50% chance of making that, but some bonuses would be welcome.  It's not worth a Virtue activation (failing will hurt a bit, but not prevent you from continuing), but a stunt and perhaps a Willpower point for an automatic success would help the cause.</p>",
                    actionDiceRoll: true,
                    actionAttribute: CONSTANT_TRAIT_DEXTERITY,
                    actionAbility: CONSTANT_TRAIT_ATHLETICS,
                    actionStunts: new Array({

                        key: "sakuyaShrineClimbDownStunt1",
                        used: false,
                        rating: 2,
                        text: "&quot;I hop downwards gingerly, careful only to step on bare rock and wood, never tapestries, relics or prayer strips.&quot;"

                    }, {

                        key: "sakuyaSHrineClimbDownStunt2",
                        used: false,
                        rating: 2,
                        text: "&quot;I heft a chunk of stone into the air over the hole, jumping on it to drive it through the spikes and edges, keeping my precious feet safe.&quot;"

                    }),
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment21action0",
                    type: "button",
                    value: "Climb down",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_21_FUNCTION_0

                });

                
                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_22:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_22,
                    currentResponse: true,
                    currentResponseHTML: "<p>The pain is indescribable.  Well, someone more eloquent could describe it nicely, but it <strong>hurts.</strong></p><p>Your descent had been perfectly graceful, right up until you put your foot firmly down on a charred nail, almost invisible in the gloom.  Luckily it's not bleeding much, nor should it hinder your movement, but you'll have to remember to buy a talisman or medicine against disease later.  No telling how much rust was on that nail.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>You botched!  Botches occur when none of your dice show successes, and any of your dice shows a 1.  It's a disastrous kind of failure where things go horribly wrong for the character.</p><p>In this case, the stakes weren't terribly high - failing would have only given you a level of bashing damage.  That's getting knocked up to lethal damage - note the X in your -0 health level.</p><p>It's early in the tutorial to describe the different kinds of damage, but suffice to say lethal is worse and takes longer to heal.</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment22action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_22_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_23:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_23,
                    currentResponse: true,
                    currentResponseHTML: "<p>It's all perfectly graceful on the way down until a piece of charred timber, invisible in the gloom, leaves a wicked bruise on your thigh.  It won't hinder your movements, but it's a sharp blow to your heroic pride!</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>You failed - rolling less successes than the difficulty.  The stakes were relatively minor for this roll; you've just suffered a single bashing health level.  Note the \\ in your -0 health level on your character sheet.</p><p>You're not suffering wound penalties yet, but each bashing health level takes 12 hours to heal, so you will suffer penalties if you take any further bashing damage during that time.</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment22action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_22_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_24:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_24,
                    currentResponse: true,
                    currentResponseHTML: "<p>Your descent is flawless, a perfect picture of grace...</p><p>...with nobody present to witness.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>You succeed, avoiding any damage from the dangers of your descent.</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment22action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_22_FUNCTION_0

                });

                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_25:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_25,
                    currentResponse: true,
                    currentResponseHTML: "<p>You're obliged to wait for your eyes to adjust to the gloom, but your nose is not so limited.  There's a corpse nearby.</p><p>\"Shinichi?\" you raise your voice more than necessary; you don't want to give him an opportunity to ignore you. \"Has the shrine's priest been seen since the incident?\"</p><p>\"...that's a question with ugly implications.\"</p><p>Indeed, as your eyes gain purchase, you see the body of a man of middle years, cut cleanly in half at the waist.  There is much less blood than you would expect (which you attribute to fire, though if there was a blaze it was rather localised), and the cut appears to have extended into the stone wall behind the unfortunate priest.  This was not the work of an ordinary swordsman.</p><p>The room itself is clearly a shrine in its own right, a place of prayer nested within another for concealment.  A stone altar, struck by great sword-blows yet still largely intact, supports the first undamaged thing you've seen in the building:  a beautiful golden statue of a warrior brandishing a daiklave, the enormous swords of the Exalted.</p><p>You're not much of one for the gentlemen, but the workmanship of the statue is exquisite, and you're forced to acknowledge the subject is very handsome.  Your brother would look something like that, if you had one.  This must be the statue of some god; he can't be Exalted, as the Dragon Blooded aren't fond of gold, and are too iconoclastic for such a detailed representation...</p><p>...unless this isn't gold at all.</p><p>You move across the room, looking around the statue.  It isn't sitting quite right, as if it was abused just as severely as the rest of the shrine, but left completely undamaged.  The blade that cut priest and wall both in a single swing would go through gold like so much butter, and yet...</p><p>There is a chip of red jade lying on the altar.  Someone swung one of the nearly indestructible weapons of the Dragon Blooded at the statue, only to damage their blade.  This must be orichalcum - the metal of the Anathema, the dread enemies of the Dragon Blooded, the ones that call themselves Solar Exalted.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Letting it ride</strong></p><p>There's nothing stopping an ST from calling for the same rolls over and over again with every minor change in the action.  For example, we could very easily have asked for another Perception + Investigation roll (and 15 minutes) to find that piece of red jade in the gloomy basement.</p><p>But it's poor form.  Sakuya has already passed two Investigation rolls here, and can reasonably expect to have every secret of the small shrine at her fingertips.  There's little point asking her to investigate the same scene over and over, except to increase the chance of her ultimately failing - and if we wanted to do that, it's more elegant to use difficulty and penalties.</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment25action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_25_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_26:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_26,
                    currentResponse: true,
                    currentResponseHTML: "<p>You close your eyes and see it clearly.  A Dragon Blooded, a Prince of the Earth, came to this small shrine and discovered the priest praying to the Anathema in this hidden sanctuary.  Enraged, the Exalt killed the man and sought to destroy the object of worship, succeeding only in damaging his priceless daiklave.  This lead him to still greater fury, and the ruin of the shrine.</p><p>The Dragon Blooded are raised to hate the Anathema, hunting them wherever they appear.  But in recent years, the hunt has gone poorly.</p><p>Your country is a tributary of the Realm, like most others.  The king knelt yearly to the representatives of House Tepet, until four years ago when an Anathema named The Bull of the North and his allies obliterated their legions.  That was more than a thousand miles away from Makai, but close enough that any Dragon Blooded seeing a priest praying to a golden statue would leap to the obvious conclusion.  No wonder the smallfolk are avoiding the place and the army covering it up.</p><p>The real question is who this Prince of the Earth is, why they're in Makai, and why nobody told you about them.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>The Exalted</strong></p><p>The Exalted are humans gifted with enormous power by the greatest gods, and left to wield it as they see fit.  They bear the Mandate of Heaven, ruling Creation in place of their divine patrons, and are thus known as the Princes of the Earth.</p><p>The <strong>Dragon Blooded</strong> are the enemies of the other Exalted, and have ruled the world for over a thousand years.  Chosen of the great Elemental Dragons, they are weaker than the Solars and other Celestial Exalted, but more numerous as their children can inherit their power.  Now the tide is beginning to turn against them.</p><p>The Realm is a Dragon Blooded empire based on the continent known as the Blessed Isle, holding most mortal kingdoms as vassals.  It owed its stability and power to the Scarlet Empress, its founding monarch.  She reigned for almost eight centuries; when she disappeared five years ago, the Realm's unity crumbled.  It stands on the brink of civil war.</p><p>The <strong>Solar Exalted</strong> are chosen from amongst the greatest mortal heroes and given the power of the Unconquered Sun, the ruler of heaven.  They are the default playable characters of the game. They have unequalled potential, but are very few.  They are harried by the Wyld Hunt, Dragon Blooded dedicated to extinguishing &quot;Anathema&quot; as soon as they appear.  The Realm teaches that the Anathema were cruel despots that ruled the world through fear and demonic sorcery, until the Dragon Blooded host rebelled.</p><p>Since the disappearance of the Scarlet Empress scores of Solar Exalted have arisen across Creation, wielding their sun-given power with righteous zeal, fighting back against the Wyld Hunts issuing from the Blessed Isle.  It is still a very dangerous world for the Solars, but not without hope; they grow in power rapidly.</p><p>There are other types of Exalted (Lunars, Sidereals, Abyssals and even more exotic sorts) but they don't feature in this tutorial.  Sakuya has quite enough trouble as it is if she's planning to oppose a Dragon Blooded!</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment26action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_26_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_26A:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_26A,
                    currentResponse: true,
                    currentResponseHTML: "<p>As respectfully as you can manage, you collect both halves of the priest and skitter your way back up to the floor above (it's an easier trip on the way up).  You pass the corpse to a horrified soldier, and then fix a hard eye on Shinichi.</p><p>\"So, are you just terrified of this Dragon Blooded, or are you more frightened of me finding out about him?\"</p><p>\"Well I'm sure that I'm about to lose my favourite ex-sister-in-law to a suicidal mockery of a duel, but nobody's really hoping to conceal the new satrap and his staff from you.  They arrived yesterday, a fact of which you'd be well aware if you'd been sober, or if the king had any confidence that you wouldn't insult the Exalted.\"</p><p>A satrap?  You will not be happy to see your king kneel again.</p><p>\"I'm brave, not foolish.  Thank you for your time, Shinichi.  I'm late for morning practice, I'm sure you'll understand if I leave the cleaning up to your troops.\"</p><p>It's true that you're very brave, and honestly a little foolish, but challenging and killing a Prince of the Earth isn't possible even with your perfect sword skills.  You'll need to approach this carefully, with good advice.  For that, you suppose it's worth turning up to the dojo this morning.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment26action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_26A_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_27:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_27,
                    currentResponse: true,
                    currentResponseHTML: "<p>The cold strikes you as you walk out of the shrine and look down upon the city.  After the warmth of the shrine, still smouldering with the fury of the Dragon Blooded, an ocean breeze across the snow elicits a shiver.</p><p>Your eyes fall on the distant palace, its white walls gleaming in the last stages of the dawn.  The Realm's leash is taut again.  The king clearly doesn't trust you within a sword-swing of the satrap; you're not entirely sure you trust yourself.  You've saved Makai from rebellions, barbarians and the ambitions of its neighbours, but you can't save it from being a very small nation in a world ruled by an empire of demigods.  But neither can you let every shrine in the city be torn apart in a pogrom launched over a gold statue.</p><p>You turn away and take the road to the dojo; it's against the north wall of the city, away from the docks, the palace, and the taste of the far-off Blessed Isle tainting the wind from the ocean.  The soldier who earlier barred your path salutes and says something in a respectful tone.  You pay him no heed.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment27action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_27_FUNCTION_0

                });

                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_28:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_28,
                    currentResponse: true,
                    currentResponseHTML: "<p>It's late, by the standards of your school, when you vault over the wall.  You might be able to slip in without attracting attention...</p><p>No such luck.</p><p>There's fifty students running through the forms in the courtyard, wooden practice blades sweeping like the branches of an angry forest.  Their tired eyes behold you with a mix of emotions, few of which you welcome.</p><p>Most are jaded enough to your prowess that hopping an eight yard wall hasn't impressed them, but it's still a barrier.  They could work their whole lives and never have the skill that comes effortlessly to you.  Many joined because of the fame you earned for the school, only to find your time devoted to the king and your obsession with mysteries, teaching not amongst your superlative talents.  Most are disciplined enough to ignore your beauty, but not all, and there is a bitterness in the eyes of those who still seem to desire you.  You're slightly ashamed that you do not recall all their names.</p><p>You salute wordlessly and turn your back on them, striding towards your Sifu's hall.  It's true you're a terrible senpai, but don't you bring enough honour to the school with your deeds?</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Jumping</strong></p><p>A heroic character can jump their Strength + Athletics in yards vertically, or twice that horizontally.  It's no trouble for Sakuya to jump an eight yard wall (Strength 4 + Athletics 5 + Leaping specialty 2 = 11 yards), though as the mobility penalty of armour applies (-1 currently, for 10 yards), she wouldn't be able to manage it in plate.</p><p><strong>Sifu/Senpai?</strong></p><p>While much of its art obviously draws from eastern inspirations, <em>Exalted</em> is not an anime or wuxia game - at least not exclusively.  It pillages fiction, mythology and culture from far and wide, with its vast setting containing a bit of everything in various mixes - the Realm is Rome and Persia as well as China, Lookshy is Sparta as much as it is <em>Ghost in the Shell</em>.  The action is intended to be just as <em>Mahabarata</em> as it is <em>Final Fantasy</em>.</p><p>This particular tutorial and its little country are absolutely a Japanese/Chinese pastiche, but change Sakuya to Scathach and dress everyone in lorica segmentata and you'd still have an <em>Exalted</em> story.</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment28action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_28_FUNCTION_0

                });

                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_29:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_29,
                    currentResponse: true,
                    currentResponseHTML: "<p>You idly pick up a practice sword before slipping into the Sifu's hall.  There is a sharp crack as you bring it up in an unthinking parry against his attack.</p><p>Sifu's eyes are blue like hard ice, his hair like snow laced with steel.  He had a name once, amongst the Icewalker tribes, but threw it away along with his heritage when he came to Makai to devote himself to the sword.  He is old but unbent, wise and strong, an unquestioned master - and he has not defeated you since you were sixteen.</p><p>\"Do you assault all your students, or only the most gifted?\"</p><p>\"Only the laziest.  It is the curse of this school that the First Sword fits both criteria.\"</p><p>\"Clearly I deserve the lecture, but I came here for more specific advice.\"</p><p>\"A teacher gives advice when he has hope of it being acted upon.  Show me that you remember anything I have taught you, and I'll share the wisdom that is a man's compensation for old age.\"</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><em>Note:  we've replaced Sakuya's Exceptional Slashing Sword with a Wooden Practice Sword.  You can have the sharp one back when you're done with training!</em></p><p><strong>Join Battle</strong></p><p>Sifu doesn't approve of Sakuya cruising along on her considerable talent in place of training, so it's time to go through the basics of combat.  Tthe first order of business is determining the order in which the characters will act.</p><p>All participants roll <strong>Join Battle</strong> at the start of combat.  This is a Wits + Awareness roll, counting successes as normal.  The highest number of successes is noted as the combat's <strong>reaction count</strong>, and that character acts first.  Everyone else acts later based on the difference between their rolled successes and the reaction count.</p><p>Join Battle is a normal roll and can be stunted.</p>",
                    actionDiceRoll: true,
                    actionAttribute: CONSTANT_TRAIT_WITS,
                    actionAbility: CONSTANT_TRAIT_AWARENESS,
                    actionStunts: new Array({

                        key: "sakuyaSifuJoinBattleStunt1",
                        used: false,
                        rating: 2,
                        text: "&quot;I slam Sifu's blade into the wall with my own, bow deeply while he can't attack me, then leap a dozen yards into the room, striking a ready stance as I land.&quot;"

                    }, {

                        key: "sakuyaSifuJoinBattleStunt2",
                        used: false,
                        rating: 2,
                        text: "&quot;Affecting a careless attitude to provoke the old man, I turn my back on him and stroll casually to the middle of the hall, calling out familiar greetings to the portraits of past masters of the school.  If he's paying attention, he'll note I never really let my guard down, and I can see him at all times in the prayer-mirrors on the walls.&quot;"

                    }),
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment29action0",
                    type: "button",
                    value: "Roll Join Battle",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_29_FUNCTION_0

                });

                /*
                returnObject.actions.push({

                    id: "segment29action1",
                    type: "button",
                    value: "&quot;I slam Sifu's blade into the wall with my own, bow deeply while he can't attack me, then leap a dozen yards into the room, striking a ready stance as I land.&quot; and Roll Join Battle",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_29_FUNCTION_1

                });

                returnObject.actions.push({

                    id: "segment29action2",
                    type: "button",
                    value: "&quot;Affecting a careless attitude to provoke the old man, I turn my back on him and stroll casually to the middle of the hall, calling out familiar greetings to the portraits of past masters of the school.  If he's paying attention, he'll note I never really let my guard down, and I can see him at all times in the prayer-mirrors on the walls.&quot; and Roll Join Battle",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_29_FUNCTION_1

                });*/

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_30:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_30,
                    currentResponse: true,
                    currentResponseHTML: "<p>The hall falls into utter silence.  You are at one with every possible movement of yourself and your opponent, more yourself with a sword in your hands than at any other time.</p><p>You sometimes wonder if your marriages failed because no woman could share this moment with you, your talent with the sword creating an impassable gulf with every other human.</p><p>Well, that and the drinking.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>We've brought up the combat tracker, which we'll be using to show who acts when and the status of the combatants.  Click on a combatant's traits for more details (for example their weapon to see speed, accuracy, damage etc).</p><p><strong>Ticks</strong> are an abstract unit of time used to track the progress of combat.  A combat starts on tick 0 and counts ticks upwards until it ends.  A tick is considered to be roughly 1 second of in-game time; stunts usually make a nonsense of that, but it doesn't matter so long as one tick follows another.</p><p>Each combatant takes their first action on tick number (Reaction Count - successes on their Join Battle roll), to a maximum of tick 6.  Whoever rolled the most Join Battle successes will act on tick 0, since the Reaction Count was set by their number of successes.  Everyone else will act a tick later for each less success they rolled than the Reaction Count.</p>",
                    actions: new Array()
                }


                returnObject.actions.push({

                    id: "segment30action0",
                    type: "button",
                    value: "Resolve Tick 0",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_30_FUNCTION_0

                });

                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_31:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_31,
                    currentResponse: true,
                    currentResponseHTML: "<p>&quot;You're assuming I'm going to do something foolish.&quot;</p><p>&quot;Precedent is on my side, Sakuya.&quot;</p><p>&quot;Did I ever attack the Tepet?&quot;</p><p>&quot;The last time we saw Dragon Blooded in Makai, The Bull of the North had not yet made them seem mortal.  But Winter Tigers are not bulls!&quot;</p><p>&quot;Yes, but at least one of the Dragon Blooded thinks we're Bull cultists.&quot;</p><p>You take a moment of satisfaction for inflicting stunned silence upon your teacher, then explain what you saw at the shrine.</p><p>&quot;Hmm.  Yes, this is a very serious problem.  I was worried you'd set off a diplomatic incident yourself out of disgust at seeing the king kneel, but this puts all Makai in danger.  We have no power to resist the Wyld Hunt.&quot;</p><p>&quot;You can see why I had the sense to seek your advice this time.&quot;</p><p>Sifu pours two steaming cups of tea, taking a sip of his own to steady his mind.  &quot;Sakuya, I don't believe you're entirely happy with the set of facts you've presented to me.  Something doesn't make sense to you.&quot;</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment31action0",
                    type: "button",
                    value: "&quot;Why that shrine?  Why only that shrine?&quot;",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_31_FUNCTION_0

                });

                returnObject.actions.push({

                    id: "segment31action1",
                    type: "button",
                    value: "&quot;Why did he go alone and at night?&quot;",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_31_FUNCTION_1

                });

                returnObject.actions.push({

                    id: "segment31action2",
                    type: "button",
                    value: "&quot;Shouldn't the Immaculate Order have made an appearance?&quot;",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_31_FUNCTION_2

                });

                return returnObject;

                break;

            
            
            case SEGMENT_KEY_SAKUYA_32:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_32,
                    currentResponse: true,
                    currentResponseHTML: "<p>&quot;Makai has hundreds of shrines.  Why would a member of the satrap's retinue visit such an obscure one on the very night they arrived in the city?  He must have already known there was a secret there, but if so, why lose control on discovering it?  More importantly, why haven't any other shrines suffered the same fate in the intervening hours?  He acted so fast, why slow down now?&quot;</p><p>&quot;You don't think he was looking for that statue.&quot;</p><p>&quot;He was looking for something, but he didn't find it.  He doesn't have troops - or even monks! - scouring the city for it, so he must be searching on his own.  That means if I can figure out what it is, I can stop him from finding it, the king can blame everything on the dead priest, and everything will be fine.  I won't even have to kill anyone!&quot;</p><p>&quot;Well, let's not get too hasty.  I'm sure you'll kill someone.&quot;  For the first time since Sakuya entered the hall, Sifu allows a faint smile.</p><p>&quot;Thank you, Sifu.  As always, you've been a great help.  I need to get to the palace and meet the satrap's people - I promise I'll be on my best behaviour, but I can't figure out what our villain's looking for until I lay eyes on him myself.&quot;</p><p>&quot;Sakuya, all you needed was someone to talk through what you already knew.  If you could stay married for more than a few weeks, you wouldn't find it so much trouble.&quot;</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Allies</strong></p><p>Sakuya has two dots in the Background named Allies.  This provides her with two trusted friends who will aid her at need (and expect aid in return).  This is her Sifu and the king; there are other Backgrounds such as Contacts or Mentor that might be appropriate to represent them, but Allies is the best fit, as it implies a close relationship and reasonably equivalent levels of personal power.</p><p>The exchange above is a fairly gentle use of the Background; in an investigation story, if a character has uncovered information but not quite put it together properly, they could go to an ally for hints.  On the more extreme end, Sifu would happily fight by Sakuya's side in a battle to the death if she asked his aid.</p><p>You don't <strong>need</strong> to have a Background representing a character to get them to help you; it just makes it reliable.  Note that you didn't need to roll anything to convince Sifu to help.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment32action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_32_FUNCTION_0

                });

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_33:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_32,
                    currentResponse: true,
                    currentResponseHTML: "<p>&quot;He's a Prince of the Earth.  He must have a retinue of troops, monks and savants.  He can go where he wants and do as he likes during the day - assuming he suspected an Anathema cult in operation at the shrine, why would he go alone in the dead of night, straight after he arrived in the city?  Why not marshal his troops and hit a hundred shrines at once?&quot;</p><p>&quot;You don't think he was expecting an Anathema cult.&quot;</p><p>&quot;I don't know what he was looking for, but he didn't find it, and I'm sure he hasn't told his colleagues about it.  That means if I can figure out what it is, I can stop him from finding it, the king can blame everything on the dead priest, and everything will be fine.  I won't even have to kill anyone!&quot;</p><p>&quot;Well, let's not get too hasty.  I'm sure you'll kill someone.&quot;  For the first time since Sakuya entered the hall, Sifu allows a faint smile.</p><p>&quot;Thank you, Sifu.  As always, you've been a great help.  I need to get to the palace and meet the satrap's people - I promise I'll be on my best behaviour, but I can't figure out what our villain's looking for until I lay eyes on him myself.&quot;</p><p>&quot;Sakuya, all you needed was someone to talk through what you already knew.  If you could stay married for more than a few weeks, you wouldn't find it so much trouble.&quot;</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Allies</strong></p><p>Sakuya has two dots in the Background named Allies.  This provides her with two trusted friends who will aid her at need (and expect aid in return).  This is her Sifu and the king; there are other Backgrounds such as Contacts or Mentor that might be appropriate to represent them, but Allies is the best fit, as it implies a close relationship and reasonably equivalent levels of personal power.</p><p>The exchange above is a fairly gentle use of the Background; in an investigation story, if a character has uncovered information but not quite put it together properly, they could go to an ally for hints.  On the more extreme end, Sifu would happily fight by Sakuya's side in a battle to the death if she asked his aid.</p><p>You don't <strong>need</strong> to have a Background representing a character to get them to help you; it just makes it reliable.  Note that you didn't need to roll anything to convince Sifu to help.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment32action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_32_FUNCTION_0

                });

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_34:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_34,
                    currentResponse: true,
                    currentResponseHTML: "<p>&quot;Makai's always had Immaculate missionaries from the Realm.  They might grudgingly tolerate our ancestor piety, but they'd leap at the chance to dismantle our shrines on pretext of Anathema worship.  Yet I haven't seen anything like the frenzy I'd expect if the monks got wind of that statue.  That means our friend with the notched daiklave is hiding our secret from the Immaculates - but why would he do that if he was that enraged by the Anathema cult?&quot;</p><p>&quot;You don't think he was looking for that statue.&quot;</p><p>&quot;He was looking for something, but he didn't find it.  If he's trying to keep his activities secret from the monks, he can't trust any of the Dragon Blooded either.  That means if I can figure out what it is, I can stop him from finding it, the king can blame everything on the dead priest, and everything will be fine.  I won't even have to kill anyone!&quot;</p><p>&quot;Well, let's not get too hasty.  I'm sure you'll kill someone.&quot;  For the first time since Sakuya entered the hall, Sifu allows a faint smile.</p><p>&quot;Thank you, Sifu.  As always, you've been a great help.  I need to get to the palace and meet the satrap's people - I promise I'll be on my best behaviour, but I can't figure out what our villain's looking for until I lay eyes on him myself.&quot;</p><p>&quot;Sakuya, all you needed was someone to talk through what you already knew.  If you could stay married for more than a few weeks, you wouldn't find it so much trouble.&quot;</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Allies</strong></p><p>Sakuya has two dots in the Background named Allies.  This provides her with two trusted friends who will aid her at need (and expect aid in return).  This is her Sifu and the king; there are other Backgrounds such as Contacts or Mentor that might be appropriate to represent them, but Allies is the best fit, as it implies a close relationship and reasonably equivalent levels of personal power.</p><p>The exchange above is a fairly gentle use of the Background; in an investigation story, if a character has uncovered information but not quite put it together properly, they could go to an ally for hints.  On the more extreme end, Sifu would happily fight by Sakuya's side in a battle to the death if she asked his aid.</p><p>You don't <strong>need</strong> to have a Background representing a character to get them to help you; it just makes it reliable.  Note that you didn't need to roll anything to convince Sifu to help.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment32action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_32_FUNCTION_0

                });

                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_35:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_35,
                    currentResponse: true,
                    currentResponseHTML: "<p>Half the day is gone by the standards of the dojo, but the palace won't even be breakfasting yet.  You maintain a brisk pace through the city, but strictly speaking you have breathing room.  Your enemy isn't as far ahead of you as you feared, and seems constrained by a need to act secretly.</p><p>Makai is bustling - it seems to have added several thousand extra people while you were busy drinking.  Imperial levies, a mish-mash of conscripts from everywhere north of the Blessed Isle not currently under the Bull's sway.  They seem well behaved as soldiers go, but surely that can't be the case for the whole army...</p><p>&quot;Sakuya!&quot;</p><p>Your heart leaps at that voice.  You haven't seen Frosted Lily for years, but you can't bear to hear her in such distress.  When she pushes through the busy street to clutch at your arm, her blue eyes filled with tears, an ugly bruise marring her angelic face, you already know you'll be doing whatever she asks.</p><p>&quot;Sss..Sakyua, you have to help, it's these soldiers...they arrived last night, used my boys...terribly.  Now they won't leave, they're tearing the place apart looking for something to drink...they have their swords out, I just know they're going to kill my boys!  You have to help...I'll...I'll take back everything I said...&quot;</p><p>Well, she did say some terrible things at the divorce proceedings, but in all fairness you deserved it.  You want to get to the palace as soon as possible, but you're not sure you're the sort of person who can walk away from doing righteous violence on a pretty woman's behalf.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Virtues</strong></p><p>Sakuya is extremely virtuous, even for a heroic mortal - even for an Exalt!  She's incredibly brave and resolute, very compassionate, and is only weak in the area of temperance.</p><p>That puts a <strong>lot</strong> of bonus dice at her disposal when activating her Virtues, but having such an extreme personality has its downsides.  Specifically, it's hard to act against Virtues rated at three or higher, and Sakuya has <em>three</em> of those pulling her in different directions.  Currently they're telling her:</p><p><strong>Conviction: </strong> You need to find out what the Dragon Blooded is looking for.  If half the city burns down while you're doing that, so be it.</p><p><strong>Valor: </strong> Passing up the opportunity to prove yourself by defeating a group of soldiers single-handedly would be a cowardly affront to your own honour.</p><p><strong>Compassion: </strong> You still care for Lily, and you're worried about the welfare of her boys.  Go help them!</p><p><strong>Temperance: </strong> I'm rated at 1, I'm not stopping you from doing anything.</p><p>Normally Sakuya would need to roll each Virtue she wanted to act against, and spend a Willpower point to go through with it if she scores any successes.  In this case, if she wanted to help Lily, going with her Valor and Compassion but contradicting her Conviction, she'd need to roll Conviction and fail, or spend a Willpower point.</p><p>We need a contrived fight to teach you further elements of the combat system, so we're going to let Sakuya off the hook for her Conviction but force her to help Lily.  It's horribly linear, but it is a tutorial - you're learning what you need in order to play at the tabletop with complete freedom!</p><p>The important thing to remember is the extreme utility of Virtues does come with pressure to act in certain ways, so consider carefully before loading up your own characters with a personality like Sakuya's.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment32action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_35_FUNCTION_0

                });

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_36:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_36,
                    currentResponse: true,
                    currentResponseHTML: "<p>It's terrible, but you can't resist just a little theatre.</p><p>You caress Lily's face as she clutches at you, wiping away some of the tears.  Obviously the incident with the soldiers was traumatic; you haven't often seen her looking so vulnerable.</p><p>&quot;My dear Lily...I shall present you their heads.&quot;</p><p>You backflip gracefully out of her arms, soaring up onto the roof-tiles of a nearby house, and start running.  Lily's establishment isn't far - she must have had the good fortune to see you on the way to alerting the guard - a quick dash across the rooftops will see you there inside a minute.</p><p>You unsheath your sword, the morning sun catching its meticulously sharpened edge in a sudden blaze of light.  It's not sensible to run and jump about on uneven terrain with a live weapon drawn, but you don't want to be fumbling with the sheath once the fight starts.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Movement</strong></p><p>Exalted is usually played without a map or minatures; distances and positions are held in everyone's imagination and generally played fast and loose.  Stunts contribute to the ambiguity by injecting a lot of narrative movement that doesn't have a mechanical impact.  Many scenes will take it for granted that everyone is close enough to interact, much like Sakuya and Sifu's sparring match where movement was purely a matter for stunts.</p><p>When it becomes important to be more precise with position and movement speed, there's two actions that specify exactly how far a character can move in a tick:</p><p>The <strong>Dash</strong> action (Speed 3/DV penalty -2) allows a character to cover Dexterity + 6 yards per tick (minus wound or mobility penalties).  Sakuya's Dexterity is 5 and her armour's mobility penalty is -1, so can dash 10 yards per tick (Dexterity 5 + 6 - 1 mobility).  That's how she's crossing the rooftops to Lily's establishment, moving at roughly the pace of an olympic sprinter.</p><p>The <strong>Move</strong> action (speed 0, no DV penalty) allows a character to move Dexterity yards per tick (less any wound or mobility penalty, so with Dexterity 5 and her armour, Sakuya can Move 4 yards per tick).  Move is a <strong>reflexive</strong> action: it may be taken on every tick, does not have a Speed or DV penalty, and may be performed at the same time as other actions (for example, you could Guard for three ticks and still Move on each of those ticks).  The only restrictions are that you can only Move once per tick, and you may not Dash and Move in the same tick.</p><p>Every character can be in constant motion during a scene; they don't have to wait their turn to move like chess pieces.  But as having each player at the table declare their movement and the ST that of every NPC for every tick would be awkward, most groups will only track movement per-tick in edge cases.  Just remember that the tools are there when you need them.</p><p><strong>Readying Weapons</strong></p><p>Drawing a weapon is a Speed 5/DV -1 action (it's an example of a <strong>Miscellaneous action</strong>, which are always Speed 5; we'll see more examples later).  Sakuya has drawn her sword in anticipation of a fight so that she can avoid having to take that action during combat.  Because her Dodge DV is much worse than her Parry DV, she can be in serious trouble if someone beats her Join Battle roll and attacks her while she's still unarmed.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment36action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_36_FUNCTION_0

                });

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_37:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_37,
                    currentResponse: true,
                    currentResponseHTML: "<p>You go through a window, diving in from the roof across the street.  The bastards tearing up Lily's establishment will be expecting a tussle with the guards for their troubles, so they'll be keeping an eye on the doors.  You're not one for ambushes, but there are hostages to consider.</p><p>You roll to your feet in the common room.  Lily's place is almost as much sake-house as it is brothel; her boys sell overpriced drinks to the customers alongside their other services.  You don't really want to think about the cost in silver of the mess around you.</p><p>There's five of them, reeking of alcohol like the rest of the room.  Four of them are ordinary soldiers, probably just militia.  They have their swords out and a few scraps of armour on, but they shouldn't pose any problems.  The fifth is different, professional in capability if not behaviour.  He either holds his liquor better than his subordinates or had the sense to not drink so much, but he's also sporting a hell of a bruise on the right cheek.  Lily's obviously still handy with a club.</p><p>Two of the boys are cowering behind the bar.  They're not at sword point, but they're going to be at risk when you start killing people.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Jumping (horizontal)</strong></p><p>You can jump twice as far horizontally as you can vertically, so Sakuya's vertical jump distance of 10 yards become 20 yards horizontal.  She easily has the distance to jump across a street.</p><p>You'll note that we're not asking you for a roll for Sakuya to complete the jump safely.  We're treating it like, and thus adjudicating the action as if it were the most boring possible way of achieving the same thing.  The few extra seconds it would take to drop down safely, walk across the street and climb into the window normally wouldn't make a difference to the scene.  All Sakuya's gaining by crashing through the window is style, and since it is a reasonable action given her traits, there's no point asking for a roll.</p><p><strong>Normal opponents and Extras</strong></p><p>The veteran leading this shabby bunch of levies is a professional soldier with above-average traits, but he's not a hero like Sakuya or Sifu.  He does not gain a bonus success on dice showing 0.</p><p>His four lackies have it worse - they're <strong>extras</strong>, just like the nameless mooks in an action movie, epic novel or video game.  They are not heroic and have only three health levels.</p><p>While combat is an extremely dangerous situation for any mortal, the five-to-one odds here don't disadvantage Sakuya as much as it might appear - these foes are not on her level.  While she might get unlucky and end up laid up with injuries or dead, it's within the range of risks player characters can be expected to take.</p>",
                    actionDiceRoll: true,
                    actionAttribute: CONSTANT_TRAIT_WITS,
                    actionAbility: CONSTANT_TRAIT_AWARENESS,
                    validVirtues: new Array(CONSTANT_TRAIT_VALOUR, CONSTANT_TRAIT_COMPASSION),
                    actionStunts: new Array({

                        key: "sakuyaAWOLGoonsJoinBattleStunt1",
                        used: false,
                        rating: 2,
                        text: "&quot;I pick a handful of broken glass out of my armour and throw it at the militamen, causing them to flinch.  'Welcome to Makai, gentlemen.  I hope it's to your liking, I'll be burying you here today.'&quot;"

                    }, {

                        key: "sakuyaAWOLGoonsJoinBattleStunt2",
                        used: false,
                        rating: 2,
                        text: "&quot;I seize one of the few intact bottles in the room and smash it over a gaudy bronze statue of some nameless Adonis to get everyone's attention.  'I understand you're not familiar with the local dialect, so I'll say it slowly and carefully.  Time.  Gentlemen.  Please.'&quot;"

                    }),
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment37action0",
                    type: "button",
                    value: "Roll Join Battle",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_37_FUNCTION_0

                });

               /* returnObject.actions.push({

                    id: "segment37action1",
                    type: "button",
                    value: "&quot;I pick a handful of broken glass out of my armour and throw it at the militamen, causing them to flinch.  'Welcome to Makai, gentlemen.  I hope it's to your liking, I'll be burying you here today.'&quot; and Roll Join Battle",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_37_FUNCTION_1

                });

                returnObject.actions.push({

                    id: "segment37action2",
                    type: "button",
                    value: "&quot;I seize one of the few intact bottles in the room and smash it over a gaudy bronze statue of some nameless Adonis to get everyone's attention.  'I understand you're not familiar with the local dialect, so I'll say it slowly and carefully.  Time.  Gentlemen.  Please.'&quot; and Roll Join Battle",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_37_FUNCTION_2

                }); */

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_38:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_36,
                    currentResponse: true,
                    currentResponseHTML: "<p>They understand that a fight's started, but their movements are clumsy and torpid compared to Sifu's disciplined speed.  You expect you'll kill one or two before they have a chance to attack.</p><p>They don't seem to recognise you, so they're likely from at least a thousand miles away.  Not much hope of sending their bodies home.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Multiple Opponents</strong></p><p>Take a moment to click on the traits of your opponents in the Combat Tracker and size them up.  Their Accuracy pools are low, and they don't get two successes for 0s, so they've little hope of hitting Sakuya's Parry DV.</p><p>But a group of five opponents can <strong>surround</strong> a character, preventing her from moving, and causing attacks from one of them to be resolved as if they were <strong>unexpected</strong> (reducing the victim's Dodge and Parry DVs to 0).  The victim chooses which of her attackers she exposes her back to.  No more than five characters can surround another, and any less does not count as surrounding.</p><p>This means Sakuya is in danger as long as five of her opponents live, as even the Extras can reliably hit DV 0.  She's out of trouble as soon as she takes one of them out of the fight.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment38action0",
                    type: "button",
                    value: "Resolve Tick 0",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_38_FUNCTION_0

                });

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_39:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_39,
                    currentResponse: true,
                    currentResponseHTML: "<p>There's still moans of awful pain coming from some of the prone forms, shuddering in agony as they slowly bleed out.  Kenji and Hisao look on with pale faces, uncertain how to face their tormentors' last moments.</p><p>The militamen weren't the proudest example of humanity, but even they don't deserve to die in such agony.  You feel a strong impulse to put them out of their misery.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Bleeding and Infection</strong></p><p>If you've taken a lethal injury, you will take one automatic level of lethal damage every Stamina minutes until the bleeding is stopped.  Stanching a mortal's wound is a Wits + Medicine task with a difficulty equal to the number of health levels inflicted by that wound, and each wound must be stanched before the character stops bleeding.  Sakuya, Hisao and Kenji do not have good Wits + Medicine pools, and some of the wounds you inflicted were quite severe.  Since all of your opponents are now at least Incapacitated, bleeding will put them into a dying state.  They're simply not going to survive.</p><p>Even if they did, they would have to contend with infection.  It's not important for most players of Exalted to know the infection rules, only to understand that they're very bad news for mortals.  Suffice to say Sakuya's low Stamina + Resistance pool is a suboptimal choice for a professional mortal duellist - she's probably cost the king a fortune in medicine over the years.</p><p><strong>Virtues (again)</strong></p><p>With a Compassion rating of 3, Sakuya has trouble allowing needless suffering to occur.  She can't save the lives of her opponents, but she can put them out of their misery with a few quick killing blows.  If you choose not to do this, you'll need to fail a Compassion roll or spend a point of Willpower to allow them to die in slow agony.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment39action0",
                    type: "button",
                    value: "Finish them off",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_39_FUNCTION_0

                });

                returnObject.actions.push({

                    id: "segment39action1",
                    type: "button",
                    value: "Let them die slowly",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_39_FUNCTION_1

                });

                return returnObject;

                break;



            case SEGMENT_KEY_SAKUYA_40:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_40,
                    currentResponse: true,
                    currentResponseHTML: "<p>You finish each of the survivors with a precise stab to the heart.  No witticisms, no hesitation, and not a word to Kenji and Hisao.  They need to be sheltered from the world of blood and steel.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment40action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_40_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_41:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_41,
                    currentResponse: true,
                    currentResponseHTML: "<p>You look upon the dying soldiers without pity.  Hisao and Kenji seem pained, even though it is they that suffered worst at the hands of these beasts; when they look pleadingly at you, you simply shake your head.</p><p>A few minutes later, it is all over.  Lily will have to salt the ground, for the ghosts of your foes will be deranged with pain and anger.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment41action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_40_FUNCTION_0

                });

                return returnObject;

                break;

           
            case SEGMENT_KEY_SAKUYA_42:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_42,
                    currentResponse: true,
                    currentResponseHTML: "<p>This is against your nature.  It will take an act of will to go through with it.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>You didn't fail the roll; your Compassion asserts itself.  You'll either need to give in and euthanise your opponents, or spend a Willpower point to let them die at their own pace.",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment42action0",
                    type: "button",
                    value: "Finish them off",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_39_FUNCTION_0

                });

                returnObject.actions.push({

                    id: "segment42action1",
                    type: "button",
                    value: "Spend a Willpower point and let them die slowly",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_42_FUNCTION_1

                });

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_43:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_43,
                    currentResponse: true,
                    currentResponseHTML: "<p>Lily rushes in, out of breath, followed by a gaggle of her employees as they realise the common room is safe.</p><p>&quot;Sakuya, you're wounded!  You risked your life for my boys...&quot;</p><p>&quot;It's nothing to speak of, Lil.  My armour caught most of it.&quot;</p><p>&quot;It's bleeding and given the parlous state of my common room almost certainly infected.  Sit down, be quiet, and let me tend you.&quot;  Well, it's difficult to say no to that... &quot;Hisao, dear, if you pry up the board under the bar, the oni wine should still be there.&quot;</p><p>...but that's going a bit far.  &quot;Oni wine?  No, no no no.  Infections aren't that troublesome, really.</p><p>Lily takes your cheek in the palm of her hand, smiles sweetly, then motions to a handful of her boys.  &quot;If Aunt Sakuya insists on being a child about her treatment, hold her down.&quot;</p><p>The disinfection process hurts a great deal more than the injury did, and you do indeed insist on being childish, but it's true you don't have time to be dying of infection.</p>",
                    currentActionText: true,
                    currentActionHTML: "Lily does have a good Wits + Medicine pool, so we're going to assume she manages to stanch Sakuya's bleeding easily and successfully disinfect the wound.  This doesn't heal your injury, but it does prevent it worsening.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment43action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_43_FUNCTION_0

                });

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_44:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_44,
                    currentResponse: true,
                    currentResponseHTML: "<p>Lily rushes in, out of breath, followed by a gaggle of her employees as they realise the common room is safe.</p><p>&quot;My dear Sakuya, please tell me you're not hurt.&quot;</p><p>&quot;They were pretty poor swordsmen, Lil.  I'm afraid the furniture bravely took the injuries intended for me.&quot;</p><p>She waves a dismissive hand.  &quot;Furniture is nothing.  My boys and my Sakuya are irreplaceable.&quot;</p><p>&quot;Oh, so that's why you haven't remarried?&quot;</p><p>The celebratory mood in the room is momentarily subdued.  Was that a faux pas?  It must have been a faux pas.  Well, it won't be the last.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment43action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_43_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_45:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_45,
                    currentResponse: true,
                    currentResponseHTML: "<p>Hisao straightens himself up and walks over to you.  It's easy to think of him as a boy, but in truth he's grown into an upstanding young man.  If he didn't feel so indebted to Lily you'd use your influence to get him a better job.  He kneels on the blood-slick floor without hesitation and kow-tows with the deepest respect.</p><p>&quot;Aunt...no, Lady Sakuya, you not only rescued us, you made our safety your first concern even in the heat of battle.  Kenji and I owe you a debt that can never be repaid.&quot;</p><p>One by one, each of the other catamites takes to their knees and kow-tows.  Only Lily remains standing, but she clutches your arm with a nostalgic warmth and cranes up to kiss your cheek.</p><p>&quot;My beautiful Sakuya, you truly are Makai's hero.  We won't forget it again.&quot;</p><p>She gestures for them to rise, and the cleanup begins.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Gaining Backgrounds in play</strong></p><p>We've added a dot in the Contacts background to Sakuya's character sheet.  Frosted Lily and her boys aren't powerful enough to act as Allies for someone of Sakuya's stature, but they're a superb source of information.  Repairing the relationship with her ex-wife is a real advantage, worth representing mechanically.</p><p>How exactly to represent advantages like this gained in play is largely up to the ST and the group.  Not everything is worth representing as a Background (for example, we haven't made Sakuya buy all her ex-wives as Contacts, nor have we granted them for free; they're more a fun story detail than an important mechanical advantage, and generally aren't on speaking terms with her anyway).  Some groups will give Backgrounds in play for free, others will require them to be bought with experience points.  It's important to discuss it with your group, but a good rule of thumb is \"easy come, easy go\" - anything you didn't pay XP for should not be relied on long-term.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment45action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_45_FUNCTION_0

                });

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_46:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_46,
                    currentResponse: true,
                    currentResponseHTML: "<p>Kenji walks over and warmly shakes your hand.  &quot;We can't thank you enough, Aunt Sakuya.  Who knows how far those dogs would have taken things if you hadn't stepped in?&quot;  he laughs &quot;Though I have to say I was almost more scared of you than them.  You were cutting them down with such ferocity - I'm not even sure you noticed Hisao and I!&quot;</p><p>&quot;I've found killing the aggressors to be an effective means of rescue in the past, Kenji.  Looks like I did splash a measure of blood on you, sorry about that.&quot;</p><p>Lily waves her boys off to recuperate or clean as best fits their condition, and takes your hand.</p><p>&quot;You are a monster with a sword in your hand, my sweet.  But you're Makai's monster.  We won't forget what you've done for us.&quot;</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment45action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_45_FUNCTION_0

                });

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_47:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_47,
                    currentResponse: true,
                    currentResponseHTML: "<p>As the boys busy themselves cleaning the building and dressing their injuries, Lily draws you into a little alcove and looks up with shining eyes.  &quot;Why didn't we work out, my love?  Why isn't my hero always with me?&quot;</p><p><em>Just lie, Sakuya.  It's easy, you see people doing it all the time.</em></p><p>&quot;I sided with the king on the brothel tax, I killed a half-dozen of your best customers, and I accidentally called you 'Marisa'...twice.  For my part, the way you get amorous when I kill people is concerning.&quot;</p><p>Lily's beautiful eyes twitch, and she relaxes her embrace.  &quot;Quite.  Perhaps you should be heading off; any longer and I'll fall back into one of love or hate.&quot;</p><p>&quot;I do need to get to the palace.  Lil, you need proper security here.  Talk to Yrda Oarbreaker and Yuugi Hoshiguuma.  They're former Winter Tigers working as mercenaries, but they're getting up to our age and would happily retire from the field if you give them a good home.  I expect to see them here next time I visit.&quot;</p><p>You kiss her forehead, disentangle yourself, and walk back out into the snow.  You've burned enough time with this diversion.  Time to stalk the Dragon Blooded.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>It's not that people with low Charisma and Manipulation <em>can't</em> have successful relationships, but it doesn't help.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment47action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_47_FUNCTION_0

                });

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_48:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_48,
                    currentResponse: true,
                    currentResponseHTML: "<p>The king has been known to joke that on any given day you kill five people before breakfast; it wouldn't be true so often if he'd rise at a reasonable hour.  You've covered most of the city already today, but it's still firmly &quot;morning&quot; by palace time.  That, at least, the Tepet respected when they held the leash.  You wonder if the new masters will be so accomodating, or whether you'll find events already in motion once you reach the palace.</p><p>It seems one of the Realm's champions is active.  You see her before she spots you, but not to the extent you're accustomed - she must be very perceptive.  Against the brilliant white walls of the palace her white jade armour doesn't stand out despite its massive plates, but her long red hair shines as if adorned with rubies.  She's tall enough to make you doubt your distance for a moment, and built like a mountain.  You experience a sudden moment of empathy for poor Lily stretching up to touch your cheek.</p><p>Wait, those <strong>are</strong> rubies - her hair seems to be at least part gem.  She must be a child of the Earth Dragon.  Between the hair, her size and the enormous white jade tetsubo in place of the red jade daiklave you're looking for, you're convinced she's not your culprit.</p><p>But she must know him.  Given the way she hasn't taken her eyes off you since you came into view, you think there's a chance of convincing her to part with some information.</p><p>And she's somewhat pretty herself.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Dragon Blooded Aspects</strong></p><p>The Dragon Blooded are divided into five Aspects, each attuned to one of the elements - Air, Earth, Fire, Water and Wood.  All Dragon Blooded can learn the powers of every element, but those of the appropriate Aspect have an easier time using them.</p><p><strong>Artifacts and Jade</strong></p><p>The Exalted wield weapons that no mortal could lift and wear armour that would crush any human that donned it.  This is not just a matter of superhuman strength - Exalted can attune items made of the magical materials by flooding them with their essence, rendering them miraculously light.  Sakuya's gigantic new friend is undoubtedly strong, but even she wouldn't be able to use her artifact superheavy plate and her tetsubo without the power of essence.  Exalted weapons, such as the daiklave, are effective not only because they're magic, but because it's like being hit with a sharpened bulldozer blade.</p><p>There are five magical materials, each associated with a different type of Exalted.  We saw an orichalcum statue before, the metal of the Solar Exalted.  Jade is a kind of magical stone that is associated with the Dragon Blooded.  Unlike the other four magical materials, jade comes in five varieties, five colours matching the five elements (blue for Air, white for Earth, red for Fire, black for Water and green for Wood).  It's not necessary for a Dragon Blooded to wear the jade of her Aspect, but amongst the fabulously wealthy Dyansts of the Realm it is very common to do so.</p><p>Jade is vastly more common than the other materials, to the extent of serving as the currency of the Realm (though not so common that peasents are permitted to own it).  Celestial Exalted will sometimes use jade simply because it is so much easier to lay hands on, particularly those who have survived a Wyld Hunt and taken the hunters' panoply as trophies.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment48action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_48_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_49:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_49,
                    currentResponse: true,
                    currentResponseHTML: "<p>&quot;Pretty lady hello!  You are Elegant Three Sakuya?&quot;</p><p>She's making an effort, but her Skytongue is terrible, and you're perfectly fluent in High Realm.</p><p>&quot;I'm Sakuya.  They call me Thrice-Elegant, but I'm not sure where the first instance came from, let alone the third.  I have the honour of addressing...?&quot;</p><p>&quot;Oh, thank Pasiap, I wasn't looking forward to an entire conversation like that.  I'm Cathak Meiling.&quot;</p><p>Cathak.  They're a military House, the foremost after the Bull broke the Tepet under his golden heel.  You understand they're particularly conservative - while there isn't a <em>good</em> House to discover that your city is harbouring Anathema worship, Cathak might be the worst.</p><p>But you find it hard to dislike this one.  Her smile is infectious, her face honest and appealing, the strength of her blood suggesting a marble-like purity in her flesh.  Her eyes gleam blue; the irises probably are literal sapphires.</p><p>&quot;But if you'll agree to be my concubine, you can call me Misha!&quot;</p><p>Well that's a bit much, even for you.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Language</strong></p><p>Creation, much as the real world, has a myriad of languages and dialects.  For the purposes of the game, these languages are divided up into a few major families, with the assumption that if you speak one language in the family, you understand them all.  Every character knows their native language family, and one additional for each dot in the Linguistics Ability.  Thus with two dots Sakuya knows her native Skytongue, the Riverspeak trade-language family and High Realm, the language of the Scarlet Dynasty and official business with the Realm.</p><p>Meiling doesn't know Skytongue, as her garbled attempt at speaking it attests.</p><p><strong>Decadence</strong></p><p>Sakuya's travails aside, you haven't acidentally wandered into a romance manga; characters in Exalted are often motivated by sexual concerns, but only as part of their personal tapestry of ambition, hubris, vice and virtue.</p><p>But the Scarlet Dynasty has been on top of the world for eight centuries with no serious opposition.  While Immaculate doctrine paints the Dragon Blooded as elemental bodhisattvas, Dynastic society has a very broad streak of decadence.  Meiling's attempt to procure a local concubine is artless and hasty, but not unusual.</p>", 
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment48action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_49_FUNCTION_0

                });

                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_50:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_50,
                    currentResponse: true,
                    currentResponseHTML: "<p>&quot;Then I suppose I'll be calling you Lady Meiling.&quot;</p><p>The Earth Aspect laughs, but rests a gauntlet lightly on your shoulder.  She's quicker than she looks, and has no intention of ending the conversation prematurely.</p><p>&quot;Perhaps I'm being a little bold, but I'm much older than you and I know how these things work out.  I'm a Prince of the Earth and apt to have my way, you're a mortal and would gain much from an association with me.  It would even be to the benefit of your country, now that it's in my family's care!&quot;</p><p>She's perfectly serious.  You hope she isn't supernaturally persuasive, or you could be in trouble.  You've never dealt with anyone so utterly unafraid of you, someone who knew with absolute certainty that you had no capacity to harm her.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Social Combat</strong></p><p>Social combat is conversation intended to get results - an attempt to compel a target to behave in a certain way, or change her feelings on a given matter.  Mechanically, it works very much like the physical combat you've already seen, but with pools mostly built from social Attributes and Abilities.</p><p>A successful social attack does not inflict an injury, but instead obliges the target to choose between going along with the attack (e.g. becoming Misha's concubine, for a somewhat extreme example) or spending Willpower points to resist.</p><p>The social combat system relies on mortals having little Willpower, poor means of recovering it, and thus little incentive to resist reasonable attacks.  Player Characters don't fit that description; Misha is about to learn that Sakuya is extremely resilient to persuasion.</p><p>Social combat takes place over \"long ticks,\" which are considered to be a minute long (though the influence of stunts makes short ticks and long ticks feel very similar).  You may cancel social combat by taking an action to drop back into the short ticks of combat - generally by attacking your would-be persuader to force a Join Battle roll.  In this instance, that would be a <strong>terrible</strong> idea, as Meiling is a Prince of the Earth and would surely destroy Sakuya in a single blow.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment50action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_50_FUNCTION_0

                });

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_51:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_51,
                    currentResponse: false,
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Unexpected Attacks</strong></p><p>Meiling's bluntness is more subtle than it appears - she's attempting to launch a social surprise attack.  A character subjected to an unexpected attack has her DVs set to 0 against that attack.  Attempting a surprise attack is an <strong>opposed roll</strong> - both sides roll a pool of dice, with the attacker needing to roll more successes than the defender.  In physical combat, the attacker rolls Dexterity + Stealth while the defender rolls Wits + Awareness.  In social combat, the roll is Manipulation + Socialise versus Perception + Investigation.</p><p>Meiling's pool is 7 dice: Manipulation 2 + Socialise 3 + stunt 2.  She spends a Willpower point for an automatic success and we'll assume she rolls 3 more, for a total of 4.  That becomes the difficulty of your Perception + Investigation roll to avoid surprise.</p><p><strong>Wait, did she just stunt?</strong></p><p>Heroic NPCs can stunt.  The extent to which they'll do so depends on your ST and group, but it's safest to assume that Exalted antagonists will be stunting, spending Willpower for successes and activating their Virtues as a PC would.</p>Note that stunt bonuses are particularly easy to earn in social combat, as just speaking in character is worth 1 die.</p>",
                    actionDiceRoll: true,
                    actionAttribute: CONSTANT_TRAIT_PERCEPTION,
                    actionAbility: CONSTANT_TRAIT_INVESTIGATION,
                    validVirtues: new Array(CONSTANT_TRAIT_CONVICTION, CONSTANT_TRAIT_TEMPERANCE),
                    actionStunts: new Array({

                        key: "sakuyaMishaSurpriseAttackStunt1",
                        used: false,
                        rating: 2,
                        text: "&quot;You mean to catch me off balance, but I saw you watching me as I approached, and I know how I must have appeared in the morning sunlight with the docks and city behind me.  Your romantic intentions were already obvious.&quot;"

                    }, {

                        key: "sakuyaMishaSurpriseAttack2",
                        used: false,
                        rating: 2,
                        text: "&quot;My lady, are you assuming I've never dealt with a Dynast?  I was proposed to by a Tepet not twenty yards from here.&quot;"

                    }),
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment51action0",
                    type: "button",
                    value: "Roll Perception + Investigation to detect suprise attack",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_51_FUNCTION_0

                });
                
                /*

                returnObject.actions.push({

                    id: "segment51action1",
                    type: "button",
                    value: "&quot;You mean to catch me off balance, but I saw you watching me as I approached, and I know how I must have appeared in the morning sunlight with the docks and city behind me.  Your romantic intentions were already obvious.&quot; and Roll Perception + Investigation to detect suprise attack",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_51_FUNCTION_1

                });

                returnObject.actions.push({

                    id: "segment51action2",
                    type: "button",
                    value: "Spend a willpower point for an automatic success, and &quot;You mean to catch me off balance, but I saw you watching me as I approached, and I know how I must have appeared in the morning sunlight with the docks and city behind me.  Your romantic intentions were already obvious.&quot; and Roll Perception + Investigation to detect suprise attack",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_51_FUNCTION_2

                }); */

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_52:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_52,
                    currentResponse: false,
                    currentActionText: true,
                    currentActionHTML: "<p>You did not roll enough successes to meet the difficulty.  You are surprised by Meiling's attack; you will automatically lose Join Debate (rolling 0 successes).  In the meantime your MDVs will be 0.</p><p>Join Debate is a Wits + Awareness roll, functioning exactly like Join Battle.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment52action0",
                    type: "button",
                    value: "Join Debate",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_52_FUNCTION_0

                });
              

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_53:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_53,
                    currentResponse: false,
                    currentActionText: true,
                    currentActionHTML: "<p>You rolled enough successes to meet the difficulty.  You are not surprised by Meiling's attack and will roll <strong>Join Debate</strong> normally.</p><p>Join Debate is a Wits + Awareness roll, functioning exactly like Join Battle.</p>",
                    actionDiceRoll: true,
                    actionAttribute: CONSTANT_TRAIT_WITS,
                    actionAbility: CONSTANT_TRAIT_AWARENESS,
                    validVirtues: new Array(CONSTANT_TRAIT_CONVICTION, CONSTANT_TRAIT_TEMPERANCE),
                    actionStunts: new Array({

                        key: "sakuyaMishaJoinDebateStunt1",
                        used: false,
                        rating: 2,
                        text: "&quot;I glance at the mon on her armour, burning it into my mind.  She is pretty, but she is one of our oppressors.&quot;"

                    }, {

                        key: "sakuyaMishaJoinDebateStunt2",
                        used: false,
                        rating: 2,
                        text: "&quot;The snow reminds me that my home is cold; so too must be my heart.&quot;"

                    }),
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment52action0",
                    type: "button",
                    value: "Join Debate",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_52_FUNCTION_0

                });


                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_54:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_54,
                    currentResponse: true,
                    currentResponseHTML: "Meiling is clearly given more to the martial arts than the social; her stance speaks of a regimen of training that would overwhelm even Sifu.  Yet she is as serious about this conversation as any battle.  Underestimating her will swiftly see you under her power.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment54action0",
                    type: "button",
                    value: "First Action",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_54_FUNCTION_0

                });


                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_55:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_55,
                    currentResponse: true,
                    currentResponseHTML: "<p>There is a particular comfort in entering the palace:  it is older than the Realm.  It has no power to help you resist the Dragon Blooded, but it will be here when the Scarlet Dynasty has fallen, as it was when the Shogunate fell eight centuries ago.</p><p>It is said Makai First-King built the palace himself from a single gigantic block of white stone, dragged up from the bottom of the ocean.  He meditated atop it for ten days, then carved the palace in one.  A legend, but the building itself doesn't contradict it.  The walls are white and seamless, and have never needed paint or repair.  If the city's situation had any strategic importance, the Tepet would have garrisoned it themselves merely to possess such a splendid fortress.</p><p>The keep is at the back of the structure.  From the gates, you're obliged to cross two large courtyards before reaching it; an invader would do so under heavy arrow fire.  Both courtyards are crowded, the outer with the living and the inner with the dead.</p><p>The soldiers occupying the outer courtyard are a far cry from the levies you cut down in Lily's parlour.  They're Imperial Legion, heavy foot intended to serve as the elite backbone of a standing professional army.  There's perhaps a hundred of them, all bearing the House Cathak mon.  They give way to you with disciplined courtesy, well briefed on the local notables.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment55action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_55_FUNCTION_0

                });


                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_55A:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_55A,
                    currentResponse: true,
                    currentResponseHTML: "<p>The crowd in the inner courtyard is more familar, unchanged during your lifetime.  Every ruler of Makai back to Youki Second-King is interred here, their ashes sealed inside a statue depicting them at the age they took the throne.  The features of the eldest have become worn, some even cracking from ice forming in tiny fissures in the stone.  There are over fifty of them, and even the newest - that of the present king - was carved over a century ago as he took the throne as a young man.  It is the only one missing sacrificial offerings and burning incence, for while all of Makai shows filial piety to the king, he's obliged to die before becoming an ancestor to the nation.</p><p>Youki and his nearest descendents give you a vague and irritating sense of recognition.  This often happens; after what's said to be sixteen centuries of snow, wind and rain their features are worn and suggestive, making it easy for your pattern-loving mind to map them to living faces.  But it seems worse today.  You wonder if the Cathak will tolerate the statues as the Tepet did.  Their Immaculate faith frowns on representational art in any kind of religious context, but prefers ancestor cults to the heretical act of worshipping gods.</p><p>The mosaic under your feet would pass muster, for it is impossibly abstract and likely meaningless.  It is as imperishable as the rest of the palace, and said to be Makai First-King's parting message to his beloved people.  Every day as you walk over it you try to tease out a meaning, and every day you sigh and keep moving, sure that you're only trying to imprint sense on utter chaos.  Today is no different.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment55action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_55A_FUNCTION_0

                });


                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_56:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_56,
                    currentResponse: true,
                    currentResponseHTML: "<p>Inside the keep, yet more Cathak house troops wait, ignoring the resentful eyes of palace staff and guards unhappy to have swords at their king's throat.  The imperials have little reason to fear; beyond their superior training and equipment, they have an invincible protector, a Prince of the Earth clad in blue jade leaning against one of the columns of the main hall.</p><p>Apart from her light blue hair, she looks more human than Meiling.  Whether that marks her as less powerful or merely of less dignified blood you cannot say.  But in Meiling's eyes a perfectly human infatuation was revealed; this Air Aspect's gaze has all the warmth and empathy of a glacier.  She looks at you for a second before losing interest.  You're just another animal to her, of no threat and no value.</p><p>Neither soldiers nor Dragon Blooded impede you, though you feel cold eyes on your back for another lingering second as you proceed into the heart of the keep.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment56action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_56_FUNCTION_0

                });


                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_57:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_57,
                    currentResponse: true,
                    currentResponseHTML: "<p>The king has two audience chambers, one intended to reinforce his authority and glory as heir to the legacy of Makai himself, the other used for negotiations with the Realm.  You haven't been in the latter since the Bull of the North set the heads of your Tepet overlords on pikes, but there's no doubt it's in use today.</p><p>You find the king at breakfast, a skylight illuminating the generous spread with late-morning sunlight.  The old man - and he is very old indeed - is eating slowly but heartily, having sampled each dish to assure his guests that no poison is in play.</p><p>One of the guests, a handsome mortal gentleman in rich attire emblazoned with the Cathak mon, is taking full advantage of the hospitality.  You dismiss him almost instantly as weak in body and mind, like to grow fat and stupid while posted to this peaceful satrapy.  The other, his breakfast untouched, is a Prince of the Earth, his red jade plate less massive than Meiling's but still putting any mortal gear to shame.  He has brought his weapon to the table, a daiklave likewise of red jade...a tiny chip barely visible about two-thirds up the length of its massive blade.</p><p>This is the man who destroyed the shrine and murdered its priest.  This is your quarry, named by his cousin as Cathak Crimson Rain.</p><p>He is as handsome as his mortal companion, but without any softness.  Both would certainly appeal to the king's tastes, but you think he'd be in greater danger of attachment to the Exalt.  Men of physical power and forceful personality wielded great and unrighteous influence in his court before he mastered his heart and replaced his ministers and guardians with women.  This one would be far worse - even without the evidence you've gathered so far, you'd know he was a Fire Aspect, for even at rest he smoulders with ambition and potential violence.  You judge his martial stance inferior to Meiling's, and indeed your own, but you should not like to fight him.  Between his Exalted wargear and the fire at his command no amount of superior technique would avail you of victory.  You reflect on Sifu's warnings and grudgingly ensure your own stance offers no threat.</p><p>&quot;Ah, my Champion has joined us.&quot;  The king is all smiles, but you see the tightness around his eyes.  He is not enjoying this breakfast with handsome young men as he normally does; you have the distinct feeling he'd prefer you were not involved in the tension at the table.  You've never been one to do your duty through blind obedience.  &quot;My lords, this is Sakuya Thrice-Elegant, who wields my sword on my behalf.  Sakuya, this is Lord Cathak Sorel, our new satrap, and his advisor, Lord Cathak Crimson Rain.&quot;</p><p>The <strong>mortal</strong> is the satrap.  House Cathak is not making much of an investment in Makai.</p><p>Both men pay you more attention than the Air Aspect did, though you're clearly not intimidating either of them.  The satrap doesn't have the wit to see past your beauty to the danger you pose; the Prince of the Earth does but has no reason to care.</p><p>&quot;Shouldn't you be with my betrothed?&quot;</p><p>You decide that you do not like Cathak Crimson Rain.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment57action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_57_FUNCTION_0

                });


                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_58:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_58,
                    currentResponse: true,
                    currentResponseHTML: "<p>&quot;She was kind enough to give me leave to perform my duties, my Lord.&quot;  You'd hoped to avoid speaking at all; it's clear from the Exalt's expression that he's picked up on your hostility.  You bend down to the king's ear and whisper a quick explanation.  &quot;I've become a concubine, Makai-sama.  She's quite lovely, you'll have to congratulate us later.&quot;</p><p>&quot;I thought you'd like her.  A pity I won't be able to bless the union as a marriage.&quot; mutters the king with the practiced discretion of a diplomat.  As with every ruler since Youki, he gave up his name upon taking the throne, and will only reclaim it in death.  For a century he has been &quot;Makai,&quot; the father of the people, much as Sifu gave up his name for the sword.</p><p>You take your position standing behind the king's right shoulder, and with the disruption of your entrance past, the conversation resumes as if you were not there.  All three men obviously have practice disregarding bodyguards.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment58action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_58_FUNCTION_0

                });


                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_59:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_59,
                    currentResponse: true,
                    currentResponseHTML: "<p>&quot;She was kind enough to give me leave to perform my duties, my Lord.&quot;  You'd hoped to avoid speaking at all; it's clear from the Exalt's expression that he's picked up on your hostility.  You bend down to the king's ear and whisper a quick explanation.  &quot;Cathak Meiling seeks me as a concubine, Makai-sama.  She's quite lovely, but I've managed to put her off for now.&quot;</p><p>&quot;She is the best of them.  I'll leave the decision in your hands, dear Sakuya.&quot; mutters the king with the practiced discretion of a diplomat.  As with every ruler since Youki, he gave up his name upon taking the throne, and will only reclaim it in death.  For a century he has been &quot;Makai,&quot; the father of the people, much as Sifu gave up his name for the sword.</p><p>You take your position standing behind the king's right shoulder, and with the disruption of your entrance past, the conversation resumes as if you were not there.  All three men obviously have practice disregarding bodyguards.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment58action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_58_FUNCTION_0

                });


                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_60:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_60,
                    currentResponse: true,
                    currentResponseHTML: "<p>&quot;I appreciate your willingness to share stories of all your illustrious forebears, sir.&quot;  Crimson Rain makes little effort to conceal the sarcasm implicit in his characterisation of Makai's rulers, but it doesn't visibly upset the present king.  There's a compelling intensity to the Fire Aspect's voice, polished and insidious where Meiling was rough and charming.  &quot;But it is your founder that I am most interested in, as a historian.  I have already heard many delightful stories of Makai First-King's deeds, but nothing of how the crown passed to his son.&quot;</p><p>The present Makai smiles with genuine warmth, but none of the strength you are used to seeing.  The old man does not have the will to resist Crimson Rain; you might be the only one in the country who does.</p><p>&quot;My lord, I am afraid that is the sharp line between myth and history.  We know Youki was a man of mighty deeds, worthy even of slight mention in the records of the Shogunate.  Of Makai we have only outlandish legends.  He is mentioned in no other history.  For all we know, Youki fabricated the tales to establish his own legitimacy.&quot;</p><p>&quot;You don't believe that.&quot;  Crimson Rain leans forward in his seat, unwilling to be sidetracked.  He is already far taller than the king, and in this room the guests sit in higher, grander chairs than the ruler.  Your beloved king is not on his knees, but he is in a position of such weakness that you can barely bring yourself to watch.  You lock your hands behind your back, keeping them well away from the sword you are longing to draw.</p><p>&quot;I am a product of my people, my Lord.  I have a filial duty to Makai First-King, and I must love him as I do my own father.  It does not follow that I'd seek to mislead a historian making honest judgements on the evidence.  All I can say is that I did my best to work with House Tepet to prove to the satisfaction of the Immaculate Order that Makai was no god, and we do no heresy in sacrificing to his health in the Underworld.&quot;</p><p>The satrap snorts as his Exalted cousin formulates a reply.  &quot;Let's have no talk of Tepet here any longer!  They proved themselves a worthless House, losing their blood and legions to a mere handful of Anathema and a few savages - and not even killing one of the demons!  You won't see that sort of weakness from House Cathak, I can tell you.&quot;</p><p>And then it all makes sense.  Crimson Rain knows Makai wasn't a god.  He was an <strong>Anathema.</strong>  The ancestor cult is an unwitting Anathema cult, and judging by that orichalcum statue it didn't start unwitting.  If Crimson Rain wants to know how Makai died, then he is looking for a tomb, for the grave goods of an ancient god-king.  You need to find it first.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Automatic Success</strong></p><p>We roll dice in RPGs to add drama - there is the suspense of the roll, and the dramatic promise of the different outcomes.  When there is little suspense due to the character's overwhelming skill, and where the consequences of a failed roll hold little interest, the ST may grant automatic success on the roll.</p><p>You must have seven dice in a pool to qualify for an automatic success on a difficulty 1 roll.  You need three more dice for each subsequent point of difficulty (eg 10 for difficulty 2, 13 for difficulty 3 and so on).  Automatic success rarely applies to rolls of difficulty 4 or more, and never in scenes of dramatic conflict, such as combat or social combat.  If the ST invokes this rule, it grants only a threshold 0 success, so the player may choose to roll anyway for a better threshold.</p><p>We've granted Sakuya automatic success on a Perception + Investigation roll to divine Crimson Rain's intent.  This would be a low difficulty roll owing to the amount of evidence she's collected already, and her base pool is 10 even before a stunt.  Most importantly, because this is a tutorial and thus proceeds in a fairly linear fashion, we're not interested in Sakuya failing this roll - you wouldn't learn anything from it, we'd just have you repeat the roll until you succeed (at a cumulative +1 difficulty each time, which is the standard retry penalty).  In a normal game, the ST might be <em>very</em> interested in the prospect of Crimson Rain potentially getting to the Tomb of Makai first, and would have you make the roll.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment60action0",
                    type: "button",
                    value: "Throw the red jade chip on the table and offer to help find the tomb",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_60_FUNCTION_0

                });

                returnObject.actions.push({

                    id: "segment60action1",
                    type: "button",
                    value: "Leave the room without a word",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_60_FUNCTION_1

                });


                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_61:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_61,
                    currentResponse: true,
                    currentResponseHTML: "<p>You toss the chip of red jade onto the breakfast table.  It slides between plates of fruit, sweatmeats and herrings, coming to a stop at the untouched food of its owner.</p><p>Crimson Rain stands in a sudden fury, his mortal cousin recoiling as flames roll off his jade armour.  The table smokes and chars where his fingers grip it.  You'll need to talk fast.</p><p>&quot;I'm a good detective, my Lord.  Let me help you find the tomb.  We don't want trouble with House Cathak.&quot;</p><p>You're not sure whether his anger dies or is merely leashed, but the Exalt masters his flames and his expression calms.  &quot;It's just as Meiling said, this city does boast a remarkable mortal.  Get searching, woman.  You've made a promise to House Cathak, you will bitterly regret breaking it.&quot;</p><p>You give the king's shoulder a reassuring squeeze and then make for the door.  Crimson Rain will certainly have you followed, assuming he doesn't try to shadow you himself.  You don't have much time.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment61action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_61_FUNCTION_0

                });


                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_62:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_62,
                    currentResponse: true,
                    currentResponseHTML: "<p>You touch the king's shoulder, nod as he looks up, and then simply leave.</p><p>&quot;I say, where did your Champion go?  I'd hoped to speak with her later.&quot;</p><p>&quot;My apologies, Lord Sorel, since it was perfectly obvious that I am entirely safe in the hands of House Cathak, she took her leave that she might contribute usefully elsewhere.  She had no intention of disrupting our conversation.&quot;</p><p>&quot;Like as not she's gone to flirt with my Meiling.  Certainly the best use of her time.  Now, for the last time, sir, do you or do you not know where Makai First-King is entombed?&quot;</p><p>The voices fade as you walk away briskly; you hear no more and do not care to.  You are buying time with the coin of the king's safety.  You'd best keep your purchases to a minimum.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment62action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_61_FUNCTION_0

                });


                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_63:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_63,
                    currentResponse: true,
                    currentResponseHTML: "<p>The Air Aspect and her soldiers have not moved, but this time you seem to catch her attention.  Cold eyes follow you as you cross the main hall of the keep, and you struggle against the instinct to draw your sword.</p><p>For all the tension, you do cross the room unmolested and escape the icy gaze.  But you cannot shake a premonition of blood, and the other woman senses it too - soon, it will be blades and death between you.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment63action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_63_FUNCTION_0

                });


                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_64:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_64,
                    currentResponse: true,
                    currentResponseHTML: "<p>The inner courtyard is bright, bathed in sunlight far more intense than when you were here just minutes before.  You walk slowly to the centre, feeling the eyes of fifty generations of kings and queens upon you, all thoughts of hurry gone from your mind.</p><p>&quot;Look up, my daughter, upon the face of the one who has Chosen you.&quot;</p><p>The voice comes from the endless sky and seems to shake the earth, but you are not afraid.  As you turn your face to the sun, you know you will never be afraid again.</p><p>&quot;You whose eyes see keener than any mortal woman, I give you sight unsurpassed, that you may find the unrighteous wherever they hide.  You whose virtues blaze with heroic vigour, I give you a light imperishable to carry into the darkness and burn it away.  You whose sword is unmatched amongst humankind, I give you might beyond measure, that none amongst the wicked might escape the terror of your blade.</p><p>In My wrath, I had turned My face from the world, but no longer.  I have set My eyes upon Creation and seen the hero worthy to carry the legacy of My beloved son Makai.  You whose fathers have sacrificed their names, know that I am now your father, and My name is <strong>The Unconquered Sun</strong>.  You are the Hope of the Dawn, the Light of the New Day, and you will throw down the unrighteous in My name.&quot;</p><p>The light dims, but you have your own light, an imperishable holy fire that blazes from your soul and burns upon your brow with the mark of the Dawn.  Fifty generations of stone kings and queens kneel upon their plinths before the new Solar Exalted, before the Prince of the Earth.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment64action0",
                    type: "button",
                    value: "Exalt",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_64_FUNCTION_0

                });


                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_65:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_65,
                    currentResponse: false,
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Exaltation</strong></p><p>Sakuya is now a legal starting Solar Exalted, the default playable character type for the game.  When you first sit down to play Exalted with your friends, you'll have a character of your own very much like Sakuya is now.</p><p>In-character, Sakuya has had an ancient and imperishable shard of power grafted onto her soul, awakening her essence and bestowing upon her the ability to manipulate it in the form of Charms.</p><p>Out of character, the Exaltation has made some changes to Sakuya's traits, mostly in the new &quot;Exalted Advantages&quot; section at the bottom of the character sheet.</p><ul><li>Her <strong>Motivation</strong> has been upgraded, to reflect the greater scope of her capabilities.</li><li>Her character type is now <strong>Solar Exalted</strong>.  She still counts as Heroic, but now benefits from the various natural advantages of the Exalted state.  She rounds up when calculating DVs, is far less susceptible to bleeding and infection, gains full access to stunts (though in this tutorial she's had that all along, in order to teach you the rules you'll actually use) and adds half her Stamina to her lethal soak, amongst many other benefits throughout the system.</li><li>Sakuya now has a caste - the <strong>Dawn Caste</strong>.  While most Solars can fight, the Dawn are specialist warriors and generals.</li><li>All of Sakuya's Dawn Caste abilities and five others are now <strong>Favoured</strong>.  This doesn't mean much in play, but makes it cheaper to buy these abilities and their associated Charms.</li><li>We've removed Sakuya's <strong>Backgrounds</strong> to reflect her new status as one of the &quot;Anathema&quot;.  She won't be able to operate openly in a Realm satrapy without drawing the Wyld Hunt, so she's lost her Influence and Resources, which derive from her position as Champion.  Sifu and the king are not powerful enough to count as Allies, though they will remain well-disposed.  We'll replace them with seven dots of Backgrounds (the normal starting amount) appropriate to her new station shortly.</li><li>Her <strong>Essence</strong> trait is now 2.  Essence represents cultivation of the soul, and is an indicator of the character's mystic power.  It contributes to the size of the mote pools a character uses to fuel her Charms, and must be raised to access higher tiers of Charms.  All creatures have an Essence score, but creatures of the same Essence are not equal - Meiling has Essence 3, but even with the bonuses provided by her Breeding background has less motes than Sakuya at Essence 2, and much less powerful Charms.</li><li>Sakuya now has a <strong>Virtue Flaw</strong> and can gain Limit.  This is the effect of the Great Curse laid upon the Exalted by the dying Primordials long ago; it's a source of drama in-game but won't impact this tutorial.</li><li>Finally, she now has <strong>Charms</strong>, which are the powers that truly seperate the Exalted from mortals.  Click on the Charms to see their descriptions.</li></ul><p><strong>Excellencies</strong></p><p>We saw Meiling use the First Presence Excellency to add dice to her Presence rolls.  Here we see Sakuya knows the First Excellency for Melee, and the Second Excellency for Investigation and Awareness.</p><p>Each Ability has three Exellencies - the first adds dice to rolls, the second adds successes, and the third allows a reroll on a failed roll.  The first and second make excellent choices for your first Charm in an Ability; the third is incompatible with them and less popular.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment65action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_65_FUNCTION_0

                });


                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_66:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_66,
                    currentResponse: true,
                    currentResponseHTML: "<p>You remember running across the Inner Sea in sorrow.  Your daiklave was wet with the blood of dragons, some friends and trusted vassals, some the faceless legions whose names you'd never troubled to learn.  You lost count of how many you killed.  Not enough.</p><p>You mourned your brothers and sisters, ambushed and slaughtered, albeit at immense cost in Dragon Blooded life.  You mourned your failure, unable to save them from their rebellious vassals, unable to save them from the vile excesses and hubris that had surely provoked the massacre.  You were not immune to hubris yourself.</p><p>You remember Youki, your only living son, a mortal.  You had so little time to explain to him, and though you left him Tiger Warriors for guards, only one thing could ensure his safety.</p><p>You remember the great block of white stone, though not how you obtained it - perhaps a god discharged their fealty with one last gift to the Prince of the Earth.  You meditated atop it for days, sure that the Dragon Blooded would come, sure that your work could be done only in snatched moments between battle.  When they did not, you put your daiklave to its penultimate task: carving your tomb in a single day.</p><p>You remember sealing yourself beneath the inner courtyard, lighting the darkness of your final abode with your anima.  You considered the impossibility of what had occured, sure that hidden hands had pulled at Dragon Blooded strings.  But you had committed grevious sins of blindness, and abdicated your right to carry light into the darkness.  It would not be long before the Unconquered Sun chose another hero to bear the Exaltation that had been yours.  The mystery belonged to them, and the new day.</p><p>You remember sealing much of your daiklave's power, the full might of your beloved orichalcum companion being too much for whatever young Solar would come to claim it.  You remember composing your death poem with bittersweet hope for the future.  You remember the sting of orichalcum sliding through your flesh.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Dreams of the First Age</strong></p><p>The Exaltation can carry memories of those whom it empowered in elder days.  The extent to which this affects your character is up to you.</p><p>Sakuya's visions are probably on the high end of detail and clarity, but they're of a very common type:  directions to the location of her previous incarnation's tomb, that she might get some starting Artifacts.</p><p><strong>Sealing the Power of His Daiklave?</strong></p><p>Sakuya remembers Makai powering-down his daiklave.  This isn't a canon element of Exalted, but an example of the sort of justification players might use to resolve a problem with orichalcum artifacts:  it's thematic and cool to recover and use the weapons of your past life, but they should be so powerful as to be prohibitive in Artifact background cost and unbalancing to have available at the start of play.  The Solars of the First Age were rulers of a world awash in magical technology; their weapons should be far beyond those produced today by Dragon Blooded smiths in a fallen world.  Yet Sakuya simply can't afford that as a starting character - we're just leaving open a story possibility for the weapon to be improved later in her career.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment66action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_66_FUNCTION_0

                });


                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_67:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_67,
                    currentResponse: true,
                    currentResponseHTML: "<p>You awake from your reverie of ancient days to see that the statues of Makai's descendants remain kneeling, a miracle to mark your ascension.  You breathe deeply and taste the essence in the air, aware but utterly unafraid of the Dragon Blooded making her way towards you through the genuflecting statues of kings and queens.</p><p>She seems smaller, somehow.  Softer, though she has taken a essence-fused stance that strengthens her flesh.  Vulnerable, though her goremaul is in her hands.  She would be a difficult opponent, even now, but in the end she has no power to harm you; you would not allow it.  You can't help but find the situation somewhat charming.</p><p>&quot;...Lady Sakuya?&quot;  Meiling's eyes do not show fear, but great confusion.  She hasn't decided exactly what it is that she's seeing - what she <strong>wants</strong> to see.</p><p>&quot;Did you almost address a Chosen of the Unconquered Sun as 'Snowflake?'  You should have - it'd make for a better story.&quot;</p><p>&quot;Chosen, eh?  I remember the monks warning us at school that the Anathema had prettier names for themselves than we did.&quot; she looks at your caste-mark, the burning sunburst on your brow.  &quot;I suppose you don't answer to 'Forsaken' either?&quot;</p><p>&quot;Dawn.&quot; you correct her gently, from ancient instinct.  &quot;I think he liked my swordwork.  I'm the same woman you wanted for a concubine, Meiling.  I haven't been eaten by a demon, and I still know right from wrong.  I've been Chosen to do something about it.&quot;</p><p>The Earth Aspect stares at you, your beauty lit by an unquenchable inner fire, your bearing regal and fearless, your caste mark burning proudly.  You listen to her heart thumping in her chest, for all that she maintains the outer composure of a mighty martial artist.  Finally, she makes her choice, and drops to one knee.</p><p>&quot;I am your soldier, Prince of the Earth, if you will have me.&quot;</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Dragon Blooded Loyalties</strong></p><p>The prejudice against the &quot;Anathema&quot; is propogated throughout Creation, but it is cultural, not instinctive.  The Dragon Blooded hunt the Solar Exalted because they have been taught to do so and because the Lawgivers represent a titanic threat to their hegemony, not from any kind of mystical compulsion.</p><p>Even Solars without any special gifts for leadership (such as Sakuya, whose Charisma problem hasn't been fixed by Exalting) can be attractive figures for fealty or even worship.  They are heroes of incredible power, often working towards righteous ends, whose aesthetic is flashy and glorious.  They can be expected to attract many to their banners, even those raised to hate them.  It's perfectly reasonable for your character to seek to convert foes to their cause rather than kill them all, and Dragon Blooded are amongst the most appropriate candidates.  Early on they won't be easy to recruit, but a dissafected Dynast or a Dragon Blooded who grew up outside the Realm might be willing to throw their lot in with a glorious young hero.  Later, while you'll probably never recruit many Immaculate Monks, you may find many amongst the Dragons' Chosen interested in defecting to the winning side.</p><p>In Meiling's case, her loyalty to her family and the Realm was tenuous to begin with, and she's in love.  That's a fickle emotion, so we'll spend a Background dot to make her an Ally and cement her loyalty.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment67action0",
                    type: "button",
                    value: "&quot;Rise, Meiling, first of my soldiers.&quot;",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_67_FUNCTION_0

                });

                returnObject.actions.push({

                    id: "segment67action1",
                    type: "button",
                    value: "&quot;Stand up, Misha, of course I'll have you.&quot;",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_67_FUNCTION_1

                });


                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_68:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_68,
                    currentResponse: true,
                    currentResponseHTML: "<p>Meiling regains her feet and throws a languid salute.  &quot;I've never served in the Wyld Hunt, but I've trained for it, as have my cousins.  They'll try to wear down your essence by flooding you with soldiers before they move in themselves for the kill.  You won't need my help against Crimson Rain and Vedara, but there's one hundred men and women behind me that could deliver them victory.  I aim to see they never gain this courtyard.&quot;</p><p>She turns and strides with determination towards the outer courtyard.  You expect she'll be as good as her word - she's not as powerful as you are now, but she looks much hardier.  Those soldiers would have better hope of moving a mountain.</p><p>&quot;...Lady Sakuya?&quot;  she stops halfway to the gates; you can see beyond her to where the soldiers ready themselves, aware that some trouble is afoot.  &quot;I had the strangest feeling as I saw you walk up the snowy path to the palace.  I didn't really want you to be my concubine.  I found myself wanting to be yours.&quot;</p><p>You can't help but smile.  &quot;Save that talk for our victory, soldier.&quot;</p><p>She laughs, bearing down on her mortal countrymen with fierce resolve, at last finding her place in Creation.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment68action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_68_FUNCTION_0

                });


                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_69:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_69,
                    currentResponse: true,
                    currentResponseHTML: "<p>You sense that she'll steal a kiss even before she's fully resolved to do so.  It's not unwelcome, and in any case you'd have to parry to avoid it, which would just be absurd.  She breaks off quickly, all too aware that time is not your ally.</p><p>&quot;I've never served in the Wyld Hunt, but I've trained for it, as have my cousins.  They'll try to wear down your essence by flooding you with soldiers before they move in themselves for the kill.  You won't need my help against Crimson Rain and Vedara, but there's one hundred men and women behind me that could deliver them victory.  I aim to see they never gain this courtyard.&quot;</p><p>She turns and strides with determination towards the outer courtyard.  You expect she'll be as good as her word - she's not as powerful as you are now, but she looks much hardier.  Those soldiers would have better hope of moving a mountain.</p><p>&quot;...Misha.  I don't think concubine is an appropriate title for a Prince of the Earth...but I might find myself in need of a wife.&quot;</p><p>She laughs, bearing down on her mortal countrymen with fierce resolve, at last finding her place in Creation.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment68action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_68_FUNCTION_0

                });


                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_70:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_70,
                    currentResponse: true,
                    currentResponseHTML: "<p>Meiling is going to create a big disturbance.  You can hear another brewing inside the keep.  You anticipate the Fire and Air Aspects will be on you within a minute, with at least a dozen soldiers.</p><p>You're going to need a daiklave.</p><p>If Makai's ancient memories are to be trusted, there should be one directly beneath your feet.  It's just a matter of solving the puzzle of the mosaic and finding the entrance - the puzzle you've made no progress on in over a decade.  That no-one has solved in over a thousand years.</p><p>The Unconquered Sun did promise you &quot;unsurpassed sight...&quot;",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Using Charms</strong></p><p>Charms, unless they state otherwise, are only usable with their relevant Ability.  In this instance, as Sakuya will be taking an Investigation action to solve the puzzle-mosaic and enter Makai's tomb, so if she's to enhance that action, she'll need to use her Investigation Charms.</p><p>Charms come in five types:<ul><li><strong>Simple:</strong> The Charm is an action in its own right, with its own Speed and DV penalty if in combat (typically 6/-1).  You can only use one Simple Charm at once; they cannot be used as part of a Flurry action.</li><li><strong>Supplemental:</strong> the Charm is used to enhance one of your actions.  You may use any number of applicable Supplemental Charms on an action.</li><li><strong>Reflexive: </strong> you may activate this Charm at any appropriate time.  Excellencies are Reflexive, and thus may be used to enhance any dice pool of the appropriate Ability (for example, we only saw Meiling use her First Presence Excellency on her action, as if it was a Supplemental Charm.  However, since it's Reflexive, she could have used it to boost her Parry MDV against Sakuya's attacks if she wished).</li><li><strong>Extra Action:</strong> this Charm generates a magical flurry with no multiple action penalties and using only the highest DV penalty from the flurry rather than the total.  Non-combat Extra Action Charms are rare.</li><li><strong>Permanent:</strong> this Charm is always active.  Ox-Body Technique, which grants permanent extra health levels, is a good example.</li></ul></p><p>Sakuya only has two Investigation Charms, and both of them are applicable to the situation.  Crafty Observation Method allows a thourough Investigation action, which would normally take 15 minutes, to be performed in an instant.  It's a Simple Charm, so she wouldn't be able to use it in conjunction with any other Simple Charm, but she may enhance the action it creates with as many valid Supplemental or Reflexive Investigation Charms as she pleases.  The Second Investigation Excellency is a Reflexive Charm that adds successes to Investigation rolls.  It's a solid combination</p><p><strong>The Dice-Adding Cap</strong></p><p>Each Exalt type can only add a certain maximum number of dice to a pool via any combination of Charms.  For Solars, that's the appropriate Attribute + Ability - so for a Perception + Investigation roll, Sakuya could add a total of 10 dice via Charms.  Dragon Blooded may add the appropriate Ability + Specialty (so a maximum of 8 dice).  This is only a minor edge for the Solars; their status as most powerful of the Exalted comes from Charms that amplify the effects of their rolls and create otherwise impossible effects.  Don't over-rely on Excellencies!</p><p>Automatic successes (such as those added by the Second Excellency) usually count as two dice each for the purpose of the dice cap.  Thus Sakuya could add 5 successes to a Perception + Investigation pool (or 2 successes and 6 dice and so on).</p><p><strong>Putting it All Together</strong></p><p>Solving the riddle mosaic and opening Makai's tomb is an epic task - difficulty <strong>10</strong> - and Sakuya has very little time in which to accomplish it before the Cathak attack.  You'll need to use every resource at your disposal to give her a chance of success.</p><p>Use Crafty Observation Method and try to get as many bonus dice and automatic successes as you can:</p>",
                    actions: new Array(),
                    actionDiceRoll: true,
                    actionAttribute: CONSTANT_TRAIT_PERCEPTION,
                    actionAbility: CONSTANT_TRAIT_INVESTIGATION,
                    actionSpecialty: CONSTANT_SPECIALTY_INVESTIGATION_PHYSICAL_CLUES,
                    actionCharms: new Array(CHARM_SOLAR_CRAFTY_OBSERVATION_METHOD, CHARM_SOLAR_SECOND_INVESTIGATION_EXCELLENCY),
                    validVirtues: new Array(CONSTANT_TRAIT_CONVICTION),
                    actionStunts: new Array({

                        key: "sakuyaTombPuzzleStunt1",
                        used: false,
                        rating: 2,
                        text: "&quot;The statues are the problem.  I look at the patterns surrounding them and infer what must be under the plinths.&quot;"

                    }, {

                        key: "sakuyaTombPuzzleStunt2",
                        used: false,
                        rating: 2,
                        text: "&quot;The Unconquered Sun's gaze melted much of the snow in the courtyard, and little streams now run between the statues.  I look at the mosaic through the shimmering ripples and understand it as a system in motion, not fixed.&quot;"

                    }, {

                        key: "sakuyaTombPuzzleStunt3",
                        used: false,
                        rating: 2,
                        text: "&quot;I take out my beloved sword and strike the imperishable stone, much as Makai must have done with his daiklave when he somehow carved the mosaic.  My poor blade shatters, but it spurs a fragmentary memory of the tomb's construction...&quot;"

                    }) 

                }

                returnObject.actions.push({

                    id: "segment70action0",
                    type: "button",
                    value: "Attempt the puzzle",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_70_FUNCTION_0

                });


                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_71:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_71,
                    currentResponse: false,
                    currentActionText: true,
                    currentActionHTML: "<p>You didn't use Crafty Observation Method.  Sakuya doesn't have 15 minutes to spare, you need to use it or she can't take the necessary Investigation action!</p><p>You could fairly argue that we shouldn't have made the Charm optional if we wouldn't let you continue without using it, but this is a tutorial and there's value in going through the motions!  Please try again.</p>",
                    actions: new Array(),
                    actionDiceRoll: true,
                    actionAttribute: CONSTANT_TRAIT_PERCEPTION,
                    actionAbility: CONSTANT_TRAIT_INVESTIGATION,
                    actionSpecialty: CONSTANT_SPECIALTY_INVESTIGATION_PHYSICAL_CLUES,
                    actionCharms: new Array(CHARM_SOLAR_CRAFTY_OBSERVATION_METHOD, CHARM_SOLAR_SECOND_INVESTIGATION_EXCELLENCY),
                    validVirtues: new Array(CONSTANT_TRAIT_CONVICTION),
                    actionStunts: new Array({

                        key: "sakuyaTombPuzzleStunt1",
                        used: false,
                        rating: 2,
                        text: "&quot;The statues are the problem.  I look at the patterns surrounding them and infer what must be under the plinths.&quot;"

                    }, {

                        key: "sakuyaTombPuzzleStunt2",
                        used: false,
                        rating: 2,
                        text: "&quot;The Unconquered Sun's gaze melted much of the snow in the courtyard, and little streams now run between the statues.  I look at the mosaic through the shimmering ripples and understand it as a system in motion, not fixed.&quot;"

                    }, {

                        key: "sakuyaTombPuzzleStunt3",
                        used: false,
                        rating: 2,
                        text: "&quot;I take out my beloved sword and strike the imperishable stone, much as Makai must have done with his daiklave when he somehow carved the mosaic.  My poor blade shatters, but it spurs a fragmentary memory of the tomb's construction...&quot;"

                    }) 

                }

                returnObject.actions.push({

                    id: "segment70action0",
                    type: "button",
                    value: "Attempt the puzzle",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_70_FUNCTION_0

                });
                

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_72:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_72,
                    currentResponse: false,
                    currentActionText: true,
                    currentActionHTML: "<p>You failed!  In an ordinary game, you wouldn't have wasted much time (thanks to Crafty Observation Method), but you likely wasted a large number of motes.  You would be obliged to try fighting the Dragon Blooded without Makai's grave goods, or retry with a +1 external penalty and spend yet more motes.</p><p>As you may have guessed, since this is a tutorial, we're going to cheat on your behalf.  The point of the exercise is to show you how tasks of incredible difficulty are in reach of the Exalted if they marshal all their resources, not to get you killed in a later scene because you're tapped out on motes or under-equipped.</p><p>We've refunded anything you spent on the last roll, please try again (don't expect such mercy from your ST in the real game!).  Make sure to get every dice and bonus success you can!</p>",
                    actions: new Array(),
                    actionDiceRoll: true,
                    actionAttribute: CONSTANT_TRAIT_PERCEPTION,
                    actionAbility: CONSTANT_TRAIT_INVESTIGATION,
                    actionSpecialty: CONSTANT_SPECIALTY_INVESTIGATION_PHYSICAL_CLUES,
                    actionCharms: new Array(CHARM_SOLAR_CRAFTY_OBSERVATION_METHOD, CHARM_SOLAR_SECOND_INVESTIGATION_EXCELLENCY),
                    validVirtues: new Array(CONSTANT_TRAIT_CONVICTION),
                    actionStunts: new Array({

                        key: "sakuyaTombPuzzleStunt1",
                        used: false,
                        rating: 2,
                        text: "&quot;The statues are the problem.  I look at the patterns surrounding them and infer what must be under the plinths.&quot;"

                    }, {

                        key: "sakuyaTombPuzzleStunt2",
                        used: false,
                        rating: 2,
                        text: "&quot;The Unconquered Sun's gaze melted much of the snow in the courtyard, and little streams now run between the statues.  I look at the mosaic through the shimmering ripples and understand it as a system in motion, not fixed.&quot;"

                    }, {

                        key: "sakuyaTombPuzzleStunt3",
                        used: false,
                        rating: 2,
                        text: "&quot;I take out my beloved sword and strike the imperishable stone, much as Makai must have done with his daiklave when he somehow carved the mosaic.  My poor blade shatters, but it spurs a fragmentary memory of the tomb's construction...&quot;"

                    }) 

                }

                returnObject.actions.push({

                    id: "segment70action0",
                    type: "button",
                    value: "Attempt the puzzle",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_70_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_73:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_73,
                    currentResponse: true,
                    currentResponseHTML: "<p>The mosaic is a puzzle-lock, and as you solve it a section of stone in the middle of the courtyard dissolves, revealing stairs downwards.  The solution for which it had waited was an expression of Solar essence bent to excellence in deduction; not an answer so much as a question asked in a way only your new power allows.</p><p>Your Caste Mark still burns from your Exaltation, and the act of channelling your essence has ignited your anima, causing intense sunlight to radiate from your body like a bonfire; you must be visible for miles.  You see the glint of gold-beyond-gold from the tomb beneath the courtyard.  Your daiklave calls to you.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Anima</strong></p><p>Spending motes of essence from your peripheral pool causes your anima to flare.  This ranges from a glittering caste mark up to a burning totemic image depending on how much peripheral essence you've spent that scene:</p><ul><li><strong>1-3 motes:</strong> your caste mark glitters.</li><li><strong>4-7 motes:</strong> your caste mark burns brightly.</li><li><strong>8-10 motes:</strong> you are surrounded by an aura of light.</li><li><strong>11-15 motes:</strong> you are surrounded by a bonfire of essence, visible for miles.  <strong>Your Caste anima effect activates automatically for free.</strong></li><li><strong>16+ motes:</strong> you are surmounted by a huge burning image iconic to your personality.  For example, Sakuya's totem is a four-armed sword maiden whose eyes seem to peer into the secrets of any who behold her.  The totemic image fades on the character's next DV refresh, but can be reinvoked during the scene whenever their player feels it to be dramatically appropriate.</li></ul><p>The anima fades at the rate of one step per scene.  For example, if you'd spent 14 motes of peripheral in one scene, in the next your anima would have dropped to the 8-10 level, as if you'd spent 10 motes.  Spending any peripheral motes in the new scene would thus put you back in the 11-15 range.</p><p>This is inconvenient during covert actions, but is a critical advantage when you're at luxury to reveal your Solar nature.  Free activation of your caste anima power (see \"Dawn Caste Anima Power\" in the \"Charms and Powers\" section of Sakuya's character sheet) is often worth the extra attention.</p><p>You spent enough peripheral essence solving the riddle of the mosaic to activate Sakuya's Dawn anima power for free.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment73action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_73_FUNCTION_0

                });


                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_74:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_74,
                    currentResponse: true,
                    currentResponseHTML: "<p>The mosaic is a puzzle-lock, and as you solve it a section of stone in the middle of the courtyard dissolves, revealing stairs downwards.  The solution for which it had waited was an expression of Solar essence bent to excellence in deduction; not an answer so much as a question asked in a way only your new power allows.</p><p>Your Caste Mark still burns from your Exaltation, and you see the glint of gold-beyond-gold from the tomb beneath the courtyard.  Your daiklave calls to you.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Anima</strong></p><p>Spending motes of essence from your peripheral pool causes your anima to flare.  This ranges from a glittering caste mark up to a burning totemic image depending on how much peripheral essence you've spent that scene:</p><ul><li><strong>1-3 motes:</strong> your caste mark glitters.</li><li><strong>4-7 motes:</strong> your caste mark burns brightly.</li><li><strong>8-10 motes:</strong> you are surrounded by an aura of light.</li><li><strong>11-15 motes:</strong> you are surrounded by a bonfire of essence, visible for miles.  <strong>Your Caste anima effect activates automatically for free.</strong></li><li><strong>16+ motes:</strong> you are surmounted by a huge burning image iconic to your personality.  For example, Sakuya's totem is a four-armed sword maiden whose eyes seem to peer into the secrets of any who behold her.  The totemic image fades on the character's next DV refresh, but can be reinvoked during the scene whenever their player feels it to be dramatically appropriate.</li></ul><p>The anima fades at the rate of one step per scene.  For example, if you'd spent 14 motes of peripheral in one scene, in the next your anima would have dropped to the 8-10 level, as if you'd spent 10 motes.  Spending any peripheral motes in the new scene would thus put you back in the 11-15 range.</p><p>This is inconvenient during covert actions, but is a critical advantage when you're at luxury to reveal your Solar nature.  Free activation of your caste anima power (see \"Dawn Caste Anima Power\" in the \"Charms and Powers\" section of Sakuya's character sheet) is often worth the extra attention.</p><p>You have not yet spent enough peripheral essence solving the riddle of the mosaic to activate Sakuya's Dawn anima power for free.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment73action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_73_FUNCTION_0

                });


                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_75:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_75,
                    currentResponse: true,
                    currentResponseHTML: "<p>The tomb itself is unadorned, apart from the death-poem carved into its white walls, lit by your anima as you stride past.  You have Makai's memory of composing that poem, but not the skill of reading the language of those elder days.</p><p>He waits for you, cross-legged on a small platform at the end of the stairs.  Unsullied by the centuries, he is just as the statue in the ruined shrine depicted him, handsome enough to be your brother.  A light breastplate of shining orichalcum rests near his feet.  His blue eyes stare sightlessly into yours.  His chest does not move.  His beloved daiklave, a delicate weapon of inhuman craft, still rests through his body as his last suicidal blow left it sixteen centuries ago.</p><p><em>I remember being this man.</em></p><p>You are not truly his reincarnation.  Nor his blood heir, no more than half the city must be by now.  But you bear a legacy of his power and memories, passed to you by your mutual patron.  And that gives you alone in all Creation the right to wield his sword.</p><p>As you touch the hilt, Makai First-King dissolves into light, your hand and essence taking the burden of his daiklave at last.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Committed Essence</strong></p><p>Persistent effects require motes of essence to be committed rather than spent.  Motes committed are gone as surely as if they had been spent, but cannot be replaced until the commitment is released.  For example, if Sakuya committed 3 motes of essence to use Protection of Celestial Bliss, she could not recover those three motes with a stunt until the Charm ended.</p><p>Artifacts also require a commitment of essence to be used - Makai's weapon is delicate compared to an ordinary daiklave or Meiling's colossal tetsubo, but it still represents a weight of orichalcum that would be clumsy and unbalanced without attunement to an Exalt.  When Sakuya commits some of her motes to it, it will be a weapon of exquisite precision.  Likewise the \"light\" orichalcum breastplate is much heavier than her buff jacket, but will be less burdensome and offer greater protection with the commitment of a few motes.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment75action0",
                    type: "button",
                    value: "Commit 5 motes to your daiklave and 2 motes to your breastplate",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_75_FUNCTION_0

                });


                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_76:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_76,
                    currentResponse: true,
                    currentResponseHTML: "<p>The daiklave is sublime.  A weapon of supreme finesse, it is not so suited to breaking armour as Meiling's tetsubo, but your foes will have little hope of parrying you.</p><p>The breastplate is a wonder in its own right, though you doubt it was the personal battle-armour of Makai First-King.  Likely just a concealable precaution on his person when disaster struck, it will nonetheless serve you better than your mortal armour.  You quickly doff your buff jacket and wriggle into the orichalcum shell, feeling lighter on your feet and safer for it.</p><p>But a little chilly.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>We've spent 3 of Sakuya's starting Background points on Artifact.</p><p><strong>Attunement and The Magical Materials</strong></p><p>Attuning an artifact to make it usable takes twenty minutes of contact, beyond the commitment of essence.  We're giving Sakuya a pass as she's reclaiming the wargear of her Exaltation's past incarnation, not part of the rules but a common contrivance in preludes.</p><p>Attuning an artifact of the magic material corresponding to your exalt type (eg orichalcum for Solars, jade for Dragon Blooded) provides an additional bonus to the statistics of the item.  For example, Sakuya's armour gains an additional 2 lethal and bashing soak, and 1 lethal and bashing hardness, as it is orichalcum and she is a Solar.  Meanwhile Meiling's superheavy plate has a lower fatigue value, as it is jade and she is Dragon Blooded.  By paying a double commit cost, it's possible to gain the material benefit without being of the correct exalt type, though it's rarely worth the cost.</p><p><strong>Overwhelming</strong></p><p>Artifact weapons have a higher minimum damage than mortal weapons - this is the Overwhelming trait, which specifies a number of dice below which soak cannot reduce the damage of an attack with that weapon.  Sakuya's reaper daiklave has Overwhelming 2, like most one-handed artifact weapons.</p><p><strong>Hardness</strong></p><p>Artifact armour grants hardness, a threshold which the raw damage of an attack must overcome before being compared to soak.  If the raw damage of the attack is equal to or lower than the hardness rating, it does no damage whatsoever.  If it is higher, the hardness is disregarded and the damage is soaked normally.</p><p>For example, Meiling's superheavy jade plate has a hardness rating of 10 for both bashing and lethal damage, and her Earth Dragon Form adds a further 5, for a total of 15.  If Sakuya struck her for 14 pre-soak damage, Meiling's hardness would cause the attack to do no damage.  If the attack was a little better - 16 pre-soak damage - the hardness would be ignored, and it would be compared to Meiling's soak (only doing minimum damage, since Meiling's soak is 24!).</p><p>Sakuya's breastplate only offers 3 bashing and lethal hardness, which isn't useful against armed attackers.  But having hardness at all is worthwhile for small incidental sources of damage, in particular the 1L damage every tick from a Dragon Blooded anima at the 16+ mote level.  You don't want to get cooked!</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment76action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_76_FUNCTION_0

                });


                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_77:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_77,
                    currentResponse: true,
                    currentResponseHTML: "<p>There is shouting, then the sound of steel on jade.  The Cathak House troops are trying to force their way past Meiling; a hopeless cause, but you will need to guard her back.  It is past time you confronted her cousins.</p><p>You emerge from the tomb to find Crimson Rain arrived at last, followed by his house troops and the Makai palace guard.  You don't see the Air Aspect; she is suffering the delusion that she can ambush you.</p><p>\"So the palace itself was the tomb, and the demon sealed within comes to me.  At least in having her soul devoured that swordswoman proved to be of some use.\"</p><p>Crimson Rain, for his part, is suffering the delusion that combat with a Solar Exalted is an opportunity to pose and banter.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment77action0",
                    type: "button",
                    value: "&quot;You're an idiot, and I'm going to kill you now.&quot;",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_77_FUNCTION_0

                });

                returnObject.actions.push({

                    id: "segment77action1",
                    type: "button",
                    value: "&quot;I am Chosen of the Unconquered Sun; you're a petty tyrant.  Yield or die.&quot;",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_77_FUNCTION_0

                });

                returnObject.actions.push({

                    id: "segment77action2",
                    type: "button",
                    value: "&quot;This is sacred ground.  You're not permitted to open your ignorant mouth here, Dragonling.&quot;",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_77_FUNCTION_0

                });


                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_78:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_78,
                    currentResponse: true,
                    currentResponseHTML: "<p>Crimson Rain flinches, the reality of your hard eyes and burning anima not matching the easy glory he had promised himself.  You've no doubt the Dragon Blooded boast many implacable warriors dangerous even to you, but Cathak Crimson Rain is not one of them.</p><p>&quot;Meiling, Vedara, heed me!  The Anathema is surrounded, strike her down!&quot;</p><p>Meiling, holding back a wall of steel and flesh, doesn't bother to turn, but her bellow echoes over the palace and beyond.</p><p>&quot;Lady Sakuya is my commander, and none other!  Run home to the Isle or die where you stand, it is nothing to me.&quot;</p><p>Vedara is not fool enough to give away her position by responding.   Crimson Rain flares his anima in fury, a display of might to counter his apparent isolation.</p><p>&quot;You might bewitch Meiling's feeble mind, demon, but House Cathak will not tolerate the loss of a brood mare.  Soldiers, attack the Anathema!&quot;</p><p>&quot;Halt!&quot; the king appears in the keep doorway, his frail body supported by Shinichi's arm, but his voice commanding.  &quot;The Thrice-Elegant Sword Maiden stands revealed to us as Makai First-King reborn!  We are all her sons and daughters; let none interrupt her duel with the Dragon Blooded!&quot;</p><p>The palace guard are loyal first to their king and next to their ancestors.  Crimson Rain's troops fall under immeadiate arrow fire, followed by a charge of soldiers inferior in training and equipment, but today far superior in number and morale.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>We've spent Sakuya's 3 remaining Background points on Cult, as the king has explicitly linked her to the ancestor cult's focus of worship.</p><p><strong>Mortals against the Exalted</strong></p><p>Between Meiling and the palace guard, we've contrived to move the Realm infantry from the fight, despite their important role in anti-Solar tactics.  We've done so because Sakuya's particular build is virtually invincible against them; they'd just clutter up the initiative tracker to no purpose.  But that's not true for all Solars, so it's worth briefly discussing the threats mortals in numbers pose to Exalted, and why exactly Sakuya can ignore them.</p><p><strong>Strength of Numbers</strong></p><p>More soldiers means more attacks, which means more lucky rolls getting past an Exalt's DVs.  If your DVs are middling or poor, massed missile fire or a constant press of melee attackers can spell quick death from the sheer weight of rolls.  But Sakuya has an excellent parry DV, which the Dawn Caste anima boosts by 2 while imposing an external penalty of 1 on all attackers.  Her <em>Protection of Celestial Bliss</em> Charm boosts her parry DV further, and prevents her attacks from penalising her DVs.  Even before she stunts, it takes 13 successes to hit her, mathematically impossible for any extra.</p><p>Meiling's DVs are nowhere near as good as Sakuya's, but she's able to hold off large numbers of mortal troops due to her very high hardness - they can hit her but not hurt her.  If your character doesn't follow a high DV or high hardness strategy, don't take mortals in large numbers lightly.<p><strong>Surrounding</strong></p><p>As mentioned during the fight in Lily's parlour, five opponents can surround a victim, forcing them to show their back to one of the attackers.  This causes that attacker's attacks to be unexpected, dropping DVs used against them to zero.  But Sakuya's <em>Monkey Leap Technique</em> and <em>Graceful Crane Stance</em> Charms offer her incredible mobility, allowing her to easily evade surrounding troops and fight from positions where she can't be surrounded (in this case balancing on the statues).  Meiling likewise is holding a gate, preventing her opponents from getting to her back.</p><p><strong>Coordinated Attacks</strong></p><p>The Coordinate Attack miscellaneous action allows a commander to direct their troops to attack as one against a given opponent.  The victim suffers a DV penalty against the coordinated attacks equal to the successes on the coordinating roll, up to the total number of attackers.  This can be deadly in melee (up to -5 DV for five surrounding attackers), but truly vicious with coordinated missile fire (eg up to -10DV for a group of ten archers).  Even a high DV Exalt must take great care not to be the victim of a coordinated attack.  But Sakuya's Dawn anima makes it more difficult to coordinate attacks against her, and her <em>Bulwark Stance</em> Charm allows her to ignore all penalties to her DVs for an entire action.  It would be a waste of Crimson Rain or Vedara's time and DVs to take the Coordinate Attack action against her.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment78action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_78_FUNCTION_0

                });


                return returnObject;
                break;

            case SEGMENT_KEY_SAKUYA_79:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_79,
                    currentResponse: true,
                    currentResponseHTML: "<p>&quot;Enslaving Meiling and these mortals will avail you nothing, Anathema.  Your defeat at my hands was foretold!  Why else would I be in this miserable town, but to cut you down in the Dragons' names?&quot;</p><p>You've never been impressed with prophets and astrologers.  If the Realm had prophecy of your Exaltation, they would have sent better than Cathak Crimson Rain to take your head.</p><p>The notched daiklave bursts into flame, and the Fire Aspect charges with inhuman speed, a trail of smoke and ash behind him.  It begins.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Prophecy</strong></p><p>The Wyld Hunt does receive prophectic warning of Solar Exaltations, allowing it to ambush and kill young Solars when they are without allies or artifacts.  The sheer size of Creation would make this otherwise impossible, and attacking a Circle of Solars who have had time to establish themselves requires an army more than a hunt.</p><p>Thus it can be inferred that accurate prophecy does exist in Creation, though very few are aware of its principal practitioners, the Sidereal Exalted.  But a hero can't be forced to comply with fate or destiny, only encouraged; any Sidereal player will tell you prophecy is a useful tool, but not a reliable or easy one.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment79action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_79_FUNCTION_0

                });


                return returnObject;
                break;

            case SEGMENT_KEY_SAKUYA_80:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_80,
                    currentResponse: true,
                    currentResponseHTML: "<p>You channel your essence in patterns new and wondrous to Sakuya but familiar a thousandfold to Makai's ancient instincts.  A leap takes you soaring across the courtyard to land with perfect balance on the outstretched arm of one of the statues, your daiklave glowing with holy light as you await Crimson Rain's charge.  This is your city; you will not yield the high ground.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Reflexive Buff Charms</strong></p><p>Reflexive Charms may be used at any time, and are often activated as soon as the events of play make them relevant.  In this case we'll have you activate three important scene-length Charms as a reaction to Crimson Rain's intent to Join Battle, as the capabilities they provide are so useful that there's no reason to wait.</p><p><strong>Protection of Celestial Bliss</strong></p><p>This Charm empowers a weapon, adding two bonus dice to its Defence and preventing its attacks from penalising your DVs.  You can cancel the Charm in response to an attack to perfectly parry it, but the DV effects are so useful that you'll almost never want to do that.</p><p><strong>Monkey Leap Technique</strong></p><p>This Charm doubles the length of jumps (bringing Sakuya's jump distance to 22 yards vertical, 44 yards horizontal), and allows you to take a reflexive jump on your action tick.  While Cathak Vedara is an Air Aspect and can make leaps of comparable distance, she must use a miscellaneous action to do so, making it difficult for her to keep Sakuya at a distance.  Thus we'll assume Sakuya is able to reach both Dragon Blooded opponents at any time, allowing us to disregard positioning for this combat.</p><p><strong>Graceful Crane Stance</strong></p><p>This Charm grants perfect balance and mystic lightness, allowing Sakuya to stand comfortably on a strand of human hair as if it was a wide stone ledge.</p><p>Between Monkey Leap and Graceful Crane, we'll assume that Sakuya is able to trivially establish and keep an <strong>elevation bonus</strong> against Crimson Rain.  Elevation works in melee combat much as Appearance does in social combat: a combatant on higher ground gains a DV bonus against attacks from below, and their opponents suffer a corresponding DV penalty against their attacks.  Weapons with the Reach tag (such as spears) and ranged weapons ignore elevation.</p><p>Sakuya is able to fight perfectly from the treacherous vantage of the snow-slick statues, while Crimson Rain will be forced to fight from below unless he wants to take jump and balance actions to close the elevation gap.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment80action0",
                    type: "button",
                    value: "Commit 3 motes each to Graceful Crane Stance, Monkey Leap Technique and Protection of Celestial Bliss",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_80_FUNCTION_0

                });


                return returnObject;
                break;

            case SEGMENT_KEY_SAKUYA_81:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_81,
                    currentResponse: false,
                    currentResponseHTML: "<p></p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Hidden characters and Join Battle</strong></p><p>Vedara (your Air Aspect opponent), is in the scene but concealed with the aid of her Stealth Charms.  She'll roll Join Battle and take her place in the initiative order normally, but she won't be a valid target until she reveals herself.</p>",
                    actionDiceRoll: true,
                    actionAttribute: CONSTANT_TRAIT_WITS,
                    actionAbility: CONSTANT_TRAIT_AWARENESS,
                    validVirtues: new Array(CONSTANT_TRAIT_VALOUR, CONSTANT_TRAIT_CONVICTION),
                    actionStunts: new Array({

                        key: "sakuyaDBsJoinBattleStunt1",
                        used: false,
                        rating: 2,
                        text: "&quot;I scoop a handful of snow off my statue perch with my off hand, ball it up roughly and toss it at Crimson Rain.  It evaporates in his anima, but it lets him know how seriously I'm taking his attack.&quot;"

                    }, {

                        key: "sakuyaDBsJoinBattleStunt2",
                        used: false,
                        rating: 2,
                        text: "&quot;I pat the head of the queen I'm crouched on, muttering an apologetic prayer for the daiklave damage she's about to take.&quot;"

                    }),
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment81action0",
                    type: "button",
                    value: "Roll Join Battle",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_81_FUNCTION_0

                });

                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_82:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_82,
                    currentResponse: true,
                    currentResponseHTML: "<p>Hubris is the true enemy here.  You instinctively understand that you are more powerful than the Dragon Blooded, but you are newly Exalted and they have many years of experience on you.  Notched as it may be, Crimson Rain's daiklave is more than enough to kill you if you fight carelessly.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Motes are Hit Points</strong></p><p>While you need to spend motes to win, it's usually true that the first combatant to run out of them loses.  You have bigger mote pools and more powerful Charms than your opponents, but your Excellencies are less efficient.  Try to make sure they're spending motes faster than you!  <strong>Ensure that you have at least 1 mote available for Surprise Anticipation Method to alert you to Vedara's ambush.</strong></p><p><strong>Active Effects</strong></p><p>The combat tracker now includes an active effects link for each combatant - this helps you keep track of which buffs are active on whom.  Click on each of the links and compare your effects to your opponents'.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment82action0",
                    type: "button",
                    value: "Resolve Tick 0",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_82_FUNCTION_0

                });

                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_83:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_83,
                    currentResponse: true,
                    currentResponseHTML: "<p>For their part, the bloody work of the guard is done.  Not one Cathak soldier crossed the courtyard in either direction.</p><p>You wipe the blood from your daiklave with a Cathak mon, then approach your king.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment83action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_83_FUNCTION_0

                });

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_84:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_84,
                    currentResponse: true,
                    currentResponseHTML: "<p>As you approach, Shinichi points at your wounds, as if you hadn't noticed them.  &quot;Sakuya, you're bleeding.  Are demons supposed to do that?&quot;</p><p>You concentrate, and the scarlet flow halts obediently.  That's a nice change from the mortal condition.  &quot;You know your king wouldn't order you to aid an Anathema, Shinichi.  You'll just have to accept I'm Chosen of the Unconquered Sun.&quot;</p><p>&quot;Oh, I assumed as much.  A demon would have a less abrasive personality.  But I'm sure Kaguya will be impressed.&quot;  For all his bravado, Shinichi's hands are shaking.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Bleeding and the Exalt</strong></p><p>Exalts can bleed, but they can also choose not to.  Every five seconds (or on every tick they act in combat), an Exalt can make a reflexive Stamina + Resistance roll at difficulty 2 to close their wounds.  While Sakuya's Stamina + Resistance pool is poor (3 dice), with a stunt and a point of Willpower the roll is easily passed, and as a character only suffers bleeding damage every (Stamina) minutes, she has 40 attempts to pass it before suffering a health level.</p><p>Most groups will simply ignore bleeding rules for Exalts.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment84action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_84_FUNCTION_0

                });

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_85:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_85,
                    currentResponse: true,
                    currentResponseHTML: "<p>As you cross the courtyard, Shinichi gestures to his soldiers to fall back and allow you to approach the king.  &quot;That was some heroic fighting, Sakuya.  Does it really suit your station as a demon?&quot;</p><p>&quot;You know your king wouldn't order you to aid an Anathema, Shinichi.  You'll just have to accept I'm Chosen of the Unconquered Sun.&quot;</p><p>&quot;Oh, I assumed as much.  A demon would have a less abrasive personality.  But I'm sure Kaguya will be impressed.&quot;  For all his bravado, Shinichi's hands are shaking.</p>",
                    currentActionText: true,
                    currentActionHTML: "",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segment84action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_SEGMENT_84_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_86:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_86,
                    currentResponse: true,
                    currentResponseHTML: "<p>The king shuffles forward, taking Shinichi's arm for support.  &quot;My child, I do not fully understand what you have become, but I know you are no demon.  Makai First-King told his son that before long he would be reborn and reclaim his sword, that the kingdom should honour the new champion as they did him.  I do not know why your soul waited so many centuries to return, but I understand now why our city was blessed with a hero of the Thrice-Elegant Sword Maiden's stature.  And I am proud of you.&quot;</p><p>You grasp his shoulder and smile, your anima radiating out across the guard.  &quot;...but I can't stay, can I?&quot;</p><p>&quot;The levies will panic soon.  We can't control them with you still in the city, for they will not suffer to be caught between Wyld Hunt and Anathema. We will keep the faith for you, and wait for you to return - with an army.&quot;</p><p>&quot;When I return, there will not be a Wyld Hunt, and its memory will be spoken of only in whispers.&quot;</p><p>&quot;Then we're off?&quot;  Meiling lingers back from the mortals, her anima scourging the air about her with whirling razors of diamond.  &quot;I was promised much more snow than this; I should like to see it.&quot;</p><p>You salute the king with your daiklave and then turn your back on your mortal allies, that they may deny you when the wrath of the Blessed Isle descends.  &quot;Cathak Meiling, remain at my side and you shall not lack for snow or battle so long as you live.&quot;</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>Thank you for completing the tutorial!  Hopefully you've gained a basic understanding of the Exalted system and will be able to express your character ideas to the fullest when you sit down with your friends to play face-to-face.  Exalted can be a difficult game to learn, but the experience of layering stunts one atop the other with your friends to build awesome scenes and unleash the power of the Solar Exalted is vastly rewarding.</p><p>If you're in the mood to read some more, there are a number of pages on this site clarifying and extending the material in this tutorial that are worth checking out:</p><ul><li><a href=\"ruleTechnicalities.html\">Rule technicalites</a> (where we simplified, ommitted or lied)</li><li><a href=\"buildYourOwnSolar.html\">Building Your Own Solar</a></li><li><a href=\"advancingSakuya.html\">Advancing Sakuya</a></li><li><a href=\"usefulLinks.html\">Helpful links</a></li></ul>",
                    actions: new Array()
                }

                return returnObject;

                break;


            //New stuff, our friend the intro

            case SEGMENT_KEY_SAKUYA_INTRO_0:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_INTRO_0,
                    currentResponse: false,
                    currentResponseHTML: "<p>It is a truth universally acknowledged that a hero in possession of time must be in want of a challenge to fill it.</p>",
                    currentActionText: true,
                    currentActionHTML: "<p>Meet Sakuya Thrice-Elegant.  She's one of the finest mortal warriors in all Creation, a keen amateur detective, and your player character for this tutorial.<p><p><em>Exalted</em> PCs have a character sheet, on which their game traits are recorded.  You can see Sakuya's to the right of this text.  Click the &quot;&lt;&lt;&quot; button in the top-right corner of this page if you can't already see it.</p><p>Most of the detail on the sheet is currently hidden.  We'll introduce it to you step-by-step.  You don't have to remember all the detail, but it's helpful to understand where to find it if you need it later.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segmentInto0action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_0_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_INTRO_1:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_INTRO_1,
                    currentResponse: false,
                    currentActionText: true,
                    currentActionHTML: "<p>You can click on any trait on the character sheet for more detail.  We've also added Page History and Glossary links to the bottom of the page if you need to review any concepts later.</p><p>A character's most important trait is their <strong>Motivation</strong>, the goal that provides them with the drive to be a hero.  Sakuya's is to protect the king of her native city-state; she serves as his personal champion.</p><p>Many <strong>Types</strong> of characters are available for play, though by default you'll play one of the Solar Exalted.  Sakuya is a Heroic Mortal, meaning she has no supernatural powers but is still a hero of exceptional skill and talent (and that she doesn't have a <strong>Caste</strong>).</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segmentInto1action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_1_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_INTRO_2:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_INTRO_2,
                    currentResponse: false,
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Attributes</strong> represent a character's innate talents.  An Attribute rated at two dots is average for a human, whereas five dots represents the absolute peak of human capability.</p><p>Sakuya is very strong (Strength 4), and almost inhumanly graceful, beautiful and perceptive (Dexterity, Appearance and Perception at 5).  She's only of average Intelligence, Wits and Stamina (2 dots in each).  Her personality can be abrasive and off-putting (Charisma 1), and she's a poor liar (Manipulation 1).</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segmentInto2action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_2_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_INTRO_3:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_INTRO_3,
                    currentResponse: false,
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Abilities</strong> represent a character's trained skills and experience.  Two dots in an Ability represents professional-level skill, five dots is as good as any human can be.  Abilities are grouped in five sets of five; these groupings are important only to the Solar Exalted.</p><p>Sakuya is extraordinarily skilled (5 dots) in a handful of areas, and largely ignores everything else.</p><p>Specialties are areas of focus within an Ability.  There are many possible specialties, so only the ones possessed by the character are displayed on the sheet.  Note Sakuya's specialty of Swords (Melee) in the bottom-right of the character sheet - this is a bonus to her Melee Ability when she's using a sword, reflecting extra training and experience in that focus.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segmentInto3action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_3_FUNCTION_0

                });

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_INTRO_4:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_INTRO_4,
                    currentResponse: false,
                    currentActionText: true,
                    currentActionHTML: "<p>&quot;Advantages&quot; is a catch-all category for miscellaneous traits that don't fit into the rest of the character sheet.  We'll introduce the various kinds of advantages piecemeal.</p><p><strong>Backgrounds</strong> represent a character's position, possessions and connections.  Like specialties, there are many possible Backgrounds, so only those in which the character has dots are displayed.</p><p>Sakuya is an important person in Makai, so she has the Influence Background.  She draws a salary, represented by Resources, and enjoys the support of other important figures, represented by her Allies Background.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segmentInto4action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_4_FUNCTION_0

                });

                return returnObject;

            case SEGMENT_KEY_SAKUYA_INTRO_5:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_INTRO_5,
                    currentResponse: false,
                    currentActionText: true,
                    currentActionHTML: "<p>Some traits represent aspects of your character's personality, such as their passions and strength of will.</p><p><strong>Willpower</strong> is your character's self-control and determination.  Unlike most traits, it can be up to 10 dots, with 5 being the human average.  At 10 dots, Sakuya is at the human limit of self-confidence and drive.</p><p><strong>Virtues</strong> represent your character's passion and tendency to certain kinds of behaviour.  They're five-dot traits like any other, so two dots is average and five represents the human limit.  Sakuya is as brave and committed to her goals as she can possibly be (Valor and Conviction at 5 dots).  She's of above-average Compassion, but below average capacity to deny her own desires (Temperance 1).</p><p>Both Willpower and Virtues are rated in dots and boxes.  The dots are the character's permanent rating in the trait.  The boxes are a temporary pool of points that can be spent in play for various benefits (e.g. Sakuya always has the supreme courage that comes with 5 dots in Valor, but can only access special benefits from that courage 5 times a story, represented by 5 boxes).</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segmentInto5action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_5_FUNCTION_0

                });

                return returnObject;

                break;

            
            case SEGMENT_KEY_SAKUYA_INTRO_6:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_INTRO_6,
                    currentResponse: false,
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Defence Values</strong> (under Willpower on the sheet) represent how difficult it is to hit the character with attacks or sway them with arguments.  They're not traits of their own, but are derived from other traits and equipment.  All that you need to know now is that higher is better.</p><p>Sakuya is roughly average for a mortal in dodging attacks or countering arguments (Dodge DV and Parry MDV at 2-3), but is magnificent at simply ignoring arguments through pure will (Dodge MDV 8).  Her ability to parry attacks is not displayed here; we'll see it with her equipment later.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segmentInto6action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_6_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_INTRO_7:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_INTRO_7,
                    currentResponse: false,
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Health</strong> represents how much damage a character can take before they die.  As you accumulate wounds, the boxes fill up.  When they're all filled, the character dies.</p><p>The numbers beside the boxes are penalties your character takes when those boxes are filled.  In some games sustaining damage is OK so long as you don't actually die, but in <em>Exalted</em> these penalties mean damage is best avoided altogether.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segmentInto7action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_7_FUNCTION_0

                });

                return returnObject;

                break;

            case SEGMENT_KEY_SAKUYA_INTRO_8:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_INTRO_8,
                    currentResponse: false,
                    currentActionText: true,
                    currentActionHTML: "<p><strong>Intimacies</strong> are things the character about enough to affect their behaviour - causes, concepts, people, places etc.  It's difficult to convince someone to go against their Intimacies, and easy to persuade them to courses of action that benefit them.</p><p>Sakuya's Intimacies relate to her loyalty to country and sword school, her attachment to her surrogate father-figures, and her colourful personal history.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segmentInto8action0",
                    type: "button",
                    value: "Continue",
                    functionKey: FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_8_FUNCTION_0

                });

                return returnObject;

                break;


            case SEGMENT_KEY_SAKUYA_INTRO_9:

                returnObject = {

                    key: SEGMENT_KEY_SAKUYA_INTRO_9,
                    currentResponse: false,
                    currentActionText: true,
                    currentActionHTML: "<p>Lastly we have Sakuya's <strong>equipment</strong> - her armour and sword.  Their statistics are important for combat, which we'll learn about later.  For now all you need to know is that her position and salary allows her to have the very best gear (though still not comparable to the artifact equipment of the Exalted).</p><p>And that's Sakuya's character sheet!  We'll introduce the traits again as they become important in the tutorial, just remember that you can click on a trait whenever you need more detail.</p>",
                    actions: new Array()
                }

                returnObject.actions.push({

                    id: "segmentInto8action0",
                    type: "button",
                    value: "Start the Story",
                    functionKey: FUNCTION_KEY_SAKUYA_INTRO_SEGMENT_9_FUNCTION_0

                });

                return returnObject;

                break;



        }

    return returnObject;

}

