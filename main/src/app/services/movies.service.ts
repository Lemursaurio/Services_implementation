import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  constructor(private http: HttpClient) { }

  getMovie(title: String): Observable<any> {
    const url = `http://localhost:3002/movies/getMovie?title=${title}`;
    return this.http.get<any>(url);
  }
}