import React from 'react';

const userInput = (props) => {
    const userInputStyle = {
        width: "60%",
        margin: "16px auto",
        border: "1px solid #eee",
        boxShadow: "0 2px 3px #ccc",
        padding: "16px",
        textAlign: "center",
    };

    return (
        <div style={userInputStyle}>
            <p>User Input:</p>
            <input type='text' onChange={props.changed} value={props.username}/>
        </div>
    );
}




export default userInput;