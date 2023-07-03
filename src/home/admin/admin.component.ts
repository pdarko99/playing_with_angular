import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-one',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  standalone:true
  
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("hey")
  }

}