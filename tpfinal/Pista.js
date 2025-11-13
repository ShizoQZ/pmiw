class Pista{
  constructor (){
    this.ZonaSegura;
    this.Calle;
    this.Destino;
    this.ObstaculosQuietos;
    this.ObstaculosMoviendose;
  }
   ZonaSegura() {
     fill(150,75,0);
    rect(0, 350, width, 50);
    rect(0, 200, width, 50); //rectangulo del medio
    rect(0, 0, width, 50);
  }
  Calle() {
    fill(100);
    rect(0, 50, width, 300);
  }
  Destino() {
    image(imgCasa, 150, 0, 60, 50);
  }
}
