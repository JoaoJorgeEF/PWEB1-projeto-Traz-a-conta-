import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemItensCardapioComponent } from './listagem-itens-cardapio.component';

describe('ListagemItensCardapioComponent', () => {
  let component: ListagemItensCardapioComponent;
  let fixture: ComponentFixture<ListagemItensCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemItensCardapioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemItensCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
