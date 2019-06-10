import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthLoginInfo } from './login-info';
import { JwtResponse } from './jwt-response';
import { SignUpInfo } from './signup-info';
import { TokenStorageService } from './token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {
  private loginUrl = '/api/auth/signin';
  private signupUrl = '/api/auth/signup';

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  signOut() {
    this.tokenStorageService.clear();
  }

  isAuthenticated(): boolean {
    return this.tokenStorageService.getToken() != null && !this.tokenStorageService.isTokenExpired();
  }

  public getAuthorities(): string[] {
    return this.tokenStorageService.getAuthorities();
  }

}
