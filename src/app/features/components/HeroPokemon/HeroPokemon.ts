import { ChangeDetectionStrategy, Component,input } from '@angular/core';

@Component({
  selector: 'app-hero-pokemon',
  imports: [],
  templateUrl: './HeroPokemon.html',
  styleUrl: './HeroPokemon.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPokemon { 
   pokemoncount = input.required<number>();
  totalPages = input.required<number>();
  currentPage = input.required<number>();
}
