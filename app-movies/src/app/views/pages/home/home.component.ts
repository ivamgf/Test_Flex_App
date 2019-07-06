import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';

import { AppInterface } from '../../../app-interface';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public films: AppInterface[];
  public films$: Observable<AppInterface[]>;

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit() {
    // Method HttpClient
    const films$ = this.appService.getFilms()
    .pipe(
      catchError(error => {
        console.error(error);
        // tslint:disable-next-line: deprecation
        return empty();
      })
    );
    films$.subscribe(
      data => {
        this.films = data;
        console.log(this.films);
        // this.showFilms();
      }
    );
    // Method HttpClient
  }

}
