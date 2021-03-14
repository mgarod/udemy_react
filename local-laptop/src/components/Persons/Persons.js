import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    return props.persons.map((p, i) => {
        return <Person
            click={this.deletePersonHandler.bind(i)}
            name={p.name}
            age={p.age}
            key={p.id}
            changed={(event) => this.nameChangedHandler(event, p.id)} />
    })
};