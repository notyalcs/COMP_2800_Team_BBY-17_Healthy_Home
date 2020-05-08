window.onload = update;

function update() {
    firebase.auth().onAuthStateChanged(function(user) {
        db.collection("users")
            .doc(user.uid)
            .get()
            .then(function (snap) {
                $("#contentTitle").text(snap.data()["name"]);
            });
    });
}