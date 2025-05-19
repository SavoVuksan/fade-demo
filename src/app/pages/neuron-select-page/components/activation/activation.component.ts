import { Component, input } from '@angular/core';
import { Activation } from '../../../../models/models';

@Component({
  selector: 'app-activation',
  imports: [],
  templateUrl: './activation.component.html',
  styleUrl: './activation.component.scss'
})
export class ActivationComponent {
  activation = input.required<Activation>();
}
