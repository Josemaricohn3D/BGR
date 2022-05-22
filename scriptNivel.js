
// DESAPARECER CIRCULOS

$(".circulos").click(function(){
    // Hacer desaparecer las bolas
    $(this).css("display", "none")
});

// DRAGABLE

$("#dragable").draggable()
$("#dropable").droppable({

    drop:function(event,ui){
        // Hacer desaparecer el dragable
        $("#deslizar").css("opacity","0%");
        // DAR PUNTOS SOLO HASTA QUE LA BARRA LLEGUE AL TOPE
        if (score.value < 300){
            numeros.textContent = parseInt (numeros.textContent) + 5;
        }
        // Aumentar la barra de puntos
        score.value += 5;
    }
});

// LLENAR LOCURA

let randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

function teclaPulsada(e){
    
    if(e.code == "Space"){
        // Cambiar color a la "locura"
        $("#locura").css('background-color', randomColorChange);
        randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        // DAR PUNTOS SOLO HASTA QUE LA BARRA LLEGUE AL TOPE
        if (score.value < 300){
            numeros.textContent = parseInt (numeros.textContent) + 5;
        }
        // Aumentar barra de puntos 
        score.value += 5;
    }
}

document.addEventListener("keydown", teclaPulsada);

// GANAR PUNTOS CON LOS CIRCULOS

let score = document.getElementById("progreso");
let numeros = document.getElementById("puntos");

$(".circulos").click(function(){
    // DAR PUNTOS SOLO HASTA QUE LA BARRA LLEGUE AL TOPE
    if (score.value < 300){
        numeros.textContent = parseInt (numeros.textContent) + 5;
    }
    // Aumentar barra de puntos 
    score.value += 5;
});

// PUNTUACION FINAL


$("#circulo19").click(function(){
    $("#final").css("margin","0 auto");
    $("#puntosFinal").text("Has conseguido " + $("#puntos").text() + "!");
});


    