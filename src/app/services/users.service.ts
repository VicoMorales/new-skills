import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { STATUS } from '../shared/constants/users.constant';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  public getUsersList$(): Observable<{type:string, value:any[]}> {
    // Simula la obtención de datos desde una API
    // return throwError('Error al cargar usuarios');
    return of({type:'plate', value: [
      { id: 1, name: 'Juan',email:"juan@gmail.com",phone:"985854576", status: STATUS.USER },
      { id: 2, name: 'María',email:"maria@gmail.com",phone:"988457415", status: STATUS.USER },
      { id: 3, name: 'Carlos',email:"carlos@gmail.com",phone:"965859578", status: STATUS.USER }
    ]}).pipe(delay(2000));
  }

  public getUsersOwnerList$(): Observable<{type:string, value:any[]}> {
    // Simula la obtención de datos desde una API
    // return throwError('Error al cargar usuarios');
    return of({type: 'gold', value: [
      { id: 4, name: 'Ricardo',email:"ricardo@gmail.com",phone:"985854576", status: STATUS.OWNER },
      { id: 5, name: 'Crisanta',email:"crisanta@gmail.com",phone:"978454415", status: STATUS.OWNER },
      { id: 6, name: 'Luisa',email:"luisa@gmail.com",phone:"954859589", status: STATUS.OWNER },
      { id: 7, name: 'Romina',email:"romina@gmail.com",phone:"978459578", status: STATUS.OWNER },
      { id: 8, name: 'Luis',email:"luis@gmail.com",phone:"955659578", status: STATUS.OWNER }
    ]}).pipe(delay(8000));
  }
}
