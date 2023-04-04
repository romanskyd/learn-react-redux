import consts from '../constants'

export default function(state = [], action) {
  switch (action.type) {
  case 'WEATHER_LOADED':
    return [...state, action.data];
  case 'WEATHER_LIST_LOADED':
    return [...state, ...action.data.list];
  case 'WEATHER_SEARCHED_ADD':
    return state.length < consts.itemsOnPage ? [...state, action.data] : [...state.slice(1), action.data]
  case 'WEATHER_LOAD_FAILURE':
    console.error('ERROR:', action.error)
    return state;
  default:
    return state;
  }
}