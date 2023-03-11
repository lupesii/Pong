//Váriaveis Carro1
xCar = 1400;
yCar = 60;
vCar = 4;

//Váriaveis Carro2
xCar2 = 1400;
yCar2 = 155;
vCar2 = 6;

//Váriaveis Carro3
xCar3 = 1400;
yCar3= 245;
vCar3 = 8;

function showCarro(){
    image(carro1, xCar, yCar, 70, 60)
    image(carro2, xCar2, yCar2, 70, 60)
    image(carro3, xCar3, yCar3, 70, 60)
  }
  
  function moveCarro(){
    xCar -= vCar;
    xCar2 -= vCar2;
    xCar3 -= vCar3;
  }

  function loopCar(){
    if(xCar < -70){
        xCar = 1400;
    }
    if(xCar2 < -70){
        xCar2 = 1400;
    }
    if(xCar3 < -70){
        xCar3 = 1400;
    }
  }