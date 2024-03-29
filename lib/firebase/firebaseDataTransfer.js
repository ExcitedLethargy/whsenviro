/*Functions to handle Firebase data transfer, such as getting and setting data.*/
//Import
const { setDoc } = require('firebase/firestore/lite');
const firebase = require('firebase/firestore/lite');
const {globalVariables} = require('../master/globalVariables.js');
//Get data
async function getFirebaseData(pDocPath = 0) {
    console.log("Querying Firebase data.");
    if (!pDocPath) { //If document not found, throw error
        console.log("Error: no data entered to firebaseGet function.");
        throw Error("No data entry in firebaseGet function.");
        return;
    }
    else {
        try {
            //Read data from specificed location
            const vDocRef = firebase.doc(globalVariables.gFirestoreDB, pDocPath);
            const vDocSnapshot = await firebase.getDoc(vDocRef);
            const vDocData = vDocSnapshot.data();
            return vDocData;
        } catch(err) {
            console.log("Error detected with identifying Firebase DB document:\n" + err);
        }
    }
}

//Write function to Google Firestore (note: this function overwrites rather than adds)
async function writeToFirebase(pDocPath = 0, pOverwriteArray = 0) {
    if (!pDocPath || !pOverwriteArray) {
        throw Error("Error: Function has received insufficient arguments.");
        return;
    } 
    else {
        try {
            const vDocRef = firebase.doc(globalVariables.gFirestoreDB, pDocPath);
            await setDoc(vDocRef, pOverwriteArray);
        } catch(err) {
            console.log("Error detected with writing data to Firebase:\n" + err);
        }
    }
}

module.exports = {
    getFirebaseData: getFirebaseData,
    writeToFirebase: writeToFirebase
}