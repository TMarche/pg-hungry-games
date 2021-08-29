import React, {useState} from 'react'

import Button from "./Button"

const App = () => {
    const [count, setCount] = useState(0);
    return <div>
        <Button onClick={() => setCount(count + 1)}>+</Button>
        <Button onClick={() => setCount(count - 1)}>-</Button>
        <div>{count}</div>
    </div>
}

export default App;