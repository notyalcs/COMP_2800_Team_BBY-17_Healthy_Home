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
            if(recordArray[i]['Value'] == 1){
                $("#sets1").append(recordArray[i]['Name'] + " " + recordArray[i]['Sets'] + " x " + recordArray[i]['Reps'] + "   |||   ");
                $("#desc1").prepend(recordArray[i]['Description'] + "<br/><br/>");
                $("#" + (i + 1)).after("<hr style='height:2px;border-width:0;color:gray;background-color:gray'>");
            }else if(recordArray[i]['Value'] == 2){
                $("#sets2").text(recordArray[i]['Name'] + " " + recordArray[i]['Sets'] + " x " + recordArray[i]['Reps'] + "   |||   ");
                $("#desc2").prepend(recordArray[i]['Description'] + "<br/><br/>");
                $("#" + i).after("<hr style='height:2px;border-width:0;color:gray;background-color:gray'>");
            }else if(recordArray[i]['Value'] == 3){
                $("#sets3").text(recordArray[i]['Name'] + " " + recordArray[i]['Sets'] + " x " + recordArray[i]['Reps'] + "   |||   ");
                $("#desc3").prepend(recordArray[i]['Description'] + "<br/><br/>");
                $("#" + i).after("<hr style='height:2px;border-width:0;color:gray;background-color:gray'>");
            }else if(recordArray[i]['Value'] == 4){
                $("#sets4").text(recordArray[i]['Name'] + " " + recordArray[i]['Sets'] + " x " + recordArray[i]['Reps'] + "   |||   ");
                $("#desc4").prepend(recordArray[i]['Description'] + "<br/><br/>");
                $("#" + i).after("<hr style='height:2px;border-width:0;color:gray;background-color:gray'>");
            }
        }}
        for(j = 1; j < 5; j++){
            if($("#desc" + j).text().length == 34){
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
