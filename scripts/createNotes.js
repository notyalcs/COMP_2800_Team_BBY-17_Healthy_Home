//Submits text area to the database
function getTextArea(){
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("Notes").add({
            Description: $("textarea").val(),
            Timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(function () {
            //reloads on submission
            location.reload(true);
        });
    });
}

//Gets notes from the DB, orders them by date entered, and adds them to the document
function getNotes() {
    firebase.auth().onAuthStateChanged(function (user) {
    db.collection("users")
     .doc(user.uid)
     .collection("Notes")
     .orderBy("Timestamp")
     .get()
        .then(function (snap) {
            //prepends items to the note page (items are returned in reverse)
            snap.forEach(function (doc) {
                $("#notes").prepend("<h3>" + doc.data()['Timestamp'].toDate().toDateString() + "</h3><p>" + doc.data()['Description'] + "</p>");
                console.log();
            })
        })})
        
}

getNotes()
