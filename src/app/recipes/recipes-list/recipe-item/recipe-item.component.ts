import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{Recipe} from '../../recipe.model'
import { RecipeService } from '../../recipes-service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

 // @Input() recipe:{name:string,description:string,imagePath:string}; "this will also work but"
    @Input() recipe:Recipe;
    @Input() index:number;
    ////@Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  // onSelected(){
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
