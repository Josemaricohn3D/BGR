let boton = document.getElementById("iniciar");
let titulo = document.getElementById("titulo");
let pantallaNombre = document.getElementById("NombreUsuario");
let usuario = document.getElementById("usuario");
const formulario = document.getElementById("espacioN");
let enviarN = document.getElementById("enviar");


// Iniciar sesion
function nombre(){
    titulo.style.display = "none";
    boton.style.display = "none"
    pantallaNombre.style.left = "20%";
}

// ejecutar Iniciar Sesion
boton.addEventListener("click", nombre);

// Redireccion a nivel
function aparecerNivel(){
    window.location.href = "Nivel1.html?"
    
};



// Bienvenida 
function bienvenida(){
    console.log(usuario.value)
    $("#bienvenida").css("margin","0 auto");
    $("#saludo").text("Bienvenid@, " + usuario.value + "!");
    $("#NombreUsuario").css("display","none");
    $("#video").css("opacity","40%")
}


formulario.addEventListener("submit", bienvenida);

$("#enviar").click(bienvenida);
$("#jugar").click(aparecerNivel);

