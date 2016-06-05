//################################### HELP SECTION - HELP #################################################

erg.help.push({

    key: erg.constants["pohHelpSectionHelp"],
    title: "Help",
    subsections: [{

        //SUBSECTION - OVERVIEW

        key: erg.constants["pohHelpSectionHelpSubsectionOverview"],
        title: "Overview",
        items: [{

            key: erg.constants["pohHelpSectionHelpSubsectionOverviewItemGoal"],
            title: "Goal",
            text: "<p>The goal of <em>Puppeteer of Hearts</em> is to unite as many of Gensokyo's residents in stable, long-term relationships as possible before the year's end.</p><p>You play as Alice Margatroid, the eponymous puppeteer, and your successes are rewarded with Prestige, a score reflecting her standing as Gensokyo's matchmaker.  By default, you can use Prestige to track your overall success at the game, and thus aim for the highest possible total.  Alternatively, if your goal is to arrange particular couples according to your preferences in Touhou pairings, you can spend Prestige as a resource to advance your cause.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionOverviewItemPremise"],
            title: "Setting and Premise",
            text: "<p>Gensokyo is the setting of the Touhou Project series of shooting games, and the vast array of fan works inspired by them (including this one!).  It is a hidden paradise somewhere in Japan where legendary beings forgotten by the modern world can thrive, a realm where gods, monsters (&quot;youkai&quot;) and magicians live and wield their power openly.  While Gensokyo's small population of humans live hard-working pre-industrialised agrarian lives, its mighty while away their time drinking and fighting elegant magical duels (&quot;danmaku&quot;).</p><p>It is a demographic oddity of Gensokyo that every god, youkai or hero of note is or manifests as a humanoid female, generally a young adult in apparent age.  Whether this is due to the nature of Gensokyo itself, the preferences of its greatest power (the Youkai Sage, Yukari Yakumo, believed to be responsible for the barrier protecting the paradise from the outside world), or simply a tendency for history to forget powerful women is unknown.</p><p><em>Puppeteer of Hearts</em> is a simulation/management game linking the hard-drinking, hard-fighting setting of the official Touhou Project games with its lighter incarnation as seen in the endless stream of fan-created romance manga pairing up the various characters.  In this game, Gensokyo's ladies are no less garralous or flawed than their canon incarnations, but the adults amongst them are far more interested in explicitly romantic relationships with each other, and it's your job as Alice Margatroid to guide them to success and happiness in that regard.</p><p>This sudden plague of romance is explained in-setting as being the work of the Youkai Sage, Yukari Yakumo, who used her power over boundaries to weaken the boundary between hearts (an abusively metaphorical expression of that power, but it seems to have worked), then offloaded the job of straightening out the resulting mess on Alice Margatroid.  From a real-world point of view, pairing up characters is one of the primary ways Touhou fans express their creativity and love for the setting, so here's a game devoted entirely to that noble art.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionOverviewItemProcedure"],
            title: "Procedure of Play",
            text: "<p>Each week Alice receives requests for advice from a random subset of Gensokyo's lonely hearts.  You may respond with instruction on whom they should ask out for a date, what activities should be included in the date if accepted, and optionally nominate a change the petitioner should make in their personality or situation to help the cause.</p><p>Once you're satisfied with the advice Alice is giving, you may end the week and go on to the next.  You will receive news reports describing events that befell Gensokyo's lonely hearts that affect their situation (hopefully including the successful prosecution of Alice's advice!) and a fresh round of advice letters.</p><p>Play continues in this fashion until the end of the year, where you are presented with your final Prestige score and a record of all pairings you successfully guided to True Love (as well as those in an active Couple at the end of the game).</p><p>Gameplay is mostly characterised by assessing the information at hand to make your plans, then reacting to threats and opportunities posed by a myriad of random events.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionOverviewItemRandomness"],
            title: "Randomness and Rolls",
            text: "<p><em>Puppeteer of Hearts</em> is strongly driven by random chance.  While characters begin play with some of their traits, attributes and connections pre-set in line with canon, and while Alice can use advice to impose some order on the chaos, everything else is randomly generated.  This leads to amusing emergent behaviour from a lively setting and its fickle denizens, but imposes diminishing returns on planning too far ahead.  Beginning players are encouraged to adapt a reactive strategy.</p><p>The game sometimes refers to &quot;rolls&quot; - this is where a random number between 0 and 99 is generated and compared to a character's Attribute (or similar score).  If the random number is equal or lower, the roll succeeds, if it's higher it fails.  <em>Example:  Keine and Mokou are a couple, but Mokou accepts a date from Kaguya.  Keine rolls her Jealousy; if the number rolled is equal to or less than her Jealousy Attribute, she &quot;succeeds&quot; and is jealous over Mokou's little dalliance.  If she rolls higher, she &quot;fails&quot; and doesn't care.</em></p><p>The important thing to remember is that most numbers in the game (character Attributes, Attraction and Passion, relationship Strength and Stability etc.) are literally a percentage chance of something happening in the appropriate circumstances.  You shouldn't need to do any extra math to calculate the odds.</p>"

        }]

    }, {

        //SUBSECTION - ALICE'S DESK

        key: erg.constants["pohHelpSectionHelpSubsectionAliceDesk"],
        title: "Alice's Desk",
        items: [{

            key: erg.constants["pohHelpSectionHelpSubsectionAliceDeskItemScreen"],
            title: "Your hub screen",
            text: "<p>Alice's Desk is the main screen of <em>Puppeteer of Hearts.</em>  It provides an overview of the state of Gensokyo's romance scene, events that have occured in the past week, and links to deeper screens for more detailed information.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionAliceDeskItemWeek"],
            title: "Week and Season",
            text: "<p>The current week and season are displayed on Alice's Desk.  Week 52 is the final week of the game.  Certain special character Traits interact with the season, but it is otherwise important.</p><p>You may end the week and proceed to the next by pressing the &quot;End Week;&quot; button on Alice's Desk.  You cannot undo this action, so make sure you're happy with the advice you've given before doing so.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionAliceDeskItemHeartList"],
            title: "List of Lonely Hearts",
            text: "<p>The portrait, title and name of each character currently looking for love are displayed on Alice's Desk.  Click on the listing to go to their character sheet and view full details for that lonely heart.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionAliceDeskItemNews"],
            title: "News Box",
            text: "The News area on Alice's Desk lists relevant events and correspondance from the last week, organised into tabbed sections for convenience.  The Letters and Satori tabs contain letters personally addressed to Alice, while the Society, Danmaku and General tabs contain articles from the Bunbunmaru News.</p><p>Click on a news item to go through to its screen and read the details.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionAliceDeskItemPrestige"],
            title: "Prestige Indicator",
            text: "<p>Your current Prestige total is shown on Alice's Desk.  Prestige is earned whenever a relationship advances to a higher level (whether Alice was directly responsible or not - you take credit where you can get it!).  You want this number to be as high as possible, either for the satisfaction of a high score, or to use as currency in furthering your plans.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionAliceDeskItemRelationships"],
            title: "Relationships List",
            text: "<p>A list of all current relationships and a summary of their vital statistics is shown on Alice's Desk.  Click on a relationship to see extra detail on the relevant relationship type (including how it upgrades to the next level) in a pop-up dialogue.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionAliceDeskItemAdvice"],
            title: "Advice List",
            text: "<p>A list of all advice you've given this week is displayed on Alice's desk, indicating whom you advised the petitioner to ask out and what if any extracurricular activity you suggested.  Click on the advice entry to go through and view all details (including the planned date activities), and optionally revise the advice.</p>"

        }]


    }, {

        //SUBSECTION - CHARACTER SHEET

        key: erg.constants["pohHelpSectionHelpSubsectionCharacterSheet"],
        title: "Character Sheet",
        items: [{

            key: erg.constants["pohHelpSectionHelpSubsectionCharacterSheetItemCharacterSheet"],
            title: "Your dossier on a lonely heart",
            text: "<p>The character sheet has every piece of information the game tracks about an individual character.  You won't need all this information all the time in play, but it's useful when you're trying to puzzle out odd emergent behaviour (e.g. &quot;Why is Keine and Eirin's Stability so bad?  Oh, because they're both more into Kaguya and Mokou than their girlfriend.&quot;).</p><p>You may also want to visit the character sheet to offer Unsolicited Advice, should you be willing to spend the Prestige.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionCharacterSheetItemTier"],
            title: "Tier",
            text: "<p>Tier is a representation of a character's power, roughly derived from the stage on which they appear in the shooting games.  The higher the stage number, the more powerful the character is.  Tier affects relationship Stability (the greater the difference in the couple's Tiers, the lower their Stability), and victory in danmaku.</p><p>Tier is fixed - it is not randomly generated and does not change in play.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionCharacterSheetItemPhysical"],
            title: "Physical Characteristics",
            text: "<p>A character's <strong>Species, Hair Length, Hair Colour</strong> and <strong>Eye Colour</strong> can be targets of Attraction Traits, and thus affect how attracted others are to the character.  They otherwise do not affect play.</p><p>Physical characteristics are fixed, matching the character's canonical appearance as much as possible (many characters' eye colour varies from game to game), and do not change in play.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionCharacterSheetItemTraits"],
            title: "Traits",
            text: "<p>Traits are divided into three categories: <strong>Attraction, Reaction</strong> and <strong>Special</strong>.  Characters always have five Attraction and five Reaction Traits, some of which may be pre-determined to match the character's canonical personality, with the rest randomly generated to make up the numbers.  Attraction and Reaction Traits can change in play, but only by swapping out a trait for a new one, so the total remains five of each.  Special Traits are fixed and do not change in play.</p><p><strong>Attraction Traits</strong> change the character's Attraction towards other characters based on their criteria.</p><p><em>Example: Byakuren randomly receives the Attraction Trait &quot;Like Spun Gold...&quot; at the start of the game.  Until that trait is replaced, her Attraction to any character with blonde hair is 10 points higher than it would be otherwise.</em></p><p>Attraction Traits stack, though they rarely have overlapping criteria.</p><p><strong>Reaction Traits</strong> affect the character's response to the behaviour of others during dates.  Each date event requires a character to roll an Attribute, and their partner's Passion towards them changes based on the result of that roll and the partner's Reaction Traits.</p><p><em>Example: Mokou has the Reaction Trait &quot;Adoring the Fearless.&quot;  During a date, Kaguya is called upon to roll Courage and succeeds; &quot;Adoring the Fearless&quot; causes Mokou to gain 9 points of Passion towards Kaguya.  If the Courage roll had failed, it would have caused Mokou to lose 9 points of Passion for Kaguya instead.</em></p><p>Reaction Traits stack, and they frequently have overlapping criteria.  If a character has no Reaction Traits affecting a particular Attribute, or if their Reaction Traits cancel out, they default to 3 success/-3 fail for Positive Attributes and -3 success/3 fail for Negative Attributes.</p><p><strong>Special Traits</strong> are unique to the character that possesses them, and represent how their canonical powers and idiosyncrasies might affect the pursuit of romance.  They are intended to add variety to play and improve the simulation of Gensokyo; they are balanced in only the loosest sense.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionCharacterSheetItemAttributes"],
            title: "Attributes",
            text: "<p>Attributes are a numerical representation of certain virtues and flaws in a character's personality, on a scale from " + erg.constants["pohCurrentAttributeMinimum"] + " to " + erg.constants["pohCurrentAttributeMaximum"] + ".  Since rolls succeed when the generated number is equal to or lower than the score being tested, Attributes can be read as the percentage chance to succeed on a relevant roll.</p><p><strong>Positive Attributes</strong> are approved of by default by other characters, and have helpful affects in danmaku.  <strong>Negative Attributes</strong> are disapproved of by default, and have harmful affects.  <strong>Meta Attributes</strong> are not rolled as part of date events and have their own unique conditions for relevance.</p><p>Some Positive and Negative Attributes may be pre-determined to match the character's canon personality, with the rest randomly generated (along with all Meta Attributes).  All Attributes can be raised or lowered in play.</p><p><strong>Cleverness</strong> is a Positive Attribute representing wits, knowledge, genius and cunning.  In danmaku, it helps save face if the character's trash-talk is poor.</p><p><strong>Courage</strong> is a Positive Attribute representing bravery (though at a much higher average than human scale).  In danmaku, it helps save face when a character is defeated.</p><p><strong>Expression</strong> is a Positive Attribute representing eloquence in the use of words, gestures or song.  In danmaku, it is rolled to see if the character trash-talks the opposition effectively when challenging.</p><p><strong>Sociability</strong> is a Positive Attribute representing affability and social graces (such as the ability to drink heroic quantities of alcohol).  In danmaku, it is tested to see if you can attract an ally of higher Tier.</p><p><strong>Hubris</strong> is a Negative Attribute representing overwhelming pride (again at a higher average than human scale).  In danmaku, it is rolled to see if the character challenges opponents of higher Tier.</p><p><strong>Jealousy</strong> is a Negative Attribute representing possessiveness of a character's paramours, as well as generic envy.  A character rolls Jealousy whenever one of their relationship partners dates a third party; on success the relationship must succeed a Stability roll or break up.</p><p><strong>Pettiness</strong> is a Negative Trait representing a character's small-mindedness and capacity to hold grudges.  In danmaku, it can limit the benefit of good trash-talk.</p><p><strong>Viciousness</strong> is a Negative Trait representing excessive aggression and malice.  In danmaku it can limit the glory won in victory.</p><p><strong>Loneliness</strong> is a Meta Attribute that substitutes for Attraction when accepting a date if it is higher.  It increases by " + erg.constants["pohLonelinessAdjustmentWeek"] + " each week and by " + erg.constants["pohLonelinessAdjustmentRefusedDate"] + " if the character is turned down for a date.  It falls by " + erg.constants["pohLonelinessAdjustmentDate"] + " whenever the character goes on a date.  Loneliness' function is to ensure every character eventually goes on a date with someone, even if nobody they're attracted to asks them (so sad!).</p><p><strong>Reputation</strong> is a Meta Attribute representing the character's general esteem in Gensokyo as a duellist.  It is won and lost in danmaku.  Reputation provides an Attraction bonus equal to (Reputation - 50) / 2.</p><p><em>Example: Kaguya has been winning a lot of danmaku battles and delivering excellent trash talk - her Reputation is 80, so all other characters have 15 bonus Attraction to her.  Parsee's performance has been below-average for a while, so her Reputation is only 40.  All other characters have -5 Attraction towards Parsee.</em></p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionCharacterSheetItemRelationships"],
            title: "Relationships List",
            text: "<p>The Character Sheet lists all of the character's current relationships and their vital statistics (which are explained in full in the Relationships section below).  As with the relationships list on Alice's Desk, clicking on a relationship brings up a pop-up dialogue with extra detail.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionCharacterSheetItemConnections"],
            title: "Connections",
            text: "<p>The Connections table describes how the character feels about every other active character in the game.  Note that clicking on a connection will take you to the relevant character's Character Sheet; if you want to get back to the original character click on their name in the new Connections table, don't hit your browser's back button!</p><p><strong>Passion</strong> represents the strength of the character's emotional attachment, whether ostensibly positive or negative.  It begins either at a pre-determined amount representing canonical connections or is randomly generated.  Passion increases and decreases frequently in play, mostly from reactions to Attribute rolls during dates as dictated by Reaction Traits.  It is important to determining the chance for intimacy on a date, relationship Stability and graduating to higher level relationships.</p><p>The Passion value for each connection is accompanied by a qualitative descriptor, indicating whether the character is a friend, enemy, ally, sister etc.  This affects what sort of relationship a pair can graduate to after Potential (e.g. enemies and rivals might get Foes With Benefits, only masters and servants can get Workplace Romance etc.), but otherwise is purely cosmetic.  An eternal blood-feud is as good as a dreamy-eyed spring crush for Alice's purposes, as long as there's passion there.</p><p><strong>Attraction</strong> represents simple, shallow desire.  It has a base value either pre-determined (more to match popular fanon pairings than canon, honestly) or randomly generated, which is then modified by Attraction Traits and Reputation.  Attraction changes in play whenever Attraction Traits or Reputation change, and its base value also increases on intimacy during a date, through the awesome power of rationalisation.  It determines who the character will ask out and who they accept, and affects the chance for intimacy on a date and relationship Stability.</p><p><strong>Compatibility</strong> is a derived score indicating how likely the characters are to succeed as a couple.  <strong>Base Compatibility</strong> is the pair's Compatibility at the start of the game, and is used to calculate the Prestige reward when they achieve a higher level relationship (the less initially compatible the couple, the better their eventual success reflects on the advice they received!).  <strong>Current Compatibility</strong> is calculated in the same way, but is constantly updated as conditions change.  The difference between the two can be taken as a measure of your efforts!</p><p>Compatibility is derived from the pair's Passion and Attraction for each other and how their Reaction Traits compare to the other's Attributes.  It suffers a penalty relative to the difference in their Tiers.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionCharacterSheetItemUnsolicitedAdvice"],
            title: "Unsolicited Advice Button",
            text: "<p>If the character hasn't requested advice this week, and you have at least " + erg.constants["pohPrestigeCostUnsolicitedAdvice"] + " Prestige to spend, a button will appear on the Character Sheet allowing you to send Unsolicited Advice for this week.  See the Advice section below.</p>"

        }]


    }, {

        //SUBSECTION - NEWS

        key: erg.constants["pohHelpSectionHelpSubsectionNews"],
        title: "News",
        items: [{

            key: erg.constants["pohHelpSectionHelpSubsectionNewsItemEvents"],
            title: "How events are generated",
            text: "<p>Each type of event has a certain percentage chance to occur to each active character each week.  However, each character can only experience each event type once per week.</p><p><em>Example: Alice advised Kogasa to change her &quot;Heroic Contempt&quot; Trait, and thus Kogasa automatically experiences a Trait change event this week.  She does not roll to see if she randomly has a Trait change.  She still rolls for Request for Advice, Passion change and Attribute change, but only once for each.</em></p><p>Inactive characters become active (&quot;Opening their heart&quot;) via a special event that they roll for each week (see the Satori section below).</p><p>Note that some Special Traits can alter the percentage chance for an event to occur.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionNewsItemLetters"],
            title: "Letters",
            text: "<p>The most common form of letter Alice receives is the Request for Advice.  Click on the news item to go through and read the request, then offer your advice (or more commonly, ignore the text of the request and issue your advice anyway - if these ladies had any useful insights into their own love-lives they wouldn't need your help!).  See the Advice section below for full details.</p><p>Each active character has a " + erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeAdviceLetter"]].baseChance + "% chance to request advice each week.</p><p>At certain pre-determined times Alice will also receive letters from Touhou characters not part of the game, such as her wife Marisa.  These are purely cosmetic, serving mostly as in-character explanations of the game's premise and certain mechanics, and can be ignored on subsequent playthroughs.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionNewsItemSatori"],
            title: "Satori",
            text: "<p>Each week, each inactive character has a " + erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeHeartEntry"]].baseChance + "% chance to become active.  Satori Komeiji becomes aware of the change in the character's heart and sends Alice a letter notifying her that the character has entered her sphere of influence.</p><p>That character does not roll for any events that week, but is a valid target for events initiated by others (e.g. she can be asked out on a date that week).</p><p>If you have used Remilia Scarlet's services to forcibly open a character's heart, Satori will send Alice a letter indicating such, and it will appear in this tab.  This functions identically to random opening of a heart, so that character is also a valid target for events initiated by others.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionNewsItemSociety"],
            title: "Society",
            text: "<p>While a great many different types of news appear in the Society section, they all occur as a consequence of a character asking out another on a date.  A character will make this request if:</p><ul><li>Alice has advised them to.  They will ask out the girl Alice told them to.</li><li>For each relationship they are in, there is a chance to ask out their partner based on the relationship type.</li><li>Each active character has a " + erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeDate"]].baseChance + "% chance to ask out another character each week; they choose randomly from the three characters they are most attracted to.</li></ul><p>If a character secures a date via a higher method, they won't roll for the lower (e.g. if Alice advised them to ask out a girl and they are accepted, they don't test for relationship dates or random dates).  However if they're refused they can drop down to the next method and keep asking (and note if they have multiple relationships they may end up taking out all of them!).</p><p>See the Dating and Relationship sections for full details on how dates, relationship upgrades and breakups operate.</p><p>The exception to the above assertion that all Society news occurs due to a date request is breakups caused by relationships going too long without a date.  Each relationship type has a different tolerance for time without a date, which you can view by clicking on the relationship on Alice's Desk or the Character Sheet.  See the Relationships section below for full details.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionNewsItemDanmaku"],
            title: "Danmaku",
            text: "<p>The gods, youkai and heroes of Gensokyo fight each other all the time for no good reason.  Many news items in other sections will mention danmaku battles - those under the Danmaku tab are where one of the lonely hearts has specifically gone out to challenge someone with her reputation on the line.  You don't lose face if you're randomly mugged by the Youkai Sage and Hakurei shrine maiden, but if in your hubris you interrupt their drinking and call them out to a duel, glory or shame are your only options.</p><p>Each active character has a " + erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeDanmakuMatch"]].baseChance + "% chance to issue a danmaku challenge each week (100% chance if Alice advised them to do so).  They will never challenge more than once per week.</p><p>Danmaku is essentially a series of Attribute rolls that ultimately produce a change in the character's Reputation.  It's not necessary to be familiar with the details for play, but they're reproduced below just in case Reputation factors into your plans.</p><p>The first step in a danmaku challenge is a <strong>Sociability</strong> roll to attract an ally (danmaku during the year of <em>Puppeteer of Hearts</em> is strictly a doubles affair).  Failure randomly selects an ally of lower Tier (or equal, in the case of Tier 1 challengers).  Success randomly selects an ally of equal or higher Tier.</p><p>Then a <strong>Hubris</strong> roll is called for to select opponents.  On failure, two random opponents with a higher combined Tier total than the character and her ally are challenged.  On success, two random opponents with an equal or lower Tier total than the character and her ally are challenged.</p><p>Allies and Opponents are selected from a much wider pool of Gensokyo's denizens than the lonely hearts, so bad rolls can see a character challenging Yukari Yakumo and Reimu Hakurei with only Kisume as her ally, while good rolls might have her beating up weaklings like Rumia and Cirno with the help of Marisa Kirisame.</p><p>Next is an <strong>Expression</strong> roll to trash-talk the opposition effectively.  Good danmaku banter is respected in Gensokyo, so this roll causes a Reputation change.  On success, a <strong>Pettiness</strong> roll is called for; on success the character's eloquence is undercut by their small-mindedness, and they earn only 3 Reputation, while on failure they earn a full 6 Reputation.  If the Expression roll is failed, a Cleverness roll is called for to save face; on success their insults are not eloquent but are at least witty, and they lose only 3 Reputation, while on failure they lose a full 6 Reputation.</p><p>The battle's outcome is affected primarily by Tier.  The challenger has a default 50% chance to win, +/- 10% for each point of difference between the total Tier value of the two teams.</p><p><em>Example: Mokou (Tier 7) and Kaguya (Tier 6) challenge Eirin (Tier 6) and Keine (Tier 5), for a total of 13 vs 11.  The two point difference in Tier gives Mokou and Kaguya a 70% chance of victory.  If Keine and Eirin were the challengers, the Tier difference would be a penalty, and they'd have a 30% chance to win (which is mathematically identical, but the game makes all rolls from the challenger's perspective).</em></p><p>Victory earns Reputation for the challenger, defeat loses it.  Winning awards a base 10 Reputation, +/- 1 per point of Tier difference between the teams (so in our earlier example, Mokou is the challenger and would gain 8 Reputation on a win; if Keine was the challenger, she'd get 12 Reputation for victory).  As with trash-talk, a second roll is called for, in this case a <strong>Viciousness</strong> roll to see if the beating the character handed out was too much even for Gensokyo; success halves the Reputation gain.  Defeat subtracts a base 10 Reputation, +/- 1 per point of Tier difference (a character loses less Reputation being beaten by a superior team, but loses more if they're on the wrong side of a surprise upset).  A Courage roll is called for to save face; success halves the Reputation loss.</p><p>While allies and opponents can be other lonely hearts, their Reputation is unaffected.  Getting dragged into random battles is an everyday matter in Gensokyo; the glory and shame belong to the challenger.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionNewsItemGeneral"],
            title: "General",
            text: "<p>Three types of event fall under the General tab: <strong>Trait, Attribute</strong> and <strong>Passion</strong> changes.  Each active character rolls for each of these three types every week, or may be instructed to undergo one of them by Alice (in which case they still roll for the other two).</p><p>Each character has a " + erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeTraitChange"]].baseChance + "% chance of experiencing a <strong>Trait change</strong> each week.  A random Attraction or Reaction Trait belonging to the character is chosen and replaced with a new random Trait of the same type.  If the character undergoes a Trait change on Alice's advice, the Trait replaced is chosen by Alice, but the replacement is still a random Trait of the appropriate type.</p><p>Each character has a " + erg[erg.constants["pohNews"]][erg.constants["pohNewsTypeAttributeChange"]].baseChance + "% chance of experiencing an <strong>Attribute change</strong> each week.  One of the character's Attributes is chosen randomly and increased or decreased by " + erg.constants["pohAttributeChangeScenarioGainValue"] + " points.  If a character undergoes an Attribute change on Alice's advice, the Attribute and whether it is increased or decreased are chosen by Alice.</p><p>Each character has a " + erg[erg.constants["pohNews"]][erg.constants["pohNewsTypePassionChange"]].baseChance + "% chance of experiencing a <strong>Passion change</strong> each week.  Another active character is chosen randomly, and the first character's Passion towards them is increased or decreased by " + erg.constants["pohPassionChangeScenarioGainValue"] + " points.  If a character undergoes a Passion change on Alice's advice, the other character and whether Passion is increased or decreased are chosen by Alice.</p>"

        }]


    }, {

        //SUBSECTION - DATING

        key: erg.constants["pohHelpSectionHelpSubsectionDates"],
        title: "Dates",
        items: [{

            key: erg.constants["pohHelpSectionHelpSubsectionDatesItemAcceptance"],
            title: "Acceptance and Refusal",
            text: "<p>As explained in the News section above, one character may ask out another because Alice advised her to, because they are in a relationship, or randomly.</p><p>The propositioned girl rolls against the higher of her Loneliness and her Attraction to the asker.  On success, she agrees to the date and the Loneliness of both characters drops by 10 points.  On failure, she refuses, and the asker's Loneliness increases by " + erg.constants["pohLonelinessAdjustmentRefusedDate"] + " points.</p><p>If the two characters are in a relationship, the propositioned girl gains a bonus to her Attraction or Loneliness based on the relationship type (generally a bigger bonus the higher level the relationship), making her acceptance more likely.</p><p>If the propositioned girl is in a relationship with someone else, and not in a relationship with the asker, she has a penalty to her chance to accept based on the Relationship Type.  If she is in multiple relationships that do not include the asker, the highest penalty applies.</p><em>Example:  Kaguya is in relationships with Mokou and Eirin.  Keine asks her out on a date.  Her chance to accept has a penalty from either her relationship with Mokou or Eirin, whichever is greater.  When Mokou asks Kaguya out, Kaguya's chance to accept gains a bonus based on their relationship, and the penalty from her relationship with Eirin does not apply.</em></p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionDatesItemEvents"],
            title: "Date Events",
            text: "<p>During the date, the couple will experience five events.  Normally these are selected randomly, but if the date is occurring on Alice's advice, you may have specified up to 3 events that will be guaranteed to occur.</p><p>Each event asks for an Attribute roll from each partner.  The results of these rolls change each character's Passion for the other based on their Reaction Traits.  If the character has no applicable Reaction Traits, or they cancel out, the passion change defaults to +3 on success/-3 on failure for Positive Attributes, and the reverse for Negative.</p><p><em>Example: Kyouko is taking out Mystia, and they run into the &quot;Troublesome Rabbits&quot; event, which calls for a Pettiness roll from Kyouko and a Cleverness roll from Mystia.  Mystia doesn't have any Reaction Traits that target Pettiness, so the change to her Passion for Kyouko will be the default for a Negative Attribute: -3 if Kyouko succeeds, +3 if she fails.  Kyouko's &quot;Distaste for the Intelligentsia&quot; Reaction Trait targets Cleverness, so she will lose 9 Passion for Mystia if the Cleverness roll succeeds, and gain 9 if it fails, despite Cleverness being a Positive Attribute.</em></p><p><em>Kyouko apparently doesn't like them bright, which is good since Mystia is about as smart as a bag full of rocks.</em></p><p>The couple's Relationship Strength may then change based on the change in their Passion scores.  If both Passion scores increase, Relationship Strength increases by the average of the Passion increases.  If both decrease, Strength is decreased by the average of the Passion decreases.  Otherwise nothing happens.</p><p><em>Examples: if Kyouko and Mystia both failed their rolls, Mystia's Passion for Kyouko would increase by 3, while Kyouko's for her would increase by 9.  Since they both increased, their Relationship Strength increases by 6, the average of the two changes.</em></p><p><em>If both succeeded on their rolls, their Passion scores would drop by the corresponding amounts, and thus their Relationship Strength would fall by 6 points.</em></p><p><em>If one succeeded and one failed, and thus one Passion score increased while the other decreased, their Relationship Strength would be unchanged.</em></p>"


        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionDatesItemIntimacy"],
            title: "Intimacy",
            text: "<p>A date may end in Intimacy.  This is a bonding moment that strengthens the relationship and the couple's feelings for each other, whether that be a G-rated sharing an overlong scarf while watching the stars or something else entirely.  The details are their business and not the game's (all characters are portrayed as potentially sexually active adults and Aya pretty much assumes it means they slept together, but if holding hands is as far as it goes in your personal canon, the game won't argue with you).</p><p>For Intimacy to occur, both partners must pass a roll of (the average of their Passion and Attraction for their partner) + the change in their Passion for their partner this date + the change in Relationship Strength this date + a bonus based on their Relationship Type.  The chance of giving consent to Intimacy can never be higher than " + erg.constants["pohIntimacyConsentMaximum"] + ".</p><p><em>Examples: Kyouko and Mystia have had a wonderful date; Kyouko's Passion for Mystia has increased by 6, Mystia's Passion for Kyouko has increased by 21, and their Relationship Strength has increased by 10.</em></p><p><em>Their Relationship Type is still &quot;Potential&quot;, which has no bonus Intimacy chance.</em></p><p><em>Kyouko's Passion for Mystia is 56 and Attraction 93, for an average of 74.  She must pass a roll of 90 (74 + 6 Passion change + 10 Relationship change) to consent to Intimacy.</em></p><p><em>Mystia's Passion for Kyouko is 71 and Attraction 75, for an average of 73.  She must pass a roll of 95 (73 + 21 Passion change + 10 Relationship Strength change is higher than the maximum of " + erg.constants["pohIntimacyConsentMaximum"] + ").</em></p><p><em>Mystia and Kyouko are extremely likely to have a fond memory of this date.</em></p><p><em>Keine and Eirin have had an awful date.  Keine's Passion for Eirin has fallen by 30, while Eirin's Passion for Keine has fallen by 22.  Their Relationship Strength has fallen by 25.</em></p><p><em>Their &quot;Foes with Benefits&quot; Relationship Type grants a whopping 60% bonus to Intimacy chance, but it's struggling against the odds.</em></p><p><em>Keine's Passion for Eirin is 50, and her Attraction is 69, for an average of 59.  She must pass a roll of 64 (59 - 30 Passion change - 25 Relationship Strength change + 60 Relationship Type bonus) to grant intimacy consent.</em></p><p><em>Eirin's Passion for Keine is 42 and her Attraction 38, for an average of 40.  Eirin must pass a roll of 53 (40 - 22 Passion change - 25 Relationship Strength change + 60 Relationship Type bonus) to grant Intimacy consent.  On the plus side, the date was so bad that Keine will probably eat the history of it and nobody will ever know.</em></p><p><em>Even with the huge bonus from their Relationship Type, the pair's chance of Intimacy is only a little north of 25%, as both must pass the roll.</em></p><p>Intimacy increases both Passion Ratings, both Base Attractions and Relationship Strength by 5 points each.  Relationship upgrades are only checked for on dates that end in Intimacy.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionDatesItemBadDate"],
            title: "Bad Dates",
            text: "<p>A date where both Passion ratings and Relationship Strength have suffered a net decrease is considered a bad date.  This triggers a check for breakup - see the Relationship section below for full details.</p>"

        }]


    }, {

        //SUBSECTION - RELATIONSHIPS


        key: erg.constants["pohHelpSectionHelpSubsectionRelationships"],
        title: "Relationships",
        items: [{

            key: erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemStarting"],
            title: "Starting a relationship",
            text: "<p>When a character accepts a date request from a character she's not currently in a relationship with, a new Level 0 (Potential) relationship is created between the two characters.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemStrength"],
            title: "Strength",
            text: "<p>Relationship Strength is a measure of how well the relationship is going; its quality, if you will.  It's important for upgrading to higher level relationships.</p><p>Initial Strength is equal to the couple's Current Compatibility at the time the relationship is formed.  From then on, it only changes during dates, as explained in the Dates section above.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemStability"],
            title: "Stability",
            text: "<p>Stability is a measure of the relationship's resilience to breakup; it can be understood as the couple's confidence that this is the relationship they want to be in for the rest of their lives.  It is rolled whenever there is potential for breakup, and is important in upgrading to higher level relationships.</p><p>Stability starts at 100 and is then penalised by various factors:</p><ul><li><strong>Passion difference: </strong>" + erg.constants["pohRelationshipStabilityCouplePassionModifier"] + " per point of difference in the couple's Passion scores for each other.</li><li><strong>Tier difference: </strong>" + erg.constants["pohRelationshipStabilityTierModifier"] + " per difference in Tier between the characters.</li><li><strong>Passion for other characters: </strong> for each character towards whom a character in the relationship has an equal or higher Passion than for their partner, a penalty of 10% of that Passion value is levied.</li><li><strong>Attraction for other characters: </strong> for each character towards whom a character in the relationship has an equal or higher Attraction than for their partner, a penalty of 10% of that Attraction value is levied.</li></ul><p><em>Example: Keine and Eirin are in a relationship.  Keine's Passion for Eirin is 90, while Eirin's for her is 60.  Their Attraction for each other is 90 each way.  They lose 30 points of Stability for the difference in Passion, and 5 points because Eirin is one Tier higher than Keine.  They both have Attraction and Passion at 95 for both Kaguya and Mokou, levying a further penalty of 38.  Their Stability is 27, not good but better than most.</em></p><p>Most relationships start at Stability 0, doomed without Alice's intervention.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemLongevity"],
            title: "Longevity",
            text: "<p>Longevity is the number of full weeks that have elapsed since the relationship's first date.  A longevity of 10 is a prerequisite for True Love.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemLevel0"],
            title: "Level 0 Relationship - Potential",
            text: "<p>All relationships are created at this level when the couple have their first date and occupy it for at least the duration of that date.  In-setting it doesn't imply much other than the characters have dated at least once recently and may do so again.  Most random relationships will not get past this stage without Alice's help.</p><p><strong>Weekly Date Chance: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypePotential"]].relationshipDateChance + "% (rolled for each partner)</p><p><strong>Date Acceptance Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypePotential"]].dateAcceptanceModifier + "%</p><p><strong>Intimacy Consent Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypePotential"]].intimacyModifier + "%</p><p><strong>Jealousy on Cheating Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypePotential"]].jealousyModifier + "%</p><p><strong>Date Refusal for Outsiders: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypePotential"]].outsiderRefusalModifier + "%</p><p><strong>Weeks Without Date Before Breakup Check: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypePotential"]].noDateBreakupThreshold + "</p><p>Alice gains no Prestige when a relationship of this level forms.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemLevel1"],
            title: "Level 1 Relationship - Various",
            text: "<p>To qualify for a Level 1 relationship, a couple must have a date end with Intimacy, then both succeed on a roll of their Passion for their partner, modified by their Passion gain during the date.  Their Relationship Type is then changed to a random Level 1 relationship fitting the qualitative description on their Passions for each other.</p><p><em>Example: Kyouko and Mystia's wonderful date from an earlier example has just ended on an intimate note.  Kyouko's Passion for Mystia is now 61, having gained 11 Passion total over the date.  Mystia's Passion for Kyouko is now 76, having gained 26 over the course of the date.  Kyouko rolls against 72 (61 Passion + 11 Passion change), while Mystia rolls against 102 (76 Passion + 26 Passion change).</em></p><p><em>Mystia is automatically successful, and Kyouko also succeeds, so the pair graduate to a level 1 relationship.  They both have friendly descriptors on their Passion ratings for each other, so the game sorts them into &quot;Friends with Benefits.&quot;</em></p><p>The different types of Level 1 relationship exist mostly for the sake of variety and simulation (e.g. rather than going instantly from killing each other to sleeping with each other, &quot;Foes with Benefits&quot; allows Kaguya and Mokou an interstitial phase where they do both).  They are not intended to be balanced or strategically important.  In-setting, they may or may not be explicitly romantic based on the type, but you may assume their friends know something is up.  Way up.</p><p><em><strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeItem"]].label + "</strong></em></p><p><strong>Weekly Date Chance: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeItem"]].relationshipDateChance + "% (rolled for each partner)</p><p><strong>Date Acceptance Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeItem"]].dateAcceptanceModifier + "%</p><p><strong>Intimacy Consent Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeItem"]].intimacyModifier + "%</p><p><strong>Jealousy on Cheating Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeItem"]].jealousyModifier + "%</p><p><strong>Date Refusal for Outsiders: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeItem"]].outsiderRefusalModifier + "%</p><p><strong>Weeks Without Date Before Breakup Check: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeItem"]].noDateBreakupThreshold + "</p><p><em><strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeFriendsWithBenefits"]].label + "</strong></em></p><p><strong>Weekly Date Chance: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeFriendsWithBenefits"]].relationshipDateChance + "% (rolled for each partner)</p><p><strong>Date Acceptance Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeFriendsWithBenefits"]].dateAcceptanceModifier + "%</p><p><strong>Intimacy Consent Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeFriendsWithBenefits"]].intimacyModifier + "%</p><p><strong>Jealousy on Cheating Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeFriendsWithBenefits"]].jealousyModifier + "%</p><p><strong>Date Refusal for Outsiders: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeFriendsWithBenefits"]].outsiderRefusalModifier + "%</p><p><strong>Weeks Without Date Before Breakup Check: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeFriendsWithBenefits"]].noDateBreakupThreshold + "</p><p><em><strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeFoesWithBenefits"]].label + "</strong></em></p><p><strong>Weekly Date Chance: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeFoesWithBenefits"]].relationshipDateChance + "% (rolled for each partner)</p><p><strong>Date Acceptance Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeFoesWithBenefits"]].dateAcceptanceModifier + "%</p><p><strong>Intimacy Consent Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeFoesWithBenefits"]].intimacyModifier + "%</p><p><strong>Jealousy on Cheating Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeFoesWithBenefits"]].jealousyModifier + "%</p><p><strong>Date Refusal for Outsiders: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeFoesWithBenefits"]].outsiderRefusalModifier + "%</p><p><strong>Weeks Without Date Before Breakup Check: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeFoesWithBenefits"]].noDateBreakupThreshold + "</p><p><em><strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeExtremelyCloseSisters"]].label + "</strong></em></p><p><strong>Weekly Date Chance: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeExtremelyCloseSisters"]].relationshipDateChance + "% (rolled for each partner)</p><p><strong>Date Acceptance Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeExtremelyCloseSisters"]].dateAcceptanceModifier + "%</p><p><strong>Intimacy Consent Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeExtremelyCloseSisters"]].intimacyModifier + "%</p><p><strong>Jealousy on Cheating Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeExtremelyCloseSisters"]].jealousyModifier + "%</p><p><strong>Date Refusal for Outsiders: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeExtremelyCloseSisters"]].outsiderRefusalModifier + "%</p><p><strong>Weeks Without Date Before Breakup Check: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeExtremelyCloseSisters"]].noDateBreakupThreshold + "</p><p><em><strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeWorkplaceRomance"]].label + "</strong></em></p><p><strong>Weekly Date Chance: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeWorkplaceRomance"]].relationshipDateChance + "% (rolled for each partner)</p><p><strong>Date Acceptance Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeWorkplaceRomance"]].dateAcceptanceModifier + "%</p><p><strong>Intimacy Consent Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeWorkplaceRomance"]].intimacyModifier + "%</p><p><strong>Jealousy on Cheating Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeWorkplaceRomance"]].jealousyModifier + "%</p><p><strong>Date Refusal for Outsiders: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeWorkplaceRomance"]].outsiderRefusalModifier + "%</p><p><strong>Weeks Without Date Before Breakup Check: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeWorkplaceRomance"]].noDateBreakupThreshold + "</p><p>Alice gains " + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeItem"]].basePrestige + " points of Prestige when a relationship is upgraded to Level 1, plus " + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeItem"]].compatibilityPrestigeModifier + " points of Prestige per point of Base Compatibility below 100.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemLevel2"],
            title: "Level 2 Relationship - Couple",
            text: "<p>To qualify for a Level 2 relationship, two characters in a Level 1 relationship must have a date end with Intimacy, then both succeed on rolls of their Passion for each other, and the relationship must succeed on rolls of its Strength and Stability.</p><p>&quot;Couple&quot; is the only Level 2 relationship, and is assumed by the game to be explicitly romantic.  The descriptors on both partners' Passion ratings for each other are changed to reflect romantic love.</p><p><strong>Weekly Date Chance: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeCouple"]].relationshipDateChance + "% (rolled for each partner)</p><p><strong>Date Acceptance Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeCouple"]].dateAcceptanceModifier + "%</p><p><strong>Intimacy Consent Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeCouple"]].intimacyModifier + "%</p><p><strong>Jealousy on Cheating Modifier: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeCouple"]].jealousyModifier + "%</p><p><strong>Date Refusal for Outsiders: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeCouple"]].outsiderRefusalModifier + "%</p><p><strong>Weeks Without Date Before Breakup Check: </strong>" + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeCouple"]].noDateBreakupThreshold + "</p><p>Alice gains " + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeCouple"]].basePrestige + " points of Prestige when a relationship is upgraded to Level 2, plus " + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeCouple"]].compatibilityPrestigeModifier + " points of Prestige per point of Base Compatibility below 100.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemLevel3"],
            title: "Level 3 Relationship - True Love",
            text: "<p>To qualify for True Love, two characters in a Level 2 relationship with a Strength of 100 and a Longevity of 10 or greater must have a date end with Intimacy, then both succeed on rolls of their Passion for each other, and the relationship must succeed on a roll of its Stability.</p><p>True Love is the success state for a pairing in <em>Puppeteer of Hearts.</em>  The characters are removed from the game, and Alice gains " + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeTrueLove"]].basePrestige + " points of Prestige plus " + erg[erg.constants["pohRelationshipTypes"]][erg.constants["pohRelationshipTypeTrueLove"]].compatibilityPrestigeModifier + " points of Prestige per point of Base Compatibility below 100.</p><p>The happy pair will appear on your roll of honour at the end of the game.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemBreakup"],
            title: "Breaking up and making up",
            text: "<p>Relationships can break up for three reasons: a bad date, jealousy when one partner dates someone else, or too long a period passing without a date.  Each case is described in detail below.</p><p>When a relationship breaks up, it is discarded by the game and has no further affect on play.  If the pair subsequently go on a date, they form a new Level 0 relationship with a Strength equal to their Current Compatibility and a Longevity of 0.</p><p>Breakups have no other effects.  Alice keeps any Prestige earned by the relationship, the pair's Passion and Attraction is unchanged, and if they made it to Level 2/Couple, their Passion descriptors for each other remain romantic.</p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemBreakupBadDate"],
            title: "Breakup Trigger: Bad Date",
            text: "<p>A bad date is one where the change in both Passion totals and Relationship Strength is net-negative.  On a bad date, both partners must roll their Passion for the other, modified by the Passion loss during the date, and the relationship must roll Stability.  If all three rolls fail, the relationship breaks up.</p><p><em>In an earlier example, Keine and Eirin had a terrible date.  Keine's Passion for Eirin is 50, having lost 30 points on the date.  Eirin's for Keine is 42, having lost 22.  They must both roll against 20 (50 - 30 and 42 - 22), and must also roll their Stability of 27.</em></p><p><em>They fail all three rolls and break up, probably blaming Mokou and Kaguya somehow.  In this case, Keine's Special Trait activates and she eats the history of the breakup, saving the relationship.  Other characters at this point are not so lucky.</em></p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemBreakupJealousy"],
            title: "Breakup Trigger: Jealousy",
            text: "<p>It's effectively impossible to keep cheating a secret in Gensokyo.  The only hope is that the offended party isn't jealous enough to believe everything she reads in the newspaper.</p><p>Whenever a character goes on a date, every other character that they're in a relationship with who isn't part of the date rolls Jealousy, modified by the relationship type.  If they succeed, the relationship must succeed on a Stability roll or break up.</p><p><em>Example:  Kyouko and Mystia have a good relationship, but nobody said anything about being exclusive, right?  So of course when the beautiful and talented Merlin Prismriver asks Mystia out on a date, she doesn't hesitate to accept.</p><p>Kyouko rolls against 33: her Jealousy of 53 - 20 for &quot;Friends with Benefits&quot;.  She passes the roll, and isn't happy at all - their relationship must pass a Stability roll or break up.  Sadly their Stability is not very good (as you might have guessed from Mystia's attraction to Merlin), and Kyouko and Mystia's good thing comes to a tearful, screaming end.</em></p><p><em>On the plus side, Mystia and Merlin's date goes quite well!</em></p>"

        }, {

            key: erg.constants["pohHelpSectionHelpSubsectionRelationshipsItemBreakupNoDate"],
            title: "Breakup Trigger: Too long without a date",
            text: "<p>Each relationship type has a given number of weeks it can go without a date before it must test for breakup.  Once that threshold arrives, the relationship must pass a Stability roll or break up.  Each subsequent week that passes without a date calls for another roll, with a cumulative " + erg.constants["pohNoDateBreakupStabilityPenalty"] + " point penalty to effective Stability.</p><p><em>Example: Having gone out on a date, Merlin and Mystia have a level 0 (Potential) relationship, which has a threshold of 4 weeks without a date before making rolls.  At the end of the fourth week, Merlin hasn't written or called around, keeps accidentally missing Mystia at parties and seems to be washing her hair an awful lot of nights.  They must check for breakup.</em></p><p><em>Their relationship's Stability is 18, and on that first roll they get a lucky success.  The next week, 5 full weeks after their date, their Stability is considered to be " + erg.constants["pohNoDateBreakupStabilityPenalty"] + " points lower, but again they get a lucky success as Mystia holds on to hope.  Finally on week six without a date the penalty accumulates to 20 points, higher than their Stability, and they automatically break up.</em></p><p><em>Mystia realises she threw away a good thing with Kyouko for nothing, gets drunk and starts attacking humans to externalise her bitterness, getting exterminated by Reimu for her troubles.  Merlin never gives the matter another thought, because she is a terrible person like most of her peers.</em></p>"

        }]


    }, {

        //SUBSECTION - ADVICE
        
        key: erg.constants["pohHelpSectionHelpSubsectionAdvice"],
        title: "Advice",
        items: [{

            key: erg.constants["pohHelpSectionHelpSubsectionAdviceItemScreen"],
            title: "Getting to the Advice screen",
            text:  "<p>Clicking on a Request for Advice news item or an existing Advice item on Alice's Desk will take you to a screen displaying the letter the character in question has written to Alice.  If you've already given them Advice this week, you'll see it displayed here.  Click on the &quot;Give Advice&quot; or &quot;Change Advice&quot; button to go through to the Advice screen itself.</p><p>The Advice screen always displays a selection of details from the advisee's Character Sheet, plus a display of their final Passion changes for Attribute rolls during dates based on their Reaction Traits.  This allows you to make good decisions about the advice you give without needing to refer back to the full Character Sheet.</p>"

        }, {
        
            key: erg.constants["pohHelpSectionHelpSubsectionAdviceItemPartner"],
            title: "Choosing a date",
            text: "<p>When giving Advice, you <strong>must</strong> specify a character for the advisee to ask out that week.</p><p>When you arrive on the Advice screen, one will already be selected - either the first in alphabetical order, or the last partner you advised this character to ask out.  You will see a summary of their relevant details - Tier, physical characteristics, Attributes and their final Passion changes for Attribute rolls during dates based on their Reaction Traits (the Traits themselves aren't displayed on this screen because you can't do anything about them - you just need to know their consequences).  You will also see a display of the characters' Passion, Attraction and Compatibility for each other, plus the details of their relationship if any.</p><p>You should see a drop-down box allowing you to change the selected character.  This will update the display, allowing you to quickly compare different matches for your advisee.</p>"
        
        }, {
        
            key: erg.constants["pohHelpSectionHelpSubsectionAdviceItemPlan"],
            title: "The date plan",
            text: "<p>You may optionally specify up to three of the five events that will take place on the date if your advisee is accepted.  The events are arranged into groups based on the Attribute that your advisee will roll during the event.  The Attribute in parenthesis is the one their partner will roll.</p><p>If you've planned out a date for this character before, the events you picked last time will be pre-selected.  Make sure you double-check, as a Trait change on either side may have rendered one or more of them a bad choice, and if your advisee will be asking someone else out this time they're probably right out.</p>",
        
        }, {
        
            key: erg.constants["pohHelpSectionHelpSubsectionAdviceItemExtracurricular"],
            title: "Free time activities",
            text: "<p>You may optionally specify one non-date activity for your advisee.  Your options are danmaku, an Attribute change event, a Passion change event or a Trait change event.</p><p>The danmaku option guarantees your advisee will challenge someone, though you have no influence over their ally or opponents.</p><p>The Attribute change option guarantees a corresponding event; you choose the Attribute and whether it is raised (&quot;Cultivate&quot;) or lowered (&quot;Suppress&quot;).  The magnitude of the change is 5 points.</p><p>The Passion change option likewise guarantees a corresponding event; you choose which character it will target, as well as whether Passion is raised (&quot;Get closer to&quot;) or lowered (&quot;Distance yourself from&quot;).  The magnitude of the change is 10 points.</p><p>The Trait change option allows you to choose a Trait to be replaced by a random other Trait of the same type.</p>"
        
        }, {
        
            key: erg.constants["pohHelpSectionHelpSubsectionAdviceItemSubmitting"],
            title: "Submitting and Revising Advice",
            text: "<p>Once you're happy with the advice you're giving, click the &quot;Send Advice&quot; button.  You'll be returned to Alice's Desk, and you should see an item for the advice you just issued in the Advice section.</p><p>Click on that item to return to the screen showing the character's letter, where you may click on &quot;Change Advice&quot; to return to the Advice screen and change your selections.  You may do this as many times as you please, but once you select &quot;End Week&quot; the relevant events will occur and you will not be able to undo your final advice.</p>"
                    
        }, {
        
            key: erg.constants["pohHelpSectionHelpSubsectionAdviceItemUnsolicited"],
            title: "Unsolicited Advice",
            text: "<p>If a character has not requested advice this week, and you have at least " + erg.constants["pohPrestigeCostUnsolicitedAdvice"] + " Prestige to spend, you will see a &quot;Send Unsolicited Advice&quot; button their Character Sheet.  Click it and spend " + erg.constants["pohPrestigeCostUnsolicitedAdvice"] + " Prestige to be taken to the Advice screen for that character.</p><p>Apart from the Prestige cost this is treated as normal Advice in every way.  You may revise it normally, the advisee will be just as obedient to Alice's wishes as ever etc.</p>"
        
        }, {
        
            key: erg.constants["pohHelpSectionHelpSubsectionAdviceItemStrategy"],
            title: "Advice Strategy",
            text: "<ul><li>Make dates between characters you intend to get to True Love status.  Unless you have a plan of exceeding finesse, it's unlikely to be worth the risk of having two characters date for any other reason, since the likely Passion increases and the possibility of Intimacy racking up bonus Base Attraction could cause you Stability problems in their other relationships down the road.</li><li>Try to pick reliable winners for date events - while gambling on a good result from an Attribute rated at 50 against a +15/-15 reaction might secure Intimacy, it could just as easily lead to a bad date breakup, and over the long run will average a big 0 Passion.</li><li>Try to pick a full 3 events for every date you set up.  Random events are not your friends, and you're stuck with at least two of them; don't make it worse for yourself!</li><li>Always specify a non-date activity; not all of them are risky, and you gain nothing from ignoring the opportunity.  But note that non-date events will typically happen after the date you've specified, so any changes will not benefit that date.</li><li>Trait change for Reaction Traits is usually the best way to improve a relationship's chances.  You can't control all the events the pair will experience, so sooner or later a bad Reaction Trait/Attribute matchup will bite you.  The fastest way to fix that is get rid of the Trait, though it's at the risk of getting one just as bad or worse in return.</li><li>Changing Attraction Traits is less dramatic because very few Traits reduce Attraction, thus the couple's mutual Attraction is unlikely to suffer from extraneous heterochromia-lust or the like.  But if you're having Stability problems due to unfortunate out-of-relationship attractions, killing one of the responsible Attraction Traits is a reliable method of reining in that wandering eye.</li><li>Attribute change is the safe choice if you've got no other plans; either catering to the intended partner's Reaction Traits, or simply raising Positive Attributes and lowering Negative ones.  Jealousy is a particularly good target for suppression, as you can't trust the intended partner to reject all other date offers.</li><li>Passion change is largely a tool for increasing Stability, usually by instructing the advisee to distance herself from third parties she likes a little too much.  You can reinforce the advisee's Passion for the intended partner, but hopefully she'll be getting plenty of Passion already from your skilful choice of date plan :)</li><li>Danmaku is of niche use, as it's a gamble to raise or lower the Attraction of all other characters towards the advisee.  You may find it useful to advise Danmaku if the character is a threat to the Stability of a relationship between third parties, so long as you're confident that she'll do poorly.</li></ul>"
        
        
        }]

    }, {
    
        //SUBSECTION - REMILIA

        key: erg.constants["pohHelpSectionHelpSubsectionRemilia"],
        title: "Remilia Scarlet, Master of Fate",
        items: [{

            key: erg.constants["pohHelpSectionHelpSubsectionRemiliaItemBuying"],
            title: "Buying extra characters",
            text: "<p>On Week 14 (the first week of summer), Remilia Scarlet will offer her services in fate manipulation to Alice's cause.  This allows you to browse the roster of currently inactive characters and pay Prestige to open their hearts, bringing them into the game.</p><p>A &quot;Request Remilia&quot; button will appear on Alice's Desk.  Click it to view the inactive characters; much like the Advice screen you will be able see most of their Character Sheet details, and choose which character you're viewing via a drop-down box.</p><p>While you have full details on the character herself, her connections to others (and theirs to her) are not visible and will not be revealed until the character becomes active.</p><p>If you have at least " + erg.constants["pohPrestigeCostRemiliaHeartOpen"] + " Prestige, a &quot;Make Request&quot; button will be visible.  Click it and pay " + erg.constants["pohPrestigeCostRemiliaHeartOpen"] + " Prestige to activate the currently selected character.  She will open her heart and join the game just as if she did so randomly of her own accord; she will not be a valid target for events in the current week, as they have already resolved, but will act just like any other character in the following weeks.  You may send her Unsolicited Advice in the week you activate her, if you can afford to do so.</p><p>This service is intended primarily to allow players to bring their favourite Touhou characters into the game if the dice are not favouring them.  The high Prestige cost and lack of an easy method to compare active and inactive characters for compatibility is intended as disincentive for strategic acquisition, so as not to make certain consistent pairings a degenerate strategy between games (that is, it's fine to always pair Kaguya and Mokou because you're a fan, but it's bad for the game for &quot;pair up Kaguya and Mokou&quot; to always be an optimal action).</p>"
    
        }]
    
    }]

});                    //Help section - Help


