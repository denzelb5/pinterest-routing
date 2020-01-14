import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pinShape from '../../../helpers/propz/pinShape';
import './Pins.scss';


class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
  }

  deletePinEvent = (e) => {
    e.preventDefault();
    const { deletePin, pin } = this.props;
    deletePin(pin.id);
  }

  render() {
    const { pin } = this.props;
    return (
      <div className="Pin col-3">
        <div className="card">
          <button className="btn btn-danger" onClick={this.deletePinEvent}>X</button>
          <img src={pin.imageUrl} className="card-img-top" alt=""/>
          <div className="card-body">
            <h6>{pin.title}</h6>
            <Link className="btn btn-warning" to={`/board/${pin.boardId}/pin/${pin.id}/edit`}>Edit</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Pin;
