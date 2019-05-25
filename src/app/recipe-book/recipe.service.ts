import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable() 
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Bacalhau', 'Esse é um bacalhau muito gostoso', 'https://www.teleculinaria.pt/wp-content/uploads/2016/09/Bacalhau-com-natas-e-delicias-do-mar-6_V2.jpg',[
            new Ingredient('Bacalhau', 1),
            new Ingredient('Leite', 2)
        ]),
        new Recipe('Salmão Defumado', 'Esse é um delicioso salmão defumado', 'https://i.ytimg.com/vi/mFyVU0qkLeU/maxresdefault.jpg',
        [
            new Ingredient('Salmão', 1),
            new Ingredient('Leite', 2)
        ])
      ];

    constructor(private slService : ShoppingListService)
    {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients : Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}