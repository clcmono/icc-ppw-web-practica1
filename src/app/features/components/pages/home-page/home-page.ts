import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PaginationService } from '../../../services/PaginationService';
import { PokemonService } from '../../../services/pokemon.service';
import { PokemonListResponse } from '../../../interface/PokemonListResponse ';
import { HeroPokemon } from '../../HeroPokemon/HeroPokemon';
import { Navbar } from '../../navbar/navbar';
import { AsyncPipe } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroPokemon, Navbar, AsyncPipe],
  templateUrl: './home-page.html',
})
export class HomePage {

  private pokemonService = inject(PokemonService);
  private router = inject(Router);
  private paginationService = inject(PaginationService);

  limit = 20;

  offset = computed(() =>
    (this.paginationService.currentPage() - 1) * this.limit
  );

  // Observable que se actualiza basado en el offset
  pokemons$ = toObservable(this.offset).pipe(
    switchMap(offset => this.pokemonService.getPokemonList(offset, this.limit))
  );

  pokemonCount = computed(() => 1404); // Total aproximado de pokémon
  totalPages = computed(() => Math.ceil(this.pokemonCount() / this.limit));
  currentPage = computed(() => this.paginationService.currentPage());

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.router.navigate([], {
        queryParams: { page: this.currentPage() + 1 },
        queryParamsHandling: 'merge',
      });
    }
  }

  previousPage() {
    if (this.currentPage() > 1) {
      this.router.navigate([], {
        queryParams: { page: this.currentPage() - 1 },
        queryParamsHandling: 'merge',
      });
    }
  }

  goToDetail(url: string) {
    const id = url.split('/').at(-2);
    if (id) this.router.navigate(['/pokemon', id]);
  }

  getPokemonImage(url: string): string {
    const id = url.split('/').at(-2);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
}