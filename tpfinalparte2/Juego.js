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
  /*Estado 0= Pantalla de inicio
  Estado 1= Juego andando
  */

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
    this.estado = 1; // 
    this.victoria = false;  
    this.derrotaSonido = false;
     this.victoriaSonido = false;  
    this.iniciar(); 
  }

  dibujar() {
    if (this.estado === 0) {
      this.pantallas.PantallaInicio();
      return; //evita que todo lo de abajo se ejecute mientras se muestra la pantalla de inicio
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
    if (this.victoria) return; //si el jugador ya gano los ciervos dejan de moverse y la vida deja de perderse

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
  if (this.Jugador.Cerdito.posX >= 150 && this.Jugador.Cerdito.posX <= 210 &&this.Jugador.Cerdito.posY <= 50) {

    if (!this.victoriaSonido) {
      sonidoVictoria.play();
      this.victoriaSonido = true;
    }

    this.pantallas.PantallaVictoria();
  }
}


 

  teclaPresionada() {
    if (this.estado === 0) {
      // apretar el espacio si estamos en la pantalla de inicio
      if (key === ' ') {
        this.estado = 1;
        this.iniciar();
      }
    }

    if (key === 'r') {
      this.reiniciar();
    }

    // si el jugador ha llegado al destino (gano el juego) 
    let ganar = (this.Jugador.Cerdito.posX >= 150 &&
      this.Jugador.Cerdito.posX <= 210 &&
      this.Jugador.Cerdito.posY <= 50);
// ya no se podrá seguir moviendo
    if (!ganar) {
      this.Jugador.teclaPresionada();
    }
  }
}
