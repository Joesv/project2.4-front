import { Component, OnInit } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-light-device-component',
  templateUrl: './light-device-component.component.html',
  styleUrls: ['./light-device-component.component.css']
})
export class LightDeviceComponentComponent implements OnInit {

  lightState = true;

  constructor() { }

  ngOnInit(): void {
    this.lightState = true;
  }

  switchLightState(): void {
    this.lightState = !this.lightState;
  }
}
