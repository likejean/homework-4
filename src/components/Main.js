import React, { useState } from 'react';
import Range from './Range';
import Counter from './Counter';
import Validation from '../helpers/Validation';


export default ({ name }) => {
    const [ rangeLimits, setRangeLimits ] = useState({
            lower : 1,
            upper : 1,
            errors: {
                lower: "",
                upper: ""
            },
            fieldStatus: {
                upper: false,
                lower: false
            }
        });

    const handleRangeChange = e => {
        const { name, value } = e.target;
        let errors = rangeLimits.errors;
        let fieldStatus = rangeLimits.fieldStatus;
        setRangeLimits({ ...rangeLimits, [ name ]: value });
        let tempUpper = rangeLimits[ "upper" ];
        let tempLower = rangeLimits[ "lower" ];
        Validation (name, value, fieldStatus, tempUpper, tempLower, errors);
    }

    const props = {
        rangeLimits: rangeLimits,
        handleRangeChange: handleRangeChange
    }
    return (
        <React.Fragment>
            <h1 style={{ textAlign: 'center', color: '#26a69a' }}>{ name }</h1>
            <hr></hr>
            <Range {...props}/>
            <Counter {...props}/>
        </React.Fragment>
    )
}