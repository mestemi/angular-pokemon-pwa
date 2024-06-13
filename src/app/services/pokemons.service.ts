import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pokemon } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})

export class PokemonsService {
  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').pipe(
      map(response => response.results.map((pokemon: any) => ({
        id: this.extractIdFromUrl(pokemon.url),
        name: pokemon.name
      })))
    );
  }

  getPokemon(id: string): Observable<Pokemon> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(
      map(response => ({
        id: response.order,
        name: response.name,
        imageBack: response.sprites.back_default,
        imageFront: response.sprites.front_default,
        shinyImageBack: response.sprites.back_shiny,
        shinyImageFront: response.sprites.front_shiny,
        gifImage: response.sprites.other.showdown.front_default,
        height: response.height,
        weight: response.weight,
        types: response.types.map((type: any) => ({
          id: type.slot,
          name: type.type.name,
          url: type.type.url
        }))
      }))
    );
  }

  private extractIdFromUrl(url: string) {
    const urlParts = url.split('/');
    return +urlParts[urlParts.length - 2];
  }
}
