//Firebase Configuration
var firebaseConfig = {
    apiKey: "AIzaSyAOEb8EEpYJQ-B61phZG2AfnTpyZsNJz1o",
    authDomain: "healthyhome-6ae2f.firebaseapp.com",
    databaseURL: "https://healthyhome-6ae2f.firebaseio.com",
    projectId: "healthyhome-6ae2f",
    storageBucket: "healthyhome-6ae2f.appspot.com",
    messagingSenderId: "183401473393",
    appId: "1:183401473393:web:dc96d4f6fee0241592c2d0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var docRef = db.collection("users");
