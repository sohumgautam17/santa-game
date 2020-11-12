const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backimg, santa;
var engine, world;
var snow;

function preload(){
backimg = loadImage("background.jpg");
}
function setup() {
 createCanvas(900, 600);
 engine = Engine.create();
 world = engine.world;

 santa = new Santa(100, 150, 50, 50 );

 if(World.frameCount % 30 === 0){
    for (var j = 75; j <=width; j=j+50) 
    {
     snow.push(new Snow(j,75));
    }
}


}

  


function draw() {
  background(backimg);
  
  for (var i = 0; i < snow; i++){
    
    snow[i].display();
  }
  
    

  
 //santa.display();

  
}

