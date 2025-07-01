import { Component, computed, effect, HostListener, inject, input, signal } from '@angular/core';
import { Neuron } from '../../../../models/models';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { NeuronComponent, NeuronState } from "../neuron/neuron.component";
import { DemoDataStore } from '@app/state/demo-data.store';

@Component({
  selector: 'app-neuron-select',
  imports: [RouterLink, RouterLinkActive, NgClass, NeuronComponent],
  templateUrl: './neuron-select.component.html',
  styleUrl: './neuron-select.component.scss'
})
export class NeuronSelectComponent {
  neurons = input.required<Array<Neuron>>();
  activeNeuronIds = input.required<Array<number>>();

  selectedNeuron = signal<Neuron | null>(null);
  currentPrimaryNeuronIndex = signal(1);

  store = inject(DemoDataStore);
  route = inject(ActivatedRoute);

  currentVisibleNeurons = computed(() => {
    const previousIndex = this.currentPrimaryNeuronIndex() - 1 > 0 ? this.currentPrimaryNeuronIndex() - 1 : this.neurons().length - 1;
    const nextIndex = this.currentPrimaryNeuronIndex() + 1 < this.neurons().length ? this.currentPrimaryNeuronIndex() + 1 : 0;
    const previous = this.neurons()[previousIndex];
    const next = this.neurons()[nextIndex];
    const current = this.neurons()[this.currentPrimaryNeuronIndex()];
    return [previous, current, next];
  });

  onNeuronSelect = effect(() => {
    if (this.store.selectedNeuron!()) {
      console.log(this.store.selectedNeuron!());

      this.selectedNeuron.set(this.store.selectedNeuron!()!)
      this.currentPrimaryNeuronIndex.set(this.store.neurons().findIndex((n) => n.id === this.store.selectedNeuron!()?.id))
    }
  })

  get neuronState() {
    return NeuronState;
  }

  neededScrollDelta = 100;
  currentScrollDelta = 0;

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

  onNeuronClick(neuron: Neuron) {
    const neuronIndex = this.neurons().indexOf(neuron);
    this.selectedNeuron.set(neuron);
    this.currentPrimaryNeuronIndex.set(neuronIndex);
    this.store.setSelectedNeuron(neuron)
  }

}
