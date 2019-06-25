import getWeather from './api'

export function loadWeatherByName(city){
  return {
    type: 'PROMISE',
    actions: ['WEATHER_LOADING', 'WEATHER_LOADED', 'WEATHER_LOAD_FAILTURE'],
    promise: getWeather.byName(city)
  }
}

export function loadWeatherByListIds(ids){
  return {
    type: 'PROMISE',
    actions: ['WEATHER_LOADING', 'WEATHER_LIST_LOADED', 'WEATHER_LOAD_FAILTURE'],
    promise: getWeather.byListIds(ids)
  }
}

export function loadForcast5DaysById(id){
  return {
    type: 'PROMISE',
    actions: ['WEATHER_LOADING', 'FORCAST_5_DAYS_LOADED', 'WEATHER_LOAD_FAILTURE'],
    promise: getWeather.forecast5DaysById(id)
  }
}