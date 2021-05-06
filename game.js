class Games{
    constructor(){ }
 getState(){
var gsRef = database.ref("gameState");
gsRef.on("value" , function readData(data){
    gameState = data.val()
 })
    }
update(state){
database.ref("/").update({
    gameState : state
})
   }
 
  async start(){
     if(gameState === 0){
         form = new Form()
         form.display()         

         player = new Player();
         var pcRef = await database.ref("player_counter").once("value")
        // pcRef.once("value")

         if (pcRef.exists()){
            player_counter = pcRef.val()
            player.getCount();
         }
         car1 = createSprite(150, 400);
         car2 = createSprite(350, 400);
         car3 = createSprite(550, 400);
         car4 = createSprite(750, 400);

        cars = [car1 , car2 , car3 , car4]
        
     }

     }
 play(){
form.hideform();
textSize(40);
text("Game Starts..." , 200 , 300)
player.getPlayerinfo();
if (allplayers !== undefined){
   // var displaypos = 150
var index = 0 ; 
var x = 0 ,y ;


    for (var p in allplayers){
        index =index + 1; 
        x += 200;
        y = displayHeight - allplayers[p].distance;
          //  displaypos += 15
           // textSize(10)
           // text(allplayers[p].name + ":" + allpalyers[p].distance , 50 , displaypos);
cars[index - 1].x = x
cars[index - 1].y = 200;
        if (index === player.index){
         cars[index-1].shapeColor = "red";
        camera.position.x = displayWidth/2 ;
        camera.position.y = 200;
        }
        
    }
    
}

if (keyIsDown(UP_ARROW)&& player.index !== null){
player.distance +=  10;
player.updatePlayer();
}
drawSprites();

 }

}
