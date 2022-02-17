import { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    const handleMinus = () => {
        setCounter(pre => pre - 1);
    }

    const handlePlus = () => {
        setCounter(pre => pre + 1);
    }
    
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleMinus}>-</button>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}

export default Counter;