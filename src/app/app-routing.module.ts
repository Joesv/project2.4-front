import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {AboutComponent} from './about/about.component';
import {AuthGuard} from './auth/auth.guard';

import {HelpComponent} from './help/help.component';
import {CreateDeviceComponent} from './create-device/create-device.component';
import {EditDummyComponent} from './edit-dummy/edit-dummy.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: 'about', component: AboutComponent},
  {path: 'help', component: HelpComponent},

  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},

  {path: 'edit-dummy', component: EditDummyComponent, canActivate: [AuthGuard]},
  {path: 'create-device', component: CreateDeviceComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule {
}
