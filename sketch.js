var box 






function setup() {
  createCanvas(400,400);
 box = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);

  drawSprites();

  if (keyIsDown(RIGHT_ARROW)){
    box.velocityX = +1;
  }

  if (keyIsDown(LEFT_ARROW)){
    box.velocityX = -1;
  }

  if (keyIsDown(DOWN_ARROW)){
    box.velocityY = +1;
  }

  if (keyIsDown(UP_ARROW)){
    box.velocityY = -1;
  }


}




