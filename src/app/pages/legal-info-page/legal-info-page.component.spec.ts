import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalInfoPageComponent } from './legal-info-page.component';

describe('LegalInfoPageComponent', () => {
  let component: LegalInfoPageComponent;
  let fixture: ComponentFixture<LegalInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalInfoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
