import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {loginSucces} from "../login/login.component";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  username = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  password2 = new FormControl('', [Validators.required, Validators.minLength(8)]);



  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength(6)],
      password2: ['', Validators.required, Validators.minLength(6)],
      name: ['', Validators.required],
    });
  }

  register() {
    const values = {
      username: this.username.valid && this.username.value,
      email: this.email.valid && this.email.value,
      name: this.name.valid && this.name.value,
      password: this.password.valid && this.password.value,
      password2: this.password2.valid && this.password2.value,
    };

    if (values.username && values.email && values.name && values.password && (values.password2 === values.password)) {
      const headers = {'content-type': 'application/json'};
      const payload = {email: values.email, password: values.password, username: values.username};
      const body = JSON.stringify(payload);
      this.http.post('/api/user/register', body, {headers, observe: 'response'})
        .subscribe(resp => {

          switch (resp.status) {
            case 201:
              const token: loginSucces = JSON.parse(JSON.stringify(resp.body));
              localStorage.setItem('jwttoken', token.access_token);
              const redirectTo = resp.headers.get('location');
              this.router.navigate([redirectTo]);
              break;
            case 303:
              this.router.navigate([resp.headers.get('location')]);
              break;
          }

        }, error =>{
          this.snackBar.open(error.error.error,'OK', {duration: 1500})
        })

    }
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessageUsername() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }
  }
  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
  }
  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.password.hasError('minlength')) {
      return 'Minimum length is 8 characters';
    }
  }
  getErrorMessagePassword2() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
  }


}

