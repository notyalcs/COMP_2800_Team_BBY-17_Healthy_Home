function getTextArea(){
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("Notes").add({
            Description: $("textarea").val(),
            Timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(function () {
            window.location.href = "profile.html";
        });
    });
}

function generateList(){
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users")
            .doc(user.uid)
            .collection("Notes")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    $("#notes").append("<p>" + doc.data()['Description'] + "</p>");
                    console.log(doc.data()['Timestamp'].toDate());
                });
            });       
});}
function getEvent() {
    db.collection("users")
     .doc(user.uid)
     .collection("Notes")
     .orderBy("Timestamp")
     .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                noteList.push(doc.id)
            })
        })
        
}
generateList();