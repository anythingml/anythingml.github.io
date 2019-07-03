var font = document.getElementById("hfont");
var delay = 300;

function cyan(){
	font.setAttribute("color", "cyan");	
	setTimeout(txml, delay);
}

function white(){
	font.setAttribute("color", "white");	
	setTimeout(txAny, delay);
}

function txAny(){
	font.innerHTML = "Anything";
	setTimeout(cyan, delay);
}

function txml(){
	font.innerHTML = "ML";
	setTimeout(white, delay);
}

setTimeout(cyan, delay);
