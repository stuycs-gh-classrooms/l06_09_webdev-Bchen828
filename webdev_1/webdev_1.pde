int x = int(random(150,250));
int y = int(random(150,250));
int xVelocity = int(random(-4,4));
int yVelocity = int(random(-4,4));
int xlen = 60;
int ylen = 30;

void setup() {
  size(600,400);
  frameRate(60);
}

void draw() {
  background(255,255,255);
  x += xVelocity;
  y += yVelocity;
  fill(255,255,0);
  rect(x,y,xlen,ylen);
  if ((x+xlen)>=width) {
    int xk = int(random(-4,4));
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
