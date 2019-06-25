import {connect} from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import WeatherCard from './components/WeatherCard';
import WeatherForcast from './components/WeatherForcast';
import {loadWeatherByName, loadWeatherByListIds, loadForcast5DaysById} from './actions';

class App extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick (id) {
    this.props.loadForcast5DaysById(id);
  }
  componentWillMount() {
    this.props.loadWeatherByListIds('524894,491422,1496747,498817');
  }
  render() {
    const loading = this.props.weather.isLoading ? <div className="spinner-border text-primary load-spinner" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                  </div> : '';
    const weatherList = this.props.weather.items.map(item => {
      return (<WeatherCard key={item.id} weather={item} getForcast={this.handleClick}/>)
    })
    const weatherForcast = this.props.weather.forcast ? <WeatherForcast forcast={this.props.weather.forcast} /> : '';
    return (
      <div className="container">
        <div className="row">
          <div className="col mb20">
            <h1>World weather demo</h1>
          </div>
        </div>
        <div className="row card-container">{weatherList}</div>
        <div className="row">{loading}</div>
        <div className="row">
        {weatherForcast}
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({counter: state.counter, weather: state.weather}),
  (dispatch) => bindActionCreators({loadWeatherByName, loadWeatherByListIds, loadForcast5DaysById}, dispatch),
)(App);
