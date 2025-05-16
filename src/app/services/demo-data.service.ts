import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DemoData, DemoDataSchema } from '../models/models';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoDataService {
  private http = inject(HttpClient);
  readonly DEMO_DATA_URL = "/test-data.json"

  constructor() {
  }

  loadDemoData() {
    return this.http.get<DemoData>(this.DEMO_DATA_URL).pipe(tap((demoData) => {
      const result = DemoDataSchema.parse(demoData);
    }));
  }
}
