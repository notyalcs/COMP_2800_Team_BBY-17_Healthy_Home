function getTextArea(){
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("Notes").add({
            Description: $("textarea").val(),
            Timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(function () {
            window.location.href = "notes.html";
        });
    });
}

let noteList = [];
function getNotes() {
    firebase.auth().onAuthStateChanged(function (user) {
    db.collection("users")
     .doc(user.uid)
     .collection("Notes")
     .orderBy("Timestamp")
     .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                $("#notes").prepend("<h3>" + doc.data()['Timestamp'].toDate().toDateString() + "</h3><p>" + doc.data()['Description'] + "</p>");
                console.log();
            })
        })})
        
}

// function generateList(){
//     console.log('hi')
//     firebase.auth().onAuthStateChanged(function (user) {
//         for (let i = noteList.length - 1; i > noteList.length; i--) {
//         db.collection("users")
//             .doc(user.uid)
//             .collection("Notes")
//             .doc('' + noteList[i])
//             .get()
//             .then(function (doc) {
//                 console.log('hi')
//                     $("#notes").append("<p>" + doc.data()['Description'] + "</p>");
//                     console.log(doc.data()['Timestamp'].toDate());
//                 });
//             }       
// })}

getNotes()
// generateList();