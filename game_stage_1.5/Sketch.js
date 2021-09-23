//var PLAY = 1;
//var END = 0;
var gameState = 0;
var canvas;
var girl1,girlImg1,girl2,girlImg2;
var boy1,boy1Img,boy1,boy2Img;

var bushGroup, bushImage;
var treeFroup,treeImage;
var rockGroup,rockImage;

var coinGroup,coinImage;
var starGroup,starImage;

var ground,backgroundImg;
//var score=0;
var startImg;
//var gameOver, restart;

function preload(){
    girl1Img=loadImage("sprites/girl2.png");
    girl2Img=loadImage("sprites/girl.jpg");
    boyImg=loadImage("sprites/boy2.png");
    boy2Img=loadImage("sprites/boy.png");
    backgroundImg=loadImage("sprites/bg1.jpg");
    bushImage=loadImage("sprites/bush.png");
    treeImage=loadImage("sprites/obstacle2.jpg");
    rockImage=loadImage("sprites/obstacle.png");
    starImage=loadImage("sprites/star.jpg");
    coinImage=loadImage("sprites/coin.jpg");
    startImg=loadImage("sprites/bg3.jpg");
}
function setup(){
    canvas = createCanvas(1200,700)
    ground=createSprite(500,400);
    ground.visible=false;
    ground.addImage(backgroundImg);
    ground.velocityY=-1;
    ground.scale=1;
    //ground.y=ground.height/2;
    girl=createSprite(400,400);
    girl.addImage(girl1Img);
    girl.scale=1.5;
    boy=createSprite(800,400);
    boy.addImage(boyImg);
    
}
function draw(){
    background(startImg);
     
   //text("Score: "+ score, 500,50);

    if (ground.y<250){
        ground.y = ground.height/2;
      }
    drawSprites()
}
/*function spwanTrees(){
    if (frameCount % 60 === 0) {
        var tree = createSprite(600,120,40,10);
        tree.y = Math.round(random(80,120));
        tree.addImage(treeImage);
        tree.scale = 0.5;
        tree.velocityX = -3;
        
         //assign lifetime to the variable
        tree.lifetime = 200;
        
        //adjust the depth
        tree.depth = trex.depth;
        boy2.depth = boy2.depth + 1;
        
        //add each cloud to the group
        treesGroup.add(tree);
      }
}*/
/*function spwanBush(){

}
function spwanRock(){

}
function spwanCoin(){

}
function spwanStar(){
    
}*/