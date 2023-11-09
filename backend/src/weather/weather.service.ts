import { Injectable } from '@nestjs/common';
import { WeatherData } from "./weatherData";

@Injectable()
export class WeatherService {
  getFiveDayWeatherData(data: WeatherData): WeatherData['daily'] | null {
    try {
      if (data && data.daily) {
        return data.daily.slice(0, 6);
      } else {
        throw new Error('Invalid data input');
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
