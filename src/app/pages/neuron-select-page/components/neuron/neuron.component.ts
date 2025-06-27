import { Component, HostListener, input, output } from '@angular/core';

export enum NeuronState {
  Selected,
  Primary,
  Secondary
}

@Component({
  selector: 'app-neuron',
  imports: [],
  templateUrl: './neuron.component.html',
  styleUrl: './neuron.component.scss',
  host: {
    '[class.primary]': 'this.state() === this.neuronState.Primary',
    '[class.secondary]': 'this.state() === this.neuronState.Secondary',
    '[class.selected]': 'this.state() === this.neuronState.Selected',

  }
})
export class NeuronComponent {
  neuronId = input<string>();
  layerId = input<string>();
  primaryColor = input<string>();
  onClick = output();
  state = input<NeuronState>(NeuronState.Primary);

  get neuronState() {
    return NeuronState;
  }

  @HostListener('click', ['$event'])
  onClicked(e: Event) {
    this.onClick.emit();
  }

}
