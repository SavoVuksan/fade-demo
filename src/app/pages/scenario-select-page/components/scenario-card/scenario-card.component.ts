import { Component, inject, input, signal, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scenario-card',
  imports: [],
  templateUrl: './scenario-card.component.html',
  styleUrl: './scenario-card.component.scss'
})
export class ScenarioCardComponent {
  title = input<string>();
  subtitle = input<string>();
  id = input.required<number>();
  iconUrl = input.required<string>();
  primaryColor = input<string>();

  selected = signal(false);
  private router = inject(Router);

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
