import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDemoData } from '../../state/demo-data.selectors';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-scenario-select-page',
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './scenario-select-page.component.html',
  styleUrl: './scenario-select-page.component.scss'
})
export class ScenarioSelectPageComponent {
  private store = inject(Store);
  data$ = this.store.select(selectDemoData);
}
