import { Component, computed, effect, HostListener, input, signal } from '@angular/core';
import { Neuron } from '../../../../models/models';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { NeuronComponent, NeuronState } from "../neuron/neuron.component";

@Component({
  selector: 'app-neuron-select',
  imports: [RouterLink, RouterLinkActive, NgClass, NeuronComponent],
  templateUrl: './neuron-select.component.html',
  styleUrl: './neuron-select.component.scss'
})
export class NeuronSelectComponent {
  neurons = input.required<Array<Neuron>>();
  activeNeuronIds = input.required<Array<number>>();
  currentPrimaryNeuronIndex = signal(1);
  currentVisibleNeurons = computed(() => {
    const previousIndex = this.currentPrimaryNeuronIndex() - 1 > 0 ? this.currentPrimaryNeuronIndex() - 1 : this.neurons().length - 1;
    const nextIndex = this.currentPrimaryNeuronIndex() + 1 < this.neurons().length ? this.currentPrimaryNeuronIndex() + 1 : 0;
    const previous = this.neurons()[previousIndex];
    const next = this.neurons()[nextIndex];
    const current = this.neurons()[this.currentPrimaryNeuronIndex()];
    return [previous, current, next];
  });

  get neuronState() {
    return NeuronState;
  }

  neededScrollDelta = 100;
  currentScrollDelta = 0;

  get neuronStates() {
    return NeuronState;
  }

  transformedNeurons = computed(() => {
    const neurons = this.neurons();
    const activateNeuronIds = this.activeNeuronIds()
    return neurons.map((neuron) => ({
      ...neuron,
      isActive: activateNeuronIds.find((id) => id === neuron.id) ? true : false
    }))
  })

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    this.currentScrollDelta += event.deltaY;


    if (Math.abs(this.currentScrollDelta) > this.neededScrollDelta) {
      const scrollDir = Math.sign(this.currentScrollDelta);
      this.currentScrollDelta = 0;
      console.log(scrollDir);


      this.currentPrimaryNeuronIndex.set(this.currentPrimaryNeuronIndex() + scrollDir);
      if (this.currentPrimaryNeuronIndex() >= this.neurons().length) {
        this.currentPrimaryNeuronIndex.set(0);
      }
      if (this.currentPrimaryNeuronIndex() < 0) {
        this.currentPrimaryNeuronIndex.set(this.neurons().length - 1)
      }
    }
    event.preventDefault()
  }

}
