import { createAction, props } from '@ngrx/store';
import { Ingredient } from '../../interfaces/ingredient.interface';

export const loadIngredients = createAction(
  '[Ingredients Page] Load Ingredients'
);

export const addIngredient = createAction(
  '[Ingredients Page] Add Ingredient',
  props<{ ingredient: Ingredient }>()
);

export const updateIngredient = createAction(
  '[Ingredients Page] Update Ingredient',
  props<{ ingredient: Ingredient }>()
);
