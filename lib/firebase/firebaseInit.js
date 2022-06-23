/*This file is to initialise a connection between the frontend HTML page and the backend Google 
Firebase database.*/
//Module imports
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';
import {gFirebaseConfig, gFirebaseApp, gFirestoreDB} from '../master/globalVariables.js';

//Function to initialise Firebase
export function firebaseInit() {
    console.log("Initialising Firebase database connection.");
    gFirebaseApp = initializeApp(gFirebaseConfig);
    gFirestoreDB = getFirestore(gFirebaseApp);
    console.log("Firebase connection active.");
}