var difficultySelected = false;
var workout = false;
let stretch = "";
var workoutType = "";
var difficulty = "";
$(".difficulty").show();
if(localStorage.getItem('stretch').includes('Stretching')){
    $(".difficulty").hide();
    difficultySelected = true;
}

if(localStorage.getItem('stretch').includes('Custom')){
    window.location.href="customRoutine.html";
}

function getFirstWord(str) {
    let spaceIndex = str.indexOf(' ');
    return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
};

function start(){
    localStorage.setItem('workoutType', getFirstWord(workoutType));
    localStorage.setItem('difficulty', difficulty);
    window.location.href="exercise.html";
    console.log("Started");
}

function check(){
    if(difficultySelected === true && workout === true){
        $("#startButton").prop("disabled", false);
    }
}

$(".difficulty").on("click", function(){
    $(".difficulty").prop("disabled", false);
    $(this).prop("disabled", true);
    difficultySelected = true;
    difficulty=$(this).text();
    check();
});

$(".workout").on("click", function(){
    $(".workout").prop("disabled", false);
    $(this).prop("disabled", true);
    workout = true;
    workoutType=$(this).text();
    check();
});
