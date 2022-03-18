import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmpServiceService } from '../emp-service.service';

export interface Employees {
  userId: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  employeeCode: string;
  region: string;
  phoneNumber: string;
  emailAddress: string;
}

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})

export class ViewEmployeesComponent implements OnInit {

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<Employees>;


  constructor(private empService: EmpServiceService) {
    this.displayedColumns = ['userId', 'jobTitle', 'firstName', 'lastName', 'employeeCode', 'region', 'phoneNumber', 'emailAddress'];
    this.dataSource = new MatTableDataSource();

  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.empService.getEmployees().subscribe(results => {
      console.log(results);
      this.setTableData(results);
    }, error => {
      console.log(error);
      alert(error.error);
    })
  }

  setTableData(results: any): void {
    //this.dataSource = null;
    this.dataSource = new MatTableDataSource(results);
  }

}
