import React, { useRef, useState } from 'react'

const UseRef = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    function handleClick() {
        // setCount(count + 1);
        console.log(countRef.current);
        const updateCount = countRef.current + 1;
        console.log(`Clicked ${updateCount} times`);
        countRef.current++;
    }
    console.log("Render");
    return (
        <div>
            <p>You clicked  times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default UseRef