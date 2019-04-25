import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './Components/Pages//About';
import Todo from './Components/Todo';
import AddTodo from './Components/AddTodo';
import Header from './Layout/Header';
import uuid from 'uuid';
import './App.css';
import Axios from 'axios';

class App extends Component {
  state =  {
    todos : [
    ]
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res => this.setState({ todos : res.data}))
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
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    }));
  }

  addTodo = (title) => {
    console.log('Add Todo title : ', title);
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => this.setState( {
      todos: [...this.state.todos, res.data]
    }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todo todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component = {About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
