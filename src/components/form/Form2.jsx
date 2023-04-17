import React from 'react'
import useHandleChange from './useHandleChange'

const Form2 = () => {
    const { values, handleChange } = useHandleChange({
        fullname: "",
        email: "",
        hobby: false

    })
    return (
        <div>
            <div className="flex flex-col gap-y-3">
                <form action="">
                    <input
                        type="text"
                        name="fullname"
                        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
                        placeholder="Enter your name"
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
                        placeholder="Enter your email address"
                        onChange={handleChange}
                    />
                    <button className="submitp-3 rounded-lg text-white bg-blue-500">Submit</button>
                </form>
                {/* <input
                    type="text"
                    name="fullname"
                    className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
                    placeholder="Enter your name"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
                    placeholder="Enter your email address"
                    onChange={handleChange}
                />
                <input type="checkbox" name="hobby" onChange={handleChange} /> */}
            </div>

        </div>
    )
}

export default Form2