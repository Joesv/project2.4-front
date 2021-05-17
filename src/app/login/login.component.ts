import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup

  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login(){
    const values = this.form.value;
    if(values.username && values.password){
      //login
      console.log(values);
    }
  }

}
