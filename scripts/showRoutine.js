var object;
var index;
var recordArray = [];
$(document).ready(function () {
    var routine = localStorage.getItem('workoutType') + "_" + localStorage.getItem('difficulty');
    db.collection("Exercise_Routines")
        .doc(routine)
        .get()
        .then(function (doc) {
            let exercises = doc.data();
            object = exercises;
            console.log(exercises);
            let i = 1;
            for (var key in exercises) {
                if (exercises.hasOwnProperty(key)) {
                    console.log(key + " -> " + exercises[key][0]);
                    $('#name' + i).html(exercises[key][0]);
                    $('#sets' + i).html(exercises[key][2] + ' x ' + exercises[key][3]);
                    $('#desc' + i).html(exercises[key][1]);
                    i++;
                }
            }

        })
    $('#b1').on('click', function () {
        document.getElementById('desc1').style.display = document.getElementById('desc1').style.display === 'none' ? '' : 'none';
        index = 0;
    });
    $('#b2').on('click', function () {
        document.getElementById('desc2').style.display = document.getElementById('desc2').style.display === 'none' ? '' : 'none';
        index = 1;
    });
    $('#b3').on('click', function () {
        document.getElementById('desc3').style.display = document.getElementById('desc3').style.display === 'none' ? '' : 'none';
        index = 3;
    });
    $('#b4').on('click', function () {
        document.getElementById('desc4').style.display = document.getElementById('desc4').style.display === 'none' ? '' : 'none';
        index = 4;
    });

});

