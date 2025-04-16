import { Component, OnInit } from '@angular/core';
import { VenueService } from '../../../services/Venue/venue.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css'],
  imports: [FormsModule, CommonModule],
})
export class VenueComponent implements OnInit {
  venues: any[] = []; // Store list of venues
  newVenue = {
    name: '',
    location: '',
    capacity: 0,
  };

  constructor(private venueService: VenueService) { }

  ngOnInit(): void {
    this.fetchVenues();
  }

  // Fetch all venues
  fetchVenues(): void {
    this.venueService.getAllVenues().subscribe((res: any) => {
      this.venues = res.data;
      console.log('Fetched venues:', this.venues);
    });
  }

  // Add a new venue
  addVenue(form: NgForm): void {
    const { name, location, capacity } = this.newVenue;
    if (!name || !location || !capacity) {
      alert('Please fill in all fields before submitting.');
      return;
    }
    const payload = { ...this.newVenue };
    this.venueService.createVenue(payload).subscribe({
      next: () => {
        this.fetchVenues();
        form.resetForm();
      },
      error: (err) => {
        console.error('Error adding venue:', err);
      },
    });
  }

  // Delete a venue by ID
  deleteVenue(id: number): void {
    this.venueService.deleteVenue(id).subscribe({
      next: () => {
        this.fetchVenues();
      },
      error: (err) => {
        console.error('Error deleting venue:', err);
      },
    });
  }
}
