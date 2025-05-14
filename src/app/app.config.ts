import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { dataReducer } from './state/demo-data.reducer';
import { provideEffects } from '@ngrx/effects';
import * as dataEffects from './state/demo-data.effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      demoData: dataReducer,
      router: routerReducer
    }),
    provideHttpClient(),
    provideEffects(dataEffects),
    provideRouterStore()
  ]
};
