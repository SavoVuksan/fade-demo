import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelDetailsPageComponent } from './label-details-page.component';

describe('LabelDetailsPageComponent', () => {
  let component: LabelDetailsPageComponent;
  let fixture: ComponentFixture<LabelDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
