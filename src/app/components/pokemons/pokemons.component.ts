import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../models/pokemon.interface';
import { NgForOf, NgIf } from '@angular/common';
import { CardDto } from '../../models/card.dto';
import { GridComponent } from '../../shared/grid/grid.component';
import { CardComponent } from '../../shared/card/card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { GridDto } from '../../models/grid.dto';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { delay } from 'rxjs';


@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [RouterModule, NgForOf, NgIf, CardComponent, GridComponent, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  cardDtos: CardDto[] = [];
  gridDtos: GridDto[] = [];
  showList: boolean = false;
  loaded: boolean = false;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.pokemonsService.getAllPokemons()
    .pipe(
      delay(1000)
    )
    .subscribe((pokemons) => {
      this.pokemons = pokemons;
      this.cardDtos = this.pokemons.map(pokemon => this.mapToCardDto(pokemon));
      this.gridDtos = this.pokemons.map(pokemon => this.mapToGridDto(pokemon));
      this.loaded = true;
    });
  }

  switchView(value: boolean): void {
    this.showList = value;
  }

  private mapToCardDto(pokemon: Pokemon): CardDto {
    return {
      id: pokemon.id,
      name: pokemon.name,
      detailUrl: `/pokemon` 
    };
  }

  private mapToGridDto(pokemon: Pokemon): CardDto {
    return {
      id: pokemon.id,
      name: pokemon.name,
      detailUrl: `/pokemon` 
    };
  }
}