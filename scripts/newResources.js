$(document).ready(function () {
    //Display Posture
    $('#postureButton').on('click', function () {
        let x = document.getElementsByClassName('info');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        document.getElementById('postureInfo').style.display = 'block';
    });
    //Display Hydration
    $('#hydrationButton').on('click', function () {
        let x = document.getElementsByClassName('info');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        document.getElementById('hydrationInfo').style.display = 'block';
    });
    //Display Sleep
    $('#sleepButton').on('click', function () {
        let x = document.getElementsByClassName('info');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        document.getElementById('sleepInfo').style.display = 'block';
    });
    //Display Stretching
    $('#stretchingButton').on('click', function () {
        let x = document.getElementsByClassName('info');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        document.getElementById('stretchingInfo').style.display = 'block';
    });
    //Display Meditation
    $('#meditationButton').on('click', function () {
        let x = document.getElementsByClassName('info');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        document.getElementById('meditationInfo').style.display = 'block';
    });

    //Display Exercise
    $('#exerciseButton').on('click', function () {
        let x = document.getElementsByClassName('info');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        document.getElementById('exerciseInfo').style.display = 'block';
    });
    //Reidrect to Cardio Page
    $('#cardioButton').on('click', function() {
        window.location.href = 'cardio.html';
    })
});

