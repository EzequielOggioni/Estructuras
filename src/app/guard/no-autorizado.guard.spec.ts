import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { noAutorizadoGuard } from './no-autorizado.guard';

describe('noAutorizadoGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noAutorizadoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
