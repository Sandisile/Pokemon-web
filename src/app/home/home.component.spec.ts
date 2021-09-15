import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PokemonService } from '../service/pokemon.service';

import { HomeComponent } from './home.component';


class PokemonServiceMock {

   getPokemons(limit:number) {
      return of([]).toPromise();
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [
        {provide: PokemonService, useValue: new PokemonServiceMock()}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnit', ()=> {

    it('should initialize', ()=> {
      component.ngOnInit();
      expect(new PokemonServiceMock().getPokemons).toBeTruthy();
    })

  })
});
