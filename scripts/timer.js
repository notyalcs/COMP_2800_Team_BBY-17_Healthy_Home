let alert = document.getElementById("ding");
$("#btn1").click(function() {
    document.getElementById("btn1").disabled = true;
    console.log("clicked 1");
    setTimeout(function() {
        alert.play();
        window.alert(document.getElementById("rem1").textContent);
        document.getElementById("btn1").disabled = false;
    }, 1000)
})

$("#btn2").click(function() {
    document.getElementById("btn2").disabled = true;
    console.log("clicked 2");
    setTimeout(function() {
        alert.play();
        window.alert(document.getElementById("rem2").textContent);
        document.getElementById("btn1").disabled = false;
    }, 2000)
})

$("#btn3").click(function() {

    document.getElementById("btn2").disabled = true;
    console.log("clicked 3");
    setTimeout(function() {
        alert.play();
        window.alert(document.getElementById("rem3").textContent);
        document.getElementById("btn1").disabled = false;
    }, 3000)
})

$("#btn4").click(function() {

    document.getElementById("btn2").disabled = true;
    console.log("clicked 4");
    setTimeout(function() {
        alert.play();
        window.alert(document.getElementById("rem4").textContent);
        document.getElementById("btn1").disabled = false;
    }, 4000)
})

window.onload = update;

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