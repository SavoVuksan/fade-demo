import { Component, computed, effect, ElementRef, inject, OnInit, viewChild, viewChildren } from '@angular/core';
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
  readonly cards = viewChildren(ScenarioCardComponent);

  readonly onCardsAppear = effect(() => {
    this.cards().forEach((card) => {
      card.elementRef.nativeElement.addEventListener('animationend', this.onAnimationFinish)
    })

  })
  ngOnInit(): void {
    this.store.changeScenario(undefined);

  }

  onAnimationFinish(ev: AnimationEvent) {
    const target = ev.target as HTMLElement;
    target.classList.remove('appear-anim')

  }
}
