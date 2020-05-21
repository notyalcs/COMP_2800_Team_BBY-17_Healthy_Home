//Store the text inside the clicked anchor
let x = localStorage.getItem('clickedAnchor');
//Set the title section to the name of the clicked anchor
$("section").text(x);

//if the name of the routine includes the word 'Custom', it will generate all the routines 
if(x.includes("Custom")){
    //Get the number of the routine, Custom Routine '1', or Custom Routine '2', to determine which exercise to fill in with that value.
    let newID = x.substring(15, x.length);

    //Append divs to the body that contain the exercises in the routine.
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            db.collection("users").doc(user.uid).collection("Custom Routines").get().then(function(querySnapshot){
                querySnapshot.forEach(function(doc){
                    //If the value of the document is the same as the custom routine number, its information is appended to the body. 
                    if(doc.data()['Value'] == newID){
                        $("body").append("<div class='description'><h3><b>" + doc.data()['Name'] + "</b></h3><p>" + doc.data()['Description'] + "</p></div>");
                    }
                });
            });
        }
    });
}
//Stores the exercise routine document names
let routineList = ["Full_Easy", "Upper_Easy", "Lower_Easy"];
//Stores the stretch routine document names
let routineTwoList = ["Full", "Upper", "Lower"];
//Document data is stored in this array so we can access specific information from it.
var newerList;
//Used for loop
let i = 0;
//Loop through all the exercise routines. If the name of the clicked anchor is the same as the document routine name, it is appended to the description
for(i = 0; i < routineList.length; i++){
    db.collection("Exercise_Routines").doc(routineList[i]).get().then(function(doc){
        newerList = doc.data();
        for(var key in newerList){
            if (newerList.hasOwnProperty(key)) {
                if(x == newerList[key][0]){
                    //Prevents duplicates. Some routines have the same exercises and we can't have two descriptions and images that are the same. 
                    if($("body").children().length <= 3){
                        $("body").append("<div class='description'><p>" + newerList[key][1] + "</p></div><figure><img class='routinePicture' src=./images/" + newerList[key][4] + "></figure>");
                    }
                }
            }
        }
    }); 
}
i = 0;
//Loop through all the stretch routines. If the name of the clicked anchor is the same as the document routine name, it is appended to the description
for(i = 0; i < routineTwoList.length; i++){
    db.collection("Stretching_Routine").doc(routineTwoList[i]).get().then(function(doc){
        newerList = doc.data();
        for(var key in newerList){
            if (newerList.hasOwnProperty(key)) {
                if(x == newerList[key][0]){
                    //Prevents duplicates. Some routines have the same exercises and we can't have two descriptions and images that are the same. 
                    if($("body").children().length <= 3){
                        $("body").append("<div class='description'><p>" + newerList[key][1] + "</p></div><figure><img class='routinePicture' src=./images/" + newerList[key][4] + "></figure>");                      
                    }
                }
            }
        }
    }); 
}
