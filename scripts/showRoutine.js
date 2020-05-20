var object;
var recordArray = [];
var exercises;
$(document).ready(function () {
    var routine = localStorage.getItem('workoutType') + "_" + localStorage.getItem('difficulty');
    db.collection("Exercise_Routines")
        .doc(routine)
        .get()
        .then(function (doc) {
            exercises = doc.data();
            object = exercises;
            console.log(exercises);
            let i = 1;
            for (var key in exercises) {
                if (exercises.hasOwnProperty(key)) {
                    console.log(key + " -> " + exercises[key][0]);
                    $('#name' + i).html(exercises[key][0]);
                    $('#sets' + i).html(exercises[key][2] + ' x ' + exercises[key][3]);
                    if(exercises[key][0] == 'Inchworms'){
                        $('#desc' + i).prepend(exercises[key][1] + "<br/><br/><br/><br/><br/><p style='text-align:center;'>No image available</p><br/><br/><br/><br/><br/>");
                    }else{
                        $('#desc' + i).prepend(exercises[key][1] + "<img class='routinePicture' src=./images/" + exercises[key][4] + ">");
                    }
                    i++;
                }
            }

        })
    $('#b1').on('click', function () {
        document.getElementById('desc1').style.display = document.getElementById('desc1').style.display === 'none' ? '' : 'none';
        if(document.getElementById('desc1').style.display == 'none'){
            $(this).val('Expand');
        }else{
            $(this).val('Collapse');
        }
    });
    $('#b2').on('click', function () {
        document.getElementById('desc2').style.display = document.getElementById('desc2').style.display === 'none' ? '' : 'none';
        if(document.getElementById('desc2').style.display == 'none'){
            $(this).val('Expand');
        }else{
            $(this).val('Collapse');
        }
    });
    $('#b3').on('click', function () {
        document.getElementById('desc3').style.display = document.getElementById('desc3').style.display === 'none' ? '' : 'none';
        if(document.getElementById('desc3').style.display == 'none'){
            $(this).val('Expand');
        }else{
            $(this).val('Collapse');
        }
    });
    $('#b4').on('click', function () {
        document.getElementById('desc4').style.display = document.getElementById('desc4').style.display === 'none' ? '' : 'none';
        if(document.getElementById('desc4').style.display == 'none'){
            $(this).val('Expand');
        }else{
            $(this).val('Collapse');
        }
    });

});

