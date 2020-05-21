//variable declarations
let alert = document.getElementById("ding");
let buttonArr = [];

//makes the button disabled for the duration of the timer and sends an alert when completed (triggered onclick)
$("#btn1").click(function () {
    $('#btn1a').css('background-color','grey');

    document.getElementById("btn1a").disabled = true;
    console.log("clicked 1");
    setTimeout(function () {
        alert.play();
        $('#btn1a').css('background-color','');

        window.alert(document.getElementById("rem1").textContent);
        document.getElementById("btn1a").disabled = false;
    }, 1000)
})

//makes the button disabled for the duration of the timer and sends an alert when completed (triggered onclick)
$("#btn2").click(function () {
    $('#btn2a').css('background-color','grey');

    document.getElementById("btn2a").disabled = true;
    console.log("clicked 2");
    setTimeout(function () {
        alert.play();
        $('#btn2a').css('background-color','');

        window.alert(document.getElementById("rem2").textContent);
        document.getElementById("btn2a").disabled = false;
    }, 2000)
})

//makes the button disabled for the duration of the timer and sends an alert when completed (triggered onclick)
$("#btn3").click(function () {
    $('#btn3a').css('background-color','grey');

    document.getElementById("btn3a").disabled = true;
    console.log("clicked 3");
    setTimeout(function () {
        alert.play();
        $('#btn3a').css('background-color','');

        window.alert(document.getElementById("rem3").textContent);
        document.getElementById("btn3a").disabled = false;
    }, 3000)
})

//makes the button disabled for the duration of the timer and sends an alert when completed (triggered onclick)
$("#btn4").click(function () {
    $('#btn4a').css('background-color','grey');
    document.getElementById("btn4a").disabled = true;
    console.log("clicked 4");
    setTimeout(function () {
        alert.play();
        $('#btn4a').css('background-color','');
        window.alert(document.getElementById("rem4").textContent);
        document.getElementById("btn4a").disabled = false;
    }, 4000)
})

window.onload = update;

//Dynamically generates timers from the database
firebase.auth().onAuthStateChanged(function (user) {
    db.collection("users")
        .doc(user.uid)
        .collection("Reminders")
        .get()
        .then(function (querySnapshot) {
            //For each document in the db save values in variables 
            querySnapshot.forEach(function (doc) {
                var buttonArr = doc.data()['Items'];
                var duration = doc.data()['Duration'];
                var name = doc.data()['Name'];
                var itemString = '';
                for(let i=0; i < buttonArr.length; i++){
                    itemString += buttonArr[i] + '\n';
                }
                //add button to the document and create onclick functionality
                console.log(doc.id);
                $('#customTimer').append('<button class="btn customButton" id="' + doc.id + '">' + name + '</button><script></script>')
                $("#" + doc.id).click(function () {
                    $('#' + doc.id).css('background-color','grey');
                    document.getElementById(doc.id).disabled = true;
                    console.log("clicked " + name);
                    setTimeout(function () {
                        alert.play();
                        $('#' + doc.id).css('background-color','');
                        window.alert(itemString);
                        document.getElementById(doc.id).disabled = false;
                    }, duration  * 60000)});
            });

        })
});

//Button that logs the key press in the database (for the easter egg)
function keyPressed() {
    document.getElementById("key").style.display = "none";
    firebase.auth().onAuthStateChanged(function(user) {
        db.collection("users")
            .doc(user.uid)
            .update({
                key1: true
            })
            .then(function () {
                console.log("key 1 found");
            })
    })
}
//create the key for the easter egg if the user hasn't found that key already
function update() {
    firebase.auth().onAuthStateChanged(function(user) {
        db.collection("users")
            .doc(user.uid)
            .get()
            .then(function (snap) {
                if (!snap.data()["key1"]) {
                    setTimeout(function () {
                        console.log("key created");
                        let key = document.createElement("img");
                        key.src = "./images/key.png";
                        key.id = "key";
                        key.style.width = "35px";
                        key.style.height = "70px";
                        key.style.position = "absolute";
                        key.onmousedown = keyPressed;
                        key.style.left = Math.random() * (document.body.scrollWidth - 35) + "px";
                        key.style.top = Math.random() * (document.body.scrollHeight - 70) + "px";
                        document.body.appendChild(key);
                    }, 5000);
                } else {
                    console.log("key already found");
                }
            });
    });
}
