$(document).ready(function(){
    let routine = localStorage.getItem('workoutType') + "_" + localStorage.getItem('difficulty');
    if(!routine.includes("Easy") && !routine.includes("Intermediate") && !routine.includes("Advanced")){
        routine = localStorage.getItem('workoutType');
        $("section").text("Stretching Routines");
    }
    function display(id){
            $("#description").text(object[id][1]);
            $("#routinePicture").attr("src", object[id][4]);
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
        }if(routine == "Full_Intermediate"){
            $('#routines').append("<li>" + doc.data().Abdominal_Crunches[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Inchworms[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Inclined_Push_Ups[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Jumping_Jacks[0] + "</li>");
            object = [doc.data().Abdominal_Crunches, doc.data().Inchworms, doc.data().Inclined_Push_Ups, doc.data().Jumping_Jacks];
        }if(routine == "Upper_Intermediate"){
            $('#routines').append("<li>" + doc.data().Abdominal_Crunches[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Heel_Touch[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Mountain_Climber[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Plank[0] + "</li>");
            object = [doc.data().Abdominal_Crunches, doc.data().Heel_Touch, doc.data().Mountain_Climber, doc.data().Plank];
        }if(routine == "Lower_Intermediate"){
            $('#routines').append("<li>" + doc.data().Backward_Lunges[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Donkey_Kicks[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Quad_Stretch[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Side_Lying_Leg_Lift[0] + "</li>");
            object = [doc.data().Backward_Lunges, doc.data().Donkey_Kicks, doc.data().Quad_Stretch, doc.data().Side_Lying_Leg_Lift];
        }if(routine == "Full_Advanced"){
            $('#routines').append("<li>" + doc.data().Abdominal_Crunches[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Inchworms[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Inclined_Push_Ups[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Jumping_Jacks[0] + "</li>");
            object = [doc.data().Abdominal_Crunches, doc.data().Inchworms, doc.data().Inclined_Push_Ups, doc.data().Jumping_Jacks];
        }if(routine == "Upper_Advanced"){
            $('#routines').append("<li>" + doc.data().Abdominal_Crunches[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Heel_Touch[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Mountain_Climber[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Plank[0] + "</li>");
            object = [doc.data().Abdominal_Crunches, doc.data().Heel_Touch, doc.data().Mountain_Climber, doc.data().Plank];
        }if(routine == "Lower_Advanced"){
            $('#routines').append("<li>" + doc.data().Backward_Lunges[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Donkey_Kicks[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Quad_Stretch[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Side_Lying_Leg_Lift[0] + "</li>");
            object = [doc.data().Backward_Lunges, doc.data().Donkey_Kicks, doc.data().Quad_Stretch, doc.data().Side_Lying_Leg_Lift];
        }});
    db.collection("Stretching_Routine").doc(routine).onSnapshot(function (doc) {
        if(routine == "Lower"){
            $('#routines').append("<li>" + doc.data().Adductor_Stretch_In_Standing[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Lying_Butterfly_Stretch[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Single_Leg_Hip_Rotation[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Sitting_Hamstring_Stretch[0] + "</li>");
            object = [doc.data().Adductor_Stretch_In_Standing, doc.data().Lying_Butterfly_Stretch, doc.data().Single_Leg_Hip_Rotation, doc.data().Sitting_Hamstring_Stretch];
        }if(routine == "Upper"){
            $('#routines').append("<li>" + doc.data().Downward_Facing_Dog[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Overhead_Arm_Clockwise_Circles[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Overhead_Arm_Counterclockwise_Circles[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Standing_Side_Bend[0] + "</li>");
            object = [doc.data().Downward_Facing_Dog, doc.data().Overhead_Arm_Clockwise_Circles, doc.data().Overhead_Arm_Counterclockwise_Circles, doc.data().Standing_Side_Bend];
        }if(routine == "Full"){
            $('#routines').append("<li>" + doc.data().Chest_Stretch[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Spine_Lumbar_Twist_Stretch[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Standing_Side_Bend[0] + "</li>");
            $('#routines').append("<li>" + doc.data().Triceps_Stretch[0] + "</li>");
            object = [doc.data().Chest_Stretch, doc.data().Spine_Lumbar_Twist_Stretch, doc.data().Standing_Side_Bend, doc.data().Triceps_Stretch];
        }
    }); 
});
