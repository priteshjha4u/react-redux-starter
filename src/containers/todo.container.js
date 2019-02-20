import React from 'react';
import TodoAppMain from '../components/todo/TodoApp';

class TodoAppContainer extends React.Component {
  render() {
    return (
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-md-10">
          <TodoAppMain />
        </div>
      </div>
    );
  }
}

export default TodoAppContainer;
