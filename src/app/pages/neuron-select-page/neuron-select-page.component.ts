import { Component, effect, inject, input, computed, OnDestroy } from '@angular/core';
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
export class NeuronSelectPageComponent implements OnDestroy {
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
      const selectedNeuron = this.store.neurons().find((neuron) => neuron.id === selectedNeuronId);
      selectedNeuron!.labels = selectedNeuron!.labels.map((label, index) => {
        label.primaryColor = this.store.labelColorPalette()[index];

        return label;
      })
      return selectedNeuron;
    } else {
      const selectedNeuron = this.store.selectedNeuron!();

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
  readonly onScenarioIdChange = effect(() => {
    this.store.changeScenario(this.scenarioId());
  })

  ngOnDestroy(): void {
    this.store.changeVisitedNeuronSelectPage(true);
  }

  onMouseEnter(label: Label) {
    this.store.changeHighlightedLabel(label);

  }

  onMouseLeave() {
    this.store.changeHighlightedLabel(undefined);
  }



}
