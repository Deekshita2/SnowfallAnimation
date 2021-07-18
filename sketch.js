var bg, santa, santaImg;
var snow1;
var snow1, snow2, snow3, snow4;




function preload(){

bg = loadImage("snow1.jpg");
santaImg = loadImage("santa.png");




}





function setup() {
  createCanvas(800,400);
 
 santa = createSprite(100, 300, 50, 50);
 santa.addImage(santaImg);
 santa.scale = 0.3
  
  


}



function draw() {
  background(bg);  


   /* if(frameCount % 60 === 0){

      particles.push(new particles(random(width/2-30,width/2+30)),10,10);
      score++;
    }*/


  drawSprites();
}