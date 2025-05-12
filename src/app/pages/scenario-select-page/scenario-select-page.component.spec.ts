import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioSelectPageComponent } from './scenario-select-page.component';

describe('ScenarioSelectPageComponent', () => {
  let component: ScenarioSelectPageComponent;
  let fixture: ComponentFixture<ScenarioSelectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScenarioSelectPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScenarioSelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
