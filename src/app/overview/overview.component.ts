import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router'
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

}
