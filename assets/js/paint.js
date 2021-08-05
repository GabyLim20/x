/*global guardar variables globales*/ 
var canvas=document.getElementById('canvas');/*capturar el objeto*/ 
var ctx=canvas.getContext('2d')/*manipular el objeto other variable*/ 
var rect=canvas.getBoundingClientRect();/*obtener pos */ 
var x=0, y=0, dibujando=false, color="black",grosor=1;
/*crear funcion oninput html*/ 
function defcolor(c){/*cambiar variable color */ 
    color=c;
}
function defgrosor(g){/*cambiar variable para recibir */ 
    grosor=g;
}
/*3 eventos mouse important */ 
canvas.addEventListener('mousedown',function(dclick){
    x=dclick.clientX-rect.left;
    y=dclick.clientY-rect.top;
    dibujando=true;/*boleano */
}); /*el primer click de la funcion*/
canvas.addEventListener('mousemove',function(dclick){
    if(dibujando===true){  /*valor y tipo */
        dibujar(x, y, dclick.clientX-rect.left, dclick.clientY-rect.top); /*punto inicial y pos actual */
        x=dclick.clientX - rect.left;/*cambio pos*/
        y=dclick.clientY-rect.top;
    } 
});
canvas.addEventListener('mouseup',function(dclick){
    if(dibujando===true){  /*valor y tipo */
        dibujar(x, y, dclick.clientX-rect.left, dclick.clientY-rect.top); /*termine pos */
        x=0;/*reinicio var*/
        y=0;
        dibujando=false;
    }
}); /*el primer click de la funcion*/

function dibujar(x1,y1,x2,y2){
    /*atributos*/
    ctx.beginPath();
    ctx.strokeStyle=color; /*Devolver color */
    ctx.lineWidth=grosor;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();/*Linea de recorrido */
    ctx.closePath();
}