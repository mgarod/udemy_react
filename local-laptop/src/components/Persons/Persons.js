import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    return props.persons.map((p, i) => {
        return <Person
            click={() => props.clicked(i)}
            name={p.name}
            age={p.age}
            key={p.id}
            changed={(event) => props.changed(event, p.id)} />
    })
};

export default persons;