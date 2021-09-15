import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from '../service/pokemon.service';
import { of } from 'rxjs';
import { PokemonListComponent } from './pokemon-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Inject, NO_ERRORS_SCHEMA, Pipe, PipeTransform} from '@angular/core';

class PokemonServiceMock {

  getPokemonByName(name:string) {
     return of({}).toPromise();
 }
}

@Pipe({name: 'filter'})
class MockPipe implements PipeTransform {
    transform(value: number): number {
        //Do stuff here, if you want
        return value;
    }

    filter(value: any): any[] {
      return []
    }
}

class Ng2SearchPipeModuleMock {

  filter (name: any) {

  }
}

describe('PokemonListComponent', () => {
  let pipe: Pipe;
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async () => {
    pipe = new Pipe(MockPipe);
    await TestBed.configureTestingModule({
      declarations: [ PokemonListComponent, MockPipe ],
      providers: [
        {provide: PokemonService, useValue: new PokemonServiceMock()},
        {Pipe, useValue: new MockPipe()},
    
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selected pokemon name', ()=>{
    
    it('should return pokemon', ()=> {
      jasmine.createSpy('getPokemonByName')
      component.selectedPokemon('test');
      expect(new PokemonServiceMock().getPokemonByName).toBeTruthy();
    })

  })
});
