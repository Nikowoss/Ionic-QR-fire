import { TestBed } from '@angular/core/testing';

import { ControlAccesoGuard } from './control-acceso.guard';

describe('ControlAccesoGuard', () => {
  let guard: ControlAccesoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ControlAccesoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
