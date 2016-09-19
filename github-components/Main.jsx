import React from 'react'
import Form from './Form.jsx'
import Card from './Card.jsx'

export default class Main extends React.Component{

  constructor(props){
    super(props)
    this.state = {logins: []}
  }
  

  addCard(loginToAdd) {
    this.setState({logins: this.state.logins.concat(loginToAdd)});
  }

  render() {
    const cards = this.state.logins.map(function(login) {
      return (<Card login={login} key={login}/>);
    });
    return (
      <div>
        <Form addCard={this.addCard.bind(this)} />
        <hr />
        {cards}
      </div>
    )
  }

}
