// Component Code Goes Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Address extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fullAddress: `${props.street}, ${props.city}`
    }
  }
  render () {
    return (
      <div className="address">
        {this.state.fullAddress}
      </div>
    )
  }
}
