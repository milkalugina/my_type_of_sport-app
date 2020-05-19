let dotX = 0
let dotY = 0

let col = {
  r: 0,
  g: 0,
  b: 0
}

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
  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);

  if (dotX > 300) {
    col.g =0
  }

  noStroke();
  fill(col.r, col.g, col.b, 150);
  image(img,dotX, dotY, 40, 40);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
