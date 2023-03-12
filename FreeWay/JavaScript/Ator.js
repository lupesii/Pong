//Localização Ator
xAtor = 350;
yAtor = 590;
hit = false; //Váriavel de colisão false, já que não há colisão no inicio do jogo

function showAtor(){
    image(ator1, xAtor, yAtor, 40, 40);
  }

function moveAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 5
    }
    
    if (keyIsDown(DOWN_ARROW)){
      yAtor += 5
    }
  }

function verifyColision(){
  //Criado uma repetição para analisar o x e y de todos os carros, caso um deles encoste em nosso ator, ele voltará a posição inicial
  for(let i = 0; i < imgCarros.length; i++){
    hit = collideRectCircle(xCars[i], yCars[i], wCars, hCars, xAtor, yAtor, 40);
    if(hit){
      colision();
    }
  }
}

function colision(){
  yAtor = 590;
}