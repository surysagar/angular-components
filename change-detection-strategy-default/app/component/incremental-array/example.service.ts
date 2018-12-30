import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of'// doesn't work in angular6
import { delay, map, concatAll } from 'rxjs/operators';

@Injectable()
export class ExampleService {
  getNumbers(): Observable<any> {
    return of(0, 1, 2, 3, 4, 5).pipe(
      map(data => of(data).pipe(delay(1000))),
      concatAll()
    );
  }
}
