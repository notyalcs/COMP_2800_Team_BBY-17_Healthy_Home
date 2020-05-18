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
                $('#items').append('<input type="text" class="items" value="' + buttonArr[i] + '"></input>')
            }
        })
})

$('#update').on('click', function() {
    let itemArr = [];
    let itemList = document.getElementsByClassName('items')
    for (let i = 0; i < itemList.length; i++) {
        itemArr.push(itemList[i].value)
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

$('#newItem').on('click', function() {
    $('#items').append('<input class="items" type="text"></form>')
});

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value * 5;
}