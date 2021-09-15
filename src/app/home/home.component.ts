import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon, Result } from '../domain/pokemon';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  results: Result[];
  pokemon: Pokemon | undefined;
  
  constructor(private service: PokemonService) {
    this.pokemon = undefined;
    this. results = [];
  }

  ngOnInit(): void {
  this.service.getPokemons(15).then ( response => {

    this.results = response.results;
    console.log("Results: ", this.results);
  }).catch( err => {

    console.log("error occurred");
  })
  }

}
