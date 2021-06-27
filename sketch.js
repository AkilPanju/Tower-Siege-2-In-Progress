
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var polygon;
var pImage;

//var boyImage = Image(50,50);

function preload()
{
	 pImage = loadImage("polygon.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.
    ground  =  new Ground(400, 690, 800,10);
    //the bigger stand in the middle
    stand = new Ground(400,610,400,10);
    //the smaller stand on the right
    stand2 = new Ground(600,300,300,10);

    //the first level of blocks
    box1 = new Box(260,595,40,40);
    box2 = new Box(300,595,40,40);
    box3 = new Box(340,595,40,40);
    box4 = new Box(380,595,40,40);
    box5 = new Box(420,595,40,40);
    box6 = new Box(460,595,40,40);
    box7 = new Box(500,595,40,40);
    box8 = new Box(540,595,40,40);

    //the second level of blocks
    box11 = new Box(230,550,20,20);
    box12 = new Box(250,550,20,20);
    box13 = new Box(270,550,20,20);
    box14 = new Box(290,550,20,20);
    box15 = new Box(310,550,20,20);
    box16 = new Box(330,550,20,20);
    box17 = new Box(350,550,20,20);
    box18 = new Box(370,550,20,20);

    //the third level of blocks
    box19 = new Box(250,510,20,20);
    box20 = new Box(270,510,20,20);
    box21 = new Box(290,510,20,20);
    box22 = new Box(310,510,20,20);
    box23 = new Box(330,510,20,20);
    box24 = new Box(350,510,20,20);
    
    //the fourth level of blocks
    box25 = new Box(270,470,20,20);
    box26 = new Box(290,470,20,20);
    box27 = new Box(310,470,20,20);
    box28 = new Box(330,470,20,20);

    polygon = Matter.Bodies.rectangle(10,400,6,15);
    
    slingshot = new SlingShot(polygon,{x:10,y:400});


    boxes = 
    
    

	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  stand.display();
  stand2.display();
  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  slingshot.display();

  image(pImage,polygon.position.x,polygon.position.y,60,60);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

