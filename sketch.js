function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(0);
  stroke(0);
}

function draw() {
 let c = color('hsl(160, 100%, 50%)');
  noStroke();
  
  fill(c);
  c = color('hsla(160, 100%, 50%)');

  background(31, 32, 41);
  circle(mouseX, mouseY, 60);
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}