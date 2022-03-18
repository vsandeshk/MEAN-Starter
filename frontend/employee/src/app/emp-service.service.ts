import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private http: HttpClient) { }

  addEmployee(data:any) {
    return this.http.post(`${baseUrl}addData`, data)
  }

  getEmployees(){
    return this.http.get(`${baseUrl}getData`)
  }

  getEmployeeById(id:string){
    return this.http.get(`${baseUrl}getDataById/${id}`);
  }

}
