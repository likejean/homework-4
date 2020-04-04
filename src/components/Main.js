import React, { useState } from 'react';
import Range from './Range';
import Counter from './Counter';


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
    const [ buttonMap, setButtonMap ] = useState({lower: [-1], upper: [1]});
    const [ error, setError ] = useState('');

    const handleRangeChange = e => {
        const { name, value } = e.target;
        let errors = rangeLimits.errors;
        let fieldStatus = rangeLimits.fieldStatus;
        setRangeLimits({ ...rangeLimits, [ name ]: value });
        let tempUpper = rangeLimits[ "upper" ];
        let tempLower = rangeLimits[ "lower" ];
        validation (name, value, fieldStatus, tempUpper, tempLower, errors);

        let range = parseInt(rangeLimits.upper) - parseInt(rangeLimits.lower);
        let arrRight = [];
        let arrLeft = [];
        for (let i = parseInt(rangeLimits.lower); i <= parseInt(rangeLimits.lower) + range; i++){
            arrRight.push(i);
            arrLeft.push(-(parseInt(rangeLimits.lower) + parseInt(rangeLimits.lower) + range - i));
        }
        range >= 0 ?
            setButtonMap({lower: arrLeft, upper: arrRight})
            :
            setError('Invalid Inputs! Check if Upper Limit is Greater than Lower Limit');

        //User Error Validation
    }

    const validation =  (name, value, fieldStatus, tempUpper, tempLower, errors) => {
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


    const props = {
        rangeLimits: rangeLimits,
        buttonMap: buttonMap,
        error: error,
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