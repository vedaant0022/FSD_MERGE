import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PracticalExamService } from '../../../services/PracticalExam/practicalexam.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-practical-exam',
  templateUrl: './practical.component.html',
  styleUrls: ['./practical.component.css'],
  imports: [CommonModule, FormsModule],
})
export class PracticalExamComponent implements OnInit {
  practicalExams: any[] = [];

  newExam = {
    studentName: '',
    rollNumber: '',
    courseName: '',
    subjectCode: '',
    examDate: '',
    marksObtained: null
  };

  constructor(private practicalExamService: PracticalExamService) {}

  ngOnInit(): void {
    this.getAllExams();
  }

  getAllExams() {
    this.practicalExamService.getAllExams().subscribe({
      next: (res) => {
        this.practicalExams = res;
      },
      error: (err) => console.error('Error fetching exams:', err)
    });
  }

  createExam(form: NgForm) {
    const values = Object.values(this.newExam);
    if (values.some(field => field === '' || field === null)) {
      alert('Please fill in all fields.');
      return;
    }

    this.practicalExamService.createExam(this.newExam).subscribe({
      next: () => {
        this.getAllExams();
        form.resetForm();
      },
      error: (err) => console.log('Error creating exam:', err)
    });
  }

  deleteExam(id: number) {
    this.practicalExamService.deleteExam(id).subscribe({
      next: () => this.getAllExams(),
      error: (err) => console.error('Error deleting exam:', err)
    });
  }
}
