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
const {getFirebaseData, writeToFirebase} = require('./lib/firebase/firebaseDataTransfer');
console.log("File imports complete.");

//Init
async function initProgram() {
    console.log("Running init scripts.");
    firebaseInit();
    postgresInit();
    let testData = await getFirebaseData('test/MathsUC');
    testData.topic5 = 'differentialEquations';
    writeToFirebase('test/MathsUC', {changeCompleted: 'yes'});
}

try {
    initProgram();

} catch(e) {
    console.log("Error detected:" + e);
};