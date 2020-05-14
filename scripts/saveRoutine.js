function save(){
    if(!localStorage.getItem('stretch').includes("Custom")){
    firebase.auth().onAuthStateChanged(function(user){
    db.collection("users").doc(user.uid).collection("Saved Routines").add({routineName:object[index][0]}).then(function() {
        $("#saveRoutine").after($("<p>Routine saved!</p>"));
        $("#saveRoutine").prop("disabled", true);
    }).catch(function(error){
        console.log("there was an error");
    });
});}
    else{
        firebase.auth().onAuthStateChanged(function(user){
            db.collection("users").doc(user.uid).collection("Saved Routines").add({routineName:recordArray[index]['Name']}).then(function() {
                $("#saveRoutine").after($("<p>Routine saved!</p>"));
                $("#saveRoutine").prop("disabled", true);
            }).catch(function(error){
                console.log("there was an error");
            });
        });
    }
}
