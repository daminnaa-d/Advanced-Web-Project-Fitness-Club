import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrensClubComponent } from './childrens-club.component';

describe('ChildrensClubComponent', () => {
  let component: ChildrensClubComponent;
  let fixture: ComponentFixture<ChildrensClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrensClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrensClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
