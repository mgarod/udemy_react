import React from 'react';
import classes from './Person.css'

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

// import { Component } from 'react';
// class Person extends Component {
//     render() {
//         return (
//             <p>I'm {this.props.name} and I am {this.props.age}</p>
//         );
//     }
// }

export default person;
