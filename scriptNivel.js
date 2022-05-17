let circulo = document.getElementById("circulo1");
let Nombre = sessionStorage.getItem("Nombre");
console.log(Nombre);

console.log("Hola")

function desaparecer(){
    $(this).css("display", "none")
}

$(".circulos").click(desaparecer);
