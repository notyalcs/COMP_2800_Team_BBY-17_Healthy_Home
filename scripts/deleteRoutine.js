//deletes the routine on click
function deleteRoutine(button){
    let anchorText = $("#" + button.id).text();
    $("#" + button.id).remove();
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            //finds the matching routine name to the one selected for deletion and deletes it from the db
            db.collection("users").doc(user.uid).collection("Saved Routines").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    if(anchorText == doc.data()['routineName']){
                        console.log("doc id: " + doc.id);
                        db.collection("users").doc(user.uid).collection("Saved Routines").doc(doc.id).delete();
                    }
                });
            });
        }
    });
}