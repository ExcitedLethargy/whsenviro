//Response to page initialisation; jQuery loads all 'extra' HTML elements.
function loadPageElements() {
    $('#eSidenav').load("/public/html/elements/sidenav.html");
    console.log("Page elements loaded.");
}

loadPageElements();