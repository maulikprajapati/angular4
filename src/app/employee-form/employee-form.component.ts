import { Component, OnInit } from '@angular/core';
import { Employee } from 'app/employee/employee';
import { EmployeeServices } from 'app/employee/employee.service';
import { CommonServices } from 'app/common.services';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  private objEmployee: Employee = <Employee>{};
  constructor(private employeeServices: EmployeeServices, private cs: CommonServices) { }

  ngOnInit() {
  }

  onFormSubmit() {
    this.employeeServices.addEmployee(this.objEmployee).subscribe((res) => {
      this.cs.addUpdateEmployee(JSON.parse(JSON.stringify(this.objEmployee)));
      this.objEmployee = <Employee>{};  
    });
  }
}
