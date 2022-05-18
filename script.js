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

// $( function() {
//     $( "#dialog" ).dialog();
//   } );

// Saludar al usuario
function saludar(){
    alert("Hola, " + usuario.value + ". ¿Preparad@ para jugar? :)");
}

formulario.addEventListener("submit", saludar);

// setTimeout(aparecerNivel, 5000);

$("#enviar").click(aparecerNivel);


