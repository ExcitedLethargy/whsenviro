/*This is the index.js JavaScript file, the first (and main) JavaScript file that will be called
from the index.html page.*/
console.log("Initialising JavaScript...");

//Package Imports
console.log("Beginning package imports...");
console.log("Package imports complete.");

//Module Imports
console.log("Beginning JavaScript file imports...");
const {firebaseInit} = require('./lib/firebase/firebaseInit');
const {postgresInit} = require('./lib/postgres/postgresInit');
const {getFirebaseData} = require('./lib/firebase/firebaseDataTransfer')
console.log("File imports complete.");

//Init
function initProgram() {
    console.log("Running init scripts.");
    firebaseInit();
    postgresInit();
    let testData = getFirebaseData('test/MathsUC');
    console.log(testData);
}

try {
    initProgram();

} catch(e) {
    console.log("Error detected:" + e);
};