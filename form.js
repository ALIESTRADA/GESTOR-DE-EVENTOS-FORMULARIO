//Cuando se mueva el scroll se ejecutará la función llamada addOrRemove
window.onscroll = function(){
    AddOrRemove()
};
var Nav="navegacion"
//Obtenemos el id de la etiqueta nav
var Nav = document.getElementById("navegacion");

//Obtenemos la posición de desplazamiento
var NavPosition = Nav.offsetTop;

//Le agregamos y quitamos la clase Paste al nav
function AddOrRemove(){
    if(window.pageYOffset >= NavPosition){
        Nav.classList.add("Paste");
    }
    else{
        Nav.classList.remove("Paste");
    }
}