val x;
val y;
val xVelocity ;
val yVelocity;
val xlen;
val ylen;

function setup() {
  createCanvas(600,400);
  frameRate(60);
  x = int(random(150,250));
  y = int(random(150,250));
  xVelocity = int(random(-4,4));
  yVelocity = int(random(-4,4));
  xlen = 60;
  ylen = 30;
}

function draw() {
  background(255,255,255);
  x += xVelocity;
  y += yVelocity;
  fill(255,255,0);
  rect(x,y,xlen,ylen);
  if ((x+xlen)>=width) {
    val xk = int(random(-4,4));
    xVelocity = xk * -1;
  } 
  if (x<=0) {
    xVelocity *= -1;
  }
  if (y<=0) {
    yVelocity *= -1;
  }
  if ((y+ylen)>=height) {
    int yk = int(random(-4,4));
    yVelocity = yk * -1;

  }
}
