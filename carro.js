//Código dos carros
var xCarros = [701, 1100, 701, 701, -1, -200, -1, -1];
var yCarros = [41, 98, 150, 98, 211, 210, 263, 318];
var wCarros = [70, 70, 75, 130, 70, 70, 75, 130];
var hCarros = [40, 40, 40, 43, 40, 40, 40, 43];
var vCarros = [5, 3, 3.3, 3, 4.5, 4.5, 3, 2.5];


function mostraCarro(){
  for (var i = 0; i < quantCarros.length; i++){
   image(quantCarros[i], xCarros[i], yCarros[i], wCarros[i], hCarros[i]);
  }
}

function moveCarro(){
  for (var i = 0; i < 4; i++){
    xCarros[i] -= vCarros[i];
  }
  for (var i = 4; i < quantCarros.length; i++){
    xCarros[i] += vCarros[i];
  }
}

function carrosPassamNovamente(){
  for (var i = 0; i < 4; i++){
    if (saiuTodoDaTelaE(xCarros[i])){
      xCarros[i] = 750;
    }
  }
  for (var i = 4; i < quantCarros.length; i++){
    if (saiuTodoDaTelaD(xCarros[i])){
      xCarros[i] = - 130;
    } 
  }
}  

function saiuTodoDaTelaE(xCarros){
  return xCarros < - 130;
}

function saiuTodoDaTelaD(xCarros){
  return xCarros > 750;
}