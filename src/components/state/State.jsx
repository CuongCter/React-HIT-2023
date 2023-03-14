import React, { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(0);
    console.log(count);
    const hanleCounter = () => {
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        setCount(prevState => prevState + 1)
        setCount(prevState => prevState + 1)
        setCount(prevState => prevState + 1)
    }
    const onDragCircle = () => {
        console.log('move')
        document.getElementById("move").style.color = "red";
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            {/* <button onClick={() => setCount(count + 1)}>
                Click me
            </button> */}
            <button onClick={hanleCounter}>
                Click me
            </button>
            {/* <div id="move" onMouseUp={onDragCircle}>aaa</div> */}
        </div>
    )
}

export default State