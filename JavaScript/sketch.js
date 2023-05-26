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
let errorshot = 0;

//Tamanho Raquete
let hRaquete = 90;
let wRaquete = 10;

//Biblioteca
let hit = false;

//Placar
let myP = 0;
let yourP = 0;

//Sons
let trilha;
let raquetada;
let ponto;

//Função para executar os sons
function preload(){
  trilha = loadSound("sounds/trilha.mp3");
  raquetada = loadSound("sounds/raquetada.mp3");
  ponto = loadSound("sounds/ponto.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop(); //Chamando o som "trilha" e colocando-o em loop
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
    vYBall *= -1;
  }
}

function showRaquete(x, y){
  rect(x, y, wRaquete, hRaquete); //Desenhar um retângulo
}

function moveRaquete(){
  //Se a tecla estiver apertada a raquete sobe ou desce

    if (keyIsDown(UP_ARROW)){
    yRaquete -= 10
  }
    if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10
  }
}

function moveRaquete2(){
  //Mostramos a raquete o yBall e dizemos para segui-lo com uma pequena taxa de erro.
  vYRaquete2 = yBall - yRaquete2 - wRaquete / 2 - 30; 
  yRaquete2 += vYRaquete2 + errorshot;
  errorshotcalculate();
}

function errorshotcalculate(){
  if(yourP >= myP){
    errorshot += 1
    if(errorshot >= 39){
      errorshot = 40
    }
  } else{
    errorshot -= 1;
    if(errorshot <= 35){
      errorshot = 35
    }
  }
}

function colisionRaquete(){
  //Colocamos a colisão com a raquete com várias especificações
 if (xBall - raio < xRaquete + wRaquete && yBall - raio < yRaquete + hRaquete && yBall + raio > yRaquete){
    vXBall *= -1;
  }
}

function colisionGit(x, y){
  //Utilizamos de uma biblioteca externa para colocarmos o parâmetro "collideRectCircle" que diz que se a bola colidir com a raquete sua velocidade inverte

  hit = collideRectCircle(x, y, wRaquete, hRaquete, xBall, yBall, dBall);
  if(hit){
    vXBall *= -1;
    raquetada.play(); //Tocar a musica na variavel "Raquetada"
  }
}

function showplacar(){
  //Editamos o placar para ficar mais bonito
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(myP, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(yourP, 470, 26);
}

function pontos(){
  //Dizemos que se a bola passar das raquetes um ponto será adicionado no placar.
  if(xBall > 590){
    myP += 1;
    ponto.play(); //Tocar a musica na variavel "Ponto"
    xBall = 300
    yBall = 200
  }
  if(xBall < 10){
    yourP += 1
    ponto.play() //Tocar a musica na variavel "Ponto"
    xBall = 300
    yBall = 200
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