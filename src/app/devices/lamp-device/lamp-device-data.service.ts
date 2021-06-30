import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LampDeviceDataService {

  constructor(private httpClient: HttpClient) {
  }

  getLampDevices(): Observable<LampDevicesResponse> {
    return this.httpClient.get<LampDevicesResponse>('/api/lamp_device/');
  }
}

export interface LampDevicesResponse {
  lamps: Array<LampDeviceResponse>;
}

export interface LampDeviceResponse {
  id: number;
  user_id: number;
  name: string;
  description: string;
  on_url: string;
  off_url: string;
  last_status: string;
}
