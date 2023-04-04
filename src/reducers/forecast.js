import consts from '../constants'

export default function(state = [], action) {
  switch (action.type) {
  case 'FORECAST_5_DAYS_LOADED':
    return action.data;
  case 'FORECAST_LOAD_FAILURE':
    console.error('ERROR:', action.error)
    return state;
  default:
    return state;
  }
}