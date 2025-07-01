import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuronSelectComponent } from './neuron-select.component';

describe('NeuronSelectComponent', () => {
  let component: NeuronSelectComponent;
  let fixture: ComponentFixture<NeuronSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeuronSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeuronSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
