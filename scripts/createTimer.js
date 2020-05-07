let itemArr = [];

$(document).ready(function () {
    //Adds items to the list on screen and itemArr when the "add to list" button is clicked.
    $("#addItem").click(function () {
        itemArr.push($("#tasks").val());
        console.log(itemArr);
        $('#taskList').append("<li>" + $("#tasks").val() + "</li>")
        $('#tasks').val("");
    });

});
var slider = document.getElementById("myRange");
var output = document.getElementById("minutes");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value * 5;
}

var mobileSlider = document.getElementById("mobileRange");
var mobileOutput = document.getElementById("mobileMinutes");

// Update the current slider value (each time you drag the slider handle)
mobileSlider.oninput = function () {
    mobileOutput.innerHTML = this.value * 5;
}

var input = document.getElementById("tasks");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addItem").click();
    }
}); 