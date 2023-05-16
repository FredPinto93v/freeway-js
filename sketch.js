
function setup() {
  createCanvas(700, 400);
  somTrilha.loop();
}

function draw() {
  background(estrada);
  mostraAtor();
  mostraCarro();
  moveCarro();
  moveAtor();
  carrosPassamNovamente();
  verifColisao();
  exibePontos();
  marcaPonto();
}






























