import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  navOptions: any[] = [
    {
      name: 'Home',
      path: 'home',
    },
    {
      name: 'Ingredients',
      path: 'ingredients',
    },
    {
      name: 'Recipes',
      path: 'recipes',
    },
  ];

  constructor() {}
}
