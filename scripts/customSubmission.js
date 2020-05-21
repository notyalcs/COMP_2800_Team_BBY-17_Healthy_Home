//adds custom routine to the database then redirects
function createRoutine(rout){
    firebase.auth().onAuthStateChanged(function(user){
        db.collection("users").doc(user.uid).collection("Custom Routines").add(rout).then(function() {
            //redirects on form submission
            window.location.href="customRoutine.html";
        //handles errors
        }).catch(function(error){
            console.log("there was an error");
        });
    });
}

//creates an object to add to the database ffrom form values, then submits it to the db
function handleSubmit() {
    var name = document.getElementById('name').value;
    var description = document.getElementById('description').value;
    var sets = document.getElementById('sets').value;
    var reps = document.getElementById('reps').value;
    var value = parseInt(document.getElementById('routineNumber').value);
    //object creation
    var rout = {
        Name: name,
        Description: description,    
        Sets: sets,
        Reps: reps,
        Value: value,
    };
    //helper function that submits to the database if the name exists
    if (name !== '') {
        createRoutine(rout);
    }
}