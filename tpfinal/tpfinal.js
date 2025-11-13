let juego;
let imgCerdito;
let imgCiervos;
let imgCasa;

function preload(){
imgCerdito = loadImage('data/cerdito.png');
imgCiervos = loadImage('data/ciervos.png');
imgCasa = loadImage('data/casa.png');
}

//let pantalla;
function setup() {
  createCanvas(400, 400);
  juego = new Juego ();
 // pantalla = new Pantalla();
  juego.iniciar();
}


function draw() {
  background (200);
  juego.dibujar();
}

function keyPressed() {
  juego.teclaPresionada();
}
