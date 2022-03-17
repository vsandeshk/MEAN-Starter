import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private http: HttpClient) { }

  addEmployee(data:any) {
    return this.http.post(`localhost:3000/addData`, data)
  }

}
