import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
// import { WeatherResponse } from './weather-response.model'; // Uncomment if you have a model

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  summary: any; // You can create a specific interface if necessary
  city: string = ''; // Selected city
  cities: string[] = ["Delhi", "Mumbai", "Chennai", "Bangalore", "Kolkata", "Hyderabad"]; // List of cities

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    // Optionally, you can fetch weather for the first city on init
    this.city = this.cities[0]; // Set default to first city
    this.getWeather(this.city); // Fetch weather for the default city
  }

  onCityChange(selectedCity: string): void {
    this.city = selectedCity; // Update selected city
    this.getWeather(this.city); // Fetch weather for the selected city
  }

  getWeather(city: string): void {
    this.weatherService.getWeather(city).subscribe(
      (data) => {
        this.summary = data; // Ensure this structure matches the API response
      },
      (error) => {
        console.error('Error fetching weather data', error);
      }
    );
  }
}
