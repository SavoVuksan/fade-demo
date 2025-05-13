import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DemoData } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataLoadingService {
  private http = inject(HttpClient);
  readonly DATA_URL = "/test-data.json"

  constructor() {
  }

  getData() {
    return this.http.get<DemoData>(this.DATA_URL);
  }


}
