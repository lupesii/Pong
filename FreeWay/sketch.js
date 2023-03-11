//Imagens
let estrada;
let ator1;
let carro1;

//Ator
yAtor = 590;

//Carro
xCar = 1400;

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
  moveAtor();
  moveCarro();
}

function showSprite(){
  image(ator1 ,350, yAtor, 40, 40);
  image(carro1, xCar, 60, 70, 60)
}

function moveAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 5
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 5
  }
}

function moveCarro(){
  xCar -= 4;
}