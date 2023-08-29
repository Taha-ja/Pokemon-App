import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { data } from 'src/data';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-routing',
  templateUrl: './list-routing.component.html',
  styleUrls: ['./list-routing.component.css']
})
export class ListRoutingComponent {
  pokemons : Pokemon[] = [];
  isDeleteLoading: any[] = [];
  searchQuery = '';
  searchQuerySubject = new Subject<string>();
  constructor(private pokemonService :PokemonService){
    this.searchQuerySubject
    .pipe(debounceTime(500), distinctUntilChanged())
    .subscribe((query: string) => {
      this.search(query);
    });
  }
  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
      this.isDeleteLoading = pokemons.map((p) => ({
        id: p.id,
        isLoading: false,
      }));
    });
  }

  ngOnDestroy(): void {
    console.log('component destroyed');
  }

  // capture(pokemon: Pokemon) {
  //   this.pokemons = this.pokemons.map((p) => {
  //     if (p.id === pokemon.id) {
  //       return { ...p, captured: !p.captured };
  //     }
  //     return p;
  //   });
  //   console.log(`${pokemon.name} captured!`);
  // }

  capture(pokemon: Pokemon) {
    // pokemon.captured = !pokemon.captured;
    // this.pokemonService.updatePokemon(pokemon).subscribe();
    this.pokemonService
    .updatePokemon({...pokemon,captured:!pokemon.captured})
    .subscribe((updatedPokemon) =>{
      this.pokemons =this.pokemons.map(p=>{
        if (p.id === updatedPokemon.id) {
          return updatedPokemon;
        }
        return p;
      })
    });
  }

  // changeValue(event: any) {
  //   this.pokemons = this.pokemons.map((p) => {
  //     if (p.id === event.id) {
  //       return { ...p, [event.key]: event.value };
  //     }
  //     return p;
  //   });
  // }
  changeValue(event: any) {
    const { value, key, pokemon } = event;
    this.pokemonService
      .updatePokemon({ ...pokemon, [key]: value })
      .subscribe((updatedPokemon) => {
        this.pokemons = this.pokemons.map((p) => {
          if (p.id === updatedPokemon.id) {
            return updatedPokemon;
          }
          return p;
        });
      });
    // this.pokemons = this.pokemons.map((p) => {
    //   if (p.id === event.id) {
    //     return { ...p, [event.key]: event.value };
    //   }
    //   return p;
    // });
  }
  delete(pokemon:Pokemon){
    this.setIsLoading(pokemon, true);
    this.pokemonService.deletePokemon(pokemon).subscribe(() => {
      this.pokemons = this.pokemons.filter((p) => p.id !== pokemon.id);
      this.setIsLoading(pokemon, false);
    });
  }
  getIsDeleteLoading(pokemon: Pokemon) {
    return this.isDeleteLoading.find((p) => p.id === pokemon.id)?.isLoading;
  }

  search(query: string) {
    this.pokemonService.search(query).subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }

  onQuery(event: any) {
    this.searchQuerySubject.next(event.target.value);
  }
  private setIsLoading(pokemon: Pokemon, isLoading: boolean) {
    this.isDeleteLoading = this.isDeleteLoading.map((p) => {
      if (p.id === pokemon.id) {
        return { ...p, isLoading };
      }
      return p;
    });
  }
}
