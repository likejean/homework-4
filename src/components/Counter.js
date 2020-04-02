import React, {useState} from 'react';
import { Button } from 'react-materialize';


export default props => {
    const [counter, setCounter] = useState(0);
    const posBtn = props.buttonMap;
    const negBtn = props.buttonMap.reverse();

    const handleButtonClick = e => {
        let step = parseInt(e.target.getAttribute('step'));
        setCounter(counter + step);
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="row counter">
                {negBtn.map(el => <Button className="col-5 z-depth-3" onClick={handleButtonClick} step={el}
                                          name="subtract" key={el}>{el}</Button>)}
                <h1 className="col-2 counter-label">Counter: {counter}</h1>
                {posBtn.map(el => <Button className="col-5 z-depth-3" onClick={handleButtonClick} step={-el}
                                          name="add" key={-el}>{-el}</Button>)}

            </div>
        </div>
    )
}