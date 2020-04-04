import React, {useState} from 'react';
import { Button } from 'react-materialize';
import _ from 'lodash';


export default ({ buttonMap, rangeLimits }) => {
    const [counter, setCounter] = useState(0);

    const handleButtonClick = e => {
        let step = parseInt(e.target.getAttribute('step'));
        setCounter(counter + step);
    }
    const handleResetClick = e => setCounter(0);

    return (
        <div className="container">
            <div className="row counter">
                {rangeLimits.lower && rangeLimits.upper && _.range(+rangeLimits.lower, +rangeLimits.upper + 1, 1).map(el => <Button className="col-5 z-depth-3" onClick={handleButtonClick} step={el}
                                          name="subtract" key={el}>{el}</Button>)}
                <div className="counter-container row">
                    <h2 className="col-2 counter-label">Counter: {counter}</h2>
                    <Button
                        id="reset-button"
                        large
                        node="a"
                        style={{
                            margin: 5
                        }}
                        waves="light"
                        type="submit"
                        onClick={handleResetClick}
                    >
                        RESET COUNTER
                    </Button>
                </div>
                {rangeLimits.lower && rangeLimits.upper && _.range(+rangeLimits.lower, +rangeLimits.upper + 1, 1).map(el => <Button className="col-5 z-depth-3" onClick={handleButtonClick} step={-el}
                                          name="add" key={el}>{-el}</Button>)}
            </div>
        </div>
    )
}