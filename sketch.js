const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var cannon;
var angle=15;

var balls = [];
var background_image;

var tower;
function preload(){

  background_image = loadImage("./assets/background.gif");
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  //creating tower objects
  tower = new Tower(150,350,160,310);
  cannon = new Cannon(180,110,130,100,angle);
  cannon_ball = new CannonBall(cannon.x,cannon.y);

  angleMode(DEGREES);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw()
{
  
  background(51);
  Engine.update(engine);

  image(background_image,0,0,width,height);
  
  for(var i = 0; i < balls.lenght; i++){
    showCannon_Ball(balls[i],i);
  }
  cannon.display();
  tower.display();
  
};

function keyReleased(){
  if(keyCode === DOWN_ARROW){
    balls[balls.lenght -1].shoot()
  }
};

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    var cannon_ball = new CannonBall(cannon.x,cannon.y);
    balls.push(cannon_ball);
  }
};

function showCannon_Ball(ball,index){
  ball.display();
};
