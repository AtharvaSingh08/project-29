const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world,ball,rope,ground;

function setup() {
  createCanvas(800,600);

  engine = Engine.create()
  world = engine.world
  ground = new Ground(400,590,800,20);
  ball = new Ball(200,430,40);
  rope = new Rope(ball.body,{x:200,y:130});
  block1 = new Block(400,540,80,100);
  block2 = new Block(400,490,80,100);
  block3 = new Block(420,540,80,100);
  block4 = new Block(420,490,80,100);
}

function draw() {
  background("gray");  
Engine.update(engine);
ground.display();
rope.display();
ball.display();
block1.display();
block2.display();
block3.display();
block4.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}