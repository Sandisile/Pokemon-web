import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon, Result } from '../domain/pokemon';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input()
  results: Result[];
  pokemon: Pokemon | undefined;
  @Output('selected')
  selected: EventEmitter<Pokemon>;
  @Input()
  name: string

  constructor(private service: PokemonService) { 
    this.results = [];
    this.selected = new EventEmitter();
    this.pokemon = undefined;
    this.name = '';
  }

  ngOnInit(): void {
  }

  selectedPokemon(name: string) {
    console.log("Hello");
      this.service.getPokemonByName(name).then( response => {
        console.log("year: ", response);
        this.selected.emit(response.pokemon);
      }).catch ( err => {
        console.log(" error ");
      })
    }


}
