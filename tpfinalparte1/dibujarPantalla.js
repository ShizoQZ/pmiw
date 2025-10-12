function dibujarPantalla (estado) {
  image(miImagen[estado], 0, 0, 640, 480);
  fill(250,250,0)
  stroke (0)
    textSize(16)
    text(texto[estado], 10, 440 );
    
    

}
