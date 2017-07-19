var cargarPagina=function () {
    carrousel();   
    $.when($("#telephone").val.length == 10).then(console.log("no se que hago"));
}
var carrousel = function(){
    $('.slider').slider();
}



$(document).ready(cargarPagina);