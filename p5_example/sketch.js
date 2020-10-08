let buttonX, buttonY, buttonWidth, buttonHeight;
let shyButtonX, shyButtonY, shyWidth;
let backgroundColor;
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  textAlign(CENTER);
  
  buttonX = 100;
  buttonY = 100;
  buttonWidth = 50;
  buttonHeight = 30;
  
  shyButtonX = 200;
  shyButtonY = 200;
  shyWidth = 90;
  
  backgroundColor = color(220);
}

function draw() {
  background(backgroundColor);
  
  fill(0,144,200);
  rect(buttonX, buttonY, buttonWidth, buttonHeight);
  fill(0);
  text("click me", buttonX, buttonY);
  
  fill(0,55,0);
  rect(shyButtonX, shyButtonY, shyWidth, buttonHeight);
  fill(255);
  text("try and click me", shyButtonX, shyButtonY);
  
  if(mouseX > shyButtonX - shyWidth/2 &&
    mouseX < shyButtonX + shyWidth/2 &&
    mouseY > shyButtonY - buttonHeight/2 &&
    mouseY < shyButtonY + buttonHeight/2){
    console.log('no pls, i shy');
    shyButtonX = random(width);
    shyButtonY = random(height);
  }
}

function mousePressed(){
  if(mouseX > buttonX - buttonWidth/2 &&
    mouseX < buttonX + buttonWidth/2 &&
    mouseY > buttonY - buttonHeight/2 &&
    mouseY < buttonY + buttonHeight/2){
    buttonX = random(width);
    buttonY = random(height);
    backgroundColor = color(random(255), random(255), random(255));
  }
}