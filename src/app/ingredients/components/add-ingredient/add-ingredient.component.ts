import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs';
import { Ingredient } from '../../interfaces/ingredient.interface';
import { IngredientsPageActions } from '../../store/actions';
import { AppState } from '../../store/ingredients.reducer';
import { getIngredients } from '../../store/ingredients.selectors';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss'],
})
export class AddIngredientComponent implements OnInit {
  form: FormGroup;
  isUpdating = false;
  ingredientId: number;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  buildForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: [''],
    });

    this.route.paramMap.subscribe((value: ParamMap) => {
      const id = value.get('id');
      if (id) {
        this.ingredientId = Number(id);
        this.store
          .select(getIngredients)
          .pipe(
            map((ingredients) => {
              return ingredients.filter(
                (ingredient) => ingredient.id === this.ingredientId
              );
            })
          )
          .subscribe((ingredients) => {
            this.assignForm(ingredients[0]);
            this.isUpdating = true;
          });
      }
    });
  }

  addIngredient(): void {
    this.store.dispatch(
      IngredientsPageActions.addIngredient({ ingredient: this.form.value })
    );
  }

  updateIngredient(): void {
    this.store.dispatch(
      IngredientsPageActions.updateIngredient({
        ingredient: { ...this.form.value, id: this.ingredientId },
      })
    );
  }

  assignForm(ingredient: Ingredient): void {
    this.form.get('name')?.setValue(ingredient.name);
    this.form.get('description')?.setValue(ingredient.description);
    this.form.get('image')?.setValue(ingredient.image);
  }
}
