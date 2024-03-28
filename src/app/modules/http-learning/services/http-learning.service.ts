import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../../shared/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class HttpLearningService extends DataService {
  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/photos', http);
  }
}
