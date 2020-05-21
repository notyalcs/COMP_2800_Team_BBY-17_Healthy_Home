var savedRoutines = [];
//Go through all the saved routines in the user's database and add them to an array which is read from in addList to add to HTML
firebase.auth().onAuthStateChanged(function (user) {
    var recordArray = [];
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
    }
});
//After clicking an anchor, it stores its text into localStorage to determine what description to display.
function gettext(obj){
    localStorage.setItem('clickedAnchor', $(obj).text());
}
//Adds to HTML the different lists of items and a trash icon beside them.
function addList(recordArray) {
    recordArray = recordArray.sort(function(a, b) {
        var dateA = new Date(a.release), dateB = new Date(b.release);
        return dateA - dateB;
    });
    for (i = recordArray.length; i > 0; i--) {
        $("#routineList ul").append("<li id=" + i + "><a onclick='gettext(this)' href='description.html'>" + recordArray[i - 1]['routineName'] + "</a><button id='" + i + "'class='fa fa-trash' onclick='deleteRoutine(this)'></button></li>");
    }
}
