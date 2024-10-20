import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common'; 

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiURL = 'http://localhost:3000/user/login';
  usersAPI = 'http://localhost:3000/user';
  movieApi = 'http://localhost:3000/movies';
  private tokenSubject :BehaviorSubject<string | null> = new BehaviorSubject<string |null>(null);
  isLogin : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _http:HttpClient, private _router:Router, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      if (token) {
        this.tokenSubject.next(token);
        this.isLogin.next(true);
      }
    }
  }

  login(data:any):Observable<any>{
    const { email, password } = data;
    return this._http.post<any>(this.apiURL, { email, password }).pipe(
      tap(res => {
        const token = res;
        console.log(token);
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('token', token);
        }
        this.tokenSubject.next(token);
        this.isLogin.next(true);
      })
    );
  }

  getToken():Observable<string|null>{
    return this.tokenSubject.asObservable();
  }

  logOut(){
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this.tokenSubject.next(null);
    this.isLogin.next(false);
    this._router.navigate(['/login']);
  }

  isAuthanticated():boolean{
    return this.tokenSubject.value !== null;
  }

  getUsers():Observable<any>{
    let token = '';
    if (isPlatformBrowser(this.platformId)) {
      token = localStorage.getItem('token') || '';
    }

    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    });
    return this._http.get<any>(this.usersAPI, { headers });
  }

  saveNewProduct(formData: FormData):Observable<any>{
    return this._http.post<any>(this.movieApi, formData);
  }
}

