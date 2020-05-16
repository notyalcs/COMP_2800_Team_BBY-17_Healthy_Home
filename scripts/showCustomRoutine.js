var object;
var index;
    function display(id){
            /**$("#description").text(object[id][1]);
            $("#routinePicture").attr("src", object[id][4]);*/
            console.log(id);
            var recordArray = [];
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
                    });
                }
            }); 
            firebase.auth().onAuthStateChanged(function (user) {
         
            db.collection("users").doc(user.uid).collection("Custom Routines").onSnapshot(function(doc){
                $("#" + id + "x").after("<p id='sets'>" + recordArray[id]['Reps'] + " reps for " + recordArray[id]['Sets'] + " sets" + "</p>" + "<p id='desc'>" + recordArray[id]['Description'] + "</p>");
                index = id;
            });}); 

    }
    function jjj(obj){
        $(".arrow").removeClass("down right").addClass("right");
        $(obj).removeClass("right").addClass("down");
        $("#desc").remove();
        $("#sets").remove();
        display(obj.id);
        $("#saveRoutine").show();
    }
    $(".arrow").click(function(event){ 
        $(".arrow").removeClass("down right").addClass("right");
        event.target.removeClass("right").addClass("down");
        $("#desc").remove();
        $("#sets").remove();
        display(event.target.id);
        $("#saveRoutine").show();
    });              
