import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): Observable<any[]> {
    // Simula la obtención de datos desde una API
    return of([
      { id: 1, name: 'Juan' },
      { id: 2, name: 'María' },
      { id: 3, name: 'Carlos' }
    ]);
  }
}
