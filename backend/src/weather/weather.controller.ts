// src/weather/weather.controller.ts

import { Controller, Get, Query } from '@nestjs/common';
import axios from 'axios';
import { apiKey } from '../constants';
import { WeatherService } from "./weather.service";

@Controller('weather')
export class WeatherController {
    private readonly weatherService = new WeatherService();
    // Hardcoded Berlin latitude and longitude
    @Get()
    async getWeather(@Query('lat') lat= "52.5200", @Query('lon') lon="13.4050") {
        const api = apiKey; // this is here so you guys can swap the var easily
        const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api}`;

        try {
            const response = await axios.get(apiUrl);
            return this.weatherService.getFiveDayWeatherData(response.data);

        } catch (error) {
            throw new Error(`Error fetching weather data: ${error.message}`);
        }
    }
}
