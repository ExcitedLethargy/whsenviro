/*This is a page for loading the HTML components in the 'Home' page of the WHSEnviro site.*/

//Modules
const {getFirebaseData} = require('../firebase/firebaseDataTransfer.js');

//Main function
async function loadHomePage() {
    const vPageData = await getFirebaseData(); 
}