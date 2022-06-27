/*JS file to control interactive sidenav bar to navigate between files.*/

function openSidenav() {
    $("#eSidenav").animate({
        width: "100%"
    }, 500);
}

function closeSidenav () {
    $("#eSidenav").animate({
        width: '0'
    }, 500);
}