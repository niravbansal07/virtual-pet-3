var dog, happyDog, database, foodS, foodStock;
var foodStock,lastFed;
var dogImg,hdimg;

function preload()
{
  dogImg = loadImage("Dog.png");
  hdimg = loadImage("happydog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
 
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.2;
  //dog.addImage(happyDog.png);
}


function draw() {  
  background(46,139,87);
 

  if(keyWentDown(UP_ARROW )){
    writeStock(foodS);
    dog.addImage(hdimg);

  }

  drawSprites();
  //add styles here
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

//Function to read values from DB 
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){ x=0; }else{ x=x-1; }

  database.ref('/').update({
    Food:x
  })
}

