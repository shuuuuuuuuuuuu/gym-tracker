import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }) {
    return this.http.post<any>(`${this.apiUrl}/login`, data, { withCredentials: true }).pipe(
      tap(res => {
        console.log('API 回傳資料:', res); // 這裡加一行，看有沒有印出來
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
      })
    );
  }

  register(data: { name: string; email: string; password: string }) {
    console.log('register');
    
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  changePassword(data: any) {
    return this.http.post(
      `${this.apiUrl}/change-password`,
      data
    );
  }

  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  clearAuth() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  get token() {
    return localStorage.getItem('token');
  }
  
  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
