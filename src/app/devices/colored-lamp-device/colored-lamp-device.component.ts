import {Component, Input, OnInit} from '@angular/core';
import {ColoredLampDeviceResponse} from "./colored-lamp-device-data.service";
import {HttpClient} from "@angular/common/http";
import {NgxMatColorPickerComponent} from "@angular-material-components/color-picker";

@Component({
  selector: 'app-colored-lamp-device',
  templateUrl: './colored-lamp-device.component.html',
  styleUrls: ['./colored-lamp-device.component.css']
})
export class ColoredLampDeviceComponent implements OnInit {
  @Input() coloredLamp: ColoredLampDeviceResponse;

  picker: NgxMatColorPickerComponent;
  color: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.color = `rgb(${this.coloredLamp.last_red}, ${this.coloredLamp.last_green}, ${this.coloredLamp.last_blue})`;
  }

  changeColor(): void {
    const colorInt32 = parseInt(this.color.substr(1), 16);
    // tslint:disable-next-line:no-bitwise
    const red = (colorInt32 >> 16) & 0xFF;
    // tslint:disable-next-line:no-bitwise
    const green = (colorInt32 >> 8) & 0xFF;
    // tslint:disable-next-line:no-bitwise
    const blue = (colorInt32 >> 0) & 0xFF;

    this.coloredLamp.last_red = red;
    this.coloredLamp.last_green = green;
    this.coloredLamp.last_blue = blue;

    const headers = {'content-type': 'application/json'};
    this.http.put(`/api/colored_lamp_device/${this.coloredLamp.id}`, {red, green, blue}, {headers, observe: 'response'})
      .subscribe(resp => {
        console.log('Updated colored lamp!');
        console.log(resp);
      });
  }

  deleteColoredLamp(): void {
    const headers = {'content-type': 'application/json'};
    this.http.delete(`/api/colored_lamp_device/${this.coloredLamp.id}`, {headers, observe: 'response'})
      .subscribe(resp => {
        console.log('Deleted colored lamp!');
        console.log(resp);
      });
  }
}
