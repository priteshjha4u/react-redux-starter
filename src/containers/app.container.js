import React, { Component, Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../components/nav.component';
import Home from '../containers/home.container';
import Spinner from '../components/spinner.component';

// lazy loaded components
const Notfound = lazy(() => import('../components/404.component'));
const TodoApp = lazy(() => import('../containers/todo.container'));
const VirtualKeyboard = lazy(() => import('../containers/keyboard.container'));
const Login = lazy(() => import('../components/login.component'));

// root app component
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navigation />
          <div className="container-fluid p-3">
            <Suspense fallback={<Spinner />}>
              <Switch>
                <Route path="/" exact render={props => <Home {...props} />} />
                <Route path="/home" render={props => <Home {...props} />} />
                <Route path="/todo" render={props => <TodoApp {...props} />} />
                <Route path="/virtual-keyboard/:example?" render={props => <VirtualKeyboard {...props} />} />
                <Route path="/login" render={props => <Login {...props} />} />
                <Route render={props => <Notfound {...props} />} />
              </Switch>
            </Suspense>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
