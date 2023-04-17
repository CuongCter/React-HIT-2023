import React from 'react'
import { useForm } from 'react-hook-form'

const SignUpFormHook = () => {
    
    return (
        <div>
            <form className='p-1 w-full max-w-[500px] mx-auto'>
                <div className='flex flex-col gap-2 mb-5'>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id='firstName'
                        // name='firstName'
                        placeholder='Enter your first name'
                        className='p-4 rounded-md border border-gray-100'

                    />

                </div>
                <div className='flex flex-col gap-2 mb-5'>
                    <label htmlFor="firstName">Last Name</label>
                    <input
                        type="text"
                        id='lastName'
                        // name='lastName'
                        placeholder='Enter your first name'
                        className='p-4 rounded-md border border-gray-100'
                    />
                </div>
                <div>
                    <button className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SignUpFormHook