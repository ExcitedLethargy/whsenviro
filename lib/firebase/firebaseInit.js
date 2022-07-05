/*This file is to initialise a connection between the frontend HTML page and the backend Google 
Firebase database.*/
//Module imports
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';
import {gFirebaseGlobals} from '../master/firebaseGlobals.js';
//Function to initialise Firebase
export function firebaseInit() {
    console.log("Initialising Firebase database connection.");
    const vFirebaseConfig = {
        apiKey: "AIzaSyAF68tmeFM02nedAX56kVF8yu2iKqlkFtA",
        authDomain: "whsenviro-95720.firebaseapp.com",
        projectId: "whsenviro-95720",
        storageBucket: "whsenviro-95720.appspot.com",
        messagingSenderId: "325293482483",
        appId: "1:325293482483:web:35a4c0c992bee279adf286",
        measurementId: "G-J6C3MCB0S8"
    }
    const vApp = initializeApp(vFirebaseConfig);
    const vDB = getFirestore(vApp);
    console.log("Firebase connection active.");

    gFirebaseGlobals.firebaseConfig = vFirebaseConfig;
    gFirebaseGlobals.firebaseApp = vApp;
    gFirebaseGlobals.firestoreDB = vDB;
}