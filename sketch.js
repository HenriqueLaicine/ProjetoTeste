//variaveis
var bola;

function setup() {
  createCanvas(400, 400);

  bola = createSprite(200,200,20,20);
  bola.velocityX = 10;
}

function draw(){
  background("white");
  
  drawSprites();
}