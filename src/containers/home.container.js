import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="text-center bg-light shadow-sm rounded">
          <div className="col-md-12 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">Welcome to React-Redux-Starter</h1>
            <p className="lead font-weight-normal text-justify text-center">
              Hi there, this is a simple app bootstraped using creat-react-app. <br />
              This app uses few other powerful tools as part of react ecosystem. <br />
              This can be a starter boilerplate. which one can use to kick start a react-redux app.
              <br />
              Following are the features this app provides.
            </p>
            <div className="row justify-content-center align-items-center">
              <ul className="text-left">
                <li>Bootstrap version 4 has been used for markup purpose.</li>
                <li>Routing implemented using react-router library.</li>
                <li>State management using react-redux library.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h2 className="text-center">Todo App</h2>
            <p className="text-justify">
              This is a simple todo app, where a user can add items to be done. This app has features like displaying total tasks, tasks that are done, validation on task name,
              inline editing feature etc. This app uses HTML5 localStorage api to save and display todo items.
            </p>
            <p className="text-center">
              <Link className="btn btn-secondary" to="/todo">
                View App
              </Link>
            </p>
          </div>
          <div className="col-md-6">
            <h2 className="text-center">Virtual Keyboard</h2>
            <p className="text-justify">
              This is a super lightweight virtual keyboard component built with react having no other dependency. This component is very easy to use in a react application. This
              component themeing feature work is still in progress.
            </p>
            <p className="text-center">
              <Link className="btn btn-secondary" to="/virtual-keyboard">
                View App
              </Link>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
