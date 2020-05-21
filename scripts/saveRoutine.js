//Called whenever a save button is clicked
function save(saveButton){
    //Store the button id
    let index = saveButton.id;
    //Store the name of the routine
    let name = "";

    //If we are saving a routine that is not a custom routine...
    if(!localStorage.getItem('stretch').includes("Custom")){
    //Store the document data in an array
    firebase.auth().onAuthStateChanged(function(user){
        let i = 1;
        for (var key in exercises) {
            if (exercises.hasOwnProperty(key)) {
                if(i == index){
                    name = exercises[key][0];
                }
                i++;
            }
        }
    //1 if the routine is not already saved, 0 if it is. 
    let boo = 1;
    //Add saved routines to the user's database
    firebase.auth().onAuthStateChanged(function (user) {        
        if (user) {
            //Checks if the user already has this routine saved. If the user has it saved, it will not save the routine. 
            db.collection("users").doc(user.uid).collection("Saved Routines").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    console.log("Routine Name: " + doc.data()['routineName'] + "\nName: " + name);
                    if(doc.data()['routineName'] == name){
                        boo = 0;
                        console.log("boo was set to 0");
                    }
                });
                //If the user did not save the routine, it will save into their database. 
                if(boo == 1){
                    console.log("BOO: " + boo);
                    db.collection("users").doc(user.uid).collection("Saved Routines").add({routineName:name}).then(function() {
                        $(saveButton).after($("<p>Routine saved!</p>"));
                        $(saveButton).prop("disabled", true);
                    }).catch(function(error){
                        console.log("there was an error");
                    });
                }
            });
        }
    });
    
});}
//If we are trying to save a custom routine...
    else{
        //1 if the routine is not already saved, 0 if it is. 
        let boo = 1;
        //Add saved routines to the user's database
        firebase.auth().onAuthStateChanged(function (user) {        
            if (user) {
                //Checks if the user already has this routine saved. If the user has it saved, it will not save the routine. 
                db.collection("users").doc(user.uid).collection("Saved Routines").get().then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        if(doc.data()['routineName'] == $("#name" + index).text()){
                            boo = 0;
                        }
                    });
                    //If the user did not save the routine, it will save into their database. 
                    if(boo == 1){
                        firebase.auth().onAuthStateChanged(function(user){
                            db.collection("users").doc(user.uid).collection("Saved Routines").add({routineName:$("#name" + index).text()}).then(function() {
                                $(saveButton).after($("<p>Routine saved!</p>"));
                                $(saveButton).prop("disabled", true);
                            }).catch(function(error){
                                console.log("there was an error");
                            });
                        });
                    }
                });
            }
        });
    }
}
