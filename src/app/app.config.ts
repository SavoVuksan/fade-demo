import { APP_INITIALIZER, ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, Store } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { dataReducer } from './state/demo-data.reducer';
import { provideEffects } from '@ngrx/effects';
import * as dataEffects from './state/demo-data.effects';
import { DemoDataActions } from './state/demo-data.actions';
import { selectDemoData } from './state/demo-data.selectors';
import { skip, skipLast, tap } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      demoData: dataReducer
    }),
    provideHttpClient(),
    provideEffects(dataEffects),
    provideAppInitializer(async () => {
      const store = inject(Store);
      store.dispatch(DemoDataActions.loadDemoData());
      const data = await store.select(selectDemoData)
      return data;
    })
  ]
};
