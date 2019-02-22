import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/app.css';
// Use BrowserRouter when the hosting server is properly configured.
import { BrowserRouter /* HashRouter */ as Router, Switch, Route } from 'react-router-dom';

// These components will be part of initial app loading
import Navigation from '../components/nav.component';
import Spinner from '../components/spinner.component';

// lazy loaded containers and components
const Home = lazy(() => import('../containers/home.container'));
const Notfound = lazy(() => import('../components/404.component'));
const TodoApp = lazy(() => import('../containers/todo.container'));
const VirtualKeyboard = lazy(() => import('../containers/keyboard.container'));
const Login = lazy(() => import('../components/login.component'));

// root app component
class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navigation {...this.props} />
          <div className="container-fluid p-3">
            <Suspense fallback={<Spinner cls="mt-5" />}>
              <Switch>
                <Route path="/" exact render={props => <Home {...props} />} />
                <Route path="/home" render={props => <Home {...props} />} />
                <Route path="/todo" render={props => <TodoApp {...props} />} />
                <Route path="/virtual-keyboard/:example?" render={props => <VirtualKeyboard {...props} />} />
                <Route path="/login" render={props => <Login {...props} {...this.props} />} />
                <Route render={props => <Notfound {...props} />} />
              </Switch>
            </Suspense>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    uiInfo: state.uiState,
    authInfo: state.auth
  };
};

export default connect(mapStateToProps)(App);
