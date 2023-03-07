// Posição da Bola
let xBall = 300;
let yBall = 200;

//Diametro da bola
let dBall = 15;
let raio = dBall / 2;

//Velocidade da Bola
let vXBall = 8;
let vYBall = 8;

//Posição Raquete
let xRaquete = 5;
let yRaquete = 150;

//Posição Raquete 2
let xRaquete2 = 585;
let yRaquete2 = 150;

//Movimento Raquete2
let vYRaquete2;

//Tamanho Raquete
let hRaquete = 90;
let wRaquete = 10;

//Biblioteca
let hit = false

//Placar
let myP = 0;
let yourP = 0;

function setup() {
  createCanvas(600, 400);
}

// Função para criar uma forma
function draw() {
  background(0);
  //Refatoração é o uso de funções para melhor identificarmos cada trecho de código.
  
  //Bola
  showBall();
  moveBall();
  colisionBall();
  //Raquete
  showRaquete(xRaquete, yRaquete);
  showRaquete(xRaquete2, yRaquete2);
  moveRaquete();
  moveRaquete2();
  //colisionRaquete();
  colisionGit(xRaquete, yRaquete);
  colisionGit(xRaquete2, yRaquete2);
  //Placar
  showplacar();
  pontos();
  //Jogabilidade
  fimPong();
  ReinicioPong();
}

function showBall() {
  circle(xBall, yBall, dBall); //Criar um circulo
}

function moveBall() {
  xBall += vXBall; //Fazer a bola se mover horizontalmente, pois o x sera somado a cada momento
  yBall += vYBall; //Fazer a bola se mover verticalmente, pois o y sera somado a cada momento
}

function colisionBall() {
  //Se o x da bola ultrapassar a largura da tela o valor da velociade multiplica por -1, o "+ raio" serve par que a borda da bolinha bata na borda da tela, já o os ponts x e y são calculados apartir do centro da bola
  
  if(xBall + raio > width || xBall - raio < 0){ 
    vXBall *= -1;
  }
  
  if(yBall + raio > height || yBall -raio < 0){
    vYBall *= -1
  }
}

function showRaquete(x, y){
  rect(x, y, wRaquete, hRaquete); //Desenhar um retângulo
}

function moveRaquete(){
    if (keyIsDown(UP_ARROW)){ //Se a tecla estiver apertada a raquete sobe ou desce
    yRaquete -= 10;
  }
    if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function moveRaquete2(){
  vYRaquete2 = yBall - yRaquete2 - wRaquete / 2 - 30;
  yRaquete2 += vYRaquete2
}

function colisionRaquete(){
 if (xBall - raio < xRaquete + wRaquete && yBall - raio < yRaquete + hRaquete && yBall + raio > yRaquete){
    vXBall *= -1
  }
}

function colisionGit(x, y){
  //Utilizamos de uma biblioteca externa para colocarmos o parâmetro "collideRectCircle" que diz que se a bola colidir com a raquete sua velocidade inverte

  hit = collideRectCircle(x, y, wRaquete, hRaquete, xBall, yBall, dBall);
  if(hit){
    vXBall *= -1
  }
}

function showplacar(){
  fill(255);
  text(myP, 278, 26);
  text(yourP, 321, 26);
}

function pontos(){
  if(xBall > 590){
    myP += 1
  }
  if(xBall < 10){
    yourP += 1
  }
}

function fimPong(){
  if(myP >= 10 || yourP >= 10){
    myP = 0;
    yourP = 0;
    xBall = 300;
    yBall = 200;
    vXBall = 0;
    vYBall = 0;
    xRaquete = 5;
    yRaquete = 150;
    xRaquete2 = 585;
    yRaquete2 = 150;
  }
}

function ReinicioPong(){
  if( keyIsDown(LEFT_ARROW)){
    vXBall = 8;
    vYBall = 8;
  }
}