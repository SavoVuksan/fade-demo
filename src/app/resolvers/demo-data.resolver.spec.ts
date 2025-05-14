import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { demoDataResolver } from './demo-data.resolver';
import { DemoData } from '../models/models';

describe('dataResolver', () => {
  const executeResolver: ResolveFn<DemoData> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => demoDataResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
