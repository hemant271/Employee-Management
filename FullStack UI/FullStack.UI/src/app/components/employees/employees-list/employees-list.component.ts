import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit{
    employees: Employee[] = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        phone: 11111,
        salary: 60000,
        department: 'HR'
      } ,
      {
        id: '2',
        name: 'Hemant Patidar',
        email: 'hpatidar@livegage.ai',
        phone: 11111,
        salary: 50000,
        department: 'IT'
      }

    ]
    constructor() {    }

    ngOnInit(): void {    }
}
