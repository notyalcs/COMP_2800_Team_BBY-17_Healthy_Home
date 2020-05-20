function save(saveButton){
    let index = saveButton.id;
    let name = "";

    if(!localStorage.getItem('stretch').includes("Custom")){
    firebase.auth().onAuthStateChanged(function(user){
        let i = 1;
        for (var key in exercises) {
            if (exercises.hasOwnProperty(key)) {
                if(i == index){
                    name = exercises[key][0];
                }
                i++;
            }
        }
    let boo = 1;
    firebase.auth().onAuthStateChanged(function (user) {        
        if (user) {
            db.collection("users").doc(user.uid).collection("Saved Routines").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    console.log("Routine Name: " + doc.data()['routineName'] + "\nName: " + name);
                    if(doc.data()['routineName'] == name){
                        boo = 0;
                        console.log("boo was set to 0");
                    }
                });
                if(boo == 1){
                    console.log("BOO: " + boo);
                    db.collection("users").doc(user.uid).collection("Saved Routines").add({routineName:name}).then(function() {
                        $(saveButton).after($("<p>Routine saved!</p>"));
                        $(saveButton).prop("disabled", true);
                    }).catch(function(error){
                        console.log("there was an error");
                    });
                }
            });
        }
    });
    
});}
    else{
        let boo = 1;
        firebase.auth().onAuthStateChanged(function (user) {        
            if (user) {
                db.collection("users").doc(user.uid).collection("Saved Routines").get().then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        if(doc.data()['routineName'] == $("#name" + index).text()){
                            boo = 0;
                        }
                    });
                    if(boo == 1){
                        firebase.auth().onAuthStateChanged(function(user){
                            db.collection("users").doc(user.uid).collection("Saved Routines").add({routineName:$("#name" + index).text()}).then(function() {
                                $(saveButton).after($("<p>Routine saved!</p>"));
                                $(saveButton).prop("disabled", true);
                            }).catch(function(error){
                                console.log("there was an error");
                            });
                        });
                    }
                });
            }
        });
    }
}
