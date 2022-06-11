import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { IngredientsRoutingModule } from './ingredients-routing.module';

@NgModule({
  declarations: [IngredientsComponent],
  imports: [CommonModule, IngredientsRoutingModule],
})
export class IngredientsModule {}
