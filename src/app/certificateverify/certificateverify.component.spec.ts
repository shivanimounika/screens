import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateverifyComponent } from './certificateverify.component';

describe('CertificateverifyComponent', () => {
  let component: CertificateverifyComponent;
  let fixture: ComponentFixture<CertificateverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateverifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
