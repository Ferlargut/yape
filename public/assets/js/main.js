    
    var codigotel = function () {
        if(userData.code == $code){
       alert("fer")
    }else{
        $.post('http://localhost:1388/api/registerNumber',{
            "phone" : userData.phone, 
        }).then(function (response) {
            console.log(response);
        });
    }
    }  
var cargarPagina=function () {    
    carrousel();   
    $("#check").click(validar);
    $(".btn-validate").click(numVal);
    $(".btn-validate").click(enviar);
    validarCode();    
    $("#boton-codigo").click(codigotel);    
}
var carrousel = function(){
    $('.slider').slider();
}

var validar = function () {
    
    if ($("#check").is(":checked")==true){
        $(".btn-validate").removeClass("disabled")
        

    }else {
        $(".btn-validate").addClass("disabled");
    }
}
var numVal = function () {
    var $tel=parseInt($("#telephone").val());
    

}
var enviar = function () {
    var $tel=$("#telephone").val();
    $.post('http://localhost:1388/api/registerNumber',{
        "phone":$tel,
        "terms": true,
    }).then(function (response) {
        localStorage.setItem("jsonData", JSON.stringify(response));
        var yapeUser = JSON.parse(localStorage.getItem("jsonData"));
        if(yapeUser.success==true){
            window.location.replace("/validarcode.html");
        }
        return yapeUser.data        
    })    
}
var validarCode = function () {
    var yapeUser = JSON.parse(localStorage.getItem("jsonData"));
    var userData = yapeUser.data
    var $code = $("#code").val();    

    if(window.location.pathname == "/validarcode.html"){
        alert(userData.code);
        $("#numeroP").text(userData.phone);
        
    }
 
     
}

$(document).ready(cargarPagina);