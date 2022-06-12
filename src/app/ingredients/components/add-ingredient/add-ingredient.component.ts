import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IngredientsService } from '../../services/ingredients.service';
import { IngredientsPageActions } from '../../store/actions';
import { AppState } from '../../store/ingredients.reducer';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss'],
})
export class AddIngredientComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ingredientsService: IngredientsService,
    private store: Store<AppState>
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
  }

  addIngredient(): void {
    this.store.dispatch(
      IngredientsPageActions.addIngredient({ ingredient: this.form.value })
    );
  }
}
