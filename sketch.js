var car ,wall
var speed ,height

function setup() {
  createCanvas(2000,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor=color(80,80,80)
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX=speed
}

function draw() {
  background(255,255,255); 
  
  if (wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    var def =0.5 *weight*speed*speed/22509
    if(def>180){
      car.shapeColor=color(255,0,0)
    }
    if(def<180&&def>100){
      car.shapeColor=color(230,230,0)
    }
    if(def<100){
      car.shapeColor=color(0,255,0)
    }
  }


  drawSprites();
}