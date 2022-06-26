var gameState = PLAY;
var PLAY = 1;
var END = 0;
var score = 0;
var gameForm, gameFormImg;
var playbutton, howToPlayButton, homeButton;
var playbuttonImg, howToPlayButtonImg, homeButtonImg;
var ron, ronImg, ron2Img;
var coin, coinImg;
var obstacle1Img, obstacle2Img, obstacle3Img;
var bg, bgImg;
var story, backbutton, backbuttonImg, storyImg;
var invisibleGroundTop, invisibleGroundBottom;

function preload() {
  bgImg = loadImage("bg.jpg");
  ronImg = loadAnimation("ron1.png", "ron2.png", "ron3.png", "ron4.png", "ron5.png", "ron6.png", );
  ron2Img = loadAnimation("ron4.png");
  gameFormImg = loadImage("game form.jpg");
  playbuttonImg = loadImage("play button.png");
  howToPlayButtonImg = loadImage("howtoplay.png");
  storyImg = loadImage("story.jpg");
  backbuttonImg = loadImage("back.png");
}

function setup() {
  createCanvas(600,400);


  bg = createSprite(500, 200, 20, 20);
  bg.addImage("background", bgImg);
  bg.scale = 1;
  bg.velocityX = -5;

  ron = createSprite(200, 230, 20, 20);
  ron.addAnimation("running", ronImg);
  ron.addAnimation("ron", ron2Img);
  ron.scale = 0.4;

  invisibleGroundBottom = createSprite(300, 290, 600, 20);
  invisibleGroundBottom.visible = false;

  invisibleGroundTop = createSprite(300, 100, 600, 20);
  invisibleGroundTop.visible = false;

  gameForm = createSprite(300, 200, 20, 20);
  gameForm.addImage("form", gameFormImg);
  gameForm.visible = true;

  playbutton = createSprite(150, 300, 20, 20);
  playbutton.addImage("play", playbuttonImg);
  playbutton.scale = 0.3;
  playbutton.visible = true;
  playbutton.debug = false;

  howToPlayButton = createSprite(155, 200, 20, 20);
  howToPlayButton.addImage("howtoplay", howToPlayButtonImg);
  howToPlayButton.scale = 0.5;
  howToPlayButton.visible = true;
  howToPlayButton.debug = false;
}


function draw() {
  background("black");

if (gameState === PLAY) {

  ron.collide(invisibleGroundBottom);
  ron.collide(invisibleGroundTop);

  ron.velocityY = ron.velocityY + 0.8;
  ron.debug = false;

  ron.setCollider("rectangle",0,0,ron.width,ron.height);


  if (keyDown("space")) {
    ron.velocityY = -12;
    ron.changeAnimation("ron", ron2Img);
  }

  if (keyDown("enter")) {
    ron.changeAnimation("running", ronImg)
  }

  if (bg.x < 0) {
    bg.x = width;
  }
}
  else if (gameState === END) {

  }

  howToPlayButton.setCollider("rectangle",-14,5,howToPlayButton.width/1.5,howToPlayButton.height/5);
  playbutton.setCollider("rectangle",-5,0,playbutton.width/1.2,playbutton.height/3.1);
  
  if (mousePressedOver(howToPlayButton)) {
     story = createSprite(300, 200, 20, 20);
     story.addImage("story", storyImg);
     story.scale = 0.47;
     story.visible = true;

     backbutton = createSprite(500, 20, 20, 20);
     backbutton.addImage("back", backbuttonImg);
     backbutton.scale = 0.2;
     backbutton.debug = true;
     backbutton.visible = true; 
     backbutton.setCollider("rectangle",-5,0,backbutton.width/0.7,backbutton.height/1.3);
  }

  if (mousePressedOver(playbutton)) {
    gameState = PLAY;
    gameForm.visible = false;
    playbutton.visible = false;
    howToPlayButton.visible = false;
  }

  if (keyDown("backspace")) {
    story.visible = false;
    backbutton.visible = false
  }

  drawSprites();
}