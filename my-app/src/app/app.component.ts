import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Crud operation with an array';
  hideUpdate: boolean=true;

  //employees array
  employees = [
  {name: "disha", position: "manager"},
  {name: "megha", position: "ceo"},
  {name: "prerak", position: "cto"},
  ];

  //model declaration
  model:any={};

  //add employee method
  addEmployee(){
    this.employees.push(this.model);
    this.model = {};
    
  }

  //delets employees
  deleteEmployee(i) {
    this.employees.splice(i,1);
    console.log(i);
  }

  //edit employees
  myValue;
  editEmployee(k) {
  this.model = this.employees[k];
  this.myValue = k;
  this.hideUpdate = false;
  }

  //update employees
  updateEmployee() {  
  this.employees[this.myValue]=this.model;
  this.model="";
   this.hideUpdate = true;
  }
}
