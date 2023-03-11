//Localização Ator
yAtor = 590;

function showAtor(){
    image(ator1 ,350, yAtor, 40, 40);
  }

function moveAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 5
    }
    
    if (keyIsDown(DOWN_ARROW)){
      yAtor += 5
    }
  }