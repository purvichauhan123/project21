var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music=loadsound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3=createSprite(510,580,200,30);
    block3.shapeColor="red";

    block4=createSprite(800,580,360,30);
    block4.shapeColor="green";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=4;
    ball.velocityY=9;
}


function draw() {
    background(rgb(10,10,10))
   
    if(ball.x<0){
      music.stop()
        ball.velocityX=3;
    }else if(ball.x>800){
      music.stop()
        ball.velocityX=-3;
    }
   
  if(ball.isTouching(block4)){
    music.play()
    ball.shapeColor="yellow";
    ball.bounceOff(fixSprite4);
    
  }
  
  else if(ball.isTouching(block3)){
    music.stop()
   ball.shapeColor="blue";
    bounceOff(ball,block3)
   
  }
    
  else if(ball.isTouching(block2)){
    music.stop()
    ball.shapeColor="green";
    bounceOff(ball,block2)
    ball.velocityX=0;
    ball.velocityY=0;
  }
  
  else if(ball.isTouching(block1)){
    music.stop()
    ball.shapeColor="red";
    ball.bounceOff(block1)
  }

  if (ball.y<0){
    music.stop()
    ball.vlocityY=3;
  }


  
    drawSprites();
}
