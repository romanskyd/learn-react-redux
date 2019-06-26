import fetch from 'isomorphic-fetch';
import config from './config/env'
class getWeather {
  constructor () {
    this.appId = config.appId;
  }

  byName(city) {
    return fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.appId}`)
    .then(res => res.json());
  }

  byId(id) {
    return fetch (`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${this.appId}`)
    .then(res => res.json());
  }

  byListIds(ids) {
    return fetch (`https://api.openweathermap.org/data/2.5/group?id=${ids}&units=metric&appid=${this.appId}`)
    .then(res => res.json());
  }

  forecast5DaysById (id) {
    return fetch (`https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${this.appId}`)
    .then(res => res.json());
  }

}

export default new getWeather;