let x = localStorage.getItem('clickedAnchor');
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
let routineList = ["Full_Easy", "Upper_Easy", "Lower_Easy"];
let routineTwoList = ["Full", "Upper", "Lower"];
var newerList;
let i = 0;
for(i = 0; i < routineList.length; i++){
    db.collection("Exercise_Routines").doc(routineList[i]).get().then(function(doc){
        newerList = doc.data();
        let j = 0;
        for(var key in newerList){
            if (newerList.hasOwnProperty(key)) {
                if(x == newerList[key][0]){
                    if(x != "Inchworms"){
                        if($("body").children().length <= 3){
                            $("body").append("<div class='description'><p>" + newerList[key][1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + newerList[key][4] + "></figure></center>");
                        }
                    }else{
                        if($("body").children().length <= 3){
                            $("body").append("<div class='description'><p>" + newerList[key][1] + "</p></div>");
                        }
                    }
                }
            }
        }
    }); 
}
i = 0;
for(i = 0; i < routineTwoList.length; i++){
    db.collection("Stretching_Routine").doc(routineTwoList[i]).get().then(function(doc){
        newerList = doc.data();
        let j = 0;
        for(var key in newerList){
            if (newerList.hasOwnProperty(key)) {
                if(x == newerList[key][0]){
                    if(x != "Spine Lumbar Twist Stretch"){
                        if($("body").children().length <= 3){
                            $("body").append("<div class='description'><p>" + newerList[key][1] + "</p></div><center><figure><img class='routinePicture' src=./images/" + newerList[key][4] + "></figure></center>");                      
                        }
                    }else{
                        if($("body").children().length <= 3){
                            $("body").append("<div class='description'><p>" + newerList[key][1] + "</p></div>"); 
                        }
                    }
                }
            }
        }
    }); 
}
