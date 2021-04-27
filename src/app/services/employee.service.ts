// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Employee } from 'app/models/employee';
// import { environment } from 'environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeService {

//   constructor(private http : HttpClient) { }

//   private URL = environment.apiBaseUrl;
//   getAllEmployee():Observable<Employee>{
//     return this.http.get<Employee>(`${this.URL}/employee/all`);
//   }
//   getNumOfEmployess():Observable<number>{
//     return this.http.get<number>(`${this.URL}/employee/num`);
//   }
//   addEmployee(employee: Employee ):Observable<Employee>{
//     return this.http.post<Employee>(`${this.URL}/employee/add`,employee); 
//   }
//   updateEmployee(employee: Employee):Observable<Employee>{
//     return this.http.put<Employee>(`${this.URL}/employee/update`,employee);
//   }
//   deleteEmployee(id:any):Observable<void>{
//     return this.http.delete<void>(`${this.URL}/employee/delete/${id}`);
//   }

// }
