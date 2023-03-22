import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    console.log(count);

    const handleCount = () => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
        // setCount(prevState => prevState + 1)
        // setCount(prevState => prevState + 1)
        // setCount(prevState => prevState + 1)
        // setCount(prevState => prevState + 1)
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => handleCount()}>
                Click me
            </button>
        </div>
    )
}

export default Counter