import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';
import { inject, provideAppInitializer } from '@angular/core';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';

import { DemoDataStore } from './state/demo-data.store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      router: routerReducer,
    }),
    provideRouterStore(),
    provideAppInitializer(async () => {
      const demoDataStore = inject(DemoDataStore);
      await demoDataStore.loadDemoData();
    })
  ]
};
