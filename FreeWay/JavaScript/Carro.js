let xCars = [1400, 1400, 1400, 1400, 1400, 1400, 1550, 1550, 1550]; //Lista de possiveis valores
let yCars = [60, 155, 245, 335, 425, 515, 245, 425, 155];
let vCars = [4, 6, 8, 7, 5, 4.5, 7.6, 4.7, 5.5];
let wCars = 70;
let hCars = 60;

function showCarro(){
  for(let i = 0; i < imgCarros.length; i++){ //Linha de repetição onde i = indice, irá aumentar até o numero de imagens carros que existem
    image(imgCarros[i], xCars[i], yCars[i], 70, 60)
  }
}
  
function moveCarro(){
  for(let i = 0; i < imgCarros.length; i++){
    xCars[i] -= vCars[i];
  }
}

function loopCar(){
  for(let i = 0; i < imgCarros.length; i++){
    if(verifyCar(xCars[i])){ //Recebe o valor, caso seja verdadeiro executa o comando
      xCars[i] = 1400;
    }
  }
}

function verifyCar(xCars){ //Retorna o resultado se o carro está ou não fora da tela
  return xCars < -70
}