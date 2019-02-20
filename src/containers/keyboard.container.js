import React from 'react';
import { Link } from 'react-router-dom';
import ExampleOne from '../components/virtual-keyboard/examples/example-one';
import ExampleTwo from '../components/virtual-keyboard/examples/example-two';
import ExampleThree from '../components/virtual-keyboard/examples/example-three';
import ExampleFour from '../components/virtual-keyboard/examples/example-four';

class KeyboardContainer extends React.Component {
  renderExample(value) {
    switch (value) {
      case 'one':
        return <ExampleOne />;
      case 'two':
        return <ExampleTwo />;
      case 'three':
        return <ExampleThree />;
      case 'four':
        return <ExampleFour />;
      default:
        return <div className="alert alert-secondary shadow-lg rounded">Hi there, please click on one of the example button to see virtual keyboard component in action.</div>;
    }
  }
  render() {
    const { params } = this.props.match;
    return (
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="row justify-content-center align-items-center">
            <div className="card">
              <div className="card-body">
                <Link className="btn btn-outline-primary ml-2 mb-2" to="/virtual-keyboard/one">
                  Example One
                </Link>
                <Link className="btn btn-outline-primary ml-2 mb-2" to="/virtual-keyboard/two">
                  Example Two
                </Link>
                <Link className="btn btn-outline-primary ml-2 mb-2" to="/virtual-keyboard/three">
                  Example Three
                </Link>
                <Link className="btn btn-outline-primary ml-2 mb-2" to="/virtual-keyboard/four">
                  Example Four
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mt-5 px-5">{this.renderExample(params.example)}</div>
        </div>
      </div>
    );
  }
}

export default KeyboardContainer;
