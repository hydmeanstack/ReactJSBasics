import React from 'react'
import Card from './Card.jsx'

export default class Form extends React.Component{

  constructor(props){
    super(props)
  }
  
  handleSubmit(e){
    e.preventDefault();
    let loginInput = this.refs.login;
    this.props.addCard(loginInput.value);
    loginInput.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input placeholder="github login" ref="login" />
        <button>Add</button>
      </form>
    );
  }
}