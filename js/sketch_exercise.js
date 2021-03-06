function preload() {
  diskler = loadImage('../imgs/дискошар.png');
  disk = loadImage('../imgs/диск.png');
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
        image(diskler, mouseX, mouseY, 100, 100);
    } else {
        image(disk, mouseX, mouseY, 100, 100);
    }
}

// Изменяем размер канваса, если изменился размер окна
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
