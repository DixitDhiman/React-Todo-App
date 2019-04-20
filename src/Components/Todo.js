import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

export default class Todo extends Component {
  render() {
    return this.props.todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} markComplete = {this.props.markComplete} delTodo={this.props.delTodo} />
      })
  }
}

// PropTypes
Todo.propTypes = {
  todos: PropTypes.array.isRequired
}