import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import boardShape from '../../../helpers/propz/boardShape';
import './Board.scss';
// import boardData from '../../../helpers/data/boardData';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
    deleteBoard: PropTypes.func,
  }

  deleteBoardEvent = (e) => {
    e.preventDefault();
    const { deleteBoard, board } = this.props;
    deleteBoard(board.id);
  }

  render() {
    const { board } = this.props;
    return (
      <div className="Board">
        <div className="card">
        <button className="btn btn-danger" onClick={this.deleteBoardEvent}>X</button>
        <h3>{board.name}</h3>
        <div className="card-body">
        <p className="card-text">{board.description}</p>
        <Link className="btn btn-success" to={`/board/${board.id}`}>View Board</Link>
      </div>
      </div>
      </div>
    );
  }
}

export default Board;
