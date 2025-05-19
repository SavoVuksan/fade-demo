import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, effect, inject, Input, InputSignalWithTransform, InputOptionsWithTransform, input, computed } from '@angular/core';
import { Params, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { DemoDataStore } from '../../state/demo-data.store';
import { NeuronSelectComponent } from "./components/neuron-select/neuron-select.component";
import { ActivationComponent } from './components/activation/activation.component';

@Component({
  selector: 'app-neuron-select-page',
  imports: [AsyncPipe, JsonPipe, NeuronSelectComponent, ActivationComponent, RouterLink],
  templateUrl: './neuron-select-page.component.html',
  styleUrl: './neuron-select-page.component.scss'
})
export class NeuronSelectPageComponent {
  readonly store = inject(DemoDataStore);
  readonly scenarioId = input<number>(0, {
    alias: 'scenario-id',
  });
  readonly neuronId = input<number>(0, {
    alias: 'neuron-id'
  })

  readonly selectedNeuron = computed(() => {
    if (this.neuronId()) {
      const selectedNeuronId = parseInt(this.neuronId().toString());
      return this.store.neurons().find((neuron) => neuron.id === selectedNeuronId);
    } else {
      return undefined;
    }
  })

  onScenarioIdChange = effect(() => {
    this.store.changeScenario(this.scenarioId());
  })

}
