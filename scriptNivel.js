
// DESAPARECER CIRCULOS

function desaparecer(){
    // Hacer desaparecer las bolas
    $(this).css("display", "none")
}

$(".circulos").click(desaparecer);

// DRAGABLE


$("#dragable").draggable()
$("#dropable").droppable({

    drop:function(event,ui){
        // Hacer desaparecer el dragable
        $("#deslizar").css("opacity","0%");
        // Dar puntos
        numeros.textContent = parseInt (numeros.textContent) + 5;
        // Aumentar la barra de puntos
        score.value += 5;
    }
})

// LLENAR LOCURA

let locura = document.getElementById("locura");
let randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

function teclaPulsada(e){
    
    if(e.code == "ArrowUp"){
        // Cambiar color a la "locura"
        $("#locura").css('background-color', randomColorChange);
        randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        // Dar puntos
        numeros.textContent = parseInt (numeros.textContent) + 5;
        // Aumentar barra de puntos 
        score.value += 5;
    }
}

document.addEventListener("keydown", teclaPulsada);

// GANAR PUNTOS CON LOS CIRCULOS

let score = document.getElementById("progreso");
let numeros = document.getElementById("puntos");

function sumar(){
    // Dar puntos
    numeros.textContent = parseInt (numeros.textContent) + 5;
    // Aumentar barra de puntos 
    score.value += 5;
}
    
$(".circulos").click(sumar);


    