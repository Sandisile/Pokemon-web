import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPokemanComponent } from './search-pokeman.component';

describe('SearchPokemanComponent', () => {
  let component: SearchPokemanComponent;
  let fixture: ComponentFixture<SearchPokemanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPokemanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPokemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('search by name', ()=> {
    it('should emit search event', ()=> {
      component.SearchByName();
      expect(component.search).toBeTruthy();
    })
  })
});
