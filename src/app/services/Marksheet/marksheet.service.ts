import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../utils/urls';

@Injectable({
  providedIn: 'root'
})
export class MarksheetService {


  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${BASE_URL}/marksheet/all`);
    
  }

  createMarksheet(marksheet: any): Observable<any> {
    return this.http.post(`${BASE_URL}/marksheet/create`, marksheet, { responseType: 'text' });
  }

  deleteMarksheet(id: any): Observable<any> {
    return this.http.delete(`${BASE_URL}/marksheet/delete/${id}`, { responseType: 'text' });
  }
}
