import React, {useState} from 'react';
import {Button} from 'react-materialize';


export default props => {
    const [counter, setCounter] = useState(0);
    const posBtn = props.buttonMap;
    const negBtn = props.buttonMap.reverse();

    const handleButtonClick = e => {
        e.preventDefault();
        let step = parseInt(e.target.getAttribute('step'));
        setCounter(counter + step);

    }
    const handleResetClick = e => setCounter(0);

    return (
        <div className="container">
            <div className="row counter">
                {negBtn.map(el => <Button className="col-5 z-depth-3" onClick={handleButtonClick} step={el}
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
                    >RESET</Button>
                </div>
                {posBtn.map(el => <Button className="col-5 z-depth-3" onClick={handleButtonClick} step={-el}
                                          name="add" key={-el}>{-el}</Button>)}
            </div>
        </div>
    )
}