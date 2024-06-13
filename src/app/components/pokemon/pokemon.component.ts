import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Pokemon } from '../../models/pokemon.interface';
import { CommonModule } from '@angular/common';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, RouterModule, MatExpansionModule, MatIconModule, MatAccordion, MatSliderModule, FormsModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent implements OnInit{
  pokemon: Pokemon | undefined;
  showMoreContent: boolean = false;
  disabled = false;
  max = 550;
  min = 150;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  widthCustom = 200;

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
    });
  }

  toggleContent() {
    this.showMoreContent = !this.showMoreContent;
  }

}
