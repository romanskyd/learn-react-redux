import fetch from 'isomorphic-fetch';
class getWeather {

  byName(city) {
    return fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=241b1e20275056594402b6f674110732`)
    .then(res => res.json());
  }

  byId(id) {
    return fetch (`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=241b1e20275056594402b6f674110732`)
    .then(res => res.json());
  }

  byListIds(ids) {
    return fetch (`https://api.openweathermap.org/data/2.5/group?id=${ids}&units=metric&appid=241b1e20275056594402b6f674110732`)
    .then(res => res.json());
  }

  forecast5DaysById (id) {
    return fetch (`https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=241b1e20275056594402b6f674110732`)
    .then(res => res.json());
  }

}

export default new getWeather;