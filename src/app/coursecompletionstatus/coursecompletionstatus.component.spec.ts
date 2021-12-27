import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecompletionstatusComponent } from './coursecompletionstatus.component';

describe('CoursecompletionstatusComponent', () => {
  let component: CoursecompletionstatusComponent;
  let fixture: ComponentFixture<CoursecompletionstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursecompletionstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursecompletionstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
