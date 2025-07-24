import { Component, ElementRef, inject, input, signal, } from '@angular/core';
import { Router } from '@angular/router';
import { DemoDataStore } from '@app/state/demo-data.store';

@Component({
  selector: 'app-scenario-card',
  imports: [],
  templateUrl: './scenario-card.component.html',
  styleUrl: './scenario-card.component.scss'
})
export class ScenarioCardComponent {
  readonly title = input<string>();
  readonly subtitle = input<string>();
  readonly id = input.required<number>();
  readonly primaryColor = input<string>();
  readonly store = inject(DemoDataStore);

  readonly selected = signal(false);
  readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly router = inject(Router);

  onKeyPress(event: KeyboardEvent) {
    console.log(event.key);

    if (event.key === ' ') {
      this.onSelect();
    }
  }

  async onSelect() {
    this.selected.set(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('done');
      }, 1500);
    });
    
    const firstNeuronId = this.store.scenarios()[this.id()].neuronIds[0];

    this.router.navigate(['/scenario-select', this.id(), 'neuron-select', firstNeuronId])
  }

}
