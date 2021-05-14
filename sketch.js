var grid = 50;
var width = 1366;
var carGroup1,logGroup1,grassGroup;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var grass,road,gron;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  grassGroup=new Group();
  
  
  

}
function draw() {
  background("skyblue");
 
  for(var i=0;i<6;i++){
    grass=createSprite(683,height-50-(i*400),width,grassHeight)
   grass.shapeColor="green";
   grassGroup.add(grass)
   
    if(i%2===0){
     road=createSprite(683,height-150-(i*400)-grassHeight,width,300)
     road.shapeColor="black";
     
    }
    if(i%2===1&&i<4){
      gron=createSprite(683,height-150-(i*400)-grassHeight,width,300)
      gron.shapeColor="blue";
    }
  }
  for(var i=0;i<40;i++){
    car=new Car(2);
    carGroup1.add(car.spt)
  }
  for(var i=0;i<40;i++){
    log=new Log(8);
    logGroup1.add(log.spt)
  }
  for(i=1;i<logGroup1.length;i++){
    if(logGroup1[i]<0){
      logGroup1[i].x=width;
    }
  }
  for(i=1;i<carGroup1.length;i++){
    if(carGroup1[i]<0){
      carGroup1[i].x=width/2;
    }
  }
  drawSprites();
}

 
  


