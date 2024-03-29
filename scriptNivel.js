
// DESAPARECER CIRCULOS
$(".circulos").click(function(){
    // Hacer desaparecer las bolas
    $(this).css("display", "none")
});

// DRAGABLE
$("#dragable").draggable()
$("#dropable").droppable({

    drop:function(event,ui){
        // HACER DESAPARECER EL DRAGABLE
        $("#deslizar").css("opacity","0%");
        // DAR PUNTOS SOLO HASTA QUE LA BARRA LLEGUE AL TOPE
        if (score.value < 300){
            numeros.textContent = parseInt (numeros.textContent) + 10;
        }
        // AUMENTAR PUNTOS
        score.value += 10;
    }
});

// CONSEGUIR PUNTOS CON "LOCURA" Y PARAR EL JUEGO CON "ESC"

let randomColorChange = '0px 0px 30px 20px inset #'+(Math.random()*0xFFFFFF<<0).toString(16);

function teclaPulsada(e){
    
    if(e.code == "Space"){
        // CAMBIAR COLOR "LOCURA"
        $("#locura").css("box-shadow", randomColorChange);
        randomColorChange = '0px 0px 30px 20px inset #'+(Math.random()*0xFFFFFF<<0).toString(16);
        // DAR PUNTOS SOLO HASTA QUE LA BARRA LLEGUE AL TOPE
        if (score.value < 300){
            numeros.textContent = parseInt (numeros.textContent) + 1;
        }
        // AUMENTAR BARRA DE PUNTOS
        score.value += 1;

        // PARAR EL JUEGO Y LAS ANIMACIONES
    } else if(e.code == "Escape"){
        $("#pausa").css("margin","0 auto");
        $("#videoclip").trigger("pause");
        $(".circulos").css("animationPlayState","paused");
        $("#deslizar").css("animationPlayState","paused");
        $("#dragable").css("animationPlayState","paused");
        $("#dropable").css("animationPlayState","paused");
        $("#locura").css("animationPlayState","paused");
        $("#final").css("animationPlayState","paused");
        $("#botonFinalizar").css("animationPlayState","paused");
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
    // AUMENTAR BARRA DE PUNTOS
    score.value += 5;
});


// RETOMAR EL JUEGO Y LAS ANIMACIONES

$("#atrasP").click(function(){
    $("#pausa").css("margin-left","-200%");
    $("#videoclip").trigger("play");
    $(".circulos").css("animationPlayState","running");
    $("#deslizar").css("animationPlayState","running");
    $("#dragable").css("animationPlayState","running");
    $("#dropable").css("animationPlayState","running");
    $("#locura").css("animationPlayState","running");
    $("#final").css("animationPlayState","running");
    $("#botonFinalizar").css("animationPlayState","running");
});



// SONIDO BOTONES

let audioHover = document.getElementById("hoverAudio");
let audioClick = document.getElementById("selectAudio");

// SONIDO CON HOVER
$(".boton").mouseenter(function() {
    audioHover.play();
});

$(".atrasBttn").mouseenter(function() {
    audioHover.play();
});

// SONIDO CON CLICK
$(".boton").click(function() {
    audioClick.load();
    audioClick.play();
});

$(".atrasBttn").click(function() {
    audioClick.load();
    audioClick.play();
});

// INSTRUCCIONES
$("#controles").click(function(){
    $("#reglas").css("margin","0 auto");
})
// SALIR DE LAS INSTRUCCIONES
$("#atras2").click(function(){
    $("#reglas").css("margin-left","-200%");
});

// SALIR A LA PANTALLA DE INICIO
$("#salir").click(function(){
    window.location.href = "index.html";
    
});

// PUNTUACION FINAL
let final = document.getElementById("puntos");

function finalizar(){

    // APARECER PANATALLA FINAL
    $("#final").css("margin","0 auto");
    $("#final").css("animationPlayState","running");

    // TEXTO Y PUNTOS DE LA CLASIFICACIÓN SEGÚN LOS PUNTOS
    if (final.textContent == 300){
        $("#puntosFinal").css("font-size","400%");
        $("#puntosFinal").text( $("#puntos").text() + " puntos! GENIAL!");
        $("#clasificacionIMG").attr("src","img/A.png");
    } else if (final.textContent >= 100){
        $("#puntosFinal").css("font-size","250%");
        $("#puntosFinal").text("¿" + $("#puntos").text() + " puntos? Venga, puedes conseguir mas!");
        $("#clasificacionIMG").attr("src", "img/B.png");
    } else if (final.textContent <=  100){
        $("#puntosFinal").css("font-size","250%");
        $("#puntosFinal").text( "¿" + $("#puntos").text() + " puntos? Vuelve a intentarlo hazme el favor");
        $("#clasificacionIMG").attr("src", "img/C.png");
    }

    // DISPARAR ANIMACIÓN CLASIFICACIÓN
    $("#clasificacion").css("animationPlayState","running");

    // QUITAR BARRA PUNTOS Y BOTON DE SINCRONIZAR Y DE FINALIZAR PARTIDA
    $("#puntuacion").css("display", "none");
    $("#sincronizar").css("display", "none");
    $("#videoclip").css("opacity","20%");
    $("#botonFinalizar").css("display","none");
    
};
$("#botonFinalizar").click(finalizar);
$("#circulo42").click(finalizar);

// SALIR A LA PANTALLA DE INICIO
$("#salirFinal").click(function(){
    window.location.href = "index.html";
    
});



