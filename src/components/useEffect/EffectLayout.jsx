import React, { useEffect, useLayoutEffect, useState } from 'react'

const EffectLayout = () => {
    const [count, setCount] = useState(0);
    const hanleCount = () => {
        setCount(count + 1)
        console.log(count);
    }
    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0)
        }
    }, [count])
    return (
        <div>
            <div>{count}</div>
            <button onClick={hanleCount}>Cong</button>
        </div>

    )
}

export default EffectLayout