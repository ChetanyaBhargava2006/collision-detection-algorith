var movrect;
var fixrect;


function setup() {
 createCanvas(1200,800);
 fixrect = createSprite(200, 200, 50, 50);
 movrect = createSprite(600, 200, 50, 50);
 fixrect.shapeColor = "green";
 movrect.shapeColor = "green";

fixrect.debug = true;
movrect.debug = true;
}


function draw() {
  background(255,255,255); 
  movrect.x = World.mouseX;
  movrect.y = World.mouseY;
  
if(movrect.x - fixrect.x <= fixrect.width/2+movrect.width/2 && fixrect.x - movrect.x <= fixrect.width/2+movrect.width/2 && fixrect.y - movrect.y <= fixrect.height/2+movrect.height/2 && movrect.y - fixrect.y <= fixrect.height/2+movrect.height/2){
  movrect.shapeColor = "red";
fixrect.shapeColor = "red";
}
else{
  fixrect.shapeColor = "green";
  movrect.shapeColor = "green";
}
  drawSprites();
}