import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../utils/urls';

@Injectable({
  providedIn: 'root'
})
export class ExaminorService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = `${BASE_URL}/examiner/all`;
    return this.http.get(url);
  }

  SaveData(user: any): Observable<any> {
    const url = `${BASE_URL}/examiner/create`;
    return this.http.post(url, user, { responseType: 'text' });
  }

  deleteUserById(examinerID: number): Observable<any> {
    const url = `${BASE_URL}/examiner/delete/${examinerID}`;
    return this.http.delete(url,{ responseType: 'text' });
  }
}
