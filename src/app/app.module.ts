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
import { MatDividerModule } from '@angular/material/divider';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt-interceptor';

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
import { WeatherCardComponent } from './devices/weather-card/weather-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NotificationTESTComponent } from './notification-test/notification-test.component';

import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { MatSelectModule } from '@angular/material/select';
import { LoginLinkButtonComponent } from './login-link-button/login-link-button.component';
import { HelpComponent } from './help/help.component';
import { FooterComponent } from './footer/footer.component';

import { MatOptionModule } from '@angular/material/core';
import { CreateLampComponent } from './create-lamp/create-lamp.component';
import { DeviceListComponent } from './device-list/device-list.component';

import { CommonModule } from '@angular/common';
import { CreateDummyComponent } from './create-dummy/create-dummy.component';
import { DummyDeviceComponent } from './devices/dummy-device/dummy-device.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { CreateWeathercardComponent } from './create-weathercard/create-weathercard.component';
import {MatSlider, MatSliderModule} from "@angular/material/slider";


import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import {FlexLayoutModule} from "@angular/flex-layout";
import { ColoredLampDeviceComponent } from './devices/colored-lamp-device/colored-lamp-device.component';
import { CreateColoredLampComponent } from './create-colored-lamp/create-colored-lamp.component';
import {ColorPickerModule} from "ngx-color-picker";
import { CreateDeviceComponent } from './create-device/create-device.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ConfirmDialogComponent,
    WeatherCardComponent,
    NotificationTESTComponent,
    LogoutComponent,
    AboutComponent,
    WeatherCardComponent,
    LoginLinkButtonComponent,
    HelpComponent,
    FooterComponent,
    CreateLampComponent,
    DeviceListComponent,
    NavbarComponent,
    DeviceComponent,
    LampDeviceComponent,
    CreateDummyComponent,
    DummyDeviceComponent,
    CreateWeathercardComponent,
    ColoredLampDeviceComponent,
    CreateColoredLampComponent,
    CreateDeviceComponent,

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
    RouterModule,
    MatSelectModule,
    CommonModule,
    MatSlideToggleModule,
    MatSliderModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule,
    FlexLayoutModule,
    ColorPickerModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
