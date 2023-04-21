import React, { useState } from 'react'
import { set } from 'react-hook-form';

const Form1 = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [error, setError] = useState(false)
    const handleInputFirstName = (e) => {
        // console.log(e.target.value);
        setFirstname(e.target.value)
    }
    const handleError = (e) => {
        if (e.target.value.length > 10) {
            setError(true);
        } else {
            setError(false)
        }
    }
    // const handleInputLastName = (e) => {
    //     setLastname(e.target.value)
    //     // console.log(e.target.value);
    // }
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        hobby: false
    })
    //ojb.property
    //ojb[property]
    const handleInputChange = (e) => {
        const type = e.target.type
        setValues({
            ...values,
            // [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value
            [e.target.name] : e.target.value
        })
        console.log(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstname);
        console.log(lastname);
        
    }
    return (
        <form action={handleSubmit}>
            <label htmlFor="firstname">First Name</label>
            <input
                type="text"
                name="firstname"
                // value={firstname}
                className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
                placeholder="Enter your first nam name"
                // onChange={handleInputFirstName}
                onChange={handleError}
            // onChange={handleInputChange}
            />
            {error ? <div className='text-red-500'>Qua 10 ky tu</div> : ""}
            <label htmlFor="lastname">Last Name</label>
            <input
                type="text"
                name="lastname"
                // value={lastname}
                className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
                placeholder="Enter your last name"
                onChange={(e) => setLastname(e.target.value)}
            // onChange={handleInputChange}
            />
            {/* <input type="checkbox" name="hobby" onChange={handleInputChange} /> */}
            <button type='submit' className='p-4 bg-blue-400 rounded-sm m-4 hover:opacity-[0.8]'
                onClick={handleSubmit}
            >Submit</button>
        </form>
    )
}

export default Form1