import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

// const validate = (values) => {
//     const error = {}
//     if (!values.firstName) {
//         error.firstName = "Required"
//     } else if (values.firstName.length > 20) {
//         error.firstName = "Must be 20 character or less"
//     }
//     if (!values.lastName) {
//         error.lastName = "Required"
//     } else if (values.lastName.length > 20) {
//         error.lastName = "Must be 20 character or less"
//     }
//     return error;
// }

const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: ""
        },
        // validate,
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('Required')
                .max(20, 'Must be 20 character or less')
                .email('Must email') ,

            lastName: Yup.string()
                .max(10, 'Must be 10 character or less')
                .required('Required'),
        }),
        onSubmit: values => {
            console.log(values);
        }
    })
    console.log(formik);
    return (
        <form
            onSubmit={formik.handleSubmit}
            className='p-1 w-full max-w-[500px] mx-auto'>
            <div className='flex flex-col gap-2 mb-5'>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id='firstName'
                    // name='firstName'
                    placeholder='Enter your first name'
                    className='p-4 rounded-md border border-gray-100'
                    // value={formik.values.firstName}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                {...formik.getFieldProps('firstName')}
                />
                {/* formik.touched.firstName */}
                {formik.touched.firstName && formik.errors.firstName ? <div className='text-sm text-red-500'>{formik.errors.firstName}</div> : null}
            </div>
            <div className='flex flex-col gap-2 mb-5'>
                <label htmlFor="firstName">Last Name</label>
                <input
                    type="text"
                    id='lastName'
                    // name='lastName'
                    placeholder='Enter your last name'
                    className='p-4 rounded-md border border-gray-100'
                    // value={formik.values.lastName}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                {...formik.getFieldProps('lastName')}
                />
                {formik.touched.lastName && formik.errors.lastName ? <div className='text-sm text-red-500'>{formik.errors.lastName}</div> : null}
            </div>
            <div>
                <button className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg">Submit</button>
            </div>
        </form>
    )
}

export default SignUpForm