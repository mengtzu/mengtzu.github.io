$(document).ready(function () {

    //Just prototype stuff, disregard


    $("#roller").click(function (event) {

        stopDefault(event);
        rollDice($("#poolSelect").val(), 7, true);

    });

   /* $("#sidereal").click(function (event) {

        stopDefault(event);
        rollDice($("#poolSelect").val(), 4, true);

    }); */

    $("#sakuyaInvestigate").click(function (event) {

        stopDefault(event);

        var perception = {

            type: CONSTANT_MUNDANE_BONUS,
            label: "Perception",
            magnitude: 3

        }

        var investigation = {

            type: CONSTANT_MUNDANE_BONUS,
            label: "Investigation",
            magnitude: 5
        }

        var specialty = {

            type: CONSTANT_MUNDANE_BONUS,
            label: "Specialty: Physical Clues",
            magnitude: 3
        }

        var stunt = {

            type: CONSTANT_MUNDANE_BONUS,
            label: "Stunt",
            magnitude: 2
        }

        var secondInvestigationExcellency = {

            type: CONSTANT_SUCCESS_BONUS,
            label: "Second Investigation Excellency",
            magnitude: 4

        }

        var difficulty = {

            type: CONSTANT_DIFFICULTY,
            magnitude: 3

        }

        var essence = {

            type: CONSTANT_ESSENCE,
            magnitude: 2

        }


        var snow = {

            type: CONSTANT_INTERNAL_PENALTY,
            label: "Snowing on the scene",
            magnitude: 2

        }

        var coveredTracks = {

            type: CONSTANT_EXTERNAL_PENALTY,
            label: "Killer covered their tracks",
            magnitude: 2

        }


        buildPoolAndRoll(perception, investigation, specialty, stunt, secondInvestigationExcellency, difficulty, essence, snow, coveredTracks);




    });

    $("#badFlurry").click(function (event) {

        stopDefault(event);

        var dexterity = {

            type: CONSTANT_MUNDANE_BONUS,
            label: "Dexterity",
            magnitude: 3

        }

        var melee = {

            type: CONSTANT_MUNDANE_BONUS,
            label: "Melee",
            magnitude: 5
        }

        var specialty = {

            type: CONSTANT_MUNDANE_BONUS,
            label: "Specialty: Swords",
            magnitude: 1
        }

        var firstMeleeExcellency = {

            type: CONSTANT_MAGIC_BONUS,
            label: "First Melee Excellency",
            magnitude: 6
        }

        var actionPenalty = {

            type: CONSTANT_ACTION_PENALTY,
            label: "Attack four of five in flurry",
            magnitude: 8

        }

        var woundPenalty = {

            type: CONSTANT_WOUND_PENALTY,
            label: "Wound Penalty",
            magnitude: 4

        }

        var difficulty = {

            type: CONSTANT_DIFFICULTY,
            magnitude: 9

        }

        var essence = {

            type: CONSTANT_ESSENCE,
            magnitude: 2

        }


        buildPoolAndRoll(dexterity, melee, firstMeleeExcellency, actionPenalty, woundPenalty, difficulty, essence);


    });

});