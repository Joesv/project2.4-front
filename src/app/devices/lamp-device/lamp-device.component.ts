import {Component, Input, OnInit} from '@angular/core';
import {LampDeviceResponse} from './lamp-device-data.service';

@Component({
  selector: 'app-lamp-device',
  templateUrl: './lamp-device.component.html',
  styleUrls: ['./lamp-device.component.css']
})
export class LampDeviceComponent implements OnInit {
  @Input() lamp: LampDeviceResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
