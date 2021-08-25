import { useState } from "react";
import PropTypes from 'prop-types';

const CounterApp = ({value = 0}) => {

    const [counter, setCounter] = useState(value);

    const addValue = () => setCounter(counter + 1);
    const subValue = () => setCounter(counter - 1);
    const resValue = () => setCounter(value); 

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={addValue}>+1</button>
            <button onClick={subValue}>-1</button>
            <button onClick={resValue}>reset</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;