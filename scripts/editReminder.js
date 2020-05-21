//variable declaration
let buttonArr = [];
let docID = sessionStorage.getItem('docID')
let slider = document.getElementById("myRange");
let output = document.getElementById("minutes");
//iterator for creating unique ids for the add timer function
var a = 'a'

/*Dynamically load timer information from db*/
firebase.auth().onAuthStateChanged(function (user) {
    db.collection("users")
        .doc(user.uid)
        .collection("Reminders")
        .doc(docID)
        .get()
        .then(function (doc) {
            //set reference values from the db
            buttonArr = doc.data()['Items'];
            var duration = doc.data()['Duration'];
            var name = doc.data()['Name'];
            console.log(buttonArr);
            //load the information into the page dynamically
            $('#name').val(name);
            $('#minutes').html(duration)
            for (let i = 0; i < buttonArr.length; i++) {
                console.log(i);
                //Add items into the page with the proper descriptions
                $('#items').append('<div class = "itemsDiv ' + i + '"><input type="text" class="items ' + i + '" value="' + buttonArr[i] + '"></input><input type="button" class="delete ' + i + '" id = "' + i + '" value="delete"></input></div>');
                //A function to delete the item from the db when the associated delete button is pressed
                $("#" + i).on('click', function () {
                    console.log(i);
                    $("." + i).remove();
                })
            }
        })
})

//updates/ adds/ deletes values in the database
$('#update').on('click', function () {
    //add all items for the timer into an array
    let itemArr = [];
    let itemList = document.getElementsByClassName('items')
    for (let j = 0; j < itemList.length; j++) {
        itemArr.push(itemList[j].value)
    }
    //adds the values to the user's custom timer of the associated id
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users")
            .doc(user.uid)
            .collection("Reminders")
            .doc(docID)
            .update({
                Name: $('#name').val(),
                Items: itemArr,
                Duration: document.getElementById('minutes').innerHTML
            }).then(function () {
                //redirects on submission to the user's reminder page
                window.location.href = 'userReminders.html';
            })
    })
})
//creates a new item with a blank default value
$('#newItem').on('click', function () {
    let newID = a;
    $('#items').append('<div class="itemsDiv ' + newID + '"><input type="text" class="items ' + newID + '"></input><input type="button" class=" delete ' + newID + '" id = "' + newID + '" value="delete"></input></div>');
    //delete button for item with associated class/ id
    $("#" + newID).on('click', function () {
        console.log(newID);
        $("." + newID).remove();
    })
    a += 'a';
});

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value * 5;
}