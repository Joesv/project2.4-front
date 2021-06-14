import { Component, OnInit } from '@angular/core';
import {NgxMatColorPickerInputEvent} from '@angular-material-components/color-picker';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-colored-lamp',
  templateUrl: './colored-lamp.component.html',
  styleUrls: ['./colored-lamp.component.css']
})
export class ColoredLampComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  colorChanged($event: NgxMatColorPickerInputEvent): void {
    const red: number = $event.value.r / 255;
    const green: number = $event.value.g / 255;
    const blue: number = $event.value.b / 255;

    console.log(red, green, blue);

    this.http.get(`http://10.43.1.182/update?red=${red}&green=${green}&blue=${blue}`, {observe: 'response'})
      .subscribe(resp => {
        console.log(resp);
      });
    console.log(`http://10.43.1.182/update?red=${red}&green=${green}&blue=${blue}`);
  }
}
