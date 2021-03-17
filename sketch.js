let bgcolor;
let button, slider1, slider2, t, nameP;

function setup() {
  createCanvas(200, 200);
  bgcolor = color(200);
  button = createButton("Change BG");
  button.mousePressed(changeColor);
  createP("Change the circle");
  slider1 = createSlider(10, 100, 47);
  slider2 = createSlider(10, 100, 47);
  createP("Type your name");
  t = createInput();
  nameP = createP();
}

function changeColor() {
  bgcolor = color(random(255));
}


function draw() {
  background(bgcolor);
  fill(255, 0, 175);
  ellipse(100, 100, slider1.value(), slider2.value());
  text(t.value(), 0, 20);
  nameP.html('you typed: ' + t.value())
}