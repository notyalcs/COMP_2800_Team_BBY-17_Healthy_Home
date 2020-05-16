function createRoutine(rout){
    firebase.auth().onAuthStateChanged(function(user){
        //add the log object to the user's collection of logs.
        db.collection("users").doc(user.uid).collection("Custom Routines").add(rout).then(function() {
            window.location.href="routines.html";
        }).catch(function(error){
            console.log("there was an error");
        });
    });
}
function handleSubmit() {
    
    //gather up the data fields
    var name = document.getElementById('name').value;
    var description = document.getElementById('description').value;
    var sets = document.getElementById('sets').value;
    var reps = document.getElementById('reps').value;

    var rout = {
        Name: name,
        Description: description,    
        Sets: sets,
        Reps: reps,
    };

    if (name !== '' && sets !== 0 && reps !== 0) {
        createRoutine(rout);
    }
}