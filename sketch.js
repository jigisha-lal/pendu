
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5,ground;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1  = new Bob(200,450,40)
	bob2  = new Bob(240,450,40)
	bob3  = new Bob(280,450,40)
	bob4  = new Bob(320,450,40)
	bob5  = new Bob(360,450,40)
	ground = new Ground(300,100,width,20);
	rope1= new Rope(bob1.body,{x:200,y:90})
	rope2= new Rope(bob2.body,{x:240,y:90})
	rope3= new Rope(bob3.body,{x:280,y:90})
	rope4= new Rope(bob4.body,{x:320,y:90})
	rope5= new Rope(bob5.body,{x:360,y:90})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,227,230);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



