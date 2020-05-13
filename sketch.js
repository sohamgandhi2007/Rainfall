var bubbles=[];

function setup() {
  createCanvas(800,400);
  bubbles[0]= new Bubble(200,200,40);
  bubbles[1]= new Bubble(400,200,40);
  bubbles[2]= new Bubble(600,200,40); 
  bubbles[4]= new Bubble(500,200,40);
  bubbles[5]= new Bubble(700,200,40);
  bubbles[6]= new Bubble(800,200,40);
  bubbles[7]= new Bubble(100,200,40);
  bubbles[8]= new Bubble(50,200,40);
  bubbles[9]= new Bubble(150,200,40);
  bubbles[10]= new Bubble(150,200,40);
}

function draw() {
  background(0);
  bubbles[0].move();
  bubbles[0].show();

  bubbles[1].move();
  bubbles[1].show();
  
  bubbles[2].move();
  bubbles[2].show();

  bubbles[4].main();
  bubbles[4].show();

  bubbles[5].main();
  bubbles[5].show();

  bubbles[6].main();
  bubbles[6].show();

  bubbles[7].main();
  bubbles[7].show();

  bubbles[8].main();
  bubbles[8].show();
  
  bubbles[9].main();
  bubbles[9].show();

  bubbles[10].main();
  bubbles[10].show();

  bubbles[11].move();
  bubbles[11].show();
}
class Bubble{
constructor(x,y,r){
  this.x =x;
  this.y= y;
  this.r=r;
}


move(){
  this.x=this.x+random (-5,5);
  this.y=this.y+random(-5,5);
}

show() {
  stroke ("green");
  strokeWeight(4);
  noFill ();
ellipse(this.x,this.y,this.r*2);
}
}
