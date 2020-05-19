function preload() {
  stars = loadImage('../imgs/звездочки.png');
  go = loadImage('../imgs/гоу.png');
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
        image(go, mouseX, mouseY, 150, 150);
    } else {
        image(stars, mouseX, mouseY, 350, 450);
    }
}

// Изменяем размер канваса, если изменился размер окна
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
