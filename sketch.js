
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1,groundSprite;
var dustbin,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	var canvas= createCanvas(1600, 700);

	groundSprite=createSprite(width/2,height-20, width,10);
	groundSprite.shapeColor=color("yellow");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1 = new Paper(100,200,30,);

	dustbin = new Dustbin(1100,height-90,20,100);
	dustbin2 = new Dustbin(1190,height-30,170,20);
	dustbin3 = new Dustbin(1280,height-90,20,100);

	

	//create Ground
	ground1= new Ground(width/2, height, width, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  

  
  ground1.display();
  paper1.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  
  
  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:210,y:-210});
	}
}



