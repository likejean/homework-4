import React, { useState } from 'react';
import Range from './Range';
import Counter from './Counter';

export default () => {
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
    const [ buttonMap, setButtonMap ] = useState([1]);
    const [ error, setError ] = useState('');

    const handleRangeChange = e => {
        const { name, value } = e.target;
        let errors = rangeLimits.errors;
        let fieldStatus = rangeLimits.fieldStatus;
        setRangeLimits({ ...rangeLimits, [ name ]: value });
        let tempUpper = rangeLimits[ "upper" ];
        let tempLower = rangeLimits[ "lower" ];
        switch (name) {
            case 'upper':
                errors.upper =
                    parseInt(value) >= 10
                        ? 'ERROR! Must be less than 10'
                        : parseInt(value) < tempLower
                            ? 'ERROR! Upper Limit Must be GREATER than Lower Limit'
                            : ''
                ;
                fieldStatus.lower =
                        parseInt(value) < tempLower
                        ? true
                        : false
                ;

                break;
            case 'lower':
                errors.lower =
                    parseInt(value) < 1
                        ? 'ERROR! Must be greater than zero'
                        : parseInt(value) > tempUpper
                            ? 'ERROR! Lower Limit Must be Less than Upper Limit'
                            : ''
                ;
                fieldStatus.upper =
                    parseInt(value) > tempUpper
                        ? true
                        : false
                ;

                break;
            default:
                break;
        }
    }

    const handleSubmit = () => {
        let range = parseInt(rangeLimits.upper) - parseInt(rangeLimits.lower);
        range >= 0 ?
            setButtonMap(Array(range + 1).fill().map((__, idx) => parseInt(rangeLimits.lower) + idx))
            :
            setError('Invalid Inputs! Check if Upper Limit is Greater than Lower Limit');
    }
    const props = {
        rangeLimits: rangeLimits,
        buttonMap: buttonMap,
        error: error,
        handleRangeChange: handleRangeChange,
        handleSubmit: handleSubmit
    }
    return (
        <React.Fragment>
            <Range {...props}/>
            <Counter {...props}/>
        </React.Fragment>
    )
}