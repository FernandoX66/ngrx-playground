import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsService } from './services/ingredients.service';
import { StoreModule } from '@ngrx/store';
import { ingredientsReducer } from './store/ingredients.reducer';
import { EffectsModule } from '@ngrx/effects';
import { IngredientsEffects } from './store/ingredients.effects';
import { AddIngredientComponent } from './components/add-ingredient/add-ingredient.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IngredientsComponent, AddIngredientComponent],
  imports: [
    CommonModule,
    IngredientsRoutingModule,
    StoreModule.forFeature('ingredients', ingredientsReducer),
    EffectsModule.forFeature([IngredientsEffects]),
    ReactiveFormsModule,
  ],
  providers: [IngredientsService],
})
export class IngredientsModule {}
