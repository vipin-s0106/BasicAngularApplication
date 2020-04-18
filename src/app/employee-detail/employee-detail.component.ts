import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router'

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employee_id;

  constructor(private _employeeService: EmployeeService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.employee_id = id;
  }

  goToEmployee(){
    let selected_id = this.employee_id ? this.employee_id : null; 
    //this.router.navigate(['/employees',{id:selected_id}])
    //using relative route
    this.router.navigate(['../',{id:selected_id}],{relativeTo:this.route})
  }

  getOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  } 

  getContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }

}
