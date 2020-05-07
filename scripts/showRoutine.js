let routine = localStorage.getItem('workoutType') + "_" + localStorage.getItem('difficulty');

function display(id){
    if(window.location.href.indexOf("exercise") > -1){
        $("#description").text(object[id][1]);
        $("#routinePicture").attr("src", object[id][4]);
    }else if(window.location.href.indexOf("stretch") > -1){
        document.getElementById("displayRoutines").innerHTML=stretches[id];
    }
}

var object;
$(".arrow").on("click", function(){ 
    $(".arrow").removeClass("down right").addClass("right");
    $(this).removeClass("right").addClass("down");
    display($(this).attr('id'));
});              

db.collection("Exercise_Routines").doc(routine).onSnapshot(function (doc) {
    if(routine == "Full_Easy"){
        $('#routines').append("<li>" + doc.data().Abdominal_Crunches[0] + "</li>");
        $('#routines').append("<li>" + doc.data().Inchworms[0] + "</li>");
        $('#routines').append("<li>" + doc.data().Inclined_Push_Ups[0] + "</li>");
        $('#routines').append("<li>" + doc.data().Jumping_Jacks[0] + "</li>");
        object = [doc.data().Abdominal_Crunches, doc.data().Inchworms, doc.data().Inclined_Push_Ups, doc.data().Jumping_Jacks];
    }if(routine == "Upper_Easy"){
        $('#routines').append("<li>" + doc.data().Abdominal_Crunches[0] + "</li>");
        $('#routines').append("<li>" + doc.data().Heel_Touch[0] + "</li>");
        $('#routines').append("<li>" + doc.data().Mountain_Climber[0] + "</li>");
        $('#routines').append("<li>" + doc.data().Plank[0] + "</li>");
        object = [doc.data().Abdominal_Crunches, doc.data().Heel_Touch, doc.data().Mountain_Climber, doc.data().Plank];
    }if(routine == "Lower_Easy"){
        $('#routines').append("<li>" + doc.data().Backward_Lunges[0] + "</li>");
        $('#routines').append("<li>" + doc.data().Donkey_Kicks[0] + "</li>");
        $('#routines').append("<li>" + doc.data().Quad_Stretch[0] + "</li>");
        $('#routines').append("<li>" + doc.data().Side_Lying_Leg_Lift[0] + "</li>");
        object = [doc.data().Backward_Lunges, doc.data().Donkey_Kicks, doc.data().Quad_Stretch, doc.data().Side_Lying_Leg_Lift];
}});
