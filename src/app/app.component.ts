import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NeuronSelectPageComponent } from "./pages/neuron-select-page/neuron-select-page.component";
import { HeaderComponent } from "./header/header.component";
import { DataLoadingService } from './services/data-loading.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fade-demo';
}
