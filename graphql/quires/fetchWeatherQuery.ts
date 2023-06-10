
// Single component
import { gql} from '@apollo/client';

const fetchWeatherQuery = gql  `query MyQuery(
    $current_weather:String,
    $daily:String="weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max",
    $hourly:String="temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,uv_index,uv_index_clear_sky,rain,is_day,precipitation,showers,snowfall",
    $latitude:String!,
    $longitude:String!,
    $timezone:String!
    ){   
      myQuery(
        current_weather: $current_weather
        daily: $daily
        hourly: $hourly
        latitude: $latitude
        longitude: $longitude
        timezone: $timezone
      ) {
        current_weather {
          is_day
          temperature
          time
          windspeed
          winddirection
          weathercode
        }
        daily {
          apparent_temperature_max
          apparent_temperature_min
          rain_sum
          showers_sum
          snowfall_sum
          sunrise
          sunset
          temperature_2m_max
          temperature_2m_min
          time
          uv_index_max
          weathercode
          winddirection_10m_dominant
          windgusts_10m_max
          windspeed_10m_max
        }
        daily_units {
          apparent_temperature_max
          apparent_temperature_min
          rain_sum
          showers_sum
          snowfall_sum
          sunrise
          sunset
          temperature_2m_max
          temperature_2m_min
          time
          uv_index_max
          weathercode
          winddirection_10m_dominant
          windgusts_10m_max
          windspeed_10m_max
        }
        elevation
        generationtime_ms
        hourly {
          dewpoint_2m
          apparent_temperature
          diffuse_radiation
          diffuse_radiation_instant
          direct_radiation
          direct_radiation_instant
          is_day
          precipitation
          precipitation_probability
          rain
          relativehumidity_2m
          shortwave_radiation
          shortwave_radiation_instant
          showers
          snowfall
          temperature_2m
          terrestrial_radiation
          time
          uv_index
          uv_index_clear_sky
        }
        hourly_units {
          apparent_temperature
          dewpoint_2m
          diffuse_radiation
          diffuse_radiation_instant
          direct_radiation
          direct_radiation_instant
          is_day
          precipitation
          precipitation_probability
          rain
          relativehumidity_2m
          shortwave_radiation
          shortwave_radiation_instant
          showers
          snowfall
          temperature_2m
          terrestrial_radiation
          time
          uv_index
          uv_index_clear_sky
        }
        latitude
        longitude
        timezone
        timezone_abbreviation
        utc_offset_seconds
      }
  }`;
 
  
export default fetchWeatherQuery;
