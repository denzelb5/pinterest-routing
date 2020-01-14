import React from 'react';
import authData from '../../../helpers/data/authData';
import pinData from '../../../helpers/data/pinData';
import './PinForm.scss';

class PinForm extends React.Component {
  state = {
    pinName: '',
    pinImageUrl: '',
  }

  componentDidMount() {
    const { pinId } = this.props.match.params;
    if (pinId) {
      pinData.getSinglePin(pinId)
        .then((request) => {
          const pin = request.data;
          this.setState({ pinName: pin.title, pinImageUrl: pin.imageUrl })
        })
        .catch((error) => console.error(error));
    }
  }

  pinNameChange = (e) => {
    e.preventDefault();
    this.setState({ pinName: e.target.value });
  }

  pinImageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ pinImageUrl: e.target.value });
  }

  savePinEvent = (e) => {
    e.preventDefault();
    const { boardId } = this.props.match.params;
    const newPin = {
      title: this.state.pinName,
      imageUrl: this.state.pinImageUrl,
      boardId,
      uid: authData.getUid(),
    }
    console.log(newPin);
    pinData.savePin(newPin)
    .then(() => this.props.history.push(`/board/${boardId}`))
    .catch((error) => console.error(error));
  }

  editPinEvent = (e) => {
    e.preventDefault();
    const { boardId, pinId } = this.props.match.params;
    const editPin = {
      title: this.state.pinName,
      imageUrl: this.state.pinImageUrl,
      boardId,
      uid: authData.getUid(),
    }
    console.log(editPin);
    pinData.editPin(pinId, editPin)
    .then(() => this.props.history.push(`/board/${boardId}`))
    .catch((error) => console.error(error));
  }

  render () {
    const { pinName, pinImageUrl } = this.state;
    const { pinId } = this.props.match.params;
    
    
    return (
      <form className="PinForm">
        <div className="form-group">
          <label htmlFor="pin-name">Pin Name</label>
          <input
          type="text"
          className="form-control"
          id="pin-name"
          placeholder="Enter Pin name"
          value={pinName}
          onChange={this.pinNameChange}
          />
          </div>
        <div className="form-group">
          <label htmlFor="pin-imageUrl">Pin Image</label>
          <input
          type="text"
          className="form-control"
          id="pin-description"
          placeholder="Enter pin Description"
          value={pinImageUrl}
          onChange={this.pinImageUrlChange}
          />
        </div>
        { !pinId
        ? <button className="btn btn-warning" onClick={this.savePinEvent}>Save Pin</button>
        : <button className="btn btn-primary" onClick={this.editPinEvent}>Edit Pin</button>
        }
        </form>
    );
  }
}

export default PinForm;
