import { Component, effect, inject, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemoDataStore } from '../../state/demo-data.store';
import { NeuronSelectComponent } from "./components/neuron-select/neuron-select.component";
import { ActivationComponent } from './components/activation/activation.component';
import { FadePlotComponent } from "./components/fade-plot/fade-plot.component";
import { Label } from '../../models/models';

@Component({
  selector: 'app-neuron-select-page',
  imports: [NeuronSelectComponent, ActivationComponent, RouterLink, FadePlotComponent],
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
      return this.store.selectedNeuron!();
    }
  })

  readonly onNeuronSelect = effect(() => {
    if (this.neuronId()) {
      const selectedNeuronId = parseInt(this.neuronId().toString());
      const selectedNeuron = this.store.neurons().find((neuron) => neuron.id === selectedNeuronId);
      this.store.setSelectedNeuron(selectedNeuron);
    } else {
      this.store.setSelectedNeuron(undefined);
    }
  });

  onScenarioIdChange = effect(() => {
    this.store.changeScenario(this.scenarioId());
  })

  onMouseEnter(label: Label) {
    this.store.changeHighlightedLabel(label);

  }

  onMouseLeave(label: Label) {
    this.store.changeHighlightedLabel(undefined);
  }

}
