import { Component, inject, OnInit } from '@angular/core';
import { DemoDataStore } from '../../state/demo-data.store';
import { ScenarioCardComponent } from './components/scenario-card/scenario-card.component';

@Component({
  selector: 'app-scenario-select-page',
  imports: [ScenarioCardComponent],
  templateUrl: './scenario-select-page.component.html',
  styleUrl: './scenario-select-page.component.scss'
})
export class ScenarioSelectPageComponent implements OnInit {
  readonly store = inject(DemoDataStore);

  ngOnInit(): void {
    this.store.changeScenario(undefined);
  }
}
