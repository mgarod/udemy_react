import React, { Component } from 'react';
import classes from './App.module.css';
// import Person from '../components/Persons/Person/Person.js'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      {id: 'asdf1', name: 'Max', age: 28},
      {id: 'asdf2', name: 'Manu', age: 29},
      {id: 'asdf3', name: 'Stephanie', age: 26},
    ],
    showPersons: true,
    string: ""
  };

  render() {
    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler} />;
    }
    
    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
          persons={this.state.persons} />
        {persons}
      </div>
    );
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  };
  
  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();  Deep copy
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  }
}
export default App;
