import React from 'react';
import { Button } from 'react-materialize';

export default props => {
    return (
        <div id="inputs" className='container'>
            <label>Lower Limit: </label>
            <input
                className='input-fields'
                type="text"
                name="lower"
                value={ props.rangeLimits.lower }
                onChange={ props.handleRangeChange }
                disabled = { props.rangeLimits.fieldStatus.lower }
            />
            {<span className='error'>{props.rangeLimits.errors.lower}</span>}<br></br>
            <label>Upper Limit: </label>
            <input
                className='input-fields'
                type="text"
                name="upper"
                value={ props.rangeLimits.upper }
                onChange={ props.handleRangeChange }
                disabled = { props.rangeLimits.fieldStatus.upper }
            />
            {<span className='error'>{props.rangeLimits.errors.upper}</span>}<br></br>
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
        </div>
    )
}