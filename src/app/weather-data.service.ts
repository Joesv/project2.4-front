import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private httpClient: HttpClient) { }

  getWeatherData(id: number): Observable<WeatherResponse>{
    return this.httpClient.get<WeatherResponse>(`/api/device/weather/${id}`);
  }


}
export interface weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface rain {

}

export interface entry {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: weather[]
  rain: rain
}


export interface WeatherResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: entry;

}
