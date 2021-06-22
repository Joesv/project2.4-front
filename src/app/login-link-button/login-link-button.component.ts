import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-link-button',
  templateUrl: './login-link-button.component.html',
  styleUrls: ['./login-link-button.component.css']
})
export class LoginLinkButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginLink(): void {
    this.router.navigate(['/']);
  }
}
