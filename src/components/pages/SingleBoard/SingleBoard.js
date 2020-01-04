import React from 'react';
import './SingleBoard.scss';

class SingleBoard extends React.Component {
  render() {
    const { boardId } = this.props.match.params;
    return (
      <div className="Auth">
        <h1>SingleBoard Page</h1>
        <h2>Current Board Id is {boardId}</h2>
      </div>
    );
  }
}

export default SingleBoard;
