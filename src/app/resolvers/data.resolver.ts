import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DataLoadingService } from '../services/data-loading.service';
import { DemoData } from '../models/models';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { DataApiActions } from '../state/data.actions';

export const dataResolver: ResolveFn<DemoData> = (route, state) => {
  const dataService = inject(DataLoadingService);
  const store = inject(Store);
  return dataService.getData().pipe(tap(data => {
    store.dispatch(DataApiActions.loadData({ data }))
  }));
};
