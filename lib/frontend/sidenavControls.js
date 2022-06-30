/*JS file to control interactive sidenav bar to navigate between files.*/

var vSidenavStatus = "closed";

function toggleSidenav() {
    if (vSidenavStatus == "closed") {
        $("#eSidenav").css('width', '250px');
        $("body").css('backgroundColor', 'rgba(0,0,0,0.4)');
        $("#eSidenav :link").css('opacity', '1');
        $("#eSidenavOpener").css({'left': '200px', 'width': '100%', 'opacity': '0'});
        $("body").css('marginLeft', '250px');
        vSidenavStatus = "open";
    }
    else if (vSidenavStatus == "open") {
        $("#eSidenav").css('width', '0');
        $("body").css('backgroundColor', 'white');
        $("#eSidenav :link").css('opacity', '0');
        $("#eSidenavOpener").css({'left': '0', 'width': '1%', 'opacity': '0.5'});
        $("body").css('marginLeft', '0');
        vSidenavStatus = "closed";
    }
}