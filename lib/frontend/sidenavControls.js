/*JS file to control interactive sidenav bar to navigate between files.*/


function openSidenav() {
    $("#eSidenav").css('width', '250px');
    $("body").css('backgroundColor', 'rgba(0,0,0,0.4');
}

function closeSidenav() {
    $("#eSidenav").css('width', '0px');
    $("body").css('backgroundColor', 'white');
}