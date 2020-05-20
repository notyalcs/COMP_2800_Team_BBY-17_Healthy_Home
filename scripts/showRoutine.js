var object;
var recordArray = [];
var exercises;
$(document).ready(function () {

    document.getElementById('desc1').style.display = 'none';
    document.getElementById('desc2').style.display = 'none';
    document.getElementById('desc3').style.display = 'none';
    document.getElementById('desc4').style.display = 'none';
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
    document.getElementById('img4').style.display = 'none';



    if (localStorage.getItem('stretch').includes('Stretching')) {
        var routine = localStorage.getItem('workoutType');
        $("header + section").text("Stretching Routines");
        db.collection("Stretching_Routine")
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
                        $('#desc' + i).html(exercises[key][1]);
                        document.getElementById('img' + i).setAttribute('src', './images/' + exercises[key][4]);
                        i++;
                    }
                }

            })
    } else if(localStorage.getItem('stretch').includes('Exercise')){
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
                        $('#desc' + i).html(exercises[key][1]);
                        document.getElementById('img' + i).setAttribute('src', './images/' + exercises[key][4]);
                        i++;
                    }
                }

            })
    }

    $('#b1').on('click', function () {
        document.getElementById('desc1').style.display = document.getElementById('desc1').style.display === 'none' ? '' : 'none';
        document.getElementById('img1').style.display = document.getElementById('img1').style.display === 'none' ? '' : 'none';
        if(document.getElementById('desc1').style.display == 'none'){
            $(this).val('Expand');
        }else{
            $(this).val('Collapse');
        }
    });
    $('#b2').on('click', function () {
        document.getElementById('desc2').style.display = document.getElementById('desc2').style.display === 'none' ? '' : 'none';
        document.getElementById('img2').style.display = document.getElementById('img2').style.display === 'none' ? '' : 'none';
        if(document.getElementById('desc2').style.display == 'none'){
            $(this).val('Expand');
        }else{
            $(this).val('Collapse');
        }
    });
    $('#b3').on('click', function () {
        document.getElementById('desc3').style.display = document.getElementById('desc3').style.display === 'none' ? '' : 'none';
        document.getElementById('img3').style.display = document.getElementById('img3').style.display === 'none' ? '' : 'none';
        if(document.getElementById('desc3').style.display == 'none'){
            $(this).val('Expand');
        }else{
            $(this).val('Collapse');
        }
    });
    $('#b4').on('click', function () {
        document.getElementById('desc4').style.display = document.getElementById('desc4').style.display === 'none' ? '' : 'none';
        document.getElementById('img4').style.display = document.getElementById('img4').style.display === 'none' ? '' : 'none';
        if(document.getElementById('desc4').style.display == 'none'){
            $(this).val('Expand');
        }else{
            $(this).val('Collapse');
        }
    });
});

