import React, { Component } from 'react';
import Todo from './Components/Todo';
import AddTodo from './Components/AddTodo';
import Header from './Layout/Header';
import './App.css';

class App extends Component {
  state =  {
    todos : [
      {
        id : 1,
        title : 'I need an Laptop',
        completed : false,
        isDeleted : false
      },
      {
        id : 2,
        title : 'I going to buy a table',
        completed : false,
        isDeleted : false
      },
      {
        id : 3,
        title : 'Internet connection',
        completed : true,
        isDeleted : false
      },
      {
        id : 4,
        title : 'Bike servicing',
        completed : false,
        isDeleted : false
      },
    ]
  }

  // Toggle complete
  markComplete = (id) => {
     this.setState( {
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo
      })
     })
  }

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id
      )]
    })
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <Header />
          <AddTodo />
          <Todo todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
