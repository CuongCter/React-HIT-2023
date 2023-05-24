import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../redux/counter';

const Counter = () => {
    
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
    const handleIncrement = () =>{
        dispatch(increment())
    }

    //write new function name handleDecrement
    return (
        <div className='flex flex-col items-center p-5 bg-white shadow w-[400px] mx-auto mt-10'>
            <h2 className='mt-5'>Count: {count}</h2>
            <div className='flex justify-between items-center gap-x-5'>
                <button className='inline-block border p-2 border-blue-200' onClick={handleIncrement}>Increment</button>
                <button className='inline-block border p-2 border-blue-200' >Decrement</button>
            </div>
        </div>
    )
}

export default Counter