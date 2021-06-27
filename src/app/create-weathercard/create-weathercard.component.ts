import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-weathercard',
  templateUrl: './create-weathercard.component.html',
  styleUrls: ['./create-weathercard.component.css']
})
export class CreateWeathercardComponent implements OnInit {
  form: FormGroup;

  constructor(private location: Location, private fb: FormBuilder, private http: HttpClient, private router: Router, private snackBar: MatSnackBar) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      lat: ['', [Validators.required]],
      lon: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }



  setLocation(): void {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((loc)=>{
        const lat = loc.coords.latitude;
        const lon = loc.coords.longitude;

        this.form.controls['lat'].setValue(lat);
        this.form.controls['lon'].setValue(lon);

      })

    } else {
      this.snackBar.open('Geolocation not supported by the browser', 'OK', {
        duration: 1500
      });
    }
  }


  create(): void{
    if(!this.form.valid){
      return;
    }

    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(this.form.value);
    this.http.post('/api/device/weathercard', body, {headers, observe:'response'})
      .subscribe(resp =>{
        if (resp.status === 201){
          const snackBarRef = this.snackBar.open(`Created Weather Card ${this.form.value.name}.`, 'OK',{
            duration: 1500
          });
          snackBarRef.afterDismissed().subscribe(()=>{
            this.router.navigate(['home']);
          })
        }
      })

  }

  cancel(): void{
    this.location.back();
  }

}
export interface location{
  lat: number;
  lon: number;
}
