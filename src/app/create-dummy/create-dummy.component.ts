import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-dummy',
  templateUrl: './create-dummy.component.html',
  styleUrls: ['./create-dummy.component.css']
})
export class CreateDummyComponent implements OnInit {
  form: FormGroup;

  constructor(private location: Location, private fb: FormBuilder, private http: HttpClient,
              private router: Router, private snackBar: MatSnackBar) {
    this.form = this.fb.group({
      dummy_id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  create(): void {
    if (!this.form.valid) {
      return;
    }

    const headers = {'content-type': 'application/json'};
    console.log(this.form.value);
    const body = JSON.stringify(this.form.value);
    console.log(body);
    this.http.post('/api/dummy_device/', body, {headers, observe: 'response'})
      .subscribe(resp => {
        if (resp.status === 201) {
          const snackBarRef = this.snackBar.open(`Created device ${this.form.value.name}.`, 'OK', {
            duration: 1500
          });

          snackBarRef.afterDismissed().subscribe(() => {
            this.router.navigate(['home']);
          });
        }
      });
  }

  cancel(): void {
    this.location.back();
  }
}
