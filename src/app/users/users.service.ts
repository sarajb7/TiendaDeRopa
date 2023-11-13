import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsers } from './users.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = "https://fakestoreapi.com/users";

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<IUsers[]> {
    return this.httpClient.get<IUsers[]>(this.url);
  }

  findById(id: number): Observable<IUsers> {
    return this.httpClient.get<IUsers>(`${this.url}/${id}`);
  }

  create(job: IUsers): Observable<IUsers> {
    return this.httpClient.post<IUsers>(this.url, job);
  }

  update(Job: IUsers): Observable<IUsers>{
    return this.httpClient.put<IUsers>(`${this.url}/${Job.id}`, Job);
  }

  deleteById(id: number): Observable<{}>{
    return this.httpClient.delete(`${this.url}/${id}`)
  }

}
