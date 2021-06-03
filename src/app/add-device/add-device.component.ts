import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  create(): void {
    window.alert('Created!');
  }

  cancel(): void {
    this.location.back();
  }
}
