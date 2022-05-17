let boton = document.getElementById("iniciar");
let titulo = document.getElementById("titulo");
let pantallaNombre = document.getElementById("NombreUsuario");
let usuario = document.getElementById("usuario");
const formulario = document.getElementById("espacioN");
let Nombre = document.getAttribute("value");

sessionStorage.setItem("Nombre", Nombre);

// Iniciar sesion
function nombre(){
    titulo.style.display = "none";
    boton.style.display = "none"
    pantallaNombre.style.left = "20%";

}

// ejecutar nombre
boton.addEventListener("click", nombre);
// formulario.addEventListener ("submit", jugar);
console.log ("Hola " + usuario.value)

// Aparecer Nivel1


function aparecerNivel(){
    window.location.href = "Nivel1.html? + usuario.value"

};

$("#enviar").click(aparecerNivel);


