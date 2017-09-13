import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/retry";
import { Employee } from "app/employee/employee";
@Injectable()
export class EmployeeServices {
    constructor(private _http: Http) { }
    public getEmployees(): Observable<any> {
        return this._http.get("http://localhost:8001/api/employees").map((res: Response, error) => {
            return res.json();
        }).catch((err: any, caught) => {
            throw new Error("Some thing is wrong");
        });
    }

    public addEmployee(employee: Employee) {
        return this._http.post("http://localhost:8001/api/saveEmployee", employee).map((res: Response) => {
            debugger
            return res.json();
        }).catch((err: any, caught: any) => {
            throw new Error("Some thing is wrong");
        });
    }

    public deleteEmployee(id: number) {
        return this._http.get("http://localhost:8001/api/deleteEmployee/" + id.toString()).map((res: Response, error) => {
            return res.json();
        }).catch((err: any, caught) => {
            throw new Error("Some thing is wrong");
        });
    }
}