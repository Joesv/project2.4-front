import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeathercardDataService {

  constructor(private httpClient: HttpClient) {
  }

  getWeatherCards(): Observable<any> {
    return this.httpClient.get<WeatherCards>('/api/device/weathercards');
  }
}


export interface WeatherCards {
  weatherCards: Array<WeatherCardResponse>
}

export interface WeatherCardResponse {
  id: number;
  name: string;
  locationname: string;
}
