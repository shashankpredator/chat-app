import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

}

export interface Async<T> {
  state : boolean,
  data ?: T,
  error ?: any
}

export function state<T>(data: Observable<any>) : Observable<Async<T>>
  {
    return data.pipe(map(data => 
      ({state: false, data})),
      catchError(error => of({state: false, error})),
      startWith({state: true}),
    )
  }
