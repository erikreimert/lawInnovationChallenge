import { WeatherService } from '../weather/weather.service';
import { WeatherData } from '../weather/weatherData';

describe('WeatherService', () => {
  it('should return first five days of weather data', () => {
    const weatherService = new WeatherService();

    // Define a sample WeatherData object for testing
    const sampleData: WeatherData = {
      lat: 52.52,
      lon: 13.405,
      timezone: 'Europe/Berlin',
      timezone_offset: 3600,
      current: {
        dt: 1699402990,
        sunrise: 1699424080,
        sunset: 1699457133,
        temp: 281.12,
        feels_like: 277.88,
        pressure: 998,
        humidity: 84,
        dew_point: 278.59,
        uvi: 0,
        clouds: 40,
        visibility: 10000,
        wind_speed: 5.81,
        wind_deg: 229,
        wind_gust: 7.6,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03n',
          },
        ],
      },
      minutely: [
        {
          dt: 1699403040,
          precipitation: 0,
        },
      ],
      hourly: [
        {
          dt: 1699401600,
          temp: 281.12,
          feels_like: 278.46,
          pressure: 998,
          humidity: 84,
          dew_point: 278.59,
          uvi: 0,
          clouds: 40,
          visibility: 10000,
          wind_speed: 4.4,
          wind_deg: 231,
          wind_gust: 11.09,
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03n',
            },
          ],
          pop: 0,
        },
      ],
      daily: [
        {
          dt: 1,
          sunrise: 1699424080,
          sunset: 1699457133,
          moonrise: 1699402620,
          moonset: 1699452000,
          moon_phase: 0.84,
          temp: {
            day: 283.58,
            min: 280.77,
            max: 284.08,
            night: 280.77,
            eve: 282.66,
            morn: 281.84,
          },
          feels_like: {
            day: 282.48,
            night: 277.99,
            eve: 280.27,
            morn: 278.93,
          },
          pressure: 1013,
          humidity: 69,
          dew_point: 278.12,
          wind_speed: 5.98,
          wind_deg: 244,
          wind_gust: 11.93,
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],
          clouds: 100,
          pop: 0.19,
          uvi: 0.38,
        },
        {
          dt: 2,
          sunrise: 1699424080,
          sunset: 1699457133,
          moonrise: 1699402620,
          moonset: 1699452000,
          moon_phase: 0.84,
          temp: {
            day: 283.58,
            min: 280.77,
            max: 284.08,
            night: 280.77,
            eve: 282.66,
            morn: 281.84,
          },
          feels_like: {
            day: 282.48,
            night: 277.99,
            eve: 280.27,
            morn: 278.93,
          },
          pressure: 1013,
          humidity: 69,
          dew_point: 278.12,
          wind_speed: 5.98,
          wind_deg: 244,
          wind_gust: 11.93,
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],
          clouds: 100,
          pop: 0.19,
          uvi: 0.38,
        },
        {
          dt: 3,
          sunrise: 1699424080,
          sunset: 1699457133,
          moonrise: 1699402620,
          moonset: 1699452000,
          moon_phase: 0.84,
          temp: {
            day: 283.58,
            min: 280.77,
            max: 284.08,
            night: 280.77,
            eve: 282.66,
            morn: 281.84,
          },
          feels_like: {
            day: 282.48,
            night: 277.99,
            eve: 280.27,
            morn: 278.93,
          },
          pressure: 1013,
          humidity: 69,
          dew_point: 278.12,
          wind_speed: 5.98,
          wind_deg: 244,
          wind_gust: 11.93,
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],
          clouds: 100,
          pop: 0.19,
          uvi: 0.38,
        },
        {
          dt: 4,
          sunrise: 1699424080,
          sunset: 1699457133,
          moonrise: 1699402620,
          moonset: 1699452000,
          moon_phase: 0.84,
          temp: {
            day: 283.58,
            min: 280.77,
            max: 284.08,
            night: 280.77,
            eve: 282.66,
            morn: 281.84,
          },
          feels_like: {
            day: 282.48,
            night: 277.99,
            eve: 280.27,
            morn: 278.93,
          },
          pressure: 1013,
          humidity: 69,
          dew_point: 278.12,
          wind_speed: 5.98,
          wind_deg: 244,
          wind_gust: 11.93,
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],
          clouds: 100,
          pop: 0.19,
          uvi: 0.38,
        },
        {
          dt: 5,
          sunrise: 1699424080,
          sunset: 1699457133,
          moonrise: 1699402620,
          moonset: 1699452000,
          moon_phase: 0.84,
          temp: {
            day: 283.58,
            min: 280.77,
            max: 284.08,
            night: 280.77,
            eve: 282.66,
            morn: 281.84,
          },
          feels_like: {
            day: 282.48,
            night: 277.99,
            eve: 280.27,
            morn: 278.93,
          },
          pressure: 1013,
          humidity: 69,
          dew_point: 278.12,
          wind_speed: 5.98,
          wind_deg: 244,
          wind_gust: 11.93,
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],
          clouds: 100,
          pop: 0.19,
          uvi: 0.38,
        },
        {
          dt: 1699437600,
          sunrise: 1699424080,
          sunset: 1699457133,
          moonrise: 1699402620,
          moonset: 1699452000,
          moon_phase: 0.84,
          temp: {
            day: 283.58,
            min: 280.77,
            max: 284.08,
            night: 280.77,
            eve: 282.66,
            morn: 281.84,
          },
          feels_like: {
            day: 282.48,
            night: 277.99,
            eve: 280.27,
            morn: 278.93,
          },
          pressure: 1013,
          humidity: 69,
          dew_point: 278.12,
          wind_speed: 5.98,
          wind_deg: 244,
          wind_gust: 11.93,
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],
          clouds: 100,
          pop: 0.19,
          uvi: 0.38,
        },
        {
          dt: 1699437600,
          sunrise: 1699424080,
          sunset: 1699457133,
          moonrise: 1699402620,
          moonset: 1699452000,
          moon_phase: 0.84,
          temp: {
            day: 283.58,
            min: 280.77,
            max: 284.08,
            night: 280.77,
            eve: 282.66,
            morn: 281.84,
          },
          feels_like: {
            day: 282.48,
            night: 277.99,
            eve: 280.27,
            morn: 278.93,
          },
          pressure: 1013,
          humidity: 69,
          dew_point: 278.12,
          wind_speed: 5.98,
          wind_deg: 244,
          wind_gust: 11.93,
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],
          clouds: 100,
          pop: 0.19,
          uvi: 0.38,
        },
        {
          dt: 1699437600,
          sunrise: 1699424080,
          sunset: 1699457133,
          moonrise: 1699402620,
          moonset: 1699452000,
          moon_phase: 0.84,
          temp: {
            day: 283.58,
            min: 280.77,
            max: 284.08,
            night: 280.77,
            eve: 282.66,
            morn: 281.84,
          },
          feels_like: {
            day: 282.48,
            night: 277.99,
            eve: 280.27,
            morn: 278.93,
          },
          pressure: 1013,
          humidity: 69,
          dew_point: 278.12,
          wind_speed: 5.98,
          wind_deg: 244,
          wind_gust: 11.93,
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'overcast clouds',
              icon: '04d',
            },
          ],
          clouds: 100,
          pop: 0.19,
          uvi: 0.38,
        },
      ],
    };

    const result = weatherService.getFiveDayWeatherData(sampleData);
    const expectedResult: WeatherData["daily"] = [
      {
        dt: 1,
        sunrise: 1699424080,
        sunset: 1699457133,
        moonrise: 1699402620,
        moonset: 1699452000,
        moon_phase: 0.84,
        temp: {
          day: 283.58,
          min: 280.77,
          max: 284.08,
          night: 280.77,
          eve: 282.66,
          morn: 281.84,
        },
        feels_like: {
          day: 282.48,
          night: 277.99,
          eve: 280.27,
          morn: 278.93,
        },
        pressure: 1013,
        humidity: 69,
        dew_point: 278.12,
        wind_speed: 5.98,
        wind_deg: 244,
        wind_gust: 11.93,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: 100,
        pop: 0.19,
        uvi: 0.38,
      },
      {
        dt: 2,
        sunrise: 1699424080,
        sunset: 1699457133,
        moonrise: 1699402620,
        moonset: 1699452000,
        moon_phase: 0.84,
        temp: {
          day: 283.58,
          min: 280.77,
          max: 284.08,
          night: 280.77,
          eve: 282.66,
          morn: 281.84,
        },
        feels_like: {
          day: 282.48,
          night: 277.99,
          eve: 280.27,
          morn: 278.93,
        },
        pressure: 1013,
        humidity: 69,
        dew_point: 278.12,
        wind_speed: 5.98,
        wind_deg: 244,
        wind_gust: 11.93,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: 100,
        pop: 0.19,
        uvi: 0.38,
      },
      {
        dt: 3,
        sunrise: 1699424080,
        sunset: 1699457133,
        moonrise: 1699402620,
        moonset: 1699452000,
        moon_phase: 0.84,
        temp: {
          day: 283.58,
          min: 280.77,
          max: 284.08,
          night: 280.77,
          eve: 282.66,
          morn: 281.84,
        },
        feels_like: {
          day: 282.48,
          night: 277.99,
          eve: 280.27,
          morn: 278.93,
        },
        pressure: 1013,
        humidity: 69,
        dew_point: 278.12,
        wind_speed: 5.98,
        wind_deg: 244,
        wind_gust: 11.93,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: 100,
        pop: 0.19,
        uvi: 0.38,
      },
      {
        dt: 4,
        sunrise: 1699424080,
        sunset: 1699457133,
        moonrise: 1699402620,
        moonset: 1699452000,
        moon_phase: 0.84,
        temp: {
          day: 283.58,
          min: 280.77,
          max: 284.08,
          night: 280.77,
          eve: 282.66,
          morn: 281.84,
        },
        feels_like: {
          day: 282.48,
          night: 277.99,
          eve: 280.27,
          morn: 278.93,
        },
        pressure: 1013,
        humidity: 69,
        dew_point: 278.12,
        wind_speed: 5.98,
        wind_deg: 244,
        wind_gust: 11.93,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: 100,
        pop: 0.19,
        uvi: 0.38,
      },
      {
        dt: 5,
        sunrise: 1699424080,
        sunset: 1699457133,
        moonrise: 1699402620,
        moonset: 1699452000,
        moon_phase: 0.84,
        temp: {
          day: 283.58,
          min: 280.77,
          max: 284.08,
          night: 280.77,
          eve: 282.66,
          morn: 281.84,
        },
        feels_like: {
          day: 282.48,
          night: 277.99,
          eve: 280.27,
          morn: 278.93,
        },
        pressure: 1013,
        humidity: 69,
        dew_point: 278.12,
        wind_speed: 5.98,
        wind_deg: 244,
        wind_gust: 11.93,
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: 100,
        pop: 0.19,
        uvi: 0.38,
      },]
    expect(result).toEqual(expectedResult);
  });

  it('should return null if response is empty', () => {
    const weatherService = new WeatherService();

    // Define empty WeatherData object for testing
    const emptyData = null;

    const result = weatherService.getFiveDayWeatherData(emptyData);

    expect(result).toBeNull();
  });

  it('should return null if data is empty', () => {
    const weatherService = new WeatherService();

    const emptyData: WeatherData = {
      lat: 52.52,
      lon: 13.405,
      timezone: 'Europe/Berlin',
      timezone_offset: 3600,
      current: {
        dt: 1699402990,
        sunrise: 1699424080,
        sunset: 1699457133,
        temp: 281.12,
        feels_like: 277.88,
        pressure: 998,
        humidity: 84,
        dew_point: 278.59,
        uvi: 0,
        clouds: 40,
        visibility: 10000,
        wind_speed: 5.81,
        wind_deg: 229,
        wind_gust: 7.6,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03n',
          },
        ],
      },
      minutely: [
        {
          dt: 1699403040,
          precipitation: 0,
        },
      ],
      hourly: [
        {
          dt: 1699401600,
          temp: 281.12,
          feels_like: 278.46,
          pressure: 998,
          humidity: 84,
          dew_point: 278.59,
          uvi: 0,
          clouds: 40,
          visibility: 10000,
          wind_speed: 4.4,
          wind_deg: 231,
          wind_gust: 11.09,
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03n',
            },
          ],
          pop: 0,
        },
      ],
      daily: null,
    };

    const result = weatherService.getFiveDayWeatherData(emptyData);

    expect(result).toBeNull();
  });
});