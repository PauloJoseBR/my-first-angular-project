import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  ingredient : Ingredient;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit() {
  }
  onAddIngredient()
  {
     this.ingredient = new Ingredient();
     this.ingredient.name = this.amountInput.nativeElement.value;
     this.ingredient.amount = this.amountInput.nativeElement.value;

     this.ingredientAdded.emit(this.ingredient);
  }

}
