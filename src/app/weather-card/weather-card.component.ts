import { Component, OnInit } from '@angular/core';
import {WeatherDataService, WeatherResponse} from '../weather-data.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
})
export class WeatherCardComponent implements OnInit {
  constructor(private weatherService: WeatherDataService) { }
  currentWeather: WeatherResponse;
  iconUrl: string;

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((res: WeatherResponse) => {
      this.iconUrl = `https://openweathermap.org/img/wn/${res.current.weather[0].icon}.png`;
      this.currentWeather = res;
    });
  }
}


