// https://youtu.be/B19tA6NjHqI
let img
let cantX = 12
let cantY = 8 
let color1, color2, cambioColor
let mouseXInicial = 0 
let desplazamientoTotal = 0
let desplazamientoBase = 25
let espacioGris = 2
let mousePresionado = false

function preload() {
  img = loadImage('data/F_32.jpg')
}

function setup() {
  createCanvas(800, 400) 
  color1 = color(255, 255, 0) // Amarillo
  color2 = color(0) // Negro
}

function draw() {
  background(190)
  noStroke() 

  if (mousePresionado) {
    desplazamientoTotal += (mouseX - mouseXInicial) / 4
    mouseXInicial = mouseX
  }

  let desplazamientoMap = map(desplazamientoTotal, 0, width, -cantX * (400 / cantX) / 3, cantX * (400 / cantX) / 3)
  cuadrados(400 / cantX, 395 / cantY, desplazamientoMap + desplazamientoBase)
  image(img, 0, 0, 400, 400)
}

function obtenerColor(i, j) {
  if ((i + j) % 2 === 0) {
    return color1 // Amarillo
  } else {
    return color2 // Negro
  }
}

function cuadrados(modX, modY, desplazamiento) {
  for (let j = 0; j < cantY; j++) {
    let desplazamientoFila
    let espacio = j * (modY + espacioGris)

    if (j % 2 === 0) {
      desplazamientoFila = desplazamiento
    } else {
      desplazamientoFila = -desplazamiento
    }

    for (let i = -cantX; i < 400 / modX + cantX; i++) {
      fill(obtenerColor(i, j))
      rect(i * modX + 200 + desplazamientoFila, espacio, modX, modY);
    }
  }
}

function keyPressed() {
  if (key === 'e') {
    cambioColor = color1
    color1 = color2
    color2 = cambioColor
  }
  if (key === 'r') {
    desplazamientoTotal = 0
    color1 = color(255, 255, 0) // Amarillo
    color2 = color(0) // Negro
  }
}

function mousePressed() {
  mousePresionado = true
  mouseXInicial = mouseX
}

function mouseReleased() {
  mousePresionado = false
}
