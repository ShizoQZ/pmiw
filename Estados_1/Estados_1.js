let juego;

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
  juego.iniciar(); // Inicializa en estado 0 (pantalla inicio)
}

function draw() {
  background(200);
  juego.dibujar();
}

function keyPressed() {
  juego.teclaPresionada();
}
