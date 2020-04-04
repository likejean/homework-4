import React from 'react';

export default ({ rangeLimits, handleRangeChange, handleSubmit }) => {
    return (
        <div id="inputs" className='container'>
            <label>Lower Limit: </label>
            <input
                className='input-fields'
                data-testid="limit-input"
                type="text"
                name="lower"
                value={ rangeLimits.lower }
                onChange={ handleRangeChange }
                disabled = { rangeLimits.fieldStatus.lower }
            />
            {<span className='error'>{ rangeLimits.errors.lower }</span>}<br></br>
            <label>Upper Limit: </label>
            <input
                className='input-fields'
                data-testid="limit-input"
                type="text"
                name="upper"
                value={ rangeLimits.upper }
                onChange={ handleRangeChange }
                disabled = { rangeLimits.fieldStatus.upper }
            />
            {<span className='error'>{ rangeLimits.errors.upper }</span>}<br></br>
        </div>
    )
}