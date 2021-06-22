import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.clear();
    if (this.router.url === '/home') {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/']);
      // TODO reload button after click, then remove line of code above
      /*this.router.navigateByUrl(this.router.url, { skipLocationChange: true }).then(() => {
        this.router.navigate(['/about']);
      });*/
    }
  }
}
