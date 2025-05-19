import { Component, computed, inject, input } from '@angular/core';
import { DemoDataStore } from '../../state/demo-data.store';
import { JsonPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-label-details-page',
  imports: [JsonPipe, NgOptimizedImage],
  templateUrl: './label-details-page.component.html',
  styleUrl: './label-details-page.component.scss'
})
export class LabelDetailsPageComponent {
  readonly neuronId = input.required<number>({ alias: 'neuron-id' });
  readonly labelId = input.required<number>({ alias: 'label-id' });
  readonly store = inject(DemoDataStore);

  readonly label = computed(() => {
    const neuronId = parseInt(this.neuronId().toString())
    const labelId = parseInt(this.labelId().toString());
    const selectedNeuron = this.store.neurons().find((neuron) => neuron.id === neuronId);
    const selectedLabel = selectedNeuron?.labels.find((label) => label.id === labelId);
    return selectedLabel;
  })
}
