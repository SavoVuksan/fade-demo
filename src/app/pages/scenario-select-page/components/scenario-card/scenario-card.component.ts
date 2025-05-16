import { NgOptimizedImage } from '@angular/common';
import { Component, input, } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-scenario-card',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './scenario-card.component.html',
  styleUrl: './scenario-card.component.scss'
})
export class ScenarioCardComponent {
  title = input<string>();
  id = input.required<number>();
  iconUrl = input.required<string>();
}
