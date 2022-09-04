//let nombre = prompt("¡Hola! para empezar dime tu nombre.");
//alert(nombre + " es un placer tenerte acá. Ahora sí, ¡dibuja lo que quieras!");
//Se guarda el elemento y el contexto.
const mainCanvas = document.getElementById("canvas");
const context = mainCanvas.getContext("2d");

var color = "black", grosor = 1;

let initialX;
let initialY;

function defcolor(c){
    color = c;
}
function defgrosor(g){
    grosor = g;
}

const dibujar = (cursorX, cursorY) => {
  context.beginPath();//Inicia un nuevo trazo.
  context.moveTo(initialX, initialY);//Mueve las cordenadas iniciales.
  //Propiedades del pincel:
  context.lineWidth = grosor;
  context.strokeStyle = color;
  context.lineCap = "round";
  context.lineJoin = "round";

  context.lineTo(cursorX, cursorY);//Mueve el trazo hacía la posición en la que inicio.
  context.stroke();//Dibuja el trazo.

  initialX = cursorX;
  initialY = cursorY;
};

const mouseDown = (evt) => {
  initialX = evt.offsetX;
  initialY = evt.offsetY;
  dibujar(initialX, initialY);
  mainCanvas.addEventListener("mousemove", mouseMoving);
};

const mouseMoving = (evt) => {
  dibujar(evt.offsetX, evt.offsetY);
};

const mouseUp = () => {
  mainCanvas.removeEventListener("mousemove", mouseMoving);
};

mainCanvas.addEventListener("mousedown", mouseDown);
mainCanvas.addEventListener("mouseup", mouseUp);