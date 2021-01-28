import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Paragraph 1: {props.data1}</p>
            <p>Paragraph 2: {props.data2}</p>
            <p>User Name: {props.username}</p>
        </div>
    );
};

export default userOutput;