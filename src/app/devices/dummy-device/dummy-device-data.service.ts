import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DummyDeviceDataService {

  constructor(private httpClient: HttpClient) { }
  getDummyDevices(): Observable<DummyDevicesResponse>{
    return this.httpClient.get<DummyDevicesResponse>('/api/dummy_device/');
  }
}

export interface DummyDevicesResponse {
  dummys: Array<DummyDeviceResponse>;
}

export interface DummyDeviceResponse {
  id: number;
  dummy_type: string;
  user_id: number;
  name: string;
  description: string;
  value: number;
}
