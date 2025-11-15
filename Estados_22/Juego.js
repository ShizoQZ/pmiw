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
    // Solo inicializar obstáculos si estamos en estado de juego (1)
    if (this.estado === 1 && this.ObstaculosMoviendose.length === 0) {
      for (let i = 0; i < this.CantidadObstaculosMoviendose; i++) {
        this.ObstaculosMoviendose[i] = new ObstaculosMoviendose();
      }
    }
  }

  reiniciar() {
    // Reiniciar todo para nueva partida
    this.Jugador = new Jugador();
    this.ObstaculosMoviendose = [];
    this.estado = 1; // Volver al juego
    this.victoria = false;  // ← AGREGAR ESTA LÍNEA
    this.derrotaSonido = false;
     this.victoriaSonido = false;  
    this.iniciar(); // Recrear obstáculos
  }

  dibujar() {
    // ESTADO 0: Pantalla de Inicio
    if (this.estado === 0) {
      this.pantallas.PantallaInicio();
      return;
    }

    // ESTADO 1: Juego normal (todo igual que antes)
    this.dibujarPista();
    this.dibujarVidas();
    this.dibujarObstaculosMoviendose();
    this.Jugador.dibujar();
    this.victoria = (this.Jugador.Cerdito.posX >= 150 &&
    this.Jugador.Cerdito.posX <= 210 &&
    this.Jugador.Cerdito.posY <= 50);
    this.controlColision();  // Ahora solo colisiona si !victoria
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

    // reproducir sonido SOLO la primera vez
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

    // 🔊 Reproducir sonido SOLO una vez
    if (!this.victoriaSonido) {
      sonidoVictoria.play();
      this.victoriaSonido = true;
    }

    this.pantallas.PantallaVictoria();
  }
}


 

  teclaPresionada() {
    // Manejar teclas según el estado
    if (this.estado === 0) {
      // En pantalla inicio: SPACE para empezar
      if (key === ' ') {
        this.estado = 1;
        this.iniciar();
      }
    }

    // Tecla R para reiniciar (DESDE CUALQUIER PANTALLA DE FIN - PRIORIDAD ALTA)
    if (key === 'r') {
      this.reiniciar();
    }

    // En juego: verificar victoria antes de mover (solo si NO es reinicio)
    let ganar = (this.Jugador.Cerdito.posX >= 150 &&
      this.Jugador.Cerdito.posX <= 210 &&
      this.Jugador.Cerdito.posY <= 50);

    if (!ganar) {
      this.Jugador.teclaPresionada();
    }
  }
}
