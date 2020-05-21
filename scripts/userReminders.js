/*Dynamically load timer information from db*/
firebase.auth().onAuthStateChanged(function (user) {
    db.collection("users")
        .doc(user.uid)
        .collection("Reminders")
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let buttonArr = doc.data()['Items'];
                var duration = doc.data()['Duration'];
                var name = doc.data()['Name'];
                var itemString = '';
                var docID = doc.id;
                for (let i = 0; i < buttonArr.length; i++) {
                    itemString += buttonArr[i] + '\n';
                }

                /*Appends timers from db to the reminders*/
                $('#reminderList').append('<div class="col"><p class="name">Name: ' + name + '</p><p class="duration">Duration: ' + duration + '</p><button class="delete" id="delete' + doc.id + '">delete</button><button class="edit" id="' + doc.id + '">edit</button></div>')
                /*deletes timers from the db when the delete button is clicked*/
                $("#delete" + doc.id).click(function () {
                    firebase.auth().onAuthStateChanged(function (user) {
                        if (user) {
                            db.collection("users")
                                .doc(user.uid)
                                .collection("Reminders")
                                .get()
                                .then(function (querySnapshot) {
                                    querySnapshot.forEach(function (doc) {
                                        if (docID == doc.id) {
                                            console.log("doc id: " + doc.id);
                                            db.collection("users")
                                                .doc(user.uid)
                                                .collection("Reminders")
                                                .doc(doc.id).delete()
                                                .then(function () {
                                                    location.reload(true);
                                                });
                                        }
                                    });
                                });
                        }
                    });
                });

                //redirects the page when the edit button is pressed
                $('#' + doc.id).on('click', function () {
                    sessionStorage.setItem('docID', doc.id);
                    window.location.href = 'editReminder.html';
                });
            });
        });
});
