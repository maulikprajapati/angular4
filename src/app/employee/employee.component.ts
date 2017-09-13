import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from "./employee";
import { EmployeeServices } from 'app/employee/employee.service';
import "rxjs/add/operator/retry";
import { CommonServices } from 'app/common.services';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {

  constructor(private employeeServices: EmployeeServices, private commonServices: CommonServices) { }
  private employees: Employee[];
  private selectedEmp: Employee;
  private res: any;
  public searchEmpSubscription: Subscription;
  public empChangesSubscription: Subscription
  ngOnInit() {
    this.employeeServices.getEmployees().retry().subscribe((res) => {
      this.employees = res;
    });
    this.searchEmpSubscription = this.commonServices.searchResult.subscribe((res => {
      //alert(res);
    }));

    this.empChangesSubscription = this.commonServices.employeeChanges.subscribe((employee) => {
      let emp = this.employees.find(x => x.Id === employee.Id);
      if (emp) {
        emp = employee;
      } else {
        this.employees.push(employee);
      }
    });
  }


  removeEmployee(Id: number) {
    let result = confirm("Are you sure want to delete employee?");
    if (result) {
      this.employeeServices.deleteEmployee(Id).subscribe((res) => {
        let index = this.employees.findIndex(x => x.Id == Id);
        if (index >= 0) {
          this.employees.splice(index, 1);
        }
      });
    }
  }

  ngOnDestroy() {
    this.searchEmpSubscription.unsubscribe();
    this.empChangesSubscription.unsubscribe();
  }

  showDetail(emp) {
    this.selectedEmp = emp;
  }

  trackEmp(index: number, employee: Employee): number {
    return employee.Id;
  }
}
