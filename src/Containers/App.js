import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from '../Components/Cockpit/Cockpit'

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

                    //<========== Methods ===========>

// Changes the name ================>

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    console.log(
      "App -> nameChangedHandler -> event.target.value ",
      event.target.value
    );

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

    this.setState({
      persons: [
        { name: "Kuta", age: 28 },
        { name: event.target.value, age: 27 },
        { name: "Kuti", age: 29 }
      ]
    });
  };

// Delete the Person ===================>

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

 
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };


//<========== Rendering===========>

  render() {
    let person = null;

    if (this.state.showPersons) {
      person = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
      };
  

    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        /> 
        {person}
      </div>
    );
    //    return React.createElement('div', {className: 'App'},
    //    React.createElement('h1', null, "Does this work now" ))
  }
}
export default App;
