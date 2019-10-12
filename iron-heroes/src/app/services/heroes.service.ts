import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { IHeroe } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {
  private heroesUrl = 'api/heroes/heroes.json';

  constructor(private httpClient : HttpClient) { }

  getHeroes(): Observable<IHeroe[]>{
    return this.httpClient.get<IHeroe[]>(this.heroesUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handlerError)
    )
  }

  getHeroe(heroeId: number): Observable<IHeroe>{
    return this.getHeroes()
    .pipe(map((heroes: IHeroe[]) => heroes.find(h => h.id == heroeId)  ));
    
  }

  private handlerError(error: HttpErrorResponse){
    // in a real world app, we may send the error to some remote logging infraestructure
    // instead of just logging it to the console

    let errorMessage = '';

    if(error.error instanceof ErrorEvent){
      // A client-side or network error ocurred. Handle it accordingly
      errorMessage = `An error ocurred: ${error.error.message}`;
    }else{
      // The backend returned an unsuccessful response code
      // The response body may contain clues as to what went wrong
      errorMessage = `Server return code: ${error.status}, error message is: ${error.message}`
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
