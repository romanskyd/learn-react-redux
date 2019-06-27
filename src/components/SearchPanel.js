import React from 'react';

const SearchPanel = function (props) {
  const changeHandler = (e) => {
    props.handler(e.target.value);
  }
  const selectHandler = (id, name) => {
    return function () {
      props.selectHandler(id);
      document.getElementById('search-input').value = name;
    }
  }
  const clearInput = () => {
    document.getElementById('search-input').value = '';
  }
  return (
    <div className="col mb20">
      <div className="input-group search-panel">
        <input type="text" id="search-input" onChange={changeHandler} onFocus={clearInput} className="form-control" placeholder="Enter city name... (Search in demo mode, without api)" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <ul className="list-group list-group-flush search-panel__item-list">
          {props.items.map(el => <li className="list-group-item" key={el.id} onClick={selectHandler(el.id, el.name)}>{el.name} ({el.country})</li>)}
        </ul>
      </div>
    </div>
  )
}

export default SearchPanel;