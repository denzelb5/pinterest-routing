import React from 'react';
import {Link} from 'react-router-dom';
import './Home.scss';

class Home extends React.Component {
  render() {
    const boardId = '12345';
    return (
      <div className="Auth">
        <h1>Home Page</h1>
        <Link className="btn btn-warning" to="/board/new">Create New Board</Link>
        <Link className="btn btn-secondary" to={`/board/${boardId}`}>Single Board</Link>
      </div>
    );
  }
}

export default Home;
