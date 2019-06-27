import React from 'react';
import { Line } from 'react-chartjs-2';

const WeatherForcast = (props) => {
  const data= {
    labels: props.forcast.list.map(el => el.dt_txt),
    datasets: [{
      label: 'temp',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderColor: 'rgb(255, 99, 132)',
      data: props.forcast.list.map(el => ({x: el.dt * 1000, y: el.main.temp})),
    }]
  }
  const options = {
    title: {
      display: true,
      text: '5 day weather forecast in ' + props.forcast.city.name
    },
    legend: {
      display: false,
      labels: {
        padding: 0
      }
    },
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          unit: 'day'
        }
      }]
    },
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          let label = data.datasets[tooltipItem.datasetIndex].label || '';
          if (label) {
            label += ': ';
          }
          label += Math.round(tooltipItem.yLabel * 10) / 10;
          label += ' °C'
          return label;
        }
      }
    }
  }

  return (
    <div className="col">
      <div className="weather-forcast">
        <div className="weather-forcast__chart">
        < Line
          data={data}
          height={300}
          options={options}
          width={0}
          />
        </div>
      </div>
    </div>
  )
}

export default WeatherForcast;