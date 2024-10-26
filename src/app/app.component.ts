/*import { Component, OnInit } from '@angular/core';
//import { WeatherService } from './services/weather.service';
import { Chart } from 'chart.js';
import { WeatherService } from './weather.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  alertThreshold: number = 35; // Default threshold
  currentTemperature: number | null = null; // Current temperature
  alertTriggered: boolean = false;

  dailySummary: any;
  weatherData: any[] = [];
  chart: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchDailySummary('Hyderabad');
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    this.weatherService.getWeather('Hyderabad').subscribe(data => {
      this.currentTemperature = data.temp;
      this.checkAlert();
      this.weatherData = data; // Assuming this data contains historical weather
      this.createChart();
    });
  }

  fetchDailySummary(city: string) {
    this.weatherService.getWeather(city).subscribe(data => {
      this.dailySummary = this.weatherService.aggregateWeatherData(data);
    });
  }

  checkAlert() {
    if (this.currentTemperature > this.alertThreshold) {
      this.alertTriggered = true;
    } else {
      this.alertTriggered = false;
    }
  }

  createChart() {
    const labels = this.weatherData.map(data => data.date);
    const temps = this.weatherData.map(data => data.temp);

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Temperature Trend',
          data: temps,
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-monitoring-frontend';
}
