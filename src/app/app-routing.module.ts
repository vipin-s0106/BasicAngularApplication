import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '',redirectTo:'/departments',pathMatch:'full'},
  {path: 'departments',component:DepartmentListComponent},
  {path: 'employees',component:EmployeeListComponent},
  {path:'employees/:id',component:EmployeeDetailComponent},
  {path: 'employee_detail',component:EmployeeDetailComponent},
  {path: 'test',component:TestComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  DepartmentListComponent,
  EmployeeListComponent,
  EmployeeDetailComponent,
  TestComponent,
  PageNotFoundComponent,
]