import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraMesasComponent } from './cadastra-mesas.component';

describe('CadastraMesasComponent', () => {
  let component: CadastraMesasComponent;
  let fixture: ComponentFixture<CadastraMesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraMesasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
