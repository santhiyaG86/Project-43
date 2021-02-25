
function setup() {
  createCanvas(800,400);

  hr = hour();
  mn = minute();
  sc = second();

}

function draw() {
  background('black');  

  angleMode(DEGREES);
  
  stroke(255,0,0);
  strokeWeight(7);
  line(250,99,180,100);
  scAngle = map(sc, 0, 60, 0, 360);

  stroke("green");
  strokeWeight(7);
  line(300,109,250,100);
  mnAngle = map(sc, 0, 60, 0, 360);

  stroke("blue");
  strokeWeight(7);
  line(250,99,210,90);
  hrAngle = map(sc, 0, 60, 0, 360);

  translate(0,0)

  drawSprites();
}