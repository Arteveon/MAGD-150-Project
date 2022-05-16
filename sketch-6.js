
function setup() {
  createCanvas(800, 700);

}

function draw() {
  background(220);
  hat();
  head();
  eye();
  hair();
  
}

function hat(){
  fill(250,0,0);
  beginShape();
  vertex(80,20);
  vertex(600,20);
  vertex(600,80);
  vertex(780,80);
  vertex(780,150);
  vertex(60,150);
  vertex(60,60);
  vertex(80,60);
  endShape(CLOSE);
}

function head(){
  fill(255, 219, 172);
  beginShape();
  vertex(60,150);
  vertex(640,150);
  vertex(640,260);
  vertex(780,260);
  vertex(780,400);
  vertex(640,400);
  vertex(640,600);
  vertex(60,600);
  endShape(CLOSE);
  
}

function eye(){
  fill(0);
  beginShape();
  vertex(450,150);
  vertex(550,150);
  vertex(550,310);
  vertex(450,310);
  endShape(CLOSE);
}

function hair(){
  //mustache hair
  push();
  fill(0);
  beginShape();
  vertex(500,340);
  vertex(575,340);
  vertex(575,400);
  vertex(750,400);
  vertex(750,480);
  vertex(390,480);
  vertex(390,400);
  vertex(500,400);
  endShape(CLOSE);
  pop();
  
  //head hair
  push();
  
  fill(135,75,47);
  beginShape();
  vertex(60,150);
  vertex(200,150);
  vertex(200,210);
  vertex(160,210);
  vertex(160,280);
  vertex(200,280);
  vertex(200,340);
  vertex(120,340);
  vertex(120,210);
  vertex(60,210);
  endShape();
  
  //Outer Ear hair
  beginShape();
  vertex(20,210);
  vertex(60,210);
  vertex(60,340);
  vertex(120,340);
  vertex(120,400);
  vertex(20,400)
  endShape();
  
  pop();
}