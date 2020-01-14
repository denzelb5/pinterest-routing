import React from 'react';
import authData from '../../../helpers/data/authData';
import './BoardForm.scss';
import boardData from '../../../helpers/data/boardData';

class BoardForm extends React.Component {
  state = {
    boardName: '',
    boardDescription: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ boardName: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({boardDescription: e.target.value });
  }

  saveBoardEvent = (e) => {
    e.preventDefault();
    const newBoard = {
      name: this.state.boardName,
      description: this.state.boardDescription,
      uid: authData.getUid(),
    }
    // console.log('newBoard', newBoard);
    boardData.saveBoard(newBoard)
      .then(() => this.props.history.push('/'))
      .catch((error) => console.error(error));
  }

  render() {
    const {boardName, boardDescription } = this.state;
    return (
      <form className="Auth">
        <div className="form-group">
          <label htmlFor="board-name">Board Name</label>
          <input
          type="text"
          className="form-control"
          id="board-name"
          placeholder="Enter board name"
          value={boardName}
          onChange={this.nameChange}
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="board-description">Board Description</label>
          <input
          type="text"
          className="form-control"
          id="board-description"
          placeholder="Enter Board Description"
          value={boardDescription}
          onChange={this.descriptionChange}
          />
        </div>
        <button className="btn btn-warning" onClick={this.saveBoardEvent}>Save Board</button>
      </form>
    );
  }
}

export default BoardForm;