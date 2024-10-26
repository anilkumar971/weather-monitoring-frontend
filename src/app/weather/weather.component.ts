import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  selectedCity: string = 'New York'; // Default city
  cities: string[] = ['New York', 'Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad']; // List of cities

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather(); // Fetch weather for the default city on init
  }

  // Fetch weather data based on the selected city
  getWeather() {
    this.weatherService.getWeather(this.selectedCity).subscribe(
      data => {
        this.weatherData = data; // Store the weather data
      },
      error => {
        console.error('Error fetching weather data', error);
      }
    );
  }

  // Method to update the weather data when the city changes
  onCityChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCity = selectElement.value; // Update selected city
    this.getWeather(); // Fetch weather data for the selected city
  }
}
