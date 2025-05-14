import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DataLoadingService } from '../services/data-loading.service';
import { DemoData } from '../models/models';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { DataApiActions } from '../state/data.actions';
import { selectDemoData } from '../state/data.selectors';

export const dataResolver: ResolveFn<DemoData> = (route, state) => {
  const dataService = inject(DataLoadingService);
  const store = inject(Store);
  store.dispatch(DataApiActions.loadData());
  return store.select(selectDemoData);
};
