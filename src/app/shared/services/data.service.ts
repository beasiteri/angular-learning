import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';
import { BadInput } from '../../common/bad-inputs';
import { ResourceWithId } from './data.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService<T extends ResourceWithId> {
  constructor(
    @Inject('URL') private url: string,
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get<T[]>(this.url).pipe(
      map((response: T[]) => response),
      catchError(this.handleError)
    );
  }

  create(resource: T) {
    return this.http.post<T>(this.url, JSON.stringify(resource)).pipe(
      map((response: T) => response),
      catchError(this.handleError)
    );
  }

  update(resource: T, updatedT: T) {
    return this.http
      .patch<T>(`${this.url}/${resource.id}`, updatedT)
      .pipe(
        map((response: T) => response),
        catchError(this.handleError)
      );
  }

  delete(resource: T) {
    return this.http.delete<T>(`${this.url}/${resource.id}`).pipe(
      map((response: T) => response),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 400) return throwError(() => new BadInput(error));
    else if (error.status === 404) return throwError(() => new NotFoundError());
    else return throwError(() => new AppError(error));
  }
}
