import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
  
  state = {
    title: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title : ''});
  }

  render() {
    return (
      <form onSubmit = {this.onSubmit} style = {{display : 'flex' }}>
        <div className="AddTodo">
          <input 
              type='text' 
              name ='title'
              style= {{ flex: '10', padding: '5px' }}
              placeholder = 'Add Todo ..'
              value = {this.state.title}
              onChange = {this.onChange} 
          />
          <input
              type='Submit'
              value='Submit'
              className='btn'
              style={{flex: 1}}
          />
        </div>
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}
