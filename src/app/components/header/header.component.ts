import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsOnRootPage, selectTitle } from './state/header.selectors';
import { AsyncPipe, } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private store = inject(Store);
  activatedRoute = inject(ActivatedRoute);

  title$ = this.store.select(selectTitle);
  isOnRootPage$ = this.store.select(selectIsOnRootPage);
}
