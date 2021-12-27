import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetinstructionsComponent } from './resetinstructions.component';

describe('ResetinstructionsComponent', () => {
  let component: ResetinstructionsComponent;
  let fixture: ComponentFixture<ResetinstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetinstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetinstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
