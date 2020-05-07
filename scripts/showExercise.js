let exercises = ["Crunches", "Pushups", "Squats"];
let stretches = ["Stretch 1", "Stretch 2","Stretch 3"];

function display(id){
    if(window.location.href.indexOf("exercise") > -1){
        $("#displayExercise").text(exercises[id]);
    }else if(window.location.href.indexOf("stretch") > -1){
        $("#displayExercise").text(stretches[id]);
    }
}

$(".arrow").on("click", function(){ 
    $(".arrow").removeClass("down right").addClass("right");
    $(this).removeClass("right").addClass("down");
    display($(this).attr('id'));                 
});