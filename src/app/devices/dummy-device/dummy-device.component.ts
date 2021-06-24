import {Component, Input, OnInit} from '@angular/core';
import {DummyDeviceResponse} from './dummy-device-data.service';

@Component({
  selector: 'app-dummy-device',
  templateUrl: './dummy-device.component.html',
  styleUrls: ['./dummy-device.component.css']
})
export class DummyDeviceComponent implements OnInit {

  @Input() dummy: DummyDeviceResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
