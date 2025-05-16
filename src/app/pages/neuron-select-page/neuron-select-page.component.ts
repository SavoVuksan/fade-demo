import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, effect, inject, Input, InputSignalWithTransform, InputOptionsWithTransform, input } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { DemoDataStore } from '../../state/demo-data.store';
import { NeuronSelectComponent } from "./components/neuron-select/neuron-select.component";

@Component({
  selector: 'app-neuron-select-page',
  imports: [AsyncPipe, JsonPipe, NeuronSelectComponent],
  templateUrl: './neuron-select-page.component.html',
  styleUrl: './neuron-select-page.component.scss'
})
export class NeuronSelectPageComponent {
  readonly store = inject(DemoDataStore);
  readonly scenarioId = input<number>(0, {
    alias: 'scenario-id',
  });

  onScenarioIdChange = effect(() => {
    this.store.changeScenario(this.scenarioId());
  })

}
