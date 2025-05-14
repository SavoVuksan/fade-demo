import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DemoData } from '../models/models';
import { Store } from '@ngrx/store';
import { DemoDataActions } from '../state/demo-data.actions';
import { selectDemoData } from '../state/demo-data.selectors';

export const demoDataResolver: ResolveFn<DemoData> = (_route, _state) => {
  const store = inject(Store);
  store.dispatch(DemoDataActions.loadDemoData());
  return store.select(selectDemoData);
};
