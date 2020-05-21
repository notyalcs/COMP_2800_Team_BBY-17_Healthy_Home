$(document).ready(function () {
    //Display Posture on associated button press
    $('#postureButton').on('click', function () {
        let x = document.getElementsByClassName('info');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        document.getElementById('postureInfo').style.display = 'block';
    });
    //Display Hydration on associated button press
    $('#hydrationButton').on('click', function () {
        let x = document.getElementsByClassName('info');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        document.getElementById('hydrationInfo').style.display = 'block';
    });
    //Display Sleep on associated button press
    $('#sleepButton').on('click', function () {
        let x = document.getElementsByClassName('info');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        document.getElementById('sleepInfo').style.display = 'block';
    });
    //Display Stretching on associated button press
    $('#stretchingButton').on('click', function () {
        let x = document.getElementsByClassName('info');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        document.getElementById('stretchingInfo').style.display = 'block';
    });

    //Display Exercise on associated button press
    $('#exerciseButton').on('click', function () {
        let x = document.getElementsByClassName('info');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        document.getElementById('exerciseInfo').style.display = 'block';
    });
    //Reidrect to Cardio Page on associated button press
    $('#cardioButton').on('click', function() {
        window.location.href = 'cardio.html';
    })
});

