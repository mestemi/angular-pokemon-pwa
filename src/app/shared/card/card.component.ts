import { Component, Input } from '@angular/core';
import { CardDto } from '../../models/card.dto';
import {MatCardModule, } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() item: CardDto = {
    id: '',
    name: '',
    detailUrl: '',
  };
}
