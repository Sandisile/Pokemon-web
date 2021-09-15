import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-pokeman',
  templateUrl: './search-pokeman.component.html',
  styleUrls: ['./search-pokeman.component.css']
})
export class SearchPokemanComponent implements OnInit {

  name: string;
  @Output('search')
  search: EventEmitter<string>;
  
  constructor() { 
    this.name = '';
    this.search = new EventEmitter();
  }

  SearchByName() {
    this.search.emit(this.name);
  }


  ngOnInit(): void {
  }
  
}
