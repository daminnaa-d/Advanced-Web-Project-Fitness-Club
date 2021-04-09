import { TestBed } from '@angular/core/testing';

import { TrainerDetailGuard } from './trainer-detail.guard';

describe('TrainerDetailGuard', () => {
  let guard: TrainerDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TrainerDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
