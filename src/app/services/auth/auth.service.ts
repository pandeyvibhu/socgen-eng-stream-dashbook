import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Tokens } from 'src/app/Tokens';
import { tap, mapTo, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {  
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';

  constructor(private http: HttpClient, public router: Router) {
      console.log("Auth service");
  }

  login(user: { username: string, password: string }): Observable<any> {
    return this.http.post<any>('server/authenticate', user)
      .pipe(
        tap(tokens => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  logout(): void {
    localStorage.removeItem(this.JWT_TOKEN);
    this.router.navigate(['/']);
  }

  isLoggedIn(): any {
    return !!this.getJwtToken();
  }

  refreshToken(): any {
    return this.http.post<any>('server/refresh', {
      refreshToken: this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.jwt);
    }));
  }

  getJwtToken(): any {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, tokens: Tokens): any {
    this.storeTokens(tokens);
  }

  private doLogoutUser(): any {
    this.removeTokens();
  }

  private getRefreshToken(): any {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string): any {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Tokens): any {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
  }
  private removeTokens(): any {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}