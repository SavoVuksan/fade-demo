import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { DemoDataStore } from '../../state/demo-data.store';

@Component({
  selector: 'app-scenario-select-page',
  imports: [JsonPipe],
  templateUrl: './scenario-select-page.component.html',
  styleUrl: './scenario-select-page.component.scss'
})
export class ScenarioSelectPageComponent {
  readonly store = inject(DemoDataStore);
}
