class Cerdito {
  constructor () {
    this.posX = width/2;
    this.posY = 450;
  }

  iniciar () {
  this.posX;
    this.posY;
  }
  dibujar () {
    image(imgCerdito, this.posX, this.posY, 30, 30);
  }


  //Mover
 teclaPresionada() {
    let nuevaX = this.posX;
    let nuevaY = this.posY;

    if (keyCode === LEFT_ARROW) {
      nuevaX = this.posX - 30;
      if (nuevaX >= 0) {  // no sale por la izquierda
        this.posX = nuevaX;
      }
    } else if (keyCode === RIGHT_ARROW) {
      nuevaX = this.posX + 30;
      if (nuevaX <= 610) {  // no sale por la derecha
        this.posX = nuevaX;
      }
    } else if (keyCode === UP_ARROW) {
      nuevaY = this.posY - 30;
      if (nuevaY >= 0) {  // no sale por arriba
        this.posY = nuevaY;
      }
    } else if (keyCode === DOWN_ARROW) {
      nuevaY = this.posY + 30;
      if (nuevaY <= 450) {  // no sale por abajo
        this.posY = nuevaY;
      }
    }
  }
}
