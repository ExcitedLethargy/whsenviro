/*Functions to handle Firebase data transfer, such as getting and setting data.*/
//Import
import {collection, getDocs} from 'firebase/firestore/lite';
import { ExplainVerbosity } from 'mongodb';
import {globalVariables} from '../master/globalVariables.js';
//Get data
export function firebaseGet(pCollection = 0, pRecord = 0) {
    let vDatabase = globalVariables.gFirestoreDB;
    if (pCollection === 0  && pRecord === 0) {
        console.log("Error: no data entered to firebaseGet function.");
        throw Error("No data entry in firebaseGet function.")
        return;
    }
    else if (pCollection !== 0 && pRecord !== 0) {
        try {
            
        }
    }
    else if (pCollection !== 0) {
        try {
            const vSelectedCollection = collection(vDatabase, pCollection);
            const vSelectedCollectionSnapshot = await getDocs(vSelectedCollection);
            
        } catch(err) {
            console.log("Error detected with identifying Firebase DB collection:/\n/" + err);
        }
    }
}