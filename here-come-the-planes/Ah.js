var canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index',-10);
  background(0);
}

function draw() {
  //background(0);
  stroke(random(255),random(255),random(255));
  textFont('futura');
  text('Ah', random(windowWidth),random(windowHeight));
}

function mousePressed(){
  background(0);
}
