class pantallas {
  constructor() {
    this.PantallaInicio;
    this.PantallaDerrota;
    this.PantallaVictoria;
    this.PantallaCreditos;
  }

  PantallaInicio() {
    background(50, 100, 200); // Cielo azul
    fill(255, 255, 0, 200); // Fondo amarillo semitransparente
    rect(0, 0, width, height);
    
    // Título grande
    fill(255);
    textAlign(CENTER);
    textSize(48);
    text("HUIDA DEL CERDITO", width/2, height/2 - 60);
    
    textSize(24);
    text("¡Cruza la carretera sin morir\n para llegar a la casa de tu hermano!", width/2, height/2 - 10);
    
    textSize(32);
    fill(0, 255, 0);
    text("PRESIONA ESPACIO", width/2, height/2 + 90);
    textSize(24);
    fill(255);
    text("para comenzar", width/2, height/2 + 120);
    
    // Controles
    textSize(18);
    fill(0);
    text("← → ↑ ↓ para moverte", width/2, height/2 + 160);
    textAlign(LEFT);
  }

  PantallaDerrota() {
    background(200);
    fill(255, 0, 0, 200);
    image(imgDerrota,0, 0, width, height);
    fill(255,0,0);
    textAlign(CENTER);
    textSize(32);
    text("¡GAME OVER!", width/2, height/2 - 20);
    textSize(20);
    text("Presiona R para jugar de nuevo", width/2, height/2 + 30);
    textAlign(LEFT);
  }

  PantallaVictoria() {
    fill(0, 255, 0);
    image(imgVictoria,0, 0, width, height);
    fill(0,255,0);
    textAlign(CENTER);
    textSize(32);
    text("¡VICTORIA!", width/2, height/2 - 20);
    textSize(20);
    text("Presiona R para jugar de nuevo", width/2, height/2 + 30);
    textAlign(CENTER);
    fill(0);
    text("Comisión:\nLeo Garay",60,440);
    text("Estudiantes:\nJoaquin Nehuen Galipo\nZoe Di Lorenzo", 525,422);
    
  }
}
