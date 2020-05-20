let buttonArr = [];
var docID = sessionStorage.getItem('docID')
var slider = document.getElementById("myRange");
var output = document.getElementById("minutes");

console.log(docID);
/*Dynamically load timer information from db*/
firebase.auth().onAuthStateChanged(function (user) {
    db.collection("users")
        .doc(user.uid)
        .collection("Reminders")
        .doc(docID)
        .get()
        .then(function (doc) {
            buttonArr = doc.data()['Items'];
            var duration = doc.data()['Duration'];
            var name = doc.data()['Name'];
            console.log(buttonArr);


            $('#name').val(name);
            $('#minutes').html(duration)
            for (let i = 0; i < buttonArr.length; i++) {
                console.log(i);
                $('#items').append('<input type="text" class="items ' + i + '" value="' + buttonArr[i] + '"></input><input type="button" class="' + i + '" id = "' + i + '" value="delete"></input>');
                
                
                $("#" + i).on('click', function() {
                    console.log(i);
                    $("." + i).remove();
                })
            }
        })
})

$('#update').on('click', function() {
    let itemArr = [];
    let itemList = document.getElementsByClassName('items')
    for (let j = 0; j < itemList.length; j++) {
        itemArr.push(itemList[j].value)
    }
    console.log(itemArr);
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users")
            .doc(user.uid)
            .collection("Reminders")
            .doc(docID)
            .update({
                Name: $('#name').val(),
                Items: itemArr,
                Duration: document.getElementById('minutes').innerHTML
            }).then(function() {
    window.location.href = 'userReminders.html';
            })
})})
var a = 'a'
$('#newItem').on('click', function() {
    let newID = a;
    $('#items').append('<input type="text" class="items ' + newID + '"></input><input type="button" class="' + newID + '" id = "' + newID + '" value="delete"></input>');
    $("#" + newID).on('click', function() {
        console.log(newID);
        $("." + newID).remove();
    })
    a += 'a';
});

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value * 5;
}