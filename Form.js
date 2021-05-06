class Form{
    constructor(){
        this.input = createInput("Name")
        this.button = createButton("Enter")
        this.greeting = createElement("h3")
    }
 display(){
 var title = createElement("h2")
title.html("Car Racing Registration Form")
title.position(displayWidth/2 - 80 , 10);


this.input.position(displayWidth/2 + 80 , displayHeight/2 );

 
this.button.position(displayWidth/2 + 150 , displayHeight/2 + 40);

this.button.mousePressed(
    ()=>{
       this.input.hide()
       this.button.hide()

  player.name = this.input.value()

    player_counter+= 1;
    player.index = player_counter;
   player.update(player_counter);
   player.updatePlayer();

 
this.greeting.html("Hello " + player.name )
this.greeting.position(displayWidth/2 + 80 , displayHeight/2)
    }
)
    }

hideform(){
    this.input.hide()
    this.button.hide(
    this.greeting.hide()
    )
}
}