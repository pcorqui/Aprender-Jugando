var miTitulo = document.querySelector('h1');
miTitulo.innerHTML = 'Hello World';

var canvas = document.getElementById("Juego");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
