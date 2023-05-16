//Ator
var xAtor = 200;
var yAtor = 370;
var dAtor = 15;
var rAtor = dAtor / 2;
var colisao = false;
var pontos = 0;

function mostraAtor(){
  image(ator, xAtor, yAtor, 25, 25);
}

function moveAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 1.5;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeMover()){
      yAtor += 1.5;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    //if (podeMover()){
      xAtor -= 1.5;
    //}
  }
  if (keyIsDown(RIGHT_ARROW)){
   // if (podeMover()){
      xAtor += 1.5;
    //}
  }
}

function verifColisao(){
  for (var i = 0; i < quantCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], wCarros[i], hCarros[i], xAtor, yAtor, dAtor)
    if (colisao){
      retornaPosicaoInicial();
      somColisao.play();
      if(pontos > 0){
        pontos -= 1;
      }
    }
  }
}

function retornaPosicaoInicial(){
  xAtor = 200;
  yAtor = 370;
}

function exibePontos(){
  stroke(0);
  textAlign(CENTER);
  textSize(25);
  fill(color(255,215,0)).
  text(pontos, width / 2, 27);
}

function marcaPonto(){
  if (yAtor < 10){
    pontos += 1;
    somPontos.play();
    retornaPosicaoInicial();
  }
}

function podeMover(){
  return yAtor < 370;
}
