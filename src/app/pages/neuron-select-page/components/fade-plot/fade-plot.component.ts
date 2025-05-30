import { Component, computed, effect, inject, input } from '@angular/core';
import { delay, of, tap } from 'rxjs';
import { DemoDataStore } from '../../../../state/demo-data.store';

type PlotLabelData = {
  clarity: number;
  responsivness: number;
  purity: number;
  faithfulness: number;
  color: string;
  highlightColor: string;
  isHighlighted: boolean;
}

@Component({
  selector: 'app-fade-plot',
  imports: [],
  templateUrl: './fade-plot.component.html',
  styleUrl: './fade-plot.component.scss'
})
export class FadePlotComponent {
  store = inject(DemoDataStore);
  plotStrokeColor = "#99999988"
  plotSize = 2;
  // Todo: Think about where to save the colors for the labels? 
  plotColors = ['#c761c799', '#e846e8bb', '#e36e66', '#f54b40', '#ab7cd6', '#9b49e6', '#c9b669', '#c9b669'];

  readonly labels = computed(() => {
    return this.store.selectedNeuron!()?.labels.map((label, index) => {
      const l = {
        clarity: label.clarity.score,
        faithfulness: label.faithfulness.score,
        responsivness: label.responsivness.score,
        purity: label.purity.score,
        color: this.plotColors[index * 2],
        highlightColor: this.plotColors[index * 2 + 1],
        isHighlighted: this.store.highlightedLabel!() === label ? true : false
      } as PlotLabelData;
      return l;
    })
  })

  calcPoints(label: PlotLabelData) {
    return `${50 * this.plotSize},${50 * this.plotSize - 50 * label.faithfulness * this.plotSize} ${50 * this.plotSize + 50 * label.responsivness * this.plotSize},${50 * this.plotSize} ${50 * this.plotSize},${50 * this.plotSize + 50 * label.purity * this.plotSize} ${50 - 50 * label.clarity},${50 * this.plotSize}`;
  }

  getLabelColor(label: PlotLabelData) {
    return label.isHighlighted ? label.highlightColor : label.color;
  }

}
