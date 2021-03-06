/*This is the index.js JavaScript file, the first (and main) JavaScript file that will be called
from the index.html page.*/
console.log("Initialising JavaScript...");

//Package Imports
console.log("Beginning package imports...");
console.log("Package imports complete.");

//Module Imports
console.log("Beginning JavaScript file imports...");
import {firebaseInit} from './lib/firebase/firebaseInit.js';
console.log("File imports complete.");

//Init
console.log("Running init scripts.");
firebaseInit();