import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <main role="main">
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">Welcome to React-Redux-App</h1>
            <p className="lead font-weight-normal">Hi there, the page which you are looking for is missing, please come back later.</p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="text-center">Todo App</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
              </p>
              <p className="text-center">
                <Link className="btn btn-secondary" to="/todo">
                  View App
                </Link>
              </p>
            </div>
            <div className="col-md-6">
              <h2 className="text-center">Virtual Keyboard</h2>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <p className="text-center">
                <Link className="btn btn-secondary" to="/virtual-keyboard">
                  View App
                </Link>
              </p>
            </div>
          </div>

          <hr />
        </div>
      </main>
    );
  }
}

export default Home;
