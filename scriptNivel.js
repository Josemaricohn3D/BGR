
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




