const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var particles=[];
var plinkos=[];
var divisions=[]
var division1,division2,division3,division4,division5,division6,division7;
var ground;
var plinko;

function setup() {
  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;

 division1=new Division(5,350,5,200);
 division2=new Division(100,350,5,200);
 division3=new Division(200,350,5,200);
 division4=new Division(300,350,5,200);
 division5=new Division(400,350,5,200);
 division6=new Division(500,350,5,200);
 division7=new Division(595,350,5,200);
 ground=new Division(5,397,1200,5);
 plinko=new Plinko()
}

function draw() {
  background("black");  
  Engine.update(engine);

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  ground.display();
}