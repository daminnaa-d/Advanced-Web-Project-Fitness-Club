import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupProgramsComponent } from './group-programs.component';

describe('GroupProgramsComponent', () => {
  let component: GroupProgramsComponent;
  let fixture: ComponentFixture<GroupProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
