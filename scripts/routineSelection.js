var difficultySelected = false;
var workout = false;
let stretch = "";
var workoutType = "";
var difficulty = "";
$(".difficulty").show();
// Check if the user selected stretching or exercise in local memory
if (localStorage.getItem('stretch').includes('Stretching')) {
    $(".difficulty").hide();
    difficultySelected = true;
}

if (localStorage.getItem('stretch').includes('Custom')) {
    window.location.href = "customRoutine.html";
}

/**
 * Get's the first word.
 * @param {String} str 
 */
function getFirstWord(str) {
    let spaceIndex = str.indexOf(' ');
    return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
};

/**
 * Open the next page based on what is clicked and store in local memory.
 */
function start() {
    localStorage.setItem('workoutType', getFirstWord(workoutType));
    localStorage.setItem('difficulty', difficulty);
    window.location.href = "exercise.html";
    console.log("Started");
}

/**
 * Enables the start button after options are filled in.
 */
function check() {
    if (difficultySelected === true && workout === true) {
        $("#startButton").prop("disabled", false);
    }
}


// Set the onclick for given buttons
$(".difficulty").on("click", function () {
    $(".difficulty").prop("disabled", false);
    $(this).prop("disabled", true);
    difficultySelected = true;
    difficulty = $(this).text();
    check();
});

// Set the onclick for given buttons
$(".workout").on("click", function () {
    $(".workout").prop("disabled", false);
    $(this).prop("disabled", true);
    workout = true;
    workoutType = $(this).text();
    check();
});
