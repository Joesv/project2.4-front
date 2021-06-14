import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';

import { HttpClientModule} from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeviceComponent } from './devices/device/device.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarComponent } from './navbar/navbar.component';
import { LampDeviceComponent } from './devices/lamp-device/lamp-device.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {WeatherCardComponent} from './weather-card/weather-card.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NotificationTESTComponent } from './notification-test/notification-test.component';

import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';


import { AddDeviceComponent } from './add-device/add-device.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ConfirmDialogComponent,
    PageNotFoundComponent,
    NavbarComponent,
    DeviceComponent,
    LampDeviceComponent,
    WeatherCardComponent,
    NotificationTESTComponent,

    LogoutComponent,
    AboutComponent,
    WorkComponent,
    ProjectsComponent,

    WeatherCardComponent,
    AddDeviceComponent

  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately:30000'
    }),
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,

    RouterModule

    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
