import { createAction, props } from '@ngrx/store';
import { Ingredient } from '../../interfaces/ingredient.interface';

export const loadIngredientsSuccess = createAction(
  '[Ingredients Api] Load Ingredients Success',
  props<{ ingredients: Ingredient[] }>()
);

export const loadIngredientsFailed = createAction(
  '[Ingredients Api] Load Ingredients Failed'
);

export const addIngredientsSuccess = createAction(
  '[Ingredients Api] Add Ingredients Success',
  props<{ ingredient: Ingredient }>()
);

export const addIngredientsFailed = createAction(
  '[Ingredients Api] Add Ingredients Failed'
);
