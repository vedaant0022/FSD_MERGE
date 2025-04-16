import { Component, OnInit } from '@angular/core';
// import { MarksheetService } from '../../service/marksheet.service';
import { FormsModule, NgForm } from '@angular/forms';
import { MarksheetService } from '../../../services/Marksheet/marksheet.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css'],
  imports:[FormsModule,CommonModule]

})
export class MarksheetComponent implements OnInit {

  marksheets: any[] = [];
  newMarksheet = {
    studentId: '',
    studentName: '',
    examId: '',
    examName: '',
    examDate: '',
    resultStatus: '',
    academicYear: ''
  };

  constructor(private marksheetService: MarksheetService) {}

  ngOnInit(): void {
    this.fetchMarksheets();
  }

  fetchMarksheets() {
    this.marksheetService.getAll().subscribe((res: any) => {
      this.marksheets = res.data;
    });
  }

  addMarksheet(form: NgForm) {
    const payload = { ...this.newMarksheet };
    this.marksheetService.createMarksheet(payload).subscribe({
      next: () => {
        this.fetchMarksheets();
        form.resetForm(); // Reset the form after success
      },
      error: (err) => {
        console.error('Error adding marksheet:', err);
      }
    });
  }

  deleteMarksheet(id: number) {
    this.marksheetService.deleteMarksheet(id).subscribe({
      next: () => {
        this.fetchMarksheets();
      },
      error: (err) => {
        console.error('Error deleting marksheet:', err);
      }
    });
  }
}
