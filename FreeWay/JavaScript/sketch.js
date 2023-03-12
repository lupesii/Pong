function setup() {
  createCanvas(1400, 640);
}

function draw() {
  background(estrada);
  showAtor();
  verifyColision();
  showCarro();
  moveAtor();
  moveCarro();
  loopCar();
}

