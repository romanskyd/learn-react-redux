import {connect} from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import WeatherCard from './components/WeatherCard';
import WeatherForecast from './components/WeatherForecast';
import SearchPanel from './components/SearchPanel';
import * as actionCreators from './actions';
import searchHelper from './helpers/search.helper';

class App extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSelectedCity = this.handleSelectedCity.bind(this);
    this.items = [];
    this.state = {searched: []};
  }
  handleClick (id) {
    this.props.actions.loadForecast5DaysById(id);
  }
  handleSearchInput(value) {
    this.setState({searched: searchHelper.searchByName(value)});
  }
  handleSelectedCity(id) {
    this.setState({searched: []});
    this.props.actions.loadSearchedById(id);
  }
  componentWillMount() {
    this.props.actions.loadWeatherByListIds('524894,491422,1496747,498817');
  }
  render() {
    const loading = this.props.loading ? <div className="loading"><div className="spinner-border text-primary load-spinner" role="status">
                                          <span className="sr-only">Loading...</span>
                                        </div></div> : '';
    const weatherList = this.props.weather.map(item => {
      return (<WeatherCard key={item.id} weather={item} getForecast={this.handleClick}/>)
    })
    const weatherForecast = this.props.forecast ? <WeatherForecast forecast={this.props.forecast} /> : '';
    return (
      <div className="container app-container">
        <div className="row">
          <div className="col mb20 mt20">
            <h1>World weather demo</h1>
          </div>
        </div>
        <div className="row">
          <SearchPanel items={this.state.searched} handler={this.handleSearchInput} selectHandler={this.handleSelectedCity}/>
        </div>
        <div className="row">{weatherList}</div>
        <div className="row">{weatherForecast}</div>
        {loading}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    weather: state.weather,
    loading: state.loading,
    forecast: state.forecast
  }),
  (dispatch) => ({actions: bindActionCreators(actionCreators, dispatch)}),
)(App);
