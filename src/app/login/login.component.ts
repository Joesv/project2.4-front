import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: boolean = false;

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private snackBar: MatSnackBar) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    const values = this.form.value;
    if (values.email && values.password) {
      const headers = {'content-type': 'application/json'};
      const payload = {email: values.email, password: values.password};
      const body = JSON.stringify(payload);
      this.http.post('/api/user/login', body, {headers: headers, observe: 'response'})
        .subscribe(resp => {
          if (resp.status === 201) {
            const token: loginSucces = JSON.parse(JSON.stringify(resp.body));
            localStorage.setItem('jwttoken', token.access_token);
            const redirectTo = resp.headers.get('location');
            this.router.navigate([redirectTo]);
          } else {
            this.snackBar.open('Email and/or password is incorrect.','OK', {duration: 1500})
          }

        }, error=>{
          let message = ""
          if(error.error.error === "email or password is incorrect"){
            message = 'Email and/or password is incorrect';
          } else {
            message = 'Something went wrong'
          }
          this.snackBar.open(message,'OK', {duration: 1500})


        });
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}

export interface loginSucces {
  access_token: string;
}
