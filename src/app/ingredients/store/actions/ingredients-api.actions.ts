import { createAction, props } from '@ngrx/store';
import { Ingredient } from '../../interfaces/ingredient.interface';

export const loadIngredientsSuccess = createAction(
  '[Ingredients Api] Load Ingredients Success',
  props<{ ingredients: Ingredient[] }>()
);

export const loadIngredientsFailed = createAction(
  '[Ingredients Api] Load Ingredients Failed'
);
