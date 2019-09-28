import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Crud operation with an array';
  hideUpdate: boolean=true;
  restrictDelete: boolean;
  //employees array
  employees = [
  {name: "disha", position: "manager", disableDelete:false},
  {name: "megha", position: "ceo",disableDelete:false},
  {name: "prerak", position: "cto",disableDelete:false},
  ];

  //model declaration
  model:any={};
  
  //add employee method
  addEmployee(){
  if(this.model.name !== undefined && this.model.position !== undefined) {
     this.employees.push(this.model);
      this.model = {};
    }else {
    alert("please enter some values in name and position both valuesare required");
    }
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
    this.model.disableDelete= true;
    this.myValue = k;
    this.hideUpdate = false;
  }

  //update employees
  updateEmployee() {  
  this.model.disableDelete=false;
  this.employees[this.myValue]=this.model;
  this.model="";
  this.hideUpdate = true;
  }
}