//################################### HELP SECTION - FAQ #################################################

erg.help.push({

    key: erg.constants["pohHelpSectionFAQ"],
    title: "FAQ",
    subsections: [{

        //SUBSECTION - TOUHOU

        key: erg.constants["pohHelpSectionFAQSubsectionTouhou"],
        title: "Touhou Related Questions",
        items: [{

            key: erg.constants["pohHelpSectionFAQSubsectionTouhouItemLearn"],
            title: "Where can I learn more about Touhou?",
            text: "<p><em>Note: this beta version of the software is missing text explaining who the characters are and linking to their relevant wiki pages.  It's assumed most testers will know who they're dealing with.</em></p><p>The best place to learn more about Touhou (other than buying and playing the official games, which you should do assuming you have even the smallest tolerance for brutal difficulty) is the <a href=\"http://en.tohouwiki.net/\" target=\"_new\">Touhou Wiki.</a>  Since it's a wiki the presentation is a little dry and there's no obvious entrance point to the hobby, but it does collate all official information into one spot.  Translated print works on the wiki - such as <em>Bohemian Archive in Japanese Red, Perfect Memento in Strict Sense</em> and <em>Symposium of Post-Mysticism</em> are excellent windows into the &quot;canon&quot;.  Also check out their links to <em>Silent Sinner in Blue, Wild and Horned Hermit, Strange and Bright Nature Deity</em> and their comedic cousin <em>Inaba of the Moon and Inaba of the Earth</em> for an official manga look at Gensokyo.</p><p>Youtube is also an excellent destination, as you'll find both plentiful replays of the shooting and fighting games (probably the only way many of us will ever see an Extra stage) and all of the series' superb music.</p><p>Fandom is just as big (or bigger) a part of Touhou as the works of ZUN/Team Shanghai Alice.  If you're still at Youtube, check out the amazing arranges of Touhou music, particularly the memetastic Bad Apple! and the Lunasa, Lyrica and Merlin playlists.  The direct inspiration for <em>Puppeteer of Hearts</em> is of course the titanic quantity of doujin manga produced by Touhou fans.  Scanlations can be read at <a href=\"http://gensokyo.org/\" target=\"_new\">gensokyo.org</a> and <a href=\"http://dynasty-scans.com/reader/volumes/doujins_touhou_project\">Dynasty Reader</a>.  Many, many more can be found on the wiki and <a href=\"http://safebooru.org/\" target=\"_new\">Safebooru</a> with a little searching.  Be warned that you will probably come across some NSFW material browsing those sights, and due to the vast quantity of doujin, Sturgeon's Law is in effect.</p>"

        }, {
        
            key: erg.constants["pohHelpSectionFAQSubsectionTouhouItemFavourite"],
            title: "Why isn't my favourite character in the game?",
            text: "<p>The Touhou Project has something in the order of a hundred characters, while <em>Puppeteer of Hearts</em> has only thirty-six lonely hearts.  If you're wondering why a given character isn't amongst them (and to be fair, many of the most popular characters are not), the reasons break down like this:</p><ol><li><em>Puppeteer of Hearts</em> is intended to be a minigame in a larger RPG that I will never finish (but will work on fruitlessly anyway!).  It's intended that major characters in that game can have their love-lives influenced by player actions (where appropriate), but more in the order of two or three potential partners, not fifty.  Those dialogue trees would be annoying to write!  I am sorry if one of my silly software projects makes it harder to express your Sanae/Kogasa fandom in another :&lt;</li><li>If your favourite character is from the PC-98 era, I'm sorry but for reasons of scope control if nothing else I'm pretending that era doesn't exist.</li><li>Many of the Touhou characters are little girls.  Any character that I considered physically or mentally underaged was not included, even if they're &quot;really 500 years old.&quot;  Tewi is older than dirt and adult in character, but she has the body of a tiny girl and it would be super-creepy to put her in a game that might randomly hook her up with adult women.</li></ol>"
        
        }, {
        
            key: erg.constants["pohHelpSectionFAQSubsectionTouhouItemMusicians"],
            title: "So why is Mystia OK if Nitori isn't?",
            text: "<p>Given the ambiguity in the source art, the variety in fan art and the in-setting fact that most of the characters aren't human, there are edge cases where &quot;adult enough&quot; to be in the game is a bit arbitrary.  I gave the official print works a lot of weight, as well as fan works that I felt presented a reasonable and defensible portrayal of the character in question as at least a young adult.</p><p>Oddly enough the real edge cases that got in - Mystia, Kyouko and the Prismrivers - are all musicians.  I have no idea if that speaks to an odd prejudice on my part, but the Prismrivers conduct themselves with relative professionalism and Chojuu Gigaku is clearly youth-culture but not for or by children (it helps that since <em>Symposium of Post Mysticism</em> you see more fanart of Mystia and Kyouko firmly in young adult territory).</p><p>The bottom line is that while the game's Intimacy mechanic isn't explicitly sex, it isn't explicitly not.  If I felt creepy putting somebody in a game where they might sleep with Seiga Kaku, she didn't go in (hence no Nitori).  Kyouko and Mystia feel more like they're old enough to make that poor life decision and deal with the consequences!</p>"
        
        }, {
        
            key: erg.constants["pohHelpSectionFAQSubsectionTouhouItemDeviations"],
            title: "What's with the deviations and expansions on canon?",
            text:  "<p>This is a strawman question, since Touhou fans are used to the canon being very loose and stomped all over by fan works :)  But the game does take positions with questionable or no support from the canon - Alice and Marisa are married, Yukari is explicitly more powerful than everyone else, Eirin is out as a god and Kasen as an oni etc.</p><p>This is partly for gameplay reasons - Eirin and Kasen need species for the Attraction mechanic, so I may as well give them what I believe to be their real ones.  The Tier mechanic doesn't have any nuance, so you get an explicit ladder with Yukari on top (and a bunch of ambiguous powers - Oni, Keine, Patchouli - shoved into Tier 5).</p><p>The other part is the aforementioned parent RPG to which <em>Puppeteer of Hearts</em> is intended to be a minigame - the assumed advanced timeline, everything happening in pairs and Alice & Marisa's wedded bliss serve the premise of that game.  Even though it'll never be finished.</p><p>Anything else odd in the game probably comes from a doujin I liked.</p>"
        
        }]

    }, {
    
        //SUBSECTION - GAME

        key: erg.constants["pohHelpSectionFAQSubsectionGame"],
        title: "Gameplay Related Questions",
        items: [{

            key: erg.constants["pohHelpSectionFAQSubsectionGameItemRounding"],
            title: "Is there a rounding rule?",
            text:  "<p>Yes.  All fractional numbers are rounded down before becoming visible to the player, usually as late in the process as possible.  There may be some ambiguity from the player's point of view on when rounding happens, but it's always down, and always before the number hits your screen.</p>"

        }]
    
    }, {
    
        //SUBSECTION - TECHNICAL

        key: erg.constants["pohHelpSectionFAQSubsectionTechnical"],
        title: "Technical Questions",
        items: [{

            key: erg.constants["pohHelpSectionFAQSubsectionTechnicalItemSaves"],
            title: "I've lost my save games!",
            text: "<p>Your game is saved on your computer in your browser's local storage.  Deleting temporary internet files or other browser-clearing procedures may result in loss of your save games.</p>"

        }, {

            key: erg.constants["pohHelpSectionFAQSubsectionTechnicalItemBrowsersAndResolutions"],
            title: "Which browsers are supported?",
            text: "<p><em>Puppeteer of Hearts</em> should work on any modern browser, but its development targets are the latest Windows versions of Chrome, Firefox and Internet Explorer and the iPad version of Safari circa August 2012.</p>"

        }]
            
    }]
    
});

            /*
             = "pohHelpSectionFAQSubsectionTouhouItemFavourite";
             = "pohHelpSectionFAQSubsectionTouhouItemMusicians";
            erg.constants["pohHelpSectionFAQSubsectionTouhouItemDeviations"] = "pohHelpSectionFAQSubsectionTouhouItemDeviations"; */
