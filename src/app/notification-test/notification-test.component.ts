import { Component, OnInit } from '@angular/core';
import { NotificationService} from "../notification.service";

@Component({
  selector: 'app-notification-test',
  templateUrl: './notification-test.component.html',
  styleUrls: ['./notification-test.component.css']
})
export class NotificationTESTComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  notify(){
    this.notificationService.sendNotification("hello world", {body: "top kek"})
  }

}
