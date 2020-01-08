import React from 'react';

import './Pins.scss';


class Pin extends React.Component {
  render() {
    const { pin } = this.props;
    return (
      <div className="Pin col-3">
        <div className="card">
          <img src={pin.imageUrl} className="card-img-top" alt=""/>
          <div className="card-body">
            <h6>{pin.title}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Pin;
