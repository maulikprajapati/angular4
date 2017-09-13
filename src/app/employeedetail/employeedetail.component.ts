import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'app/employee/employee';

@Component({
  selector: 'employee-detail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

  constructor() { }
  @Input()
  selectedEmployee: Employee;
  ngOnInit() {
  }

}
