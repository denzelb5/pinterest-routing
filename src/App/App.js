import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
// Only imports those 4 packages
import './App.scss';

import Home from '../components/pages/Home/Home';
import Auth from '../components/pages/Auth/Auth';
import SingleBoard from '../components/pages/SingleBoard/SingleBoard';
import NewBoard from '../components/pages/NewBoard/NewBoard';


const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  // If u r authed, run props and the rest.  if not, run auth
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};


class App extends React.Component {
  state = {
    authed: true,
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
     <Router>
       <Switch>
         <PrivateRoute path="/" exact component={Home} authed={authed} />
         <PrivateRoute path="board/new" exact component={NewBoard} authed={authed} />
         <PublicRoute path="/auth" exact component={Auth} authed={authed} />
         <PrivateRoute path="/board/:boardId" exact component={SingleBoard} authed={authed} />
         {/* :boardId is a variable being declared within the route */}
         <PrivateRoute path="/board/:boardId/pin/:pinId" />
       </Switch>
     </Router>
     </div>
    );
  }
}

export default App;