//SG stands for slider group
let sG = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 20;

function setup() {
  createCanvas(400, 400, WEBGL);

  for (var i = 0; i < 6; i++) {
    if (i === 2) {
      sG[i] = createSlider(10, 400, 200);
    } else {
      sG[i] = createSlider(-400, 400, 0);
    }
    h = map(i, 0, 6, 5, 85);
    sG[i].position(10, height + h);
    sG[i].style('width', '80px');
  }
}

function draw() {
  background(0);
  
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);


  //Buildings
  push();
  fill(0, 250, 0);
  box(70, 180, 70);
  pop();
  
  push();
  translate(90,0,-20);
  fill(0 , 0, 250);
  cylinder(40, 190);
  pop();
  
  push();
  translate(0,0,-120);
  fill(250 , 0, 0);
  cylinder(40, 190);
  pop();
  
  push();
  translate(-90,0,-20);
  fill(250, 0, 0);
  box(70, 180, 70);
  pop();

  push();
  translate(-90, 0,-110);
  fill(0, 250, 0);
  box(70, 180, 70);
  pop();


  push();
  translate(90,0,-110);
  fill(0, 250, 0);
  box(70, 180, 70);
  pop();

  //camera
  X = sG[0].value();
  Y = sG[1].value();
  Z = sG[2].value();
  centerX = sG[3].value();
  centerY = sG[4].value();
  centerZ = sG[5].value();
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0)
}
