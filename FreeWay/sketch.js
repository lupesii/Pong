//Imagens
let estrada;
let ator1;
let carro1;

function preload(){
  estrada = loadImage("images/estrada.png");
  ator1 = loadImage("images/ator-1.png");
  carro1 = loadImage("images/carro-1.png");

}

function setup() {
  createCanvas(1400, 640);
}

function draw() {
  background(estrada);
  showSprite();
}

function showSprite(){
  image(ator1 ,350, 590, 40, 40);
  image(carro1, 1400, 60, 70, 60)
}