import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alert: boolean = false; // Flag to show alert
  selectedCity: string = 'New York'; // Default city
  cities: string[] = ['New York', 'Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad']; // List of cities

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.checkAlert(); // Check alert status on component initialization
  }

  // Method to check for temperature alerts
  checkAlert() {
    this.weatherService.getWeather(this.selectedCity).subscribe(
      data => {
        const temperature = data.main.temp; // Extract temperature from the data
        this.alert = this.weatherService.checkTemperatureAlert(temperature); // Check if alert is needed
      },
      error => {
        console.error('Error fetching weather data for alert', error);
      }
    );
  }

  // Method to update the selected city and check alert
  onCityChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCity = selectElement.value; // Update selected city
    this.checkAlert(); // Check alert for the new selected city
  }
}
