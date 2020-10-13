var PLAY=1;
var END=0;
var gameState=PLAY
score=0
var gameover,gameoverimg
var alien1,enemyGroup;
var fruit1,fruit2,fruit3,fruit4,fruitGroup;
var knife ,sword1;
var knifeSwooshSound
var gameoverendSound

function preload(){
  alien1=loadAnimation("alien1.png","alien2.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png")
  fruit4=loadImage("fruit4.png");
  sword1=loadImage("sword.png");
gameoverimg=loadImage("gameover.png");
  gameoverendSound=loadSound("gameover.mp3");
  knifeSwooshSound=loadSound("knifeSwooshSound.mp3")
}
function setup(){
  createCanvas(600,600)
knife=createSprite(40,200,20,20);
  knife.addImage(sword1);
  knife.scale=0.7;
  
   fruitGroup=new Group();
  enemyGroup=new Group();
}

 
 
function draw(){
  
  background("lightblue")
  text("score: "+score,520,70);
  
  if(gameState === PLAY){
  
  if(knife.isTouching(fruitGroup)){
  fruitGroup.destroyEach();
    knifeSwooshSound.play()

  score=score+2
  }
if(knife.isTouching(fruitGroup)){
  fruitGroup.destroyEach();
 score=score+3
  
}
if(knife.isTouching(fruitGroup)){
  fruitGroup.destroy();
score=score+4
}
if(knife.isTouching(fruitGroup)){
  fruitGroup.destroyEach();

  score=score+5
}
    knife.x=mouseX
  knife.y=mouseY
  fruits();
Enemy();
    
    if(enemyGroup.isTouching(knife)){
      gameoverendSound.play()
      gameState=END
    }
  }
   if (gameState === END) {
    knife.addImage(gameoverimg)
 enemyGroup.destroyEach()
  fruitGroup.destroyEach()
  
}


drawSprites()
}
  
 

function fruits(){
  if(World.frameCount%80===0){
    position = Math.round(random(1,2));
    fruit=createSprite(500,200,20,20);
    console.log(position)
     //using random variable change the position of fruit, to make it more challenging
    
    if(position==1)
    {
    fruit.x=400;
    fruit.velocityX=-(7+(score/4));
    }
    else
    {
      if(position==2){
      fruit.x=0;
      
  //Increase the velocity of fruit after score 4 or 10
      fruit.velocityX= (7+(score/4));
      }
    }
    
    fruit.scale=0.2;
     //fruit.debug=true;
     r=Math.round(random(1,4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }
    
    fruit.y=Math.round(random(50,340));
   
    
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
  }
}

    function Enemy(){
      
      if(frameCount%200===0){
        
      var monster=createSprite(600,200,20,20);
        monster.addAnimation("moving",alien1);
        
        monster.y=Math.round (random(50,500));
        monster.velocityX=-(8+score/10);
        
        monster.lifetime=200;
          if(score===10){
        monster.velocityX=-(4+score/100)}
        enemyGroup.add(monster);
      }
    }
    
    
    
    
    


