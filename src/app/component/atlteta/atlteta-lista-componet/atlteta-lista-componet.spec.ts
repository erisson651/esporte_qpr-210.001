import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtltetaListaComponent } from './atlteta-lista-componet';

describe('AtltetaListaComponet', () => {
  let component: AtltetaListaComponent;
  let fixture: ComponentFixture<AtltetaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtltetaListaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtltetaListaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
