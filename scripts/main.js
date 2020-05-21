window.onload = update;

//greets the user by their name on entry to the site
function update() {
    firebase.auth().onAuthStateChanged(function(user) {
        db.collection("users")
            .doc(user.uid)
            .get()
            .then(function (snap) {
                $("#welcome").html("Welcome<br>" + snap.data()["name"]);
            })        
    })

}
