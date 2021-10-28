import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      editTodo: null
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.toDelete = this.toDelete.bind(this);
    this.toEdit = this.toEdit.bind(this);
    this.editChange = this.editChange.bind(this);
    this.editSubmit = this.editSubmit.bind(this);
    this.toCancel = this.toCancel.bind(this);
  }

  componentDidMount() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => {
        this.setState({ todos: data });
        // console.log(this.state);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }

  addTodo(newTodo) {
    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * Do not mutate the original state array, nor any objects within it.
    * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    *
    * TIP: Use Array.prototype.concat to create a new array containing the contents
    * of the old array, plus the object returned by the server.
    */

    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)

    })
      .then(response => response.json())
      .then(data => this.setState({ todos: this.state.todos.concat(data) }))
      .catch(error => {
        console.error('Error:', error);
      });
  }

  toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * Do not mutate the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    const newCompleteStatus = {};
    const current = this.state.todos.find(todo => todo.todoId === todoId);
    newCompleteStatus.isCompleted = !current.isCompleted;

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCompleteStatus)
    })
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < this.state.todos.length; i++) {
          if (data.todoId === this.state.todos[i].todoId) {
            const newState = this.state.todos.slice(0, i).concat(data, this.state.todos.slice(i + 1));
            this.setState({ todos: newState });
            break;
          }
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }

  toDelete(todoId) {
    // console.log(todoId);
    fetch(`/api/todos/${todoId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: null
    });

    for (let i = 0; i < this.state.todos.length; i++) {
      if (todoId === this.state.todos[i].todoId) {
        const newState = this.state.todos.slice(0, i).concat(this.state.todos.slice(i + 1));
        this.setState({ todos: newState });
        break;
      }

    }
  }

  toEdit(todoId) {

    const current = this.state.todos.find(todo => todo.todoId === todoId);

    this.setState({ editTodo: current });
  }

  editChange(event) {
    const updatedEditTodo = {};
    updatedEditTodo.todoId = this.state.editTodo.todoId;
    updatedEditTodo.task = event.target.value;
    updatedEditTodo.isCompleted = false;

    this.setState({ editTodo: updatedEditTodo });

  }

  editSubmit(event) {
    event.preventDefault();
    const todoId = this.state.editTodo.todoId;

    const updatedTodo = {};
    updatedTodo.task = this.state.editTodo.task;
    updatedTodo.isCompleted = false;

    fetch(`/api/todos/${todoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTodo)
    })
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < this.state.todos.length; i++) {
          if (data.todoId === this.state.todos[i].todoId) {
            const newState = this.state.todos.slice(0, i).concat(data, this.state.todos.slice(i + 1));
            this.setState({ todos: newState, editTodo: null });
            break;
          }
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }

  toCancel() {
    this.setState({ editTodo: null });
  }

  render() {
    return (
      <div className="container">
        <div className={!this.state.editTodo ? 'modal-holder hidden' : ' modal-holder'}>
          <div className="box">
            <form onSubmit={this.editSubmit}>
              <label className="edit-label">
                New Content: <input className="edit-input" type="text" value={!this.state.editTodo ? '' : this.state.editTodo.task} onChange={this.editChange} />
              </label>
            </form>
            <button className="cancel" onClick={this.toCancel} >Cancel</button>
          </div>
        </div>
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toDelete= {this.toDelete} toEdit= {this.toEdit} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
