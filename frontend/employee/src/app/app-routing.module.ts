import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeesComponent } from "./view-employees/view-employees.component";

const routes: Routes = [{
  path: 'employee/add',
  component: AddEmployeeComponent
}, {
  path: 'employee/view-all',
  component: ViewEmployeesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
