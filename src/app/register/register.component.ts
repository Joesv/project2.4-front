import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import { Router } from "@angular/router";
import {loginSucces} from "../login/login.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private fb:FormBuilder, private http:HttpClient, private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  register(){
    const values = this.form.value;
    console.log(values)
    if(values.username && values.email && values.password && values.password2 && values.name && (values.password ===values.password2)){
      const headers = {'content-type': 'application/json'}
      const payload = {email: values.email, password: values.password, username: values.username}
      const body = JSON.stringify(payload)
      this.http.post("/api/user/register", body, {'headers':headers, observe: 'response'})
        .subscribe(resp => {

          switch (resp.status) {
            case 201:
              const token : loginSucces = JSON.parse(JSON.stringify(resp.body))
              localStorage.setItem('jwttoken', token.access_token)
              const redirectTo = resp.headers.get("location")
              this.router.navigate([redirectTo])
              break;
            case 303:
              this.router.navigate([resp.headers.get("location")])
              break;
          }

        })
    }
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}

