import React from 'react';

const charComponent = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '4px',
        border: '1px solid black',
    }
    console.log(props)
    return (
        <span style={style} onClick={props.clicked}>{props.char}</span>
    )
}

export default charComponent;