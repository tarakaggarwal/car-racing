class game{
    constructor(){

    }
getState(){

    var gameStateRef=database.ref('gameState')
    gameStateRef.on("value",function(data){
        gameState=data.val();
    })
} 
   update(state){
database.ref('/').update({
    gameState:state
})
 
   }
   start(){
       if (gameState==0){
    form1=new form();
    form1.display();
    player=new Player();
    player.getCount();   
    }

   }
}