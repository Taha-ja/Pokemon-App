import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-details-routing',
  templateUrl: './details-routing.component.html',
  styleUrls: ['./details-routing.component.css']
})
export class DetailsRoutingComponent implements OnInit{
  pokemon?: Pokemon;

  constructor(
    private pokemonService: PokemonService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(switchMap((params) => this.pokemonService.getById(params['id'])))
      .subscribe({
        next: (pokemon) => (this.pokemon = pokemon),
        error: () => {
          this.router.navigate(['/not-found']);
        },
      });
  }
}
