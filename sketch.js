var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obstacle = createSprite(1000,200, 100,100);
  obstacle.shapeColor = "red";
  obstacle.velocityX=-3;
    car = createSprite(200,200,100,100);
  car.shapeColor = "yellow";
  car.velocityX = 2;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car,obstacle)){
    car.shapeColor = "white";
    obstacle.shapeColor = "white";
  }
  else{
    car.shapeColor = "yellow";
    obstacle.shapeColor = "red";
  }
bounceOff(car,obstacle);



  drawSprites();
}

