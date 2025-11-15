let juego;
let imgCerdito;
let imgCiervos;
let imgCasa;
let imgDerrota;
let imgVictoria
  let sonidoVictoria;
let sonidoDerrota;
let sonidoPerderVida

  function preload() {
  sonidoVictoria = loadSound('data/Victoria.mp3');
  sonidoPerderVida = loadSound('data/Vida.mp3');
  sonidoDerrota = loadSound('data/Derrota.mp3');


  imgVictoria = loadImage('data/Victoria.jpg');
  imgDerrota = loadImage('data/Derrota.jpg');
  imgCerdito = loadImage('data/cerdito.png');
  imgCiervos = loadImage('data/ciervos.png');
  imgCasa = loadImage('data/casa.png');
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
  juego.iniciar();
}

function draw() {
  background(200);
  juego.dibujar();
}

function keyPressed() {
  juego.teclaPresionada();
}
