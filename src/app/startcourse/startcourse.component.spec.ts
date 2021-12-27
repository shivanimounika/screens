import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartcourseComponent } from './startcourse.component';

describe('StartcourseComponent', () => {
  let component: StartcourseComponent;
  let fixture: ComponentFixture<StartcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
