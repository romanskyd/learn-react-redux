import React from 'react';

const WeatherCard = (props) => {
  const temp = parseInt(props.weather.main.temp);
  const icon = `https://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`;
  const click = () => {
    props.getForcast(props.weather.id)
  }
  return (
    <div className="col weather-card">
      <div className="weather-card__city">{props.weather.name}<span className="weather-card__country">{props.weather.sys.country}</span></div>
      <div className="weather-card__temp">
        <img src={icon} alt={props.weather.weather[0].main} title={props.weather.weather[0].description}/>
      {temp} &#176;C
      </div>
      <div className="weather-card__options">
        <div className="weather-card__options-row">
          <div><span className="weather-card__option-name">Clouds: </span>{props.weather.clouds.all}%</div>&nbsp;&nbsp;
          <div><span className="weather-card__option-name">Pressure: </span>{parseInt(props.weather.main.pressure)} hpa</div>
        </div>
        <div className="weather-card__options-row">
          <div><span className="weather-card__option-name">Wind: </span>{props.weather.wind.speed} mps</div>
          <div><span className="weather-card__option-name">Humidity: </span>{props.weather.main.humidity} %</div>
        </div>
      </div>
      <button  type="button" className="btn btn-link" onClick={click}>Load forcast</button>
    </div>
  )
}

export default WeatherCard;