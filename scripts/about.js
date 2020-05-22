window.onload = update;

/**
 * Checks if the user has met the easter egg requirements.
 * If yes then trigger easter egg.
 * Either yes or no, reset the trackers.
 */
function update() {
    firebase.auth().onAuthStateChanged(function(user) {
        db.collection("users")
            .doc(user.uid)
            .get()
            .then(function (snap) {
                if (snap.data()["key1"] == true
                 && snap.data()["key2"] == true
                 && snap.data()["key3"] == true) {
                    easterEgg();
                }
                db.collection("users")
                    .doc(user.uid)
                    .update({
                        key1: false,
                        key2: false,
                        key3: false
                    })
                    .then(function () {
                        console.log("easter egg counter reset");
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            })
    })
}

/**
 * Play the Easter egg audio.
 */
function playAudio() {
    let audio = new Audio("./audio/egg.mp3");
    audio.play();
}

/**
 * Get a random x coordinate for an egg to move to.
 * @returns String
 */
function getXLocation() {
    return Math.random() * (document.body.scrollWidth - 100) + "px";
}
/**
 * Get a random y coordinate for an egg to move to.
 * @returns String
 */
function getYLocation() {
    return Math.random() * (document.body.scrollHeight - 100) + "px";
}

/**
 * Trigger easter egg if conditions were met.
 */
function easterEgg() {
    console.log("CONGRATULATIONS!");
    document.body.style.backgroundImage = "url('./images/confetti.gif')";
    document.getElementById("groupName").onclick = playAudio;
    createEgg();
    createEgg();
    createEgg();
}

/**
 * Class to create eggs from.
 */
function egg() {
    this.egg = document.createElement("img");
    this.egg.src = "./images/egg.png";
    this.egg.style.width = "100px";
    this.egg.style.height = "100px";
    this.egg.style.position = "absolute";
    this.egg.onmousedown = createEgg;
    this.egg.style.left = getXLocation();
    this.egg.style.top = getYLocation();
    document.body.appendChild(this.egg);

    this.move = function () {
        this.egg.style.left = getXLocation();
        this.egg.style.top = getYLocation();
    }
}

/**
 * Starts an interval timer for a given egg to continue to move.
 * @param {Object} egg 
 */
function startMoving(egg) {
    setInterval(function () {
        egg.move();
    }, 3000);
}

/**
 * Creates an egg and starts it moving.
 */
function createEgg() {
    startMoving(new egg);
}