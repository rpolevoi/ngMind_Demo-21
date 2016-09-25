import { Component } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';


 
@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h3>Type into inputs and watch objects update</h3>
             <h3>Press Add button to assign current form state to component property ONLY if there is a name (required field).</h3>
              <form [formGroup]="myform" (submit)="add(myform.value)">
                      <label>Name</label>
                      <input type="text" formControlName="name"><br>
                      <label>City</label>
                      <input type="text" formControlName="city"><br>
                      <label>Country</label>
                      <input type="text" formControlName="country"><br>
                      <button>Add</button>
              </form>
              <p>myform.value (local template variable) = {{myform.value | json}}</p>
              
              <h3>Submitted Form State: {{submittedState | json}}</h3>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
   myform = new FormGroup({
      name: new FormControl(null, Validators.required),
      city: new FormControl(),
      country: new FormControl()
    })
    
  
  submittedState : Object;
  
  
  add(formObj) {if (this.myform.valid) {this.submittedState = formObj;} }
  
  
}
