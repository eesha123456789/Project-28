const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var boyImage
var boy,stoneObj, tree, launcher
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11
function preload()
{
	
	boyImage=loadImage('boy.png')

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=createSprite(200,590)
	boy.scale=0.09
	boy.addImage("boy",boyImage)

	ground=new Ground(400,650,800,10)
	tree=new Tree(600,460,400,400)
	mango1=new Mango(480,400,60)
	mango2=new Mango(600,440,55)
	mango3=new Mango(700,350,50)
	mango4=new Mango(550,300,45)
	mango5=new Mango(750,420,47)
	mango6=new Mango(610,295,57)
	mango7=new Mango(625,370,52)
	mango8=new Mango(660,290,65)
	mango9=new Mango(560,360,63)
	mango10=new Mango(540,410,48)
	mango11=new Mango(690,410,42)
	stoneObj=new Stone(150,540,20)
	launcher=new Launcher(stoneObj.body,{x:150,y:540})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250,250,250);
  detectollision(stoneObj,mango1)
  detectollision(stoneObj,mango2)
  detectollision(stoneObj,mango3)
  detectollision(stoneObj,mango4)
  detectollision(stoneObj,mango5)
  detectollision(stoneObj,mango6)
  detectollision(stoneObj,mango7)
  detectollision(stoneObj,mango8)
  detectollision(stoneObj,mango8)
  detectollision(stoneObj,mango10)
  detectollision(stoneObj,mango11)
  

  ground.display();

  tree.display()
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  launcher.display();
  stoneObj.display();
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	launcher.fly();
}
function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.radius+lstone.radius){
		Matter.Body.setStatic(lmango.body,false)
	}
}
function keyPressed(){ 
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:150,y:540})
		launcher.attach(stoneObj.body)
	}
}




