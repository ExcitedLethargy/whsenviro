/*JS file to control interactive sidenav bar to navigate between files.*/

var vSidenavStatus = "closed";

function toggleSidenav() {
    if (vSidenavStatus == "closed") {
        $("#eSidenav").css('width', '20%');
        $("body").css('backgroundColor', 'rgba(0,0,0,0.4)');
        $("#eSidenav :link").css('opacity', '1');
        $("#eSidenavOpener").css({'left': '20%', 'width': '80%', 'opacity': '0'});
        $("body").css('marginLeft', '20%');
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