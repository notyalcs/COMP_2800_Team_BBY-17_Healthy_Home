var crutches = $('<p>' +
'Stand with your feet shoulder-width apart and turn your toes out slightly,\” says Heap. \“Put your arms out in front of you and engage your abdominals while broadening your chest and gently pulling your shoulder blades together.' +
'\“Bend your knees slowly while pushing your hips and glutes out behind you as if you are about to sit down. Lower until your knees and hips are parallel, then push back up through your heels to the start position.' +
'</p>');
let exercises = ['<img src="images/squats.jpg" alt="squats" class="routinePicture">' + 
'<p>' +
'Stand with your feet shoulder-width apart and turn your toes out slightly,\” says Heap. \“Put your arms out in front of you and engage your abdominals while broadening your chest and gently pulling your shoulder blades together.' +
'\“Bend your knees slowly while pushing your hips and glutes out behind you as if you are about to sit down. Lower until your knees and hips are parallel, then push back up through your heels to the start position.' +
'</p>', "Pushups", "Squats"];
let stretches = ["Stretch 1", "Stretch 2","Stretch 3"];

function display(id){
    if(window.location.href.indexOf("exercise") > -1){
        document.getElementById("displayRoutines").innerHTML=exercises[id];
        $("#displayRoutines").innerHTML(exercises[id]);
    }else if(window.location.href.indexOf("stretch") > -1){
        document.getElementById("displayRoutines").innerHTML=stretches[id];
    }
}

$(".arrow").on("click", function(){ 
    $(".arrow").removeClass("down right").addClass("right");
    $(this).removeClass("right").addClass("down");
    display($(this).attr('id'));                 
});
