function save(saveButton){
    let index = saveButton.id;
    let name = "";
    if(!localStorage.getItem('stretch').includes("Custom")){
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
    db.collection("users").doc(user.uid).collection("Saved Routines").add({routineName:name}).then(function() {
        $(saveButton).after($("<p>Routine saved!</p>"));
        $(saveButton).prop("disabled", true);
    }).catch(function(error){
        console.log("there was an error");
    });
});}
    else{
        firebase.auth().onAuthStateChanged(function(user){
            db.collection("users").doc(user.uid).collection("Saved Routines").add({routineName:exercises[index]['Name']}).then(function() {
                $(".saveRoutine").after($("<p>Routine saved!</p>"));
                $(".saveRoutine").prop("disabled", true);
            }).catch(function(error){
                console.log("there was an error");
            });
        });
    }
}
