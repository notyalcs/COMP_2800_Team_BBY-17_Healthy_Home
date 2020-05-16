let alert = document.getElementById("ding");
$("#btn1").click(function () {
    document.getElementById("btn1").disabled = true;
    console.log("clicked 1");
    setTimeout(function () {
        alert.play();
        window.alert(document.getElementById("rem1").textContent);
        document.getElementById("btn1").disabled = false;
    }, 1000)
})

$("#btn2").click(function () {
    document.getElementById("btn2").disabled = true;
    console.log("clicked 2");
    setTimeout(function () {
        alert.play();
        window.alert(document.getElementById("rem2").textContent);
        document.getElementById("btn1").disabled = false;
    }, 2000)
})

$("#btn3").click(function () {

    document.getElementById("btn2").disabled = true;
    console.log("clicked 3");
    setTimeout(function () {
        alert.play();
        window.alert(document.getElementById("rem3").textContent);
        document.getElementById("btn1").disabled = false;
    }, 3000)
})

$("#btn4").click(function () {

    document.getElementById("btn2").disabled = true;
    console.log("clicked 4");
    setTimeout(function () {
        alert.play();
        window.alert(document.getElementById("rem4").textContent);
        document.getElementById("btn1").disabled = false;
    }, 4000)
})

window.onload = update;

let buttonArr = [];
let counter = true;
firebase.auth().onAuthStateChanged(function (user) {
    db.collection("users")
        .doc(user.uid)
        .collection("Reminders")
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                var buttonArr = doc.data()['Items'];
                var duration = doc.data()['Duration'];
                var name = doc.data()['Name'];
                var itemString = '';
                for(let i=0; i < buttonArr.length; i++){
                    itemString += buttonArr[i] + '\n';
                }

                console.log(doc.id);
                $('#customTimer').append('<button class="btn customButton" id="' + doc.id + '">' + name + '</button><script></script>')
                $("#" + doc.id).click(function () {
                    // document.getElementById("btn2").disabled = true;
                    console.log("clicked " + name);
                    setTimeout(function () {
                        alert.play();
                        window.alert(itemString);
                        // document.getElementById("btn1").disabled = false;
                    }, duration /* * 60000*/)});







                // if (counter == true) {
                //     console.log(buttonArr);
                //     $('#customTimer').append('<div class="custom1"><div class="timer"><button class="btn">' + duration + ' minutes</button></div><div class="desc2 desc"><p>Reminders:</p><ul id="rem2">')
                //     for (let i = 0; i < buttonArr.length; i++) {
                //         $('#customTimer').append('<li>' + buttonArr[i] + '</li>')
                //     }
                //     $('#customTimer').append('</ul></div></div>')
                //     counter = false;
                // } else {
                //     console.log(buttonArr);
                //     $('#customTimer').append('<div class="custom2"><div class="timer"><button class="btn">' + duration + ' minutes</button></div><div class="desc2 desc"><p>Reminders:</p><ul id="rem2">')
                //     for (let i = 0; i < buttonArr.length; i++) {
                //         $('#customTimer').append('<li>' + buttonArr[i] + '</li>')
                //     }
                //     $('#customTimer').append('</ul></div></div>')
                //     counter = true;
                // }
            });

        })
});

// $("#JUprjOuK3OFLSz7hdjcB").click(function () {
//     // document.getElementById("btn2").disabled = true;
//     console.log("clicked 4");
//     setTimeout(function () {
//         alert.play();
//         window.alert(document.getElementById("rem4").textContent);
//         // document.getElementById("btn1").disabled = false;
//     }, 4000)});


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
