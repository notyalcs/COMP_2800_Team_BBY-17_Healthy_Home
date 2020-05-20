let x = localStorage.getItem('clickedAnchor');
var i;

$("section").text(x);

if(x.includes("Custom")){
    let newID = x.substring(15, x.length);
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            db.collection("users").doc(user.uid).collection("Custom Routines").get().then(function(querySnapshot){
                querySnapshot.forEach(function(doc){
                    if(doc.data()['Value'] == newID){
                        $("body").append("<div class='description'><h3><b>" + doc.data()['Name'] + "</b></h3><p>" + doc.data()['Description'] + "</p></div>");
                    }
                });
            });
        }
    });
}

db.collection("Exercise_Routines").doc("Full_Easy").onSnapshot(function (doc) {
if(x == doc.data().Abdominal_Crunches[0]){
    $("body").append("<div class='description'><p>" + doc.data().Abdominal_Crunches[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Abdominal_Crunches[4] + "></figure></center>");
}if(x == doc.data().Inchworms[0]){
    $("body").append("<div class='description'><p>" + doc.data().Inchworms[1] + "</p>");
}if(x == doc.data().Inclined_Push_Ups[0]){
    $("body").append("<div class='description'><p>" + doc.data().Inclined_Push_Ups[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Inclined_Push_Ups[4] + "></figure></center>")
}if(x == doc.data().Jumping_Jacks[0]){
    $("body").append("<div class='description'><p>" + doc.data().Jumping_Jacks[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Jumping_Jacks[4] + "></figure></center>")
}
});
db.collection("Exercise_Routines").doc("Upper_Easy").onSnapshot(function (doc) {
    if(x == doc.data().Heel_Touch[0]){
        $("body").append("<div class='description'><p>" + doc.data().Heel_Touch[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Heel_Touch[4] + "></figure></center>")
    }if(x == doc.data().Mountain_Climber[0]){
        $("body").append("<div class='description'><p>" + doc.data().Mountain_Climber[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Mountain_Climber[4] + "></figure></center>")
    }if(x == doc.data().Plank[0]){
        $("body").append("<div class='description'><p>" + doc.data().Plank[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Plank[4] + "></figure></center>")
    }
});
db.collection("Exercise_Routines").doc("Lower_Easy").onSnapshot(function (doc) {
    if(x == doc.data().Backward_Lunges[0]){
        $("body").append("<div class='description'><p>" + doc.data().Backward_Lunges[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Backward_Lunges[4] + "></figure></center>")
    }if(x == doc.data().Donkey_Kicks[0]){
        $("body").append("<div class='description'><p>" + doc.data().Donkey_Kicks[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Donkey_Kicks[4] + "></figure></center>")
    }if(x == doc.data().Quad_Stretch[0]){
        $("body").append("<div class='description'><p>" + doc.data().Quad_Stretch[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Quad_Stretch[4] + "></figure></center>")
    }if(x == doc.data().Side_Lying_Leg_Lift[0]){
        $("body").append("<div class='description'><p>" + doc.data().Side_Lying_Leg_Lift[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Side_Lying_Leg_Lift[4] + "></figure></center>")
    }
});
db.collection("Stretching_Routine").doc("Lower").onSnapshot(function (doc) {
    if(x == doc.data().Adductor_Stretch_In_Standing[0]){
        $("body").append("<div class='description'><p>" + doc.data().Adductor_Stretch_In_Standing[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Adductor_Stretch_In_Standing[4] + "></figure></center>")
    }if(x == doc.data().Lying_Butterfly_Stretch[0]){
        $("body").append("<div class='description'><p>" + doc.data().Lying_Butterfly_Stretch[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Lying_Butterfly_Stretch[4] + "></figure></center>")
    }if(x == doc.data().Single_Leg_Hip_Rotation[0]){
        $("body").append("<div class='description'><p>" + doc.data().Single_Leg_Hip_Rotation[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Single_Leg_Hip_Rotation[4] + "></figure></center>")
    }if(x == doc.data().Sitting_Hamstring_Stretch[0]){
        $("body").append("<div class='description'><p>" + doc.data().Sitting_Hamstring_Stretch[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Sitting_Hamstring_Stretch[4] + "></figure></center>")
    }
});
db.collection("Stretching_Routine").doc("Full").onSnapshot(function (doc) {
    if(x == doc.data().Chest_Stretch[0]){
        $("body").append("<div class='description'><p>" + doc.data().Chest_Stretch[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Chest_Stretch[4] + "></figure></center>")
    }if(x == doc.data().Spine_Lumbar_Twist_Stretch[0]){
        $("body").append("<div class='description'><p>" + doc.data().Spine_Lumbar_Twist_Stretch[1] + "</p></div>")
    }if(x == doc.data().Triceps_Stretch[0]){
        $("body").append("<div class='description'><p>" + doc.data().Triceps_Stretch[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Triceps_Stretch[4] + "></figure></center>")
    }
});
db.collection("Stretching_Routine").doc("Upper").onSnapshot(function (doc) {
    if(x == doc.data().Downward_Facing_Dog[0]){
        $("body").append("<div class='description'><p>" + doc.data().Downward_Facing_Dog[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Downward_Facing_Dog[4] + "></figure></center>")
    }if(x == doc.data().Overhead_Arm_Clockwise_Circles[0]){
        $("body").append("<div class='description'><p>" + doc.data().Overhead_Arm_Clockwise_Circles[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Overhead_Arm_Clockwise_Circles[4] + "></figure></center>")
    }if(x == doc.data().Overhead_Arm_Counterclockwise_Circles[0]){
        $("body").append("<div class='description'><p>" + doc.data().Overhead_Arm_Counterclockwise_Circles[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Overhead_Arm_Counterclockwise_Circles[4] + "></figure></center>")
    }if(x == doc.data().Standing_Side_Bend[0]){
        $("body").append("<div class='description'><p>" + doc.data().Standing_Side_Bend[1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + doc.data().Standing_Side_Bend[4] + "></figure></center>")
    }
});