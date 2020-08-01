import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list-service';
import { Ingredient } from 'src/app/shared/ingrediant.model';
import { RecipeService } from '../recipes-service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

//@Input() recipe:Recipe
recipe:Recipe
  id:number;
 

  constructor(private shoppingListService:ShoppingListService,
              private recipeService : RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeDetail(this.id);
      }
    );
    //this.recipe = this.recipeService.displayRecipeDetail(this.id);
  }

  onEditRecipe(){
    this.router.navigate(['edit'] , {relativeTo : this.route}); //this was also working but good way is
    //this.router.navigate(['../', this.id , 'edit'], {relativeTo : this.route})
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  // onAddToShoppingList(listOfIngredient: HTMLElement){
  //   listOfIngredient.click()
  // }

  // addIngredientToSL(){
  //   this.shoppingListService.concatIngredients(this.recipe.ingredients);
  // }

  

}
