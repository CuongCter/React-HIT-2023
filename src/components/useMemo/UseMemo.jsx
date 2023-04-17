import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    console.log("Start");
    function expensiveFunction(number) {
        const start = new Date();
        //Doi o day 3s
        while ((new Date() - start) < 3000); //3s = 3000ms
        console.log('End', new Date() - start, "ms");
        // console.log(number * number);
        return number;
    }

    const [count, setCount] = useState(0);
    const [num, setNum] = useState(20);
    // const number = expensiveFunction(10)
    const number = useMemo(() => {
        return expensiveFunction(10)
    }, [count])
    return (
        <div>
            <p>Count: {count}</p>
            <button className='border' onClick={() => setCount(count + 1)}>Add</button>
            <p>Number: {number}</p>
        </div>
    )
}

export default UseMemo