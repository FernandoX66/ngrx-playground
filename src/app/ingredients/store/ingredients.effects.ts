import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import { IngredientsService } from '../services/ingredients.service';
import { IngredientsPageActions } from './actions';
import { IngredientsApiActions } from './actions';
import { AppState } from './ingredients.reducer';

@Injectable()
export class IngredientsEffects {
  constructor(
    private actions$: Actions,
    private ingredientsService: IngredientsService,
    private store: Store<AppState>
  ) {}

  loadIngredients$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(IngredientsPageActions.loadIngredients),
      mergeMap(() => {
        return this.ingredientsService.getIngredients().pipe(
          map((ingredients) =>
            IngredientsApiActions.loadIngredientsSuccess({ ingredients })
          ),
          catchError(() => of(IngredientsApiActions.loadIngredientsFailed()))
        );
      })
    );
  });
}