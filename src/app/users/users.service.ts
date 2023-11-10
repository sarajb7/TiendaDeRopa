import { IUsers } from './users.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

url: string = 'https://fakestoreapi.com/users';

  constructor(private httpClient: HttpClient) {}

    findAll(): Observable<IUsers[]> {
      return this.httpClient.get<IUsers[]>(this.url);
   }

   findById(id: number): Observable<IUsers> {
      return this.httpClient.get<IUsers>(this.url);
   }

   create(user: IUsers): Observable<IUsers>{
    return this.httpClient.post<IUsers>(this.url, user);
   }

   update(user: IUsers): Observable<IUsers>{
    return this.httpClient.put<IUsers>(`${this.url}/${user.id}`, user)
     }

    delete(id: number): Observable<void>{
      return this.httpClient.delete<void>(`${this.url}/${id}`);
    }
}


