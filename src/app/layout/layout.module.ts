import { NgModule } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [LayoutComponent, NavComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
