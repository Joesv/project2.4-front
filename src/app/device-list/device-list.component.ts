import { Component, OnInit } from '@angular/core';
import {
  LampDeviceDataService,
  LampDeviceResponse,
  LampDevicesResponse
} from '../devices/lamp-device/lamp-device-data.service';
import {
  DummyDeviceDataService,
  DummyDeviceResponse,
  DummyDevicesResponse
} from '../devices/dummy-device/dummy-device-data.service';
import {
  WeathercardDataService,
  WeatherCardResponse,
  WeatherCards
} from "../devices/weather-card/weathercard-data.service";

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  lamps: Array<LampDeviceResponse> = [];
  dummys: Array<DummyDeviceResponse> = [];
  weathercards: Array<WeatherCardResponse> = [];
  constructor(private lampDeviceDataService: LampDeviceDataService, private dummyDeviceDataService: DummyDeviceDataService, private weatherCardDataService: WeathercardDataService) { }

  ngOnInit(): void {
    this.lampDeviceDataService.getLampDevices().subscribe((res: LampDevicesResponse) => {
      this.lamps = res.lamps;
    });
    this.dummyDeviceDataService.getDummyDevices().subscribe((res: DummyDevicesResponse) => {
      this.dummys = res.dummys;
      console.log(this.dummys);
    });
    this.weatherCardDataService.getWeatherCards().subscribe((res: WeatherCards) => {
      this.weathercards = res.weatherCards;
      console.log("weather cards: ")
      console.log(res)
    })

  }

}
