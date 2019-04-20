import React, { Component } from 'react'

export default class AddTodo extends Component {

  state = {
    title : ''
  }

  onChange = (e) => {
    this.setState({
      title : e.target.value
    })
  }

  render() {
    return (
      <form>
        <input 
            type='text' 
            name ='title'
            style= {{ flex: '10', padding: '5px' }}
            placeholder = 'Add Todo ..'
            value = {this.state.title}
            onChange = {this.onChange.bind(this, this.value)} 
        />
        <input
            type='Submit'
            value='Submit'
            className='btn'
            style={{flex: 1}}
        />
      </form>
    )
  }
}
