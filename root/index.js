/*This is the index.js JavaScript file, the first (and main) JavaScript file that will be called
from the index.html page.*/
console.log("Initialising JavaScript...");

//External Package Imports
console.log("Beginning package imports...");
const express = require('express');
const path = require('path');
console.log("Package imports complete.");

//Internal Module Imports
console.log("Beginning JavaScript file imports...");
const {firebaseInit} = require('./lib/firebase/firebaseInit');
const {postgresInit} = require('./lib/postgres/postgresInit');
console.log("File imports complete.");

//Node (Express) server init
console.log("Initialising Express server...");
const vApp = express();
const vRouter = express.Router();
const vServerPort = 5000;
//Allow other files to be accessed by the Express server
vApp.use(express.static(path.join(__dirname, 'public')));
console.log("Static directories set.");
//Route initial connection
vRouter.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
});
console.log("HTTP routing set.")
vApp.use('/', vRouter);
vApp.listen(vServerPort, () => {
    console.log(`Server live. Now listening on port ${vServerPort}`)
});

//Main program init sequence
async function initProgram() {
    console.log("Running program init scripts.");
    firebaseInit();
    postgresInit();
}

//Go
try {
    initProgram();

} catch(e) {
    console.log("Error detected:" + e);
};