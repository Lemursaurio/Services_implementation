import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZipService{
  constructor(private http: HttpClient) {}

  getZip(zip: String): Observable<any> {
    const url = `http://localhost:3001/zip/getZip?zip=${zip}`;
    return this.http.get<any>(url);
  }
}
