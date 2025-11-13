class ObstaculosMoviendose{
  constructor (){
    this.Color = color(0,0,250);
    //this.Tamaño;
    this.posX= random (-10000,-100);
    //poner posicion, de izquierda a derecha. la posicion en X negativas y random
   
    this.posicionY= floor (random (1,7))* 50; 
    if (this.posicionY==200) { this.posY=this.posicionY-50} else {this.posY=this.posicionY}
    //4 filas por ejm, 50,100,150. Podriamos hacer un random, entre 1-4. floor, redeondar al mas cercano
    this.Velocidad=5;
   // console.log (this.posY)
  }
  
  dibujar () {
    image(imgCiervos, this.posX, this.posY, 30, 30);
    this.posX= this.posX + this.Velocidad;
    //reciclar autos
  }
  
  MoverX (){
  }
}
