import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingrediant.model';
import { ShoppingListService } from '../shopping-list-service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  nameInput:string;
  amountInput:number;

  //@Output() addIngredient = new EventEmitter<{name:string, amount:string}>()
  // @ViewChild('nameInput',{static:false})  nameInputRef: ElementRef;
  // @ViewChild('amountInput',{static:false}) amountInputRef: ElementRef;
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  // onAddition(nameInput:HTMLInputElement, amountInput:HTMLInputElement){
  //   this.addIngredient.emit({name:nameInput.value, amount: amountInput.value})
  // }
  //we can implement the addition operation to push data to class ingredient as qouted in comments.
  //now, we use @viewChild to do the same.

  // onAddItem(){
  //   const ingName = this.nameInputRef.nativeElement.value;
  //   const ingAmount = this.amountInputRef.nativeElement.value;
  //   const newIngredient = new Ingredient(ingName,ingAmount);
  //   //this.shoppingListService.ingredientAdded.emit(newIngredient);
  //   this.shoppingListService.addIngredient(newIngredient);
  // }

  onSubmit() {
    const ingName = this.nameInput;
    const ingAmount = this.amountInput;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
