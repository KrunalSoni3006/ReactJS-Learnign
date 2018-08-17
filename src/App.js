import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      { name: "Kunal" },
      { name: "Deep" },
      { name: "Mayur" }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: "Dhisham" },
        { name: "Kalpesh" },
        { name: newName }
      ]
    })
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Dhisham" },
        { name: "Kalpesh" },
        { name: event.target.value }
      ]
    })
  }
  render() {
    const style={
       backgroundColor:'white',
       font:"ingerit",
       border:"1px solid #ccc",
       padding:'8px',
       cursor:"pointer"
    }
    return (
      <div className="App">
        <h1>Hello World..! i am React...!</h1>
        <button style={style} onClick={this.switchNameHandler.bind(this, "Suraj")}>Change Name</button>
        <Person name={this.state.persons[0].name}> i am Developer.</Person>
        <Person name={this.state.persons[1].name} click={this.switchNameHandler.bind(this, "Suraj")}> i am Designer.</Person>
        <Person name={this.state.persons[2].name} changed={this.nameChangedHandler}> i am BA.</Person>
      </div>
    );
  }
}

export default App;
