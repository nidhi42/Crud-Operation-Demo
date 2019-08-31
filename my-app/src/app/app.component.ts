import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Crud operation with an array';
  hideUpdate: boolean=true;

  employees = [
  {name: "disha", position: "manager"},
  {name: "megha", position: "ceo"},
  {name: "prerak", position: "cto"},
 
  ];
  model:any={};
  model2:any={};
  addEmployee(){
    this.employees.push(this.model);
    this.model = {};
    
  }
  deleteEmployee(i) {
    this.employees.splice(i,1);
    console.log(i);
  }
  myValue;
  editEmployee(k) {
  //this.model2.name = this.employees[k].name;
  //this.model2.position = this.employees[k].position;
  this.model = this.employees[k];
  this.myValue = k;
  this.hideUpdate = false;
  }
  updateEmployee() {  
  this.employees[this.myValue]=this.model;
  this.model="";
   this.hideUpdate = true;
  }
}
