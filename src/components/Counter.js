import React, { useState } from 'react';

export default props => {
    const [ counter, setCounter ] = useState(0);
    const handleButtonClick = e => {
        let step = parseInt(e.target.getAttribute('step'));
        setCounter(counter + step);
    }
    return (
        <div>
            {props.leftButtonMap.map(el => <button onClick={handleButtonClick} step={el} name="subtract" key={el}>{el}</button>)}
            <h1>{counter}</h1>
            {props.rightButtonMap.map(el => <button onClick={handleButtonClick} step={el} name="add" key={el}>{el}</button>)}
        </div>
    )
}