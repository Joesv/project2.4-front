import {Component, Input, OnInit} from '@angular/core';
import {LampDeviceResponse} from './lamp-device-data.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-lamp-device',
  templateUrl: './lamp-device.component.html',
  styleUrls: ['./lamp-device.component.css']
})
export class LampDeviceComponent implements OnInit {
  @Input() lamp: LampDeviceResponse;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  changeStatus(checked: boolean): void {
    this.lamp.last_status = checked ? '1' : '0';
    const headers = {'content-type': 'application/json'};
    this.http.put(`/api/lamp_device/${this.lamp.id}`, {status: checked}, {headers, observe: 'response'})
      .subscribe(resp => {
        console.log('Updated lamp!');
        console.log(resp);
      });
  }

  deleteLamp(): void {
    const headers = {'content-type': 'application/json'};
    this.http.delete(`/api/lamp_device/${this.lamp.id}`, {headers, observe: 'response'})
      .subscribe(resp => {
        console.log('Deleted lamp!');
        console.log(resp);
      });
  }
}
