import React from 'react';

export default props => {
    return (
        <div>
            <label>From: </label>
            <input
                className="w3-input"
                type="number"
                name="lower"
                value={ props.rangeLimits.lower }
                onChange={ props.handleRangeChange }
            />
            <label>To: </label>
            <input
                className="w3-input"
                type="number"
                name="upper"
                value={ props.rangeLimits.upper }
                onChange={ props.handleRangeChange }
            />
        </div>
    )
}