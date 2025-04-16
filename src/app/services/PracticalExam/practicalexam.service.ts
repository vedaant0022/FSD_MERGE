import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../utils/urls';

@Injectable({
  providedIn: 'root'
})
export class PracticalExamService {


  constructor(private http: HttpClient) {}

  getAllExams(): Observable<any> {
    return this.http.get(`${BASE_URL}/practicalexam/all`);
  }

  createExam(examData: any): Observable<any> {
    return this.http.post(`${BASE_URL}/practicalexam/create`, examData);
  }

  deleteExam(id: number): Observable<any> {
    return this.http.delete(`${BASE_URL}/practicalexam/delete/${id}`);
  }

  getExamById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL}/${id}`);
  }
}
