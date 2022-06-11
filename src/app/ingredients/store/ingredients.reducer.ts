import { createReducer, on } from '@ngrx/store';
import * as State from 'src/app/store/app.state';
import { Ingredient } from '../interfaces/ingredient.interface';
import { IngredientsApiActions } from './actions';

export interface AppState extends State.AppState {
  ingredients: IngredientsState;
}

export interface IngredientsState {
  ingredients: Ingredient[];
}

const initialState: IngredientsState = {
  ingredients: [],
};

export const ingredientsReducer = createReducer<IngredientsState>(
  initialState,
  on(
    IngredientsApiActions.loadIngredientsSuccess,
    (state, action): IngredientsState => {
      return { ...state, ingredients: action.ingredients };
    }
  )
);
