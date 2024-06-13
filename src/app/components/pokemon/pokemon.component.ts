import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Pokemon } from '../../models/pokemon.interface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [NgIf, NgFor, RouterModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit{
  pokemon: Pokemon | undefined;

  constructor(
    private pokemonsService: PokemonsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
    console.log("id es " + id);

    this.pokemonsService.getPokemon(id).subscribe((pokemon) => {
      if (!pokemon) {
        this.router.navigate(['/']);
      }

      this.pokemon = pokemon;
      console.log("aa");
      console.log(this.pokemon);
    });
  }

}
