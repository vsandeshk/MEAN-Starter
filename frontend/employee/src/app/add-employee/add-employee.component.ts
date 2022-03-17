import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {EmpServiceService} from '../emp-service.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private empService: EmpServiceService) {
    this.formGroup = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      jobTitle: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      employeeCode: new FormControl('', [Validators.required]),
      region: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
  }

  addEmployee(): void {
    if (this.formGroup.valid) {
        this.empService.addEmployee(this.formGroup.value).subscribe(results=>{
          alert(results);
        }, error => {
          console.log(error);

          alert(error.message);
        });
    }
  }

}
