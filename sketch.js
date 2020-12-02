const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper, dustbinbottom, dustbinright, dustbinleft, dustbinImage;

function preload() {
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800, 680, 1600, 10);
	paper = new Paper(100, 200, 5, 5);
	dustbinleft = new Dustbin(1315,625,20,100);
	dustbinright = new Dustbin(1485,625,20,100);
	dustbinbottom = new Dustbin(1400,665,150,20);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("lightgray");

  ground.display();
  dustbinbottom.display();
  dustbinleft.display();
  dustbinright.display();
  image(dustbinImage, 1400, 600, 210, 150);
  paper.display();
  
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:165,y:-165});
	}
}