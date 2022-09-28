import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getAllUsers(): Observable<any> {
    return this.http.get('https://api.github.com/users');
  }

  getUserById(id: string | null): Observable<any> {
    return this.http.get(`https://api.github.com/users/${id}`);
  }
}
