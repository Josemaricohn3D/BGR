let boton = document.getElementById("iniciar");
let titulo = document.getElementById("titulo");
let pantallaNombre = document.getElementById("NombreUsuario");
let usuario = document.getElementById("usuario");
const formulario = document.getElementById("espacioN")

function nombre(){
    titulo.style.display = "none";
    boton.style.display = "none"
    pantallaNombre.style.left = "20%";
}

// function jugar (){
//     window.location.href =("Nivel1.html")
// }


boton.addEventListener("click", nombre);
formulario.addEventListener ("submit", jugar);
console.log ("Hola " + usuario.value)

