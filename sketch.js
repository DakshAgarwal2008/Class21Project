var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(100,590,190,10);
surface1.shapeColor = "orange";
surface2 = createSprite(300,590,190,10);
surface2.shapeColor = "blue";
surface3 = createSprite(500,590,190,10);
surface3.shapeColor = "yellow";
surface4 = createSprite(700,590,190,10);
surface4.shapeColor = "green";



    //create box sprite and give velocity
box = createSprite(random(20,750),100,30,30);
box.shapeColor = "white";
box.velocityY = 5;
box.velocityX = 2;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
box.bounceOff(edges);



if(box.isTouching(surface1)&& surface1.isTouching(box)){
    box.shapeColor = "orange";
}
if(box.isTouching(surface2)&& surface2.isTouching(box)){
    box.shapeColor = "blue";
    music.play();
}
if(box.isTouching(surface3)){
    box.shapeColor = "yellow";
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();
}
if(box.isTouching(surface4)){
    box.shapeColor = rgb(0,128,0);
}


    //add condition to check if box touching surface and make it box
    drawSprites();
}
