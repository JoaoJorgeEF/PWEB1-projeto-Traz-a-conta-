import { TestBed } from '@angular/core/testing';

import { ItensCardapioFirestoreService } from './itens-cardapio-firestore.service';

describe('ItensCardapioFirestoreService', () => {
  let service: ItensCardapioFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItensCardapioFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
