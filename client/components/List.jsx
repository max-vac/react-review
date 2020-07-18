import React from 'react';
import ListEntry from './ListEntry.jsx';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ''
    }
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  handleSubmit(e) {
    console.log('clicked');
    e.preventDefault();
    if (!this.state.todo.length) {
      alert('invalid input field');
    } else {
      var currentTodos = this.state.todos;
      currentTodos.push(this.state.todo);
      this.setState({
        todos: currentTodos,
        todo: ''
      }, () => console.log(this.state))
      document.getElementById('form').reset();
    }
  }

  render() {

    return (
      <div>
        <form id='form' onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Add Todo:
            <input type="text" name="todo" onChange={this.changeHandler.bind(this)} />
            </label>
          <input type="submit" value="Add Todo"/>
        </form>
        Todos:
        {this.state.todos.map((todo, index) => <ListEntry  todo={todo} key={index}/>)}
      </div>
    )
  }
}

export default List