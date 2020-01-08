import React from 'react';
// import PropTypes from 'prop-types';
import MyNavbar from '../../shared/MyNavbar/MyNavbar';
import boardData from '../../../helpers/data/boardData';
import pinData from '../../../helpers/data/pinData';
import Pin from '../../shared/Pins/Pins';
import './SingleBoard.scss';


class SingleBoard extends React.Component {
  state = {
    board: {},
    pins: [],
  }

  getPinData = (boardId) => {
    pinData.getPinsByBoardId(boardId)
      .then((pins) => this.setState({ pins }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    const { boardId } = this.props.match.params;
    boardData.getSingleBoard(boardId)
      .then((response) => {
        this.setState({ board: response.data });
        this.getPinData(boardId);
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { boardId } = this.props.match.params;
    return (
      <div className="Auth">
        <h1>SingleBoard Page</h1>
        <div className="pins d-flex flex-wrap">
          { this.state.pins.map((pin) => <Pin key={pin.id} pin={pin} />) }
        </div>
      </div>
    );
  }
}

export default SingleBoard;
