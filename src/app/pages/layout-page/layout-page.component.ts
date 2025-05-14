import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectDemoData } from '../../state/demo-data.selectors';
import { HeaderComponent } from "../../components/header/header.component";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-layout-page',
  imports: [HeaderComponent, RouterOutlet, AsyncPipe],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss'
})
export class LayoutPageComponent {
  private store = inject(Store);
  activatedRoute = inject(ActivatedRoute);

  demoData$ = this.store.select(selectDemoData);
}
