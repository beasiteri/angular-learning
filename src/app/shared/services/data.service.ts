import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../../modules/http-learning/components/http-learning.interfaces';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';
import { BadInput } from '../../common/bad-inputs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    @Inject('URL') private url: string,
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get<Photo[]>(this.url).pipe(
      map((response: Photo[]) => response),
      catchError(this.handleError)
    );
  }

  create(resource: Photo) {
    return this.http.post<Photo>(this.url, JSON.stringify(resource)).pipe(
      map((response: Photo) => response),
      catchError(this.handleError)
    );
  }

  update(resource: Photo, updatedPhoto: Photo) {
    return this.http
      .patch<Photo>(`${this.url}/${resource.id}`, updatedPhoto)
      .pipe(
        map((response: Photo) => response),
        catchError(this.handleError)
      );
  }

  delete(resource: Photo) {
    return this.http.delete<Photo>(`${this.url}/${resource.id}`).pipe(
      map((response: Photo) => response),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 400) return throwError(() => new BadInput(error));
    else if (error.status === 404) return throwError(() => new NotFoundError());
    else return throwError(() => new AppError(error));
  }
}
