import axios from 'axios';
import config from './config/env'
class GetWeather {
  constructor () {
    this.appId = config.appId;
  }

  byName(city) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.appId}`)
      .then(res => res.data);
  }

  byId(id) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${this.appId}`)
      .then(res => res.data);
  }

  byListIds(ids) {
    return axios.get(`https://api.openweathermap.org/data/2.5/group?id=${ids}&units=metric&appid=${this.appId}`)
      .then(res => res.data);
  }

  forecast5DaysById (id) {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${this.appId}`)
      .then(res => res.data);
  }

}

export default new GetWeather();