class Juego {
  constructor () {
    this.Jugador = new Jugador ();
    this.ObstaculosQuietos;
    this.ObstaculosMoviendose = [];
    this.CantidadObstaculosMoviendose = 100;
    this.Pista= new Pista ();
    this.PantallaDerrota;
    this.estado = 'jugando';
  }

  iniciar () {
    for (let i=0; i<this.CantidadObstaculosMoviendose; i++) {
     this.ObstaculosMoviendose[i]= new ObstaculosMoviendose();
    }
  }
  
  reiniciar () {
    this.iniciar();
    this.Jugador.Vidas = 3;
    this.Jugador.iniciarCerdito();
    this.estado = 'jugando';
  }
  
  dibujar () {
    background (200);
    
    if (this.estado === 'victoria') {
      this.pantallaVictoria();
    } 
    else if (this.estado === 'derrota') {
      this.pantallaDerrota();
    } 
    else {
      if (this.Jugador.Vidas ===0) {background (250,0,0)} else {
      this.dibujarPista();
      this.dibujarVidas();
      this.dibujarObstaculosMoviendose();
      this.Jugador.dibujar();
      this.controlColision();
      this.controlVictoria(); 
      }
    }
  }

  controlVictoria() {
    if (this.Jugador.Cerdito.posX >= 150 && this.Jugador.Cerdito.posX <= 210 &&
        this.Jugador.Cerdito.posY <= 50) {
      this.estado = 'victoria';
    }
  }

  pantallaVictoria() {
    fill(0, 255, 0, 200);
    rect(0, 0, width, height);
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("¡VICTORIA!", width/2, height/2 - 20);
    textSize(20);
    text("Presiona R para jugar de nuevo", width/2, height/2 + 30);
    textAlign(LEFT);
  }
  
  pantallaDerrota() {
    fill(255, 0, 0, 200);
    rect(0, 0, width, height);
    fill(255);
    textAlign(CENTER);
    textSize(32);
    text("¡GAME OVER!", width/2, height/2 - 20);
    textSize(20);
    text("Presiona R para jugar de nuevo", width/2, height/2 + 30);
    textAlign(LEFT);
  }

  controlColision() {
    for (let i = 0; i < this.CantidadObstaculosMoviendose; i++) {
      if (dist(this.ObstaculosMoviendose[i].posX, this.ObstaculosMoviendose[i].posY,this.Jugador.Cerdito.posX,this.Jugador.Cerdito.posY)<20){
      this.Jugador.QuitarVida ();
      if (this.Jugador.Vidas > 0) { 
        this.iniciar ();
        this.Jugador.iniciarCerdito();
      } else {
        this.estado = 'derrota';
      }
      return; 
    }
    }
  }

  teclaPresionada() {
    if (key === 'r' || key === 'R') { 
      this.reiniciar();
      return;
    }
    this.Jugador.teclaPresionada();
  }

  dibujarPista() {
    this.Pista.Calle();
      this.Pista.ZonaSegura();
      this.Pista.Destino();
  }
   dibujarVidas() {
   fill(255);
   text("Vidas:" + this.Jugador.Vidas,30,30);
  }
  dibujarObstaculosMoviendose() {
    for (let i = 0; i < this.CantidadObstaculosMoviendose; i++) {
      this.ObstaculosMoviendose[i].dibujar();
    }
  }
 
PantallaDerrota() {
if (this.Jugador.Vidas ===0) {background (250,0,0)}
}
}//final
