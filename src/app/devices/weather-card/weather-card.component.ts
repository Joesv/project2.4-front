import {Component, Input, OnInit} from '@angular/core';
import {WeatherDataService, WeatherResponse} from '../../weather-data.service';
import {WeatherCardResponse} from "./weathercard-data.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() card: WeatherCardResponse
  currentWeather: WeatherResponse;
  currentTemp: string;
  feelsLikeTemp: number;
  title: string = "Current weather"
  iconUrl: string;

  constructor(private weatherService: WeatherDataService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.title = `Current weather in ${this.card.locationname}`;
    this.weatherService.getWeatherData(this.card.id).subscribe((res: WeatherResponse) => {
      this.iconUrl = `https://openweathermap.org/img/wn/${res.current.weather[0].icon}.png`;
      this.currentWeather = res;
      this.currentTemp = this.currentWeather.current.temp.toFixed(1);
      this.feelsLikeTemp = Math.floor(this.currentWeather.current.feels_like);
    });
  }

  deleteCard(): void {
    const headers = {'Content-type': 'application/json'};
    console.log("deleting")
    this.http.delete(`/api/device/weathercard/${this.card.id}`, {headers, observe: "response"})
      .subscribe(resp => {

      })
  }
}


