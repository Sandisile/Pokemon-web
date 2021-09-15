import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../domain/pokemon';

@Component({
  selector: 'app-pokemon-preview',
  templateUrl: './pokemon-preview.component.html',
  styleUrls: ['./pokemon-preview.component.css']
})
export class PokemonPreviewComponent implements OnInit {

  @Input()
  pokemon: Pokemon | undefined;
  constructor() { 
    this.pokemon = undefined;
  }

  ngOnInit(): void {
  }

}
