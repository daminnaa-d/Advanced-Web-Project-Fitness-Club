import { TestBed } from '@angular/core/testing';

import { ScheduleDatailGuard } from './schedule-detail.guard';

describe('ScheduleDatailGuard', () => {
  let guard: ScheduleDatailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ScheduleDatailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
