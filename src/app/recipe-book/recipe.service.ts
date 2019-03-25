import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Bacalhau', 'Esse é um bacalhau muito gostoso', 'https://www.teleculinaria.pt/wp-content/uploads/2016/09/Bacalhau-com-natas-e-delicias-do-mar-6_V2.jpg',[
            new Ingredient('Bacalhau', 1),
            new Ingredient('Leite', 2)
        ]),
        new Recipe('Salmão Defumado', 'Esse é um delicioso salmão defumado', 'https://www.gazetadopovo.com.br/blogs/panela-do-anacreon/wp-content/uploads/sites/69/import/Salmao_defumado_com_risoto_de_alho_poro.JPG',
        [
            new Ingredient('Salmão', 1),
            new Ingredient('Leite', 2)
        ])
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}