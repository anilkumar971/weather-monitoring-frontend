/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }
}*/


// src/app/services/weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from './weather-response.model'; // Ensure this model matches your API response structure

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = 'http://api.openweathermap.org/data/2.5/weather'; // OpenWeatherMap API URL
  private apiKey = '442ebd0c16ce27395a3d27f08eb77ff2'; // Your OpenWeatherMap API key

  constructor(private http: HttpClient) {}

  // Fetch weather data for a city
  getWeather(city: string): Observable<WeatherResponse> {
    const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`; // Fetch weather in Celsius
    return this.http.get<WeatherResponse>(url);
  }

  // Fetch daily weather summary for a given date (you may need to implement this in your backend)
  getWeatherSummary(date: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/summary/${date}`); // Update as per your backend API design
  }

  // Check if temperature triggers an alert
  checkTemperatureAlert(temp: number): boolean {
    const threshold = 35; // Example threshold for alert
    return temp >= threshold;
  }
}
