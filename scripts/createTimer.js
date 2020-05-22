//variable declarations
var itemArr = [];
var timerLen;
var input = document.getElementById("tasks");
var slider = document.getElementById("myRange");
var output = document.getElementById("minutes");
var mobileSlider = document.getElementById("mobileRange");
var mobileOutput = document.getElementById("mobileMinutes");

$(document).ready(function () {
    //Adds items to the list on screen and itemArr when the "add to list" button is clicked.
    $("#addItem").click(function () {
        itemArr.push($("#tasks").val());
        $('#taskList').append("<li>" + $("#tasks").val() + "</li>")
        $('#tasks').val("");
    });

});

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value * 5;
}

// Update the current slider value (each time you drag the slider handle)
mobileSlider.oninput = function () {
    mobileOutput.innerHTML = this.value * 5;
    timerLen = this.value * 5;
}

// Presses the add item button when enter is pressed on the input form
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addItem").click();
    }
});

//gets user ID and data
firebase.auth().onAuthStateChanged(function (user) {
    console.log(user.uid);
    db.collection("users")
        .doc(user.uid)
        .get()
        .then(function (snap) {
            console.log(snap.data());
        })
});

/*creates the reminder in the db and redirects the user to the reminders 
page when the submit button is pressed*/
function createReminder() {
    $("#submit").click(function () {
        var name = $("#name").val();
        var time;
        if (window.screen.availWidth > 450) {
            time = Number(output.innerHTML);
        } else {
            time = Number(mobileOutput.innerHTML);
        }
        console.log(name);
        console.log(time);
        console.log(itemArr);

        // Adds values to the collection
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("users").doc(user.uid).collection("Reminders").add({
                Name: name,
                Duration: time,
                Items: itemArr
            }).then(function () {
                $('#name').val("");
                window.location.href = "reminders.html";
            })

        })
    })
}

createReminder();