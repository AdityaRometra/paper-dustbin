
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Paper=new paper(300,200,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Paper.display();
  drawSprites();
 
}



