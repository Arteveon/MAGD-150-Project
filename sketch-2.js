function setup() {
  // put setup code here
}

function draw() {
  //colors
  let c = color(0,135,36);
  let a = color('#00004D');
  let b = color('orange');
  let d = color('#d60aff');
  let e = color('#ff0800');
  let f = color(255,79,0);
  let g = color('#002D62');
  createCanvas(500,500);
  background(a);

  //Planet
  push();
  //green rings
  fill(c);
  ellipse(50,400,600,600);

  //planet
  fill(b);
  ellipse(50,400,550,550);

  //details
  fill(g);
  ellipse(60,350,50,50);
  ellipse(190,199,30,30);
  ellipse(100,430,40,50);
  ellipse(20,260,60,56);
  ellipse(230,360,70,23);
  ellipse(100,300,50,69);
  ellipse(135,230,20,28);
  ellipse(280,310,50,39);
  ellipse(189,500,80,47);
  ellipse(20,500,50,49);
  ellipse(30,160,60,69);

  pop();

  //Emission Nebula
  push();
  strokeWeight(1);
  fill(d);
  bezier(477,496,31,128,344,296,44,15);
  pop();

  //stars
  push();
  strokeWeight(10);
  stroke(255);
  point(30,30);
  point(350,300);
  point(80,90);
  point(360,30);
  point(450,325);
  point(445,495);
  point(150,50);

  point(430,260);
  point(260,80);
  point(385,458);
  strokeWeight(1);
  line(360,420,400,480);
  line(400,435,370,480);
  
  line(240,60,275,95);
  line(275,50,250,100);
  line(430,240,430,290);
  line(410,260,450,260);
  

  pop();

  //space ship
  push();
  //"hull" of Space ship
  fill(e);
  triangle(400,50,350,100,450,100);

  //body of space ship
  fill(100);
  quad(350,100,450,100,450,180,350,180);

  //thruster
  fill(f);
  triangle(400,180,350,200,450,200);
  
  //window 
  ellipseMode(RADIUS);
  fill(0);
  ellipse(400,140,30,30);
  ellipseMode(CENTER);
  fill(230);
  ellipse(400,140,50,50);
  pop();




}