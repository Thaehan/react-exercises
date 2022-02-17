import { useState } from 'react';

import Counter from './Counter';
import Filter from './SearchFilter';

function Toggle() {
    const [show, setShow] = useState({
        counter: false,
        filter: false
    })

    const handleToggleCounter = () => {
        setShow({...show, counter: !show.counter})
    }

    const handleToggleFilter = () => {
        setShow({...show, filter: !show.filter})
    }

    return (
        <div>
            <div>
                <button onClick={handleToggleCounter}>Toggle Counter</button>
                {show.counter && <Counter/>}
            </div>
            <div>
                <button onClick={handleToggleFilter}>Togle Filter</button>
                {show.filter && <Filter/>}
            </div>
        </div>
    )
}

export default Toggle;