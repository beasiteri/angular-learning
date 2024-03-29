import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../../shared/services/data.service';
import { Photo } from '../components/http-learning.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpLearningService extends DataService<Photo> {
  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/photos', http);
  }
}
