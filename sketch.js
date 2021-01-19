const World= Matter.World
const Engine= Matter.Engine
const Bodies= Matter.Bodies
var background,backgroundImg
var engine,world
//var Hero,HeroImg

function preload(){
backgroundImg=loadImage("Img/Forest background.png");
//HeroImg=loadImage("Img/Pixel_Knight.jpg");
}

function setup() {
  createCanvas(800,300);
  engine=Engine.create();
  world=engine.world
 hero=new Hero(50,270,50,50); 
 // Hero=createSprite(50,279,50,50)
  //Hero.addImage("Hero",HeroImg);
  //Hero.scale=0.2;
}

function draw() {
  background(backgroundImg); 
  hero.display()

   //if (keyDown(UP_ARROW)){
//Hero.velocityY=-5
 //  }
//Hero.velocityY=Hero.velocityY+0.8
  drawSprites();
}
function keyPressed(){
if (keyCode===UP_ARROW){
  Matter.Body.applyForce(hero.body,hero.body.position,{
    x:50,
    y:-100
})

} 
}
