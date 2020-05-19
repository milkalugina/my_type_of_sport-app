let img;
function preload() {
  books = loadImage('../imgs/книги.png');
  cake = loadImage('../imgs/тортик.png');
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
        image(books, mouseX, mouseY, 150, 150);
    } else {
        image(cake, mouseX, mouseY, 200, 200);
    }
}

// Изменяем размер канваса, если изменился размер окна
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
