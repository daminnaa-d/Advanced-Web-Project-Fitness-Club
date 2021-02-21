import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessClubComponent } from './fitness-club.component';

describe('FitnessClubComponent', () => {
  let component: FitnessClubComponent;
  let fixture: ComponentFixture<FitnessClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
