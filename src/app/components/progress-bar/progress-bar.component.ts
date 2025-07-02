import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  progress = input<number>();
  color = input<string>();
  backgroundColor = input<string>();

  @HostBinding('style.backgroundColor') get hostBackgroundColor() {
    return this.backgroundColor();
  }
}
