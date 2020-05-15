function deleteRoutine(button){
    let anchorText = $("#" + button.id).text();
    $("#" + button.id).remove();
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
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