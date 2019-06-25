import React from 'react';

const SearchPanel = (props) => {
  const click = () => {
    //props.getForcast(props.weather.id)
  }
  return (
    <div className="col mb20">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter city name..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
      </div>
    </div>
  )
}

export default SearchPanel;