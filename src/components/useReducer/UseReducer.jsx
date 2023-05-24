import axios from 'axios';
import React, { useReducer } from 'react'


const UseReducer = () => {
    const reducer = (state, action) => {
        switch (action) {
            case 'TANG':
                return state + 1;
            case 'GIAM':
                return state - 1;
            case 'XOA':
                return 0;
            default:
                return state;
        }
    }
    const reducer2 = (state, action) => {
        switch (action.type) {
            case "GAN":
                return action.data;
            default:
                return state;
        }
    }

    const initState = {
        loading: false,
        data: [],
        error: null
    }

    const userReducer = (state, action) => {
        switch (action.type) {
            case 'GET_USER_REQUEST':
                return {
                    ...state, //luc nay no co gia tri cua initState
                    loading: true //ghi de loading thanh true
                }
            case 'GET_USER_SUCCESS':
                return {
                    ...state,
                    loading: false,
                    data: action.data
                }
            case 'GET_USER_ERROR':
                return {
                    ...state,
                    data: [],
                    error: action.data
                }
        }
    }

    const [count, dispatch] = useReducer(reducer, 0)
    const [count2, dispatch2] = useReducer(reducer2, 0)
    const [user, userDispatch] = useReducer(userReducer, initState)

    const getUser =  () =>{
        userDispatch ({
            type: 'GET_USER_REQUEST'
        })

        setTimeout( async ()=>{
            try{
                const res = await axios.get("https://reqres.in/api/users")
                userDispatch ({
                    type: 'GET_USER_SUCCESS',
                    data: res.data
                })
            }
            catch{
                userDispatch ({
                    type: 'GET_USER_ERROR',
                    data: "err"
                })
            }
        },2000)
    }
    return (
        <div>
            <p>Count 1 : {count}</p>
            <button className='p-2 bg-slate-300' onClick={() => dispatch('TANG')}>Tang</button>
            <button className='p-2 bg-red-300' onClick={() => dispatch('GIAM')}>Giam</button>
            <button className='p-2 bg-blue-300' onClick={() => dispatch('XOA')}>Xoa</button>

            <p>Count 2 : {count2}</p>
            <button className='p-2 bg-slate-300' onClick={() => dispatch2(
                {
                    type: 'GAN',
                    data: 10
                }
            )}>GAN GIA TRI</button>
            <div></div>
            <button className='p-2 bg-blue-300' onClick={getUser}>GET USER</button>
            {
                user.loading ? <p>Loading ...</p> : <p>{JSON.stringify(user.data ) }</p>
            }
            
        </div>
    )
}

export default UseReducer