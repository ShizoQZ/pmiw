class Jugador{
  constructor (){
    this.Vidas = 3;
    this.Cerdito= new Cerdito();
  }
  
  dibujar (){
    this.Cerdito.dibujar();
  }
  
  iniciarCerdito (){
    this.Cerdito.iniciar();
  }
  QuitarVida (){
    this.Vidas = this.Vidas -1;
  }
  
  teclaPresionada(){
  this.Cerdito.teclaPresionada ();
}
} //final
