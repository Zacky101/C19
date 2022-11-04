var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);

  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300,400);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.3;

  invisibleBlockGroup = createGroup()
}

function draw() {
  
  if(gameState === "play"){

  if(tower.y > 400){
      tower.y = 300
    }

  ghost.velocityY +=0.5

  if(keyDown("UP_ARROW")){
    ghost.velocityY -=1.5
  }

  if(keyDown("LEFT_ARROW")){
    ghost.x -= 5
  }

  if(keyDown("RIGHT_ARROW")){
    ghost.x += 5
  }

    spawnobstacles()
    drawSprites()
  }
  if(ghost.isTouching(invisibleBlockGroup)){
    gameState = "end";
    background("black")
    text("GAME OVER!",250,200)
    text.size = 50
  }
}


function spawnobstacles() {

  if(frameCount%250===0){
   x =random(50,550);
   door = createSprite(x,0);
   door.addImage(doorImg);
   door.velocityY = 2;

   climber = createSprite(door.x,50);
   climber.addImage(climberImg);
   climber.velocityY = 2;

   invisibleBlock = createSprite(door.x,60,100,5);
   invisibleBlock.velocityY = 2;
   invisibleBlock.visible = false;

   invisibleBlockGroup.add(invisibleBlock);

   ghost.depth = door.depth;
   ghost.depth = ghost.depth+1;
  }
}
