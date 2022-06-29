/*JS file to control interactive sidenav bar to navigate between files.*/

var vSidenavStatus = "closed";

function toggleSidenav() {
    if (vSidenavStatus == "closed") {
        $("#eSidenav").css('width', '250px');
        $("body").css('backgroundColor', 'rgba(0,0,0,0.4)')
        $("#eSidenavOpener").css({'left': '200px', 'width': '100%', 'opacity': '0'});
        vSidenavStatus = "open";
    }
    else if (vSidenavStatus == "open") {
        $("#eSidenav").css('width', '0');
        $("body").css('backgroundColor', 'white');
        $("#eSidenavOpener").css({'left': '0', 'width': '3%', 'opacity': '0.5'});
        vSidenavStatus = "closed";
    }
}