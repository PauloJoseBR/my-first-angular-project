import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  ingredient : Ingredient;


  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
  }
  onAddIngredient()
  {
     this.ingredient = new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value);
     this.slService.addIngredient(this.ingredient);
  }

}
