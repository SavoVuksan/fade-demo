import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadePlotComponent } from './fade-plot.component';

describe('FadePlotComponent', () => {
  let component: FadePlotComponent;
  let fixture: ComponentFixture<FadePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FadePlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FadePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
