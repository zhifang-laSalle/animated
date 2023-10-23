let x = 100;
let ellipseSize = 50;
let yPos = 0;
let sunSize = 0;
let armRotation = 0;
let armSpeed = -2;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(66, 135, 245);
  
  noFill();
  
  //sun
  fill(255, 238, 0);
  ellipse(100,yPos+175,sunSize+60);
  yPos = yPos - 1;
  sunSize = sunSize + 0.25;
  
  if (yPos <= -200)
    {
      yPos = 0;
    }
  
  if (sunSize >= 100)
    {
      sunSize = 0;
    }
  
  //body
  fill(40,50,60, 100);
  ellipse(x,100,x, 100);
  
  
  push();
  
  translate(50,100);
  rotate(radians(armRotation));
  ellipse(0,-50,ellipseSize-25,ellipseSize+30);
  
  armRotation = armRotation - armSpeed;
  
  if (armRotation > 45)
    {
      armSpeed = -armSpeed;
    }
  
  if (armRotation < -45)
    {
      armSpeed = - armSpeed;
    }
  
  console.log(armRotation);
  
  pop();
  
  
  
  //head
  fill(100,30,150);
  stroke(200,70,200,150);
  strokeWeight(10);
  rect(75,30,50,25,10);
  
  //bell button
  fill(10,100,200);
  stroke(50,30,100);
  strokeWeight(3);
  triangle(95,100,105,100,100,90);
  
  //BCKG
  fill(3, 252, 40),
  noStroke();
  rect(0,160,200,100);
  
  noStroke();

}