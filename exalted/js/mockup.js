function processSegmentObject(segmentObject) {

    if (segmentObject.currentResponse) {

        $("#currentResponse").html(segmentObject.currentResponseHTML);

    }

    if (segmentObject.currentActionText) {

        $("#currentActions").html(segmentObject.currentActionHTML);

    }

    for (i = 0; i < segmentObject.actions.length; i++) {

        $("#currentActions").append("<input type=\"button\" id=\"" + segmentObject.actions[i].id + "\" value=\"" + segmentObject.actions[i].value + "\" />");
        $("#" + segmentObject.actions[i].id).click(getFunctionByKey(segmentObject.actions[i].functionKey));

    }


}


//####################################### DOCUMENT.READY ##################################################

$(document).ready(function () {


    segmentObjectSakuya0 = {

        key: "segmentObjectSakuya0",
        currentResponse: true,
        currentResponseHTML: "<p>\"Champion, it is kind of you to spare time for this poor litle shrine, but it is beneath your notice.  Please do not trouble yourself over a trifiling accident of the weather\".</p><p>You do not recognise the young guard who is at such pains to move you on from the ruined shrine.  He has recognised you - Sakuya Thrice-Elegant, champion of the king of Makai, first sword of the Winter Tiger School - but his superiors have clearly not warned him of the danger of your curiosity.</p><p>The temple certainly appears to have been demolished by a storm, but your polite obstructor knows very well that the city last night suffered no more than the gentle snow that continues to fall in the morning.  Nor would the smallfolk turn a blind eye to the collapse by mischance of the house that venerated their beloved ancestors and served as home for a kindly priest - and yet they avoid the scene, finding excuses to take other streets.</p><p>You are not a woman given to leaving well enough alone.</p>",
        currentActionText: true,
        currentActionHTML: " <p>Sakuya, your character for this tutorial, is a Heroic Mortal.  She doesn't have any supernatural powers, but by dint of talent, skill and sheer stubbornness is capable of amazing deeds.  You can think of her as something of a cross between Miyamoto Musashi and Sherlock Holmes.</p><p>That makes it relatively easy for her to make some preliminary deductions on the situation at the shrine just from what she can see from outside.</p><p>In Exalted, we roll dice to determine how well a character performs on a task.  We use 10 sided dice, with the number rolled depending on your character's talent, skill and other advantages.</p>",
        actions: new Array()
    }

    segmentObjectSakuya0.actions.push({

        id: "segment0action0",
        type: "button",
        value: "Click here to highlight Sakuya's relevant traits",
        functionKey: FUNCTION_KEY_SAKUYA_SECTION_0_FUNCTION_0

    });

    createSakuya();

    processSegmentObject(segmentObjectSakuya0);


});