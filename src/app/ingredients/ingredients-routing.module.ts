import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIngredientComponent } from './components/add-ingredient/add-ingredient.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';

const routes: Routes = [
  {
    path: '',
    component: IngredientsComponent,
  },
  {
    path: 'add',
    component: AddIngredientComponent,
  },
  {
    path: 'add/:id',
    component: AddIngredientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientsRoutingModule {}
