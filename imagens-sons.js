var estrada;
var ator;
var carro1;
var carro2;
var carro3;
var carro4;
var carro5;
var carro6;
var carro7;
var carro8;

var somTrilha;
var somColisao;
var somPontos;




function preload(){
  estrada = loadImage("imagens/estrada.png");
  ator = loadImage("imagens/ator.png");
  carro1 = loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3 = loadImage("imagens/carro-3.png");
  carro4 = loadImage("imagens/carro-4.png");
  carro5 = loadImage("imagens/carro-5.png");
  carro6 = loadImage("imagens/carro-6.png");
  carro7 = loadImage("imagens/carro-7.png");
  carro8 = loadImage("imagens/carro-8.png");
  quantCarros = [carro1, carro2, carro3, carro4, carro5, carro6, carro7, carro8];
  
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPontos = loadSound("sons/pontos.wav");
}