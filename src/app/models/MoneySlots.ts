export class MoneySlots{
    coinSlot:number ;  
    cardSlot:boolean;
    notesSlot:number; 
    currency:string; 

    public MoneySlots(coinSlot, cardSlot,notesSlot , currency ){
        this.coinSlot = coinSlot;
        this.cardSlot = cardSlot;
        this.notesSlot = notesSlot; 
        this.currency = currency; 
    }

    public acceptedCoins(coins:number) : boolean{
        if(coins == 10 || coins == 20 || coins == 50 ){
            return true ;
        }else{
            return false ; 
        }
    }
    public acceptedNotes(notes:number) : boolean{
        if(notes == 20 || notes == 50  ){
            return true ;
        }else{
            return false ; 
        }
    }
}