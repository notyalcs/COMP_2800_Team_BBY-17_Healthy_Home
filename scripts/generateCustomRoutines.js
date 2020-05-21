var recordArray = [];
//Adds the list of custom routines with their exercises to the HTML. 
function addList(recordArray){
    var size;
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).collection("Custom Routines").get().then(snap => {
        size = snap.size;
     });});
     if(size == 0){

     }else{
        //Adds information to each description div according to their values
        for (i = 0; i < recordArray.length; i++) {
            if(recordArray[i]['Value'] == 1){
                $("#desc1").prepend("<b>" + recordArray[i]['Name'] + " " + recordArray[i]['Sets'] + " x " + recordArray[i]['Reps'] + ": </b>" + recordArray[i]['Description'] + "<br/><br/>");
            }else if(recordArray[i]['Value'] == 2){
                $("#desc2").prepend("<b>" + recordArray[i]['Name'] + " " + recordArray[i]['Sets'] + " x " + recordArray[i]['Reps'] + ": </b>" + recordArray[i]['Description'] + "<br/><br/>");
            }else if(recordArray[i]['Value'] == 3){
                $("#desc3").prepend("<b>" + recordArray[i]['Name'] + " " + recordArray[i]['Sets'] + " x " + recordArray[i]['Reps'] + ": </b>" + recordArray[i]['Description'] + "<br/><br/>");
            }else if(recordArray[i]['Value'] == 4){
                $("#desc4").prepend("<b>" + recordArray[i]['Name'] + " " + recordArray[i]['Sets'] + " x " + recordArray[i]['Reps'] + ": </b>" + recordArray[i]['Description'] + "<br/><br/>");
            }
        }}
        //Does not add a save routine button if the routine is empty
        for(j = 1; j < 5; j++){
            console.log($("#desc" + j).text().length);
            if($("#desc" + j).text().length == 0){
                $("#" + j).remove();
            }
        }
}
//Goes through the user's custom routines and adds them to an array
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
//At the beginning, the descriptions cannot be seen. 
document.getElementById('desc1').style.display = 'none';
document.getElementById('desc2').style.display = 'none';
document.getElementById('desc3').style.display = 'none';
document.getElementById('desc4').style.display = 'none';
