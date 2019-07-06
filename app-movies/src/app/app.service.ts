import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { AppInterface } from './app-interface';
import { environment } from '../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly configUrl = `${environment.API}filmes`;

  getFilms() {
    return this.http.get<AppInterface[]>(this.configUrl, httpOptions).pipe(take(1));
  }

  constructor(
    private http: HttpClient
  ) { }
}
