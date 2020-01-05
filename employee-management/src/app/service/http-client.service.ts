import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string
  ) {
  }

}

export class HttpClientService {
  constructor(
    private httpClient: HttpClient,
    private auth: AuthenticationService
  ) {
  }

  getEmployees() {

    return this.httpClient.get<Employee[]>("http://localhost:8080/employees");
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/" + employee.empId);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee);
  }
}
