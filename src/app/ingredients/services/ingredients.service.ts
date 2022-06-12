import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingredient } from '../interfaces/ingredient.interface';

@Injectable()
export class IngredientsService {
  url = environment.url;

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.url}/ingredients`);
  }

  addIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(`${this.url}/ingredients`, ingredient);
  }

  updateIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.put<Ingredient>(
      `${this.url}/ingredients/${ingredient.id}`,
      ingredient
    );
  }
}
