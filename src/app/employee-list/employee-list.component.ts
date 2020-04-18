import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees;
  
  constructor(private _employeeService: EmployeeService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(
      data => this.employees = data,
      error => console.log("Server Error")
      )
  }

  getEmployeeDetail(employee){
    this.router.navigate(['/employees',employee.id])
  }

}
