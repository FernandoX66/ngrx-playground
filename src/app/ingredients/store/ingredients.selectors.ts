import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IngredientsState } from './ingredients.reducer';

const getIngredientsFeature =
  createFeatureSelector<IngredientsState>('ingredients');

export const getIngredients = createSelector(
  getIngredientsFeature,
  (state) => state.ingredients
);
