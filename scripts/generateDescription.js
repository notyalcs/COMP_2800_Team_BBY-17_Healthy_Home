let x = localStorage.getItem('clickedAnchor');
var i;

$("section").text(x);

firebase.auth().onAuthStateChanged(function (user) {
    i = 0;
    if (user) {
        db.collection("users").doc(user.uid).collection("Custom Routines").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log("Database: " + doc.data()['Name']);
                console.log("X: " + x);
                if(doc.data()['Name'] == x){
                    $("#description").append("<p>" + doc.data()['Description'] + "</p>");
                    return;
                }
                i++;
            });
        });
    }
});
db.collection("Exercise_Routines").doc("Full_Easy").onSnapshot(function (doc) {
if(x == doc.data().Abdominal_Crunches[0]){
    $("#description").append("<p>" + doc.data().Abdominal_Crunches[1] + "</p>");
}if(x == doc.data().Inchworms[0]){
    $("#description").append("<p>" + doc.data().Inchworms[1] + "</p>");
}if(x == doc.data().Inclined_Push_Ups[0]){
    $("#description").append("<p>" + doc.data().Inclined_Push_Ups[1] + "</p>");
}if(x == doc.data().Jumping_Jacks[0]){
    $("#description").append("<p>" + doc.data().Jumping_Jacks[1] + "</p>");
}
});
db.collection("Exercise_Routines").doc("Upper_Easy").onSnapshot(function (doc) {
    if(x == doc.data().Heel_Touch[0]){
        $("#description").append("<p>" + doc.data().Heel_Touch[1] + "</p>");
    }if(x == doc.data().Mountain_Climber[0]){
        $("#description").append("<p>" + doc.data().Mountain_Climber[1] + "</p>");
    }if(x == doc.data().Plank[0]){
        $("#description").append("<p>" + doc.data().Plank[1] + "</p>");
    }
});
db.collection("Exercise_Routines").doc("Lower_Easy").onSnapshot(function (doc) {
    if(x == doc.data().Backward_Lunges[0]){
        $("#description").append("<p>" + doc.data().Backward_Lunges[1] + "</p>");
    }if(x == doc.data().Donkey_Kicks[0]){
        $("#description").append("<p>" + doc.data().Donkey_Kicks[1] + "</p>");
    }if(x == doc.data().Quad_Stretch[0]){
        $("#description").append("<p>" + doc.data().Quad_Stretch[1] + "</p>");
    }if(x == doc.data().Side_Lying_Leg_Lift[0]){
        $("#description").append("<p>" + doc.data().Side_Lying_Leg_Lift[1] + "</p>");
    }
});
db.collection("Stretching_Routine").doc("Lower").onSnapshot(function (doc) {
    if(x == doc.data().Adductor_Stretch_In_Standing[0]){
        $("#description").append("<p>" + doc.data().Adductor_Stretch_In_Standing[1] + "</p>");
    }if(x == doc.data().Lying_Butterfly_Stretch[0]){
        $("#description").append("<p>" + doc.data().Lying_Butterfly_Stretch[1] + "</p>");
    }if(x == doc.data().Single_Leg_Hip_Rotation[0]){
        $("#description").append("<p>" + doc.data().Single_Leg_Hip_Rotation[1] + "</p>");
    }if(x == doc.data().Sitting_Hamstring_Stretch[0]){
        $("#description").append("<p>" + doc.data().Sitting_Hamstring_Stretch[1] + "</p>");
    }
});
db.collection("Stretching_Routine").doc("Full").onSnapshot(function (doc) {
    if(x == doc.data().Chest_Stretch[0]){
        $("#description").append("<p>" + doc.data().Chest_Stretch[1] + "</p>");
    }if(x == doc.data().Spine_Lumbar_Twist_Stretch[0]){
        $("#description").append("<p>" + doc.data().Spine_Lumbar_Twist_Stretch[1] + "</p>");
    }if(x == doc.data().Triceps_Stretch[0]){
        $("#description").append("<p>" + doc.data().Triceps_Stretch[1] + "</p>");
    }
});
db.collection("Stretching_Routine").doc("Upper").onSnapshot(function (doc) {
    if(x == doc.data().Downward_Facing_Dog[0]){
        $("#description").append("<p>" + doc.data().Downward_Facing_Dog[1] + "</p>");
    }if(x == doc.data().Overhead_Arm_Clockwise_Circles[0]){
        $("#description").append("<p>" + doc.data().Overhead_Arm_Clockwise_Circles[1] + "</p>");
    }if(x == doc.data().Overhead_Arm_Counterclockwise_Circles[0]){
        $("#description").append("<p>" + doc.data().Overhead_Arm_Counterclockwise_Circles[1] + "</p>");
    }if(x == doc.data().Standing_Side_Bend[0]){
        $("#description").append("<p>" + doc.data().Standing_Side_Bend[1] + "</p>");
    }
});