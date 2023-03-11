function setup() {
  createCanvas(1400, 640);
}

function draw() {
  background(estrada);
  showAtor();
  verifyColision();
  colision();
  showCarro();
  moveAtor();
  moveCarro();
  loopCar();
}

