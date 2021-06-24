import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {AboutComponent} from './about/about.component';
import {AuthGuard} from './auth/auth.guard';

import {AddDeviceComponent} from './add-device/add-device.component';
import {HelpComponent} from './help/help.component';
import {CreateLampComponent} from './create-lamp/create-lamp.component';
import {CreateDummyComponent} from './create-dummy/create-dummy.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about', component: AboutComponent},

  {path: 'help', component: HelpComponent},

  {path: 'add-device', component: AddDeviceComponent, canActivate: [AuthGuard]},
  {path: 'create-lamp', component: CreateLampComponent, canActivate: [AuthGuard]},
  {path: 'create-dummy', component: CreateDummyComponent, canActivate: [AuthGuard]},

  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
