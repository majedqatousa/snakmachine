import { Keypad } from "./Keypad";
import { MoneySlots } from "./MoneySlots";
import { SnackSlots } from "./snackSlots";

export class SnakMachine{
    moneySlot : MoneySlots; 
    snakSlot :SnackSlots;
    keypad : Keypad; 

    public  SnakMachine(moneySlot,snakSlot,keypad){
        this.moneySlot = moneySlot; 
        this.snakSlot = snakSlot ; 
        this.keypad = keypad; 
    }
}