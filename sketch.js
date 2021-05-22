const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var boy,boyImg;
var backgroundImg;
var snow;
var snowfall = [];
var snowSound;

function preload() {
  backgroundImg = loadImage("snow2.jpg");
  boyImg = loadImage("pngwing.com.png");

  snowSound = loadSound("snowSound.mp3");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  boy = createSprite(400, height-80, 50, 50);
  boy.addImage(boyImg);
  boy.scale = 0.3;

  snowSound.play();
  
}

function draw() {
  background(backgroundImg);  

  Engine.update(engine);



  if(frameCount%20 === 0) {
     snowfall.push(snow = new Snow(random(100,700), 20, 50));
  }
  // console.log(snow.position.x);
  
  for(var i = 0; i < snowfall.length; i++) {
    snowfall[i].display();
  }

  drawSprites();
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    boy.x = boy.x -10;
  }
  if(keyCode === RIGHT_ARROW) {
    boy.x = boy.x + 10;
  }
}