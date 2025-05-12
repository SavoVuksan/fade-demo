import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NeuronSelectPageComponent } from "./pages/neuron-select-page/neuron-select-page.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NeuronSelectPageComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fade-demo';
}
