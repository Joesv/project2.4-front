import { Component, OnInit } from '@angular/core';
import {
  LampDeviceDataService,
  LampDeviceResponse,
  LampDevicesResponse
} from '../devices/lamp-device/lamp-device-data.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  lamps: Array<LampDeviceResponse> = [];

  constructor(private lampDeviceDataService: LampDeviceDataService) { }

  ngOnInit(): void {
    this.lampDeviceDataService.getLampDevices().subscribe((res: LampDevicesResponse) => {
      this.lamps = res.lamps;
      console.log(this.lamps);
    });
  }

}
