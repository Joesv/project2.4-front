import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {
  }


  sendNotification(title: string, options: object = {}) {
    if ('Notification' in window) {
      Notification.requestPermission((result => {
        if (result === "granted") {
          navigator.serviceWorker.ready.then(reg => {
            reg.showNotification(title, options)
              .then(() => {
                reg.update();
              })
          })
        }
      }))
    }
  }
}
