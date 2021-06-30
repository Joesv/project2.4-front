import {Component, Input, OnInit} from '@angular/core';
import {DummyDeviceResponse} from './dummy-device-data.service';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dummy-device',
  templateUrl: './dummy-device.component.html',
  styleUrls: ['./dummy-device.component.css']
})
export class DummyDeviceComponent implements OnInit {

  @Input() dummy: DummyDeviceResponse;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  changeStatus(value: number): void {
    this.dummy.value = value;
    const headers = {'content-type': 'application/json'};
    this.http.put(`/api/dummy_device/${this.dummy.id}`, {status: value}, {headers, observe: 'response'})
      .subscribe(resp => {
        console.log('Updated Device!');
        console.log(resp);
      });
  }

  deleteDummy(): void {
    const headers = {'content-type': 'application/json'};
    this.http.delete(`/api/dummy_device/${this.dummy.id}`, {headers, observe: 'response'})
      .subscribe(resp => {
        console.log('Deleted Device!');
        console.log(resp);
      });
  }

}
