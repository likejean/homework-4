import React, { useState } from 'react';
import Range from './Range';
import Counter from './Counter';
import Jumbotron from "./Jumbotron";

export default () => {
    const [ rangeLimits, setRangeLimits ] = useState({ lower : 1, upper : 1 });
    const [ leftButtonMap, setLeftButtonMap ] = useState([-1]);
    const [ rightButtonMap, setRightButtonMap ] = useState([1]);

    const handleRangeChange = e => {
        setRangeLimits({ ...rangeLimits, [ e.target.name ]: e.target.value });
        let range = parseInt(rangeLimits.upper) - parseInt(rangeLimits.lower);
        setRightButtonMap(Array(range + 1).fill().map((_, idx) => parseInt(rangeLimits.lower) + idx));
        setLeftButtonMap(Array(range + 1).fill().map((_, idx) => parseInt(rangeLimits.lower) + idx).reverse().map(i => -i));

    }
    const props = {
        rangeLimits: rangeLimits,
        handleRangeChange: handleRangeChange,
        leftButtonMap: leftButtonMap,
        rightButtonMap: rightButtonMap
    }
    return (
        <React.Fragment>
            <Jumbotron/>
            <Range {...props}/>
            <Counter {...props}/>
        </React.Fragment>
    )
}