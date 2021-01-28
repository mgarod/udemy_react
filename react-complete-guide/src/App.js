import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'


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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, i) => {
            return <Person
              click={this.deletePersonHandler.bind(i)}
              name={p.name}
              age={p.age}
              key={p.id}
              changed={(event) => this.nameChangedHandler(event, p.id)} />
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black',
      // }
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className="button" onClick={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }

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
