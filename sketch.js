const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base1,base2,sidebase1,sidebase2;
var bridge;
var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  base1 = new Base(200,680,600,20);
  sidebase1 = new Base(10,305,20,windowHeight);
  sidebase2 = new Base(490,305,20,windowHeight);
  bridge = new Bridge(12,{x:5,y:100});
  Matter.Composite.add(bridge.body,sidebase1);
  jointLink = new Link(bridge,sidebase1);

  for (var i = 0; i<= 8; i++){
    var x = random(width/2-200, width / 2+300);
       var y = random(-10,140);
       var stone = new Stone(x,y,80,80);
       stones.push(stone);
}

function draw() {
  background(51);
  Engine.update(engine);
  base1.show();
  sidebase1.show();
  sidebase2.show();
  bridge.show();
  stone.display();
  stones.display();
  }
}
