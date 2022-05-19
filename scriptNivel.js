
function desaparecer(){
    $(this).css("display", "none")
}

$(".circulos").click(desaparecer);

$("#dragable").draggable()
$("#dropable").droppable({

    drop:function(event,ui){
        $("#deslizar").css("opacity","0%");
    }
})

let locura = document.getElementById("locura");
let randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

function teclaPulsada(e){

    if(e.code == "ArrowUp"){
        $("#locura").css('background-color', randomColorChange);
        randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        console.log(randomColorChange)
    }
}


document.addEventListener("keydown", teclaPulsada);




