import { Component } from '@angular/core';

type PlotLabelData = {
  clarity: number;
  responsivness: number;
  purity: number;
  faithfulness: number;
  color: string;
}

@Component({
  selector: 'app-fade-plot',
  imports: [],
  templateUrl: './fade-plot.component.html',
  styleUrl: './fade-plot.component.scss'
})
export class FadePlotComponent {
  plotStrokeColor = "#99999988"
  plotSize = 2;
  labels: PlotLabelData[] = [
    {
      clarity: 0.5,
      faithfulness: 0.1,
      purity: 1,
      responsivness: 0.2,
      color: "#ff118888"
    },
    {
      clarity: 1,
      faithfulness: 1,
      purity: 1,
      responsivness: 1,
      color: "#00ffaa44"
    }
  ]

  calcPoints(label: PlotLabelData) {
    return `${50 * this.plotSize},${50 * this.plotSize - 50 * label.faithfulness * this.plotSize} ${50 * this.plotSize + 50 * label.responsivness * this.plotSize},${50 * this.plotSize} ${50 * this.plotSize},${50 * this.plotSize + 50 * label.purity * this.plotSize} ${50 - 50 * label.clarity},${50 * this.plotSize}`;
  }

}
