class Pista{
  constructor (){
    this.ZonaSegura;
    this.Calle;
    this.Destino;
  }
   ZonaSegura() {
     fill(0,100,0);
     noStroke ();
    rect(0, 400, width, 100);
    rect(0, 200, width, 50); //rectangulo del medio
    rect(0, 0, width, 50);
  }
  Calle() {
    noStroke ();
    fill(0,200,0);
    rect(0, 50, width, 400);
  }
  Destino() {
    image(imgCasa, 150, 0, 60, 50);
  }
}
