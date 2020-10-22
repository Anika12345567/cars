var gameState=0;
var database, position;
var playerCount,form,player,game;
var allplayers
var distance=0;
var car1img,car2img,car3img,car4img
var trackimg
var car1,car2,car3,car4, cars
function preload() {
    car1img=loadImage("images/car1.png")
    car2img=loadImage("images/car2.png")
    car3img=loadImage("images/car3.png")
    car4img=loadImage("images/car4.png")
    trackimg=loadImage("images/track.png")
}
function setup(){
    createCanvas(displayWidth-20, displayHeight-30);
    database=firebase.database()
game=new Game()
game.getstate()
game.start()
   
}

function draw(){
if(playerCount===4){
    game.update(1)    
}
if(gameState===1){
    clear()
    game.play()
}
}
   


