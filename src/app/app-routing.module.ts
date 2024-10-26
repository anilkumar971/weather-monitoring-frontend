/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { SummaryComponent } from './summary/summary.component';
import { AlertComponent } from './alert/alert.component';

const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'alert', component: AlertComponent },
  { path: '', redirectTo: '/weather', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
