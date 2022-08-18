/*Functions to handle Firebase data transfer, such as getting and setting data.*/
//Import
const firebase = require('firebase/firestore/lite');
const {globalVariables} = require('../master/globalVariables.js');
//Get data
async function getFirebaseData(pDocPath = 0) {
    console.log("Querying Firebase data.")
    if (!pDocPath) {
        console.log("Error: no data entered to firebaseGet function.");
        throw Error("No data entry in firebaseGet function.");
        return;
    }
    else {
        try {
            const vDocRef = firebase.doc(globalVariables.gFirestoreDB, '/test/MathsUC');
            const vDocSnapshot = await firebase.getDoc(vDocRef);
            return vDocSnapshot.data();
        } catch(err) {
            console.log("Error detected with identifying Firebase DB document:\n" + err);
        }
    }
}

module.exports = {
    getFirebaseData: getFirebaseData
}