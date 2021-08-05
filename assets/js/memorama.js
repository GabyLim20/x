class Memorama{
    constructor(){
        this.canPlay= false;
        this.card1=null;
        this.card2=null;/*tarjeta cerrada*/
        this.availableImg=[1,2,3,4];
        this.orderForThisRound= []; /*Orden img, random arreglo*/
        /*this.card=document.querrySelectorAll(".board-game figure"); objeto html*/
        this.cards = Array.from( document.querySelectorAll(".board-game figure") ); /*cualquier objeto item en arreglo*/

        this.startGame();

        console.log(this.orderForThisRound);
    }
    startGame() {
        this.foundPairs = 0;
        this.setNewOrder(); /*orden de tarjeta*/
        this.setImagesInCards(); /*orden de tarjeta*/
        this.openCards();
    }
    setNewOrder() {
        /* this.orderForThisRound = this.availableImages.concat(this.availableImages); concatenar pegar arreglo ERROR*/
       this.orderForThisRound = this.availableImages + this.availableImages; 
       this.orderForThisRound.sort( () => Math.random() - 0.5 );
      
    }
}   

document.addEventListener("DOMContentLoaded", () => {

    new Memorama();

});