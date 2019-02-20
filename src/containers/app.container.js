import React, { Component, Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../components/nav.component';

const Notfound = lazy(() => import('../components/404.component'));
const Home = lazy(() => import('../containers/home.container'));
const TodoApp = lazy(() => import('../containers/todo.container'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navigation />
          <Suspense fallback={<h2 className="text-center">Loading...</h2>}>
            <Switch>
              <Route path="/" exact render={() => <Home />} />
              <Route path="/home" render={() => <Home />} />
              <Route path="/todo" render={() => <TodoApp />} />
              <Route render={() => <Notfound />} />
            </Switch>
          </Suspense>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
