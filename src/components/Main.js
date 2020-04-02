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
    const [ resetClick, setResetClick ] = useState(false);

    const handleRangeChange = e => {
        const { name, value } = e.target;
        let errors = rangeLimits.errors;
        let fieldStatus = rangeLimits.fieldStatus;
        setRangeLimits({ ...rangeLimits, [ name ]: value });
        let tempUpper = rangeLimits[ "upper" ];
        let tempLower = rangeLimits[ "lower" ];

        //User Error Validation

        switch (name) {
            case 'upper':
                errors.upper =
                    isNaN(value) || Number.isInteger(value)
                    ? 'ERROR! Input must be an INTEGER'
                    : parseInt(value) >= 10
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
                    isNaN(value) || Number.isInteger(value)
                    ? 'ERROR! Input must be an INTEGER'
                    : parseInt(value) < 1
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

    const handleCounterReset = () => setResetClick(true);

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
        resetClick: resetClick,
        setResetClick: setResetClick,
        handleRangeChange: handleRangeChange,
        handleSubmit: handleSubmit,
        handleCounterReset: handleCounterReset
    }
    return (
        <React.Fragment>
            <Range {...props}/>
            <Counter {...props}/>
        </React.Fragment>
    )
}