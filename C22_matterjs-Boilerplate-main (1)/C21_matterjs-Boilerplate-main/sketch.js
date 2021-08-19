const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


let engine;
let world;
var ball,rope,ball2,rope2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var options = {
    restitution : 0.5,
    frictionAir : 0.05
  }
  ball =  Bodies.circle(200,150,10,options);
  World.add(world,ball);

  ball2 =  Bodies.circle(200,150,10,options);
  World.add(world,ball2);

  var objects = {
    pointA : {x : 200, y : 10},
    bodyB : ball,
    length : 100,
    stiffness : 0.5
  }
  rope = Matter.Constraint.create(objects)
  World.add(world,rope);

  var options = {
    bodyA : ball,
    bodyB : ball2,
    length:100 ,
    stiffness : 0.5
  }

 rope2 = Matter.Constraint.create(options);
 World.add(world,rope2)

  console.log(rope);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);
  ellipse(ball2.position.x,ball2.position.y,10,10);

  stroke("white");
  strokeWeight(6);
  line(rope.pointA.x,rope.pointA.y,rope.bodyB.position.x,rope.bodyB.position.y)
  line(rope2.bodyA.position.x,rope2.bodyA.position.y,rope2.bodyB.position.x,rope2.bodyB.position.y)

}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x: 0 ,y:0},{x: 0.05, y: 0});
  }

}