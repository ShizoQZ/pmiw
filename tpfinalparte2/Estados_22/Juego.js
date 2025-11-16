class Juego {
  constructor() {
    this.estado = 0;
    this.victoria = false;
    this.Jugador = new Jugador();
    this.ObstaculosQuietos;
    this.ObstaculosMoviendose = [];
    this.CantidadObstaculosMoviendose = 100;
    this.Pista = new Pista();
    this.pantallas = new pantallas();
    this.derrotaSonido = false;
  this.victoriaSonido = false;
  }

  iniciar() {
    if (this.estado === 1 && this.ObstaculosMoviendose.length === 0) {
      for (let i = 0; i < this.CantidadObstaculosMoviendose; i++) {
        this.ObstaculosMoviendose[i] = new ObstaculosMoviendose();
      }
    }
  }

  reiniciar() {
    this.Jugador = new Jugador();
    this.ObstaculosMoviendose = [];
    this.estado = 1;
    this.victoria = false;
    this.derrotaSonido = false;
     this.victoriaSonido = false;  
    this.iniciar();
  }

  dibujar() {
    if (this.estado === 0) {
      this.pantallas.PantallaInicio();
    }

    this.dibujarPista();
    this.dibujarVidas();
    this.dibujarObstaculosMoviendose();
    this.Jugador.dibujar();
    this.victoria = (this.Jugador.Cerdito.posX >= 150 &&
    this.Jugador.Cerdito.posX <= 210 &&
    this.Jugador.Cerdito.posY <= 50);
    this.controlColision(); 
    this.PantallaDerrota();
    this.PantallaVictoria();
  }

  dibujarPista() {
    this.Pista.Calle();
    this.Pista.ZonaSegura();
    this.Pista.Destino();
  }

  dibujarVidas() {
    fill(255);
    text("Vidas:" + this.Jugador.Vidas, 30, 30);
  }

  dibujarObstaculosMoviendose() {
    for (let i = 0; i < this.CantidadObstaculosMoviendose; i++) {
      this.ObstaculosMoviendose[i].dibujar();
    }
  }

  controlColision() {
    if (this.victoria) return;

    for (let i = 0; i < this.CantidadObstaculosMoviendose; i++) {
      if (dist(this.ObstaculosMoviendose[i].posX, this.ObstaculosMoviendose[i].posY,
        this.Jugador.Cerdito.posX, this.Jugador.Cerdito.posY) < 20) {
        this.Jugador.QuitarVida();
        if (this.Jugador.Vidas > 0) {
           sonidoPerderVida.play();
          this.Jugador.iniciarCerdito();
        }
      }
    }
  }

  PantallaDerrota() {
  if (this.Jugador.Vidas <= 0) {

    if (!this.derrotaSonido) {
      sonidoDerrota.play();
      this.derrotaSonido= true;
    }

    this.pantallas.PantallaDerrota();
  }
}


PantallaVictoria() {
  if (this.Jugador.Cerdito.posX >= 150 && 
      this.Jugador.Cerdito.posX <= 210 &&
      this.Jugador.Cerdito.posY <= 50) {

    if (!this.victoriaSonido) {
      sonidoVictoria.play();
      this.victoriaSonido = true;
    }

    this.pantallas.PantallaVictoria();
  }
}


 

  teclaPresionada() {
    if (this.estado === 0) {
      
      if (key === ' ') {
        this.estado = 1;
        this.iniciar();
      }
    }

    if (key === 'r') {
      this.reiniciar();
    }

    let ganar = (this.Jugador.Cerdito.posX >= 150 &&
      this.Jugador.Cerdito.posX <= 210 &&
      this.Jugador.Cerdito.posY <= 50);

    if (!ganar) {
      this.Jugador.teclaPresionada();
    }
  }
}
