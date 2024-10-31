// src/app/core/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserProfile } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<{ token: string, user: UserProfile }> {
    return this.http.post<{ token: string, user: UserProfile }>(`${this.baseUrl}/login`, { username, password })
      .pipe(
        tap(response => {
          // Save token in cookies or local storage as needed
          document.cookie = `token=${response.token}; path=/`;
        })
      );
  }


  logout(): void {
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
