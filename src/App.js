import React, { Component } from "react";
import "./App.css";
import Person from "./Person/person";
import { render } from "react-dom";

class App extends Component {
  State = {
    persons: [
      { name: "Shubs", age: 27 },
      { name: "Harvin", age: 24 },
      { name: "Max", age: 48 }
    ]
  };

  // const [otherState, setOtherSate] = useState("some other value");

  switchNameHandler = newName => {
    // this.state.persons[0].name = "Shubinder Virk"

    this.State({
      persons: [
        { name: "Shubinder Virk", age: 27 },
        { name: newName, age: 48 },
        { name: "Harvin Virk", age: 24 }
      ]
    });
   };

  nameChangedHandler = event => {
    this.State({
      persons: [
        { name: "Kuta", age: 28 },
        { name: event.target.value, age: 27 },
        { name: "Kuti", age: 29 }
      ]
    });
  };

  render() {
    const style = {
      bacgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler("ShubinderSinghJi!!")}>
          Switch Name
        </button>
        <Person
          name={this.State.persons[2].name}
          age={this.State.persons[2].age}
          click={this.switchNameHandler.bind(this, "Shubinder Pagani Mitar")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Rock Climbing
        </Person>
        <Person
          name={this.State.persons[0].name}
          age={this.State.persons[0].age}
        >
          My Hobbies: Jet Ski
        </Person>
        <Person
          name={this.State.persons[1].name}
          age={this.State.persons[1].age}
        />
      </div>
    );
    //    return React.createElement('div', {className: 'App'},
    //    React.createElement('h1', null, "Does this work now" ))
  }
}
export default App;
