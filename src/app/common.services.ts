import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from 'rxjs/Subject';
import { Employee } from 'app/employee/employee';

@Injectable()
export class CommonServices {
    count = 1;
    public searchResult: BehaviorSubject<string> = new BehaviorSubject<string>("0");
    public employeeChanges: Subject<Employee> = new Subject();

    public deleteEmployeeSub: Subject<number> = new Subject();
    public setSearchParams(empName: string) {
        this.searchResult.next(empName);
    }

    public addUpdateEmployee(employee: Employee) {
        this.employeeChanges.next(employee);
    }

        // TODO: not needed as on same page
    /*
    public deleteEmployee(id: number) {
        this.deleteEmployeeSub.next(id);
    }
    */
}