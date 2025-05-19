import { Component, computed, input } from '@angular/core';
import { Neuron } from '../../../../models/models';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-neuron-select',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './neuron-select.component.html',
  styleUrl: './neuron-select.component.scss'
})
export class NeuronSelectComponent {
  neurons = input.required<Array<Neuron>>();
  activeNeuronIds = input.required<Array<number>>();

  transformedNeurons = computed(() => {
    const neurons = this.neurons();
    const activateNeuronIds = this.activeNeuronIds()
    return neurons.map((neuron) => ({
      ...neuron,
      isActive: activateNeuronIds.find((id) => id === neuron.id) ? true : false
    }))
  })

}
