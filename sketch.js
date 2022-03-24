
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

let engine;
let world;
var ground;
var ball;
function setup()
{
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var groundoptions={
 isStatic:true
}
ground=Bodies.rectangle(200,385,400,10,groundoptions);
World.add(world,ground);
var balloptions={
  restitution:1.0
}
ball=Bodies.circle(200,10,30,balloptions);
World.add(world,ball);
}

function draw() 
{
  background(51);
 Engine.update(engine);
 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,10);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,30,30);
}

