
// INICIAR SESION
$("#iniciar").click(function(){
    $("#titulo").css("display","none");
    $("#iniciar").css("display","none");
    $("#NombreUsuario").css("left","20%");
})

// REDIRECCION A NIVEL
$("#jugar").click(function(){
    window.location.href = "Nivel1.html?"
    
});

// BIENVENIDA

$("#enviar").click(function(){
    $("#bienvenida").css("margin","0 auto");
    $("#saludo").text("Bienvenid@, " + usuario.value + "!");
    $("#NombreUsuario").css("left","-200%");
    $("#video").css("opacity","40%")
})

// REGLAS

$("#instrucciones").click(function(){
    $("#reglas").css("margin","0 auto");
    $("#bienvenida").css("margin-left","-200%");
})

// VOLVER ATRÁS INSTRUCCIONES

$("#atras").click(function(){
    $("#reglas").css("margin-left","-200%");
    $("#bienvenida").css("margin","0 auto");
    $("#saludo").text("Bienvenid@, " + usuario.value + "!");
})

// VOLVER ATRAS BIENVENIDA

$("#atrasB").click(function(){
    $("#NombreUsuario").css("left","20%");
    $("#bienvenida").css("margin-left", "-200%")

})

let audioHover = document.getElementById("hoverAudio");
let audioClick = document.getElementById("selectAudio");

$(".boton").mouseenter(function() {
    audioHover.play();
})

$(".atrasBttn").mouseenter(function() {
    audioHover.play();
})

$(".boton").click(function() {
        audioClick.load();
        audioClick.play();
    })

$(".atrasBttn").click(function() {
    audioClick.load();
    audioClick.play();
})

