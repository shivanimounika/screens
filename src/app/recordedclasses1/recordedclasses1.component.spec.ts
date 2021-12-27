import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recordedclasses1Component } from './recordedclasses1.component';

describe('Recordedclasses1Component', () => {
  let component: Recordedclasses1Component;
  let fixture: ComponentFixture<Recordedclasses1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Recordedclasses1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Recordedclasses1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
