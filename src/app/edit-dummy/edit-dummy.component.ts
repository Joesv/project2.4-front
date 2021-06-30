import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EditDummyResponse} from "./edit-dummy.service";


@Component({
  selector: 'app-edit-dummy',
  templateUrl: './edit-dummy.component.html',
  styleUrls: ['./edit-dummy.component.css']
})
export class EditDummyComponent implements OnInit {

  @Input() dummy: EditDummyResponse;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

}
