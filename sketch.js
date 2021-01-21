var bob,bobrunning,castleimg,castle,bobidle,bobjump,platformimg,platform,invplatform;

function preload(){
castleimg = loadImage("running/Castle.png");
bobidle = loadAnimation("running/idle.png");
bobrunning = loadAnimation("running/run1.png","running/run2.png","running/run3.png"
,"running/run4.png","running/run5.png","running/run6.png","running/run7.png")
bobjump = loadAnimation("running/jump1.png","running/jump2.png","running/jump3.png","running/jump4.png","running/jump5.png","running/jump6.png")
platformimg = loadImage("running/platform.png");
}

function setup() {
  createCanvas(1000,500);
  bob = createSprite(400,210, 50, 50);
  bob.addAnimation("bobidle",bobidle);
  bob.addAnimation("bobrunning",bobrunning);
  bob.addAnimation("bobjumping",bobjump);
  bob.debug = true
  bob.setCollider("rectangle",0,0,50,50);
  
  
  
}

function draw() {
  background("lightBlue");  
 
  if(keyDown("right")) {

    bob.changeAnimation("bobrunning",bobrunning);
     
  }
  if(keyDown("down")) {

    bob.changeAnimation("bobidle",bobidle);
     
  }
  if(keyDown("up")) {

    bob.changeAnimation("bobjumping",bobjump);
     
  }
   if(keyDown("space")){

    bob.velocityY = -3;
    bob.changeAnimation("bobjumping",bobjump);

   }
   bob.velocityY = bob.velocityY + 0.5;
 
  spawnplatform()
  drawSprites();
}


function spawnplatform(){

if(frameCount %120===0){


platform = createSprite(1000,250)
platform.velocityX = -2;
platform.addImage(platformimg);
platform.scale = 0.3;
invplatform = createSprite(1000,245,130,3)
invplatform.velocityX = -2;
invplatform.shapeColor = ("blue");
invplatform.visible = true;
invplatform.debug = true;

if(bob.isTouching(invplatform)){

 bob.collide(invplatform);
bob.velocityY = 0
}
bob.depth = invplatform.depth;
console.log(bob.velocityY);
}



}