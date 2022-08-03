console.log("desde js");

$d = document;
let $btnMenu = $d.getElementById("header_menu_icon");
let $modalMenu = $d.getElementById("nav-bar_modal");

console.log($btnMenu, $modalMenu);
$d.addEventListener("click", (e) => {
    console.log(e.target.id);

    /*Boton del mennu en el header */
    if (e.target.id === "header_menu_icon"){
        console.log("click en el btn menu header");
        $modalMenu.classList.toggle("nav-bar-hide");
    }

    /*Boton de cerrar en el menu modal */
    if (e.target.id === "nav-bar_btn-cerrar"){
        console.log("click en el btn de cerrar el menu modal");
        $modalMenu.classList.toggle("nav-bar-hide");
    }

});