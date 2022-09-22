/*This file is to initialise a connection between the frontend HTML page and the backend Google 
Firebase database.*/
//Module imports
const firebase = require('firebase/app');
const firestore = require('firebase/firestore/lite');
const auth = require('firebase/auth');
const {globalVariables} = require('../master/globalVariables.js');
//Function to initialise Firebase
async function firebaseInit() {
    console.log("Initialising Firebase database connection.");
    globalVariables.gFirebaseConfig = {
        apiKey: "AIzaSyAF68tmeFM02nedAX56kVF8yu2iKqlkFtA",
    authDomain: "whsenviro-95720.firebaseapp.com",
    projectId: "whsenviro-95720",
    storageBucket: "whsenviro-95720.appspot.com",
    messagingSenderId: "325293482483",
    appId: "1:325293482483:web:35a4c0c992bee279adf286",
    measurementId: "G-J6C3MCB0S8"
    }
    globalVariables.gFirebaseApp = firebase.initializeApp(globalVariables.gFirebaseConfig)
    globalVariables.gFirestoreDB = firestore.getFirestore(globalVariables.gFirebaseApp);
    globalVariables.gFirebaseAuth = auth.getAuth(globalVariables.gFirebaseApp)
    console.log("Firebase connection active.");
};

module.exports = {
    firebaseInit: firebaseInit
}