var  ground,groundsprite
var  circle 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
	leftrect= new Box(460,610,20,100);
	centrerect= new Box(560,650,180,20);
	rightrect= new Box(660,620,20,100);
    circle = new paper (120,156,37);

}


function draw() {
  rectMode(CENTER);
  background(0);
  rightrect.display();
  centrerect.display();
  leftrect.display();
  circle.display();
  drawSprites();
 
}


function keyPressed() {
	if (keyCode ===UP_ARROW) {

	   Matter.Body.applyForce(circle.body,circle,{x:09,y:-12})
	}
		 }
