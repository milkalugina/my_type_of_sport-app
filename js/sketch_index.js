let img;
function preload() {
  go = loadImage('../imgs/go.png');
  stars = loadImage('../imgs/stars.png');
}

function setup() {
    // Создаем канвас, как весь браузер
    let myCanvas = createCanvas(windowWidth, windowHeight);
    // прикрепляем канвас в заранее созданный элемент
    myCanvas.parent("canvas");
    background('#FF7B7B');
}

function draw() {
    noStroke();
    rect('#FF7B7B', 0, 0, windowWidth, windowHeight);

    stroke(0);
    if (mouseIsPressed) {
        image(stars, mouseX, mouseY, 100, 300);
    } else {
        image(go, mouseX, mouseY, 150, 150);
    }
}

// Изменяем размер канваса, если изменился размер окна
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
