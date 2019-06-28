import GetWeather from './api'

export function loadWeatherByListIds(ids){
  return function(dispatch) {
    dispatch({type: 'WEATHER_LOADING'})
    GetWeather.byListIds(ids).then(data => dispatch({type:'WEATHER_LIST_LOADED', data}));
  }
}

export function loadForcast5DaysById(id){
  return function (dispatch) {
    dispatch({type: 'WEATHER_LOADING'})
    GetWeather.forecast5DaysById(id).then(data => dispatch({type:'FORCAST_5_DAYS_LOADED', data}));
  }
}

export function loadSearchedById(id){
  return function (dispatch) {
    dispatch({type: 'WEATHER_LOADING'});
    GetWeather.byId(id).then(data => dispatch({type:'WEATHER_SEARCHED_ADD', data}));
  }
}
