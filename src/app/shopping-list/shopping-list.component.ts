import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingrediant.model';
import {ShoppingListService} from './shopping-list-service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  this.ingredients = this.shoppingListService.getIngredients();
  // this.shoppingListService.ingredientAdded.subscribe(
  //   (ingredient:Ingredient)=>{
  //     this.ingredients.push(ingredient);
  //   }
  // )
  }

  // ingredientAdded(eventData:{name:string, amount:number}){
  //   this.ingredients.push(eventData);
  // }

  onEditItem(){
    
  }

 

}
