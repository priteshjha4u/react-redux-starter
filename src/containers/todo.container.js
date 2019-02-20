import React from 'react';
import TodoAppMain from '../components/todo/TodoApp';

class TodoApp extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <TodoAppMain />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoApp;
