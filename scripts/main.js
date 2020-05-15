window.onload = update;

// function keyPressed() {
//     document.getElementById("key").style.display = "none";
//     firebase.auth().onAuthStateChanged(function(user) {
//         db.collection("users")
//             .doc(user.uid)
//             .update({
//                 key1: true
//             })
//             .then(function () {
//                 console.log("key 1 found");
//             })
//     })
// }

function update() {
    firebase.auth().onAuthStateChanged(function(user) {
        db.collection("users")
            .doc(user.uid)
            .get()
            .then(function (snap) {
                $("#welcome").html("Welcome<br>" + snap.data()["name"]);
            })        
    })
    // setTimeout(function () {
    //     console.log("key created");
    //     let key = document.createElement("img");
    //     key.src = "./images/key.png";
    //     key.id = "key";
    //     key.style.width = "35px";
    //     key.style.height = "70px";
    //     key.style.position = "absolute";
    //     key.onmousedown = keyPressed;
    //     key.style.left = Math.random() * (document.getElementById("allContent").scrollWidth - 35) + "px";
    //     key.style.top = Math.random() * (document.getElementById("allContent").scrollHeight - 70) + "px";
    //     document.body.appendChild(key);
    // }, 5000);
}
