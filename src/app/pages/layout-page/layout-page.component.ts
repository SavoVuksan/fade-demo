import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { DemoDataStore } from '../../state/demo-data.store';

@Component({
  selector: 'app-layout-page',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss'
})
export class LayoutPageComponent {
  readonly store = inject(DemoDataStore);
}
