import { TestBed } from '@angular/core/testing';

import { DemoDataService } from './demo-data.service';

describe('DataLoadingService', () => {
  let service: DemoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
