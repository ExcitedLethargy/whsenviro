/*Functions to handle Firebase data transfer, such as getting and setting data.*/
//Import
import {collection, getDocs, doc, getDoc} from 'firebase/firestore/lite';
import {globalVariables} from '../master/globalVariables.js';
//Get data
export function getFirebaseData(pCollectionID = 0, pDocID = 0) {
    console.log("Querying Firebase data.")
    let vDatabase = globalVariables.gFirestoreDB;
    if (!pCollectionID && !pDocID) {
        console.log("Error: no data entered to firebaseGet function.");
        throw Error("No data entry in firebaseGet function.")
        return;
    }
    else if (pCollectionID !== 0 && pDocID !== 0) {
        try {
            let vDocSnapshot = 0;
            const vDocRef = Promise.resolve(doc(vDatabase, 'test', 'test2'))
            .then(vDocSnapshot =  Promise.resolve(getDoc(vDocRef))
            .then(console.log("Ok")));
            if (vDocSnapshot.exists) {
                const vDoc = vDocSnapshot.data;
                console.log("Document info: " + vDoc);
            } else {
                console.log("Error: selected document does not exist.");
            }
        } catch(err) {
            console.log("Error detected with identifying Firebase DB collection:\n" + err);
        }
    }
}

module.exports.getFirebaseData = getFirebaseData;