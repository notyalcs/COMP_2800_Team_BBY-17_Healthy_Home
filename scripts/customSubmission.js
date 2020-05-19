function createRoutine(rout){
    firebase.auth().onAuthStateChanged(function(user){
        db.collection("users").doc(user.uid).collection("Custom Routines").add(rout).then(function() {
            window.location.href="routines.html";
        }).catch(function(error){
            console.log("there was an error");
        });
    });
}
function handleSubmit() {
    var name = document.getElementById('name').value;
    var description = document.getElementById('description').value;
    var sets = document.getElementById('sets').value;
    var reps = document.getElementById('reps').value;
    var value = parseInt(document.getElementById('routineNumber').value);

    var rout = {
        Name: name,
        Description: description,    
        Sets: sets,
        Reps: reps,
        Value: value,
    };

    if (name !== '') {
        createRoutine(rout);
    }
}