import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ParamMap } from '@angular/router'
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees;
  public selectedID;
  
  constructor(private _employeeService: EmployeeService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    //below is for to read the optional parameter 
    //that can be read and used for to give user view like you have just selected the id previous
    //currently this is not working just for css style sheet
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedID = id;
    });
    this._employeeService.getEmployees().subscribe(
      data => this.employees = data,
      error => console.log("Server Error")
      )
  }

  getEmployeeDetail(employee){
    //this.router.navigate(['/employees',employee.id])
    //using relative id
    this.router.navigate([employee.id],{relativeTo:this.route})
  }

  isSelected(employee){
    return employee.id == this.selectedID;
  }

}
