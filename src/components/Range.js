import React from 'react';
import {Button, TextInput} from 'react-materialize';

export default props => {
    console.log()
    return (
        <div id="inputs" className='container'>
            <label>From: </label>
            <input
                className='input-fields'
                type="text"
                name="lower"
                value={ props.rangeLimits.lower }
                onChange={ props.handleRangeChange }
                disabled = { props.rangeLimits.fieldStatus.lower }
            />
            {<span className='error'>   {props.rangeLimits.errors.lower}</span>}<br></br>
            <label>To: </label>
            <input
                className='input-fields'
                type="text"
                name="upper"
                value={ props.rangeLimits.upper }
                onChange={ props.handleRangeChange }
                disabled = { props.rangeLimits.fieldStatus.upper }
            />
            {<span className='error'>   {props.rangeLimits.errors.upper}</span>}<br></br>
            <Button
                large
                node="a"
                style={{
                    margin: 5
                }}
                waves="light"
                type="submit"
                onClick={ props.handleSubmit }
            >SUBMIT</Button>
            <Button
                large
                node="a"
                style={{
                    margin: 5
                }}
                waves="light"
                type="submit"
                onClick={ props.handleSubmit }
            >RESET</Button>
        </div>
    )
}