
// Iniciar sesion
$("#iniciar").click(function(){
    $("#titulo").css("display","none");
    $("#iniciar").css("display","none");
    $("#NombreUsuario").css("left","20%");
})

// Redireccion a nivel
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
