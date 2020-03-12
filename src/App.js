import React, { Component } from "react";
import "./App.css";
import Person from "./Person/person";
import Radium from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: "fu2n4San", name: "Shubs", age: 27 },
      { id: "lufy2San", name: "Harvin", age: 24 },
      { id: "Ha31@", name: "Max", age: 48 }
    ],
    otherstate: "Some other value",
    showPersons: false
  };

  // const [otherstate, setOtherSate] = usestate("some other value");

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value 

    console.log("App -> nameChangedHandler -> event.target.value ", event.target.value )

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );

    

    this.setState({
      persons: [
        { name: "Kuta", age: 28 },
        { name: event.target.value, age: 27 },
        { name: "Kuti", age: 29 }
      ]
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: 'white',
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let person = null;

    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[':hover']: {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    const classes = []; 
    if(this.state.persons.length <= 2){
      classes.push('red'); // classes = ['red']
    }
    if(this.state.persons.length <= 1){
      classes.push('bold'); // classes = ['red','bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {person}
      </div>
    );
    //    return React.createElement('div', {className: 'App'},
    //    React.createElement('h1', null, "Does this work now" ))
  }
}
export default Radium(App);
