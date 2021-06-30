import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColoredLampDeviceDataService {

  constructor(private httpClient: HttpClient) {
  }

  getColoredLampDevices(): Observable<ColoredLampDevicesResponse> {
    return this.httpClient.get<ColoredLampDevicesResponse>('/api/colored_lamp_device/');
  }
}

export interface ColoredLampDevicesResponse {
  colored_lamps: Array<ColoredLampDeviceResponse>;
}

export interface ColoredLampDeviceResponse {
  id: number;
  user_id: number;
  name: string;
  description: string;
  update_url: string;
  last_red: number;
  last_green: number;
  last_blue: number;
}
