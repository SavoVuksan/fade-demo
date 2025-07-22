import { Component, computed, HostListener, inject, signal, } from '@angular/core';
import { DemoDataStore } from '@app/state/demo-data.store';

type PlotLabelData = {
  clarity: number;
  responsiveness: number;
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
  readonly PLOT_STROKE_COLOR = "#99999988"

  readonly store = inject(DemoDataStore);

  readonly windowWidth = signal<number>(1920);

  readonly plotSize = computed(() => {
    return this.windowWidth() < 1000 ? 2 : 4;
  });
  readonly labels = computed(() => {
    return this.store.selectedNeuron!()?.labels.map((label) => {
      const l = {
        clarity: label.clarity.score,
        faithfulness: label.faithfulness.score,
        responsiveness: label.responsiveness.score,
        purity: label.purity.score,
        color: label.primaryColor,
        isHighlighted: this.store.highlightedLabel!() === label ? true : false
      } as PlotLabelData;
      return l;
    }).sort((a, b) => (a.isHighlighted ? 1 : b.isHighlighted ? -1 : 0))
  })

  calcPoints(label: PlotLabelData) {
    return `${50 * this.plotSize()},${50 * this.plotSize() - 50 * label.faithfulness * this.plotSize()} ${50 * this.plotSize() + 50 * label.responsiveness * this.plotSize()},${50 * this.plotSize()} ${50 * this.plotSize()},${50 * this.plotSize() + 50 * label.purity * this.plotSize()} ${50 - 50 * label.clarity},${50 * this.plotSize()}`;
  }

  getLabelColor(label: PlotLabelData) {
    return label.color;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const window = event.target as Window;
    this.windowWidth.set(window.innerWidth);
  }

}
