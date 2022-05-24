

// TEMPORIZADOR PARA QUE AL ACABAR LA INTRO EMPIPEZE LA PORTADA
function INTRO(){
    $("#INTRO").css("display","none");
    $("#mensaje").css("animationPlayState","running");
    $("#iniciar").css("animationPlayState","running");
    $("#B").css("animationPlayState","running");
    $("#G").css("animationPlayState","running");
    $("#R").css("animationPlayState","running");
    $("#video").css("animationPlayState","running");
    $("#cancionFondo").trigger("play");
}

setTimeout(INTRO,32000);


// INICIAR SESION
$("#iniciar").click(function(){
    $("#titulo").css("display","none");
    $("#iniciar").css("display","none");
    $("#NombreUsuario").css("left","20%");
    $("#video").css("margin-left","-200%");
});

// BIENVENIDA
$("#enviar").click(function(){
    $("#bienvenida").css("margin","0 auto");
    $("#saludo").text("Bienvenid@, " + usuario.value + "!");
    $("#NombreUsuario").css("left","-200%");
    $("#video").css("opacity","40%")
});

// REDIRECCION A NIVEL
$("#jugar").click(function(){
    window.location.href = "Nivel1.html?"
    
});

// INSTRUCCIONES
$("#instrucciones").click(function(){
    $("#reglas").css("margin","0 auto");
    $("#bienvenida").css("margin-left","-200%");
});

// VOLVER ATRÁS INSTRUCCIONES
$("#atras").click(function(){
    $("#reglas").css("margin-left","-200%");
    $("#bienvenida").css("margin","0 auto");
    $("#saludo").text("Bienvenid@, " + usuario.value + "!");
});

// VOLVER ATRAS BIENVENIDA
$("#atrasB").click(function(){
    $("#NombreUsuario").css("left","20%");
    $("#bienvenida").css("margin-left", "-200%")

});

// SONIDOS DE HOVER Y SELECT
let audioHover = document.getElementById("hoverAudio");
let audioClick = document.getElementById("selectAudio");

$(".boton").mouseenter(function() {
    audioHover.play();
});

$(".atrasBttn").mouseenter(function() {
    audioHover.play();
});

$(".boton").click(function() {
    audioClick.load();
    audioClick.play();
});

$(".atrasBttn").click(function() {
    audioClick.load();
    audioClick.play();
});

