import { Component, inject, input, signal, } from '@angular/core';
import { Router } from '@angular/router';

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

  readonly selected = signal(false);
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

    this.router.navigate(['/scenario-select', this.id(), 'neuron-select'])
  }

}
