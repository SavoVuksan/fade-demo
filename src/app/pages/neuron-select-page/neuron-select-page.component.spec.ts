import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuronSelectPageComponent } from './neuron-select-page.component';

describe('NeuronSelectPageComponent', () => {
  let component: NeuronSelectPageComponent;
  let fixture: ComponentFixture<NeuronSelectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeuronSelectPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuronSelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
