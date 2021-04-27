import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, ReactiveFormsModule } from "@angular/forms";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MoneySlots } from 'app/models/MoneySlots';
import { Snack } from 'app/models/snack';
import { SnackSlots } from 'app/models/snackSlots';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arr_snacks: Snack[][];
  public snackSlot = new SnackSlots();
  public moneySlot = new MoneySlots();
  array: Snack[][];
  public snacks: Snack[] = [];
  snackSlotArray: SnackSlots[][] = [][5];

  constructor(
    private modalService: NgbModal,

  ) {
    this.arr_snacks = [
      [{ name: "snickers ", price: 11, photo: "https://pngimg.com/uploads/snickers/snickers_PNG13929.png" }, { name: "Lays", price: 11, photo: "https://purepng.com/public/uploads/large/purepng.com-lays-potato-chipsfood-potato-tasty-pack-lays-chips-taste-product-snaks-9415246340529nj3f.png" }, { name: "Reeses", price: 11, photo: "https://redtri.com/wp-content/uploads/2020/03/chips-ahoy-resses.png" }, { name: "Doritos", price: 11, photo: "https://c0.klipartz.com/pngpicture/838/334/gratis-png-pack-de-queso-doritos-nacho-queso-doritos-nacho.png" }, { name: "Reeses", price: 11, photo: "https://redtri.com/wp-content/uploads/2020/03/chips-ahoy-resses.png" }],
      [{ name: "Reeses", price: 11, photo: "https://redtri.com/wp-content/uploads/2020/03/chips-ahoy-resses.png" }, { name: "Doritos", price: 11, photo: "https://c0.klipartz.com/pngpicture/838/334/gratis-png-pack-de-queso-doritos-nacho-queso-doritos-nacho.png" }, { name: "Lays", price: 11, photo: "https://purepng.com/public/uploads/large/purepng.com-lays-potato-chipsfood-potato-tasty-pack-lays-chips-taste-product-snaks-9415246340529nj3f.png" }, { name: "m&m", price: 11, photo: "" }, { name: "Lays", price: 11, photo: "" }],
      [{ name: "Doritos", price: 11, photo: "https://c0.klipartz.com/pngpicture/838/334/gratis-png-pack-de-queso-doritos-nacho-queso-doritos-nacho.png" }, { name: "Lays", price: 11, photo: "" }, { name: "Reeses", price: 11, photo: "https://redtri.com/wp-content/uploads/2020/03/chips-ahoy-resses.png" }, { name: "Doritos", price: 11, photo: "" }, { name: "Reeses", price: 11, photo: "" }],
      [{ name: "Reeses", price: 11, photo: "https://redtri.com/wp-content/uploads/2020/03/chips-ahoy-resses.png" }, { name: "Doritos", price: 11, photo: "" }, { name: "Lays", price: 11, photo: "https://purepng.com/public/uploads/large/purepng.com-lays-potato-chipsfood-potato-tasty-pack-lays-chips-taste-product-snaks-9415246340529nj3f.png" }, { name: "m&m", price: 11, photo: "" }, { name: "Lays", price: 11, photo: "" }],
      [{ name: "Doritos", price: 11, photo: "https://c0.klipartz.com/pngpicture/838/334/gratis-png-pack-de-queso-doritos-nacho-queso-doritos-nacho.png" }, { name: "Lays", price: 11, photo: "" }, { name: "Reeses", price: 11, photo: "https://redtri.com/wp-content/uploads/2020/03/chips-ahoy-resses.png" }, { name: "Doritos", price: 11, photo: "" }, { name: "Reeses", price: 11, photo: "https://redtri.com/wp-content/uploads/2020/03/chips-ahoy-resses.png" }],
    ];


    this.snacks.push(
      {
        name: 'Doritos',
        price: 1.5,
        photo: '10'
      },
      {
        name: 'Lays',
        price: 3,
        photo: '10'
      },
      {
        name: 'Reeses',
        price: 1,
        photo: '10'
      },
      {
        name: 'm&m',
        price: 1.2,
        photo: '10'
      },
      {
        name: 'Snickers',
        price: 1.2,
        photo: '10'
      },
    );

  }

  ngOnInit(): void {

  }
  selectedSnack: Snack;
  closeResult: string;
  coinCharge: boolean = true;
  notesCharge: boolean = false;
  cardCharge: boolean = false;
  snackNum = 0;
  currency = '$'
  notAcceptedMsg = '';
  mainMsg = '';
  amount;
  theRest;
  redyToPurchase = false;
  moneycharged: number = 0;
  cents: number = 0;
  notes: number = 0;
  card: number = 0;
  totalCharged: number = 0;
  mainText = '';

  pressKey(key: string) {
    if (this.mainText == null) {

    } else {
      if (this.mainText.length == 2) {
        return;
      }
      this.mainText += key;
    }

  }
  allClear() {
    this.mainText = '';
  }
  getSnack() {

    this.snackNum = +this.mainText;
    console.log(this.snackNum);

    var number = this.snackNum,
      output = [],
      sNumber = number.toString();

    for (var i = 0, len = sNumber.length; i < len; i += 1) {
      output.push(+sNumber.charAt(i));
    }

    if (output[0] > 4 || output[1] > 4) {
      this.mainMsg = "This snak  is not avalabil , try another one ";
      this.selectedSnack = null;
      console.log("error !!!!!!! ");
    } else {
      this.selectedSnack = this.arr_snacks[output[0]][output[1]];
      if (this.moneycharged >= this.selectedSnack.price) {
        this.redyToPurchase = true;
      }
      console.log(output);
      console.log(this.arr_snacks[output[0]][output[1]]);
    }

    alert(`Your choice is ${this.selectedSnack.name} , with price ${this.selectedSnack.price} , you can charge now `)
  }
  open(content, type, modalDimension) {
    this.coinCharge = true;
    this.notesCharge = false;
    this.cardCharge = false;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  // purchase process , after select a snake and charge amount 
  purchase() {
    this.amount = this.moneycharged - this.selectedSnack.price;
    this.theRest = this.amount;
    this.moneycharged = this.theRest;
    this.redyToPurchase = false;
    this.mainMsg = "Done , you have the Snack now "
  }
  chargeCoin() {

    if (this.coinCharge == true) {
      if (this.moneySlot.acceptedCoins(this.moneySlot.coinSlot)) {
        this.cents = this.moneySlot.coinSlot;
        this.totalCharged += this.cents / 100;
        this.notAcceptedMsg = '';
      } else {
        this.notAcceptedMsg = `This denominatio is not accepted`;
      }
    } else if (this.notesCharge == true) {
      if (this.moneySlot.acceptedNotes(this.moneySlot.notesSlot)) {
        this.notes = this.moneySlot.notesSlot;
        this.totalCharged += this.notes;
        this.notAcceptedMsg = '';
      } else {
        this.notAcceptedMsg = `This denominatio is not accepted`;
      }

    } else if (this.cardCharge == true) {

    }

  }
  // clear all  charges 
  clearCharge() {
    this.cents = 0;
    this.notes = 0;
    this.totalCharged = 0;
  }
  // on press charge btn on model 
  charge(totalCharged) {
    this.moneycharged = totalCharged;
    this.modalService.dismissAll();
    if (this.selectedSnack.price != null) {
      if (this.moneycharged >= this.selectedSnack.price) {
        this.redyToPurchase = true;
      } else {
        this.mainMsg = "Your charged is not enough";
      }
    }
  }
// on charge amount 'Radio button handling '
  onItemChange(value) {
    if (value == 'coin') {
      this.coinCharge = true;
      this.notesCharge = false;
      this.cardCharge = false;
    } else if (value == 'notes') {
      this.coinCharge = false;
      this.notesCharge = true;
      this.cardCharge = false;

    } else if (value == 'card') {
      this.coinCharge = false;
      this.notesCharge = false;
      this.cardCharge = true;
    } else {
      this.coinCharge = false;
      this.notesCharge = false;
      this.cardCharge = false;
    }


    console.log(" Value is : ", value);
  }
}
