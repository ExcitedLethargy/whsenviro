/*Google Firebase global variables*/

function setGlobal(vVar, vValue) {
    vVar=vValue;
}

var gFirebaseConfig = null;
var gFirebaseApp = null;
var gFirestoreDB = null;

module.exports = {
    setGlobal,
    gFirebaseConfig,
    gFirebaseApp,
    gFirestoreDB
};