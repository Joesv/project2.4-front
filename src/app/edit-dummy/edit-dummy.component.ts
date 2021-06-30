import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-edit-dummy',
  templateUrl: './edit-dummy.component.html',
  styleUrls: ['./edit-dummy.component.css']
})
export class EditDummyComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
