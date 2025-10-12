function mousePressed() {
  // Si las pantallas actuales son las desiciones y creditos, el boton siguiente no se muestra
  if (Pantalla !== 4 && Pantalla !== 6 && Pantalla !== 9 && Pantalla !== 12 && Pantalla !== 13 && Pantalla !== 14 && Pantalla !== 15) {
    
    if (click(posX, posY, tam, tam)) {
      PasarPantalla(Pantalla, Pantalla + 1);
      
    }//PRIMERA DESICIÓN
  } else if (Pantalla === 4) {
    //boton derecho (HUIR)
    if (click(posXD +15, posYD, tam + 80, tam)) {
      PasarPantalla(Pantalla, 5);
    }
    //boton izquierdo (negociar)
    else if (click(posXD2 +15, posYD, tam + 80, tam)) {
      PasarPantalla(Pantalla, 13);
      FinalMalo.play();
    }//SEGUNDA DESICIÓN
  } else if (Pantalla === 6) {
    //boton derecho (huir)
    if (click(posXD +15, posYD, tam + 80, tam)) {
      PasarPantalla(Pantalla, 7);
    }
    //boton izquierdo (enfrentarse al lobo)
    else if (click(posXD2 +15, posYD, tam + 80, tam)) {
      PasarPantalla(Pantalla, 14);
      FinalMalo.play();
    }
  } else if (Pantalla === 9) {
    //boton derecho (poner la olla)
    if (click(posXD +15, posYD, tam + 80, tam)) {
      PasarPantalla(Pantalla, 10);
     
    }
    //boton izquierdo (huir)
    else if (click(posXD2 +15, posYD, tam + 80, tam)) {
      PasarPantalla(Pantalla, 15);
      FinalMalo.play();
    }
  }
  //REINICIO EN LOS CREDITOS
  if (Pantalla === 12){
    FinalBueno.play();
    if (click(posXR, posYR + 350, tam, tam)) {
      PasarPantalla(Pantalla, 0);
      
    }
  } //REINICIO EN LOS FINALES MALOS
  else if (Pantalla === 13 || Pantalla === 14 || Pantalla === 15) {
    if (click(posXR, posYR, tam, tam)) {
      PasarPantalla(Pantalla, 0);
    }
  }
}
