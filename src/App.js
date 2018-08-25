import React, { Component } from 'react';
import classes from './App.css';
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      {id:"1", name: "Kunal" },
      {id:"2", name: "Deep" },
      {id:"3", name: "Mayur" }
    ],
    showPersons: false
  }
  nameChangedHandler = (event, id) => {
    console.log("this is test")
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }
  togglePersonHandler = () => {
    // this.state.showPersons = this.state.showPersons == true ? false : true
    this.setState({
      showPersons: !this.state.showPersons
    })
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: "ingerit",
      border: "1px solid #ccc",
      padding: '8px',
      cursor: "pointer"
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />)
          })}
          {/* <Person name={this.state.persons[0].name}> i am Developer.</Person>
          <Person name={this.state.persons[1].name} click={this.switchNameHandler.bind(this, "Suraj")}> i am Designer.</Person>
          <Person name={this.state.persons[2].name} changed={this.nameChangedHandler}> i am BA.</Person> */}
        </div>);
    }
    return (
      <div className={classes.App}>
        <h1>Hello World..! i am React...!</h1>
        {/* <button style={style} onClick={this.switchNameHandler.bind(this, "Suraj")}>Change Name</button> */}
        <button style={style} onClick={this.togglePersonHandler}>Toggle Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
