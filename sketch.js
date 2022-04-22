var e,f;

var i,j;

//Purple Circle
var x = 778;
var y = 476;
var w = 35;
var h = 35;

//Orange square 
var a = 728;
var b = 462;
var c = 30;
var d = 30;

let powerOn = false;
let changeChannel = false; 

function setup() {
  createCanvas(800,500);
  frameRate(120);
  //slow circle
  e=65;
  f=276;
  espeed = 3;
  
  //fast square
  i=65
  j=height/2
  ispeed = 10
}


function draw() {
  background(0);
  
  

  push();
  //sky
  fill(135, 206, 235);
  quad(40,40,760,40,760,460,40,460);
  
  //grass
  fill('#7EC850');
  quad(40,310, 760,310, 760,460, 40,460);
  
  powerButton();
  channelButton();
  
  //Words CH = Channel Button and Power = Power button
  fill(0);
  text("ON",769,480);
  text("CH",733,480);
  pop();

  //Buttons
  if (changeChannel){
   powerOn = false;
       
   fill('#ffaa28');
    strokeWeight(2);
    rect(i,j, 60, 60);
    i+= ispeed;
    if(i-25 <= 20 || i+25 >720){
      ispeed *= -1;
     }else{
       changeChannel = true;
     }
      
     }
     
       
  if (powerOn){
   changeChannel = false;

    fill('#7d14f3');
    strokeWeight(2);
    ellipse(e,f, 70, 70);
    e+= espeed;
    if(e-25 <= 40 || e+25 >760){
      espeed *= -1;
    }else{
      powerOn = true;
    }
    
  }
 

}

function powerButton(){
  fill('#00ab66');
  ellipse(x, y, w, h);
 }

function channelButton(){
   fill('#0096FF');
   strokeWeight(2);
   rect(a, b, c, d);
}


function mousePressed(){
  if(dist(mouseX, mouseY, x,y)<w/2){
    powerOn= !powerOn;
  }
    if(mouseX > a && mouseX < a+c && mouseY > b && mouseY<b+d){
    changeChannel= !changeChannel;
  }
}
