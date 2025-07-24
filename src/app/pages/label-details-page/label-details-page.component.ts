import { Component, computed, effect, inject, input, OnDestroy, OnInit } from '@angular/core';
import { DemoDataStore } from '../../state/demo-data.store';
import { NgOptimizedImage } from '@angular/common';
import { ProgressBarComponent } from "../../components/progress-bar/progress-bar.component";
import { ActivationComponent } from '../neuron-select-page/components/activation/activation.component';
import { BaseDimension, Dimension, DimensionActivations, DimensionComponent, DimensionType, FaithfulnessDimension, FaithfulnessOptions, isResponsivnessOptions, ResponsivnessDimension, ResponsivnessOptions } from "./components/dimension/dimension.component";

@Component({
  selector: 'app-label-details-page',
  imports: [NgOptimizedImage, ProgressBarComponent, ActivationComponent, DimensionComponent],
  templateUrl: './label-details-page.component.html',
  styleUrl: './label-details-page.component.scss'
})
export class LabelDetailsPageComponent implements OnInit, OnDestroy {

  readonly store = inject(DemoDataStore);

  readonly neuronId = input.required<number>({ alias: 'neuron-id' });
  readonly labelId = input.required<number>({ alias: 'label-id' });
  readonly scenarioId = input.required<number>({ alias: 'scenario-id' })

  readonly label = computed(() => {
    const neuronId = parseInt(this.neuronId().toString())
    const labelId = parseInt(this.labelId().toString());
    const selectedNeuron = this.store.neurons().find((neuron) => neuron.id === neuronId);
    const selectedLabel = selectedNeuron?.labels.find((label) => label.id === labelId);
    return selectedLabel;
  })

  readonly selectedNeuron = computed(() => {
    const neuronId = parseInt(this.neuronId().toString());

    const sNeuron = this.store.neurons().find((neuron) => neuron.id === neuronId);

    return sNeuron;
  })

  readonly onScenarioIdChange = effect(() => {
    this.store.changeScenario(this.scenarioId())
  })

  ngOnDestroy(): void {
    this.store.changeHeaderTitle(null);
  }
  ngOnInit(): void {
    this.store.changeHeaderTitle(this.label()!.name)
  }

  labelToDimension(options: Dimension | FaithfulnessDimension | ResponsivnessDimension): Dimension | FaithfulnessDimension | ResponsivnessDimension {
    return options;
  }
}
