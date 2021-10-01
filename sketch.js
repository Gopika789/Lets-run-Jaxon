var path, path_img ,jake_img , jake, ground1
function preload(){
  //pre-load images
  path_img= loadImage ("path.png")
  jake= loadImage("Jake1.png", "Jake2.png", "jake4.png", "jake5.png");
}
 

function setup(){
  createCanvas(400,400);
  //create sprites here
  path= createSprite(170,90,10,10)
  path.addImage(path_img)
 path.velocityY = 4;
 path.scale= 1.2

jake_img= createSprite(270,340,10,10)
  jake_img.addImage(jake)
  jake_img.scale= 0.9
  jake_img.velocityY = -1

  ground1 = createSprite(30,200,50,400)
  ground2 = createSprite(340,200,50,400)
  ground1.collide(jake_img);
  ground2.collide(jake_img);
 
}



function draw() {
  background("black");
  if (path.y > 400) {
    path.y = height/2;

    }
   
    jake_img.x=World.mouseX
    ground1.visible=false
    ground2.visible=false
drawSprites();
}
