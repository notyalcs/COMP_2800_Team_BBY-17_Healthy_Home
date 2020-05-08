window.onload = test;

function test() {
    firebase.auth().onAuthStateChanged(function(user) {
        db.collection("users")
            .doc(user.uid)
            .get()
            .then(function (snap) {
                console.log(snap.data());
            });
    });
}

function logout() {
    firebase.auth().signOut().then(function () {
        console.log("sign out succesful");
        window.open("./index.html", "_self");
    }).catch(function(error) {
        console.log(error);
    })
}