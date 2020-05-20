var recordArray = [];
function addList(recordArray){
    var size;
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("Custom Routines").get().then(snap => {
        size = snap.size;
     });});
     if(size == 0){

     }else{
        let first = 0;
        let second = 0;
        let third = 0;
        let fourth = 0;
        for (i = 0; i < recordArray.length; i++) {
            if(recordArray[i]['Value'] == 1){
                first++;
                $("#desc1").prepend("<b>" + recordArray[i]['Name'] + " " + recordArray[i]['Sets'] + " x " + recordArray[i]['Reps'] + ": </b>" + recordArray[i]['Description'] + "<br/><br/>");
            }else if(recordArray[i]['Value'] == 2){
                second++;
                $("#desc2").prepend("<b>" + recordArray[i]['Name'] + " " + recordArray[i]['Sets'] + " x " + recordArray[i]['Reps'] + ": </b>" + recordArray[i]['Description'] + "<br/><br/>");
            }else if(recordArray[i]['Value'] == 3){
                third++;
                $("#desc3").prepend("<b>" + recordArray[i]['Name'] + " " + recordArray[i]['Sets'] + " x " + recordArray[i]['Reps'] + ": </b>" + recordArray[i]['Description'] + "<br/><br/>");
            }else if(recordArray[i]['Value'] == 4){
                fourth++;
                $("#desc4").prepend("<b>" + recordArray[i]['Name'] + " " + recordArray[i]['Sets'] + " x " + recordArray[i]['Reps'] + ": </b>" + recordArray[i]['Description'] + "<br/><br/>");
            }
        }}
        for(j = 1; j < 5; j++){
            console.log($("#desc" + j).text().length);
            if($("#desc" + j).text().length == 0){
                $("#" + j).remove();
            }
        }
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
                    Value: doc.data()['Value'],
                };
                recordArray.push(record); 
            });
            addList(recordArray);
        });
    }
});
document.getElementById('desc1').style.display = 'none';
document.getElementById('desc2').style.display = 'none';
document.getElementById('desc3').style.display = 'none';
document.getElementById('desc4').style.display = 'none';
