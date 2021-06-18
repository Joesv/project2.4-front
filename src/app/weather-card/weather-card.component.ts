import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WeatherDataService, WeatherResponse} from "../weather-data.service";

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class WeatherCardComponent implements OnInit {
  constructor(private weatherService : WeatherDataService) { }
  currentWeather: BuienRadarStation;
  precipitationForecast: precipitationEntry[];

  state = 'collapsed';

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((res: WeatherResponse) => {
      console.log(res)
    })

  /*
    this.http.get<BuienRadarResponse>("https://data.buienradar.nl/2.0/feed/json", {responseType: 'json'})
      .subscribe(data => {
        data.actual.stationmeasurements.forEach(station => {
          if(station.stationname === "Meetstation Groningen"){
            this.currentWeather = station;
          }
        })
        if(this.currentWeather != null){
          const lat = this.currentWeather.lat;
          const lon = this.currentWeather.lon;

          this.http.get(`https://gpsgadget.buienradar.nl/data/raintext?lat=${lat}&lon=${lon}`,{responseType: 'text'})
            .subscribe(data => {
              const vals = data.split("\n");
              this.precipitationForecast = [];
              vals.forEach(entry => {
                const precipitation = Math.round(10 * this.convertValue(parseInt(entry.split("|")[0])))/10;
                const time = entry.split("|")[1];
                if(time != undefined && !isNaN(precipitation)) {
                  this.precipitationForecast.push({time, precipitation});
                }
              })
            })
        }
      })
    /*if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition( pos => {
        console.log(pos)
      })
    }*/

  }
  toggle(): void {
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
  }

  convertValue(value:number): number{
    return 10**((value-109)/32)
  }

}

export interface BuienRadarResponse {
  actual: Actual;

}

export interface Actual{
  stationmeasurements: BuienRadarStation[]
}

export interface BuienRadarStation {
  id: string;
  stationid: number;
  stationname: string;
  lat: number;
  lon: number;
  regio: string;
  timestamp: string;
  weatherdescription: string;
  iconurl: string;
  graphUrl: string;
  winddirection: string;
  sunpower: number;
  temperature: number;
  groundtermperature: number;
  feeltemperature: number;
  windgusts: number;
  humidity: number;
  precipitation: number;
  rainFallLast24Hour: number;
  rainFallLastHour: number;
  winddirectiondegrees: number;
  windspeed: number;
}

export interface precipitationEntry {
  time: string;
  precipitation: number;
}
