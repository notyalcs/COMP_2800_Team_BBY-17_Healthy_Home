let exercises = ['<img src="images/squats.jpg" alt="squats" class="routinePicture">' + 
'<p>' +
'1. Stand with your feet shoulder-width apart and turn your toes out slightly.<br> 2. Put your arms out in front of you and engage your' + 'abdominals while broadening your chest and gently pulling your shoulder blades together.<br>' + 
'3. Bend your knees slowly while pushing your hips and glutes out behind you as if you are about to sit down.<br> 4. Lower until your' + 'knees and hips are parallel, then push back up through your heels to the start position.' +
'</p>',
                 '<img src="images/pike-press-up.jpg" alt="pikePressUp" class="routinePicture">' + '<p>' + 
                 'This simple move is a particularly good glute-strengthener, but it also works your core, lower back and hips.<br><br> 1. ' + 'Start on all fours with your hands under your shoulders, and your knees and feet hip-width apart.<br> 2. Squeeze your ' + 'glutes and raise one leg behind you, keeping the knee bent at a 90° angle, until the sole of your foot faces the ' +  'ceiling, then bring it back down slowly.<br> 3. Make sure the rest of your body is completely still while you raise the leg' + '– letting your hips sag is a common mistake that reduces the move’s effectiveness.' + '</p>'
                 ,"Squats"];
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
