import { TestBed } from '@angular/core/testing';

import { receitaService } from './receita.service';

describe('receitaService', () => {
  let service: receitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(receitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
