import { Ingredient } from '../shared/ingrediant.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{

    private ingredients:Ingredient[]= [
        new Ingredient('Apple',5),
        new Ingredient('tomatoes',10)
      ];

    getIngredients(){
        return this.ingredients;
    }

    //ingredientAdded = new EventEmitter<Ingredient>();
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
    }

    concatIngredients(ingredients:Ingredient[]){
        //this.ingredients = this.ingredients.concat(ingredients);
        this.ingredients.push(...ingredients);//here we used spread operator(ECMAScript 6) which converts array into list.
        //here push operator can accept objects but if we push an array it become array of object and array.
        //that is why we used spread operator to push another array.
    }
}