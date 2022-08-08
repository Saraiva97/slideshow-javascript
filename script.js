var intervalo=1000;

function slidel(){

    document.getElementById("banner").src="natureza1.jpg";
    setTimeout("slide2()",intervalo);

}

function slide2(){
    document.getElementById("banner").src="natureza2.jpg";
    setTimeout("slide3()",intervalo);
}
function slide3(){
    document.getElementById("banner").src="natureza3.jpg";
    setTimeout("slide4()",intervalo);
}
function slide4(){
    document.getElementById("banner").src="natureza4.jpg";
    setTimeout("slide5()",intervalo);
}

function slide5(){
    document.getElementById("banner").src="natureza5.jpg";
    setTimeout(slidel(),intervalo);
}