var recordArray = [];
function addList(recordArray){
    var size;
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("Custom Routines").get().then(snap => {
        size = snap.size;
     });});
     if(size == 0){

     }else{
        for (i = 0; i < recordArray.length; i++) {
            $("#dropDowns").append("<li><button><p onclick='jjj(this)' id=" + i + " class='arrow right'></p></button></li>");
            $("#customRoutines").append("<li id=" + i + "x>" + recordArray[i]['Name'] + "</li>");
        }}
}
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        db.collection("users").doc(user.uid).collection("Custom Routines").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                var record = {
                    Description: doc.data()['Description'],
                    Name: doc.data()['Name'],
                    Reps: doc.data()['Reps'],
                    Sets: doc.data()['Sets'],
                };
                recordArray.push(record); 
            });
            addList(recordArray);
        });
    }
});