import { Snack } from "./snack";

export class SnackSlots{
    rows : number ; 
    columns : Snack[] = [] ; 
    columnNumber : number; 

    public SnackSlots (rows , columns , columnNumber){
        this.rows = rows ; 
        this.columns = columns; 
        this.columnNumber = columnNumber;
    }
    public addToColumns(snack : Snack){
        this.columns.push(snack);
    }

    public deleteFromColumns(){
        this.columns.pop();
    }
    public getItems() {
        return this.columns;
    }
}   