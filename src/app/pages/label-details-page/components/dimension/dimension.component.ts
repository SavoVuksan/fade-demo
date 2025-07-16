import { Component, computed, input } from '@angular/core';
import { ProgressBarComponent } from "@app/components/progress-bar/progress-bar.component";


export type DimensionType = "Clarity" | 'Responsivness' | 'Purity' | 'Faithfulness';
export type BaseDimension = {
  type: DimensionType;
  score: number;
  iconUrl: string;
  primaryColor: string;
  backgroundColor: string;
}

export type DimensionActivations = { activations: string[] };

export type Dimension = BaseDimension & DimensionActivations;

export type FaithfulnessOptions = {
  steered: string[];
  unsteered: string[];
}

export type ResponsivnessOptions = {
  randomActivations: string[];
  topActivations: string[];
}

export type FaithfulnessDimension = BaseDimension & FaithfulnessOptions;

export type ResponsivnessDimension = BaseDimension & ResponsivnessOptions;

export const isResponsivnessOptions = (options: ResponsivnessOptions | FaithfulnessOptions): options is ResponsivnessOptions => {
  return (options as ResponsivnessOptions).topActivations !== undefined;
};

@Component({
  selector: 'app-dimension',
  imports: [ProgressBarComponent],
  templateUrl: './dimension.component.html',
  styleUrl: './dimension.component.scss'
})
export class DimensionComponent {
  dimension = input<Dimension | FaithfulnessDimension | ResponsivnessDimension>();

  asDimension = computed(() => {
    return this.dimension() as Dimension;
  })

  asFaithfulnessDimension = computed(() => {
    return this.dimension() as FaithfulnessDimension;
  })

  asResponsivnessDimension = computed(() => {
    return this.dimension() as ResponsivnessDimension;
  })

  isFaithfulnessDimension(dimension: Dimension | FaithfulnessDimension | ResponsivnessDimension | undefined): dimension is FaithfulnessDimension {
    return (dimension as FaithfulnessDimension).steered !== undefined;
  }

  isResponsivenessDimension(dimension: Dimension | FaithfulnessDimension | ResponsivnessDimension | undefined): dimension is ResponsivnessDimension {
    return (dimension as ResponsivnessDimension).topActivations !== undefined;
  }
  isDimension(dimension: Dimension | FaithfulnessDimension | ResponsivnessDimension | undefined): dimension is ResponsivnessDimension {
    return (dimension as Dimension).activations !== undefined;
  }

}
