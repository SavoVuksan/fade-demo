import { Component, inject } from '@angular/core';
import { AsyncPipe, } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DemoDataStore } from '@app/state/demo-data.store';

@Component({
  selector: 'app-header',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly activatedRoute = inject(ActivatedRoute);
  readonly store = inject(DemoDataStore);

}
