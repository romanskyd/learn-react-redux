import GetWeather from './api'

export function loadWeatherByListIds(ids){
  return function(dispatch) {
    dispatch({type: 'LOADING_START'});
    GetWeather.byListIds(ids).then(data => {
      dispatch({type: 'LOADING_END'});
      dispatch({type:'WEATHER_LIST_LOADED', data});
    });
  }
}

export function loadForecast5DaysById(id){
  return function (dispatch) {
    dispatch({type: 'LOADING_START'})
    GetWeather.forecast5DaysById(id).then(data => {
      dispatch({type: 'LOADING_END'});
      dispatch({type:'FORECAST_5_DAYS_LOADED', data});
    });
  }
}

export function loadSearchedById(id){
  return function (dispatch) {
    dispatch({type: 'LOADING_START'});
    GetWeather.byId(id).then(data => {
      dispatch({type: 'LOADING_END'});
      dispatch({type:'WEATHER_SEARCHED_ADD', data});
    });
  }
}
