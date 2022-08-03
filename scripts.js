console.log("desde js");

$d = document;
let $btnMenu = $d.getElementById("header_menu_icon");
let $modalMenu = $d.getElementById("nav-bar_modal");
let $categoriaSabores = $d.getElementById("sabores_desplegable");
let $btnDesplegarSabores = $d.getElementById("nav-bar_btn-desplegar");

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

    /*Boton de desplegar sabores id = "nav-bar_btn-desplegar"*/
    if (e.target.id === "nav-bar_btn-desplegar"){
        console.log("click en el btn de desplegar sabores");
        $categoriaSabores.classList.toggle("nav-bar_sabores_desplegable_hide");
        $btnDesplegarSabores.classList.toggle("nav-bar_desplegable_icon-rotated");        
    }
    
    /*Si es un enlace del menu modal */
    if (e.target.id.includes("modal_menu")){
        console.log("click en uno de los menues modales");       
        //$d.getElementById(e.target.id).classList.toggle("selected");
    }
});