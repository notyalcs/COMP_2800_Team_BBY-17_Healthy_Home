window.onload = update;

function keyPressed() {
    document.getElementById("key").style.display = "none";
    firebase.auth().onAuthStateChanged(function(user) {
        db.collection("users")
            .doc(user.uid)
            .update({
                key3: true
            })
            .then(function () {
                console.log("key 3 found");
            })
    })
}

function update() {
    firebase.auth().onAuthStateChanged(function(user) {
        db.collection("users")
            .doc(user.uid)
            .get()
            .then(function (snap) {
                $("#contentTitle").text(snap.data()["name"]);
                if (!snap.data()["key3"]) {
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