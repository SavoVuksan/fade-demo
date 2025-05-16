import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { inject, provideAppInitializer } from '@angular/core';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

import { DemoDataStore } from './state/demo-data.store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAppInitializer(async () => {
      const demoDataStore = inject(DemoDataStore);
      await demoDataStore.loadDemoData();
    })
  ]
};
