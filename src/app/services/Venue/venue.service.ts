import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../utils/urls';

interface Venue {
  id?: number;
  name: string;
  location: string;
  capacity: number;
}

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  constructor(private http: HttpClient) { }

  // Get all venues
  getAllVenues(): Observable<Venue[]> {
    return this.http.get<Venue[]>(`${BASE_URL}/venues/get`);
  }

  // Create a new venue
  createVenue(venue: Venue): Observable<Venue> {
    return this.http.post<Venue>(`${BASE_URL}/venues/create`, venue);
  }

  // Get a venue by ID
  getVenueById(id: number): Observable<Venue> {
    return this.http.get<Venue>(`${BASE_URL}/${id}`);
  }

  // Delete a venue
  deleteVenue(id: number): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/venues/delete/${id}`);
  }
}
