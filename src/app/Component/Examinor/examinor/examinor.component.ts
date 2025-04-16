// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { ExaminorService } from '../../../services/Examinor/examinor.service';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-examinor',
//   standalone: true, 
//   imports: [CommonModule, FormsModule],
//   templateUrl: './examinor.component.html',
//   styleUrls: ['./examinor.component.css']
// })
// export class ExaminorComponent {

// }


import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExaminorService } from '../../../services/Examinor/examinor.service';

@Component({
  selector: 'app-examinor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './examinor.component.html',
  styleUrls: ['./examinor.component.css']
})
export class ExaminorComponent implements OnInit {
  title = 'FSD';
  users: any = [];
  newUser = {
    name: '',
    email: '',
    department: '',
    exam: ''
  };

  constructor(private examinorService: ExaminorService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.examinorService.getData().subscribe((response: any) => {
      if (response.status === 'success') {
        this.users = response.data; 
      } else {
        console.error('Error fetching examiners');
      }
    });
  }

  addUser(user: any, form: any) {
    const formattedUser = {
      name: user.name,
      email: user.email,
      department: user.department,
      assignedExams: user.exam,
    };
  
    this.examinorService.SaveData(formattedUser).subscribe(
      (response: any) => {
        this.fetchUsers();
        console.log('Response:', response);
  
        form.reset();
  
        this.newUser = {
          name: '',
          email: '',
          department: '',
          exam: ''
        };
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  deleteUser(examinerID: any) {
    if (!examinerID) {
      console.error("Error: Examiner ID is undefined");
      return;
    }

    this.examinorService.deleteUserById(examinerID).subscribe(
      () => {
        console.log(`User with ID ${examinerID} deleted`);
        this.fetchUsers();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
