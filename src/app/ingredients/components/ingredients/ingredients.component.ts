import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ingredient } from '../../interfaces/ingredient.interface';
import { IngredientsPageActions } from '../../store/actions';
import { AppState } from '../../store/ingredients.reducer';
import { getIngredients } from '../../store/ingredients.selectors';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit {
  ingredients$: Observable<Ingredient[]>;
  placeholderImageUrl = 'https://i.ibb.co/fv6N6NW/gallery.png';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.ingredients$ = this.store.select(getIngredients);

    this.store.dispatch(IngredientsPageActions.loadIngredients());
  }
}
