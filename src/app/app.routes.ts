import { Routes } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

export const routes: Routes = [
    { path: '', component: PokemonsComponent},
    { path: 'pokemon/:id', component: PokemonComponent},
    { path: '**', component: PokemonsComponent},
];