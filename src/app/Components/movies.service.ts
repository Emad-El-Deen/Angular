import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  movieAPI='http://localhost:3000/movies';
  saveNewMovies(form:FormData):Observable<any>{
    return this.http.post<any>(this.movieAPI,form)
  }

  getMovies(): Observable<any> {
    return this.http.get(this.movieAPI);
  }

  deleteMovie(id: any): Observable<any> {
    return this.http.delete(`${this.movieAPI}/${id}`);
  }

  updateMovie(id: any, updatedData: any): Observable<any> {
    return this.http.put(`${this.movieAPI}/${id}`, updatedData);
  }

}

