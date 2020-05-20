var savedRoutines = [];
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
    }
});
function gettext(obj){
    localStorage.setItem('clickedAnchor', $(obj).text());
}
function addList(recordArray) {
    recordArray = recordArray.sort(function(a, b) {
        var dateA = new Date(a.release), dateB = new Date(b.release);
        return dateA - dateB;
    });
    for (i = recordArray.length; i > 0; i--) {
        $("#routineList ul").append("<li id=" + i + "><a onclick='gettext(this)' href='description.html'>" + recordArray[i - 1]['routineName'] + "</a><button id='" + i + "'class='fa fa-trash' onclick='deleteRoutine(this)'></button></li>");
    }
}
