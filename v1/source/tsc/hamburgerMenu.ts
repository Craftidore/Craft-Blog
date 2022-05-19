((global:any) => {
    addEventListener("DOMContentLoaded", (event) => {
        var menu = document.getElementById("hamburger-menu");
        menu.addEventListener("click", hamburger.toggleMenu);
    });
    var hamburger:any = {};
    const MENUOPEN = "Menu is open"
    const MENUCLOSED = "Menu is closed"
    let menuState:string = MENUCLOSED;
    let openMenu = function():void {
        var menu = document.getElementById("sidebar");
        menu.style.display = "block";
        menuState = MENUOPEN
    }
    let closeMenu = function():void {
        var menu = document.getElementById("sidebar");
        menu.style.display = "none";
        menuState = MENUCLOSED;
    }
    hamburger.toggleMenu = function():void {
        if (menuState === MENUOPEN) {
            closeMenu();
        } else
        if (menuState === MENUCLOSED) {
            openMenu();
        } else {
            throw Error("Invalid menuState: " + menuState)
        }
    }

})(window);