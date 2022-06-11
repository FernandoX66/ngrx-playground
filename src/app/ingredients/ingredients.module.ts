import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsService } from './services/ingredients.service';
import { StoreModule } from '@ngrx/store';
import { ingredientsReducer } from './store/ingredients.reducer';
import { EffectsModule } from '@ngrx/effects';
import { IngredientsEffects } from './store/ingredients.effects';

@NgModule({
  declarations: [IngredientsComponent],
  imports: [
    CommonModule,
    IngredientsRoutingModule,
    StoreModule.forFeature('ingredients', ingredientsReducer),
    EffectsModule.forFeature([IngredientsEffects]),
  ],
  providers: [IngredientsService],
})
export class IngredientsModule {}
