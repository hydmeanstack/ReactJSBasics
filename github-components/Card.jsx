import React from 'react'

export default class Card extends React.Component
{
  constructor(props){
    super(props);
    this.state = {};

  }

  componentDidMount(){
    var component = this;
    
    $.get("https://api.github.com/users/" + this.props.login, function(data) {
      component.setState(data);
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.avatar_url} width="80" />
        <h3>{this.state.name}</h3>
        <hr/>
      </div>
    )
  }
}