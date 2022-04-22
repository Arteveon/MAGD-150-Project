function setup() {
  // put setup code here
}

function draw() {
  createCanvas(400, 400);
  background(200);

  //roof
  push();
  
  strokeWeight(8);
  stroke(255);

  //Botttom of roof
  line(90, 200, 310, 200);

  //roof sides
  line(200,50, 90, 200);
  line(310, 200, 200,50);

  pop();

  //House Sqaure
  push();

  fill(50);
  rect(100, 200, 200, 380);

  pop();

  //Door
  push();

  fill(20);
  rect(120,270,90,299);

  pop();

  //windows
  push();

  // Attic Window
  ellipseMode(RADIUS);
  noFill();
  ellipse(200,140,35,35);
  ellipseMode(CENTER);
  fill(230);
  ellipse(200,140,50,50);

  //Window next to Door
  ellipseMode(RADIUS);
  fill(20);
  ellipse(255,290,36,36);
  ellipseMode(CENTER);
  fill(230);
  ellipse(255,290,54,54);

  pop();  
  
  //Knobs
  push();

  //door knob
  stroke(255);
  strokeWeight(8);
  point(195,340);

  //Window Knob
  strokeWeight(8);
  point(286,290);

  //Attic Window Knob
  strokeWeight(8);
  stroke(0);
  point(230,140);

  pop();
}