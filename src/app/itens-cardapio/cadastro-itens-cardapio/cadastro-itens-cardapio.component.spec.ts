import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroItensCardapioComponent } from './cadastro-itens-cardapio.component';

describe('CadastroItensCardapioComponent', () => {
  let component: CadastroItensCardapioComponent;
  let fixture: ComponentFixture<CadastroItensCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroItensCardapioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroItensCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
