// weather-response.model.ts
export interface WeatherResponse {
    temp: number | null;
    main: {
      temp: number;
      humidity: number;
    };
    weather: Array<{
      description: string;
    }>;
    wind: {
      speed: number;
    };
    visibility: number;
    clouds: {
      all: number;
    };
  }
  