

interface CurrentWeather{
    is_day:number
    temperature: number
    time: string
    weathercode: number
    winddirection: number
    windspeed: string
}
interface Daily{
    apparent_temperature_max: [number]
    apparent_temperature_min: [number]
    rain_sum: [string]
    showers_sum: [string]
    snowfall_sum: [number]
    sunrise: [string]
    sunset: [string]
    temperature_2m_max: [number]
    temperature_2m_min: [number]
    time: [string]
    // uv_index_clear_sky_max: [number]
    uv_index_max: [number]
    // uv_index_max: [number]
    weathercode: [number]
    winddirection_10m_dominant: [number]
    windgusts_10m_max: [number]
    windspeed_10m_max: [number]
}
interface DailyUnits
{
  apparent_temperature_max: string
  apparent_temperature_min: string
  rain_sum: string
  showers_sum: string
  snowfall_sum: string
  sunrise: string
  sunset: string
  temperature_2m_max: string
  temperature_2m_min: string
  time: string
  // uv_index_clear_sky_max: string
  uv_index_max: string
  weathercode: string
  winddirection_10m_dominant: string
  windgusts_10m_max: string
   windspeed_10m_max: string
}
interface Hourly {
  apparent_temperature: [number]
  dewpoint_2m: [number]
  diffuse_radiation: [number]
  diffuse_radiation_instant: [number]
  direct_radiation: [number]
  direct_radiation_instant: [number]
  is_day: [number]
  precipitation: [number]
  precipitation_probability: [number]
  rain: [number]
  relativehumidity_2m: [number]
  shortwave_radiation: [number]
  shortwave_radiation_instant: [number]
  showers: [number]
  snowfall: [number]
  temperature_2m: [number]
  terrestrial_radiation: [number]
  time: [string]
  uv_index: [number]
  uv_index_clear_sky: [number]
  }
interface  HourlyUnits {
  apparent_temperature: string
  dewpoint_2m: string
  diffuse_radiation: string
  diffuse_radiation_instant: string
  direct_radiation: string
  direct_radiation_instant: string
  is_day: string
  precipitation: string
  precipitation_probability: string
  rain: string
  relativehumidity_2m: string
  shortwave_radiation: string
  shortwave_radiation_instant: string
  showers: string
  snowfall: string
  temperature_2m: string
  terrestrial_radiation: string
  time: string
  uv_index: number
  uv_index_clear_sky: string
  }
interface Root {
    current_weather: CurrentWeather
    daily: Daily
    daily_units: DailyUnits
    elevation: number
    generationtime_ms: number
    hourly: Hourly
    hourly_units: HourlyUnits
    latitude: string
    longitude: string
    timezone: string
    timezone_abbreviation: string
    utc_offset_seconds: number
  }