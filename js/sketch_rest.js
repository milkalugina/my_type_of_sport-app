let dotX = 0
let dotY = 0

let col = {}

function preload() {
  img = loadImage('../imgs/цветок.png');
}

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  // прикрепляем канвас в заранее созданный элемент
  myCanvas.parent("canvas");
  background('#FF7B7B');
}

function draw() {
  dotX= random(0, width);
  dotY = random(0, height);

  if (dotX > 300) {
    col.g =0
  }

  noStroke();
  image(img,dotX, dotY, 100, 100);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
