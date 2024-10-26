import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For handling form inputs
import { HttpClientModule } from '@angular/common/http'; // For making HTTP requests

import { AppRoutingModule } from './app-routing.module'; // For routing
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component'; // Importing the components
import { SummaryComponent } from './summary/summary.component';
import { AlertComponent } from './alert/alert.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,  // Declaring the weather component
    SummaryComponent,  // Declaring the summary component
    AlertComponent, CapitalizePipe     // Declaring the alert component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,       // Import FormsModule for handling form inputs
    HttpClientModule   // Import HttpClientModule to handle API calls
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrapping the AppComponent
})
export class AppModule { }
