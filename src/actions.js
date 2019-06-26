import GetWeather from './api'

export function loadWeatherByName(city){
  return {
    type: 'PROMISE',
    actions: ['WEATHER_LOADING', 'WEATHER_LOADED', 'WEATHER_LOAD_FAILTURE'],
    promise: GetWeather.byName(city)
  }
}

export function loadWeatherByListIds(ids){
  return {
    type: 'PROMISE',
    actions: ['WEATHER_LOADING', 'WEATHER_LIST_LOADED', 'WEATHER_LOAD_FAILTURE'],
    promise: GetWeather.byListIds(ids)
  }
}

export function loadForcast5DaysById(id){
  return {
    type: 'PROMISE',
    actions: ['WEATHER_LOADING', 'FORCAST_5_DAYS_LOADED', 'WEATHER_LOAD_FAILTURE'],
    promise: GetWeather.forecast5DaysById(id)
  }
}

export function loadSearchedById(id){
  return {
    type: 'PROMISE',
    actions: ['WEATHER_LOADING', 'WEATHER_SEARCHED_ADD', 'WEATHER_LOAD_FAILTURE'],
    promise: GetWeather.byId(id)
  }
}
