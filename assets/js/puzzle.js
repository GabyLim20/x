var piezas = document.getElementsByClassName('picture');/*Guardar todas las piezas */
var tamWidh = [150,150,150,150,150,150,150,150,150];
var tamHeight = [250,250,250,250,250,250,250,250,250];
/*Recorrido */
for(var i=0;i<piezas.length;i++){
	piezas[i].setAttribute("width", tamWidh[i]); /*Tamaño cada pieza */
	piezas[i].setAttribute("height",tamHeight[i]);
    /*Random */
    piezas[i].setAttribute("x", Math.floor((Math.random() * 10) + 1));
	piezas[i].setAttribute("y", Math.floor((Math.random() * 409) + 1));
    /*Movimiento de piezas */
    piezas[i].setAttribute("onmousedown","seleccionarElemento(evt)");
}
/*Var mov */
var elementSelect = 0;  
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;
/*Declaracion mmov */
function seleccionarElemento(evt) {
	elementSelect = reordenar(evt); /*Almacenar elemento de cada pieza */
	currentX = evt.clientX; /*Guardar la pos del mouse instantaneo */        
	currentY = evt.clientY;
	currentPosx = parseFloat(elementSelect.getAttribute("x"));   /*Obtencion de valor */   
	currentPosy = parseFloat(elementSelect.getAttribute("y"));
	elementSelect.setAttribute("onmousemove","moverElemento(evt)");
}
/*Distancia de recorrido */
function moverElemento(evt){
	var dx = evt.clientX - currentX; /*calcular la distancia */   
	var dy = evt.clientY - currentY;
	currentPosx = currentPosx + dx; /*Pos almacenada */   
	currentPosy = currentPosy + dy;
	elementSelect.setAttribute("x",currentPosx);/*Actualizar pos */
	elementSelect.setAttribute("y",currentPosy);
	currentX = evt.clientX;        
	currentY = evt.clientY;	
    elementSelect.setAttribute("onmouseout","deseleccionarElemento(evt)"); /*Poder quitar seleccionar */
	elementSelect.setAttribute("onmouseup","deseleccionarElemento(evt)");
}
function deseleccionarElemento(evt){ /*mover y soltar */   
    checar();
    if(elementSelect != 0){			
		elementSelect.removeAttribute("onmousemove"); 
		elementSelect.removeAttribute("onmouseout");
		elementSelect.removeAttribute("onmouseup");
		elementSelect = 0;
	}
}
var enviroment = document.getElementById('enviroment');
function reordenar(evt){ 
    var father =evt.target.parentNode; 
    var clone=father.cloneNode(true);
    var id= father.getAttribute("id");
    enviroment.removeChild(document.getElementById(id)); /*eliminar pieza de select */   
	enviroment.appendChild(clone);
	return enviroment.lastChild.firstChild; /*poder sobreponer */   
}

var origX = [200,200,200,200,200,200,200,200,200];  /*Reajustar medidas URGENTE, CHECAR*/ 
var origY = [250,250,250,250,250,250,250,250,250];

var audi = document.getElementById("audi");

function checar() {    
	var good = 0;
	var fathers = document.getElementsByClassName('father');
	for(var i=0;i<piezas.length;i++){
		var posx = parseFloat(fathers[i].firstChild.getAttribute("x"));    
		var posy = parseFloat(fathers[i].firstChild.getAttribute("y"));
		ide = fathers[i].getAttribute("id"); /*indice */   
		if(origX[ide] == posx && origY[ide] == posy){
			good = good + 1;
		}
	}
	if(good == 9){
		audi.play();
        alert("¡Ganaste!");
	}
   
}