let x = localStorage.getItem('clickedAnchor');
var i;

$("section").text(x);

firebase.auth().onAuthStateChanged(function (user) {
    i = 0;
    if (user) {
        db.collection("users").doc(user.uid).collection("Custom Routines").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log("Database: " + doc.data()['Name']);
                console.log("X: " + x);
                if(doc.data()['Name'] == x){
                    $("#description").append("<p>" + doc.data()['Description'] + "</p>");
                    return;
                }
                i++;
            });
        });
    }
});
