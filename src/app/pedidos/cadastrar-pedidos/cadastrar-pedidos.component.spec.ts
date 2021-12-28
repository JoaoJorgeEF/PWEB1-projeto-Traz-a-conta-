import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPedidosComponent } from './cadastrar-pedidos.component';

describe('CadastrarPedidosComponent', () => {
  let component: CadastrarPedidosComponent;
  let fixture: ComponentFixture<CadastrarPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
