import { Component, inject } from '@angular/core';
import { AsyncPipe, } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activatedRoute = inject(ActivatedRoute);
}
