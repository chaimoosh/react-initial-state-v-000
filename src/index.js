import React from 'react';
import ReactDOM from 'react-dom';
import ToggleButton from './components/ToggleButton'
import Address from './components/Address'
ReactDOM.render(
  //<ToggleButton />,
  <Address
    street="Caffrey Ave"
    city="Far Rockaway" />,
  document.getElementById('root')
)
