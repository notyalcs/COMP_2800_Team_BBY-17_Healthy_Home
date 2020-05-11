firebase.auth().onAuthStateChanged(function (user) {
    var recordArray = [];
    console.log("this is the user", user.uid);

    if (user) {
        db.collection("users").doc(user.uid).collection("Saved Routines").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {

                var record = {
                    routineName: doc.data()['routineName'],
                };
                recordArray.push(record); 
            });
            addList(recordArray);
        });
    } else {
        console.log("This code should be unreachable. The funny thing is I feel like someone will see this message one day. I'm sorry. -S");
    }
});
function addList(recordArray) {
    recordArray = recordArray.sort(function(a, b) {
        var dateA = new Date(a.release), dateB = new Date(b.release);
        return dateA - dateB;
    });
    console.log(recordArray[0]['routineName']);
    for (i = recordArray.length; i > 0; i--) {
        $("#routineList ul").append("<li>" + recordArray[i - 1]['routineName'] + "</li>");
    }
}
