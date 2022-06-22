/*This file is to initialise a connection between the frontend HTML page and the backend Google 
Firebase database.*/
//Module imports
console.log("Initialising Firebase database connection.");
import {initializeApp} from "../../../node_modules/@firebase";
//Credentials and config
const firebaseConfig = {
    apiKey: "AIzaSyAF68tmeFM02nedAX56kVF8yu2iKqlkFtA",
    authDomain: "whsenviro-95720.firebaseapp.com",
    projectId: "whsenviro-95720",
    storageBucket: "whsenviro-95720.appspot.com",
    messagingSenderId: "325293482483",
    appId: "1:325293482483:web:35a4c0c992bee279adf286",
    measurementId: "G-J6C3MCB0S8"
};
console.log("Config complete. Initialising Firebase...")
const vApp = initializeApp(firebaseConfig);
const vDB = getFirestore(vApp);
