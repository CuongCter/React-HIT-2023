import React, { useState } from 'react'

const Form = () => {

    const [values, setValues] = useState({
        fullname: "",
        email: "",
        hobby: false
    })
    // console.log(values);
    const handleInputChange = (e) => {
        // e.preventDefault();
        const type = e.target.type;
        setValues({
            ...values,
            [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
        })
        console.log(e.target.value);
    }
    return (
        <div>
            <div className="flex flex-col gap-y-3">
                <input
                    type="text"
                    name="fullname"
                    className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
                    placeholder="Enter your name"
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
                    placeholder="Enter your email address"
                    onChange={handleInputChange}
                />
                <input type="checkbox" name="hobby" onChange={handleInputChange} />
            </div>

        </div>
    )
}

export default Form